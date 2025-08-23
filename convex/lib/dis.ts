/**
 * Developer Impact Score (DIS)
 * ---------------------------------
 * This module implements the algorithm sketched in your photo.
 * It converts raw GitHub-style signals into percentiles, applies weights,
 * and returns a 0–100 score plus fully transparent breakdowns.
 *
 * Core formulas (from the note):
 *
 * 1) Recency–decayed event count
 *    m̂ = Σ_{i=1..n} 2^( -Δt_i / T_half )
 *       where Δt_i is the age (in days) of event i
 *             T_half is the chosen half-life in days
 *
 * 2) Smoothed PR acceptance rate
 *    Let PR_m = merged PRs, PR_t = total PRs
 *    p̂_R = (PR_m + priorSuccess) / (PR_t + priorTotal)
 *    (the note shows +25 in the denominator; set priorTotal = 25 by default;
 *     priorSuccess is left configurable; 5 is a common light prior)
 *
 * 3) Percentile transform (empirical CDF)
 *    For any metric m with value v and a peer population {M_j}:
 *    p_m = F_m(v) = (1/N) * Σ 1(M_j ≤ v)
 *    Optionally multiply by a confidence factor conf in [0,1]
 *    to down-weight very small evidence sizes.
 *
 * 4) Weighted sum and final score
 *    s = Σ_k w_k * p_k
 *    Score = 100 * s
 *
 * Metrics and weights (sum to 1.00):
 *    P_C  commits (recency–decayed)                  w=0.12
 *    P_R  active repos (count)                        w=0.10
 *    P_F  followers                                   w=0.10
 *    P_PM merged PRs (recency–decayed)                w=0.18
 *    P_PA PR acceptance (smoothed rate)               w=0.13
 *    P_S  stars (recency–decayed)                     w=0.12
 *    P_IC issues closed (count)                       w=0.10
 *    P_L  language breadth (distinct languages)       w=0.15
 *
 * How to use:
 *  - Provide your user's raw inputs in `MetricsInput`.
 *  - Provide population benchmarks (arrays from your dataset) in `PopulationBenchmark`.
 *  - Call `computeDeveloperImpactScore(...)` to get the score and the full breakdown.
 */

// ----------------------------- Types ---------------------------------------

export type MetricsInput = {
  // Timestamps are milliseconds since epoch (Date.now()).
  commitTimestamps: number[]; // all commits (use at least last ~2y)
  mergedPrTimestamps: number[]; // times of merged PRs
  starTimestamps: number[]; // times of stars received
  activeRepos: number; // count of currently active repos
  followers: number; // GitHub followers
  prMerged: number; // merged PRs in lifetime/window
  prTotal: number; // total PRs in lifetime/window
  issuesClosed: number; // closed issues (count, same window as others)
  languageBreadth: number; // number of distinct languages contributed to
};

export type PopulationBenchmark = {
  // For each metric, provide a population sample (for percentiles).
  // These should be after any transforms you intend to apply (e.g., decayed counts).
  commitDecayed: number[];
  mergedPrsDecayed: number[];
  starsDecayed: number[];
  activeRepos: number[];
  followers: number[];
  prAcceptance: number[]; // already smoothed acceptance rates from peers
  issuesClosed: number[];
  languageBreadth: number[];
};

export type Weights = {
  P_C: number;
  P_R: number;
  P_F: number;
  P_PM: number;
  P_PA: number;
  P_S: number;
  P_IC: number;
  P_L: number;
};

export type HalfLives = {
  commits: number; // days
  mergedPrs: number; // days
  stars: number; // days
};

export type Priors = {
  priorSuccess: number; // numerator pseudo-successes (default 5)
  priorTotal: number; // denominator pseudo-counts (default 25)
};

export type ScoreBreakdown = {
  percentiles: {
    P_C: number;
    P_R: number;
    P_F: number;
    P_PM: number;
    P_PA: number;
    P_S: number;
    P_IC: number;
    P_L: number;
  };
  weighted: {
    P_C: number;
    P_R: number;
    P_F: number;
    P_PM: number;
    P_PA: number;
    P_S: number;
    P_IC: number;
    P_L: number;
  };
  weights: Weights;
  score0to1: number; // s in [0,1]
  score0to100: number; // 100 * s
};

// ----------------------- Utility: arrays and dates -------------------------

function daysSince(ts: number, now: number): number {
  const msPerDay = 24 * 60 * 60 * 1000;
  return (now - ts) / msPerDay;
}

// Stable percentile (empirical CDF). Returns value in [0,1].
export function empiricalPercentile(
  value: number,
  population: number[],
): number {
  if (!population || population.length === 0) return 0.5; // neutral if no ref
  // Binary search on sorted copy
  const arr = population.slice().sort((a, b) => a - b);
  // find index of last element <= value
  let lo = 0,
    hi = arr.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] <= value) lo = mid + 1;
    else hi = mid;
  }
  return lo / arr.length;
}

// Recency-decayed event count using half-life in days:
// m̂ = Σ 2^( -Δt / T_half )
export function decayedCount(
  timestamps: number[],
  halfLifeDays: number,
  now: number = Date.now(),
): number {
  if (!timestamps || timestamps.length === 0) return 0;
  const ln2 = Math.log(2);
  const denom = halfLifeDays;
  return timestamps.reduce((sum, ts) => {
    const ageDays = daysSince(ts, now);
    const weight = Math.exp(-ln2 * (ageDays / denom));
    return sum + weight;
  }, 0);
}

// Smoothed rate with Beta prior: (success + priorSuccess) / (total + priorTotal)
export function smoothedRate(
  success: number,
  total: number,
  prior: Priors = { priorSuccess: 5, priorTotal: 25 },
): number {
  const { priorSuccess, priorTotal } = prior;
  return (success + priorSuccess) / Math.max(1, total + priorTotal);
}

// Evidence confidence multiplier in [0,1]. Increases with evidence up to 1.
// conf = 1 - exp(-e / k) with k as softness. For PRs we set k=20 by default.
export function confidenceFromEvidence(
  evidence: number,
  k: number = 20,
): number {
  return 1 - Math.exp(-(evidence / Math.max(1, k)));
}

// -------------------------- Defaults --------------------------------------

export const DEFAULT_WEIGHTS: Weights = {
  P_C: 0.12,
  P_R: 0.1,
  P_F: 0.1,
  P_PM: 0.18,
  P_PA: 0.13,
  P_S: 0.12,
  P_IC: 0.1,
  P_L: 0.15,
};

export const DEFAULT_HALFLIVES: HalfLives = {
  commits: 90, // feel free to tune
  mergedPrs: 120,
  stars: 180,
};

export const DEFAULT_PRIORS: Priors = {
  priorSuccess: 5, // corresponds to the “+S” in the numerator
  priorTotal: 25, // matches the “+25” in the denominator from the note
};

// ------------------------- Main computation --------------------------------

export function computeDeveloperImpactScore(
  input: MetricsInput,
  population: PopulationBenchmark,
  opts?: {
    weights?: Weights;
    halfLives?: HalfLives;
    priors?: Priors;
    now?: number;
    // Optional confidence multipliers for metrics that depend on scarce data
    prConfidenceK?: number; // softness for PR acceptance confidence
  },
): ScoreBreakdown {
  const weights = opts?.weights ?? DEFAULT_WEIGHTS;
  const halfLives = opts?.halfLives ?? DEFAULT_HALFLIVES;
  const priors = opts?.priors ?? DEFAULT_PRIORS;
  const now = opts?.now ?? Date.now();
  const prK = opts?.prConfidenceK ?? 20;

  // Transform raw -> feature values
  const m_commits = decayedCount(
    input.commitTimestamps,
    halfLives.commits,
    now,
  );
  const m_mergedPrs = decayedCount(
    input.mergedPrTimestamps,
    halfLives.mergedPrs,
    now,
  );
  const m_stars = decayedCount(input.starTimestamps, halfLives.stars, now);
  const m_prAcceptance = smoothedRate(input.prMerged, input.prTotal, priors);

  // Percentiles (empirical CDFs)
  let P_C = empiricalPercentile(m_commits, population.commitDecayed);
  let P_PM = empiricalPercentile(m_mergedPrs, population.mergedPrsDecayed);
  let P_S = empiricalPercentile(m_stars, population.starsDecayed);
  let P_R = empiricalPercentile(input.activeRepos, population.activeRepos);
  let P_F = empiricalPercentile(input.followers, population.followers);
  let P_PA = empiricalPercentile(m_prAcceptance, population.prAcceptance);
  let P_IC = empiricalPercentile(input.issuesClosed, population.issuesClosed);
  let P_L = empiricalPercentile(
    input.languageBreadth,
    population.languageBreadth,
  );

  // Optional confidence down-weighting (matches the “[..]*(1 - r_m)” idea in the note)
  // Here we *increase* the contribution with more evidence:
  const prConf = confidenceFromEvidence(input.prTotal, prK);
  P_PA = P_PA * prConf;

  // Weighted sum
  const weighted = {
    P_C: weights.P_C * P_C,
    P_R: weights.P_R * P_R,
    P_F: weights.P_F * P_F,
    P_PM: weights.P_PM * P_PM,
    P_PA: weights.P_PA * P_PA,
    P_S: weights.P_S * P_S,
    P_IC: weights.P_IC * P_IC,
    P_L: weights.P_L * P_L,
  };

  const s =
    weighted.P_C +
    weighted.P_R +
    weighted.P_F +
    weighted.P_PM +
    weighted.P_PA +
    weighted.P_S +
    weighted.P_IC +
    weighted.P_L;

  return {
    percentiles: { P_C, P_R, P_F, P_PM, P_PA, P_S, P_IC, P_L },
    weighted,
    weights,
    score0to1: s,
    score0to100: 100 * s,
  };
}

// ---------------------- Batch helpers (optional) ---------------------------

export function buildPopulationFromInputs(
  inputs: MetricsInput[],
  opts?: { halfLives?: HalfLives; priors?: Priors; now?: number },
): PopulationBenchmark {
  const halfLives = opts?.halfLives ?? DEFAULT_HALFLIVES;
  const priors = opts?.priors ?? DEFAULT_PRIORS;
  const now = opts?.now ?? Date.now();

  const commitDecayed: number[] = [];
  const mergedPrsDecayed: number[] = [];
  const starsDecayed: number[] = [];
  const activeRepos: number[] = [];
  const followers: number[] = [];
  const prAcceptance: number[] = [];
  const issuesClosed: number[] = [];
  const languageBreadth: number[] = [];

  for (const inp of inputs) {
    commitDecayed.push(
      decayedCount(inp.commitTimestamps, halfLives.commits, now),
    );
    mergedPrsDecayed.push(
      decayedCount(inp.mergedPrTimestamps, halfLives.mergedPrs, now),
    );
    starsDecayed.push(decayedCount(inp.starTimestamps, halfLives.stars, now));
    activeRepos.push(inp.activeRepos);
    followers.push(inp.followers);
    prAcceptance.push(smoothedRate(inp.prMerged, inp.prTotal, priors));
    issuesClosed.push(inp.issuesClosed);
    languageBreadth.push(inp.languageBreadth);
  }

  return {
    commitDecayed,
    mergedPrsDecayed,
    starsDecayed,
    activeRepos,
    followers,
    prAcceptance,
    issuesClosed,
    languageBreadth,
  };
}

export function rankUsersByScore(
  inputs: { id: string; data: MetricsInput }[],
  opts?: {
    weights?: Weights;
    halfLives?: HalfLives;
    priors?: Priors;
    now?: number;
    prConfidenceK?: number;
  },
) {
  const population = buildPopulationFromInputs(
    inputs.map((x) => x.data),
    opts,
  );
  const rows = inputs.map((row) => {
    const res = computeDeveloperImpactScore(row.data, population, opts);
    return { id: row.id, score: res.score0to100, breakdown: res };
  });
  rows.sort((a, b) => b.score - a.score);
  return rows;
}
