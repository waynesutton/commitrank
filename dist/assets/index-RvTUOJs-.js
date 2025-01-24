var _c = (e) => {
  throw TypeError(e);
};
var ya = (e, t, n) => t.has(e) || _c("Cannot " + n);
var C = (e, t, n) => (ya(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  B = (e, t, n) =>
    t.has(e)
      ? _c("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  D = (e, t, n, r) => (ya(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
  le = (e, t, n) => (ya(e, t, "access private method"), n);
var mi = (e, t, n, r) => ({
  set _(s) {
    D(e, t, s, n);
  },
  get _() {
    return C(e, t, r);
  },
});
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function Of(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lf = { exports: {} },
  Uo = {},
  Mf = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var si = Symbol.for("react.element"),
  iy = Symbol.for("react.portal"),
  oy = Symbol.for("react.fragment"),
  ay = Symbol.for("react.strict_mode"),
  ly = Symbol.for("react.profiler"),
  uy = Symbol.for("react.provider"),
  cy = Symbol.for("react.context"),
  dy = Symbol.for("react.forward_ref"),
  fy = Symbol.for("react.suspense"),
  hy = Symbol.for("react.memo"),
  py = Symbol.for("react.lazy"),
  Cc = Symbol.iterator;
function my(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cc && e[Cc]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Nf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Af = Object.assign,
  bf = {};
function Xr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = bf), (this.updater = n || Nf);
}
Xr.prototype.isReactComponent = {};
Xr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Xr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ff() {}
Ff.prototype = Xr.prototype;
function gu(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = bf), (this.updater = n || Nf);
}
var vu = (gu.prototype = new Ff());
vu.constructor = gu;
Af(vu, Xr.prototype);
vu.isPureReactComponent = !0;
var Ec = Array.isArray,
  If = Object.prototype.hasOwnProperty,
  wu = { current: null },
  jf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Df(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t))
      If.call(t, r) && !jf.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    s.children = l;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return { $$typeof: si, type: e, key: i, ref: o, props: s, _owner: wu.current };
}
function yy(e, t) {
  return { $$typeof: si, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Su(e) {
  return typeof e == "object" && e !== null && e.$$typeof === si;
}
function gy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Rc = /\/+/g;
function ga(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? gy("" + e.key) : t.toString(36);
}
function Bi(e, t, n, r, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case si:
          case iy:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (s = s(o)),
      (e = r === "" ? "." + ga(o, 0) : r),
      Ec(s)
        ? ((n = ""),
          e != null && (n = e.replace(Rc, "$&/") + "/"),
          Bi(s, t, n, "", function (u) {
            return u;
          }))
        : s != null &&
          (Su(s) &&
            (s = yy(
              s,
              n +
                (!s.key || (o && o.key === s.key) ? "" : ("" + s.key).replace(Rc, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ec(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + ga(i, a);
      o += Bi(i, t, n, l, s);
    }
  else if (((l = my(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + ga(i, a++)), (o += Bi(i, t, n, l, s));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function yi(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    Bi(e, r, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function vy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var be = { current: null },
  Vi = { transition: null },
  wy = { ReactCurrentDispatcher: be, ReactCurrentBatchConfig: Vi, ReactCurrentOwner: wu };
function $f() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = {
  map: yi,
  forEach: function (e, t, n) {
    yi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      yi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      yi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Su(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
q.Component = Xr;
q.Fragment = oy;
q.Profiler = ly;
q.PureComponent = gu;
q.StrictMode = ay;
q.Suspense = fy;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wy;
q.act = $f;
q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " + e + "."
    );
  var r = Af({}, e.props),
    s = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = wu.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      If.call(t, l) &&
        !jf.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: si, type: e.type, key: s, ref: i, props: r, _owner: o };
};
q.createContext = function (e) {
  return (
    (e = {
      $$typeof: cy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: uy, _context: e }),
    (e.Consumer = e)
  );
};
q.createElement = Df;
q.createFactory = function (e) {
  var t = Df.bind(null, e);
  return (t.type = e), t;
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (e) {
  return { $$typeof: dy, render: e };
};
q.isValidElement = Su;
q.lazy = function (e) {
  return { $$typeof: py, _payload: { _status: -1, _result: e }, _init: vy };
};
q.memo = function (e, t) {
  return { $$typeof: hy, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
  var t = Vi.transition;
  Vi.transition = {};
  try {
    e();
  } finally {
    Vi.transition = t;
  }
};
q.unstable_act = $f;
q.useCallback = function (e, t) {
  return be.current.useCallback(e, t);
};
q.useContext = function (e) {
  return be.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
  return be.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
  return be.current.useEffect(e, t);
};
q.useId = function () {
  return be.current.useId();
};
q.useImperativeHandle = function (e, t, n) {
  return be.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
  return be.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return be.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return be.current.useMemo(e, t);
};
q.useReducer = function (e, t, n) {
  return be.current.useReducer(e, t, n);
};
q.useRef = function (e) {
  return be.current.useRef(e);
};
q.useState = function (e) {
  return be.current.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
  return be.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
  return be.current.useTransition();
};
q.version = "18.3.1";
Mf.exports = q;
var b = Mf.exports;
const xu = Of(b);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sy = b,
  xy = Symbol.for("react.element"),
  ky = Symbol.for("react.fragment"),
  _y = Object.prototype.hasOwnProperty,
  Cy = Sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ey = { key: !0, ref: !0, __self: !0, __source: !0 };
function zf(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) _y.call(t, r) && !Ey.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return { $$typeof: xy, type: e, key: i, ref: o, props: s, _owner: Cy.current };
}
Uo.Fragment = ky;
Uo.jsx = zf;
Uo.jsxs = zf;
Lf.exports = Uo;
var _ = Lf.exports,
  qf = { exports: {} },
  et = {},
  Uf = { exports: {} },
  Bf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, I) {
    var j = M.length;
    M.push(I);
    e: for (; 0 < j; ) {
      var W = (j - 1) >>> 1,
        z = M[W];
      if (0 < s(z, I)) (M[W] = I), (M[j] = z), (j = W);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var I = M[0],
      j = M.pop();
    if (j !== I) {
      M[0] = j;
      e: for (var W = 0, z = M.length, ae = z >>> 1; W < ae; ) {
        var ce = 2 * (W + 1) - 1,
          de = M[ce],
          Z = ce + 1,
          Ve = M[Z];
        if (0 > s(de, j))
          Z < z && 0 > s(Ve, de)
            ? ((M[W] = Ve), (M[Z] = j), (W = Z))
            : ((M[W] = de), (M[ce] = j), (W = ce));
        else if (Z < z && 0 > s(Ve, j)) (M[W] = Ve), (M[Z] = j), (W = Z);
        else break e;
      }
    }
    return I;
  }
  function s(M, I) {
    var j = M.sortIndex - I.sortIndex;
    return j !== 0 ? j : M.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    d = 1,
    c = null,
    f = 3,
    y = !1,
    m = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(M) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= M) r(u), (I.sortIndex = I.expirationTime), t(l, I);
      else break;
      I = n(u);
    }
  }
  function S(M) {
    if (((v = !1), g(M), !m))
      if (n(l) !== null) (m = !0), G(k);
      else {
        var I = n(u);
        I !== null && ke(S, I.startTime - M);
      }
  }
  function k(M, I) {
    (m = !1), v && ((v = !1), p(R), (R = -1)), (y = !0);
    var j = f;
    try {
      for (g(I), c = n(l); c !== null && (!(c.expirationTime > I) || (M && !L())); ) {
        var W = c.callback;
        if (typeof W == "function") {
          (c.callback = null), (f = c.priorityLevel);
          var z = W(c.expirationTime <= I);
          (I = e.unstable_now()),
            typeof z == "function" ? (c.callback = z) : c === n(l) && r(l),
            g(I);
        } else r(l);
        c = n(l);
      }
      if (c !== null) var ae = !0;
      else {
        var ce = n(u);
        ce !== null && ke(S, ce.startTime - I), (ae = !1);
      }
      return ae;
    } finally {
      (c = null), (f = j), (y = !1);
    }
  }
  var x = !1,
    P = null,
    R = -1,
    O = 5,
    N = -1;
  function L() {
    return !(e.unstable_now() - N < O);
  }
  function F() {
    if (P !== null) {
      var M = e.unstable_now();
      N = M;
      var I = !0;
      try {
        I = P(!0, M);
      } finally {
        I ? U() : ((x = !1), (P = null));
      }
    } else x = !1;
  }
  var U;
  if (typeof h == "function")
    U = function () {
      h(F);
    };
  else if (typeof MessageChannel < "u") {
    var Q = new MessageChannel(),
      H = Q.port2;
    (Q.port1.onmessage = F),
      (U = function () {
        H.postMessage(null);
      });
  } else
    U = function () {
      w(F, 0);
    };
  function G(M) {
    (P = M), x || ((x = !0), U());
  }
  function ke(M, I) {
    R = w(function () {
      M(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || y || ((m = !0), G(k));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (M) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = f;
      }
      var j = f;
      f = I;
      try {
        return M();
      } finally {
        f = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, I) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var j = f;
      f = M;
      try {
        return I();
      } finally {
        f = j;
      }
    }),
    (e.unstable_scheduleCallback = function (M, I, j) {
      var W = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? W + j : W))
          : (j = W),
        M)
      ) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return (
        (z = j + z),
        (M = {
          id: d++,
          callback: I,
          priorityLevel: M,
          startTime: j,
          expirationTime: z,
          sortIndex: -1,
        }),
        j > W
          ? ((M.sortIndex = j),
            t(u, M),
            n(l) === null && M === n(u) && (v ? (p(R), (R = -1)) : (v = !0), ke(S, j - W)))
          : ((M.sortIndex = z), t(l, M), m || y || ((m = !0), G(k))),
        M
      );
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (M) {
      var I = f;
      return function () {
        var j = f;
        f = I;
        try {
          return M.apply(this, arguments);
        } finally {
          f = j;
        }
      };
    });
})(Bf);
Uf.exports = Bf;
var Ry = Uf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Py = b,
  Ze = Ry;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Vf = new Set(),
  Ns = {};
function nr(e, t) {
  $r(e, t), $r(e + "Capture", t);
}
function $r(e, t) {
  for (Ns[e] = t, e = 0; e < t.length; e++) Vf.add(t[e]);
}
var Kt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  al = Object.prototype.hasOwnProperty,
  Ty =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Pc = {},
  Tc = {};
function Oy(e) {
  return al.call(Tc, e) ? !0 : al.call(Pc, e) ? !1 : Ty.test(e) ? (Tc[e] = !0) : ((Pc[e] = !0), !1);
}
function Ly(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function My(e, t, n, r) {
  if (t === null || typeof t > "u" || Ly(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, r, s, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Se[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Se[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  Se[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Se[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Se[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Se[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Se[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ku = /[\-:]([a-z])/g;
function _u(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ku, _u);
    Se[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ku, _u);
    Se[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ku, _u);
  Se[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Se[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  Se[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Cu(e, t, n, r) {
  var s = Se.hasOwnProperty(t) ? Se[t] : null;
  (s !== null
    ? s.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (My(t, n, s, r) && (n = null),
    r || s === null
      ? Oy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Yt = Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gi = Symbol.for("react.element"),
  ur = Symbol.for("react.portal"),
  cr = Symbol.for("react.fragment"),
  Eu = Symbol.for("react.strict_mode"),
  ll = Symbol.for("react.profiler"),
  Qf = Symbol.for("react.provider"),
  Hf = Symbol.for("react.context"),
  Ru = Symbol.for("react.forward_ref"),
  ul = Symbol.for("react.suspense"),
  cl = Symbol.for("react.suspense_list"),
  Pu = Symbol.for("react.memo"),
  nn = Symbol.for("react.lazy"),
  Wf = Symbol.for("react.offscreen"),
  Oc = Symbol.iterator;
function ns(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Oc && e[Oc]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var se = Object.assign,
  va;
function fs(e) {
  if (va === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      va = (t && t[1]) || "";
    }
  return (
    `
` +
    va +
    e
  );
}
var wa = !1;
function Sa(e, t) {
  if (!e || wa) return "";
  wa = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          i = r.stack.split(`
`),
          o = s.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && s[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (s[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || s[o] !== i[a])) {
                var l =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (wa = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? fs(e) : "";
}
function Ny(e) {
  switch (e.tag) {
    case 5:
      return fs(e.type);
    case 16:
      return fs("Lazy");
    case 13:
      return fs("Suspense");
    case 19:
      return fs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Sa(e.type, !1)), e;
    case 11:
      return (e = Sa(e.type.render, !1)), e;
    case 1:
      return (e = Sa(e.type, !0)), e;
    default:
      return "";
  }
}
function dl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case cr:
      return "Fragment";
    case ur:
      return "Portal";
    case ll:
      return "Profiler";
    case Eu:
      return "StrictMode";
    case ul:
      return "Suspense";
    case cl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Hf:
        return (e.displayName || "Context") + ".Consumer";
      case Qf:
        return (e._context.displayName || "Context") + ".Provider";
      case Ru:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Pu:
        return (t = e.displayName || null), t !== null ? t : dl(e.type) || "Memo";
      case nn:
        (t = e._payload), (e = e._init);
        try {
          return dl(e(t));
        } catch {}
    }
  return null;
}
function Ay(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return dl(t);
    case 8:
      return t === Eu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function En(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Kf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function by(e) {
  var t = Kf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function vi(e) {
  e._valueTracker || (e._valueTracker = by(e));
}
function Gf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Kf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function lo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fl(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Lc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = En(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function Jf(e, t) {
  (t = t.checked), t != null && Cu(e, "checked", t, !1);
}
function hl(e, t) {
  Jf(e, t);
  var n = En(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? pl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && pl(e, t.type, En(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Mc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function pl(e, t, n) {
  (t !== "number" || lo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var hs = Array.isArray;
function kr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + En(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        (e[s].selected = !0), r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function ml(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Nc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (hs(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: En(n) };
}
function Xf(e, t) {
  var n = En(t.value),
    r = En(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ac(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Yf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function yl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Yf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var wi,
  Zf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        wi = wi || document.createElement("div"),
          wi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = wi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function As(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var vs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Fy = ["Webkit", "ms", "Moz", "O"];
Object.keys(vs).forEach(function (e) {
  Fy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (vs[t] = vs[e]);
  });
});
function eh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (vs.hasOwnProperty(e) && vs[e])
      ? ("" + t).trim()
      : t + "px";
}
function th(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = eh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
    }
}
var Iy = se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function gl(e, t) {
  if (t) {
    if (Iy[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function vl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var wl = null;
function Tu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Sl = null,
  _r = null,
  Cr = null;
function bc(e) {
  if ((e = ai(e))) {
    if (typeof Sl != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = Wo(t)), Sl(e.stateNode, e.type, t));
  }
}
function nh(e) {
  _r ? (Cr ? Cr.push(e) : (Cr = [e])) : (_r = e);
}
function rh() {
  if (_r) {
    var e = _r,
      t = Cr;
    if (((Cr = _r = null), bc(e), t)) for (e = 0; e < t.length; e++) bc(t[e]);
  }
}
function sh(e, t) {
  return e(t);
}
function ih() {}
var xa = !1;
function oh(e, t, n) {
  if (xa) return e(t, n);
  xa = !0;
  try {
    return sh(e, t, n);
  } finally {
    (xa = !1), (_r !== null || Cr !== null) && (ih(), rh());
  }
}
function bs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Wo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var xl = !1;
if (Kt)
  try {
    var rs = {};
    Object.defineProperty(rs, "passive", {
      get: function () {
        xl = !0;
      },
    }),
      window.addEventListener("test", rs, rs),
      window.removeEventListener("test", rs, rs);
  } catch {
    xl = !1;
  }
function jy(e, t, n, r, s, i, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var ws = !1,
  uo = null,
  co = !1,
  kl = null,
  Dy = {
    onError: function (e) {
      (ws = !0), (uo = e);
    },
  };
function $y(e, t, n, r, s, i, o, a, l) {
  (ws = !1), (uo = null), jy.apply(Dy, arguments);
}
function zy(e, t, n, r, s, i, o, a, l) {
  if (($y.apply(this, arguments), ws)) {
    if (ws) {
      var u = uo;
      (ws = !1), (uo = null);
    } else throw Error(T(198));
    co || ((co = !0), (kl = u));
  }
}
function rr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ah(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function Fc(e) {
  if (rr(e) !== e) throw Error(T(188));
}
function qy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = rr(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return Fc(s), e;
        if (i === r) return Fc(s), t;
        i = i.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = s), (r = i);
    else {
      for (var o = !1, a = s.child; a; ) {
        if (a === n) {
          (o = !0), (n = s), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = s), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = s);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = s);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function lh(e) {
  return (e = qy(e)), e !== null ? uh(e) : null;
}
function uh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = uh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ch = Ze.unstable_scheduleCallback,
  Ic = Ze.unstable_cancelCallback,
  Uy = Ze.unstable_shouldYield,
  By = Ze.unstable_requestPaint,
  ue = Ze.unstable_now,
  Vy = Ze.unstable_getCurrentPriorityLevel,
  Ou = Ze.unstable_ImmediatePriority,
  dh = Ze.unstable_UserBlockingPriority,
  fo = Ze.unstable_NormalPriority,
  Qy = Ze.unstable_LowPriority,
  fh = Ze.unstable_IdlePriority,
  Bo = null,
  bt = null;
function Hy(e) {
  if (bt && typeof bt.onCommitFiberRoot == "function")
    try {
      bt.onCommitFiberRoot(Bo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var xt = Math.clz32 ? Math.clz32 : Gy,
  Wy = Math.log,
  Ky = Math.LN2;
function Gy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Wy(e) / Ky) | 0)) | 0;
}
var Si = 64,
  xi = 4194304;
function ps(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ho(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~s;
    a !== 0 ? (r = ps(a)) : ((i &= o), i !== 0 && (r = ps(i)));
  } else (o = n & ~s), o !== 0 ? (r = ps(o)) : i !== 0 && (r = ps(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - xt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
  return r;
}
function Jy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Xy(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - xt(i),
      a = 1 << o,
      l = s[o];
    l === -1 ? (!(a & n) || a & r) && (s[o] = Jy(a, t)) : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function _l(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function hh() {
  var e = Si;
  return (Si <<= 1), !(Si & 4194240) && (Si = 64), e;
}
function ka(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ii(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - xt(t)),
    (e[t] = n);
}
function Yy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - xt(n),
      i = 1 << s;
    (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i);
  }
}
function Lu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - xt(n),
      s = 1 << r;
    (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
  }
}
var K = 0;
function ph(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var mh,
  Mu,
  yh,
  gh,
  vh,
  Cl = !1,
  ki = [],
  gn = null,
  vn = null,
  wn = null,
  Fs = new Map(),
  Is = new Map(),
  sn = [],
  Zy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function jc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      gn = null;
      break;
    case "dragenter":
    case "dragleave":
      vn = null;
      break;
    case "mouseover":
    case "mouseout":
      wn = null;
      break;
    case "pointerover":
    case "pointerout":
      Fs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Is.delete(t.pointerId);
  }
}
function ss(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = ai(t)), t !== null && Mu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function eg(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return (gn = ss(gn, e, t, n, r, s)), !0;
    case "dragenter":
      return (vn = ss(vn, e, t, n, r, s)), !0;
    case "mouseover":
      return (wn = ss(wn, e, t, n, r, s)), !0;
    case "pointerover":
      var i = s.pointerId;
      return Fs.set(i, ss(Fs.get(i) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return (i = s.pointerId), Is.set(i, ss(Is.get(i) || null, e, t, n, r, s)), !0;
  }
  return !1;
}
function wh(e) {
  var t = Fn(e.target);
  if (t !== null) {
    var n = rr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ah(n)), t !== null)) {
          (e.blockedOn = t),
            vh(e.priority, function () {
              yh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Qi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = El(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (wl = r), n.target.dispatchEvent(r), (wl = null);
    } else return (t = ai(n)), t !== null && Mu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Dc(e, t, n) {
  Qi(e) && n.delete(t);
}
function tg() {
  (Cl = !1),
    gn !== null && Qi(gn) && (gn = null),
    vn !== null && Qi(vn) && (vn = null),
    wn !== null && Qi(wn) && (wn = null),
    Fs.forEach(Dc),
    Is.forEach(Dc);
}
function is(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Cl || ((Cl = !0), Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, tg)));
}
function js(e) {
  function t(s) {
    return is(s, e);
  }
  if (0 < ki.length) {
    is(ki[0], e);
    for (var n = 1; n < ki.length; n++) {
      var r = ki[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    gn !== null && is(gn, e),
      vn !== null && is(vn, e),
      wn !== null && is(wn, e),
      Fs.forEach(t),
      Is.forEach(t),
      n = 0;
    n < sn.length;
    n++
  )
    (r = sn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < sn.length && ((n = sn[0]), n.blockedOn === null); )
    wh(n), n.blockedOn === null && sn.shift();
}
var Er = Yt.ReactCurrentBatchConfig,
  po = !0;
function ng(e, t, n, r) {
  var s = K,
    i = Er.transition;
  Er.transition = null;
  try {
    (K = 1), Nu(e, t, n, r);
  } finally {
    (K = s), (Er.transition = i);
  }
}
function rg(e, t, n, r) {
  var s = K,
    i = Er.transition;
  Er.transition = null;
  try {
    (K = 4), Nu(e, t, n, r);
  } finally {
    (K = s), (Er.transition = i);
  }
}
function Nu(e, t, n, r) {
  if (po) {
    var s = El(e, t, n, r);
    if (s === null) Na(e, t, r, mo, n), jc(e, r);
    else if (eg(s, e, t, n, r)) r.stopPropagation();
    else if ((jc(e, r), t & 4 && -1 < Zy.indexOf(e))) {
      for (; s !== null; ) {
        var i = ai(s);
        if ((i !== null && mh(i), (i = El(e, t, n, r)), i === null && Na(e, t, r, mo, n), i === s))
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else Na(e, t, r, null, n);
  }
}
var mo = null;
function El(e, t, n, r) {
  if (((mo = null), (e = Tu(r)), (e = Fn(e)), e !== null))
    if (((t = rr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ah(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (mo = e), null;
}
function Sh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Vy()) {
        case Ou:
          return 1;
        case dh:
          return 4;
        case fo:
        case Qy:
          return 16;
        case fh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var pn = null,
  Au = null,
  Hi = null;
function xh() {
  if (Hi) return Hi;
  var e,
    t = Au,
    n = t.length,
    r,
    s = "value" in pn ? pn.value : pn.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[i - r]; r++);
  return (Hi = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Wi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function _i() {
  return !0;
}
function $c() {
  return !1;
}
function tt(e) {
  function t(n, r, s, i, o) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? _i
        : $c),
      (this.isPropagationStopped = $c),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = _i));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = _i));
      },
      persist: function () {},
      isPersistent: _i,
    }),
    t
  );
}
var Yr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  bu = tt(Yr),
  oi = se({}, Yr, { view: 0, detail: 0 }),
  sg = tt(oi),
  _a,
  Ca,
  os,
  Vo = se({}, oi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Fu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== os &&
            (os && e.type === "mousemove"
              ? ((_a = e.screenX - os.screenX), (Ca = e.screenY - os.screenY))
              : (Ca = _a = 0),
            (os = e)),
          _a);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ca;
    },
  }),
  zc = tt(Vo),
  ig = se({}, Vo, { dataTransfer: 0 }),
  og = tt(ig),
  ag = se({}, oi, { relatedTarget: 0 }),
  Ea = tt(ag),
  lg = se({}, Yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ug = tt(lg),
  cg = se({}, Yr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  dg = tt(cg),
  fg = se({}, Yr, { data: 0 }),
  qc = tt(fg),
  hg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  pg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  mg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function yg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = mg[e]) ? !!t[e] : !1;
}
function Fu() {
  return yg;
}
var gg = se({}, oi, {
    key: function (e) {
      if (e.key) {
        var t = hg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Wi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? pg[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fu,
    charCode: function (e) {
      return e.type === "keypress" ? Wi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Wi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  vg = tt(gg),
  wg = se({}, Vo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Uc = tt(wg),
  Sg = se({}, oi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fu,
  }),
  xg = tt(Sg),
  kg = se({}, Yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _g = tt(kg),
  Cg = se({}, Vo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Eg = tt(Cg),
  Rg = [9, 13, 27, 32],
  Iu = Kt && "CompositionEvent" in window,
  Ss = null;
Kt && "documentMode" in document && (Ss = document.documentMode);
var Pg = Kt && "TextEvent" in window && !Ss,
  kh = Kt && (!Iu || (Ss && 8 < Ss && 11 >= Ss)),
  Bc = " ",
  Vc = !1;
function _h(e, t) {
  switch (e) {
    case "keyup":
      return Rg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ch(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var dr = !1;
function Tg(e, t) {
  switch (e) {
    case "compositionend":
      return Ch(t);
    case "keypress":
      return t.which !== 32 ? null : ((Vc = !0), Bc);
    case "textInput":
      return (e = t.data), e === Bc && Vc ? null : e;
    default:
      return null;
  }
}
function Og(e, t) {
  if (dr)
    return e === "compositionend" || (!Iu && _h(e, t))
      ? ((e = xh()), (Hi = Au = pn = null), (dr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return kh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Lg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Qc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Lg[e.type] : t === "textarea";
}
function Eh(e, t, n, r) {
  nh(r),
    (t = yo(t, "onChange")),
    0 < t.length &&
      ((n = new bu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var xs = null,
  Ds = null;
function Mg(e) {
  Ih(e, 0);
}
function Qo(e) {
  var t = pr(e);
  if (Gf(t)) return e;
}
function Ng(e, t) {
  if (e === "change") return t;
}
var Rh = !1;
if (Kt) {
  var Ra;
  if (Kt) {
    var Pa = "oninput" in document;
    if (!Pa) {
      var Hc = document.createElement("div");
      Hc.setAttribute("oninput", "return;"), (Pa = typeof Hc.oninput == "function");
    }
    Ra = Pa;
  } else Ra = !1;
  Rh = Ra && (!document.documentMode || 9 < document.documentMode);
}
function Wc() {
  xs && (xs.detachEvent("onpropertychange", Ph), (Ds = xs = null));
}
function Ph(e) {
  if (e.propertyName === "value" && Qo(Ds)) {
    var t = [];
    Eh(t, Ds, e, Tu(e)), oh(Mg, t);
  }
}
function Ag(e, t, n) {
  e === "focusin"
    ? (Wc(), (xs = t), (Ds = n), xs.attachEvent("onpropertychange", Ph))
    : e === "focusout" && Wc();
}
function bg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Qo(Ds);
}
function Fg(e, t) {
  if (e === "click") return Qo(t);
}
function Ig(e, t) {
  if (e === "input" || e === "change") return Qo(t);
}
function jg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _t = typeof Object.is == "function" ? Object.is : jg;
function $s(e, t) {
  if (_t(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!al.call(t, s) || !_t(e[s], t[s])) return !1;
  }
  return !0;
}
function Kc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Gc(e, t) {
  var n = Kc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Kc(n);
  }
}
function Th(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Th(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Oh() {
  for (var e = window, t = lo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = lo(e.document);
  }
  return t;
}
function ju(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Dg(e) {
  var t = Oh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Th(n.ownerDocument.documentElement, n)) {
    if (r !== null && ju(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        (r = r.end === void 0 ? i : Math.min(r.end, s)),
          !e.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = Gc(n, i));
        var o = Gc(n, r);
        s &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var $g = Kt && "documentMode" in document && 11 >= document.documentMode,
  fr = null,
  Rl = null,
  ks = null,
  Pl = !1;
function Jc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Pl ||
    fr == null ||
    fr !== lo(r) ||
    ((r = fr),
    "selectionStart" in r && ju(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ks && $s(ks, r)) ||
      ((ks = r),
      (r = yo(Rl, "onSelect")),
      0 < r.length &&
        ((t = new bu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = fr))));
}
function Ci(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var hr = {
    animationend: Ci("Animation", "AnimationEnd"),
    animationiteration: Ci("Animation", "AnimationIteration"),
    animationstart: Ci("Animation", "AnimationStart"),
    transitionend: Ci("Transition", "TransitionEnd"),
  },
  Ta = {},
  Lh = {};
Kt &&
  ((Lh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete hr.animationend.animation,
    delete hr.animationiteration.animation,
    delete hr.animationstart.animation),
  "TransitionEvent" in window || delete hr.transitionend.transition);
function Ho(e) {
  if (Ta[e]) return Ta[e];
  if (!hr[e]) return e;
  var t = hr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Lh) return (Ta[e] = t[n]);
  return e;
}
var Mh = Ho("animationend"),
  Nh = Ho("animationiteration"),
  Ah = Ho("animationstart"),
  bh = Ho("transitionend"),
  Fh = new Map(),
  Xc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Tn(e, t) {
  Fh.set(e, t), nr(t, [e]);
}
for (var Oa = 0; Oa < Xc.length; Oa++) {
  var La = Xc[Oa],
    zg = La.toLowerCase(),
    qg = La[0].toUpperCase() + La.slice(1);
  Tn(zg, "on" + qg);
}
Tn(Mh, "onAnimationEnd");
Tn(Nh, "onAnimationIteration");
Tn(Ah, "onAnimationStart");
Tn("dblclick", "onDoubleClick");
Tn("focusin", "onFocus");
Tn("focusout", "onBlur");
Tn(bh, "onTransitionEnd");
$r("onMouseEnter", ["mouseout", "mouseover"]);
$r("onMouseLeave", ["mouseout", "mouseover"]);
$r("onPointerEnter", ["pointerout", "pointerover"]);
$r("onPointerLeave", ["pointerout", "pointerover"]);
nr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
nr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")
);
nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
nr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
nr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ms =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ug = new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));
function Yc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), zy(r, t, void 0, e), (e.currentTarget = null);
}
function Ih(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && s.isPropagationStopped())) break e;
          Yc(s, a, u), (i = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && s.isPropagationStopped())
          )
            break e;
          Yc(s, a, u), (i = l);
        }
    }
  }
  if (co) throw ((e = kl), (co = !1), (kl = null), e);
}
function X(e, t) {
  var n = t[Nl];
  n === void 0 && (n = t[Nl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (jh(t, e, 2, !1), n.add(r));
}
function Ma(e, t, n) {
  var r = 0;
  t && (r |= 4), jh(n, e, r, t);
}
var Ei = "_reactListening" + Math.random().toString(36).slice(2);
function zs(e) {
  if (!e[Ei]) {
    (e[Ei] = !0),
      Vf.forEach(function (n) {
        n !== "selectionchange" && (Ug.has(n) || Ma(n, !1, e), Ma(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ei] || ((t[Ei] = !0), Ma("selectionchange", !1, t));
  }
}
function jh(e, t, n, r) {
  switch (Sh(t)) {
    case 1:
      var s = ng;
      break;
    case 4:
      s = rg;
      break;
    default:
      s = Nu;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !xl || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1);
}
function Na(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo), l === s || (l.nodeType === 8 && l.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Fn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  oh(function () {
    var u = i,
      d = Tu(n),
      c = [];
    e: {
      var f = Fh.get(e);
      if (f !== void 0) {
        var y = bu,
          m = e;
        switch (e) {
          case "keypress":
            if (Wi(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = vg;
            break;
          case "focusin":
            (m = "focus"), (y = Ea);
            break;
          case "focusout":
            (m = "blur"), (y = Ea);
            break;
          case "beforeblur":
          case "afterblur":
            y = Ea;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = zc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = og;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = xg;
            break;
          case Mh:
          case Nh:
          case Ah:
            y = ug;
            break;
          case bh:
            y = _g;
            break;
          case "scroll":
            y = sg;
            break;
          case "wheel":
            y = Eg;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = dg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Uc;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          p = v ? (f !== null ? f + "Capture" : null) : f;
        v = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S), p !== null && ((S = bs(h, p)), S != null && v.push(qs(h, S, g)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < v.length && ((f = new y(f, m, null, n, d)), c.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          f && n !== wl && (m = n.relatedTarget || n.fromElement) && (Fn(m) || m[Gt]))
        )
          break e;
        if (
          (y || f) &&
          ((f =
            d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window),
          y
            ? ((m = n.relatedTarget || n.toElement),
              (y = u),
              (m = m ? Fn(m) : null),
              m !== null && ((w = rr(m)), m !== w || (m.tag !== 5 && m.tag !== 6)) && (m = null))
            : ((y = null), (m = u)),
          y !== m)
        ) {
          if (
            ((v = zc),
            (S = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Uc), (S = "onPointerLeave"), (p = "onPointerEnter"), (h = "pointer")),
            (w = y == null ? f : pr(y)),
            (g = m == null ? f : pr(m)),
            (f = new v(S, h + "leave", y, n, d)),
            (f.target = w),
            (f.relatedTarget = g),
            (S = null),
            Fn(d) === u &&
              ((v = new v(p, h + "enter", m, n, d)),
              (v.target = g),
              (v.relatedTarget = w),
              (S = v)),
            (w = S),
            y && m)
          )
            t: {
              for (v = y, p = m, h = 0, g = v; g; g = or(g)) h++;
              for (g = 0, S = p; S; S = or(S)) g++;
              for (; 0 < h - g; ) (v = or(v)), h--;
              for (; 0 < g - h; ) (p = or(p)), g--;
              for (; h--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = or(v)), (p = or(p));
              }
              v = null;
            }
          else v = null;
          y !== null && Zc(c, f, y, v, !1), m !== null && w !== null && Zc(c, w, m, v, !0);
        }
      }
      e: {
        if (
          ((f = u ? pr(u) : window),
          (y = f.nodeName && f.nodeName.toLowerCase()),
          y === "select" || (y === "input" && f.type === "file"))
        )
          var k = Ng;
        else if (Qc(f))
          if (Rh) k = Ig;
          else {
            k = bg;
            var x = Ag;
          }
        else
          (y = f.nodeName) &&
            y.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (k = Fg);
        if (k && (k = k(e, u))) {
          Eh(c, k, n, d);
          break e;
        }
        x && x(e, f, u),
          e === "focusout" &&
            (x = f._wrapperState) &&
            x.controlled &&
            f.type === "number" &&
            pl(f, "number", f.value);
      }
      switch (((x = u ? pr(u) : window), e)) {
        case "focusin":
          (Qc(x) || x.contentEditable === "true") && ((fr = x), (Rl = u), (ks = null));
          break;
        case "focusout":
          ks = Rl = fr = null;
          break;
        case "mousedown":
          Pl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Pl = !1), Jc(c, n, d);
          break;
        case "selectionchange":
          if ($g) break;
        case "keydown":
        case "keyup":
          Jc(c, n, d);
      }
      var P;
      if (Iu)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        dr
          ? _h(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (kh &&
          n.locale !== "ko" &&
          (dr || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && dr && (P = xh())
            : ((pn = d), (Au = "value" in pn ? pn.value : pn.textContent), (dr = !0))),
        (x = yo(u, R)),
        0 < x.length &&
          ((R = new qc(R, e, null, n, d)),
          c.push({ event: R, listeners: x }),
          P ? (R.data = P) : ((P = Ch(n)), P !== null && (R.data = P)))),
        (P = Pg ? Tg(e, n) : Og(e, n)) &&
          ((u = yo(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new qc("onBeforeInput", "beforeinput", null, n, d)),
            c.push({ event: d, listeners: u }),
            (d.data = P)));
    }
    Ih(c, t);
  });
}
function qs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function yo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = bs(e, n)),
      i != null && r.unshift(qs(e, i, s)),
      (i = bs(e, t)),
      i != null && r.push(qs(e, i, s))),
      (e = e.return);
  }
  return r;
}
function or(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zc(e, t, n, r, s) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      s
        ? ((l = bs(n, i)), l != null && o.unshift(qs(n, l, a)))
        : s || ((l = bs(n, i)), l != null && o.push(qs(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Bg = /\r\n?/g,
  Vg = /\u0000|\uFFFD/g;
function ed(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bg,
      `
`
    )
    .replace(Vg, "");
}
function Ri(e, t, n) {
  if (((t = ed(t)), ed(e) !== t && n)) throw Error(T(425));
}
function go() {}
var Tl = null,
  Ol = null;
function Ll(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ml = typeof setTimeout == "function" ? setTimeout : void 0,
  Qg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  td = typeof Promise == "function" ? Promise : void 0,
  Hg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof td < "u"
        ? function (e) {
            return td.resolve(null).then(e).catch(Wg);
          }
        : Ml;
function Wg(e) {
  setTimeout(function () {
    throw e;
  });
}
function Aa(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(s), js(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  js(t);
}
function Sn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function nd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Zr = Math.random().toString(36).slice(2),
  Nt = "__reactFiber$" + Zr,
  Us = "__reactProps$" + Zr,
  Gt = "__reactContainer$" + Zr,
  Nl = "__reactEvents$" + Zr,
  Kg = "__reactListeners$" + Zr,
  Gg = "__reactHandles$" + Zr;
function Fn(e) {
  var t = e[Nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Gt] || n[Nt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = nd(e); e !== null; ) {
          if ((n = e[Nt])) return n;
          e = nd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ai(e) {
  return (
    (e = e[Nt] || e[Gt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function pr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Wo(e) {
  return e[Us] || null;
}
var Al = [],
  mr = -1;
function On(e) {
  return { current: e };
}
function Y(e) {
  0 > mr || ((e.current = Al[mr]), (Al[mr] = null), mr--);
}
function J(e, t) {
  mr++, (Al[mr] = e.current), (e.current = t);
}
var Rn = {},
  Oe = On(Rn),
  ze = On(!1),
  Gn = Rn;
function zr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function qe(e) {
  return (e = e.childContextTypes), e != null;
}
function vo() {
  Y(ze), Y(Oe);
}
function rd(e, t, n) {
  if (Oe.current !== Rn) throw Error(T(168));
  J(Oe, t), J(ze, n);
}
function Dh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(T(108, Ay(e) || "Unknown", s));
  return se({}, n, r);
}
function wo(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rn),
    (Gn = Oe.current),
    J(Oe, e),
    J(ze, ze.current),
    !0
  );
}
function sd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = Dh(e, t, Gn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Y(ze),
      Y(Oe),
      J(Oe, e))
    : Y(ze),
    J(ze, n);
}
var $t = null,
  Ko = !1,
  ba = !1;
function $h(e) {
  $t === null ? ($t = [e]) : $t.push(e);
}
function Jg(e) {
  (Ko = !0), $h(e);
}
function Ln() {
  if (!ba && $t !== null) {
    ba = !0;
    var e = 0,
      t = K;
    try {
      var n = $t;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($t = null), (Ko = !1);
    } catch (s) {
      throw ($t !== null && ($t = $t.slice(e + 1)), ch(Ou, Ln), s);
    } finally {
      (K = t), (ba = !1);
    }
  }
  return null;
}
var yr = [],
  gr = 0,
  So = null,
  xo = 0,
  it = [],
  ot = 0,
  Jn = null,
  Bt = 1,
  Vt = "";
function Mn(e, t) {
  (yr[gr++] = xo), (yr[gr++] = So), (So = e), (xo = t);
}
function zh(e, t, n) {
  (it[ot++] = Bt), (it[ot++] = Vt), (it[ot++] = Jn), (Jn = e);
  var r = Bt;
  e = Vt;
  var s = 32 - xt(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var i = 32 - xt(t) + s;
  if (30 < i) {
    var o = s - (s % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (s -= o),
      (Bt = (1 << (32 - xt(t) + s)) | (n << s) | r),
      (Vt = i + e);
  } else (Bt = (1 << i) | (n << s) | r), (Vt = e);
}
function Du(e) {
  e.return !== null && (Mn(e, 1), zh(e, 1, 0));
}
function $u(e) {
  for (; e === So; ) (So = yr[--gr]), (yr[gr] = null), (xo = yr[--gr]), (yr[gr] = null);
  for (; e === Jn; )
    (Jn = it[--ot]),
      (it[ot] = null),
      (Vt = it[--ot]),
      (it[ot] = null),
      (Bt = it[--ot]),
      (it[ot] = null);
}
var Xe = null,
  Ge = null,
  ee = !1,
  St = null;
function qh(e, t) {
  var n = at(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function id(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Xe = e), (Ge = Sn(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Xe = e), (Ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Jn !== null ? { id: Bt, overflow: Vt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = at(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Xe = e),
            (Ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function bl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fl(e) {
  if (ee) {
    var t = Ge;
    if (t) {
      var n = t;
      if (!id(e, t)) {
        if (bl(e)) throw Error(T(418));
        t = Sn(n.nextSibling);
        var r = Xe;
        t && id(e, t) ? qh(r, n) : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Xe = e));
      }
    } else {
      if (bl(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (ee = !1), (Xe = e);
    }
  }
}
function od(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Xe = e;
}
function Pi(e) {
  if (e !== Xe) return !1;
  if (!ee) return od(e), (ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !Ll(e.type, e.memoizedProps))),
    t && (t = Ge))
  ) {
    if (bl(e)) throw (Uh(), Error(T(418)));
    for (; t; ) qh(e, t), (t = Sn(t.nextSibling));
  }
  if ((od(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ge = Sn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ge = null;
    }
  } else Ge = Xe ? Sn(e.stateNode.nextSibling) : null;
  return !0;
}
function Uh() {
  for (var e = Ge; e; ) e = Sn(e.nextSibling);
}
function qr() {
  (Ge = Xe = null), (ee = !1);
}
function zu(e) {
  St === null ? (St = [e]) : St.push(e);
}
var Xg = Yt.ReactCurrentBatchConfig;
function as(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var s = r,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = s.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Ti(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)
    ))
  );
}
function ad(e) {
  var t = e._init;
  return t(e._payload);
}
function Bh(e) {
  function t(p, h) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [h]), (p.flags |= 16)) : g.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function s(p, h) {
    return (p = Cn(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, h, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null ? ((g = g.index), g < h ? ((p.flags |= 2), h) : g) : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, g, S) {
    return h === null || h.tag !== 6
      ? ((h = qa(g, p.mode, S)), (h.return = p), h)
      : ((h = s(h, g)), (h.return = p), h);
  }
  function l(p, h, g, S) {
    var k = g.type;
    return k === cr
      ? d(p, h, g.props.children, S, g.key)
      : h !== null &&
          (h.elementType === k ||
            (typeof k == "object" && k !== null && k.$$typeof === nn && ad(k) === h.type))
        ? ((S = s(h, g.props)), (S.ref = as(p, h, g)), (S.return = p), S)
        : ((S = eo(g.type, g.key, g.props, null, p.mode, S)),
          (S.ref = as(p, h, g)),
          (S.return = p),
          S);
  }
  function u(p, h, g, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = Ua(g, p.mode, S)), (h.return = p), h)
      : ((h = s(h, g.children || [])), (h.return = p), h);
  }
  function d(p, h, g, S, k) {
    return h === null || h.tag !== 7
      ? ((h = Qn(g, p.mode, S, k)), (h.return = p), h)
      : ((h = s(h, g)), (h.return = p), h);
  }
  function c(p, h, g) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = qa("" + h, p.mode, g)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case gi:
          return (
            (g = eo(h.type, h.key, h.props, null, p.mode, g)),
            (g.ref = as(p, null, h)),
            (g.return = p),
            g
          );
        case ur:
          return (h = Ua(h, p.mode, g)), (h.return = p), h;
        case nn:
          var S = h._init;
          return c(p, S(h._payload), g);
      }
      if (hs(h) || ns(h)) return (h = Qn(h, p.mode, g, null)), (h.return = p), h;
      Ti(p, h);
    }
    return null;
  }
  function f(p, h, g, S) {
    var k = h !== null ? h.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return k !== null ? null : a(p, h, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case gi:
          return g.key === k ? l(p, h, g, S) : null;
        case ur:
          return g.key === k ? u(p, h, g, S) : null;
        case nn:
          return (k = g._init), f(p, h, k(g._payload), S);
      }
      if (hs(g) || ns(g)) return k !== null ? null : d(p, h, g, S, null);
      Ti(p, g);
    }
    return null;
  }
  function y(p, h, g, S, k) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (p = p.get(g) || null), a(h, p, "" + S, k);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case gi:
          return (p = p.get(S.key === null ? g : S.key) || null), l(h, p, S, k);
        case ur:
          return (p = p.get(S.key === null ? g : S.key) || null), u(h, p, S, k);
        case nn:
          var x = S._init;
          return y(p, h, g, x(S._payload), k);
      }
      if (hs(S) || ns(S)) return (p = p.get(g) || null), d(h, p, S, k, null);
      Ti(h, S);
    }
    return null;
  }
  function m(p, h, g, S) {
    for (var k = null, x = null, P = h, R = (h = 0), O = null; P !== null && R < g.length; R++) {
      P.index > R ? ((O = P), (P = null)) : (O = P.sibling);
      var N = f(p, P, g[R], S);
      if (N === null) {
        P === null && (P = O);
        break;
      }
      e && P && N.alternate === null && t(p, P),
        (h = i(N, h, R)),
        x === null ? (k = N) : (x.sibling = N),
        (x = N),
        (P = O);
    }
    if (R === g.length) return n(p, P), ee && Mn(p, R), k;
    if (P === null) {
      for (; R < g.length; R++)
        (P = c(p, g[R], S)),
          P !== null && ((h = i(P, h, R)), x === null ? (k = P) : (x.sibling = P), (x = P));
      return ee && Mn(p, R), k;
    }
    for (P = r(p, P); R < g.length; R++)
      (O = y(P, p, R, g[R], S)),
        O !== null &&
          (e && O.alternate !== null && P.delete(O.key === null ? R : O.key),
          (h = i(O, h, R)),
          x === null ? (k = O) : (x.sibling = O),
          (x = O));
    return (
      e &&
        P.forEach(function (L) {
          return t(p, L);
        }),
      ee && Mn(p, R),
      k
    );
  }
  function v(p, h, g, S) {
    var k = ns(g);
    if (typeof k != "function") throw Error(T(150));
    if (((g = k.call(g)), g == null)) throw Error(T(151));
    for (
      var x = (k = null), P = h, R = (h = 0), O = null, N = g.next();
      P !== null && !N.done;
      R++, N = g.next()
    ) {
      P.index > R ? ((O = P), (P = null)) : (O = P.sibling);
      var L = f(p, P, N.value, S);
      if (L === null) {
        P === null && (P = O);
        break;
      }
      e && P && L.alternate === null && t(p, P),
        (h = i(L, h, R)),
        x === null ? (k = L) : (x.sibling = L),
        (x = L),
        (P = O);
    }
    if (N.done) return n(p, P), ee && Mn(p, R), k;
    if (P === null) {
      for (; !N.done; R++, N = g.next())
        (N = c(p, N.value, S)),
          N !== null && ((h = i(N, h, R)), x === null ? (k = N) : (x.sibling = N), (x = N));
      return ee && Mn(p, R), k;
    }
    for (P = r(p, P); !N.done; R++, N = g.next())
      (N = y(P, p, R, N.value, S)),
        N !== null &&
          (e && N.alternate !== null && P.delete(N.key === null ? R : N.key),
          (h = i(N, h, R)),
          x === null ? (k = N) : (x.sibling = N),
          (x = N));
    return (
      e &&
        P.forEach(function (F) {
          return t(p, F);
        }),
      ee && Mn(p, R),
      k
    );
  }
  function w(p, h, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === cr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case gi:
          e: {
            for (var k = g.key, x = h; x !== null; ) {
              if (x.key === k) {
                if (((k = g.type), k === cr)) {
                  if (x.tag === 7) {
                    n(p, x.sibling), (h = s(x, g.props.children)), (h.return = p), (p = h);
                    break e;
                  }
                } else if (
                  x.elementType === k ||
                  (typeof k == "object" && k !== null && k.$$typeof === nn && ad(k) === x.type)
                ) {
                  n(p, x.sibling),
                    (h = s(x, g.props)),
                    (h.ref = as(p, x, g)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, x);
                break;
              } else t(p, x);
              x = x.sibling;
            }
            g.type === cr
              ? ((h = Qn(g.props.children, p.mode, S, g.key)), (h.return = p), (p = h))
              : ((S = eo(g.type, g.key, g.props, null, p.mode, S)),
                (S.ref = as(p, h, g)),
                (S.return = p),
                (p = S));
          }
          return o(p);
        case ur:
          e: {
            for (x = g.key; h !== null; ) {
              if (h.key === x)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  n(p, h.sibling), (h = s(h, g.children || [])), (h.return = p), (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = Ua(g, p.mode, S)), (h.return = p), (p = h);
          }
          return o(p);
        case nn:
          return (x = g._init), w(p, h, x(g._payload), S);
      }
      if (hs(g)) return m(p, h, g, S);
      if (ns(g)) return v(p, h, g, S);
      Ti(p, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = s(h, g)), (h.return = p), (p = h))
          : (n(p, h), (h = qa(g, p.mode, S)), (h.return = p), (p = h)),
        o(p))
      : n(p, h);
  }
  return w;
}
var Ur = Bh(!0),
  Vh = Bh(!1),
  ko = On(null),
  _o = null,
  vr = null,
  qu = null;
function Uu() {
  qu = vr = _o = null;
}
function Bu(e) {
  var t = ko.current;
  Y(ko), (e._currentValue = t);
}
function Il(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Rr(e, t) {
  (_o = e),
    (qu = vr = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && ($e = !0), (e.firstContext = null));
}
function ct(e) {
  var t = e._currentValue;
  if (qu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), vr === null)) {
      if (_o === null) throw Error(T(308));
      (vr = e), (_o.dependencies = { lanes: 0, firstContext: e });
    } else vr = vr.next = e;
  return t;
}
var In = null;
function Vu(e) {
  In === null ? (In = [e]) : In.push(e);
}
function Qh(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Vu(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    Jt(e, r)
  );
}
function Jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var rn = !1;
function Qu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Hh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function xn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), V & 2)) {
    var s = r.pending;
    return s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)), (r.pending = t), Jt(e, n);
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Vu(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    Jt(e, n)
  );
}
function Ki(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Lu(e, n);
  }
}
function ld(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (s = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Co(e, t, n, r) {
  var s = e.updateQueue;
  rn = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (i = u) : (o.next = u), (o = l);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o && (a === null ? (d.firstBaseUpdate = u) : (a.next = u), (d.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var c = s.baseState;
    (o = 0), (d = u = l = null), (a = i);
    do {
      var f = a.lane,
        y = a.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var m = e,
            v = a;
          switch (((f = t), (y = n), v.tag)) {
            case 1:
              if (((m = v.payload), typeof m == "function")) {
                c = m.call(y, c, f);
                break e;
              }
              c = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (((m = v.payload), (f = typeof m == "function" ? m.call(y, c, f) : m), f == null))
                break e;
              c = se({}, c, f);
              break e;
            case 2:
              rn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (f = s.effects), f === null ? (s.effects = [a]) : f.push(a));
      } else
        (y = {
          eventTime: y,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = y), (l = c)) : (d = d.next = y),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        (f = a), (a = f.next), (f.next = null), (s.lastBaseUpdate = f), (s.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (l = c),
      (s.baseState = l),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = d),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (o |= s.lane), (s = s.next);
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    (Yn |= o), (e.lanes = o), (e.memoizedState = c);
  }
}
function ud(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function")) throw Error(T(191, s));
        s.call(r);
      }
    }
}
var li = {},
  Ft = On(li),
  Bs = On(li),
  Vs = On(li);
function jn(e) {
  if (e === li) throw Error(T(174));
  return e;
}
function Hu(e, t) {
  switch ((J(Vs, t), J(Bs, e), J(Ft, li), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = yl(t, e));
  }
  Y(Ft), J(Ft, t);
}
function Br() {
  Y(Ft), Y(Bs), Y(Vs);
}
function Wh(e) {
  jn(Vs.current);
  var t = jn(Ft.current),
    n = yl(t, e.type);
  t !== n && (J(Bs, e), J(Ft, n));
}
function Wu(e) {
  Bs.current === e && (Y(Ft), Y(Bs));
}
var te = On(0);
function Eo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Fa = [];
function Ku() {
  for (var e = 0; e < Fa.length; e++) Fa[e]._workInProgressVersionPrimary = null;
  Fa.length = 0;
}
var Gi = Yt.ReactCurrentDispatcher,
  Ia = Yt.ReactCurrentBatchConfig,
  Xn = 0,
  re = null,
  he = null,
  me = null,
  Ro = !1,
  _s = !1,
  Qs = 0,
  Yg = 0;
function _e() {
  throw Error(T(321));
}
function Gu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!_t(e[n], t[n])) return !1;
  return !0;
}
function Ju(e, t, n, r, s, i) {
  if (
    ((Xn = i),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Gi.current = e === null || e.memoizedState === null ? nv : rv),
    (e = n(r, s)),
    _s)
  ) {
    i = 0;
    do {
      if (((_s = !1), (Qs = 0), 25 <= i)) throw Error(T(301));
      (i += 1), (me = he = null), (t.updateQueue = null), (Gi.current = sv), (e = n(r, s));
    } while (_s);
  }
  if (
    ((Gi.current = Po),
    (t = he !== null && he.next !== null),
    (Xn = 0),
    (me = he = re = null),
    (Ro = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function Xu() {
  var e = Qs !== 0;
  return (Qs = 0), e;
}
function Tt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return me === null ? (re.memoizedState = me = e) : (me = me.next = e), me;
}
function dt() {
  if (he === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = me === null ? re.memoizedState : me.next;
  if (t !== null) (me = t), (he = e);
  else {
    if (e === null) throw Error(T(310));
    (he = e),
      (e = {
        memoizedState: he.memoizedState,
        baseState: he.baseState,
        baseQueue: he.baseQueue,
        queue: he.queue,
        next: null,
      }),
      me === null ? (re.memoizedState = me = e) : (me = me.next = e);
  }
  return me;
}
function Hs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ja(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = he,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      (s.next = i.next), (i.next = o);
    }
    (r.baseQueue = s = i), (n.pending = null);
  }
  if (s !== null) {
    (i = s.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = i;
    do {
      var d = u.lane;
      if ((Xn & d) === d)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = c), (o = r)) : (l = l.next = c), (re.lanes |= d), (Yn |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (o = r) : (l.next = a),
      _t(r, t.memoizedState) || ($e = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do (i = s.lane), (re.lanes |= i), (Yn |= i), (s = s.next);
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Da(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = (s = s.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== s);
    _t(i, t.memoizedState) || ($e = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Kh() {}
function Gh(e, t) {
  var n = re,
    r = dt(),
    s = t(),
    i = !_t(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), ($e = !0)),
    (r = r.queue),
    Yu(Yh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (me !== null && me.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Ws(9, Xh.bind(null, n, r, s, t), void 0, null), ye === null))
      throw Error(T(349));
    Xn & 30 || Jh(n, t, s);
  }
  return s;
}
function Jh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (re.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Xh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Zh(t) && ep(e);
}
function Yh(e, t, n) {
  return n(function () {
    Zh(t) && ep(e);
  });
}
function Zh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !_t(e, n);
  } catch {
    return !0;
  }
}
function ep(e) {
  var t = Jt(e, 1);
  t !== null && kt(t, e, 1, -1);
}
function cd(e) {
  var t = Tt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Hs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = tv.bind(null, re, e)),
    [t.memoizedState, e]
  );
}
function Ws(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function tp() {
  return dt().memoizedState;
}
function Ji(e, t, n, r) {
  var s = Tt();
  (re.flags |= e), (s.memoizedState = Ws(1 | t, n, void 0, r === void 0 ? null : r));
}
function Go(e, t, n, r) {
  var s = dt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (he !== null) {
    var o = he.memoizedState;
    if (((i = o.destroy), r !== null && Gu(r, o.deps))) {
      s.memoizedState = Ws(t, n, i, r);
      return;
    }
  }
  (re.flags |= e), (s.memoizedState = Ws(1 | t, n, i, r));
}
function dd(e, t) {
  return Ji(8390656, 8, e, t);
}
function Yu(e, t) {
  return Go(2048, 8, e, t);
}
function np(e, t) {
  return Go(4, 2, e, t);
}
function rp(e, t) {
  return Go(4, 4, e, t);
}
function sp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ip(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Go(4, 4, sp.bind(null, t, e), n);
}
function Zu() {}
function op(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function ap(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function lp(e, t, n) {
  return Xn & 21
    ? (_t(n, t) || ((n = hh()), (re.lanes |= n), (Yn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), ($e = !0)), (e.memoizedState = n));
}
function Zg(e, t) {
  var n = K;
  (K = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ia.transition;
  Ia.transition = {};
  try {
    e(!1), t();
  } finally {
    (K = n), (Ia.transition = r);
  }
}
function up() {
  return dt().memoizedState;
}
function ev(e, t, n) {
  var r = _n(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), cp(e)))
    dp(t, n);
  else if (((n = Qh(e, t, n, r)), n !== null)) {
    var s = Ae();
    kt(n, e, r, s), fp(n, t, r);
  }
}
function tv(e, t, n) {
  var r = _n(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cp(e)) dp(t, s);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((s.hasEagerState = !0), (s.eagerState = a), _t(a, o))) {
          var l = t.interleaved;
          l === null ? ((s.next = s), Vu(t)) : ((s.next = l.next), (l.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = Qh(e, t, s, r)), n !== null && ((s = Ae()), kt(n, e, r, s), fp(n, t, r));
  }
}
function cp(e) {
  var t = e.alternate;
  return e === re || (t !== null && t === re);
}
function dp(e, t) {
  _s = Ro = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function fp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Lu(e, n);
  }
}
var Po = {
    readContext: ct,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useInsertionEffect: _e,
    useLayoutEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useMutableSource: _e,
    useSyncExternalStore: _e,
    useId: _e,
    unstable_isNewReconciler: !1,
  },
  nv = {
    readContext: ct,
    useCallback: function (e, t) {
      return (Tt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ct,
    useEffect: dd,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Ji(4194308, 4, sp.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Ji(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ji(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Tt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Tt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ev.bind(null, re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Tt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: cd,
    useDebugValue: Zu,
    useDeferredValue: function (e) {
      return (Tt().memoizedState = e);
    },
    useTransition: function () {
      var e = cd(!1),
        t = e[0];
      return (e = Zg.bind(null, e[1])), (Tt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = re,
        s = Tt();
      if (ee) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), ye === null)) throw Error(T(349));
        Xn & 30 || Jh(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        dd(Yh.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ws(9, Xh.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Tt(),
        t = ye.identifierPrefix;
      if (ee) {
        var n = Vt,
          r = Bt;
        (n = (r & ~(1 << (32 - xt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Yg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  rv = {
    readContext: ct,
    useCallback: op,
    useContext: ct,
    useEffect: Yu,
    useImperativeHandle: ip,
    useInsertionEffect: np,
    useLayoutEffect: rp,
    useMemo: ap,
    useReducer: ja,
    useRef: tp,
    useState: function () {
      return ja(Hs);
    },
    useDebugValue: Zu,
    useDeferredValue: function (e) {
      var t = dt();
      return lp(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = ja(Hs)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: Kh,
    useSyncExternalStore: Gh,
    useId: up,
    unstable_isNewReconciler: !1,
  },
  sv = {
    readContext: ct,
    useCallback: op,
    useContext: ct,
    useEffect: Yu,
    useImperativeHandle: ip,
    useInsertionEffect: np,
    useLayoutEffect: rp,
    useMemo: ap,
    useReducer: Da,
    useRef: tp,
    useState: function () {
      return Da(Hs);
    },
    useDebugValue: Zu,
    useDeferredValue: function (e) {
      var t = dt();
      return he === null ? (t.memoizedState = e) : lp(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = Da(Hs)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: Kh,
    useSyncExternalStore: Gh,
    useId: up,
    unstable_isNewReconciler: !1,
  };
function pt(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function jl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Jo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? rr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      s = _n(e),
      i = Qt(r, s);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = xn(e, i, s)),
      t !== null && (kt(t, e, s, r), Ki(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      s = _n(e),
      i = Qt(r, s);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = xn(e, i, s)),
      t !== null && (kt(t, e, s, r), Ki(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ae(),
      r = _n(e),
      s = Qt(n, r);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = xn(e, s, r)),
      t !== null && (kt(t, e, r, n), Ki(t, e, r));
  },
};
function fd(e, t, n, r, s, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !$s(n, r) || !$s(s, i)
        : !0
  );
}
function hp(e, t, n) {
  var r = !1,
    s = Rn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ct(i))
      : ((s = qe(t) ? Gn : Oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? zr(e, s) : Rn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Jo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function hd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Jo.enqueueReplaceState(t, t.state, null);
}
function Dl(e, t, n, r) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = {}), Qu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (s.context = ct(i))
    : ((i = qe(t) ? Gn : Oe.current), (s.context = zr(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (jl(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
      t !== s.state && Jo.enqueueReplaceState(s, s.state, null),
      Co(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function Vr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ny(r)), (r = r.return);
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function $a(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $l(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var iv = typeof WeakMap == "function" ? WeakMap : Map;
function pp(e, t, n) {
  (n = Qt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Oo || ((Oo = !0), (Gl = r)), $l(e, t);
    }),
    n
  );
}
function mp(e, t, n) {
  (n = Qt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        $l(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        $l(e, t), typeof r != "function" && (kn === null ? (kn = new Set([this])) : kn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
      }),
    n
  );
}
function pd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new iv();
    var s = new Set();
    r.set(t, s);
  } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
  s.has(n) || (s.add(n), (e = wv.bind(null, e, t, n)), t.then(e, e));
}
function md(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function yd(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = Qt(-1, 1)), (t.tag = 2), xn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ov = Yt.ReactCurrentOwner,
  $e = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? Vh(t, null, n, r) : Ur(t, e.child, n, r);
}
function gd(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    Rr(t, s),
    (r = Ju(e, t, n, r, i, s)),
    (n = Xu()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~s), Xt(e, t, s))
      : (ee && n && Du(t), (t.flags |= 1), Ne(e, t, r, s), t.child)
  );
}
function vd(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ac(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), yp(e, t, i, r, s))
      : ((e = eo(n.type, null, r, t, t.mode, s)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var o = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : $s), n(o, r) && e.ref === t.ref))
      return Xt(e, t, s);
  }
  return (t.flags |= 1), (e = Cn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function yp(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($s(i, r) && e.ref === t.ref)
      if ((($e = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0)) e.flags & 131072 && ($e = !0);
      else return (t.lanes = e.lanes), Xt(e, t, s);
  }
  return zl(e, t, n, r, s);
}
function gp(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        J(Sr, Qe),
        (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          J(Sr, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        J(Sr, Qe),
        (Qe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), J(Sr, Qe), (Qe |= r);
  return Ne(e, t, s, n), t.child;
}
function vp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function zl(e, t, n, r, s) {
  var i = qe(n) ? Gn : Oe.current;
  return (
    (i = zr(t, i)),
    Rr(t, s),
    (n = Ju(e, t, n, r, i, s)),
    (r = Xu()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~s), Xt(e, t, s))
      : (ee && r && Du(t), (t.flags |= 1), Ne(e, t, n, s), t.child)
  );
}
function wd(e, t, n, r, s) {
  if (qe(n)) {
    var i = !0;
    wo(t);
  } else i = !1;
  if ((Rr(t, s), t.stateNode === null)) Xi(e, t), hp(t, n, r), Dl(t, n, r, s), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ct(u))
      : ((u = qe(n) ? Gn : Oe.current), (u = zr(t, u)));
    var d = n.getDerivedStateFromProps,
      c = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && hd(t, o, r, u)),
      (rn = !1);
    var f = t.memoizedState;
    (o.state = f),
      Co(t, r, o, s),
      (l = t.memoizedState),
      a !== r || f !== l || ze.current || rn
        ? (typeof d == "function" && (jl(t, n, d, r), (l = t.memoizedState)),
          (a = rn || fd(t, n, a, r, f, l, u))
            ? (c ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (o = t.stateNode),
      Hh(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : pt(t.type, a)),
      (o.props = u),
      (c = t.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = ct(l))
        : ((l = qe(n) ? Gn : Oe.current), (l = zr(t, l)));
    var y = n.getDerivedStateFromProps;
    (d = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== c || f !== l) && hd(t, o, r, l)),
      (rn = !1),
      (f = t.memoizedState),
      (o.state = f),
      Co(t, r, o, s);
    var m = t.memoizedState;
    a !== c || f !== m || ze.current || rn
      ? (typeof y == "function" && (jl(t, n, y, r), (m = t.memoizedState)),
        (u = rn || fd(t, n, u, r, f, m, l) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, m, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, m, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (o.props = r),
        (o.state = m),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ql(e, t, n, r, i, s);
}
function ql(e, t, n, r, s, i) {
  vp(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return s && sd(t, n, !1), Xt(e, t, i);
  (r = t.stateNode), (ov.current = t);
  var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Ur(t, e.child, null, i)), (t.child = Ur(t, null, a, i)))
      : Ne(e, t, a, i),
    (t.memoizedState = r.state),
    s && sd(t, n, !0),
    t.child
  );
}
function wp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? rd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && rd(e, t.context, !1),
    Hu(e, t.containerInfo);
}
function Sd(e, t, n, r, s) {
  return qr(), zu(s), (t.flags |= 256), Ne(e, t, n, r), t.child;
}
var Ul = { dehydrated: null, treeContext: null, retryLane: 0 };
function Bl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sp(e, t, n) {
  var r = t.pendingProps,
    s = te.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (s |= 1),
    J(te, s & 1),
    e === null)
  )
    return (
      Fl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Zo(o, r, 0, null)),
              (e = Qn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Bl(n)),
              (t.memoizedState = Ul),
              e)
            : ec(t, o))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return av(e, t, o, r, a, s, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (s = e.child), (a = s.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== s
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
        : ((r = Cn(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (i = Cn(a, i)) : ((i = Qn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Bl(n)
          : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ul),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Cn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ec(e, t) {
  return (t = Zo({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Oi(e, t, n, r) {
  return (
    r !== null && zu(r),
    Ur(t, e.child, null, n),
    (e = ec(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function av(e, t, n, r, s, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = $a(Error(T(422)))), Oi(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (s = t.mode),
          (r = Zo({ mode: "visible", children: r.children }, s, 0, null)),
          (i = Qn(i, s, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Ur(t, e.child, null, o),
          (t.child.memoizedState = Bl(o)),
          (t.memoizedState = Ul),
          i);
  if (!(t.mode & 1)) return Oi(e, t, o, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(T(419))), (r = $a(i, r, void 0)), Oi(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), $e || a)) {
    if (((r = ye), r !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (r.suspendedLanes | o) ? 0 : s),
        s !== 0 && s !== i.retryLane && ((i.retryLane = s), Jt(e, s), kt(r, e, s, -1));
    }
    return oc(), (r = $a(Error(T(421)))), Oi(e, t, o, r);
  }
  return s.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = Sv.bind(null, e)), (s._reactRetry = t), null)
    : ((e = i.treeContext),
      (Ge = Sn(s.nextSibling)),
      (Xe = t),
      (ee = !0),
      (St = null),
      e !== null &&
        ((it[ot++] = Bt),
        (it[ot++] = Vt),
        (it[ot++] = Jn),
        (Bt = e.id),
        (Vt = e.overflow),
        (Jn = t)),
      (t = ec(t, r.children)),
      (t.flags |= 4096),
      t);
}
function xd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Il(e.return, t, n);
}
function za(e, t, n, r, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function xp(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((Ne(e, t, r.children, n), (r = te.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xd(e, n, t);
        else if (e.tag === 19) xd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((J(te, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate), e !== null && Eo(e) === null && (s = n), (n = n.sibling);
        (n = s),
          n === null ? ((s = t.child), (t.child = null)) : ((s = n.sibling), (n.sibling = null)),
          za(t, !1, s, n, i);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && Eo(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        za(t, !0, n, null, i);
        break;
      case "together":
        za(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Xi(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Yn |= t.lanes), !(n & t.childLanes)))
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (e = t.child, n = Cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = Cn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function lv(e, t, n) {
  switch (t.tag) {
    case 3:
      wp(t), qr();
      break;
    case 5:
      Wh(t);
      break;
    case 1:
      qe(t.type) && wo(t);
      break;
    case 4:
      Hu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      J(ko, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (J(te, te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Sp(e, t, n)
            : (J(te, te.current & 1), (e = Xt(e, t, n)), e !== null ? e.sibling : null);
      J(te, te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null && ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        J(te, te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gp(e, t, n);
  }
  return Xt(e, t, n);
}
var kp, Vl, _p, Cp;
kp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Vl = function () {};
_p = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    (e = t.stateNode), jn(Ft.current);
    var i = null;
    switch (n) {
      case "input":
        (s = fl(e, s)), (r = fl(e, r)), (i = []);
        break;
      case "select":
        (s = se({}, s, { value: void 0 })), (r = se({}, r, { value: void 0 })), (i = []);
        break;
      case "textarea":
        (s = ml(e, s)), (r = ml(e, r)), (i = []);
        break;
      default:
        typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = go);
    }
    gl(n, r);
    var o;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var a = s[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ns.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = s != null ? s[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) || (l && l.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ""));
            for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), (n[o] = l[o]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") || (i = i || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Ns.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && X("scroll", e), i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Cp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ls(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling);
  else
    for (s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function uv(e, t, n) {
  var r = t.pendingProps;
  switch (($u(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ce(t), null;
    case 1:
      return qe(t.type) && vo(), Ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Br(),
        Y(ze),
        Y(Oe),
        Ku(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), St !== null && (Yl(St), (St = null)))),
        Vl(e, t),
        Ce(t),
        null
      );
    case 5:
      Wu(t);
      var s = jn(Vs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        _p(e, t, n, r, s), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return Ce(t), null;
        }
        if (((e = jn(Ft.current)), Pi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Nt] = t), (r[Us] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < ms.length; s++) X(ms[s], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X("error", r), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              Lc(r, i), X("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }), X("invalid", r);
              break;
            case "textarea":
              Nc(r, i), X("invalid", r);
          }
          gl(n, i), (s = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 && Ri(r.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 && Ri(r.textContent, a, e),
                    (s = ["children", "" + a]))
                : Ns.hasOwnProperty(o) && a != null && o === "onScroll" && X("scroll", r);
            }
          switch (n) {
            case "input":
              vi(r), Mc(r, i, !0);
              break;
            case "textarea":
              vi(r), Ac(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = go);
          }
          (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Yf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Nt] = t),
            (e[Us] = r),
            kp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = vl(n, r)), n)) {
              case "dialog":
                X("cancel", e), X("close", e), (s = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), (s = r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < ms.length; s++) X(ms[s], e);
                s = r;
                break;
              case "source":
                X("error", e), (s = r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", e), X("load", e), (s = r);
                break;
              case "details":
                X("toggle", e), (s = r);
                break;
              case "input":
                Lc(e, r), (s = fl(e, r)), X("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = se({}, r, { value: void 0 })),
                  X("invalid", e);
                break;
              case "textarea":
                Nc(e, r), (s = ml(e, r)), X("invalid", e);
                break;
              default:
                s = r;
            }
            gl(n, s), (a = s);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? th(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Zf(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && As(e, l)
                        : typeof l == "number" && As(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Ns.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && X("scroll", e)
                          : l != null && Cu(e, i, l, o));
              }
            switch (n) {
              case "input":
                vi(e), Mc(e, r, !1);
                break;
              case "textarea":
                vi(e), Ac(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + En(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? kr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && kr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = go);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null) Cp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = jn(Vs.current)), jn(Ft.current), Pi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Nt] = t),
            (i = r.nodeValue !== n) && ((e = Xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ri(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ri(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Nt] = t),
            (t.stateNode = r);
      }
      return Ce(t), null;
    case 13:
      if (
        (Y(te),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && Ge !== null && t.mode & 1 && !(t.flags & 128))
          Uh(), qr(), (t.flags |= 98560), (i = !1);
        else if (((i = Pi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(T(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(T(317));
            i[Nt] = t;
          } else qr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ce(t), (i = !1);
        } else St !== null && (Yl(St), (St = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || te.current & 1 ? pe === 0 && (pe = 3) : oc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ce(t),
          null);
    case 4:
      return Br(), Vl(e, t), e === null && zs(t.stateNode.containerInfo), Ce(t), null;
    case 10:
      return Bu(t.type._context), Ce(t), null;
    case 17:
      return qe(t.type) && vo(), Ce(t), null;
    case 19:
      if ((Y(te), (i = t.memoizedState), i === null)) return Ce(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) ls(i, !1);
        else {
          if (pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Eo(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    ls(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return J(te, (te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ue() > Qr &&
            ((t.flags |= 128), (r = !0), ls(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Eo(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ls(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !ee)
            )
              return Ce(t), null;
          } else
            2 * ue() - i.renderingStartTime > Qr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ls(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last), n !== null ? (n.sibling = o) : (t.child = o), (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ue()),
          (t.sibling = null),
          (n = te.current),
          J(te, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ce(t), null);
    case 22:
    case 23:
      return (
        ic(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function cv(e, t) {
  switch (($u(t), t.tag)) {
    case 1:
      return (
        qe(t.type) && vo(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Br(),
        Y(ze),
        Y(Oe),
        Ku(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Wu(t), null;
    case 13:
      if ((Y(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340));
        qr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return Y(te), null;
    case 4:
      return Br(), null;
    case 10:
      return Bu(t.type._context), null;
    case 22:
    case 23:
      return ic(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Li = !1,
  Pe = !1,
  dv = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function wr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        oe(e, t, r);
      }
    else n.current = null;
}
function Ql(e, t, n) {
  try {
    n();
  } catch (r) {
    oe(e, t, r);
  }
}
var kd = !1;
function fv(e, t) {
  if (((Tl = po), (e = Oh()), ju(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            d = 0,
            c = e,
            f = null;
          t: for (;;) {
            for (
              var y;
              c !== n || (s !== 0 && c.nodeType !== 3) || (a = o + s),
                c !== i || (r !== 0 && c.nodeType !== 3) || (l = o + r),
                c.nodeType === 3 && (o += c.nodeValue.length),
                (y = c.firstChild) !== null;

            )
              (f = c), (c = y);
            for (;;) {
              if (c === e) break t;
              if (
                (f === n && ++u === s && (a = o),
                f === i && ++d === r && (l = o),
                (y = c.nextSibling) !== null)
              )
                break;
              (c = f), (f = c.parentNode);
            }
            c = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ol = { focusedElem: e, selectionRange: n }, po = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var v = m.memoizedProps,
                    w = m.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : pt(t.type, v), w);
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (S) {
          oe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (m = kd), (kd = !1), m;
}
function Cs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        (s.destroy = void 0), i !== void 0 && Ql(t, n, i);
      }
      s = s.next;
    } while (s !== r);
  }
}
function Xo(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Hl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ep(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ep(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[Nt], delete t[Us], delete t[Nl], delete t[Kg], delete t[Gg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Rp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _d(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Wl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = go));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wl(e, t, n), e = e.sibling; e !== null; ) Wl(e, t, n), (e = e.sibling);
}
function Kl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Kl(e, t, n), e = e.sibling; e !== null; ) Kl(e, t, n), (e = e.sibling);
}
var ge = null,
  vt = !1;
function Zt(e, t, n) {
  for (n = n.child; n !== null; ) Pp(e, t, n), (n = n.sibling);
}
function Pp(e, t, n) {
  if (bt && typeof bt.onCommitFiberUnmount == "function")
    try {
      bt.onCommitFiberUnmount(Bo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Pe || wr(n, t);
    case 6:
      var r = ge,
        s = vt;
      (ge = null),
        Zt(e, t, n),
        (ge = r),
        (vt = s),
        ge !== null &&
          (vt
            ? ((e = ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null &&
        (vt
          ? ((e = ge),
            (n = n.stateNode),
            e.nodeType === 8 ? Aa(e.parentNode, n) : e.nodeType === 1 && Aa(e, n),
            js(e))
          : Aa(ge, n.stateNode));
      break;
    case 4:
      (r = ge),
        (s = vt),
        (ge = n.stateNode.containerInfo),
        (vt = !0),
        Zt(e, t, n),
        (ge = r),
        (vt = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Pe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        s = r = r.next;
        do {
          var i = s,
            o = i.destroy;
          (i = i.tag), o !== void 0 && (i & 2 || i & 4) && Ql(n, t, o), (s = s.next);
        } while (s !== r);
      }
      Zt(e, t, n);
      break;
    case 1:
      if (!Pe && (wr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          oe(n, t, a);
        }
      Zt(e, t, n);
      break;
    case 21:
      Zt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Pe = (r = Pe) || n.memoizedState !== null), Zt(e, t, n), (Pe = r))
        : Zt(e, t, n);
      break;
    default:
      Zt(e, t, n);
  }
}
function Cd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new dv()),
      t.forEach(function (r) {
        var s = xv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function ft(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ge = a.stateNode), (vt = !1);
              break e;
            case 3:
              (ge = a.stateNode.containerInfo), (vt = !0);
              break e;
            case 4:
              (ge = a.stateNode.containerInfo), (vt = !0);
              break e;
          }
          a = a.return;
        }
        if (ge === null) throw Error(T(160));
        Pp(i, o, s), (ge = null), (vt = !1);
        var l = s.alternate;
        l !== null && (l.return = null), (s.return = null);
      } catch (u) {
        oe(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Tp(t, e), (t = t.sibling);
}
function Tp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ft(t, e), Et(e), r & 4)) {
        try {
          Cs(3, e, e.return), Xo(3, e);
        } catch (v) {
          oe(e, e.return, v);
        }
        try {
          Cs(5, e, e.return);
        } catch (v) {
          oe(e, e.return, v);
        }
      }
      break;
    case 1:
      ft(t, e), Et(e), r & 512 && n !== null && wr(n, n.return);
      break;
    case 5:
      if ((ft(t, e), Et(e), r & 512 && n !== null && wr(n, n.return), e.flags & 32)) {
        var s = e.stateNode;
        try {
          As(s, "");
        } catch (v) {
          oe(e, e.return, v);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Jf(s, i), vl(a, o);
            var u = vl(a, i);
            for (o = 0; o < l.length; o += 2) {
              var d = l[o],
                c = l[o + 1];
              d === "style"
                ? th(s, c)
                : d === "dangerouslySetInnerHTML"
                  ? Zf(s, c)
                  : d === "children"
                    ? As(s, c)
                    : Cu(s, d, c, u);
            }
            switch (a) {
              case "input":
                hl(s, i);
                break;
              case "textarea":
                Xf(s, i);
                break;
              case "select":
                var f = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? kr(s, !!i.multiple, y, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? kr(s, !!i.multiple, i.defaultValue, !0)
                      : kr(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[Us] = i;
          } catch (v) {
            oe(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((ft(t, e), Et(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (s = e.stateNode), (i = e.memoizedProps);
        try {
          s.nodeValue = i;
        } catch (v) {
          oe(e, e.return, v);
        }
      }
      break;
    case 3:
      if ((ft(t, e), Et(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          js(t.containerInfo);
        } catch (v) {
          oe(e, e.return, v);
        }
      break;
    case 4:
      ft(t, e), Et(e);
      break;
    case 13:
      ft(t, e),
        Et(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i || (s.alternate !== null && s.alternate.memoizedState !== null) || (rc = ue())),
        r & 4 && Cd(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Pe = (u = Pe) || d), ft(t, e), (Pe = u)) : ft(t, e),
        Et(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !d && e.mode & 1))
          for (A = e, d = e.child; d !== null; ) {
            for (c = A = d; A !== null; ) {
              switch (((f = A), (y = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Cs(4, f, f.return);
                  break;
                case 1:
                  wr(f, f.return);
                  var m = f.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (v) {
                      oe(r, n, v);
                    }
                  }
                  break;
                case 5:
                  wr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Rd(c);
                    continue;
                  }
              }
              y !== null ? ((y.return = f), (A = y)) : Rd(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (s = c.stateNode),
                  u
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = c.stateNode),
                      (l = c.memoizedProps.style),
                      (o = l != null && l.hasOwnProperty("display") ? l.display : null),
                      (a.style.display = eh("display", o)));
              } catch (v) {
                oe(e, e.return, v);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (v) {
                oe(e, e.return, v);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) || c.memoizedState === null || c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      ft(t, e), Et(e), r & 4 && Cd(e);
      break;
    case 21:
      break;
    default:
      ft(t, e), Et(e);
  }
}
function Et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (As(s, ""), (r.flags &= -33));
          var i = _d(e);
          Kl(e, i, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = _d(e);
          Wl(e, a, o);
          break;
        default:
          throw Error(T(161));
      }
    } catch (l) {
      oe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hv(e, t, n) {
  (A = e), Op(e);
}
function Op(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var s = A,
      i = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || Li;
      if (!o) {
        var a = s.alternate,
          l = (a !== null && a.memoizedState !== null) || Pe;
        a = Li;
        var u = Pe;
        if (((Li = o), (Pe = l) && !u))
          for (A = s; A !== null; )
            (o = A),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Pd(s)
                : l !== null
                  ? ((l.return = o), (A = l))
                  : Pd(s);
        for (; i !== null; ) (A = i), Op(i), (i = i.sibling);
        (A = s), (Li = a), (Pe = u);
      }
      Ed(e);
    } else s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (A = i)) : Ed(e);
  }
}
function Ed(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Pe || Xo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Pe)
                if (n === null) r.componentDidMount();
                else {
                  var s = t.elementType === t.type ? n.memoizedProps : pt(t.type, n.memoizedProps);
                  r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && ud(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ud(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && js(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        Pe || (t.flags & 512 && Hl(t));
      } catch (f) {
        oe(t, t.return, f);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function Rd(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function Pd(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Xo(4, t);
          } catch (l) {
            oe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              oe(t, s, l);
            }
          }
          var i = t.return;
          try {
            Hl(t);
          } catch (l) {
            oe(t, i, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Hl(t);
          } catch (l) {
            oe(t, o, l);
          }
      }
    } catch (l) {
      oe(t, t.return, l);
    }
    if (t === e) {
      A = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (A = a);
      break;
    }
    A = t.return;
  }
}
var pv = Math.ceil,
  To = Yt.ReactCurrentDispatcher,
  tc = Yt.ReactCurrentOwner,
  lt = Yt.ReactCurrentBatchConfig,
  V = 0,
  ye = null,
  fe = null,
  we = 0,
  Qe = 0,
  Sr = On(0),
  pe = 0,
  Ks = null,
  Yn = 0,
  Yo = 0,
  nc = 0,
  Es = null,
  De = null,
  rc = 0,
  Qr = 1 / 0,
  Dt = null,
  Oo = !1,
  Gl = null,
  kn = null,
  Mi = !1,
  mn = null,
  Lo = 0,
  Rs = 0,
  Jl = null,
  Yi = -1,
  Zi = 0;
function Ae() {
  return V & 6 ? ue() : Yi !== -1 ? Yi : (Yi = ue());
}
function _n(e) {
  return e.mode & 1
    ? V & 2 && we !== 0
      ? we & -we
      : Xg.transition !== null
        ? (Zi === 0 && (Zi = hh()), Zi)
        : ((e = K), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Sh(e.type))), e)
    : 1;
}
function kt(e, t, n, r) {
  if (50 < Rs) throw ((Rs = 0), (Jl = null), Error(T(185)));
  ii(e, n, r),
    (!(V & 2) || e !== ye) &&
      (e === ye && (!(V & 2) && (Yo |= n), pe === 4 && on(e, we)),
      Ue(e, r),
      n === 1 && V === 0 && !(t.mode & 1) && ((Qr = ue() + 500), Ko && Ln()));
}
function Ue(e, t) {
  var n = e.callbackNode;
  Xy(e, t);
  var r = ho(e, e === ye ? we : 0);
  if (r === 0) n !== null && Ic(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ic(n), t === 1))
      e.tag === 0 ? Jg(Td.bind(null, e)) : $h(Td.bind(null, e)),
        Hg(function () {
          !(V & 6) && Ln();
        }),
        (n = null);
    else {
      switch (ph(r)) {
        case 1:
          n = Ou;
          break;
        case 4:
          n = dh;
          break;
        case 16:
          n = fo;
          break;
        case 536870912:
          n = fh;
          break;
        default:
          n = fo;
      }
      n = jp(n, Lp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Lp(e, t) {
  if (((Yi = -1), (Zi = 0), V & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (Pr() && e.callbackNode !== n) return null;
  var r = ho(e, e === ye ? we : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Mo(e, r);
  else {
    t = r;
    var s = V;
    V |= 2;
    var i = Np();
    (ye !== e || we !== t) && ((Dt = null), (Qr = ue() + 500), Vn(e, t));
    do
      try {
        gv();
        break;
      } catch (a) {
        Mp(e, a);
      }
    while (!0);
    Uu(), (To.current = i), (V = s), fe !== null ? (t = 0) : ((ye = null), (we = 0), (t = pe));
  }
  if (t !== 0) {
    if ((t === 2 && ((s = _l(e)), s !== 0 && ((r = s), (t = Xl(e, s)))), t === 1))
      throw ((n = Ks), Vn(e, 0), on(e, r), Ue(e, ue()), n);
    if (t === 6) on(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !mv(s) &&
          ((t = Mo(e, r)), t === 2 && ((i = _l(e)), i !== 0 && ((r = i), (t = Xl(e, i)))), t === 1))
      )
        throw ((n = Ks), Vn(e, 0), on(e, r), Ue(e, ue()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          Nn(e, De, Dt);
          break;
        case 3:
          if ((on(e, r), (r & 130023424) === r && ((t = rc + 500 - ue()), 10 < t))) {
            if (ho(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              Ae(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = Ml(Nn.bind(null, e, De, Dt), t);
            break;
          }
          Nn(e, De, Dt);
          break;
        case 4:
          if ((on(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - xt(r);
            (i = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~i);
          }
          if (
            ((r = s),
            (r = ue() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * pv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ml(Nn.bind(null, e, De, Dt), r);
            break;
          }
          Nn(e, De, Dt);
          break;
        case 5:
          Nn(e, De, Dt);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return Ue(e, ue()), e.callbackNode === n ? Lp.bind(null, e) : null;
}
function Xl(e, t) {
  var n = Es;
  return (
    e.current.memoizedState.isDehydrated && (Vn(e, t).flags |= 256),
    (e = Mo(e, t)),
    e !== 2 && ((t = De), (De = n), t !== null && Yl(t)),
    e
  );
}
function Yl(e) {
  De === null ? (De = e) : De.push.apply(De, e);
}
function mv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!_t(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function on(e, t) {
  for (
    t &= ~nc, t &= ~Yo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - xt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Td(e) {
  if (V & 6) throw Error(T(327));
  Pr();
  var t = ho(e, 0);
  if (!(t & 1)) return Ue(e, ue()), null;
  var n = Mo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _l(e);
    r !== 0 && ((t = r), (n = Xl(e, r)));
  }
  if (n === 1) throw ((n = Ks), Vn(e, 0), on(e, t), Ue(e, ue()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Nn(e, De, Dt), Ue(e, ue()), null
  );
}
function sc(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    (V = n), V === 0 && ((Qr = ue() + 500), Ko && Ln());
  }
}
function Zn(e) {
  mn !== null && mn.tag === 0 && !(V & 6) && Pr();
  var t = V;
  V |= 1;
  var n = lt.transition,
    r = K;
  try {
    if (((lt.transition = null), (K = 1), e)) return e();
  } finally {
    (K = r), (lt.transition = n), (V = t), !(V & 6) && Ln();
  }
}
function ic() {
  (Qe = Sr.current), Y(Sr);
}
function Vn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Qg(n)), fe !== null))
    for (n = fe.return; n !== null; ) {
      var r = n;
      switch (($u(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && vo();
          break;
        case 3:
          Br(), Y(ze), Y(Oe), Ku();
          break;
        case 5:
          Wu(r);
          break;
        case 4:
          Br();
          break;
        case 13:
          Y(te);
          break;
        case 19:
          Y(te);
          break;
        case 10:
          Bu(r.type._context);
          break;
        case 22:
        case 23:
          ic();
      }
      n = n.return;
    }
  if (
    ((ye = e),
    (fe = e = Cn(e.current, null)),
    (we = Qe = t),
    (pe = 0),
    (Ks = null),
    (nc = Yo = Yn = 0),
    (De = Es = null),
    In !== null)
  ) {
    for (t = 0; t < In.length; t++)
      if (((n = In[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = s), (r.next = o);
        }
        n.pending = r;
      }
    In = null;
  }
  return e;
}
function Mp(e, t) {
  do {
    var n = fe;
    try {
      if ((Uu(), (Gi.current = Po), Ro)) {
        for (var r = re.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        Ro = !1;
      }
      if (
        ((Xn = 0),
        (me = he = re = null),
        (_s = !1),
        (Qs = 0),
        (tc.current = null),
        n === null || n.return === null)
      ) {
        (pe = 1), (Ks = t), (fe = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = we),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            d = a,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = md(o);
          if (y !== null) {
            (y.flags &= -257), yd(y, o, a, i, t), y.mode & 1 && pd(i, u, t), (t = y), (l = u);
            var m = t.updateQueue;
            if (m === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else m.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              pd(i, u, t), oc();
              break e;
            }
            l = Error(T(426));
          }
        } else if (ee && a.mode & 1) {
          var w = md(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), yd(w, o, a, i, t), zu(Vr(l, a));
            break e;
          }
        }
        (i = l = Vr(l, a)), pe !== 4 && (pe = 2), Es === null ? (Es = [i]) : Es.push(i), (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = pp(i, l, t);
              ld(i, p);
              break e;
            case 1:
              a = l;
              var h = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (kn === null || !kn.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = mp(i, a, t);
                ld(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      bp(n);
    } catch (k) {
      (t = k), fe === n && n !== null && (fe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Np() {
  var e = To.current;
  return (To.current = Po), e === null ? Po : e;
}
function oc() {
  (pe === 0 || pe === 3 || pe === 2) && (pe = 4),
    ye === null || (!(Yn & 268435455) && !(Yo & 268435455)) || on(ye, we);
}
function Mo(e, t) {
  var n = V;
  V |= 2;
  var r = Np();
  (ye !== e || we !== t) && ((Dt = null), Vn(e, t));
  do
    try {
      yv();
      break;
    } catch (s) {
      Mp(e, s);
    }
  while (!0);
  if ((Uu(), (V = n), (To.current = r), fe !== null)) throw Error(T(261));
  return (ye = null), (we = 0), pe;
}
function yv() {
  for (; fe !== null; ) Ap(fe);
}
function gv() {
  for (; fe !== null && !Uy(); ) Ap(fe);
}
function Ap(e) {
  var t = Ip(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps), t === null ? bp(e) : (fe = t), (tc.current = null);
}
function bp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = cv(n, t)), n !== null)) {
        (n.flags &= 32767), (fe = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (pe = 6), (fe = null);
        return;
      }
    } else if (((n = uv(n, t, Qe)), n !== null)) {
      fe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      fe = t;
      return;
    }
    fe = t = e;
  } while (t !== null);
  pe === 0 && (pe = 5);
}
function Nn(e, t, n) {
  var r = K,
    s = lt.transition;
  try {
    (lt.transition = null), (K = 1), vv(e, t, n, r);
  } finally {
    (lt.transition = s), (K = r);
  }
  return null;
}
function vv(e, t, n, r) {
  do Pr();
  while (mn !== null);
  if (V & 6) throw Error(T(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Yy(e, i),
    e === ye && ((fe = ye = null), (we = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Mi ||
      ((Mi = !0),
      jp(fo, function () {
        return Pr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = lt.transition), (lt.transition = null);
    var o = K;
    K = 1;
    var a = V;
    (V |= 4),
      (tc.current = null),
      fv(e, n),
      Tp(n, e),
      Dg(Ol),
      (po = !!Tl),
      (Ol = Tl = null),
      (e.current = n),
      hv(n),
      By(),
      (V = a),
      (K = o),
      (lt.transition = i);
  } else e.current = n;
  if (
    (Mi && ((Mi = !1), (mn = e), (Lo = s)),
    (i = e.pendingLanes),
    i === 0 && (kn = null),
    Hy(n.stateNode),
    Ue(e, ue()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if (Oo) throw ((Oo = !1), (e = Gl), (Gl = null), e);
  return (
    Lo & 1 && e.tag !== 0 && Pr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Jl ? Rs++ : ((Rs = 0), (Jl = e))) : (Rs = 0),
    Ln(),
    null
  );
}
function Pr() {
  if (mn !== null) {
    var e = ph(Lo),
      t = lt.transition,
      n = K;
    try {
      if (((lt.transition = null), (K = 16 > e ? 16 : e), mn === null)) var r = !1;
      else {
        if (((e = mn), (mn = null), (Lo = 0), V & 6)) throw Error(T(331));
        var s = V;
        for (V |= 4, A = e.current; A !== null; ) {
          var i = A,
            o = i.child;
          if (A.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (A = u; A !== null; ) {
                  var d = A;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cs(8, d, i);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (A = c);
                  else
                    for (; A !== null; ) {
                      d = A;
                      var f = d.sibling,
                        y = d.return;
                      if ((Ep(d), d === u)) {
                        A = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = y), (A = f);
                        break;
                      }
                      A = y;
                    }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var v = m.child;
                if (v !== null) {
                  m.child = null;
                  do {
                    var w = v.sibling;
                    (v.sibling = null), (v = w);
                  } while (v !== null);
                }
              }
              A = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (A = o);
          else
            e: for (; A !== null; ) {
              if (((i = A), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Cs(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (A = p);
                break e;
              }
              A = i.return;
            }
        }
        var h = e.current;
        for (A = h; A !== null; ) {
          o = A;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (A = g);
          else
            e: for (o = h; A !== null; ) {
              if (((a = A), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xo(9, a);
                  }
                } catch (k) {
                  oe(a, a.return, k);
                }
              if (a === o) {
                A = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (A = S);
                break e;
              }
              A = a.return;
            }
        }
        if (((V = s), Ln(), bt && typeof bt.onPostCommitFiberRoot == "function"))
          try {
            bt.onPostCommitFiberRoot(Bo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (K = n), (lt.transition = t);
    }
  }
  return !1;
}
function Od(e, t, n) {
  (t = Vr(n, t)),
    (t = pp(e, t, 1)),
    (e = xn(e, t, 1)),
    (t = Ae()),
    e !== null && (ii(e, 1, t), Ue(e, t));
}
function oe(e, t, n) {
  if (e.tag === 3) Od(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Od(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (kn === null || !kn.has(r)))
        ) {
          (e = Vr(n, e)),
            (e = mp(t, e, 1)),
            (t = xn(t, e, 1)),
            (e = Ae()),
            t !== null && (ii(t, 1, e), Ue(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function wv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ye === e &&
      (we & n) === n &&
      (pe === 4 || (pe === 3 && (we & 130023424) === we && 500 > ue() - rc) ? Vn(e, 0) : (nc |= n)),
    Ue(e, t);
}
function Fp(e, t) {
  t === 0 && (e.mode & 1 ? ((t = xi), (xi <<= 1), !(xi & 130023424) && (xi = 4194304)) : (t = 1));
  var n = Ae();
  (e = Jt(e, t)), e !== null && (ii(e, t, n), Ue(e, n));
}
function Sv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Fp(e, n);
}
function xv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), Fp(e, n);
}
var Ip;
Ip = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current) $e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ($e = !1), lv(e, t, n);
      $e = !!(e.flags & 131072);
    }
  else ($e = !1), ee && t.flags & 1048576 && zh(t, xo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Xi(e, t), (e = t.pendingProps);
      var s = zr(t, Oe.current);
      Rr(t, n), (s = Ju(null, t, r, e, s, n));
      var i = Xu();
      return (
        (t.flags |= 1),
        typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            qe(r) ? ((i = !0), wo(t)) : (i = !1),
            (t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null),
            Qu(t),
            (s.updater = Jo),
            (t.stateNode = s),
            (s._reactInternals = t),
            Dl(t, r, e, n),
            (t = ql(null, t, r, !0, i, n)))
          : ((t.tag = 0), ee && i && Du(t), Ne(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Xi(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = _v(r)),
          (e = pt(r, e)),
          s)
        ) {
          case 0:
            t = zl(null, t, r, e, n);
            break e;
          case 1:
            t = wd(null, t, r, e, n);
            break e;
          case 11:
            t = gd(null, t, r, e, n);
            break e;
          case 14:
            t = vd(null, t, r, pt(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : pt(r, s)),
        zl(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : pt(r, s)),
        wd(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((wp(t), e === null)) throw Error(T(387));
        (r = t.pendingProps), (i = t.memoizedState), (s = i.element), Hh(e, t), Co(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (s = Vr(Error(T(423)), t)), (t = Sd(e, t, r, n, s));
            break e;
          } else if (r !== s) {
            (s = Vr(Error(T(424)), t)), (t = Sd(e, t, r, n, s));
            break e;
          } else
            for (
              Ge = Sn(t.stateNode.containerInfo.firstChild),
                Xe = t,
                ee = !0,
                St = null,
                n = Vh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((qr(), r === s)) {
            t = Xt(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wh(t),
        e === null && Fl(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = s.children),
        Ll(r, s) ? (o = null) : i !== null && Ll(r, i) && (t.flags |= 32),
        vp(e, t),
        Ne(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Fl(t), null;
    case 13:
      return Sp(e, t, n);
    case 4:
      return (
        Hu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ur(t, null, r, n)) : Ne(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : pt(r, s)),
        gd(e, t, r, s, n)
      );
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (o = s.value),
          J(ko, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (_t(i.value, o)) {
            if (i.children === s.children && !ze.current) {
              t = Xt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Qt(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null ? (l.next = l) : ((l.next = d.next), (d.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Il(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(T(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Il(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Ne(e, t, s.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Rr(t, n),
        (s = ct(s)),
        (r = r(s)),
        (t.flags |= 1),
        Ne(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (s = pt(r, t.pendingProps)), (s = pt(r.type, s)), vd(e, t, r, s, n);
    case 15:
      return yp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : pt(r, s)),
        Xi(e, t),
        (t.tag = 1),
        qe(r) ? ((e = !0), wo(t)) : (e = !1),
        Rr(t, n),
        hp(t, r, s),
        Dl(t, r, s, n),
        ql(null, t, r, !0, e, n)
      );
    case 19:
      return xp(e, t, n);
    case 22:
      return gp(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function jp(e, t) {
  return ch(e, t);
}
function kv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function at(e, t, n, r) {
  return new kv(e, t, n, r);
}
function ac(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function _v(e) {
  if (typeof e == "function") return ac(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ru)) return 11;
    if (e === Pu) return 14;
  }
  return 2;
}
function Cn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = at(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function eo(e, t, n, r, s, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) ac(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case cr:
        return Qn(n.children, s, i, t);
      case Eu:
        (o = 8), (s |= 8);
        break;
      case ll:
        return (e = at(12, n, t, s | 2)), (e.elementType = ll), (e.lanes = i), e;
      case ul:
        return (e = at(13, n, t, s)), (e.elementType = ul), (e.lanes = i), e;
      case cl:
        return (e = at(19, n, t, s)), (e.elementType = cl), (e.lanes = i), e;
      case Wf:
        return Zo(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qf:
              o = 10;
              break e;
            case Hf:
              o = 9;
              break e;
            case Ru:
              o = 11;
              break e;
            case Pu:
              o = 14;
              break e;
            case nn:
              (o = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (t = at(o, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Qn(e, t, n, r) {
  return (e = at(7, e, r, t)), (e.lanes = n), e;
}
function Zo(e, t, n, r) {
  return (
    (e = at(22, e, r, t)), (e.elementType = Wf), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
  );
}
function qa(e, t, n) {
  return (e = at(6, e, null, t)), (e.lanes = n), e;
}
function Ua(e, t, n) {
  return (
    (t = at(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Cv(e, t, n, r, s) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ka(0)),
    (this.expirationTimes = ka(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ka(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function lc(e, t, n, r, s, i, o, a, l) {
  return (
    (e = new Cv(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = at(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Qu(i),
    e
  );
}
function Ev(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ur,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dp(e) {
  if (!e) return Rn;
  e = e._reactInternals;
  e: {
    if (rr(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (qe(n)) return Dh(e, n, t);
  }
  return t;
}
function $p(e, t, n, r, s, i, o, a, l) {
  return (
    (e = lc(n, r, !0, e, s, i, o, a, l)),
    (e.context = Dp(null)),
    (n = e.current),
    (r = Ae()),
    (s = _n(n)),
    (i = Qt(r, s)),
    (i.callback = t ?? null),
    xn(n, i, s),
    (e.current.lanes = s),
    ii(e, s, r),
    Ue(e, r),
    e
  );
}
function ea(e, t, n, r) {
  var s = t.current,
    i = Ae(),
    o = _n(s);
  return (
    (n = Dp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qt(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = xn(s, t, o)),
    e !== null && (kt(e, s, o, i), Ki(e, s, o)),
    o
  );
}
function No(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ld(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function uc(e, t) {
  Ld(e, t), (e = e.alternate) && Ld(e, t);
}
function Rv() {
  return null;
}
var zp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function cc(e) {
  this._internalRoot = e;
}
ta.prototype.render = cc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  ea(e, t, null, null);
};
ta.prototype.unmount = cc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zn(function () {
      ea(null, e, null, null);
    }),
      (t[Gt] = null);
  }
};
function ta(e) {
  this._internalRoot = e;
}
ta.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < sn.length && t !== 0 && t < sn[n].priority; n++);
    sn.splice(n, 0, e), n === 0 && wh(e);
  }
};
function dc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function na(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Md() {}
function Pv(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = No(o);
        i.call(u);
      };
    }
    var o = $p(t, r, e, 0, null, !1, !1, "", Md);
    return (
      (e._reactRootContainer = o),
      (e[Gt] = o.current),
      zs(e.nodeType === 8 ? e.parentNode : e),
      Zn(),
      o
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = No(l);
      a.call(u);
    };
  }
  var l = lc(e, 0, !1, null, null, !1, !1, "", Md);
  return (
    (e._reactRootContainer = l),
    (e[Gt] = l.current),
    zs(e.nodeType === 8 ? e.parentNode : e),
    Zn(function () {
      ea(t, l, n, r);
    }),
    l
  );
}
function ra(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var l = No(o);
        a.call(l);
      };
    }
    ea(t, o, e, s);
  } else o = Pv(n, t, e, s, r);
  return No(o);
}
mh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ps(t.pendingLanes);
        n !== 0 && (Lu(t, n | 1), Ue(t, ue()), !(V & 6) && ((Qr = ue() + 500), Ln()));
      }
      break;
    case 13:
      Zn(function () {
        var r = Jt(e, 1);
        if (r !== null) {
          var s = Ae();
          kt(r, e, 1, s);
        }
      }),
        uc(e, 1);
  }
};
Mu = function (e) {
  if (e.tag === 13) {
    var t = Jt(e, 134217728);
    if (t !== null) {
      var n = Ae();
      kt(t, e, 134217728, n);
    }
    uc(e, 134217728);
  }
};
yh = function (e) {
  if (e.tag === 13) {
    var t = _n(e),
      n = Jt(e, t);
    if (n !== null) {
      var r = Ae();
      kt(n, e, t, r);
    }
    uc(e, t);
  }
};
gh = function () {
  return K;
};
vh = function (e, t) {
  var n = K;
  try {
    return (K = e), t();
  } finally {
    K = n;
  }
};
Sl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((hl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Wo(r);
            if (!s) throw Error(T(90));
            Gf(r), hl(r, s);
          }
        }
      }
      break;
    case "textarea":
      Xf(e, n);
      break;
    case "select":
      (t = n.value), t != null && kr(e, !!n.multiple, t, !1);
  }
};
sh = sc;
ih = Zn;
var Tv = { usingClientEntryPoint: !1, Events: [ai, pr, Wo, nh, rh, sc] },
  us = {
    findFiberByHostInstance: Fn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ov = {
    bundleType: us.bundleType,
    version: us.version,
    rendererPackageName: us.rendererPackageName,
    rendererConfig: us.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = lh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: us.findFiberByHostInstance || Rv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ni.isDisabled && Ni.supportsFiber)
    try {
      (Bo = Ni.inject(Ov)), (bt = Ni);
    } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tv;
et.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!dc(t)) throw Error(T(200));
  return Ev(e, t, null, n);
};
et.createRoot = function (e, t) {
  if (!dc(e)) throw Error(T(299));
  var n = !1,
    r = "",
    s = zp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = lc(e, 1, !1, null, null, n, !1, r, s)),
    (e[Gt] = t.current),
    zs(e.nodeType === 8 ? e.parentNode : e),
    new cc(t)
  );
};
et.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = lh(t)), (e = e === null ? null : e.stateNode), e;
};
et.flushSync = function (e) {
  return Zn(e);
};
et.hydrate = function (e, t, n) {
  if (!na(t)) throw Error(T(200));
  return ra(null, e, t, !0, n);
};
et.hydrateRoot = function (e, t, n) {
  if (!dc(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    o = zp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = $p(t, null, e, 1, n ?? null, s, !1, i, o)),
    (e[Gt] = t.current),
    zs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s);
  return new ta(t);
};
et.render = function (e, t, n) {
  if (!na(t)) throw Error(T(200));
  return ra(null, e, t, !1, n);
};
et.unmountComponentAtNode = function (e) {
  if (!na(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (Zn(function () {
        ra(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Gt] = null);
        });
      }),
      !0)
    : !1;
};
et.unstable_batchedUpdates = sc;
et.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!na(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return ra(e, t, n, !1, r);
};
et.version = "18.3.1-next-f1338f8080-20240426";
function qp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qp);
    } catch (e) {
      console.error(e);
    }
}
qp(), (qf.exports = et);
var Up = qf.exports;
const Bp = Of(Up);
var Vp,
  Nd = Up;
(Vp = Nd.createRoot), Nd.hydrateRoot;
const Hn = "__TSR_index",
  Ad = "popstate",
  bd = "beforeunload";
function Qp(e) {
  let t = e.getLocation();
  const n = new Set(),
    r = (o) => {
      (t = e.getLocation()), n.forEach((a) => a({ location: t, action: o }));
    },
    s = (o) => {
      (e.notifyOnIndexChange ?? !0) ? r(o) : (t = e.getLocation());
    },
    i = async ({ task: o, navigateOpts: a, ...l }) => {
      var u, d;
      if ((a == null ? void 0 : a.ignoreBlocker) ?? !1) {
        o();
        return;
      }
      const f = ((u = e.getBlockers) == null ? void 0 : u.call(e)) ?? [],
        y = l.type === "PUSH" || l.type === "REPLACE";
      if (typeof document < "u" && f.length && y)
        for (const m of f) {
          const v = Gs(l.path, l.state);
          if (await m.blockerFn({ currentLocation: t, nextLocation: v, action: l.type })) {
            (d = e.onBlocked) == null || d.call(e);
            return;
          }
        }
      o();
    };
  return {
    get location() {
      return t;
    },
    get length() {
      return e.getLength();
    },
    subscribers: n,
    subscribe: (o) => (
      n.add(o),
      () => {
        n.delete(o);
      }
    ),
    push: (o, a, l) => {
      const u = t.state[Hn];
      (a = Zl(u + 1, a)),
        i({
          task: () => {
            e.pushState(o, a), r({ type: "PUSH" });
          },
          navigateOpts: l,
          type: "PUSH",
          path: o,
          state: a,
        });
    },
    replace: (o, a, l) => {
      const u = t.state[Hn];
      (a = Zl(u, a)),
        i({
          task: () => {
            e.replaceState(o, a), r({ type: "REPLACE" });
          },
          navigateOpts: l,
          type: "REPLACE",
          path: o,
          state: a,
        });
    },
    go: (o, a) => {
      i({
        task: () => {
          e.go(o), s({ type: "GO", index: o });
        },
        navigateOpts: a,
        type: "GO",
      });
    },
    back: (o) => {
      i({
        task: () => {
          e.back((o == null ? void 0 : o.ignoreBlocker) ?? !1), s({ type: "BACK" });
        },
        navigateOpts: o,
        type: "BACK",
      });
    },
    forward: (o) => {
      i({
        task: () => {
          e.forward((o == null ? void 0 : o.ignoreBlocker) ?? !1), s({ type: "FORWARD" });
        },
        navigateOpts: o,
        type: "FORWARD",
      });
    },
    canGoBack: () => t.state[Hn] !== 0,
    createHref: (o) => e.createHref(o),
    block: (o) => {
      var a;
      if (!e.setBlockers) return () => {};
      const l = ((a = e.getBlockers) == null ? void 0 : a.call(e)) ?? [];
      return (
        e.setBlockers([...l, o]),
        () => {
          var u, d;
          const c = ((u = e.getBlockers) == null ? void 0 : u.call(e)) ?? [];
          (d = e.setBlockers) == null ||
            d.call(
              e,
              c.filter((f) => f !== o)
            );
        }
      );
    },
    flush: () => {
      var o;
      return (o = e.flush) == null ? void 0 : o.call(e);
    },
    destroy: () => {
      var o;
      return (o = e.destroy) == null ? void 0 : o.call(e);
    },
    notify: r,
  };
}
function Zl(e, t) {
  return t || (t = {}), { ...t, key: Nv(), [Hn]: e };
}
function Lv(e) {
  const t = typeof document < "u" ? window : void 0,
    n = t.history.pushState,
    r = t.history.replaceState;
  let s = [];
  const i = () => s,
    o = (R) => (s = R),
    a = (R) => R,
    l = () => Gs(`${t.location.pathname}${t.location.search}${t.location.hash}`, t.history.state);
  let u = l(),
    d,
    c = !1,
    f = !1,
    y = !1,
    m = !1;
  const v = () => u;
  let w, p;
  const h = () => {
      w &&
        ((P._ignoreSubscribers = !0),
        (w.isPush ? t.history.pushState : t.history.replaceState)(w.state, "", w.href),
        (P._ignoreSubscribers = !1),
        (w = void 0),
        (p = void 0),
        (d = void 0));
    },
    g = (R, O, N) => {
      const L = a(O);
      p || (d = u),
        (u = Gs(O, N)),
        (w = { href: L, state: N, isPush: (w == null ? void 0 : w.isPush) || R === "push" }),
        p || (p = Promise.resolve().then(() => h()));
    },
    S = (R) => {
      (u = l()), P.notify({ type: R });
    },
    k = async () => {
      if (f) {
        f = !1;
        return;
      }
      const R = l(),
        O = R.state[Hn] - u.state[Hn],
        N = O === 1,
        L = O === -1,
        F = (!N && !L) || c;
      c = !1;
      const U = F ? "GO" : L ? "BACK" : "FORWARD",
        Q = F ? { type: "GO", index: O } : { type: L ? "BACK" : "FORWARD" };
      if (y) y = !1;
      else {
        const H = i();
        if (typeof document < "u" && H.length) {
          for (const G of H)
            if (await G.blockerFn({ currentLocation: u, nextLocation: R, action: U })) {
              (f = !0), t.history.go(1), P.notify(Q);
              return;
            }
        }
      }
      (u = l()), P.notify(Q);
    },
    x = (R) => {
      if (m) {
        m = !1;
        return;
      }
      let O = !1;
      const N = i();
      if (typeof document < "u" && N.length)
        for (const L of N) {
          const F = L.enableBeforeUnload ?? !0;
          if (F === !0) {
            O = !0;
            break;
          }
          if (typeof F == "function" && F() === !0) {
            O = !0;
            break;
          }
        }
      if (O) return R.preventDefault(), (R.returnValue = "");
    },
    P = Qp({
      getLocation: v,
      getLength: () => t.history.length,
      pushState: (R, O) => g("push", R, O),
      replaceState: (R, O) => g("replace", R, O),
      back: (R) => (R && (y = !0), (m = !0), t.history.back()),
      forward: (R) => {
        R && (y = !0), (m = !0), t.history.forward();
      },
      go: (R) => {
        (c = !0), t.history.go(R);
      },
      createHref: (R) => a(R),
      flush: h,
      destroy: () => {
        (t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(bd, x, { capture: !0 }),
          t.removeEventListener(Ad, k);
      },
      onBlocked: () => {
        d && u !== d && (u = d);
      },
      getBlockers: i,
      setBlockers: o,
      notifyOnIndexChange: !1,
    });
  return (
    t.addEventListener(bd, x, { capture: !0 }),
    t.addEventListener(Ad, k),
    (t.history.pushState = function (...R) {
      const O = n.apply(t.history, R);
      return P._ignoreSubscribers || S("PUSH"), O;
    }),
    (t.history.replaceState = function (...R) {
      const O = r.apply(t.history, R);
      return P._ignoreSubscribers || S("REPLACE"), O;
    }),
    P
  );
}
function Mv(e = { initialEntries: ["/"] }) {
  const t = e.initialEntries;
  let n = e.initialIndex ? Math.min(Math.max(e.initialIndex, 0), t.length - 1) : t.length - 1;
  const r = t.map((i, o) => Zl(o, void 0));
  return Qp({
    getLocation: () => Gs(t[n], r[n]),
    getLength: () => t.length,
    pushState: (i, o) => {
      n < t.length - 1 && (t.splice(n + 1), r.splice(n + 1)),
        r.push(o),
        t.push(i),
        (n = Math.max(t.length - 1, 0));
    },
    replaceState: (i, o) => {
      (r[n] = o), (t[n] = i);
    },
    back: () => {
      n = Math.max(n - 1, 0);
    },
    forward: () => {
      n = Math.min(n + 1, t.length - 1);
    },
    go: (i) => {
      n = Math.min(Math.max(n + i, 0), t.length - 1);
    },
    createHref: (i) => i,
  });
}
function Gs(e, t) {
  const n = e.indexOf("#"),
    r = e.indexOf("?");
  return {
    href: e,
    pathname: e.substring(0, n > 0 ? (r > 0 ? Math.min(n, r) : n) : r > 0 ? r : e.length),
    hash: n > -1 ? e.substring(n) : "",
    search: r > -1 ? e.slice(r, n === -1 ? void 0 : n) : "",
    state: t || { [Hn]: 0 },
  };
}
function Nv() {
  return (Math.random() + 1).toString(36).substring(7);
}
var Av = "Invariant failed";
function Ke(e, t) {
  if (!e) throw new Error(Av);
}
const Ba = b.createContext(null);
function Hp() {
  return typeof document > "u"
    ? Ba
    : window.__TSR_ROUTER_CONTEXT__
      ? window.__TSR_ROUTER_CONTEXT__
      : ((window.__TSR_ROUTER_CONTEXT__ = Ba), Ba);
}
function sr(e) {
  const t = b.useContext(Hp());
  return e == null || e.warn, t;
}
var Wp = { exports: {} },
  Kp = {},
  Gp = { exports: {} },
  Jp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hr = b;
function bv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fv = typeof Object.is == "function" ? Object.is : bv,
  Iv = Hr.useState,
  jv = Hr.useEffect,
  Dv = Hr.useLayoutEffect,
  $v = Hr.useDebugValue;
function zv(e, t) {
  var n = t(),
    r = Iv({ inst: { value: n, getSnapshot: t } }),
    s = r[0].inst,
    i = r[1];
  return (
    Dv(
      function () {
        (s.value = n), (s.getSnapshot = t), Va(s) && i({ inst: s });
      },
      [e, n, t]
    ),
    jv(
      function () {
        return (
          Va(s) && i({ inst: s }),
          e(function () {
            Va(s) && i({ inst: s });
          })
        );
      },
      [e]
    ),
    $v(n),
    n
  );
}
function Va(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fv(e, n);
  } catch {
    return !0;
  }
}
function qv(e, t) {
  return t();
}
var Uv =
  typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"
    ? qv
    : zv;
Jp.useSyncExternalStore = Hr.useSyncExternalStore !== void 0 ? Hr.useSyncExternalStore : Uv;
Gp.exports = Jp;
var Bv = Gp.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sa = b,
  Vv = Bv;
function Qv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Hv = typeof Object.is == "function" ? Object.is : Qv,
  Wv = Vv.useSyncExternalStore,
  Kv = sa.useRef,
  Gv = sa.useEffect,
  Jv = sa.useMemo,
  Xv = sa.useDebugValue;
Kp.useSyncExternalStoreWithSelector = function (e, t, n, r, s) {
  var i = Kv(null);
  if (i.current === null) {
    var o = { hasValue: !1, value: null };
    i.current = o;
  } else o = i.current;
  i = Jv(
    function () {
      function l(y) {
        if (!u) {
          if (((u = !0), (d = y), (y = r(y)), s !== void 0 && o.hasValue)) {
            var m = o.value;
            if (s(m, y)) return (c = m);
          }
          return (c = y);
        }
        if (((m = c), Hv(d, y))) return m;
        var v = r(y);
        return s !== void 0 && s(m, v) ? ((d = y), m) : ((d = y), (c = v));
      }
      var u = !1,
        d,
        c,
        f = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        f === null
          ? void 0
          : function () {
              return l(f());
            },
      ];
    },
    [t, n, r, s]
  );
  var a = Wv(e, i[0], i[1]);
  return (
    Gv(
      function () {
        (o.hasValue = !0), (o.value = a);
      },
      [a]
    ),
    Xv(a),
    a
  );
};
Wp.exports = Kp;
var Yv = Wp.exports;
const Tr = new WeakMap(),
  to = new WeakMap(),
  Ao = { current: [] };
let Qa = !1,
  Ps = 0;
const ys = new Set(),
  Ai = new Map();
function Xp(e) {
  const t = Array.from(e).sort((n, r) =>
    n instanceof Or && n.options.deps.includes(r)
      ? 1
      : r instanceof Or && r.options.deps.includes(n)
        ? -1
        : 0
  );
  for (const n of t) {
    if (Ao.current.includes(n)) continue;
    Ao.current.push(n), n.recompute();
    const r = to.get(n);
    if (r)
      for (const s of r) {
        const i = Tr.get(s);
        i && Xp(i);
      }
  }
}
function Zv(e) {
  e.listeners.forEach((t) => t({ prevVal: e.prevState, currentVal: e.state }));
}
function e0(e) {
  e.listeners.forEach((t) => t({ prevVal: e.prevState, currentVal: e.state }));
}
function Yp(e) {
  if ((Ps > 0 && !Ai.has(e) && Ai.set(e, e.prevState), ys.add(e), !(Ps > 0) && !Qa))
    try {
      for (Qa = !0; ys.size > 0; ) {
        const t = Array.from(ys);
        ys.clear();
        for (const n of t) {
          const r = Ai.get(n) ?? n.prevState;
          (n.prevState = r), Zv(n);
        }
        for (const n of t) {
          const r = Tr.get(n);
          r && (Ao.current.push(n), Xp(r));
        }
        for (const n of t) {
          const r = Tr.get(n);
          if (r) for (const s of r) e0(s);
        }
      }
    } finally {
      (Qa = !1), (Ao.current = []), Ai.clear();
    }
}
function Ha(e) {
  Ps++;
  try {
    e();
  } finally {
    if ((Ps--, Ps === 0)) {
      const t = Array.from(ys)[0];
      t && Yp(t);
    }
  }
}
class eu {
  constructor(t, n) {
    (this.listeners = new Set()),
      (this.subscribe = (r) => {
        var s, i;
        this.listeners.add(r);
        const o =
          (i = (s = this.options) == null ? void 0 : s.onSubscribe) == null
            ? void 0
            : i.call(s, r, this);
        return () => {
          this.listeners.delete(r), o == null || o();
        };
      }),
      (this.setState = (r) => {
        var s, i, o;
        (this.prevState = this.state),
          (this.state =
            (s = this.options) != null && s.updateFn
              ? this.options.updateFn(this.prevState)(r)
              : r(this.prevState)),
          (o = (i = this.options) == null ? void 0 : i.onUpdate) == null || o.call(i),
          Yp(this);
      }),
      (this.prevState = t),
      (this.state = t),
      (this.options = n);
  }
}
class Or {
  constructor(t) {
    (this.listeners = new Set()),
      (this._subscriptions = []),
      (this.lastSeenDepValues = []),
      (this.getDepVals = () => {
        const n = [],
          r = [];
        for (const s of this.options.deps) n.push(s.prevState), r.push(s.state);
        return (
          (this.lastSeenDepValues = r),
          { prevDepVals: n, currDepVals: r, prevVal: this.prevState ?? void 0 }
        );
      }),
      (this.recompute = () => {
        var n, r;
        this.prevState = this.state;
        const { prevDepVals: s, currDepVals: i, prevVal: o } = this.getDepVals();
        (this.state = this.options.fn({ prevDepVals: s, currDepVals: i, prevVal: o })),
          (r = (n = this.options).onUpdate) == null || r.call(n);
      }),
      (this.checkIfRecalculationNeededDeeply = () => {
        for (const i of this.options.deps) i instanceof Or && i.checkIfRecalculationNeededDeeply();
        let n = !1;
        const r = this.lastSeenDepValues,
          { currDepVals: s } = this.getDepVals();
        for (let i = 0; i < s.length; i++)
          if (s[i] !== r[i]) {
            n = !0;
            break;
          }
        n && this.recompute();
      }),
      (this.mount = () => (
        this.registerOnGraph(),
        this.checkIfRecalculationNeededDeeply(),
        () => {
          this.unregisterFromGraph();
          for (const n of this._subscriptions) n();
        }
      )),
      (this.subscribe = (n) => {
        var r, s;
        this.listeners.add(n);
        const i = (s = (r = this.options).onSubscribe) == null ? void 0 : s.call(r, n, this);
        return () => {
          this.listeners.delete(n), i == null || i();
        };
      }),
      (this.options = t),
      (this.state = t.fn({
        prevDepVals: void 0,
        prevVal: void 0,
        currDepVals: this.getDepVals().currDepVals,
      }));
  }
  registerOnGraph(t = this.options.deps) {
    for (const n of t)
      if (n instanceof Or) n.registerOnGraph(), this.registerOnGraph(n.options.deps);
      else if (n instanceof eu) {
        let r = Tr.get(n);
        r || ((r = new Set()), Tr.set(n, r)), r.add(this);
        let s = to.get(this);
        s || ((s = new Set()), to.set(this, s)), s.add(n);
      }
  }
  unregisterFromGraph(t = this.options.deps) {
    for (const n of t)
      if (n instanceof Or) this.unregisterFromGraph(n.options.deps);
      else if (n instanceof eu) {
        const r = Tr.get(n);
        r && r.delete(this);
        const s = to.get(this);
        s && s.delete(n);
      }
  }
}
function t0(e, t = (n) => n) {
  return Yv.useSyncExternalStoreWithSelector(
    e.subscribe,
    () => e.state,
    () => e.state,
    t,
    n0
  );
}
function n0(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, s] of e) if (!t.has(r) || !Object.is(s, t.get(r))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e) if (!t.has(r)) return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !1;
  for (let r = 0; r < n.length; r++)
    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1;
  return !0;
}
const Zp = {},
  r0 = Zp.hasOwnProperty,
  em = (e, t) => {
    for (const n in e) r0.call(e, n) && t(n, e[n]);
  },
  s0 = (e, t) => (
    t &&
      em(t, (n, r) => {
        e[n] = r;
      }),
    e
  ),
  i0 = (e, t) => {
    const n = e.length;
    let r = -1;
    for (; ++r < n; ) t(e[r]);
  },
  bi = (e) => "\\u" + ("0000" + e).slice(-4),
  cs = (e, t) => {
    let n = e.toString(16);
    return t ? n : n.toUpperCase();
  },
  ui = Zp.toString,
  o0 = Array.isArray,
  a0 = (e) => typeof Buffer == "function" && Buffer.isBuffer(e),
  l0 = (e) => ui.call(e) == "[object Object]",
  u0 = (e) => typeof e == "string" || ui.call(e) == "[object String]",
  c0 = (e) => typeof e == "number" || ui.call(e) == "[object Number]",
  d0 = (e) => typeof e == "function",
  f0 = (e) => ui.call(e) == "[object Map]",
  h0 = (e) => ui.call(e) == "[object Set]",
  p0 = { "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" },
  m0 = /[\\\b\f\n\r\t]/,
  y0 = /[0-9]/,
  g0 = /[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
  v0 = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g,
  w0 = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g,
  An = (e, t) => {
    const n = () => {
        (u = l), ++t.indentLevel, (l = t.indent.repeat(t.indentLevel));
      },
      r = {
        escapeEverything: !1,
        minimal: !1,
        isScriptContext: !1,
        quotes: "single",
        wrap: !1,
        es6: !1,
        json: !1,
        compact: !0,
        lowercaseHex: !1,
        numbers: "decimal",
        indent: "	",
        indentLevel: 0,
        __inline1__: !1,
        __inline2__: !1,
      },
      s = t && t.json;
    s && ((r.quotes = "double"), (r.wrap = !0)),
      (t = s0(r, t)),
      t.quotes != "single" &&
        t.quotes != "double" &&
        t.quotes != "backtick" &&
        (t.quotes = "single");
    const i = t.quotes == "double" ? '"' : t.quotes == "backtick" ? "`" : "'",
      o = t.compact,
      a = t.lowercaseHex;
    let l = t.indent.repeat(t.indentLevel),
      u = "";
    const d = t.__inline1__,
      c = t.__inline2__,
      f = o
        ? ""
        : `
`;
    let y,
      m = !0;
    const v = t.numbers == "binary",
      w = t.numbers == "octal",
      p = t.numbers == "decimal",
      h = t.numbers == "hexadecimal";
    if ((s && e && d0(e.toJSON) && (e = e.toJSON()), !u0(e))) {
      if (f0(e))
        return e.size == 0
          ? "new Map()"
          : (o || ((t.__inline1__ = !0), (t.__inline2__ = !1)),
            "new Map(" + An(Array.from(e), t) + ")");
      if (h0(e)) return e.size == 0 ? "new Set()" : "new Set(" + An(Array.from(e), t) + ")";
      if (a0(e))
        return e.length == 0 ? "Buffer.from([])" : "Buffer.from(" + An(Array.from(e), t) + ")";
      if (o0(e))
        return (
          (y = []),
          (t.wrap = !0),
          d && ((t.__inline1__ = !1), (t.__inline2__ = !0)),
          c || n(),
          i0(e, (S) => {
            (m = !1), c && (t.__inline2__ = !1), y.push((o || c ? "" : l) + An(S, t));
          }),
          m
            ? "[]"
            : c
              ? "[" + y.join(", ") + "]"
              : "[" + f + y.join("," + f) + f + (o ? "" : u) + "]"
        );
      if (c0(e)) {
        if (s) return JSON.stringify(e);
        if (p) return String(e);
        if (h) {
          let S = e.toString(16);
          return a || (S = S.toUpperCase()), "0x" + S;
        }
        if (v) return "0b" + e.toString(2);
        if (w) return "0o" + e.toString(8);
      } else
        return l0(e)
          ? ((y = []),
            (t.wrap = !0),
            n(),
            em(e, (S, k) => {
              (m = !1), y.push((o ? "" : l) + An(S, t) + ":" + (o ? "" : " ") + An(k, t));
            }),
            m ? "{}" : "{" + f + y.join("," + f) + f + (o ? "" : u) + "}")
          : s
            ? JSON.stringify(e) || "null"
            : String(e);
    }
    const g = t.escapeEverything ? v0 : w0;
    return (
      (y = e.replace(g, (S, k, x, P, R, O) => {
        if (k) {
          if (t.minimal) return k;
          const L = k.charCodeAt(0),
            F = k.charCodeAt(1);
          if (t.es6) {
            const U = (L - 55296) * 1024 + F - 56320 + 65536;
            return "\\u{" + cs(U, a) + "}";
          }
          return bi(cs(L, a)) + bi(cs(F, a));
        }
        if (x) return bi(cs(x.charCodeAt(0), a));
        if (S == "\0" && !s && !y0.test(O.charAt(R + 1))) return "\\0";
        if (P) return P == i || t.escapeEverything ? "\\" + P : P;
        if (m0.test(S)) return p0[S];
        if (t.minimal && !g0.test(S)) return S;
        const N = cs(S.charCodeAt(0), a);
        return s || N.length > 2 ? bi(N) : "\\x" + ("00" + N).slice(-2);
      })),
      i == "`" && (y = y.replace(/\$\{/g, "\\${")),
      t.isScriptContext &&
        (y = y
          .replace(/<\/(script|style)/gi, "<\\/$1")
          .replace(/<!--/g, s ? "\\u003C!--" : "\\x3C!--")),
      t.wrap && (y = i + y + i),
      y
    );
  };
An.version = "3.0.2";
const We = "__root__";
function S0(e, t) {
  let n,
    r,
    s,
    i = "";
  for (n in e)
    if ((s = e[n]) !== void 0)
      if (Array.isArray(s))
        for (r = 0; r < s.length; r++)
          i && (i += "&"), (i += encodeURIComponent(n) + "=" + encodeURIComponent(s[r]));
      else i && (i += "&"), (i += encodeURIComponent(n) + "=" + encodeURIComponent(s));
  return "" + i;
}
function Fd(e) {
  if (!e) return "";
  const t = decodeURIComponent(e);
  return t === "false" ? !1 : t === "true" ? !0 : +t * 0 === 0 && +t + "" === t ? +t : t;
}
function x0(e, t) {
  let n, r;
  const s = {},
    i = e.split("&");
  for (; (n = i.shift()); ) {
    const o = n.indexOf("=");
    if (o !== -1) {
      (r = n.slice(0, o)), (r = decodeURIComponent(r));
      const a = n.slice(o + 1);
      s[r] !== void 0 ? (s[r] = [].concat(s[r], Fd(a))) : (s[r] = Fd(a));
    } else (r = n), (r = decodeURIComponent(r)), (s[r] = "");
  }
  return s;
}
const k0 = C0(JSON.parse),
  _0 = E0(JSON.stringify, JSON.parse);
function C0(e) {
  return (t) => {
    t.substring(0, 1) === "?" && (t = t.substring(1));
    const n = x0(t);
    for (const r in n) {
      const s = n[r];
      if (typeof s == "string")
        try {
          n[r] = e(s);
        } catch {}
    }
    return n;
  };
}
function E0(e, t) {
  function n(r) {
    if (typeof r == "object" && r !== null)
      try {
        return e(r);
      } catch {}
    else if (typeof r == "string" && typeof t == "function")
      try {
        return t(r), e(r);
      } catch {}
    return r;
  }
  return (r) => {
    (r = { ...r }),
      Object.keys(r).forEach((i) => {
        const o = r[i];
        typeof o > "u" || o === void 0 ? delete r[i] : (r[i] = n(o));
      });
    const s = S0(r).toString();
    return s ? `?${s}` : "";
  };
}
function Ts(e) {
  return e[e.length - 1];
}
function R0(e) {
  return typeof e == "function";
}
function Fi(e, t) {
  return R0(e) ? e(t) : e;
}
function no(e, t) {
  return t.reduce((n, r) => ((n[r] = e[r]), n), {});
}
function nt(e, t) {
  if (e === t) return e;
  const n = t,
    r = jd(e) && jd(n);
  if (r || (yn(e) && yn(n))) {
    const s = r ? e : Object.keys(e),
      i = s.length,
      o = r ? n : Object.keys(n),
      a = o.length,
      l = r ? [] : {};
    let u = 0;
    for (let d = 0; d < a; d++) {
      const c = r ? d : o[d];
      ((!r && s.includes(c)) || r) && e[c] === void 0 && n[c] === void 0
        ? ((l[c] = void 0), u++)
        : ((l[c] = nt(e[c], n[c])), l[c] === e[c] && e[c] !== void 0 && u++);
    }
    return i === a && u === i ? e : l;
  }
  return n;
}
function yn(e) {
  if (!Id(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const n = t.prototype;
  return !(!Id(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Id(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function jd(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Dd(e, t) {
  let n = Object.keys(e);
  return t && (n = n.filter((r) => e[r] !== void 0)), n;
}
function Os(e, t, n) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (yn(e) && yn(t)) {
    const r = (n == null ? void 0 : n.ignoreUndefined) ?? !0,
      s = Dd(e, r),
      i = Dd(t, r);
    return !(n != null && n.partial) && s.length !== i.length
      ? !1
      : i.every((o) => Os(e[o], t[o], n));
  }
  return Array.isArray(e) && Array.isArray(t)
    ? e.length !== t.length
      ? !1
      : !e.some((r, s) => !Os(r, t[s], n))
    : !1;
}
const Ii = typeof window < "u" ? b.useLayoutEffect : b.useEffect;
function lr(e) {
  let t, n;
  const r = new Promise((s, i) => {
    (t = s), (n = i);
  });
  return (
    (r.status = "pending"),
    (r.resolve = (s) => {
      (r.status = "resolved"), (r.value = s), t(s), e == null || e(s);
    }),
    (r.reject = (s) => {
      (r.status = "rejected"), n(s);
    }),
    r
  );
}
function Wa(e) {
  const t = b.useRef({ value: e, prev: null }),
    n = t.current.value;
  return e !== n && (t.current = { value: e, prev: n }), t.current.prev;
}
function Ht(e) {
  return ia(e.filter((t) => t !== void 0).join("/"));
}
function ia(e) {
  return e.replace(/\/{2,}/g, "/");
}
function fc(e) {
  return e === "/" ? e : e.replace(/^\/{1,}/, "");
}
function Dn(e) {
  return e === "/" ? e : e.replace(/\/{1,}$/, "");
}
function P0(e) {
  return Dn(fc(e));
}
function T0({ basepath: e, base: t, to: n, trailingSlash: r = "never", caseSensitive: s }) {
  var i, o;
  (t = bo(e, t, s)), (n = bo(e, n, s));
  let a = Wr(t);
  const l = Wr(n);
  a.length > 1 && ((i = Ts(a)) == null ? void 0 : i.value) === "/" && a.pop(),
    l.forEach((d, c) => {
      d.value === "/"
        ? c
          ? c === l.length - 1 && a.push(d)
          : (a = [d])
        : d.value === ".."
          ? a.pop()
          : d.value === "." || a.push(d);
    }),
    a.length > 1 &&
      (((o = Ts(a)) == null ? void 0 : o.value) === "/"
        ? r === "never" && a.pop()
        : r === "always" && a.push({ type: "pathname", value: "/" }));
  const u = Ht([e, ...a.map((d) => d.value)]);
  return ia(u);
}
function Wr(e) {
  if (!e) return [];
  e = ia(e);
  const t = [];
  if (
    (e.slice(0, 1) === "/" && ((e = e.substring(1)), t.push({ type: "pathname", value: "/" })), !e)
  )
    return t;
  const n = e.split("/").filter(Boolean);
  return (
    t.push(
      ...n.map((r) =>
        r === "$" || r === "*"
          ? { type: "wildcard", value: r }
          : r.charAt(0) === "$"
            ? { type: "param", value: r }
            : { type: "pathname", value: decodeURI(r) }
      )
    ),
    e.slice(-1) === "/" && ((e = e.substring(1)), t.push({ type: "pathname", value: "/" })),
    t
  );
}
function ji({ path: e, params: t, leaveWildcards: n, leaveParams: r, decodeCharMap: s }) {
  const i = Wr(e),
    o = {};
  for (const [a, l] of Object.entries(t)) {
    const u = typeof l == "string";
    ["*", "_splat"].includes(a) ? (o[a] = u ? encodeURI(l) : l) : (o[a] = u ? O0(l, s) : l);
  }
  return Ht(
    i.map((a) => {
      if (a.type === "wildcard") {
        const l = o._splat;
        return n ? `${a.value}${l ?? ""}` : l;
      }
      if (a.type === "param") {
        if (r) {
          const l = o[a.value];
          return `${a.value}${l ?? ""}`;
        }
        return o[a.value.substring(1)] ?? "undefined";
      }
      return a.value;
    })
  );
}
function O0(e, t) {
  let n = encodeURIComponent(e);
  if (t) for (const [r, s] of t) n = n.replaceAll(r, s);
  return n;
}
function Di(e, t, n) {
  const r = L0(e, t, n);
  if (!(n.to && !r)) return r ?? {};
}
function bo(e, t, n = !1) {
  const r = n ? e : e.toLowerCase(),
    s = n ? t : t.toLowerCase();
  switch (!0) {
    case r === "/":
      return t;
    case s === r:
      return "";
    case t.length < e.length:
      return t;
    case s[r.length] !== "/":
      return t;
    case s.startsWith(r):
      return t.slice(e.length);
    default:
      return t;
  }
}
function L0(e, t, n) {
  if (e !== "/" && !t.startsWith(e)) return;
  t = bo(e, t, n.caseSensitive);
  const r = bo(e, `${n.to ?? "$"}`, n.caseSensitive),
    s = Wr(t),
    i = Wr(r);
  t.startsWith("/") || s.unshift({ type: "pathname", value: "/" }),
    r.startsWith("/") || i.unshift({ type: "pathname", value: "/" });
  const o = {};
  return (() => {
    for (let l = 0; l < Math.max(s.length, i.length); l++) {
      const u = s[l],
        d = i[l],
        c = l >= s.length - 1,
        f = l >= i.length - 1;
      if (d) {
        if (d.type === "wildcard") {
          const y = decodeURI(Ht(s.slice(l).map((m) => m.value)));
          return (o["*"] = y), (o._splat = y), !0;
        }
        if (d.type === "pathname") {
          if (d.value === "/" && !(u != null && u.value)) return !0;
          if (u) {
            if (n.caseSensitive) {
              if (d.value !== u.value) return !1;
            } else if (d.value.toLowerCase() !== u.value.toLowerCase()) return !1;
          }
        }
        if (!u) return !1;
        if (d.type === "param") {
          if (u.value === "/") return !1;
          u.value.charAt(0) !== "$" && (o[d.value.substring(1)] = decodeURIComponent(u.value));
        }
      }
      if (!c && f)
        return (
          (o["**"] = Ht(s.slice(l + 1).map((y) => y.value))),
          !!n.fuzzy && (d == null ? void 0 : d.value) !== "/"
        );
    }
    return !0;
  })()
    ? o
    : void 0;
}
function bn(e) {
  return !!(e != null && e.isRedirect);
}
function Ka(e) {
  return !!(e != null && e.isRedirect) && e.href;
}
function hc(e) {
  const t = e.errorComponent ?? oa;
  return _.jsx(M0, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: n, reset: r }) =>
      n ? b.createElement(t, { error: n, reset: r }) : e.children,
  });
}
class M0 extends b.Component {
  constructor() {
    super(...arguments), (this.state = { error: null });
  }
  static getDerivedStateFromProps(t) {
    return { resetKey: t.getResetKey() };
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidUpdate(t, n) {
    n.error && n.resetKey !== this.state.resetKey && this.reset();
  }
  componentDidCatch(t, n) {
    this.props.onCatch && this.props.onCatch(t, n);
  }
  render() {
    return this.props.children({
      error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
}
function oa({ error: e }) {
  const [t, n] = b.useState(!1);
  return _.jsxs("div", {
    style: { padding: ".5rem", maxWidth: "100%" },
    children: [
      _.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: ".5rem" },
        children: [
          _.jsx("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }),
          _.jsx("button", {
            style: {
              appearance: "none",
              fontSize: ".6em",
              border: "1px solid currentColor",
              padding: ".1rem .2rem",
              fontWeight: "bold",
              borderRadius: ".25rem",
            },
            onClick: () => n((r) => !r),
            children: t ? "Hide Error" : "Show Error",
          }),
        ],
      }),
      _.jsx("div", { style: { height: ".25rem" } }),
      t
        ? _.jsx("div", {
            children: _.jsx("pre", {
              style: {
                fontSize: ".7em",
                border: "1px solid red",
                borderRadius: ".25rem",
                padding: ".3rem",
                color: "red",
                overflow: "auto",
              },
              children: e.message ? _.jsx("code", { children: e.message }) : null,
            }),
          })
        : null,
    ],
  });
}
function ut(e) {
  const t = sr({ warn: (e == null ? void 0 : e.router) === void 0 }),
    n = (e == null ? void 0 : e.router) || t,
    r = b.useRef();
  return t0(n.__store, (s) => {
    if (e != null && e.select) {
      if (e.structuralSharing ?? n.options.defaultStructuralSharing) {
        const i = nt(r.current, e.select(s));
        return (r.current = i), i;
      }
      return e.select(s);
    }
    return s;
  });
}
function wt(e) {
  return !!(e != null && e.isNotFound);
}
function N0(e) {
  const t = ut({ select: (n) => `not-found-${n.location.pathname}-${n.status}` });
  return _.jsx(hc, {
    getResetKey: () => t,
    onCatch: (n, r) => {
      var s;
      if (wt(n)) (s = e.onCatch) == null || s.call(e, n, r);
      else throw n;
    },
    errorComponent: ({ error: n }) => {
      var r;
      if (wt(n)) return (r = e.fallback) == null ? void 0 : r.call(e, n);
      throw n;
    },
    children: e.children,
  });
}
function A0() {
  return _.jsx("p", { children: "Not Found" });
}
const gs = {
    stringify: (e) =>
      JSON.stringify(e, function (n, r) {
        const s = this[n],
          i = zi.find((o) => o.stringifyCondition(s));
        return i ? i.stringify(s) : r;
      }),
    parse: (e) =>
      JSON.parse(e, function (n, r) {
        const s = this[n];
        if (yn(s)) {
          const i = zi.find((o) => o.parseCondition(s));
          if (i) return i.parse(s);
        }
        return r;
      }),
    encode: (e) => {
      if (Array.isArray(e)) return e.map((n) => gs.encode(n));
      if (yn(e)) return Object.fromEntries(Object.entries(e).map(([n, r]) => [n, gs.encode(r)]));
      const t = zi.find((n) => n.stringifyCondition(e));
      return t ? t.stringify(e) : e;
    },
    decode: (e) => {
      if (yn(e)) {
        const t = zi.find((n) => n.parseCondition(e));
        if (t) return t.parse(e);
      }
      return Array.isArray(e)
        ? e.map((t) => gs.decode(t))
        : yn(e)
          ? Object.fromEntries(Object.entries(e).map(([t, n]) => [t, gs.decode(n)]))
          : e;
    },
  },
  $i = (e, t, n, r) => ({
    key: e,
    stringifyCondition: t,
    stringify: (s) => ({ [`$${e}`]: n(s) }),
    parseCondition: (s) => Object.hasOwn(s, `$${e}`),
    parse: (s) => r(s[`$${e}`]),
  }),
  zi = [
    $i(
      "undefined",
      (e) => e === void 0,
      () => 0,
      () => {}
    ),
    $i(
      "date",
      (e) => e instanceof Date,
      (e) => e.toISOString(),
      (e) => new Date(e)
    ),
    $i(
      "error",
      (e) => e instanceof Error,
      (e) => ({ ...e, message: e.message, stack: e.stack, cause: e.cause }),
      (e) => Object.assign(new Error(e.message), e)
    ),
    $i(
      "formData",
      (e) => e instanceof FormData,
      (e) => {
        const t = {};
        return (
          e.forEach((n, r) => {
            const s = t[r];
            s !== void 0 ? (Array.isArray(s) ? s.push(n) : (t[r] = [s, n])) : (t[r] = n);
          }),
          t
        );
      },
      (e) => {
        const t = new FormData();
        return (
          Object.entries(e).forEach(([n, r]) => {
            Array.isArray(r) ? r.forEach((s) => t.append(n, s)) : t.append(n, r);
          }),
          t
        );
      }
    ),
  ],
  tm = ["component", "errorComponent", "pendingComponent", "notFoundComponent"];
function b0(e) {
  var t;
  for (const n of tm) if ((t = e.options[n]) != null && t.preload) return !0;
  return !1;
}
function Ga(e, t) {
  if (e == null) return {};
  if ("~standard" in e) {
    const n = e["~standard"].validate(t);
    if (n instanceof Promise) throw new tu("Async validation not supported");
    if (n.issues) throw new tu(JSON.stringify(n.issues, void 0, 2));
    return n.value;
  }
  return "parse" in e ? e.parse(t) : typeof e == "function" ? e(t) : {};
}
function F0(e) {
  return new I0(e);
}
class I0 {
  constructor(t) {
    (this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this.resetNextScroll = !0),
      (this.shouldViewTransition = void 0),
      (this.isViewTransitionTypesSupported = void 0),
      (this.subscribers = new Set()),
      (this.startReactTransition = (n) => n()),
      (this.update = (n) => {
        var r;
        n.notFoundRoute &&
          console.warn(
            "The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/guide/not-found-errors#migrating-from-notfoundroute for more info."
          );
        const s = this.options;
        (this.options = { ...this.options, ...n }),
          (this.isServer = this.options.isServer ?? typeof document > "u"),
          (this.pathParamsDecodeCharMap = this.options.pathParamsAllowedCharacters
            ? new Map(
                this.options.pathParamsAllowedCharacters.map((i) => [encodeURIComponent(i), i])
              )
            : void 0),
          (!this.basepath || (n.basepath && n.basepath !== s.basepath)) &&
            (n.basepath === void 0 || n.basepath === "" || n.basepath === "/"
              ? (this.basepath = "/")
              : (this.basepath = `/${P0(n.basepath)}`)),
          (!this.history || (this.options.history && this.options.history !== this.history)) &&
            ((this.history =
              this.options.history ??
              (this.isServer ? Mv({ initialEntries: [this.basepath || "/"] }) : Lv())),
            (this.latestLocation = this.parseLocation())),
          this.options.routeTree !== this.routeTree &&
            ((this.routeTree = this.options.routeTree), this.buildRouteTree()),
          this.__store ||
            (this.__store = new eu(D0(this.latestLocation), {
              onUpdate: () => {
                this.__store.state = {
                  ...this.state,
                  cachedMatches: this.state.cachedMatches.filter(
                    (i) => !["redirected"].includes(i.status)
                  ),
                };
              },
            })),
          typeof window < "u" &&
            "CSS" in window &&
            typeof ((r = window.CSS) == null ? void 0 : r.supports) == "function" &&
            (this.isViewTransitionTypesSupported = window.CSS.supports(
              "selector(:active-view-transition-type(a)"
            ));
      }),
      (this.buildRouteTree = () => {
        (this.routesById = {}), (this.routesByPath = {});
        const n = this.options.notFoundRoute;
        n &&
          (n.init({ originalIndex: 99999999999, defaultSsr: this.options.defaultSsr }),
          (this.routesById[n.id] = n));
        const r = (o) => {
          o.forEach((a, l) => {
            a.init({ originalIndex: l, defaultSsr: this.options.defaultSsr });
            const u = this.routesById[a.id];
            if (
              (Ke(!u, `Duplicate routes found with id: ${String(a.id)}`),
              (this.routesById[a.id] = a),
              !a.isRoot && a.path)
            ) {
              const c = Dn(a.fullPath);
              (!this.routesByPath[c] || a.fullPath.endsWith("/")) && (this.routesByPath[c] = a);
            }
            const d = a.children;
            d != null && d.length && r(d);
          });
        };
        r([this.routeTree]);
        const s = [];
        Object.values(this.routesById).forEach((o, a) => {
          var l;
          if (o.isRoot || !o.path) return;
          const u = fc(o.fullPath),
            d = Wr(u);
          for (; d.length > 1 && ((l = d[0]) == null ? void 0 : l.value) === "/"; ) d.shift();
          const c = d.map((f) =>
            f.value === "/" ? 0.75 : f.type === "param" ? 0.5 : f.type === "wildcard" ? 0.25 : 1
          );
          s.push({ child: o, trimmed: u, parsed: d, index: a, scores: c });
        }),
          (this.flatRoutes = s
            .sort((o, a) => {
              const l = Math.min(o.scores.length, a.scores.length);
              for (let u = 0; u < l; u++)
                if (o.scores[u] !== a.scores[u]) return a.scores[u] - o.scores[u];
              if (o.scores.length !== a.scores.length) return a.scores.length - o.scores.length;
              for (let u = 0; u < l; u++)
                if (o.parsed[u].value !== a.parsed[u].value)
                  return o.parsed[u].value > a.parsed[u].value ? 1 : -1;
              return o.index - a.index;
            })
            .map((o, a) => ((o.child.rank = a), o.child)));
      }),
      (this.subscribe = (n, r) => {
        const s = { eventType: n, fn: r };
        return (
          this.subscribers.add(s),
          () => {
            this.subscribers.delete(s);
          }
        );
      }),
      (this.emit = (n) => {
        this.subscribers.forEach((r) => {
          r.eventType === n.type && r.fn(n);
        });
      }),
      (this.parseLocation = (n, r) => {
        const s = ({ pathname: l, search: u, hash: d, state: c }) => {
            const f = this.options.parseSearch(u),
              y = this.options.stringifySearch(f);
            return {
              pathname: l,
              searchStr: y,
              search: nt(n == null ? void 0 : n.search, f),
              hash: d.split("#").reverse()[0] ?? "",
              href: `${l}${y}${d}`,
              state: nt(n == null ? void 0 : n.state, c),
            };
          },
          i = s(r ?? this.history.location),
          { __tempLocation: o, __tempKey: a } = i.state;
        if (o && (!a || a === this.tempLocationKey)) {
          const l = s(o);
          return (
            (l.state.key = i.state.key), delete l.state.__tempLocation, { ...l, maskedLocation: i }
          );
        }
        return i;
      }),
      (this.resolvePathWithBase = (n, r) =>
        T0({
          basepath: this.basepath,
          base: n,
          to: ia(r),
          trailingSlash: this.options.trailingSlash,
          caseSensitive: this.options.caseSensitive,
        })),
      (this.getMatchedRoutes = (n, r) => {
        let s = {};
        const i = Dn(n.pathname),
          o = (d) =>
            Di(this.basepath, i, {
              to: d.fullPath,
              caseSensitive: d.options.caseSensitive ?? this.options.caseSensitive,
              fuzzy: !0,
            });
        let a = (r == null ? void 0 : r.to) !== void 0 ? this.routesByPath[r.to] : void 0;
        a
          ? (s = o(a))
          : (a = this.flatRoutes.find((d) => {
              const c = o(d);
              return c ? ((s = c), !0) : !1;
            }));
        let l = a || this.routesById[We];
        const u = [l];
        for (; l.parentRoute; ) (l = l.parentRoute), u.unshift(l);
        return { matchedRoutes: u, routeParams: s, foundRoute: a };
      }),
      (this.cancelMatch = (n) => {
        const r = this.getMatch(n);
        r && (r.abortController.abort(), clearTimeout(r.pendingTimeout));
      }),
      (this.cancelMatches = () => {
        var n;
        (n = this.state.pendingMatches) == null ||
          n.forEach((r) => {
            this.cancelMatch(r.id);
          });
      }),
      (this.buildLocation = (n) => {
        const r = (i = {}, o) => {
            var a, l, u, d, c, f;
            const y = i._fromLocation
                ? this.matchRoutes(i._fromLocation, { _buildLocation: !0 })
                : this.state.matches,
              m =
                i.from != null
                  ? y.find((L) =>
                      Di(this.basepath, Dn(L.pathname), {
                        to: i.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      })
                    )
                  : void 0,
              v = (m == null ? void 0 : m.pathname) || this.latestLocation.pathname;
            Ke(i.from == null || m != null, "Could not find match for from: " + i.from);
            const w =
                (a = this.state.pendingMatches) != null && a.length
                  ? (l = Ts(this.state.pendingMatches)) == null
                    ? void 0
                    : l.search
                  : ((u = Ts(y)) == null ? void 0 : u.search) || this.latestLocation.search,
              p =
                o == null
                  ? void 0
                  : o.matchedRoutes.filter((L) => y.find((F) => F.routeId === L.id));
            let h;
            if (i.to) h = this.resolvePathWithBase(v, `${i.to}`);
            else {
              const L =
                this.routesById[
                  (d =
                    p == null
                      ? void 0
                      : p.find((F) => {
                          const U = ji({
                            path: F.fullPath,
                            params: (o == null ? void 0 : o.routeParams) ?? {},
                            decodeCharMap: this.pathParamsDecodeCharMap,
                          });
                          return Ht([this.basepath, U]) === v;
                        })) == null
                    ? void 0
                    : d.id
                ];
              h = this.resolvePathWithBase(v, (L == null ? void 0 : L.to) ?? v);
            }
            const g = { ...((c = Ts(y)) == null ? void 0 : c.params) };
            let S = (i.params ?? !0) === !0 ? g : { ...g, ...Fi(i.params, g) };
            Object.keys(S).length > 0 &&
              (o == null ||
                o.matchedRoutes
                  .map((L) => {
                    var F;
                    return (
                      ((F = L.options.params) == null ? void 0 : F.stringify) ??
                      L.options.stringifyParams
                    );
                  })
                  .filter(Boolean)
                  .forEach((L) => {
                    S = { ...S, ...L(S) };
                  })),
              (h = ji({
                path: h,
                params: S ?? {},
                leaveWildcards: !1,
                leaveParams: n.leaveParams,
                decodeCharMap: this.pathParamsDecodeCharMap,
              }));
            let k = w;
            if (n._includeValidateSearch && (f = this.options.search) != null && f.strict) {
              let L = {};
              o == null ||
                o.matchedRoutes.forEach((F) => {
                  try {
                    F.options.validateSearch &&
                      (L = { ...L, ...(Ga(F.options.validateSearch, { ...L, ...k }) ?? {}) });
                  } catch {}
                }),
                (k = L);
            }
            (k = ((L) => {
              const F =
                  (o == null
                    ? void 0
                    : o.matchedRoutes.reduce((H, G) => {
                        var ke;
                        const M = [];
                        if ("search" in G.options)
                          (ke = G.options.search) != null &&
                            ke.middlewares &&
                            M.push(...G.options.search.middlewares);
                        else if (G.options.preSearchFilters || G.options.postSearchFilters) {
                          const I = ({ search: j, next: W }) => {
                            let z = j;
                            "preSearchFilters" in G.options &&
                              G.options.preSearchFilters &&
                              (z = G.options.preSearchFilters.reduce((ce, de) => de(ce), j));
                            const ae = W(z);
                            return "postSearchFilters" in G.options && G.options.postSearchFilters
                              ? G.options.postSearchFilters.reduce((ce, de) => de(ce), ae)
                              : ae;
                          };
                          M.push(I);
                        }
                        if (n._includeValidateSearch && G.options.validateSearch) {
                          const I = ({ search: j, next: W }) => {
                            try {
                              const z = W(j);
                              return { ...z, ...(Ga(G.options.validateSearch, z) ?? {}) };
                            } catch {}
                          };
                          M.push(I);
                        }
                        return H.concat(M);
                      }, [])) ?? [],
                U = ({ search: H }) => (i.search ? (i.search === !0 ? H : Fi(i.search, H)) : {});
              F.push(U);
              const Q = (H, G) => {
                if (H >= F.length) return G;
                const ke = F[H];
                return ke({ search: G, next: (I) => Q(H + 1, I) });
              };
              return Q(0, L);
            })(k)),
              (k = nt(w, k));
            const P = this.options.stringifySearch(k),
              R =
                i.hash === !0
                  ? this.latestLocation.hash
                  : i.hash
                    ? Fi(i.hash, this.latestLocation.hash)
                    : void 0,
              O = R ? `#${R}` : "";
            let N =
              i.state === !0
                ? this.latestLocation.state
                : i.state
                  ? Fi(i.state, this.latestLocation.state)
                  : {};
            return (
              (N = nt(this.latestLocation.state, N)),
              {
                pathname: h,
                search: k,
                searchStr: P,
                state: N,
                hash: R ?? "",
                href: `${h}${P}${O}`,
                unmaskOnReload: i.unmaskOnReload,
              }
            );
          },
          s = (i = {}, o) => {
            var a;
            const l = r(i);
            let u = o ? r(o) : void 0;
            if (!u) {
              let f = {};
              const y =
                (a = this.options.routeMasks) == null
                  ? void 0
                  : a.find((m) => {
                      const v = Di(this.basepath, l.pathname, {
                        to: m.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      });
                      return v ? ((f = v), !0) : !1;
                    });
              if (y) {
                const { from: m, ...v } = y;
                (o = { ...no(n, ["from"]), ...v, params: f }), (u = r(o));
              }
            }
            const d = this.getMatchedRoutes(l, i),
              c = r(i, d);
            if (u) {
              const f = this.getMatchedRoutes(u, o),
                y = r(o, f);
              c.maskedLocation = y;
            }
            return c;
          };
        return n.mask ? s(n, { ...no(n, ["from"]), ...n.mask }) : s(n);
      }),
      (this.commitLocation = ({ viewTransition: n, ignoreBlocker: r, ...s }) => {
        const i = () => {
            s.state.key = this.latestLocation.state.key;
            const l = Os(s.state, this.latestLocation.state);
            return delete s.state.key, l;
          },
          o = this.latestLocation.href === s.href,
          a = this.commitLocationPromise;
        if (
          ((this.commitLocationPromise = lr(() => {
            a == null || a.resolve();
          })),
          o && i())
        )
          this.load();
        else {
          let { maskedLocation: l, hashScrollIntoView: u, ...d } = s;
          l &&
            ((d = {
              ...l,
              state: {
                ...l.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...d,
                  search: d.searchStr,
                  state: { ...d.state, __tempKey: void 0, __tempLocation: void 0, key: void 0 },
                },
              },
            }),
            (d.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
              (d.state.__tempKey = this.tempLocationKey)),
            (d.state.__hashScrollIntoViewOptions =
              u ?? this.options.defaultHashScrollIntoView ?? !0),
            (this.shouldViewTransition = n),
            this.history[s.replace ? "replace" : "push"](d.href, d.state, { ignoreBlocker: r });
        }
        return (
          (this.resetNextScroll = s.resetScroll ?? !0),
          this.history.subscribers.size || this.load(),
          this.commitLocationPromise
        );
      }),
      (this.buildAndCommitLocation = ({
        replace: n,
        resetScroll: r,
        hashScrollIntoView: s,
        viewTransition: i,
        ignoreBlocker: o,
        href: a,
        ...l
      } = {}) => {
        if (a) {
          const d = this.history.location.state.__TSR_index,
            c = Gs(a, { __TSR_index: n ? d : d + 1 });
          (l.to = c.pathname),
            (l.search = this.options.parseSearch(c.search)),
            (l.hash = c.hash.slice(1));
        }
        const u = this.buildLocation({ ...l, _includeValidateSearch: !0 });
        return this.commitLocation({
          ...u,
          viewTransition: i,
          replace: n,
          resetScroll: r,
          hashScrollIntoView: s,
          ignoreBlocker: o,
        });
      }),
      (this.navigate = ({ to: n, reloadDocument: r, href: s, ...i }) => {
        if (r) {
          s || (s = this.buildLocation({ to: n, ...i }).href),
            i.replace ? window.location.replace(s) : (window.location.href = s);
          return;
        }
        return this.buildAndCommitLocation({ ...i, href: s, to: n });
      }),
      (this.load = async (n) => {
        this.latestLocation = this.parseLocation(this.latestLocation);
        let r, s, i;
        for (
          i = new Promise((o) => {
            this.startReactTransition(async () => {
              var a;
              try {
                const l = this.latestLocation,
                  u = this.state.resolvedLocation,
                  d = u.href !== l.href,
                  c = u.pathname !== l.pathname;
                this.cancelMatches();
                let f;
                Ha(() => {
                  (f = this.matchRoutes(l)),
                    this.__store.setState((y) => ({
                      ...y,
                      status: "pending",
                      isLoading: !0,
                      location: l,
                      pendingMatches: f,
                      cachedMatches: y.cachedMatches.filter((m) => !f.find((v) => v.id === m.id)),
                    }));
                }),
                  this.state.redirect ||
                    this.emit({
                      type: "onBeforeNavigate",
                      fromLocation: u,
                      toLocation: l,
                      pathChanged: c,
                      hrefChanged: d,
                    }),
                  this.emit({
                    type: "onBeforeLoad",
                    fromLocation: u,
                    toLocation: l,
                    pathChanged: c,
                    hrefChanged: d,
                  }),
                  await this.loadMatches({
                    sync: n == null ? void 0 : n.sync,
                    matches: f,
                    location: l,
                    onReady: async () => {
                      this.startViewTransition(async () => {
                        let y, m, v;
                        Ha(() => {
                          this.__store.setState((w) => {
                            const p = w.matches,
                              h = w.pendingMatches || w.matches;
                            return (
                              (y = p.filter((g) => !h.find((S) => S.id === g.id))),
                              (m = h.filter((g) => !p.find((S) => S.id === g.id))),
                              (v = p.filter((g) => h.find((S) => S.id === g.id))),
                              {
                                ...w,
                                isLoading: !1,
                                loadedAt: Date.now(),
                                matches: h,
                                pendingMatches: void 0,
                                cachedMatches: [
                                  ...w.cachedMatches,
                                  ...y.filter((g) => g.status !== "error"),
                                ],
                              }
                            );
                          }),
                            this.clearExpiredCache();
                        }),
                          [
                            [y, "onLeave"],
                            [m, "onEnter"],
                            [v, "onStay"],
                          ].forEach(([w, p]) => {
                            w.forEach((h) => {
                              var g, S;
                              (S = (g = this.looseRoutesById[h.routeId].options)[p]) == null ||
                                S.call(g, h);
                            });
                          });
                      });
                    },
                  });
              } catch (l) {
                Ka(l)
                  ? ((r = l),
                    this.isServer || this.navigate({ ...r, replace: !0, ignoreBlocker: !0 }))
                  : wt(l) && (s = l),
                  this.__store.setState((u) => ({
                    ...u,
                    statusCode: r
                      ? r.statusCode
                      : s
                        ? 404
                        : u.matches.some((d) => d.status === "error")
                          ? 500
                          : 200,
                    redirect: r,
                  }));
              }
              this.latestLoadPromise === i &&
                ((a = this.commitLocationPromise) == null || a.resolve(),
                (this.latestLoadPromise = void 0),
                (this.commitLocationPromise = void 0)),
                o();
            });
          }),
            this.latestLoadPromise = i,
            await i;
          this.latestLoadPromise && i !== this.latestLoadPromise;

        )
          await this.latestLoadPromise;
      }),
      (this.startViewTransition = (n) => {
        const r = this.shouldViewTransition ?? this.options.defaultViewTransition;
        if (
          (delete this.shouldViewTransition,
          r &&
            typeof document < "u" &&
            "startViewTransition" in document &&
            typeof document.startViewTransition == "function")
        ) {
          let s;
          typeof r == "object" && this.isViewTransitionTypesSupported
            ? (s = { update: n, types: r.types })
            : (s = n),
            document.startViewTransition(s);
        } else n();
      }),
      (this.updateMatch = (n, r) => {
        var s;
        let i;
        const o = (s = this.state.pendingMatches) == null ? void 0 : s.find((d) => d.id === n),
          a = this.state.matches.find((d) => d.id === n),
          l = this.state.cachedMatches.find((d) => d.id === n),
          u = o ? "pendingMatches" : a ? "matches" : l ? "cachedMatches" : "";
        return (
          u &&
            this.__store.setState((d) => {
              var c;
              return {
                ...d,
                [u]: (c = d[u]) == null ? void 0 : c.map((f) => (f.id === n ? (i = r(f)) : f)),
              };
            }),
          i
        );
      }),
      (this.getMatch = (n) =>
        [
          ...this.state.cachedMatches,
          ...(this.state.pendingMatches ?? []),
          ...this.state.matches,
        ].find((r) => r.id === n)),
      (this.loadMatches = async ({
        location: n,
        matches: r,
        preload: s,
        onReady: i,
        updateMatch: o = this.updateMatch,
        sync: a,
      }) => {
        let l,
          u = !1;
        const d = async () => {
            u || ((u = !0), await (i == null ? void 0 : i()));
          },
          c = (y) => !!(s && !this.state.matches.find((m) => m.id === y));
        !this.isServer && !this.state.matches.length && d();
        const f = (y, m) => {
          var v, w, p;
          if (Ka(m) && !m.reloadDocument) throw m;
          if (bn(m) || wt(m)) {
            if (
              (o(y.id, (h) => ({
                ...h,
                status: bn(m) ? "redirected" : wt(m) ? "notFound" : "error",
                isFetching: !1,
                error: m,
                beforeLoadPromise: void 0,
                loaderPromise: void 0,
              })),
              m.routeId || (m.routeId = y.routeId),
              (v = y.beforeLoadPromise) == null || v.resolve(),
              (w = y.loaderPromise) == null || w.resolve(),
              (p = y.loadPromise) == null || p.resolve(),
              bn(m))
            )
              throw ((u = !0), (m = this.resolveRedirect({ ...m, _fromLocation: n })), m);
            if (wt(m)) throw (this._handleNotFound(r, m, { updateMatch: o }), m);
          }
        };
        try {
          await new Promise((y, m) => {
            (async () => {
              var v, w, p;
              try {
                const h = (k, x, P) => {
                  var R, O;
                  const { id: N, routeId: L } = r[k],
                    F = this.looseRoutesById[L];
                  if (x instanceof Promise) throw x;
                  (x.routerCode = P), (l = l ?? k), f(this.getMatch(N), x);
                  try {
                    (O = (R = F.options).onError) == null || O.call(R, x);
                  } catch (U) {
                    (x = U), f(this.getMatch(N), x);
                  }
                  o(N, (U) => {
                    var Q, H;
                    return (
                      (Q = U.beforeLoadPromise) == null || Q.resolve(),
                      (H = U.loadPromise) == null || H.resolve(),
                      {
                        ...U,
                        error: x,
                        status: "error",
                        isFetching: !1,
                        updatedAt: Date.now(),
                        abortController: new AbortController(),
                        beforeLoadPromise: void 0,
                      }
                    );
                  });
                };
                for (const [k, { id: x, routeId: P }] of r.entries()) {
                  const R = this.getMatch(x),
                    O = (v = r[k - 1]) == null ? void 0 : v.id,
                    N = this.looseRoutesById[P],
                    L = N.options.pendingMs ?? this.options.defaultPendingMs,
                    F = !!(
                      i &&
                      !this.isServer &&
                      !c(x) &&
                      (N.options.loader || N.options.beforeLoad) &&
                      typeof L == "number" &&
                      L !== 1 / 0 &&
                      (N.options.pendingComponent ?? this.options.defaultPendingComponent)
                    );
                  let U = !0;
                  if (
                    ((R.beforeLoadPromise || R.loaderPromise) &&
                      (F &&
                        setTimeout(() => {
                          try {
                            d();
                          } catch {}
                        }, L),
                      await R.beforeLoadPromise,
                      (U = this.getMatch(x).status !== "success")),
                    U)
                  ) {
                    try {
                      o(x, (Z) => ({
                        ...Z,
                        loadPromise: lr(() => {
                          var Ve;
                          (Ve = Z.loadPromise) == null || Ve.resolve();
                        }),
                        beforeLoadPromise: lr(),
                      }));
                      const Q = new AbortController();
                      let H;
                      F &&
                        (H = setTimeout(() => {
                          try {
                            d();
                          } catch {}
                        }, L));
                      const { paramsError: G, searchError: ke } = this.getMatch(x);
                      G && h(k, G, "PARSE_PARAMS"), ke && h(k, ke, "VALIDATE_SEARCH");
                      const M = () => (O ? this.getMatch(O).context : (this.options.context ?? {}));
                      o(x, (Z) => ({
                        ...Z,
                        isFetching: "beforeLoad",
                        fetchCount: Z.fetchCount + 1,
                        abortController: Q,
                        pendingTimeout: H,
                        context: { ...M(), ...Z.__routeContext },
                      }));
                      const { search: I, params: j, context: W, cause: z } = this.getMatch(x),
                        ae = c(x),
                        ce = {
                          search: I,
                          abortController: Q,
                          params: j,
                          preload: ae,
                          context: W,
                          location: n,
                          navigate: (Z) => this.navigate({ ...Z, _fromLocation: n }),
                          buildLocation: this.buildLocation,
                          cause: ae ? "preload" : z,
                          matches: r,
                        };
                      let de =
                        (await ((p = (w = N.options).beforeLoad) == null
                          ? void 0
                          : p.call(w, ce))) ?? {};
                      this.serializeLoaderData &&
                        (de = this.serializeLoaderData("__beforeLoadContext", de, {
                          router: this,
                          match: this.getMatch(x),
                        })),
                        (bn(de) || wt(de)) && h(k, de, "BEFORE_LOAD"),
                        o(x, (Z) => ({
                          ...Z,
                          __beforeLoadContext: de,
                          context: { ...M(), ...Z.__routeContext, ...de },
                          abortController: Q,
                        }));
                    } catch (Q) {
                      h(k, Q, "BEFORE_LOAD");
                    }
                    o(x, (Q) => {
                      var H;
                      return (
                        (H = Q.beforeLoadPromise) == null || H.resolve(),
                        { ...Q, beforeLoadPromise: void 0, isFetching: !1 }
                      );
                    });
                  }
                }
                const g = r.slice(0, l),
                  S = [];
                g.forEach(({ id: k, routeId: x }, P) => {
                  S.push(
                    (async () => {
                      const { loaderPromise: R } = this.getMatch(k);
                      let O = !1,
                        N = !1;
                      if (R) {
                        await R;
                        const L = this.getMatch(k);
                        L.error && f(L, L.error);
                      } else {
                        const L = S[P - 1],
                          F = this.looseRoutesById[x],
                          U = () => {
                            const {
                                params: z,
                                loaderDeps: ae,
                                abortController: ce,
                                context: de,
                                cause: Z,
                              } = this.getMatch(k),
                              Ve = c(k);
                            return {
                              params: z,
                              deps: ae,
                              preload: !!Ve,
                              parentMatchPromise: L,
                              abortController: ce,
                              context: de,
                              location: n,
                              navigate: (hi) => this.navigate({ ...hi, _fromLocation: n }),
                              cause: Ve ? "preload" : Z,
                              route: F,
                            };
                          },
                          Q = Date.now() - this.getMatch(k).updatedAt,
                          H = c(k),
                          G = H
                            ? (F.options.preloadStaleTime ??
                              this.options.defaultPreloadStaleTime ??
                              3e4)
                            : (F.options.staleTime ?? this.options.defaultStaleTime ?? 0),
                          ke = F.options.shouldReload,
                          M = typeof ke == "function" ? ke(U()) : ke;
                        o(k, (z) => ({
                          ...z,
                          loaderPromise: lr(),
                          preload: !!H && !this.state.matches.find((ae) => ae.id === k),
                        }));
                        const I = async () => {
                            var z, ae, ce, de, Z, Ve, hi, kc;
                            try {
                              const pi = async () => {
                                const Le = this.getMatch(k);
                                Le.minPendingPromise && (await Le.minPendingPromise);
                              };
                              try {
                                this.loadRouteChunk(F),
                                  o(k, (ma) => ({ ...ma, isFetching: "loader" }));
                                let Le = await ((ae = (z = F.options).loader) == null
                                  ? void 0
                                  : ae.call(z, U()));
                                this.serializeLoaderData &&
                                  (Le = this.serializeLoaderData("loaderData", Le, {
                                    router: this,
                                    match: this.getMatch(k),
                                  })),
                                  f(this.getMatch(k), Le),
                                  await F._lazyPromise,
                                  await pi();
                                const It =
                                    (de = (ce = F.options).head) == null
                                      ? void 0
                                      : de.call(ce, {
                                          matches: r,
                                          match: this.getMatch(k),
                                          params: this.getMatch(k).params,
                                          loaderData: Le,
                                        }),
                                  ir = It == null ? void 0 : It.meta,
                                  ny = It == null ? void 0 : It.links,
                                  ry = It == null ? void 0 : It.scripts,
                                  sy =
                                    (Ve = (Z = F.options).headers) == null
                                      ? void 0
                                      : Ve.call(Z, { loaderData: Le });
                                o(k, (ma) => ({
                                  ...ma,
                                  error: void 0,
                                  status: "success",
                                  isFetching: !1,
                                  updatedAt: Date.now(),
                                  loaderData: Le,
                                  meta: ir,
                                  links: ny,
                                  scripts: ry,
                                  headers: sy,
                                }));
                              } catch (Le) {
                                let It = Le;
                                await pi(), f(this.getMatch(k), Le);
                                try {
                                  (kc = (hi = F.options).onError) == null || kc.call(hi, Le);
                                } catch (ir) {
                                  (It = ir), f(this.getMatch(k), ir);
                                }
                                o(k, (ir) => ({
                                  ...ir,
                                  error: It,
                                  status: "error",
                                  isFetching: !1,
                                }));
                              }
                              await F._componentsPromise;
                            } catch (pi) {
                              o(k, (Le) => ({ ...Le, loaderPromise: void 0 })),
                                f(this.getMatch(k), pi);
                            }
                          },
                          { status: j, invalid: W } = this.getMatch(k);
                        (O = j === "success" && (W || (M ?? Q > G))),
                          (H && F.options.preload === !1) ||
                            (O && !a
                              ? ((N = !0),
                                (async () => {
                                  try {
                                    await I();
                                    const { loaderPromise: z, loadPromise: ae } = this.getMatch(k);
                                    z == null || z.resolve(),
                                      ae == null || ae.resolve(),
                                      o(k, (ce) => ({ ...ce, loaderPromise: void 0 }));
                                  } catch (z) {
                                    Ka(z) && (await this.navigate(z));
                                  }
                                })())
                              : (j !== "success" || (O && a)) && (await I()));
                      }
                      if (!N) {
                        const { loaderPromise: L, loadPromise: F } = this.getMatch(k);
                        L == null || L.resolve(), F == null || F.resolve();
                      }
                      return (
                        o(k, (L) => ({
                          ...L,
                          isFetching: N ? L.isFetching : !1,
                          loaderPromise: N ? L.loaderPromise : void 0,
                          invalid: !1,
                        })),
                        this.getMatch(k)
                      );
                    })()
                  );
                }),
                  await Promise.all(S),
                  y();
              } catch (h) {
                m(h);
              }
            })();
          }),
            await d();
        } catch (y) {
          if (bn(y) || wt(y)) throw (wt(y) && !s && (await d()), y);
        }
        return r;
      }),
      (this.invalidate = (n) => {
        const r = (s) => {
          var i;
          return (((i = n == null ? void 0 : n.filter) == null ? void 0 : i.call(n, s)) ?? !0)
            ? {
                ...s,
                invalid: !0,
                ...(s.status === "error" ? { status: "pending", error: void 0 } : {}),
              }
            : s;
        };
        return (
          this.__store.setState((s) => {
            var i;
            return {
              ...s,
              matches: s.matches.map(r),
              cachedMatches: s.cachedMatches.map(r),
              pendingMatches: (i = s.pendingMatches) == null ? void 0 : i.map(r),
            };
          }),
          this.load({ sync: n == null ? void 0 : n.sync })
        );
      }),
      (this.resolveRedirect = (n) => {
        const r = n;
        return r.href || (r.href = this.buildLocation(r).href), r;
      }),
      (this.clearCache = (n) => {
        const r = n == null ? void 0 : n.filter;
        r !== void 0
          ? this.__store.setState((s) => ({
              ...s,
              cachedMatches: s.cachedMatches.filter((i) => !r(i)),
            }))
          : this.__store.setState((s) => ({ ...s, cachedMatches: [] }));
      }),
      (this.clearExpiredCache = () => {
        const n = (r) => {
          const s = this.looseRoutesById[r.routeId];
          if (!s.options.loader) return !0;
          const i =
            (r.preload
              ? (s.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
              : (s.options.gcTime ?? this.options.defaultGcTime)) ?? 5 * 60 * 1e3;
          return !(r.status !== "error" && Date.now() - r.updatedAt < i);
        };
        this.clearCache({ filter: n });
      }),
      (this.loadRouteChunk = (n) => (
        n._lazyPromise === void 0 &&
          (n.lazyFn
            ? (n._lazyPromise = n.lazyFn().then((r) => {
                const { id: s, ...i } = r.options;
                Object.assign(n.options, i);
              }))
            : (n._lazyPromise = Promise.resolve())),
        n._componentsPromise === void 0 &&
          (n._componentsPromise = n._lazyPromise.then(() =>
            Promise.all(
              tm.map(async (r) => {
                const s = n.options[r];
                s != null && s.preload && (await s.preload());
              })
            )
          )),
        n._componentsPromise
      )),
      (this.preloadRoute = async (n) => {
        const r = this.buildLocation(n);
        let s = this.matchRoutes(r, { throwOnError: !0, preload: !0, dest: n });
        const i = new Set(
            [...this.state.matches, ...(this.state.pendingMatches ?? [])].map((a) => a.id)
          ),
          o = new Set([...i, ...this.state.cachedMatches.map((a) => a.id)]);
        Ha(() => {
          s.forEach((a) => {
            o.has(a.id) ||
              this.__store.setState((l) => ({ ...l, cachedMatches: [...l.cachedMatches, a] }));
          });
        });
        try {
          return (
            (s = await this.loadMatches({
              matches: s,
              location: r,
              preload: !0,
              updateMatch: (a, l) => {
                i.has(a) ? (s = s.map((u) => (u.id === a ? l(u) : u))) : this.updateMatch(a, l);
              },
            })),
            s
          );
        } catch (a) {
          if (bn(a))
            return a.reloadDocument ? void 0 : await this.preloadRoute({ ...a, _fromLocation: r });
          console.error(a);
          return;
        }
      }),
      (this.matchRoute = (n, r) => {
        const s = {
            ...n,
            to: n.to ? this.resolvePathWithBase(n.from || "", n.to) : void 0,
            params: n.params || {},
            leaveParams: !0,
          },
          i = this.buildLocation(s);
        if (r != null && r.pending && this.state.status !== "pending") return !1;
        const a = ((r == null ? void 0 : r.pending) === void 0 ? !this.state.isLoading : r.pending)
            ? this.latestLocation
            : this.state.resolvedLocation,
          l = Di(this.basepath, a.pathname, { ...r, to: i.pathname });
        return !l || (n.params && !Os(l, n.params, { partial: !0 }))
          ? !1
          : l && ((r == null ? void 0 : r.includeSearch) ?? !0)
            ? Os(a.search, i.search, { partial: !0 })
              ? l
              : !1
            : l;
      }),
      (this.dehydrate = () => {
        var n;
        const r = ((n = this.options.errorSerializer) == null ? void 0 : n.serialize) ?? $0;
        return {
          state: {
            dehydratedMatches: this.state.matches.map((s) => ({
              ...no(s, ["id", "status", "updatedAt"]),
              error: s.error ? { data: r(s.error), __isServerError: !0 } : void 0,
            })),
          },
          manifest: this.manifest,
        };
      }),
      (this.hydrate = () => {
        var n, r, s;
        let i;
        typeof document < "u" &&
          (i = this.options.transformer.parse(
            (n = window.__TSR__) == null ? void 0 : n.dehydrated
          )),
          Ke(i),
          (this.dehydratedData = i.payload),
          (s = (r = this.options).hydrate) == null || s.call(r, i.payload);
        const o = i.router.state,
          a = this.matchRoutes(this.state.location).map((l) => {
            const u = o.dehydratedMatches.find((d) => d.id === l.id);
            return (
              Ke(u, `Could not find a client-side match for dehydrated match with id: ${l.id}!`),
              { ...l, ...u }
            );
          });
        this.__store.setState((l) => ({ ...l, matches: a })), (this.manifest = i.router.manifest);
      }),
      (this.injectedHtml = []),
      (this.injectHtml = (n) => {
        const r = () => ((this.injectedHtml = this.injectedHtml.filter((s) => s !== r)), n);
        this.injectedHtml.push(r);
      }),
      (this.injectScript = (n, r) => {
        this.injectHtml(
          `<script class='tsr-once'>${n}; if (typeof __TSR__ !== 'undefined') __TSR__.cleanScripts()<\/script>`
        );
      }),
      (this.streamedKeys = new Set()),
      (this.getStreamedValue = (n) => {
        var r;
        if (this.isServer) return;
        const s = (r = window.__TSR__) == null ? void 0 : r.streamedValues[n];
        if (s) return s.parsed || (s.parsed = this.options.transformer.parse(s.value)), s.parsed;
      }),
      (this.streamValue = (n, r) => {
        var s;
        this.streamedKeys.has(n),
          this.streamedKeys.add(n),
          this.injectScript(
            `__TSR__.streamedValues['${n}'] = { value: ${(s = this.serializer) == null ? void 0 : s.call(this, this.options.transformer.stringify(r))}}`
          );
      }),
      (this._handleNotFound = (n, r, { updateMatch: s = this.updateMatch } = {}) => {
        const i = Object.fromEntries(n.map((l) => [l.routeId, l]));
        let o =
          (r.global ? this.looseRoutesById[We] : this.looseRoutesById[r.routeId]) ||
          this.looseRoutesById[We];
        for (
          ;
          !o.options.notFoundComponent && !this.options.defaultNotFoundComponent && o.id !== We;

        )
          (o = o.parentRoute), Ke(o);
        const a = i[o.id];
        Ke(a, "Could not find match for route: " + o.id),
          s(a.id, (l) => ({ ...l, status: "notFound", error: r, isFetching: !1 })),
          r.routerCode === "BEFORE_LOAD" &&
            o.parentRoute &&
            ((r.routeId = o.parentRoute.id), this._handleNotFound(n, r, { updateMatch: s }));
      }),
      (this.hasNotFoundMatch = () =>
        this.__store.state.matches.some((n) => n.status === "notFound" || n.globalNotFound)),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...t,
        caseSensitive: t.caseSensitive ?? !1,
        notFoundMode: t.notFoundMode ?? "fuzzy",
        stringifySearch: t.stringifySearch ?? _0,
        parseSearch: t.parseSearch ?? k0,
        transformer: t.transformer ?? gs,
      }),
      typeof document < "u" && (window.__TSR__ROUTER__ = this);
  }
  get state() {
    return this.__store.state;
  }
  get looseRoutesById() {
    return this.routesById;
  }
  matchRoutes(t, n, r) {
    return typeof t == "string"
      ? this.matchRoutesInternal({ pathname: t, search: n }, r)
      : this.matchRoutesInternal(t, n);
  }
  matchRoutesInternal(t, n) {
    const {
      foundRoute: r,
      matchedRoutes: s,
      routeParams: i,
    } = this.getMatchedRoutes(t, n == null ? void 0 : n.dest);
    let o = !1;
    (r ? r.path !== "/" && i["**"] : Dn(t.pathname)) &&
      (this.options.notFoundRoute ? s.push(this.options.notFoundRoute) : (o = !0));
    const a = (() => {
        if (o) {
          if (this.options.notFoundMode !== "root")
            for (let c = s.length - 1; c >= 0; c--) {
              const f = s[c];
              if (f.children) return f.id;
            }
          return We;
        }
      })(),
      l = s.map((c) => {
        var f;
        let y;
        const m = ((f = c.options.params) == null ? void 0 : f.parse) ?? c.options.parseParams;
        if (m)
          try {
            const v = m(i);
            Object.assign(i, v);
          } catch (v) {
            if (((y = new j0(v.message, { cause: v })), n != null && n.throwOnError)) throw y;
            return y;
          }
      }),
      u = [],
      d = (c) =>
        (c == null ? void 0 : c.id)
          ? (c.context ?? this.options.context ?? {})
          : (this.options.context ?? {});
    return (
      s.forEach((c, f) => {
        var y, m, v, w;
        const p = u[f - 1],
          [h, g] = (() => {
            const U = (p == null ? void 0 : p.search) ?? t.search;
            try {
              const Q = Ga(c.options.validateSearch, U) ?? {};
              return [{ ...U, ...Q }, void 0];
            } catch (Q) {
              const H = new tu(Q.message, { cause: Q });
              if (n != null && n.throwOnError) throw H;
              return [U, H];
            }
          })(),
          S = ((m = (y = c.options).loaderDeps) == null ? void 0 : m.call(y, { search: h })) ?? "",
          k = S ? JSON.stringify(S) : "",
          x = ji({ path: c.fullPath, params: i, decodeCharMap: this.pathParamsDecodeCharMap }),
          P =
            ji({
              path: c.id,
              params: i,
              leaveWildcards: !0,
              decodeCharMap: this.pathParamsDecodeCharMap,
            }) + k,
          R = this.getMatch(P),
          O = this.state.matches.find((U) => U.routeId === c.id),
          N = O ? "stay" : "enter";
        let L;
        if (R)
          L = {
            ...R,
            cause: N,
            params: O ? nt(O.params, i) : i,
            search: nt(O ? O.search : R.search, h),
          };
        else {
          const U =
            c.options.loader || c.options.beforeLoad || c.lazyFn || b0(c) ? "pending" : "success";
          L = {
            id: P,
            index: f,
            routeId: c.id,
            params: O ? nt(O.params, i) : i,
            pathname: Ht([this.basepath, x]),
            updatedAt: Date.now(),
            search: O ? nt(O.search, h) : h,
            searchError: void 0,
            status: U,
            isFetching: !1,
            error: void 0,
            paramsError: l[f],
            __routeContext: {},
            __beforeLoadContext: {},
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: N,
            loaderDeps: O ? nt(O.loaderDeps, S) : S,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            meta: void 0,
            staticData: c.options.staticData || {},
            loadPromise: lr(),
            fullPath: c.fullPath,
          };
        }
        L.status === "success" &&
          (L.headers =
            (w = (v = c.options).headers) == null
              ? void 0
              : w.call(v, { loaderData: L.loaderData })),
          (n != null && n.preload) || (L.globalNotFound = a === c.id),
          (L.searchError = g);
        const F = d(p);
        (L.context = { ...F, ...L.__routeContext, ...L.__beforeLoadContext }), u.push(L);
      }),
      u.forEach((c, f) => {
        var y, m, v, w;
        const p = this.looseRoutesById[c.routeId];
        if (!this.getMatch(c.id) && (n == null ? void 0 : n._buildLocation) !== !0) {
          const S = u[f - 1],
            k = d(S),
            x = {
              deps: c.loaderDeps,
              params: c.params,
              context: k,
              location: t,
              navigate: (P) => this.navigate({ ...P, _fromLocation: t }),
              buildLocation: this.buildLocation,
              cause: c.cause,
              abortController: c.abortController,
              preload: !!c.preload,
              matches: u,
            };
          (c.__routeContext =
            ((m = (y = p.options).context) == null ? void 0 : m.call(y, x)) ?? {}),
            (c.context = { ...k, ...c.__routeContext, ...c.__beforeLoadContext });
        }
        const g =
          (w = (v = p.options).head) == null
            ? void 0
            : w.call(v, {
                matches: u,
                match: c,
                params: c.params,
                loaderData: c.loaderData ?? void 0,
              });
        (c.links = g == null ? void 0 : g.links),
          (c.scripts = g == null ? void 0 : g.scripts),
          (c.meta = g == null ? void 0 : g.meta);
      }),
      u
    );
  }
}
class tu extends Error {}
class j0 extends Error {}
function D0(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: "idle",
    resolvedLocation: { ...e },
    location: e,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    statusCode: 200,
  };
}
function $0(e) {
  return e instanceof Error ? { name: e.name, message: e.message } : { data: e };
}
function $d(e) {
  return !(typeof e == "object" && e && "data" in e) ||
    !("__isServerError" in e && e.__isServerError) ||
    !(typeof e.data == "object" && e.data)
    ? !1
    : e.__isServerError === !0;
}
function zd(e) {
  if ("name" in e && "message" in e) {
    const t = new Error(e.message);
    return (t.name = e.name), t;
  }
  return e.data;
}
const aa = b.createContext(void 0),
  z0 = b.createContext(void 0);
function Kr(e) {
  const t = b.useContext(e.from ? z0 : aa);
  return ut({
    select: (r) => {
      const s = r.matches.find((i) => (e.from ? e.from === i.routeId : i.id === t));
      if (
        (Ke(
          !((e.shouldThrow ?? !0) && !s),
          `Could not find ${e.from ? `an active match from "${e.from}"` : "a nearest match!"}`
        ),
        s !== void 0)
      )
        return e.select ? e.select(s) : s;
    },
    structuralSharing: e.structuralSharing,
  });
}
function q0(e) {
  return Kr({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.loaderData) : t.loaderData),
  });
}
function U0(e) {
  const { select: t, ...n } = e;
  return Kr({ ...n, select: (r) => (t ? t(r.loaderDeps) : r.loaderDeps) });
}
function B0(e) {
  return Kr({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.params) : t.params),
  });
}
function V0(e) {
  return Kr({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function Q0(e) {
  const { navigate: t } = sr();
  return b.useCallback((n) => t({ ...n }), [t]);
}
let nm = class {
  constructor(t) {
    (this.init = (n) => {
      var r, s;
      this.originalIndex = n.originalIndex;
      const i = this.options,
        o = !(i != null && i.path) && !(i != null && i.id);
      (this.parentRoute = (s = (r = this.options).getParentRoute) == null ? void 0 : s.call(r)),
        o ? (this._path = We) : Ke(this.parentRoute);
      let a = o ? We : i.path;
      a && a !== "/" && (a = fc(a));
      const l = (i == null ? void 0 : i.id) || a;
      let u = o ? We : Ht([this.parentRoute.id === We ? "" : this.parentRoute.id, l]);
      a === We && (a = "/"), u !== We && (u = Ht(["/", u]));
      const d = u === We ? "/" : Ht([this.parentRoute.fullPath, a]);
      (this._path = a),
        (this._id = u),
        (this._fullPath = d),
        (this._to = d),
        (this._ssr = (i == null ? void 0 : i.ssr) ?? n.defaultSsr ?? !0);
    }),
      (this.updateLoader = (n) => (Object.assign(this.options, n), this)),
      (this.update = (n) => (Object.assign(this.options, n), this)),
      (this.lazy = (n) => ((this.lazyFn = n), this)),
      (this.useMatch = (n) =>
        Kr({
          select: n == null ? void 0 : n.select,
          from: this.id,
          structuralSharing: n == null ? void 0 : n.structuralSharing,
        })),
      (this.useRouteContext = (n) =>
        Kr({
          ...n,
          from: this.id,
          select: (r) => (n != null && n.select ? n.select(r.context) : r.context),
        })),
      (this.useSearch = (n) =>
        V0({
          select: n == null ? void 0 : n.select,
          structuralSharing: n == null ? void 0 : n.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (n) =>
        B0({
          select: n == null ? void 0 : n.select,
          structuralSharing: n == null ? void 0 : n.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (n) => U0({ ...n, from: this.id })),
      (this.useLoaderData = (n) => q0({ ...n, from: this.id })),
      (this.useNavigate = () => Q0({ from: this.id })),
      (this.options = t || {}),
      (this.isRoot = !(t != null && t.getParentRoute)),
      Ke(!(t != null && t.id && t != null && t.path)),
      (this.$$typeof = Symbol.for("react.memo"));
  }
  get to() {
    return this._to;
  }
  get id() {
    return this._id;
  }
  get path() {
    return this._path;
  }
  get fullPath() {
    return this._fullPath;
  }
  get ssr() {
    return this._ssr;
  }
  addChildren(t) {
    return this._addFileChildren(t);
  }
  _addFileChildren(t) {
    return (
      Array.isArray(t) && (this.children = t),
      typeof t == "object" && t !== null && (this.children = Object.values(t)),
      this
    );
  }
};
function H0(e) {
  return new nm(e);
}
class W0 extends nm {
  constructor(t) {
    super(t);
  }
  addChildren(t) {
    return super.addChildren(t), this;
  }
  _addFileChildren(t) {
    return super._addFileChildren(t), this;
  }
  _addFileTypes() {
    return this;
  }
}
function K0(e) {
  return new W0(e);
}
function G0(e) {
  return new J0(e, { silent: !0 }).createRoute;
}
class J0 {
  constructor(t, n) {
    (this.path = t),
      (this.createRoute = (r) => {
        this.silent;
        const s = H0(r);
        return (s.isRoot = !1), s;
      }),
      (this.silent = n == null ? void 0 : n.silent);
  }
}
function ro(e) {
  return _.jsx(_.Fragment, { children: e.children });
}
function rm(e, t, n) {
  return t.options.notFoundComponent
    ? _.jsx(t.options.notFoundComponent, { data: n })
    : e.options.defaultNotFoundComponent
      ? _.jsx(e.options.defaultNotFoundComponent, { data: n })
      : _.jsx(A0, {});
}
const sm = b.memo(function ({ matchId: t }) {
    var n, r;
    const s = sr(),
      i = ut({
        select: (w) => {
          var p;
          return (p = w.matches.find((h) => h.id === t)) == null ? void 0 : p.routeId;
        },
      });
    Ke(i);
    const o = s.routesById[i],
      a = o.options.pendingComponent ?? s.options.defaultPendingComponent,
      l = a ? _.jsx(a, {}) : null,
      u = o.options.errorComponent ?? s.options.defaultErrorComponent,
      d = o.options.onCatch ?? s.options.defaultOnCatch,
      c = o.isRoot
        ? (o.options.notFoundComponent ??
          ((n = s.options.notFoundRoute) == null ? void 0 : n.options.component))
        : o.options.notFoundComponent,
      f =
        (!o.isRoot || o.options.wrapInSuspense) &&
        (o.options.wrapInSuspense ??
          a ??
          ((r = o.options.errorComponent) == null ? void 0 : r.preload))
          ? b.Suspense
          : ro,
      y = u ? hc : ro,
      m = c ? N0 : ro,
      v = ut({ select: (w) => w.loadedAt });
    return _.jsx(aa.Provider, {
      value: t,
      children: _.jsx(f, {
        fallback: l,
        children: _.jsx(y, {
          getResetKey: () => v,
          errorComponent: u || oa,
          onCatch: (w, p) => {
            if (wt(w)) throw w;
            d == null || d(w, p);
          },
          children: _.jsx(m, {
            fallback: (w) => {
              if (!c || (w.routeId && w.routeId !== i) || (!w.routeId && !o.isRoot)) throw w;
              return b.createElement(c, w);
            },
            children: _.jsx(X0, { matchId: t }),
          }),
        }),
      }),
    });
  }),
  X0 = b.memo(function ({ matchId: t }) {
    var n, r, s, i, o;
    const a = sr(),
      {
        match: l,
        matchIndex: u,
        routeId: d,
      } = ut({
        select: (m) => {
          const v = m.matches.findIndex((h) => h.id === t),
            w = m.matches[v];
          return { routeId: w.routeId, matchIndex: v, match: no(w, ["id", "status", "error"]) };
        },
        structuralSharing: !0,
      }),
      c = a.routesById[d],
      f = b.useMemo(() => {
        const m = c.options.component ?? a.options.defaultComponent;
        return m ? _.jsx(m, {}) : _.jsx(im, {});
      }, [c.options.component, a.options.defaultComponent]),
      y = (c.options.errorComponent ?? a.options.defaultErrorComponent) || oa;
    if (l.status === "notFound") {
      let m;
      return (
        $d(l.error)
          ? (m = (((n = a.options.errorSerializer) == null ? void 0 : n.deserialize) ?? zd)(
              l.error.data
            ))
          : (m = l.error),
        Ke(wt(m)),
        rm(a, c, m)
      );
    }
    if (l.status === "redirected")
      throw (Ke(bn(l.error)), (r = a.getMatch(l.id)) == null ? void 0 : r.loadPromise);
    if (l.status === "error") {
      if (a.isServer) return _.jsx(y, { error: l.error, info: { componentStack: "" } });
      throw $d(l.error)
        ? (((s = a.options.errorSerializer) == null ? void 0 : s.deserialize) ?? zd)(l.error.data)
        : l.error;
    }
    if (l.status === "pending") {
      const m = c.options.pendingMinMs ?? a.options.defaultPendingMinMs;
      if (m && !((i = a.getMatch(l.id)) != null && i.minPendingPromise) && !a.isServer) {
        const v = lr();
        Promise.resolve().then(() => {
          a.updateMatch(l.id, (w) => ({ ...w, minPendingPromise: v }));
        }),
          setTimeout(() => {
            v.resolve(), a.updateMatch(l.id, (w) => ({ ...w, minPendingPromise: void 0 }));
          }, m);
      }
      throw (o = a.getMatch(l.id)) == null ? void 0 : o.loadPromise;
    }
    return _.jsxs(_.Fragment, {
      children: [f, a.AfterEachMatch ? _.jsx(a.AfterEachMatch, { match: l, matchIndex: u }) : null],
    });
  }),
  im = b.memo(function () {
    const t = sr(),
      n = b.useContext(aa),
      r = ut({
        select: (u) => {
          var d;
          return (d = u.matches.find((c) => c.id === n)) == null ? void 0 : d.routeId;
        },
      }),
      s = t.routesById[r],
      i = ut({
        select: (u) => {
          const c = u.matches.find((f) => f.id === n);
          return Ke(c), c.globalNotFound;
        },
      }),
      o = ut({
        select: (u) => {
          var d;
          const c = u.matches,
            f = c.findIndex((y) => y.id === n);
          return (d = c[f + 1]) == null ? void 0 : d.id;
        },
      });
    if (i) return rm(t, s, void 0);
    if (!o) return null;
    const a = _.jsx(sm, { matchId: o }),
      l = t.options.defaultPendingComponent ? _.jsx(t.options.defaultPendingComponent, {}) : null;
    return n === We ? _.jsx(b.Suspense, { fallback: l, children: a }) : a;
  });
function Y0() {
  const e = sr(),
    t = b.useRef({ router: e, mounted: !1 }),
    n = ut({ select: ({ isLoading: c }) => c }),
    [r, s] = b.useState(!1),
    i = ut({ select: (c) => c.matches.some((f) => f.status === "pending"), structuralSharing: !0 }),
    o = Wa(n),
    a = n || r || i,
    l = Wa(a),
    u = n || i,
    d = Wa(u);
  return (
    e.isServer ||
      (e.startReactTransition = (c) => {
        s(!0),
          b.startTransition(() => {
            c(), s(!1);
          });
      }),
    b.useEffect(() => {
      const c = e.history.subscribe(e.load),
        f = e.buildLocation({
          to: e.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        Dn(e.latestLocation.href) !== Dn(f.href) && e.commitLocation({ ...f, replace: !0 }),
        () => {
          c();
        }
      );
    }, [e, e.history]),
    Ii(() => {
      var c;
      if (
        (typeof window < "u" && (c = window.__TSR__) != null && c.dehydrated) ||
        (t.current.router === e && t.current.mounted)
      )
        return;
      (t.current = { router: e, mounted: !0 }),
        (async () => {
          try {
            await e.load();
          } catch (y) {
            console.error(y);
          }
        })();
    }, [e]),
    Ii(() => {
      if (o && !n) {
        const c = e.state.location,
          f = e.state.resolvedLocation,
          y = f.pathname !== c.pathname,
          m = f.href !== c.href;
        e.emit({ type: "onLoad", fromLocation: f, toLocation: c, pathChanged: y, hrefChanged: m });
      }
    }, [o, e, n]),
    Ii(() => {
      if (d && !u) {
        const c = e.state.location,
          f = e.state.resolvedLocation,
          y = f.pathname !== c.pathname,
          m = f.href !== c.href;
        e.emit({
          type: "onBeforeRouteMount",
          fromLocation: f,
          toLocation: c,
          pathChanged: y,
          hrefChanged: m,
        });
      }
    }, [u, d, e]),
    Ii(() => {
      if (l && !a) {
        const c = e.state.location,
          f = e.state.resolvedLocation,
          y = f.pathname !== c.pathname,
          m = f.href !== c.href;
        if (
          (e.emit({
            type: "onResolved",
            fromLocation: f,
            toLocation: c,
            pathChanged: y,
            hrefChanged: m,
          }),
          e.__store.setState((v) => ({ ...v, status: "idle", resolvedLocation: v.location })),
          typeof document < "u" && document.querySelector)
        ) {
          const v = e.state.location.state.__hashScrollIntoViewOptions ?? !0;
          if (v && e.state.location.hash !== "") {
            const w = document.getElementById(e.state.location.hash);
            w && w.scrollIntoView(v);
          }
        }
      }
    }, [a, l, e]),
    null
  );
}
function Z0() {
  const e = sr(),
    t = e.options.defaultPendingComponent ? _.jsx(e.options.defaultPendingComponent, {}) : null,
    n = e.isServer || (typeof document < "u" && window.__TSR__) ? ro : b.Suspense,
    r = _.jsxs(n, { fallback: t, children: [_.jsx(Y0, {}), _.jsx(ew, {})] });
  return e.options.InnerWrap ? _.jsx(e.options.InnerWrap, { children: r }) : r;
}
function ew() {
  const e = ut({
      select: (n) => {
        var r;
        return (r = n.matches[0]) == null ? void 0 : r.id;
      },
    }),
    t = ut({ select: (n) => n.loadedAt });
  return _.jsx(aa.Provider, {
    value: e,
    children: _.jsx(hc, {
      getResetKey: () => t,
      errorComponent: oa,
      onCatch: (n) => {
        n.message || n.toString();
      },
      children: e ? _.jsx(sm, { matchId: e }) : null,
    }),
  });
}
function tw({ router: e, children: t, ...n }) {
  e.update({ ...e.options, ...n, context: { ...e.options.context, ...n.context } });
  const r = Hp(),
    s = _.jsx(r.Provider, { value: e, children: t });
  return e.options.Wrap ? _.jsx(e.options.Wrap, { children: s }) : s;
}
function nw({ router: e, ...t }) {
  return _.jsx(tw, { router: e, ...t, children: _.jsx(Z0, {}) });
}
var ci = class {
    constructor() {
      (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  la = typeof window > "u" || "Deno" in globalThis;
function mt() {}
function rw(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function sw(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function iw(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function qd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ow(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ud(e, t) {
  const { type: n = "all", exact: r, fetchStatus: s, predicate: i, queryKey: o, stale: a } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== pc(o, t.options)) return !1;
    } else if (!Js(t.queryKey, o)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (s && s !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Bd(e, t) {
  const { exact: n, status: r, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (er(t.options.mutationKey) !== er(i)) return !1;
    } else if (!Js(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (s && !s(t)));
}
function pc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || er)(e);
}
function er(e) {
  return JSON.stringify(e, (t, n) =>
    nu(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, s) => ((r[s] = n[s]), r), {})
      : n
  );
}
function Js(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? !Object.keys(t).some((n) => !Js(e[n], t[n]))
        : !1;
}
function om(e, t) {
  if (e === t) return e;
  const n = Vd(e) && Vd(t);
  if (n || (nu(e) && nu(t))) {
    const r = n ? e : Object.keys(e),
      s = r.length,
      i = n ? t : Object.keys(t),
      o = i.length,
      a = n ? [] : {};
    let l = 0;
    for (let u = 0; u < o; u++) {
      const d = n ? u : i[u];
      ((!n && r.includes(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((a[d] = void 0), l++)
        : ((a[d] = om(e[d], t[d])), a[d] === e[d] && e[d] !== void 0 && l++);
    }
    return s === o && l === s ? e : a;
  }
  return t;
}
function aw(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Vd(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function nu(e) {
  if (!Qd(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Qd(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Qd(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function lw(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function uw(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? om(e, t)
      : t;
}
function cw(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function dw(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var mc = Symbol();
function am(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === mc
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var zn,
  an,
  Lr,
  Sf,
  fw =
    ((Sf = class extends ci {
      constructor() {
        super();
        B(this, zn);
        B(this, an);
        B(this, Lr);
        D(this, Lr, (t) => {
          if (!la && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        C(this, an) || this.setEventListener(C(this, Lr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = C(this, an)) == null || t.call(this), D(this, an, void 0));
      }
      setEventListener(t) {
        var n;
        D(this, Lr, t),
          (n = C(this, an)) == null || n.call(this),
          D(
            this,
            an,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        C(this, zn) !== t && (D(this, zn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof C(this, zn) == "boolean"
          ? C(this, zn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
      }
    }),
    (zn = new WeakMap()),
    (an = new WeakMap()),
    (Lr = new WeakMap()),
    Sf),
  lm = new fw(),
  Mr,
  ln,
  Nr,
  xf,
  hw =
    ((xf = class extends ci {
      constructor() {
        super();
        B(this, Mr, !0);
        B(this, ln);
        B(this, Nr);
        D(this, Nr, (t) => {
          if (!la && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n), window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        C(this, ln) || this.setEventListener(C(this, Nr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = C(this, ln)) == null || t.call(this), D(this, ln, void 0));
      }
      setEventListener(t) {
        var n;
        D(this, Nr, t),
          (n = C(this, ln)) == null || n.call(this),
          D(this, ln, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        C(this, Mr) !== t &&
          (D(this, Mr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return C(this, Mr);
      }
    }),
    (Mr = new WeakMap()),
    (ln = new WeakMap()),
    (Nr = new WeakMap()),
    xf),
  Fo = new hw();
function pw() {
  let e, t;
  const n = new Promise((s, i) => {
    (e = s), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(s) {
    Object.assign(n, s), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (s) => {
      r({ status: "fulfilled", value: s }), e(s);
    }),
    (n.reject = (s) => {
      r({ status: "rejected", reason: s }), t(s);
    }),
    n
  );
}
function mw(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function um(e) {
  return (e ?? "online") === "online" ? Fo.isOnline() : !0;
}
var cm = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Ja(e) {
  return e instanceof cm;
}
function dm(e) {
  let t = !1,
    n = 0,
    r = !1,
    s;
  const i = pw(),
    o = (v) => {
      var w;
      r || (f(new cm(v)), (w = e.abort) == null || w.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () => lm.isFocused() && (e.networkMode === "always" || Fo.isOnline()) && e.canRun(),
    d = () => um(e.networkMode) && e.canRun(),
    c = (v) => {
      var w;
      r || ((r = !0), (w = e.onSuccess) == null || w.call(e, v), s == null || s(), i.resolve(v));
    },
    f = (v) => {
      var w;
      r || ((r = !0), (w = e.onError) == null || w.call(e, v), s == null || s(), i.reject(v));
    },
    y = () =>
      new Promise((v) => {
        var w;
        (s = (p) => {
          (r || u()) && v(p);
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var v;
        (s = void 0), r || (v = e.onContinue) == null || v.call(e);
      }),
    m = () => {
      if (r) return;
      let v;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        v = w ?? e.fn();
      } catch (p) {
        v = Promise.reject(p);
      }
      Promise.resolve(v)
        .then(c)
        .catch((p) => {
          var x;
          if (r) return;
          const h = e.retry ?? (la ? 0 : 3),
            g = e.retryDelay ?? mw,
            S = typeof g == "function" ? g(n, p) : g,
            k = h === !0 || (typeof h == "number" && n < h) || (typeof h == "function" && h(n, p));
          if (t || !k) {
            f(p);
            return;
          }
          n++,
            (x = e.onFail) == null || x.call(e, n, p),
            lw(S)
              .then(() => (u() ? void 0 : y()))
              .then(() => {
                t ? f(p) : m();
              });
        });
    };
  return {
    promise: i,
    cancel: o,
    continue: () => (s == null || s(), i),
    cancelRetry: a,
    continueRetry: l,
    canStart: d,
    start: () => (d() ? m() : y().then(m), i),
  };
}
function yw() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    s = (a) => setTimeout(a, 0);
  const i = (a) => {
      t
        ? e.push(a)
        : s(() => {
            n(a);
          });
    },
    o = () => {
      const a = e;
      (e = []),
        a.length &&
          s(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          });
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        t--, t || o();
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        i(() => {
          a(...l);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      s = a;
    },
  };
}
var ve = yw(),
  qn,
  kf,
  fm =
    ((kf = class {
      constructor() {
        B(this, qn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          sw(this.gcTime) &&
            D(
              this,
              qn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (la ? 1 / 0 : 5 * 60 * 1e3));
      }
      clearGcTimeout() {
        C(this, qn) && (clearTimeout(C(this, qn)), D(this, qn, void 0));
      }
    }),
    (qn = new WeakMap()),
    kf),
  Ar,
  br,
  st,
  Re,
  ni,
  Un,
  yt,
  jt,
  _f,
  gw =
    ((_f = class extends fm {
      constructor(t) {
        super();
        B(this, yt);
        B(this, Ar);
        B(this, br);
        B(this, st);
        B(this, Re);
        B(this, ni);
        B(this, Un);
        D(this, Un, !1),
          D(this, ni, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          D(this, st, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          D(this, Ar, ww(this.options)),
          (this.state = t.state ?? C(this, Ar)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = C(this, Re)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...C(this, ni), ...t }), this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && C(this, st).remove(this);
      }
      setData(t, n) {
        const r = uw(this.state.data, t, this.options);
        return (
          le(this, yt, jt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        le(this, yt, jt).call(this, { type: "setState", state: t, setStateOptions: n });
      }
      cancel(t) {
        var r, s;
        const n = (r = C(this, Re)) == null ? void 0 : r.promise;
        return (
          (s = C(this, Re)) == null || s.cancel(t), n ? n.then(mt).catch(mt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(C(this, Ar));
      }
      isActive() {
        return this.observers.some((t) => ow(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === mc ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated || this.state.data === void 0 || !iw(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }), (n = C(this, Re)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }), (n = C(this, Re)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          C(this, st).notify({ type: "observerAdded", query: this, observer: t }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (C(this, Re) &&
              (C(this, Un) ? C(this, Re).cancel({ revert: !0 }) : C(this, Re).cancelRetry()),
            this.scheduleGc()),
          C(this, st).notify({ type: "observerRemoved", query: this, observer: t }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated || le(this, yt, jt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var l, u, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (C(this, Re)) return C(this, Re).continueRetry(), C(this, Re).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const c = this.observers.find((f) => f.options.queryFn);
          c && this.setOptions(c.options);
        }
        const r = new AbortController(),
          s = (c) => {
            Object.defineProperty(c, "signal", {
              enumerable: !0,
              get: () => (D(this, Un, !0), r.signal),
            });
          },
          i = () => {
            const c = am(this.options, n),
              f = { queryKey: this.queryKey, meta: this.meta };
            return (
              s(f),
              D(this, Un, !1),
              this.options.persister ? this.options.persister(c, f, this) : c(f)
            );
          },
          o = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i,
          };
        s(o),
          (l = this.options.behavior) == null || l.onFetch(o, this),
          D(this, br, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !== ((u = o.fetchOptions) == null ? void 0 : u.meta)) &&
            le(this, yt, jt).call(this, {
              type: "fetch",
              meta: (d = o.fetchOptions) == null ? void 0 : d.meta,
            });
        const a = (c) => {
          var f, y, m, v;
          (Ja(c) && c.silent) || le(this, yt, jt).call(this, { type: "error", error: c }),
            Ja(c) ||
              ((y = (f = C(this, st).config).onError) == null || y.call(f, c, this),
              (v = (m = C(this, st).config).onSettled) == null ||
                v.call(m, this.state.data, c, this)),
            this.scheduleGc();
        };
        return (
          D(
            this,
            Re,
            dm({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: o.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (c) => {
                var f, y, m, v;
                if (c === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(c);
                } catch (w) {
                  a(w);
                  return;
                }
                (y = (f = C(this, st).config).onSuccess) == null || y.call(f, c, this),
                  (v = (m = C(this, st).config).onSettled) == null ||
                    v.call(m, c, this.state.error, this),
                  this.scheduleGc();
              },
              onError: a,
              onFail: (c, f) => {
                le(this, yt, jt).call(this, { type: "failed", failureCount: c, error: f });
              },
              onPause: () => {
                le(this, yt, jt).call(this, { type: "pause" });
              },
              onContinue: () => {
                le(this, yt, jt).call(this, { type: "continue" });
              },
              retry: o.options.retry,
              retryDelay: o.options.retryDelay,
              networkMode: o.options.networkMode,
              canRun: () => !0,
            })
          ),
          C(this, Re).start()
        );
      }
    }),
    (Ar = new WeakMap()),
    (br = new WeakMap()),
    (st = new WeakMap()),
    (Re = new WeakMap()),
    (ni = new WeakMap()),
    (Un = new WeakMap()),
    (yt = new WeakSet()),
    (jt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return { ...r, ...vw(r.data, this.options), fetchMeta: t.meta ?? null };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const s = t.error;
            return Ja(s) && s.revert && C(this, br)
              ? { ...C(this, br), fetchStatus: "idle" }
              : {
                  ...r,
                  error: s,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        ve.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            C(this, st).notify({ query: this, type: "updated", action: t });
        });
    }),
    _f);
function vw(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: um(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function ww(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Ot,
  Cf,
  Sw =
    ((Cf = class extends ci {
      constructor(t = {}) {
        super();
        B(this, Ot);
        (this.config = t), D(this, Ot, new Map());
      }
      build(t, n, r) {
        const s = n.queryKey,
          i = n.queryHash ?? pc(s, n);
        let o = this.get(i);
        return (
          o ||
            ((o = new gw({
              cache: this,
              queryKey: s,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        C(this, Ot).has(t.queryHash) ||
          (C(this, Ot).set(t.queryHash, t), this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = C(this, Ot).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && C(this, Ot).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        ve.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return C(this, Ot).get(t);
      }
      getAll() {
        return [...C(this, Ot).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Ud(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Ud(t, r)) : n;
      }
      notify(t) {
        ve.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        ve.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        ve.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Ot = new WeakMap()),
    Cf),
  Lt,
  Me,
  Bn,
  Mt,
  tn,
  Ef,
  xw =
    ((Ef = class extends fm {
      constructor(t) {
        super();
        B(this, Mt);
        B(this, Lt);
        B(this, Me);
        B(this, Bn);
        (this.mutationId = t.mutationId),
          D(this, Me, t.mutationCache),
          D(this, Lt, []),
          (this.state = t.state || hm()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        C(this, Lt).includes(t) ||
          (C(this, Lt).push(t),
          this.clearGcTimeout(),
          C(this, Me).notify({ type: "observerAdded", mutation: this, observer: t }));
      }
      removeObserver(t) {
        D(
          this,
          Lt,
          C(this, Lt).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          C(this, Me).notify({ type: "observerRemoved", mutation: this, observer: t });
      }
      optionalRemove() {
        C(this, Lt).length ||
          (this.state.status === "pending" ? this.scheduleGc() : C(this, Me).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = C(this, Bn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var s, i, o, a, l, u, d, c, f, y, m, v, w, p, h, g, S, k, x, P;
        D(
          this,
          Bn,
          dm({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (R, O) => {
              le(this, Mt, tn).call(this, { type: "failed", failureCount: R, error: O });
            },
            onPause: () => {
              le(this, Mt, tn).call(this, { type: "pause" });
            },
            onContinue: () => {
              le(this, Mt, tn).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => C(this, Me).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          r = !C(this, Bn).canStart();
        try {
          if (!n) {
            le(this, Mt, tn).call(this, { type: "pending", variables: t, isPaused: r }),
              await ((i = (s = C(this, Me).config).onMutate) == null ? void 0 : i.call(s, t, this));
            const O = await ((a = (o = this.options).onMutate) == null ? void 0 : a.call(o, t));
            O !== this.state.context &&
              le(this, Mt, tn).call(this, {
                type: "pending",
                context: O,
                variables: t,
                isPaused: r,
              });
          }
          const R = await C(this, Bn).start();
          return (
            await ((u = (l = C(this, Me).config).onSuccess) == null
              ? void 0
              : u.call(l, R, t, this.state.context, this)),
            await ((c = (d = this.options).onSuccess) == null
              ? void 0
              : c.call(d, R, t, this.state.context)),
            await ((y = (f = C(this, Me).config).onSettled) == null
              ? void 0
              : y.call(f, R, null, this.state.variables, this.state.context, this)),
            await ((v = (m = this.options).onSettled) == null
              ? void 0
              : v.call(m, R, null, t, this.state.context)),
            le(this, Mt, tn).call(this, { type: "success", data: R }),
            R
          );
        } catch (R) {
          try {
            throw (
              (await ((p = (w = C(this, Me).config).onError) == null
                ? void 0
                : p.call(w, R, t, this.state.context, this)),
              await ((g = (h = this.options).onError) == null
                ? void 0
                : g.call(h, R, t, this.state.context)),
              await ((k = (S = C(this, Me).config).onSettled) == null
                ? void 0
                : k.call(S, void 0, R, this.state.variables, this.state.context, this)),
              await ((P = (x = this.options).onSettled) == null
                ? void 0
                : P.call(x, void 0, R, t, this.state.context)),
              R)
            );
          } finally {
            le(this, Mt, tn).call(this, { type: "error", error: R });
          }
        } finally {
          C(this, Me).runNext(this);
        }
      }
    }),
    (Lt = new WeakMap()),
    (Me = new WeakMap()),
    (Bn = new WeakMap()),
    (Mt = new WeakSet()),
    (tn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return { ...r, failureCount: t.failureCount, failureReason: t.error };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        ve.batch(() => {
          C(this, Lt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            C(this, Me).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Ef);
function hm() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var qt,
  gt,
  ri,
  Rf,
  kw =
    ((Rf = class extends ci {
      constructor(t = {}) {
        super();
        B(this, qt);
        B(this, gt);
        B(this, ri);
        (this.config = t), D(this, qt, new Set()), D(this, gt, new Map()), D(this, ri, 0);
      }
      build(t, n, r) {
        const s = new xw({
          mutationCache: this,
          mutationId: ++mi(this, ri)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(s), s;
      }
      add(t) {
        C(this, qt).add(t);
        const n = qi(t);
        if (typeof n == "string") {
          const r = C(this, gt).get(n);
          r ? r.push(t) : C(this, gt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (C(this, qt).delete(t)) {
          const n = qi(t);
          if (typeof n == "string") {
            const r = C(this, gt).get(n);
            if (r)
              if (r.length > 1) {
                const s = r.indexOf(t);
                s !== -1 && r.splice(s, 1);
              } else r[0] === t && C(this, gt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = qi(t);
        if (typeof n == "string") {
          const r = C(this, gt).get(n),
            s = r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !s || s === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = qi(t);
        if (typeof n == "string") {
          const s =
            (r = C(this, gt).get(n)) == null ? void 0 : r.find((i) => i !== t && i.state.isPaused);
          return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        ve.batch(() => {
          C(this, qt).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            C(this, qt).clear(),
            C(this, gt).clear();
        });
      }
      getAll() {
        return Array.from(C(this, qt));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Bd(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Bd(t, n));
      }
      notify(t) {
        ve.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return ve.batch(() => Promise.all(t.map((n) => n.continue().catch(mt))));
      }
    }),
    (qt = new WeakMap()),
    (gt = new WeakMap()),
    (ri = new WeakMap()),
    Rf);
function qi(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Hd(e) {
  return {
    onFetch: (t, n) => {
      var d, c, f, y, m;
      const r = t.options,
        s =
          (f =
            (c = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : c.fetchMore) ==
          null
            ? void 0
            : f.direction,
        i = ((y = t.state.data) == null ? void 0 : y.pages) || [],
        o = ((m = t.state.data) == null ? void 0 : m.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let v = !1;
        const w = (g) => {
            Object.defineProperty(g, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (v = !0)
                  : t.signal.addEventListener("abort", () => {
                      v = !0;
                    }),
                t.signal
              ),
            });
          },
          p = am(t.options, t.fetchOptions),
          h = async (g, S, k) => {
            if (v) return Promise.reject();
            if (S == null && g.pages.length) return Promise.resolve(g);
            const x = {
              queryKey: t.queryKey,
              pageParam: S,
              direction: k ? "backward" : "forward",
              meta: t.options.meta,
            };
            w(x);
            const P = await p(x),
              { maxPages: R } = t.options,
              O = k ? dw : cw;
            return { pages: O(g.pages, P, R), pageParams: O(g.pageParams, S, R) };
          };
        if (s && i.length) {
          const g = s === "backward",
            S = g ? _w : Wd,
            k = { pages: i, pageParams: o },
            x = S(r, k);
          a = await h(k, x, g);
        } else {
          const g = e ?? i.length;
          do {
            const S = l === 0 ? (o[0] ?? r.initialPageParam) : Wd(r, a);
            if (l > 0 && S == null) break;
            (a = await h(a, S)), l++;
          } while (l < g);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var v, w;
            return (w = (v = t.options).persister) == null
              ? void 0
              : w.call(v, u, { queryKey: t.queryKey, meta: t.options.meta, signal: t.signal }, n);
          })
        : (t.fetchFn = u);
    },
  };
}
function Wd(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function _w(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var ie,
  un,
  cn,
  Fr,
  Ir,
  dn,
  jr,
  Dr,
  Pf,
  Cw =
    ((Pf = class {
      constructor(e = {}) {
        B(this, ie);
        B(this, un);
        B(this, cn);
        B(this, Fr);
        B(this, Ir);
        B(this, dn);
        B(this, jr);
        B(this, Dr);
        D(this, ie, e.queryCache || new Sw()),
          D(this, un, e.mutationCache || new kw()),
          D(this, cn, e.defaultOptions || {}),
          D(this, Fr, new Map()),
          D(this, Ir, new Map()),
          D(this, dn, 0);
      }
      mount() {
        mi(this, dn)._++,
          C(this, dn) === 1 &&
            (D(
              this,
              jr,
              lm.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), C(this, ie).onFocus());
              })
            ),
            D(
              this,
              Dr,
              Fo.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), C(this, ie).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        mi(this, dn)._--,
          C(this, dn) === 0 &&
            ((e = C(this, jr)) == null || e.call(this),
            D(this, jr, void 0),
            (t = C(this, Dr)) == null || t.call(this),
            D(this, Dr, void 0));
      }
      isFetching(e) {
        return C(this, ie).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return C(this, un).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = C(this, ie).get(t.queryHash)) == null ? void 0 : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = C(this, ie).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale && n.isStaleByTime(qd(t.staleTime, n)) && this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return C(this, ie)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          s = C(this, ie).get(r.queryHash),
          i = s == null ? void 0 : s.state.data,
          o = rw(t, i);
        if (o !== void 0)
          return C(this, ie)
            .build(this, r)
            .setData(o, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return ve.batch(() =>
          C(this, ie)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = C(this, ie).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = C(this, ie);
        ve.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = C(this, ie),
          r = { type: "active", ...e };
        return ve.batch(
          () => (
            n.findAll(e).forEach((s) => {
              s.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = ve.batch(() =>
            C(this, ie)
              .findAll(e)
              .map((s) => s.cancel(n))
          );
        return Promise.all(r).then(mt).catch(mt);
      }
      invalidateQueries(e, t = {}) {
        return ve.batch(() => {
          if (
            (C(this, ie)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none")
          )
            return Promise.resolve();
          const n = {
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active",
          };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = ve.batch(() =>
            C(this, ie)
              .findAll(e)
              .filter((s) => !s.isDisabled())
              .map((s) => {
                let i = s.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(mt)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(mt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = C(this, ie).build(this, t);
        return n.isStaleByTime(qd(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(mt).catch(mt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Hd(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(mt).catch(mt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Hd(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Fo.isOnline() ? C(this, un).resumePausedMutations() : Promise.resolve();
      }
      getQueryCache() {
        return C(this, ie);
      }
      getMutationCache() {
        return C(this, un);
      }
      getDefaultOptions() {
        return C(this, cn);
      }
      setDefaultOptions(e) {
        D(this, cn, e);
      }
      setQueryDefaults(e, t) {
        C(this, Fr).set(er(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...C(this, Fr).values()],
          n = {};
        return (
          t.forEach((r) => {
            Js(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        C(this, Ir).set(er(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...C(this, Ir).values()];
        let n = {};
        return (
          t.forEach((r) => {
            Js(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...C(this, cn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = pc(t.queryKey, t)),
          t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === mc && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...C(this, cn).mutations,
              ...((e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        C(this, ie).clear(), C(this, un).clear();
      }
    }),
    (ie = new WeakMap()),
    (un = new WeakMap()),
    (cn = new WeakMap()),
    (Fr = new WeakMap()),
    (Ir = new WeakMap()),
    (dn = new WeakMap()),
    (jr = new WeakMap()),
    (Dr = new WeakMap()),
    Pf),
  fn,
  hn,
  je,
  Ut,
  Wt,
  so,
  ru,
  Tf,
  Ew =
    ((Tf = class extends ci {
      constructor(n, r) {
        super();
        B(this, Wt);
        B(this, fn);
        B(this, hn);
        B(this, je);
        B(this, Ut);
        D(this, fn, n), this.setOptions(r), this.bindMethods(), le(this, Wt, so).call(this);
      }
      bindMethods() {
        (this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this));
      }
      setOptions(n) {
        var s;
        const r = this.options;
        (this.options = C(this, fn).defaultMutationOptions(n)),
          aw(this.options, r) ||
            C(this, fn)
              .getMutationCache()
              .notify({ type: "observerOptionsUpdated", mutation: C(this, je), observer: this }),
          r != null &&
          r.mutationKey &&
          this.options.mutationKey &&
          er(r.mutationKey) !== er(this.options.mutationKey)
            ? this.reset()
            : ((s = C(this, je)) == null ? void 0 : s.state.status) === "pending" &&
              C(this, je).setOptions(this.options);
      }
      onUnsubscribe() {
        var n;
        this.hasListeners() || (n = C(this, je)) == null || n.removeObserver(this);
      }
      onMutationUpdate(n) {
        le(this, Wt, so).call(this), le(this, Wt, ru).call(this, n);
      }
      getCurrentResult() {
        return C(this, hn);
      }
      reset() {
        var n;
        (n = C(this, je)) == null || n.removeObserver(this),
          D(this, je, void 0),
          le(this, Wt, so).call(this),
          le(this, Wt, ru).call(this);
      }
      mutate(n, r) {
        var s;
        return (
          D(this, Ut, r),
          (s = C(this, je)) == null || s.removeObserver(this),
          D(this, je, C(this, fn).getMutationCache().build(C(this, fn), this.options)),
          C(this, je).addObserver(this),
          C(this, je).execute(n)
        );
      }
    }),
    (fn = new WeakMap()),
    (hn = new WeakMap()),
    (je = new WeakMap()),
    (Ut = new WeakMap()),
    (Wt = new WeakSet()),
    (so = function () {
      var r;
      const n = ((r = C(this, je)) == null ? void 0 : r.state) ?? hm();
      D(this, hn, {
        ...n,
        isPending: n.status === "pending",
        isSuccess: n.status === "success",
        isError: n.status === "error",
        isIdle: n.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (ru = function (n) {
      ve.batch(() => {
        var r, s, i, o, a, l, u, d;
        if (C(this, Ut) && this.hasListeners()) {
          const c = C(this, hn).variables,
            f = C(this, hn).context;
          (n == null ? void 0 : n.type) === "success"
            ? ((s = (r = C(this, Ut)).onSuccess) == null || s.call(r, n.data, c, f),
              (o = (i = C(this, Ut)).onSettled) == null || o.call(i, n.data, null, c, f))
            : (n == null ? void 0 : n.type) === "error" &&
              ((l = (a = C(this, Ut)).onError) == null || l.call(a, n.error, c, f),
              (d = (u = C(this, Ut)).onSettled) == null || d.call(u, void 0, n.error, c, f));
        }
        this.listeners.forEach((c) => {
          c(C(this, hn));
        });
      });
    }),
    Tf),
  pm = b.createContext(void 0),
  Rw = (e) => {
    const t = b.useContext(pm);
    if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  Pw = ({ client: e, children: t }) => (
    b.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    _.jsx(pm.Provider, { value: e, children: t })
  );
function Tw(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function Ow() {}
function Lw(e, t) {
  const n = Rw(),
    [r] = b.useState(() => new Ew(n, e));
  b.useEffect(() => {
    r.setOptions(e);
  }, [r, e]);
  const s = b.useSyncExternalStore(
      b.useCallback((o) => r.subscribe(ve.batchCalls(o)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult()
    ),
    i = b.useCallback(
      (o, a) => {
        r.mutate(o, a).catch(Ow);
      },
      [r]
    );
  if (s.error && Tw(r.options.throwOnError, [s.error])) throw s.error;
  return { ...s, mutate: i, mutateAsync: s.mutate };
}
var At = [],
  rt = [],
  Mw = Uint8Array,
  Xa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var ar = 0, Nw = Xa.length; ar < Nw; ++ar) (At[ar] = Xa[ar]), (rt[Xa.charCodeAt(ar)] = ar);
rt[45] = 62;
rt[95] = 63;
function Aw(e) {
  var t = e.length;
  if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var r = n === t ? 0 : 4 - (n % 4);
  return [n, r];
}
function bw(e, t, n) {
  return ((t + n) * 3) / 4 - n;
}
function Xs(e) {
  var t,
    n = Aw(e),
    r = n[0],
    s = n[1],
    i = new Mw(bw(e, r, s)),
    o = 0,
    a = s > 0 ? r - 4 : r,
    l;
  for (l = 0; l < a; l += 4)
    (t =
      (rt[e.charCodeAt(l)] << 18) |
      (rt[e.charCodeAt(l + 1)] << 12) |
      (rt[e.charCodeAt(l + 2)] << 6) |
      rt[e.charCodeAt(l + 3)]),
      (i[o++] = (t >> 16) & 255),
      (i[o++] = (t >> 8) & 255),
      (i[o++] = t & 255);
  return (
    s === 2 &&
      ((t = (rt[e.charCodeAt(l)] << 2) | (rt[e.charCodeAt(l + 1)] >> 4)), (i[o++] = t & 255)),
    s === 1 &&
      ((t =
        (rt[e.charCodeAt(l)] << 10) |
        (rt[e.charCodeAt(l + 1)] << 4) |
        (rt[e.charCodeAt(l + 2)] >> 2)),
      (i[o++] = (t >> 8) & 255),
      (i[o++] = t & 255)),
    i
  );
}
function Fw(e) {
  return At[(e >> 18) & 63] + At[(e >> 12) & 63] + At[(e >> 6) & 63] + At[e & 63];
}
function Iw(e, t, n) {
  for (var r, s = [], i = t; i < n; i += 3)
    (r = ((e[i] << 16) & 16711680) + ((e[i + 1] << 8) & 65280) + (e[i + 2] & 255)), s.push(Fw(r));
  return s.join("");
}
function Ys(e) {
  for (var t, n = e.length, r = n % 3, s = [], i = 16383, o = 0, a = n - r; o < a; o += i)
    s.push(Iw(e, o, o + i > a ? a : o + i));
  return (
    r === 1
      ? ((t = e[n - 1]), s.push(At[t >> 2] + At[(t << 4) & 63] + "=="))
      : r === 2 &&
        ((t = (e[n - 2] << 8) + e[n - 1]),
        s.push(At[t >> 10] + At[(t >> 4) & 63] + At[(t << 2) & 63] + "=")),
    s.join("")
  );
}
function zt(e) {
  if (e === void 0) return {};
  if (!mm(e))
    throw new Error(`The arguments to a Convex function must be an object. Received: ${e}`);
  return e;
}
function jw(e) {
  if (typeof e > "u")
    throw new Error(
      "Client created with undefined deployment address. If you used an environment variable, check that it's set."
    );
  if (typeof e != "string") throw new Error(`Invalid deployment address: found ${e}".`);
  if (!(e.startsWith("http:") || e.startsWith("https:")))
    throw new Error(
      `Invalid deployment address: Must start with "https://" or "http://". Found "${e}".`
    );
  try {
    new URL(e);
  } catch {
    throw new Error(
      `Invalid deployment address: "${e}" is not a valid URL. If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`
    );
  }
  if (e.endsWith(".convex.site"))
    throw new Error(
      `Invalid deployment address: "${e}" ends with .convex.site, which is used for HTTP Actions. Convex deployment URLs typically end with .convex.cloud? If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`
    );
}
function mm(e) {
  var s;
  const t = typeof e == "object",
    n = Object.getPrototypeOf(e),
    r =
      n === null ||
      n === Object.prototype ||
      ((s = n == null ? void 0 : n.constructor) == null ? void 0 : s.name) === "Object";
  return t && r;
}
const ym = !0,
  Gr = BigInt("-9223372036854775808"),
  yc = BigInt("9223372036854775807"),
  su = BigInt("0"),
  Dw = BigInt("8"),
  $w = BigInt("256");
function gm(e) {
  return Number.isNaN(e) || !Number.isFinite(e) || Object.is(e, -0);
}
function zw(e) {
  e < su && (e -= Gr + Gr);
  let t = e.toString(16);
  t.length % 2 === 1 && (t = "0" + t);
  const n = new Uint8Array(new ArrayBuffer(8));
  let r = 0;
  for (const s of t.match(/.{2}/g).reverse()) n.set([parseInt(s, 16)], r++), (e >>= Dw);
  return Ys(n);
}
function qw(e) {
  const t = Xs(e);
  if (t.byteLength !== 8)
    throw new Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);
  let n = su,
    r = su;
  for (const s of t) (n += BigInt(s) * $w ** r), r++;
  return n > yc && (n += Gr + Gr), n;
}
function Uw(e) {
  if (e < Gr || yc < e) throw new Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);
  const t = new ArrayBuffer(8);
  return new DataView(t).setBigInt64(0, e, !0), Ys(new Uint8Array(t));
}
function Bw(e) {
  const t = Xs(e);
  if (t.byteLength !== 8)
    throw new Error(`Received ${t.byteLength} bytes, expected 8 for $integer`);
  return new DataView(t.buffer).getBigInt64(0, !0);
}
const Vw = DataView.prototype.setBigInt64 ? Uw : zw,
  Qw = DataView.prototype.getBigInt64 ? Bw : qw,
  Kd = 1024;
function vm(e) {
  if (e.length > Kd) throw new Error(`Field name ${e} exceeds maximum field name length ${Kd}.`);
  if (e.startsWith("$")) throw new Error(`Field name ${e} starts with a '$', which is reserved.`);
  for (let t = 0; t < e.length; t += 1) {
    const n = e.charCodeAt(t);
    if (n < 32 || n >= 127)
      throw new Error(
        `Field name ${e} has invalid character '${e[t]}': Field names can only contain non-control ASCII characters`
      );
  }
}
function Jr(e) {
  if (e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string") return e;
  if (Array.isArray(e)) return e.map((r) => Jr(r));
  if (typeof e != "object") throw new Error(`Unexpected type of ${e}`);
  const t = Object.entries(e);
  if (t.length === 1) {
    const r = t[0][0];
    if (r === "$bytes") {
      if (typeof e.$bytes != "string") throw new Error(`Malformed $bytes field on ${e}`);
      return Xs(e.$bytes).buffer;
    }
    if (r === "$integer") {
      if (typeof e.$integer != "string") throw new Error(`Malformed $integer field on ${e}`);
      return Qw(e.$integer);
    }
    if (r === "$float") {
      if (typeof e.$float != "string") throw new Error(`Malformed $float field on ${e}`);
      const s = Xs(e.$float);
      if (s.byteLength !== 8)
        throw new Error(`Received ${s.byteLength} bytes, expected 8 for $float`);
      const o = new DataView(s.buffer).getFloat64(0, ym);
      if (!gm(o)) throw new Error(`Float ${o} should be encoded as a number`);
      return o;
    }
    if (r === "$set")
      throw new Error("Received a Set which is no longer supported as a Convex type.");
    if (r === "$map")
      throw new Error("Received a Map which is no longer supported as a Convex type.");
  }
  const n = {};
  for (const [r, s] of Object.entries(e)) vm(r), (n[r] = Jr(s));
  return n;
}
function Ls(e) {
  return JSON.stringify(e, (t, n) =>
    n === void 0 ? "undefined" : typeof n == "bigint" ? `${n.toString()}n` : n
  );
}
function iu(e, t, n, r) {
  var o;
  if (e === void 0) {
    const a = n && ` (present at path ${n} in original object ${Ls(t)})`;
    throw new Error(
      `undefined is not a valid Convex value${a}. To learn about Convex's supported types, see https://docs.convex.dev/using/types.`
    );
  }
  if (e === null) return e;
  if (typeof e == "bigint") {
    if (e < Gr || yc < e) throw new Error(`BigInt ${e} does not fit into a 64-bit signed integer.`);
    return { $integer: Vw(e) };
  }
  if (typeof e == "number")
    if (gm(e)) {
      const a = new ArrayBuffer(8);
      return new DataView(a).setFloat64(0, e, ym), { $float: Ys(new Uint8Array(a)) };
    } else return e;
  if (typeof e == "boolean" || typeof e == "string") return e;
  if (e instanceof ArrayBuffer) return { $bytes: Ys(new Uint8Array(e)) };
  if (Array.isArray(e)) return e.map((a, l) => iu(a, t, n + `[${l}]`));
  if (e instanceof Set) throw new Error(Ya(n, "Set", [...e], t));
  if (e instanceof Map) throw new Error(Ya(n, "Map", [...e], t));
  if (!mm(e)) {
    const a = (o = e == null ? void 0 : e.constructor) == null ? void 0 : o.name,
      l = a ? `${a} ` : "";
    throw new Error(Ya(n, l, e, t));
  }
  const s = {},
    i = Object.entries(e);
  i.sort(([a, l], [u, d]) => (a === u ? 0 : a < u ? -1 : 1));
  for (const [a, l] of i) l !== void 0 && (vm(a), (s[a] = iu(l, t, n + `.${a}`)));
  return s;
}
function Ya(e, t, n, r) {
  return e
    ? `${t}${Ls(n)} is not a supported Convex type (present at path ${e} in original object ${Ls(r)}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`
    : `${t}${Ls(n)} is not a supported Convex type.`;
}
function Pn(e) {
  return iu(e, e, "");
}
var Hw = Object.defineProperty,
  Ww = (e, t, n) =>
    t in e ? Hw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Za = (e, t, n) => Ww(e, typeof t != "symbol" ? t + "" : t, n),
  Gd,
  Jd;
const Kw = Symbol.for("ConvexError");
class ou extends ((Jd = Error), (Gd = Kw), Jd) {
  constructor(t) {
    super(typeof t == "string" ? t : Ls(t)),
      Za(this, "name", "ConvexError"),
      Za(this, "data"),
      Za(this, Gd, !0),
      (this.data = t);
  }
}
const Xd = "1.18.2";
var Gw = Object.defineProperty,
  Jw = (e, t, n) =>
    t in e ? Gw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Yd = (e, t, n) => Jw(e, typeof t != "symbol" ? t + "" : t, n);
const Xw = "color:rgb(0, 145, 255)";
function wm(e) {
  switch (e) {
    case "query":
      return "Q";
    case "mutation":
      return "M";
    case "action":
      return "A";
    case "any":
      return "?";
  }
}
class Yw {
  constructor(t) {
    Yd(this, "_onLogLineFuncs"),
      Yd(this, "_verbose"),
      (this._onLogLineFuncs = {}),
      (this._verbose = t.verbose);
  }
  addLogLineListener(t) {
    let n = Math.random().toString(36).substring(2, 15);
    for (let r = 0; r < 10 && this._onLogLineFuncs[n] !== void 0; r++)
      n = Math.random().toString(36).substring(2, 15);
    return (
      (this._onLogLineFuncs[n] = t),
      () => {
        delete this._onLogLineFuncs[n];
      }
    );
  }
  logVerbose(...t) {
    if (this._verbose)
      for (const n of Object.values(this._onLogLineFuncs))
        n("debug", `${new Date().toISOString()}`, ...t);
  }
  log(...t) {
    for (const n of Object.values(this._onLogLineFuncs)) n("info", ...t);
  }
  warn(...t) {
    for (const n of Object.values(this._onLogLineFuncs)) n("warn", ...t);
  }
  error(...t) {
    for (const n of Object.values(this._onLogLineFuncs)) n("error", ...t);
  }
}
function Sm(e) {
  const t = new Yw(e);
  return (
    t.addLogLineListener((n, ...r) => {
      switch (n) {
        case "debug":
          console.debug(...r);
          break;
        case "info":
          console.log(...r);
          break;
        case "warn":
          console.warn(...r);
          break;
        case "error":
          console.error(...r);
          break;
        default:
          console.log(...r);
      }
    }),
    t
  );
}
function Io(e, t, n, r, s) {
  const i = wm(n);
  if (
    (typeof s == "object" && (s = `ConvexError ${JSON.stringify(s.errorData, null, 2)}`),
    t === "info")
  ) {
    const o = s.match(/^\[.*?\] /);
    if (o === null) {
      e.error(`[CONVEX ${i}(${r})] Could not parse console.log`);
      return;
    }
    const a = s.slice(1, o[0].length - 2),
      l = s.slice(o[0].length);
    e.log(`%c[CONVEX ${i}(${r})] [${a}]`, Xw, l);
  } else e.error(`[CONVEX ${i}(${r})] ${s}`);
}
function Zw(e, t) {
  const n = `[CONVEX FATAL ERROR] ${t}`;
  return e.error(n), new Error(n);
}
function xr(e, t, n) {
  return `[CONVEX ${wm(e)}(${t})] ${n.errorMessage}
  Called by client`;
}
function au(e, t) {
  return (t.data = e.errorData), t;
}
function jo(e) {
  const t = e.split(":");
  let n, r;
  return (
    t.length === 1
      ? ((n = t[0]), (r = "default"))
      : ((n = t.slice(0, t.length - 1).join(":")), (r = t[t.length - 1])),
    n.endsWith(".js") && (n = n.slice(0, -3)),
    `${n}:${r}`
  );
}
function Wn(e, t) {
  return JSON.stringify({ udfPath: jo(e), args: Pn(t) });
}
var e1 = Object.defineProperty,
  t1 = (e, t, n) =>
    t in e ? e1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Rt = (e, t, n) => t1(e, typeof t != "symbol" ? t + "" : t, n);
class n1 {
  constructor() {
    Rt(this, "nextQueryId"),
      Rt(this, "querySetVersion"),
      Rt(this, "querySet"),
      Rt(this, "queryIdToToken"),
      Rt(this, "identityVersion"),
      Rt(this, "auth"),
      Rt(this, "outstandingQueriesOlderThanRestart"),
      Rt(this, "outstandingAuthOlderThanRestart"),
      Rt(this, "paused"),
      Rt(this, "pendingQuerySetModifications"),
      (this.nextQueryId = 0),
      (this.querySetVersion = 0),
      (this.identityVersion = 0),
      (this.querySet = new Map()),
      (this.queryIdToToken = new Map()),
      (this.outstandingQueriesOlderThanRestart = new Set()),
      (this.outstandingAuthOlderThanRestart = !1),
      (this.paused = !1),
      (this.pendingQuerySetModifications = new Map());
  }
  hasSyncedPastLastReconnect() {
    return (
      this.outstandingQueriesOlderThanRestart.size === 0 && !this.outstandingAuthOlderThanRestart
    );
  }
  markAuthCompletion() {
    this.outstandingAuthOlderThanRestart = !1;
  }
  subscribe(t, n, r, s) {
    const i = jo(t),
      o = Wn(i, n),
      a = this.querySet.get(o);
    if (a !== void 0)
      return (
        (a.numSubscribers += 1),
        { queryToken: o, modification: null, unsubscribe: () => this.removeSubscriber(o) }
      );
    {
      const l = this.nextQueryId++,
        u = {
          id: l,
          canonicalizedUdfPath: i,
          args: n,
          numSubscribers: 1,
          journal: r,
          componentPath: s,
        };
      this.querySet.set(o, u), this.queryIdToToken.set(l, o);
      const d = this.querySetVersion,
        c = this.querySetVersion + 1,
        f = { type: "Add", queryId: l, udfPath: i, args: [Pn(n)], journal: r, componentPath: s };
      return (
        this.paused ? this.pendingQuerySetModifications.set(l, f) : (this.querySetVersion = c),
        {
          queryToken: o,
          modification: {
            type: "ModifyQuerySet",
            baseVersion: d,
            newVersion: c,
            modifications: [f],
          },
          unsubscribe: () => this.removeSubscriber(o),
        }
      );
    }
  }
  transition(t) {
    for (const n of t.modifications)
      switch (n.type) {
        case "QueryUpdated":
        case "QueryFailed": {
          this.outstandingQueriesOlderThanRestart.delete(n.queryId);
          const r = n.journal;
          if (r !== void 0) {
            const s = this.queryIdToToken.get(n.queryId);
            s !== void 0 && (this.querySet.get(s).journal = r);
          }
          break;
        }
        case "QueryRemoved": {
          this.outstandingQueriesOlderThanRestart.delete(n.queryId);
          break;
        }
        default:
          throw new Error(`Invalid modification ${n.type}`);
      }
  }
  queryId(t, n) {
    const r = jo(t),
      s = Wn(r, n),
      i = this.querySet.get(s);
    return i !== void 0 ? i.id : null;
  }
  isCurrentOrNewerAuthVersion(t) {
    return t >= this.identityVersion;
  }
  setAuth(t) {
    this.auth = { tokenType: "User", value: t };
    const n = this.identityVersion;
    return (
      this.paused || (this.identityVersion = n + 1),
      { type: "Authenticate", baseVersion: n, ...this.auth }
    );
  }
  setAdminAuth(t, n) {
    const r = { tokenType: "Admin", value: t, impersonating: n };
    this.auth = r;
    const s = this.identityVersion;
    return (
      this.paused || (this.identityVersion = s + 1), { type: "Authenticate", baseVersion: s, ...r }
    );
  }
  clearAuth() {
    (this.auth = void 0), this.markAuthCompletion();
    const t = this.identityVersion;
    return (
      this.paused || (this.identityVersion = t + 1),
      { type: "Authenticate", tokenType: "None", baseVersion: t }
    );
  }
  hasAuth() {
    return !!this.auth;
  }
  isNewAuth(t) {
    var n;
    return ((n = this.auth) == null ? void 0 : n.value) !== t;
  }
  queryPath(t) {
    const n = this.queryIdToToken.get(t);
    return n ? this.querySet.get(n).canonicalizedUdfPath : null;
  }
  queryArgs(t) {
    const n = this.queryIdToToken.get(t);
    return n ? this.querySet.get(n).args : null;
  }
  queryToken(t) {
    return this.queryIdToToken.get(t) ?? null;
  }
  queryJournal(t) {
    var n;
    return (n = this.querySet.get(t)) == null ? void 0 : n.journal;
  }
  restart(t) {
    this.unpause(), this.outstandingQueriesOlderThanRestart.clear();
    const n = [];
    for (const i of this.querySet.values()) {
      const o = {
        type: "Add",
        queryId: i.id,
        udfPath: i.canonicalizedUdfPath,
        args: [Pn(i.args)],
        journal: i.journal,
        componentPath: i.componentPath,
      };
      n.push(o), t.has(i.id) || this.outstandingQueriesOlderThanRestart.add(i.id);
    }
    this.querySetVersion = 1;
    const r = { type: "ModifyQuerySet", baseVersion: 0, newVersion: 1, modifications: n };
    if (!this.auth) return (this.identityVersion = 0), [r, void 0];
    this.outstandingAuthOlderThanRestart = !0;
    const s = { type: "Authenticate", baseVersion: 0, ...this.auth };
    return (this.identityVersion = 1), [r, s];
  }
  pause() {
    this.paused = !0;
  }
  resume() {
    const t =
        this.pendingQuerySetModifications.size > 0
          ? {
              type: "ModifyQuerySet",
              baseVersion: this.querySetVersion,
              newVersion: ++this.querySetVersion,
              modifications: Array.from(this.pendingQuerySetModifications.values()),
            }
          : void 0,
      n =
        this.auth !== void 0
          ? { type: "Authenticate", baseVersion: this.identityVersion++, ...this.auth }
          : void 0;
    return this.unpause(), [t, n];
  }
  unpause() {
    (this.paused = !1), this.pendingQuerySetModifications.clear();
  }
  removeSubscriber(t) {
    const n = this.querySet.get(t);
    if (n.numSubscribers > 1) return (n.numSubscribers -= 1), null;
    {
      this.querySet.delete(t),
        this.queryIdToToken.delete(n.id),
        this.outstandingQueriesOlderThanRestart.delete(n.id);
      const r = this.querySetVersion,
        s = this.querySetVersion + 1,
        i = { type: "Remove", queryId: n.id };
      return (
        this.paused
          ? this.pendingQuerySetModifications.has(n.id)
            ? this.pendingQuerySetModifications.delete(n.id)
            : this.pendingQuerySetModifications.set(n.id, i)
          : (this.querySetVersion = s),
        { type: "ModifyQuerySet", baseVersion: r, newVersion: s, modifications: [i] }
      );
    }
  }
}
var r1 = Object.defineProperty,
  s1 = (e, t, n) =>
    t in e ? r1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Zd = (e, t, n) => s1(e, typeof t != "symbol" ? t + "" : t, n);
class i1 {
  constructor(t) {
    (this.logger = t),
      Zd(this, "inflightRequests"),
      Zd(this, "requestsOlderThanRestart"),
      (this.inflightRequests = new Map()),
      (this.requestsOlderThanRestart = new Set());
  }
  request(t, n) {
    return new Promise((s) => {
      const i = n ? "Requested" : "NotSent";
      this.inflightRequests.set(t.requestId, {
        message: t,
        status: { status: i, requestedAt: new Date(), onResult: s },
      });
    });
  }
  onResponse(t) {
    const n = this.inflightRequests.get(t.requestId);
    if (n === void 0 || n.status.status === "Completed") return null;
    const r = n.message.type === "Mutation" ? "mutation" : "action",
      s = n.message.udfPath;
    for (const l of t.logLines) Io(this.logger, "info", r, s, l);
    const i = n.status;
    let o, a;
    if (t.success)
      (o = { success: !0, logLines: t.logLines, value: Jr(t.result) }), (a = () => i.onResult(o));
    else {
      const l = t.result,
        { errorData: u } = t;
      Io(this.logger, "error", r, s, l),
        (o = {
          success: !1,
          errorMessage: l,
          errorData: u !== void 0 ? Jr(u) : void 0,
          logLines: t.logLines,
        }),
        (a = () => i.onResult(o));
    }
    return t.type === "ActionResponse" || !t.success
      ? (a(),
        this.inflightRequests.delete(t.requestId),
        this.requestsOlderThanRestart.delete(t.requestId),
        { requestId: t.requestId, result: o })
      : ((n.status = { status: "Completed", result: o, ts: t.ts, onResolve: a }), null);
  }
  removeCompleted(t) {
    const n = new Map();
    for (const [r, s] of this.inflightRequests.entries()) {
      const i = s.status;
      i.status === "Completed" &&
        i.ts.lessThanOrEqual(t) &&
        (i.onResolve(),
        n.set(r, i.result),
        this.inflightRequests.delete(r),
        this.requestsOlderThanRestart.delete(r));
    }
    return n;
  }
  restart() {
    this.requestsOlderThanRestart = new Set(this.inflightRequests.keys());
    const t = [];
    for (const [n, r] of this.inflightRequests) {
      if (r.status.status === "NotSent") {
        (r.status.status = "Requested"), t.push(r.message);
        continue;
      }
      if (r.message.type === "Mutation") t.push(r.message);
      else {
        if (
          (this.inflightRequests.delete(n),
          this.requestsOlderThanRestart.delete(n),
          r.status.status === "Completed")
        )
          throw new Error("Action should never be in 'Completed' state");
        r.status.onResult({
          success: !1,
          errorMessage: "Connection lost while action was in flight",
          logLines: [],
        });
      }
    }
    return t;
  }
  resume() {
    const t = [];
    for (const [, n] of this.inflightRequests)
      if (n.status.status === "NotSent") {
        (n.status.status = "Requested"), t.push(n.message);
        continue;
      }
    return t;
  }
  hasIncompleteRequests() {
    for (const t of this.inflightRequests.values()) if (t.status.status === "Requested") return !0;
    return !1;
  }
  hasInflightRequests() {
    return this.inflightRequests.size > 0;
  }
  hasSyncedPastLastReconnect() {
    return this.requestsOlderThanRestart.size === 0;
  }
  timeOfOldestInflightRequest() {
    if (this.inflightRequests.size === 0) return null;
    let t = Date.now();
    for (const n of this.inflightRequests.values())
      n.status.status !== "Completed" &&
        n.status.requestedAt.getTime() < t &&
        (t = n.status.requestedAt.getTime());
    return new Date(t);
  }
}
const Zs = Symbol.for("functionName"),
  o1 = Symbol.for("toReferencePath");
function a1(e) {
  return e[o1] ?? null;
}
function l1(e) {
  return e.startsWith("function://");
}
function u1(e) {
  let t;
  if (typeof e == "string") l1(e) ? (t = { functionHandle: e }) : (t = { name: e });
  else if (e[Zs]) t = { name: e[Zs] };
  else {
    const n = a1(e);
    if (!n) throw new Error(`${e} is not a functionReference`);
    t = { reference: n };
  }
  return t;
}
function Je(e) {
  const t = u1(e);
  if (t.name === void 0)
    throw t.functionHandle !== void 0
      ? new Error(
          `Expected function reference like "api.file.func" or "internal.file.func", but received function handle ${t.functionHandle}`
        )
      : t.reference !== void 0
        ? new Error(
            `Expected function reference in the current component like "api.file.func" or "internal.file.func", but received reference ${t.reference}`
          )
        : new Error(
            `Expected function reference like "api.file.func" or "internal.file.func", but received ${JSON.stringify(t)}`
          );
  if (typeof e == "string") return e;
  const n = e[Zs];
  if (!n) throw new Error(`${e} is not a functionReference`);
  return n;
}
function xm(e) {
  return { [Zs]: e };
}
function km(e = []) {
  const t = {
    get(n, r) {
      if (typeof r == "string") {
        const s = [...e, r];
        return km(s);
      } else if (r === Zs) {
        if (e.length < 2) {
          const o = ["api", ...e].join(".");
          throw new Error(
            `API path is expected to be of the form \`api.moduleName.functionName\`. Found: \`${o}\``
          );
        }
        const s = e.slice(0, -1).join("/"),
          i = e[e.length - 1];
        return i === "default" ? s : s + ":" + i;
      } else return r === Symbol.toStringTag ? "FunctionReference" : void 0;
    },
  };
  return new Proxy({}, t);
}
const c1 = km();
var d1 = Object.defineProperty,
  f1 = (e, t, n) =>
    t in e ? d1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Do = (e, t, n) => f1(e, typeof t != "symbol" ? t + "" : t, n);
class ei {
  constructor(t) {
    Do(this, "queryResults"),
      Do(this, "modifiedQueries"),
      (this.queryResults = t),
      (this.modifiedQueries = []);
  }
  getQuery(t, ...n) {
    const r = zt(n[0]),
      s = Je(t),
      i = this.queryResults.get(Wn(s, r));
    if (i !== void 0) return ei.queryValue(i.result);
  }
  getAllQueries(t) {
    const n = [],
      r = Je(t);
    for (const s of this.queryResults.values())
      s.udfPath === jo(r) && n.push({ args: s.args, value: ei.queryValue(s.result) });
    return n;
  }
  setQuery(t, n, r) {
    const s = zt(n),
      i = Je(t),
      o = Wn(i, s);
    let a;
    r === void 0 ? (a = void 0) : (a = { success: !0, value: r, logLines: [] });
    const l = { udfPath: i, args: s, result: a };
    this.queryResults.set(o, l), this.modifiedQueries.push(o);
  }
  static queryValue(t) {
    if (t !== void 0) return t.success ? t.value : void 0;
  }
}
class h1 {
  constructor() {
    Do(this, "queryResults"),
      Do(this, "optimisticUpdates"),
      (this.queryResults = new Map()),
      (this.optimisticUpdates = []);
  }
  ingestQueryResultsFromServer(t, n) {
    this.optimisticUpdates = this.optimisticUpdates.filter((o) => !n.has(o.mutationId));
    const r = this.queryResults;
    this.queryResults = new Map(t);
    const s = new ei(this.queryResults);
    for (const o of this.optimisticUpdates) o.update(s);
    const i = [];
    for (const [o, a] of this.queryResults) {
      const l = r.get(o);
      (l === void 0 || l.result !== a.result) && i.push(o);
    }
    return i;
  }
  applyOptimisticUpdate(t, n) {
    this.optimisticUpdates.push({ update: t, mutationId: n });
    const r = new ei(this.queryResults);
    return t(r), r.modifiedQueries;
  }
  queryResult(t) {
    const n = this.queryResults.get(t);
    if (n === void 0) return;
    const r = n.result;
    if (r !== void 0) {
      if (r.success) return r.value;
      throw r.errorData !== void 0
        ? au(r, new ou(xr("query", n.udfPath, r)))
        : new Error(xr("query", n.udfPath, r));
    }
  }
  hasQueryResult(t) {
    return this.queryResults.get(t) !== void 0;
  }
  queryLogs(t) {
    var r;
    const n = this.queryResults.get(t);
    return (r = n == null ? void 0 : n.result) == null ? void 0 : r.logLines;
  }
}
var p1 = Object.defineProperty,
  m1 = (e, t, n) =>
    t in e ? p1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  el = (e, t, n) => m1(e, typeof t != "symbol" ? t + "" : t, n);
class He {
  constructor(t, n) {
    el(this, "low"),
      el(this, "high"),
      el(this, "__isUnsignedLong__"),
      (this.low = t | 0),
      (this.high = n | 0),
      (this.__isUnsignedLong__ = !0);
  }
  static isLong(t) {
    return (t && t.__isUnsignedLong__) === !0;
  }
  static fromBytesLE(t) {
    return new He(
      t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
      t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24)
    );
  }
  toBytesLE() {
    const t = this.high,
      n = this.low;
    return [
      n & 255,
      (n >>> 8) & 255,
      (n >>> 16) & 255,
      n >>> 24,
      t & 255,
      (t >>> 8) & 255,
      (t >>> 16) & 255,
      t >>> 24,
    ];
  }
  static fromNumber(t) {
    return isNaN(t) || t < 0 ? ef : t >= y1 ? g1 : new He(t % Ms | 0, (t / Ms) | 0);
  }
  toString() {
    return (BigInt(this.high) * BigInt(Ms) + BigInt(this.low)).toString();
  }
  equals(t) {
    return (
      He.isLong(t) || (t = He.fromValue(t)),
      this.high >>> 31 === 1 && t.high >>> 31 === 1
        ? !1
        : this.high === t.high && this.low === t.low
    );
  }
  notEquals(t) {
    return !this.equals(t);
  }
  comp(t) {
    return (
      He.isLong(t) || (t = He.fromValue(t)),
      this.equals(t)
        ? 0
        : t.high >>> 0 > this.high >>> 0 || (t.high === this.high && t.low >>> 0 > this.low >>> 0)
          ? -1
          : 1
    );
  }
  lessThanOrEqual(t) {
    return this.comp(t) <= 0;
  }
  static fromValue(t) {
    return typeof t == "number" ? He.fromNumber(t) : new He(t.low, t.high);
  }
}
const ef = new He(0, 0),
  tf = 65536,
  Ms = tf * tf,
  y1 = Ms * Ms,
  g1 = new He(-1, -1);
var v1 = Object.defineProperty,
  w1 = (e, t, n) =>
    t in e ? v1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Ui = (e, t, n) => w1(e, typeof t != "symbol" ? t + "" : t, n);
class nf {
  constructor(t, n) {
    Ui(this, "version"),
      Ui(this, "remoteQuerySet"),
      Ui(this, "queryPath"),
      Ui(this, "logger"),
      (this.version = { querySet: 0, ts: He.fromNumber(0), identity: 0 }),
      (this.remoteQuerySet = new Map()),
      (this.queryPath = t),
      (this.logger = n);
  }
  transition(t) {
    const n = t.startVersion;
    if (
      this.version.querySet !== n.querySet ||
      this.version.ts.notEquals(n.ts) ||
      this.version.identity !== n.identity
    )
      throw new Error(`Invalid start version: ${n.ts.toString()}:${n.querySet}`);
    for (const r of t.modifications)
      switch (r.type) {
        case "QueryUpdated": {
          const s = this.queryPath(r.queryId);
          if (s) for (const o of r.logLines) Io(this.logger, "info", "query", s, o);
          const i = Jr(r.value ?? null);
          this.remoteQuerySet.set(r.queryId, { success: !0, value: i, logLines: r.logLines });
          break;
        }
        case "QueryFailed": {
          const s = this.queryPath(r.queryId);
          if (s) for (const o of r.logLines) Io(this.logger, "info", "query", s, o);
          const { errorData: i } = r;
          this.remoteQuerySet.set(r.queryId, {
            success: !1,
            errorMessage: r.errorMessage,
            errorData: i !== void 0 ? Jr(i) : void 0,
            logLines: r.logLines,
          });
          break;
        }
        case "QueryRemoved": {
          this.remoteQuerySet.delete(r.queryId);
          break;
        }
        default:
          throw new Error(`Invalid modification ${r.type}`);
      }
    this.version = t.endVersion;
  }
  remoteQueryResults() {
    return this.remoteQuerySet;
  }
  timestamp() {
    return this.version.ts;
  }
}
function tl(e) {
  const t = Xs(e);
  return He.fromBytesLE(Array.from(t));
}
function S1(e) {
  const t = new Uint8Array(e.toBytesLE());
  return Ys(t);
}
function x1(e) {
  switch (e.type) {
    case "FatalError":
    case "AuthError":
    case "ActionResponse":
    case "Ping":
      return { ...e };
    case "MutationResponse":
      return e.success ? { ...e, ts: tl(e.ts) } : { ...e };
    case "Transition":
      return {
        ...e,
        startVersion: { ...e.startVersion, ts: tl(e.startVersion.ts) },
        endVersion: { ...e.endVersion, ts: tl(e.endVersion.ts) },
      };
  }
}
function k1(e) {
  switch (e.type) {
    case "Authenticate":
    case "ModifyQuerySet":
    case "Mutation":
    case "Action":
    case "Event":
      return { ...e };
    case "Connect":
      return e.maxObservedTimestamp !== void 0
        ? { ...e, maxObservedTimestamp: S1(e.maxObservedTimestamp) }
        : { ...e, maxObservedTimestamp: void 0 };
  }
}
var _1 = Object.defineProperty,
  C1 = (e, t, n) =>
    t in e ? _1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Ie = (e, t, n) => C1(e, typeof t != "symbol" ? t + "" : t, n);
const E1 = 1e3,
  R1 = 1001,
  P1 = 1005,
  T1 = 4040;
class O1 {
  constructor(t, n, r, s) {
    Ie(this, "socket"),
      Ie(this, "connectionCount"),
      Ie(this, "lastCloseReason"),
      Ie(this, "initialBackoff"),
      Ie(this, "maxBackoff"),
      Ie(this, "retries"),
      Ie(this, "serverInactivityThreshold"),
      Ie(this, "reconnectDueToServerInactivityTimeout"),
      Ie(this, "uri"),
      Ie(this, "onOpen"),
      Ie(this, "onResume"),
      Ie(this, "onMessage"),
      Ie(this, "webSocketConstructor"),
      Ie(this, "logger"),
      (this.webSocketConstructor = r),
      (this.socket = { state: "disconnected" }),
      (this.connectionCount = 0),
      (this.lastCloseReason = "InitialConnect"),
      (this.initialBackoff = 100),
      (this.maxBackoff = 16e3),
      (this.retries = 0),
      (this.serverInactivityThreshold = 3e4),
      (this.reconnectDueToServerInactivityTimeout = null),
      (this.uri = t),
      (this.onOpen = n.onOpen),
      (this.onResume = n.onResume),
      (this.onMessage = n.onMessage),
      (this.logger = s),
      this.connect();
  }
  connect() {
    if (this.socket.state === "terminated") return;
    if (this.socket.state !== "disconnected" && this.socket.state !== "stopped")
      throw new Error("Didn't start connection from disconnected state: " + this.socket.state);
    const t = new this.webSocketConstructor(this.uri);
    this._logVerbose("constructed WebSocket"),
      (this.socket = { state: "connecting", ws: t, paused: "no" }),
      this.resetServerInactivityTimeout(),
      (t.onopen = () => {
        if ((this.logger.logVerbose("begin ws.onopen"), this.socket.state !== "connecting"))
          throw new Error("onopen called with socket not in connecting state");
        (this.socket = {
          state: "ready",
          ws: t,
          paused: this.socket.paused === "yes" ? "uninitialized" : "no",
        }),
          this.resetServerInactivityTimeout(),
          this.socket.paused === "no" &&
            this.onOpen({
              connectionCount: this.connectionCount,
              lastCloseReason: this.lastCloseReason,
            }),
          this.lastCloseReason !== "InitialConnect" && this.logger.log("WebSocket reconnected"),
          (this.connectionCount += 1),
          (this.lastCloseReason = null);
      }),
      (t.onerror = (n) => {
        const r = n.message;
        this.logger.log(`WebSocket error: ${r}`);
      }),
      (t.onmessage = (n) => {
        this.resetServerInactivityTimeout();
        const r = x1(JSON.parse(n.data));
        this._logVerbose(`received ws message with type ${r.type}`),
          this.onMessage(r).hasSyncedPastLastReconnect && (this.retries = 0);
      }),
      (t.onclose = (n) => {
        if (
          (this._logVerbose("begin ws.onclose"),
          this.lastCloseReason === null && (this.lastCloseReason = n.reason ?? "OnCloseInvoked"),
          n.code !== E1 && n.code !== R1 && n.code !== P1 && n.code !== T1)
        ) {
          let r = `WebSocket closed with code ${n.code}`;
          n.reason && (r += `: ${n.reason}`), this.logger.log(r);
        }
        this.scheduleReconnect();
      });
  }
  socketState() {
    return this.socket.state;
  }
  sendMessage(t) {
    if (
      (this._logVerbose(`sending message with type ${t.type}`),
      this.socket.state === "ready" && this.socket.paused === "no")
    ) {
      const n = k1(t),
        r = JSON.stringify(n);
      try {
        this.socket.ws.send(r);
      } catch (s) {
        this.logger.log(`Failed to send message on WebSocket, reconnecting: ${s}`),
          this.closeAndReconnect("FailedToSendMessage");
      }
      return !0;
    }
    return !1;
  }
  resetServerInactivityTimeout() {
    this.socket.state !== "terminated" &&
      (this.reconnectDueToServerInactivityTimeout !== null &&
        (clearTimeout(this.reconnectDueToServerInactivityTimeout),
        (this.reconnectDueToServerInactivityTimeout = null)),
      (this.reconnectDueToServerInactivityTimeout = setTimeout(() => {
        this.closeAndReconnect("InactiveServer");
      }, this.serverInactivityThreshold)));
  }
  scheduleReconnect() {
    this.socket = { state: "disconnected" };
    const t = this.nextBackoff();
    this.logger.log(`Attempting reconnect in ${t}ms`), setTimeout(() => this.connect(), t);
  }
  closeAndReconnect(t) {
    switch ((this._logVerbose(`begin closeAndReconnect with reason ${t}`), this.socket.state)) {
      case "disconnected":
      case "terminated":
      case "stopped":
        return;
      case "connecting":
      case "ready": {
        (this.lastCloseReason = t), this.close(), this.scheduleReconnect();
        return;
      }
      default:
        this.socket;
    }
  }
  close() {
    switch (this.socket.state) {
      case "disconnected":
      case "terminated":
      case "stopped":
        return Promise.resolve();
      case "connecting": {
        const t = this.socket.ws;
        return new Promise((n) => {
          (t.onclose = () => {
            this._logVerbose("Closed after connecting"), n();
          }),
            (t.onopen = () => {
              this._logVerbose("Opened after connecting"), t.close();
            });
        });
      }
      case "ready": {
        this._logVerbose("ws.close called");
        const t = this.socket.ws,
          n = new Promise((r) => {
            t.onclose = () => {
              r();
            };
          });
        return t.close(), n;
      }
      default:
        return this.socket, Promise.resolve();
    }
  }
  terminate() {
    switch (
      (this.reconnectDueToServerInactivityTimeout &&
        clearTimeout(this.reconnectDueToServerInactivityTimeout),
      this.socket.state)
    ) {
      case "terminated":
      case "stopped":
      case "disconnected":
      case "connecting":
      case "ready": {
        const t = this.close();
        return (this.socket = { state: "terminated" }), t;
      }
      default:
        throw (this.socket, new Error(`Invalid websocket state: ${this.socket.state}`));
    }
  }
  stop() {
    switch (this.socket.state) {
      case "terminated":
        return Promise.resolve();
      case "connecting":
      case "stopped":
      case "disconnected":
      case "ready": {
        const t = this.close();
        return (this.socket = { state: "stopped" }), t;
      }
      default:
        return this.socket, Promise.resolve();
    }
  }
  restart() {
    switch (this.socket.state) {
      case "stopped":
        break;
      case "terminated":
        return;
      case "connecting":
      case "ready":
      case "disconnected":
        throw new Error("`restart()` is only valid after `stop()`");
      default:
        this.socket;
    }
    this.connect();
  }
  pause() {
    switch (this.socket.state) {
      case "disconnected":
      case "stopped":
      case "terminated":
        return;
      case "connecting":
      case "ready": {
        this.socket = { ...this.socket, paused: "yes" };
        return;
      }
      default: {
        this.socket;
        return;
      }
    }
  }
  resume() {
    switch (this.socket.state) {
      case "connecting":
        this.socket = { ...this.socket, paused: "no" };
        return;
      case "ready":
        this.socket.paused === "uninitialized"
          ? ((this.socket = { ...this.socket, paused: "no" }),
            this.onOpen({
              connectionCount: this.connectionCount,
              lastCloseReason: this.lastCloseReason,
            }))
          : this.socket.paused === "yes" &&
            ((this.socket = { ...this.socket, paused: "no" }), this.onResume());
        return;
      case "terminated":
      case "stopped":
      case "disconnected":
        return;
      default:
        this.socket;
    }
    this.connect();
  }
  _logVerbose(t) {
    this.logger.logVerbose(t);
  }
  nextBackoff() {
    const t = this.initialBackoff * Math.pow(2, this.retries);
    this.retries += 1;
    const n = Math.min(t, this.maxBackoff),
      r = n * (Math.random() - 0.5);
    return n + r;
  }
}
function L1() {
  return M1();
}
function M1() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = (Math.random() * 16) | 0;
    return (e === "x" ? t : (t & 3) | 8).toString(16);
  });
}
function lu(e) {
  this.message = e;
}
(lu.prototype = new Error()), (lu.prototype.name = "InvalidCharacterError");
var rf =
  (typeof window < "u" && window.atob && window.atob.bind(window)) ||
  function (e) {
    var t = String(e).replace(/=+$/, "");
    if (t.length % 4 == 1)
      throw new lu("'atob' failed: The string to be decoded is not correctly encoded.");
    for (
      var n, r, s = 0, i = 0, o = "";
      (r = t.charAt(i++));
      ~r && ((n = s % 4 ? 64 * n + r : r), s++ % 4)
        ? (o += String.fromCharCode(255 & (n >> ((-2 * s) & 6))))
        : 0
    )
      r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
    return o;
  };
function N1(e) {
  var t = e.replace(/-/g, "+").replace(/_/g, "/");
  switch (t.length % 4) {
    case 0:
      break;
    case 2:
      t += "==";
      break;
    case 3:
      t += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }
  try {
    return (function (n) {
      return decodeURIComponent(
        rf(n).replace(/(.)/g, function (r, s) {
          var i = s.charCodeAt(0).toString(16).toUpperCase();
          return i.length < 2 && (i = "0" + i), "%" + i;
        })
      );
    })(t);
  } catch {
    return rf(t);
  }
}
function $o(e) {
  this.message = e;
}
function A1(e, t) {
  if (typeof e != "string") throw new $o("Invalid token specified");
  var n = (t = t || {}).header === !0 ? 0 : 1;
  try {
    return JSON.parse(N1(e.split(".")[n]));
  } catch (r) {
    throw new $o("Invalid token specified: " + r.message);
  }
}
($o.prototype = new Error()), ($o.prototype.name = "InvalidTokenError");
var b1 = Object.defineProperty,
  F1 = (e, t, n) =>
    t in e ? b1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  ht = (e, t, n) => F1(e, typeof t != "symbol" ? t + "" : t, n);
const I1 = 20 * 24 * 60 * 60 * 1e3;
class j1 {
  constructor(t, n, r) {
    ht(this, "authState", { state: "noAuth" }),
      ht(this, "configVersion", 0),
      ht(this, "syncState"),
      ht(this, "authenticate"),
      ht(this, "stopSocket"),
      ht(this, "restartSocket"),
      ht(this, "pauseSocket"),
      ht(this, "resumeSocket"),
      ht(this, "clearAuth"),
      ht(this, "logger"),
      ht(this, "refreshTokenLeewaySeconds"),
      (this.syncState = t),
      (this.authenticate = n.authenticate),
      (this.stopSocket = n.stopSocket),
      (this.restartSocket = n.restartSocket),
      (this.pauseSocket = n.pauseSocket),
      (this.resumeSocket = n.resumeSocket),
      (this.clearAuth = n.clearAuth),
      (this.logger = r.logger),
      (this.refreshTokenLeewaySeconds = r.refreshTokenLeewaySeconds);
  }
  async setConfig(t, n) {
    this.resetAuthState(), this._logVerbose("pausing WS for auth token fetch"), this.pauseSocket();
    const r = await this.fetchTokenAndGuardAgainstRace(t, { forceRefreshToken: !1 });
    r.isFromOutdatedConfig ||
      (r.value
        ? (this.setAuthState({
            state: "waitingForServerConfirmationOfCachedToken",
            config: { fetchToken: t, onAuthChange: n },
            hasRetried: !1,
          }),
          this.authenticate(r.value),
          this._logVerbose("resuming WS after auth token fetch"),
          this.resumeSocket())
        : (this.setAuthState({
            state: "initialRefetch",
            config: { fetchToken: t, onAuthChange: n },
          }),
          await this.refetchToken()));
  }
  onTransition(t) {
    if (
      this.syncState.isCurrentOrNewerAuthVersion(t.endVersion.identity) &&
      !(t.endVersion.identity <= t.startVersion.identity)
    ) {
      if (this.authState.state === "waitingForServerConfirmationOfCachedToken") {
        this._logVerbose("server confirmed auth token is valid"),
          this.refetchToken(),
          this.authState.config.onAuthChange(!0);
        return;
      }
      this.authState.state === "waitingForServerConfirmationOfFreshToken" &&
        (this._logVerbose("server confirmed new auth token is valid"),
        this.scheduleTokenRefetch(this.authState.token),
        this.authState.hadAuth || this.authState.config.onAuthChange(!0));
    }
  }
  onAuthError(t) {
    const { baseVersion: n } = t;
    if (n != null) {
      if (!this.syncState.isCurrentOrNewerAuthVersion(n + 1)) {
        this._logVerbose("ignoring auth error for previous auth attempt");
        return;
      }
      this.tryToReauthenticate(t);
      return;
    }
    this.tryToReauthenticate(t);
  }
  async tryToReauthenticate(t) {
    if (
      this.authState.state === "noAuth" ||
      this.authState.state === "waitingForServerConfirmationOfFreshToken"
    ) {
      this.logger.error(`Failed to authenticate: "${t.error}", check your server auth config`),
        this.syncState.hasAuth() && this.syncState.clearAuth(),
        this.authState.state !== "noAuth" &&
          this.setAndReportAuthFailed(this.authState.config.onAuthChange);
      return;
    }
    this._logVerbose("attempting to reauthenticate"), await this.stopSocket();
    const n = await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken, {
      forceRefreshToken: !0,
    });
    n.isFromOutdatedConfig ||
      (n.value && this.syncState.isNewAuth(n.value)
        ? (this.authenticate(n.value),
          this.setAuthState({
            state: "waitingForServerConfirmationOfFreshToken",
            config: this.authState.config,
            token: n.value,
            hadAuth:
              this.authState.state === "notRefetching" ||
              this.authState.state === "waitingForScheduledRefetch",
          }))
        : (this._logVerbose("reauthentication failed, could not fetch a new token"),
          this.syncState.hasAuth() && this.syncState.clearAuth(),
          this.setAndReportAuthFailed(this.authState.config.onAuthChange)),
      this.restartSocket());
  }
  async refetchToken() {
    if (this.authState.state === "noAuth") return;
    this._logVerbose("refetching auth token");
    const t = await this.fetchTokenAndGuardAgainstRace(this.authState.config.fetchToken, {
      forceRefreshToken: !0,
    });
    t.isFromOutdatedConfig ||
      (t.value
        ? this.syncState.isNewAuth(t.value)
          ? (this.setAuthState({
              state: "waitingForServerConfirmationOfFreshToken",
              hadAuth: this.syncState.hasAuth(),
              token: t.value,
              config: this.authState.config,
            }),
            this.authenticate(t.value))
          : this.setAuthState({ state: "notRefetching", config: this.authState.config })
        : (this._logVerbose("refetching token failed"),
          this.syncState.hasAuth() && this.clearAuth(),
          this.setAndReportAuthFailed(this.authState.config.onAuthChange)),
      this._logVerbose("resuming WS after auth token fetch (if currently paused)"),
      this.resumeSocket());
  }
  scheduleTokenRefetch(t) {
    if (this.authState.state === "noAuth") return;
    const n = this.decodeToken(t);
    if (!n) {
      this.logger.error("Auth token is not a valid JWT, cannot refetch the token");
      return;
    }
    const { iat: r, exp: s } = n;
    if (!r || !s) {
      this.logger.error("Auth token does not have required fields, cannot refetch the token");
      return;
    }
    const i = s - r;
    if (i <= 2) {
      this.logger.error("Auth token does not live long enough, cannot refetch the token");
      return;
    }
    let o = Math.min(I1, (i - this.refreshTokenLeewaySeconds) * 1e3);
    o <= 0 &&
      (this.logger.warn(
        `Refetching auth token immediately, configured leeway ${this.refreshTokenLeewaySeconds}s is larger than the token's lifetime ${i}s`
      ),
      (o = 0));
    const a = setTimeout(() => {
      this.refetchToken();
    }, o);
    this.setAuthState({
      state: "waitingForScheduledRefetch",
      refetchTokenTimeoutId: a,
      config: this.authState.config,
    }),
      this._logVerbose(`scheduled preemptive auth token refetching in ${o}ms`);
  }
  async fetchTokenAndGuardAgainstRace(t, n) {
    const r = ++this.configVersion,
      s = await t(n);
    return this.configVersion !== r
      ? { isFromOutdatedConfig: !0 }
      : { isFromOutdatedConfig: !1, value: s };
  }
  stop() {
    this.resetAuthState(), this.configVersion++;
  }
  setAndReportAuthFailed(t) {
    t(!1), this.resetAuthState();
  }
  resetAuthState() {
    this.setAuthState({ state: "noAuth" });
  }
  setAuthState(t) {
    this.authState.state === "waitingForScheduledRefetch" &&
      (clearTimeout(this.authState.refetchTokenTimeoutId), this.syncState.markAuthCompletion()),
      (this.authState = t);
  }
  decodeToken(t) {
    try {
      return A1(t);
    } catch (n) {
      return (
        this._logVerbose(
          `Error decoding token: ${n instanceof Error ? n.message : "Unknown error"}`
        ),
        null
      );
    }
  }
  _logVerbose(t) {
    this.logger.logVerbose(`${t} [v${this.configVersion}]`);
  }
}
const D1 = ["convexClientConstructed", "convexWebSocketOpen", "convexFirstMessageReceived"];
function $1(e, t) {
  const n = { sessionId: t };
  typeof performance > "u" || !performance.mark || performance.mark(e, { detail: n });
}
function z1(e) {
  let t = e.name.slice(6);
  return (t = t.charAt(0).toLowerCase() + t.slice(1)), { name: t, startTime: e.startTime };
}
function q1(e) {
  if (typeof performance > "u" || !performance.getEntriesByName) return [];
  const t = [];
  for (const n of D1) {
    const r = performance
      .getEntriesByName(n)
      .filter((s) => s.entryType === "mark")
      .filter((s) => s.detail.sessionId === e);
    t.push(...r);
  }
  return t.map(z1);
}
var U1 = Object.defineProperty,
  B1 = (e, t, n) =>
    t in e ? U1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Ee = (e, t, n) => B1(e, typeof t != "symbol" ? t + "" : t, n);
class V1 {
  constructor(t, n, r) {
    if (
      (Ee(this, "address"),
      Ee(this, "state"),
      Ee(this, "requestManager"),
      Ee(this, "webSocketManager"),
      Ee(this, "authenticationManager"),
      Ee(this, "remoteQuerySet"),
      Ee(this, "optimisticQueryResults"),
      Ee(this, "_transitionHandlerCounter", 0),
      Ee(this, "_nextRequestId"),
      Ee(this, "_onTransitionFns", new Map()),
      Ee(this, "_sessionId"),
      Ee(this, "firstMessageReceived", !1),
      Ee(this, "debug"),
      Ee(this, "logger"),
      Ee(this, "maxObservedTimestamp"),
      Ee(this, "mark", (f) => {
        this.debug && $1(f, this.sessionId);
      }),
      typeof t == "object")
    )
      throw new Error(
        "Passing a ClientConfig object is no longer supported. Pass the URL of the Convex deployment as a string directly."
      );
    (r == null ? void 0 : r.skipConvexDeploymentUrlCheck) !== !0 && jw(t), (r = { ...r });
    const s = r.authRefreshTokenLeewaySeconds ?? 2;
    let i = r.webSocketConstructor;
    if (!i && typeof WebSocket > "u")
      throw new Error(
        "No WebSocket global variable defined! To use Convex in an environment without WebSocket try the HTTP client: https://docs.convex.dev/api/classes/browser.ConvexHttpClient"
      );
    (i = i || WebSocket),
      (this.debug = r.reportDebugInfoToConvex ?? !1),
      (this.address = t),
      (this.logger = r.logger ?? Sm({ verbose: r.verbose ?? !1 }));
    const o = t.search("://");
    if (o === -1) throw new Error("Provided address was not an absolute URL.");
    const a = t.substring(o + 3),
      l = t.substring(0, o);
    let u;
    if (l === "http") u = "ws";
    else if (l === "https") u = "wss";
    else throw new Error(`Unknown parent protocol ${l}`);
    const d = `${u}://${a}/api/${Xd}/sync`;
    (this.state = new n1()),
      (this.remoteQuerySet = new nf((f) => this.state.queryPath(f), this.logger)),
      (this.requestManager = new i1(this.logger)),
      (this.authenticationManager = new j1(
        this.state,
        {
          authenticate: (f) => {
            const y = this.state.setAuth(f);
            this.webSocketManager.sendMessage(y);
          },
          stopSocket: () => this.webSocketManager.stop(),
          restartSocket: () => this.webSocketManager.restart(),
          pauseSocket: () => {
            this.webSocketManager.pause(), this.state.pause();
          },
          resumeSocket: () => this.webSocketManager.resume(),
          clearAuth: () => {
            this.clearAuth();
          },
        },
        { logger: this.logger, refreshTokenLeewaySeconds: s }
      )),
      (this.optimisticQueryResults = new h1()),
      this.addOnTransitionHandler((f) => {
        n(f.queries.map((y) => y.token));
      }),
      (this._nextRequestId = 0),
      (this._sessionId = L1());
    const { unsavedChangesWarning: c } = r;
    if (typeof window > "u" || typeof window.addEventListener > "u") {
      if (c === !0)
        throw new Error(
          "unsavedChangesWarning requested, but window.addEventListener not found! Remove {unsavedChangesWarning: true} from Convex client options."
        );
    } else
      c !== !1 &&
        window.addEventListener("beforeunload", (f) => {
          if (this.requestManager.hasIncompleteRequests()) {
            f.preventDefault();
            const y = "Are you sure you want to leave? Your changes may not be saved.";
            return ((f || window.event).returnValue = y), y;
          }
        });
    (this.webSocketManager = new O1(
      d,
      {
        onOpen: (f) => {
          this.mark("convexWebSocketOpen"),
            this.webSocketManager.sendMessage({
              ...f,
              type: "Connect",
              sessionId: this._sessionId,
              maxObservedTimestamp: this.maxObservedTimestamp,
            });
          const y = new Set(this.remoteQuerySet.remoteQueryResults().keys());
          this.remoteQuerySet = new nf((w) => this.state.queryPath(w), this.logger);
          const [m, v] = this.state.restart(y);
          v && this.webSocketManager.sendMessage(v), this.webSocketManager.sendMessage(m);
          for (const w of this.requestManager.restart()) this.webSocketManager.sendMessage(w);
        },
        onResume: () => {
          const [f, y] = this.state.resume();
          y && this.webSocketManager.sendMessage(y), f && this.webSocketManager.sendMessage(f);
          for (const m of this.requestManager.resume()) this.webSocketManager.sendMessage(m);
        },
        onMessage: (f) => {
          switch (
            (this.firstMessageReceived ||
              ((this.firstMessageReceived = !0),
              this.mark("convexFirstMessageReceived"),
              this.reportMarks()),
            f.type)
          ) {
            case "Transition": {
              this.observedTimestamp(f.endVersion.ts),
                this.authenticationManager.onTransition(f),
                this.remoteQuerySet.transition(f),
                this.state.transition(f);
              const y = this.requestManager.removeCompleted(this.remoteQuerySet.timestamp());
              this.notifyOnQueryResultChanges(y);
              break;
            }
            case "MutationResponse": {
              f.success && this.observedTimestamp(f.ts);
              const y = this.requestManager.onResponse(f);
              y !== null && this.notifyOnQueryResultChanges(new Map([[y.requestId, y.result]]));
              break;
            }
            case "ActionResponse": {
              this.requestManager.onResponse(f);
              break;
            }
            case "AuthError": {
              this.authenticationManager.onAuthError(f);
              break;
            }
            case "FatalError": {
              const y = Zw(this.logger, f.error);
              throw (this.webSocketManager.terminate(), y);
            }
          }
          return { hasSyncedPastLastReconnect: this.hasSyncedPastLastReconnect() };
        },
      },
      i,
      this.logger
    )),
      this.mark("convexClientConstructed");
  }
  hasSyncedPastLastReconnect() {
    return (
      this.requestManager.hasSyncedPastLastReconnect() || this.state.hasSyncedPastLastReconnect()
    );
  }
  observedTimestamp(t) {
    (this.maxObservedTimestamp === void 0 || this.maxObservedTimestamp.lessThanOrEqual(t)) &&
      (this.maxObservedTimestamp = t);
  }
  getMaxObservedTimestamp() {
    return this.maxObservedTimestamp;
  }
  notifyOnQueryResultChanges(t) {
    const n = this.remoteQuerySet.remoteQueryResults(),
      r = new Map();
    for (const [i, o] of n) {
      const a = this.state.queryToken(i);
      if (a !== null) {
        const l = { result: o, udfPath: this.state.queryPath(i), args: this.state.queryArgs(i) };
        r.set(a, l);
      }
    }
    const s = this.optimisticQueryResults.ingestQueryResultsFromServer(r, new Set(t.keys()));
    this.handleTransition({
      queries: s.map((i) => ({
        token: i,
        modification: { kind: "Updated", result: r.get(i).result },
      })),
      reflectedMutations: Array.from(t).map(([i, o]) => ({ requestId: i, result: o })),
      timestamp: this.remoteQuerySet.timestamp(),
    });
  }
  handleTransition(t) {
    for (const n of this._onTransitionFns.values()) n(t);
  }
  addOnTransitionHandler(t) {
    const n = this._transitionHandlerCounter++;
    return this._onTransitionFns.set(n, t), () => this._onTransitionFns.delete(n);
  }
  setAuth(t, n) {
    this.authenticationManager.setConfig(t, n);
  }
  hasAuth() {
    return this.state.hasAuth();
  }
  setAdminAuth(t, n) {
    const r = this.state.setAdminAuth(t, n);
    this.webSocketManager.sendMessage(r);
  }
  clearAuth() {
    const t = this.state.clearAuth();
    this.webSocketManager.sendMessage(t);
  }
  subscribe(t, n, r) {
    const s = zt(n),
      {
        modification: i,
        queryToken: o,
        unsubscribe: a,
      } = this.state.subscribe(
        t,
        s,
        r == null ? void 0 : r.journal,
        r == null ? void 0 : r.componentPath
      );
    return (
      i !== null && this.webSocketManager.sendMessage(i),
      {
        queryToken: o,
        unsubscribe: () => {
          const l = a();
          l && this.webSocketManager.sendMessage(l);
        },
      }
    );
  }
  localQueryResult(t, n) {
    const r = zt(n),
      s = Wn(t, r);
    return this.optimisticQueryResults.queryResult(s);
  }
  localQueryResultByToken(t) {
    return this.optimisticQueryResults.queryResult(t);
  }
  hasLocalQueryResultByToken(t) {
    return this.optimisticQueryResults.hasQueryResult(t);
  }
  localQueryLogs(t, n) {
    const r = zt(n),
      s = Wn(t, r);
    return this.optimisticQueryResults.queryLogs(s);
  }
  queryJournal(t, n) {
    const r = zt(n),
      s = Wn(t, r);
    return this.state.queryJournal(s);
  }
  connectionState() {
    return {
      hasInflightRequests: this.requestManager.hasInflightRequests(),
      isWebSocketConnected: this.webSocketManager.socketState() === "ready",
      timeOfOldestInflightRequest: this.requestManager.timeOfOldestInflightRequest(),
    };
  }
  async mutation(t, n, r) {
    const s = await this.mutationInternal(t, n, r);
    if (!s.success)
      throw s.errorData !== void 0
        ? au(s, new ou(xr("mutation", t, s)))
        : new Error(xr("mutation", t, s));
    return s.value;
  }
  async mutationInternal(t, n, r, s) {
    const { mutationPromise: i } = this.enqueueMutation(t, n, r, s);
    return i;
  }
  enqueueMutation(t, n, r, s) {
    const i = zt(n);
    this.tryReportLongDisconnect();
    const o = this.nextRequestId;
    if ((this._nextRequestId++, r !== void 0)) {
      const d = r.optimisticUpdate;
      if (d !== void 0) {
        const c = (m) => {
            d(m, i);
          },
          y = this.optimisticQueryResults.applyOptimisticUpdate(c, o).map((m) => {
            const v = this.localQueryResultByToken(m);
            return {
              token: m,
              modification: {
                kind: "Updated",
                result: v === void 0 ? void 0 : { success: !0, value: v, logLines: [] },
              },
            };
          });
        this.handleTransition({
          queries: y,
          reflectedMutations: [],
          timestamp: this.remoteQuerySet.timestamp(),
        });
      }
    }
    const a = { type: "Mutation", requestId: o, udfPath: t, componentPath: s, args: [Pn(i)] },
      l = this.webSocketManager.sendMessage(a),
      u = this.requestManager.request(a, l);
    return { requestId: o, mutationPromise: u };
  }
  async action(t, n) {
    const r = await this.actionInternal(t, n);
    if (!r.success)
      throw r.errorData !== void 0
        ? au(r, new ou(xr("action", t, r)))
        : new Error(xr("action", t, r));
    return r.value;
  }
  async actionInternal(t, n, r) {
    const s = zt(n),
      i = this.nextRequestId;
    this._nextRequestId++, this.tryReportLongDisconnect();
    const o = { type: "Action", requestId: i, udfPath: t, componentPath: r, args: [Pn(s)] },
      a = this.webSocketManager.sendMessage(o);
    return this.requestManager.request(o, a);
  }
  async close() {
    return this.authenticationManager.stop(), this.webSocketManager.terminate();
  }
  get url() {
    return this.address;
  }
  get nextRequestId() {
    return this._nextRequestId;
  }
  get sessionId() {
    return this._sessionId;
  }
  reportMarks() {
    if (this.debug) {
      const t = q1(this.sessionId);
      this.webSocketManager.sendMessage({ type: "Event", eventType: "ClientConnect", event: t });
    }
  }
  tryReportLongDisconnect() {
    if (!this.debug) return;
    const t = this.connectionState().timeOfOldestInflightRequest;
    if (t === null || Date.now() - t.getTime() <= 60 * 1e3) return;
    const n = `${this.address}/api/debug_event`;
    fetch(n, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Convex-Client": `npm-${Xd}` },
      body: JSON.stringify({ event: "LongWebsocketDisconnect" }),
    })
      .then((r) => {
        r.ok || this.logger.warn("Analytics request failed with response:", r.body);
      })
      .catch((r) => {
        this.logger.warn("Analytics response failed with error:", r);
      });
  }
}
var Q1 = Object.defineProperty,
  H1 = (e, t, n) =>
    t in e ? Q1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  en = (e, t, n) => H1(e, typeof t != "symbol" ? t + "" : t, n);
if (typeof xu > "u") throw new Error("Required dependency 'react' not found");
if (typeof Bp > "u") throw new Error("Required dependency 'react-dom' not found");
function _m(e, t, n) {
  function r(s) {
    return Y1(s), t.mutation(e, s, { optimisticUpdate: n });
  }
  return (
    (r.withOptimisticUpdate = function (i) {
      if (n !== void 0)
        throw new Error(`Already specified optimistic update for mutation ${Je(e)}`);
      return _m(e, t, i);
    }),
    r
  );
}
class W1 {
  constructor(t, n) {
    if (
      (en(this, "address"),
      en(this, "cachedSync"),
      en(this, "listeners"),
      en(this, "options"),
      en(this, "closed", !1),
      en(this, "_logger"),
      en(this, "adminAuth"),
      en(this, "fakeUserIdentity"),
      t === void 0)
    )
      throw new Error(
        "No address provided to ConvexReactClient.\nIf trying to deploy to production, make sure to follow all the instructions found at https://docs.convex.dev/production/hosting/\nIf running locally, make sure to run `convex dev` and ensure the .env.local file is populated."
      );
    if (typeof t != "string")
      throw new Error(
        `ConvexReactClient requires a URL like 'https://happy-otter-123.convex.cloud', received something of type ${typeof t} instead.`
      );
    if (!t.includes("://")) throw new Error("Provided address was not an absolute URL.");
    (this.address = t),
      (this.listeners = new Map()),
      (this._logger =
        (n == null ? void 0 : n.logger) ?? Sm({ verbose: (n == null ? void 0 : n.verbose) ?? !1 })),
      (this.options = { ...n, logger: this._logger });
  }
  get sync() {
    if (this.closed) throw new Error("ConvexReactClient has already been closed.");
    return this.cachedSync
      ? this.cachedSync
      : ((this.cachedSync = new V1(this.address, (t) => this.transition(t), this.options)),
        this.adminAuth && this.cachedSync.setAdminAuth(this.adminAuth, this.fakeUserIdentity),
        this.cachedSync);
  }
  setAuth(t, n) {
    if (typeof t == "string")
      throw new Error(
        "Passing a string to ConvexReactClient.setAuth is no longer supported, please upgrade to passing in an async function to handle reauthentication."
      );
    this.sync.setAuth(t, n ?? (() => {}));
  }
  clearAuth() {
    this.sync.clearAuth();
  }
  setAdminAuth(t, n) {
    if (((this.adminAuth = t), (this.fakeUserIdentity = n), this.closed))
      throw new Error("ConvexReactClient has already been closed.");
    this.cachedSync && this.sync.setAdminAuth(t, n);
  }
  watchQuery(t, ...n) {
    const [r, s] = n,
      i = Je(t);
    return {
      onUpdate: (o) => {
        const { queryToken: a, unsubscribe: l } = this.sync.subscribe(i, r, s),
          u = this.listeners.get(a);
        return (
          u !== void 0 ? u.add(o) : this.listeners.set(a, new Set([o])),
          () => {
            if (this.closed) return;
            const d = this.listeners.get(a);
            d.delete(o), d.size === 0 && this.listeners.delete(a), l();
          }
        );
      },
      localQueryResult: () => {
        if (this.cachedSync) return this.cachedSync.localQueryResult(i, r);
      },
      localQueryLogs: () => {
        if (this.cachedSync) return this.cachedSync.localQueryLogs(i, r);
      },
      journal: () => {
        if (this.cachedSync) return this.cachedSync.queryJournal(i, r);
      },
    };
  }
  mutation(t, ...n) {
    const [r, s] = n,
      i = Je(t);
    return this.sync.mutation(i, r, s);
  }
  action(t, ...n) {
    const r = Je(t);
    return this.sync.action(r, ...n);
  }
  query(t, ...n) {
    const r = this.watchQuery(t, ...n),
      s = r.localQueryResult();
    return s !== void 0
      ? Promise.resolve(s)
      : new Promise((i, o) => {
          const a = r.onUpdate(() => {
            a();
            try {
              i(r.localQueryResult());
            } catch (l) {
              o(l);
            }
          });
        });
  }
  connectionState() {
    return this.sync.connectionState();
  }
  get logger() {
    return this._logger;
  }
  async close() {
    if (((this.closed = !0), (this.listeners = new Map()), this.cachedSync)) {
      const t = this.cachedSync;
      (this.cachedSync = void 0), await t.close();
    }
  }
  transition(t) {
    Bp.unstable_batchedUpdates(() => {
      for (const n of t) {
        const r = this.listeners.get(n);
        if (r) for (const s of r) s();
      }
    });
  }
}
const gc = xu.createContext(void 0);
function K1() {
  return b.useContext(gc);
}
const G1 = ({ client: e, children: t }) => xu.createElement(gc.Provider, { value: e }, t);
function J1(e, ...t) {
  const n = t[0] === "skip",
    r = t[0] === "skip" ? {} : zt(t[0]),
    s = typeof e == "string" ? xm(e) : e,
    i = Je(s),
    o = b.useMemo(() => (n ? {} : { query: { query: s, args: r } }), [JSON.stringify(Pn(r)), i, n]),
    l = rS(o).query;
  if (l instanceof Error) throw l;
  return l;
}
function X1(e) {
  const t = typeof e == "string" ? xm(e) : e,
    n = b.useContext(gc);
  if (n === void 0)
    throw new Error(
      "Could not find Convex client! `useMutation` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app"
    );
  return b.useMemo(() => _m(t, n), [n, Je(t)]);
}
function Y1(e) {
  if (
    typeof e == "object" &&
    e !== null &&
    "bubbles" in e &&
    "persist" in e &&
    "isDefaultPrevented" in e
  )
    throw new Error(
      "Convex function called with SyntheticEvent object. Did you use a Convex function as an event handler directly? Event handlers like onClick receive an event object as their first argument. These SyntheticEvent objects are not valid Convex values. Try wrapping the function like `const handler = () => myMutation();` and using `handler` in the event handler."
    );
}
var Z1 = Object.defineProperty,
  eS = (e, t, n) =>
    t in e ? Z1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  nl = (e, t, n) => eS(e, typeof t != "symbol" ? t + "" : t, n);
class tS {
  constructor(t) {
    nl(this, "createWatch"),
      nl(this, "queries"),
      nl(this, "listeners"),
      (this.createWatch = t),
      (this.queries = {}),
      (this.listeners = new Set());
  }
  setQueries(t) {
    for (const n of Object.keys(t)) {
      const { query: r, args: s } = t[n];
      if ((Je(r), this.queries[n] === void 0)) this.addQuery(n, r, s);
      else {
        const i = this.queries[n];
        (Je(r) !== Je(i.query) || JSON.stringify(Pn(s)) !== JSON.stringify(Pn(i.args))) &&
          (this.removeQuery(n), this.addQuery(n, r, s));
      }
    }
    for (const n of Object.keys(this.queries)) t[n] === void 0 && this.removeQuery(n);
  }
  subscribe(t) {
    return (
      this.listeners.add(t),
      () => {
        this.listeners.delete(t);
      }
    );
  }
  getLocalResults(t) {
    const n = {};
    for (const r of Object.keys(t)) {
      const { query: s, args: i } = t[r];
      Je(s);
      const o = this.createWatch(s, i);
      let a;
      try {
        a = o.localQueryResult();
      } catch (l) {
        if (l instanceof Error) a = l;
        else throw l;
      }
      n[r] = a;
    }
    return n;
  }
  setCreateWatch(t) {
    this.createWatch = t;
    for (const n of Object.keys(this.queries)) {
      const { query: r, args: s, watch: i } = this.queries[n],
        o = i.journal();
      this.removeQuery(n), this.addQuery(n, r, s, o);
    }
  }
  destroy() {
    for (const t of Object.keys(this.queries)) this.removeQuery(t);
    this.listeners = new Set();
  }
  addQuery(t, n, r, s) {
    if (this.queries[t] !== void 0)
      throw new Error(`Tried to add a new query with identifier ${t} when it already exists.`);
    const i = this.createWatch(n, r, s),
      o = i.onUpdate(() => this.notifyListeners());
    this.queries[t] = { query: n, args: r, watch: i, unsubscribe: o };
  }
  removeQuery(t) {
    const n = this.queries[t];
    if (n === void 0) throw new Error(`No query found with identifier ${t}.`);
    n.unsubscribe(), delete this.queries[t];
  }
  notifyListeners() {
    for (const t of this.listeners) t();
  }
}
function nS({ getCurrentValue: e, subscribe: t }) {
  const [n, r] = b.useState(() => ({ getCurrentValue: e, subscribe: t, value: e() }));
  let s = n.value;
  return (
    (n.getCurrentValue !== e || n.subscribe !== t) &&
      ((s = e()), r({ getCurrentValue: e, subscribe: t, value: s })),
    b.useEffect(() => {
      let i = !1;
      const o = () => {
          i ||
            r((l) => {
              if (l.getCurrentValue !== e || l.subscribe !== t) return l;
              const u = e();
              return l.value === u ? l : { ...l, value: u };
            });
        },
        a = t(o);
      return (
        o(),
        () => {
          (i = !0), a();
        }
      );
    }, [e, t]),
    s
  );
}
function rS(e) {
  const t = K1();
  if (t === void 0)
    throw new Error(
      "Could not find Convex client! `useQuery` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app"
    );
  const n = b.useMemo(() => (r, s, i) => t.watchQuery(r, s, { journal: i }), [t]);
  return sS(e, n);
}
function sS(e, t) {
  const [n] = b.useState(() => new tS(t));
  n.createWatch !== t && n.setCreateWatch(t), b.useEffect(() => () => n.destroy(), [n]);
  const r = b.useMemo(
    () => ({
      getCurrentValue: () => n.getLocalResults(e),
      subscribe: (s) => (n.setQueries(e), n.subscribe(s)),
    }),
    [n, e]
  );
  return nS(r);
}
const Cm = K0({ component: () => _.jsxs(_.Fragment, { children: [_.jsx(im, {}), !1] }) });
function Em(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: iS } = Object.prototype,
  { getPrototypeOf: vc } = Object,
  ua = ((e) => (t) => {
    const n = iS.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ct = (e) => ((e = e.toLowerCase()), (t) => ua(t) === e),
  ca = (e) => (t) => typeof t === e,
  { isArray: es } = Array,
  ti = ca("undefined");
function oS(e) {
  return (
    e !== null &&
    !ti(e) &&
    e.constructor !== null &&
    !ti(e.constructor) &&
    Ye(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Rm = Ct("ArrayBuffer");
function aS(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Rm(e.buffer)),
    t
  );
}
const lS = ca("string"),
  Ye = ca("function"),
  Pm = ca("number"),
  da = (e) => e !== null && typeof e == "object",
  uS = (e) => e === !0 || e === !1,
  io = (e) => {
    if (ua(e) !== "object") return !1;
    const t = vc(e);
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  cS = Ct("Date"),
  dS = Ct("File"),
  fS = Ct("Blob"),
  hS = Ct("FileList"),
  pS = (e) => da(e) && Ye(e.pipe),
  mS = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ye(e.append) &&
          ((t = ua(e)) === "formdata" ||
            (t === "object" && Ye(e.toString) && e.toString() === "[object FormData]"))))
    );
  },
  yS = Ct("URLSearchParams"),
  [gS, vS, wS, SS] = ["ReadableStream", "Request", "Response", "Headers"].map(Ct),
  xS = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));
function di(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), es(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let a;
    for (r = 0; r < o; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function Tm(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const $n =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  Om = (e) => !ti(e) && e !== $n;
function uu() {
  const { caseless: e } = (Om(this) && this) || {},
    t = {},
    n = (r, s) => {
      const i = (e && Tm(t, s)) || s;
      io(t[i]) && io(r)
        ? (t[i] = uu(t[i], r))
        : io(r)
          ? (t[i] = uu({}, r))
          : es(r)
            ? (t[i] = r.slice())
            : (t[i] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++) arguments[r] && di(arguments[r], n);
  return t;
}
const kS = (e, t, n, { allOwnKeys: r } = {}) => (
    di(
      t,
      (s, i) => {
        n && Ye(s) ? (e[i] = Em(s, n)) : (e[i] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  _S = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  CS = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  ES = (e, t, n, r) => {
    let s, i, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
        (o = s[i]), (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = n !== !1 && vc(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  RS = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  PS = (e) => {
    if (!e) return null;
    if (es(e)) return e;
    let t = e.length;
    if (!Pm(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  TS = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && vc(Uint8Array)),
  OS = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const i = s.value;
      t.call(e, i[0], i[1]);
    }
  },
  LS = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  MS = Ct("HTMLFormElement"),
  NS = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  sf = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  AS = Ct("RegExp"),
  Lm = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    di(n, (s, i) => {
      let o;
      (o = t(s, i, e)) !== !1 && (r[i] = o || s);
    }),
      Object.defineProperties(e, r);
  },
  bS = (e) => {
    Lm(e, (t, n) => {
      if (Ye(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
      const r = e[n];
      if (Ye(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  FS = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((i) => {
          n[i] = !0;
        });
      };
    return es(e) ? r(e) : r(String(e).split(t)), n;
  },
  IS = () => {},
  jS = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  rl = "abcdefghijklmnopqrstuvwxyz",
  of = "0123456789",
  Mm = { DIGIT: of, ALPHA: rl, ALPHA_DIGIT: rl + rl.toUpperCase() + of },
  DS = (e = 16, t = Mm.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function $S(e) {
  return !!(e && Ye(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const zS = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (da(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const i = es(r) ? [] : {};
            return (
              di(r, (o, a) => {
                const l = n(o, s + 1);
                !ti(l) && (i[a] = l);
              }),
              (t[s] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  qS = Ct("AsyncFunction"),
  US = (e) => e && (da(e) || Ye(e)) && Ye(e.then) && Ye(e.catch),
  Nm = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            $n.addEventListener(
              "message",
              ({ source: s, data: i }) => {
                s === $n && i === n && r.length && r.shift()();
              },
              !1
            ),
            (s) => {
              r.push(s), $n.postMessage(n, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(typeof setImmediate == "function", Ye($n.postMessage)),
  BS =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind($n)
      : (typeof process < "u" && process.nextTick) || Nm,
  E = {
    isArray: es,
    isArrayBuffer: Rm,
    isBuffer: oS,
    isFormData: mS,
    isArrayBufferView: aS,
    isString: lS,
    isNumber: Pm,
    isBoolean: uS,
    isObject: da,
    isPlainObject: io,
    isReadableStream: gS,
    isRequest: vS,
    isResponse: wS,
    isHeaders: SS,
    isUndefined: ti,
    isDate: cS,
    isFile: dS,
    isBlob: fS,
    isRegExp: AS,
    isFunction: Ye,
    isStream: pS,
    isURLSearchParams: yS,
    isTypedArray: TS,
    isFileList: hS,
    forEach: di,
    merge: uu,
    extend: kS,
    trim: xS,
    stripBOM: _S,
    inherits: CS,
    toFlatObject: ES,
    kindOf: ua,
    kindOfTest: Ct,
    endsWith: RS,
    toArray: PS,
    forEachEntry: OS,
    matchAll: LS,
    isHTMLForm: MS,
    hasOwnProperty: sf,
    hasOwnProp: sf,
    reduceDescriptors: Lm,
    freezeMethods: bS,
    toObjectSet: FS,
    toCamelCase: NS,
    noop: IS,
    toFiniteNumber: jS,
    findKey: Tm,
    global: $n,
    isContextDefined: Om,
    ALPHABET: Mm,
    generateString: DS,
    isSpecCompliantForm: $S,
    toJSONObject: zS,
    isAsyncFn: qS,
    isThenable: US,
    setImmediate: Nm,
    asap: BS,
  };
function $(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
E.inherits($, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Am = $.prototype,
  bm = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  bm[e] = { value: e };
});
Object.defineProperties($, bm);
Object.defineProperty(Am, "isAxiosError", { value: !0 });
$.from = (e, t, n, r, s, i) => {
  const o = Object.create(Am);
  return (
    E.toFlatObject(
      e,
      o,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    $.call(o, e.message, t, n, r, s),
    (o.cause = e),
    (o.name = e.name),
    i && Object.assign(o, i),
    o
  );
};
const VS = null;
function cu(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function Fm(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function af(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, i) {
          return (s = Fm(s)), !n && i ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function QS(e) {
  return E.isArray(e) && !e.some(cu);
}
const HS = E.toFlatObject(E, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function fa(e, t, n) {
  if (!E.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = E.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (v, w) {
      return !E.isUndefined(w[v]);
    }));
  const r = n.metaTokens,
    s = n.visitor || d,
    i = n.dots,
    o = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && E.isSpecCompliantForm(t);
  if (!E.isFunction(s)) throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (E.isDate(m)) return m.toISOString();
    if (!l && E.isBlob(m)) throw new $("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(m) || E.isTypedArray(m)
      ? l && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function d(m, v, w) {
    let p = m;
    if (m && !w && typeof m == "object") {
      if (E.endsWith(v, "{}")) (v = r ? v : v.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (E.isArray(m) && QS(m)) ||
        ((E.isFileList(m) || E.endsWith(v, "[]")) && (p = E.toArray(m)))
      )
        return (
          (v = Fm(v)),
          p.forEach(function (g, S) {
            !(E.isUndefined(g) || g === null) &&
              t.append(o === !0 ? af([v], S, i) : o === null ? v : v + "[]", u(g));
          }),
          !1
        );
    }
    return cu(m) ? !0 : (t.append(af(w, v, i), u(m)), !1);
  }
  const c = [],
    f = Object.assign(HS, { defaultVisitor: d, convertValue: u, isVisitable: cu });
  function y(m, v) {
    if (!E.isUndefined(m)) {
      if (c.indexOf(m) !== -1) throw Error("Circular reference detected in " + v.join("."));
      c.push(m),
        E.forEach(m, function (p, h) {
          (!(E.isUndefined(p) || p === null) &&
            s.call(t, p, E.isString(h) ? h.trim() : h, v, f)) === !0 && y(p, v ? v.concat(h) : [h]);
        }),
        c.pop();
    }
  }
  if (!E.isObject(e)) throw new TypeError("data must be an object");
  return y(e), t;
}
function lf(e) {
  const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function wc(e, t) {
  (this._pairs = []), e && fa(e, this, t);
}
const Im = wc.prototype;
Im.append = function (t, n) {
  this._pairs.push([t, n]);
};
Im.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, lf);
      }
    : lf;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function WS(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function jm(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || WS;
  E.isFunction(n) && (n = { serialize: n });
  const s = n && n.serialize;
  let i;
  if (
    (s ? (i = s(t, n)) : (i = E.isURLSearchParams(t) ? t.toString() : new wc(t, n).toString(r)), i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class uf {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    E.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Dm = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  KS = typeof URLSearchParams < "u" ? URLSearchParams : wc,
  GS = typeof FormData < "u" ? FormData : null,
  JS = typeof Blob < "u" ? Blob : null,
  XS = {
    isBrowser: !0,
    classes: { URLSearchParams: KS, FormData: GS, Blob: JS },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Sc = typeof window < "u" && typeof document < "u",
  du = (typeof navigator == "object" && navigator) || void 0,
  YS = Sc && (!du || ["ReactNative", "NativeScript", "NS"].indexOf(du.product) < 0),
  ZS =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  ex = (Sc && window.location.href) || "http://localhost",
  tx = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Sc,
        hasStandardBrowserEnv: YS,
        hasStandardBrowserWebWorkerEnv: ZS,
        navigator: du,
        origin: ex,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Te = { ...tx, ...XS };
function nx(e, t) {
  return fa(
    e,
    new Te.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, i) {
          return Te.isNode && E.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function rx(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function sx(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function $m(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      l = i >= n.length;
    return (
      (o = !o && E.isArray(s) ? s.length : o),
      l
        ? (E.hasOwnProp(s, o) ? (s[o] = [s[o], r]) : (s[o] = r), !a)
        : ((!s[o] || !E.isObject(s[o])) && (s[o] = []),
          t(n, r, s[o], i) && E.isArray(s[o]) && (s[o] = sx(s[o])),
          !a)
    );
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return (
      E.forEachEntry(e, (r, s) => {
        t(rx(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function ix(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const fi = {
  transitional: Dm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        i = E.isObject(t);
      if ((i && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)))
        return s ? JSON.stringify($m(t)) : t;
      if (
        E.isArrayBuffer(t) ||
        E.isBuffer(t) ||
        E.isStream(t) ||
        E.isFile(t) ||
        E.isBlob(t) ||
        E.isReadableStream(t)
      )
        return t;
      if (E.isArrayBufferView(t)) return t.buffer;
      if (E.isURLSearchParams(t))
        return (
          n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return nx(t, this.formSerializer).toString();
        if ((a = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return fa(a ? { "files[]": t } : t, l && new l(), this.formSerializer);
        }
      }
      return i || s ? (n.setContentType("application/json", !1), ix(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || fi.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (E.isResponse(t) || E.isReadableStream(t)) return t;
      if (t && E.isString(t) && ((r && !this.responseType) || s)) {
        const o = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? $.from(a, $.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Te.classes.FormData, Blob: Te.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } },
};
E.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  fi.headers[e] = {};
});
const ox = E.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  ax = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (s = o.indexOf(":")),
              (n = o.substring(0, s).trim().toLowerCase()),
              (r = o.substring(s + 1).trim()),
              !(!n || (t[n] && ox[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  cf = Symbol("internals");
function ds(e) {
  return e && String(e).trim().toLowerCase();
}
function oo(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(oo) : String(e);
}
function lx(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const ux = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function sl(e, t, n, r, s) {
  if (E.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!E.isString(t))) {
    if (E.isString(r)) return t.indexOf(r) !== -1;
    if (E.isRegExp(r)) return r.test(t);
  }
}
function cx(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function dx(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0,
    });
  });
}
class Be {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(a, l, u) {
      const d = ds(l);
      if (!d) throw new Error("header name must be a non-empty string");
      const c = E.findKey(s, d);
      (!c || s[c] === void 0 || u === !0 || (u === void 0 && s[c] !== !1)) && (s[c || l] = oo(a));
    }
    const o = (a, l) => E.forEach(a, (u, d) => i(u, d, l));
    if (E.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (E.isString(t) && (t = t.trim()) && !ux(t)) o(ax(t), n);
    else if (E.isHeaders(t)) for (const [a, l] of t.entries()) i(l, a, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = ds(t)), t)) {
      const r = E.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return lx(s);
        if (E.isFunction(n)) return n.call(this, s, r);
        if (E.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = ds(t)), t)) {
      const r = E.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || sl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (((o = ds(o)), o)) {
        const a = E.findKey(r, o);
        a && (!n || sl(r, r[a], a, n)) && (delete r[a], (s = !0));
      }
    }
    return E.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || sl(this, this[i], i, t, !0)) && (delete this[i], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      E.forEach(this, (s, i) => {
        const o = E.findKey(r, i);
        if (o) {
          (n[o] = oo(s)), delete n[i];
          return;
        }
        const a = t ? cx(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = oo(s)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      E.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && E.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[cf] = this[cf] = { accessors: {} }).accessors,
      s = this.prototype;
    function i(o) {
      const a = ds(o);
      r[a] || (dx(s, o), (r[a] = !0));
    }
    return E.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Be.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
E.reduceDescriptors(Be.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
E.freezeMethods(Be);
function il(e, t) {
  const n = this || fi,
    r = t || n,
    s = Be.from(r.headers);
  let i = r.data;
  return (
    E.forEach(e, function (a) {
      i = a.call(n, i, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    i
  );
}
function zm(e) {
  return !!(e && e.__CANCEL__);
}
function ts(e, t, n) {
  $.call(this, e ?? "canceled", $.ERR_CANCELED, t, n), (this.name = "CanceledError");
}
E.inherits(ts, $, { __CANCEL__: !0 });
function qm(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new $(
          "Request failed with status code " + n.status,
          [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n
        )
      );
}
function fx(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function hx(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    i = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        d = r[i];
      o || (o = u), (n[s] = l), (r[s] = u);
      let c = i,
        f = 0;
      for (; c !== s; ) (f += n[c++]), (c = c % e);
      if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), u - o < t)) return;
      const y = d && u - d;
      return y ? Math.round((f * 1e3) / y) : void 0;
    }
  );
}
function px(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    i;
  const o = (u, d = Date.now()) => {
    (n = d), (s = null), i && (clearTimeout(i), (i = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const d = Date.now(),
        c = d - n;
      c >= r
        ? o(u, d)
        : ((s = u),
          i ||
            (i = setTimeout(() => {
              (i = null), o(s);
            }, r - c)));
    },
    () => s && o(s),
  ];
}
const zo = (e, t, n = 3) => {
    let r = 0;
    const s = hx(50, 250);
    return px((i) => {
      const o = i.loaded,
        a = i.lengthComputable ? i.total : void 0,
        l = o - r,
        u = s(l),
        d = o <= a;
      r = o;
      const c = {
        loaded: o,
        total: a,
        progress: a ? o / a : void 0,
        bytes: l,
        rate: u || void 0,
        estimated: u && a && d ? (a - o) / u : void 0,
        event: i,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(c);
    }, n);
  },
  df = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  ff =
    (e) =>
    (...t) =>
      E.asap(() => e(...t)),
  mx = Te.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, Te.origin)),
        e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)
      ))(new URL(Te.origin), Te.navigator && /(msie|trident)/i.test(Te.navigator.userAgent))
    : () => !0,
  yx = Te.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, i) {
          const o = [e + "=" + encodeURIComponent(t)];
          E.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            E.isString(r) && o.push("path=" + r),
            E.isString(s) && o.push("domain=" + s),
            i === !0 && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read(e) {
          const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function gx(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function vx(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Um(e, t) {
  return e && !gx(t) ? vx(e, t) : t;
}
const hf = (e) => (e instanceof Be ? { ...e } : e);
function tr(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, c, f) {
    return E.isPlainObject(u) && E.isPlainObject(d)
      ? E.merge.call({ caseless: f }, u, d)
      : E.isPlainObject(d)
        ? E.merge({}, d)
        : E.isArray(d)
          ? d.slice()
          : d;
  }
  function s(u, d, c, f) {
    if (E.isUndefined(d)) {
      if (!E.isUndefined(u)) return r(void 0, u, c, f);
    } else return r(u, d, c, f);
  }
  function i(u, d) {
    if (!E.isUndefined(d)) return r(void 0, d);
  }
  function o(u, d) {
    if (E.isUndefined(d)) {
      if (!E.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function a(u, d, c) {
    if (c in t) return r(u, d);
    if (c in e) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (u, d, c) => s(hf(u), hf(d), c, !0),
  };
  return (
    E.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const c = l[d] || s,
        f = c(e[d], t[d], d);
      (E.isUndefined(f) && c !== a) || (n[d] = f);
    }),
    n
  );
}
const Bm = (e) => {
    const t = tr({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: i,
      headers: o,
      auth: a,
    } = t;
    (t.headers = o = Be.from(o)),
      (t.url = jm(Um(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let l;
    if (E.isFormData(n)) {
      if (Te.hasStandardBrowserEnv || Te.hasStandardBrowserWebWorkerEnv) o.setContentType(void 0);
      else if ((l = o.getContentType()) !== !1) {
        const [u, ...d] = l
          ? l
              .split(";")
              .map((c) => c.trim())
              .filter(Boolean)
          : [];
        o.setContentType([u || "multipart/form-data", ...d].join("; "));
      }
    }
    if (
      Te.hasStandardBrowserEnv &&
      (r && E.isFunction(r) && (r = r(t)), r || (r !== !1 && mx(t.url)))
    ) {
      const u = s && i && yx.read(i);
      u && o.set(s, u);
    }
    return t;
  },
  wx = typeof XMLHttpRequest < "u",
  Sx =
    wx &&
    function (e) {
      return new Promise(function (n, r) {
        const s = Bm(e);
        let i = s.data;
        const o = Be.from(s.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = s,
          d,
          c,
          f,
          y,
          m;
        function v() {
          y && y(),
            m && m(),
            s.cancelToken && s.cancelToken.unsubscribe(d),
            s.signal && s.signal.removeEventListener("abort", d);
        }
        let w = new XMLHttpRequest();
        w.open(s.method.toUpperCase(), s.url, !0), (w.timeout = s.timeout);
        function p() {
          if (!w) return;
          const g = Be.from("getAllResponseHeaders" in w && w.getAllResponseHeaders()),
            k = {
              data: !a || a === "text" || a === "json" ? w.responseText : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: g,
              config: e,
              request: w,
            };
          qm(
            function (P) {
              n(P), v();
            },
            function (P) {
              r(P), v();
            },
            k
          ),
            (w = null);
        }
        "onloadend" in w
          ? (w.onloadend = p)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 && !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                setTimeout(p);
            }),
          (w.onabort = function () {
            w && (r(new $("Request aborted", $.ECONNABORTED, e, w)), (w = null));
          }),
          (w.onerror = function () {
            r(new $("Network Error", $.ERR_NETWORK, e, w)), (w = null);
          }),
          (w.ontimeout = function () {
            let S = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
            const k = s.transitional || Dm;
            s.timeoutErrorMessage && (S = s.timeoutErrorMessage),
              r(new $(S, k.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED, e, w)),
              (w = null);
          }),
          i === void 0 && o.setContentType(null),
          "setRequestHeader" in w &&
            E.forEach(o.toJSON(), function (S, k) {
              w.setRequestHeader(k, S);
            }),
          E.isUndefined(s.withCredentials) || (w.withCredentials = !!s.withCredentials),
          a && a !== "json" && (w.responseType = s.responseType),
          u && (([f, m] = zo(u, !0)), w.addEventListener("progress", f)),
          l &&
            w.upload &&
            (([c, y] = zo(l)),
            w.upload.addEventListener("progress", c),
            w.upload.addEventListener("loadend", y)),
          (s.cancelToken || s.signal) &&
            ((d = (g) => {
              w && (r(!g || g.type ? new ts(null, e, w) : g), w.abort(), (w = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(d),
            s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
        const h = fx(s.url);
        if (h && Te.protocols.indexOf(h) === -1) {
          r(new $("Unsupported protocol " + h + ":", $.ERR_BAD_REQUEST, e));
          return;
        }
        w.send(i || null);
      });
    },
  xx = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const i = function (u) {
        if (!s) {
          (s = !0), a();
          const d = u instanceof Error ? u : this.reason;
          r.abort(d instanceof $ ? d : new ts(d instanceof Error ? d.message : d));
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), i(new $(`timeout ${t} of ms exceeded`, $.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((u) => {
            u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", i));
      const { signal: l } = r;
      return (l.unsubscribe = () => E.asap(a)), l;
    }
  },
  kx = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  _x = async function* (e, t) {
    for await (const n of Cx(e)) yield* kx(n, t);
  },
  Cx = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  pf = (e, t, n, r) => {
    const s = _x(e, t);
    let i = 0,
      o,
      a = (l) => {
        o || ((o = !0), r && r(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: u, value: d } = await s.next();
            if (u) {
              a(), l.close();
              return;
            }
            let c = d.byteLength;
            if (n) {
              let f = (i += c);
              n(f);
            }
            l.enqueue(new Uint8Array(d));
          } catch (u) {
            throw (a(u), u);
          }
        },
        cancel(l) {
          return a(l), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  ha = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function",
  Vm = ha && typeof ReadableStream == "function",
  Ex =
    ha &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Qm = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Rx =
    Vm &&
    Qm(() => {
      let e = !1;
      const t = new Request(Te.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  mf = 64 * 1024,
  fu = Vm && Qm(() => E.isReadableStream(new Response("").body)),
  qo = { stream: fu && ((e) => e.body) };
ha &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !qo[t] &&
        (qo[t] = E.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new $(`Response type '${t}' is not supported`, $.ERR_NOT_SUPPORT, r);
            });
    });
  })(new Response());
const Px = async (e) => {
    if (e == null) return 0;
    if (E.isBlob(e)) return e.size;
    if (E.isSpecCompliantForm(e))
      return (await new Request(Te.origin, { method: "POST", body: e }).arrayBuffer()).byteLength;
    if (E.isArrayBufferView(e) || E.isArrayBuffer(e)) return e.byteLength;
    if ((E.isURLSearchParams(e) && (e = e + ""), E.isString(e))) return (await Ex(e)).byteLength;
  },
  Tx = async (e, t) => {
    const n = E.toFiniteNumber(e.getContentLength());
    return n ?? Px(t);
  },
  Ox =
    ha &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: i,
        timeout: o,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: u,
        headers: d,
        withCredentials: c = "same-origin",
        fetchOptions: f,
      } = Bm(e);
      u = u ? (u + "").toLowerCase() : "text";
      let y = xx([s, i && i.toAbortSignal()], o),
        m;
      const v =
        y &&
        y.unsubscribe &&
        (() => {
          y.unsubscribe();
        });
      let w;
      try {
        if (l && Rx && n !== "get" && n !== "head" && (w = await Tx(d, r)) !== 0) {
          let k = new Request(t, { method: "POST", body: r, duplex: "half" }),
            x;
          if (
            (E.isFormData(r) && (x = k.headers.get("content-type")) && d.setContentType(x), k.body)
          ) {
            const [P, R] = df(w, zo(ff(l)));
            r = pf(k.body, mf, P, R);
          }
        }
        E.isString(c) || (c = c ? "include" : "omit");
        const p = "credentials" in Request.prototype;
        m = new Request(t, {
          ...f,
          signal: y,
          method: n.toUpperCase(),
          headers: d.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: p ? c : void 0,
        });
        let h = await fetch(m);
        const g = fu && (u === "stream" || u === "response");
        if (fu && (a || (g && v))) {
          const k = {};
          ["status", "statusText", "headers"].forEach((O) => {
            k[O] = h[O];
          });
          const x = E.toFiniteNumber(h.headers.get("content-length")),
            [P, R] = (a && df(x, zo(ff(a), !0))) || [];
          h = new Response(
            pf(h.body, mf, P, () => {
              R && R(), v && v();
            }),
            k
          );
        }
        u = u || "text";
        let S = await qo[E.findKey(qo, u) || "text"](h, e);
        return (
          !g && v && v(),
          await new Promise((k, x) => {
            qm(k, x, {
              data: S,
              headers: Be.from(h.headers),
              status: h.status,
              statusText: h.statusText,
              config: e,
              request: m,
            });
          })
        );
      } catch (p) {
        throw (
          (v && v(),
          p && p.name === "TypeError" && /fetch/i.test(p.message)
            ? Object.assign(new $("Network Error", $.ERR_NETWORK, e, m), { cause: p.cause || p })
            : $.from(p, p && p.code, e, m))
        );
      }
    }),
  hu = { http: VS, xhr: Sx, fetch: Ox };
E.forEach(hu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const yf = (e) => `- ${e}`,
  Lx = (e) => E.isFunction(e) || e === null || e === !1,
  Hm = {
    getAdapter: (e) => {
      e = E.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let o;
        if (((r = n), !Lx(n) && ((r = hu[(o = String(n)).toLowerCase()]), r === void 0)))
          throw new $(`Unknown adapter '${o}'`);
        if (r) break;
        s[o || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(s).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1 ? "is not supported by the environment" : "is not available in the build")
        );
        let o = t
          ? i.length > 1
            ? `since :
` +
              i.map(yf).join(`
`)
            : " " + yf(i[0])
          : "as no adapter specified";
        throw new $("There is no suitable adapter to dispatch the request " + o, "ERR_NOT_SUPPORT");
      }
      return r;
    },
    adapters: hu,
  };
function ol(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
    throw new ts(null, e);
}
function gf(e) {
  return (
    ol(e),
    (e.headers = Be.from(e.headers)),
    (e.data = il.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Hm.getAdapter(e.adapter || fi.adapter)(e).then(
      function (r) {
        return (
          ol(e), (r.data = il.call(e, e.transformResponse, r)), (r.headers = Be.from(r.headers)), r
        );
      },
      function (r) {
        return (
          zm(r) ||
            (ol(e),
            r &&
              r.response &&
              ((r.response.data = il.call(e, e.transformResponse, r.response)),
              (r.response.headers = Be.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Wm = "1.7.9",
  pa = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  pa[e] = function (r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const vf = {};
pa.transitional = function (t, n, r) {
  function s(i, o) {
    return "[Axios v" + Wm + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, a) => {
    if (t === !1) throw new $(s(o, " has been removed" + (n ? " in " + n : "")), $.ERR_DEPRECATED);
    return (
      n &&
        !vf[o] &&
        ((vf[o] = !0),
        console.warn(
          s(o, " has been deprecated since v" + n + " and will be removed in the near future")
        )),
      t ? t(i, o, a) : !0
    );
  };
};
pa.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Mx(e, t, n) {
  if (typeof e != "object") throw new $("options must be an object", $.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s],
      o = t[i];
    if (o) {
      const a = e[i],
        l = a === void 0 || o(a, i, e);
      if (l !== !0) throw new $("option " + i + " must be " + l, $.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new $("Unknown option " + i, $.ERR_BAD_OPTION);
  }
}
const ao = { assertOptions: Mx, validators: pa },
  Pt = ao.validators;
class Kn {
  constructor(t) {
    (this.defaults = t), (this.interceptors = { request: new uf(), response: new uf() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : (s = new Error());
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = tr(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 &&
      ao.assertOptions(
        r,
        {
          silentJSONParsing: Pt.transitional(Pt.boolean),
          forcedJSONParsing: Pt.transitional(Pt.boolean),
          clarifyTimeoutError: Pt.transitional(Pt.boolean),
        },
        !1
      ),
      s != null &&
        (E.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : ao.assertOptions(s, { encode: Pt.function, serialize: Pt.function }, !0)),
      ao.assertOptions(
        n,
        { baseUrl: Pt.spelling("baseURL"), withXsrfToken: Pt.spelling("withXSRFToken") },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = i && E.merge(i.common, i[n.method]);
    i &&
      E.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (m) => {
        delete i[m];
      }),
      (n.headers = Be.concat(o, i));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((l = l && v.synchronous), a.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let d,
      c = 0,
      f;
    if (!l) {
      const m = [gf.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, u), f = m.length, d = Promise.resolve(n); c < f; )
        d = d.then(m[c++], m[c++]);
      return d;
    }
    f = a.length;
    let y = n;
    for (c = 0; c < f; ) {
      const m = a[c++],
        v = a[c++];
      try {
        y = m(y);
      } catch (w) {
        v.call(this, w);
        break;
      }
    }
    try {
      d = gf.call(this, y);
    } catch (m) {
      return Promise.reject(m);
    }
    for (c = 0, f = u.length; c < f; ) d = d.then(u[c++], u[c++]);
    return d;
  }
  getUri(t) {
    t = tr(this.defaults, t);
    const n = Um(t.baseURL, t.url);
    return jm(n, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function (t) {
  Kn.prototype[t] = function (n, r) {
    return this.request(tr(r || {}, { method: t, url: n, data: (r || {}).data }));
  };
});
E.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, o, a) {
      return this.request(
        tr(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: o,
        })
      );
    };
  }
  (Kn.prototype[t] = n()), (Kn.prototype[t + "Form"] = n(!0));
});
class xc {
  constructor(t) {
    if (typeof t != "function") throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let i;
        const o = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(s);
        return (
          (o.cancel = function () {
            r.unsubscribe(i);
          }),
          o
        );
      }),
      t(function (i, o, a) {
        r.reason || ((r.reason = new ts(i, o, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return this.subscribe(n), (t.signal.unsubscribe = () => this.unsubscribe(n)), t.signal;
  }
  static source() {
    let t;
    return {
      token: new xc(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function Nx(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Ax(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const pu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(pu).forEach(([e, t]) => {
  pu[t] = e;
});
function Km(e) {
  const t = new Kn(e),
    n = Em(Kn.prototype.request, t);
  return (
    E.extend(n, Kn.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Km(tr(e, s));
    }),
    n
  );
}
const ne = Km(fi);
ne.Axios = Kn;
ne.CanceledError = ts;
ne.CancelToken = xc;
ne.isCancel = zm;
ne.VERSION = Wm;
ne.toFormData = fa;
ne.AxiosError = $;
ne.Cancel = ne.CanceledError;
ne.all = function (t) {
  return Promise.all(t);
};
ne.spread = Nx;
ne.isAxiosError = Ax;
ne.mergeConfig = tr;
ne.AxiosHeaders = Be;
ne.formToJSON = (e) => $m(E.isHTMLForm(e) ? new FormData(e) : e);
ne.getAdapter = Hm.getAdapter;
ne.HttpStatusCode = pu;
ne.default = ne;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var bx = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fx = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  xe = (e, t) => {
    const n = b.forwardRef(
      (
        {
          color: r = "currentColor",
          size: s = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: o,
          className: a = "",
          children: l,
          ...u
        },
        d
      ) =>
        b.createElement(
          "svg",
          {
            ref: d,
            ...bx,
            width: s,
            height: s,
            stroke: r,
            strokeWidth: o ? (Number(i) * 24) / Number(s) : i,
            className: ["lucide", `lucide-${Fx(e)}`, a].join(" "),
            ...u,
          },
          [...t.map(([c, f]) => b.createElement(c, f)), ...(Array.isArray(l) ? l : [l])]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ix = xe("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gm = xe("Code2", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jm = xe("Compass", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polygon", { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76", key: "m9r19z" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mu = xe("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xm = xe("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jx = xe("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dx = xe("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $x = xe("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zx = xe("Moon", [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qx = xe("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ux = xe("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ym = xe("Sprout", [
  ["path", { d: "M7 20h10", key: "e6iznv" }],
  ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10", key: "161w41" }],
  [
    "path",
    {
      d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
      key: "9gtqwd",
    },
  ],
  [
    "path",
    {
      d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
      key: "bkxnd2",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bx = xe("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zm = xe("Sword", [
  ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }],
  ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
  ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
  ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yu = xe("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ey = xe("Wand2", [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",
      key: "1bcowg",
    },
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ty = xe("Zap", [
    ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }],
  ]),
  wf = c1;
function Vx({ profile: e, commits: t, usesConvex: n }) {
  const [r, s] = b.useState(""),
    i = X1(wf.chat.sendMessage),
    o = J1(wf.chat.getMessages, { profileName: e.name }) || [],
    [a, l] = b.useState(!1),
    u = async (c) => {
      if ((c.preventDefault(), !(!r.trim() || a))) {
        l(!0);
        try {
          await i({ message: r.trim(), profileName: e.name, commits: t, usesConvex: n }), s("");
        } catch (f) {
          console.error("Error sending message:", f);
        } finally {
          l(!1);
        }
      }
    },
    d = o
      .map((c) => [
        { text: c.message, isAI: !1 },
        { text: c.response, isAI: !0 },
      ])
      .flat();
  return _.jsxs("div", {
    className: "mt-6 border rounded-lg overflow-hidden bg-white",
    children: [
      _.jsx("div", {
        className: "p-4 bg-gray-50 border-b",
        children: _.jsxs("div", {
          className: "flex items-center gap-2 text-gray-700",
          children: [
            _.jsx(Ix, { size: 20 }),
            _.jsx("h3", { className: "font-semibold", children: "Chat with the commits" }),
          ],
        }),
      }),
      _.jsxs("div", {
        className: "h-64 overflow-y-auto p-4 space-y-4",
        children: [
          d.map((c, f) =>
            _.jsx(
              "div",
              {
                className: `flex ${c.isAI ? "justify-start" : "justify-end"}`,
                children: _.jsx("div", {
                  className: `max-w-[80%] rounded-lg p-3 ${c.isAI ? "bg-gray-100 text-gray-800" : "bg-[#222222] text-white"}`,
                  children: c.text,
                }),
              },
              f
            )
          ),
          a &&
            _.jsx("div", {
              className: "flex justify-start",
              children: _.jsx("div", {
                className: "bg-gray-100 rounded-lg p-3 max-w-[80%]",
                children: _.jsxs("div", {
                  className: "flex gap-1",
                  children: [
                    _.jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce" }),
                    _.jsx("div", {
                      className:
                        "w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]",
                    }),
                    _.jsx("div", {
                      className:
                        "w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]",
                    }),
                  ],
                }),
              }),
            }),
        ],
      }),
      _.jsx("form", {
        onSubmit: u,
        className: "p-4 border-t",
        children: _.jsxs("div", {
          className: "flex gap-2",
          children: [
            _.jsx("input", {
              type: "text",
              value: r,
              onChange: (c) => s(c.target.value),
              placeholder: "Ask about this developer's commits...",
              className:
                "flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#222222] focus:border-transparent",
            }),
            _.jsx("button", {
              type: "submit",
              disabled: a,
              className:
                "px-4 py-2 bg-[#222222] text-white rounded-lg hover:bg-[#333333] disabled:opacity-50 transition-colors",
              children: _.jsx(Ux, { size: 20 }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Qx({ profile: e, commits: t, usesConvex: n }) {
  const [r, s] = b.useState(!1),
    i = () => {
      const c = a().label,
        f = `🎮 Just discovered ${e.name} is a ${c} on Commit Rank with ${t.toLocaleString()} commits! ${n ? "⚡ Convex Developer!" : ""} Check out their journey at https://commitrank.dev`;
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(f)}`, "_blank");
    },
    o = r ? "bg-gray-900 text-white" : "bg-white text-gray-900",
    a = () =>
      t >= 1e5
        ? { icon: ty, label: "Overload", color: "text-purple-500" }
        : t >= 1e4
          ? { icon: Gm, label: "Hacker", color: "text-red-500" }
          : t >= 5e3
            ? { icon: ey, label: "Wizard", color: "text-blue-500" }
            : t >= 1e3
              ? { icon: Zm, label: "Samurai", color: "text-indigo-500" }
              : t >= 10
                ? { icon: Ym, label: "Noob", color: "text-green-500" }
                : { icon: Jm, label: "Explorer", color: "text-yellow-500" },
    l = () => {
      if (t >= 1e5) {
        const f = [
          `In the digital realm, ${e.name} stands as a legendary Overload, their ${t.toLocaleString()} commits crackling with raw coding energy. Like a power plant of pure innovation, they've generated enough code to light up entire tech ecosystems. Their GitHub history reads like a saga of digital transformation, each commit a bolt of brilliance in the vast storm of development.`,
          `Legends speak of ${e.name}, the Overload whose keyboard never cools. With ${t.toLocaleString()} commits, they've transcended normal development patterns, becoming one with the code itself. Their repository is a testament to their mastery, a beacon of light in the darkness of unsolved problems.`,
        ];
        return f[Math.floor(Math.random() * f.length)];
      }
      if (t >= 1e4) {
        const f = [
          `Deep in the matrix of code, ${e.name} moves like a digital phantom, their ${t.toLocaleString()} commits telling tales of countless systems conquered and algorithms mastered. This Hacker's repository is a masterclass in digital craftsmanship, each commit a piece of the puzzle in their grand scheme of innovation.`,
          `With fingers dancing across the keyboard, ${e.name} has carved their name into the bedrock of GitHub with ${t.toLocaleString()} precise commits. This Hacker's code flows like poetry, each pull request a verse in their epic saga of development.`,
        ];
        return f[Math.floor(Math.random() * f.length)];
      }
      if (t >= 5e3) {
        const f = [
          `In the grand library of code, ${e.name} stands as a true Wizard, their ${t.toLocaleString()} commits forming spells of pure logic and innovation. Their repository is their spellbook, each commit a carefully crafted incantation that brings digital dreams to life.`,
          `${e.name}, the Code Wizard, has woven ${t.toLocaleString()} commits into a tapestry of technical excellence. Their mastery of the digital arts is evident in every line of code, each commit a step in their journey to programming enlightenment.`,
        ];
        return f[Math.floor(Math.random() * f.length)];
      }
      if (t >= 1e3) {
        const f = [
          `In the digital dojo of ${e.name}, each commit is a stroke of the keyboard-katana. With ${t.toLocaleString()} precise cuts through the codebase, this noble developer has earned their place among the Samurai of Silicon Valley. Their git log tells tales of epic bug battles and feature quests that will be remembered in the scrolls of GitHub for generations to come.`,
          `Legend speaks of ${e.name}, the Code Samurai, whose ${t.toLocaleString()} commits are like cherry blossoms in the wind - beautiful, purposeful, and ever-growing. Through countless pull requests and merge conflicts, they have maintained their honor, following the way of Clean Code with unwavering dedication.`,
        ];
        return f[Math.floor(Math.random() * f.length)];
      }
      if (t >= 10) {
        const f = [
          `Every journey begins with a single commit, and ${e.name} has already taken ${t.toLocaleString()} steps on their path to coding mastery. Like a sprout reaching for the sun, their potential grows with each new line of code, each commit a leaf in their growing garden of development.`,
          `In the vast forest of code, ${e.name} is a promising sapling, their ${t.toLocaleString()} commits marking the beginning of what promises to be a mighty development journey. Watch as they grow, one commit at a time, into a towering presence in the tech ecosystem.`,
        ];
        return f[Math.floor(Math.random() * f.length)];
      }
      const c = [
        `Standing at the threshold of the coding universe, ${e.name} takes their first brave steps with ${t.toLocaleString()} commits. Like an explorer charting unknown territories, they venture forth into the vast expanse of development, each commit a new discovery in their programming journey.`,
        `${e.name} is an intrepid explorer in the world of code, their ${t.toLocaleString()} commits marking the beginning of an exciting adventure. With curiosity as their compass, they're setting out to discover the endless possibilities that await in the realm of development.`,
      ];
      return c[Math.floor(Math.random() * c.length)];
    },
    u = a(),
    d = u.icon;
  return _.jsxs("div", {
    className: `rounded-lg shadow-xl p-6 w-[450px] mx-auto ${o} transition-colors duration-300`,
    children: [
      _.jsxs("div", {
        className: "flex justify-between items-start mb-4",
        children: [
          _.jsx("img", {
            src: e.avatar_url,
            alt: e.name,
            className: "w-24 h-24 rounded-full border-4 border-[#222222]",
          }),
          _.jsx("button", {
            onClick: () => s(!r),
            className: "p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700",
            children: r ? _.jsx(Bx, { size: 20 }) : _.jsx(zx, { size: 20 }),
          }),
        ],
      }),
      _.jsx("h2", { className: "text-2xl font-bold mt-4", children: e.name }),
      _.jsxs("p", { className: "text-gray-600 dark:text-gray-400", children: ["@", e.login] }),
      _.jsx("p", { className: "mt-4", children: e.bio }),
      _.jsxs("div", {
        className: "mt-6 space-y-2",
        children: [
          _.jsxs("p", {
            className: "text-xl font-bold",
            children: [t.toLocaleString(), " Total Commits"],
          }),
          _.jsxs("div", {
            className: `flex items-center gap-2 ${u.color} font-semibold`,
            children: [_.jsx(d, { size: 20 }), _.jsx("span", { children: u.label })],
          }),
          n &&
            _.jsxs("div", {
              className: "flex items-center gap-2 text-orange-500 font-semibold",
              children: [_.jsx(mu, { size: 20 }), _.jsx("span", { children: "Convex Developer" })],
            }),
        ],
      }),
      _.jsxs("div", {
        className: "mt-6 p-4 bg-[#F5F5F5] dark:bg-gray-800 rounded-lg",
        children: [
          _.jsxs("h3", {
            className: `flex items-center gap-2 text-lg font-semibold ${u.color} mb-2`,
            children: [_.jsx(d, { size: 16 }), "The Tale of a ", u.label],
          }),
          _.jsx("p", {
            className: "text-sm italic text-gray-800 dark:text-gray-200",
            children: l(),
          }),
        ],
      }),
      _.jsxs("div", {
        className: "mt-6 space-y-2",
        children: [
          e.location &&
            _.jsxs("div", {
              className: "flex items-center gap-2",
              children: [_.jsx(Dx, { size: 16 }), _.jsx("span", { children: e.location })],
            }),
          e.blog &&
            _.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                _.jsx(jx, { size: 16 }),
                _.jsx("a", {
                  href: e.blog,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-blue-500 hover:underline",
                  children: e.blog,
                }),
              ],
            }),
          e.twitter_username &&
            _.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                _.jsx(yu, { size: 16 }),
                _.jsxs("a", {
                  href: `https://twitter.com/${e.twitter_username}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-blue-500 hover:underline",
                  children: ["@", e.twitter_username],
                }),
              ],
            }),
          _.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              _.jsx(Xm, { size: 16 }),
              _.jsx("a", {
                href: e.html_url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-500 hover:underline",
                children: "GitHub Profile",
              }),
            ],
          }),
        ],
      }),
      _.jsxs("button", {
        onClick: i,
        className:
          "mt-6 w-full flex items-center justify-center gap-2 bg-[#222222] text-white py-2 px-4 rounded-lg hover:bg-[#333333] transition-colors",
        children: [_.jsx(yu, { size: 20 }), "Share on X"],
      }),
      _.jsx(Vx, { profile: e, commits: t, usesConvex: n }),
    ],
  });
}
function Hx() {
  const [e, t] = b.useState(""),
    [n, r] = b.useState([]),
    [s, i] = b.useState(""),
    [o, a] = b.useState(6),
    l = async (x) => {
      const O = (await ne.get(`https://api.github.com/users/${x}/repos`)).data.map(async (L) => {
        try {
          const F = await ne.get(
              `https://raw.githubusercontent.com/${x}/${L.name}/main/package.json`
            ),
            U = { ...F.data.dependencies, ...F.data.devDependencies };
          return Object.keys(U).some((Q) => Q === "convex" || Q.startsWith("@convex/"));
        } catch {
          return !1;
        }
      });
      return (await Promise.all(O)).some((L) => L);
    },
    u = Lw({
      mutationFn: async (x) => {
        const P = x.split("/").pop();
        if (!P) throw new Error("Invalid GitHub URL");
        const R = await ne.get(`https://api.github.com/users/${P}`),
          N = (
            await ne.get(`https://api.github.com/search/commits?q=author:${P}`, {
              headers: { Accept: "application/vnd.github.cloak-preview" },
            })
          ).data.total_count,
          L = await l(P);
        return { profile: R.data, commits: N, usesConvex: L };
      },
      onSuccess: (x) => {
        r((P) => [x, ...P]), t(""), i("");
      },
      onError: () => {
        i("Error fetching GitHub profile. Please check the URL and try again.");
      },
    }),
    d = (x) => {
      if ((x.preventDefault(), !e.includes("github.com"))) {
        i("Please enter a valid GitHub profile URL");
        return;
      }
      u.mutate(e);
    },
    c = () => {
      a((x) => x + 6);
    },
    f = n.slice(0, o),
    y = n.length > o,
    m = n.filter((x) => x.commits >= 1e5),
    v = n.filter((x) => x.commits >= 1e4 && x.commits < 1e5),
    w = n.filter((x) => x.commits >= 5e3 && x.commits < 1e4),
    p = n.filter((x) => x.commits >= 1e3 && x.commits < 5e3),
    h = n.filter((x) => x.commits < 10),
    g = n.filter((x) => x.commits >= 10 && x.commits < 1e3),
    S = n.filter((x) => x.usesConvex),
    k = [
      {
        name: "Overload",
        icon: ty,
        color: "text-purple-600",
        profiles: m,
        description: "100,000+ commits",
      },
      {
        name: "Hacker",
        icon: Gm,
        color: "text-red-600",
        profiles: v,
        description: "10,000+ commits",
      },
      {
        name: "Wizard",
        icon: ey,
        color: "text-blue-600",
        profiles: w,
        description: "5,000+ commits",
      },
      {
        name: "Samurai",
        icon: Zm,
        color: "text-indigo-600",
        profiles: p,
        description: "1,000+ commits",
      },
      {
        name: "Noob",
        icon: Ym,
        color: "text-green-600",
        profiles: g,
        description: "10-999 commits",
      },
      {
        name: "Explorer",
        icon: Jm,
        color: "text-yellow-600",
        profiles: h,
        description: "Less than 10 commits",
      },
      {
        name: "Convex",
        icon: mu,
        color: "text-orange-600",
        profiles: S,
        description: "Uses Convex in their repos",
      },
    ];
  return _.jsx("div", {
    className: "min-h-screen bg-gray-100 py-12 px-4",
    children: _.jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [
        _.jsx("h1", { className: "text-4xl font-bold text-center mb-2", children: "Commit Rank" }),
        _.jsx("p", {
          className: "text-center text-gray-600 mb-2",
          children:
            "Chat with any GitHub public profile and see their ranking. Just paste the GitHub profile URL below.",
        }),
        _.jsxs("div", {
          className: "flex items-center justify-center gap-2 text-sm text-gray-500 mb-8",
          children: [
            "Open Source project built with",
            _.jsxs("a", {
              href: "https://convex.dev",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-black hover:none flex items-center gap-1",
              children: [_.jsx(mu, { size: 16 }), "Convex.dev"],
            }),
            " | ",
            _.jsx("a", {
              href: "https://tanstack.com",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-black hover:none",
              children: "TanStack.com",
            }),
            " | ",
            _.jsx("a", {
              href: "https://bolt.new",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-black hover:none",
              children: "Bolt.new",
            }),
          ],
        }),
        _.jsxs("form", {
          onSubmit: d,
          className: "mb-12",
          children: [
            _.jsxs("div", {
              className: "flex gap-4 max-w-2xl mx-auto",
              children: [
                _.jsxs("div", {
                  className: "flex-1 relative",
                  children: [
                    _.jsx("input", {
                      type: "text",
                      value: e,
                      onChange: (x) => t(x.target.value),
                      placeholder: "Enter GitHub profile URL",
                      className:
                        "w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#222222] focus:border-transparent",
                    }),
                    _.jsx(qx, { className: "absolute right-3 top-2.5 text-gray-400", size: 20 }),
                  ],
                }),
                _.jsx("button", {
                  type: "submit",
                  disabled: u.isPending,
                  className:
                    "px-6 py-2 bg-[#222222] text-white rounded-lg hover:bg-[#333333] disabled:opacity-50",
                  children: u.isPending ? "Loading..." : "Start Ranking",
                }),
              ],
            }),
            s && _.jsx("p", { className: "text-red-500 text-center mt-2", children: s }),
          ],
        }),
        _.jsxs("div", {
          className: "flex gap-8",
          children: [
            _.jsx("div", {
              className: "w-72 flex-shrink-0",
              children: _.jsxs("div", {
                className: "sticky top-4 bg-white rounded-lg shadow-md p-6",
                children: [
                  _.jsx("h2", { className: "text-xl font-bold mb-6", children: "Ranking Levels" }),
                  _.jsx("div", {
                    className: "space-y-6",
                    children: k.map((x) =>
                      _.jsxs(
                        "div",
                        {
                          children: [
                            _.jsxs("div", {
                              className: `flex items-center gap-2 ${x.color} font-semibold mb-2`,
                              children: [
                                _.jsx(x.icon, { size: 20 }),
                                _.jsxs("div", {
                                  children: [
                                    _.jsxs("h3", {
                                      children: [x.name, " (", x.profiles.length, ")"],
                                    }),
                                    _.jsx("p", {
                                      className: "text-xs text-gray-500 font-normal",
                                      children: x.description,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            x.profiles.length > 0 &&
                              _.jsx("div", {
                                className: "pl-7 space-y-2",
                                children: x.profiles.map(({ profile: P }) =>
                                  _.jsxs(
                                    "p",
                                    {
                                      className: "text-sm text-gray-600",
                                      children: ["@", P.login],
                                    },
                                    P.login
                                  )
                                ),
                              }),
                          ],
                        },
                        x.name
                      )
                    ),
                  }),
                ],
              }),
            }),
            _.jsxs("div", {
              className: "flex-1",
              children: [
                _.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                  children: f.map((x, P) =>
                    _.jsx(
                      Qx,
                      { profile: x.profile, commits: x.commits, usesConvex: x.usesConvex },
                      P
                    )
                  ),
                }),
                y &&
                  _.jsx("div", {
                    className: "mt-8 flex justify-center",
                    children: _.jsx("button", {
                      onClick: c,
                      className:
                        "px-6 py-2 bg-[#222222] text-white rounded-lg hover:bg-[#333333] transition-colors",
                      children: "Load More",
                    }),
                  }),
              ],
            }),
          ],
        }),
        _.jsxs("footer", {
          className: "mt-16",
          children: [
            _.jsx("hr", { className: "border-gray-200 mb-6" }),
            _.jsxs("div", {
              className: "text-center text-sm text-gray-500",
              children: [
                _.jsx("p", {
                  className: "mb-4",
                  children: "Database Powered by https://convex.dev",
                }),
                _.jsxs("div", {
                  className: "flex justify-center gap-6",
                  children: [
                    _.jsx("a", {
                      href: "https://twitter.com/convex_dev",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-gray-400 hover:text-[#222222] transition-colors",
                      children: _.jsx(yu, { size: 20 }),
                    }),
                    _.jsx("a", {
                      href: "https://discord.gg/XcRXcWPJGG",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-gray-400 hover:text-[#222222] transition-colors",
                      children: _.jsx($x, { size: 20 }),
                    }),
                    _.jsx("a", {
                      href: "https://github.com/waynesutton/commitrank",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-gray-400 hover:text-[#222222] transition-colors",
                      children: _.jsx(Xm, { size: 20 }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Wx = G0("/")({ component: Hx }),
  Kx = Wx.update({ id: "/", path: "/", getParentRoute: () => Cm }),
  Gx = { IndexRoute: Kx },
  Jx = Cm._addFileChildren(Gx)._addFileTypes(),
  Xx = F0({ routeTree: Jx }),
  Yx = new Cw(),
  Zx = new W1("https://courteous-ostrich-527.convex.cloud");
Vp(document.getElementById("root")).render(
  _.jsx(b.StrictMode, {
    children: _.jsx(G1, {
      client: Zx,
      children: _.jsx(Pw, { client: Yx, children: _.jsx(nw, { router: Xx }) }),
    }),
  })
);
