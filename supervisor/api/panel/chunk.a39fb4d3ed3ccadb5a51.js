/*! For license information please see chunk.a39fb4d3ed3ccadb5a51.js.LICENSE */
(self.webpackJsonp = self.webpackJsonp || []).push([
  [1],
  [
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      var r = n(123),
        o = (n(8), n(10), n(95)),
        i = n(19);
      function a(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function u(t, e, n) {
        return e && s(t.prototype, e), n && s(t, n), t;
      }
      function c(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && l(t, e);
      }
      function l(t, e) {
        return (l =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function f(t) {
        return function () {
          var e,
            n = h(t);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
          ) {
            var r = h(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === p(e) || "function" == typeof e)) return e;
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(this, e);
        };
      }
      function h(t) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function p(t) {
        return (p =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function d(t, e, n, r, o) {
        var i;
        o && (i = "object" === p(n) && null !== n) && (r = t.__dataTemp[e]);
        var a = r !== n && (r == r || n == n);
        return i && a && (t.__dataTemp[e] = n), a;
      }
      var y = Object(i.a)(function (t) {
          return (function (e) {
            c(r, t);
            var n = f(r);
            function r() {
              return a(this, r), n.apply(this, arguments);
            }
            return (
              u(r, [
                {
                  key: "_shouldPropertyChange",
                  value: function (t, e, n) {
                    return d(this, t, e, n, !0);
                  },
                },
              ]),
              r
            );
          })();
        }),
        _ = Object(i.a)(function (t) {
          return (function (e) {
            c(r, t);
            var n = f(r);
            function r() {
              return a(this, r), n.apply(this, arguments);
            }
            return (
              u(
                r,
                [
                  {
                    key: "_shouldPropertyChange",
                    value: function (t, e, n) {
                      return d(this, t, e, n, this.mutableData);
                    },
                  },
                ],
                [
                  {
                    key: "properties",
                    get: function () {
                      return { mutableData: Boolean };
                    },
                  },
                ]
              ),
              r
            );
          })();
        });
      y._mutablePropertyChange = d;
      var v = n(24);
      function m(t) {
        return (m =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function b(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function g(t, e, n) {
        return (g =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = k(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function O(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && P(t, e);
      }
      function P(t, e) {
        return (P =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function w(t) {
        return function () {
          var e,
            n = k(t);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
          ) {
            var r = k(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === m(e) || "function" == typeof e)) return e;
            return S(t);
          })(this, e);
        };
      }
      function S(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function k(t) {
        return (k = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function C(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      var E = null;
      function T() {
        return E;
      }
      T.prototype = Object.create(HTMLTemplateElement.prototype, {
        constructor: { value: T, writable: !0 },
      });
      var j = Object(o.a)(T),
        R = y(j);
      var x = Object(o.a)(
          (function () {
            return function t() {
              C(this, t);
            };
          })()
        ),
        A = (function (t) {
          O(i, x);
          var e,
            n,
            r,
            o = w(i);
          function i(t) {
            var e;
            C(this, i),
              (e = o.call(this))._configureProperties(t),
              (e.root = e._stampTemplate(e.__dataHost));
            for (
              var n = (e.children = []), r = e.root.firstChild;
              r;
              r = r.nextSibling
            )
              n.push(r), (r.__templatizeInstance = S(e));
            e.__templatizeOwner &&
              e.__templatizeOwner.__hideTemplateChildren__ &&
              e._showHideChildren(!0);
            var a = e.__templatizeOptions;
            return (
              ((t && a.instanceProps) || !a.instanceProps) &&
                e._enableProperties(),
              e
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "_configureProperties",
                value: function (t) {
                  if (this.__templatizeOptions.forwardHostProp)
                    for (var e in this.__hostProps)
                      this._setPendingProperty(
                        e,
                        this.__dataHost["_host_" + e]
                      );
                  for (var n in t) this._setPendingProperty(n, t[n]);
                },
              },
              {
                key: "forwardHostProp",
                value: function (t, e) {
                  this._setPendingPropertyOrPath(t, e, !1, !0) &&
                    this.__dataHost._enqueueClient(this);
                },
              },
              {
                key: "_addEventListenerToNode",
                value: function (t, e, n) {
                  var r = this;
                  if (this._methodHost && this.__templatizeOptions.parentModel)
                    this._methodHost._addEventListenerToNode(t, e, function (
                      t
                    ) {
                      (t.model = r), n(t);
                    });
                  else {
                    var o = this.__dataHost.__dataHost;
                    o && o._addEventListenerToNode(t, e, n);
                  }
                },
              },
              {
                key: "_showHideChildren",
                value: function (t) {
                  for (var e = this.children, n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (Boolean(t) != Boolean(r.__hideTemplateChildren__))
                      if (r.nodeType === Node.TEXT_NODE)
                        t
                          ? ((r.__polymerTextContent__ = r.textContent),
                            (r.textContent = ""))
                          : (r.textContent = r.__polymerTextContent__);
                      else if ("slot" === r.localName)
                        if (t)
                          (r.__polymerReplaced__ = document.createComment(
                            "hidden-slot"
                          )),
                            r.parentNode.replaceChild(r.__polymerReplaced__, r);
                        else {
                          var o = r.__polymerReplaced__;
                          o && o.parentNode.replaceChild(r, o);
                        }
                      else
                        r.style &&
                          (t
                            ? ((r.__polymerDisplay__ = r.style.display),
                              (r.style.display = "none"))
                            : (r.style.display = r.__polymerDisplay__));
                    (r.__hideTemplateChildren__ = t),
                      r._showHideChildren && r._showHideChildren(t);
                  }
                },
              },
              {
                key: "_setUnmanagedPropertyToNode",
                value: function (t, e, n) {
                  t.__hideTemplateChildren__ &&
                  t.nodeType == Node.TEXT_NODE &&
                  "textContent" == e
                    ? (t.__polymerTextContent__ = n)
                    : g(
                        k(i.prototype),
                        "_setUnmanagedPropertyToNode",
                        this
                      ).call(this, t, e, n);
                },
              },
              {
                key: "dispatchEvent",
                value: function (t) {
                  return !0;
                },
              },
              {
                key: "parentModel",
                get: function () {
                  var t = this.__parentModel;
                  if (!t) {
                    var e;
                    t = this;
                    do {
                      t = t.__dataHost.__dataHost;
                    } while ((e = t.__templatizeOptions) && !e.parentModel);
                    this.__parentModel = t;
                  }
                  return t;
                },
              },
            ]) && b(e.prototype, n),
            r && b(e, r),
            i
          );
        })();
      A.prototype.__dataHost,
        A.prototype.__templatizeOptions,
        A.prototype._methodHost,
        A.prototype.__templatizeOwner,
        A.prototype.__hostProps;
      var N = y(A);
      function I(t) {
        var e = t.__dataHost;
        return (e && e._methodHost) || e;
      }
      function D(t, e, n) {
        var r = n.mutableData ? N : A,
          o = (function (t) {
            O(n, r);
            var e = w(n);
            function n() {
              return C(this, n), e.apply(this, arguments);
            }
            return n;
          })();
        return (
          (o.prototype.__templatizeOptions = n),
          o.prototype._bindTemplate(t),
          (function (t, e, n, r) {
            var o = n.hostProps || {};
            for (var i in r.instanceProps) {
              delete o[i];
              var a = r.notifyInstanceProp;
              a &&
                t.prototype._addPropertyEffect(
                  i,
                  t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,
                  { fn: F(i, a) }
                );
            }
            if (r.forwardHostProp && e.__dataHost)
              for (var s in o)
                t.prototype._addPropertyEffect(
                  s,
                  t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,
                  {
                    fn: function (t, e, n) {
                      t.__dataHost._setPendingPropertyOrPath(
                        "_host_" + e,
                        n[e],
                        !0,
                        !0
                      );
                    },
                  }
                );
          })(o, t, e, n),
          o
        );
      }
      function M(t, e, n) {
        var r = n.forwardHostProp;
        if (r) {
          var o = e.templatizeTemplateClass;
          if (!o) {
            var i = n.mutableData ? R : j;
            o = e.templatizeTemplateClass = (function (t) {
              O(n, i);
              var e = w(n);
              function n() {
                return C(this, n), e.apply(this, arguments);
              }
              return n;
            })();
            var a = e.hostProps;
            for (var s in a)
              o.prototype._addPropertyEffect(
                "_host_" + s,
                o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,
                { fn: L(s, r) }
              ),
                o.prototype._createNotifyingProperty("_host_" + s);
          }
          !(function (t, e) {
            (E = t), Object.setPrototypeOf(t, e.prototype), new e(), (E = null);
          })(t, o),
            t.__dataProto && Object.assign(t.__data, t.__dataProto),
            (t.__dataTemp = {}),
            (t.__dataPending = null),
            (t.__dataOld = null),
            t._enableProperties();
        }
      }
      function L(t, e) {
        return function (t, n, r) {
          e.call(t.__templatizeOwner, n.substring("_host_".length), r[n]);
        };
      }
      function F(t, e) {
        return function (t, n, r) {
          e.call(t.__templatizeOwner, t, n, r[n]);
        };
      }
      function H(t, e, n) {
        if (v.e && !I(t))
          throw new Error("strictTemplatePolicy: template owner not trusted");
        if (((n = n || {}), t.__templatizeOwner))
          throw new Error("A <template> can only be templatized once");
        t.__templatizeOwner = e;
        var r = (e ? e.constructor : A)._parseTemplate(t),
          o = r.templatizeInstanceClass;
        o || ((o = D(t, r, n)), (r.templatizeInstanceClass = o)), M(t, r, n);
        var i = (function (t) {
          O(n, o);
          var e = w(n);
          function n() {
            return C(this, n), e.apply(this, arguments);
          }
          return n;
        })();
        return (
          (i.prototype._methodHost = I(t)),
          (i.prototype.__dataHost = t),
          (i.prototype.__templatizeOwner = e),
          (i.prototype.__hostProps = r.hostProps),
          (i = i)
        );
      }
      function z(t, e) {
        for (var n; e; )
          if ((n = e.__templatizeInstance)) {
            if (n.__dataHost == t) return n;
            e = n.__dataHost;
          } else e = e.parentNode;
        return null;
      }
      var B = n(101);
      function q(t) {
        return (q =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Y(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function V(t, e, n) {
        return e && Y(t.prototype, e), n && Y(t, n), t;
      }
      function U(t, e) {
        return (U =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function $(t) {
        return function () {
          var e,
            n = J(t);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
          ) {
            var r = J(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === q(e) || "function" == typeof e)) return e;
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(this, e);
        };
      }
      function J(t) {
        return (J = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var X = Object(B.a)(_(Object(o.a)(HTMLElement))),
        G = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && U(t, e);
          })(n, X);
          var e = $(n);
          function n() {
            var t;
            if (
              ((function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              (t = e.call(this)),
              v.e)
            )
              throw new Error("strictTemplatePolicy: dom-bind not allowed");
            return (t.root = null), (t.$ = null), (t.__children = null), t;
          }
          return (
            V(n, null, [
              {
                key: "observedAttributes",
                get: function () {
                  return ["mutable-data"];
                },
              },
            ]),
            V(n, [
              {
                key: "attributeChangedCallback",
                value: function () {
                  this.mutableData = !0;
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  (this.style.display = "none"), this.render();
                },
              },
              {
                key: "disconnectedCallback",
                value: function () {
                  this.__removeChildren();
                },
              },
              {
                key: "__insertChildren",
                value: function () {
                  this.parentNode.insertBefore(this.root, this);
                },
              },
              {
                key: "__removeChildren",
                value: function () {
                  if (this.__children)
                    for (var t = 0; t < this.__children.length; t++)
                      this.root.appendChild(this.__children[t]);
                },
              },
              {
                key: "render",
                value: function () {
                  var t,
                    e = this;
                  if (!this.__children) {
                    if (!(t = t || this.querySelector("template"))) {
                      var n = new MutationObserver(function () {
                        if (!(t = e.querySelector("template")))
                          throw new Error(
                            "dom-bind requires a <template> child"
                          );
                        n.disconnect(), e.render();
                      });
                      return void n.observe(this, { childList: !0 });
                    }
                    (this.root = this._stampTemplate(t)),
                      (this.$ = this.root.$),
                      (this.__children = []);
                    for (var r = this.root.firstChild; r; r = r.nextSibling)
                      this.__children[this.__children.length] = r;
                    this._enableProperties();
                  }
                  this.__insertChildren(),
                    this.dispatchEvent(
                      new CustomEvent("dom-change", {
                        bubbles: !0,
                        composed: !0,
                      })
                    );
                },
              },
            ]),
            n
          );
        })();
      customElements.define("dom-bind", G);
      var W = n(37),
        K = n(36),
        Z = n(45),
        Q = n(57),
        tt = n(32);
      function et(t) {
        return (et =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function nt(t, e, n) {
        return (nt =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = st(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function rt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function ot(t, e, n) {
        return e && rt(t.prototype, e), n && rt(t, n), t;
      }
      function it(t, e) {
        return (it =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function at(t) {
        return function () {
          var e,
            n = st(t);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
          ) {
            var r = st(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === et(e) || "function" == typeof e)) return e;
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(this, e);
        };
      }
      function st(t) {
        return (st = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var ut = _(W.a),
        ct = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && it(t, e);
          })(n, ut);
          var e = at(n);
          function n() {
            var t;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              ((t = e.call(this)).__instances = []),
              (t.__limit = 1 / 0),
              (t.__pool = []),
              (t.__renderDebouncer = null),
              (t.__itemsIdxToInstIdx = {}),
              (t.__chunkCount = null),
              (t.__lastChunkTime = null),
              (t.__sortFn = null),
              (t.__filterFn = null),
              (t.__observePaths = null),
              (t.__ctor = null),
              (t.__isDetached = !0),
              (t.template = null),
              t
            );
          }
          return (
            ot(n, null, [
              {
                key: "is",
                get: function () {
                  return "dom-repeat";
                },
              },
              {
                key: "template",
                get: function () {
                  return null;
                },
              },
              {
                key: "properties",
                get: function () {
                  return {
                    items: { type: Array },
                    as: { type: String, value: "item" },
                    indexAs: { type: String, value: "index" },
                    itemsIndexAs: { type: String, value: "itemsIndex" },
                    sort: { type: Function, observer: "__sortChanged" },
                    filter: { type: Function, observer: "__filterChanged" },
                    observe: { type: String, observer: "__observeChanged" },
                    delay: Number,
                    renderedItemCount: {
                      type: Number,
                      notify: !0,
                      readOnly: !0,
                    },
                    initialCount: {
                      type: Number,
                      observer: "__initializeChunking",
                    },
                    targetFramerate: { type: Number, value: 20 },
                    _targetFrameTime: {
                      type: Number,
                      computed: "__computeFrameTime(targetFramerate)",
                    },
                  };
                },
              },
              {
                key: "observers",
                get: function () {
                  return ["__itemsChanged(items.*)"];
                },
              },
            ]),
            ot(n, [
              {
                key: "disconnectedCallback",
                value: function () {
                  nt(st(n.prototype), "disconnectedCallback", this).call(this),
                    (this.__isDetached = !0);
                  for (var t = 0; t < this.__instances.length; t++)
                    this.__detachInstance(t);
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  if (
                    (nt(st(n.prototype), "connectedCallback", this).call(this),
                    (this.style.display = "none"),
                    this.__isDetached)
                  ) {
                    this.__isDetached = !1;
                    for (
                      var t = this.parentNode, e = 0;
                      e < this.__instances.length;
                      e++
                    )
                      this.__attachInstance(e, t);
                  }
                },
              },
              {
                key: "__ensureTemplatized",
                value: function () {
                  var t = this;
                  if (!this.__ctor) {
                    var e = (this.template = this.querySelector("template"));
                    if (!e) {
                      var n = new MutationObserver(function () {
                        if (!t.querySelector("template"))
                          throw new Error(
                            "dom-repeat requires a <template> child"
                          );
                        n.disconnect(), t.__render();
                      });
                      return n.observe(this, { childList: !0 }), !1;
                    }
                    var r = {};
                    (r[this.as] = !0),
                      (r[this.indexAs] = !0),
                      (r[this.itemsIndexAs] = !0),
                      (this.__ctor = H(e, this, {
                        mutableData: this.mutableData,
                        parentModel: !0,
                        instanceProps: r,
                        forwardHostProp: function (t, e) {
                          for (
                            var n, r = this.__instances, o = 0;
                            o < r.length && (n = r[o]);
                            o++
                          )
                            n.forwardHostProp(t, e);
                        },
                        notifyInstanceProp: function (t, e, n) {
                          if (Object(Q.e)(this.as, e)) {
                            var r = t[this.itemsIndexAs];
                            e == this.as && (this.items[r] = n);
                            var o = Object(Q.i)(this.as, "items." + r, e);
                            this.notifyPath(o, n);
                          }
                        },
                      }));
                  }
                  return !0;
                },
              },
              {
                key: "__getMethodHost",
                value: function () {
                  return this.__dataHost._methodHost || this.__dataHost;
                },
              },
              {
                key: "__functionFromPropertyValue",
                value: function (t) {
                  if ("string" == typeof t) {
                    var e = t,
                      n = this.__getMethodHost();
                    return function () {
                      return n[e].apply(n, arguments);
                    };
                  }
                  return t;
                },
              },
              {
                key: "__sortChanged",
                value: function (t) {
                  (this.__sortFn = this.__functionFromPropertyValue(t)),
                    this.items && this.__debounceRender(this.__render);
                },
              },
              {
                key: "__filterChanged",
                value: function (t) {
                  (this.__filterFn = this.__functionFromPropertyValue(t)),
                    this.items && this.__debounceRender(this.__render);
                },
              },
              {
                key: "__computeFrameTime",
                value: function (t) {
                  return Math.ceil(1e3 / t);
                },
              },
              {
                key: "__initializeChunking",
                value: function () {
                  this.initialCount &&
                    ((this.__limit = this.initialCount),
                    (this.__chunkCount = this.initialCount),
                    (this.__lastChunkTime = performance.now()));
                },
              },
              {
                key: "__tryRenderChunk",
                value: function () {
                  this.items &&
                    this.__limit < this.items.length &&
                    this.__debounceRender(this.__requestRenderChunk);
                },
              },
              {
                key: "__requestRenderChunk",
                value: function () {
                  var t = this;
                  requestAnimationFrame(function () {
                    return t.__renderChunk();
                  });
                },
              },
              {
                key: "__renderChunk",
                value: function () {
                  var t = performance.now(),
                    e = this._targetFrameTime / (t - this.__lastChunkTime);
                  (this.__chunkCount = Math.round(this.__chunkCount * e) || 1),
                    (this.__limit += this.__chunkCount),
                    (this.__lastChunkTime = t),
                    this.__debounceRender(this.__render);
                },
              },
              {
                key: "__observeChanged",
                value: function () {
                  this.__observePaths =
                    this.observe && this.observe.replace(".*", ".").split(" ");
                },
              },
              {
                key: "__itemsChanged",
                value: function (t) {
                  this.items &&
                    !Array.isArray(this.items) &&
                    console.warn(
                      "dom-repeat expected array for `items`, found",
                      this.items
                    ),
                    this.__handleItemPath(t.path, t.value) ||
                      (this.__initializeChunking(),
                      this.__debounceRender(this.__render));
                },
              },
              {
                key: "__handleObservedPaths",
                value: function (t) {
                  if (this.__sortFn || this.__filterFn)
                    if (t) {
                      if (this.__observePaths)
                        for (
                          var e = this.__observePaths, n = 0;
                          n < e.length;
                          n++
                        )
                          0 === t.indexOf(e[n]) &&
                            this.__debounceRender(this.__render, this.delay);
                    } else this.__debounceRender(this.__render, this.delay);
                },
              },
              {
                key: "__debounceRender",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0;
                  (this.__renderDebouncer = K.a.debounce(
                    this.__renderDebouncer,
                    e > 0 ? tt.b.after(e) : tt.a,
                    t.bind(this)
                  )),
                    Object(Z.a)(this.__renderDebouncer);
                },
              },
              {
                key: "render",
                value: function () {
                  this.__debounceRender(this.__render), Object(Z.b)();
                },
              },
              {
                key: "__render",
                value: function () {
                  this.__ensureTemplatized() &&
                    (this.__applyFullRefresh(),
                    (this.__pool.length = 0),
                    this._setRenderedItemCount(this.__instances.length),
                    this.dispatchEvent(
                      new CustomEvent("dom-change", {
                        bubbles: !0,
                        composed: !0,
                      })
                    ),
                    this.__tryRenderChunk());
                },
              },
              {
                key: "__applyFullRefresh",
                value: function () {
                  for (
                    var t = this,
                      e = this.items || [],
                      n = new Array(e.length),
                      r = 0;
                    r < e.length;
                    r++
                  )
                    n[r] = r;
                  this.__filterFn &&
                    (n = n.filter(function (n, r, o) {
                      return t.__filterFn(e[n], r, o);
                    })),
                    this.__sortFn &&
                      n.sort(function (n, r) {
                        return t.__sortFn(e[n], e[r]);
                      });
                  for (
                    var o = (this.__itemsIdxToInstIdx = {}),
                      i = 0,
                      a = Math.min(n.length, this.__limit);
                    i < a;
                    i++
                  ) {
                    var s = this.__instances[i],
                      u = n[i],
                      c = e[u];
                    (o[u] = i),
                      s
                        ? (s._setPendingProperty(this.as, c),
                          s._setPendingProperty(this.indexAs, i),
                          s._setPendingProperty(this.itemsIndexAs, u),
                          s._flushProperties())
                        : this.__insertInstance(c, i, u);
                  }
                  for (var l = this.__instances.length - 1; l >= i; l--)
                    this.__detachAndRemoveInstance(l);
                },
              },
              {
                key: "__detachInstance",
                value: function (t) {
                  for (
                    var e = this.__instances[t], n = 0;
                    n < e.children.length;
                    n++
                  ) {
                    var r = e.children[n];
                    e.root.appendChild(r);
                  }
                  return e;
                },
              },
              {
                key: "__attachInstance",
                value: function (t, e) {
                  var n = this.__instances[t];
                  e.insertBefore(n.root, this);
                },
              },
              {
                key: "__detachAndRemoveInstance",
                value: function (t) {
                  var e = this.__detachInstance(t);
                  e && this.__pool.push(e), this.__instances.splice(t, 1);
                },
              },
              {
                key: "__stampInstance",
                value: function (t, e, n) {
                  var r = {};
                  return (
                    (r[this.as] = t),
                    (r[this.indexAs] = e),
                    (r[this.itemsIndexAs] = n),
                    new this.__ctor(r)
                  );
                },
              },
              {
                key: "__insertInstance",
                value: function (t, e, n) {
                  var r = this.__pool.pop();
                  r
                    ? (r._setPendingProperty(this.as, t),
                      r._setPendingProperty(this.indexAs, e),
                      r._setPendingProperty(this.itemsIndexAs, n),
                      r._flushProperties())
                    : (r = this.__stampInstance(t, e, n));
                  var o = this.__instances[e + 1],
                    i = o ? o.children[0] : this;
                  return (
                    this.parentNode.insertBefore(r.root, i),
                    (this.__instances[e] = r),
                    r
                  );
                },
              },
              {
                key: "_showHideChildren",
                value: function (t) {
                  for (var e = 0; e < this.__instances.length; e++)
                    this.__instances[e]._showHideChildren(t);
                },
              },
              {
                key: "__handleItemPath",
                value: function (t, e) {
                  var n = t.slice(6),
                    r = n.indexOf("."),
                    o = r < 0 ? n : n.substring(0, r);
                  if (o == parseInt(o, 10)) {
                    var i = r < 0 ? "" : n.substring(r + 1);
                    this.__handleObservedPaths(i);
                    var a = this.__itemsIdxToInstIdx[o],
                      s = this.__instances[a];
                    if (s) {
                      var u = this.as + (i ? "." + i : "");
                      s._setPendingPropertyOrPath(u, e, !1, !0),
                        s._flushProperties();
                    }
                    return !0;
                  }
                },
              },
              {
                key: "itemForElement",
                value: function (t) {
                  var e = this.modelForElement(t);
                  return e && e[this.as];
                },
              },
              {
                key: "indexForElement",
                value: function (t) {
                  var e = this.modelForElement(t);
                  return e && e[this.indexAs];
                },
              },
              {
                key: "modelForElement",
                value: function (t) {
                  return z(this.template, t);
                },
              },
            ]),
            n
          );
        })();
      function lt(t) {
        return (lt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function ft(t, e, n) {
        return (ft =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = _t(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function ht(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function pt(t, e, n) {
        return e && ht(t.prototype, e), n && ht(t, n), t;
      }
      function dt(t, e) {
        return (dt =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function yt(t) {
        return function () {
          var e,
            n = _t(t);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
          ) {
            var r = _t(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === lt(e) || "function" == typeof e)) return e;
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(this, e);
        };
      }
      function _t(t) {
        return (_t = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      customElements.define(ct.is, ct);
      var vt = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && dt(t, e);
        })(n, W["a"]);
        var e = yt(n);
        function n() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
            ((t = e.call(this)).__renderDebouncer = null),
            (t.__invalidProps = null),
            (t.__instance = null),
            (t._lastIf = !1),
            (t.__ctor = null),
            (t.__hideTemplateChildren__ = !1),
            t
          );
        }
        return (
          pt(n, null, [
            {
              key: "is",
              get: function () {
                return "dom-if";
              },
            },
            {
              key: "template",
              get: function () {
                return null;
              },
            },
            {
              key: "properties",
              get: function () {
                return {
                  if: { type: Boolean, observer: "__debounceRender" },
                  restamp: { type: Boolean, observer: "__debounceRender" },
                };
              },
            },
          ]),
          pt(n, [
            {
              key: "__debounceRender",
              value: function () {
                var t = this;
                (this.__renderDebouncer = K.a.debounce(
                  this.__renderDebouncer,
                  tt.a,
                  function () {
                    return t.__render();
                  }
                )),
                  Object(Z.a)(this.__renderDebouncer);
              },
            },
            {
              key: "disconnectedCallback",
              value: function () {
                ft(_t(n.prototype), "disconnectedCallback", this).call(this),
                  (this.parentNode &&
                    (this.parentNode.nodeType != Node.DOCUMENT_FRAGMENT_NODE ||
                      this.parentNode.host)) ||
                    this.__teardownInstance();
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                ft(_t(n.prototype), "connectedCallback", this).call(this),
                  (this.style.display = "none"),
                  this.if && this.__debounceRender();
              },
            },
            {
              key: "render",
              value: function () {
                Object(Z.b)();
              },
            },
            {
              key: "__render",
              value: function () {
                if (this.if) {
                  if (!this.__ensureInstance()) return;
                  this._showHideChildren();
                } else this.restamp && this.__teardownInstance();
                !this.restamp && this.__instance && this._showHideChildren(),
                  this.if != this._lastIf &&
                    (this.dispatchEvent(
                      new CustomEvent("dom-change", {
                        bubbles: !0,
                        composed: !0,
                      })
                    ),
                    (this._lastIf = this.if));
              },
            },
            {
              key: "__ensureInstance",
              value: function () {
                var t = this,
                  e = this.parentNode;
                if (e) {
                  if (!this.__ctor) {
                    var n = this.querySelector("template");
                    if (!n) {
                      var r = new MutationObserver(function () {
                        if (!t.querySelector("template"))
                          throw new Error("dom-if requires a <template> child");
                        r.disconnect(), t.__render();
                      });
                      return r.observe(this, { childList: !0 }), !1;
                    }
                    this.__ctor = H(n, this, {
                      mutableData: !0,
                      forwardHostProp: function (t, e) {
                        this.__instance &&
                          (this.if
                            ? this.__instance.forwardHostProp(t, e)
                            : ((this.__invalidProps =
                                this.__invalidProps || Object.create(null)),
                              (this.__invalidProps[Object(Q.g)(t)] = !0)));
                      },
                    });
                  }
                  if (this.__instance) {
                    this.__syncHostProperties();
                    var o = this.__instance.children;
                    if (o && o.length)
                      if (this.previousSibling !== o[o.length - 1])
                        for (var i, a = 0; a < o.length && (i = o[a]); a++)
                          e.insertBefore(i, this);
                  } else
                    (this.__instance = new this.__ctor()),
                      e.insertBefore(this.__instance.root, this);
                }
                return !0;
              },
            },
            {
              key: "__syncHostProperties",
              value: function () {
                var t = this.__invalidProps;
                if (t) {
                  for (var e in t)
                    this.__instance._setPendingProperty(e, this.__dataHost[e]);
                  (this.__invalidProps = null),
                    this.__instance._flushProperties();
                }
              },
            },
            {
              key: "__teardownInstance",
              value: function () {
                if (this.__instance) {
                  var t = this.__instance.children;
                  if (t && t.length) {
                    var e = t[0].parentNode;
                    if (e)
                      for (var n, r = 0; r < t.length && (n = t[r]); r++)
                        e.removeChild(n);
                  }
                  (this.__instance = null), (this.__invalidProps = null);
                }
              },
            },
            {
              key: "_showHideChildren",
              value: function () {
                var t = this.__hideTemplateChildren__ || !this.if;
                this.__instance && this.__instance._showHideChildren(t);
              },
            },
          ]),
          n
        );
      })();
      customElements.define(vt.is, vt);
      var mt = n(102),
        bt = n(74);
      function gt(t) {
        return (gt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Ot(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Pt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function wt(t, e, n) {
        return e && Pt(t.prototype, e), n && Pt(t, n), t;
      }
      function St(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && kt(t, e);
      }
      function kt(t, e) {
        return (kt =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function Ct(t) {
        return function () {
          var e,
            n = Et(t);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
          ) {
            var r = Et(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === gt(e) || "function" == typeof e)) return e;
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(this, e);
        };
      }
      function Et(t) {
        return (Et = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var Tt = Object(i.a)(function (t) {
          var e = Object(bt.a)(t);
          return (function (t) {
            St(r, e);
            var n = Ct(r);
            function r() {
              var t;
              return (
                Ot(this, r),
                ((t = n.call(this)).__lastItems = null),
                (t.__lastMulti = null),
                (t.__selectedMap = null),
                t
              );
            }
            return (
              wt(r, null, [
                {
                  key: "properties",
                  get: function () {
                    return {
                      items: { type: Array },
                      multi: { type: Boolean, value: !1 },
                      selected: { type: Object, notify: !0 },
                      selectedItem: { type: Object, notify: !0 },
                      toggle: { type: Boolean, value: !1 },
                    };
                  },
                },
                {
                  key: "observers",
                  get: function () {
                    return ["__updateSelection(multi, items.*)"];
                  },
                },
              ]),
              wt(r, [
                {
                  key: "__updateSelection",
                  value: function (t, e) {
                    var n = e.path;
                    if ("items" == n) {
                      var r = e.base || [],
                        o = this.__lastItems;
                      if (
                        (t !== this.__lastMulti && this.clearSelection(), o)
                      ) {
                        var i = Object(mt.a)(r, o);
                        this.__applySplices(i);
                      }
                      (this.__lastItems = r), (this.__lastMulti = t);
                    } else if ("items.splices" == e.path)
                      this.__applySplices(e.value.indexSplices);
                    else {
                      var a = n.slice("items.".length),
                        s = parseInt(a, 10);
                      a.indexOf(".") < 0 &&
                        a == s &&
                        this.__deselectChangedIdx(s);
                    }
                  },
                },
                {
                  key: "__applySplices",
                  value: function (t) {
                    for (
                      var e = this,
                        n = this.__selectedMap,
                        r = function (r) {
                          var o = t[r];
                          n.forEach(function (t, e) {
                            t < o.index ||
                              (t >= o.index + o.removed.length
                                ? n.set(e, t + o.addedCount - o.removed.length)
                                : n.set(e, -1));
                          });
                          for (var i = 0; i < o.addedCount; i++) {
                            var a = o.index + i;
                            n.has(e.items[a]) && n.set(e.items[a], a);
                          }
                        },
                        o = 0;
                      o < t.length;
                      o++
                    )
                      r(o);
                    this.__updateLinks();
                    var i = 0;
                    n.forEach(function (t, r) {
                      t < 0
                        ? (e.multi
                            ? e.splice("selected", i, 1)
                            : (e.selected = e.selectedItem = null),
                          n.delete(r))
                        : i++;
                    });
                  },
                },
                {
                  key: "__updateLinks",
                  value: function () {
                    var t = this;
                    if (((this.__dataLinkedPaths = {}), this.multi)) {
                      var e = 0;
                      this.__selectedMap.forEach(function (n) {
                        n >= 0 && t.linkPaths("items." + n, "selected." + e++);
                      });
                    } else
                      this.__selectedMap.forEach(function (e) {
                        t.linkPaths("selected", "items." + e),
                          t.linkPaths("selectedItem", "items." + e);
                      });
                  },
                },
                {
                  key: "clearSelection",
                  value: function () {
                    (this.__dataLinkedPaths = {}),
                      (this.__selectedMap = new Map()),
                      (this.selected = this.multi ? [] : null),
                      (this.selectedItem = null);
                  },
                },
                {
                  key: "isSelected",
                  value: function (t) {
                    return this.__selectedMap.has(t);
                  },
                },
                {
                  key: "isIndexSelected",
                  value: function (t) {
                    return this.isSelected(this.items[t]);
                  },
                },
                {
                  key: "__deselectChangedIdx",
                  value: function (t) {
                    var e = this,
                      n = this.__selectedIndexForItemIndex(t);
                    if (n >= 0) {
                      var r = 0;
                      this.__selectedMap.forEach(function (t, o) {
                        n == r++ && e.deselect(o);
                      });
                    }
                  },
                },
                {
                  key: "__selectedIndexForItemIndex",
                  value: function (t) {
                    var e = this.__dataLinkedPaths["items." + t];
                    if (e) return parseInt(e.slice("selected.".length), 10);
                  },
                },
                {
                  key: "deselect",
                  value: function (t) {
                    var e,
                      n = this.__selectedMap.get(t);
                    n >= 0 &&
                      (this.__selectedMap.delete(t),
                      this.multi && (e = this.__selectedIndexForItemIndex(n)),
                      this.__updateLinks(),
                      this.multi
                        ? this.splice("selected", e, 1)
                        : (this.selected = this.selectedItem = null));
                  },
                },
                {
                  key: "deselectIndex",
                  value: function (t) {
                    this.deselect(this.items[t]);
                  },
                },
                {
                  key: "select",
                  value: function (t) {
                    this.selectIndex(this.items.indexOf(t));
                  },
                },
                {
                  key: "selectIndex",
                  value: function (t) {
                    var e = this.items[t];
                    this.isSelected(e)
                      ? this.toggle && this.deselectIndex(t)
                      : (this.multi || this.__selectedMap.clear(),
                        this.__selectedMap.set(e, t),
                        this.__updateLinks(),
                        this.multi
                          ? this.push("selected", e)
                          : (this.selected = this.selectedItem = e));
                  },
                },
              ]),
              r
            );
          })();
        })(W.a),
        jt = (function (t) {
          St(n, Tt);
          var e = Ct(n);
          function n() {
            return Ot(this, n), e.apply(this, arguments);
          }
          return (
            wt(n, null, [
              {
                key: "is",
                get: function () {
                  return "array-selector";
                },
              },
            ]),
            n
          );
        })();
      customElements.define(jt.is, jt);
      n(128);
      y._mutablePropertyChange;
      Boolean, n(7);
      n.d(e, "a", function () {
        return Rt;
      });
      var Rt = Object(r.a)(HTMLElement).prototype;
    },
    ,
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      n(10);
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var o = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.value = e.toString());
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: "toString",
              value: function () {
                return this.value;
              },
            },
          ]) && r(e.prototype, n),
          o && r(e, o),
          t
        );
      })();
      function i(t) {
        if (t instanceof o) return t.value;
        throw new Error(
          "non-literal value passed to Polymer's htmlLiteral function: ".concat(
            t
          )
        );
      }
      var a = function (t) {
        for (
          var e = document.createElement("template"),
            n = arguments.length,
            r = new Array(n > 1 ? n - 1 : 0),
            a = 1;
          a < n;
          a++
        )
          r[a - 1] = arguments[a];
        return (
          (e.innerHTML = r.reduce(function (e, n, r) {
            return (
              e +
              (function (t) {
                if (t instanceof HTMLTemplateElement) return t.innerHTML;
                if (t instanceof o) return i(t);
                throw new Error(
                  "non-template value passed to Polymer's html function: ".concat(
                    t
                  )
                );
              })(n) +
              t[r + 1]
            );
          }, t[0])),
          e
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(60),
        o =
          (n(10),
          function t(e) {
            var n;
            return (
              (n = "function" == typeof e ? e : t.Class(e)),
              customElements.define(n.is, n),
              n
            );
          });
      o.Class = r.a;
    },
    function (t, e, n) {
      "use strict";
      n(10), n(24);
      var r = n(102),
        o = n(32);
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function a(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
      }
      function s(t) {
        return "slot" === t.localName;
      }
      var u = (function () {
        function t(e, n) {
          var r = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this._shadyChildrenObserver = null),
            (this._nativeChildrenObserver = null),
            (this._connected = !1),
            (this._target = e),
            (this.callback = n),
            (this._effectiveNodes = []),
            (this._observer = null),
            (this._scheduled = !1),
            (this._boundSchedule = function () {
              r._schedule();
            }),
            this.connect(),
            this._schedule();
        }
        return (
          a(t, null, [
            {
              key: "getFlattenedNodes",
              value: function (t) {
                return s(t)
                  ? (t = t).assignedNodes({ flatten: !0 })
                  : Array.from(t.childNodes)
                      .map(function (t) {
                        return s(t)
                          ? (t = t).assignedNodes({ flatten: !0 })
                          : [t];
                      })
                      .reduce(function (t, e) {
                        return t.concat(e);
                      }, []);
              },
            },
          ]),
          a(t, [
            {
              key: "connect",
              value: function () {
                var t = this;
                s(this._target)
                  ? this._listenSlots([this._target])
                  : this._target.children &&
                    (this._listenSlots(this._target.children),
                    window.ShadyDOM
                      ? (this._shadyChildrenObserver = ShadyDOM.observeChildren(
                          this._target,
                          function (e) {
                            t._processMutations(e);
                          }
                        ))
                      : ((this._nativeChildrenObserver = new MutationObserver(
                          function (e) {
                            t._processMutations(e);
                          }
                        )),
                        this._nativeChildrenObserver.observe(this._target, {
                          childList: !0,
                        }))),
                  (this._connected = !0);
              },
            },
            {
              key: "disconnect",
              value: function () {
                s(this._target)
                  ? this._unlistenSlots([this._target])
                  : this._target.children &&
                    (this._unlistenSlots(this._target.children),
                    window.ShadyDOM && this._shadyChildrenObserver
                      ? (ShadyDOM.unobserveChildren(
                          this._shadyChildrenObserver
                        ),
                        (this._shadyChildrenObserver = null))
                      : this._nativeChildrenObserver &&
                        (this._nativeChildrenObserver.disconnect(),
                        (this._nativeChildrenObserver = null))),
                  (this._connected = !1);
              },
            },
            {
              key: "_schedule",
              value: function () {
                var t = this;
                this._scheduled ||
                  ((this._scheduled = !0),
                  o.a.run(function () {
                    return t.flush();
                  }));
              },
            },
            {
              key: "_processMutations",
              value: function (t) {
                this._processSlotMutations(t), this.flush();
              },
            },
            {
              key: "_processSlotMutations",
              value: function (t) {
                if (t)
                  for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    n.addedNodes && this._listenSlots(n.addedNodes),
                      n.removedNodes && this._unlistenSlots(n.removedNodes);
                  }
              },
            },
            {
              key: "flush",
              value: function () {
                if (!this._connected) return !1;
                window.ShadyDOM && ShadyDOM.flush(),
                  this._nativeChildrenObserver
                    ? this._processSlotMutations(
                        this._nativeChildrenObserver.takeRecords()
                      )
                    : this._shadyChildrenObserver &&
                      this._processSlotMutations(
                        this._shadyChildrenObserver.takeRecords()
                      ),
                  (this._scheduled = !1);
                for (
                  var t,
                    e = {
                      target: this._target,
                      addedNodes: [],
                      removedNodes: [],
                    },
                    n = this.constructor.getFlattenedNodes(this._target),
                    o = Object(r.a)(n, this._effectiveNodes),
                    i = 0;
                  i < o.length && (t = o[i]);
                  i++
                )
                  for (
                    var a, s = 0;
                    s < t.removed.length && (a = t.removed[s]);
                    s++
                  )
                    e.removedNodes.push(a);
                for (var u, c = 0; c < o.length && (u = o[c]); c++)
                  for (var l = u.index; l < u.index + u.addedCount; l++)
                    e.addedNodes.push(n[l]);
                this._effectiveNodes = n;
                var f = !1;
                return (
                  (e.addedNodes.length || e.removedNodes.length) &&
                    ((f = !0), this.callback.call(this._target, e)),
                  f
                );
              },
            },
            {
              key: "_listenSlots",
              value: function (t) {
                for (var e = 0; e < t.length; e++) {
                  var n = t[e];
                  s(n) && n.addEventListener("slotchange", this._boundSchedule);
                }
              },
            },
            {
              key: "_unlistenSlots",
              value: function (t) {
                for (var e = 0; e < t.length; e++) {
                  var n = t[e];
                  s(n) &&
                    n.removeEventListener("slotchange", this._boundSchedule);
                }
              },
            },
          ]),
          t
        );
      })();
      n(45), n(36);
      function c(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function f(t, e, n) {
        return e && l(t.prototype, e), n && l(t, n), t;
      }
      n.d(e, "b", function () {
        return d;
      }),
        n.d(e, "a", function () {
          return v;
        });
      var h = Element.prototype,
        p =
          h.matches ||
          h.matchesSelector ||
          h.mozMatchesSelector ||
          h.msMatchesSelector ||
          h.oMatchesSelector ||
          h.webkitMatchesSelector,
        d = function (t, e) {
          return p.call(t, e);
        },
        y = (function () {
          function t(e) {
            c(this, t), (this.node = e);
          }
          return (
            f(t, [
              {
                key: "observeNodes",
                value: function (t) {
                  return new u(this.node, t);
                },
              },
              {
                key: "unobserveNodes",
                value: function (t) {
                  t.disconnect();
                },
              },
              { key: "notifyObserver", value: function () {} },
              {
                key: "deepContains",
                value: function (t) {
                  if (this.node.contains(t)) return !0;
                  for (
                    var e = t, n = t.ownerDocument;
                    e && e !== n && e !== this.node;

                  )
                    e = e.parentNode || e.host;
                  return e === this.node;
                },
              },
              {
                key: "getOwnerRoot",
                value: function () {
                  return this.node.getRootNode();
                },
              },
              {
                key: "getDistributedNodes",
                value: function () {
                  return "slot" === this.node.localName
                    ? this.node.assignedNodes({ flatten: !0 })
                    : [];
                },
              },
              {
                key: "getDestinationInsertionPoints",
                value: function () {
                  for (var t = [], e = this.node.assignedSlot; e; )
                    t.push(e), (e = e.assignedSlot);
                  return t;
                },
              },
              {
                key: "importNode",
                value: function (t, e) {
                  return (this.node instanceof Document
                    ? this.node
                    : this.node.ownerDocument
                  ).importNode(t, e);
                },
              },
              {
                key: "getEffectiveChildNodes",
                value: function () {
                  return u.getFlattenedNodes(this.node);
                },
              },
              {
                key: "queryDistributedElements",
                value: function (t) {
                  for (
                    var e,
                      n = this.getEffectiveChildNodes(),
                      r = [],
                      o = 0,
                      i = n.length;
                    o < i && (e = n[o]);
                    o++
                  )
                    e.nodeType === Node.ELEMENT_NODE && d(e, t) && r.push(e);
                  return r;
                },
              },
              {
                key: "activeElement",
                get: function () {
                  var t = this.node;
                  return void 0 !== t._activeElement
                    ? t._activeElement
                    : t.activeElement;
                },
              },
            ]),
            t
          );
        })();
      var _ = (function () {
        function t(e) {
          c(this, t), (this.event = e);
        }
        return (
          f(t, [
            {
              key: "rootTarget",
              get: function () {
                return this.event.composedPath()[0];
              },
            },
            {
              key: "localTarget",
              get: function () {
                return this.event.target;
              },
            },
            {
              key: "path",
              get: function () {
                return this.event.composedPath();
              },
            },
          ]),
          t
        );
      })();
      y.prototype.cloneNode,
        y.prototype.appendChild,
        y.prototype.insertBefore,
        y.prototype.removeChild,
        y.prototype.replaceChild,
        y.prototype.setAttribute,
        y.prototype.removeAttribute,
        y.prototype.querySelector,
        y.prototype.querySelectorAll,
        y.prototype.parentNode,
        y.prototype.firstChild,
        y.prototype.lastChild,
        y.prototype.nextSibling,
        y.prototype.previousSibling,
        y.prototype.firstElementChild,
        y.prototype.lastElementChild,
        y.prototype.nextElementSibling,
        y.prototype.previousElementSibling,
        y.prototype.childNodes,
        y.prototype.children,
        y.prototype.classList,
        y.prototype.textContent,
        y.prototype.innerHTML,
        (function (t, e) {
          for (
            var n = function (n) {
                var r = e[n];
                t[r] = function () {
                  return this.node[r].apply(this.node, arguments);
                };
              },
              r = 0;
            r < e.length;
            r++
          )
            n(r);
        })(y.prototype, [
          "cloneNode",
          "appendChild",
          "insertBefore",
          "removeChild",
          "replaceChild",
          "setAttribute",
          "removeAttribute",
          "querySelector",
          "querySelectorAll",
        ]),
        (function (t, e) {
          for (
            var n = function (n) {
                var r = e[n];
                Object.defineProperty(t, r, {
                  get: function () {
                    return this.node[r];
                  },
                  configurable: !0,
                });
              },
              r = 0;
            r < e.length;
            r++
          )
            n(r);
        })(y.prototype, [
          "parentNode",
          "firstChild",
          "lastChild",
          "nextSibling",
          "previousSibling",
          "firstElementChild",
          "lastElementChild",
          "nextElementSibling",
          "previousElementSibling",
          "childNodes",
          "children",
          "classList",
        ]),
        (function (t, e) {
          for (
            var n = function (n) {
                var r = e[n];
                Object.defineProperty(t, r, {
                  get: function () {
                    return this.node[r];
                  },
                  set: function (t) {
                    this.node[r] = t;
                  },
                  configurable: !0,
                });
              },
              r = 0;
            r < e.length;
            r++
          )
            n(r);
        })(y.prototype, ["textContent", "innerHTML"]);
      var v = function (t) {
        var e;
        (t = t || document).__domApi ||
          ((e = t instanceof Event ? new _(t) : new y(t)), (t.__domApi = e));
        return t.__domApi;
      };
    },
    function (t, e, n) {
      "use strict";
      window.JSCompiler_renameProperty = function (t, e) {
        return t;
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      n(10);
      var r = 0;
      function o() {}
      o.prototype.__mixinApplications, o.prototype.__mixinSet;
      var i = function (t) {
        var e = t.__mixinApplications;
        e || ((e = new WeakMap()), (t.__mixinApplications = e));
        var n = r++;
        function o(r) {
          var o = r.__mixinSet;
          if (o && o[n]) return r;
          var i = e,
            a = i.get(r);
          a || ((a = t(r)), i.set(r, a));
          var s = Object.create(a.__mixinSet || o || null);
          return (s[n] = !0), (a.__mixinSet = s), a;
        }
        return o;
      };
    },
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n.d(e, "f", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "d", function () {
          return a;
        }),
        n.d(e, "b", function () {
          return s;
        }),
        n.d(e, "e", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return c;
        });
      n(10);
      var r = n(44),
        o = !window.ShadyDOM,
        i =
          (Boolean(!window.ShadyCSS || window.ShadyCSS.nativeCss),
          window.customElements.polyfillWrapFlushCallback,
          Object(r.a)(document.baseURI || window.location.href)),
        a = (window.Polymer && window.Polymer.sanitizeDOMValue) || void 0,
        s = !1,
        u = !1,
        c = !1;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return u;
      }),
        n.d(e, "a", function () {
          return c;
        });
      n(10);
      var r = 0,
        o = 0,
        i = [],
        a = 0,
        s = document.createTextNode("");
      new window.MutationObserver(function () {
        for (var t = i.length, e = 0; e < t; e++) {
          var n = i[e];
          if (n)
            try {
              n();
            } catch (r) {
              setTimeout(function () {
                throw r;
              });
            }
        }
        i.splice(0, t), (o += t);
      }).observe(s, { characterData: !0 });
      var u = {
          after: function (t) {
            return {
              run: function (e) {
                return window.setTimeout(e, t);
              },
              cancel: function (t) {
                window.clearTimeout(t);
              },
            };
          },
          run: function (t, e) {
            return window.setTimeout(t, e);
          },
          cancel: function (t) {
            window.clearTimeout(t);
          },
        },
        c = {
          run: function (t) {
            return (s.textContent = a++), i.push(t), r++;
          },
          cancel: function (t) {
            var e = t - o;
            if (e >= 0) {
              if (!i[e]) throw new Error("invalid async handle: " + t);
              i[e] = null;
            }
          },
        };
    },
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      n(10), n(19), n(32);
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var o = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this._asyncModule = null),
            (this._callback = null),
            (this._timer = null);
        }
        var e, n, o;
        return (
          (e = t),
          (o = [
            {
              key: "debounce",
              value: function (e, n, r) {
                return (
                  e instanceof t ? e.cancel() : (e = new t()),
                  e.setConfig(n, r),
                  e
                );
              },
            },
          ]),
          (n = [
            {
              key: "setConfig",
              value: function (t, e) {
                var n = this;
                (this._asyncModule = t),
                  (this._callback = e),
                  (this._timer = this._asyncModule.run(function () {
                    (n._timer = null), n._callback();
                  }));
              },
            },
            {
              key: "cancel",
              value: function () {
                this.isActive() &&
                  (this._asyncModule.cancel(this._timer), (this._timer = null));
              },
            },
            {
              key: "flush",
              value: function () {
                this.isActive() && (this.cancel(), this._callback());
              },
            },
            {
              key: "isActive",
              value: function () {
                return null != this._timer;
              },
            },
          ]) && r(e.prototype, n),
          o && r(e, o),
          t
        );
      })();
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(74),
        o = (n(7), Object(r.a)(HTMLElement));
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return s;
      }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "a", function () {
          return c;
        });
      n(10);
      var r,
        o,
        i = /(url\()([^)]*)(\))/g,
        a = /(^\/)|(^#)|(^[\w-\d]*:)/;
      function s(t, e) {
        if (t && a.test(t)) return t;
        if (void 0 === r) {
          r = !1;
          try {
            var n = new URL("b", "http://a");
            (n.pathname = "c%20d"), (r = "http://a/c%20d" === n.href);
          } catch (i) {}
        }
        return (
          e || (e = document.baseURI || window.location.href),
          r
            ? new URL(t, e).href
            : (o ||
                (((o = document.implementation.createHTMLDocument(
                  "temp"
                )).base = o.createElement("base")),
                o.head.appendChild(o.base),
                (o.anchor = o.createElement("a")),
                o.body.appendChild(o.anchor)),
              (o.base.href = e),
              (o.anchor.href = t),
              o.anchor.href || t)
        );
      }
      function u(t, e) {
        return t.replace(i, function (t, n, r, o) {
          return n + "'" + s(r.replace(/["']/g, ""), e) + "'" + o;
        });
      }
      function c(t) {
        return t.substring(0, t.lastIndexOf("/") + 1);
      }
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return a;
        });
      n(10), n(36);
      var r = [],
        o = function (t) {
          r.push(t);
        };
      function i() {
        for (var t = Boolean(r.length); r.length; )
          try {
            r.shift().flush();
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        return t;
      }
      var a = function () {
        var t, e;
        do {
          (t = window.ShadyDOM && ShadyDOM.flush()),
            window.ShadyCSS &&
              window.ShadyCSS.ScopingShim &&
              window.ShadyCSS.ScopingShim.flush(),
            (e = i());
        } while (t || e);
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n.d(e, "d", function () {
        return r;
      }),
        n.d(e, "g", function () {
          return o;
        }),
        n.d(e, "b", function () {
          return i;
        }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "i", function () {
          return s;
        }),
        n.d(e, "e", function () {
          return u;
        }),
        n.d(e, "f", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return f;
        }),
        n.d(e, "h", function () {
          return h;
        });
      n(10);
      function r(t) {
        return t.indexOf(".") >= 0;
      }
      function o(t) {
        var e = t.indexOf(".");
        return -1 === e ? t : t.slice(0, e);
      }
      function i(t, e) {
        return 0 === t.indexOf(e + ".");
      }
      function a(t, e) {
        return 0 === e.indexOf(t + ".");
      }
      function s(t, e, n) {
        return e + n.slice(t.length);
      }
      function u(t, e) {
        return t === e || i(t, e) || a(t, e);
      }
      function c(t) {
        if (Array.isArray(t)) {
          for (var e = [], n = 0; n < t.length; n++)
            for (var r = t[n].toString().split("."), o = 0; o < r.length; o++)
              e.push(r[o]);
          return e.join(".");
        }
        return t;
      }
      function l(t) {
        return Array.isArray(t) ? c(t).split(".") : t.toString().split(".");
      }
      function f(t, e, n) {
        for (var r = t, o = l(e), i = 0; i < o.length; i++) {
          if (!r) return;
          r = r[o[i]];
        }
        return n && (n.path = o.join(".")), r;
      }
      function h(t, e, n) {
        var r = t,
          o = l(e),
          i = o[o.length - 1];
        if (o.length > 1) {
          for (var a = 0; a < o.length - 1; a++) {
            if (!(r = r[o[a]])) return;
          }
          r[i] = n;
        } else r[e] = n;
        return o.join(".");
      }
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "a", function () {
          return s;
        });
      n(10);
      var r = {},
        o = /-[a-z]/g,
        i = /([A-Z])/g;
      function a(t) {
        return (
          r[t] ||
          (r[t] =
            t.indexOf("-") < 0
              ? t
              : t.replace(o, function (t) {
                  return t[1].toUpperCase();
                }))
        );
      }
      function s(t) {
        return r[t] || (r[t] = t.replace(i, "-$1").toLowerCase());
      }
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return I;
      }),
        n.d(e, "d", function () {
          return D;
        }),
        n.d(e, "e", function () {
          return L;
        }),
        n.d(e, "c", function () {
          return V;
        }),
        n.d(e, "a", function () {
          return U;
        });
      n(10);
      var r = n(32),
        o = n(36),
        i = n(24),
        a = "string" == typeof document.head.style.touchAction,
        s = "__polymerGestures",
        u = "__polymerGesturesHandled",
        c = "__polymerGesturesTouchAction",
        l = 25,
        f = 5,
        h = 2500,
        p = ["mousedown", "mousemove", "mouseup", "click"],
        d = [0, 1, 4, 2],
        y = (function () {
          try {
            return 1 === new MouseEvent("test", { buttons: 1 }).buttons;
          } catch (t) {
            return !1;
          }
        })();
      function _(t) {
        return p.indexOf(t) > -1;
      }
      var v = !1;
      function m(t) {
        if (!_(t) && "touchend" !== t)
          return a && v && i.b ? { passive: !0 } : void 0;
      }
      !(function () {
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function () {
              v = !0;
            },
          });
          window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t);
        } catch (e) {}
      })();
      var b = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),
        g = [],
        O = {
          button: !0,
          input: !0,
          keygen: !0,
          meter: !0,
          output: !0,
          textarea: !0,
          progress: !0,
          select: !0,
        },
        P = {
          button: !0,
          command: !0,
          fieldset: !0,
          input: !0,
          keygen: !0,
          optgroup: !0,
          option: !0,
          select: !0,
          textarea: !0,
        };
      function w(t) {
        var e = Array.prototype.slice.call(t.labels || []);
        if (!e.length) {
          e = [];
          var n = t.getRootNode();
          if (t.id)
            for (
              var r = n.querySelectorAll("label[for = ".concat(t.id, "]")),
                o = 0;
              o < r.length;
              o++
            )
              e.push(r[o]);
        }
        return e;
      }
      var S = function (t) {
        var e,
          n = t.sourceCapabilities;
        if (
          (!n || n.firesTouchEvents) &&
          ((t[u] = { skip: !0 }), "click" === t.type)
        ) {
          var r = !1,
            o = t.composedPath && t.composedPath();
          if (o)
            for (var i = 0; i < o.length; i++) {
              if (o[i].nodeType === Node.ELEMENT_NODE)
                if ("label" === o[i].localName) g.push(o[i]);
                else if (((e = o[i]), O[e.localName]))
                  for (var a = w(o[i]), s = 0; s < a.length; s++)
                    r = r || g.indexOf(a[s]) > -1;
              if (o[i] === E.mouse.target) return;
            }
          if (r) return;
          t.preventDefault(), t.stopPropagation();
        }
      };
      function k(t) {
        for (var e, n = b ? ["click"] : p, r = 0; r < n.length; r++)
          (e = n[r]),
            t
              ? ((g.length = 0), document.addEventListener(e, S, !0))
              : document.removeEventListener(e, S, !0);
      }
      function C(t) {
        var e = t.type;
        if (!_(e)) return !1;
        if ("mousemove" === e) {
          var n = void 0 === t.buttons ? 1 : t.buttons;
          return (
            t instanceof window.MouseEvent && !y && (n = d[t.which] || 0),
            Boolean(1 & n)
          );
        }
        return 0 === (void 0 === t.button ? 0 : t.button);
      }
      var E = {
        mouse: { target: null, mouseIgnoreJob: null },
        touch: { x: 0, y: 0, id: -1, scrollDecided: !1 },
      };
      function T(t, e, n) {
        (t.movefn = e),
          (t.upfn = n),
          document.addEventListener("mousemove", e),
          document.addEventListener("mouseup", n);
      }
      function j(t) {
        document.removeEventListener("mousemove", t.movefn),
          document.removeEventListener("mouseup", t.upfn),
          (t.movefn = null),
          (t.upfn = null);
      }
      document.addEventListener(
        "touchend",
        function (t) {
          E.mouse.mouseIgnoreJob || k(!0),
            (E.mouse.target = t.composedPath()[0]),
            (E.mouse.mouseIgnoreJob = o.a.debounce(
              E.mouse.mouseIgnoreJob,
              r.b.after(h),
              function () {
                k(), (E.mouse.target = null), (E.mouse.mouseIgnoreJob = null);
              }
            ));
        },
        !!v && { passive: !0 }
      );
      var R = {},
        x = [];
      function A(t) {
        if (t.composedPath) {
          var e = t.composedPath();
          return e.length > 0 ? e[0] : t.target;
        }
        return t.target;
      }
      function N(t) {
        var e,
          n = t.type,
          r = t.currentTarget[s];
        if (r) {
          var o = r[n];
          if (o) {
            if (!t[u] && ((t[u] = {}), "touch" === n.slice(0, 5))) {
              var i = (t = t).changedTouches[0];
              if (
                ("touchstart" === n &&
                  1 === t.touches.length &&
                  (E.touch.id = i.identifier),
                E.touch.id !== i.identifier)
              )
                return;
              a ||
                ("touchstart" !== n && "touchmove" !== n) ||
                (function (t) {
                  var e = t.changedTouches[0],
                    n = t.type;
                  if ("touchstart" === n)
                    (E.touch.x = e.clientX),
                      (E.touch.y = e.clientY),
                      (E.touch.scrollDecided = !1);
                  else if ("touchmove" === n) {
                    if (E.touch.scrollDecided) return;
                    E.touch.scrollDecided = !0;
                    var r = (function (t) {
                        var e = "auto",
                          n = t.composedPath && t.composedPath();
                        if (n)
                          for (var r, o = 0; o < n.length; o++)
                            if ((r = n[o])[c]) {
                              e = r[c];
                              break;
                            }
                        return e;
                      })(t),
                      o = !1,
                      i = Math.abs(E.touch.x - e.clientX),
                      a = Math.abs(E.touch.y - e.clientY);
                    t.cancelable &&
                      ("none" === r
                        ? (o = !0)
                        : "pan-x" === r
                        ? (o = a > i)
                        : "pan-y" === r && (o = i > a)),
                      o ? t.preventDefault() : H("track");
                  }
                })(t);
            }
            if (!(e = t[u]).skip) {
              for (var l, f = 0; f < x.length; f++)
                o[(l = x[f]).name] &&
                  !e[l.name] &&
                  l.flow &&
                  l.flow.start.indexOf(t.type) > -1 &&
                  l.reset &&
                  l.reset();
              for (var h, p = 0; p < x.length; p++)
                o[(h = x[p]).name] && !e[h.name] && ((e[h.name] = !0), h[n](t));
            }
          }
        }
      }
      function I(t, e, n) {
        return (
          !!R[e] &&
          ((function (t, e, n) {
            var r = R[e],
              o = r.deps,
              i = r.name,
              a = t[s];
            a || (t[s] = a = {});
            for (var u, c, l = 0; l < o.length; l++)
              (u = o[l]),
                (b && _(u) && "click" !== u) ||
                  ((c = a[u]) || (a[u] = c = { _count: 0 }),
                  0 === c._count && t.addEventListener(u, N, m(u)),
                  (c[i] = (c[i] || 0) + 1),
                  (c._count = (c._count || 0) + 1));
            t.addEventListener(e, n), r.touchAction && L(t, r.touchAction);
          })(t, e, n),
          !0)
        );
      }
      function D(t, e, n) {
        return (
          !!R[e] &&
          ((function (t, e, n) {
            var r = R[e],
              o = r.deps,
              i = r.name,
              a = t[s];
            if (a)
              for (var u, c, l = 0; l < o.length; l++)
                (u = o[l]),
                  (c = a[u]) &&
                    c[i] &&
                    ((c[i] = (c[i] || 1) - 1),
                    (c._count = (c._count || 1) - 1),
                    0 === c._count && t.removeEventListener(u, N, m(u)));
            t.removeEventListener(e, n);
          })(t, e, n),
          !0)
        );
      }
      function M(t) {
        x.push(t);
        for (var e = 0; e < t.emits.length; e++) R[t.emits[e]] = t;
      }
      function L(t, e) {
        a &&
          t instanceof HTMLElement &&
          r.a.run(function () {
            t.style.touchAction = e;
          }),
          (t[c] = e);
      }
      function F(t, e, n) {
        var r = new Event(e, { bubbles: !0, cancelable: !0, composed: !0 });
        if (((r.detail = n), t.dispatchEvent(r), r.defaultPrevented)) {
          var o = n.preventer || n.sourceEvent;
          o && o.preventDefault && o.preventDefault();
        }
      }
      function H(t) {
        var e = (function (t) {
          for (var e, n = 0; n < x.length; n++) {
            e = x[n];
            for (var r = 0; r < e.emits.length; r++)
              if (e.emits[r] === t) return e;
          }
          return null;
        })(t);
        e.info && (e.info.prevent = !0);
      }
      function z(t, e, n, r) {
        e &&
          F(e, t, {
            x: n.clientX,
            y: n.clientY,
            sourceEvent: n,
            preventer: r,
            prevent: function (t) {
              return H(t);
            },
          });
      }
      function B(t, e, n) {
        if (t.prevent) return !1;
        if (t.started) return !0;
        var r = Math.abs(t.x - e),
          o = Math.abs(t.y - n);
        return r >= f || o >= f;
      }
      function q(t, e, n) {
        if (e) {
          var r,
            o = t.moves[t.moves.length - 2],
            i = t.moves[t.moves.length - 1],
            a = i.x - t.x,
            s = i.y - t.y,
            u = 0;
          o && ((r = i.x - o.x), (u = i.y - o.y)),
            F(e, "track", {
              state: t.state,
              x: n.clientX,
              y: n.clientY,
              dx: a,
              dy: s,
              ddx: r,
              ddy: u,
              sourceEvent: n,
              hover: function () {
                return (function (t, e) {
                  for (
                    var n = document.elementFromPoint(t, e), r = n;
                    r &&
                    r.shadowRoot &&
                    !window.ShadyDOM &&
                    r !== (r = r.shadowRoot.elementFromPoint(t, e));

                  )
                    r && (n = r);
                  return n;
                })(n.clientX, n.clientY);
              },
            });
        }
      }
      function Y(t, e, n) {
        var r = Math.abs(e.clientX - t.x),
          o = Math.abs(e.clientY - t.y),
          i = A(n || e);
        !i ||
          (P[i.localName] && i.hasAttribute("disabled")) ||
          ((isNaN(r) ||
            isNaN(o) ||
            (r <= l && o <= l) ||
            (function (t) {
              if ("click" === t.type) {
                if (0 === t.detail) return !0;
                var e = A(t);
                if (!e.nodeType || e.nodeType !== Node.ELEMENT_NODE) return !0;
                var n = e.getBoundingClientRect(),
                  r = t.pageX,
                  o = t.pageY;
                return !(
                  r >= n.left &&
                  r <= n.right &&
                  o >= n.top &&
                  o <= n.bottom
                );
              }
              return !1;
            })(e)) &&
            (t.prevent ||
              F(i, "tap", {
                x: e.clientX,
                y: e.clientY,
                sourceEvent: e,
                preventer: n,
              })));
      }
      M({
        name: "downup",
        deps: ["mousedown", "touchstart", "touchend"],
        flow: {
          start: ["mousedown", "touchstart"],
          end: ["mouseup", "touchend"],
        },
        emits: ["down", "up"],
        info: { movefn: null, upfn: null },
        reset: function () {
          j(this.info);
        },
        mousedown: function (t) {
          if (C(t)) {
            var e = A(t),
              n = this;
            T(
              this.info,
              function (t) {
                C(t) || (z("up", e, t), j(n.info));
              },
              function (t) {
                C(t) && z("up", e, t), j(n.info);
              }
            ),
              z("down", e, t);
          }
        },
        touchstart: function (t) {
          z("down", A(t), t.changedTouches[0], t);
        },
        touchend: function (t) {
          z("up", A(t), t.changedTouches[0], t);
        },
      }),
        M({
          name: "track",
          touchAction: "none",
          deps: ["mousedown", "touchstart", "touchmove", "touchend"],
          flow: {
            start: ["mousedown", "touchstart"],
            end: ["mouseup", "touchend"],
          },
          emits: ["track"],
          info: {
            x: 0,
            y: 0,
            state: "start",
            started: !1,
            moves: [],
            addMove: function (t) {
              this.moves.length > 2 && this.moves.shift(), this.moves.push(t);
            },
            movefn: null,
            upfn: null,
            prevent: !1,
          },
          reset: function () {
            (this.info.state = "start"),
              (this.info.started = !1),
              (this.info.moves = []),
              (this.info.x = 0),
              (this.info.y = 0),
              (this.info.prevent = !1),
              j(this.info);
          },
          mousedown: function (t) {
            if (C(t)) {
              var e = A(t),
                n = this,
                r = function (t) {
                  var r = t.clientX,
                    o = t.clientY;
                  B(n.info, r, o) &&
                    ((n.info.state = n.info.started
                      ? "mouseup" === t.type
                        ? "end"
                        : "track"
                      : "start"),
                    "start" === n.info.state && H("tap"),
                    n.info.addMove({ x: r, y: o }),
                    C(t) || ((n.info.state = "end"), j(n.info)),
                    e && q(n.info, e, t),
                    (n.info.started = !0));
                };
              T(this.info, r, function (t) {
                n.info.started && r(t), j(n.info);
              }),
                (this.info.x = t.clientX),
                (this.info.y = t.clientY);
            }
          },
          touchstart: function (t) {
            var e = t.changedTouches[0];
            (this.info.x = e.clientX), (this.info.y = e.clientY);
          },
          touchmove: function (t) {
            var e = A(t),
              n = t.changedTouches[0],
              r = n.clientX,
              o = n.clientY;
            B(this.info, r, o) &&
              ("start" === this.info.state && H("tap"),
              this.info.addMove({ x: r, y: o }),
              q(this.info, e, n),
              (this.info.state = "track"),
              (this.info.started = !0));
          },
          touchend: function (t) {
            var e = A(t),
              n = t.changedTouches[0];
            this.info.started &&
              ((this.info.state = "end"),
              this.info.addMove({ x: n.clientX, y: n.clientY }),
              q(this.info, e, n));
          },
        }),
        M({
          name: "tap",
          deps: ["mousedown", "click", "touchstart", "touchend"],
          flow: {
            start: ["mousedown", "touchstart"],
            end: ["click", "touchend"],
          },
          emits: ["tap"],
          info: { x: NaN, y: NaN, prevent: !1 },
          reset: function () {
            (this.info.x = NaN), (this.info.y = NaN), (this.info.prevent = !1);
          },
          mousedown: function (t) {
            C(t) && ((this.info.x = t.clientX), (this.info.y = t.clientY));
          },
          click: function (t) {
            C(t) && Y(this.info, t);
          },
          touchstart: function (t) {
            var e = t.changedTouches[0];
            (this.info.x = e.clientX), (this.info.y = e.clientY);
          },
          touchend: function (t) {
            Y(this.info, t.changedTouches[0], t);
          },
        });
      var V = A,
        U = I;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return f;
      }),
        n.d(e, "a", function () {
          return p;
        });
      var r = n(123);
      function o(t) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function a(t, e, n) {
        return (a =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = c(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function s(t, e) {
        return (s =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function u(t) {
        return function () {
          var e,
            n = c(t);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
          ) {
            var r = c(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === o(e) || "function" == typeof e)) return e;
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(this, e);
        };
      }
      function c(t) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var l = {
        attached: !0,
        detached: !0,
        ready: !0,
        created: !0,
        beforeRegister: !0,
        registered: !0,
        attributeChanged: !0,
        behaviors: !0,
      };
      function f(t, e) {
        if (!t) return (e = e);
        (e = Object(r.a)(e)), Array.isArray(t) || (t = [t]);
        var n = e.prototype.behaviors;
        return (
          (e = (function t(e, n) {
            for (var r = 0; r < e.length; r++) {
              var o = e[r];
              o && (n = Array.isArray(o) ? t(o, n) : h(o, n));
            }
            return n;
          })(
            (t = (function t(e, n, r) {
              n = n || [];
              for (var o = e.length - 1; o >= 0; o--) {
                var i = e[o];
                i
                  ? Array.isArray(i)
                    ? t(i, n)
                    : n.indexOf(i) < 0 &&
                      (!r || r.indexOf(i) < 0) &&
                      n.unshift(i)
                  : console.warn(
                      "behavior is null, check for missing or 404 import"
                    );
              }
              return n;
            })(t, null, n)),
            e
          )),
          n && (t = n.concat(t)),
          (e.prototype.behaviors = t),
          e
        );
      }
      function h(t, e) {
        var n = (function (n) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && s(t, e);
          })(h, e);
          var r,
            o,
            l,
            f = u(h);
          function h() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, h),
              f.apply(this, arguments)
            );
          }
          return (
            (r = h),
            (l = [
              {
                key: "properties",
                get: function () {
                  return t.properties;
                },
              },
              {
                key: "observers",
                get: function () {
                  return t.observers;
                },
              },
            ]),
            (o = [
              {
                key: "created",
                value: function () {
                  a(c(h.prototype), "created", this).call(this),
                    t.created && t.created.call(this);
                },
              },
              {
                key: "_registered",
                value: function () {
                  a(c(h.prototype), "_registered", this).call(this),
                    t.beforeRegister &&
                      t.beforeRegister.call(Object.getPrototypeOf(this)),
                    t.registered &&
                      t.registered.call(Object.getPrototypeOf(this));
                },
              },
              {
                key: "_applyListeners",
                value: function () {
                  if (
                    (a(c(h.prototype), "_applyListeners", this).call(this),
                    t.listeners)
                  )
                    for (var e in t.listeners)
                      this._addMethodEventListenerToNode(
                        this,
                        e,
                        t.listeners[e]
                      );
                },
              },
              {
                key: "_ensureAttributes",
                value: function () {
                  if (t.hostAttributes)
                    for (var e in t.hostAttributes)
                      this._ensureAttribute(e, t.hostAttributes[e]);
                  a(c(h.prototype), "_ensureAttributes", this).call(this);
                },
              },
              {
                key: "ready",
                value: function () {
                  a(c(h.prototype), "ready", this).call(this),
                    t.ready && t.ready.call(this);
                },
              },
              {
                key: "attached",
                value: function () {
                  a(c(h.prototype), "attached", this).call(this),
                    t.attached && t.attached.call(this);
                },
              },
              {
                key: "detached",
                value: function () {
                  a(c(h.prototype), "detached", this).call(this),
                    t.detached && t.detached.call(this);
                },
              },
              {
                key: "attributeChanged",
                value: function (e, n, r) {
                  a(c(h.prototype), "attributeChanged", this).call(
                    this,
                    e,
                    n,
                    r
                  ),
                    t.attributeChanged &&
                      t.attributeChanged.call(this, e, n, r);
                },
              },
            ]) && i(r.prototype, o),
            l && i(r, l),
            h
          );
        })();
        for (var r in ((n.generatedFrom = t), t))
          if (!(r in l)) {
            var o = Object.getOwnPropertyDescriptor(t, r);
            o && Object.defineProperty(n.prototype, r, o);
          }
        return n;
      }
      var p = function (t, e) {
        t || console.warn("Polymer's Class function requires `info` argument");
        var n = t.behaviors
            ? f(t.behaviors, HTMLElement)
            : Object(r.a)(HTMLElement),
          o = h(t, e ? e(n) : n);
        return (o.is = t.is), o;
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n(10);
      var r = n(24),
        o = n(19),
        i = n(98),
        a = n(44),
        s = n(79),
        u = n(95),
        c = n(100);
      function l(t) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function f(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function h(t, e, n) {
        return (h =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = y(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function p(t, e) {
        return (p =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function d(t) {
        return function () {
          var e,
            n = y(t);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
          ) {
            var r = y(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === l(e) || "function" == typeof e)) return e;
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(this, e);
        };
      }
      function y(t) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var _ = Object(o.a)(function (t) {
        var e = Object(c.a)(t);
        function n(t) {
          var e = Object.getPrototypeOf(t);
          return e.prototype instanceof o ? e : null;
        }
        function r(t) {
          if (
            !t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties", t))
          ) {
            var e = null;
            if (t.hasOwnProperty(JSCompiler_renameProperty("properties", t))) {
              var n = t.properties;
              n &&
                (e = (function (t) {
                  var e = {};
                  for (var n in t) {
                    var r = t[n];
                    e[n] = "function" == typeof r ? { type: r } : r;
                  }
                  return e;
                })(n));
            }
            t.__ownProperties = e;
          }
          return t.__ownProperties;
        }
        var o = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && p(t, e);
          })(u, e);
          var o,
            i,
            a,
            s = d(u);
          function u() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, u),
              s.apply(this, arguments)
            );
          }
          return (
            (o = u),
            (a = [
              {
                key: "finalize",
                value: function () {
                  if (
                    !this.hasOwnProperty(
                      JSCompiler_renameProperty("__finalized", this)
                    )
                  ) {
                    var t = n(this);
                    t && t.finalize(),
                      (this.__finalized = !0),
                      this._finalizeClass();
                  }
                },
              },
              {
                key: "_finalizeClass",
                value: function () {
                  var t = r(this);
                  t && this.createProperties(t);
                },
              },
              {
                key: "typeForProperty",
                value: function (t) {
                  var e = this._properties[t];
                  return e && e.type;
                },
              },
              {
                key: "observedAttributes",
                get: function () {
                  var t = this,
                    e = this._properties;
                  return e
                    ? Object.keys(e).map(function (e) {
                        return t.attributeNameForProperty(e);
                      })
                    : [];
                },
              },
              {
                key: "_properties",
                get: function () {
                  if (
                    !this.hasOwnProperty(
                      JSCompiler_renameProperty("__properties", this)
                    )
                  ) {
                    var t = n(this);
                    this.__properties = Object.assign(
                      {},
                      t && t._properties,
                      r(this)
                    );
                  }
                  return this.__properties;
                },
              },
            ]),
            (i = [
              {
                key: "_initializeProperties",
                value: function () {
                  this.constructor.finalize(),
                    h(y(u.prototype), "_initializeProperties", this).call(this);
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  h(y(u.prototype), "connectedCallback", this) &&
                    h(y(u.prototype), "connectedCallback", this).call(this),
                    this._enableProperties();
                },
              },
              {
                key: "disconnectedCallback",
                value: function () {
                  h(y(u.prototype), "disconnectedCallback", this) &&
                    h(y(u.prototype), "disconnectedCallback", this).call(this);
                },
              },
            ]) && f(o.prototype, i),
            a && f(o, a),
            u
          );
        })();
        return o;
      });
      function v(t) {
        return (v =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function m(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function b(t, e, n) {
        return e && m(t.prototype, e), n && m(t, n), t;
      }
      function g(t, e) {
        return (g =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function O(t) {
        return function () {
          var e,
            n = w(t);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
          ) {
            var r = w(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === v(e) || "function" == typeof e)) return e;
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(this, e);
        };
      }
      function P(t, e, n) {
        return (P =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = w(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function w(t) {
        return (w = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      n.d(e, "a", function () {
        return S;
      });
      var S = Object(o.a)(function (t) {
          var e = _(Object(u.a)(t));
          return (function (t) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && g(t, e);
            })(o, e);
            var n = O(o);
            function o() {
              var t;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, o),
                (t = n.call(this))._template,
                t._importPath,
                t.rootPath,
                t.importPath,
                t.root,
                t.$,
                t
              );
            }
            return (
              b(o, null, [
                {
                  key: "_finalizeClass",
                  value: function () {
                    var t;
                    P(w(o), "_finalizeClass", this).call(this),
                      this.hasOwnProperty(
                        JSCompiler_renameProperty("is", this)
                      ) &&
                        this.is &&
                        ((t = this.prototype), k.push(t));
                    var e,
                      n =
                        ((e = this).hasOwnProperty(
                          JSCompiler_renameProperty("__ownObservers", e)
                        ) ||
                          (e.__ownObservers = e.hasOwnProperty(
                            JSCompiler_renameProperty("observers", e)
                          )
                            ? e.observers
                            : null),
                        e.__ownObservers);
                    n && this.createObservers(n, this._properties);
                    var r = this.template;
                    r &&
                      ("string" == typeof r
                        ? (console.error(
                            "template getter must return HTMLTemplateElement"
                          ),
                          (r = null))
                        : (r = r.cloneNode(!0))),
                      (this.prototype._template = r);
                  },
                },
                {
                  key: "createProperties",
                  value: function (t) {
                    for (var e in t)
                      (n = this.prototype),
                        (r = e),
                        (o = t[e]),
                        (i = t),
                        o.computed && (o.readOnly = !0),
                        o.computed &&
                          !n._hasReadOnlyEffect(r) &&
                          n._createComputedProperty(r, o.computed, i),
                        o.readOnly &&
                          !n._hasReadOnlyEffect(r) &&
                          n._createReadOnlyProperty(r, !o.computed),
                        o.reflectToAttribute &&
                          !n._hasReflectEffect(r) &&
                          n._createReflectedProperty(r),
                        o.notify &&
                          !n._hasNotifyEffect(r) &&
                          n._createNotifyingProperty(r),
                        o.observer &&
                          n._createPropertyObserver(
                            r,
                            o.observer,
                            i[o.observer]
                          ),
                        n._addPropertyToAttributeMap(r);
                    var n, r, o, i;
                  },
                },
                {
                  key: "createObservers",
                  value: function (t, e) {
                    for (var n = this.prototype, r = 0; r < t.length; r++)
                      n._createMethodObserver(t[r], e);
                  },
                },
                {
                  key: "polymerElementVersion",
                  get: function () {
                    return "3.0.5";
                  },
                },
                {
                  key: "template",
                  get: function () {
                    return (
                      this.hasOwnProperty(
                        JSCompiler_renameProperty("_template", this)
                      ) ||
                        (this._template = this.prototype.hasOwnProperty(
                          JSCompiler_renameProperty("_template", this.prototype)
                        )
                          ? this.prototype._template
                          : (function (t) {
                              var e = null;
                              if (
                                t &&
                                (!r.e || r.a) &&
                                ((e = s.a.import(t, "template")), r.e && !e)
                              )
                                throw new Error(
                                  "strictTemplatePolicy: expecting dom-module or null template for ".concat(
                                    t
                                  )
                                );
                              return e;
                            })(this.is) ||
                            Object.getPrototypeOf(this.prototype).constructor
                              .template),
                      this._template
                    );
                  },
                  set: function (t) {
                    this._template = t;
                  },
                },
                {
                  key: "importPath",
                  get: function () {
                    if (
                      !this.hasOwnProperty(
                        JSCompiler_renameProperty("_importPath", this)
                      )
                    ) {
                      var t = this.importMeta;
                      if (t) this._importPath = Object(a.a)(t.url);
                      else {
                        var e = s.a.import(this.is);
                        this._importPath =
                          (e && e.assetpath) ||
                          Object.getPrototypeOf(this.prototype).constructor
                            .importPath;
                      }
                    }
                    return this._importPath;
                  },
                },
              ]),
              b(
                o,
                [
                  {
                    key: "_initializeProperties",
                    value: function () {
                      0,
                        this.constructor.finalize(),
                        this.constructor._finalizeTemplate(this.localName),
                        P(w(o.prototype), "_initializeProperties", this).call(
                          this
                        ),
                        (this.rootPath = r.c),
                        (this.importPath = this.constructor.importPath);
                      var t = (function (t) {
                        if (
                          !t.hasOwnProperty(
                            JSCompiler_renameProperty("__propertyDefaults", t)
                          )
                        ) {
                          t.__propertyDefaults = null;
                          var e = t._properties;
                          for (var n in e) {
                            var r = e[n];
                            "value" in r &&
                              ((t.__propertyDefaults =
                                t.__propertyDefaults || {}),
                              (t.__propertyDefaults[n] = r));
                          }
                        }
                        return t.__propertyDefaults;
                      })(this.constructor);
                      if (t)
                        for (var e in t) {
                          var n = t[e];
                          if (!this.hasOwnProperty(e)) {
                            var i =
                              "function" == typeof n.value
                                ? n.value.call(this)
                                : n.value;
                            this._hasAccessor(e)
                              ? this._setPendingProperty(e, i, !0)
                              : (this[e] = i);
                          }
                        }
                    },
                  },
                  {
                    key: "connectedCallback",
                    value: function () {
                      window.ShadyCSS &&
                        this._template &&
                        window.ShadyCSS.styleElement(this),
                        P(w(o.prototype), "connectedCallback", this).call(this);
                    },
                  },
                  {
                    key: "ready",
                    value: function () {
                      this._template &&
                        ((this.root = this._stampTemplate(this._template)),
                        (this.$ = this.root.$)),
                        P(w(o.prototype), "ready", this).call(this);
                    },
                  },
                  {
                    key: "_readyClients",
                    value: function () {
                      this._template &&
                        (this.root = this._attachDom(this.root)),
                        P(w(o.prototype), "_readyClients", this).call(this);
                    },
                  },
                  {
                    key: "_attachDom",
                    value: function (t) {
                      if (this.attachShadow)
                        return t
                          ? (this.shadowRoot ||
                              this.attachShadow({ mode: "open" }),
                            this.shadowRoot.appendChild(t),
                            this.shadowRoot)
                          : null;
                      throw new Error(
                        "ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`."
                      );
                    },
                  },
                  {
                    key: "updateStyles",
                    value: function (t) {
                      window.ShadyCSS && window.ShadyCSS.styleSubtree(this, t);
                    },
                  },
                  {
                    key: "resolveUrl",
                    value: function (t, e) {
                      return (
                        !e &&
                          this.importPath &&
                          (e = Object(a.c)(this.importPath)),
                        Object(a.c)(t, e)
                      );
                    },
                  },
                ],
                [
                  {
                    key: "_processStyleText",
                    value: function (t, e) {
                      return Object(a.b)(t, e);
                    },
                  },
                  {
                    key: "_finalizeTemplate",
                    value: function (t) {
                      var e = this.prototype._template;
                      if (e && !e.__polymerFinalized) {
                        e.__polymerFinalized = !0;
                        var n = this.importPath;
                        !(function (t, e, n, r) {
                          for (
                            var o = e.content.querySelectorAll("style"),
                              a = Object(i.c)(e),
                              s = Object(i.b)(n),
                              u = e.content.firstElementChild,
                              c = 0;
                            c < s.length;
                            c++
                          ) {
                            var l = s[c];
                            (l.textContent = t._processStyleText(
                              l.textContent,
                              r
                            )),
                              e.content.insertBefore(l, u);
                          }
                          for (var f = 0, h = 0; h < a.length; h++) {
                            var p = a[h],
                              d = o[f];
                            d !== p
                              ? ((p = p.cloneNode(!0)),
                                d.parentNode.insertBefore(p, d))
                              : f++,
                              (p.textContent = t._processStyleText(
                                p.textContent,
                                r
                              ));
                          }
                          window.ShadyCSS &&
                            window.ShadyCSS.prepareTemplate(e, n);
                        })(this, e, t, n ? Object(a.c)(n) : ""),
                          this.prototype._bindTemplate(e);
                      }
                    },
                  },
                  {
                    key: "_parseTemplateContent",
                    value: function (t, e, n) {
                      return (
                        (e.dynamicFns = e.dynamicFns || this._properties),
                        P(w(o), "_parseTemplateContent", this).call(
                          this,
                          t,
                          e,
                          n
                        )
                      );
                    },
                  },
                ]
              ),
              o
            );
          })();
        }),
        k = [];
    },
    ,
    function (t, e, n) {
      "use strict";
      n.d(e, "d", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return o;
        }),
        n.d(e, "b", function () {
          return s;
        }),
        n.d(e, "c", function () {
          return u;
        });
      var r,
        o,
        i = !(window.ShadyDOM && window.ShadyDOM.inUse);
      function a(t) {
        r =
          (!t || !t.shimcssproperties) &&
          (i ||
            Boolean(
              !navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) &&
                window.CSS &&
                CSS.supports &&
                CSS.supports("box-shadow", "0 0 0 var(--foo)")
            ));
      }
      window.ShadyCSS &&
        void 0 !== window.ShadyCSS.cssBuild &&
        (o = window.ShadyCSS.cssBuild);
      var s = Boolean(window.ShadyCSS && window.ShadyCSS.disableRuntime);
      window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss
        ? (r = window.ShadyCSS.nativeCss)
        : window.ShadyCSS
        ? (a(window.ShadyCSS), (window.ShadyCSS = void 0))
        : a(window.WebComponents && window.WebComponents.flags);
      var u = r;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "a", function () {
          return i;
        });
      var r = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
        o = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
        i = /@media\s(.*)/;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return o;
      }),
        n.d(e, "b", function () {
          return i;
        }),
        n.d(e, "a", function () {
          return a;
        });
      var r = n(77);
      function o(t, e) {
        for (var n in e)
          null === n ? t.style.removeProperty(n) : t.style.setProperty(n, e[n]);
      }
      function i(t, e) {
        var n = window.getComputedStyle(t).getPropertyValue(e);
        return n ? n.trim() : "";
      }
      function a(t) {
        var e = r.b.test(t) || r.c.test(t);
        return (r.b.lastIndex = 0), (r.c.lastIndex = 0), e;
      }
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return v;
      });
      n(10);
      var r = n(44),
        o = n(24);
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function s(t) {
        return function () {
          var e,
            n = h(t);
          if (l()) {
            var r = h(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === i(e) || "function" == typeof e)) return e;
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(this, e);
        };
      }
      function u(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (u = function (t) {
          if (
            null === t ||
            ((n = t), -1 === Function.toString.call(n).indexOf("[native code]"))
          )
            return t;
          var n;
          if ("function" != typeof t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, r);
          }
          function r() {
            return c(t, arguments, h(this).constructor);
          }
          return (
            (r.prototype = Object.create(t.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            f(r, t)
          );
        })(t);
      }
      function c(t, e, n) {
        return (c = l()
          ? Reflect.construct
          : function (t, e, n) {
              var r = [null];
              r.push.apply(r, e);
              var o = new (Function.bind.apply(t, r))();
              return n && f(o, n.prototype), o;
            }).apply(null, arguments);
      }
      function l() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function f(t, e) {
        return (f =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function h(t) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var p = {},
        d = {};
      function y(t, e) {
        p[t] = d[t.toLowerCase()] = e;
      }
      function _(t) {
        return p[t] || d[t.toLowerCase()];
      }
      var v = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && f(t, e);
        })(l, u(HTMLElement));
        var e,
          n,
          i,
          c = s(l);
        function l() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, l),
            c.apply(this, arguments)
          );
        }
        return (
          (e = l),
          (i = [
            {
              key: "import",
              value: function (t, e) {
                if (t) {
                  var n = _(t);
                  return n && e ? n.querySelector(e) : n;
                }
                return null;
              },
            },
            {
              key: "observedAttributes",
              get: function () {
                return ["id"];
              },
            },
          ]),
          (n = [
            {
              key: "attributeChangedCallback",
              value: function (t, e, n, r) {
                e !== n && this.register();
              },
            },
            {
              key: "register",
              value: function (t) {
                if ((t = t || this.id)) {
                  if (o.e && void 0 !== _(t))
                    throw (
                      (y(t, null),
                      new Error(
                        "strictTemplatePolicy: dom-module ".concat(
                          t,
                          " re-registered"
                        )
                      ))
                    );
                  (this.id = t),
                    y(t, this),
                    (e = this).querySelector("style") &&
                      console.warn(
                        "dom-module %s has style outside template",
                        e.id
                      );
                }
                var e;
              },
            },
            {
              key: "assetpath",
              get: function () {
                if (!this.__assetpath) {
                  var t =
                      window.HTMLImports && HTMLImports.importForElement
                        ? HTMLImports.importForElement(this) || document
                        : this.ownerDocument,
                    e = Object(r.c)(
                      this.getAttribute("assetpath") || "",
                      t.baseURI
                    );
                  this.__assetpath = Object(r.a)(e);
                }
                return this.__assetpath;
              },
            },
          ]) && a(e.prototype, n),
          i && a(e, i),
          l
        );
      })();
      (v.prototype.modules = p), customElements.define("dom-module", v);
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      n(10);
      var r = !1,
        o = [],
        i = [];
      function a() {
        (r = !0),
          requestAnimationFrame(function () {
            (r = !1),
              s(o),
              setTimeout(function () {
                !(function (t) {
                  for (var e = 0, n = t.length; e < n; e++) u(t.shift());
                })(i);
              });
          });
      }
      function s(t) {
        for (; t.length; ) u(t.shift());
      }
      function u(t) {
        var e = t[0],
          n = t[1],
          r = t[2];
        try {
          n.apply(e, r);
        } catch (o) {
          setTimeout(function () {
            throw o;
          });
        }
      }
      function c(t, e, n) {
        r || a(), i.push([t, e, n]);
      }
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      n(5);
      var r = n(8);
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var i = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            t[" "](e),
            (this.type = (e && e.type) || "default"),
            (this.key = e && e.key),
            e && "value" in e && (this.value = e.value);
        }
        var e, n, r;
        return (
          (e = t),
          (n = [
            {
              key: "byKey",
              value: function (t) {
                return (this.key = t), this.value;
              },
            },
            {
              key: "value",
              get: function () {
                var e = this.type,
                  n = this.key;
                if (e && n) return t.types[e] && t.types[e][n];
              },
              set: function (e) {
                var n = this.type,
                  r = this.key;
                n &&
                  r &&
                  ((n = t.types[n] = t.types[n] || {}),
                  null == e ? delete n[r] : (n[r] = e));
              },
            },
            {
              key: "list",
              get: function () {
                if (this.type) {
                  var e = t.types[this.type];
                  return e
                    ? Object.keys(e).map(function (t) {
                        return a[this.type][t];
                      }, this)
                    : [];
                }
              },
            },
          ]) && o(e.prototype, n),
          r && o(e, r),
          t
        );
      })();
      (i[" "] = function () {}), (i.types = {});
      var a = i.types;
      Object(r.a)({
        is: "iron-meta",
        properties: {
          type: { type: String, value: "default" },
          key: { type: String },
          value: { type: String, notify: !0 },
          self: { type: Boolean, observer: "_selfChanged" },
          __meta: {
            type: Boolean,
            computed: "__computeMeta(type, key, value)",
          },
        },
        hostAttributes: { hidden: !0 },
        __computeMeta: function (t, e, n) {
          var r = new i({ type: t, key: e });
          return (
            void 0 !== n && n !== r.value
              ? (r.value = n)
              : this.value !== r.value && (this.value = r.value),
            r
          );
        },
        get list() {
          return this.__meta && this.__meta.list;
        },
        _selfChanged: function (t) {
          t && (this.value = this);
        },
        byKey: function (t) {
          return new i({ type: this.type, key: t }).value;
        },
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n(10);
      var r = n(19),
        o = n(57),
        i = n(58),
        a = n(99);
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function u(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function c(t, e) {
        return (c =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function l(t) {
        return function () {
          var e,
            n = f(t);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
          ) {
            var r = f(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === s(e) || "function" == typeof e)) return e;
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(this, e);
        };
      }
      function f(t) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var h = { "dom-if": !0, "dom-repeat": !0 };
      function p(t) {
        var e = t.getAttribute("is");
        if (e && h[e]) {
          var n = t;
          for (
            n.removeAttribute("is"),
              t = n.ownerDocument.createElement(e),
              n.parentNode.replaceChild(t, n),
              t.appendChild(n);
            n.attributes.length;

          )
            t.setAttribute(n.attributes[0].name, n.attributes[0].value),
              n.removeAttribute(n.attributes[0].name);
        }
        return t;
      }
      function d(t, e) {
        var n = e.parentInfo && d(t, e.parentInfo);
        if (!n) return t;
        for (var r = n.firstChild, o = 0; r; r = r.nextSibling)
          if (e.parentIndex === o++) return r;
      }
      function y(t, e, n, r) {
        r.id && (e[r.id] = n);
      }
      function _(t, e, n) {
        if (n.events && n.events.length)
          for (var r, o = 0, i = n.events; o < i.length && (r = i[o]); o++)
            t._addMethodEventListenerToNode(e, r.name, r.value, t);
      }
      function v(t, e, n) {
        n.templateInfo && (e._templateInfo = n.templateInfo);
      }
      var m = Object(r.a)(function (t) {
          return (function (e) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && c(t, e);
            })(a, t);
            var n,
              r,
              o,
              i = l(a);
            function a() {
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, a),
                i.apply(this, arguments)
              );
            }
            return (
              (n = a),
              (o = [
                {
                  key: "_parseTemplate",
                  value: function (t, e) {
                    if (!t._templateInfo) {
                      var n = (t._templateInfo = {});
                      (n.nodeInfoList = []),
                        (n.stripWhiteSpace =
                          (e && e.stripWhiteSpace) ||
                          t.hasAttribute("strip-whitespace")),
                        this._parseTemplateContent(t, n, { parent: null });
                    }
                    return t._templateInfo;
                  },
                },
                {
                  key: "_parseTemplateContent",
                  value: function (t, e, n) {
                    return this._parseTemplateNode(t.content, e, n);
                  },
                },
                {
                  key: "_parseTemplateNode",
                  value: function (t, e, n) {
                    var r,
                      o = t;
                    return (
                      "template" != o.localName ||
                      o.hasAttribute("preserve-content")
                        ? "slot" === o.localName && (e.hasInsertionPoint = !0)
                        : (r = this._parseTemplateNestedTemplate(o, e, n) || r),
                      o.firstChild &&
                        (r = this._parseTemplateChildNodes(o, e, n) || r),
                      o.hasAttributes &&
                        o.hasAttributes() &&
                        (r = this._parseTemplateNodeAttributes(o, e, n) || r),
                      r
                    );
                  },
                },
                {
                  key: "_parseTemplateChildNodes",
                  value: function (t, e, n) {
                    if ("script" !== t.localName && "style" !== t.localName)
                      for (var r, o = t.firstChild, i = 0; o; o = r) {
                        if (
                          ("template" == o.localName && (o = p(o)),
                          (r = o.nextSibling),
                          o.nodeType === Node.TEXT_NODE)
                        ) {
                          for (var a = r; a && a.nodeType === Node.TEXT_NODE; )
                            (o.textContent += a.textContent),
                              (r = a.nextSibling),
                              t.removeChild(a),
                              (a = r);
                          if (e.stripWhiteSpace && !o.textContent.trim()) {
                            t.removeChild(o);
                            continue;
                          }
                        }
                        var s = { parentIndex: i, parentInfo: n };
                        this._parseTemplateNode(o, e, s) &&
                          (s.infoIndex = e.nodeInfoList.push(s) - 1),
                          o.parentNode && i++;
                      }
                  },
                },
                {
                  key: "_parseTemplateNestedTemplate",
                  value: function (t, e, n) {
                    var r = this._parseTemplate(t, e);
                    return (
                      (r.content = t.content.ownerDocument.createDocumentFragment()).appendChild(
                        t.content
                      ),
                      (n.templateInfo = r),
                      !0
                    );
                  },
                },
                {
                  key: "_parseTemplateNodeAttributes",
                  value: function (t, e, n) {
                    for (
                      var r,
                        o = !1,
                        i = Array.from(t.attributes),
                        a = i.length - 1;
                      (r = i[a]);
                      a--
                    )
                      o =
                        this._parseTemplateNodeAttribute(
                          t,
                          e,
                          n,
                          r.name,
                          r.value
                        ) || o;
                    return o;
                  },
                },
                {
                  key: "_parseTemplateNodeAttribute",
                  value: function (t, e, n, r, o) {
                    return "on-" === r.slice(0, 3)
                      ? (t.removeAttribute(r),
                        (n.events = n.events || []),
                        n.events.push({ name: r.slice(3), value: o }),
                        !0)
                      : "id" === r && ((n.id = o), !0);
                  },
                },
                {
                  key: "_contentForTemplate",
                  value: function (t) {
                    var e = t._templateInfo;
                    return (e && e.content) || t.content;
                  },
                },
              ]),
              (r = [
                {
                  key: "_stampTemplate",
                  value: function (t) {
                    t &&
                      !t.content &&
                      window.HTMLTemplateElement &&
                      HTMLTemplateElement.decorate &&
                      HTMLTemplateElement.decorate(t);
                    var e = this.constructor._parseTemplate(t),
                      n = e.nodeInfoList,
                      r = e.content || t.content,
                      o = document.importNode(r, !0);
                    o.__noInsertionPoint = !e.hasInsertionPoint;
                    var i = (o.nodeList = new Array(n.length));
                    o.$ = {};
                    for (var a, s = 0, u = n.length; s < u && (a = n[s]); s++) {
                      var c = (i[s] = d(o, a));
                      y(0, o.$, c, a), v(0, c, a), _(this, c, a);
                    }
                    return (o = o);
                  },
                },
                {
                  key: "_addMethodEventListenerToNode",
                  value: function (t, e, n, r) {
                    var o = (function (t, e, n) {
                      return (
                        (t = t._methodHost || t),
                        function (e) {
                          t[n]
                            ? t[n](e, e.detail)
                            : console.warn(
                                "listener method `" + n + "` not defined"
                              );
                        }
                      );
                    })((r = r || t), 0, n);
                    return this._addEventListenerToNode(t, e, o), o;
                  },
                },
                {
                  key: "_addEventListenerToNode",
                  value: function (t, e, n) {
                    t.addEventListener(e, n);
                  },
                },
                {
                  key: "_removeEventListenerFromNode",
                  value: function (t, e, n) {
                    t.removeEventListener(e, n);
                  },
                },
              ]) && u(n.prototype, r),
              o && u(n, o),
              a
            );
          })();
        }),
        b = n(24);
      function g(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function O(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function P(t, e, n) {
        return e && O(t.prototype, e), n && O(t, n), t;
      }
      function w(t, e, n) {
        return (w =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = C(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function S(t, e) {
        return (S =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function k(t) {
        return function () {
          var e,
            n = C(t);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
          ) {
            var r = C(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === E(e) || "function" == typeof e)) return e;
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(this, e);
        };
      }
      function C(t) {
        return (C = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function E(t) {
        return (E =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      n.d(e, "a", function () {
        return et;
      });
      var T = 0,
        j = {
          COMPUTE: "__computeEffects",
          REFLECT: "__reflectEffects",
          NOTIFY: "__notifyEffects",
          PROPAGATE: "__propagateEffects",
          OBSERVE: "__observeEffects",
          READ_ONLY: "__readOnly",
        },
        R = /[A-Z]/;
      function x(t, e) {
        var n = t[e];
        if (n) {
          if (!t.hasOwnProperty(e))
            for (var r in (n = t[e] = Object.create(t[e])))
              for (
                var o = n[r], i = (n[r] = Array(o.length)), a = 0;
                a < o.length;
                a++
              )
                i[a] = o[a];
        } else n = t[e] = {};
        return n;
      }
      function A(t, e, n, r, o, i) {
        if (e) {
          var a = !1,
            s = T++;
          for (var u in n) N(t, e, s, u, n, r, o, i) && (a = !0);
          return a;
        }
        return !1;
      }
      function N(t, e, n, r, i, a, s, u) {
        var c = !1,
          l = e[s ? Object(o.g)(r) : r];
        if (l)
          for (var f, h = 0, p = l.length; h < p && (f = l[h]); h++)
            (f.info && f.info.lastRun === n) ||
              (s && !I(r, f.trigger)) ||
              (f.info && (f.info.lastRun = n),
              f.fn(t, r, i, a, f.info, s, u),
              (c = !0));
        return c;
      }
      function I(t, e) {
        if (e) {
          var n = e.name;
          return (
            n == t ||
            (e.structured && Object(o.b)(n, t)) ||
            (e.wildcard && Object(o.c)(n, t))
          );
        }
        return !0;
      }
      function D(t, e, n, r, o) {
        var i = "string" == typeof o.method ? t[o.method] : o.method,
          a = o.property;
        i
          ? i.call(t, t.__data[a], r[a])
          : o.dynamicFn ||
            console.warn("observer method `" + o.method + "` not defined");
      }
      function M(t, e, n) {
        var r = Object(o.g)(e);
        return r !== e && (L(t, Object(i.a)(r) + "-changed", n[e], e), !0);
      }
      function L(t, e, n, r) {
        var o = { value: n, queueProperty: !0 };
        r && (o.path = r), t.dispatchEvent(new CustomEvent(e, { detail: o }));
      }
      function F(t, e, n, r, i, a) {
        var s = (a ? Object(o.g)(e) : e) != e ? e : null,
          u = s ? Object(o.a)(t, s) : t.__data[e];
        s && void 0 === u && (u = n[e]), L(t, i.eventName, u, s);
      }
      function H(t, e, n, r, o) {
        var i = t.__data[e];
        b.d && (i = Object(b.d)(i, o.attrName, "attribute", t)),
          t._propertyToAttribute(e, o.attrName, i);
      }
      function z(t, e, n, r, o) {
        var i = J(t, e, n, r, o),
          a = o.methodInfo;
        t.__dataHasAccessor && t.__dataHasAccessor[a]
          ? t._setPendingProperty(a, i, !0)
          : (t[a] = i);
      }
      function B(t, e, n, r, o, a, s) {
        n.bindings = n.bindings || [];
        var u = {
          kind: r,
          target: o,
          parts: a,
          literal: s,
          isCompound: 1 !== a.length,
        };
        if (
          (n.bindings.push(u),
          (function (t) {
            return (
              Boolean(t.target) &&
              "attribute" != t.kind &&
              "text" != t.kind &&
              !t.isCompound &&
              "{" === t.parts[0].mode
            );
          })(u))
        ) {
          var c = u.parts[0],
            l = c.event,
            f = c.negate;
          (u.listenerEvent = l || Object(i.a)(o) + "-changed"),
            (u.listenerNegate = f);
        }
        for (var h = e.nodeInfoList.length, p = 0; p < u.parts.length; p++) {
          var d = u.parts[p];
          (d.compoundIndex = p), q(t, e, u, d, h);
        }
      }
      function q(t, e, n, r, o) {
        if (!r.literal)
          if ("attribute" === n.kind && "-" === n.target[0])
            console.warn(
              "Cannot set attribute " +
                n.target +
                ' because "-" is not a valid attribute starting character'
            );
          else
            for (
              var i = r.dependencies,
                a = { index: o, binding: n, part: r, evaluator: t },
                s = 0;
              s < i.length;
              s++
            ) {
              var u = i[s];
              "string" == typeof u && ((u = Z(u)).wildcard = !0),
                t._addTemplatePropertyEffect(e, u.rootProperty, {
                  fn: Y,
                  info: a,
                  trigger: u,
                });
            }
      }
      function Y(t, e, n, r, i, a, s) {
        var u = s[i.index],
          c = i.binding,
          l = i.part;
        if (
          a &&
          l.source &&
          e.length > l.source.length &&
          "property" == c.kind &&
          !c.isCompound &&
          u.__isPropertyEffectsClient &&
          u.__dataHasAccessor &&
          u.__dataHasAccessor[c.target]
        ) {
          var f = n[e];
          (e = Object(o.i)(l.source, c.target, e)),
            u._setPendingPropertyOrPath(e, f, !1, !0) && t._enqueueClient(u);
        } else {
          !(function (t, e, n, r, o) {
            (o = (function (t, e, n, r) {
              if (n.isCompound) {
                var o = t.__dataCompoundStorage[n.target];
                (o[r.compoundIndex] = e), (e = o.join(""));
              }
              return (
                "attribute" !== n.kind &&
                  (("textContent" !== n.target &&
                    ("value" !== n.target ||
                      ("input" !== t.localName &&
                        "textarea" !== t.localName))) ||
                    (e = null == e ? "" : e)),
                e
              );
            })(e, o, n, r)),
              b.d && (o = Object(b.d)(o, n.target, n.kind, e));
            if ("attribute" == n.kind) t._valueToNodeAttribute(e, o, n.target);
            else {
              var i = n.target;
              e.__isPropertyEffectsClient &&
              e.__dataHasAccessor &&
              e.__dataHasAccessor[i]
                ? (e[j.READ_ONLY] && e[j.READ_ONLY][i]) ||
                  (e._setPendingProperty(i, o) && t._enqueueClient(e))
                : t._setUnmanagedPropertyToNode(e, i, o);
            }
          })(t, u, c, l, i.evaluator._evaluateBinding(t, l, e, n, r, a));
        }
      }
      function V(t, e) {
        if (e.isCompound) {
          for (
            var n = t.__dataCompoundStorage || (t.__dataCompoundStorage = {}),
              r = e.parts,
              o = new Array(r.length),
              i = 0;
            i < r.length;
            i++
          )
            o[i] = r[i].literal;
          var a = e.target;
          (n[a] = o), e.literal && "property" == e.kind && (t[a] = e.literal);
        }
      }
      function U(t, e, n) {
        if (n.listenerEvent) {
          var r = n.parts[0];
          t.addEventListener(n.listenerEvent, function (t) {
            !(function (t, e, n, r, i) {
              var a,
                s = t.detail,
                u = s && s.path;
              u
                ? ((r = Object(o.i)(n, r, u)), (a = s && s.value))
                : (a = t.currentTarget[n]),
                (a = i ? !a : a),
                (e[j.READ_ONLY] && e[j.READ_ONLY][r]) ||
                  !e._setPendingPropertyOrPath(r, a, !0, Boolean(u)) ||
                  (s && s.queueProperty) ||
                  e._invalidateProperties();
            })(t, e, n.target, r.source, r.negate);
          });
        }
      }
      function $(t, e, n, r, o, i) {
        i = e.static || (i && ("object" !== E(i) || i[e.methodName]));
        for (
          var a,
            s = {
              methodName: e.methodName,
              args: e.args,
              methodInfo: o,
              dynamicFn: i,
            },
            u = 0;
          u < e.args.length && (a = e.args[u]);
          u++
        )
          a.literal ||
            t._addPropertyEffect(a.rootProperty, n, {
              fn: r,
              info: s,
              trigger: a,
            });
        i && t._addPropertyEffect(e.methodName, n, { fn: r, info: s });
      }
      function J(t, e, n, r, o) {
        var i = t._methodHost || t,
          a = i[o.methodName];
        if (a) {
          var s = t._marshalArgs(o.args, e, n);
          return a.apply(i, s);
        }
        o.dynamicFn ||
          console.warn("method `" + o.methodName + "` not defined");
      }
      var X = [],
        G = new RegExp(
          "(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})",
          "g"
        );
      function W(t) {
        for (var e = "", n = 0; n < t.length; n++) {
          e += t[n].literal || "";
        }
        return e;
      }
      function K(t) {
        var e = t.match(/([^\s]+?)\(([\s\S]*)\)/);
        if (e) {
          var n = { methodName: e[1], static: !0, args: X };
          return e[2].trim()
            ? (function (t, e) {
                return (
                  (e.args = t.map(function (t) {
                    var n = Z(t);
                    return n.literal || (e.static = !1), n;
                  }, this)),
                  e
                );
              })(e[2].replace(/\\,/g, "&comma;").split(","), n)
            : n;
        }
        return null;
      }
      function Z(t) {
        var e = t
            .trim()
            .replace(/&comma;/g, ",")
            .replace(/\\(.)/g, "$1"),
          n = { name: e, value: "", literal: !1 },
          r = e[0];
        switch (
          ("-" === r && (r = e[1]), r >= "0" && r <= "9" && (r = "#"), r)
        ) {
          case "'":
          case '"':
            (n.value = e.slice(1, -1)), (n.literal = !0);
            break;
          case "#":
            (n.value = Number(e)), (n.literal = !0);
        }
        return (
          n.literal ||
            ((n.rootProperty = Object(o.g)(e)),
            (n.structured = Object(o.d)(e)),
            n.structured &&
              ((n.wildcard = ".*" == e.slice(-2)),
              n.wildcard && (n.name = e.slice(0, -2)))),
          n
        );
      }
      function Q(t, e, n, r) {
        var o = n + ".splices";
        t.notifyPath(o, { indexSplices: r }),
          t.notifyPath(n + ".length", e.length),
          (t.__data[o] = {
            indexSplices: null,
          });
      }
      function tt(t, e, n, r, o, i) {
        Q(t, e, n, [
          { index: r, addedCount: o, removed: i, object: e, type: "splice" },
        ]);
      }
      var et = Object(r.a)(function (t) {
          var e = m(Object(a.a)(t)),
            n = (function (t) {
              !(function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  e && S(t, e);
              })(r, e);
              var n = k(r);
              function r() {
                var t;
                return (
                  g(this, r),
                  ((t = n.call(this)).__isPropertyEffectsClient = !0),
                  (t.__dataCounter = 0),
                  t.__dataClientsReady,
                  t.__dataPendingClients,
                  t.__dataToNotify,
                  t.__dataLinkedPaths,
                  t.__dataHasPaths,
                  t.__dataCompoundStorage,
                  t.__dataHost,
                  t.__dataTemp,
                  t.__dataClientsInitialized,
                  t.__data,
                  t.__dataPending,
                  t.__dataOld,
                  t.__computeEffects,
                  t.__reflectEffects,
                  t.__notifyEffects,
                  t.__propagateEffects,
                  t.__observeEffects,
                  t.__readOnly,
                  t.__templateInfo,
                  t
                );
              }
              return (
                P(
                  r,
                  [
                    {
                      key: "_initializeProperties",
                      value: function () {
                        w(C(r.prototype), "_initializeProperties", this).call(
                          this
                        ),
                          nt.registerHost(this),
                          (this.__dataClientsReady = !1),
                          (this.__dataPendingClients = null),
                          (this.__dataToNotify = null),
                          (this.__dataLinkedPaths = null),
                          (this.__dataHasPaths = !1),
                          (this.__dataCompoundStorage =
                            this.__dataCompoundStorage || null),
                          (this.__dataHost = this.__dataHost || null),
                          (this.__dataTemp = {}),
                          (this.__dataClientsInitialized = !1);
                      },
                    },
                    {
                      key: "_initializeProtoProperties",
                      value: function (t) {
                        (this.__data = Object.create(t)),
                          (this.__dataPending = Object.create(t)),
                          (this.__dataOld = {});
                      },
                    },
                    {
                      key: "_initializeInstanceProperties",
                      value: function (t) {
                        var e = this[j.READ_ONLY];
                        for (var n in t)
                          (e && e[n]) ||
                            ((this.__dataPending = this.__dataPending || {}),
                            (this.__dataOld = this.__dataOld || {}),
                            (this.__data[n] = this.__dataPending[n] = t[n]));
                      },
                    },
                    {
                      key: "_addPropertyEffect",
                      value: function (t, e, n) {
                        this._createPropertyAccessor(t, e == j.READ_ONLY);
                        var r = x(this, e)[t];
                        r || (r = this[e][t] = []), r.push(n);
                      },
                    },
                    {
                      key: "_removePropertyEffect",
                      value: function (t, e, n) {
                        var r = x(this, e)[t],
                          o = r.indexOf(n);
                        o >= 0 && r.splice(o, 1);
                      },
                    },
                    {
                      key: "_hasPropertyEffect",
                      value: function (t, e) {
                        var n = this[e];
                        return Boolean(n && n[t]);
                      },
                    },
                    {
                      key: "_hasReadOnlyEffect",
                      value: function (t) {
                        return this._hasPropertyEffect(t, j.READ_ONLY);
                      },
                    },
                    {
                      key: "_hasNotifyEffect",
                      value: function (t) {
                        return this._hasPropertyEffect(t, j.NOTIFY);
                      },
                    },
                    {
                      key: "_hasReflectEffect",
                      value: function (t) {
                        return this._hasPropertyEffect(t, j.REFLECT);
                      },
                    },
                    {
                      key: "_hasComputedEffect",
                      value: function (t) {
                        return this._hasPropertyEffect(t, j.COMPUTE);
                      },
                    },
                    {
                      key: "_setPendingPropertyOrPath",
                      value: function (t, e, n, i) {
                        if (
                          i ||
                          Object(o.g)(Array.isArray(t) ? t[0] : t) !== t
                        ) {
                          if (!i) {
                            var a = Object(o.a)(this, t);
                            if (
                              !(t = Object(o.h)(this, t, e)) ||
                              !w(
                                C(r.prototype),
                                "_shouldPropertyChange",
                                this
                              ).call(this, t, e, a)
                            )
                              return !1;
                          }
                          if (
                            ((this.__dataHasPaths = !0),
                            this._setPendingProperty(t, e, n))
                          )
                            return (
                              (function (t, e, n) {
                                var r,
                                  i = t.__dataLinkedPaths;
                                if (i)
                                  for (var a in i) {
                                    var s = i[a];
                                    Object(o.c)(a, e)
                                      ? ((r = Object(o.i)(a, s, e)),
                                        t._setPendingPropertyOrPath(
                                          r,
                                          n,
                                          !0,
                                          !0
                                        ))
                                      : Object(o.c)(s, e) &&
                                        ((r = Object(o.i)(s, a, e)),
                                        t._setPendingPropertyOrPath(
                                          r,
                                          n,
                                          !0,
                                          !0
                                        ));
                                  }
                              })(this, t, e),
                              !0
                            );
                        } else {
                          if (
                            this.__dataHasAccessor &&
                            this.__dataHasAccessor[t]
                          )
                            return this._setPendingProperty(t, e, n);
                          this[t] = e;
                        }
                        return !1;
                      },
                    },
                    {
                      key: "_setUnmanagedPropertyToNode",
                      value: function (t, e, n) {
                        (n === t[e] && "object" != E(n)) || (t[e] = n);
                      },
                    },
                    {
                      key: "_setPendingProperty",
                      value: function (t, e, n) {
                        var r = this.__dataHasPaths && Object(o.d)(t),
                          i = r ? this.__dataTemp : this.__data;
                        return (
                          !!this._shouldPropertyChange(t, e, i[t]) &&
                          (this.__dataPending ||
                            ((this.__dataPending = {}), (this.__dataOld = {})),
                          t in this.__dataOld ||
                            (this.__dataOld[t] = this.__data[t]),
                          r ? (this.__dataTemp[t] = e) : (this.__data[t] = e),
                          (this.__dataPending[t] = e),
                          (r || (this[j.NOTIFY] && this[j.NOTIFY][t])) &&
                            ((this.__dataToNotify = this.__dataToNotify || {}),
                            (this.__dataToNotify[t] = n)),
                          !0)
                        );
                      },
                    },
                    {
                      key: "_setProperty",
                      value: function (t, e) {
                        this._setPendingProperty(t, e, !0) &&
                          this._invalidateProperties();
                      },
                    },
                    {
                      key: "_invalidateProperties",
                      value: function () {
                        this.__dataReady && this._flushProperties();
                      },
                    },
                    {
                      key: "_enqueueClient",
                      value: function (t) {
                        (this.__dataPendingClients =
                          this.__dataPendingClients || []),
                          t !== this && this.__dataPendingClients.push(t);
                      },
                    },
                    {
                      key: "_flushProperties",
                      value: function () {
                        this.__dataCounter++,
                          w(C(r.prototype), "_flushProperties", this).call(
                            this
                          ),
                          this.__dataCounter--;
                      },
                    },
                    {
                      key: "_flushClients",
                      value: function () {
                        this.__dataClientsReady
                          ? this.__enableOrFlushClients()
                          : ((this.__dataClientsReady = !0),
                            this._readyClients(),
                            (this.__dataReady = !0));
                      },
                    },
                    {
                      key: "__enableOrFlushClients",
                      value: function () {
                        var t = this.__dataPendingClients;
                        if (t) {
                          this.__dataPendingClients = null;
                          for (var e = 0; e < t.length; e++) {
                            var n = t[e];
                            n.__dataEnabled
                              ? n.__dataPending && n._flushProperties()
                              : n._enableProperties();
                          }
                        }
                      },
                    },
                    {
                      key: "_readyClients",
                      value: function () {
                        this.__enableOrFlushClients();
                      },
                    },
                    {
                      key: "setProperties",
                      value: function (t, e) {
                        for (var n in t)
                          (!e && this[j.READ_ONLY] && this[j.READ_ONLY][n]) ||
                            this._setPendingPropertyOrPath(n, t[n], !0);
                        this._invalidateProperties();
                      },
                    },
                    {
                      key: "ready",
                      value: function () {
                        this._flushProperties(),
                          this.__dataClientsReady || this._flushClients(),
                          this.__dataPending && this._flushProperties();
                      },
                    },
                    {
                      key: "_propertiesChanged",
                      value: function (t, e, n) {
                        var r = this.__dataHasPaths;
                        (this.__dataHasPaths = !1),
                          (function (t, e, n, r) {
                            var o = t[j.COMPUTE];
                            if (o)
                              for (var i = e; A(t, o, i, n, r); )
                                Object.assign(n, t.__dataOld),
                                  Object.assign(e, t.__dataPending),
                                  (i = t.__dataPending),
                                  (t.__dataPending = null);
                          })(this, e, n, r);
                        var o = this.__dataToNotify;
                        (this.__dataToNotify = null),
                          this._propagatePropertyChanges(e, n, r),
                          this._flushClients(),
                          A(this, this[j.REFLECT], e, n, r),
                          A(this, this[j.OBSERVE], e, n, r),
                          o &&
                            (function (t, e, n, r, o) {
                              var i,
                                a,
                                s = t[j.NOTIFY],
                                u = T++;
                              for (var c in e)
                                e[c] &&
                                  (s && N(t, s, u, c, n, r, o)
                                    ? (i = !0)
                                    : o && M(t, c, n) && (i = !0));
                              i &&
                                (a = t.__dataHost) &&
                                a._invalidateProperties &&
                                a._invalidateProperties();
                            })(this, o, e, n, r),
                          1 == this.__dataCounter && (this.__dataTemp = {});
                      },
                    },
                    {
                      key: "_propagatePropertyChanges",
                      value: function (t, e, n) {
                        this[j.PROPAGATE] &&
                          A(this, this[j.PROPAGATE], t, e, n);
                        for (var r = this.__templateInfo; r; )
                          A(this, r.propertyEffects, t, e, n, r.nodeList),
                            (r = r.nextTemplateInfo);
                      },
                    },
                    {
                      key: "linkPaths",
                      value: function (t, e) {
                        (t = Object(o.f)(t)),
                          (e = Object(o.f)(e)),
                          (this.__dataLinkedPaths =
                            this.__dataLinkedPaths || {}),
                          (this.__dataLinkedPaths[t] = e);
                      },
                    },
                    {
                      key: "unlinkPaths",
                      value: function (t) {
                        (t = Object(o.f)(t)),
                          this.__dataLinkedPaths &&
                            delete this.__dataLinkedPaths[t];
                      },
                    },
                    {
                      key: "notifySplices",
                      value: function (t, e) {
                        var n = { path: "" };
                        Q(this, Object(o.a)(this, t, n), n.path, e);
                      },
                    },
                    {
                      key: "get",
                      value: function (t, e) {
                        return Object(o.a)(e || this, t);
                      },
                    },
                    {
                      key: "set",
                      value: function (t, e, n) {
                        n
                          ? Object(o.h)(n, t, e)
                          : (this[j.READ_ONLY] && this[j.READ_ONLY][t]) ||
                            (this._setPendingPropertyOrPath(t, e, !0) &&
                              this._invalidateProperties());
                      },
                    },
                    {
                      key: "push",
                      value: function (t) {
                        for (
                          var e = { path: "" },
                            n = Object(o.a)(this, t, e),
                            r = n.length,
                            i = arguments.length,
                            a = new Array(i > 1 ? i - 1 : 0),
                            s = 1;
                          s < i;
                          s++
                        )
                          a[s - 1] = arguments[s];
                        var u = n.push.apply(n, a);
                        return (
                          a.length && tt(this, n, e.path, r, a.length, []), u
                        );
                      },
                    },
                    {
                      key: "pop",
                      value: function (t) {
                        var e = { path: "" },
                          n = Object(o.a)(this, t, e),
                          r = Boolean(n.length),
                          i = n.pop();
                        return r && tt(this, n, e.path, n.length, 0, [i]), i;
                      },
                    },
                    {
                      key: "splice",
                      value: function (t, e, n) {
                        for (
                          var r = arguments.length,
                            i = new Array(r > 3 ? r - 3 : 0),
                            a = 3;
                          a < r;
                          a++
                        )
                          i[a - 3] = arguments[a];
                        var s,
                          u = { path: "" },
                          c = Object(o.a)(this, t, u);
                        return (
                          e < 0
                            ? (e = c.length - Math.floor(-e))
                            : e && (e = Math.floor(e)),
                          (s =
                            2 === arguments.length
                              ? c.splice(e)
                              : c.splice.apply(c, [e, n].concat(i))),
                          (i.length || s.length) &&
                            tt(this, c, u.path, e, i.length, s),
                          s
                        );
                      },
                    },
                    {
                      key: "shift",
                      value: function (t) {
                        var e = { path: "" },
                          n = Object(o.a)(this, t, e),
                          r = Boolean(n.length),
                          i = n.shift();
                        return r && tt(this, n, e.path, 0, 0, [i]), i;
                      },
                    },
                    {
                      key: "unshift",
                      value: function (t) {
                        for (
                          var e = { path: "" },
                            n = Object(o.a)(this, t, e),
                            r = arguments.length,
                            i = new Array(r > 1 ? r - 1 : 0),
                            a = 1;
                          a < r;
                          a++
                        )
                          i[a - 1] = arguments[a];
                        var s = n.unshift.apply(n, i);
                        return (
                          i.length && tt(this, n, e.path, 0, i.length, []), s
                        );
                      },
                    },
                    {
                      key: "notifyPath",
                      value: function (t, e) {
                        var n;
                        if (1 == arguments.length) {
                          var r = { path: "" };
                          (e = Object(o.a)(this, t, r)), (n = r.path);
                        } else n = Array.isArray(t) ? Object(o.f)(t) : t;
                        this._setPendingPropertyOrPath(n, e, !0, !0) &&
                          this._invalidateProperties();
                      },
                    },
                    {
                      key: "_createReadOnlyProperty",
                      value: function (t, e) {
                        var n;
                        this._addPropertyEffect(t, j.READ_ONLY),
                          e &&
                            (this[
                              "_set" +
                                ((n = t), n[0].toUpperCase() + n.substring(1))
                            ] = function (e) {
                              this._setProperty(t, e);
                            });
                      },
                    },
                    {
                      key: "_createPropertyObserver",
                      value: function (t, e, n) {
                        var r = {
                          property: t,
                          method: e,
                          dynamicFn: Boolean(n),
                        };
                        this._addPropertyEffect(t, j.OBSERVE, {
                          fn: D,
                          info: r,
                          trigger: { name: t },
                        }),
                          n &&
                            this._addPropertyEffect(e, j.OBSERVE, {
                              fn: D,
                              info: r,
                              trigger: { name: e },
                            });
                      },
                    },
                    {
                      key: "_createMethodObserver",
                      value: function (t, e) {
                        var n = K(t);
                        if (!n)
                          throw new Error(
                            "Malformed observer expression '" + t + "'"
                          );
                        $(this, n, j.OBSERVE, J, null, e);
                      },
                    },
                    {
                      key: "_createNotifyingProperty",
                      value: function (t) {
                        this._addPropertyEffect(t, j.NOTIFY, {
                          fn: F,
                          info: {
                            eventName: Object(i.a)(t) + "-changed",
                            property: t,
                          },
                        });
                      },
                    },
                    {
                      key: "_createReflectedProperty",
                      value: function (t) {
                        var e = this.constructor.attributeNameForProperty(t);
                        "-" === e[0]
                          ? console.warn(
                              "Property " +
                                t +
                                " cannot be reflected to attribute " +
                                e +
                                ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'
                            )
                          : this._addPropertyEffect(t, j.REFLECT, {
                              fn: H,
                              info: { attrName: e },
                            });
                      },
                    },
                    {
                      key: "_createComputedProperty",
                      value: function (t, e, n) {
                        var r = K(e);
                        if (!r)
                          throw new Error(
                            "Malformed computed expression '" + e + "'"
                          );
                        $(this, r, j.COMPUTE, z, t, n);
                      },
                    },
                    {
                      key: "_marshalArgs",
                      value: function (t, e, n) {
                        for (
                          var r = this.__data, i = [], a = 0, s = t.length;
                          a < s;
                          a++
                        ) {
                          var u = t[a],
                            c = u.name,
                            l = void 0;
                          if (
                            (u.literal
                              ? (l = u.value)
                              : u.structured
                              ? void 0 === (l = Object(o.a)(r, c)) && (l = n[c])
                              : (l = r[c]),
                            u.wildcard)
                          ) {
                            var f = 0 === c.indexOf(e + "."),
                              h = 0 === e.indexOf(c) && !f;
                            i[a] = {
                              path: h ? e : c,
                              value: h ? n[e] : l,
                              base: l,
                            };
                          } else i[a] = l;
                        }
                        return i;
                      },
                    },
                    {
                      key: "_bindTemplate",
                      value: function (t, e) {
                        var n = this.constructor._parseTemplate(t),
                          r = this.__templateInfo == n;
                        if (!r)
                          for (var o in n.propertyEffects)
                            this._createPropertyAccessor(o);
                        if (
                          e &&
                          (((n = Object.create(n)).wasPreBound = r),
                          !r && this.__templateInfo)
                        ) {
                          var i =
                            this.__templateInfoLast || this.__templateInfo;
                          return (
                            (this.__templateInfoLast = i.nextTemplateInfo = n),
                            (n.previousTemplateInfo = i),
                            n
                          );
                        }
                        return (this.__templateInfo = n);
                      },
                    },
                    {
                      key: "_stampTemplate",
                      value: function (t) {
                        nt.beginHosting(this);
                        var e = w(C(r.prototype), "_stampTemplate", this).call(
                          this,
                          t
                        );
                        nt.endHosting(this);
                        var n = this._bindTemplate(t, !0);
                        if (((n.nodeList = e.nodeList), !n.wasPreBound))
                          for (
                            var o = (n.childNodes = []), i = e.firstChild;
                            i;
                            i = i.nextSibling
                          )
                            o.push(i);
                        return (
                          (e.templateInfo = n),
                          (function (t, e) {
                            var n = e.nodeList,
                              r = e.nodeInfoList;
                            if (r.length)
                              for (var o = 0; o < r.length; o++) {
                                var i = r[o],
                                  a = n[o],
                                  s = i.bindings;
                                if (s)
                                  for (var u = 0; u < s.length; u++) {
                                    var c = s[u];
                                    V(a, c), U(a, t, c);
                                  }
                                a.__dataHost = t;
                              }
                          })(this, n),
                          this.__dataReady &&
                            A(
                              this,
                              n.propertyEffects,
                              this.__data,
                              null,
                              !1,
                              n.nodeList
                            ),
                          e
                        );
                      },
                    },
                    {
                      key: "_removeBoundDom",
                      value: function (t) {
                        var e = t.templateInfo;
                        e.previousTemplateInfo &&
                          (e.previousTemplateInfo.nextTemplateInfo =
                            e.nextTemplateInfo),
                          e.nextTemplateInfo &&
                            (e.nextTemplateInfo.previousTemplateInfo =
                              e.previousTemplateInfo),
                          this.__templateInfoLast == e &&
                            (this.__templateInfoLast = e.previousTemplateInfo),
                          (e.previousTemplateInfo = e.nextTemplateInfo = null);
                        for (var n = e.childNodes, r = 0; r < n.length; r++) {
                          var o = n[r];
                          o.parentNode.removeChild(o);
                        }
                      },
                    },
                    {
                      key: "PROPERTY_EFFECT_TYPES",
                      get: function () {
                        return j;
                      },
                    },
                  ],
                  [
                    {
                      key: "addPropertyEffect",
                      value: function (t, e, n) {
                        this.prototype._addPropertyEffect(t, e, n);
                      },
                    },
                    {
                      key: "createPropertyObserver",
                      value: function (t, e, n) {
                        this.prototype._createPropertyObserver(t, e, n);
                      },
                    },
                    {
                      key: "createMethodObserver",
                      value: function (t, e) {
                        this.prototype._createMethodObserver(t, e);
                      },
                    },
                    {
                      key: "createNotifyingProperty",
                      value: function (t) {
                        this.prototype._createNotifyingProperty(t);
                      },
                    },
                    {
                      key: "createReadOnlyProperty",
                      value: function (t, e) {
                        this.prototype._createReadOnlyProperty(t, e);
                      },
                    },
                    {
                      key: "createReflectedProperty",
                      value: function (t) {
                        this.prototype._createReflectedProperty(t);
                      },
                    },
                    {
                      key: "createComputedProperty",
                      value: function (t, e, n) {
                        this.prototype._createComputedProperty(t, e, n);
                      },
                    },
                    {
                      key: "bindTemplate",
                      value: function (t) {
                        return this.prototype._bindTemplate(t);
                      },
                    },
                    {
                      key: "_addTemplatePropertyEffect",
                      value: function (t, e, n) {
                        (t.hostProps = t.hostProps || {})[e] = !0;
                        var r = (t.propertyEffects = t.propertyEffects || {});
                        (r[e] = r[e] || []).push(n);
                      },
                    },
                    {
                      key: "_parseTemplateNode",
                      value: function (t, e, n) {
                        var o = w(C(r), "_parseTemplateNode", this).call(
                          this,
                          t,
                          e,
                          n
                        );
                        if (t.nodeType === Node.TEXT_NODE) {
                          var i = this._parseBindings(t.textContent, e);
                          i &&
                            ((t.textContent = W(i) || " "),
                            B(this, e, n, "text", "textContent", i),
                            (o = !0));
                        }
                        return o;
                      },
                    },
                    {
                      key: "_parseTemplateNodeAttribute",
                      value: function (t, e, n, o, a) {
                        var s = this._parseBindings(a, e);
                        if (s) {
                          var u = o,
                            c = "property";
                          R.test(o)
                            ? (c = "attribute")
                            : "$" == o[o.length - 1] &&
                              ((o = o.slice(0, -1)), (c = "attribute"));
                          var l = W(s);
                          return (
                            l && "attribute" == c && t.setAttribute(o, l),
                            "input" === t.localName &&
                              "value" === u &&
                              t.setAttribute(u, ""),
                            t.removeAttribute(u),
                            "property" === c && (o = Object(i.b)(o)),
                            B(this, e, n, c, o, s, l),
                            !0
                          );
                        }
                        return w(
                          C(r),
                          "_parseTemplateNodeAttribute",
                          this
                        ).call(this, t, e, n, o, a);
                      },
                    },
                    {
                      key: "_parseTemplateNestedTemplate",
                      value: function (t, e, n) {
                        var o = w(
                            C(r),
                            "_parseTemplateNestedTemplate",
                            this
                          ).call(this, t, e, n),
                          i = n.templateInfo.hostProps;
                        for (var a in i) {
                          B(this, e, n, "property", "_host_" + a, [
                            { mode: "{", source: a, dependencies: [a] },
                          ]);
                        }
                        return o;
                      },
                    },
                    {
                      key: "_parseBindings",
                      value: function (t, e) {
                        for (var n, r = [], o = 0; null !== (n = G.exec(t)); ) {
                          n.index > o &&
                            r.push({ literal: t.slice(o, n.index) });
                          var i = n[1][0],
                            a = Boolean(n[2]),
                            s = n[3].trim(),
                            u = !1,
                            c = "",
                            l = -1;
                          "{" == i &&
                            (l = s.indexOf("::")) > 0 &&
                            ((c = s.substring(l + 2)),
                            (s = s.substring(0, l)),
                            (u = !0));
                          var f = K(s),
                            h = [];
                          if (f) {
                            for (
                              var p = f.args, d = f.methodName, y = 0;
                              y < p.length;
                              y++
                            ) {
                              var _ = p[y];
                              _.literal || h.push(_);
                            }
                            var v = e.dynamicFns;
                            ((v && v[d]) || f.static) &&
                              (h.push(d), (f.dynamicFn = !0));
                          } else h.push(s);
                          r.push({
                            source: s,
                            mode: i,
                            negate: a,
                            customEvent: u,
                            signature: f,
                            dependencies: h,
                            event: c,
                          }),
                            (o = G.lastIndex);
                        }
                        if (o && o < t.length) {
                          var m = t.substring(o);
                          m && r.push({ literal: m });
                        }
                        return r.length ? r : null;
                      },
                    },
                    {
                      key: "_evaluateBinding",
                      value: function (t, e, n, r, i, a) {
                        var s;
                        return (
                          (s = e.signature
                            ? J(t, n, r, 0, e.signature)
                            : n != e.source
                            ? Object(o.a)(t, e.source)
                            : a && Object(o.d)(n)
                            ? Object(o.a)(t, n)
                            : t.__data[n]),
                          e.negate && (s = !s),
                          s
                        );
                      },
                    },
                  ]
                ),
                r
              );
            })();
          return n, n;
        }),
        nt = new ((function () {
          function t() {
            g(this, t), (this.stack = []);
          }
          return (
            P(t, [
              {
                key: "registerHost",
                value: function (t) {
                  this.stack.length &&
                    this.stack[this.stack.length - 1]._enqueueClient(t);
                },
              },
              {
                key: "beginHosting",
                value: function (t) {
                  this.stack.push(t);
                },
              },
              {
                key: "endHosting",
                value: function (t) {
                  var e = this.stack.length;
                  e && this.stack[e - 1] == t && this.stack.pop();
                },
              },
            ]),
            t
          );
        })())();
    },
    ,
    function (t, e, n) {
      "use strict";
      n(5);
      var r = n(81),
        o = n(8),
        i = n(9);
      Object(o.a)({
        is: "iron-iconset-svg",
        properties: {
          name: { type: String, observer: "_nameChanged" },
          size: { type: Number, value: 24 },
          rtlMirroring: { type: Boolean, value: !1 },
          useGlobalRtlAttribute: { type: Boolean, value: !1 },
        },
        created: function () {
          this._meta = new r.a({ type: "iconset", key: null, value: null });
        },
        attached: function () {
          this.style.display = "none";
        },
        getIconNames: function () {
          return (
            (this._icons = this._createIconMap()),
            Object.keys(this._icons).map(function (t) {
              return this.name + ":" + t;
            }, this)
          );
        },
        applyIcon: function (t, e) {
          this.removeIcon(t);
          var n = this._cloneIcon(e, this.rtlMirroring && this._targetIsRTL(t));
          if (n) {
            var r = Object(i.a)(t.root || t);
            return r.insertBefore(n, r.childNodes[0]), (t._svgIcon = n);
          }
          return null;
        },
        removeIcon: function (t) {
          t._svgIcon &&
            (Object(i.a)(t.root || t).removeChild(t._svgIcon),
            (t._svgIcon = null));
        },
        _targetIsRTL: function (t) {
          if (null == this.__targetIsRTL)
            if (this.useGlobalRtlAttribute) {
              var e =
                document.body && document.body.hasAttribute("dir")
                  ? document.body
                  : document.documentElement;
              this.__targetIsRTL = "rtl" === e.getAttribute("dir");
            } else
              t && t.nodeType !== Node.ELEMENT_NODE && (t = t.host),
                (this.__targetIsRTL =
                  t && "rtl" === window.getComputedStyle(t).direction);
          return this.__targetIsRTL;
        },
        _nameChanged: function () {
          (this._meta.value = null),
            (this._meta.key = this.name),
            (this._meta.value = this),
            this.async(function () {
              this.fire("iron-iconset-added", this, { node: window });
            });
        },
        _createIconMap: function () {
          var t = Object.create(null);
          return (
            Object(i.a)(this)
              .querySelectorAll("[id]")
              .forEach(function (e) {
                t[e.id] = e;
              }),
            t
          );
        },
        _cloneIcon: function (t, e) {
          return (
            (this._icons = this._icons || this._createIconMap()),
            this._prepareSvgClone(this._icons[t], this.size, e)
          );
        },
        _prepareSvgClone: function (t, e, n) {
          if (t) {
            var r = t.cloneNode(!0),
              o = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
              i = r.getAttribute("viewBox") || "0 0 " + e + " " + e,
              a =
                "pointer-events: none; display: block; width: 100%; height: 100%;";
            return (
              n &&
                r.hasAttribute("mirror-in-rtl") &&
                (a +=
                  "-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),
              o.setAttribute("viewBox", i),
              o.setAttribute("preserveAspectRatio", "xMidYMid meet"),
              o.setAttribute("focusable", "false"),
              (o.style.cssText = a),
              o.appendChild(r).removeAttribute("id"),
              o
            );
          }
          return null;
        },
      });
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return d;
      }),
        n.d(e, "b", function () {
          return y;
        }),
        n.d(e, "a", function () {
          return v;
        });
      var r = n(79),
        o = n(44);
      function i(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return a(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return a(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return a(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function a(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var s = "link[rel=import][type~=css]",
        u = "include",
        c = "shady-unscoped";
      function l(t) {
        return r.a.import(t);
      }
      function f(t) {
        var e = t.body ? t.body : t,
          n = Object(o.b)(e.textContent, t.baseURI),
          r = document.createElement("style");
        return (r.textContent = n), r;
      }
      function h(t) {
        for (var e = t.trim().split(/\s+/), n = [], r = 0; r < e.length; r++)
          n.push.apply(n, i(p(e[r])));
        return n;
      }
      function p(t) {
        var e = l(t);
        if (!e)
          return (
            console.warn("Could not find style data in module named", t), []
          );
        if (void 0 === e._styles) {
          var n = [];
          n.push.apply(n, i(_(e)));
          var r = e.querySelector("template");
          r && n.push.apply(n, i(d(r, e.assetpath))), (e._styles = n);
        }
        return e._styles;
      }
      function d(t, e) {
        if (!t._styles) {
          for (
            var n = [], r = t.content.querySelectorAll("style"), a = 0;
            a < r.length;
            a++
          ) {
            var s = r[a],
              c = s.getAttribute(u);
            c &&
              n.push.apply(
                n,
                i(
                  h(c).filter(function (t, e, n) {
                    return n.indexOf(t) === e;
                  })
                )
              ),
              e && (s.textContent = Object(o.b)(s.textContent, e)),
              n.push(s);
          }
          t._styles = n;
        }
        return t._styles;
      }
      function y(t) {
        var e = l(t);
        return e ? _(e) : [];
      }
      function _(t) {
        for (var e = [], n = t.querySelectorAll(s), r = 0; r < n.length; r++) {
          var o = n[r];
          if (o.import) {
            var i = o.import,
              a = o.hasAttribute(c);
            if (a && !i._unscopedStyle) {
              var u = f(i);
              u.setAttribute(c, ""), (i._unscopedStyle = u);
            } else i._style || (i._style = f(i));
            e.push(a ? i._unscopedStyle : i._style);
          }
        }
        return e;
      }
      function v(t) {
        for (var e = t.trim().split(/\s+/), n = "", r = 0; r < e.length; r++)
          n += m(e[r]);
        return n;
      }
      function m(t) {
        var e = l(t);
        if (e && void 0 === e._cssText) {
          var n = b(e),
            r = e.querySelector("template");
          r &&
            (n += (function (t, e) {
              for (var n = "", r = d(t, e), o = 0; o < r.length; o++) {
                var i = r[o];
                i.parentNode && i.parentNode.removeChild(i),
                  (n += i.textContent);
              }
              return n;
            })(r, e.assetpath)),
            (e._cssText = n || null);
        }
        return (
          e || console.warn("Could not find style data in module named", t),
          (e && e._cssText) || ""
        );
      }
      function b(t) {
        for (var e = "", n = _(t), r = 0; r < n.length; r++)
          e += n[r].textContent;
        return e;
      }
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return _;
      });
      n(10);
      var r = n(19),
        o = n(58),
        i = n(100);
      function a(t) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function s(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function u(t, e, n) {
        return (u =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = f(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function c(t, e) {
        return (c =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function l(t) {
        return function () {
          var e,
            n = f(t);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
          ) {
            var r = f(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === a(e) || "function" == typeof e)) return e;
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(this, e);
        };
      }
      function f(t) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      for (var h = {}, p = HTMLElement.prototype; p; ) {
        for (var d = Object.getOwnPropertyNames(p), y = 0; y < d.length; y++)
          h[d[y]] = !0;
        p = Object.getPrototypeOf(p);
      }
      var _ = Object(r.a)(function (t) {
        var e = Object(i.a)(t);
        return (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && c(t, e);
          })(d, e);
          var n,
            r,
            i,
            p = l(d);
          function d() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, d),
              p.apply(this, arguments)
            );
          }
          return (
            (n = d),
            (i = [
              {
                key: "createPropertiesForAttributes",
                value: function () {
                  for (
                    var t = this.observedAttributes, e = 0;
                    e < t.length;
                    e++
                  )
                    this.prototype._createPropertyAccessor(Object(o.b)(t[e]));
                },
              },
              {
                key: "attributeNameForProperty",
                value: function (t) {
                  return Object(o.a)(t);
                },
              },
            ]),
            (r = [
              {
                key: "_initializeProperties",
                value: function () {
                  this.__dataProto &&
                    (this._initializeProtoProperties(this.__dataProto),
                    (this.__dataProto = null)),
                    u(f(d.prototype), "_initializeProperties", this).call(this);
                },
              },
              {
                key: "_initializeProtoProperties",
                value: function (t) {
                  for (var e in t) this._setProperty(e, t[e]);
                },
              },
              {
                key: "_ensureAttribute",
                value: function (t, e) {
                  this.hasAttribute(t) ||
                    this._valueToNodeAttribute(this, e, t);
                },
              },
              {
                key: "_serializeValue",
                value: function (t) {
                  switch (a(t)) {
                    case "object":
                      if (t instanceof Date) return t.toString();
                      if (t)
                        try {
                          return JSON.stringify(t);
                        } catch (e) {
                          return "";
                        }
                    default:
                      return u(f(d.prototype), "_serializeValue", this).call(
                        this,
                        t
                      );
                  }
                },
              },
              {
                key: "_deserializeValue",
                value: function (t, e) {
                  var n;
                  switch (e) {
                    case Object:
                      try {
                        n = JSON.parse(t);
                      } catch (r) {
                        n = t;
                      }
                      break;
                    case Array:
                      try {
                        n = JSON.parse(t);
                      } catch (r) {
                        (n = null),
                          console.warn(
                            "Polymer::Attributes: couldn't decode Array as JSON: ".concat(
                              t
                            )
                          );
                      }
                      break;
                    case Date:
                      (n = isNaN(t) ? String(t) : Number(t)), (n = new Date(n));
                      break;
                    default:
                      n = u(f(d.prototype), "_deserializeValue", this).call(
                        this,
                        t,
                        e
                      );
                  }
                  return n;
                },
              },
              {
                key: "_definePropertyAccessor",
                value: function (t, e) {
                  !(function (t, e) {
                    if (!h[e]) {
                      var n = t[e];
                      void 0 !== n &&
                        (t.__data
                          ? t._setPendingProperty(e, n)
                          : (t.__dataProto
                              ? t.hasOwnProperty(
                                  JSCompiler_renameProperty("__dataProto", t)
                                ) ||
                                (t.__dataProto = Object.create(t.__dataProto))
                              : (t.__dataProto = {}),
                            (t.__dataProto[e] = n)));
                    }
                  })(this, t),
                    u(f(d.prototype), "_definePropertyAccessor", this).call(
                      this,
                      t,
                      e
                    );
                },
              },
              {
                key: "_hasAccessor",
                value: function (t) {
                  return this.__dataHasAccessor && this.__dataHasAccessor[t];
                },
              },
              {
                key: "_isPropertyPending",
                value: function (t) {
                  return Boolean(this.__dataPending && t in this.__dataPending);
                },
              },
            ]) && s(n.prototype, r),
            i && s(n, i),
            d
          );
        })();
      });
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return h;
      });
      n(10);
      var r = n(19);
      function o(t) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function i(t, e, n) {
        return (i =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = l(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function s(t, e, n) {
        return e && a(t.prototype, e), n && a(t, n), t;
      }
      function u(t, e) {
        return (u =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function c(t) {
        return function () {
          var e,
            n = l(t);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
          ) {
            var r = l(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === o(e) || "function" == typeof e)) return e;
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(this, e);
        };
      }
      function l(t) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var f = n(32).a,
        h = Object(r.a)(function (t) {
          return (function (e) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && u(t, e);
            })(r, t);
            var n = c(r);
            function r() {
              var t;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, r),
                ((t = n.call(this)).__dataEnabled = !1),
                (t.__dataReady = !1),
                (t.__dataInvalid = !1),
                (t.__data = {}),
                (t.__dataPending = null),
                (t.__dataOld = null),
                (t.__dataInstanceProps = null),
                (t.__serializing = !1),
                t._initializeProperties(),
                t
              );
            }
            return (
              s(
                r,
                [
                  {
                    key: "_createPropertyAccessor",
                    value: function (t, e) {
                      this._addPropertyToAttributeMap(t),
                        this.hasOwnProperty("__dataHasAccessor") ||
                          (this.__dataHasAccessor = Object.assign(
                            {},
                            this.__dataHasAccessor
                          )),
                        this.__dataHasAccessor[t] ||
                          ((this.__dataHasAccessor[t] = !0),
                          this._definePropertyAccessor(t, e));
                    },
                  },
                  {
                    key: "_addPropertyToAttributeMap",
                    value: function (t) {
                      if (
                        (this.hasOwnProperty("__dataAttributes") ||
                          (this.__dataAttributes = Object.assign(
                            {},
                            this.__dataAttributes
                          )),
                        !this.__dataAttributes[t])
                      ) {
                        var e = this.constructor.attributeNameForProperty(t);
                        this.__dataAttributes[e] = t;
                      }
                    },
                  },
                  {
                    key: "_definePropertyAccessor",
                    value: function (t, e) {
                      Object.defineProperty(this, t, {
                        get: function () {
                          return this._getProperty(t);
                        },
                        set: e
                          ? function () {}
                          : function (e) {
                              this._setProperty(t, e);
                            },
                      });
                    },
                  },
                ],
                [
                  {
                    key: "createProperties",
                    value: function (t) {
                      var e = this.prototype;
                      for (var n in t) n in e || e._createPropertyAccessor(n);
                    },
                  },
                  {
                    key: "attributeNameForProperty",
                    value: function (t) {
                      return t.toLowerCase();
                    },
                  },
                  { key: "typeForProperty", value: function (t) {} },
                ]
              ),
              s(r, [
                {
                  key: "ready",
                  value: function () {
                    (this.__dataReady = !0), this._flushProperties();
                  },
                },
                {
                  key: "_initializeProperties",
                  value: function () {
                    for (var t in this.__dataHasAccessor)
                      this.hasOwnProperty(t) &&
                        ((this.__dataInstanceProps =
                          this.__dataInstanceProps || {}),
                        (this.__dataInstanceProps[t] = this[t]),
                        delete this[t]);
                  },
                },
                {
                  key: "_initializeInstanceProperties",
                  value: function (t) {
                    Object.assign(this, t);
                  },
                },
                {
                  key: "_setProperty",
                  value: function (t, e) {
                    this._setPendingProperty(t, e) &&
                      this._invalidateProperties();
                  },
                },
                {
                  key: "_getProperty",
                  value: function (t) {
                    return this.__data[t];
                  },
                },
                {
                  key: "_setPendingProperty",
                  value: function (t, e, n) {
                    var r = this.__data[t],
                      o = this._shouldPropertyChange(t, e, r);
                    return (
                      o &&
                        (this.__dataPending ||
                          ((this.__dataPending = {}), (this.__dataOld = {})),
                        !this.__dataOld ||
                          t in this.__dataOld ||
                          (this.__dataOld[t] = r),
                        (this.__data[t] = e),
                        (this.__dataPending[t] = e)),
                      o
                    );
                  },
                },
                {
                  key: "_invalidateProperties",
                  value: function () {
                    var t = this;
                    !this.__dataInvalid &&
                      this.__dataReady &&
                      ((this.__dataInvalid = !0),
                      f.run(function () {
                        t.__dataInvalid &&
                          ((t.__dataInvalid = !1), t._flushProperties());
                      }));
                  },
                },
                {
                  key: "_enableProperties",
                  value: function () {
                    this.__dataEnabled ||
                      ((this.__dataEnabled = !0),
                      this.__dataInstanceProps &&
                        (this._initializeInstanceProperties(
                          this.__dataInstanceProps
                        ),
                        (this.__dataInstanceProps = null)),
                      this.ready());
                  },
                },
                {
                  key: "_flushProperties",
                  value: function () {
                    var t = this.__data,
                      e = this.__dataPending,
                      n = this.__dataOld;
                    this._shouldPropertiesChange(t, e, n) &&
                      ((this.__dataPending = null),
                      (this.__dataOld = null),
                      this._propertiesChanged(t, e, n));
                  },
                },
                {
                  key: "_shouldPropertiesChange",
                  value: function (t, e, n) {
                    return Boolean(e);
                  },
                },
                {
                  key: "_propertiesChanged",
                  value: function (t, e, n) {},
                },
                {
                  key: "_shouldPropertyChange",
                  value: function (t, e, n) {
                    return n !== e && (n == n || e == e);
                  },
                },
                {
                  key: "attributeChangedCallback",
                  value: function (t, e, n, o) {
                    e !== n && this._attributeToProperty(t, n),
                      i(l(r.prototype), "attributeChangedCallback", this) &&
                        i(
                          l(r.prototype),
                          "attributeChangedCallback",
                          this
                        ).call(this, t, e, n, o);
                  },
                },
                {
                  key: "_attributeToProperty",
                  value: function (t, e, n) {
                    if (!this.__serializing) {
                      var r = this.__dataAttributes,
                        o = (r && r[t]) || t;
                      this[o] = this._deserializeValue(
                        e,
                        n || this.constructor.typeForProperty(o)
                      );
                    }
                  },
                },
                {
                  key: "_propertyToAttribute",
                  value: function (t, e, n) {
                    (this.__serializing = !0),
                      (n = arguments.length < 3 ? this[t] : n),
                      this._valueToNodeAttribute(
                        this,
                        n,
                        e || this.constructor.attributeNameForProperty(t)
                      ),
                      (this.__serializing = !1);
                  },
                },
                {
                  key: "_valueToNodeAttribute",
                  value: function (t, e, n) {
                    var r = this._serializeValue(e);
                    void 0 === r ? t.removeAttribute(n) : t.setAttribute(n, r);
                  },
                },
                {
                  key: "_serializeValue",
                  value: function (t) {
                    switch (o(t)) {
                      case "boolean":
                        return t ? "" : void 0;
                      default:
                        return null != t ? t.toString() : void 0;
                    }
                  },
                },
                {
                  key: "_deserializeValue",
                  value: function (t, e) {
                    switch (e) {
                      case Boolean:
                        return null !== t;
                      case Number:
                        return Number(t);
                      default:
                        return t;
                    }
                  },
                },
              ]),
              r
            );
          })();
        });
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return f;
      });
      n(10);
      var r = n(19),
        o = n(59);
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function s(t, e, n) {
        return (s =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = l(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function u(t, e) {
        return (u =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function c(t) {
        return function () {
          var e,
            n = l(t);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
          ) {
            var r = l(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === i(e) || "function" == typeof e)) return e;
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(this, e);
        };
      }
      function l(t) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var f = Object(r.a)(function (t) {
        return (function (e) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && u(t, e);
          })(h, t);
          var n,
            r,
            i,
            f = c(h);
          function h() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, h),
              f.apply(this, arguments)
            );
          }
          return (
            (n = h),
            (r = [
              {
                key: "_addEventListenerToNode",
                value: function (t, e, n) {
                  Object(o.b)(t, e, n) ||
                    s(l(h.prototype), "_addEventListenerToNode", this).call(
                      this,
                      t,
                      e,
                      n
                    );
                },
              },
              {
                key: "_removeEventListenerFromNode",
                value: function (t, e, n) {
                  Object(o.d)(t, e, n) ||
                    s(
                      l(h.prototype),
                      "_removeEventListenerFromNode",
                      this
                    ).call(this, t, e, n);
                },
              },
            ]) && a(n.prototype, r),
            i && a(n, i),
            h
          );
        })();
      });
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      n(10);
      function r(t, e, n) {
        return { index: t, removed: e, addedCount: n };
      }
      var o = 0,
        i = 1,
        a = 2,
        s = 3;
      function u(t, e, n, u, c, f) {
        var h,
          p = 0,
          d = 0,
          y = Math.min(n - e, f - c);
        if (
          (0 == e &&
            0 == c &&
            (p = (function (t, e, n) {
              for (var r = 0; r < n; r++) if (!l(t[r], e[r])) return r;
              return n;
            })(t, u, y)),
          n == t.length &&
            f == u.length &&
            (d = (function (t, e, n) {
              var r = t.length,
                o = e.length,
                i = 0;
              for (; i < n && l(t[--r], e[--o]); ) i++;
              return i;
            })(t, u, y - p)),
          (c += p),
          (f -= d),
          (n -= d) - (e += p) == 0 && f - c == 0)
        )
          return [];
        if (e == n) {
          for (h = r(e, [], 0); c < f; ) h.removed.push(u[c++]);
          return [h];
        }
        if (c == f) return [r(e, [], n - e)];
        var _ = (function (t) {
          for (
            var e = t.length - 1, n = t[0].length - 1, r = t[e][n], u = [];
            e > 0 || n > 0;

          )
            if (0 != e)
              if (0 != n) {
                var c = t[e - 1][n - 1],
                  l = t[e - 1][n],
                  f = t[e][n - 1],
                  h = void 0;
                (h = l < f ? (l < c ? l : c) : f < c ? f : c) == c
                  ? (c == r ? u.push(o) : (u.push(i), (r = c)), e--, n--)
                  : h == l
                  ? (u.push(s), e--, (r = l))
                  : (u.push(a), n--, (r = f));
              } else u.push(s), e--;
            else u.push(a), n--;
          return u.reverse(), u;
        })(
          (function (t, e, n, r, o, i) {
            for (
              var a = i - o + 1, s = n - e + 1, u = new Array(a), c = 0;
              c < a;
              c++
            )
              (u[c] = new Array(s)), (u[c][0] = c);
            for (var f = 0; f < s; f++) u[0][f] = f;
            for (var h = 1; h < a; h++)
              for (var p = 1; p < s; p++)
                if (l(t[e + p - 1], r[o + h - 1])) u[h][p] = u[h - 1][p - 1];
                else {
                  var d = u[h - 1][p] + 1,
                    y = u[h][p - 1] + 1;
                  u[h][p] = d < y ? d : y;
                }
            return u;
          })(t, e, n, u, c, f)
        );
        h = void 0;
        for (var v = [], m = e, b = c, g = 0; g < _.length; g++)
          switch (_[g]) {
            case o:
              h && (v.push(h), (h = void 0)), m++, b++;
              break;
            case i:
              h || (h = r(m, [], 0)),
                h.addedCount++,
                m++,
                h.removed.push(u[b]),
                b++;
              break;
            case a:
              h || (h = r(m, [], 0)), h.addedCount++, m++;
              break;
            case s:
              h || (h = r(m, [], 0)), h.removed.push(u[b]), b++;
          }
        return h && v.push(h), v;
      }
      function c(t, e) {
        return u(t, 0, t.length, e, 0, e.length);
      }
      function l(t, e) {
        return t === e;
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      var r = n(76);
      var o = function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.start = 0),
          (this.end = 0),
          (this.previous = null),
          (this.parent = null),
          (this.rules = null),
          (this.parsedCssText = ""),
          (this.cssText = ""),
          (this.atRule = !1),
          (this.type = 0),
          (this.keyframesName = ""),
          (this.selector = ""),
          (this.parsedSelector = "");
      };
      function i(t) {
        return (function t(e, n) {
          var r = n.substring(e.start, e.end - 1);
          e.parsedCssText = e.cssText = r.trim();
          if (e.parent) {
            var o = e.previous ? e.previous.end : e.parent.start;
            r = (r = (r = (function (t) {
              return t.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
                for (var t = arguments[1], e = 6 - t.length; e--; ) t = "0" + t;
                return "\\" + t;
              });
            })((r = n.substring(o, e.start - 1)))).replace(
              l.multipleSpaces,
              " "
            )).substring(r.lastIndexOf(";") + 1);
            var i = (e.parsedSelector = e.selector = r.trim());
            (e.atRule = 0 === i.indexOf(p)),
              e.atRule
                ? 0 === i.indexOf(h)
                  ? (e.type = s.MEDIA_RULE)
                  : i.match(l.keyframesRule) &&
                    ((e.type = s.KEYFRAMES_RULE),
                    (e.keyframesName = e.selector
                      .split(l.multipleSpaces)
                      .pop()))
                : 0 === i.indexOf(f)
                ? (e.type = s.MIXIN_RULE)
                : (e.type = s.STYLE_RULE);
          }
          var a = e.rules;
          if (a)
            for (var u, c = 0, d = a.length; c < d && (u = a[c]); c++) t(u, n);
          return e;
        })(
          (function (t) {
            var e = new o();
            (e.start = 0), (e.end = t.length);
            for (var n = e, r = 0, i = t.length; r < i; r++)
              if (t[r] === u) {
                n.rules || (n.rules = []);
                var a = n,
                  s = a.rules[a.rules.length - 1] || null;
                ((n = new o()).start = r + 1),
                  (n.parent = a),
                  (n.previous = s),
                  a.rules.push(n);
              } else t[r] === c && ((n.end = r + 1), (n = n.parent || e));
            return e;
          })((t = t.replace(l.comments, "").replace(l.port, ""))),
          t
        );
      }
      function a(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          r = "";
        if (t.cssText || t.rules) {
          var o = t.rules;
          if (
            o &&
            !(function (t) {
              var e = t[0];
              return (
                Boolean(e) && Boolean(e.selector) && 0 === e.selector.indexOf(f)
              );
            })(o)
          )
            for (var i, s = 0, h = o.length; s < h && (i = o[s]); s++)
              r = a(i, e, r);
          else
            (r = (r = e
              ? t.cssText
              : (function (t) {
                  return (function (t) {
                    return t.replace(l.mixinApply, "").replace(l.varApply, "");
                  })(
                    (t = (function (t) {
                      return t
                        .replace(l.customProp, "")
                        .replace(l.mixinProp, "");
                    })(t))
                  );
                })(t.cssText)).trim()) && (r = "  " + r + "\n");
        }
        return (
          r &&
            (t.selector && (n += t.selector + " " + u + "\n"),
            (n += r),
            t.selector && (n += c + "\n\n")),
          n
        );
      }
      var s = {
          STYLE_RULE: 1,
          KEYFRAMES_RULE: 7,
          MEDIA_RULE: 4,
          MIXIN_RULE: 1e3,
        },
        u = "{",
        c = "}",
        l = {
          comments: /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,
          port: /@import[^;]*;/gim,
          customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
          mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
          mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
          varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
          keyframesRule: /^@[^\s]*keyframes/,
          multipleSpaces: /\s+/g,
        },
        f = "--",
        h = "@media",
        p = "@",
        d = n(77),
        y = new Set(),
        _ = "shady-unscoped";
      function v(t) {
        var e = t.textContent;
        if (!y.has(e)) {
          y.add(e);
          var n = t.cloneNode(!0);
          document.head.appendChild(n);
        }
      }
      function m(t) {
        return t.hasAttribute(_);
      }
      function b(t, e) {
        return t
          ? ("string" == typeof t && (t = i(t)), e && O(t, e), a(t, r.c))
          : "";
      }
      function g(t) {
        return (
          !t.__cssRules && t.textContent && (t.__cssRules = i(t.textContent)),
          t.__cssRules || null
        );
      }
      function O(t, e, n, r) {
        if (t) {
          var o = !1,
            i = t.type;
          if (r && i === s.MEDIA_RULE) {
            var a = t.selector.match(d.a);
            a && (window.matchMedia(a[1]).matches || (o = !0));
          }
          i === s.STYLE_RULE
            ? e(t)
            : n && i === s.KEYFRAMES_RULE
            ? n(t)
            : i === s.MIXIN_RULE && (o = !0);
          var u = t.rules;
          if (u && !o)
            for (var c, l = 0, f = u.length; l < f && (c = u[l]); l++)
              O(c, e, n, r);
        }
      }
      function P(t, e) {
        for (var n = 0, r = e, o = t.length; r < o; r++)
          if ("(" === t[r]) n++;
          else if (")" === t[r] && 0 == --n) return r;
        return -1;
      }
      window.ShadyDOM && window.ShadyDOM.wrap;
      var w = "css-build";
      function S(t) {
        if (void 0 !== r.a) return r.a;
        if (void 0 === t.__cssBuild) {
          var e = t.getAttribute(w);
          if (e) t.__cssBuild = e;
          else {
            var n = (function (t) {
              var e =
                "template" === t.localName
                  ? t.content.firstChild
                  : t.firstChild;
              if (e instanceof Comment) {
                var n = e.textContent.trim().split(":");
                if (n[0] === w) return n[1];
              }
              return "";
            })(t);
            "" !== n &&
              (function (t) {
                var e =
                  "template" === t.localName
                    ? t.content.firstChild
                    : t.firstChild;
                e.parentNode.removeChild(e);
              })(t),
              (t.__cssBuild = n);
          }
        }
        return t.__cssBuild || "";
      }
      function k(t) {
        return "" !== S(t);
      }
      var C = n(78);
      function E(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function T(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function j(t, e, n) {
        return e && T(t.prototype, e), n && T(t, n), t;
      }
      var R = /;\s*/m,
        x = /^\s*(initial)|(inherit)\s*$/,
        A = /\s*!important/,
        N = (function () {
          function t() {
            E(this, t), (this._map = {});
          }
          return (
            j(t, [
              {
                key: "set",
                value: function (t, e) {
                  (t = t.trim()),
                    (this._map[t] = {
                      properties: e,
                      dependants: {},
                    });
                },
              },
              {
                key: "get",
                value: function (t) {
                  return (t = t.trim()), this._map[t] || null;
                },
              },
            ]),
            t
          );
        })(),
        I = null,
        D = (function () {
          function t() {
            E(this, t),
              (this._currentElement = null),
              (this._measureElement = null),
              (this._map = new N());
          }
          return (
            j(t, [
              {
                key: "detectMixin",
                value: function (t) {
                  return Object(C.a)(t);
                },
              },
              {
                key: "gatherStyles",
                value: function (t) {
                  var e = (function (t) {
                    for (
                      var e = [], n = t.querySelectorAll("style"), o = 0;
                      o < n.length;
                      o++
                    ) {
                      var i = n[o];
                      m(i)
                        ? r.d || (v(i), i.parentNode.removeChild(i))
                        : (e.push(i.textContent), i.parentNode.removeChild(i));
                    }
                    return e.join("").trim();
                  })(t.content);
                  if (e) {
                    var n = document.createElement("style");
                    return (
                      (n.textContent = e),
                      t.content.insertBefore(n, t.content.firstChild),
                      n
                    );
                  }
                  return null;
                },
              },
              {
                key: "transformTemplate",
                value: function (t, e) {
                  void 0 === t._gatheredStyle &&
                    (t._gatheredStyle = this.gatherStyles(t));
                  var n = t._gatheredStyle;
                  return n ? this.transformStyle(n, e) : null;
                },
              },
              {
                key: "transformStyle",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                    n = g(t);
                  return this.transformRules(n, e), (t.textContent = b(n)), n;
                },
              },
              {
                key: "transformCustomStyle",
                value: function (t) {
                  var e = this,
                    n = g(t);
                  return (
                    O(n, function (t) {
                      ":root" === t.selector && (t.selector = "html"),
                        e.transformRule(t);
                    }),
                    (t.textContent = b(n)),
                    n
                  );
                },
              },
              {
                key: "transformRules",
                value: function (t, e) {
                  var n = this;
                  (this._currentElement = e),
                    O(t, function (t) {
                      n.transformRule(t);
                    }),
                    (this._currentElement = null);
                },
              },
              {
                key: "transformRule",
                value: function (t) {
                  (t.cssText = this.transformCssText(t.parsedCssText, t)),
                    ":root" === t.selector && (t.selector = ":host > *");
                },
              },
              {
                key: "transformCssText",
                value: function (t, e) {
                  var n = this;
                  return (
                    (t = t.replace(d.c, function (t, r, o, i) {
                      return n._produceCssProperties(t, r, o, i, e);
                    })),
                    this._consumeCssProperties(t, e)
                  );
                },
              },
              {
                key: "_getInitialValueForProperty",
                value: function (t) {
                  return (
                    this._measureElement ||
                      ((this._measureElement = document.createElement("meta")),
                      this._measureElement.setAttribute(
                        "apply-shim-measure",
                        ""
                      ),
                      (this._measureElement.style.all = "initial"),
                      document.head.appendChild(this._measureElement)),
                    window
                      .getComputedStyle(this._measureElement)
                      .getPropertyValue(t)
                  );
                },
              },
              {
                key: "_fallbacksFromPreviousRules",
                value: function (t) {
                  for (var e = this, n = t; n.parent; ) n = n.parent;
                  var r = {},
                    o = !1;
                  return (
                    O(n, function (n) {
                      (o = o || n === t) ||
                        (n.selector === t.selector &&
                          Object.assign(r, e._cssTextToMap(n.parsedCssText)));
                    }),
                    r
                  );
                },
              },
              {
                key: "_consumeCssProperties",
                value: function (t, e) {
                  for (var n = null; (n = d.b.exec(t)); ) {
                    var r = n[0],
                      o = n[1],
                      i = n.index,
                      a = i + r.indexOf("@apply"),
                      s = i + r.length,
                      u = t.slice(0, a),
                      c = t.slice(s),
                      l = e ? this._fallbacksFromPreviousRules(e) : {};
                    Object.assign(l, this._cssTextToMap(u));
                    var f = this._atApplyToCssProperties(o, l);
                    (t = "".concat(u).concat(f).concat(c)),
                      (d.b.lastIndex = i + f.length);
                  }
                  return t;
                },
              },
              {
                key: "_atApplyToCssProperties",
                value: function (t, e) {
                  t = t.replace(R, "");
                  var n = [],
                    r = this._map.get(t);
                  if (
                    (r || (this._map.set(t, {}), (r = this._map.get(t))), r)
                  ) {
                    var o, i, a;
                    this._currentElement &&
                      (r.dependants[this._currentElement] = !0);
                    var s = r.properties;
                    for (o in s)
                      (i = [o, ": var(", t, "_-_", o]),
                        (a = e && e[o]) && i.push(",", a.replace(A, "")),
                        i.push(")"),
                        A.test(s[o]) && i.push(" !important"),
                        n.push(i.join(""));
                  }
                  return n.join("; ");
                },
              },
              {
                key: "_replaceInitialOrInherit",
                value: function (t, e) {
                  var n = x.exec(e);
                  return (
                    n &&
                      (e = n[1]
                        ? this._getInitialValueForProperty(t)
                        : "apply-shim-inherit"),
                    e
                  );
                },
              },
              {
                key: "_cssTextToMap",
                value: function (t) {
                  for (
                    var e,
                      n,
                      r,
                      o,
                      i =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      a = t.split(";"),
                      s = {},
                      u = 0;
                    u < a.length;
                    u++
                  )
                    (r = a[u]) &&
                      (o = r.split(":")).length > 1 &&
                      ((e = o[0].trim()),
                      (n = o.slice(1).join(":")),
                      i && (n = this._replaceInitialOrInherit(e, n)),
                      (s[e] = n));
                  return s;
                },
              },
              {
                key: "_invalidateMixinEntry",
                value: function (t) {
                  if (I)
                    for (var e in t.dependants)
                      e !== this._currentElement && I(e);
                },
              },
              {
                key: "_produceCssProperties",
                value: function (t, e, n, r, o) {
                  var i = this;
                  if (
                    (n &&
                      (function t(e, n) {
                        var r = e.indexOf("var(");
                        if (-1 === r) return n(e, "", "", "");
                        var o = P(e, r + 3),
                          i = e.substring(r + 4, o),
                          a = e.substring(0, r),
                          s = t(e.substring(o + 1), n),
                          u = i.indexOf(",");
                        return -1 === u
                          ? n(a, i.trim(), "", s)
                          : n(
                              a,
                              i.substring(0, u).trim(),
                              i.substring(u + 1).trim(),
                              s
                            );
                      })(n, function (t, e) {
                        e && i._map.get(e) && (r = "@apply ".concat(e, ";"));
                      }),
                    !r)
                  )
                    return t;
                  var a = this._consumeCssProperties("" + r, o),
                    s = t.slice(0, t.indexOf("--")),
                    u = this._cssTextToMap(a, !0),
                    c = u,
                    l = this._map.get(e),
                    f = l && l.properties;
                  f
                    ? (c = Object.assign(Object.create(f), u))
                    : this._map.set(e, c);
                  var h,
                    p,
                    d = [],
                    y = !1;
                  for (h in c)
                    void 0 === (p = u[h]) && (p = "initial"),
                      !f || h in f || (y = !0),
                      d.push(
                        "".concat(e).concat("_-_").concat(h, ": ").concat(p)
                      );
                  return (
                    y && this._invalidateMixinEntry(l),
                    l && (l.properties = c),
                    n && (s = "".concat(t, ";").concat(s)),
                    "".concat(s).concat(d.join("; "), ";")
                  );
                },
              },
            ]),
            t
          );
        })();
      (D.prototype.detectMixin = D.prototype.detectMixin),
        (D.prototype.transformStyle = D.prototype.transformStyle),
        (D.prototype.transformCustomStyle = D.prototype.transformCustomStyle),
        (D.prototype.transformRules = D.prototype.transformRules),
        (D.prototype.transformRule = D.prototype.transformRule),
        (D.prototype.transformTemplate = D.prototype.transformTemplate),
        (D.prototype._separator = "_-_"),
        Object.defineProperty(D.prototype, "invalidCallback", {
          get: function () {
            return I;
          },
          set: function (t) {
            I = t;
          },
        });
      var M = D,
        L = {},
        F = "_applyShimCurrentVersion",
        H = "_applyShimNextVersion",
        z = "_applyShimValidatingVersion",
        B = Promise.resolve();
      function q(t) {
        var e = L[t];
        e &&
          (function (t) {
            (t[F] = t[F] || 0), (t[z] = t[z] || 0), (t[H] = (t[H] || 0) + 1);
          })(e);
      }
      function Y(t) {
        return t[F] === t[H];
      }
      function V(t) {
        return !Y(t) && t[z] === t[H];
      }
      function U(t) {
        (t[z] = t[H]),
          t._validating ||
            ((t._validating = !0),
            B.then(function () {
              (t[F] = t[H]), (t._validating = !1);
            }));
      }
      n(130);
      function $(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var J = new M(),
        X = (function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.customStyleInterface = null),
              (J.invalidCallback = q);
          }
          var e, n, r;
          return (
            (e = t),
            (n = [
              {
                key: "ensure",
                value: function () {
                  var t = this;
                  this.customStyleInterface ||
                    (window.ShadyCSS.CustomStyleInterface &&
                      ((this.customStyleInterface =
                        window.ShadyCSS.CustomStyleInterface),
                      (this.customStyleInterface.transformCallback = function (
                        t
                      ) {
                        J.transformCustomStyle(t);
                      }),
                      (this.customStyleInterface.validateCallback = function () {
                        requestAnimationFrame(function () {
                          t.customStyleInterface.enqueued &&
                            t.flushCustomStyles();
                        });
                      })));
                },
              },
              {
                key: "prepareTemplate",
                value: function (t, e) {
                  if ((this.ensure(), !k(t))) {
                    L[e] = t;
                    var n = J.transformTemplate(t, e);
                    t._styleAst = n;
                  }
                },
              },
              {
                key: "flushCustomStyles",
                value: function () {
                  if ((this.ensure(), this.customStyleInterface)) {
                    var t = this.customStyleInterface.processStyles();
                    if (this.customStyleInterface.enqueued) {
                      for (var e = 0; e < t.length; e++) {
                        var n = t[e],
                          r = this.customStyleInterface.getStyleForCustomStyle(
                            n
                          );
                        r && J.transformCustomStyle(r);
                      }
                      this.customStyleInterface.enqueued = !1;
                    }
                  }
                },
              },
              {
                key: "styleSubtree",
                value: function (t, e) {
                  if ((this.ensure(), e && Object(C.c)(t, e), t.shadowRoot)) {
                    this.styleElement(t);
                    for (
                      var n = t.shadowRoot.children || t.shadowRoot.childNodes,
                        r = 0;
                      r < n.length;
                      r++
                    )
                      this.styleSubtree(n[r]);
                  } else
                    for (
                      var o = t.children || t.childNodes, i = 0;
                      i < o.length;
                      i++
                    )
                      this.styleSubtree(o[i]);
                },
              },
              {
                key: "styleElement",
                value: function (t) {
                  this.ensure();
                  var e = (function (t) {
                      var e = t.localName,
                        n = "",
                        r = "";
                      return (
                        e
                          ? e.indexOf("-") > -1
                            ? (n = e)
                            : ((r = e),
                              (n =
                                (t.getAttribute && t.getAttribute("is")) || ""))
                          : ((n = t.is), (r = t.extends)),
                        {
                          is: n,
                          typeExtension: r,
                        }
                      );
                    })(t).is,
                    n = L[e];
                  if ((!n || !k(n)) && n && !Y(n)) {
                    V(n) || (this.prepareTemplate(n, e), U(n));
                    var r = t.shadowRoot;
                    if (r) {
                      var o = r.querySelector("style");
                      o &&
                        ((o.__cssRules = n._styleAst),
                        (o.textContent = b(n._styleAst)));
                    }
                  }
                },
              },
              {
                key: "styleDocument",
                value: function (t) {
                  this.ensure(), this.styleSubtree(document.body, t);
                },
              },
            ]) && $(e.prototype, n),
            r && $(e, r),
            t
          );
        })();
      if (!window.ShadyCSS || !window.ShadyCSS.ScopingShim) {
        var G = new X(),
          W = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface;
        (window.ShadyCSS = {
          prepareTemplate: function (t, e, n) {
            G.flushCustomStyles(), G.prepareTemplate(t, e);
          },
          prepareTemplateStyles: function (t, e, n) {
            window.ShadyCSS.prepareTemplate(t, e, n);
          },
          prepareTemplateDom: function (t, e) {},
          styleSubtree: function (t, e) {
            G.flushCustomStyles(), G.styleSubtree(t, e);
          },
          styleElement: function (t) {
            G.flushCustomStyles(), G.styleElement(t);
          },
          styleDocument: function (t) {
            G.flushCustomStyles(), G.styleDocument(t);
          },
          getComputedStyleValue: function (t, e) {
            return Object(C.b)(t, e);
          },
          flushCustomStyles: function () {
            G.flushCustomStyles();
          },
          nativeCss: r.c,
          nativeShadow: r.d,
          cssBuild: r.a,
          disableRuntime: r.b,
        }),
          W && (window.ShadyCSS.CustomStyleInterface = W);
      }
      window.ShadyCSS.ApplyShim = J;
      var K = n(74),
        Z = n(101),
        Q = n(99),
        tt = n(19);
      function et(t) {
        return (et =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function nt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function rt(t, e, n) {
        return e && nt(t.prototype, e), n && nt(t, n), t;
      }
      function ot(t, e) {
        return (ot =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function it(t) {
        return function () {
          var e,
            n = st(t);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
          ) {
            var r = st(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === et(e) || "function" == typeof e)) return e;
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(this, e);
        };
      }
      function at(t, e, n) {
        return (at =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = st(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function st(t) {
        return (st = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var ut = /:host\(:dir\((ltr|rtl)\)\)/g,
        ct = /([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,
        lt = [],
        ft = null,
        ht = "";
      function pt() {
        ht = document.documentElement.getAttribute("dir");
      }
      function dt(t) {
        t.__autoDirOptOut || t.setAttribute("dir", ht);
      }
      function yt() {
        pt(), (ht = document.documentElement.getAttribute("dir"));
        for (var t = 0; t < lt.length; t++) dt(lt[t]);
      }
      var _t = Object(tt.a)(function (t) {
        ft ||
          (pt(),
          (ft = new MutationObserver(yt)).observe(document.documentElement, {
            attributes: !0,
            attributeFilter: ["dir"],
          }));
        var e = Object(Q.a)(t),
          n = (function (t) {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && ot(t, e);
            })(r, e);
            var n = it(r);
            function r() {
              var t;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, r),
                ((t = n.call(this)).__autoDirOptOut = !1),
                t
              );
            }
            return (
              rt(r, null, [
                {
                  key: "_processStyleText",
                  value: function (t, e) {
                    return (
                      (t = at(st(r), "_processStyleText", this).call(
                        this,
                        t,
                        e
                      )),
                      (t = this._replaceDirInCssText(t))
                    );
                  },
                },
                {
                  key: "_replaceDirInCssText",
                  value: function (t) {
                    var e = t;
                    return (
                      t !==
                        (e = (e = e.replace(ut, ':host([dir="$1"])')).replace(
                          ct,
                          ':host([dir="$2"]) $1'
                        )) && (this.__activateDir = !0),
                      e
                    );
                  },
                },
              ]),
              rt(r, [
                {
                  key: "ready",
                  value: function () {
                    at(st(r.prototype), "ready", this).call(this),
                      (this.__autoDirOptOut = this.hasAttribute("dir"));
                  },
                },
                {
                  key: "connectedCallback",
                  value: function () {
                    e.prototype.connectedCallback &&
                      at(st(r.prototype), "connectedCallback", this).call(this),
                      this.constructor.__activateDir &&
                        (ft && ft.takeRecords().length && yt(),
                        lt.push(this),
                        dt(this));
                  },
                },
                {
                  key: "disconnectedCallback",
                  value: function () {
                    if (
                      (e.prototype.disconnectedCallback &&
                        at(st(r.prototype), "disconnectedCallback", this).call(
                          this
                        ),
                      this.constructor.__activateDir)
                    ) {
                      var t = lt.indexOf(this);
                      t > -1 && lt.splice(t, 1);
                    }
                  },
                },
              ]),
              r
            );
          })();
        return (n.__activateDir = !1), n;
      });
      n(80);
      function vt() {
        document.body.removeAttribute("unresolved");
      }
      "interactive" === document.readyState ||
      "complete" === document.readyState
        ? vt()
        : window.addEventListener("DOMContentLoaded", vt);
      var mt = n(9),
        bt = n(59),
        gt = n(36),
        Ot = n(32),
        Pt = n(57);
      function wt(t) {
        return (wt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function St(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return kt(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return kt(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return kt(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function kt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Ct(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Et(t, e, n) {
        return (Et =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = Rt(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function Tt(t, e) {
        return (Tt =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function jt(t) {
        return function () {
          var e,
            n = Rt(t);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
          ) {
            var r = Rt(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === wt(e) || "function" == typeof e)) return e;
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t);
          })(this, e);
        };
      }
      function Rt(t) {
        return (Rt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      n.d(e, "a", function () {
        return At;
      });
      var xt = window.ShadyCSS,
        At = Object(tt.a)(function (t) {
          var e = _t(Object(Z.a)(Object(K.a)(t))),
            n = { x: "pan-x", y: "pan-y", none: "none", all: "auto" },
            r = (function (t) {
              !(function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  e && Tt(t, e);
              })(s, e);
              var r,
                o,
                i,
                a = jt(s);
              function s() {
                var t;
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, s),
                  (t = a.call(this)).isAttached,
                  t.__boundListeners,
                  t._debouncers,
                  t._applyListeners(),
                  t
                );
              }
              return (
                (r = s),
                (i = [
                  {
                    key: "importMeta",
                    get: function () {
                      return this.prototype.importMeta;
                    },
                  },
                ]),
                (o = [
                  { key: "created", value: function () {} },
                  {
                    key: "connectedCallback",
                    value: function () {
                      Et(Rt(s.prototype), "connectedCallback", this).call(this),
                        (this.isAttached = !0),
                        this.attached();
                    },
                  },
                  { key: "attached", value: function () {} },
                  {
                    key: "disconnectedCallback",
                    value: function () {
                      Et(Rt(s.prototype), "disconnectedCallback", this).call(
                        this
                      ),
                        (this.isAttached = !1),
                        this.detached();
                    },
                  },
                  { key: "detached", value: function () {} },
                  {
                    key: "attributeChangedCallback",
                    value: function (t, e, n, r) {
                      e !== n &&
                        (Et(
                          Rt(s.prototype),
                          "attributeChangedCallback",
                          this
                        ).call(this, t, e, n, r),
                        this.attributeChanged(t, e, n));
                    },
                  },
                  {
                    key: "attributeChanged",
                    value: function (t, e, n) {},
                  },
                  {
                    key: "_initializeProperties",
                    value: function () {
                      var t = Object.getPrototypeOf(this);
                      t.hasOwnProperty("__hasRegisterFinished") ||
                        ((t.__hasRegisterFinished = !0), this._registered()),
                        Et(Rt(s.prototype), "_initializeProperties", this).call(
                          this
                        ),
                        (this.root = this),
                        this.created();
                    },
                  },
                  { key: "_registered", value: function () {} },
                  {
                    key: "ready",
                    value: function () {
                      this._ensureAttributes(),
                        Et(Rt(s.prototype), "ready", this).call(this);
                    },
                  },
                  {
                    key: "_ensureAttributes",
                    value: function () {},
                  },
                  {
                    key: "_applyListeners",
                    value: function () {},
                  },
                  {
                    key: "serialize",
                    value: function (t) {
                      return this._serializeValue(t);
                    },
                  },
                  {
                    key: "deserialize",
                    value: function (t, e) {
                      return this._deserializeValue(t, e);
                    },
                  },
                  {
                    key: "reflectPropertyToAttribute",
                    value: function (t, e, n) {
                      this._propertyToAttribute(t, e, n);
                    },
                  },
                  {
                    key: "serializeValueToAttribute",
                    value: function (t, e, n) {
                      this._valueToNodeAttribute(n || this, t, e);
                    },
                  },
                  {
                    key: "extend",
                    value: function (t, e) {
                      if (!t || !e) return t || e;
                      for (
                        var n, r = Object.getOwnPropertyNames(e), o = 0;
                        o < r.length && (n = r[o]);
                        o++
                      ) {
                        var i = Object.getOwnPropertyDescriptor(e, n);
                        i && Object.defineProperty(t, n, i);
                      }
                      return t;
                    },
                  },
                  {
                    key: "mixin",
                    value: function (t, e) {
                      for (var n in e) t[n] = e[n];
                      return t;
                    },
                  },
                  {
                    key: "chainObject",
                    value: function (t, e) {
                      return t && e && t !== e && (t.__proto__ = e), t;
                    },
                  },
                  {
                    key: "instanceTemplate",
                    value: function (t) {
                      var e = this.constructor._contentForTemplate(t);
                      return document.importNode(e, !0);
                    },
                  },
                  {
                    key: "fire",
                    value: function (t, e, n) {
                      (n = n || {}), (e = null == e ? {} : e);
                      var r = new Event(t, {
                        bubbles: void 0 === n.bubbles || n.bubbles,
                        cancelable: Boolean(n.cancelable),
                        composed: void 0 === n.composed || n.composed,
                      });
                      return (
                        (r.detail = e), (n.node || this).dispatchEvent(r), r
                      );
                    },
                  },
                  {
                    key: "listen",
                    value: function (t, e, n) {
                      t = t || this;
                      var r =
                          this.__boundListeners ||
                          (this.__boundListeners = new WeakMap()),
                        o = r.get(t);
                      o || ((o = {}), r.set(t, o));
                      var i = e + n;
                      o[i] ||
                        (o[i] = this._addMethodEventListenerToNode(
                          t,
                          e,
                          n,
                          this
                        ));
                    },
                  },
                  {
                    key: "unlisten",
                    value: function (t, e, n) {
                      t = t || this;
                      var r =
                          this.__boundListeners && this.__boundListeners.get(t),
                        o = e + n,
                        i = r && r[o];
                      i &&
                        (this._removeEventListenerFromNode(t, e, i),
                        (r[o] = null));
                    },
                  },
                  {
                    key: "setScrollDirection",
                    value: function (t, e) {
                      Object(bt.e)(e || this, n[t] || "auto");
                    },
                  },
                  {
                    key: "$$",
                    value: function (t) {
                      return this.root.querySelector(t);
                    },
                  },
                  {
                    key: "distributeContent",
                    value: function () {
                      window.ShadyDOM && this.shadowRoot && ShadyDOM.flush();
                    },
                  },
                  {
                    key: "getEffectiveChildNodes",
                    value: function () {
                      return Object(mt.a)(this).getEffectiveChildNodes();
                    },
                  },
                  {
                    key: "queryDistributedElements",
                    value: function (t) {
                      return Object(mt.a)(this).queryDistributedElements(t);
                    },
                  },
                  {
                    key: "getEffectiveChildren",
                    value: function () {
                      return this.getEffectiveChildNodes().filter(function (t) {
                        return t.nodeType === Node.ELEMENT_NODE;
                      });
                    },
                  },
                  {
                    key: "getEffectiveTextContent",
                    value: function () {
                      for (
                        var t, e = this.getEffectiveChildNodes(), n = [], r = 0;
                        (t = e[r]);
                        r++
                      )
                        t.nodeType !== Node.COMMENT_NODE &&
                          n.push(t.textContent);
                      return n.join("");
                    },
                  },
                  {
                    key: "queryEffectiveChildren",
                    value: function (t) {
                      var e = this.queryDistributedElements(t);
                      return e && e[0];
                    },
                  },
                  {
                    key: "queryAllEffectiveChildren",
                    value: function (t) {
                      return this.queryDistributedElements(t);
                    },
                  },
                  {
                    key: "getContentChildNodes",
                    value: function (t) {
                      var e = this.root.querySelector(t || "slot");
                      return e ? Object(mt.a)(e).getDistributedNodes() : [];
                    },
                  },
                  {
                    key: "getContentChildren",
                    value: function (t) {
                      return this.getContentChildNodes(t).filter(function (t) {
                        return t.nodeType === Node.ELEMENT_NODE;
                      });
                    },
                  },
                  {
                    key: "isLightDescendant",
                    value: function (t) {
                      return (
                        this !== t &&
                        this.contains(t) &&
                        this.getRootNode() === t.getRootNode()
                      );
                    },
                  },
                  {
                    key: "isLocalDescendant",
                    value: function (t) {
                      return this.root === t.getRootNode();
                    },
                  },
                  {
                    key: "scopeSubtree",
                    value: function (t, e) {},
                  },
                  {
                    key: "getComputedStyleValue",
                    value: function (t) {
                      return xt.getComputedStyleValue(this, t);
                    },
                  },
                  {
                    key: "debounce",
                    value: function (t, e, n) {
                      return (
                        (this._debouncers = this._debouncers || {}),
                        (this._debouncers[t] = gt.a.debounce(
                          this._debouncers[t],
                          n > 0 ? Ot.b.after(n) : Ot.a,
                          e.bind(this)
                        ))
                      );
                    },
                  },
                  {
                    key: "isDebouncerActive",
                    value: function (t) {
                      this._debouncers = this._debouncers || {};
                      var e = this._debouncers[t];
                      return !(!e || !e.isActive());
                    },
                  },
                  {
                    key: "flushDebouncer",
                    value: function (t) {
                      this._debouncers = this._debouncers || {};
                      var e = this._debouncers[t];
                      e && e.flush();
                    },
                  },
                  {
                    key: "cancelDebouncer",
                    value: function (t) {
                      this._debouncers = this._debouncers || {};
                      var e = this._debouncers[t];
                      e && e.cancel();
                    },
                  },
                  {
                    key: "async",
                    value: function (t, e) {
                      return e > 0
                        ? Ot.b.run(t.bind(this), e)
                        : ~Ot.a.run(t.bind(this));
                    },
                  },
                  {
                    key: "cancelAsync",
                    value: function (t) {
                      t < 0 ? Ot.a.cancel(~t) : Ot.b.cancel(t);
                    },
                  },
                  {
                    key: "create",
                    value: function (t, e) {
                      var n = document.createElement(t);
                      if (e)
                        if (n.setProperties) n.setProperties(e);
                        else for (var r in e) n[r] = e[r];
                      return n;
                    },
                  },
                  {
                    key: "elementMatches",
                    value: function (t, e) {
                      return Object(mt.b)(e || this, t);
                    },
                  },
                  {
                    key: "toggleAttribute",
                    value: function (t, e) {
                      var n = this;
                      return (
                        3 === arguments.length && (n = arguments[2]),
                        1 == arguments.length && (e = !n.hasAttribute(t)),
                        e
                          ? (n.setAttribute(t, ""), !0)
                          : (n.removeAttribute(t), !1)
                      );
                    },
                  },
                  {
                    key: "toggleClass",
                    value: function (t, e, n) {
                      (n = n || this),
                        1 == arguments.length && (e = !n.classList.contains(t)),
                        e ? n.classList.add(t) : n.classList.remove(t);
                    },
                  },
                  {
                    key: "transform",
                    value: function (t, e) {
                      ((e = e || this).style.webkitTransform = t),
                        (e.style.transform = t);
                    },
                  },
                  {
                    key: "translate3d",
                    value: function (t, e, n, r) {
                      (r = r || this),
                        this.transform(
                          "translate3d(" + t + "," + e + "," + n + ")",
                          r
                        );
                    },
                  },
                  {
                    key: "arrayDelete",
                    value: function (t, e) {
                      var n;
                      if (Array.isArray(t)) {
                        if ((n = t.indexOf(e)) >= 0) return t.splice(n, 1);
                      } else if ((n = Object(Pt.a)(this, t).indexOf(e)) >= 0)
                        return this.splice(t, n, 1);
                      return null;
                    },
                  },
                  {
                    key: "_logger",
                    value: function (t, e) {
                      var n;
                      switch (
                        (Array.isArray(e) &&
                          1 === e.length &&
                          Array.isArray(e[0]) &&
                          (e = e[0]),
                        t)
                      ) {
                        case "log":
                        case "warn":
                        case "error":
                          (n = console)[t].apply(n, St(e));
                      }
                    },
                  },
                  {
                    key: "_log",
                    value: function () {
                      for (
                        var t = arguments.length, e = new Array(t), n = 0;
                        n < t;
                        n++
                      )
                        e[n] = arguments[n];
                      this._logger("log", e);
                    },
                  },
                  {
                    key: "_warn",
                    value: function () {
                      for (
                        var t = arguments.length, e = new Array(t), n = 0;
                        n < t;
                        n++
                      )
                        e[n] = arguments[n];
                      this._logger("warn", e);
                    },
                  },
                  {
                    key: "_error",
                    value: function () {
                      for (
                        var t = arguments.length, e = new Array(t), n = 0;
                        n < t;
                        n++
                      )
                        e[n] = arguments[n];
                      this._logger("error", e);
                    },
                  },
                  {
                    key: "_logf",
                    value: function (t) {
                      for (
                        var e = arguments.length,
                          n = new Array(e > 1 ? e - 1 : 0),
                          r = 1;
                        r < e;
                        r++
                      )
                        n[r - 1] = arguments[r];
                      return ["[%s::%s]", this.is, t].concat(n);
                    },
                  },
                  {
                    key: "domHost",
                    get: function () {
                      var t = this.getRootNode();
                      return t instanceof DocumentFragment ? t.host : t;
                    },
                  },
                ]) && Ct(r.prototype, o),
                i && Ct(r, i),
                s
              );
            })();
          return (r.prototype.is = ""), r;
        });
    },
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      var r = n(130),
        o = n(78),
        i = n(76),
        a = new r.a();
      window.ShadyCSS ||
        (window.ShadyCSS = {
          prepareTemplate: function (t, e, n) {},
          prepareTemplateDom: function (t, e) {},
          prepareTemplateStyles: function (t, e, n) {},
          styleSubtree: function (t, e) {
            a.processStyles(), Object(o.c)(t, e);
          },
          styleElement: function (t) {
            a.processStyles();
          },
          styleDocument: function (t) {
            a.processStyles(), Object(o.c)(document.body, t);
          },
          getComputedStyleValue: function (t, e) {
            return Object(o.b)(t, e);
          },
          flushCustomStyles: function () {},
          nativeCss: i.c,
          nativeShadow: i.d,
          cssBuild: i.a,
          disableRuntime: i.b,
        }),
        (window.ShadyCSS.CustomStyleInterface = a);
      var s = n(98);
      function u(t) {
        return (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function c(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function l(t) {
        return function () {
          var e,
            n = _(t);
          if (d()) {
            var r = _(this).constructor;
            e = Reflect.construct(n, arguments, r);
          } else e = n.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === u(e) || "function" == typeof e)) return e;
            return f(t);
          })(this, e);
        };
      }
      function f(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function h(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (h = function (t) {
          if (
            null === t ||
            ((n = t), -1 === Function.toString.call(n).indexOf("[native code]"))
          )
            return t;
          var n;
          if ("function" != typeof t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, r);
          }
          function r() {
            return p(t, arguments, _(this).constructor);
          }
          return (
            (r.prototype = Object.create(t.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            y(r, t)
          );
        })(t);
      }
      function p(t, e, n) {
        return (p = d()
          ? Reflect.construct
          : function (t, e, n) {
              var r = [null];
              r.push.apply(r, e);
              var o = new (Function.bind.apply(t, r))();
              return n && y(o, n.prototype), o;
            }).apply(null, arguments);
      }
      function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function y(t, e) {
        return (y =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function _(t) {
        return (_ = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var v = window.ShadyCSS.CustomStyleInterface,
        m = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && y(t, e);
          })(i, h(HTMLElement));
          var e,
            n,
            r,
            o = l(i);
          function i() {
            var t;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              ((t = o.call(this))._style = null),
              v.addCustomStyle(f(t)),
              t
            );
          }
          return (
            (e = i),
            (n = [
              {
                key: "getStyle",
                value: function () {
                  if (this._style) return this._style;
                  var t = this.querySelector("style");
                  if (!t) return null;
                  this._style = t;
                  var e = t.getAttribute("include");
                  return (
                    e &&
                      (t.removeAttribute("include"),
                      (t.textContent = Object(s.a)(e) + t.textContent)),
                    this.ownerDocument !== window.document &&
                      window.document.head.appendChild(this),
                    this._style
                  );
                },
              },
            ]) && c(e.prototype, n),
            r && c(e, r),
            i
          );
        })();
      window.customElements.define("custom-style", m);
    },
    ,
    function (t, e, n) {
      "use strict";
      var r,
        o = null,
        i = (window.HTMLImports && window.HTMLImports.whenReady) || null;
      function a(t) {
        requestAnimationFrame(function () {
          i
            ? i(t)
            : (o ||
                ((o = new Promise(function (t) {
                  r = t;
                })),
                "complete" === document.readyState
                  ? r()
                  : document.addEventListener("readystatechange", function () {
                      "complete" === document.readyState && r();
                    })),
              o.then(function () {
                t && t();
              }));
        });
      }
      function s(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      n.d(e, "a", function () {
        return f;
      });
      var u = "__shadyCSSCachedStyle",
        c = null,
        l = null,
        f = (function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.customStyles = []),
              (this.enqueued = !1),
              a(function () {
                window.ShadyCSS.flushCustomStyles &&
                  window.ShadyCSS.flushCustomStyles();
              });
          }
          var e, n, r;
          return (
            (e = t),
            (n = [
              {
                key: "enqueueDocumentValidation",
                value: function () {
                  !this.enqueued && l && ((this.enqueued = !0), a(l));
                },
              },
              {
                key: "addCustomStyle",
                value: function (t) {
                  t.__seenByShadyCSS ||
                    ((t.__seenByShadyCSS = !0),
                    this.customStyles.push(t),
                    this.enqueueDocumentValidation());
                },
              },
              {
                key: "getStyleForCustomStyle",
                value: function (t) {
                  return t[u] ? t[u] : t.getStyle ? t.getStyle() : t;
                },
              },
              {
                key: "processStyles",
                value: function () {
                  for (var t = this.customStyles, e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (!n[u]) {
                      var r = this.getStyleForCustomStyle(n);
                      if (r) {
                        var o = r.__appliedElement || r;
                        c && c(o), (n[u] = o);
                      }
                    }
                  }
                  return t;
                },
              },
            ]) && s(e.prototype, n),
            r && s(e, r),
            t
          );
        })();
      (f.prototype.addCustomStyle = f.prototype.addCustomStyle),
        (f.prototype.getStyleForCustomStyle =
          f.prototype.getStyleForCustomStyle),
        (f.prototype.processStyles = f.prototype.processStyles),
        Object.defineProperties(f.prototype, {
          transformCallback: {
            get: function () {
              return c;
            },
            set: function (t) {
              c = t;
            },
          },
          validateCallback: {
            get: function () {
              return l;
            },
            set: function (t) {
              var e = !1;
              l || (e = !0), (l = t), e && this.enqueueDocumentValidation();
            },
          },
        });
    },
  ],
]);
//# sourceMappingURL=chunk.a39fb4d3ed3ccadb5a51.js.map
