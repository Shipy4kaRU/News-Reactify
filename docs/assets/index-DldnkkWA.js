function Nh(o, u) {
  for (var s = 0; s < u.length; s++) {
    const a = u[s];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const f in a)
        if (f !== "default" && !(f in o)) {
          const p = Object.getOwnPropertyDescriptor(a, f);
          p &&
            Object.defineProperty(
              o,
              f,
              p.get ? p : { enumerable: !0, get: () => a[f] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(o, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const u = document.createElement("link").relList;
  if (u && u.supports && u.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) a(f);
  new MutationObserver((f) => {
    for (const p of f)
      if (p.type === "childList")
        for (const m of p.addedNodes)
          m.tagName === "LINK" && m.rel === "modulepreload" && a(m);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(f) {
    const p = {};
    return (
      f.integrity && (p.integrity = f.integrity),
      f.referrerPolicy && (p.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (p.credentials = "include")
        : f.crossOrigin === "anonymous"
        ? (p.credentials = "omit")
        : (p.credentials = "same-origin"),
      p
    );
  }
  function a(f) {
    if (f.ep) return;
    f.ep = !0;
    const p = s(f);
    fetch(f.href, p);
  }
})();
function Zu(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")
    ? o.default
    : o;
}
var gu = { exports: {} },
  Hr = {},
  wu = { exports: {} },
  fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ef;
function Th() {
  if (ef) return fe;
  ef = 1;
  var o = Symbol.for("react.element"),
    u = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    p = Symbol.for("react.provider"),
    m = Symbol.for("react.context"),
    w = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    _ = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    N = Symbol.iterator;
  function R(v) {
    return v === null || typeof v != "object"
      ? null
      : ((v = (N && v[N]) || v["@@iterator"]),
        typeof v == "function" ? v : null);
  }
  var I = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    A = Object.assign,
    q = {};
  function V(v, C, Y) {
    (this.props = v),
      (this.context = C),
      (this.refs = q),
      (this.updater = Y || I);
  }
  (V.prototype.isReactComponent = {}),
    (V.prototype.setState = function (v, C) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, v, C, "setState");
    }),
    (V.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    });
  function z() {}
  z.prototype = V.prototype;
  function U(v, C, Y) {
    (this.props = v),
      (this.context = C),
      (this.refs = q),
      (this.updater = Y || I);
  }
  var O = (U.prototype = new z());
  (O.constructor = U), A(O, V.prototype), (O.isPureReactComponent = !0);
  var B = Array.isArray,
    P = Object.prototype.hasOwnProperty,
    H = { current: null },
    Q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(v, C, Y) {
    var ee,
      le = {},
      ue = null,
      ae = null;
    if (C != null)
      for (ee in (C.ref !== void 0 && (ae = C.ref),
      C.key !== void 0 && (ue = "" + C.key),
      C))
        P.call(C, ee) && !Q.hasOwnProperty(ee) && (le[ee] = C[ee]);
    var de = arguments.length - 2;
    if (de === 1) le.children = Y;
    else if (1 < de) {
      for (var xe = Array(de), rt = 0; rt < de; rt++)
        xe[rt] = arguments[rt + 2];
      le.children = xe;
    }
    if (v && v.defaultProps)
      for (ee in ((de = v.defaultProps), de))
        le[ee] === void 0 && (le[ee] = de[ee]);
    return {
      $$typeof: o,
      type: v,
      key: ue,
      ref: ae,
      props: le,
      _owner: H.current,
    };
  }
  function ce(v, C) {
    return {
      $$typeof: o,
      type: v.type,
      key: C,
      ref: v.ref,
      props: v.props,
      _owner: v._owner,
    };
  }
  function re(v) {
    return typeof v == "object" && v !== null && v.$$typeof === o;
  }
  function se(v) {
    var C = { "=": "=0", ":": "=2" };
    return (
      "$" +
      v.replace(/[=:]/g, function (Y) {
        return C[Y];
      })
    );
  }
  var ie = /\/+/g;
  function he(v, C) {
    return typeof v == "object" && v !== null && v.key != null
      ? se("" + v.key)
      : C.toString(36);
  }
  function ve(v, C, Y, ee, le) {
    var ue = typeof v;
    (ue === "undefined" || ue === "boolean") && (v = null);
    var ae = !1;
    if (v === null) ae = !0;
    else
      switch (ue) {
        case "string":
        case "number":
          ae = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case o:
            case u:
              ae = !0;
          }
      }
    if (ae)
      return (
        (ae = v),
        (le = le(ae)),
        (v = ee === "" ? "." + he(ae, 0) : ee),
        B(le)
          ? ((Y = ""),
            v != null && (Y = v.replace(ie, "$&/") + "/"),
            ve(le, C, Y, "", function (rt) {
              return rt;
            }))
          : le != null &&
            (re(le) &&
              (le = ce(
                le,
                Y +
                  (!le.key || (ae && ae.key === le.key)
                    ? ""
                    : ("" + le.key).replace(ie, "$&/") + "/") +
                  v
              )),
            C.push(le)),
        1
      );
    if (((ae = 0), (ee = ee === "" ? "." : ee + ":"), B(v)))
      for (var de = 0; de < v.length; de++) {
        ue = v[de];
        var xe = ee + he(ue, de);
        ae += ve(ue, C, Y, xe, le);
      }
    else if (((xe = R(v)), typeof xe == "function"))
      for (v = xe.call(v), de = 0; !(ue = v.next()).done; )
        (ue = ue.value), (xe = ee + he(ue, de++)), (ae += ve(ue, C, Y, xe, le));
    else if (ue === "object")
      throw (
        ((C = String(v)),
        Error(
          "Objects are not valid as a React child (found: " +
            (C === "[object Object]"
              ? "object with keys {" + Object.keys(v).join(", ") + "}"
              : C) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return ae;
  }
  function me(v, C, Y) {
    if (v == null) return v;
    var ee = [],
      le = 0;
    return (
      ve(v, ee, "", "", function (ue) {
        return C.call(Y, ue, le++);
      }),
      ee
    );
  }
  function Ne(v) {
    if (v._status === -1) {
      var C = v._result;
      (C = C()),
        C.then(
          function (Y) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = Y));
          },
          function (Y) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = Y));
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = C));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var we = { current: null },
    $ = { transition: null },
    D = {
      ReactCurrentDispatcher: we,
      ReactCurrentBatchConfig: $,
      ReactCurrentOwner: H,
    };
  function T() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (fe.Children = {
      map: me,
      forEach: function (v, C, Y) {
        me(
          v,
          function () {
            C.apply(this, arguments);
          },
          Y
        );
      },
      count: function (v) {
        var C = 0;
        return (
          me(v, function () {
            C++;
          }),
          C
        );
      },
      toArray: function (v) {
        return (
          me(v, function (C) {
            return C;
          }) || []
        );
      },
      only: function (v) {
        if (!re(v))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return v;
      },
    }),
    (fe.Component = V),
    (fe.Fragment = s),
    (fe.Profiler = f),
    (fe.PureComponent = U),
    (fe.StrictMode = a),
    (fe.Suspense = g),
    (fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
    (fe.act = T),
    (fe.cloneElement = function (v, C, Y) {
      if (v == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            v +
            "."
        );
      var ee = A({}, v.props),
        le = v.key,
        ue = v.ref,
        ae = v._owner;
      if (C != null) {
        if (
          (C.ref !== void 0 && ((ue = C.ref), (ae = H.current)),
          C.key !== void 0 && (le = "" + C.key),
          v.type && v.type.defaultProps)
        )
          var de = v.type.defaultProps;
        for (xe in C)
          P.call(C, xe) &&
            !Q.hasOwnProperty(xe) &&
            (ee[xe] = C[xe] === void 0 && de !== void 0 ? de[xe] : C[xe]);
      }
      var xe = arguments.length - 2;
      if (xe === 1) ee.children = Y;
      else if (1 < xe) {
        de = Array(xe);
        for (var rt = 0; rt < xe; rt++) de[rt] = arguments[rt + 2];
        ee.children = de;
      }
      return {
        $$typeof: o,
        type: v.type,
        key: le,
        ref: ue,
        props: ee,
        _owner: ae,
      };
    }),
    (fe.createContext = function (v) {
      return (
        (v = {
          $$typeof: m,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (v.Provider = { $$typeof: p, _context: v }),
        (v.Consumer = v)
      );
    }),
    (fe.createElement = W),
    (fe.createFactory = function (v) {
      var C = W.bind(null, v);
      return (C.type = v), C;
    }),
    (fe.createRef = function () {
      return { current: null };
    }),
    (fe.forwardRef = function (v) {
      return { $$typeof: w, render: v };
    }),
    (fe.isValidElement = re),
    (fe.lazy = function (v) {
      return { $$typeof: x, _payload: { _status: -1, _result: v }, _init: Ne };
    }),
    (fe.memo = function (v, C) {
      return { $$typeof: _, type: v, compare: C === void 0 ? null : C };
    }),
    (fe.startTransition = function (v) {
      var C = $.transition;
      $.transition = {};
      try {
        v();
      } finally {
        $.transition = C;
      }
    }),
    (fe.unstable_act = T),
    (fe.useCallback = function (v, C) {
      return we.current.useCallback(v, C);
    }),
    (fe.useContext = function (v) {
      return we.current.useContext(v);
    }),
    (fe.useDebugValue = function () {}),
    (fe.useDeferredValue = function (v) {
      return we.current.useDeferredValue(v);
    }),
    (fe.useEffect = function (v, C) {
      return we.current.useEffect(v, C);
    }),
    (fe.useId = function () {
      return we.current.useId();
    }),
    (fe.useImperativeHandle = function (v, C, Y) {
      return we.current.useImperativeHandle(v, C, Y);
    }),
    (fe.useInsertionEffect = function (v, C) {
      return we.current.useInsertionEffect(v, C);
    }),
    (fe.useLayoutEffect = function (v, C) {
      return we.current.useLayoutEffect(v, C);
    }),
    (fe.useMemo = function (v, C) {
      return we.current.useMemo(v, C);
    }),
    (fe.useReducer = function (v, C, Y) {
      return we.current.useReducer(v, C, Y);
    }),
    (fe.useRef = function (v) {
      return we.current.useRef(v);
    }),
    (fe.useState = function (v) {
      return we.current.useState(v);
    }),
    (fe.useSyncExternalStore = function (v, C, Y) {
      return we.current.useSyncExternalStore(v, C, Y);
    }),
    (fe.useTransition = function () {
      return we.current.useTransition();
    }),
    (fe.version = "18.3.1"),
    fe
  );
}
var tf;
function gi() {
  return tf || ((tf = 1), (wu.exports = Th())), wu.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nf;
function Rh() {
  if (nf) return Hr;
  nf = 1;
  var o = gi(),
    u = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(w, g, _) {
    var x,
      N = {},
      R = null,
      I = null;
    _ !== void 0 && (R = "" + _),
      g.key !== void 0 && (R = "" + g.key),
      g.ref !== void 0 && (I = g.ref);
    for (x in g) a.call(g, x) && !p.hasOwnProperty(x) && (N[x] = g[x]);
    if (w && w.defaultProps)
      for (x in ((g = w.defaultProps), g)) N[x] === void 0 && (N[x] = g[x]);
    return {
      $$typeof: u,
      type: w,
      key: R,
      ref: I,
      props: N,
      _owner: f.current,
    };
  }
  return (Hr.Fragment = s), (Hr.jsx = m), (Hr.jsxs = m), Hr;
}
var rf;
function Oh() {
  return rf || ((rf = 1), (gu.exports = Rh())), gu.exports;
}
var b = Oh(),
  ui = {},
  Su = { exports: {} },
  tt = {},
  _u = { exports: {} },
  xu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var of;
function Lh() {
  return (
    of ||
      ((of = 1),
      (function (o) {
        function u($, D) {
          var T = $.length;
          $.push(D);
          e: for (; 0 < T; ) {
            var v = (T - 1) >>> 1,
              C = $[v];
            if (0 < f(C, D)) ($[v] = D), ($[T] = C), (T = v);
            else break e;
          }
        }
        function s($) {
          return $.length === 0 ? null : $[0];
        }
        function a($) {
          if ($.length === 0) return null;
          var D = $[0],
            T = $.pop();
          if (T !== D) {
            $[0] = T;
            e: for (var v = 0, C = $.length, Y = C >>> 1; v < Y; ) {
              var ee = 2 * (v + 1) - 1,
                le = $[ee],
                ue = ee + 1,
                ae = $[ue];
              if (0 > f(le, T))
                ue < C && 0 > f(ae, le)
                  ? (($[v] = ae), ($[ue] = T), (v = ue))
                  : (($[v] = le), ($[ee] = T), (v = ee));
              else if (ue < C && 0 > f(ae, T))
                ($[v] = ae), ($[ue] = T), (v = ue);
              else break e;
            }
          }
          return D;
        }
        function f($, D) {
          var T = $.sortIndex - D.sortIndex;
          return T !== 0 ? T : $.id - D.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var p = performance;
          o.unstable_now = function () {
            return p.now();
          };
        } else {
          var m = Date,
            w = m.now();
          o.unstable_now = function () {
            return m.now() - w;
          };
        }
        var g = [],
          _ = [],
          x = 1,
          N = null,
          R = 3,
          I = !1,
          A = !1,
          q = !1,
          V = typeof setTimeout == "function" ? setTimeout : null,
          z = typeof clearTimeout == "function" ? clearTimeout : null,
          U = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function O($) {
          for (var D = s(_); D !== null; ) {
            if (D.callback === null) a(_);
            else if (D.startTime <= $)
              a(_), (D.sortIndex = D.expirationTime), u(g, D);
            else break;
            D = s(_);
          }
        }
        function B($) {
          if (((q = !1), O($), !A))
            if (s(g) !== null) (A = !0), Ne(P);
            else {
              var D = s(_);
              D !== null && we(B, D.startTime - $);
            }
        }
        function P($, D) {
          (A = !1), q && ((q = !1), z(W), (W = -1)), (I = !0);
          var T = R;
          try {
            for (
              O(D), N = s(g);
              N !== null && (!(N.expirationTime > D) || ($ && !se()));

            ) {
              var v = N.callback;
              if (typeof v == "function") {
                (N.callback = null), (R = N.priorityLevel);
                var C = v(N.expirationTime <= D);
                (D = o.unstable_now()),
                  typeof C == "function"
                    ? (N.callback = C)
                    : N === s(g) && a(g),
                  O(D);
              } else a(g);
              N = s(g);
            }
            if (N !== null) var Y = !0;
            else {
              var ee = s(_);
              ee !== null && we(B, ee.startTime - D), (Y = !1);
            }
            return Y;
          } finally {
            (N = null), (R = T), (I = !1);
          }
        }
        var H = !1,
          Q = null,
          W = -1,
          ce = 5,
          re = -1;
        function se() {
          return !(o.unstable_now() - re < ce);
        }
        function ie() {
          if (Q !== null) {
            var $ = o.unstable_now();
            re = $;
            var D = !0;
            try {
              D = Q(!0, $);
            } finally {
              D ? he() : ((H = !1), (Q = null));
            }
          } else H = !1;
        }
        var he;
        if (typeof U == "function")
          he = function () {
            U(ie);
          };
        else if (typeof MessageChannel < "u") {
          var ve = new MessageChannel(),
            me = ve.port2;
          (ve.port1.onmessage = ie),
            (he = function () {
              me.postMessage(null);
            });
        } else
          he = function () {
            V(ie, 0);
          };
        function Ne($) {
          (Q = $), H || ((H = !0), he());
        }
        function we($, D) {
          W = V(function () {
            $(o.unstable_now());
          }, D);
        }
        (o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function ($) {
            $.callback = null;
          }),
          (o.unstable_continueExecution = function () {
            A || I || ((A = !0), Ne(P));
          }),
          (o.unstable_forceFrameRate = function ($) {
            0 > $ || 125 < $
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ce = 0 < $ ? Math.floor(1e3 / $) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (o.unstable_getFirstCallbackNode = function () {
            return s(g);
          }),
          (o.unstable_next = function ($) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var D = 3;
                break;
              default:
                D = R;
            }
            var T = R;
            R = D;
            try {
              return $();
            } finally {
              R = T;
            }
          }),
          (o.unstable_pauseExecution = function () {}),
          (o.unstable_requestPaint = function () {}),
          (o.unstable_runWithPriority = function ($, D) {
            switch ($) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                $ = 3;
            }
            var T = R;
            R = $;
            try {
              return D();
            } finally {
              R = T;
            }
          }),
          (o.unstable_scheduleCallback = function ($, D, T) {
            var v = o.unstable_now();
            switch (
              (typeof T == "object" && T !== null
                ? ((T = T.delay),
                  (T = typeof T == "number" && 0 < T ? v + T : v))
                : (T = v),
              $)
            ) {
              case 1:
                var C = -1;
                break;
              case 2:
                C = 250;
                break;
              case 5:
                C = 1073741823;
                break;
              case 4:
                C = 1e4;
                break;
              default:
                C = 5e3;
            }
            return (
              (C = T + C),
              ($ = {
                id: x++,
                callback: D,
                priorityLevel: $,
                startTime: T,
                expirationTime: C,
                sortIndex: -1,
              }),
              T > v
                ? (($.sortIndex = T),
                  u(_, $),
                  s(g) === null &&
                    $ === s(_) &&
                    (q ? (z(W), (W = -1)) : (q = !0), we(B, T - v)))
                : (($.sortIndex = C), u(g, $), A || I || ((A = !0), Ne(P))),
              $
            );
          }),
          (o.unstable_shouldYield = se),
          (o.unstable_wrapCallback = function ($) {
            var D = R;
            return function () {
              var T = R;
              R = D;
              try {
                return $.apply(this, arguments);
              } finally {
                R = T;
              }
            };
          });
      })(xu)),
    xu
  );
}
var lf;
function zh() {
  return lf || ((lf = 1), (_u.exports = Lh())), _u.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uf;
function jh() {
  if (uf) return tt;
  uf = 1;
  var o = gi(),
    u = zh();
  function s(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
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
  var a = new Set(),
    f = {};
  function p(e, t) {
    m(e, t), m(e + "Capture", t);
  }
  function m(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var w = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    g = Object.prototype.hasOwnProperty,
    _ =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    x = {},
    N = {};
  function R(e) {
    return g.call(N, e)
      ? !0
      : g.call(x, e)
      ? !1
      : _.test(e)
      ? (N[e] = !0)
      : ((x[e] = !0), !1);
  }
  function I(e, t, n, r) {
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
  function A(e, t, n, r) {
    if (t === null || typeof t > "u" || I(e, t, n, r)) return !0;
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
  function q(e, t, n, r, i, l, c) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = l),
      (this.removeEmptyString = c);
  }
  var V = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      V[e] = new q(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      V[t] = new q(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      V[e] = new q(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      V[e] = new q(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        V[e] = new q(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      V[e] = new q(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      V[e] = new q(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      V[e] = new q(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      V[e] = new q(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var z = /[\-:]([a-z])/g;
  function U(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(z, U);
      V[t] = new q(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(z, U);
        V[t] = new q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(z, U);
      V[t] = new q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      V[e] = new q(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (V.xlinkHref = new q(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      V[e] = new q(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function O(e, t, n, r) {
    var i = V.hasOwnProperty(t) ? V[t] : null;
    (i !== null
      ? i.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (A(t, n, i, r) && (n = null),
      r || i === null
        ? R(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var B = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    P = Symbol.for("react.element"),
    H = Symbol.for("react.portal"),
    Q = Symbol.for("react.fragment"),
    W = Symbol.for("react.strict_mode"),
    ce = Symbol.for("react.profiler"),
    re = Symbol.for("react.provider"),
    se = Symbol.for("react.context"),
    ie = Symbol.for("react.forward_ref"),
    he = Symbol.for("react.suspense"),
    ve = Symbol.for("react.suspense_list"),
    me = Symbol.for("react.memo"),
    Ne = Symbol.for("react.lazy"),
    we = Symbol.for("react.offscreen"),
    $ = Symbol.iterator;
  function D(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = ($ && e[$]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var T = Object.assign,
    v;
  function C(e) {
    if (v === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        v = (t && t[1]) || "";
      }
    return (
      `
` +
      v +
      e
    );
  }
  var Y = !1;
  function ee(e, t) {
    if (!e || Y) return "";
    Y = !0;
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
          } catch (k) {
            var r = k;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (k) {
            r = k;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (k) {
          r = k;
        }
        e();
      }
    } catch (k) {
      if (k && r && typeof k.stack == "string") {
        for (
          var i = k.stack.split(`
`),
            l = r.stack.split(`
`),
            c = i.length - 1,
            d = l.length - 1;
          1 <= c && 0 <= d && i[c] !== l[d];

        )
          d--;
        for (; 1 <= c && 0 <= d; c--, d--)
          if (i[c] !== l[d]) {
            if (c !== 1 || d !== 1)
              do
                if ((c--, d--, 0 > d || i[c] !== l[d])) {
                  var h =
                    `
` + i[c].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      h.includes("<anonymous>") &&
                      (h = h.replace("<anonymous>", e.displayName)),
                    h
                  );
                }
              while (1 <= c && 0 <= d);
            break;
          }
      }
    } finally {
      (Y = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? C(e) : "";
  }
  function le(e) {
    switch (e.tag) {
      case 5:
        return C(e.type);
      case 16:
        return C("Lazy");
      case 13:
        return C("Suspense");
      case 19:
        return C("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ee(e.type, !1)), e;
      case 11:
        return (e = ee(e.type.render, !1)), e;
      case 1:
        return (e = ee(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ue(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Q:
        return "Fragment";
      case H:
        return "Portal";
      case ce:
        return "Profiler";
      case W:
        return "StrictMode";
      case he:
        return "Suspense";
      case ve:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case se:
          return (e.displayName || "Context") + ".Consumer";
        case re:
          return (e._context.displayName || "Context") + ".Provider";
        case ie:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case me:
          return (
            (t = e.displayName || null), t !== null ? t : ue(e.type) || "Memo"
          );
        case Ne:
          (t = e._payload), (e = e._init);
          try {
            return ue(e(t));
          } catch {}
      }
    return null;
  }
  function ae(e) {
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
        return ue(t);
      case 8:
        return t === W ? "StrictMode" : "Mode";
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
  function de(e) {
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
  function xe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function rt(e) {
    var t = xe(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        l = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (c) {
            (r = "" + c), l.call(this, c);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (c) {
            r = "" + c;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Gr(e) {
    e._valueTracker || (e._valueTracker = rt(e));
  }
  function ls(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = xe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Zr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ci(e, t) {
    var n = t.checked;
    return T({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function us(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = de(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function ss(e, t) {
    (t = t.checked), t != null && O(e, "checked", t, !1);
  }
  function Pi(e, t) {
    ss(e, t);
    var n = de(t.value),
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
      ? Ni(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ni(e, t.type, de(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function as(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Ni(e, t, n) {
    (t !== "number" || Zr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var nr = Array.isArray;
  function Rn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + de(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ti(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return T({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function cs(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(s(92));
        if (nr(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: de(n) };
  }
  function fs(e, t) {
    var n = de(t.value),
      r = de(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function ds(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function ps(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ri(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ps(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Jr,
    hs = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, i);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Jr = Jr || document.createElement("div"),
            Jr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Jr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function rr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var or = {
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
    Ld = ["Webkit", "ms", "Moz", "O"];
  Object.keys(or).forEach(function (e) {
    Ld.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (or[t] = or[e]);
    });
  });
  function vs(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (or.hasOwnProperty(e) && or[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function ms(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          i = vs(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
      }
  }
  var zd = T(
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
  function Oi(e, t) {
    if (t) {
      if (zd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Li(e, t) {
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
  var zi = null;
  function ji(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Mi = null,
    On = null,
    Ln = null;
  function ys(e) {
    if ((e = Pr(e))) {
      if (typeof Mi != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = xo(t)), Mi(e.stateNode, e.type, t));
    }
  }
  function gs(e) {
    On ? (Ln ? Ln.push(e) : (Ln = [e])) : (On = e);
  }
  function ws() {
    if (On) {
      var e = On,
        t = Ln;
      if (((Ln = On = null), ys(e), t)) for (e = 0; e < t.length; e++) ys(t[e]);
    }
  }
  function Ss(e, t) {
    return e(t);
  }
  function _s() {}
  var Di = !1;
  function xs(e, t, n) {
    if (Di) return e(t, n);
    Di = !0;
    try {
      return Ss(e, t, n);
    } finally {
      (Di = !1), (On !== null || Ln !== null) && (_s(), ws());
    }
  }
  function ir(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = xo(n);
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
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var Ii = !1;
  if (w)
    try {
      var lr = {};
      Object.defineProperty(lr, "passive", {
        get: function () {
          Ii = !0;
        },
      }),
        window.addEventListener("test", lr, lr),
        window.removeEventListener("test", lr, lr);
    } catch {
      Ii = !1;
    }
  function jd(e, t, n, r, i, l, c, d, h) {
    var k = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, k);
    } catch (j) {
      this.onError(j);
    }
  }
  var ur = !1,
    br = null,
    eo = !1,
    Ai = null,
    Md = {
      onError: function (e) {
        (ur = !0), (br = e);
      },
    };
  function Dd(e, t, n, r, i, l, c, d, h) {
    (ur = !1), (br = null), jd.apply(Md, arguments);
  }
  function Id(e, t, n, r, i, l, c, d, h) {
    if ((Dd.apply(this, arguments), ur)) {
      if (ur) {
        var k = br;
        (ur = !1), (br = null);
      } else throw Error(s(198));
      eo || ((eo = !0), (Ai = k));
    }
  }
  function cn(e) {
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
  function Es(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function ks(e) {
    if (cn(e) !== e) throw Error(s(188));
  }
  function Ad(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = cn(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var l = i.alternate;
      if (l === null) {
        if (((r = i.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === l.child) {
        for (l = i.child; l; ) {
          if (l === n) return ks(i), e;
          if (l === r) return ks(i), t;
          l = l.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) (n = i), (r = l);
      else {
        for (var c = !1, d = i.child; d; ) {
          if (d === n) {
            (c = !0), (n = i), (r = l);
            break;
          }
          if (d === r) {
            (c = !0), (r = i), (n = l);
            break;
          }
          d = d.sibling;
        }
        if (!c) {
          for (d = l.child; d; ) {
            if (d === n) {
              (c = !0), (n = l), (r = i);
              break;
            }
            if (d === r) {
              (c = !0), (r = l), (n = i);
              break;
            }
            d = d.sibling;
          }
          if (!c) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function Cs(e) {
    return (e = Ad(e)), e !== null ? Ps(e) : null;
  }
  function Ps(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ps(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ns = u.unstable_scheduleCallback,
    Ts = u.unstable_cancelCallback,
    Fd = u.unstable_shouldYield,
    $d = u.unstable_requestPaint,
    Le = u.unstable_now,
    Ud = u.unstable_getCurrentPriorityLevel,
    Fi = u.unstable_ImmediatePriority,
    Rs = u.unstable_UserBlockingPriority,
    to = u.unstable_NormalPriority,
    Hd = u.unstable_LowPriority,
    Os = u.unstable_IdlePriority,
    no = null,
    Pt = null;
  function Bd(e) {
    if (Pt && typeof Pt.onCommitFiberRoot == "function")
      try {
        Pt.onCommitFiberRoot(no, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var gt = Math.clz32 ? Math.clz32 : Qd,
    Wd = Math.log,
    Vd = Math.LN2;
  function Qd(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Wd(e) / Vd) | 0)) | 0;
  }
  var ro = 64,
    oo = 4194304;
  function sr(e) {
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
  function io(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = e.suspendedLanes,
      l = e.pingedLanes,
      c = n & 268435455;
    if (c !== 0) {
      var d = c & ~i;
      d !== 0 ? (r = sr(d)) : ((l &= c), l !== 0 && (r = sr(l)));
    } else (c = n & ~i), c !== 0 ? (r = sr(c)) : l !== 0 && (r = sr(l));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & i) &&
      ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - gt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
  }
  function Kd(e, t) {
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
  function qd(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        i = e.expirationTimes,
        l = e.pendingLanes;
      0 < l;

    ) {
      var c = 31 - gt(l),
        d = 1 << c,
        h = i[c];
      h === -1
        ? (!(d & n) || d & r) && (i[c] = Kd(d, t))
        : h <= t && (e.expiredLanes |= d),
        (l &= ~d);
    }
  }
  function $i(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Ls() {
    var e = ro;
    return (ro <<= 1), !(ro & 4194240) && (ro = 64), e;
  }
  function Ui(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ar(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - gt(t)),
      (e[t] = n);
  }
  function Yd(e, t) {
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
      var i = 31 - gt(n),
        l = 1 << i;
      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
    }
  }
  function Hi(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - gt(n),
        i = 1 << r;
      (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
  }
  var _e = 0;
  function zs(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var js,
    Bi,
    Ms,
    Ds,
    Is,
    Wi = !1,
    lo = [],
    Bt = null,
    Wt = null,
    Vt = null,
    cr = new Map(),
    fr = new Map(),
    Qt = [],
    Xd =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function As(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Bt = null;
        break;
      case "dragenter":
      case "dragleave":
        Wt = null;
        break;
      case "mouseover":
      case "mouseout":
        Vt = null;
        break;
      case "pointerover":
      case "pointerout":
        cr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        fr.delete(t.pointerId);
    }
  }
  function dr(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: l,
          targetContainers: [i],
        }),
        t !== null && ((t = Pr(t)), t !== null && Bi(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function Gd(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return (Bt = dr(Bt, e, t, n, r, i)), !0;
      case "dragenter":
        return (Wt = dr(Wt, e, t, n, r, i)), !0;
      case "mouseover":
        return (Vt = dr(Vt, e, t, n, r, i)), !0;
      case "pointerover":
        var l = i.pointerId;
        return cr.set(l, dr(cr.get(l) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return (
          (l = i.pointerId), fr.set(l, dr(fr.get(l) || null, e, t, n, r, i)), !0
        );
    }
    return !1;
  }
  function Fs(e) {
    var t = fn(e.target);
    if (t !== null) {
      var n = cn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Es(n)), t !== null)) {
            (e.blockedOn = t),
              Is(e.priority, function () {
                Ms(n);
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
  function uo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Qi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (zi = r), n.target.dispatchEvent(r), (zi = null);
      } else return (t = Pr(n)), t !== null && Bi(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function $s(e, t, n) {
    uo(e) && n.delete(t);
  }
  function Zd() {
    (Wi = !1),
      Bt !== null && uo(Bt) && (Bt = null),
      Wt !== null && uo(Wt) && (Wt = null),
      Vt !== null && uo(Vt) && (Vt = null),
      cr.forEach($s),
      fr.forEach($s);
  }
  function pr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Wi ||
        ((Wi = !0),
        u.unstable_scheduleCallback(u.unstable_NormalPriority, Zd)));
  }
  function hr(e) {
    function t(i) {
      return pr(i, e);
    }
    if (0 < lo.length) {
      pr(lo[0], e);
      for (var n = 1; n < lo.length; n++) {
        var r = lo[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Bt !== null && pr(Bt, e),
        Wt !== null && pr(Wt, e),
        Vt !== null && pr(Vt, e),
        cr.forEach(t),
        fr.forEach(t),
        n = 0;
      n < Qt.length;
      n++
    )
      (r = Qt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); )
      Fs(n), n.blockedOn === null && Qt.shift();
  }
  var zn = B.ReactCurrentBatchConfig,
    so = !0;
  function Jd(e, t, n, r) {
    var i = _e,
      l = zn.transition;
    zn.transition = null;
    try {
      (_e = 1), Vi(e, t, n, r);
    } finally {
      (_e = i), (zn.transition = l);
    }
  }
  function bd(e, t, n, r) {
    var i = _e,
      l = zn.transition;
    zn.transition = null;
    try {
      (_e = 4), Vi(e, t, n, r);
    } finally {
      (_e = i), (zn.transition = l);
    }
  }
  function Vi(e, t, n, r) {
    if (so) {
      var i = Qi(e, t, n, r);
      if (i === null) sl(e, t, r, ao, n), As(e, r);
      else if (Gd(i, e, t, n, r)) r.stopPropagation();
      else if ((As(e, r), t & 4 && -1 < Xd.indexOf(e))) {
        for (; i !== null; ) {
          var l = Pr(i);
          if (
            (l !== null && js(l),
            (l = Qi(e, t, n, r)),
            l === null && sl(e, t, r, ao, n),
            l === i)
          )
            break;
          i = l;
        }
        i !== null && r.stopPropagation();
      } else sl(e, t, r, null, n);
    }
  }
  var ao = null;
  function Qi(e, t, n, r) {
    if (((ao = null), (e = ji(r)), (e = fn(e)), e !== null))
      if (((t = cn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Es(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (ao = e), null;
  }
  function Us(e) {
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
        switch (Ud()) {
          case Fi:
            return 1;
          case Rs:
            return 4;
          case to:
          case Hd:
            return 16;
          case Os:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Kt = null,
    Ki = null,
    co = null;
  function Hs() {
    if (co) return co;
    var e,
      t = Ki,
      n = t.length,
      r,
      i = "value" in Kt ? Kt.value : Kt.textContent,
      l = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var c = n - e;
    for (r = 1; r <= c && t[n - r] === i[l - r]; r++);
    return (co = i.slice(e, 1 < r ? 1 - r : void 0));
  }
  function fo(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function po() {
    return !0;
  }
  function Bs() {
    return !1;
  }
  function ot(e) {
    function t(n, r, i, l, c) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = r),
        (this.nativeEvent = l),
        (this.target = c),
        (this.currentTarget = null);
      for (var d in e)
        e.hasOwnProperty(d) && ((n = e[d]), (this[d] = n ? n(l) : l[d]));
      return (
        (this.isDefaultPrevented = (
          l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
        )
          ? po
          : Bs),
        (this.isPropagationStopped = Bs),
        this
      );
    }
    return (
      T(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = po));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = po));
        },
        persist: function () {},
        isPersistent: po,
      }),
      t
    );
  }
  var jn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    qi = ot(jn),
    vr = T({}, jn, { view: 0, detail: 0 }),
    ep = ot(vr),
    Yi,
    Xi,
    mr,
    ho = T({}, vr, {
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
      getModifierState: Zi,
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
          : (e !== mr &&
              (mr && e.type === "mousemove"
                ? ((Yi = e.screenX - mr.screenX), (Xi = e.screenY - mr.screenY))
                : (Xi = Yi = 0),
              (mr = e)),
            Yi);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Xi;
      },
    }),
    Ws = ot(ho),
    tp = T({}, ho, { dataTransfer: 0 }),
    np = ot(tp),
    rp = T({}, vr, { relatedTarget: 0 }),
    Gi = ot(rp),
    op = T({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ip = ot(op),
    lp = T({}, jn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    up = ot(lp),
    sp = T({}, jn, { data: 0 }),
    Vs = ot(sp),
    ap = {
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
    cp = {
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
    fp = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function dp(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = fp[e])
      ? !!t[e]
      : !1;
  }
  function Zi() {
    return dp;
  }
  var pp = T({}, vr, {
      key: function (e) {
        if (e.key) {
          var t = ap[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = fo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? cp[e.keyCode] || "Unidentified"
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
      getModifierState: Zi,
      charCode: function (e) {
        return e.type === "keypress" ? fo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? fo(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    hp = ot(pp),
    vp = T({}, ho, {
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
    Qs = ot(vp),
    mp = T({}, vr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zi,
    }),
    yp = ot(mp),
    gp = T({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    wp = ot(gp),
    Sp = T({}, ho, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
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
    _p = ot(Sp),
    xp = [9, 13, 27, 32],
    Ji = w && "CompositionEvent" in window,
    yr = null;
  w && "documentMode" in document && (yr = document.documentMode);
  var Ep = w && "TextEvent" in window && !yr,
    Ks = w && (!Ji || (yr && 8 < yr && 11 >= yr)),
    qs = " ",
    Ys = !1;
  function Xs(e, t) {
    switch (e) {
      case "keyup":
        return xp.indexOf(t.keyCode) !== -1;
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
  function Gs(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Mn = !1;
  function kp(e, t) {
    switch (e) {
      case "compositionend":
        return Gs(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ys = !0), qs);
      case "textInput":
        return (e = t.data), e === qs && Ys ? null : e;
      default:
        return null;
    }
  }
  function Cp(e, t) {
    if (Mn)
      return e === "compositionend" || (!Ji && Xs(e, t))
        ? ((e = Hs()), (co = Ki = Kt = null), (Mn = !1), e)
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
        return Ks && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Pp = {
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
  function Zs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Pp[e.type] : t === "textarea";
  }
  function Js(e, t, n, r) {
    gs(r),
      (t = wo(t, "onChange")),
      0 < t.length &&
        ((n = new qi("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var gr = null,
    wr = null;
  function Np(e) {
    ma(e, 0);
  }
  function vo(e) {
    var t = $n(e);
    if (ls(t)) return e;
  }
  function Tp(e, t) {
    if (e === "change") return t;
  }
  var bs = !1;
  if (w) {
    var bi;
    if (w) {
      var el = "oninput" in document;
      if (!el) {
        var ea = document.createElement("div");
        ea.setAttribute("oninput", "return;"),
          (el = typeof ea.oninput == "function");
      }
      bi = el;
    } else bi = !1;
    bs = bi && (!document.documentMode || 9 < document.documentMode);
  }
  function ta() {
    gr && (gr.detachEvent("onpropertychange", na), (wr = gr = null));
  }
  function na(e) {
    if (e.propertyName === "value" && vo(wr)) {
      var t = [];
      Js(t, wr, e, ji(e)), xs(Np, t);
    }
  }
  function Rp(e, t, n) {
    e === "focusin"
      ? (ta(), (gr = t), (wr = n), gr.attachEvent("onpropertychange", na))
      : e === "focusout" && ta();
  }
  function Op(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return vo(wr);
  }
  function Lp(e, t) {
    if (e === "click") return vo(t);
  }
  function zp(e, t) {
    if (e === "input" || e === "change") return vo(t);
  }
  function jp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var wt = typeof Object.is == "function" ? Object.is : jp;
  function Sr(e, t) {
    if (wt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!g.call(t, i) || !wt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function ra(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function oa(e, t) {
    var n = ra(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
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
      n = ra(n);
    }
  }
  function ia(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? ia(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function la() {
    for (var e = window, t = Zr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Zr(e.document);
    }
    return t;
  }
  function tl(e) {
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
  function Mp(e) {
    var t = la(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      ia(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && tl(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = n.textContent.length,
            l = Math.min(r.start, i);
          (r = r.end === void 0 ? l : Math.min(r.end, i)),
            !e.extend && l > r && ((i = r), (r = l), (l = i)),
            (i = oa(n, l));
          var c = oa(n, r);
          i &&
            c &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== c.node ||
              e.focusOffset !== c.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            l > r
              ? (e.addRange(t), e.extend(c.node, c.offset))
              : (t.setEnd(c.node, c.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Dp = w && "documentMode" in document && 11 >= document.documentMode,
    Dn = null,
    nl = null,
    _r = null,
    rl = !1;
  function ua(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    rl ||
      Dn == null ||
      Dn !== Zr(r) ||
      ((r = Dn),
      "selectionStart" in r && tl(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (_r && Sr(_r, r)) ||
        ((_r = r),
        (r = wo(nl, "onSelect")),
        0 < r.length &&
          ((t = new qi("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Dn))));
  }
  function mo(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var In = {
      animationend: mo("Animation", "AnimationEnd"),
      animationiteration: mo("Animation", "AnimationIteration"),
      animationstart: mo("Animation", "AnimationStart"),
      transitionend: mo("Transition", "TransitionEnd"),
    },
    ol = {},
    sa = {};
  w &&
    ((sa = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete In.animationend.animation,
      delete In.animationiteration.animation,
      delete In.animationstart.animation),
    "TransitionEvent" in window || delete In.transitionend.transition);
  function yo(e) {
    if (ol[e]) return ol[e];
    if (!In[e]) return e;
    var t = In[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in sa) return (ol[e] = t[n]);
    return e;
  }
  var aa = yo("animationend"),
    ca = yo("animationiteration"),
    fa = yo("animationstart"),
    da = yo("transitionend"),
    pa = new Map(),
    ha =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function qt(e, t) {
    pa.set(e, t), p(t, [e]);
  }
  for (var il = 0; il < ha.length; il++) {
    var ll = ha[il],
      Ip = ll.toLowerCase(),
      Ap = ll[0].toUpperCase() + ll.slice(1);
    qt(Ip, "on" + Ap);
  }
  qt(aa, "onAnimationEnd"),
    qt(ca, "onAnimationIteration"),
    qt(fa, "onAnimationStart"),
    qt("dblclick", "onDoubleClick"),
    qt("focusin", "onFocus"),
    qt("focusout", "onBlur"),
    qt(da, "onTransitionEnd"),
    m("onMouseEnter", ["mouseout", "mouseover"]),
    m("onMouseLeave", ["mouseout", "mouseover"]),
    m("onPointerEnter", ["pointerout", "pointerover"]),
    m("onPointerLeave", ["pointerout", "pointerover"]),
    p(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    p(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    p("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    p(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    p(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    p(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var xr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Fp = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(xr)
    );
  function va(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Id(r, t, void 0, e), (e.currentTarget = null);
  }
  function ma(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t)
          for (var c = r.length - 1; 0 <= c; c--) {
            var d = r[c],
              h = d.instance,
              k = d.currentTarget;
            if (((d = d.listener), h !== l && i.isPropagationStopped()))
              break e;
            va(i, d, k), (l = h);
          }
        else
          for (c = 0; c < r.length; c++) {
            if (
              ((d = r[c]),
              (h = d.instance),
              (k = d.currentTarget),
              (d = d.listener),
              h !== l && i.isPropagationStopped())
            )
              break e;
            va(i, d, k), (l = h);
          }
      }
    }
    if (eo) throw ((e = Ai), (eo = !1), (Ai = null), e);
  }
  function ke(e, t) {
    var n = t[hl];
    n === void 0 && (n = t[hl] = new Set());
    var r = e + "__bubble";
    n.has(r) || (ya(t, e, 2, !1), n.add(r));
  }
  function ul(e, t, n) {
    var r = 0;
    t && (r |= 4), ya(n, e, r, t);
  }
  var go = "_reactListening" + Math.random().toString(36).slice(2);
  function Er(e) {
    if (!e[go]) {
      (e[go] = !0),
        a.forEach(function (n) {
          n !== "selectionchange" && (Fp.has(n) || ul(n, !1, e), ul(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[go] || ((t[go] = !0), ul("selectionchange", !1, t));
    }
  }
  function ya(e, t, n, r) {
    switch (Us(t)) {
      case 1:
        var i = Jd;
        break;
      case 4:
        i = bd;
        break;
      default:
        i = Vi;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !Ii ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      r
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
  }
  function sl(e, t, n, r, i) {
    var l = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var c = r.tag;
        if (c === 3 || c === 4) {
          var d = r.stateNode.containerInfo;
          if (d === i || (d.nodeType === 8 && d.parentNode === i)) break;
          if (c === 4)
            for (c = r.return; c !== null; ) {
              var h = c.tag;
              if (
                (h === 3 || h === 4) &&
                ((h = c.stateNode.containerInfo),
                h === i || (h.nodeType === 8 && h.parentNode === i))
              )
                return;
              c = c.return;
            }
          for (; d !== null; ) {
            if (((c = fn(d)), c === null)) return;
            if (((h = c.tag), h === 5 || h === 6)) {
              r = l = c;
              continue e;
            }
            d = d.parentNode;
          }
        }
        r = r.return;
      }
    xs(function () {
      var k = l,
        j = ji(n),
        M = [];
      e: {
        var L = pa.get(e);
        if (L !== void 0) {
          var K = qi,
            G = e;
          switch (e) {
            case "keypress":
              if (fo(n) === 0) break e;
            case "keydown":
            case "keyup":
              K = hp;
              break;
            case "focusin":
              (G = "focus"), (K = Gi);
              break;
            case "focusout":
              (G = "blur"), (K = Gi);
              break;
            case "beforeblur":
            case "afterblur":
              K = Gi;
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
              K = Ws;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              K = np;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              K = yp;
              break;
            case aa:
            case ca:
            case fa:
              K = ip;
              break;
            case da:
              K = wp;
              break;
            case "scroll":
              K = ep;
              break;
            case "wheel":
              K = _p;
              break;
            case "copy":
            case "cut":
            case "paste":
              K = up;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              K = Qs;
          }
          var Z = (t & 4) !== 0,
            ze = !Z && e === "scroll",
            S = Z ? (L !== null ? L + "Capture" : null) : L;
          Z = [];
          for (var y = k, E; y !== null; ) {
            E = y;
            var F = E.stateNode;
            if (
              (E.tag === 5 &&
                F !== null &&
                ((E = F),
                S !== null &&
                  ((F = ir(y, S)), F != null && Z.push(kr(y, F, E)))),
              ze)
            )
              break;
            y = y.return;
          }
          0 < Z.length &&
            ((L = new K(L, G, null, n, j)), M.push({ event: L, listeners: Z }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (K = e === "mouseout" || e === "pointerout"),
            L &&
              n !== zi &&
              (G = n.relatedTarget || n.fromElement) &&
              (fn(G) || G[zt]))
          )
            break e;
          if (
            (K || L) &&
            ((L =
              j.window === j
                ? j
                : (L = j.ownerDocument)
                ? L.defaultView || L.parentWindow
                : window),
            K
              ? ((G = n.relatedTarget || n.toElement),
                (K = k),
                (G = G ? fn(G) : null),
                G !== null &&
                  ((ze = cn(G)), G !== ze || (G.tag !== 5 && G.tag !== 6)) &&
                  (G = null))
              : ((K = null), (G = k)),
            K !== G)
          ) {
            if (
              ((Z = Ws),
              (F = "onMouseLeave"),
              (S = "onMouseEnter"),
              (y = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Z = Qs),
                (F = "onPointerLeave"),
                (S = "onPointerEnter"),
                (y = "pointer")),
              (ze = K == null ? L : $n(K)),
              (E = G == null ? L : $n(G)),
              (L = new Z(F, y + "leave", K, n, j)),
              (L.target = ze),
              (L.relatedTarget = E),
              (F = null),
              fn(j) === k &&
                ((Z = new Z(S, y + "enter", G, n, j)),
                (Z.target = E),
                (Z.relatedTarget = ze),
                (F = Z)),
              (ze = F),
              K && G)
            )
              t: {
                for (Z = K, S = G, y = 0, E = Z; E; E = An(E)) y++;
                for (E = 0, F = S; F; F = An(F)) E++;
                for (; 0 < y - E; ) (Z = An(Z)), y--;
                for (; 0 < E - y; ) (S = An(S)), E--;
                for (; y--; ) {
                  if (Z === S || (S !== null && Z === S.alternate)) break t;
                  (Z = An(Z)), (S = An(S));
                }
                Z = null;
              }
            else Z = null;
            K !== null && ga(M, L, K, Z, !1),
              G !== null && ze !== null && ga(M, ze, G, Z, !0);
          }
        }
        e: {
          if (
            ((L = k ? $n(k) : window),
            (K = L.nodeName && L.nodeName.toLowerCase()),
            K === "select" || (K === "input" && L.type === "file"))
          )
            var J = Tp;
          else if (Zs(L))
            if (bs) J = zp;
            else {
              J = Op;
              var te = Rp;
            }
          else
            (K = L.nodeName) &&
              K.toLowerCase() === "input" &&
              (L.type === "checkbox" || L.type === "radio") &&
              (J = Lp);
          if (J && (J = J(e, k))) {
            Js(M, J, n, j);
            break e;
          }
          te && te(e, L, k),
            e === "focusout" &&
              (te = L._wrapperState) &&
              te.controlled &&
              L.type === "number" &&
              Ni(L, "number", L.value);
        }
        switch (((te = k ? $n(k) : window), e)) {
          case "focusin":
            (Zs(te) || te.contentEditable === "true") &&
              ((Dn = te), (nl = k), (_r = null));
            break;
          case "focusout":
            _r = nl = Dn = null;
            break;
          case "mousedown":
            rl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (rl = !1), ua(M, n, j);
            break;
          case "selectionchange":
            if (Dp) break;
          case "keydown":
          case "keyup":
            ua(M, n, j);
        }
        var ne;
        if (Ji)
          e: {
            switch (e) {
              case "compositionstart":
                var oe = "onCompositionStart";
                break e;
              case "compositionend":
                oe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                oe = "onCompositionUpdate";
                break e;
            }
            oe = void 0;
          }
        else
          Mn
            ? Xs(e, n) && (oe = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (oe = "onCompositionStart");
        oe &&
          (Ks &&
            n.locale !== "ko" &&
            (Mn || oe !== "onCompositionStart"
              ? oe === "onCompositionEnd" && Mn && (ne = Hs())
              : ((Kt = j),
                (Ki = "value" in Kt ? Kt.value : Kt.textContent),
                (Mn = !0))),
          (te = wo(k, oe)),
          0 < te.length &&
            ((oe = new Vs(oe, e, null, n, j)),
            M.push({ event: oe, listeners: te }),
            ne
              ? (oe.data = ne)
              : ((ne = Gs(n)), ne !== null && (oe.data = ne)))),
          (ne = Ep ? kp(e, n) : Cp(e, n)) &&
            ((k = wo(k, "onBeforeInput")),
            0 < k.length &&
              ((j = new Vs("onBeforeInput", "beforeinput", null, n, j)),
              M.push({ event: j, listeners: k }),
              (j.data = ne)));
      }
      ma(M, t);
    });
  }
  function kr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function wo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e,
        l = i.stateNode;
      i.tag === 5 &&
        l !== null &&
        ((i = l),
        (l = ir(e, n)),
        l != null && r.unshift(kr(e, l, i)),
        (l = ir(e, t)),
        l != null && r.push(kr(e, l, i))),
        (e = e.return);
    }
    return r;
  }
  function An(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ga(e, t, n, r, i) {
    for (var l = t._reactName, c = []; n !== null && n !== r; ) {
      var d = n,
        h = d.alternate,
        k = d.stateNode;
      if (h !== null && h === r) break;
      d.tag === 5 &&
        k !== null &&
        ((d = k),
        i
          ? ((h = ir(n, l)), h != null && c.unshift(kr(n, h, d)))
          : i || ((h = ir(n, l)), h != null && c.push(kr(n, h, d)))),
        (n = n.return);
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var $p = /\r\n?/g,
    Up = /\u0000|\uFFFD/g;
  function wa(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        $p,
        `
`
      )
      .replace(Up, "");
  }
  function So(e, t, n) {
    if (((t = wa(t)), wa(e) !== t && n)) throw Error(s(425));
  }
  function _o() {}
  var al = null,
    cl = null;
  function fl(e, t) {
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
  var dl = typeof setTimeout == "function" ? setTimeout : void 0,
    Hp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Sa = typeof Promise == "function" ? Promise : void 0,
    Bp =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Sa < "u"
        ? function (e) {
            return Sa.resolve(null).then(e).catch(Wp);
          }
        : dl;
  function Wp(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function pl(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(i), hr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = i;
    } while (n);
    hr(t);
  }
  function Yt(e) {
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
  function _a(e) {
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
  var Fn = Math.random().toString(36).slice(2),
    Nt = "__reactFiber$" + Fn,
    Cr = "__reactProps$" + Fn,
    zt = "__reactContainer$" + Fn,
    hl = "__reactEvents$" + Fn,
    Vp = "__reactListeners$" + Fn,
    Qp = "__reactHandles$" + Fn;
  function fn(e) {
    var t = e[Nt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[zt] || n[Nt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = _a(e); e !== null; ) {
            if ((n = e[Nt])) return n;
            e = _a(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Pr(e) {
    return (
      (e = e[Nt] || e[zt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function $n(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function xo(e) {
    return e[Cr] || null;
  }
  var vl = [],
    Un = -1;
  function Xt(e) {
    return { current: e };
  }
  function Ce(e) {
    0 > Un || ((e.current = vl[Un]), (vl[Un] = null), Un--);
  }
  function Ee(e, t) {
    Un++, (vl[Un] = e.current), (e.current = t);
  }
  var Gt = {},
    We = Xt(Gt),
    Ge = Xt(!1),
    dn = Gt;
  function Hn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Gt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      l;
    for (l in n) i[l] = t[l];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function Ze(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Eo() {
    Ce(Ge), Ce(We);
  }
  function xa(e, t, n) {
    if (We.current !== Gt) throw Error(s(168));
    Ee(We, t), Ee(Ge, n);
  }
  function Ea(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(s(108, ae(e) || "Unknown", i));
    return T({}, n, r);
  }
  function ko(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Gt),
      (dn = We.current),
      Ee(We, e),
      Ee(Ge, Ge.current),
      !0
    );
  }
  function ka(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n
      ? ((e = Ea(e, t, dn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Ce(Ge),
        Ce(We),
        Ee(We, e))
      : Ce(Ge),
      Ee(Ge, n);
  }
  var jt = null,
    Co = !1,
    ml = !1;
  function Ca(e) {
    jt === null ? (jt = [e]) : jt.push(e);
  }
  function Kp(e) {
    (Co = !0), Ca(e);
  }
  function Zt() {
    if (!ml && jt !== null) {
      ml = !0;
      var e = 0,
        t = _e;
      try {
        var n = jt;
        for (_e = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (jt = null), (Co = !1);
      } catch (i) {
        throw (jt !== null && (jt = jt.slice(e + 1)), Ns(Fi, Zt), i);
      } finally {
        (_e = t), (ml = !1);
      }
    }
    return null;
  }
  var Bn = [],
    Wn = 0,
    Po = null,
    No = 0,
    dt = [],
    pt = 0,
    pn = null,
    Mt = 1,
    Dt = "";
  function hn(e, t) {
    (Bn[Wn++] = No), (Bn[Wn++] = Po), (Po = e), (No = t);
  }
  function Pa(e, t, n) {
    (dt[pt++] = Mt), (dt[pt++] = Dt), (dt[pt++] = pn), (pn = e);
    var r = Mt;
    e = Dt;
    var i = 32 - gt(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var l = 32 - gt(t) + i;
    if (30 < l) {
      var c = i - (i % 5);
      (l = (r & ((1 << c) - 1)).toString(32)),
        (r >>= c),
        (i -= c),
        (Mt = (1 << (32 - gt(t) + i)) | (n << i) | r),
        (Dt = l + e);
    } else (Mt = (1 << l) | (n << i) | r), (Dt = e);
  }
  function yl(e) {
    e.return !== null && (hn(e, 1), Pa(e, 1, 0));
  }
  function gl(e) {
    for (; e === Po; )
      (Po = Bn[--Wn]), (Bn[Wn] = null), (No = Bn[--Wn]), (Bn[Wn] = null);
    for (; e === pn; )
      (pn = dt[--pt]),
        (dt[pt] = null),
        (Dt = dt[--pt]),
        (dt[pt] = null),
        (Mt = dt[--pt]),
        (dt[pt] = null);
  }
  var it = null,
    lt = null,
    Pe = !1,
    St = null;
  function Na(e, t) {
    var n = yt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Ta(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (it = e), (lt = Yt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (it = e), (lt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = pn !== null ? { id: Mt, overflow: Dt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = yt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (it = e),
              (lt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function wl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Sl(e) {
    if (Pe) {
      var t = lt;
      if (t) {
        var n = t;
        if (!Ta(e, t)) {
          if (wl(e)) throw Error(s(418));
          t = Yt(n.nextSibling);
          var r = it;
          t && Ta(e, t)
            ? Na(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (Pe = !1), (it = e));
        }
      } else {
        if (wl(e)) throw Error(s(418));
        (e.flags = (e.flags & -4097) | 2), (Pe = !1), (it = e);
      }
    }
  }
  function Ra(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    it = e;
  }
  function To(e) {
    if (e !== it) return !1;
    if (!Pe) return Ra(e), (Pe = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !fl(e.type, e.memoizedProps))),
      t && (t = lt))
    ) {
      if (wl(e)) throw (Oa(), Error(s(418)));
      for (; t; ) Na(e, t), (t = Yt(t.nextSibling));
    }
    if ((Ra(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                lt = Yt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        lt = null;
      }
    } else lt = it ? Yt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Oa() {
    for (var e = lt; e; ) e = Yt(e.nextSibling);
  }
  function Vn() {
    (lt = it = null), (Pe = !1);
  }
  function _l(e) {
    St === null ? (St = [e]) : St.push(e);
  }
  var qp = B.ReactCurrentBatchConfig;
  function Nr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var i = r,
          l = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === l
          ? t.ref
          : ((t = function (c) {
              var d = i.refs;
              c === null ? delete d[l] : (d[l] = c);
            }),
            (t._stringRef = l),
            t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Ro(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        s(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function La(e) {
    var t = e._init;
    return t(e._payload);
  }
  function za(e) {
    function t(S, y) {
      if (e) {
        var E = S.deletions;
        E === null ? ((S.deletions = [y]), (S.flags |= 16)) : E.push(y);
      }
    }
    function n(S, y) {
      if (!e) return null;
      for (; y !== null; ) t(S, y), (y = y.sibling);
      return null;
    }
    function r(S, y) {
      for (S = new Map(); y !== null; )
        y.key !== null ? S.set(y.key, y) : S.set(y.index, y), (y = y.sibling);
      return S;
    }
    function i(S, y) {
      return (S = ln(S, y)), (S.index = 0), (S.sibling = null), S;
    }
    function l(S, y, E) {
      return (
        (S.index = E),
        e
          ? ((E = S.alternate),
            E !== null
              ? ((E = E.index), E < y ? ((S.flags |= 2), y) : E)
              : ((S.flags |= 2), y))
          : ((S.flags |= 1048576), y)
      );
    }
    function c(S) {
      return e && S.alternate === null && (S.flags |= 2), S;
    }
    function d(S, y, E, F) {
      return y === null || y.tag !== 6
        ? ((y = du(E, S.mode, F)), (y.return = S), y)
        : ((y = i(y, E)), (y.return = S), y);
    }
    function h(S, y, E, F) {
      var J = E.type;
      return J === Q
        ? j(S, y, E.props.children, F, E.key)
        : y !== null &&
          (y.elementType === J ||
            (typeof J == "object" &&
              J !== null &&
              J.$$typeof === Ne &&
              La(J) === y.type))
        ? ((F = i(y, E.props)), (F.ref = Nr(S, y, E)), (F.return = S), F)
        : ((F = bo(E.type, E.key, E.props, null, S.mode, F)),
          (F.ref = Nr(S, y, E)),
          (F.return = S),
          F);
    }
    function k(S, y, E, F) {
      return y === null ||
        y.tag !== 4 ||
        y.stateNode.containerInfo !== E.containerInfo ||
        y.stateNode.implementation !== E.implementation
        ? ((y = pu(E, S.mode, F)), (y.return = S), y)
        : ((y = i(y, E.children || [])), (y.return = S), y);
    }
    function j(S, y, E, F, J) {
      return y === null || y.tag !== 7
        ? ((y = xn(E, S.mode, F, J)), (y.return = S), y)
        : ((y = i(y, E)), (y.return = S), y);
    }
    function M(S, y, E) {
      if ((typeof y == "string" && y !== "") || typeof y == "number")
        return (y = du("" + y, S.mode, E)), (y.return = S), y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case P:
            return (
              (E = bo(y.type, y.key, y.props, null, S.mode, E)),
              (E.ref = Nr(S, null, y)),
              (E.return = S),
              E
            );
          case H:
            return (y = pu(y, S.mode, E)), (y.return = S), y;
          case Ne:
            var F = y._init;
            return M(S, F(y._payload), E);
        }
        if (nr(y) || D(y))
          return (y = xn(y, S.mode, E, null)), (y.return = S), y;
        Ro(S, y);
      }
      return null;
    }
    function L(S, y, E, F) {
      var J = y !== null ? y.key : null;
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return J !== null ? null : d(S, y, "" + E, F);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case P:
            return E.key === J ? h(S, y, E, F) : null;
          case H:
            return E.key === J ? k(S, y, E, F) : null;
          case Ne:
            return (J = E._init), L(S, y, J(E._payload), F);
        }
        if (nr(E) || D(E)) return J !== null ? null : j(S, y, E, F, null);
        Ro(S, E);
      }
      return null;
    }
    function K(S, y, E, F, J) {
      if ((typeof F == "string" && F !== "") || typeof F == "number")
        return (S = S.get(E) || null), d(y, S, "" + F, J);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case P:
            return (
              (S = S.get(F.key === null ? E : F.key) || null), h(y, S, F, J)
            );
          case H:
            return (
              (S = S.get(F.key === null ? E : F.key) || null), k(y, S, F, J)
            );
          case Ne:
            var te = F._init;
            return K(S, y, E, te(F._payload), J);
        }
        if (nr(F) || D(F)) return (S = S.get(E) || null), j(y, S, F, J, null);
        Ro(y, F);
      }
      return null;
    }
    function G(S, y, E, F) {
      for (
        var J = null, te = null, ne = y, oe = (y = 0), Fe = null;
        ne !== null && oe < E.length;
        oe++
      ) {
        ne.index > oe ? ((Fe = ne), (ne = null)) : (Fe = ne.sibling);
        var ge = L(S, ne, E[oe], F);
        if (ge === null) {
          ne === null && (ne = Fe);
          break;
        }
        e && ne && ge.alternate === null && t(S, ne),
          (y = l(ge, y, oe)),
          te === null ? (J = ge) : (te.sibling = ge),
          (te = ge),
          (ne = Fe);
      }
      if (oe === E.length) return n(S, ne), Pe && hn(S, oe), J;
      if (ne === null) {
        for (; oe < E.length; oe++)
          (ne = M(S, E[oe], F)),
            ne !== null &&
              ((y = l(ne, y, oe)),
              te === null ? (J = ne) : (te.sibling = ne),
              (te = ne));
        return Pe && hn(S, oe), J;
      }
      for (ne = r(S, ne); oe < E.length; oe++)
        (Fe = K(ne, S, oe, E[oe], F)),
          Fe !== null &&
            (e &&
              Fe.alternate !== null &&
              ne.delete(Fe.key === null ? oe : Fe.key),
            (y = l(Fe, y, oe)),
            te === null ? (J = Fe) : (te.sibling = Fe),
            (te = Fe));
      return (
        e &&
          ne.forEach(function (un) {
            return t(S, un);
          }),
        Pe && hn(S, oe),
        J
      );
    }
    function Z(S, y, E, F) {
      var J = D(E);
      if (typeof J != "function") throw Error(s(150));
      if (((E = J.call(E)), E == null)) throw Error(s(151));
      for (
        var te = (J = null), ne = y, oe = (y = 0), Fe = null, ge = E.next();
        ne !== null && !ge.done;
        oe++, ge = E.next()
      ) {
        ne.index > oe ? ((Fe = ne), (ne = null)) : (Fe = ne.sibling);
        var un = L(S, ne, ge.value, F);
        if (un === null) {
          ne === null && (ne = Fe);
          break;
        }
        e && ne && un.alternate === null && t(S, ne),
          (y = l(un, y, oe)),
          te === null ? (J = un) : (te.sibling = un),
          (te = un),
          (ne = Fe);
      }
      if (ge.done) return n(S, ne), Pe && hn(S, oe), J;
      if (ne === null) {
        for (; !ge.done; oe++, ge = E.next())
          (ge = M(S, ge.value, F)),
            ge !== null &&
              ((y = l(ge, y, oe)),
              te === null ? (J = ge) : (te.sibling = ge),
              (te = ge));
        return Pe && hn(S, oe), J;
      }
      for (ne = r(S, ne); !ge.done; oe++, ge = E.next())
        (ge = K(ne, S, oe, ge.value, F)),
          ge !== null &&
            (e &&
              ge.alternate !== null &&
              ne.delete(ge.key === null ? oe : ge.key),
            (y = l(ge, y, oe)),
            te === null ? (J = ge) : (te.sibling = ge),
            (te = ge));
      return (
        e &&
          ne.forEach(function (Ph) {
            return t(S, Ph);
          }),
        Pe && hn(S, oe),
        J
      );
    }
    function ze(S, y, E, F) {
      if (
        (typeof E == "object" &&
          E !== null &&
          E.type === Q &&
          E.key === null &&
          (E = E.props.children),
        typeof E == "object" && E !== null)
      ) {
        switch (E.$$typeof) {
          case P:
            e: {
              for (var J = E.key, te = y; te !== null; ) {
                if (te.key === J) {
                  if (((J = E.type), J === Q)) {
                    if (te.tag === 7) {
                      n(S, te.sibling),
                        (y = i(te, E.props.children)),
                        (y.return = S),
                        (S = y);
                      break e;
                    }
                  } else if (
                    te.elementType === J ||
                    (typeof J == "object" &&
                      J !== null &&
                      J.$$typeof === Ne &&
                      La(J) === te.type)
                  ) {
                    n(S, te.sibling),
                      (y = i(te, E.props)),
                      (y.ref = Nr(S, te, E)),
                      (y.return = S),
                      (S = y);
                    break e;
                  }
                  n(S, te);
                  break;
                } else t(S, te);
                te = te.sibling;
              }
              E.type === Q
                ? ((y = xn(E.props.children, S.mode, F, E.key)),
                  (y.return = S),
                  (S = y))
                : ((F = bo(E.type, E.key, E.props, null, S.mode, F)),
                  (F.ref = Nr(S, y, E)),
                  (F.return = S),
                  (S = F));
            }
            return c(S);
          case H:
            e: {
              for (te = E.key; y !== null; ) {
                if (y.key === te)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === E.containerInfo &&
                    y.stateNode.implementation === E.implementation
                  ) {
                    n(S, y.sibling),
                      (y = i(y, E.children || [])),
                      (y.return = S),
                      (S = y);
                    break e;
                  } else {
                    n(S, y);
                    break;
                  }
                else t(S, y);
                y = y.sibling;
              }
              (y = pu(E, S.mode, F)), (y.return = S), (S = y);
            }
            return c(S);
          case Ne:
            return (te = E._init), ze(S, y, te(E._payload), F);
        }
        if (nr(E)) return G(S, y, E, F);
        if (D(E)) return Z(S, y, E, F);
        Ro(S, E);
      }
      return (typeof E == "string" && E !== "") || typeof E == "number"
        ? ((E = "" + E),
          y !== null && y.tag === 6
            ? (n(S, y.sibling), (y = i(y, E)), (y.return = S), (S = y))
            : (n(S, y), (y = du(E, S.mode, F)), (y.return = S), (S = y)),
          c(S))
        : n(S, y);
    }
    return ze;
  }
  var Qn = za(!0),
    ja = za(!1),
    Oo = Xt(null),
    Lo = null,
    Kn = null,
    xl = null;
  function El() {
    xl = Kn = Lo = null;
  }
  function kl(e) {
    var t = Oo.current;
    Ce(Oo), (e._currentValue = t);
  }
  function Cl(e, t, n) {
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
  function qn(e, t) {
    (Lo = e),
      (xl = Kn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Je = !0), (e.firstContext = null));
  }
  function ht(e) {
    var t = e._currentValue;
    if (xl !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Kn === null)) {
        if (Lo === null) throw Error(s(308));
        (Kn = e), (Lo.dependencies = { lanes: 0, firstContext: e });
      } else Kn = Kn.next = e;
    return t;
  }
  var vn = null;
  function Pl(e) {
    vn === null ? (vn = [e]) : vn.push(e);
  }
  function Ma(e, t, n, r) {
    var i = t.interleaved;
    return (
      i === null ? ((n.next = n), Pl(t)) : ((n.next = i.next), (i.next = n)),
      (t.interleaved = n),
      It(e, r)
    );
  }
  function It(e, t) {
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
  var Jt = !1;
  function Nl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Da(e, t) {
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
  function At(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function bt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ye & 2)) {
      var i = r.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (r.pending = t),
        It(e, n)
      );
    }
    return (
      (i = r.interleaved),
      i === null ? ((t.next = t), Pl(r)) : ((t.next = i.next), (i.next = t)),
      (r.interleaved = t),
      It(e, n)
    );
  }
  function zo(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Hi(e, n);
    }
  }
  function Ia(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var i = null,
        l = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var c = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          l === null ? (i = l = c) : (l = l.next = c), (n = n.next);
        } while (n !== null);
        l === null ? (i = l = t) : (l = l.next = t);
      } else i = l = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: l,
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
  function jo(e, t, n, r) {
    var i = e.updateQueue;
    Jt = !1;
    var l = i.firstBaseUpdate,
      c = i.lastBaseUpdate,
      d = i.shared.pending;
    if (d !== null) {
      i.shared.pending = null;
      var h = d,
        k = h.next;
      (h.next = null), c === null ? (l = k) : (c.next = k), (c = h);
      var j = e.alternate;
      j !== null &&
        ((j = j.updateQueue),
        (d = j.lastBaseUpdate),
        d !== c &&
          (d === null ? (j.firstBaseUpdate = k) : (d.next = k),
          (j.lastBaseUpdate = h)));
    }
    if (l !== null) {
      var M = i.baseState;
      (c = 0), (j = k = h = null), (d = l);
      do {
        var L = d.lane,
          K = d.eventTime;
        if ((r & L) === L) {
          j !== null &&
            (j = j.next =
              {
                eventTime: K,
                lane: 0,
                tag: d.tag,
                payload: d.payload,
                callback: d.callback,
                next: null,
              });
          e: {
            var G = e,
              Z = d;
            switch (((L = t), (K = n), Z.tag)) {
              case 1:
                if (((G = Z.payload), typeof G == "function")) {
                  M = G.call(K, M, L);
                  break e;
                }
                M = G;
                break e;
              case 3:
                G.flags = (G.flags & -65537) | 128;
              case 0:
                if (
                  ((G = Z.payload),
                  (L = typeof G == "function" ? G.call(K, M, L) : G),
                  L == null)
                )
                  break e;
                M = T({}, M, L);
                break e;
              case 2:
                Jt = !0;
            }
          }
          d.callback !== null &&
            d.lane !== 0 &&
            ((e.flags |= 64),
            (L = i.effects),
            L === null ? (i.effects = [d]) : L.push(d));
        } else
          (K = {
            eventTime: K,
            lane: L,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            j === null ? ((k = j = K), (h = M)) : (j = j.next = K),
            (c |= L);
        if (((d = d.next), d === null)) {
          if (((d = i.shared.pending), d === null)) break;
          (L = d),
            (d = L.next),
            (L.next = null),
            (i.lastBaseUpdate = L),
            (i.shared.pending = null);
        }
      } while (!0);
      if (
        (j === null && (h = M),
        (i.baseState = h),
        (i.firstBaseUpdate = k),
        (i.lastBaseUpdate = j),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do (c |= i.lane), (i = i.next);
        while (i !== t);
      } else l === null && (i.shared.lanes = 0);
      (gn |= c), (e.lanes = c), (e.memoizedState = M);
    }
  }
  function Aa(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback;
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != "function"))
            throw Error(s(191, i));
          i.call(r);
        }
      }
  }
  var Tr = {},
    Tt = Xt(Tr),
    Rr = Xt(Tr),
    Or = Xt(Tr);
  function mn(e) {
    if (e === Tr) throw Error(s(174));
    return e;
  }
  function Tl(e, t) {
    switch ((Ee(Or, t), Ee(Rr, e), Ee(Tt, Tr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ri(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ri(t, e));
    }
    Ce(Tt), Ee(Tt, t);
  }
  function Yn() {
    Ce(Tt), Ce(Rr), Ce(Or);
  }
  function Fa(e) {
    mn(Or.current);
    var t = mn(Tt.current),
      n = Ri(t, e.type);
    t !== n && (Ee(Rr, e), Ee(Tt, n));
  }
  function Rl(e) {
    Rr.current === e && (Ce(Tt), Ce(Rr));
  }
  var Te = Xt(0);
  function Mo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
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
  var Ol = [];
  function Ll() {
    for (var e = 0; e < Ol.length; e++)
      Ol[e]._workInProgressVersionPrimary = null;
    Ol.length = 0;
  }
  var Do = B.ReactCurrentDispatcher,
    zl = B.ReactCurrentBatchConfig,
    yn = 0,
    Re = null,
    Me = null,
    Ie = null,
    Io = !1,
    Lr = !1,
    zr = 0,
    Yp = 0;
  function Ve() {
    throw Error(s(321));
  }
  function jl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!wt(e[n], t[n])) return !1;
    return !0;
  }
  function Ml(e, t, n, r, i, l) {
    if (
      ((yn = l),
      (Re = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Do.current = e === null || e.memoizedState === null ? Jp : bp),
      (e = n(r, i)),
      Lr)
    ) {
      l = 0;
      do {
        if (((Lr = !1), (zr = 0), 25 <= l)) throw Error(s(301));
        (l += 1),
          (Ie = Me = null),
          (t.updateQueue = null),
          (Do.current = eh),
          (e = n(r, i));
      } while (Lr);
    }
    if (
      ((Do.current = $o),
      (t = Me !== null && Me.next !== null),
      (yn = 0),
      (Ie = Me = Re = null),
      (Io = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function Dl() {
    var e = zr !== 0;
    return (zr = 0), e;
  }
  function Rt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ie === null ? (Re.memoizedState = Ie = e) : (Ie = Ie.next = e), Ie;
  }
  function vt() {
    if (Me === null) {
      var e = Re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Me.next;
    var t = Ie === null ? Re.memoizedState : Ie.next;
    if (t !== null) (Ie = t), (Me = e);
    else {
      if (e === null) throw Error(s(310));
      (Me = e),
        (e = {
          memoizedState: Me.memoizedState,
          baseState: Me.baseState,
          baseQueue: Me.baseQueue,
          queue: Me.queue,
          next: null,
        }),
        Ie === null ? (Re.memoizedState = Ie = e) : (Ie = Ie.next = e);
    }
    return Ie;
  }
  function jr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Il(e) {
    var t = vt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Me,
      i = r.baseQueue,
      l = n.pending;
    if (l !== null) {
      if (i !== null) {
        var c = i.next;
        (i.next = l.next), (l.next = c);
      }
      (r.baseQueue = i = l), (n.pending = null);
    }
    if (i !== null) {
      (l = i.next), (r = r.baseState);
      var d = (c = null),
        h = null,
        k = l;
      do {
        var j = k.lane;
        if ((yn & j) === j)
          h !== null &&
            (h = h.next =
              {
                lane: 0,
                action: k.action,
                hasEagerState: k.hasEagerState,
                eagerState: k.eagerState,
                next: null,
              }),
            (r = k.hasEagerState ? k.eagerState : e(r, k.action));
        else {
          var M = {
            lane: j,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null,
          };
          h === null ? ((d = h = M), (c = r)) : (h = h.next = M),
            (Re.lanes |= j),
            (gn |= j);
        }
        k = k.next;
      } while (k !== null && k !== l);
      h === null ? (c = r) : (h.next = d),
        wt(r, t.memoizedState) || (Je = !0),
        (t.memoizedState = r),
        (t.baseState = c),
        (t.baseQueue = h),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      i = e;
      do (l = i.lane), (Re.lanes |= l), (gn |= l), (i = i.next);
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Al(e) {
    var t = vt(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      l = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var c = (i = i.next);
      do (l = e(l, c.action)), (c = c.next);
      while (c !== i);
      wt(l, t.memoizedState) || (Je = !0),
        (t.memoizedState = l),
        t.baseQueue === null && (t.baseState = l),
        (n.lastRenderedState = l);
    }
    return [l, r];
  }
  function $a() {}
  function Ua(e, t) {
    var n = Re,
      r = vt(),
      i = t(),
      l = !wt(r.memoizedState, i);
    if (
      (l && ((r.memoizedState = i), (Je = !0)),
      (r = r.queue),
      Fl(Wa.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || l || (Ie !== null && Ie.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Mr(9, Ba.bind(null, n, r, i, t), void 0, null),
        Ae === null)
      )
        throw Error(s(349));
      yn & 30 || Ha(n, t, i);
    }
    return i;
  }
  function Ha(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Re.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Re.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Ba(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Va(t) && Qa(e);
  }
  function Wa(e, t, n) {
    return n(function () {
      Va(t) && Qa(e);
    });
  }
  function Va(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !wt(e, n);
    } catch {
      return !0;
    }
  }
  function Qa(e) {
    var t = It(e, 1);
    t !== null && kt(t, e, 1, -1);
  }
  function Ka(e) {
    var t = Rt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Zp.bind(null, Re, e)),
      [t.memoizedState, e]
    );
  }
  function Mr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Re.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Re.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function qa() {
    return vt().memoizedState;
  }
  function Ao(e, t, n, r) {
    var i = Rt();
    (Re.flags |= e),
      (i.memoizedState = Mr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Fo(e, t, n, r) {
    var i = vt();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (Me !== null) {
      var c = Me.memoizedState;
      if (((l = c.destroy), r !== null && jl(r, c.deps))) {
        i.memoizedState = Mr(t, n, l, r);
        return;
      }
    }
    (Re.flags |= e), (i.memoizedState = Mr(1 | t, n, l, r));
  }
  function Ya(e, t) {
    return Ao(8390656, 8, e, t);
  }
  function Fl(e, t) {
    return Fo(2048, 8, e, t);
  }
  function Xa(e, t) {
    return Fo(4, 2, e, t);
  }
  function Ga(e, t) {
    return Fo(4, 4, e, t);
  }
  function Za(e, t) {
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
  function Ja(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Fo(4, 4, Za.bind(null, t, e), n)
    );
  }
  function $l() {}
  function ba(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && jl(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function ec(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && jl(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function tc(e, t, n) {
    return yn & 21
      ? (wt(n, t) ||
          ((n = Ls()), (Re.lanes |= n), (gn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Je = !0)), (e.memoizedState = n));
  }
  function Xp(e, t) {
    var n = _e;
    (_e = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = zl.transition;
    zl.transition = {};
    try {
      e(!1), t();
    } finally {
      (_e = n), (zl.transition = r);
    }
  }
  function nc() {
    return vt().memoizedState;
  }
  function Gp(e, t, n) {
    var r = rn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      rc(e))
    )
      oc(t, n);
    else if (((n = Ma(e, t, n, r)), n !== null)) {
      var i = Ye();
      kt(n, e, r, i), ic(n, t, r);
    }
  }
  function Zp(e, t, n) {
    var r = rn(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (rc(e)) oc(t, i);
    else {
      var l = e.alternate;
      if (
        e.lanes === 0 &&
        (l === null || l.lanes === 0) &&
        ((l = t.lastRenderedReducer), l !== null)
      )
        try {
          var c = t.lastRenderedState,
            d = l(c, n);
          if (((i.hasEagerState = !0), (i.eagerState = d), wt(d, c))) {
            var h = t.interleaved;
            h === null
              ? ((i.next = i), Pl(t))
              : ((i.next = h.next), (h.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (n = Ma(e, t, i, r)),
        n !== null && ((i = Ye()), kt(n, e, r, i), ic(n, t, r));
    }
  }
  function rc(e) {
    var t = e.alternate;
    return e === Re || (t !== null && t === Re);
  }
  function oc(e, t) {
    Lr = Io = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function ic(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Hi(e, n);
    }
  }
  var $o = {
      readContext: ht,
      useCallback: Ve,
      useContext: Ve,
      useEffect: Ve,
      useImperativeHandle: Ve,
      useInsertionEffect: Ve,
      useLayoutEffect: Ve,
      useMemo: Ve,
      useReducer: Ve,
      useRef: Ve,
      useState: Ve,
      useDebugValue: Ve,
      useDeferredValue: Ve,
      useTransition: Ve,
      useMutableSource: Ve,
      useSyncExternalStore: Ve,
      useId: Ve,
      unstable_isNewReconciler: !1,
    },
    Jp = {
      readContext: ht,
      useCallback: function (e, t) {
        return (Rt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ht,
      useEffect: Ya,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Ao(4194308, 4, Za.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ao(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ao(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Rt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Rt();
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
          (e = e.dispatch = Gp.bind(null, Re, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Rt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Ka,
      useDebugValue: $l,
      useDeferredValue: function (e) {
        return (Rt().memoizedState = e);
      },
      useTransition: function () {
        var e = Ka(!1),
          t = e[0];
        return (e = Xp.bind(null, e[1])), (Rt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Re,
          i = Rt();
        if (Pe) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), Ae === null)) throw Error(s(349));
          yn & 30 || Ha(r, t, n);
        }
        i.memoizedState = n;
        var l = { value: n, getSnapshot: t };
        return (
          (i.queue = l),
          Ya(Wa.bind(null, r, l, e), [e]),
          (r.flags |= 2048),
          Mr(9, Ba.bind(null, r, l, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Rt(),
          t = Ae.identifierPrefix;
        if (Pe) {
          var n = Dt,
            r = Mt;
          (n = (r & ~(1 << (32 - gt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = zr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Yp++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    bp = {
      readContext: ht,
      useCallback: ba,
      useContext: ht,
      useEffect: Fl,
      useImperativeHandle: Ja,
      useInsertionEffect: Xa,
      useLayoutEffect: Ga,
      useMemo: ec,
      useReducer: Il,
      useRef: qa,
      useState: function () {
        return Il(jr);
      },
      useDebugValue: $l,
      useDeferredValue: function (e) {
        var t = vt();
        return tc(t, Me.memoizedState, e);
      },
      useTransition: function () {
        var e = Il(jr)[0],
          t = vt().memoizedState;
        return [e, t];
      },
      useMutableSource: $a,
      useSyncExternalStore: Ua,
      useId: nc,
      unstable_isNewReconciler: !1,
    },
    eh = {
      readContext: ht,
      useCallback: ba,
      useContext: ht,
      useEffect: Fl,
      useImperativeHandle: Ja,
      useInsertionEffect: Xa,
      useLayoutEffect: Ga,
      useMemo: ec,
      useReducer: Al,
      useRef: qa,
      useState: function () {
        return Al(jr);
      },
      useDebugValue: $l,
      useDeferredValue: function (e) {
        var t = vt();
        return Me === null ? (t.memoizedState = e) : tc(t, Me.memoizedState, e);
      },
      useTransition: function () {
        var e = Al(jr)[0],
          t = vt().memoizedState;
        return [e, t];
      },
      useMutableSource: $a,
      useSyncExternalStore: Ua,
      useId: nc,
      unstable_isNewReconciler: !1,
    };
  function _t(e, t) {
    if (e && e.defaultProps) {
      (t = T({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ul(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : T({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Uo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? cn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        i = rn(e),
        l = At(r, i);
      (l.payload = t),
        n != null && (l.callback = n),
        (t = bt(e, l, i)),
        t !== null && (kt(t, e, i, r), zo(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        i = rn(e),
        l = At(r, i);
      (l.tag = 1),
        (l.payload = t),
        n != null && (l.callback = n),
        (t = bt(e, l, i)),
        t !== null && (kt(t, e, i, r), zo(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ye(),
        r = rn(e),
        i = At(n, r);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = bt(e, i, r)),
        t !== null && (kt(t, e, r, n), zo(t, e, r));
    },
  };
  function lc(e, t, n, r, i, l, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, l, c)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Sr(n, r) || !Sr(i, l)
        : !0
    );
  }
  function uc(e, t, n) {
    var r = !1,
      i = Gt,
      l = t.contextType;
    return (
      typeof l == "object" && l !== null
        ? (l = ht(l))
        : ((i = Ze(t) ? dn : We.current),
          (r = t.contextTypes),
          (l = (r = r != null) ? Hn(e, i) : Gt)),
      (t = new t(n, l)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Uo),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      t
    );
  }
  function sc(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Uo.enqueueReplaceState(t, t.state, null);
  }
  function Hl(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Nl(e);
    var l = t.contextType;
    typeof l == "object" && l !== null
      ? (i.context = ht(l))
      : ((l = Ze(t) ? dn : We.current), (i.context = Hn(e, l))),
      (i.state = e.memoizedState),
      (l = t.getDerivedStateFromProps),
      typeof l == "function" && (Ul(e, t, l, n), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((t = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && Uo.enqueueReplaceState(i, i.state, null),
        jo(e, n, i, r),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Xn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += le(r)), (r = r.return);
      while (r);
      var i = n;
    } catch (l) {
      i =
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Bl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Wl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var th = typeof WeakMap == "function" ? WeakMap : Map;
  function ac(e, t, n) {
    (n = At(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        qo || ((qo = !0), (ou = r)), Wl(e, t);
      }),
      n
    );
  }
  function cc(e, t, n) {
    (n = At(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      (n.payload = function () {
        return r(i);
      }),
        (n.callback = function () {
          Wl(e, t);
        });
    }
    var l = e.stateNode;
    return (
      l !== null &&
        typeof l.componentDidCatch == "function" &&
        (n.callback = function () {
          Wl(e, t),
            typeof r != "function" &&
              (tn === null ? (tn = new Set([this])) : tn.add(this));
          var c = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: c !== null ? c : "",
          });
        }),
      n
    );
  }
  function fc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new th();
      var i = new Set();
      r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = vh.bind(null, e, t, n)), t.then(e, e));
  }
  function dc(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function pc(e, t, n, r, i) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = i), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = At(-1, 1)), (t.tag = 2), bt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var nh = B.ReactCurrentOwner,
    Je = !1;
  function qe(e, t, n, r) {
    t.child = e === null ? ja(t, null, n, r) : Qn(t, e.child, n, r);
  }
  function hc(e, t, n, r, i) {
    n = n.render;
    var l = t.ref;
    return (
      qn(t, i),
      (r = Ml(e, t, n, r, l, i)),
      (n = Dl()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          Ft(e, t, i))
        : (Pe && n && yl(t), (t.flags |= 1), qe(e, t, r, i), t.child)
    );
  }
  function vc(e, t, n, r, i) {
    if (e === null) {
      var l = n.type;
      return typeof l == "function" &&
        !fu(l) &&
        l.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = l), mc(e, t, l, r, i))
        : ((e = bo(n.type, null, r, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((l = e.child), !(e.lanes & i))) {
      var c = l.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Sr), n(c, r) && e.ref === t.ref)
      )
        return Ft(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = ln(l, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function mc(e, t, n, r, i) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (Sr(l, r) && e.ref === t.ref)
        if (((Je = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
          e.flags & 131072 && (Je = !0);
        else return (t.lanes = e.lanes), Ft(e, t, i);
    }
    return Vl(e, t, n, r, i);
  }
  function yc(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ee(Zn, ut),
          (ut |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = l !== null ? l.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Ee(Zn, ut),
            (ut |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = l !== null ? l.baseLanes : n),
          Ee(Zn, ut),
          (ut |= r);
      }
    else
      l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Ee(Zn, ut),
        (ut |= r);
    return qe(e, t, i, n), t.child;
  }
  function gc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Vl(e, t, n, r, i) {
    var l = Ze(n) ? dn : We.current;
    return (
      (l = Hn(t, l)),
      qn(t, i),
      (n = Ml(e, t, n, r, l, i)),
      (r = Dl()),
      e !== null && !Je
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          Ft(e, t, i))
        : (Pe && r && yl(t), (t.flags |= 1), qe(e, t, n, i), t.child)
    );
  }
  function wc(e, t, n, r, i) {
    if (Ze(n)) {
      var l = !0;
      ko(t);
    } else l = !1;
    if ((qn(t, i), t.stateNode === null))
      Bo(e, t), uc(t, n, r), Hl(t, n, r, i), (r = !0);
    else if (e === null) {
      var c = t.stateNode,
        d = t.memoizedProps;
      c.props = d;
      var h = c.context,
        k = n.contextType;
      typeof k == "object" && k !== null
        ? (k = ht(k))
        : ((k = Ze(n) ? dn : We.current), (k = Hn(t, k)));
      var j = n.getDerivedStateFromProps,
        M =
          typeof j == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function";
      M ||
        (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
          typeof c.componentWillReceiveProps != "function") ||
        ((d !== r || h !== k) && sc(t, c, r, k)),
        (Jt = !1);
      var L = t.memoizedState;
      (c.state = L),
        jo(t, r, c, i),
        (h = t.memoizedState),
        d !== r || L !== h || Ge.current || Jt
          ? (typeof j == "function" && (Ul(t, n, j, r), (h = t.memoizedState)),
            (d = Jt || lc(t, n, d, r, L, h, k))
              ? (M ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = h)),
            (c.props = r),
            (c.state = h),
            (c.context = k),
            (r = d))
          : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (c = t.stateNode),
        Da(e, t),
        (d = t.memoizedProps),
        (k = t.type === t.elementType ? d : _t(t.type, d)),
        (c.props = k),
        (M = t.pendingProps),
        (L = c.context),
        (h = n.contextType),
        typeof h == "object" && h !== null
          ? (h = ht(h))
          : ((h = Ze(n) ? dn : We.current), (h = Hn(t, h)));
      var K = n.getDerivedStateFromProps;
      (j =
        typeof K == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function") ||
        (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
          typeof c.componentWillReceiveProps != "function") ||
        ((d !== M || L !== h) && sc(t, c, r, h)),
        (Jt = !1),
        (L = t.memoizedState),
        (c.state = L),
        jo(t, r, c, i);
      var G = t.memoizedState;
      d !== M || L !== G || Ge.current || Jt
        ? (typeof K == "function" && (Ul(t, n, K, r), (G = t.memoizedState)),
          (k = Jt || lc(t, n, k, r, L, G, h) || !1)
            ? (j ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(r, G, h),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(r, G, h)),
              typeof c.componentDidUpdate == "function" && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (d === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = G)),
          (c.props = r),
          (c.state = G),
          (c.context = h),
          (r = k))
        : (typeof c.componentDidUpdate != "function" ||
            (d === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ql(e, t, n, r, l, i);
  }
  function Ql(e, t, n, r, i, l) {
    gc(e, t);
    var c = (t.flags & 128) !== 0;
    if (!r && !c) return i && ka(t, n, !1), Ft(e, t, l);
    (r = t.stateNode), (nh.current = t);
    var d =
      c && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && c
        ? ((t.child = Qn(t, e.child, null, l)), (t.child = Qn(t, null, d, l)))
        : qe(e, t, d, l),
      (t.memoizedState = r.state),
      i && ka(t, n, !0),
      t.child
    );
  }
  function Sc(e) {
    var t = e.stateNode;
    t.pendingContext
      ? xa(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && xa(e, t.context, !1),
      Tl(e, t.containerInfo);
  }
  function _c(e, t, n, r, i) {
    return Vn(), _l(i), (t.flags |= 256), qe(e, t, n, r), t.child;
  }
  var Kl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ql(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function xc(e, t, n) {
    var r = t.pendingProps,
      i = Te.current,
      l = !1,
      c = (t.flags & 128) !== 0,
      d;
    if (
      ((d = c) ||
        (d = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      d
        ? ((l = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      Ee(Te, i & 1),
      e === null)
    )
      return (
        Sl(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((c = r.children),
            (e = r.fallback),
            l
              ? ((r = t.mode),
                (l = t.child),
                (c = { mode: "hidden", children: c }),
                !(r & 1) && l !== null
                  ? ((l.childLanes = 0), (l.pendingProps = c))
                  : (l = ei(c, r, 0, null)),
                (e = xn(e, r, n, null)),
                (l.return = t),
                (e.return = t),
                (l.sibling = e),
                (t.child = l),
                (t.child.memoizedState = ql(n)),
                (t.memoizedState = Kl),
                e)
              : Yl(t, c))
      );
    if (((i = e.memoizedState), i !== null && ((d = i.dehydrated), d !== null)))
      return rh(e, t, c, r, d, i, n);
    if (l) {
      (l = r.fallback), (c = t.mode), (i = e.child), (d = i.sibling);
      var h = { mode: "hidden", children: r.children };
      return (
        !(c & 1) && t.child !== i
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = h),
            (t.deletions = null))
          : ((r = ln(i, h)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
        d !== null ? (l = ln(d, l)) : ((l = xn(l, c, n, null)), (l.flags |= 2)),
        (l.return = t),
        (r.return = t),
        (r.sibling = l),
        (t.child = r),
        (r = l),
        (l = t.child),
        (c = e.child.memoizedState),
        (c =
          c === null
            ? ql(n)
            : {
                baseLanes: c.baseLanes | n,
                cachePool: null,
                transitions: c.transitions,
              }),
        (l.memoizedState = c),
        (l.childLanes = e.childLanes & ~n),
        (t.memoizedState = Kl),
        r
      );
    }
    return (
      (l = e.child),
      (e = l.sibling),
      (r = ln(l, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Yl(e, t) {
    return (
      (t = ei({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ho(e, t, n, r) {
    return (
      r !== null && _l(r),
      Qn(t, e.child, null, n),
      (e = Yl(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function rh(e, t, n, r, i, l, c) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Bl(Error(s(422)))), Ho(e, t, c, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (i = t.mode),
          (r = ei({ mode: "visible", children: r.children }, i, 0, null)),
          (l = xn(l, i, c, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          t.mode & 1 && Qn(t, e.child, null, c),
          (t.child.memoizedState = ql(c)),
          (t.memoizedState = Kl),
          l);
    if (!(t.mode & 1)) return Ho(e, t, c, null);
    if (i.data === "$!") {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var d = r.dgst;
      return (
        (r = d), (l = Error(s(419))), (r = Bl(l, r, void 0)), Ho(e, t, c, r)
      );
    }
    if (((d = (c & e.childLanes) !== 0), Je || d)) {
      if (((r = Ae), r !== null)) {
        switch (c & -c) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
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
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        (i = i & (r.suspendedLanes | c) ? 0 : i),
          i !== 0 &&
            i !== l.retryLane &&
            ((l.retryLane = i), It(e, i), kt(r, e, i, -1));
      }
      return cu(), (r = Bl(Error(s(421)))), Ho(e, t, c, r);
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = mh.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = l.treeContext),
        (lt = Yt(i.nextSibling)),
        (it = t),
        (Pe = !0),
        (St = null),
        e !== null &&
          ((dt[pt++] = Mt),
          (dt[pt++] = Dt),
          (dt[pt++] = pn),
          (Mt = e.id),
          (Dt = e.overflow),
          (pn = t)),
        (t = Yl(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ec(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Cl(e.return, t, n);
  }
  function Xl(e, t, n, r, i) {
    var l = e.memoizedState;
    l === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i,
        })
      : ((l.isBackwards = t),
        (l.rendering = null),
        (l.renderingStartTime = 0),
        (l.last = r),
        (l.tail = n),
        (l.tailMode = i));
  }
  function kc(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      l = r.tail;
    if ((qe(e, t, r.children, n), (r = Te.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ec(e, n, t);
          else if (e.tag === 19) Ec(e, n, t);
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
    if ((Ee(Te, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && Mo(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            Xl(t, !1, i, n, l);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && Mo(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          Xl(t, !0, n, null, l);
          break;
        case "together":
          Xl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Bo(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ft(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (gn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = ln(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function oh(e, t, n) {
    switch (t.tag) {
      case 3:
        Sc(t), Vn();
        break;
      case 5:
        Fa(t);
        break;
      case 1:
        Ze(t.type) && ko(t);
        break;
      case 4:
        Tl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value;
        Ee(Oo, r._currentValue), (r._currentValue = i);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Ee(Te, Te.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? xc(e, t, n)
            : (Ee(Te, Te.current & 1),
              (e = Ft(e, t, n)),
              e !== null ? e.sibling : null);
        Ee(Te, Te.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return kc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          Ee(Te, Te.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), yc(e, t, n);
    }
    return Ft(e, t, n);
  }
  var Cc, Gl, Pc, Nc;
  (Cc = function (e, t) {
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
  }),
    (Gl = function () {}),
    (Pc = function (e, t, n, r) {
      var i = e.memoizedProps;
      if (i !== r) {
        (e = t.stateNode), mn(Tt.current);
        var l = null;
        switch (n) {
          case "input":
            (i = Ci(e, i)), (r = Ci(e, r)), (l = []);
            break;
          case "select":
            (i = T({}, i, { value: void 0 })),
              (r = T({}, r, { value: void 0 })),
              (l = []);
            break;
          case "textarea":
            (i = Ti(e, i)), (r = Ti(e, r)), (l = []);
            break;
          default:
            typeof i.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = _o);
        }
        Oi(n, r);
        var c;
        n = null;
        for (k in i)
          if (!r.hasOwnProperty(k) && i.hasOwnProperty(k) && i[k] != null)
            if (k === "style") {
              var d = i[k];
              for (c in d) d.hasOwnProperty(c) && (n || (n = {}), (n[c] = ""));
            } else
              k !== "dangerouslySetInnerHTML" &&
                k !== "children" &&
                k !== "suppressContentEditableWarning" &&
                k !== "suppressHydrationWarning" &&
                k !== "autoFocus" &&
                (f.hasOwnProperty(k)
                  ? l || (l = [])
                  : (l = l || []).push(k, null));
        for (k in r) {
          var h = r[k];
          if (
            ((d = i != null ? i[k] : void 0),
            r.hasOwnProperty(k) && h !== d && (h != null || d != null))
          )
            if (k === "style")
              if (d) {
                for (c in d)
                  !d.hasOwnProperty(c) ||
                    (h && h.hasOwnProperty(c)) ||
                    (n || (n = {}), (n[c] = ""));
                for (c in h)
                  h.hasOwnProperty(c) &&
                    d[c] !== h[c] &&
                    (n || (n = {}), (n[c] = h[c]));
              } else n || (l || (l = []), l.push(k, n)), (n = h);
            else
              k === "dangerouslySetInnerHTML"
                ? ((h = h ? h.__html : void 0),
                  (d = d ? d.__html : void 0),
                  h != null && d !== h && (l = l || []).push(k, h))
                : k === "children"
                ? (typeof h != "string" && typeof h != "number") ||
                  (l = l || []).push(k, "" + h)
                : k !== "suppressContentEditableWarning" &&
                  k !== "suppressHydrationWarning" &&
                  (f.hasOwnProperty(k)
                    ? (h != null && k === "onScroll" && ke("scroll", e),
                      l || d === h || (l = []))
                    : (l = l || []).push(k, h));
        }
        n && (l = l || []).push("style", n);
        var k = l;
        (t.updateQueue = k) && (t.flags |= 4);
      }
    }),
    (Nc = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Dr(e, t) {
    if (!Pe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags & 14680064),
          (r |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags),
          (r |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function ih(e, t, n) {
    var r = t.pendingProps;
    switch ((gl(t), t.tag)) {
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
        return Qe(t), null;
      case 1:
        return Ze(t.type) && Eo(), Qe(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Yn(),
          Ce(Ge),
          Ce(We),
          Ll(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (To(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), St !== null && (uu(St), (St = null)))),
          Gl(e, t),
          Qe(t),
          null
        );
      case 5:
        Rl(t);
        var i = mn(Or.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Pc(e, t, n, r, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Qe(t), null;
          }
          if (((e = mn(Tt.current)), To(t))) {
            (r = t.stateNode), (n = t.type);
            var l = t.memoizedProps;
            switch (((r[Nt] = t), (r[Cr] = l), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                ke("cancel", r), ke("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < xr.length; i++) ke(xr[i], r);
                break;
              case "source":
                ke("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ke("error", r), ke("load", r);
                break;
              case "details":
                ke("toggle", r);
                break;
              case "input":
                us(r, l), ke("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!l.multiple }),
                  ke("invalid", r);
                break;
              case "textarea":
                cs(r, l), ke("invalid", r);
            }
            Oi(n, l), (i = null);
            for (var c in l)
              if (l.hasOwnProperty(c)) {
                var d = l[c];
                c === "children"
                  ? typeof d == "string"
                    ? r.textContent !== d &&
                      (l.suppressHydrationWarning !== !0 &&
                        So(r.textContent, d, e),
                      (i = ["children", d]))
                    : typeof d == "number" &&
                      r.textContent !== "" + d &&
                      (l.suppressHydrationWarning !== !0 &&
                        So(r.textContent, d, e),
                      (i = ["children", "" + d]))
                  : f.hasOwnProperty(c) &&
                    d != null &&
                    c === "onScroll" &&
                    ke("scroll", r);
              }
            switch (n) {
              case "input":
                Gr(r), as(r, l, !0);
                break;
              case "textarea":
                Gr(r), ds(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof l.onClick == "function" && (r.onclick = _o);
            }
            (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (c = i.nodeType === 9 ? i : i.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = ps(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = c.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = c.createElement(n, { is: r.is }))
                  : ((e = c.createElement(n)),
                    n === "select" &&
                      ((c = e),
                      r.multiple
                        ? (c.multiple = !0)
                        : r.size && (c.size = r.size)))
                : (e = c.createElementNS(e, n)),
              (e[Nt] = t),
              (e[Cr] = r),
              Cc(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((c = Li(n, r)), n)) {
                case "dialog":
                  ke("cancel", e), ke("close", e), (i = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ke("load", e), (i = r);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < xr.length; i++) ke(xr[i], e);
                  i = r;
                  break;
                case "source":
                  ke("error", e), (i = r);
                  break;
                case "img":
                case "image":
                case "link":
                  ke("error", e), ke("load", e), (i = r);
                  break;
                case "details":
                  ke("toggle", e), (i = r);
                  break;
                case "input":
                  us(e, r), (i = Ci(e, r)), ke("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = T({}, r, { value: void 0 })),
                    ke("invalid", e);
                  break;
                case "textarea":
                  cs(e, r), (i = Ti(e, r)), ke("invalid", e);
                  break;
                default:
                  i = r;
              }
              Oi(n, i), (d = i);
              for (l in d)
                if (d.hasOwnProperty(l)) {
                  var h = d[l];
                  l === "style"
                    ? ms(e, h)
                    : l === "dangerouslySetInnerHTML"
                    ? ((h = h ? h.__html : void 0), h != null && hs(e, h))
                    : l === "children"
                    ? typeof h == "string"
                      ? (n !== "textarea" || h !== "") && rr(e, h)
                      : typeof h == "number" && rr(e, "" + h)
                    : l !== "suppressContentEditableWarning" &&
                      l !== "suppressHydrationWarning" &&
                      l !== "autoFocus" &&
                      (f.hasOwnProperty(l)
                        ? h != null && l === "onScroll" && ke("scroll", e)
                        : h != null && O(e, l, h, c));
                }
              switch (n) {
                case "input":
                  Gr(e), as(e, r, !1);
                  break;
                case "textarea":
                  Gr(e), ds(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + de(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (l = r.value),
                    l != null
                      ? Rn(e, !!r.multiple, l, !1)
                      : r.defaultValue != null &&
                        Rn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = _o);
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
        return Qe(t), null;
      case 6:
        if (e && t.stateNode != null) Nc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (((n = mn(Or.current)), mn(Tt.current), To(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Nt] = t),
              (l = r.nodeValue !== n) && ((e = it), e !== null))
            )
              switch (e.tag) {
                case 3:
                  So(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    So(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            l && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Nt] = t),
              (t.stateNode = r);
        }
        return Qe(t), null;
      case 13:
        if (
          (Ce(Te),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Pe && lt !== null && t.mode & 1 && !(t.flags & 128))
            Oa(), Vn(), (t.flags |= 98560), (l = !1);
          else if (((l = To(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(s(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(s(317));
              l[Nt] = t;
            } else
              Vn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Qe(t), (l = !1);
          } else St !== null && (uu(St), (St = null)), (l = !0);
          if (!l) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Te.current & 1 ? De === 0 && (De = 3) : cu())),
            t.updateQueue !== null && (t.flags |= 4),
            Qe(t),
            null);
      case 4:
        return (
          Yn(),
          Gl(e, t),
          e === null && Er(t.stateNode.containerInfo),
          Qe(t),
          null
        );
      case 10:
        return kl(t.type._context), Qe(t), null;
      case 17:
        return Ze(t.type) && Eo(), Qe(t), null;
      case 19:
        if ((Ce(Te), (l = t.memoizedState), l === null)) return Qe(t), null;
        if (((r = (t.flags & 128) !== 0), (c = l.rendering), c === null))
          if (r) Dr(l, !1);
          else {
            if (De !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((c = Mo(e)), c !== null)) {
                  for (
                    t.flags |= 128,
                      Dr(l, !1),
                      r = c.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (l = n),
                      (e = r),
                      (l.flags &= 14680066),
                      (c = l.alternate),
                      c === null
                        ? ((l.childLanes = 0),
                          (l.lanes = e),
                          (l.child = null),
                          (l.subtreeFlags = 0),
                          (l.memoizedProps = null),
                          (l.memoizedState = null),
                          (l.updateQueue = null),
                          (l.dependencies = null),
                          (l.stateNode = null))
                        : ((l.childLanes = c.childLanes),
                          (l.lanes = c.lanes),
                          (l.child = c.child),
                          (l.subtreeFlags = 0),
                          (l.deletions = null),
                          (l.memoizedProps = c.memoizedProps),
                          (l.memoizedState = c.memoizedState),
                          (l.updateQueue = c.updateQueue),
                          (l.type = c.type),
                          (e = c.dependencies),
                          (l.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return Ee(Te, (Te.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null &&
              Le() > Jn &&
              ((t.flags |= 128), (r = !0), Dr(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Mo(c)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Dr(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !c.alternate &&
                  !Pe)
              )
                return Qe(t), null;
            } else
              2 * Le() - l.renderingStartTime > Jn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Dr(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((c.sibling = t.child), (t.child = c))
            : ((n = l.last),
              n !== null ? (n.sibling = c) : (t.child = c),
              (l.last = c));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = Le()),
            (t.sibling = null),
            (n = Te.current),
            Ee(Te, r ? (n & 1) | 2 : n & 1),
            t)
          : (Qe(t), null);
      case 22:
      case 23:
        return (
          au(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? ut & 1073741824 &&
              (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Qe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function lh(e, t) {
    switch ((gl(t), t.tag)) {
      case 1:
        return (
          Ze(t.type) && Eo(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Yn(),
          Ce(Ge),
          Ce(We),
          Ll(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Rl(t), null;
      case 13:
        if (
          (Ce(Te), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Vn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Ce(Te), null;
      case 4:
        return Yn(), null;
      case 10:
        return kl(t.type._context), null;
      case 22:
      case 23:
        return au(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Wo = !1,
    Ke = !1,
    uh = typeof WeakSet == "function" ? WeakSet : Set,
    X = null;
  function Gn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Oe(e, t, r);
        }
      else n.current = null;
  }
  function Zl(e, t, n) {
    try {
      n();
    } catch (r) {
      Oe(e, t, r);
    }
  }
  var Tc = !1;
  function sh(e, t) {
    if (((al = so), (e = la()), tl(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset,
              l = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, l.nodeType;
            } catch {
              n = null;
              break e;
            }
            var c = 0,
              d = -1,
              h = -1,
              k = 0,
              j = 0,
              M = e,
              L = null;
            t: for (;;) {
              for (
                var K;
                M !== n || (i !== 0 && M.nodeType !== 3) || (d = c + i),
                  M !== l || (r !== 0 && M.nodeType !== 3) || (h = c + r),
                  M.nodeType === 3 && (c += M.nodeValue.length),
                  (K = M.firstChild) !== null;

              )
                (L = M), (M = K);
              for (;;) {
                if (M === e) break t;
                if (
                  (L === n && ++k === i && (d = c),
                  L === l && ++j === r && (h = c),
                  (K = M.nextSibling) !== null)
                )
                  break;
                (M = L), (L = M.parentNode);
              }
              M = K;
            }
            n = d === -1 || h === -1 ? null : { start: d, end: h };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      cl = { focusedElem: e, selectionRange: n }, so = !1, X = t;
      X !== null;

    )
      if (((t = X), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (X = e);
      else
        for (; X !== null; ) {
          t = X;
          try {
            var G = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (G !== null) {
                    var Z = G.memoizedProps,
                      ze = G.memoizedState,
                      S = t.stateNode,
                      y = S.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Z : _t(t.type, Z),
                        ze
                      );
                    S.__reactInternalSnapshotBeforeUpdate = y;
                  }
                  break;
                case 3:
                  var E = t.stateNode.containerInfo;
                  E.nodeType === 1
                    ? (E.textContent = "")
                    : E.nodeType === 9 &&
                      E.documentElement &&
                      E.removeChild(E.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (F) {
            Oe(t, t.return, F);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (X = e);
            break;
          }
          X = t.return;
        }
    return (G = Tc), (Tc = !1), G;
  }
  function Ir(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & e) === e) {
          var l = i.destroy;
          (i.destroy = void 0), l !== void 0 && Zl(t, n, l);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Vo(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
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
  function Jl(e) {
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
  function Rc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Rc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Nt],
          delete t[Cr],
          delete t[hl],
          delete t[Vp],
          delete t[Qp])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Oc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Lc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Oc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function bl(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = _o));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (bl(e, t, n), e = e.sibling; e !== null; )
        bl(e, t, n), (e = e.sibling);
  }
  function eu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (eu(e, t, n), e = e.sibling; e !== null; )
        eu(e, t, n), (e = e.sibling);
  }
  var $e = null,
    xt = !1;
  function en(e, t, n) {
    for (n = n.child; n !== null; ) zc(e, t, n), (n = n.sibling);
  }
  function zc(e, t, n) {
    if (Pt && typeof Pt.onCommitFiberUnmount == "function")
      try {
        Pt.onCommitFiberUnmount(no, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ke || Gn(n, t);
      case 6:
        var r = $e,
          i = xt;
        ($e = null),
          en(e, t, n),
          ($e = r),
          (xt = i),
          $e !== null &&
            (xt
              ? ((e = $e),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : $e.removeChild(n.stateNode));
        break;
      case 18:
        $e !== null &&
          (xt
            ? ((e = $e),
              (n = n.stateNode),
              e.nodeType === 8
                ? pl(e.parentNode, n)
                : e.nodeType === 1 && pl(e, n),
              hr(e))
            : pl($e, n.stateNode));
        break;
      case 4:
        (r = $e),
          (i = xt),
          ($e = n.stateNode.containerInfo),
          (xt = !0),
          en(e, t, n),
          ($e = r),
          (xt = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ke &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          i = r = r.next;
          do {
            var l = i,
              c = l.destroy;
            (l = l.tag),
              c !== void 0 && (l & 2 || l & 4) && Zl(n, t, c),
              (i = i.next);
          } while (i !== r);
        }
        en(e, t, n);
        break;
      case 1:
        if (
          !Ke &&
          (Gn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (d) {
            Oe(n, t, d);
          }
        en(e, t, n);
        break;
      case 21:
        en(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ke = (r = Ke) || n.memoizedState !== null), en(e, t, n), (Ke = r))
          : en(e, t, n);
        break;
      default:
        en(e, t, n);
    }
  }
  function jc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new uh()),
        t.forEach(function (r) {
          var i = yh.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(i, i));
        });
    }
  }
  function Et(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var l = e,
            c = t,
            d = c;
          e: for (; d !== null; ) {
            switch (d.tag) {
              case 5:
                ($e = d.stateNode), (xt = !1);
                break e;
              case 3:
                ($e = d.stateNode.containerInfo), (xt = !0);
                break e;
              case 4:
                ($e = d.stateNode.containerInfo), (xt = !0);
                break e;
            }
            d = d.return;
          }
          if ($e === null) throw Error(s(160));
          zc(l, c, i), ($e = null), (xt = !1);
          var h = i.alternate;
          h !== null && (h.return = null), (i.return = null);
        } catch (k) {
          Oe(i, t, k);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Mc(t, e), (t = t.sibling);
  }
  function Mc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Et(t, e), Ot(e), r & 4)) {
          try {
            Ir(3, e, e.return), Vo(3, e);
          } catch (Z) {
            Oe(e, e.return, Z);
          }
          try {
            Ir(5, e, e.return);
          } catch (Z) {
            Oe(e, e.return, Z);
          }
        }
        break;
      case 1:
        Et(t, e), Ot(e), r & 512 && n !== null && Gn(n, n.return);
        break;
      case 5:
        if (
          (Et(t, e),
          Ot(e),
          r & 512 && n !== null && Gn(n, n.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            rr(i, "");
          } catch (Z) {
            Oe(e, e.return, Z);
          }
        }
        if (r & 4 && ((i = e.stateNode), i != null)) {
          var l = e.memoizedProps,
            c = n !== null ? n.memoizedProps : l,
            d = e.type,
            h = e.updateQueue;
          if (((e.updateQueue = null), h !== null))
            try {
              d === "input" && l.type === "radio" && l.name != null && ss(i, l),
                Li(d, c);
              var k = Li(d, l);
              for (c = 0; c < h.length; c += 2) {
                var j = h[c],
                  M = h[c + 1];
                j === "style"
                  ? ms(i, M)
                  : j === "dangerouslySetInnerHTML"
                  ? hs(i, M)
                  : j === "children"
                  ? rr(i, M)
                  : O(i, j, M, k);
              }
              switch (d) {
                case "input":
                  Pi(i, l);
                  break;
                case "textarea":
                  fs(i, l);
                  break;
                case "select":
                  var L = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!l.multiple;
                  var K = l.value;
                  K != null
                    ? Rn(i, !!l.multiple, K, !1)
                    : L !== !!l.multiple &&
                      (l.defaultValue != null
                        ? Rn(i, !!l.multiple, l.defaultValue, !0)
                        : Rn(i, !!l.multiple, l.multiple ? [] : "", !1));
              }
              i[Cr] = l;
            } catch (Z) {
              Oe(e, e.return, Z);
            }
        }
        break;
      case 6:
        if ((Et(t, e), Ot(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (i = e.stateNode), (l = e.memoizedProps);
          try {
            i.nodeValue = l;
          } catch (Z) {
            Oe(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (
          (Et(t, e), Ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            hr(t.containerInfo);
          } catch (Z) {
            Oe(e, e.return, Z);
          }
        break;
      case 4:
        Et(t, e), Ot(e);
        break;
      case 13:
        Et(t, e),
          Ot(e),
          (i = e.child),
          i.flags & 8192 &&
            ((l = i.memoizedState !== null),
            (i.stateNode.isHidden = l),
            !l ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (ru = Le())),
          r & 4 && jc(e);
        break;
      case 22:
        if (
          ((j = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ke = (k = Ke) || j), Et(t, e), (Ke = k)) : Et(t, e),
          Ot(e),
          r & 8192)
        ) {
          if (
            ((k = e.memoizedState !== null),
            (e.stateNode.isHidden = k) && !j && e.mode & 1)
          )
            for (X = e, j = e.child; j !== null; ) {
              for (M = X = j; X !== null; ) {
                switch (((L = X), (K = L.child), L.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ir(4, L, L.return);
                    break;
                  case 1:
                    Gn(L, L.return);
                    var G = L.stateNode;
                    if (typeof G.componentWillUnmount == "function") {
                      (r = L), (n = L.return);
                      try {
                        (t = r),
                          (G.props = t.memoizedProps),
                          (G.state = t.memoizedState),
                          G.componentWillUnmount();
                      } catch (Z) {
                        Oe(r, n, Z);
                      }
                    }
                    break;
                  case 5:
                    Gn(L, L.return);
                    break;
                  case 22:
                    if (L.memoizedState !== null) {
                      Ac(M);
                      continue;
                    }
                }
                K !== null ? ((K.return = L), (X = K)) : Ac(M);
              }
              j = j.sibling;
            }
          e: for (j = null, M = e; ; ) {
            if (M.tag === 5) {
              if (j === null) {
                j = M;
                try {
                  (i = M.stateNode),
                    k
                      ? ((l = i.style),
                        typeof l.setProperty == "function"
                          ? l.setProperty("display", "none", "important")
                          : (l.display = "none"))
                      : ((d = M.stateNode),
                        (h = M.memoizedProps.style),
                        (c =
                          h != null && h.hasOwnProperty("display")
                            ? h.display
                            : null),
                        (d.style.display = vs("display", c)));
                } catch (Z) {
                  Oe(e, e.return, Z);
                }
              }
            } else if (M.tag === 6) {
              if (j === null)
                try {
                  M.stateNode.nodeValue = k ? "" : M.memoizedProps;
                } catch (Z) {
                  Oe(e, e.return, Z);
                }
            } else if (
              ((M.tag !== 22 && M.tag !== 23) ||
                M.memoizedState === null ||
                M === e) &&
              M.child !== null
            ) {
              (M.child.return = M), (M = M.child);
              continue;
            }
            if (M === e) break e;
            for (; M.sibling === null; ) {
              if (M.return === null || M.return === e) break e;
              j === M && (j = null), (M = M.return);
            }
            j === M && (j = null),
              (M.sibling.return = M.return),
              (M = M.sibling);
          }
        }
        break;
      case 19:
        Et(t, e), Ot(e), r & 4 && jc(e);
        break;
      case 21:
        break;
      default:
        Et(t, e), Ot(e);
    }
  }
  function Ot(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Oc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (rr(i, ""), (r.flags &= -33));
            var l = Lc(e);
            eu(e, l, i);
            break;
          case 3:
          case 4:
            var c = r.stateNode.containerInfo,
              d = Lc(e);
            bl(e, d, c);
            break;
          default:
            throw Error(s(161));
        }
      } catch (h) {
        Oe(e, e.return, h);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ah(e, t, n) {
    (X = e), Dc(e);
  }
  function Dc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; X !== null; ) {
      var i = X,
        l = i.child;
      if (i.tag === 22 && r) {
        var c = i.memoizedState !== null || Wo;
        if (!c) {
          var d = i.alternate,
            h = (d !== null && d.memoizedState !== null) || Ke;
          d = Wo;
          var k = Ke;
          if (((Wo = c), (Ke = h) && !k))
            for (X = i; X !== null; )
              (c = X),
                (h = c.child),
                c.tag === 22 && c.memoizedState !== null
                  ? Fc(i)
                  : h !== null
                  ? ((h.return = c), (X = h))
                  : Fc(i);
          for (; l !== null; ) (X = l), Dc(l), (l = l.sibling);
          (X = i), (Wo = d), (Ke = k);
        }
        Ic(e);
      } else
        i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (X = l)) : Ic(e);
    }
  }
  function Ic(e) {
    for (; X !== null; ) {
      var t = X;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ke || Vo(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ke)
                  if (n === null) r.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : _t(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      i,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var l = t.updateQueue;
                l !== null && Aa(t, l, r);
                break;
              case 3:
                var c = t.updateQueue;
                if (c !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Aa(t, c, n);
                }
                break;
              case 5:
                var d = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = d;
                  var h = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      h.autoFocus && n.focus();
                      break;
                    case "img":
                      h.src && (n.src = h.src);
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
                  var k = t.alternate;
                  if (k !== null) {
                    var j = k.memoizedState;
                    if (j !== null) {
                      var M = j.dehydrated;
                      M !== null && hr(M);
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
                throw Error(s(163));
            }
          Ke || (t.flags & 512 && Jl(t));
        } catch (L) {
          Oe(t, t.return, L);
        }
      }
      if (t === e) {
        X = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (X = n);
        break;
      }
      X = t.return;
    }
  }
  function Ac(e) {
    for (; X !== null; ) {
      var t = X;
      if (t === e) {
        X = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (X = n);
        break;
      }
      X = t.return;
    }
  }
  function Fc(e) {
    for (; X !== null; ) {
      var t = X;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Vo(4, t);
            } catch (h) {
              Oe(t, n, h);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (h) {
                Oe(t, i, h);
              }
            }
            var l = t.return;
            try {
              Jl(t);
            } catch (h) {
              Oe(t, l, h);
            }
            break;
          case 5:
            var c = t.return;
            try {
              Jl(t);
            } catch (h) {
              Oe(t, c, h);
            }
        }
      } catch (h) {
        Oe(t, t.return, h);
      }
      if (t === e) {
        X = null;
        break;
      }
      var d = t.sibling;
      if (d !== null) {
        (d.return = t.return), (X = d);
        break;
      }
      X = t.return;
    }
  }
  var ch = Math.ceil,
    Qo = B.ReactCurrentDispatcher,
    tu = B.ReactCurrentOwner,
    mt = B.ReactCurrentBatchConfig,
    ye = 0,
    Ae = null,
    je = null,
    Ue = 0,
    ut = 0,
    Zn = Xt(0),
    De = 0,
    Ar = null,
    gn = 0,
    Ko = 0,
    nu = 0,
    Fr = null,
    be = null,
    ru = 0,
    Jn = 1 / 0,
    $t = null,
    qo = !1,
    ou = null,
    tn = null,
    Yo = !1,
    nn = null,
    Xo = 0,
    $r = 0,
    iu = null,
    Go = -1,
    Zo = 0;
  function Ye() {
    return ye & 6 ? Le() : Go !== -1 ? Go : (Go = Le());
  }
  function rn(e) {
    return e.mode & 1
      ? ye & 2 && Ue !== 0
        ? Ue & -Ue
        : qp.transition !== null
        ? (Zo === 0 && (Zo = Ls()), Zo)
        : ((e = _e),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Us(e.type))),
          e)
      : 1;
  }
  function kt(e, t, n, r) {
    if (50 < $r) throw (($r = 0), (iu = null), Error(s(185)));
    ar(e, n, r),
      (!(ye & 2) || e !== Ae) &&
        (e === Ae && (!(ye & 2) && (Ko |= n), De === 4 && on(e, Ue)),
        et(e, r),
        n === 1 &&
          ye === 0 &&
          !(t.mode & 1) &&
          ((Jn = Le() + 500), Co && Zt()));
  }
  function et(e, t) {
    var n = e.callbackNode;
    qd(e, t);
    var r = io(e, e === Ae ? Ue : 0);
    if (r === 0)
      n !== null && Ts(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Ts(n), t === 1))
        e.tag === 0 ? Kp(Uc.bind(null, e)) : Ca(Uc.bind(null, e)),
          Bp(function () {
            !(ye & 6) && Zt();
          }),
          (n = null);
      else {
        switch (zs(r)) {
          case 1:
            n = Fi;
            break;
          case 4:
            n = Rs;
            break;
          case 16:
            n = to;
            break;
          case 536870912:
            n = Os;
            break;
          default:
            n = to;
        }
        n = Yc(n, $c.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function $c(e, t) {
    if (((Go = -1), (Zo = 0), ye & 6)) throw Error(s(327));
    var n = e.callbackNode;
    if (bn() && e.callbackNode !== n) return null;
    var r = io(e, e === Ae ? Ue : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Jo(e, r);
    else {
      t = r;
      var i = ye;
      ye |= 2;
      var l = Bc();
      (Ae !== e || Ue !== t) && (($t = null), (Jn = Le() + 500), Sn(e, t));
      do
        try {
          ph();
          break;
        } catch (d) {
          Hc(e, d);
        }
      while (!0);
      El(),
        (Qo.current = l),
        (ye = i),
        je !== null ? (t = 0) : ((Ae = null), (Ue = 0), (t = De));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = $i(e)), i !== 0 && ((r = i), (t = lu(e, i)))),
        t === 1)
      )
        throw ((n = Ar), Sn(e, 0), on(e, r), et(e, Le()), n);
      if (t === 6) on(e, r);
      else {
        if (
          ((i = e.current.alternate),
          !(r & 30) &&
            !fh(i) &&
            ((t = Jo(e, r)),
            t === 2 && ((l = $i(e)), l !== 0 && ((r = l), (t = lu(e, l)))),
            t === 1))
        )
          throw ((n = Ar), Sn(e, 0), on(e, r), et(e, Le()), n);
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            _n(e, be, $t);
            break;
          case 3:
            if (
              (on(e, r),
              (r & 130023424) === r && ((t = ru + 500 - Le()), 10 < t))
            ) {
              if (io(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                Ye(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = dl(_n.bind(null, e, be, $t), t);
              break;
            }
            _n(e, be, $t);
            break;
          case 4:
            if ((on(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var c = 31 - gt(r);
              (l = 1 << c), (c = t[c]), c > i && (i = c), (r &= ~l);
            }
            if (
              ((r = i),
              (r = Le() - r),
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
                  : 1960 * ch(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = dl(_n.bind(null, e, be, $t), r);
              break;
            }
            _n(e, be, $t);
            break;
          case 5:
            _n(e, be, $t);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return et(e, Le()), e.callbackNode === n ? $c.bind(null, e) : null;
  }
  function lu(e, t) {
    var n = Fr;
    return (
      e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256),
      (e = Jo(e, t)),
      e !== 2 && ((t = be), (be = n), t !== null && uu(t)),
      e
    );
  }
  function uu(e) {
    be === null ? (be = e) : be.push.apply(be, e);
  }
  function fh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              l = i.getSnapshot;
            i = i.value;
            try {
              if (!wt(l(), i)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
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
      t &= ~nu,
        t &= ~Ko,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - gt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Uc(e) {
    if (ye & 6) throw Error(s(327));
    bn();
    var t = io(e, 0);
    if (!(t & 1)) return et(e, Le()), null;
    var n = Jo(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = $i(e);
      r !== 0 && ((t = r), (n = lu(e, r)));
    }
    if (n === 1) throw ((n = Ar), Sn(e, 0), on(e, t), et(e, Le()), n);
    if (n === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      _n(e, be, $t),
      et(e, Le()),
      null
    );
  }
  function su(e, t) {
    var n = ye;
    ye |= 1;
    try {
      return e(t);
    } finally {
      (ye = n), ye === 0 && ((Jn = Le() + 500), Co && Zt());
    }
  }
  function wn(e) {
    nn !== null && nn.tag === 0 && !(ye & 6) && bn();
    var t = ye;
    ye |= 1;
    var n = mt.transition,
      r = _e;
    try {
      if (((mt.transition = null), (_e = 1), e)) return e();
    } finally {
      (_e = r), (mt.transition = n), (ye = t), !(ye & 6) && Zt();
    }
  }
  function au() {
    (ut = Zn.current), Ce(Zn);
  }
  function Sn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Hp(n)), je !== null))
      for (n = je.return; n !== null; ) {
        var r = n;
        switch ((gl(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Eo();
            break;
          case 3:
            Yn(), Ce(Ge), Ce(We), Ll();
            break;
          case 5:
            Rl(r);
            break;
          case 4:
            Yn();
            break;
          case 13:
            Ce(Te);
            break;
          case 19:
            Ce(Te);
            break;
          case 10:
            kl(r.type._context);
            break;
          case 22:
          case 23:
            au();
        }
        n = n.return;
      }
    if (
      ((Ae = e),
      (je = e = ln(e.current, null)),
      (Ue = ut = t),
      (De = 0),
      (Ar = null),
      (nu = Ko = gn = 0),
      (be = Fr = null),
      vn !== null)
    ) {
      for (t = 0; t < vn.length; t++)
        if (((n = vn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var i = r.next,
            l = n.pending;
          if (l !== null) {
            var c = l.next;
            (l.next = i), (r.next = c);
          }
          n.pending = r;
        }
      vn = null;
    }
    return e;
  }
  function Hc(e, t) {
    do {
      var n = je;
      try {
        if ((El(), (Do.current = $o), Io)) {
          for (var r = Re.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), (r = r.next);
          }
          Io = !1;
        }
        if (
          ((yn = 0),
          (Ie = Me = Re = null),
          (Lr = !1),
          (zr = 0),
          (tu.current = null),
          n === null || n.return === null)
        ) {
          (De = 1), (Ar = t), (je = null);
          break;
        }
        e: {
          var l = e,
            c = n.return,
            d = n,
            h = t;
          if (
            ((t = Ue),
            (d.flags |= 32768),
            h !== null && typeof h == "object" && typeof h.then == "function")
          ) {
            var k = h,
              j = d,
              M = j.tag;
            if (!(j.mode & 1) && (M === 0 || M === 11 || M === 15)) {
              var L = j.alternate;
              L
                ? ((j.updateQueue = L.updateQueue),
                  (j.memoizedState = L.memoizedState),
                  (j.lanes = L.lanes))
                : ((j.updateQueue = null), (j.memoizedState = null));
            }
            var K = dc(c);
            if (K !== null) {
              (K.flags &= -257),
                pc(K, c, d, l, t),
                K.mode & 1 && fc(l, k, t),
                (t = K),
                (h = k);
              var G = t.updateQueue;
              if (G === null) {
                var Z = new Set();
                Z.add(h), (t.updateQueue = Z);
              } else G.add(h);
              break e;
            } else {
              if (!(t & 1)) {
                fc(l, k, t), cu();
                break e;
              }
              h = Error(s(426));
            }
          } else if (Pe && d.mode & 1) {
            var ze = dc(c);
            if (ze !== null) {
              !(ze.flags & 65536) && (ze.flags |= 256),
                pc(ze, c, d, l, t),
                _l(Xn(h, d));
              break e;
            }
          }
          (l = h = Xn(h, d)),
            De !== 4 && (De = 2),
            Fr === null ? (Fr = [l]) : Fr.push(l),
            (l = c);
          do {
            switch (l.tag) {
              case 3:
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = ac(l, h, t);
                Ia(l, S);
                break e;
              case 1:
                d = h;
                var y = l.type,
                  E = l.stateNode;
                if (
                  !(l.flags & 128) &&
                  (typeof y.getDerivedStateFromError == "function" ||
                    (E !== null &&
                      typeof E.componentDidCatch == "function" &&
                      (tn === null || !tn.has(E))))
                ) {
                  (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                  var F = cc(l, d, t);
                  Ia(l, F);
                  break e;
                }
            }
            l = l.return;
          } while (l !== null);
        }
        Vc(n);
      } catch (J) {
        (t = J), je === n && n !== null && (je = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Bc() {
    var e = Qo.current;
    return (Qo.current = $o), e === null ? $o : e;
  }
  function cu() {
    (De === 0 || De === 3 || De === 2) && (De = 4),
      Ae === null || (!(gn & 268435455) && !(Ko & 268435455)) || on(Ae, Ue);
  }
  function Jo(e, t) {
    var n = ye;
    ye |= 2;
    var r = Bc();
    (Ae !== e || Ue !== t) && (($t = null), Sn(e, t));
    do
      try {
        dh();
        break;
      } catch (i) {
        Hc(e, i);
      }
    while (!0);
    if ((El(), (ye = n), (Qo.current = r), je !== null)) throw Error(s(261));
    return (Ae = null), (Ue = 0), De;
  }
  function dh() {
    for (; je !== null; ) Wc(je);
  }
  function ph() {
    for (; je !== null && !Fd(); ) Wc(je);
  }
  function Wc(e) {
    var t = qc(e.alternate, e, ut);
    (e.memoizedProps = e.pendingProps),
      t === null ? Vc(e) : (je = t),
      (tu.current = null);
  }
  function Vc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = lh(n, t)), n !== null)) {
          (n.flags &= 32767), (je = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (De = 6), (je = null);
          return;
        }
      } else if (((n = ih(n, t, ut)), n !== null)) {
        je = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        je = t;
        return;
      }
      je = t = e;
    } while (t !== null);
    De === 0 && (De = 5);
  }
  function _n(e, t, n) {
    var r = _e,
      i = mt.transition;
    try {
      (mt.transition = null), (_e = 1), hh(e, t, n, r);
    } finally {
      (mt.transition = i), (_e = r);
    }
    return null;
  }
  function hh(e, t, n, r) {
    do bn();
    while (nn !== null);
    if (ye & 6) throw Error(s(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(s(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var l = n.lanes | n.childLanes;
    if (
      (Yd(e, l),
      e === Ae && ((je = Ae = null), (Ue = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Yo ||
        ((Yo = !0),
        Yc(to, function () {
          return bn(), null;
        })),
      (l = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || l)
    ) {
      (l = mt.transition), (mt.transition = null);
      var c = _e;
      _e = 1;
      var d = ye;
      (ye |= 4),
        (tu.current = null),
        sh(e, n),
        Mc(n, e),
        Mp(cl),
        (so = !!al),
        (cl = al = null),
        (e.current = n),
        ah(n),
        $d(),
        (ye = d),
        (_e = c),
        (mt.transition = l);
    } else e.current = n;
    if (
      (Yo && ((Yo = !1), (nn = e), (Xo = i)),
      (l = e.pendingLanes),
      l === 0 && (tn = null),
      Bd(n.stateNode),
      et(e, Le()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (qo) throw ((qo = !1), (e = ou), (ou = null), e);
    return (
      Xo & 1 && e.tag !== 0 && bn(),
      (l = e.pendingLanes),
      l & 1 ? (e === iu ? $r++ : (($r = 0), (iu = e))) : ($r = 0),
      Zt(),
      null
    );
  }
  function bn() {
    if (nn !== null) {
      var e = zs(Xo),
        t = mt.transition,
        n = _e;
      try {
        if (((mt.transition = null), (_e = 16 > e ? 16 : e), nn === null))
          var r = !1;
        else {
          if (((e = nn), (nn = null), (Xo = 0), ye & 6)) throw Error(s(331));
          var i = ye;
          for (ye |= 4, X = e.current; X !== null; ) {
            var l = X,
              c = l.child;
            if (X.flags & 16) {
              var d = l.deletions;
              if (d !== null) {
                for (var h = 0; h < d.length; h++) {
                  var k = d[h];
                  for (X = k; X !== null; ) {
                    var j = X;
                    switch (j.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ir(8, j, l);
                    }
                    var M = j.child;
                    if (M !== null) (M.return = j), (X = M);
                    else
                      for (; X !== null; ) {
                        j = X;
                        var L = j.sibling,
                          K = j.return;
                        if ((Rc(j), j === k)) {
                          X = null;
                          break;
                        }
                        if (L !== null) {
                          (L.return = K), (X = L);
                          break;
                        }
                        X = K;
                      }
                  }
                }
                var G = l.alternate;
                if (G !== null) {
                  var Z = G.child;
                  if (Z !== null) {
                    G.child = null;
                    do {
                      var ze = Z.sibling;
                      (Z.sibling = null), (Z = ze);
                    } while (Z !== null);
                  }
                }
                X = l;
              }
            }
            if (l.subtreeFlags & 2064 && c !== null) (c.return = l), (X = c);
            else
              e: for (; X !== null; ) {
                if (((l = X), l.flags & 2048))
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ir(9, l, l.return);
                  }
                var S = l.sibling;
                if (S !== null) {
                  (S.return = l.return), (X = S);
                  break e;
                }
                X = l.return;
              }
          }
          var y = e.current;
          for (X = y; X !== null; ) {
            c = X;
            var E = c.child;
            if (c.subtreeFlags & 2064 && E !== null) (E.return = c), (X = E);
            else
              e: for (c = y; X !== null; ) {
                if (((d = X), d.flags & 2048))
                  try {
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Vo(9, d);
                    }
                  } catch (J) {
                    Oe(d, d.return, J);
                  }
                if (d === c) {
                  X = null;
                  break e;
                }
                var F = d.sibling;
                if (F !== null) {
                  (F.return = d.return), (X = F);
                  break e;
                }
                X = d.return;
              }
          }
          if (
            ((ye = i),
            Zt(),
            Pt && typeof Pt.onPostCommitFiberRoot == "function")
          )
            try {
              Pt.onPostCommitFiberRoot(no, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (_e = n), (mt.transition = t);
      }
    }
    return !1;
  }
  function Qc(e, t, n) {
    (t = Xn(n, t)),
      (t = ac(e, t, 1)),
      (e = bt(e, t, 1)),
      (t = Ye()),
      e !== null && (ar(e, 1, t), et(e, t));
  }
  function Oe(e, t, n) {
    if (e.tag === 3) Qc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Qc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (tn === null || !tn.has(r)))
          ) {
            (e = Xn(n, e)),
              (e = cc(t, e, 1)),
              (t = bt(t, e, 1)),
              (e = Ye()),
              t !== null && (ar(t, 1, e), et(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function vh(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ye()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ae === e &&
        (Ue & n) === n &&
        (De === 4 || (De === 3 && (Ue & 130023424) === Ue && 500 > Le() - ru)
          ? Sn(e, 0)
          : (nu |= n)),
      et(e, t);
  }
  function Kc(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = oo), (oo <<= 1), !(oo & 130023424) && (oo = 4194304))
        : (t = 1));
    var n = Ye();
    (e = It(e, t)), e !== null && (ar(e, t, n), et(e, n));
  }
  function mh(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Kc(e, n);
  }
  function yh(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), Kc(e, n);
  }
  var qc;
  qc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ge.current) Je = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Je = !1), oh(e, t, n);
        Je = !!(e.flags & 131072);
      }
    else (Je = !1), Pe && t.flags & 1048576 && Pa(t, No, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Bo(e, t), (e = t.pendingProps);
        var i = Hn(t, We.current);
        qn(t, n), (i = Ml(null, t, r, e, i, n));
        var l = Dl();
        return (
          (t.flags |= 1),
          typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ze(r) ? ((l = !0), ko(t)) : (l = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              Nl(t),
              (i.updater = Uo),
              (t.stateNode = i),
              (i._reactInternals = t),
              Hl(t, r, e, n),
              (t = Ql(null, t, r, !0, l, n)))
            : ((t.tag = 0), Pe && l && yl(t), qe(null, t, i, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Bo(e, t),
            (e = t.pendingProps),
            (i = r._init),
            (r = i(r._payload)),
            (t.type = r),
            (i = t.tag = wh(r)),
            (e = _t(r, e)),
            i)
          ) {
            case 0:
              t = Vl(null, t, r, e, n);
              break e;
            case 1:
              t = wc(null, t, r, e, n);
              break e;
            case 11:
              t = hc(null, t, r, e, n);
              break e;
            case 14:
              t = vc(null, t, r, _t(r.type, e), n);
              break e;
          }
          throw Error(s(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : _t(r, i)),
          Vl(e, t, r, i, n)
        );
      case 1:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : _t(r, i)),
          wc(e, t, r, i, n)
        );
      case 3:
        e: {
          if ((Sc(t), e === null)) throw Error(s(387));
          (r = t.pendingProps),
            (l = t.memoizedState),
            (i = l.element),
            Da(e, t),
            jo(t, r, null, n);
          var c = t.memoizedState;
          if (((r = c.element), l.isDehydrated))
            if (
              ((l = {
                element: r,
                isDehydrated: !1,
                cache: c.cache,
                pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
                transitions: c.transitions,
              }),
              (t.updateQueue.baseState = l),
              (t.memoizedState = l),
              t.flags & 256)
            ) {
              (i = Xn(Error(s(423)), t)), (t = _c(e, t, r, n, i));
              break e;
            } else if (r !== i) {
              (i = Xn(Error(s(424)), t)), (t = _c(e, t, r, n, i));
              break e;
            } else
              for (
                lt = Yt(t.stateNode.containerInfo.firstChild),
                  it = t,
                  Pe = !0,
                  St = null,
                  n = ja(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Vn(), r === i)) {
              t = Ft(e, t, n);
              break e;
            }
            qe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Fa(t),
          e === null && Sl(t),
          (r = t.type),
          (i = t.pendingProps),
          (l = e !== null ? e.memoizedProps : null),
          (c = i.children),
          fl(r, i) ? (c = null) : l !== null && fl(r, l) && (t.flags |= 32),
          gc(e, t),
          qe(e, t, c, n),
          t.child
        );
      case 6:
        return e === null && Sl(t), null;
      case 13:
        return xc(e, t, n);
      case 4:
        return (
          Tl(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Qn(t, null, r, n)) : qe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : _t(r, i)),
          hc(e, t, r, i, n)
        );
      case 7:
        return qe(e, t, t.pendingProps, n), t.child;
      case 8:
        return qe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return qe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (i = t.pendingProps),
            (l = t.memoizedProps),
            (c = i.value),
            Ee(Oo, r._currentValue),
            (r._currentValue = c),
            l !== null)
          )
            if (wt(l.value, c)) {
              if (l.children === i.children && !Ge.current) {
                t = Ft(e, t, n);
                break e;
              }
            } else
              for (l = t.child, l !== null && (l.return = t); l !== null; ) {
                var d = l.dependencies;
                if (d !== null) {
                  c = l.child;
                  for (var h = d.firstContext; h !== null; ) {
                    if (h.context === r) {
                      if (l.tag === 1) {
                        (h = At(-1, n & -n)), (h.tag = 2);
                        var k = l.updateQueue;
                        if (k !== null) {
                          k = k.shared;
                          var j = k.pending;
                          j === null
                            ? (h.next = h)
                            : ((h.next = j.next), (j.next = h)),
                            (k.pending = h);
                        }
                      }
                      (l.lanes |= n),
                        (h = l.alternate),
                        h !== null && (h.lanes |= n),
                        Cl(l.return, n, t),
                        (d.lanes |= n);
                      break;
                    }
                    h = h.next;
                  }
                } else if (l.tag === 10) c = l.type === t.type ? null : l.child;
                else if (l.tag === 18) {
                  if (((c = l.return), c === null)) throw Error(s(341));
                  (c.lanes |= n),
                    (d = c.alternate),
                    d !== null && (d.lanes |= n),
                    Cl(c, n, t),
                    (c = l.sibling);
                } else c = l.child;
                if (c !== null) c.return = l;
                else
                  for (c = l; c !== null; ) {
                    if (c === t) {
                      c = null;
                      break;
                    }
                    if (((l = c.sibling), l !== null)) {
                      (l.return = c.return), (c = l);
                      break;
                    }
                    c = c.return;
                  }
                l = c;
              }
          qe(e, t, i.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (r = t.pendingProps.children),
          qn(t, n),
          (i = ht(i)),
          (r = r(i)),
          (t.flags |= 1),
          qe(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (i = _t(r, t.pendingProps)),
          (i = _t(r.type, i)),
          vc(e, t, r, i, n)
        );
      case 15:
        return mc(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : _t(r, i)),
          Bo(e, t),
          (t.tag = 1),
          Ze(r) ? ((e = !0), ko(t)) : (e = !1),
          qn(t, n),
          uc(t, r, i),
          Hl(t, r, i, n),
          Ql(null, t, r, !0, e, n)
        );
      case 19:
        return kc(e, t, n);
      case 22:
        return yc(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Yc(e, t) {
    return Ns(e, t);
  }
  function gh(e, t, n, r) {
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
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function yt(e, t, n, r) {
    return new gh(e, t, n, r);
  }
  function fu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function wh(e) {
    if (typeof e == "function") return fu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ie)) return 11;
      if (e === me) return 14;
    }
    return 2;
  }
  function ln(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = yt(e.tag, t, e.key, e.mode)),
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
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function bo(e, t, n, r, i, l) {
    var c = 2;
    if (((r = e), typeof e == "function")) fu(e) && (c = 1);
    else if (typeof e == "string") c = 5;
    else
      e: switch (e) {
        case Q:
          return xn(n.children, i, l, t);
        case W:
          (c = 8), (i |= 8);
          break;
        case ce:
          return (
            (e = yt(12, n, t, i | 2)), (e.elementType = ce), (e.lanes = l), e
          );
        case he:
          return (e = yt(13, n, t, i)), (e.elementType = he), (e.lanes = l), e;
        case ve:
          return (e = yt(19, n, t, i)), (e.elementType = ve), (e.lanes = l), e;
        case we:
          return ei(n, i, l, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case re:
                c = 10;
                break e;
              case se:
                c = 9;
                break e;
              case ie:
                c = 11;
                break e;
              case me:
                c = 14;
                break e;
              case Ne:
                (c = 16), (r = null);
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = yt(c, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
    );
  }
  function xn(e, t, n, r) {
    return (e = yt(7, e, r, t)), (e.lanes = n), e;
  }
  function ei(e, t, n, r) {
    return (
      (e = yt(22, e, r, t)),
      (e.elementType = we),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function du(e, t, n) {
    return (e = yt(6, e, null, t)), (e.lanes = n), e;
  }
  function pu(e, t, n) {
    return (
      (t = yt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Sh(e, t, n, r, i) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ui(0)),
      (this.expirationTimes = Ui(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ui(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function hu(e, t, n, r, i, l, c, d, h) {
    return (
      (e = new Sh(e, t, n, d, h)),
      t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
      (l = yt(3, null, null, t)),
      (e.current = l),
      (l.stateNode = e),
      (l.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Nl(l),
      e
    );
  }
  function _h(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: H,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Xc(e) {
    if (!e) return Gt;
    e = e._reactInternals;
    e: {
      if (cn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ze(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ze(n)) return Ea(e, n, t);
    }
    return t;
  }
  function Gc(e, t, n, r, i, l, c, d, h) {
    return (
      (e = hu(n, r, !0, e, i, l, c, d, h)),
      (e.context = Xc(null)),
      (n = e.current),
      (r = Ye()),
      (i = rn(n)),
      (l = At(r, i)),
      (l.callback = t ?? null),
      bt(n, l, i),
      (e.current.lanes = i),
      ar(e, i, r),
      et(e, r),
      e
    );
  }
  function ti(e, t, n, r) {
    var i = t.current,
      l = Ye(),
      c = rn(i);
    return (
      (n = Xc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = At(l, c)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = bt(i, t, c)),
      e !== null && (kt(e, i, c, l), zo(e, i, c)),
      c
    );
  }
  function ni(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Zc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function vu(e, t) {
    Zc(e, t), (e = e.alternate) && Zc(e, t);
  }
  function xh() {
    return null;
  }
  var Jc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function mu(e) {
    this._internalRoot = e;
  }
  (ri.prototype.render = mu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      ti(e, t, null, null);
    }),
    (ri.prototype.unmount = mu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          wn(function () {
            ti(null, e, null, null);
          }),
            (t[zt] = null);
        }
      });
  function ri(e) {
    this._internalRoot = e;
  }
  ri.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ds();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
      Qt.splice(n, 0, e), n === 0 && Fs(e);
    }
  };
  function yu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function oi(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function bc() {}
  function Eh(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var l = r;
        r = function () {
          var k = ni(c);
          l.call(k);
        };
      }
      var c = Gc(t, r, e, 0, null, !1, !1, "", bc);
      return (
        (e._reactRootContainer = c),
        (e[zt] = c.current),
        Er(e.nodeType === 8 ? e.parentNode : e),
        wn(),
        c
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
      var d = r;
      r = function () {
        var k = ni(h);
        d.call(k);
      };
    }
    var h = hu(e, 0, !1, null, null, !1, !1, "", bc);
    return (
      (e._reactRootContainer = h),
      (e[zt] = h.current),
      Er(e.nodeType === 8 ? e.parentNode : e),
      wn(function () {
        ti(t, h, n, r);
      }),
      h
    );
  }
  function ii(e, t, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
      var c = l;
      if (typeof i == "function") {
        var d = i;
        i = function () {
          var h = ni(c);
          d.call(h);
        };
      }
      ti(t, c, e, i);
    } else c = Eh(n, t, e, i, r);
    return ni(c);
  }
  (js = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = sr(t.pendingLanes);
          n !== 0 &&
            (Hi(t, n | 1), et(t, Le()), !(ye & 6) && ((Jn = Le() + 500), Zt()));
        }
        break;
      case 13:
        wn(function () {
          var r = It(e, 1);
          if (r !== null) {
            var i = Ye();
            kt(r, e, 1, i);
          }
        }),
          vu(e, 1);
    }
  }),
    (Bi = function (e) {
      if (e.tag === 13) {
        var t = It(e, 134217728);
        if (t !== null) {
          var n = Ye();
          kt(t, e, 134217728, n);
        }
        vu(e, 134217728);
      }
    }),
    (Ms = function (e) {
      if (e.tag === 13) {
        var t = rn(e),
          n = It(e, t);
        if (n !== null) {
          var r = Ye();
          kt(n, e, t, r);
        }
        vu(e, t);
      }
    }),
    (Ds = function () {
      return _e;
    }),
    (Is = function (e, t) {
      var n = _e;
      try {
        return (_e = e), t();
      } finally {
        _e = n;
      }
    }),
    (Mi = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Pi(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var i = xo(r);
                if (!i) throw Error(s(90));
                ls(r), Pi(r, i);
              }
            }
          }
          break;
        case "textarea":
          fs(e, n);
          break;
        case "select":
          (t = n.value), t != null && Rn(e, !!n.multiple, t, !1);
      }
    }),
    (Ss = su),
    (_s = wn);
  var kh = { usingClientEntryPoint: !1, Events: [Pr, $n, xo, gs, ws, su] },
    Ur = {
      findFiberByHostInstance: fn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Ch = {
      bundleType: Ur.bundleType,
      version: Ur.version,
      rendererPackageName: Ur.rendererPackageName,
      rendererConfig: Ur.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: B.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Cs(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ur.findFiberByHostInstance || xh,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!li.isDisabled && li.supportsFiber)
      try {
        (no = li.inject(Ch)), (Pt = li);
      } catch {}
  }
  return (
    (tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kh),
    (tt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!yu(t)) throw Error(s(200));
      return _h(e, t, null, n);
    }),
    (tt.createRoot = function (e, t) {
      if (!yu(e)) throw Error(s(299));
      var n = !1,
        r = "",
        i = Jc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = hu(e, 1, !1, null, null, n, !1, r, i)),
        (e[zt] = t.current),
        Er(e.nodeType === 8 ? e.parentNode : e),
        new mu(t)
      );
    }),
    (tt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return (e = Cs(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (tt.flushSync = function (e) {
      return wn(e);
    }),
    (tt.hydrate = function (e, t, n) {
      if (!oi(t)) throw Error(s(200));
      return ii(null, e, t, !0, n);
    }),
    (tt.hydrateRoot = function (e, t, n) {
      if (!yu(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        i = !1,
        l = "",
        c = Jc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (c = n.onRecoverableError)),
        (t = Gc(t, null, e, 1, n ?? null, i, !1, l, c)),
        (e[zt] = t.current),
        Er(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (i = n._getVersion),
            (i = i(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, i])
              : t.mutableSourceEagerHydrationData.push(n, i);
      return new ri(t);
    }),
    (tt.render = function (e, t, n) {
      if (!oi(t)) throw Error(s(200));
      return ii(null, e, t, !1, n);
    }),
    (tt.unmountComponentAtNode = function (e) {
      if (!oi(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (wn(function () {
            ii(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[zt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (tt.unstable_batchedUpdates = su),
    (tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!oi(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return ii(e, t, n, !1, r);
    }),
    (tt.version = "18.3.1-next-f1338f8080-20240426"),
    tt
  );
}
var sf;
function Mh() {
  if (sf) return Su.exports;
  sf = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (u) {
        console.error(u);
      }
  }
  return o(), (Su.exports = jh()), Su.exports;
}
var af;
function Dh() {
  if (af) return ui;
  af = 1;
  var o = Mh();
  return (ui.createRoot = o.createRoot), (ui.hydrateRoot = o.hydrateRoot), ui;
}
var Ih = Dh();
const Ah = "_search_1x8yn_1",
  Fh = "_input_1x8yn_17",
  $h = "_show_1x8yn_41",
  Eu = { search: Ah, input: Fh, show: $h },
  Uh = ({ onSearch: o, keywords: u, showClass: s, onShow: a, onHide: f }) =>
    b.jsx("div", {
      className: `${Eu.search} ${Eu[s]}`,
      children: b.jsx("input", {
        type: "text",
        className: Eu.input,
        value: u,
        onChange: (p) => o(p.target.value),
        onClick: a,
        onBlur: f,
        placeholder: "Search",
      }),
    }),
  Hh = "_header_278am_1",
  Bh = "_logo_278am_53",
  Wh = "_search_278am_85",
  En = {
    "header-container": "_header-container_278am_1",
    header: Hh,
    logo: Bh,
    "logo-icon": "_logo-icon_278am_75",
    "search-container": "_search-container_278am_85",
    search: Wh,
    "search-icon": "_search-icon_278am_109",
  };
var st = gi();
const pe = Zu(st),
  cf = Nh({ __proto__: null, default: pe }, [st]);
function Bu(o, u) {
  return (
    (Bu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (s, a) {
          return (s.__proto__ = a), s;
        }),
    Bu(o, u)
  );
}
function Lt(o, u) {
  (o.prototype = Object.create(u.prototype)),
    (o.prototype.constructor = o),
    Bu(o, u);
}
var ku = { exports: {} },
  Cu,
  ff;
function Vh() {
  if (ff) return Cu;
  ff = 1;
  var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (Cu = o), Cu;
}
var Pu, df;
function Qh() {
  if (df) return Pu;
  df = 1;
  var o = Vh();
  function u() {}
  function s() {}
  return (
    (s.resetWarningCache = u),
    (Pu = function () {
      function a(m, w, g, _, x, N) {
        if (N !== o) {
          var R = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((R.name = "Invariant Violation"), R);
        }
      }
      a.isRequired = a;
      function f() {
        return a;
      }
      var p = {
        array: a,
        bigint: a,
        bool: a,
        func: a,
        number: a,
        object: a,
        string: a,
        symbol: a,
        any: a,
        arrayOf: f,
        element: a,
        elementType: a,
        instanceOf: f,
        node: a,
        objectOf: f,
        oneOf: f,
        oneOfType: f,
        shape: f,
        exact: f,
        checkPropTypes: s,
        resetWarningCache: u,
      };
      return (p.PropTypes = p), p;
    }),
    Pu
  );
}
var pf;
function Kh() {
  return pf || ((pf = 1), (ku.exports = Qh()())), ku.exports;
}
var qh = Kh();
const hf = Zu(qh);
function Be() {
  return (
    (Be = Object.assign
      ? Object.assign.bind()
      : function (o) {
          for (var u = 1; u < arguments.length; u++) {
            var s = arguments[u];
            for (var a in s) ({}).hasOwnProperty.call(s, a) && (o[a] = s[a]);
          }
          return o;
        }),
    Be.apply(null, arguments)
  );
}
function si(o) {
  return o.charAt(0) === "/";
}
function Nu(o, u) {
  for (var s = u, a = s + 1, f = o.length; a < f; s += 1, a += 1) o[s] = o[a];
  o.pop();
}
function Yh(o, u) {
  u === void 0 && (u = "");
  var s = (o && o.split("/")) || [],
    a = (u && u.split("/")) || [],
    f = o && si(o),
    p = u && si(u),
    m = f || p;
  if (
    (o && si(o) ? (a = s) : s.length && (a.pop(), (a = a.concat(s))), !a.length)
  )
    return "/";
  var w;
  if (a.length) {
    var g = a[a.length - 1];
    w = g === "." || g === ".." || g === "";
  } else w = !1;
  for (var _ = 0, x = a.length; x >= 0; x--) {
    var N = a[x];
    N === "." ? Nu(a, x) : N === ".." ? (Nu(a, x), _++) : _ && (Nu(a, x), _--);
  }
  if (!m) for (; _--; _) a.unshift("..");
  m && a[0] !== "" && (!a[0] || !si(a[0])) && a.unshift("");
  var R = a.join("/");
  return w && R.substr(-1) !== "/" && (R += "/"), R;
}
function vf(o) {
  return o.valueOf ? o.valueOf() : Object.prototype.valueOf.call(o);
}
function fi(o, u) {
  if (o === u) return !0;
  if (o == null || u == null) return !1;
  if (Array.isArray(o))
    return (
      Array.isArray(u) &&
      o.length === u.length &&
      o.every(function (f, p) {
        return fi(f, u[p]);
      })
    );
  if (typeof o == "object" || typeof u == "object") {
    var s = vf(o),
      a = vf(u);
    return s !== o || a !== u
      ? fi(s, a)
      : Object.keys(Object.assign({}, o, u)).every(function (f) {
          return fi(o[f], u[f]);
        });
  }
  return !1;
}
var Xh = "Invariant failed";
function an(o, u) {
  throw new Error(Xh);
}
function qr(o) {
  return o.charAt(0) === "/" ? o : "/" + o;
}
function mf(o) {
  return o.charAt(0) === "/" ? o.substr(1) : o;
}
function Gh(o, u) {
  return (
    o.toLowerCase().indexOf(u.toLowerCase()) === 0 &&
    "/?#".indexOf(o.charAt(u.length)) !== -1
  );
}
function ed(o, u) {
  return Gh(o, u) ? o.substr(u.length) : o;
}
function td(o) {
  return o.charAt(o.length - 1) === "/" ? o.slice(0, -1) : o;
}
function Zh(o) {
  var u = o || "/",
    s = "",
    a = "",
    f = u.indexOf("#");
  f !== -1 && ((a = u.substr(f)), (u = u.substr(0, f)));
  var p = u.indexOf("?");
  return (
    p !== -1 && ((s = u.substr(p)), (u = u.substr(0, p))),
    { pathname: u, search: s === "?" ? "" : s, hash: a === "#" ? "" : a }
  );
}
function nt(o) {
  var u = o.pathname,
    s = o.search,
    a = o.hash,
    f = u || "/";
  return (
    s && s !== "?" && (f += s.charAt(0) === "?" ? s : "?" + s),
    a && a !== "#" && (f += a.charAt(0) === "#" ? a : "#" + a),
    f
  );
}
function Xe(o, u, s, a) {
  var f;
  typeof o == "string"
    ? ((f = Zh(o)), (f.state = u))
    : ((f = Be({}, o)),
      f.pathname === void 0 && (f.pathname = ""),
      f.search
        ? f.search.charAt(0) !== "?" && (f.search = "?" + f.search)
        : (f.search = ""),
      f.hash
        ? f.hash.charAt(0) !== "#" && (f.hash = "#" + f.hash)
        : (f.hash = ""),
      u !== void 0 && f.state === void 0 && (f.state = u));
  try {
    f.pathname = decodeURI(f.pathname);
  } catch (p) {
    throw p instanceof URIError
      ? new URIError(
          'Pathname "' +
            f.pathname +
            '" could not be decoded. This is likely caused by an invalid percent-encoding.'
        )
      : p;
  }
  return (
    s && (f.key = s),
    a
      ? f.pathname
        ? f.pathname.charAt(0) !== "/" &&
          (f.pathname = Yh(f.pathname, a.pathname))
        : (f.pathname = a.pathname)
      : f.pathname || (f.pathname = "/"),
    f
  );
}
function Jh(o, u) {
  return (
    o.pathname === u.pathname &&
    o.search === u.search &&
    o.hash === u.hash &&
    o.key === u.key &&
    fi(o.state, u.state)
  );
}
function Ju() {
  var o = null;
  function u(m) {
    return (
      (o = m),
      function () {
        o === m && (o = null);
      }
    );
  }
  function s(m, w, g, _) {
    if (o != null) {
      var x = typeof o == "function" ? o(m, w) : o;
      typeof x == "string"
        ? typeof g == "function"
          ? g(x, _)
          : _(!0)
        : _(x !== !1);
    } else _(!0);
  }
  var a = [];
  function f(m) {
    var w = !0;
    function g() {
      w && m.apply(void 0, arguments);
    }
    return (
      a.push(g),
      function () {
        (w = !1),
          (a = a.filter(function (_) {
            return _ !== g;
          }));
      }
    );
  }
  function p() {
    for (var m = arguments.length, w = new Array(m), g = 0; g < m; g++)
      w[g] = arguments[g];
    a.forEach(function (_) {
      return _.apply(void 0, w);
    });
  }
  return {
    setPrompt: u,
    confirmTransitionTo: s,
    appendListener: f,
    notifyListeners: p,
  };
}
var nd = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function rd(o, u) {
  u(window.confirm(o));
}
function bh() {
  var o = window.navigator.userAgent;
  return (o.indexOf("Android 2.") !== -1 || o.indexOf("Android 4.0") !== -1) &&
    o.indexOf("Mobile Safari") !== -1 &&
    o.indexOf("Chrome") === -1 &&
    o.indexOf("Windows Phone") === -1
    ? !1
    : window.history && "pushState" in window.history;
}
function ev() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function tv() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function nv(o) {
  return o.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1;
}
var yf = "popstate",
  gf = "hashchange";
function wf() {
  try {
    return window.history.state || {};
  } catch {
    return {};
  }
}
function rv(o) {
  o === void 0 && (o = {}), nd || an();
  var u = window.history,
    s = bh(),
    a = !ev(),
    f = o,
    p = f.forceRefresh,
    m = p === void 0 ? !1 : p,
    w = f.getUserConfirmation,
    g = w === void 0 ? rd : w,
    _ = f.keyLength,
    x = _ === void 0 ? 6 : _,
    N = o.basename ? td(qr(o.basename)) : "";
  function R(D) {
    var T = D || {},
      v = T.key,
      C = T.state,
      Y = window.location,
      ee = Y.pathname,
      le = Y.search,
      ue = Y.hash,
      ae = ee + le + ue;
    return N && (ae = ed(ae, N)), Xe(ae, C, v);
  }
  function I() {
    return Math.random().toString(36).substr(2, x);
  }
  var A = Ju();
  function q(D) {
    Be($, D), ($.length = u.length), A.notifyListeners($.location, $.action);
  }
  function V(D) {
    nv(D) || O(R(D.state));
  }
  function z() {
    O(R(wf()));
  }
  var U = !1;
  function O(D) {
    if (U) (U = !1), q();
    else {
      var T = "POP";
      A.confirmTransitionTo(D, T, g, function (v) {
        v ? q({ action: T, location: D }) : B(D);
      });
    }
  }
  function B(D) {
    var T = $.location,
      v = H.indexOf(T.key);
    v === -1 && (v = 0);
    var C = H.indexOf(D.key);
    C === -1 && (C = 0);
    var Y = v - C;
    Y && ((U = !0), re(Y));
  }
  var P = R(wf()),
    H = [P.key];
  function Q(D) {
    return N + nt(D);
  }
  function W(D, T) {
    var v = "PUSH",
      C = Xe(D, T, I(), $.location);
    A.confirmTransitionTo(C, v, g, function (Y) {
      if (Y) {
        var ee = Q(C),
          le = C.key,
          ue = C.state;
        if (s)
          if ((u.pushState({ key: le, state: ue }, null, ee), m))
            window.location.href = ee;
          else {
            var ae = H.indexOf($.location.key),
              de = H.slice(0, ae + 1);
            de.push(C.key), (H = de), q({ action: v, location: C });
          }
        else window.location.href = ee;
      }
    });
  }
  function ce(D, T) {
    var v = "REPLACE",
      C = Xe(D, T, I(), $.location);
    A.confirmTransitionTo(C, v, g, function (Y) {
      if (Y) {
        var ee = Q(C),
          le = C.key,
          ue = C.state;
        if (s)
          if ((u.replaceState({ key: le, state: ue }, null, ee), m))
            window.location.replace(ee);
          else {
            var ae = H.indexOf($.location.key);
            ae !== -1 && (H[ae] = C.key), q({ action: v, location: C });
          }
        else window.location.replace(ee);
      }
    });
  }
  function re(D) {
    u.go(D);
  }
  function se() {
    re(-1);
  }
  function ie() {
    re(1);
  }
  var he = 0;
  function ve(D) {
    (he += D),
      he === 1 && D === 1
        ? (window.addEventListener(yf, V), a && window.addEventListener(gf, z))
        : he === 0 &&
          (window.removeEventListener(yf, V),
          a && window.removeEventListener(gf, z));
  }
  var me = !1;
  function Ne(D) {
    D === void 0 && (D = !1);
    var T = A.setPrompt(D);
    return (
      me || (ve(1), (me = !0)),
      function () {
        return me && ((me = !1), ve(-1)), T();
      }
    );
  }
  function we(D) {
    var T = A.appendListener(D);
    return (
      ve(1),
      function () {
        ve(-1), T();
      }
    );
  }
  var $ = {
    length: u.length,
    action: "POP",
    location: P,
    createHref: Q,
    push: W,
    replace: ce,
    go: re,
    goBack: se,
    goForward: ie,
    block: Ne,
    listen: we,
  };
  return $;
}
var Sf = "hashchange",
  ov = {
    hashbang: {
      encodePath: function (u) {
        return u.charAt(0) === "!" ? u : "!/" + mf(u);
      },
      decodePath: function (u) {
        return u.charAt(0) === "!" ? u.substr(1) : u;
      },
    },
    noslash: { encodePath: mf, decodePath: qr },
    slash: { encodePath: qr, decodePath: qr },
  };
function od(o) {
  var u = o.indexOf("#");
  return u === -1 ? o : o.slice(0, u);
}
function Br() {
  var o = window.location.href,
    u = o.indexOf("#");
  return u === -1 ? "" : o.substring(u + 1);
}
function iv(o) {
  window.location.hash = o;
}
function Tu(o) {
  window.location.replace(od(window.location.href) + "#" + o);
}
function lv(o) {
  o === void 0 && (o = {}), nd || an();
  var u = window.history;
  tv();
  var s = o,
    a = s.getUserConfirmation,
    f = a === void 0 ? rd : a,
    p = s.hashType,
    m = p === void 0 ? "slash" : p,
    w = o.basename ? td(qr(o.basename)) : "",
    g = ov[m],
    _ = g.encodePath,
    x = g.decodePath;
  function N() {
    var T = x(Br());
    return w && (T = ed(T, w)), Xe(T);
  }
  var R = Ju();
  function I(T) {
    Be(D, T), (D.length = u.length), R.notifyListeners(D.location, D.action);
  }
  var A = !1,
    q = null;
  function V(T, v) {
    return (
      T.pathname === v.pathname && T.search === v.search && T.hash === v.hash
    );
  }
  function z() {
    var T = Br(),
      v = _(T);
    if (T !== v) Tu(v);
    else {
      var C = N(),
        Y = D.location;
      if ((!A && V(Y, C)) || q === nt(C)) return;
      (q = null), U(C);
    }
  }
  function U(T) {
    if (A) (A = !1), I();
    else {
      var v = "POP";
      R.confirmTransitionTo(T, v, f, function (C) {
        C ? I({ action: v, location: T }) : O(T);
      });
    }
  }
  function O(T) {
    var v = D.location,
      C = Q.lastIndexOf(nt(v));
    C === -1 && (C = 0);
    var Y = Q.lastIndexOf(nt(T));
    Y === -1 && (Y = 0);
    var ee = C - Y;
    ee && ((A = !0), se(ee));
  }
  var B = Br(),
    P = _(B);
  B !== P && Tu(P);
  var H = N(),
    Q = [nt(H)];
  function W(T) {
    var v = document.querySelector("base"),
      C = "";
    return (
      v && v.getAttribute("href") && (C = od(window.location.href)),
      C + "#" + _(w + nt(T))
    );
  }
  function ce(T, v) {
    var C = "PUSH",
      Y = Xe(T, void 0, void 0, D.location);
    R.confirmTransitionTo(Y, C, f, function (ee) {
      if (ee) {
        var le = nt(Y),
          ue = _(w + le),
          ae = Br() !== ue;
        if (ae) {
          (q = le), iv(ue);
          var de = Q.lastIndexOf(nt(D.location)),
            xe = Q.slice(0, de + 1);
          xe.push(le), (Q = xe), I({ action: C, location: Y });
        } else I();
      }
    });
  }
  function re(T, v) {
    var C = "REPLACE",
      Y = Xe(T, void 0, void 0, D.location);
    R.confirmTransitionTo(Y, C, f, function (ee) {
      if (ee) {
        var le = nt(Y),
          ue = _(w + le),
          ae = Br() !== ue;
        ae && ((q = le), Tu(ue));
        var de = Q.indexOf(nt(D.location));
        de !== -1 && (Q[de] = le), I({ action: C, location: Y });
      }
    });
  }
  function se(T) {
    u.go(T);
  }
  function ie() {
    se(-1);
  }
  function he() {
    se(1);
  }
  var ve = 0;
  function me(T) {
    (ve += T),
      ve === 1 && T === 1
        ? window.addEventListener(Sf, z)
        : ve === 0 && window.removeEventListener(Sf, z);
  }
  var Ne = !1;
  function we(T) {
    T === void 0 && (T = !1);
    var v = R.setPrompt(T);
    return (
      Ne || (me(1), (Ne = !0)),
      function () {
        return Ne && ((Ne = !1), me(-1)), v();
      }
    );
  }
  function $(T) {
    var v = R.appendListener(T);
    return (
      me(1),
      function () {
        me(-1), v();
      }
    );
  }
  var D = {
    length: u.length,
    action: "POP",
    location: H,
    createHref: W,
    push: ce,
    replace: re,
    go: se,
    goBack: ie,
    goForward: he,
    block: we,
    listen: $,
  };
  return D;
}
function _f(o, u, s) {
  return Math.min(Math.max(o, u), s);
}
function uv(o) {
  o === void 0 && (o = {});
  var u = o,
    s = u.getUserConfirmation,
    a = u.initialEntries,
    f = a === void 0 ? ["/"] : a,
    p = u.initialIndex,
    m = p === void 0 ? 0 : p,
    w = u.keyLength,
    g = w === void 0 ? 6 : w,
    _ = Ju();
  function x(W) {
    Be(Q, W),
      (Q.length = Q.entries.length),
      _.notifyListeners(Q.location, Q.action);
  }
  function N() {
    return Math.random().toString(36).substr(2, g);
  }
  var R = _f(m, 0, f.length - 1),
    I = f.map(function (W) {
      return typeof W == "string"
        ? Xe(W, void 0, N())
        : Xe(W, void 0, W.key || N());
    }),
    A = nt;
  function q(W, ce) {
    var re = "PUSH",
      se = Xe(W, ce, N(), Q.location);
    _.confirmTransitionTo(se, re, s, function (ie) {
      if (ie) {
        var he = Q.index,
          ve = he + 1,
          me = Q.entries.slice(0);
        me.length > ve ? me.splice(ve, me.length - ve, se) : me.push(se),
          x({ action: re, location: se, index: ve, entries: me });
      }
    });
  }
  function V(W, ce) {
    var re = "REPLACE",
      se = Xe(W, ce, N(), Q.location);
    _.confirmTransitionTo(se, re, s, function (ie) {
      ie && ((Q.entries[Q.index] = se), x({ action: re, location: se }));
    });
  }
  function z(W) {
    var ce = _f(Q.index + W, 0, Q.entries.length - 1),
      re = "POP",
      se = Q.entries[ce];
    _.confirmTransitionTo(se, re, s, function (ie) {
      ie ? x({ action: re, location: se, index: ce }) : x();
    });
  }
  function U() {
    z(-1);
  }
  function O() {
    z(1);
  }
  function B(W) {
    var ce = Q.index + W;
    return ce >= 0 && ce < Q.entries.length;
  }
  function P(W) {
    return W === void 0 && (W = !1), _.setPrompt(W);
  }
  function H(W) {
    return _.appendListener(W);
  }
  var Q = {
    length: I.length,
    action: "POP",
    location: I[R],
    index: R,
    entries: I,
    createHref: A,
    push: q,
    replace: V,
    go: z,
    goBack: U,
    goForward: O,
    canGo: B,
    block: P,
    listen: H,
  };
  return Q;
}
var kn = { exports: {} },
  Ru,
  xf;
function sv() {
  return (
    xf ||
      ((xf = 1),
      (Ru =
        Array.isArray ||
        function (o) {
          return Object.prototype.toString.call(o) == "[object Array]";
        })),
    Ru
  );
}
var Ef;
function av() {
  if (Ef) return kn.exports;
  Ef = 1;
  var o = sv();
  (kn.exports = V),
    (kn.exports.parse = s),
    (kn.exports.compile = f),
    (kn.exports.tokensToFunction = w),
    (kn.exports.tokensToRegExp = q);
  var u = new RegExp(
    [
      "(\\\\.)",
      "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
    ].join("|"),
    "g"
  );
  function s(z, U) {
    for (
      var O = [], B = 0, P = 0, H = "", Q = (U && U.delimiter) || "/", W;
      (W = u.exec(z)) != null;

    ) {
      var ce = W[0],
        re = W[1],
        se = W.index;
      if (((H += z.slice(P, se)), (P = se + ce.length), re)) {
        H += re[1];
        continue;
      }
      var ie = z[P],
        he = W[2],
        ve = W[3],
        me = W[4],
        Ne = W[5],
        we = W[6],
        $ = W[7];
      H && (O.push(H), (H = ""));
      var D = he != null && ie != null && ie !== he,
        T = we === "+" || we === "*",
        v = we === "?" || we === "*",
        C = he || Q,
        Y = me || Ne,
        ee = he || (typeof O[O.length - 1] == "string" ? O[O.length - 1] : "");
      O.push({
        name: ve || B++,
        prefix: he || "",
        delimiter: C,
        optional: v,
        repeat: T,
        partial: D,
        asterisk: !!$,
        pattern: Y ? _(Y) : $ ? ".*" : a(C, ee),
      });
    }
    return P < z.length && (H += z.substr(P)), H && O.push(H), O;
  }
  function a(z, U) {
    return !U || U.indexOf(z) > -1
      ? "[^" + g(z) + "]+?"
      : g(U) + "|(?:(?!" + g(U) + ")[^" + g(z) + "])+?";
  }
  function f(z, U) {
    return w(s(z, U), U);
  }
  function p(z) {
    return encodeURI(z).replace(/[\/?#]/g, function (U) {
      return "%" + U.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function m(z) {
    return encodeURI(z).replace(/[?#]/g, function (U) {
      return "%" + U.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function w(z, U) {
    for (var O = new Array(z.length), B = 0; B < z.length; B++)
      typeof z[B] == "object" &&
        (O[B] = new RegExp("^(?:" + z[B].pattern + ")$", N(U)));
    return function (P, H) {
      for (
        var Q = "",
          W = P || {},
          ce = H || {},
          re = ce.pretty ? p : encodeURIComponent,
          se = 0;
        se < z.length;
        se++
      ) {
        var ie = z[se];
        if (typeof ie == "string") {
          Q += ie;
          continue;
        }
        var he = W[ie.name],
          ve;
        if (he == null)
          if (ie.optional) {
            ie.partial && (Q += ie.prefix);
            continue;
          } else
            throw new TypeError('Expected "' + ie.name + '" to be defined');
        if (o(he)) {
          if (!ie.repeat)
            throw new TypeError(
              'Expected "' +
                ie.name +
                '" to not repeat, but received `' +
                JSON.stringify(he) +
                "`"
            );
          if (he.length === 0) {
            if (ie.optional) continue;
            throw new TypeError('Expected "' + ie.name + '" to not be empty');
          }
          for (var me = 0; me < he.length; me++) {
            if (((ve = re(he[me])), !O[se].test(ve)))
              throw new TypeError(
                'Expected all "' +
                  ie.name +
                  '" to match "' +
                  ie.pattern +
                  '", but received `' +
                  JSON.stringify(ve) +
                  "`"
              );
            Q += (me === 0 ? ie.prefix : ie.delimiter) + ve;
          }
          continue;
        }
        if (((ve = ie.asterisk ? m(he) : re(he)), !O[se].test(ve)))
          throw new TypeError(
            'Expected "' +
              ie.name +
              '" to match "' +
              ie.pattern +
              '", but received "' +
              ve +
              '"'
          );
        Q += ie.prefix + ve;
      }
      return Q;
    };
  }
  function g(z) {
    return z.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
  }
  function _(z) {
    return z.replace(/([=!:$\/()])/g, "\\$1");
  }
  function x(z, U) {
    return (z.keys = U), z;
  }
  function N(z) {
    return z && z.sensitive ? "" : "i";
  }
  function R(z, U) {
    var O = z.source.match(/\((?!\?)/g);
    if (O)
      for (var B = 0; B < O.length; B++)
        U.push({
          name: B,
          prefix: null,
          delimiter: null,
          optional: !1,
          repeat: !1,
          partial: !1,
          asterisk: !1,
          pattern: null,
        });
    return x(z, U);
  }
  function I(z, U, O) {
    for (var B = [], P = 0; P < z.length; P++) B.push(V(z[P], U, O).source);
    var H = new RegExp("(?:" + B.join("|") + ")", N(O));
    return x(H, U);
  }
  function A(z, U, O) {
    return q(s(z, O), U, O);
  }
  function q(z, U, O) {
    o(U) || ((O = U || O), (U = [])), (O = O || {});
    for (var B = O.strict, P = O.end !== !1, H = "", Q = 0; Q < z.length; Q++) {
      var W = z[Q];
      if (typeof W == "string") H += g(W);
      else {
        var ce = g(W.prefix),
          re = "(?:" + W.pattern + ")";
        U.push(W),
          W.repeat && (re += "(?:" + ce + re + ")*"),
          W.optional
            ? W.partial
              ? (re = ce + "(" + re + ")?")
              : (re = "(?:" + ce + "(" + re + "))?")
            : (re = ce + "(" + re + ")"),
          (H += re);
      }
    }
    var se = g(O.delimiter || "/"),
      ie = H.slice(-se.length) === se;
    return (
      B || (H = (ie ? H.slice(0, -se.length) : H) + "(?:" + se + "(?=$))?"),
      P ? (H += "$") : (H += B && ie ? "" : "(?=" + se + "|$)"),
      x(new RegExp("^" + H, N(O)), U)
    );
  }
  function V(z, U, O) {
    return (
      o(U) || ((O = U || O), (U = [])),
      (O = O || {}),
      z instanceof RegExp ? R(z, U) : o(z) ? I(z, U, O) : A(z, U, O)
    );
  }
  return kn.exports;
}
var cv = av();
const id = Zu(cv);
var Ou = { exports: {} },
  Se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kf;
function fv() {
  if (kf) return Se;
  kf = 1;
  var o = typeof Symbol == "function" && Symbol.for,
    u = o ? Symbol.for("react.element") : 60103,
    s = o ? Symbol.for("react.portal") : 60106,
    a = o ? Symbol.for("react.fragment") : 60107,
    f = o ? Symbol.for("react.strict_mode") : 60108,
    p = o ? Symbol.for("react.profiler") : 60114,
    m = o ? Symbol.for("react.provider") : 60109,
    w = o ? Symbol.for("react.context") : 60110,
    g = o ? Symbol.for("react.async_mode") : 60111,
    _ = o ? Symbol.for("react.concurrent_mode") : 60111,
    x = o ? Symbol.for("react.forward_ref") : 60112,
    N = o ? Symbol.for("react.suspense") : 60113,
    R = o ? Symbol.for("react.suspense_list") : 60120,
    I = o ? Symbol.for("react.memo") : 60115,
    A = o ? Symbol.for("react.lazy") : 60116,
    q = o ? Symbol.for("react.block") : 60121,
    V = o ? Symbol.for("react.fundamental") : 60117,
    z = o ? Symbol.for("react.responder") : 60118,
    U = o ? Symbol.for("react.scope") : 60119;
  function O(P) {
    if (typeof P == "object" && P !== null) {
      var H = P.$$typeof;
      switch (H) {
        case u:
          switch (((P = P.type), P)) {
            case g:
            case _:
            case a:
            case p:
            case f:
            case N:
              return P;
            default:
              switch (((P = P && P.$$typeof), P)) {
                case w:
                case x:
                case A:
                case I:
                case m:
                  return P;
                default:
                  return H;
              }
          }
        case s:
          return H;
      }
    }
  }
  function B(P) {
    return O(P) === _;
  }
  return (
    (Se.AsyncMode = g),
    (Se.ConcurrentMode = _),
    (Se.ContextConsumer = w),
    (Se.ContextProvider = m),
    (Se.Element = u),
    (Se.ForwardRef = x),
    (Se.Fragment = a),
    (Se.Lazy = A),
    (Se.Memo = I),
    (Se.Portal = s),
    (Se.Profiler = p),
    (Se.StrictMode = f),
    (Se.Suspense = N),
    (Se.isAsyncMode = function (P) {
      return B(P) || O(P) === g;
    }),
    (Se.isConcurrentMode = B),
    (Se.isContextConsumer = function (P) {
      return O(P) === w;
    }),
    (Se.isContextProvider = function (P) {
      return O(P) === m;
    }),
    (Se.isElement = function (P) {
      return typeof P == "object" && P !== null && P.$$typeof === u;
    }),
    (Se.isForwardRef = function (P) {
      return O(P) === x;
    }),
    (Se.isFragment = function (P) {
      return O(P) === a;
    }),
    (Se.isLazy = function (P) {
      return O(P) === A;
    }),
    (Se.isMemo = function (P) {
      return O(P) === I;
    }),
    (Se.isPortal = function (P) {
      return O(P) === s;
    }),
    (Se.isProfiler = function (P) {
      return O(P) === p;
    }),
    (Se.isStrictMode = function (P) {
      return O(P) === f;
    }),
    (Se.isSuspense = function (P) {
      return O(P) === N;
    }),
    (Se.isValidElementType = function (P) {
      return (
        typeof P == "string" ||
        typeof P == "function" ||
        P === a ||
        P === _ ||
        P === p ||
        P === f ||
        P === N ||
        P === R ||
        (typeof P == "object" &&
          P !== null &&
          (P.$$typeof === A ||
            P.$$typeof === I ||
            P.$$typeof === m ||
            P.$$typeof === w ||
            P.$$typeof === x ||
            P.$$typeof === V ||
            P.$$typeof === z ||
            P.$$typeof === U ||
            P.$$typeof === q))
      );
    }),
    (Se.typeOf = O),
    Se
  );
}
var Cf;
function ld() {
  return Cf || ((Cf = 1), (Ou.exports = fv())), Ou.exports;
}
ld();
function wi(o, u) {
  if (o == null) return {};
  var s = {};
  for (var a in o)
    if ({}.hasOwnProperty.call(o, a)) {
      if (u.includes(a)) continue;
      s[a] = o[a];
    }
  return s;
}
var Lu, Pf;
function dv() {
  if (Pf) return Lu;
  Pf = 1;
  var o = ld(),
    u = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    s = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    a = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    f = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    p = {};
  (p[o.ForwardRef] = a), (p[o.Memo] = f);
  function m(A) {
    return o.isMemo(A) ? f : p[A.$$typeof] || u;
  }
  var w = Object.defineProperty,
    g = Object.getOwnPropertyNames,
    _ = Object.getOwnPropertySymbols,
    x = Object.getOwnPropertyDescriptor,
    N = Object.getPrototypeOf,
    R = Object.prototype;
  function I(A, q, V) {
    if (typeof q != "string") {
      if (R) {
        var z = N(q);
        z && z !== R && I(A, z, V);
      }
      var U = g(q);
      _ && (U = U.concat(_(q)));
      for (var O = m(A), B = m(q), P = 0; P < U.length; ++P) {
        var H = U[P];
        if (!s[H] && !(V && V[H]) && !(B && B[H]) && !(O && O[H])) {
          var Q = x(q, H);
          try {
            w(A, H, Q);
          } catch {}
        }
      }
    }
    return A;
  }
  return (Lu = I), Lu;
}
dv();
var zu = 1073741823,
  Nf =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {};
function pv() {
  var o = "__global_unique_id__";
  return (Nf[o] = (Nf[o] || 0) + 1);
}
function hv(o, u) {
  return o === u ? o !== 0 || 1 / o === 1 / u : o !== o && u !== u;
}
function vv(o) {
  var u = [];
  return {
    on: function (a) {
      u.push(a);
    },
    off: function (a) {
      u = u.filter(function (f) {
        return f !== a;
      });
    },
    get: function () {
      return o;
    },
    set: function (a, f) {
      (o = a),
        u.forEach(function (p) {
          return p(o, f);
        });
    },
  };
}
function mv(o) {
  return Array.isArray(o) ? o[0] : o;
}
function yv(o, u) {
  var s,
    a,
    f = "__create-react-context-" + pv() + "__",
    p = (function (w) {
      Lt(g, w);
      function g() {
        for (var x, N = arguments.length, R = new Array(N), I = 0; I < N; I++)
          R[I] = arguments[I];
        return (
          (x = w.call.apply(w, [this].concat(R)) || this),
          (x.emitter = vv(x.props.value)),
          x
        );
      }
      var _ = g.prototype;
      return (
        (_.getChildContext = function () {
          var N;
          return (N = {}), (N[f] = this.emitter), N;
        }),
        (_.componentWillReceiveProps = function (N) {
          if (this.props.value !== N.value) {
            var R = this.props.value,
              I = N.value,
              A;
            hv(R, I)
              ? (A = 0)
              : ((A = typeof u == "function" ? u(R, I) : zu),
                (A |= 0),
                A !== 0 && this.emitter.set(N.value, A));
          }
        }),
        (_.render = function () {
          return this.props.children;
        }),
        g
      );
    })(pe.Component);
  p.childContextTypes = ((s = {}), (s[f] = hf.object.isRequired), s);
  var m = (function (w) {
    Lt(g, w);
    function g() {
      for (var x, N = arguments.length, R = new Array(N), I = 0; I < N; I++)
        R[I] = arguments[I];
      return (
        (x = w.call.apply(w, [this].concat(R)) || this),
        (x.observedBits = void 0),
        (x.state = { value: x.getValue() }),
        (x.onUpdate = function (A, q) {
          var V = x.observedBits | 0;
          V & q && x.setState({ value: x.getValue() });
        }),
        x
      );
    }
    var _ = g.prototype;
    return (
      (_.componentWillReceiveProps = function (N) {
        var R = N.observedBits;
        this.observedBits = R ?? zu;
      }),
      (_.componentDidMount = function () {
        this.context[f] && this.context[f].on(this.onUpdate);
        var N = this.props.observedBits;
        this.observedBits = N ?? zu;
      }),
      (_.componentWillUnmount = function () {
        this.context[f] && this.context[f].off(this.onUpdate);
      }),
      (_.getValue = function () {
        return this.context[f] ? this.context[f].get() : o;
      }),
      (_.render = function () {
        return mv(this.props.children)(this.state.value);
      }),
      g
    );
  })(pe.Component);
  return (
    (m.contextTypes = ((a = {}), (a[f] = hf.object), a)),
    { Provider: p, Consumer: m }
  );
}
var gv = pe.createContext || yv,
  ud = function (u) {
    var s = gv();
    return (s.displayName = u), s;
  },
  wv = ud("Router-History"),
  Pn = ud("Router"),
  Si = (function (o) {
    Lt(u, o),
      (u.computeRootMatch = function (f) {
        return { path: "/", url: "/", params: {}, isExact: f === "/" };
      });
    function u(a) {
      var f;
      return (
        (f = o.call(this, a) || this),
        (f.state = { location: a.history.location }),
        (f._isMounted = !1),
        (f._pendingLocation = null),
        a.staticContext ||
          (f.unlisten = a.history.listen(function (p) {
            f._pendingLocation = p;
          })),
        f
      );
    }
    var s = u.prototype;
    return (
      (s.componentDidMount = function () {
        var f = this;
        (this._isMounted = !0),
          this.unlisten && this.unlisten(),
          this.props.staticContext ||
            (this.unlisten = this.props.history.listen(function (p) {
              f._isMounted && f.setState({ location: p });
            })),
          this._pendingLocation &&
            this.setState({ location: this._pendingLocation });
      }),
      (s.componentWillUnmount = function () {
        this.unlisten &&
          (this.unlisten(),
          (this._isMounted = !1),
          (this._pendingLocation = null));
      }),
      (s.render = function () {
        return pe.createElement(
          Pn.Provider,
          {
            value: {
              history: this.props.history,
              location: this.state.location,
              match: u.computeRootMatch(this.state.location.pathname),
              staticContext: this.props.staticContext,
            },
          },
          pe.createElement(wv.Provider, {
            children: this.props.children || null,
            value: this.props.history,
          })
        );
      }),
      u
    );
  })(pe.Component);
pe.Component;
var Sv = (function (o) {
    Lt(u, o);
    function u() {
      return o.apply(this, arguments) || this;
    }
    var s = u.prototype;
    return (
      (s.componentDidMount = function () {
        this.props.onMount && this.props.onMount.call(this, this);
      }),
      (s.componentDidUpdate = function (f) {
        this.props.onUpdate && this.props.onUpdate.call(this, this, f);
      }),
      (s.componentWillUnmount = function () {
        this.props.onUnmount && this.props.onUnmount.call(this, this);
      }),
      (s.render = function () {
        return null;
      }),
      u
    );
  })(pe.Component),
  ju = {},
  _v = 1e4,
  Tf = 0;
function xv(o) {
  if (ju[o]) return ju[o];
  var u = id.compile(o);
  return Tf < _v && ((ju[o] = u), Tf++), u;
}
function Rf(o, u) {
  return (
    o === void 0 && (o = "/"),
    u === void 0 && (u = {}),
    o === "/" ? o : xv(o)(u, { pretty: !0 })
  );
}
function Ev(o) {
  var u = o.computedMatch,
    s = o.to,
    a = o.push,
    f = a === void 0 ? !1 : a;
  return pe.createElement(Pn.Consumer, null, function (p) {
    p || an();
    var m = p.history,
      w = p.staticContext,
      g = f ? m.push : m.replace,
      _ = Xe(
        u
          ? typeof s == "string"
            ? Rf(s, u.params)
            : Be({}, s, { pathname: Rf(s.pathname, u.params) })
          : s
      );
    return w
      ? (g(_), null)
      : pe.createElement(Sv, {
          onMount: function () {
            g(_);
          },
          onUpdate: function (N, R) {
            var I = Xe(R.to);
            Jh(I, Be({}, _, { key: I.key })) || g(_);
          },
          to: s,
        });
  });
}
var Of = {},
  kv = 1e4,
  Lf = 0;
function Cv(o, u) {
  var s = "" + u.end + u.strict + u.sensitive,
    a = Of[s] || (Of[s] = {});
  if (a[o]) return a[o];
  var f = [],
    p = id(o, f, u),
    m = { regexp: p, keys: f };
  return Lf < kv && ((a[o] = m), Lf++), m;
}
function bu(o, u) {
  u === void 0 && (u = {}),
    (typeof u == "string" || Array.isArray(u)) && (u = { path: u });
  var s = u,
    a = s.path,
    f = s.exact,
    p = f === void 0 ? !1 : f,
    m = s.strict,
    w = m === void 0 ? !1 : m,
    g = s.sensitive,
    _ = g === void 0 ? !1 : g,
    x = [].concat(a);
  return x.reduce(function (N, R) {
    if (!R && R !== "") return null;
    if (N) return N;
    var I = Cv(R, { end: p, strict: w, sensitive: _ }),
      A = I.regexp,
      q = I.keys,
      V = A.exec(o);
    if (!V) return null;
    var z = V[0],
      U = V.slice(1),
      O = o === z;
    return p && !O
      ? null
      : {
          path: R,
          url: R === "/" && z === "" ? "/" : z,
          isExact: O,
          params: q.reduce(function (B, P, H) {
            return (B[P.name] = U[H]), B;
          }, {}),
        };
  }, null);
}
function Pv(o) {
  return pe.Children.count(o) === 0;
}
var zf = (function (o) {
  Lt(u, o);
  function u() {
    return o.apply(this, arguments) || this;
  }
  var s = u.prototype;
  return (
    (s.render = function () {
      var f = this;
      return pe.createElement(Pn.Consumer, null, function (p) {
        p || an();
        var m = f.props.location || p.location,
          w = f.props.computedMatch
            ? f.props.computedMatch
            : f.props.path
            ? bu(m.pathname, f.props)
            : p.match,
          g = Be({}, p, { location: m, match: w }),
          _ = f.props,
          x = _.children,
          N = _.component,
          R = _.render;
        return (
          Array.isArray(x) && Pv(x) && (x = null),
          pe.createElement(
            Pn.Provider,
            { value: g },
            g.match
              ? x
                ? typeof x == "function"
                  ? x(g)
                  : x
                : N
                ? pe.createElement(N, g)
                : R
                ? R(g)
                : null
              : typeof x == "function"
              ? x(g)
              : null
          )
        );
      });
    }),
    u
  );
})(pe.Component);
function es(o) {
  return o.charAt(0) === "/" ? o : "/" + o;
}
function Nv(o, u) {
  return o ? Be({}, u, { pathname: es(o) + u.pathname }) : u;
}
function Tv(o, u) {
  if (!o) return u;
  var s = es(o);
  return u.pathname.indexOf(s) !== 0
    ? u
    : Be({}, u, { pathname: u.pathname.substr(s.length) });
}
function jf(o) {
  return typeof o == "string" ? o : nt(o);
}
function Mu(o) {
  return function () {
    an();
  };
}
function Mf() {}
pe.Component;
var Rv = (function (o) {
  Lt(u, o);
  function u() {
    return o.apply(this, arguments) || this;
  }
  var s = u.prototype;
  return (
    (s.render = function () {
      var f = this;
      return pe.createElement(Pn.Consumer, null, function (p) {
        p || an();
        var m = f.props.location || p.location,
          w,
          g;
        return (
          pe.Children.forEach(f.props.children, function (_) {
            if (g == null && pe.isValidElement(_)) {
              w = _;
              var x = _.props.path || _.props.from;
              g = x ? bu(m.pathname, Be({}, _.props, { path: x })) : p.match;
            }
          }),
          g ? pe.cloneElement(w, { location: m, computedMatch: g }) : null
        );
      });
    }),
    u
  );
})(pe.Component);
pe.useContext;
pe.Component;
var Ov = (function (o) {
    Lt(u, o);
    function u() {
      for (var a, f = arguments.length, p = new Array(f), m = 0; m < f; m++)
        p[m] = arguments[m];
      return (
        (a = o.call.apply(o, [this].concat(p)) || this),
        (a.history = lv(a.props)),
        a
      );
    }
    var s = u.prototype;
    return (
      (s.render = function () {
        return pe.createElement(Si, {
          history: this.history,
          children: this.props.children,
        });
      }),
      u
    );
  })(pe.Component),
  Wu = function (u, s) {
    return typeof u == "function" ? u(s) : u;
  },
  Vu = function (u, s) {
    return typeof u == "string" ? Xe(u, null, null, s) : u;
  },
  ts = function (u) {
    return u;
  },
  er = pe.forwardRef;
typeof er > "u" && (er = ts);
function Lv(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
var zv = er(function (o, u) {
    var s = o.innerRef,
      a = o.navigate,
      f = o.onClick,
      p = wi(o, ["innerRef", "navigate", "onClick"]),
      m = p.target,
      w = Be({}, p, {
        onClick: function (_) {
          try {
            f && f(_);
          } catch (x) {
            throw (_.preventDefault(), x);
          }
          !_.defaultPrevented &&
            _.button === 0 &&
            (!m || m === "_self") &&
            !Lv(_) &&
            (_.preventDefault(), a());
        },
      });
    return ts !== er ? (w.ref = u || s) : (w.ref = s), pe.createElement("a", w);
  }),
  sd = er(function (o, u) {
    var s = o.component,
      a = s === void 0 ? zv : s,
      f = o.replace,
      p = o.to,
      m = o.innerRef,
      w = wi(o, ["component", "replace", "to", "innerRef"]);
    return pe.createElement(Pn.Consumer, null, function (g) {
      g || an();
      var _ = g.history,
        x = Vu(Wu(p, g.location), g.location),
        N = x ? _.createHref(x) : "",
        R = Be({}, w, {
          href: N,
          navigate: function () {
            var A = Wu(p, g.location),
              q = nt(g.location) === nt(Vu(A)),
              V = f || q ? _.replace : _.push;
            V(A);
          },
        });
      return (
        ts !== er ? (R.ref = u || m) : (R.innerRef = m), pe.createElement(a, R)
      );
    });
  }),
  ad = function (u) {
    return u;
  },
  di = pe.forwardRef;
typeof di > "u" && (di = ad);
function jv() {
  for (var o = arguments.length, u = new Array(o), s = 0; s < o; s++)
    u[s] = arguments[s];
  return u
    .filter(function (a) {
      return a;
    })
    .join(" ");
}
di(function (o, u) {
  var s = o["aria-current"],
    a = s === void 0 ? "page" : s,
    f = o.activeClassName,
    p = f === void 0 ? "active" : f,
    m = o.activeStyle,
    w = o.className,
    g = o.exact,
    _ = o.isActive,
    x = o.location,
    N = o.sensitive,
    R = o.strict,
    I = o.style,
    A = o.to,
    q = o.innerRef,
    V = wi(o, [
      "aria-current",
      "activeClassName",
      "activeStyle",
      "className",
      "exact",
      "isActive",
      "location",
      "sensitive",
      "strict",
      "style",
      "to",
      "innerRef",
    ]);
  return pe.createElement(Pn.Consumer, null, function (z) {
    z || an();
    var U = x || z.location,
      O = Vu(Wu(A, U), U),
      B = O.pathname,
      P = B && B.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
      H = P
        ? bu(U.pathname, { path: P, exact: g, sensitive: N, strict: R })
        : null,
      Q = !!(_ ? _(H, U) : H),
      W = typeof w == "function" ? w(Q) : w,
      ce = typeof I == "function" ? I(Q) : I;
    Q && ((W = jv(W, p)), (ce = Be({}, ce, m)));
    var re = Be(
      { "aria-current": (Q && a) || null, className: W, style: ce, to: O },
      V
    );
    return (
      ad !== di ? (re.ref = u || q) : (re.innerRef = q),
      pe.createElement(sd, re)
    );
  });
});
var Du = { exports: {} },
  Iu = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Df;
function Mv() {
  if (Df) return Iu;
  Df = 1;
  var o = gi();
  function u(g, _) {
    return (g === _ && (g !== 0 || 1 / g === 1 / _)) || (g !== g && _ !== _);
  }
  var s = typeof Object.is == "function" ? Object.is : u,
    a = o.useSyncExternalStore,
    f = o.useRef,
    p = o.useEffect,
    m = o.useMemo,
    w = o.useDebugValue;
  return (
    (Iu.useSyncExternalStoreWithSelector = function (g, _, x, N, R) {
      var I = f(null);
      if (I.current === null) {
        var A = { hasValue: !1, value: null };
        I.current = A;
      } else A = I.current;
      I = m(
        function () {
          function V(P) {
            if (!z) {
              if (((z = !0), (U = P), (P = N(P)), R !== void 0 && A.hasValue)) {
                var H = A.value;
                if (R(H, P)) return (O = H);
              }
              return (O = P);
            }
            if (((H = O), s(U, P))) return H;
            var Q = N(P);
            return R !== void 0 && R(H, Q) ? H : ((U = P), (O = Q));
          }
          var z = !1,
            U,
            O,
            B = x === void 0 ? null : x;
          return [
            function () {
              return V(_());
            },
            B === null
              ? void 0
              : function () {
                  return V(B());
                },
          ];
        },
        [_, x, N, R]
      );
      var q = a(g, I[0], I[1]);
      return (
        p(
          function () {
            (A.hasValue = !0), (A.value = q);
          },
          [q]
        ),
        w(q),
        q
      );
    }),
    Iu
  );
}
var If;
function Dv() {
  return If || ((If = 1), (Du.exports = Mv())), Du.exports;
}
var Iv = Dv(),
  at = "default" in cf ? pe : cf,
  Af = Symbol.for("react-redux-context"),
  Ff = typeof globalThis < "u" ? globalThis : {};
function Av() {
  if (!at.createContext) return {};
  const o = Ff[Af] ?? (Ff[Af] = new Map());
  let u = o.get(at.createContext);
  return u || ((u = at.createContext(null)), o.set(at.createContext, u)), u;
}
var sn = Av(),
  Fv = () => {
    throw new Error("uSES not initialized!");
  };
function ns(o = sn) {
  return function () {
    return at.useContext(o);
  };
}
var cd = ns(),
  fd = Fv,
  $v = (o) => {
    fd = o;
  },
  Uv = (o, u) => o === u;
function Hv(o = sn) {
  const u = o === sn ? cd : ns(o),
    s = (a, f = {}) => {
      const { equalityFn: p = Uv, devModeChecks: m = {} } =
          typeof f == "function" ? { equalityFn: f } : f,
        {
          store: w,
          subscription: g,
          getServerState: _,
          stabilityCheck: x,
          identityFunctionCheck: N,
        } = u();
      at.useRef(!0);
      const R = at.useCallback(
          {
            [a.name](A) {
              return a(A);
            },
          }[a.name],
          [a, x, m.stabilityCheck]
        ),
        I = fd(g.addNestedSub, w.getState, _ || w.getState, R, p);
      return at.useDebugValue(I), I;
    };
  return Object.assign(s, { withTypes: () => s }), s;
}
var $f = Hv();
function Bv(o) {
  o();
}
function Wv() {
  let o = null,
    u = null;
  return {
    clear() {
      (o = null), (u = null);
    },
    notify() {
      Bv(() => {
        let s = o;
        for (; s; ) s.callback(), (s = s.next);
      });
    },
    get() {
      const s = [];
      let a = o;
      for (; a; ) s.push(a), (a = a.next);
      return s;
    },
    subscribe(s) {
      let a = !0;
      const f = (u = { callback: s, next: null, prev: u });
      return (
        f.prev ? (f.prev.next = f) : (o = f),
        function () {
          !a ||
            o === null ||
            ((a = !1),
            f.next ? (f.next.prev = f.prev) : (u = f.prev),
            f.prev ? (f.prev.next = f.next) : (o = f.next));
        }
      );
    },
  };
}
var Uf = { notify() {}, get: () => [] };
function Vv(o, u) {
  let s,
    a = Uf,
    f = 0,
    p = !1;
  function m(q) {
    x();
    const V = a.subscribe(q);
    let z = !1;
    return () => {
      z || ((z = !0), V(), N());
    };
  }
  function w() {
    a.notify();
  }
  function g() {
    A.onStateChange && A.onStateChange();
  }
  function _() {
    return p;
  }
  function x() {
    f++, s || ((s = o.subscribe(g)), (a = Wv()));
  }
  function N() {
    f--, s && f === 0 && (s(), (s = void 0), a.clear(), (a = Uf));
  }
  function R() {
    p || ((p = !0), x());
  }
  function I() {
    p && ((p = !1), N());
  }
  const A = {
    addNestedSub: m,
    notifyNestedSubs: w,
    handleChangeWrapper: g,
    isSubscribed: _,
    trySubscribe: R,
    tryUnsubscribe: I,
    getListeners: () => a,
  };
  return A;
}
var Qv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Kv = typeof navigator < "u" && navigator.product === "ReactNative",
  qv = Qv || Kv ? at.useLayoutEffect : at.useEffect;
function Yv({
  store: o,
  context: u,
  children: s,
  serverState: a,
  stabilityCheck: f = "once",
  identityFunctionCheck: p = "once",
}) {
  const m = at.useMemo(() => {
      const _ = Vv(o);
      return {
        store: o,
        subscription: _,
        getServerState: a ? () => a : void 0,
        stabilityCheck: f,
        identityFunctionCheck: p,
      };
    }, [o, a, f, p]),
    w = at.useMemo(() => o.getState(), [o]);
  qv(() => {
    const { subscription: _ } = m;
    return (
      (_.onStateChange = _.notifyNestedSubs),
      _.trySubscribe(),
      w !== o.getState() && _.notifyNestedSubs(),
      () => {
        _.tryUnsubscribe(), (_.onStateChange = void 0);
      }
    );
  }, [m, w]);
  const g = u || sn;
  return at.createElement(g.Provider, { value: m }, s);
}
var Xv = Yv;
function dd(o = sn) {
  const u = o === sn ? cd : ns(o),
    s = () => {
      const { store: a } = u();
      return a;
    };
  return Object.assign(s, { withTypes: () => s }), s;
}
var Gv = dd();
function Zv(o = sn) {
  const u = o === sn ? Gv : dd(o),
    s = () => u().dispatch;
  return Object.assign(s, { withTypes: () => s }), s;
}
var pd = Zv();
$v(Iv.useSyncExternalStoreWithSelector);
function He(o) {
  return `Minified Redux error #${o}; visit https://redux.js.org/Errors?code=${o} for the full message or use the non-minified dev environment for full errors. `;
}
var Jv = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Hf = Jv,
  Au = () => Math.random().toString(36).substring(7).split("").join("."),
  bv = {
    INIT: `@@redux/INIT${Au()}`,
    REPLACE: `@@redux/REPLACE${Au()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Au()}`,
  },
  pi = bv;
function rs(o) {
  if (typeof o != "object" || o === null) return !1;
  let u = o;
  for (; Object.getPrototypeOf(u) !== null; ) u = Object.getPrototypeOf(u);
  return Object.getPrototypeOf(o) === u || Object.getPrototypeOf(o) === null;
}
function hd(o, u, s) {
  if (typeof o != "function") throw new Error(He(2));
  if (
    (typeof u == "function" && typeof s == "function") ||
    (typeof s == "function" && typeof arguments[3] == "function")
  )
    throw new Error(He(0));
  if (
    (typeof u == "function" && typeof s > "u" && ((s = u), (u = void 0)),
    typeof s < "u")
  ) {
    if (typeof s != "function") throw new Error(He(1));
    return s(hd)(o, u);
  }
  let a = o,
    f = u,
    p = new Map(),
    m = p,
    w = 0,
    g = !1;
  function _() {
    m === p &&
      ((m = new Map()),
      p.forEach((V, z) => {
        m.set(z, V);
      }));
  }
  function x() {
    if (g) throw new Error(He(3));
    return f;
  }
  function N(V) {
    if (typeof V != "function") throw new Error(He(4));
    if (g) throw new Error(He(5));
    let z = !0;
    _();
    const U = w++;
    return (
      m.set(U, V),
      function () {
        if (z) {
          if (g) throw new Error(He(6));
          (z = !1), _(), m.delete(U), (p = null);
        }
      }
    );
  }
  function R(V) {
    if (!rs(V)) throw new Error(He(7));
    if (typeof V.type > "u") throw new Error(He(8));
    if (typeof V.type != "string") throw new Error(He(17));
    if (g) throw new Error(He(9));
    try {
      (g = !0), (f = a(f, V));
    } finally {
      g = !1;
    }
    return (
      (p = m).forEach((U) => {
        U();
      }),
      V
    );
  }
  function I(V) {
    if (typeof V != "function") throw new Error(He(10));
    (a = V), R({ type: pi.REPLACE });
  }
  function A() {
    const V = N;
    return {
      subscribe(z) {
        if (typeof z != "object" || z === null) throw new Error(He(11));
        function U() {
          const B = z;
          B.next && B.next(x());
        }
        return U(), { unsubscribe: V(U) };
      },
      [Hf]() {
        return this;
      },
    };
  }
  return (
    R({ type: pi.INIT }),
    { dispatch: R, subscribe: N, getState: x, replaceReducer: I, [Hf]: A }
  );
}
function em(o) {
  Object.keys(o).forEach((u) => {
    const s = o[u];
    if (typeof s(void 0, { type: pi.INIT }) > "u") throw new Error(He(12));
    if (typeof s(void 0, { type: pi.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(He(13));
  });
}
function tm(o) {
  const u = Object.keys(o),
    s = {};
  for (let p = 0; p < u.length; p++) {
    const m = u[p];
    typeof o[m] == "function" && (s[m] = o[m]);
  }
  const a = Object.keys(s);
  let f;
  try {
    em(s);
  } catch (p) {
    f = p;
  }
  return function (m = {}, w) {
    if (f) throw f;
    let g = !1;
    const _ = {};
    for (let x = 0; x < a.length; x++) {
      const N = a[x],
        R = s[N],
        I = m[N],
        A = R(I, w);
      if (typeof A > "u") throw (w && w.type, new Error(He(14)));
      (_[N] = A), (g = g || A !== I);
    }
    return (g = g || a.length !== Object.keys(m).length), g ? _ : m;
  };
}
function hi(...o) {
  return o.length === 0
    ? (u) => u
    : o.length === 1
    ? o[0]
    : o.reduce(
        (u, s) =>
          (...a) =>
            u(s(...a))
      );
}
function nm(...o) {
  return (u) => (s, a) => {
    const f = u(s, a);
    let p = () => {
      throw new Error(He(15));
    };
    const m = { getState: f.getState, dispatch: (g, ..._) => p(g, ..._) },
      w = o.map((g) => g(m));
    return (p = hi(...w)(f.dispatch)), { ...f, dispatch: p };
  };
}
function rm(o) {
  return rs(o) && "type" in o && typeof o.type == "string";
}
var vd = Symbol.for("immer-nothing"),
  Bf = Symbol.for("immer-draftable"),
  ct = Symbol.for("immer-state");
function Ct(o, ...u) {
  throw new Error(
    `[Immer] minified error nr: ${o}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var tr = Object.getPrototypeOf;
function Nn(o) {
  return !!o && !!o[ct];
}
function Ht(o) {
  var u;
  return o
    ? md(o) ||
        Array.isArray(o) ||
        !!o[Bf] ||
        !!((u = o.constructor) != null && u[Bf]) ||
        xi(o) ||
        Ei(o)
    : !1;
}
var om = Object.prototype.constructor.toString();
function md(o) {
  if (!o || typeof o != "object") return !1;
  const u = tr(o);
  if (u === null) return !0;
  const s = Object.hasOwnProperty.call(u, "constructor") && u.constructor;
  return s === Object
    ? !0
    : typeof s == "function" && Function.toString.call(s) === om;
}
function vi(o, u) {
  _i(o) === 0
    ? Reflect.ownKeys(o).forEach((s) => {
        u(s, o[s], o);
      })
    : o.forEach((s, a) => u(a, s, o));
}
function _i(o) {
  const u = o[ct];
  return u ? u.type_ : Array.isArray(o) ? 1 : xi(o) ? 2 : Ei(o) ? 3 : 0;
}
function Qu(o, u) {
  return _i(o) === 2 ? o.has(u) : Object.prototype.hasOwnProperty.call(o, u);
}
function yd(o, u, s) {
  const a = _i(o);
  a === 2 ? o.set(u, s) : a === 3 ? o.add(s) : (o[u] = s);
}
function im(o, u) {
  return o === u ? o !== 0 || 1 / o === 1 / u : o !== o && u !== u;
}
function xi(o) {
  return o instanceof Map;
}
function Ei(o) {
  return o instanceof Set;
}
function Cn(o) {
  return o.copy_ || o.base_;
}
function Ku(o, u) {
  if (xi(o)) return new Map(o);
  if (Ei(o)) return new Set(o);
  if (Array.isArray(o)) return Array.prototype.slice.call(o);
  const s = md(o);
  if (u === !0 || (u === "class_only" && !s)) {
    const a = Object.getOwnPropertyDescriptors(o);
    delete a[ct];
    let f = Reflect.ownKeys(a);
    for (let p = 0; p < f.length; p++) {
      const m = f[p],
        w = a[m];
      w.writable === !1 && ((w.writable = !0), (w.configurable = !0)),
        (w.get || w.set) &&
          (a[m] = {
            configurable: !0,
            writable: !0,
            enumerable: w.enumerable,
            value: o[m],
          });
    }
    return Object.create(tr(o), a);
  } else {
    const a = tr(o);
    if (a !== null && s) return { ...o };
    const f = Object.create(a);
    return Object.assign(f, o);
  }
}
function os(o, u = !1) {
  return (
    ki(o) ||
      Nn(o) ||
      !Ht(o) ||
      (_i(o) > 1 && (o.set = o.add = o.clear = o.delete = lm),
      Object.freeze(o),
      u && Object.entries(o).forEach(([s, a]) => os(a, !0))),
    o
  );
}
function lm() {
  Ct(2);
}
function ki(o) {
  return Object.isFrozen(o);
}
var um = {};
function Tn(o) {
  const u = um[o];
  return u || Ct(0, o), u;
}
var Yr;
function gd() {
  return Yr;
}
function sm(o, u) {
  return {
    drafts_: [],
    parent_: o,
    immer_: u,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Wf(o, u) {
  u &&
    (Tn("Patches"),
    (o.patches_ = []),
    (o.inversePatches_ = []),
    (o.patchListener_ = u));
}
function qu(o) {
  Yu(o), o.drafts_.forEach(am), (o.drafts_ = null);
}
function Yu(o) {
  o === Yr && (Yr = o.parent_);
}
function Vf(o) {
  return (Yr = sm(Yr, o));
}
function am(o) {
  const u = o[ct];
  u.type_ === 0 || u.type_ === 1 ? u.revoke_() : (u.revoked_ = !0);
}
function Qf(o, u) {
  u.unfinalizedDrafts_ = u.drafts_.length;
  const s = u.drafts_[0];
  return (
    o !== void 0 && o !== s
      ? (s[ct].modified_ && (qu(u), Ct(4)),
        Ht(o) && ((o = mi(u, o)), u.parent_ || yi(u, o)),
        u.patches_ &&
          Tn("Patches").generateReplacementPatches_(
            s[ct].base_,
            o,
            u.patches_,
            u.inversePatches_
          ))
      : (o = mi(u, s, [])),
    qu(u),
    u.patches_ && u.patchListener_(u.patches_, u.inversePatches_),
    o !== vd ? o : void 0
  );
}
function mi(o, u, s) {
  if (ki(u)) return u;
  const a = u[ct];
  if (!a) return vi(u, (f, p) => Kf(o, a, u, f, p, s)), u;
  if (a.scope_ !== o) return u;
  if (!a.modified_) return yi(o, a.base_, !0), a.base_;
  if (!a.finalized_) {
    (a.finalized_ = !0), a.scope_.unfinalizedDrafts_--;
    const f = a.copy_;
    let p = f,
      m = !1;
    a.type_ === 3 && ((p = new Set(f)), f.clear(), (m = !0)),
      vi(p, (w, g) => Kf(o, a, f, w, g, s, m)),
      yi(o, f, !1),
      s &&
        o.patches_ &&
        Tn("Patches").generatePatches_(a, s, o.patches_, o.inversePatches_);
  }
  return a.copy_;
}
function Kf(o, u, s, a, f, p, m) {
  if (Nn(f)) {
    const w =
        p && u && u.type_ !== 3 && !Qu(u.assigned_, a) ? p.concat(a) : void 0,
      g = mi(o, f, w);
    if ((yd(s, a, g), Nn(g))) o.canAutoFreeze_ = !1;
    else return;
  } else m && s.add(f);
  if (Ht(f) && !ki(f)) {
    if (!o.immer_.autoFreeze_ && o.unfinalizedDrafts_ < 1) return;
    mi(o, f),
      (!u || !u.scope_.parent_) &&
        typeof a != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(s, a) &&
        yi(o, f);
  }
}
function yi(o, u, s = !1) {
  !o.parent_ && o.immer_.autoFreeze_ && o.canAutoFreeze_ && os(u, s);
}
function cm(o, u) {
  const s = Array.isArray(o),
    a = {
      type_: s ? 1 : 0,
      scope_: u ? u.scope_ : gd(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: u,
      base_: o,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let f = a,
    p = is;
  s && ((f = [a]), (p = Xr));
  const { revoke: m, proxy: w } = Proxy.revocable(f, p);
  return (a.draft_ = w), (a.revoke_ = m), w;
}
var is = {
    get(o, u) {
      if (u === ct) return o;
      const s = Cn(o);
      if (!Qu(s, u)) return fm(o, s, u);
      const a = s[u];
      return o.finalized_ || !Ht(a)
        ? a
        : a === Fu(o.base_, u)
        ? ($u(o), (o.copy_[u] = Gu(a, o)))
        : a;
    },
    has(o, u) {
      return u in Cn(o);
    },
    ownKeys(o) {
      return Reflect.ownKeys(Cn(o));
    },
    set(o, u, s) {
      const a = wd(Cn(o), u);
      if (a != null && a.set) return a.set.call(o.draft_, s), !0;
      if (!o.modified_) {
        const f = Fu(Cn(o), u),
          p = f == null ? void 0 : f[ct];
        if (p && p.base_ === s)
          return (o.copy_[u] = s), (o.assigned_[u] = !1), !0;
        if (im(s, f) && (s !== void 0 || Qu(o.base_, u))) return !0;
        $u(o), Xu(o);
      }
      return (
        (o.copy_[u] === s && (s !== void 0 || u in o.copy_)) ||
          (Number.isNaN(s) && Number.isNaN(o.copy_[u])) ||
          ((o.copy_[u] = s), (o.assigned_[u] = !0)),
        !0
      );
    },
    deleteProperty(o, u) {
      return (
        Fu(o.base_, u) !== void 0 || u in o.base_
          ? ((o.assigned_[u] = !1), $u(o), Xu(o))
          : delete o.assigned_[u],
        o.copy_ && delete o.copy_[u],
        !0
      );
    },
    getOwnPropertyDescriptor(o, u) {
      const s = Cn(o),
        a = Reflect.getOwnPropertyDescriptor(s, u);
      return (
        a && {
          writable: !0,
          configurable: o.type_ !== 1 || u !== "length",
          enumerable: a.enumerable,
          value: s[u],
        }
      );
    },
    defineProperty() {
      Ct(11);
    },
    getPrototypeOf(o) {
      return tr(o.base_);
    },
    setPrototypeOf() {
      Ct(12);
    },
  },
  Xr = {};
vi(is, (o, u) => {
  Xr[o] = function () {
    return (arguments[0] = arguments[0][0]), u.apply(this, arguments);
  };
});
Xr.deleteProperty = function (o, u) {
  return Xr.set.call(this, o, u, void 0);
};
Xr.set = function (o, u, s) {
  return is.set.call(this, o[0], u, s, o[0]);
};
function Fu(o, u) {
  const s = o[ct];
  return (s ? Cn(s) : o)[u];
}
function fm(o, u, s) {
  var f;
  const a = wd(u, s);
  return a
    ? "value" in a
      ? a.value
      : (f = a.get) == null
      ? void 0
      : f.call(o.draft_)
    : void 0;
}
function wd(o, u) {
  if (!(u in o)) return;
  let s = tr(o);
  for (; s; ) {
    const a = Object.getOwnPropertyDescriptor(s, u);
    if (a) return a;
    s = tr(s);
  }
}
function Xu(o) {
  o.modified_ || ((o.modified_ = !0), o.parent_ && Xu(o.parent_));
}
function $u(o) {
  o.copy_ || (o.copy_ = Ku(o.base_, o.scope_.immer_.useStrictShallowCopy_));
}
var dm = class {
  constructor(o) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (u, s, a) => {
        if (typeof u == "function" && typeof s != "function") {
          const p = s;
          s = u;
          const m = this;
          return function (g = p, ..._) {
            return m.produce(g, (x) => s.call(this, x, ..._));
          };
        }
        typeof s != "function" && Ct(6),
          a !== void 0 && typeof a != "function" && Ct(7);
        let f;
        if (Ht(u)) {
          const p = Vf(this),
            m = Gu(u, void 0);
          let w = !0;
          try {
            (f = s(m)), (w = !1);
          } finally {
            w ? qu(p) : Yu(p);
          }
          return Wf(p, a), Qf(f, p);
        } else if (!u || typeof u != "object") {
          if (
            ((f = s(u)),
            f === void 0 && (f = u),
            f === vd && (f = void 0),
            this.autoFreeze_ && os(f, !0),
            a)
          ) {
            const p = [],
              m = [];
            Tn("Patches").generateReplacementPatches_(u, f, p, m), a(p, m);
          }
          return f;
        } else Ct(1, u);
      }),
      (this.produceWithPatches = (u, s) => {
        if (typeof u == "function")
          return (m, ...w) => this.produceWithPatches(m, (g) => u(g, ...w));
        let a, f;
        return [
          this.produce(u, s, (m, w) => {
            (a = m), (f = w);
          }),
          a,
          f,
        ];
      }),
      typeof (o == null ? void 0 : o.autoFreeze) == "boolean" &&
        this.setAutoFreeze(o.autoFreeze),
      typeof (o == null ? void 0 : o.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(o.useStrictShallowCopy);
  }
  createDraft(o) {
    Ht(o) || Ct(8), Nn(o) && (o = pm(o));
    const u = Vf(this),
      s = Gu(o, void 0);
    return (s[ct].isManual_ = !0), Yu(u), s;
  }
  finishDraft(o, u) {
    const s = o && o[ct];
    (!s || !s.isManual_) && Ct(9);
    const { scope_: a } = s;
    return Wf(a, u), Qf(void 0, a);
  }
  setAutoFreeze(o) {
    this.autoFreeze_ = o;
  }
  setUseStrictShallowCopy(o) {
    this.useStrictShallowCopy_ = o;
  }
  applyPatches(o, u) {
    let s;
    for (s = u.length - 1; s >= 0; s--) {
      const f = u[s];
      if (f.path.length === 0 && f.op === "replace") {
        o = f.value;
        break;
      }
    }
    s > -1 && (u = u.slice(s + 1));
    const a = Tn("Patches").applyPatches_;
    return Nn(o) ? a(o, u) : this.produce(o, (f) => a(f, u));
  }
};
function Gu(o, u) {
  const s = xi(o)
    ? Tn("MapSet").proxyMap_(o, u)
    : Ei(o)
    ? Tn("MapSet").proxySet_(o, u)
    : cm(o, u);
  return (u ? u.scope_ : gd()).drafts_.push(s), s;
}
function pm(o) {
  return Nn(o) || Ct(10, o), Sd(o);
}
function Sd(o) {
  if (!Ht(o) || ki(o)) return o;
  const u = o[ct];
  let s;
  if (u) {
    if (!u.modified_) return u.base_;
    (u.finalized_ = !0), (s = Ku(o, u.scope_.immer_.useStrictShallowCopy_));
  } else s = Ku(o, !0);
  return (
    vi(s, (a, f) => {
      yd(s, a, Sd(f));
    }),
    u && (u.finalized_ = !1),
    s
  );
}
var ft = new dm(),
  _d = ft.produce;
ft.produceWithPatches.bind(ft);
ft.setAutoFreeze.bind(ft);
ft.setUseStrictShallowCopy.bind(ft);
ft.applyPatches.bind(ft);
ft.createDraft.bind(ft);
ft.finishDraft.bind(ft);
function xd(o) {
  return ({ dispatch: s, getState: a }) =>
    (f) =>
    (p) =>
      typeof p == "function" ? p(s, a, o) : f(p);
}
var hm = xd(),
  vm = xd,
  mm =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? hi
              : hi.apply(null, arguments);
        };
function qf(o, u) {
  function s(...a) {
    if (u) {
      let f = u(...a);
      if (!f) throw new Error(Ut(0));
      return {
        type: o,
        payload: f.payload,
        ...("meta" in f && { meta: f.meta }),
        ...("error" in f && { error: f.error }),
      };
    }
    return { type: o, payload: a[0] };
  }
  return (
    (s.toString = () => `${o}`),
    (s.type = o),
    (s.match = (a) => rm(a) && a.type === o),
    s
  );
}
var Ed = class Kr extends Array {
  constructor(...u) {
    super(...u), Object.setPrototypeOf(this, Kr.prototype);
  }
  static get [Symbol.species]() {
    return Kr;
  }
  concat(...u) {
    return super.concat.apply(this, u);
  }
  prepend(...u) {
    return u.length === 1 && Array.isArray(u[0])
      ? new Kr(...u[0].concat(this))
      : new Kr(...u.concat(this));
  }
};
function Yf(o) {
  return Ht(o) ? _d(o, () => {}) : o;
}
function Xf(o, u, s) {
  return o.has(u) ? o.get(u) : o.set(u, s(u)).get(u);
}
function ym(o) {
  return typeof o == "boolean";
}
var gm = () =>
    function (u) {
      const {
        thunk: s = !0,
        immutableCheck: a = !0,
        serializableCheck: f = !0,
        actionCreatorCheck: p = !0,
      } = u ?? {};
      let m = new Ed();
      return s && (ym(s) ? m.push(hm) : m.push(vm(s.extraArgument))), m;
    },
  wm = "RTK_autoBatch",
  Gf = (o) => (u) => {
    setTimeout(u, o);
  },
  Sm =
    (o = { type: "raf" }) =>
    (u) =>
    (...s) => {
      const a = u(...s);
      let f = !0,
        p = !1,
        m = !1;
      const w = new Set(),
        g =
          o.type === "tick"
            ? queueMicrotask
            : o.type === "raf"
            ? typeof window < "u" && window.requestAnimationFrame
              ? window.requestAnimationFrame
              : Gf(10)
            : o.type === "callback"
            ? o.queueNotification
            : Gf(o.timeout),
        _ = () => {
          (m = !1), p && ((p = !1), w.forEach((x) => x()));
        };
      return Object.assign({}, a, {
        subscribe(x) {
          const N = () => f && x(),
            R = a.subscribe(N);
          return (
            w.add(x),
            () => {
              R(), w.delete(x);
            }
          );
        },
        dispatch(x) {
          var N;
          try {
            return (
              (f = !((N = x == null ? void 0 : x.meta) != null && N[wm])),
              (p = !f),
              p && (m || ((m = !0), g(_))),
              a.dispatch(x)
            );
          } finally {
            f = !0;
          }
        },
      });
    },
  _m = (o) =>
    function (s) {
      const { autoBatch: a = !0 } = s ?? {};
      let f = new Ed(o);
      return a && f.push(Sm(typeof a == "object" ? a : void 0)), f;
    };
function xm(o) {
  const u = gm(),
    {
      reducer: s = void 0,
      middleware: a,
      devTools: f = !0,
      preloadedState: p = void 0,
      enhancers: m = void 0,
    } = o || {};
  let w;
  if (typeof s == "function") w = s;
  else if (rs(s)) w = tm(s);
  else throw new Error(Ut(1));
  let g;
  typeof a == "function" ? (g = a(u)) : (g = u());
  let _ = hi;
  f && (_ = mm({ trace: !1, ...(typeof f == "object" && f) }));
  const x = nm(...g),
    N = _m(x);
  let R = typeof m == "function" ? m(N) : N();
  const I = _(...R);
  return hd(w, p, I);
}
function kd(o) {
  const u = {},
    s = [];
  let a;
  const f = {
    addCase(p, m) {
      const w = typeof p == "string" ? p : p.type;
      if (!w) throw new Error(Ut(28));
      if (w in u) throw new Error(Ut(29));
      return (u[w] = m), f;
    },
    addMatcher(p, m) {
      return s.push({ matcher: p, reducer: m }), f;
    },
    addDefaultCase(p) {
      return (a = p), f;
    },
  };
  return o(f), [u, s, a];
}
function Em(o) {
  return typeof o == "function";
}
function km(o, u) {
  let [s, a, f] = kd(u),
    p;
  if (Em(o)) p = () => Yf(o());
  else {
    const w = Yf(o);
    p = () => w;
  }
  function m(w = p(), g) {
    let _ = [
      s[g.type],
      ...a.filter(({ matcher: x }) => x(g)).map(({ reducer: x }) => x),
    ];
    return (
      _.filter((x) => !!x).length === 0 && (_ = [f]),
      _.reduce((x, N) => {
        if (N)
          if (Nn(x)) {
            const I = N(x, g);
            return I === void 0 ? x : I;
          } else {
            if (Ht(x)) return _d(x, (R) => N(R, g));
            {
              const R = N(x, g);
              if (R === void 0) {
                if (x === null) return x;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined"
                );
              }
              return R;
            }
          }
        return x;
      }, w)
    );
  }
  return (m.getInitialState = p), m;
}
var Cm = Symbol.for("rtk-slice-createasyncthunk");
function Pm(o, u) {
  return `${o}/${u}`;
}
function Nm({ creators: o } = {}) {
  var s;
  const u = (s = o == null ? void 0 : o.asyncThunk) == null ? void 0 : s[Cm];
  return function (f) {
    const { name: p, reducerPath: m = p } = f;
    if (!p) throw new Error(Ut(11));
    typeof process < "u";
    const w =
        (typeof f.reducers == "function" ? f.reducers(Rm()) : f.reducers) || {},
      g = Object.keys(w),
      _ = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      x = {
        addCase(O, B) {
          const P = typeof O == "string" ? O : O.type;
          if (!P) throw new Error(Ut(12));
          if (P in _.sliceCaseReducersByType) throw new Error(Ut(13));
          return (_.sliceCaseReducersByType[P] = B), x;
        },
        addMatcher(O, B) {
          return _.sliceMatchers.push({ matcher: O, reducer: B }), x;
        },
        exposeAction(O, B) {
          return (_.actionCreators[O] = B), x;
        },
        exposeCaseReducer(O, B) {
          return (_.sliceCaseReducersByName[O] = B), x;
        },
      };
    g.forEach((O) => {
      const B = w[O],
        P = {
          reducerName: O,
          type: Pm(p, O),
          createNotation: typeof f.reducers == "function",
        };
      Lm(B) ? jm(P, B, x, u) : Om(P, B, x);
    });
    function N() {
      const [O = {}, B = [], P = void 0] =
          typeof f.extraReducers == "function"
            ? kd(f.extraReducers)
            : [f.extraReducers],
        H = { ...O, ..._.sliceCaseReducersByType };
      return km(f.initialState, (Q) => {
        for (let W in H) Q.addCase(W, H[W]);
        for (let W of _.sliceMatchers) Q.addMatcher(W.matcher, W.reducer);
        for (let W of B) Q.addMatcher(W.matcher, W.reducer);
        P && Q.addDefaultCase(P);
      });
    }
    const R = (O) => O,
      I = new Map();
    let A;
    function q(O, B) {
      return A || (A = N()), A(O, B);
    }
    function V() {
      return A || (A = N()), A.getInitialState();
    }
    function z(O, B = !1) {
      function P(Q) {
        let W = Q[O];
        return typeof W > "u" && B && (W = V()), W;
      }
      function H(Q = R) {
        const W = Xf(I, B, () => new WeakMap());
        return Xf(W, Q, () => {
          const ce = {};
          for (const [re, se] of Object.entries(f.selectors ?? {}))
            ce[re] = Tm(se, Q, V, B);
          return ce;
        });
      }
      return {
        reducerPath: O,
        getSelectors: H,
        get selectors() {
          return H(P);
        },
        selectSlice: P,
      };
    }
    const U = {
      name: p,
      reducer: q,
      actions: _.actionCreators,
      caseReducers: _.sliceCaseReducersByName,
      getInitialState: V,
      ...z(m),
      injectInto(O, { reducerPath: B, ...P } = {}) {
        const H = B ?? m;
        return (
          O.inject({ reducerPath: H, reducer: q }, P), { ...U, ...z(H, !0) }
        );
      },
    };
    return U;
  };
}
function Tm(o, u, s, a) {
  function f(p, ...m) {
    let w = u(p);
    return typeof w > "u" && a && (w = s()), o(w, ...m);
  }
  return (f.unwrapped = o), f;
}
var Cd = Nm();
function Rm() {
  function o(u, s) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: u, ...s };
  }
  return (
    (o.withTypes = () => o),
    {
      reducer(u) {
        return Object.assign(
          {
            [u.name](...s) {
              return u(...s);
            },
          }[u.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(u, s) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: u,
          reducer: s,
        };
      },
      asyncThunk: o,
    }
  );
}
function Om({ type: o, reducerName: u, createNotation: s }, a, f) {
  let p, m;
  if ("reducer" in a) {
    if (s && !zm(a)) throw new Error(Ut(17));
    (p = a.reducer), (m = a.prepare);
  } else p = a;
  f.addCase(o, p)
    .exposeCaseReducer(u, p)
    .exposeAction(u, m ? qf(o, m) : qf(o));
}
function Lm(o) {
  return o._reducerDefinitionType === "asyncThunk";
}
function zm(o) {
  return o._reducerDefinitionType === "reducerWithPrepare";
}
function jm({ type: o, reducerName: u }, s, a, f) {
  if (!f) throw new Error(Ut(18));
  const {
      payloadCreator: p,
      fulfilled: m,
      pending: w,
      rejected: g,
      settled: _,
      options: x,
    } = s,
    N = f(o, p, x);
  a.exposeAction(u, N),
    m && a.addCase(N.fulfilled, m),
    w && a.addCase(N.pending, w),
    g && a.addCase(N.rejected, g),
    _ && a.addMatcher(N.settled, _),
    a.exposeCaseReducer(u, {
      fulfilled: m || ai,
      pending: w || ai,
      rejected: g || ai,
      settled: _ || ai,
    });
}
function ai() {}
function Ut(o) {
  return `Minified Redux Toolkit error #${o}; visit https://redux-toolkit.js.org/Errors?code=${o} for the full message or use the non-minified dev environment for full errors. `;
}
const Mm = { keywords: "" },
  Pd = Cd({
    name: "keywords",
    initialState: Mm,
    reducers: {
      setKeywordsState: (o, u) => {
        o.keywords = u.payload;
      },
    },
  }),
  Dm = Pd.actions,
  Im = Pd.reducer,
  Am = (o, u) => {
    const [s, a] = st.useState(o),
      f = pd();
    return (
      st.useEffect(() => {
        const p = setTimeout(() => {
          a(o), f(Dm.setKeywordsState(o));
        }, u);
        return () => {
          clearTimeout(p);
        };
      }, [o, u, f]),
      s
    );
  },
  Fm = () => {
    const [o, u] = st.useState(""),
      [s, a] = st.useState(!1);
    Am(o, 1500);
    const f = (g) => {
        u(g);
      },
      p = () => {
        a((g) => !g);
      },
      m = () => {
        a(!0);
      },
      w = () => {
        a(!1);
      };
    return b.jsx("div", {
      className: En["header-container"],
      children: b.jsxs("header", {
        className: En.header,
        children: [
          b.jsx(sd, {
            to: "/home",
            className: En.logo,
            children: b.jsx("img", {
              src: "https://shipy4karu.github.io/News-Reactify/assets/logo.svg",
              width: 103,
              height: 57.3,
              className: En["logo-icon"],
              alt: "logo",
            }),
          }),
          b.jsxs("div", {
            className: En["search-container"],
            children: [
              b.jsx(Uh, {
                onSearch: f,
                onShow: m,
                onHide: w,
                keywords: o,
                showClass: s && "show",
              }),
              b.jsx("button", {
                className: En.search,
                onClick: p,
                children: b.jsx("img", {
                  src: "https://shipy4karu.github.io/News-Reactify/assets/search.svg",
                  alt: "search",
                  width: 17,
                  height: 25,
                  className: En["search-icon"],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  $m = "_main_1br2l_1",
  Um = { main: $m },
  Nd = (o) => {
    const u = new Date(),
      s = new Date(o),
      a = (u.getTime() - s.getTime()) / 1e3;
    switch (!0) {
      case a < 60:
        return `${Math.floor(a)}'s ago`;
      case a < 3600:
        return `${Math.floor(a / 60)}'m ago`;
      case a <= 86400:
        return `${Math.floor(a / 3600)}'m ago`;
      default: {
        const f = Math.floor(a / 86400);
        return f === 1 ? `${f} day ago` : `${f} days ago`;
      }
    }
  },
  Hm = "_list_1ehc6_1",
  Bm = "_banner_1ehc6_17",
  Wm = "_item_1ehc6_19",
  Vm = "_pulse_1ehc6_1",
  Wr = { list: Hm, banner: Bm, item: Wm, pulse: Vm },
  Qm = ({ count: o = 1, type: u = "banner" }) =>
    b.jsx(b.Fragment, {
      children:
        o > 1
          ? b.jsx("ul", {
              className: Wr.list,
              children: [...Array(o)].map((s, a) =>
                b.jsx(
                  "li",
                  { className: u === "banner" ? Wr.banner : Wr.item },
                  a
                )
              ),
            })
          : b.jsx("li", { className: u === "banner" ? Wr.banner : Wr.item }),
    }),
  Td = (o, u, s) =>
    function (f) {
      const { isLoading: p, ...m } = f;
      return p ? b.jsx(Qm, { type: u, count: s }) : b.jsx(o, { ...m });
    },
  Km = "_wrapper_1j4r9_1",
  qm = "_image_1j4r9_57",
  Zf = { wrapper: Km, image: qm },
  Jf = ({ image: o }) =>
    b.jsx("div", {
      className: Zf.wrapper,
      children: o
        ? b.jsx("img", { src: o, alt: "news picture", className: Zf.image })
        : null,
    }),
  Ym = "_hero_1jjmu_1",
  Xm = "_title_1jjmu_17",
  Gm = "_extra_1jjmu_37",
  Zm = "_content_1jjmu_65",
  Vr = {
    hero: Ym,
    title: Xm,
    extra: Gm,
    "image-desc": "_image-desc_1jjmu_55",
    content: Zm,
  },
  Jm = ({ item: o }) => {
    let u = b.jsx(Jf, { image: o.urlToImage });
    return (
      window.innerWidth >= 1440 &&
        (u = b.jsxs("div", {
          className: Vr["image-desc"],
          children: [
            b.jsx(Jf, { image: o.urlToImage }),
            b.jsx("p", { className: Vr.content, children: o.content }),
          ],
        })),
      b.jsxs("div", {
        className: Vr.hero,
        children: [
          u,
          b.jsx("p", { className: Vr.title, children: o.description }),
          b.jsxs("p", {
            className: Vr.extra,
            children: [Nd(o.publishedAt), " by ", o.author],
          }),
        ],
      })
    );
  },
  bm = Td(Jm, "banner", 1),
  ey = "https://newsapi.org/v2/top-headlines",
  ty = "076e01274d3a4eaba29760429047080c",
  ny = async (o = "technology", u = 30, s = 1, a = "") => {
    const f = new URL(ey);
    f.searchParams.append("category", o),
      f.searchParams.append("pageSize", u),
      f.searchParams.append("page", s),
      f.searchParams.append("apiKey", ty),
      f.searchParams.append("q", a);
    try {
      const p = await fetch(f);
      if (!p.ok) throw new Error(`HTTP error! status: ${p.status}`);
      return await p.json();
    } catch (p) {
      console.log(`СЛУЧИЛАСЬ ОШИБКА: ${p}`);
    }
  },
  ry = "_list_svlqv_1",
  oy = { list: ry },
  iy = "_item_hwahl_1",
  ly = "_wrapper_hwahl_33",
  uy = "_info_hwahl_63",
  sy = "_title_hwahl_79",
  ay = "_extra_hwahl_91",
  Qr = { item: iy, wrapper: ly, info: uy, title: sy, extra: ay },
  cy = ({ item: o, onSelect: u }) =>
    b.jsxs("li", {
      className: Qr.item,
      onClick: u,
      children: [
        b.jsx("div", {
          className: Qr.wrapper,
          style: { backgroundImage: `url(${o.urlToImage})` },
        }),
        b.jsxs("div", {
          className: Qr.info,
          children: [
            b.jsx("p", { className: Qr.title, children: o.description }),
            b.jsxs("p", {
              className: Qr.extra,
              children: [Nd(o.publishedAt), " by ", o.author],
            }),
          ],
        }),
      ],
    }),
  fy = { currentNews: 0 },
  Rd = Cd({
    name: "currentPage",
    initialState: fy,
    reducers: {
      setCurrentNews: (o, u) => {
        o.currentNews = u.payload;
      },
    },
  }),
  dy = Rd.actions,
  py = Rd.reducer,
  hy = ({ news: o }) => {
    const u = pd(),
      s = (a) => {
        u(dy.setCurrentNews(a));
      };
    return b.jsx("ul", {
      className: oy.list,
      children: o.map((a, f) => {
        if (a.urlToImage)
          return b.jsx(cy, { item: a, onSelect: s.bind(void 0, f) }, f);
      }),
    });
  },
  vy = Td(hy, "banner", 1),
  my = "_pagination_qawu5_1",
  yy = "_list_qawu5_19",
  gy = "_pageNumber_qawu5_31",
  wy = "_arrow_qawu5_33",
  ci = { pagination: my, list: yy, pageNumber: gy, arrow: wy },
  Sy = ({
    totalPages: o,
    onNext: u,
    onPrev: s,
    onCurrent: a,
    currentPage: f,
  }) =>
    b.jsxs("div", {
      className: ci.pagination,
      children: [
        b.jsx("div", {
          children: b.jsx("button", {
            disabled: f <= 1,
            className: ci.arrow,
            onClick: s,
            children: "<",
          }),
        }),
        [...Array(o)].map((p, m) =>
          b.jsx(
            "button",
            {
              className: ci.pageNumber,
              disabled: m + 1 === f,
              onClick: a.bind(void 0, m + 1),
              children: m + 1,
            },
            m
          )
        ),
        b.jsx("div", {
          children: b.jsx("button", {
            disabled: f >= o,
            className: ci.arrow,
            onClick: u,
            children: ">",
          }),
        }),
      ],
    }),
  _y = "_categories_1x5p5_1",
  xy = "_item_1x5p5_37",
  Ey = "_active_1x5p5_39",
  Uu = { categories: _y, item: xy, active: Ey },
  bf = 10,
  Od = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ],
  ky = ({ selectedCategory: o, setSelectedCategory: u }) =>
    b.jsx("div", {
      className: Uu.categories,
      children: Od.map((s) =>
        b.jsx(
          "button",
          {
            onClick: u.bind(void 0, s),
            className: o === s ? Uu.active : Uu.item,
            children: s,
          },
          s
        )
      ),
    }),
  Cy = (o, u) => {
    const [s, a] = st.useState(o),
      f = st.useCallback(() => {
        s < u && a((w) => w + 1);
      }, [s, u, a]),
      p = st.useCallback(() => {
        s > 1 && a((w) => w - 1);
      }, [s, a]);
    return {
      currentPage: s,
      handleNextPage: f,
      handlePrevPage: p,
      handleCurrentPage: (w) => {
        a(w);
      },
    };
  };
let Hu = null;
const Py = () => {
    const [o, u] = st.useState([]),
      [s, a] = st.useState(!1),
      [f, p] = st.useState(Od[0]),
      m = $f((I) => I.currentNews.currentNews),
      {
        currentPage: w,
        handleNextPage: g,
        handlePrevPage: _,
        handleCurrentPage: x,
      } = Cy(1, Hu),
      N = $f((I) => I.keywords.keywords);
    st.useEffect(() => {
      (async () => {
        try {
          a(!0);
          const A = await ny(f, bf, w, N);
          console.log(A),
            a(!1),
            (Hu = Math.ceil(A.totalResults / bf)),
            u(A.articles);
        } catch (A) {
          console.log(A);
        }
      })();
    }, [w, f, N]);
    const R = (I) => {
      p(I);
    };
    return b.jsxs("main", {
      className: Um.main,
      children: [
        b.jsx(ky, { selectedCategory: f, setSelectedCategory: R }),
        b.jsx(bm, { isLoading: s, item: o.length > 0 && o[m] }),
        b.jsx(vy, { news: o, isLoading: s }),
        b.jsx(Sy, {
          totalPages: Hu,
          currentPage: w,
          onNext: g,
          onPrev: _,
          onCurrent: x,
        }),
      ],
    });
  },
  Ny = "_container_ojn2v_1",
  Ty = { container: Ny },
  Ry = (o) => b.jsx("div", { className: Ty.container, children: o.children }),
  Oy = () => b.jsxs(Ry, { children: [b.jsx(Fm, {}), b.jsx(Py, {})] });
function Ly() {
  return b.jsxs(Rv, {
    children: [
      b.jsx(zf, { path: "/home", children: b.jsx(Oy, {}) }),
      b.jsx(zf, { path: "/", exact: !0, children: b.jsx(Ev, { to: "/home" }) }),
    ],
  });
}
const zy = xm({ reducer: { keywords: Im, currentNews: py } });
Ih.createRoot(document.getElementById("root")).render(
  b.jsx(Ov, { children: b.jsx(Xv, { store: zy, children: b.jsx(Ly, {}) }) })
);
