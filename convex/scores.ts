import { api, internal } from "./_generated/api";
import { internalAction } from "./_generated/server";
import {
  buildPopulationFromInputs,
  computeDeveloperImpactScore,
  MetricsInput,
} from "./lib/dis";
import { Doc, Id } from "./_generated/dataModel";

export const recalculateScores = internalAction({
  handler: async (ctx) => {
    const allProfiles = await ctx.runQuery(api.profiles.getProfiles);

    const inputs = allProfiles
      .map((p: Doc<"profiles">) => {
        // Map Doc<"profiles"> to MetricsInput, checking for optional fields
        if (
          !p.commitTimestamps ||
          !p.mergedPrTimestamps ||
          !p.starTimestamps ||
          p.public_repos === undefined ||
          p.followers === undefined ||
          p.prMerged === undefined ||
          p.prTotal === undefined ||
          p.issuesClosed === undefined ||
          p.languageBreadth === undefined
        ) {
          return null;
        }
        const data: MetricsInput = {
          commitTimestamps: p.commitTimestamps,
          mergedPrTimestamps: p.mergedPrTimestamps,
          starTimestamps: p.starTimestamps,
          activeRepos: p.public_repos,
          followers: p.followers,
          prMerged: p.prMerged,
          prTotal: p.prTotal,
          issuesClosed: p.issuesClosed,
          languageBreadth: p.languageBreadth,
        };
        return { id: p._id, data };
      })
      .filter(
        (item): item is { id: Id<"profiles">; data: MetricsInput } =>
          item !== null,
      );

    if (inputs.length === 0) {
      console.log("No profiles with complete metrics to score.");
      return;
    }

    const population = buildPopulationFromInputs(inputs.map((i) => i.data));

    for (const profileInput of inputs) {
      const { score0to100 } = computeDeveloperImpactScore(
        profileInput.data,
        population,
      );
      await ctx.runMutation(internal.profiles.updateProfileScore, {
        profileId: profileInput.id,
        score: score0to100,
      });
    }

    console.log(`Recalculated scores for ${inputs.length} profiles.`);
  },
});
