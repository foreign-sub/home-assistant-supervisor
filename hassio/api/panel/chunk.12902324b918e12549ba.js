/*! For license information please see chunk.12902324b918e12549ba.js.LICENSE */
(self.webpackJsonp = self.webpackJsonp || []).push([
  [10],
  [
    ,
    ,
    ,
    ,
    function(e, t, n) {
      "use strict";
      var i = n(13),
        o = n(27),
        r = n(19),
        a = 133;
      function s(e, t) {
        for (
          var n = e.element.content,
            i = e.parts,
            o = document.createTreeWalker(n, a, null, !1),
            r = c(i),
            s = i[r],
            l = -1,
            d = 0,
            u = [],
            p = null;
          o.nextNode();

        ) {
          l++;
          var h = o.currentNode;
          for (
            h.previousSibling === p && (p = null),
              t.has(h) && (u.push(h), null === p && (p = h)),
              null !== p && d++;
            void 0 !== s && s.index === l;

          )
            (s.index = null !== p ? -1 : s.index - d), (s = i[(r = c(i, r))]);
        }
        u.forEach(function(e) {
          return e.parentNode.removeChild(e);
        });
      }
      var l = function(e) {
          for (
            var t = 11 === e.nodeType ? 0 : 1,
              n = document.createTreeWalker(e, a, null, !1);
            n.nextNode();

          )
            t++;
          return t;
        },
        c = function(e) {
          for (
            var t =
              (arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : -1) + 1;
            t < e.length;
            t++
          ) {
            var n = e[t];
            if (Object(r.d)(n)) return t;
          }
          return -1;
        };
      var d = n(52),
        u = n(37),
        p = n(51);
      function h(e) {
        return (h =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var f = function(e, t) {
          return "".concat(e, "--").concat(t);
        },
        b = !0;
      void 0 === window.ShadyCSS
        ? (b = !1)
        : void 0 === window.ShadyCSS.prepareTemplateDom &&
          (console.warn(
            "Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."
          ),
          (b = !1));
      var v = function(e) {
          return function(t) {
            var n = f(t.type, e),
              i = u.a.get(n);
            void 0 === i &&
              ((i = { stringsArray: new WeakMap(), keyString: new Map() }),
              u.a.set(n, i));
            var o = i.stringsArray.get(t.strings);
            if (void 0 !== o) return o;
            var a = t.strings.join(r.f);
            if (void 0 === (o = i.keyString.get(a))) {
              var s = t.getTemplateElement();
              b && window.ShadyCSS.prepareTemplateDom(s, e),
                (o = new r.a(t, s)),
                i.keyString.set(a, o);
            }
            return i.stringsArray.set(t.strings, o), o;
          };
        },
        m = ["html", "svg"],
        y = new Set(),
        g = function(e, t, n) {
          y.add(e);
          var i = n ? n.element : document.createElement("template"),
            o = t.querySelectorAll("style"),
            r = o.length;
          if (0 !== r) {
            for (var d = document.createElement("style"), p = 0; p < r; p++) {
              var h = o[p];
              h.parentNode.removeChild(h), (d.textContent += h.textContent);
            }
            !(function(e) {
              m.forEach(function(t) {
                var n = u.a.get(f(t, e));
                void 0 !== n &&
                  n.keyString.forEach(function(e) {
                    var t = e.element.content,
                      n = new Set();
                    Array.from(t.querySelectorAll("style")).forEach(function(
                      e
                    ) {
                      n.add(e);
                    }),
                      s(e, n);
                  });
              });
            })(e);
            var b = i.content;
            n
              ? (function(e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    i = e.element.content,
                    o = e.parts;
                  if (null != n)
                    for (
                      var r = document.createTreeWalker(i, a, null, !1),
                        s = c(o),
                        d = 0,
                        u = -1;
                      r.nextNode();

                    )
                      for (
                        u++,
                          r.currentNode === n &&
                            ((d = l(t)), n.parentNode.insertBefore(t, n));
                        -1 !== s && o[s].index === u;

                      ) {
                        if (d > 0) {
                          for (; -1 !== s; ) (o[s].index += d), (s = c(o, s));
                          return;
                        }
                        s = c(o, s);
                      }
                  else i.appendChild(t);
                })(n, d, b.firstChild)
              : b.insertBefore(d, b.firstChild),
              window.ShadyCSS.prepareTemplateStyles(i, e);
            var v = b.querySelector("style");
            if (window.ShadyCSS.nativeShadow && null !== v)
              t.insertBefore(v.cloneNode(!0), t.firstChild);
            else if (n) {
              b.insertBefore(d, b.firstChild);
              var g = new Set();
              g.add(d), s(n, g);
            }
          } else window.ShadyCSS.prepareTemplateStyles(i, e);
        };
      function _(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function w(e) {
        return (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function x(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function k(e, t) {
        return !t || ("object" !== w(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function S(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (S = function(e) {
          if (
            null === e ||
            ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
          )
            return e;
          var n;
          if ("function" != typeof e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, i);
          }
          function i() {
            return C(e, arguments, A(this).constructor);
          }
          return (
            (i.prototype = Object.create(e.prototype, {
              constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
            O(i, e)
          );
        })(e);
      }
      function C(e, t, n) {
        return (C = (function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Reflect.construct
          : function(e, t, n) {
              var i = [null];
              i.push.apply(i, t);
              var o = new (Function.bind.apply(e, i))();
              return n && O(o, n.prototype), o;
            }).apply(null, arguments);
      }
      function O(e, t) {
        return (O =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function A(e) {
        return (A = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      window.JSCompiler_renameProperty = function(e, t) {
        return e;
      };
      var E = {
          toAttribute: function(e, t) {
            switch (t) {
              case Boolean:
                return e ? "" : null;
              case Object:
              case Array:
                return null == e ? e : JSON.stringify(e);
            }
            return e;
          },
          fromAttribute: function(e, t) {
            switch (t) {
              case Boolean:
                return null !== e;
              case Number:
                return null === e ? null : Number(e);
              case Object:
              case Array:
                return JSON.parse(e);
            }
            return e;
          }
        },
        T = function(e, t) {
          return t !== e && (t == t || e == e);
        },
        I = {
          attribute: !0,
          type: String,
          converter: E,
          reflect: !1,
          hasChanged: T
        },
        z = Promise.resolve(!0),
        j = (function(e) {
          function t() {
            var e;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              ((e = k(this, A(t).call(this)))._updateState = 0),
              (e._instanceProperties = void 0),
              (e._updatePromise = z),
              (e._hasConnectedResolver = void 0),
              (e._changedProperties = new Map()),
              (e._reflectingProperties = void 0),
              e.initialize(),
              e
            );
          }
          var n, i, o;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && O(e, t);
            })(t, S(HTMLElement)),
            (n = t),
            (o = [
              {
                key: "_ensureClassProperties",
                value: function() {
                  var e = this;
                  if (
                    !this.hasOwnProperty(
                      JSCompiler_renameProperty("_classProperties", this)
                    )
                  ) {
                    this._classProperties = new Map();
                    var t = Object.getPrototypeOf(this)._classProperties;
                    void 0 !== t &&
                      t.forEach(function(t, n) {
                        return e._classProperties.set(n, t);
                      });
                  }
                }
              },
              {
                key: "createProperty",
                value: function(e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : I;
                  if (
                    (this._ensureClassProperties(),
                    this._classProperties.set(e, t),
                    !t.noAccessor && !this.prototype.hasOwnProperty(e))
                  ) {
                    var n = "symbol" === w(e) ? Symbol() : "__".concat(e);
                    Object.defineProperty(this.prototype, e, {
                      get: function() {
                        return this[n];
                      },
                      set: function(t) {
                        var i = this[e];
                        (this[n] = t), this._requestUpdate(e, i);
                      },
                      configurable: !0,
                      enumerable: !0
                    });
                  }
                }
              },
              {
                key: "finalize",
                value: function() {
                  var e = Object.getPrototypeOf(this);
                  if (
                    (e.hasOwnProperty("finalized") || e.finalize(),
                    (this.finalized = !0),
                    this._ensureClassProperties(),
                    (this._attributeToPropertyMap = new Map()),
                    this.hasOwnProperty(
                      JSCompiler_renameProperty("properties", this)
                    ))
                  ) {
                    var t = this.properties,
                      n = [].concat(
                        _(Object.getOwnPropertyNames(t)),
                        _(
                          "function" == typeof Object.getOwnPropertySymbols
                            ? Object.getOwnPropertySymbols(t)
                            : []
                        )
                      ),
                      i = !0,
                      o = !1,
                      r = void 0;
                    try {
                      for (
                        var a, s = n[Symbol.iterator]();
                        !(i = (a = s.next()).done);
                        i = !0
                      ) {
                        var l = a.value;
                        this.createProperty(l, t[l]);
                      }
                    } catch (c) {
                      (o = !0), (r = c);
                    } finally {
                      try {
                        i || null == s.return || s.return();
                      } finally {
                        if (o) throw r;
                      }
                    }
                  }
                }
              },
              {
                key: "_attributeNameForProperty",
                value: function(e, t) {
                  var n = t.attribute;
                  return !1 === n
                    ? void 0
                    : "string" == typeof n
                    ? n
                    : "string" == typeof e
                    ? e.toLowerCase()
                    : void 0;
                }
              },
              {
                key: "_valueHasChanged",
                value: function(e, t) {
                  return (arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : T)(e, t);
                }
              },
              {
                key: "_propertyValueFromAttribute",
                value: function(e, t) {
                  var n = t.type,
                    i = t.converter || E,
                    o = "function" == typeof i ? i : i.fromAttribute;
                  return o ? o(e, n) : e;
                }
              },
              {
                key: "_propertyValueToAttribute",
                value: function(e, t) {
                  if (void 0 !== t.reflect) {
                    var n = t.type,
                      i = t.converter;
                    return ((i && i.toAttribute) || E.toAttribute)(e, n);
                  }
                }
              },
              {
                key: "observedAttributes",
                get: function() {
                  var e = this;
                  this.finalize();
                  var t = [];
                  return (
                    this._classProperties.forEach(function(n, i) {
                      var o = e._attributeNameForProperty(i, n);
                      void 0 !== o &&
                        (e._attributeToPropertyMap.set(o, i), t.push(o));
                    }),
                    t
                  );
                }
              }
            ]),
            (i = [
              {
                key: "initialize",
                value: function() {
                  this._saveInstanceProperties(), this._requestUpdate();
                }
              },
              {
                key: "_saveInstanceProperties",
                value: function() {
                  var e = this;
                  this.constructor._classProperties.forEach(function(t, n) {
                    if (e.hasOwnProperty(n)) {
                      var i = e[n];
                      delete e[n],
                        e._instanceProperties ||
                          (e._instanceProperties = new Map()),
                        e._instanceProperties.set(n, i);
                    }
                  });
                }
              },
              {
                key: "_applyInstanceProperties",
                value: function() {
                  var e = this;
                  this._instanceProperties.forEach(function(t, n) {
                    return (e[n] = t);
                  }),
                    (this._instanceProperties = void 0);
                }
              },
              {
                key: "connectedCallback",
                value: function() {
                  (this._updateState = 32 | this._updateState),
                    this._hasConnectedResolver &&
                      (this._hasConnectedResolver(),
                      (this._hasConnectedResolver = void 0));
                }
              },
              { key: "disconnectedCallback", value: function() {} },
              {
                key: "attributeChangedCallback",
                value: function(e, t, n) {
                  t !== n && this._attributeToProperty(e, n);
                }
              },
              {
                key: "_propertyToAttribute",
                value: function(e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : I,
                    i = this.constructor,
                    o = i._attributeNameForProperty(e, n);
                  if (void 0 !== o) {
                    var r = i._propertyValueToAttribute(t, n);
                    if (void 0 === r) return;
                    (this._updateState = 8 | this._updateState),
                      null == r
                        ? this.removeAttribute(o)
                        : this.setAttribute(o, r),
                      (this._updateState = -9 & this._updateState);
                  }
                }
              },
              {
                key: "_attributeToProperty",
                value: function(e, t) {
                  if (!(8 & this._updateState)) {
                    var n = this.constructor,
                      i = n._attributeToPropertyMap.get(e);
                    if (void 0 !== i) {
                      var o = n._classProperties.get(i) || I;
                      (this._updateState = 16 | this._updateState),
                        (this[i] = n._propertyValueFromAttribute(t, o)),
                        (this._updateState = -17 & this._updateState);
                    }
                  }
                }
              },
              {
                key: "_requestUpdate",
                value: function(e, t) {
                  var n = !0;
                  if (void 0 !== e) {
                    var i = this.constructor,
                      o = i._classProperties.get(e) || I;
                    i._valueHasChanged(this[e], t, o.hasChanged)
                      ? (this._changedProperties.has(e) ||
                          this._changedProperties.set(e, t),
                        !0 !== o.reflect ||
                          16 & this._updateState ||
                          (void 0 === this._reflectingProperties &&
                            (this._reflectingProperties = new Map()),
                          this._reflectingProperties.set(e, o)))
                      : (n = !1);
                  }
                  !this._hasRequestedUpdate && n && this._enqueueUpdate();
                }
              },
              {
                key: "requestUpdate",
                value: function(e, t) {
                  return this._requestUpdate(e, t), this.updateComplete;
                }
              },
              {
                key: "_enqueueUpdate",
                value: function() {
                  var e,
                    t,
                    n,
                    i,
                    o = this;
                  return regeneratorRuntime.async(
                    function(r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (this._updateState = 4 | this._updateState),
                              (n = this._updatePromise),
                              (this._updatePromise = new Promise(function(
                                n,
                                i
                              ) {
                                (e = n), (t = i);
                              })),
                              (r.prev = 3),
                              (r.next = 6),
                              regeneratorRuntime.awrap(n)
                            );
                          case 6:
                            r.next = 10;
                            break;
                          case 8:
                            (r.prev = 8), (r.t0 = r.catch(3));
                          case 10:
                            if (this._hasConnected) {
                              r.next = 13;
                              break;
                            }
                            return (
                              (r.next = 13),
                              regeneratorRuntime.awrap(
                                new Promise(function(e) {
                                  return (o._hasConnectedResolver = e);
                                })
                              )
                            );
                          case 13:
                            if (
                              ((r.prev = 13),
                              null == (i = this.performUpdate()))
                            ) {
                              r.next = 18;
                              break;
                            }
                            return (r.next = 18), regeneratorRuntime.awrap(i);
                          case 18:
                            r.next = 23;
                            break;
                          case 20:
                            (r.prev = 20), (r.t1 = r.catch(13)), t(r.t1);
                          case 23:
                            e(!this._hasRequestedUpdate);
                          case 24:
                          case "end":
                            return r.stop();
                        }
                    },
                    null,
                    this,
                    [
                      [3, 8],
                      [13, 20]
                    ]
                  );
                }
              },
              {
                key: "performUpdate",
                value: function() {
                  this._instanceProperties && this._applyInstanceProperties();
                  var e = !1,
                    t = this._changedProperties;
                  try {
                    (e = this.shouldUpdate(t)) && this.update(t);
                  } catch (n) {
                    throw ((e = !1), n);
                  } finally {
                    this._markUpdated();
                  }
                  e &&
                    (1 & this._updateState ||
                      ((this._updateState = 1 | this._updateState),
                      this.firstUpdated(t)),
                    this.updated(t));
                }
              },
              {
                key: "_markUpdated",
                value: function() {
                  (this._changedProperties = new Map()),
                    (this._updateState = -5 & this._updateState);
                }
              },
              {
                key: "_getUpdateComplete",
                value: function() {
                  return this._updatePromise;
                }
              },
              {
                key: "shouldUpdate",
                value: function(e) {
                  return !0;
                }
              },
              {
                key: "update",
                value: function(e) {
                  var t = this;
                  void 0 !== this._reflectingProperties &&
                    this._reflectingProperties.size > 0 &&
                    (this._reflectingProperties.forEach(function(e, n) {
                      return t._propertyToAttribute(n, t[n], e);
                    }),
                    (this._reflectingProperties = void 0));
                }
              },
              { key: "updated", value: function(e) {} },
              { key: "firstUpdated", value: function(e) {} },
              {
                key: "_hasConnected",
                get: function() {
                  return 32 & this._updateState;
                }
              },
              {
                key: "_hasRequestedUpdate",
                get: function() {
                  return 4 & this._updateState;
                }
              },
              {
                key: "hasUpdated",
                get: function() {
                  return 1 & this._updateState;
                }
              },
              {
                key: "updateComplete",
                get: function() {
                  return this._getUpdateComplete();
                }
              }
            ]) && x(n.prototype, i),
            o && x(n, o),
            t
          );
        })();
      j.finalized = !0;
      var R = function(e) {
          return function(t) {
            return "function" == typeof t
              ? (function(e, t) {
                  return window.customElements.define(e, t), t;
                })(e, t)
              : (function(e, t) {
                  return {
                    kind: t.kind,
                    elements: t.elements,
                    finisher: function(t) {
                      window.customElements.define(e, t);
                    }
                  };
                })(e, t);
          };
        },
        B = function(e, t) {
          return "method" !== t.kind || !t.descriptor || "value" in t.descriptor
            ? {
                kind: "field",
                key: Symbol(),
                placement: "own",
                descriptor: {},
                initializer: function() {
                  "function" == typeof t.initializer &&
                    (this[t.key] = t.initializer.call(this));
                },
                finisher: function(n) {
                  n.createProperty(t.key, e);
                }
              }
            : Object.assign({}, t, {
                finisher: function(n) {
                  n.createProperty(t.key, e);
                }
              });
        },
        P = function(e, t, n) {
          t.constructor.createProperty(n, e);
        };
      function N(e) {
        return function(t, n) {
          return void 0 !== n ? P(e, t, n) : B(e, t);
        };
      }
      function L(e) {
        return function(t, n) {
          var i = {
            get: function() {
              return this.renderRoot.querySelector(e);
            },
            enumerable: !0,
            configurable: !0
          };
          return void 0 !== n ? F(i, t, n) : M(i, t);
        };
      }
      var F = function(e, t, n) {
          Object.defineProperty(t, n, e);
        },
        M = function(e, t) {
          return {
            kind: "method",
            placement: "prototype",
            key: t.key,
            descriptor: e
          };
        };
      function D(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var H =
          "adoptedStyleSheets" in Document.prototype &&
          "replace" in CSSStyleSheet.prototype,
        V = Symbol(),
        U = (function() {
          function e(t, n) {
            if (
              ((function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              n !== V)
            )
              throw new Error(
                "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
              );
            this.cssText = t;
          }
          var t, n, i;
          return (
            (t = e),
            (n = [
              {
                key: "toString",
                value: function() {
                  return this.cssText;
                }
              },
              {
                key: "styleSheet",
                get: function() {
                  return (
                    void 0 === this._styleSheet &&
                      (H
                        ? ((this._styleSheet = new CSSStyleSheet()),
                          this._styleSheet.replaceSync(this.cssText))
                        : (this._styleSheet = null)),
                    this._styleSheet
                  );
                }
              }
            ]) && D(t.prototype, n),
            i && D(t, i),
            e
          );
        })(),
        $ = function(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            n[i - 1] = arguments[i];
          var o = n.reduce(function(t, n, i) {
            return (
              t +
              (function(e) {
                if (e instanceof U) return e.cssText;
                if ("number" == typeof e) return e;
                throw new Error(
                  "Value passed to 'css' function must be a 'css' function result: ".concat(
                    e,
                    ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."
                  )
                );
              })(n) +
              e[i + 1]
            );
          }, e[0]);
          return new U(o, V);
        };
      function K(e) {
        return (K =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function q(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function W(e, t) {
        return !t || ("object" !== K(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function Z(e, t, n) {
        return (Z =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = X(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function X(e) {
        return (X = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Y(e, t) {
        return (Y =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      n.d(t, "a", function() {
        return J;
      }),
        n.d(t, "b", function() {
          return j;
        }),
        n.d(t, "d", function() {
          return R;
        }),
        n.d(t, "f", function() {
          return N;
        }),
        n.d(t, "g", function() {
          return L;
        }),
        n.d(t, "e", function() {
          return i.g;
        }),
        n.d(t, "c", function() {
          return $;
        }),
        (window.litElementVersions || (window.litElementVersions = [])).push(
          "2.2.1"
        );
      var G = function(e) {
          return e.flat
            ? e.flat(1 / 0)
            : (function e(t) {
                for (
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    i = 0,
                    o = t.length;
                  i < o;
                  i++
                ) {
                  var r = t[i];
                  Array.isArray(r) ? e(r, n) : n.push(r);
                }
                return n;
              })(e);
        },
        J = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              W(this, X(t).apply(this, arguments))
            );
          }
          var n, o, r;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && Y(e, t);
            })(t, j),
            (n = t),
            (r = [
              {
                key: "finalize",
                value: function() {
                  Z(X(t), "finalize", this).call(this),
                    (this._styles = this.hasOwnProperty(
                      JSCompiler_renameProperty("styles", this)
                    )
                      ? this._getUniqueStyles()
                      : this._styles || []);
                }
              },
              {
                key: "_getUniqueStyles",
                value: function() {
                  var e = this.styles,
                    t = [];
                  Array.isArray(e)
                    ? G(e)
                        .reduceRight(function(e, t) {
                          return e.add(t), e;
                        }, new Set())
                        .forEach(function(e) {
                          return t.unshift(e);
                        })
                    : e && t.push(e);
                  return t;
                }
              }
            ]),
            (o = [
              {
                key: "initialize",
                value: function() {
                  Z(X(t.prototype), "initialize", this).call(this),
                    (this.renderRoot = this.createRenderRoot()),
                    window.ShadowRoot &&
                      this.renderRoot instanceof window.ShadowRoot &&
                      this.adoptStyles();
                }
              },
              {
                key: "createRenderRoot",
                value: function() {
                  return this.attachShadow({ mode: "open" });
                }
              },
              {
                key: "adoptStyles",
                value: function() {
                  var e = this.constructor._styles;
                  0 !== e.length &&
                    (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow
                      ? H
                        ? (this.renderRoot.adoptedStyleSheets = e.map(function(
                            e
                          ) {
                            return e.styleSheet;
                          }))
                        : (this._needsShimAdoptedStyleSheets = !0)
                      : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
                          e.map(function(e) {
                            return e.cssText;
                          }),
                          this.localName
                        ));
                }
              },
              {
                key: "connectedCallback",
                value: function() {
                  Z(X(t.prototype), "connectedCallback", this).call(this),
                    this.hasUpdated &&
                      void 0 !== window.ShadyCSS &&
                      window.ShadyCSS.styleElement(this);
                }
              },
              {
                key: "update",
                value: function(e) {
                  var n = this;
                  Z(X(t.prototype), "update", this).call(this, e);
                  var o = this.render();
                  o instanceof i.d &&
                    this.constructor.render(o, this.renderRoot, {
                      scopeName: this.localName,
                      eventContext: this
                    }),
                    this._needsShimAdoptedStyleSheets &&
                      ((this._needsShimAdoptedStyleSheets = !1),
                      this.constructor._styles.forEach(function(e) {
                        var t = document.createElement("style");
                        (t.textContent = e.cssText),
                          n.renderRoot.appendChild(t);
                      }));
                }
              },
              { key: "render", value: function() {} }
            ]) && q(n.prototype, o),
            r && q(n, r),
            t
          );
        })();
      (J.finalized = !0),
        (J.render = function(e, t, n) {
          if (!n || "object" !== h(n) || !n.scopeName)
            throw new Error("The `scopeName` option is required.");
          var i = n.scopeName,
            r = d.a.has(t),
            a = b && 11 === t.nodeType && !!t.host,
            s = a && !y.has(i),
            l = s ? document.createDocumentFragment() : t;
          if (
            (Object(d.b)(e, l, Object.assign({ templateFactory: v(i) }, n)), s)
          ) {
            var c = d.a.get(l);
            d.a.delete(l);
            var u = c.value instanceof p.a ? c.value.template : void 0;
            g(i, l, u),
              Object(o.b)(t, t.firstChild),
              t.appendChild(l),
              d.a.set(t, c);
          }
          !r && a && window.ShadyCSS.styleElement(t.host);
        });
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      "use strict";
      n(3);
      var i = n(5);
      function o() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n<custom-style>\n  <style is="custom-style">\n    [hidden] {\n      display: none !important;\n    }\n  </style>\n</custom-style>\n<custom-style>\n  <style is="custom-style">\n    html {\n\n      --layout: {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      };\n\n      --layout-inline: {\n        display: -ms-inline-flexbox;\n        display: -webkit-inline-flex;\n        display: inline-flex;\n      };\n\n      --layout-horizontal: {\n        @apply --layout;\n\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      };\n\n      --layout-horizontal-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: row-reverse;\n        -webkit-flex-direction: row-reverse;\n        flex-direction: row-reverse;\n      };\n\n      --layout-vertical: {\n        @apply --layout;\n\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      };\n\n      --layout-vertical-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: column-reverse;\n        -webkit-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n      };\n\n      --layout-wrap: {\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n      };\n\n      --layout-wrap-reverse: {\n        -ms-flex-wrap: wrap-reverse;\n        -webkit-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n      };\n\n      --layout-flex-auto: {\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n      };\n\n      --layout-flex-none: {\n        -ms-flex: none;\n        -webkit-flex: none;\n        flex: none;\n      };\n\n      --layout-flex: {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      };\n\n      --layout-flex-2: {\n        -ms-flex: 2;\n        -webkit-flex: 2;\n        flex: 2;\n      };\n\n      --layout-flex-3: {\n        -ms-flex: 3;\n        -webkit-flex: 3;\n        flex: 3;\n      };\n\n      --layout-flex-4: {\n        -ms-flex: 4;\n        -webkit-flex: 4;\n        flex: 4;\n      };\n\n      --layout-flex-5: {\n        -ms-flex: 5;\n        -webkit-flex: 5;\n        flex: 5;\n      };\n\n      --layout-flex-6: {\n        -ms-flex: 6;\n        -webkit-flex: 6;\n        flex: 6;\n      };\n\n      --layout-flex-7: {\n        -ms-flex: 7;\n        -webkit-flex: 7;\n        flex: 7;\n      };\n\n      --layout-flex-8: {\n        -ms-flex: 8;\n        -webkit-flex: 8;\n        flex: 8;\n      };\n\n      --layout-flex-9: {\n        -ms-flex: 9;\n        -webkit-flex: 9;\n        flex: 9;\n      };\n\n      --layout-flex-10: {\n        -ms-flex: 10;\n        -webkit-flex: 10;\n        flex: 10;\n      };\n\n      --layout-flex-11: {\n        -ms-flex: 11;\n        -webkit-flex: 11;\n        flex: 11;\n      };\n\n      --layout-flex-12: {\n        -ms-flex: 12;\n        -webkit-flex: 12;\n        flex: 12;\n      };\n\n      /* alignment in cross axis */\n\n      --layout-start: {\n        -ms-flex-align: start;\n        -webkit-align-items: flex-start;\n        align-items: flex-start;\n      };\n\n      --layout-center: {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      };\n\n      --layout-end: {\n        -ms-flex-align: end;\n        -webkit-align-items: flex-end;\n        align-items: flex-end;\n      };\n\n      --layout-baseline: {\n        -ms-flex-align: baseline;\n        -webkit-align-items: baseline;\n        align-items: baseline;\n      };\n\n      /* alignment in main axis */\n\n      --layout-start-justified: {\n        -ms-flex-pack: start;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      };\n\n      --layout-center-justified: {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      };\n\n      --layout-end-justified: {\n        -ms-flex-pack: end;\n        -webkit-justify-content: flex-end;\n        justify-content: flex-end;\n      };\n\n      --layout-around-justified: {\n        -ms-flex-pack: distribute;\n        -webkit-justify-content: space-around;\n        justify-content: space-around;\n      };\n\n      --layout-justified: {\n        -ms-flex-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n      };\n\n      --layout-center-center: {\n        @apply --layout-center;\n        @apply --layout-center-justified;\n      };\n\n      /* self alignment */\n\n      --layout-self-start: {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      };\n\n      --layout-self-center: {\n        -ms-align-self: center;\n        -webkit-align-self: center;\n        align-self: center;\n      };\n\n      --layout-self-end: {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      };\n\n      --layout-self-stretch: {\n        -ms-align-self: stretch;\n        -webkit-align-self: stretch;\n        align-self: stretch;\n      };\n\n      --layout-self-baseline: {\n        -ms-align-self: baseline;\n        -webkit-align-self: baseline;\n        align-self: baseline;\n      };\n\n      /* multi-line alignment in main axis */\n\n      --layout-start-aligned: {\n        -ms-flex-line-pack: start;  /* IE10 */\n        -ms-align-content: flex-start;\n        -webkit-align-content: flex-start;\n        align-content: flex-start;\n      };\n\n      --layout-end-aligned: {\n        -ms-flex-line-pack: end;  /* IE10 */\n        -ms-align-content: flex-end;\n        -webkit-align-content: flex-end;\n        align-content: flex-end;\n      };\n\n      --layout-center-aligned: {\n        -ms-flex-line-pack: center;  /* IE10 */\n        -ms-align-content: center;\n        -webkit-align-content: center;\n        align-content: center;\n      };\n\n      --layout-between-aligned: {\n        -ms-flex-line-pack: justify;  /* IE10 */\n        -ms-align-content: space-between;\n        -webkit-align-content: space-between;\n        align-content: space-between;\n      };\n\n      --layout-around-aligned: {\n        -ms-flex-line-pack: distribute;  /* IE10 */\n        -ms-align-content: space-around;\n        -webkit-align-content: space-around;\n        align-content: space-around;\n      };\n\n      /*******************************\n                Other Layout\n      *******************************/\n\n      --layout-block: {\n        display: block;\n      };\n\n      --layout-invisible: {\n        visibility: hidden !important;\n      };\n\n      --layout-relative: {\n        position: relative;\n      };\n\n      --layout-fit: {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-scroll: {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n      };\n\n      --layout-fullbleed: {\n        margin: 0;\n        height: 100vh;\n      };\n\n      /* fixed position */\n\n      --layout-fixed-top: {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n      };\n\n      --layout-fixed-right: {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n      };\n\n      --layout-fixed-bottom: {\n        position: fixed;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-fixed-left: {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n    }\n  </style>\n</custom-style>'
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var r = Object(i.a)(o());
      r.setAttribute("style", "display: none;"),
        document.head.appendChild(r.content);
      var a = document.createElement("style");
      (a.textContent = "[hidden] { display: none !important; }"),
        document.head.appendChild(a);
    },
    function(e, t, n) {
      "use strict";
      n(3), n(88);
      var i = n(5);
      function o() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n<custom-style>\n  <style is="custom-style">\n    html {\n      /*\n       * You can use these generic variables in your elements for easy theming.\n       * For example, if all your elements use `--primary-text-color` as its main\n       * color, then switching from a light to a dark theme is just a matter of\n       * changing the value of `--primary-text-color` in your application.\n       */\n      --primary-text-color: var(--light-theme-text-color);\n      --primary-background-color: var(--light-theme-background-color);\n      --secondary-text-color: var(--light-theme-secondary-color);\n      --disabled-text-color: var(--light-theme-disabled-color);\n      --divider-color: var(--light-theme-divider-color);\n      --error-color: var(--paper-deep-orange-a700);\n\n      /*\n       * Primary and accent colors. Also see color.js for more colors.\n       */\n      --primary-color: var(--paper-indigo-500);\n      --light-primary-color: var(--paper-indigo-100);\n      --dark-primary-color: var(--paper-indigo-700);\n\n      --accent-color: var(--paper-pink-a200);\n      --light-accent-color: var(--paper-pink-a100);\n      --dark-accent-color: var(--paper-pink-a400);\n\n\n      /*\n       * Material Design Light background theme\n       */\n      --light-theme-background-color: #ffffff;\n      --light-theme-base-color: #000000;\n      --light-theme-text-color: var(--paper-grey-900);\n      --light-theme-secondary-color: #737373;  /* for secondary text and icons */\n      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */\n      --light-theme-divider-color: #dbdbdb;\n\n      /*\n       * Material Design Dark background theme\n       */\n      --dark-theme-background-color: var(--paper-grey-900);\n      --dark-theme-base-color: #ffffff;\n      --dark-theme-text-color: #ffffff;\n      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */\n      --dark-theme-disabled-color: #646464;  /* disabled/hint text */\n      --dark-theme-divider-color: #3c3c3c;\n\n      /*\n       * Deprecated values because of their confusing names.\n       */\n      --text-primary-color: var(--dark-theme-text-color);\n      --default-primary-color: var(--primary-color);\n    }\n  </style>\n</custom-style>'
          ],
          [
            '\n<custom-style>\n  <style is="custom-style">\n    html {\n      /*\n       * You can use these generic variables in your elements for easy theming.\n       * For example, if all your elements use \\`--primary-text-color\\` as its main\n       * color, then switching from a light to a dark theme is just a matter of\n       * changing the value of \\`--primary-text-color\\` in your application.\n       */\n      --primary-text-color: var(--light-theme-text-color);\n      --primary-background-color: var(--light-theme-background-color);\n      --secondary-text-color: var(--light-theme-secondary-color);\n      --disabled-text-color: var(--light-theme-disabled-color);\n      --divider-color: var(--light-theme-divider-color);\n      --error-color: var(--paper-deep-orange-a700);\n\n      /*\n       * Primary and accent colors. Also see color.js for more colors.\n       */\n      --primary-color: var(--paper-indigo-500);\n      --light-primary-color: var(--paper-indigo-100);\n      --dark-primary-color: var(--paper-indigo-700);\n\n      --accent-color: var(--paper-pink-a200);\n      --light-accent-color: var(--paper-pink-a100);\n      --dark-accent-color: var(--paper-pink-a400);\n\n\n      /*\n       * Material Design Light background theme\n       */\n      --light-theme-background-color: #ffffff;\n      --light-theme-base-color: #000000;\n      --light-theme-text-color: var(--paper-grey-900);\n      --light-theme-secondary-color: #737373;  /* for secondary text and icons */\n      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */\n      --light-theme-divider-color: #dbdbdb;\n\n      /*\n       * Material Design Dark background theme\n       */\n      --dark-theme-background-color: var(--paper-grey-900);\n      --dark-theme-base-color: #ffffff;\n      --dark-theme-text-color: #ffffff;\n      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */\n      --dark-theme-disabled-color: #646464;  /* disabled/hint text */\n      --dark-theme-divider-color: #3c3c3c;\n\n      /*\n       * Deprecated values because of their confusing names.\n       */\n      --text-primary-color: var(--dark-theme-text-color);\n      --default-primary-color: var(--primary-color);\n    }\n  </style>\n</custom-style>'
          ]
        );
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var r = Object(i.a)(o());
      r.setAttribute("style", "display: none;"),
        document.head.appendChild(r.content);
    },
    ,
    function(e, t, n) {
      "use strict";
      var i = n(18);
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var r = new ((function() {
          function e() {
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }
          var t, n, r;
          return (
            (t = e),
            (n = [
              {
                key: "handleAttributeExpressions",
                value: function(e, t, n, o) {
                  var r = t[0];
                  return "." === r
                    ? new i.f(e, t.slice(1), n).parts
                    : "@" === r
                    ? [new i.d(e, t.slice(1), o.eventContext)]
                    : "?" === r
                    ? [new i.c(e, t.slice(1), n)]
                    : new i.a(e, t, n).parts;
                }
              },
              {
                key: "handleTextExpression",
                value: function(e) {
                  return new i.e(e);
                }
              }
            ]) && o(t.prototype, n),
            r && o(t, r),
            e
          );
        })())(),
        a = n(36),
        s = n(49),
        l = n(27),
        c = n(50),
        d = (n(52), n(37)),
        u = (n(51), n(19));
      n.d(t, "g", function() {
        return p;
      }),
        n.d(t, "f", function() {
          return s.a;
        }),
        n.d(t, "i", function() {
          return l.b;
        }),
        n.d(t, "j", function() {
          return l.c;
        }),
        n.d(t, "h", function() {
          return c.a;
        }),
        n.d(t, "a", function() {
          return i.b;
        }),
        n.d(t, "b", function() {
          return i.e;
        }),
        n.d(t, "c", function() {
          return i.g;
        }),
        n.d(t, "k", function() {
          return d.b;
        }),
        n.d(t, "d", function() {
          return a.b;
        }),
        n.d(t, "e", function() {
          return u.c;
        }),
        (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");
      var p = function(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          n[i - 1] = arguments[i];
        return new a.b(e, n, "html", r);
      };
    },
    ,
    ,
    function(e, t, n) {
      "use strict";
      var i = n(32),
        o = n(4),
        r = n(107),
        a = n(53);
      function s(e) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function l() {
        var e = d([
          '\n      <button id="button"\n              .ripple="',
          '"\n              class="mdc-button ',
          '"\n              ?disabled="',
          '"\n              aria-label="',
          '">\n        <div class="mdc-button__ripple"></div>\n        ',
          '\n        <span class="mdc-button__label">',
          "</span>\n        ",
          "\n        <slot></slot>\n      </button>"
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = d([
          '<span class="material-icons mdc-button__icon">',
          "</span>"
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function d(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function p(e, t) {
        return !t || ("object" !== s(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var b = (function(e) {
        function t() {
          var e;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((e = p(this, h(t).apply(this, arguments))).raised = !1),
            (e.unelevated = !1),
            (e.outlined = !1),
            (e.dense = !1),
            (e.disabled = !1),
            (e.trailingIcon = !1),
            (e.icon = ""),
            (e.label = ""),
            e
          );
        }
        var n, i, s;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && f(e, t);
          })(t, o["a"]),
          (n = t),
          (i = [
            {
              key: "createRenderRoot",
              value: function() {
                return this.attachShadow({ mode: "open", delegatesFocus: !0 });
              }
            },
            {
              key: "focus",
              value: function() {
                var e = this.buttonElement;
                if (e) {
                  var t = e.ripple;
                  t && t.handleFocus(), e.focus();
                }
              }
            },
            {
              key: "blur",
              value: function() {
                var e = this.buttonElement;
                if (e) {
                  var t = e.ripple;
                  t && t.handleBlur(), e.blur();
                }
              }
            },
            {
              key: "render",
              value: function() {
                var e = {
                    "mdc-button--raised": this.raised,
                    "mdc-button--unelevated": this.unelevated,
                    "mdc-button--outlined": this.outlined,
                    "mdc-button--dense": this.dense
                  },
                  t = Object(o.e)(c(), this.icon),
                  n = Object(r.a)({ unbounded: !1 });
                return Object(o.e)(
                  l(),
                  n,
                  Object(a.a)(e),
                  this.disabled,
                  this.label || this.icon,
                  this.icon && !this.trailingIcon ? t : "",
                  this.label,
                  this.icon && this.trailingIcon ? t : ""
                );
              }
            }
          ]) && u(n.prototype, i),
          s && u(n, s),
          t
        );
      })();
      function v() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '.mdc-button{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding:0 8px 0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.37);cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;left:0;height:48px;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.37)}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button .mdc-button__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button:hover .mdc-button__ripple::before{opacity:.04}.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.12}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-button .mdc-button__ripple{position:absolute;width:100%;height:100%;overflow:hidden}.mdc-button:not(.mdc-button--outlined) .mdc-button__ripple{top:0;left:0}.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after,.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after,.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-button--raised:hover .mdc-button__ripple::before,.mdc-button--unelevated:hover .mdc-button__ripple::before{opacity:.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-button{height:36px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;outline:none}:host([disabled]){pointer-events:none}.mdc-button{flex:auto}'
        ]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      Object(i.b)(
        [Object(o.f)({ type: Boolean })],
        b.prototype,
        "raised",
        void 0
      ),
        Object(i.b)(
          [Object(o.f)({ type: Boolean })],
          b.prototype,
          "unelevated",
          void 0
        ),
        Object(i.b)(
          [Object(o.f)({ type: Boolean })],
          b.prototype,
          "outlined",
          void 0
        ),
        Object(i.b)(
          [Object(o.f)({ type: Boolean })],
          b.prototype,
          "dense",
          void 0
        ),
        Object(i.b)(
          [Object(o.f)({ type: Boolean, reflect: !0 })],
          b.prototype,
          "disabled",
          void 0
        ),
        Object(i.b)(
          [Object(o.f)({ type: Boolean })],
          b.prototype,
          "trailingIcon",
          void 0
        ),
        Object(i.b)([Object(o.f)()], b.prototype, "icon", void 0),
        Object(i.b)([Object(o.f)()], b.prototype, "label", void 0),
        Object(i.b)(
          [Object(o.g)("#button")],
          b.prototype,
          "buttonElement",
          void 0
        );
      var m = Object(o.c)(v());
      function y(e) {
        return (y =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function g(e, t) {
        return !t || ("object" !== y(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function _(e) {
        return (_ = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function w(e, t) {
        return (w =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var x = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            g(this, _(t).apply(this, arguments))
          );
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && w(e, t);
          })(t, b),
          t
        );
      })();
      (x.styles = m), (x = Object(i.b)([Object(o.d)("mwc-button")], x));
    },
    function(e, t, n) {
      "use strict";
      n(3), n(10);
      var i = n(6),
        o = n(5),
        r = n(35);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #baseURIAnchor {\n        display: none;\n      }\n\n      #sizedImgDiv {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n\n        display: none;\n      }\n\n      #img {\n        display: block;\n        width: var(--iron-image-width, auto);\n        height: var(--iron-image-height, auto);\n      }\n\n      :host([sizing]) #sizedImgDiv {\n        display: block;\n      }\n\n      :host([sizing]) #img {\n        display: none;\n      }\n\n      #placeholder {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n\n        background-color: inherit;\n        opacity: 1;\n\n        @apply --iron-image-placeholder;\n      }\n\n      #placeholder.faded-out {\n        transition: opacity 0.5s linear;\n        opacity: 0;\n      }\n    </style>\n\n    <a id="baseURIAnchor" href="#"></a>\n    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>\n    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">\n    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>\n'
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        _template: Object(o.a)(a()),
        is: "iron-image",
        properties: {
          src: { type: String, value: "" },
          alt: { type: String, value: null },
          crossorigin: { type: String, value: null },
          preventLoad: { type: Boolean, value: !1 },
          sizing: { type: String, value: null, reflectToAttribute: !0 },
          position: { type: String, value: "center" },
          preload: { type: Boolean, value: !1 },
          placeholder: {
            type: String,
            value: null,
            observer: "_placeholderChanged"
          },
          fade: { type: Boolean, value: !1 },
          loaded: { notify: !0, readOnly: !0, type: Boolean, value: !1 },
          loading: { notify: !0, readOnly: !0, type: Boolean, value: !1 },
          error: { notify: !0, readOnly: !0, type: Boolean, value: !1 },
          width: { observer: "_widthChanged", type: Number, value: null },
          height: { observer: "_heightChanged", type: Number, value: null }
        },
        observers: [
          "_transformChanged(sizing, position)",
          "_loadStateObserver(src, preventLoad)"
        ],
        created: function() {
          this._resolvedSrc = "";
        },
        _imgOnLoad: function() {
          this.$.img.src === this._resolveSrc(this.src) &&
            (this._setLoading(!1), this._setLoaded(!0), this._setError(!1));
        },
        _imgOnError: function() {
          this.$.img.src === this._resolveSrc(this.src) &&
            (this.$.img.removeAttribute("src"),
            (this.$.sizedImgDiv.style.backgroundImage = ""),
            this._setLoading(!1),
            this._setLoaded(!1),
            this._setError(!0));
        },
        _computePlaceholderHidden: function() {
          return !this.preload || (!this.fade && !this.loading && this.loaded);
        },
        _computePlaceholderClassName: function() {
          return this.preload && this.fade && !this.loading && this.loaded
            ? "faded-out"
            : "";
        },
        _computeImgDivHidden: function() {
          return !this.sizing;
        },
        _computeImgDivARIAHidden: function() {
          return "" === this.alt ? "true" : void 0;
        },
        _computeImgDivARIALabel: function() {
          return null !== this.alt
            ? this.alt
            : "" === this.src
            ? ""
            : this._resolveSrc(this.src)
                .replace(/[?|#].*/g, "")
                .split("/")
                .pop();
        },
        _computeImgHidden: function() {
          return !!this.sizing;
        },
        _widthChanged: function() {
          this.style.width = isNaN(this.width) ? this.width : this.width + "px";
        },
        _heightChanged: function() {
          this.style.height = isNaN(this.height)
            ? this.height
            : this.height + "px";
        },
        _loadStateObserver: function(e, t) {
          var n = this._resolveSrc(e);
          n !== this._resolvedSrc &&
            ((this._resolvedSrc = ""),
            this.$.img.removeAttribute("src"),
            (this.$.sizedImgDiv.style.backgroundImage = ""),
            "" === e || t
              ? (this._setLoading(!1), this._setLoaded(!1), this._setError(!1))
              : ((this._resolvedSrc = n),
                (this.$.img.src = this._resolvedSrc),
                (this.$.sizedImgDiv.style.backgroundImage =
                  'url("' + this._resolvedSrc + '")'),
                this._setLoading(!0),
                this._setLoaded(!1),
                this._setError(!1)));
        },
        _placeholderChanged: function() {
          this.$.placeholder.style.backgroundImage = this.placeholder
            ? 'url("' + this.placeholder + '")'
            : "";
        },
        _transformChanged: function() {
          var e = this.$.sizedImgDiv.style,
            t = this.$.placeholder.style;
          (e.backgroundSize = t.backgroundSize = this.sizing),
            (e.backgroundPosition = t.backgroundPosition = this.sizing
              ? this.position
              : ""),
            (e.backgroundRepeat = t.backgroundRepeat = this.sizing
              ? "no-repeat"
              : "");
        },
        _resolveSrc: function(e) {
          var t = Object(r.c)(e, this.$.baseURIAnchor.href);
          return (
            t.length >= 2 &&
              "/" === t[0] &&
              "/" !== t[1] &&
              (t =
                (location.origin || location.protocol + "//" + location.host) +
                t),
            t
          );
        }
      });
      n(39);
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n<dom-module id="paper-material-styles">\n  <template>\n    <style>\n      html {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      .paper-material {\n        @apply --paper-material;\n      }\n      .paper-material[elevation="1"] {\n        @apply --paper-material-elevation-1;\n      }\n      .paper-material[elevation="2"] {\n        @apply --paper-material-elevation-2;\n      }\n      .paper-material[elevation="3"] {\n        @apply --paper-material-elevation-3;\n      }\n      .paper-material[elevation="4"] {\n        @apply --paper-material-elevation-4;\n      }\n      .paper-material[elevation="5"] {\n        @apply --paper-material-elevation-5;\n      }\n\n      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */\n      :host {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      :host(.paper-material) {\n        @apply --paper-material;\n      }\n      :host(.paper-material[elevation="1"]) {\n        @apply --paper-material-elevation-1;\n      }\n      :host(.paper-material[elevation="2"]) {\n        @apply --paper-material-elevation-2;\n      }\n      :host(.paper-material[elevation="3"]) {\n        @apply --paper-material-elevation-3;\n      }\n      :host(.paper-material[elevation="4"]) {\n        @apply --paper-material-elevation-4;\n      }\n      :host(.paper-material[elevation="5"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n  </template>\n</dom-module>'
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      var l = Object(o.a)(s());
      l.setAttribute("style", "display: none;"),
        document.head.appendChild(l.content);
      n(11);
      function c() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style include="paper-material-styles">\n      :host {\n        display: inline-block;\n        position: relative;\n        box-sizing: border-box;\n        background-color: var(--paper-card-background-color, var(--primary-background-color));\n        border-radius: 2px;\n\n        @apply --paper-font-common-base;\n        @apply --paper-card;\n      }\n\n      /* IE 10 support for HTML5 hidden attr */\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      .header {\n        position: relative;\n        border-top-left-radius: inherit;\n        border-top-right-radius: inherit;\n        overflow: hidden;\n\n        @apply --paper-card-header;\n      }\n\n      .header iron-image {\n        display: block;\n        width: 100%;\n        --iron-image-width: 100%;\n        pointer-events: none;\n\n        @apply --paper-card-header-image;\n      }\n\n      .header .title-text {\n        padding: 16px;\n        font-size: 24px;\n        font-weight: 400;\n        color: var(--paper-card-header-color, #000);\n\n        @apply --paper-card-header-text;\n      }\n\n      .header .title-text.over-image {\n        position: absolute;\n        bottom: 0px;\n\n        @apply --paper-card-header-image-text;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n        position:relative;\n\n        @apply --paper-card-content;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n        position:relative;\n\n        @apply --paper-card-actions;\n      }\n\n      :host([elevation="1"]) {\n        @apply --paper-material-elevation-1;\n      }\n\n      :host([elevation="2"]) {\n        @apply --paper-material-elevation-2;\n      }\n\n      :host([elevation="3"]) {\n        @apply --paper-material-elevation-3;\n      }\n\n      :host([elevation="4"]) {\n        @apply --paper-material-elevation-4;\n      }\n\n      :host([elevation="5"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n\n    <div class="header">\n      <iron-image hidden$="[[!image]]" aria-hidden$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>\n      <div hidden$="[[!heading]]" class$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>\n    </div>\n\n    <slot></slot>\n'
          ],
          [
            '\n    <style include="paper-material-styles">\n      :host {\n        display: inline-block;\n        position: relative;\n        box-sizing: border-box;\n        background-color: var(--paper-card-background-color, var(--primary-background-color));\n        border-radius: 2px;\n\n        @apply --paper-font-common-base;\n        @apply --paper-card;\n      }\n\n      /* IE 10 support for HTML5 hidden attr */\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      .header {\n        position: relative;\n        border-top-left-radius: inherit;\n        border-top-right-radius: inherit;\n        overflow: hidden;\n\n        @apply --paper-card-header;\n      }\n\n      .header iron-image {\n        display: block;\n        width: 100%;\n        --iron-image-width: 100%;\n        pointer-events: none;\n\n        @apply --paper-card-header-image;\n      }\n\n      .header .title-text {\n        padding: 16px;\n        font-size: 24px;\n        font-weight: 400;\n        color: var(--paper-card-header-color, #000);\n\n        @apply --paper-card-header-text;\n      }\n\n      .header .title-text.over-image {\n        position: absolute;\n        bottom: 0px;\n\n        @apply --paper-card-header-image-text;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n        position:relative;\n\n        @apply --paper-card-content;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n        position:relative;\n\n        @apply --paper-card-actions;\n      }\n\n      :host([elevation="1"]) {\n        @apply --paper-material-elevation-1;\n      }\n\n      :host([elevation="2"]) {\n        @apply --paper-material-elevation-2;\n      }\n\n      :host([elevation="3"]) {\n        @apply --paper-material-elevation-3;\n      }\n\n      :host([elevation="4"]) {\n        @apply --paper-material-elevation-4;\n      }\n\n      :host([elevation="5"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n\n    <div class="header">\n      <iron-image hidden\\$="[[!image]]" aria-hidden\\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>\n      <div hidden\\$="[[!heading]]" class\\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>\n    </div>\n\n    <slot></slot>\n'
          ]
        );
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        _template: Object(o.a)(c()),
        is: "paper-card",
        properties: {
          heading: { type: String, value: "", observer: "_headingChanged" },
          image: { type: String, value: "" },
          alt: { type: String },
          preloadImage: { type: Boolean, value: !1 },
          fadeImage: { type: Boolean, value: !1 },
          placeholderImage: { type: String, value: null },
          elevation: { type: Number, value: 1, reflectToAttribute: !0 },
          animatedShadow: { type: Boolean, value: !1 },
          animated: {
            type: Boolean,
            reflectToAttribute: !0,
            readOnly: !0,
            computed: "_computeAnimated(animatedShadow)"
          }
        },
        _isHidden: function(e) {
          return e ? "false" : "true";
        },
        _headingChanged: function(e) {
          var t = this.getAttribute("heading"),
            n = this.getAttribute("aria-label");
          ("string" == typeof n && n !== t) ||
            this.setAttribute("aria-label", e);
        },
        _computeHeadingClass: function(e) {
          return e ? " over-image" : "";
        },
        _computeAnimated: function(e) {
          return e;
        }
      });
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return _;
      }),
        n.d(t, "b", function() {
          return w;
        }),
        n.d(t, "e", function() {
          return x;
        }),
        n.d(t, "c", function() {
          return k;
        }),
        n.d(t, "f", function() {
          return S;
        }),
        n.d(t, "g", function() {
          return C;
        }),
        n.d(t, "d", function() {
          return E;
        });
      var i = n(49),
        o = n(27),
        r = n(50),
        a = n(51),
        s = n(36),
        l = n(19);
      function c(e, t) {
        return !t || ("object" !== m(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function d(e, t, n) {
        return (d =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = u(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function u(e) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && h(e, t);
      }
      function h(e, t) {
        return (h =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function b(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function v(e, t, n) {
        return t && b(e.prototype, t), n && b(e, n), e;
      }
      function m(e) {
        return (m =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var y = function(e) {
          return null === e || !("object" === m(e) || "function" == typeof e);
        },
        g = function(e) {
          return Array.isArray(e) || !(!e || !e[Symbol.iterator]);
        },
        _ = (function() {
          function e(t, n, i) {
            f(this, e),
              (this.dirty = !0),
              (this.element = t),
              (this.name = n),
              (this.strings = i),
              (this.parts = []);
            for (var o = 0; o < i.length - 1; o++)
              this.parts[o] = this._createPart();
          }
          return (
            v(e, [
              {
                key: "_createPart",
                value: function() {
                  return new w(this);
                }
              },
              {
                key: "_getValue",
                value: function() {
                  for (
                    var e = this.strings, t = e.length - 1, n = "", i = 0;
                    i < t;
                    i++
                  ) {
                    n += e[i];
                    var o = this.parts[i];
                    if (void 0 !== o) {
                      var r = o.value;
                      if (y(r) || !g(r))
                        n += "string" == typeof r ? r : String(r);
                      else {
                        var a = !0,
                          s = !1,
                          l = void 0;
                        try {
                          for (
                            var c, d = r[Symbol.iterator]();
                            !(a = (c = d.next()).done);
                            a = !0
                          ) {
                            var u = c.value;
                            n += "string" == typeof u ? u : String(u);
                          }
                        } catch (p) {
                          (s = !0), (l = p);
                        } finally {
                          try {
                            a || null == d.return || d.return();
                          } finally {
                            if (s) throw l;
                          }
                        }
                      }
                    }
                  }
                  return (n += e[t]);
                }
              },
              {
                key: "commit",
                value: function() {
                  this.dirty &&
                    ((this.dirty = !1),
                    this.element.setAttribute(this.name, this._getValue()));
                }
              }
            ]),
            e
          );
        })(),
        w = (function() {
          function e(t) {
            f(this, e), (this.value = void 0), (this.committer = t);
          }
          return (
            v(e, [
              {
                key: "setValue",
                value: function(e) {
                  e === r.a ||
                    (y(e) && e === this.value) ||
                    ((this.value = e),
                    Object(i.b)(e) || (this.committer.dirty = !0));
                }
              },
              {
                key: "commit",
                value: function() {
                  for (; Object(i.b)(this.value); ) {
                    var e = this.value;
                    (this.value = r.a), e(this);
                  }
                  this.value !== r.a && this.committer.commit();
                }
              }
            ]),
            e
          );
        })(),
        x = (function() {
          function e(t) {
            f(this, e),
              (this.value = void 0),
              (this.__pendingValue = void 0),
              (this.options = t);
          }
          return (
            v(e, [
              {
                key: "appendInto",
                value: function(e) {
                  (this.startNode = e.appendChild(Object(l.c)())),
                    (this.endNode = e.appendChild(Object(l.c)()));
                }
              },
              {
                key: "insertAfterNode",
                value: function(e) {
                  (this.startNode = e), (this.endNode = e.nextSibling);
                }
              },
              {
                key: "appendIntoPart",
                value: function(e) {
                  e.__insert((this.startNode = Object(l.c)())),
                    e.__insert((this.endNode = Object(l.c)()));
                }
              },
              {
                key: "insertAfterPart",
                value: function(e) {
                  e.__insert((this.startNode = Object(l.c)())),
                    (this.endNode = e.endNode),
                    (e.endNode = this.startNode);
                }
              },
              {
                key: "setValue",
                value: function(e) {
                  this.__pendingValue = e;
                }
              },
              {
                key: "commit",
                value: function() {
                  for (; Object(i.b)(this.__pendingValue); ) {
                    var e = this.__pendingValue;
                    (this.__pendingValue = r.a), e(this);
                  }
                  var t = this.__pendingValue;
                  t !== r.a &&
                    (y(t)
                      ? t !== this.value && this.__commitText(t)
                      : t instanceof s.b
                      ? this.__commitTemplateResult(t)
                      : t instanceof Node
                      ? this.__commitNode(t)
                      : g(t)
                      ? this.__commitIterable(t)
                      : t === r.b
                      ? ((this.value = r.b), this.clear())
                      : this.__commitText(t));
                }
              },
              {
                key: "__insert",
                value: function(e) {
                  this.endNode.parentNode.insertBefore(e, this.endNode);
                }
              },
              {
                key: "__commitNode",
                value: function(e) {
                  this.value !== e &&
                    (this.clear(), this.__insert(e), (this.value = e));
                }
              },
              {
                key: "__commitText",
                value: function(e) {
                  var t = this.startNode.nextSibling,
                    n =
                      "string" == typeof (e = null == e ? "" : e)
                        ? e
                        : String(e);
                  t === this.endNode.previousSibling && 3 === t.nodeType
                    ? (t.data = n)
                    : this.__commitNode(document.createTextNode(n)),
                    (this.value = e);
                }
              },
              {
                key: "__commitTemplateResult",
                value: function(e) {
                  var t = this.options.templateFactory(e);
                  if (this.value instanceof a.a && this.value.template === t)
                    this.value.update(e.values);
                  else {
                    var n = new a.a(t, e.processor, this.options),
                      i = n._clone();
                    n.update(e.values), this.__commitNode(i), (this.value = n);
                  }
                }
              },
              {
                key: "__commitIterable",
                value: function(t) {
                  Array.isArray(this.value) ||
                    ((this.value = []), this.clear());
                  var n,
                    i = this.value,
                    o = 0,
                    r = !0,
                    a = !1,
                    s = void 0;
                  try {
                    for (
                      var l, c = t[Symbol.iterator]();
                      !(r = (l = c.next()).done);
                      r = !0
                    ) {
                      var d = l.value;
                      void 0 === (n = i[o]) &&
                        ((n = new e(this.options)),
                        i.push(n),
                        0 === o
                          ? n.appendIntoPart(this)
                          : n.insertAfterPart(i[o - 1])),
                        n.setValue(d),
                        n.commit(),
                        o++;
                    }
                  } catch (u) {
                    (a = !0), (s = u);
                  } finally {
                    try {
                      r || null == c.return || c.return();
                    } finally {
                      if (a) throw s;
                    }
                  }
                  o < i.length && ((i.length = o), this.clear(n && n.endNode));
                }
              },
              {
                key: "clear",
                value: function() {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.startNode;
                  Object(o.b)(
                    this.startNode.parentNode,
                    e.nextSibling,
                    this.endNode
                  );
                }
              }
            ]),
            e
          );
        })(),
        k = (function() {
          function e(t, n, i) {
            if (
              (f(this, e),
              (this.value = void 0),
              (this.__pendingValue = void 0),
              2 !== i.length || "" !== i[0] || "" !== i[1])
            )
              throw new Error(
                "Boolean attributes can only contain a single expression"
              );
            (this.element = t), (this.name = n), (this.strings = i);
          }
          return (
            v(e, [
              {
                key: "setValue",
                value: function(e) {
                  this.__pendingValue = e;
                }
              },
              {
                key: "commit",
                value: function() {
                  for (; Object(i.b)(this.__pendingValue); ) {
                    var e = this.__pendingValue;
                    (this.__pendingValue = r.a), e(this);
                  }
                  if (this.__pendingValue !== r.a) {
                    var t = !!this.__pendingValue;
                    this.value !== t &&
                      (t
                        ? this.element.setAttribute(this.name, "")
                        : this.element.removeAttribute(this.name),
                      (this.value = t)),
                      (this.__pendingValue = r.a);
                  }
                }
              }
            ]),
            e
          );
        })(),
        S = (function(e) {
          function t(e, n, i) {
            var o;
            return (
              f(this, t),
              ((o = c(this, u(t).call(this, e, n, i))).single =
                2 === i.length && "" === i[0] && "" === i[1]),
              o
            );
          }
          return (
            p(t, _),
            v(t, [
              {
                key: "_createPart",
                value: function() {
                  return new C(this);
                }
              },
              {
                key: "_getValue",
                value: function() {
                  return this.single
                    ? this.parts[0].value
                    : d(u(t.prototype), "_getValue", this).call(this);
                }
              },
              {
                key: "commit",
                value: function() {
                  this.dirty &&
                    ((this.dirty = !1),
                    (this.element[this.name] = this._getValue()));
                }
              }
            ]),
            t
          );
        })(),
        C = (function(e) {
          function t() {
            return f(this, t), c(this, u(t).apply(this, arguments));
          }
          return p(t, w), t;
        })(),
        O = !1;
      try {
        var A = {
          get capture() {
            return (O = !0), !1;
          }
        };
        window.addEventListener("test", A, A),
          window.removeEventListener("test", A, A);
      } catch (I) {}
      var E = (function() {
          function e(t, n, i) {
            var o = this;
            f(this, e),
              (this.value = void 0),
              (this.__pendingValue = void 0),
              (this.element = t),
              (this.eventName = n),
              (this.eventContext = i),
              (this.__boundHandleEvent = function(e) {
                return o.handleEvent(e);
              });
          }
          return (
            v(e, [
              {
                key: "setValue",
                value: function(e) {
                  this.__pendingValue = e;
                }
              },
              {
                key: "commit",
                value: function() {
                  for (; Object(i.b)(this.__pendingValue); ) {
                    var e = this.__pendingValue;
                    (this.__pendingValue = r.a), e(this);
                  }
                  if (this.__pendingValue !== r.a) {
                    var t = this.__pendingValue,
                      n = this.value,
                      o =
                        null == t ||
                        (null != n &&
                          (t.capture !== n.capture ||
                            t.once !== n.once ||
                            t.passive !== n.passive)),
                      a = null != t && (null == n || o);
                    o &&
                      this.element.removeEventListener(
                        this.eventName,
                        this.__boundHandleEvent,
                        this.__options
                      ),
                      a &&
                        ((this.__options = T(t)),
                        this.element.addEventListener(
                          this.eventName,
                          this.__boundHandleEvent,
                          this.__options
                        )),
                      (this.value = t),
                      (this.__pendingValue = r.a);
                  }
                }
              },
              {
                key: "handleEvent",
                value: function(e) {
                  "function" == typeof this.value
                    ? this.value.call(this.eventContext || this.element, e)
                    : this.value.handleEvent(e);
                }
              }
            ]),
            e
          );
        })(),
        T = function(e) {
          return (
            e &&
            (O
              ? { capture: e.capture, passive: e.passive, once: e.once }
              : e.capture)
          );
        };
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "f", function() {
        return i;
      }),
        n.d(t, "g", function() {
          return o;
        }),
        n.d(t, "b", function() {
          return a;
        }),
        n.d(t, "a", function() {
          return s;
        }),
        n.d(t, "d", function() {
          return c;
        }),
        n.d(t, "c", function() {
          return d;
        }),
        n.d(t, "e", function() {
          return u;
        });
      var i = "{{lit-".concat(String(Math.random()).slice(2), "}}"),
        o = "\x3c!--".concat(i, "--\x3e"),
        r = new RegExp("".concat(i, "|").concat(o)),
        a = "$lit$",
        s = function e(t, n) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.parts = []),
            (this.element = n);
          for (
            var o = [],
              s = [],
              c = document.createTreeWalker(n.content, 133, null, !1),
              p = 0,
              h = -1,
              f = 0,
              b = t.strings,
              v = t.values.length;
            f < v;

          ) {
            var m = c.nextNode();
            if (null !== m) {
              if ((h++, 1 === m.nodeType)) {
                if (m.hasAttributes()) {
                  for (
                    var y = m.attributes, g = y.length, _ = 0, w = 0;
                    w < g;
                    w++
                  )
                    l(y[w].name, a) && _++;
                  for (; _-- > 0; ) {
                    var x = b[f],
                      k = u.exec(x)[2],
                      S = k.toLowerCase() + a,
                      C = m.getAttribute(S);
                    m.removeAttribute(S);
                    var O = C.split(r);
                    this.parts.push({
                      type: "attribute",
                      index: h,
                      name: k,
                      strings: O
                    }),
                      (f += O.length - 1);
                  }
                }
                "TEMPLATE" === m.tagName &&
                  (s.push(m), (c.currentNode = m.content));
              } else if (3 === m.nodeType) {
                var A = m.data;
                if (A.indexOf(i) >= 0) {
                  for (
                    var E = m.parentNode,
                      T = A.split(r),
                      I = T.length - 1,
                      z = 0;
                    z < I;
                    z++
                  ) {
                    var j = void 0,
                      R = T[z];
                    if ("" === R) j = d();
                    else {
                      var B = u.exec(R);
                      null !== B &&
                        l(B[2], a) &&
                        (R =
                          R.slice(0, B.index) +
                          B[1] +
                          B[2].slice(0, -a.length) +
                          B[3]),
                        (j = document.createTextNode(R));
                    }
                    E.insertBefore(j, m),
                      this.parts.push({ type: "node", index: ++h });
                  }
                  "" === T[I]
                    ? (E.insertBefore(d(), m), o.push(m))
                    : (m.data = T[I]),
                    (f += I);
                }
              } else if (8 === m.nodeType)
                if (m.data === i) {
                  var P = m.parentNode;
                  (null !== m.previousSibling && h !== p) ||
                    (h++, P.insertBefore(d(), m)),
                    (p = h),
                    this.parts.push({ type: "node", index: h }),
                    null === m.nextSibling ? (m.data = "") : (o.push(m), h--),
                    f++;
                } else
                  for (var N = -1; -1 !== (N = m.data.indexOf(i, N + 1)); )
                    this.parts.push({ type: "node", index: -1 }), f++;
            } else c.currentNode = s.pop();
          }
          for (var L = 0, F = o; L < F.length; L++) {
            var M = F[L];
            M.parentNode.removeChild(M);
          }
        },
        l = function(e, t) {
          var n = e.length - t.length;
          return n >= 0 && e.slice(n) === t;
        },
        c = function(e) {
          return -1 !== e.index;
        },
        d = function() {
          return document.createComment("");
        },
        u = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
    },
    function(e, t, n) {
      "use strict";
      n(10), n(64);
      var i = n(6),
        o = n(7),
        r = n(5),
        a = n(3);
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--iron-icon-fill-color, currentcolor);\n        stroke: var(--iron-icon-stroke-color, none);\n\n        width: var(--iron-icon-width, 24px);\n        height: var(--iron-icon-height, 24px);\n        @apply --iron-icon;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n"
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        _template: Object(r.a)(s()),
        is: "iron-icon",
        properties: {
          icon: { type: String },
          theme: { type: String },
          src: { type: String },
          _meta: { value: a.a.create("iron-meta", { type: "iconset" }) }
        },
        observers: [
          "_updateIcon(_meta, isAttached)",
          "_updateIcon(theme, isAttached)",
          "_srcChanged(src, isAttached)",
          "_iconChanged(icon, isAttached)"
        ],
        _DEFAULT_ICONSET: "icons",
        _iconChanged: function(e) {
          var t = (e || "").split(":");
          (this._iconName = t.pop()),
            (this._iconsetName = t.pop() || this._DEFAULT_ICONSET),
            this._updateIcon();
        },
        _srcChanged: function(e) {
          this._updateIcon();
        },
        _usesIconset: function() {
          return this.icon || !this.src;
        },
        _updateIcon: function() {
          this._usesIconset()
            ? (this._img &&
                this._img.parentNode &&
                Object(o.a)(this.root).removeChild(this._img),
              "" === this._iconName
                ? this._iconset && this._iconset.removeIcon(this)
                : this._iconsetName &&
                  this._meta &&
                  ((this._iconset = this._meta.byKey(this._iconsetName)),
                  this._iconset
                    ? (this._iconset.applyIcon(
                        this,
                        this._iconName,
                        this.theme
                      ),
                      this.unlisten(
                        window,
                        "iron-iconset-added",
                        "_updateIcon"
                      ))
                    : this.listen(window, "iron-iconset-added", "_updateIcon")))
            : (this._iconset && this._iconset.removeIcon(this),
              this._img ||
                ((this._img = document.createElement("img")),
                (this._img.style.width = "100%"),
                (this._img.style.height = "100%"),
                (this._img.draggable = !1)),
              (this._img.src = this.src),
              Object(o.a)(this.root).appendChild(this._img));
        }
      });
    },
    ,
    function(e, t, n) {
      "use strict";
      n(3), n(20), n(11);
      var i = n(65),
        o = n(6),
        r = n(5);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        cursor: pointer;\n        z-index: 0;\n        line-height: 1;\n\n        width: 40px;\n        height: 40px;\n\n        /*\n          NOTE: Both values are needed, since some phones require the value to\n          be `transparent`.\n        */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        /* Because of polymer/2558, this style has lower specificity than * */\n        box-sizing: border-box !important;\n\n        @apply --paper-icon-button;\n      }\n\n      :host #ink {\n        color: var(--paper-icon-button-ink-color, var(--primary-text-color));\n        opacity: 0.6;\n      }\n\n      :host([disabled]) {\n        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));\n        pointer-events: none;\n        cursor: auto;\n\n        @apply --paper-icon-button-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:hover) {\n        @apply --paper-icon-button-hover;\n      }\n\n      iron-icon {\n        --iron-icon-width: 100%;\n        --iron-icon-height: 100%;\n      }\n    </style>\n\n    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"\n               alt$="[[alt]]"></iron-icon>\n  '
          ],
          [
            '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        cursor: pointer;\n        z-index: 0;\n        line-height: 1;\n\n        width: 40px;\n        height: 40px;\n\n        /*\n          NOTE: Both values are needed, since some phones require the value to\n          be \\`transparent\\`.\n        */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        /* Because of polymer/2558, this style has lower specificity than * */\n        box-sizing: border-box !important;\n\n        @apply --paper-icon-button;\n      }\n\n      :host #ink {\n        color: var(--paper-icon-button-ink-color, var(--primary-text-color));\n        opacity: 0.6;\n      }\n\n      :host([disabled]) {\n        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));\n        pointer-events: none;\n        cursor: auto;\n\n        @apply --paper-icon-button-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:hover) {\n        @apply --paper-icon-button-hover;\n      }\n\n      iron-icon {\n        --iron-icon-width: 100%;\n        --iron-icon-height: 100%;\n      }\n    </style>\n\n    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"\n               alt$="[[alt]]"></iron-icon>\n  '
          ]
        );
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      Object(o.a)({
        is: "paper-icon-button",
        _template: Object(r.a)(a()),
        hostAttributes: { role: "button", tabindex: "0" },
        behaviors: [i.a],
        registered: function() {
          this._template.setAttribute("strip-whitespace", "");
        },
        properties: {
          src: { type: String },
          icon: { type: String },
          alt: { type: String, observer: "_altChanged" }
        },
        _altChanged: function(e, t) {
          var n = this.getAttribute("aria-label");
          (n && t != n) || this.setAttribute("aria-label", e);
        }
      });
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      });
      n(3), n(7);
      var i = {
        properties: {
          focused: {
            type: Boolean,
            value: !1,
            notify: !0,
            readOnly: !0,
            reflectToAttribute: !0
          },
          disabled: {
            type: Boolean,
            value: !1,
            notify: !0,
            observer: "_disabledChanged",
            reflectToAttribute: !0
          },
          _oldTabIndex: { type: String },
          _boundFocusBlurHandler: {
            type: Function,
            value: function() {
              return this._focusBlurHandler.bind(this);
            }
          }
        },
        observers: ["_changedControlState(focused, disabled)"],
        ready: function() {
          this.addEventListener("focus", this._boundFocusBlurHandler, !0),
            this.addEventListener("blur", this._boundFocusBlurHandler, !0);
        },
        _focusBlurHandler: function(e) {
          this._setFocused("focus" === e.type);
        },
        _disabledChanged: function(e, t) {
          this.setAttribute("aria-disabled", e ? "true" : "false"),
            (this.style.pointerEvents = e ? "none" : ""),
            e
              ? ((this._oldTabIndex = this.getAttribute("tabindex")),
                this._setFocused(!1),
                (this.tabIndex = -1),
                this.blur())
              : void 0 !== this._oldTabIndex &&
                (null === this._oldTabIndex
                  ? this.removeAttribute("tabindex")
                  : this.setAttribute("tabindex", this._oldTabIndex));
        },
        _changedControlState: function() {
          this._controlStateChanged && this._controlStateChanged();
        }
      };
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return b;
      });
      n(3);
      var i = {
          "U+0008": "backspace",
          "U+0009": "tab",
          "U+001B": "esc",
          "U+0020": "space",
          "U+007F": "del"
        },
        o = {
          8: "backspace",
          9: "tab",
          13: "enter",
          27: "esc",
          33: "pageup",
          34: "pagedown",
          35: "end",
          36: "home",
          32: "space",
          37: "left",
          38: "up",
          39: "right",
          40: "down",
          46: "del",
          106: "*"
        },
        r = {
          shift: "shiftKey",
          ctrl: "ctrlKey",
          alt: "altKey",
          meta: "metaKey"
        },
        a = /[a-z0-9*]/,
        s = /U\+/,
        l = /^arrow/,
        c = /^space(bar)?/,
        d = /^escape$/;
      function u(e, t) {
        var n = "";
        if (e) {
          var i = e.toLowerCase();
          " " === i || c.test(i)
            ? (n = "space")
            : d.test(i)
            ? (n = "esc")
            : 1 == i.length
            ? (t && !a.test(i)) || (n = i)
            : (n = l.test(i)
                ? i.replace("arrow", "")
                : "multiply" == i
                ? "*"
                : i);
        }
        return n;
      }
      function p(e, t) {
        return e.key
          ? u(e.key, t)
          : e.detail && e.detail.key
          ? u(e.detail.key, t)
          : ((n = e.keyIdentifier),
            (r = ""),
            n &&
              (n in i
                ? (r = i[n])
                : s.test(n)
                ? ((n = parseInt(n.replace("U+", "0x"), 16)),
                  (r = String.fromCharCode(n).toLowerCase()))
                : (r = n.toLowerCase())),
            r ||
              (function(e) {
                var t = "";
                return (
                  Number(e) &&
                    (t =
                      e >= 65 && e <= 90
                        ? String.fromCharCode(32 + e)
                        : e >= 112 && e <= 123
                        ? "f" + (e - 112 + 1)
                        : e >= 48 && e <= 57
                        ? String(e - 48)
                        : e >= 96 && e <= 105
                        ? String(e - 96)
                        : o[e]),
                  t
                );
              })(e.keyCode) ||
              "");
        var n, r;
      }
      function h(e, t) {
        return (
          p(t, e.hasModifiers) === e.key &&
          (!e.hasModifiers ||
            (!!t.shiftKey == !!e.shiftKey &&
              !!t.ctrlKey == !!e.ctrlKey &&
              !!t.altKey == !!e.altKey &&
              !!t.metaKey == !!e.metaKey))
        );
      }
      function f(e) {
        return e
          .trim()
          .split(" ")
          .map(function(e) {
            return (function(e) {
              return 1 === e.length
                ? { combo: e, key: e, event: "keydown" }
                : e.split("+").reduce(
                    function(e, t) {
                      var n = t.split(":"),
                        i = n[0],
                        o = n[1];
                      return (
                        i in r
                          ? ((e[r[i]] = !0), (e.hasModifiers = !0))
                          : ((e.key = i), (e.event = o || "keydown")),
                        e
                      );
                    },
                    { combo: e.split(":").shift() }
                  );
            })(e);
          });
      }
      var b = {
        properties: {
          keyEventTarget: {
            type: Object,
            value: function() {
              return this;
            }
          },
          stopKeyboardEventPropagation: { type: Boolean, value: !1 },
          _boundKeyHandlers: {
            type: Array,
            value: function() {
              return [];
            }
          },
          _imperativeKeyBindings: {
            type: Object,
            value: function() {
              return {};
            }
          }
        },
        observers: [
          "_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"
        ],
        keyBindings: {},
        registered: function() {
          this._prepKeyBindings();
        },
        attached: function() {
          this._listenKeyEventListeners();
        },
        detached: function() {
          this._unlistenKeyEventListeners();
        },
        addOwnKeyBinding: function(e, t) {
          (this._imperativeKeyBindings[e] = t),
            this._prepKeyBindings(),
            this._resetKeyEventListeners();
        },
        removeOwnKeyBindings: function() {
          (this._imperativeKeyBindings = {}),
            this._prepKeyBindings(),
            this._resetKeyEventListeners();
        },
        keyboardEventMatchesKeys: function(e, t) {
          for (var n = f(t), i = 0; i < n.length; ++i)
            if (h(n[i], e)) return !0;
          return !1;
        },
        _collectKeyBindings: function() {
          var e = this.behaviors.map(function(e) {
            return e.keyBindings;
          });
          return (
            -1 === e.indexOf(this.keyBindings) && e.push(this.keyBindings), e
          );
        },
        _prepKeyBindings: function() {
          for (var e in ((this._keyBindings = {}),
          this._collectKeyBindings().forEach(function(e) {
            for (var t in e) this._addKeyBinding(t, e[t]);
          }, this),
          this._imperativeKeyBindings))
            this._addKeyBinding(e, this._imperativeKeyBindings[e]);
          for (var t in this._keyBindings)
            this._keyBindings[t].sort(function(e, t) {
              var n = e[0].hasModifiers;
              return n === t[0].hasModifiers ? 0 : n ? -1 : 1;
            });
        },
        _addKeyBinding: function(e, t) {
          f(e).forEach(function(e) {
            (this._keyBindings[e.event] = this._keyBindings[e.event] || []),
              this._keyBindings[e.event].push([e, t]);
          }, this);
        },
        _resetKeyEventListeners: function() {
          this._unlistenKeyEventListeners(),
            this.isAttached && this._listenKeyEventListeners();
        },
        _listenKeyEventListeners: function() {
          this.keyEventTarget &&
            Object.keys(this._keyBindings).forEach(function(e) {
              var t = this._keyBindings[e],
                n = this._onKeyBindingEvent.bind(this, t);
              this._boundKeyHandlers.push([this.keyEventTarget, e, n]),
                this.keyEventTarget.addEventListener(e, n);
            }, this);
        },
        _unlistenKeyEventListeners: function() {
          for (var e, t, n, i; this._boundKeyHandlers.length; )
            (t = (e = this._boundKeyHandlers.pop())[0]),
              (n = e[1]),
              (i = e[2]),
              t.removeEventListener(n, i);
        },
        _onKeyBindingEvent: function(e, t) {
          if (
            (this.stopKeyboardEventPropagation && t.stopPropagation(),
            !t.defaultPrevented)
          )
            for (var n = 0; n < e.length; n++) {
              var i = e[n][0],
                o = e[n][1];
              if (
                h(i, t) &&
                (this._triggerKeyHandler(i, o, t), t.defaultPrevented)
              )
                return;
            }
        },
        _triggerKeyHandler: function(e, t, n) {
          var i = Object.create(e);
          i.keyboardEvent = n;
          var o = new CustomEvent(e.event, { detail: i, cancelable: !0 });
          this[t].call(this, o), o.defaultPrevented && n.preventDefault();
        }
      };
    },
    ,
    ,
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      }),
        n.d(t, "c", function() {
          return o;
        }),
        n.d(t, "b", function() {
          return r;
        });
      var i =
          void 0 !== window.customElements &&
          void 0 !== window.customElements.polyfillWrapFlushCallback,
        o = function(e, t) {
          for (
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null,
              i =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
            t !== n;

          ) {
            var o = t.nextSibling;
            e.insertBefore(t, i), (t = o);
          }
        },
        r = function(e, t) {
          for (
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            t !== n;

          ) {
            var i = t.nextSibling;
            e.removeChild(t), (t = i);
          }
        };
    },
    ,
    function(e, t, n) {
      "use strict";
      n(3), n(40);
      var i = n(5);
      function o() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      /* Shared Styles */\n      --paper-font-common-base: {\n        font-family: 'Roboto', 'Noto', sans-serif;\n        -webkit-font-smoothing: antialiased;\n      };\n\n      --paper-font-common-code: {\n        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;\n        -webkit-font-smoothing: antialiased;\n      };\n\n      --paper-font-common-expensive-kerning: {\n        text-rendering: optimizeLegibility;\n      };\n\n      --paper-font-common-nowrap: {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      };\n\n      /* Material Font Styles */\n\n      --paper-font-display4: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 112px;\n        font-weight: 300;\n        letter-spacing: -.044em;\n        line-height: 120px;\n      };\n\n      --paper-font-display3: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 56px;\n        font-weight: 400;\n        letter-spacing: -.026em;\n        line-height: 60px;\n      };\n\n      --paper-font-display2: {\n        @apply --paper-font-common-base;\n\n        font-size: 45px;\n        font-weight: 400;\n        letter-spacing: -.018em;\n        line-height: 48px;\n      };\n\n      --paper-font-display1: {\n        @apply --paper-font-common-base;\n\n        font-size: 34px;\n        font-weight: 400;\n        letter-spacing: -.01em;\n        line-height: 40px;\n      };\n\n      --paper-font-headline: {\n        @apply --paper-font-common-base;\n\n        font-size: 24px;\n        font-weight: 400;\n        letter-spacing: -.012em;\n        line-height: 32px;\n      };\n\n      --paper-font-title: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 20px;\n        font-weight: 500;\n        line-height: 28px;\n      };\n\n      --paper-font-subhead: {\n        @apply --paper-font-common-base;\n\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n      };\n\n      --paper-font-body2: {\n        @apply --paper-font-common-base;\n\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 24px;\n      };\n\n      --paper-font-body1: {\n        @apply --paper-font-common-base;\n\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 20px;\n      };\n\n      --paper-font-caption: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 12px;\n        font-weight: 400;\n        letter-spacing: 0.011em;\n        line-height: 20px;\n      };\n\n      --paper-font-menu: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 13px;\n        font-weight: 500;\n        line-height: 24px;\n      };\n\n      --paper-font-button: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 14px;\n        font-weight: 500;\n        letter-spacing: 0.018em;\n        line-height: 24px;\n        text-transform: uppercase;\n      };\n\n      --paper-font-code2: {\n        @apply --paper-font-common-code;\n\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 20px;\n      };\n\n      --paper-font-code1: {\n        @apply --paper-font-common-code;\n\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 20px;\n      };\n\n    }\n\n  </style>\n</custom-style>"
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var r = Object(i.a)(o());
      r.setAttribute("style", "display: none;"),
        document.head.appendChild(r.content);
    },
    ,
    ,
    function(e, t, n) {
      "use strict";
      function i(e) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      n.d(t, "c", function() {
        return r;
      }),
        n.d(t, "a", function() {
          return a;
        }),
        n.d(t, "b", function() {
          return s;
        });
      var o = function(e, t) {
        return (o =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(e, t);
      };
      function r(e, t) {
        function n() {
          this.constructor = e;
        }
        o(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var a = function() {
        return (a =
          Object.assign ||
          function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function s(e, t, n, o) {
        var r,
          a = arguments.length,
          s =
            a < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, n))
              : o;
        if (
          "object" ===
            ("undefined" == typeof Reflect ? "undefined" : i(Reflect)) &&
          "function" == typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, n, o);
        else
          for (var l = e.length - 1; l >= 0; l--)
            (r = e[l]) &&
              (s = (a < 3 ? r(s) : a > 3 ? r(t, n, s) : r(t, n)) || s);
        return a > 3 && s && Object.defineProperty(t, n, s), s;
      }
    },
    ,
    ,
    ,
    function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return f;
      }),
        n.d(t, "a", function() {
          return b;
        });
      var i = n(27),
        o = n(19);
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function a(e, t) {
        return !t || ("object" !== r(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function s(e, t, n) {
        return (s =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, n) {
                var i = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = l(e));

                  );
                  return e;
                })(e, t);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, t);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(e, t, n || e);
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function p(e, t, n) {
        return t && u(e.prototype, t), n && u(e, n), e;
      }
      var h = " ".concat(o.f, " "),
        f = (function() {
          function e(t, n, i, o) {
            d(this, e),
              (this.strings = t),
              (this.values = n),
              (this.type = i),
              (this.processor = o);
          }
          return (
            p(e, [
              {
                key: "getHTML",
                value: function() {
                  for (
                    var e = this.strings.length - 1, t = "", n = !1, i = 0;
                    i < e;
                    i++
                  ) {
                    var r = this.strings[i],
                      a = r.lastIndexOf("\x3c!--");
                    n = (a > -1 || n) && -1 === r.indexOf("--\x3e", a + 1);
                    var s = o.e.exec(r);
                    t +=
                      null === s
                        ? r + (n ? h : o.g)
                        : r.substr(0, s.index) + s[1] + s[2] + o.b + s[3] + o.f;
                  }
                  return (t += this.strings[e]);
                }
              },
              {
                key: "getTemplateElement",
                value: function() {
                  var e = document.createElement("template");
                  return (e.innerHTML = this.getHTML()), e;
                }
              }
            ]),
            e
          );
        })(),
        b = (function(e) {
          function t() {
            return d(this, t), a(this, l(t).apply(this, arguments));
          }
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && c(e, t);
            })(t, f),
            p(t, [
              {
                key: "getHTML",
                value: function() {
                  return "<svg>".concat(
                    s(l(t.prototype), "getHTML", this).call(this),
                    "</svg>"
                  );
                }
              },
              {
                key: "getTemplateElement",
                value: function() {
                  var e = s(l(t.prototype), "getTemplateElement", this).call(
                      this
                    ),
                    n = e.content,
                    o = n.firstChild;
                  return n.removeChild(o), Object(i.c)(n, o.firstChild), e;
                }
              }
            ]),
            t
          );
        })();
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return o;
      }),
        n.d(t, "a", function() {
          return r;
        });
      var i = n(19);
      function o(e) {
        var t = r.get(e.type);
        void 0 === t &&
          ((t = { stringsArray: new WeakMap(), keyString: new Map() }),
          r.set(e.type, t));
        var n = t.stringsArray.get(e.strings);
        if (void 0 !== n) return n;
        var o = e.strings.join(i.f);
        return (
          void 0 === (n = t.keyString.get(o)) &&
            ((n = new i.a(e, e.getTemplateElement())), t.keyString.set(o, n)),
          t.stringsArray.set(e.strings, n),
          n
        );
      }
      var r = new Map();
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return r;
      }),
        n.d(t, "a", function() {
          return a;
        });
      n(3), n(23);
      var i = n(24),
        o = n(7),
        r = {
          properties: {
            pressed: {
              type: Boolean,
              readOnly: !0,
              value: !1,
              reflectToAttribute: !0,
              observer: "_pressedChanged"
            },
            toggles: { type: Boolean, value: !1, reflectToAttribute: !0 },
            active: {
              type: Boolean,
              value: !1,
              notify: !0,
              reflectToAttribute: !0
            },
            pointerDown: { type: Boolean, readOnly: !0, value: !1 },
            receivedFocusFromKeyboard: { type: Boolean, readOnly: !0 },
            ariaActiveAttribute: {
              type: String,
              value: "aria-pressed",
              observer: "_ariaActiveAttributeChanged"
            }
          },
          listeners: {
            down: "_downHandler",
            up: "_upHandler",
            tap: "_tapHandler"
          },
          observers: [
            "_focusChanged(focused)",
            "_activeChanged(active, ariaActiveAttribute)"
          ],
          keyBindings: {
            "enter:keydown": "_asyncClick",
            "space:keydown": "_spaceKeyDownHandler",
            "space:keyup": "_spaceKeyUpHandler"
          },
          _mouseEventRe: /^mouse/,
          _tapHandler: function() {
            this.toggles
              ? this._userActivate(!this.active)
              : (this.active = !1);
          },
          _focusChanged: function(e) {
            this._detectKeyboardFocus(e), e || this._setPressed(!1);
          },
          _detectKeyboardFocus: function(e) {
            this._setReceivedFocusFromKeyboard(!this.pointerDown && e);
          },
          _userActivate: function(e) {
            this.active !== e && ((this.active = e), this.fire("change"));
          },
          _downHandler: function(e) {
            this._setPointerDown(!0),
              this._setPressed(!0),
              this._setReceivedFocusFromKeyboard(!1);
          },
          _upHandler: function() {
            this._setPointerDown(!1), this._setPressed(!1);
          },
          _spaceKeyDownHandler: function(e) {
            var t = e.detail.keyboardEvent,
              n = Object(o.a)(t).localTarget;
            this.isLightDescendant(n) ||
              (t.preventDefault(),
              t.stopImmediatePropagation(),
              this._setPressed(!0));
          },
          _spaceKeyUpHandler: function(e) {
            var t = e.detail.keyboardEvent,
              n = Object(o.a)(t).localTarget;
            this.isLightDescendant(n) ||
              (this.pressed && this._asyncClick(), this._setPressed(!1));
          },
          _asyncClick: function() {
            this.async(function() {
              this.click();
            }, 1);
          },
          _pressedChanged: function(e) {
            this._changedButtonState();
          },
          _ariaActiveAttributeChanged: function(e, t) {
            t && t != e && this.hasAttribute(t) && this.removeAttribute(t);
          },
          _activeChanged: function(e, t) {
            this.toggles
              ? this.setAttribute(
                  this.ariaActiveAttribute,
                  e ? "true" : "false"
                )
              : this.removeAttribute(this.ariaActiveAttribute),
              this._changedButtonState();
          },
          _controlStateChanged: function() {
            this.disabled ? this._setPressed(!1) : this._changedButtonState();
          },
          _changedButtonState: function() {
            this._buttonStateChanged && this._buttonStateChanged();
          }
        },
        a = [i.a, r];
    },
    function(e, t, n) {
      "use strict";
      n(3);
      var i = n(5);
      function o() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n<custom-style>\n  <style is="custom-style">\n    html {\n\n      --shadow-transition: {\n        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n      };\n\n      --shadow-none: {\n        box-shadow: none;\n      };\n\n      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */\n\n      --shadow-elevation-2dp: {\n        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 5px 0 rgba(0, 0, 0, 0.12),\n                    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n      };\n\n      --shadow-elevation-3dp: {\n        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 8px 0 rgba(0, 0, 0, 0.12),\n                    0 3px 3px -2px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-4dp: {\n        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 10px 0 rgba(0, 0, 0, 0.12),\n                    0 2px 4px -1px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-6dp: {\n        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 18px 0 rgba(0, 0, 0, 0.12),\n                    0 3px 5px -1px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-8dp: {\n        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                    0 3px 14px 2px rgba(0, 0, 0, 0.12),\n                    0 5px 5px -3px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-12dp: {\n        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),\n                    0 4px 22px 3px rgba(0, 0, 0, 0.12),\n                    0 6px 7px -4px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-16dp: {\n        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),\n                    0  6px 30px 5px rgba(0, 0, 0, 0.12),\n                    0  8px 10px -5px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-24dp: {\n        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),\n                    0 9px 46px 8px rgba(0, 0, 0, 0.12),\n                    0 11px 15px -7px rgba(0, 0, 0, 0.4);\n      };\n    }\n  </style>\n</custom-style>'
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var r = Object(i.a)(o());
      r.setAttribute("style", "display: none;"),
        document.head.appendChild(r.content);
    },
    ,
    function(e, t, n) {
      "use strict";
      n(3), n(10);
      var i = n(6),
        o = n(5);
      function r() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n    <style>\n\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        position: relative;\n        height: 64px;\n        padding: 0 16px;\n        pointer-events: none;\n        font-size: var(--app-toolbar-font-size, 20px);\n      }\n\n      :host ::slotted(*) {\n        pointer-events: auto;\n      }\n\n      :host ::slotted(paper-icon-button) {\n        /* paper-icon-button/issues/33 */\n        font-size: 0;\n      }\n\n      :host ::slotted([main-title]),\n      :host ::slotted([condensed-title]) {\n        pointer-events: none;\n        @apply --layout-flex;\n      }\n\n      :host ::slotted([bottom-item]) {\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      :host ::slotted([top-item]) {\n        position: absolute;\n        top: 0;\n        right: 0;\n        left: 0;\n      }\n\n      :host ::slotted([spacer]) {\n        margin-left: 64px;\n      }\n    </style>\n\n    <slot></slot>\n"
        ]);
        return (
          (r = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({ _template: Object(o.a)(r()), is: "app-toolbar" });
    },
    ,
    ,
    function(e, t, n) {
      "use strict";
      n(3);
      var i = n(6),
        o = n(5);
      function r() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0px,0px,0px,0px);\n      }\n    </style>\n    <div aria-live$="[[mode]]">[[_text]]</div>\n'
        ]);
        return (
          (r = function() {
            return e;
          }),
          e
        );
      }
      var a = Object(i.a)({
        _template: Object(o.a)(r()),
        is: "iron-a11y-announcer",
        properties: {
          mode: { type: String, value: "polite" },
          _text: { type: String, value: "" }
        },
        created: function() {
          a.instance || (a.instance = this),
            document.body.addEventListener(
              "iron-announce",
              this._onIronAnnounce.bind(this)
            );
        },
        announce: function(e) {
          (this._text = ""),
            this.async(function() {
              this._text = e;
            }, 100);
        },
        _onIronAnnounce: function(e) {
          e.detail && e.detail.text && this.announce(e.detail.text);
        }
      });
      (a.instance = null),
        (a.requestAvailability = function() {
          a.instance ||
            (a.instance = document.createElement("iron-a11y-announcer")),
            document.body.appendChild(a.instance);
        });
      var s = n(55),
        l = n(7);
      function c() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n      }\n    </style>\n    <slot id="content"></slot>\n'
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        _template: Object(o.a)(c()),
        is: "iron-input",
        behaviors: [s.a],
        properties: {
          bindValue: { type: String, value: "" },
          value: { type: String, computed: "_computeValue(bindValue)" },
          allowedPattern: { type: String },
          autoValidate: { type: Boolean, value: !1 },
          _inputElement: Object
        },
        observers: ["_bindValueChanged(bindValue, _inputElement)"],
        listeners: { input: "_onInput", keypress: "_onKeypress" },
        created: function() {
          a.requestAvailability(),
            (this._previousValidInput = ""),
            (this._patternAlreadyChecked = !1);
        },
        attached: function() {
          this._observer = Object(l.a)(this).observeNodes(
            function(e) {
              this._initSlottedInput();
            }.bind(this)
          );
        },
        detached: function() {
          this._observer &&
            (Object(l.a)(this).unobserveNodes(this._observer),
            (this._observer = null));
        },
        get inputElement() {
          return this._inputElement;
        },
        _initSlottedInput: function() {
          (this._inputElement = this.getEffectiveChildren()[0]),
            this.inputElement &&
              this.inputElement.value &&
              (this.bindValue = this.inputElement.value),
            this.fire("iron-input-ready");
        },
        get _patternRegExp() {
          var e;
          if (this.allowedPattern) e = new RegExp(this.allowedPattern);
          else
            switch (this.inputElement.type) {
              case "number":
                e = /[0-9.,e-]/;
            }
          return e;
        },
        _bindValueChanged: function(e, t) {
          t &&
            (void 0 === e
              ? (t.value = null)
              : e !== t.value && (this.inputElement.value = e),
            this.autoValidate && this.validate(),
            this.fire("bind-value-changed", { value: e }));
        },
        _onInput: function() {
          this.allowedPattern &&
            !this._patternAlreadyChecked &&
            (this._checkPatternValidity() ||
              (this._announceInvalidCharacter(
                "Invalid string of characters not entered."
              ),
              (this.inputElement.value = this._previousValidInput)));
          (this.bindValue = this._previousValidInput = this.inputElement.value),
            (this._patternAlreadyChecked = !1);
        },
        _isPrintable: function(e) {
          var t =
              8 == e.keyCode ||
              9 == e.keyCode ||
              13 == e.keyCode ||
              27 == e.keyCode,
            n =
              19 == e.keyCode ||
              20 == e.keyCode ||
              45 == e.keyCode ||
              46 == e.keyCode ||
              144 == e.keyCode ||
              145 == e.keyCode ||
              (e.keyCode > 32 && e.keyCode < 41) ||
              (e.keyCode > 111 && e.keyCode < 124);
          return !(t || (0 == e.charCode && n));
        },
        _onKeypress: function(e) {
          if (this.allowedPattern || "number" === this.inputElement.type) {
            var t = this._patternRegExp;
            if (t && !(e.metaKey || e.ctrlKey || e.altKey)) {
              this._patternAlreadyChecked = !0;
              var n = String.fromCharCode(e.charCode);
              this._isPrintable(e) &&
                !t.test(n) &&
                (e.preventDefault(),
                this._announceInvalidCharacter(
                  "Invalid character " + n + " not entered."
                ));
            }
          }
        },
        _checkPatternValidity: function() {
          var e = this._patternRegExp;
          if (!e) return !0;
          for (var t = 0; t < this.inputElement.value.length; t++)
            if (!e.test(this.inputElement.value[t])) return !1;
          return !0;
        },
        validate: function() {
          if (!this.inputElement) return (this.invalid = !1), !0;
          var e = this.inputElement.checkValidity();
          return (
            e &&
              (this.required && "" === this.bindValue
                ? (e = !1)
                : this.hasValidator() &&
                  (e = s.a.validate.call(this, this.bindValue))),
            (this.invalid = !e),
            this.fire("iron-input-validate"),
            e
          );
        },
        _announceInvalidCharacter: function(e) {
          this.fire("iron-announce", { text: e });
        },
        _computeValue: function(e) {
          return e;
        }
      });
      n(29);
      var d = {
        attached: function() {
          this.fire("addon-attached");
        },
        update: function(e) {}
      };
      function u() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n    <style>\n      :host {\n        display: inline-block;\n        float: right;\n\n        @apply --paper-font-caption;\n        @apply --paper-input-char-counter;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:dir(rtl)) {\n        float: left;\n      }\n    </style>\n\n    <span>[[_charCounterStr]]</span>\n"
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        _template: Object(o.a)(u()),
        is: "paper-input-char-counter",
        behaviors: [d],
        properties: { _charCounterStr: { type: String, value: "0" } },
        update: function(e) {
          if (e.inputElement) {
            e.value = e.value || "";
            var t = e.value.toString().length.toString();
            e.inputElement.hasAttribute("maxlength") &&
              (t += "/" + e.inputElement.getAttribute("maxlength")),
              (this._charCounterStr = t);
          }
        }
      });
      n(10), n(11);
      var p = n(47);
      function h() {
        var e = b([
          '\n    <style>\n      :host {\n        display: block;\n        padding: 8px 0;\n        @apply --paper-input-container;\n      }\n\n      :host([inline]) {\n        display: inline-block;\n      }\n\n      :host([disabled]) {\n        pointer-events: none;\n        opacity: 0.33;\n\n        @apply --paper-input-container-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      .floated-label-placeholder {\n        @apply --paper-font-caption;\n      }\n\n      .underline {\n        height: 2px;\n        position: relative;\n      }\n\n      .focused-line {\n        @apply --layout-fit;\n        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));\n\n        -webkit-transform-origin: center center;\n        transform-origin: center center;\n        -webkit-transform: scale3d(0,1,1);\n        transform: scale3d(0,1,1);\n\n        @apply --paper-input-container-underline-focus;\n      }\n\n      .underline.is-highlighted .focused-line {\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .underline.is-invalid .focused-line {\n        border-color: var(--paper-input-container-invalid-color, var(--error-color));\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .unfocused-line {\n        @apply --layout-fit;\n        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline;\n      }\n\n      :host([disabled]) .unfocused-line {\n        border-bottom: 1px dashed;\n        border-color: var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline-disabled;\n      }\n\n      .input-wrapper {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        position: relative;\n      }\n\n      .input-content {\n        @apply --layout-flex-auto;\n        @apply --layout-relative;\n        max-width: 100%;\n      }\n\n      .input-content ::slotted(label),\n      .input-content ::slotted(.paper-input-label) {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        font: inherit;\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n        -webkit-transition: -webkit-transform 0.25s, width 0.25s;\n        transition: transform 0.25s, width 0.25s;\n        -webkit-transform-origin: left top;\n        transform-origin: left top;\n        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */\n        min-height: 1px;\n\n        @apply --paper-font-common-nowrap;\n        @apply --paper-font-subhead;\n        @apply --paper-input-container-label;\n        @apply --paper-transition-easing;\n      }\n\n      .input-content.label-is-floating ::slotted(label),\n      .input-content.label-is-floating ::slotted(.paper-input-label) {\n        -webkit-transform: translateY(-75%) scale(0.75);\n        transform: translateY(-75%) scale(0.75);\n\n        /* Since we scale to 75/100 of the size, we actually have 100/75 of the\n        original space now available */\n        width: 133%;\n\n        @apply --paper-input-container-label-floating;\n      }\n\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {\n        right: 0;\n        left: auto;\n        -webkit-transform-origin: right top;\n        transform-origin: right top;\n      }\n\n      .input-content.label-is-highlighted ::slotted(label),\n      .input-content.label-is-highlighted ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n\n        @apply --paper-input-container-label-focus;\n      }\n\n      .input-content.is-invalid ::slotted(label),\n      .input-content.is-invalid ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .input-content.label-is-hidden ::slotted(label),\n      .input-content.label-is-hidden ::slotted(.paper-input-label) {\n        visibility: hidden;\n      }\n\n      .input-content ::slotted(input),\n      .input-content ::slotted(iron-input),\n      .input-content ::slotted(textarea),\n      .input-content ::slotted(iron-autogrow-textarea),\n      .input-content ::slotted(.paper-input-input) {\n        @apply --paper-input-container-shared-input-style;\n        /* The apply shim doesn\'t apply the nested color custom property,\n          so we have to re-apply it here. */\n        color: var(--paper-input-container-input-color, var(--primary-text-color));\n        @apply --paper-input-container-input;\n      }\n\n      .input-content ::slotted(input)::-webkit-outer-spin-button,\n      .input-content ::slotted(input)::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      .input-content.focused ::slotted(input),\n      .input-content.focused ::slotted(iron-input),\n      .input-content.focused ::slotted(textarea),\n      .input-content.focused ::slotted(iron-autogrow-textarea),\n      .input-content.focused ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-focus;\n      }\n\n      .input-content.is-invalid ::slotted(input),\n      .input-content.is-invalid ::slotted(iron-input),\n      .input-content.is-invalid ::slotted(textarea),\n      .input-content.is-invalid ::slotted(iron-autogrow-textarea),\n      .input-content.is-invalid ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-invalid;\n      }\n\n      .prefix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n        @apply --paper-input-prefix;\n      }\n\n      .suffix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n\n        @apply --paper-input-suffix;\n      }\n\n      /* Firefox sets a min-width on the input, which can cause layout issues */\n      .input-content ::slotted(input) {\n        min-width: 0;\n      }\n\n      .input-content ::slotted(textarea) {\n        resize: none;\n      }\n\n      .add-on-content {\n        position: relative;\n      }\n\n      .add-on-content.is-invalid ::slotted(*) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .add-on-content.is-highlighted ::slotted(*) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n      }\n    </style>\n\n    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>\n\n    <div class="input-wrapper">\n      <span class="prefix"><slot name="prefix"></slot></span>\n\n      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">\n        <slot name="label"></slot>\n        <slot name="input"></slot>\n      </div>\n\n      <span class="suffix"><slot name="suffix"></slot></span>\n    </div>\n\n    <div class$="[[_computeUnderlineClass(focused,invalid)]]">\n      <div class="unfocused-line"></div>\n      <div class="focused-line"></div>\n    </div>\n\n    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">\n      <slot name="add-on"></slot>\n    </div>\n'
        ]);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = b([
          '\n<custom-style>\n  <style is="custom-style">\n    html {\n      --paper-input-container-shared-input-style: {\n        position: relative; /* to make a stacking context */\n        outline: none;\n        box-shadow: none;\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        max-width: 100%;\n        background: transparent;\n        border: none;\n        color: var(--paper-input-container-input-color, var(--primary-text-color));\n        -webkit-appearance: none;\n        text-align: inherit;\n        vertical-align: var(--paper-input-container-input-align, bottom);\n\n        @apply --paper-font-subhead;\n      };\n    }\n  </style>\n</custom-style>\n'
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function b(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      var v = Object(o.a)(f());
      function m() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        display: inline-block;\n        visibility: hidden;\n\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n\n        @apply --paper-font-caption;\n        @apply --paper-input-error;\n        position: absolute;\n        left:0;\n        right:0;\n      }\n\n      :host([invalid]) {\n        visibility: visible;\n      }\n\n      #a11yWrapper {\n        visibility: hidden;\n      }\n\n      :host([invalid]) #a11yWrapper {\n        visibility: visible;\n      }\n    </style>\n\n    \x3c!--\n    If the paper-input-error element is directly referenced by an\n    `aria-describedby` attribute, such as when used as a paper-input add-on,\n    then applying `visibility: hidden;` to the paper-input-error element itself\n    does not hide the error.\n\n    For more information, see:\n    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description\n    --\x3e\n    <div id="a11yWrapper">\n      <slot></slot>\n    </div>\n'
          ],
          [
            '\n    <style>\n      :host {\n        display: inline-block;\n        visibility: hidden;\n\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n\n        @apply --paper-font-caption;\n        @apply --paper-input-error;\n        position: absolute;\n        left:0;\n        right:0;\n      }\n\n      :host([invalid]) {\n        visibility: visible;\n      }\n\n      #a11yWrapper {\n        visibility: hidden;\n      }\n\n      :host([invalid]) #a11yWrapper {\n        visibility: visible;\n      }\n    </style>\n\n    \x3c!--\n    If the paper-input-error element is directly referenced by an\n    \\`aria-describedby\\` attribute, such as when used as a paper-input add-on,\n    then applying \\`visibility: hidden;\\` to the paper-input-error element itself\n    does not hide the error.\n\n    For more information, see:\n    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description\n    --\x3e\n    <div id="a11yWrapper">\n      <slot></slot>\n    </div>\n'
          ]
        );
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      v.setAttribute("style", "display: none;"),
        document.head.appendChild(v.content),
        Object(i.a)({
          _template: Object(o.a)(h()),
          is: "paper-input-container",
          properties: {
            noLabelFloat: { type: Boolean, value: !1 },
            alwaysFloatLabel: { type: Boolean, value: !1 },
            attrForValue: { type: String, value: "bind-value" },
            autoValidate: { type: Boolean, value: !1 },
            invalid: { observer: "_invalidChanged", type: Boolean, value: !1 },
            focused: { readOnly: !0, type: Boolean, value: !1, notify: !0 },
            _addons: { type: Array },
            _inputHasContent: { type: Boolean, value: !1 },
            _inputSelector: {
              type: String,
              value: "input,iron-input,textarea,.paper-input-input"
            },
            _boundOnFocus: {
              type: Function,
              value: function() {
                return this._onFocus.bind(this);
              }
            },
            _boundOnBlur: {
              type: Function,
              value: function() {
                return this._onBlur.bind(this);
              }
            },
            _boundOnInput: {
              type: Function,
              value: function() {
                return this._onInput.bind(this);
              }
            },
            _boundValueChanged: {
              type: Function,
              value: function() {
                return this._onValueChanged.bind(this);
              }
            }
          },
          listeners: {
            "addon-attached": "_onAddonAttached",
            "iron-input-validate": "_onIronInputValidate"
          },
          get _valueChangedEvent() {
            return this.attrForValue + "-changed";
          },
          get _propertyForValue() {
            return Object(p.b)(this.attrForValue);
          },
          get _inputElement() {
            return Object(l.a)(this).querySelector(this._inputSelector);
          },
          get _inputElementValue() {
            return (
              this._inputElement[this._propertyForValue] ||
              this._inputElement.value
            );
          },
          ready: function() {
            (this.__isFirstValueUpdate = !0),
              this._addons || (this._addons = []),
              this.addEventListener("focus", this._boundOnFocus, !0),
              this.addEventListener("blur", this._boundOnBlur, !0);
          },
          attached: function() {
            this.attrForValue
              ? this._inputElement.addEventListener(
                  this._valueChangedEvent,
                  this._boundValueChanged
                )
              : this.addEventListener("input", this._onInput),
              this._inputElementValue && "" != this._inputElementValue
                ? this._handleValueAndAutoValidate(this._inputElement)
                : this._handleValue(this._inputElement);
          },
          _onAddonAttached: function(e) {
            this._addons || (this._addons = []);
            var t = e.target;
            -1 === this._addons.indexOf(t) &&
              (this._addons.push(t),
              this.isAttached && this._handleValue(this._inputElement));
          },
          _onFocus: function() {
            this._setFocused(!0);
          },
          _onBlur: function() {
            this._setFocused(!1),
              this._handleValueAndAutoValidate(this._inputElement);
          },
          _onInput: function(e) {
            this._handleValueAndAutoValidate(e.target);
          },
          _onValueChanged: function(e) {
            var t = e.target;
            (this.__isFirstValueUpdate &&
              ((this.__isFirstValueUpdate = !1),
              void 0 === t.value || "" === t.value)) ||
              this._handleValueAndAutoValidate(e.target);
          },
          _handleValue: function(e) {
            var t = this._inputElementValue;
            t || 0 === t || ("number" === e.type && !e.checkValidity())
              ? (this._inputHasContent = !0)
              : (this._inputHasContent = !1),
              this.updateAddons({
                inputElement: e,
                value: t,
                invalid: this.invalid
              });
          },
          _handleValueAndAutoValidate: function(e) {
            var t;
            this.autoValidate &&
              e &&
              ((t = e.validate
                ? e.validate(this._inputElementValue)
                : e.checkValidity()),
              (this.invalid = !t));
            this._handleValue(e);
          },
          _onIronInputValidate: function(e) {
            this.invalid = this._inputElement.invalid;
          },
          _invalidChanged: function() {
            this._addons && this.updateAddons({ invalid: this.invalid });
          },
          updateAddons: function(e) {
            for (var t, n = 0; (t = this._addons[n]); n++) t.update(e);
          },
          _computeInputContentClass: function(e, t, n, i, o) {
            var r = "input-content";
            if (e) o && (r += " label-is-hidden"), i && (r += " is-invalid");
            else {
              var a = this.querySelector("label");
              t || o
                ? ((r += " label-is-floating"),
                  (this.$.labelAndInputContainer.style.position = "static"),
                  i
                    ? (r += " is-invalid")
                    : n && (r += " label-is-highlighted"))
                : (a &&
                    (this.$.labelAndInputContainer.style.position = "relative"),
                  i && (r += " is-invalid"));
            }
            return n && (r += " focused"), r;
          },
          _computeUnderlineClass: function(e, t) {
            var n = "underline";
            return t ? (n += " is-invalid") : e && (n += " is-highlighted"), n;
          },
          _computeAddOnContentClass: function(e, t) {
            var n = "add-on-content";
            return t ? (n += " is-invalid") : e && (n += " is-highlighted"), n;
          }
        }),
        Object(i.a)({
          _template: Object(o.a)(m()),
          is: "paper-input-error",
          behaviors: [d],
          properties: {
            invalid: { readOnly: !0, reflectToAttribute: !0, type: Boolean }
          },
          update: function(e) {
            this._setInvalid(e.invalid);
          }
        });
      var y = n(70),
        g = (n(61), n(24)),
        _ = n(23),
        w = n(31),
        x = { NextLabelID: 1, NextAddonID: 1, NextInputID: 1 },
        k = {
          properties: {
            label: { type: String },
            value: { notify: !0, type: String },
            disabled: { type: Boolean, value: !1 },
            invalid: { type: Boolean, value: !1, notify: !0 },
            allowedPattern: { type: String },
            type: { type: String },
            list: { type: String },
            pattern: { type: String },
            required: { type: Boolean, value: !1 },
            errorMessage: { type: String },
            charCounter: { type: Boolean, value: !1 },
            noLabelFloat: { type: Boolean, value: !1 },
            alwaysFloatLabel: { type: Boolean, value: !1 },
            autoValidate: { type: Boolean, value: !1 },
            validator: { type: String },
            autocomplete: { type: String, value: "off" },
            autofocus: { type: Boolean, observer: "_autofocusChanged" },
            inputmode: { type: String },
            minlength: { type: Number },
            maxlength: { type: Number },
            min: { type: String },
            max: { type: String },
            step: { type: String },
            name: { type: String },
            placeholder: { type: String, value: "" },
            readonly: { type: Boolean, value: !1 },
            size: { type: Number },
            autocapitalize: { type: String, value: "none" },
            autocorrect: { type: String, value: "off" },
            autosave: { type: String },
            results: { type: Number },
            accept: { type: String },
            multiple: { type: Boolean },
            _ariaDescribedBy: { type: String, value: "" },
            _ariaLabelledBy: { type: String, value: "" },
            _inputId: { type: String, value: "" }
          },
          listeners: { "addon-attached": "_onAddonAttached" },
          keyBindings: { "shift+tab:keydown": "_onShiftTabDown" },
          hostAttributes: { tabindex: 0 },
          get inputElement() {
            return (
              this.$ || (this.$ = {}),
              this.$.input ||
                (this._generateInputId(),
                (this.$.input = this.$$("#" + this._inputId))),
              this.$.input
            );
          },
          get _focusableElement() {
            return this.inputElement;
          },
          created: function() {
            this._typesThatHaveText = [
              "date",
              "datetime",
              "datetime-local",
              "month",
              "time",
              "week",
              "file"
            ];
          },
          attached: function() {
            this._updateAriaLabelledBy(),
              !w.a &&
                this.inputElement &&
                -1 !==
                  this._typesThatHaveText.indexOf(this.inputElement.type) &&
                (this.alwaysFloatLabel = !0);
          },
          _appendStringWithSpace: function(e, t) {
            return (e = e ? e + " " + t : t);
          },
          _onAddonAttached: function(e) {
            var t = Object(l.a)(e).rootTarget;
            if (t.id)
              this._ariaDescribedBy = this._appendStringWithSpace(
                this._ariaDescribedBy,
                t.id
              );
            else {
              var n = "paper-input-add-on-" + x.NextAddonID++;
              (t.id = n),
                (this._ariaDescribedBy = this._appendStringWithSpace(
                  this._ariaDescribedBy,
                  n
                ));
            }
          },
          validate: function() {
            return this.inputElement.validate();
          },
          _focusBlurHandler: function(e) {
            _.a._focusBlurHandler.call(this, e),
              this.focused &&
                !this._shiftTabPressed &&
                this._focusableElement &&
                this._focusableElement.focus();
          },
          _onShiftTabDown: function(e) {
            var t = this.getAttribute("tabindex");
            (this._shiftTabPressed = !0),
              this.setAttribute("tabindex", "-1"),
              this.async(function() {
                this.setAttribute("tabindex", t), (this._shiftTabPressed = !1);
              }, 1);
          },
          _handleAutoValidate: function() {
            this.autoValidate && this.validate();
          },
          updateValueAndPreserveCaret: function(e) {
            try {
              var t = this.inputElement.selectionStart;
              (this.value = e),
                (this.inputElement.selectionStart = t),
                (this.inputElement.selectionEnd = t);
            } catch (n) {
              this.value = e;
            }
          },
          _computeAlwaysFloatLabel: function(e, t) {
            return t || e;
          },
          _updateAriaLabelledBy: function() {
            var e,
              t = Object(l.a)(this.root).querySelector("label");
            t
              ? (t.id
                  ? (e = t.id)
                  : ((e = "paper-input-label-" + x.NextLabelID++), (t.id = e)),
                (this._ariaLabelledBy = e))
              : (this._ariaLabelledBy = "");
          },
          _generateInputId: function() {
            (this._inputId && "" !== this._inputId) ||
              (this._inputId = "input-" + x.NextInputID++);
          },
          _onChange: function(e) {
            this.shadowRoot &&
              this.fire(
                e.type,
                { sourceEvent: e },
                {
                  node: this,
                  bubbles: e.bubbles,
                  cancelable: e.cancelable
                }
              );
          },
          _autofocusChanged: function() {
            if (this.autofocus && this._focusableElement) {
              var e = document.activeElement;
              (e instanceof HTMLElement &&
                e !== document.body &&
                e !== document.documentElement) ||
                this._focusableElement.focus();
            }
          }
        },
        S = [_.a, g.a, k];
      function C() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([focused]) {\n        outline: none;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      input {\n        /* Firefox sets a min-width on the input, which can cause layout issues */\n        min-width: 0;\n      }\n\n      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.\n      In 2.x the <iron-input> is distributed to paper-input-container, which styles\n      it, but in order for this to work correctly, we need to reset some\n      of the native input\'s properties to inherit (from the iron-input) */\n      iron-input > input {\n        @apply --paper-input-container-shared-input-style;\n        font-family: inherit;\n        font-weight: inherit;\n        font-size: inherit;\n        letter-spacing: inherit;\n        word-spacing: inherit;\n        line-height: inherit;\n        text-shadow: inherit;\n        color: inherit;\n        cursor: inherit;\n      }\n\n      input:disabled {\n        @apply --paper-input-container-input-disabled;\n      }\n\n      input::-webkit-outer-spin-button,\n      input::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      input::-webkit-clear-button {\n        @apply --paper-input-container-input-webkit-clear;\n      }\n\n      input::-webkit-calendar-picker-indicator {\n        @apply --paper-input-container-input-webkit-calendar-picker-indicator;\n      }\n\n      input::-webkit-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input:-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-ms-clear {\n        @apply --paper-input-container-ms-clear;\n      }\n\n      input::-ms-reveal {\n        @apply --paper-input-container-ms-reveal;\n      }\n\n      input:-ms-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      label {\n        pointer-events: none;\n      }\n    </style>\n\n    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">\n\n      <slot name="prefix" slot="prefix"></slot>\n\n      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>\n\n      \x3c!-- Need to bind maxlength so that the paper-input-char-counter works correctly --\x3e\n      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">\n        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]">\n      </iron-input>\n\n      <slot name="suffix" slot="suffix"></slot>\n\n      <template is="dom-if" if="[[errorMessage]]">\n        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>\n      </template>\n\n      <template is="dom-if" if="[[charCounter]]">\n        <paper-input-char-counter slot="add-on"></paper-input-char-counter>\n      </template>\n\n    </paper-input-container>\n  '
        ]);
        return (
          (C = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        is: "paper-input",
        _template: Object(o.a)(C()),
        behaviors: [S, y.a],
        properties: { value: { type: String } },
        get _focusableElement() {
          return this.inputElement._inputElement;
        },
        listeners: { "iron-input-ready": "_onIronInputReady" },
        _onIronInputReady: function() {
          this.$.nativeInput || (this.$.nativeInput = this.$$("input")),
            this.inputElement &&
              -1 !== this._typesThatHaveText.indexOf(this.$.nativeInput.type) &&
              (this.alwaysFloatLabel = !0),
            this.inputElement.bindValue &&
              this.$.container._handleValueAndAutoValidate(this.inputElement);
        }
      });
    },
    ,
    ,
    ,
    ,
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return o;
      }),
        n.d(t, "b", function() {
          return r;
        });
      var i = new WeakMap(),
        o = function(e) {
          return function() {
            var t = e.apply(void 0, arguments);
            return i.set(t, !0), t;
          };
        },
        r = function(e) {
          return "function" == typeof e && i.has(e);
        };
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      }),
        n.d(t, "b", function() {
          return o;
        });
      var i = {},
        o = {};
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return s;
      });
      var i = n(27),
        o = n(19);
      function r(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var s = (function() {
        function e(t, n, i) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.__parts = []),
            (this.template = t),
            (this.processor = n),
            (this.options = i);
        }
        var t, n, s;
        return (
          (t = e),
          (n = [
            {
              key: "update",
              value: function(e) {
                var t = 0,
                  n = !0,
                  i = !1,
                  o = void 0;
                try {
                  for (
                    var r, a = this.__parts[Symbol.iterator]();
                    !(n = (r = a.next()).done);
                    n = !0
                  ) {
                    var s = r.value;
                    void 0 !== s && s.setValue(e[t]), t++;
                  }
                } catch (f) {
                  (i = !0), (o = f);
                } finally {
                  try {
                    n || null == a.return || a.return();
                  } finally {
                    if (i) throw o;
                  }
                }
                var l = !0,
                  c = !1,
                  d = void 0;
                try {
                  for (
                    var u, p = this.__parts[Symbol.iterator]();
                    !(l = (u = p.next()).done);
                    l = !0
                  ) {
                    var h = u.value;
                    void 0 !== h && h.commit();
                  }
                } catch (f) {
                  (c = !0), (d = f);
                } finally {
                  try {
                    l || null == p.return || p.return();
                  } finally {
                    if (c) throw d;
                  }
                }
              }
            },
            {
              key: "_clone",
              value: function() {
                for (
                  var e,
                    t = i.a
                      ? this.template.element.content.cloneNode(!0)
                      : document.importNode(this.template.element.content, !0),
                    n = [],
                    a = this.template.parts,
                    s = document.createTreeWalker(t, 133, null, !1),
                    l = 0,
                    c = 0,
                    d = s.nextNode();
                  l < a.length;

                )
                  if (((e = a[l]), Object(o.d)(e))) {
                    for (; c < e.index; )
                      c++,
                        "TEMPLATE" === d.nodeName &&
                          (n.push(d), (s.currentNode = d.content)),
                        null === (d = s.nextNode()) &&
                          ((s.currentNode = n.pop()), (d = s.nextNode()));
                    if ("node" === e.type) {
                      var u = this.processor.handleTextExpression(this.options);
                      u.insertAfterNode(d.previousSibling),
                        this.__parts.push(u);
                    } else {
                      var p;
                      (p = this.__parts).push.apply(
                        p,
                        r(
                          this.processor.handleAttributeExpressions(
                            d,
                            e.name,
                            e.strings,
                            this.options
                          )
                        )
                      );
                    }
                    l++;
                  } else this.__parts.push(void 0), l++;
                return (
                  i.a && (document.adoptNode(t), customElements.upgrade(t)), t
                );
              }
            }
          ]) && a(t.prototype, n),
          s && a(t, s),
          e
        );
      })();
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      }),
        n.d(t, "b", function() {
          return s;
        });
      var i = n(27),
        o = n(18),
        r = n(37),
        a = new WeakMap(),
        s = function(e, t, n) {
          var s = a.get(t);
          void 0 === s &&
            (Object(i.b)(t, t.firstChild),
            a.set(t, (s = new o.e(Object.assign({ templateFactory: r.b }, n)))),
            s.appendInto(t)),
            s.setValue(e),
            s.commit();
        };
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      });
      var i = n(13),
        o = new WeakMap(),
        r = Object(i.f)(function(e) {
          return function(t) {
            if (
              !(t instanceof i.a) ||
              t instanceof i.c ||
              "class" !== t.committer.name ||
              t.committer.parts.length > 1
            )
              throw new Error(
                "The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute."
              );
            var n = t.committer,
              r = n.element;
            o.has(t) || (r.className = n.strings.join(" "));
            var a = r.classList,
              s = o.get(t);
            for (var l in s) l in e || a.remove(l);
            for (var c in e) {
              var d = e[c];
              if (!s || d !== s[c]) a[d ? "add" : "remove"](c);
            }
            o.set(t, e);
          };
        });
    },
    ,
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      });
      n(3);
      var i = n(64),
        o = null,
        r = {
          properties: {
            validator: { type: String },
            invalid: {
              notify: !0,
              reflectToAttribute: !0,
              type: Boolean,
              value: !1,
              observer: "_invalidChanged"
            }
          },
          registered: function() {
            o = new i.a({ type: "validator" });
          },
          _invalidChanged: function() {
            this.invalid
              ? this.setAttribute("aria-invalid", "true")
              : this.removeAttribute("aria-invalid");
          },
          get _validator() {
            return o && o.byKey(this.validator);
          },
          hasValidator: function() {
            return null != this._validator;
          },
          validate: function(e) {
            return (
              void 0 === e && void 0 !== this.value
                ? (this.invalid = !this._getValidity(this.value))
                : (this.invalid = !this._getValidity(e)),
              !this.invalid
            );
          },
          _getValidity: function(e) {
            return !this.hasValidator() || this._validator.validate(e);
          }
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
    function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return a;
      }),
        n.d(t, "a", function() {
          return s;
        });
      n(3);
      var i = n(38),
        o = n(23),
        r = n(66),
        a = {
          observers: ["_focusedChanged(receivedFocusFromKeyboard)"],
          _focusedChanged: function(e) {
            e && this.ensureRipple(),
              this.hasRipple() && (this._ripple.holdDown = e);
          },
          _createRipple: function() {
            var e = r.a._createRipple();
            return (
              (e.id = "ink"),
              e.setAttribute("center", ""),
              e.classList.add("circle"),
              e
            );
          }
        },
        s = [i.a, o.a, r.a, a];
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      });
      n(3), n(89);
      var i = n(38),
        o = n(7),
        r = {
          properties: {
            noink: { type: Boolean, observer: "_noinkChanged" },
            _rippleContainer: { type: Object }
          },
          _buttonStateChanged: function() {
            this.focused && this.ensureRipple();
          },
          _downHandler: function(e) {
            i.b._downHandler.call(this, e),
              this.pressed && this.ensureRipple(e);
          },
          ensureRipple: function(e) {
            if (!this.hasRipple()) {
              (this._ripple = this._createRipple()),
                (this._ripple.noink = this.noink);
              var t = this._rippleContainer || this.root;
              if ((t && Object(o.a)(t).appendChild(this._ripple), e)) {
                var n = Object(o.a)(this._rippleContainer || this),
                  i = Object(o.a)(e).rootTarget;
                n.deepContains(i) && this._ripple.uiDownAction(e);
              }
            }
          },
          getRipple: function() {
            return this.ensureRipple(), this._ripple;
          },
          hasRipple: function() {
            return Boolean(this._ripple);
          },
          _createRipple: function() {
            return document.createElement("paper-ripple");
          },
          _noinkChanged: function(e) {
            this.hasRipple() && (this._ripple.noink = e);
          }
        };
    },
    function(e, t, n) {
      "use strict";
      n(3), n(40), n(94);
      var i = n(6),
        o = n(5),
        r = n(95);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n  <style include="paper-spinner-styles"></style>\n\n  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">\n    <div class="spinner-layer">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n  </div>\n'
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      var s = Object(o.a)(a());
      s.setAttribute("strip-whitespace", ""),
        Object(i.a)({
          _template: s,
          is: "paper-spinner-lite",
          behaviors: [r.a]
        });
    },
    function(e, t, n) {
      "use strict";
      var i = function(e, t) {
        return (
          e.length === t.length &&
          e.every(function(e, n) {
            return (i = e), (o = t[n]), i === o;
            var i, o;
          })
        );
      };
      t.a = function(e, t) {
        var n;
        void 0 === t && (t = i);
        var o,
          r = [],
          a = !1;
        return function() {
          for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
            s[l] = arguments[l];
          return a && n === this && t(s, r)
            ? o
            : ((o = e.apply(this, s)), (a = !0), (n = this), (r = s), o);
        };
      };
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      });
      n(3);
      var i = n(7),
        o = n(21),
        r = new Set(),
        a = {
          properties: {
            _parentResizable: {
              type: Object,
              observer: "_parentResizableChanged"
            },
            _notifyingDescendant: { type: Boolean, value: !1 }
          },
          listeners: {
            "iron-request-resize-notifications":
              "_onIronRequestResizeNotifications"
          },
          created: function() {
            (this._interestedResizables = []),
              (this._boundNotifyResize = this.notifyResize.bind(this)),
              (this._boundOnDescendantIronResize = this._onDescendantIronResize.bind(
                this
              ));
          },
          attached: function() {
            this._requestResizeNotifications();
          },
          detached: function() {
            this._parentResizable
              ? this._parentResizable.stopResizeNotificationsFor(this)
              : (r.delete(this),
                window.removeEventListener("resize", this._boundNotifyResize)),
              (this._parentResizable = null);
          },
          notifyResize: function() {
            this.isAttached &&
              (this._interestedResizables.forEach(function(e) {
                this.resizerShouldNotify(e) && this._notifyDescendant(e);
              }, this),
              this._fireResize());
          },
          assignParentResizable: function(e) {
            this._parentResizable &&
              this._parentResizable.stopResizeNotificationsFor(this),
              (this._parentResizable = e),
              e &&
                -1 === e._interestedResizables.indexOf(this) &&
                (e._interestedResizables.push(this),
                e._subscribeIronResize(this));
          },
          stopResizeNotificationsFor: function(e) {
            var t = this._interestedResizables.indexOf(e);
            t > -1 &&
              (this._interestedResizables.splice(t, 1),
              this._unsubscribeIronResize(e));
          },
          _subscribeIronResize: function(e) {
            e.addEventListener(
              "iron-resize",
              this._boundOnDescendantIronResize
            );
          },
          _unsubscribeIronResize: function(e) {
            e.removeEventListener(
              "iron-resize",
              this._boundOnDescendantIronResize
            );
          },
          resizerShouldNotify: function(e) {
            return !0;
          },
          _onDescendantIronResize: function(e) {
            this._notifyingDescendant
              ? e.stopPropagation()
              : o.f || this._fireResize();
          },
          _fireResize: function() {
            this.fire("iron-resize", null, { node: this, bubbles: !1 });
          },
          _onIronRequestResizeNotifications: function(e) {
            var t = Object(i.a)(e).rootTarget;
            t !== this &&
              (t.assignParentResizable(this),
              this._notifyDescendant(t),
              e.stopPropagation());
          },
          _parentResizableChanged: function(e) {
            e && window.removeEventListener("resize", this._boundNotifyResize);
          },
          _notifyDescendant: function(e) {
            this.isAttached &&
              ((this._notifyingDescendant = !0),
              e.notifyResize(),
              (this._notifyingDescendant = !1));
          },
          _requestResizeNotifications: function() {
            if (this.isAttached)
              if ("loading" === document.readyState) {
                var e = this._requestResizeNotifications.bind(this);
                document.addEventListener("readystatechange", function t() {
                  document.removeEventListener("readystatechange", t), e();
                });
              } else
                this._findParent(),
                  this._parentResizable
                    ? this._parentResizable._interestedResizables.forEach(
                        function(e) {
                          e !== this && e._findParent();
                        },
                        this
                      )
                    : (r.forEach(function(e) {
                        e !== this && e._findParent();
                      }, this),
                      window.addEventListener(
                        "resize",
                        this._boundNotifyResize
                      ),
                      this.notifyResize());
          },
          _findParent: function() {
            this.assignParentResizable(null),
              this.fire("iron-request-resize-notifications", null, {
                node: this,
                bubbles: !0,
                cancelable: !0
              }),
              this._parentResizable ? r.delete(this) : r.add(this);
          }
        };
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      });
      n(3);
      var i = {
        properties: {
          name: { type: String },
          value: { notify: !0, type: String },
          required: { type: Boolean, value: !1 }
        },
        attached: function() {},
        detached: function() {}
      };
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      });
      n(3);
      var i = n(7),
        o = Element.prototype,
        r =
          o.matches ||
          o.matchesSelector ||
          o.mozMatchesSelector ||
          o.msMatchesSelector ||
          o.oMatchesSelector ||
          o.webkitMatchesSelector,
        a = {
          getTabbableNodes: function(e) {
            var t = [];
            return this._collectTabbableNodes(e, t)
              ? this._sortByTabIndex(t)
              : t;
          },
          isFocusable: function(e) {
            return r.call(e, "input, select, textarea, button, object")
              ? r.call(e, ":not([disabled])")
              : r.call(
                  e,
                  "a[href], area[href], iframe, [tabindex], [contentEditable]"
                );
          },
          isTabbable: function(e) {
            return (
              this.isFocusable(e) &&
              r.call(e, ':not([tabindex="-1"])') &&
              this._isVisible(e)
            );
          },
          _normalizedTabIndex: function(e) {
            if (this.isFocusable(e)) {
              var t = e.getAttribute("tabindex") || 0;
              return Number(t);
            }
            return -1;
          },
          _collectTabbableNodes: function(e, t) {
            if (e.nodeType !== Node.ELEMENT_NODE || !this._isVisible(e))
              return !1;
            var n,
              o = e,
              r = this._normalizedTabIndex(o),
              a = r > 0;
            r >= 0 && t.push(o),
              (n =
                "content" === o.localName || "slot" === o.localName
                  ? Object(i.a)(o).getDistributedNodes()
                  : Object(i.a)(o.root || o).children);
            for (var s = 0; s < n.length; s++)
              a = this._collectTabbableNodes(n[s], t) || a;
            return a;
          },
          _isVisible: function(e) {
            var t = e.style;
            return (
              "hidden" !== t.visibility &&
              "none" !== t.display &&
              "hidden" !== (t = window.getComputedStyle(e)).visibility &&
                "none" !== t.display
            );
          },
          _sortByTabIndex: function(e) {
            var t = e.length;
            if (t < 2) return e;
            var n = Math.ceil(t / 2),
              i = this._sortByTabIndex(e.slice(0, n)),
              o = this._sortByTabIndex(e.slice(n));
            return this._mergeSortByTabIndex(i, o);
          },
          _mergeSortByTabIndex: function(e, t) {
            for (var n = []; e.length > 0 && t.length > 0; )
              this._hasLowerTabOrder(e[0], t[0])
                ? n.push(t.shift())
                : n.push(e.shift());
            return n.concat(e, t);
          },
          _hasLowerTabOrder: function(e, t) {
            var n = Math.max(e.tabIndex, 0),
              i = Math.max(t.tabIndex, 0);
            return 0 === n || 0 === i ? i > n : n > i;
          }
        };
    },
    ,
    ,
    ,
    ,
    function(e, t, n) {
      "use strict";
      n(3);
      var i = n(7),
        o = {
          properties: {
            sizingTarget: {
              type: Object,
              value: function() {
                return this;
              }
            },
            fitInto: { type: Object, value: window },
            noOverlap: { type: Boolean },
            positionTarget: { type: Element },
            horizontalAlign: { type: String },
            verticalAlign: { type: String },
            dynamicAlign: { type: Boolean },
            horizontalOffset: { type: Number, value: 0, notify: !0 },
            verticalOffset: { type: Number, value: 0, notify: !0 },
            autoFitOnAttach: { type: Boolean, value: !1 },
            _fitInfo: { type: Object }
          },
          get _fitWidth() {
            return this.fitInto === window
              ? this.fitInto.innerWidth
              : this.fitInto.getBoundingClientRect().width;
          },
          get _fitHeight() {
            return this.fitInto === window
              ? this.fitInto.innerHeight
              : this.fitInto.getBoundingClientRect().height;
          },
          get _fitLeft() {
            return this.fitInto === window
              ? 0
              : this.fitInto.getBoundingClientRect().left;
          },
          get _fitTop() {
            return this.fitInto === window
              ? 0
              : this.fitInto.getBoundingClientRect().top;
          },
          get _defaultPositionTarget() {
            var e = Object(i.a)(this).parentNode;
            return (
              e && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (e = e.host), e
            );
          },
          get _localeHorizontalAlign() {
            if (this._isRTL) {
              if ("right" === this.horizontalAlign) return "left";
              if ("left" === this.horizontalAlign) return "right";
            }
            return this.horizontalAlign;
          },
          get __shouldPosition() {
            return (
              (this.horizontalAlign || this.verticalAlign) &&
              this.positionTarget
            );
          },
          attached: function() {
            void 0 === this._isRTL &&
              (this._isRTL = "rtl" == window.getComputedStyle(this).direction),
              (this.positionTarget =
                this.positionTarget || this._defaultPositionTarget),
              this.autoFitOnAttach &&
                ("none" === window.getComputedStyle(this).display
                  ? setTimeout(
                      function() {
                        this.fit();
                      }.bind(this)
                    )
                  : (window.ShadyDOM && ShadyDOM.flush(), this.fit()));
          },
          detached: function() {
            this.__deferredFit &&
              (clearTimeout(this.__deferredFit), (this.__deferredFit = null));
          },
          fit: function() {
            this.position(), this.constrain(), this.center();
          },
          _discoverInfo: function() {
            if (!this._fitInfo) {
              var e = window.getComputedStyle(this),
                t = window.getComputedStyle(this.sizingTarget);
              this._fitInfo = {
                inlineStyle: {
                  top: this.style.top || "",
                  left: this.style.left || "",
                  position: this.style.position || ""
                },
                sizerInlineStyle: {
                  maxWidth: this.sizingTarget.style.maxWidth || "",
                  maxHeight: this.sizingTarget.style.maxHeight || "",
                  boxSizing: this.sizingTarget.style.boxSizing || ""
                },
                positionedBy: {
                  vertically:
                    "auto" !== e.top
                      ? "top"
                      : "auto" !== e.bottom
                      ? "bottom"
                      : null,
                  horizontally:
                    "auto" !== e.left
                      ? "left"
                      : "auto" !== e.right
                      ? "right"
                      : null
                },
                sizedBy: {
                  height: "none" !== t.maxHeight,
                  width: "none" !== t.maxWidth,
                  minWidth: parseInt(t.minWidth, 10) || 0,
                  minHeight: parseInt(t.minHeight, 10) || 0
                },
                margin: {
                  top: parseInt(e.marginTop, 10) || 0,
                  right: parseInt(e.marginRight, 10) || 0,
                  bottom: parseInt(e.marginBottom, 10) || 0,
                  left: parseInt(e.marginLeft, 10) || 0
                }
              };
            }
          },
          resetFit: function() {
            var e = this._fitInfo || {};
            for (var t in e.sizerInlineStyle)
              this.sizingTarget.style[t] = e.sizerInlineStyle[t];
            for (var t in e.inlineStyle) this.style[t] = e.inlineStyle[t];
            this._fitInfo = null;
          },
          refit: function() {
            var e = this.sizingTarget.scrollLeft,
              t = this.sizingTarget.scrollTop;
            this.resetFit(),
              this.fit(),
              (this.sizingTarget.scrollLeft = e),
              (this.sizingTarget.scrollTop = t);
          },
          position: function() {
            if (this.__shouldPosition) {
              this._discoverInfo(),
                (this.style.position = "fixed"),
                (this.sizingTarget.style.boxSizing = "border-box"),
                (this.style.left = "0px"),
                (this.style.top = "0px");
              var e = this.getBoundingClientRect(),
                t = this.__getNormalizedRect(this.positionTarget),
                n = this.__getNormalizedRect(this.fitInto),
                i = this._fitInfo.margin,
                o = {
                  width: e.width + i.left + i.right,
                  height: e.height + i.top + i.bottom
                },
                r = this.__getPosition(
                  this._localeHorizontalAlign,
                  this.verticalAlign,
                  o,
                  e,
                  t,
                  n
                ),
                a = r.left + i.left,
                s = r.top + i.top,
                l = Math.min(n.right - i.right, a + e.width),
                c = Math.min(n.bottom - i.bottom, s + e.height);
              (a = Math.max(
                n.left + i.left,
                Math.min(a, l - this._fitInfo.sizedBy.minWidth)
              )),
                (s = Math.max(
                  n.top + i.top,
                  Math.min(s, c - this._fitInfo.sizedBy.minHeight)
                )),
                (this.sizingTarget.style.maxWidth =
                  Math.max(l - a, this._fitInfo.sizedBy.minWidth) + "px"),
                (this.sizingTarget.style.maxHeight =
                  Math.max(c - s, this._fitInfo.sizedBy.minHeight) + "px"),
                (this.style.left = a - e.left + "px"),
                (this.style.top = s - e.top + "px");
            }
          },
          constrain: function() {
            if (!this.__shouldPosition) {
              this._discoverInfo();
              var e = this._fitInfo;
              e.positionedBy.vertically ||
                ((this.style.position = "fixed"), (this.style.top = "0px")),
                e.positionedBy.horizontally ||
                  ((this.style.position = "fixed"), (this.style.left = "0px")),
                (this.sizingTarget.style.boxSizing = "border-box");
              var t = this.getBoundingClientRect();
              e.sizedBy.height ||
                this.__sizeDimension(
                  t,
                  e.positionedBy.vertically,
                  "top",
                  "bottom",
                  "Height"
                ),
                e.sizedBy.width ||
                  this.__sizeDimension(
                    t,
                    e.positionedBy.horizontally,
                    "left",
                    "right",
                    "Width"
                  );
            }
          },
          _sizeDimension: function(e, t, n, i, o) {
            this.__sizeDimension(e, t, n, i, o);
          },
          __sizeDimension: function(e, t, n, i, o) {
            var r = this._fitInfo,
              a = this.__getNormalizedRect(this.fitInto),
              s = "Width" === o ? a.width : a.height,
              l = t === i,
              c = l ? s - e[i] : e[n],
              d = r.margin[l ? n : i],
              u = "offset" + o,
              p = this[u] - this.sizingTarget[u];
            this.sizingTarget.style["max" + o] = s - d - c - p + "px";
          },
          center: function() {
            if (!this.__shouldPosition) {
              this._discoverInfo();
              var e = this._fitInfo.positionedBy;
              if (!e.vertically || !e.horizontally) {
                (this.style.position = "fixed"),
                  e.vertically || (this.style.top = "0px"),
                  e.horizontally || (this.style.left = "0px");
                var t = this.getBoundingClientRect(),
                  n = this.__getNormalizedRect(this.fitInto);
                if (!e.vertically) {
                  var i = n.top - t.top + (n.height - t.height) / 2;
                  this.style.top = i + "px";
                }
                if (!e.horizontally) {
                  var o = n.left - t.left + (n.width - t.width) / 2;
                  this.style.left = o + "px";
                }
              }
            }
          },
          __getNormalizedRect: function(e) {
            return e === document.documentElement || e === window
              ? {
                  top: 0,
                  left: 0,
                  width: window.innerWidth,
                  height: window.innerHeight,
                  right: window.innerWidth,
                  bottom: window.innerHeight
                }
              : e.getBoundingClientRect();
          },
          __getOffscreenArea: function(e, t, n) {
            var i =
                Math.min(0, e.top) + Math.min(0, n.bottom - (e.top + t.height)),
              o =
                Math.min(0, e.left) + Math.min(0, n.right - (e.left + t.width));
            return Math.abs(i) * t.width + Math.abs(o) * t.height;
          },
          __getPosition: function(e, t, n, i, o, r) {
            var a,
              s = [
                {
                  verticalAlign: "top",
                  horizontalAlign: "left",
                  top: o.top + this.verticalOffset,
                  left: o.left + this.horizontalOffset
                },
                {
                  verticalAlign: "top",
                  horizontalAlign: "right",
                  top: o.top + this.verticalOffset,
                  left: o.right - n.width - this.horizontalOffset
                },
                {
                  verticalAlign: "bottom",
                  horizontalAlign: "left",
                  top: o.bottom - n.height - this.verticalOffset,
                  left: o.left + this.horizontalOffset
                },
                {
                  verticalAlign: "bottom",
                  horizontalAlign: "right",
                  top: o.bottom - n.height - this.verticalOffset,
                  left: o.right - n.width - this.horizontalOffset
                }
              ];
            if (this.noOverlap) {
              for (var l = 0, c = s.length; l < c; l++) {
                var d = {};
                for (var u in s[l]) d[u] = s[l][u];
                s.push(d);
              }
              (s[0].top = s[1].top += o.height),
                (s[2].top = s[3].top -= o.height),
                (s[4].left = s[6].left += o.width),
                (s[5].left = s[7].left -= o.width);
            }
            (t = "auto" === t ? null : t),
              ((e = "auto" === e ? null : e) && "center" !== e) ||
                (s.push({
                  verticalAlign: "top",
                  horizontalAlign: "center",
                  top:
                    o.top +
                    this.verticalOffset +
                    (this.noOverlap ? o.height : 0),
                  left:
                    o.left - i.width / 2 + o.width / 2 + this.horizontalOffset
                }),
                s.push({
                  verticalAlign: "bottom",
                  horizontalAlign: "center",
                  top:
                    o.bottom -
                    n.height -
                    this.verticalOffset -
                    (this.noOverlap ? o.height : 0),
                  left:
                    o.left - i.width / 2 + o.width / 2 + this.horizontalOffset
                })),
              (t && "middle" !== t) ||
                (s.push({
                  verticalAlign: "middle",
                  horizontalAlign: "left",
                  top:
                    o.top - i.height / 2 + o.height / 2 + this.verticalOffset,
                  left:
                    o.left +
                    this.horizontalOffset +
                    (this.noOverlap ? o.width : 0)
                }),
                s.push({
                  verticalAlign: "middle",
                  horizontalAlign: "right",
                  top:
                    o.top - i.height / 2 + o.height / 2 + this.verticalOffset,
                  left:
                    o.right -
                    n.width -
                    this.horizontalOffset -
                    (this.noOverlap ? o.width : 0)
                })),
              "middle" === t &&
                "center" === e &&
                s.push({
                  verticalAlign: "middle",
                  horizontalAlign: "center",
                  top:
                    o.top - i.height / 2 + o.height / 2 + this.verticalOffset,
                  left:
                    o.left - i.width / 2 + o.width / 2 + this.horizontalOffset
                });
            for (l = 0; l < s.length; l++) {
              var p = s[l],
                h = p.verticalAlign === t,
                f = p.horizontalAlign === e;
              if (!this.dynamicAlign && !this.noOverlap && h && f) {
                a = p;
                break;
              }
              var b = (!t || h) && (!e || f);
              if (this.dynamicAlign || b) {
                if (
                  ((p.offscreenArea = this.__getOffscreenArea(p, n, r)),
                  0 === p.offscreenArea && b)
                ) {
                  a = p;
                  break;
                }
                a = a || p;
                var v = p.offscreenArea - a.offscreenArea;
                (v < 0 || (0 === v && (h || f))) && (a = p);
              }
            }
            return a;
          }
        },
        r = n(69),
        a = n(21),
        s = n(71),
        l = n(6),
        c = n(5);
      function d() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n    <style>\n      :host {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: var(--iron-overlay-backdrop-background-color, #000);\n        opacity: 0;\n        transition: opacity 0.2s;\n        pointer-events: none;\n        @apply --iron-overlay-backdrop;\n      }\n\n      :host(.opened) {\n        opacity: var(--iron-overlay-backdrop-opacity, 0.6);\n        pointer-events: auto;\n        @apply --iron-overlay-backdrop-opened;\n      }\n    </style>\n\n    <slot></slot>\n"
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      Object(l.a)({
        _template: Object(c.a)(d()),
        is: "iron-overlay-backdrop",
        properties: {
          opened: {
            reflectToAttribute: !0,
            type: Boolean,
            value: !1,
            observer: "_openedChanged"
          }
        },
        listeners: { transitionend: "_onTransitionend" },
        created: function() {
          this.__openedRaf = null;
        },
        attached: function() {
          this.opened && this._openedChanged(this.opened);
        },
        prepare: function() {
          this.opened &&
            !this.parentNode &&
            Object(i.a)(document.body).appendChild(this);
        },
        open: function() {
          this.opened = !0;
        },
        close: function() {
          this.opened = !1;
        },
        complete: function() {
          this.opened ||
            this.parentNode !== document.body ||
            Object(i.a)(this.parentNode).removeChild(this);
        },
        _onTransitionend: function(e) {
          e && e.target === this && this.complete();
        },
        _openedChanged: function(e) {
          if (e) this.prepare();
          else {
            var t = window.getComputedStyle(this);
            ("0s" !== t.transitionDuration && 0 != t.opacity) ||
              this.complete();
          }
          this.isAttached &&
            (this.__openedRaf &&
              (window.cancelAnimationFrame(this.__openedRaf),
              (this.__openedRaf = null)),
            (this.scrollTop = this.scrollTop),
            (this.__openedRaf = window.requestAnimationFrame(
              function() {
                (this.__openedRaf = null),
                  this.toggleClass("opened", this.opened);
              }.bind(this)
            )));
        }
      });
      var u = n(24),
        p = n(48),
        h = function() {
          (this._overlays = []),
            (this._minimumZ = 101),
            (this._backdropElement = null),
            p.a(document.documentElement, "tap", function() {}),
            document.addEventListener(
              "tap",
              this._onCaptureClick.bind(this),
              !0
            ),
            document.addEventListener(
              "focus",
              this._onCaptureFocus.bind(this),
              !0
            ),
            document.addEventListener(
              "keydown",
              this._onCaptureKeyDown.bind(this),
              !0
            );
        };
      h.prototype = {
        constructor: h,
        get backdropElement() {
          return (
            this._backdropElement ||
              (this._backdropElement = document.createElement(
                "iron-overlay-backdrop"
              )),
            this._backdropElement
          );
        },
        get deepActiveElement() {
          var e = document.activeElement;
          for (
            (e && e instanceof Element != !1) || (e = document.body);
            e.root && Object(i.a)(e.root).activeElement;

          )
            e = Object(i.a)(e.root).activeElement;
          return e;
        },
        _bringOverlayAtIndexToFront: function(e) {
          var t = this._overlays[e];
          if (t) {
            var n = this._overlays.length - 1,
              i = this._overlays[n];
            if ((i && this._shouldBeBehindOverlay(t, i) && n--, !(e >= n))) {
              var o = Math.max(this.currentOverlayZ(), this._minimumZ);
              for (this._getZ(t) <= o && this._applyOverlayZ(t, o); e < n; )
                (this._overlays[e] = this._overlays[e + 1]), e++;
              this._overlays[n] = t;
            }
          }
        },
        addOrRemoveOverlay: function(e) {
          e.opened ? this.addOverlay(e) : this.removeOverlay(e);
        },
        addOverlay: function(e) {
          var t = this._overlays.indexOf(e);
          if (t >= 0)
            return (
              this._bringOverlayAtIndexToFront(t), void this.trackBackdrop()
            );
          var n = this._overlays.length,
            i = this._overlays[n - 1],
            o = Math.max(this._getZ(i), this._minimumZ),
            r = this._getZ(e);
          if (i && this._shouldBeBehindOverlay(e, i)) {
            this._applyOverlayZ(i, o), n--;
            var a = this._overlays[n - 1];
            o = Math.max(this._getZ(a), this._minimumZ);
          }
          r <= o && this._applyOverlayZ(e, o),
            this._overlays.splice(n, 0, e),
            this.trackBackdrop();
        },
        removeOverlay: function(e) {
          var t = this._overlays.indexOf(e);
          -1 !== t && (this._overlays.splice(t, 1), this.trackBackdrop());
        },
        currentOverlay: function() {
          var e = this._overlays.length - 1;
          return this._overlays[e];
        },
        currentOverlayZ: function() {
          return this._getZ(this.currentOverlay());
        },
        ensureMinimumZ: function(e) {
          this._minimumZ = Math.max(this._minimumZ, e);
        },
        focusOverlay: function() {
          var e = this.currentOverlay();
          e && e._applyFocus();
        },
        trackBackdrop: function() {
          var e = this._overlayWithBackdrop();
          (e || this._backdropElement) &&
            ((this.backdropElement.style.zIndex = this._getZ(e) - 1),
            (this.backdropElement.opened = !!e),
            this.backdropElement.prepare());
        },
        getBackdrops: function() {
          for (var e = [], t = 0; t < this._overlays.length; t++)
            this._overlays[t].withBackdrop && e.push(this._overlays[t]);
          return e;
        },
        backdropZ: function() {
          return this._getZ(this._overlayWithBackdrop()) - 1;
        },
        _overlayWithBackdrop: function() {
          for (var e = this._overlays.length - 1; e >= 0; e--)
            if (this._overlays[e].withBackdrop) return this._overlays[e];
        },
        _getZ: function(e) {
          var t = this._minimumZ;
          if (e) {
            var n = Number(e.style.zIndex || window.getComputedStyle(e).zIndex);
            n == n && (t = n);
          }
          return t;
        },
        _setZ: function(e, t) {
          e.style.zIndex = t;
        },
        _applyOverlayZ: function(e, t) {
          this._setZ(e, t + 2);
        },
        _overlayInPath: function(e) {
          e = e || [];
          for (var t = 0; t < e.length; t++)
            if (e[t]._manager === this) return e[t];
        },
        _onCaptureClick: function(e) {
          var t = this._overlays.length - 1;
          if (-1 !== t)
            for (
              var n, o = Object(i.a)(e).path;
              (n = this._overlays[t]) &&
              this._overlayInPath(o) !== n &&
              (n._onCaptureClick(e), n.allowClickThrough);

            )
              t--;
        },
        _onCaptureFocus: function(e) {
          var t = this.currentOverlay();
          t && t._onCaptureFocus(e);
        },
        _onCaptureKeyDown: function(e) {
          var t = this.currentOverlay();
          t &&
            (u.a.keyboardEventMatchesKeys(e, "esc")
              ? t._onCaptureEsc(e)
              : u.a.keyboardEventMatchesKeys(e, "tab") && t._onCaptureTab(e));
        },
        _shouldBeBehindOverlay: function(e, t) {
          return !e.alwaysOnTop && t.alwaysOnTop;
        }
      };
      var f,
        b,
        v = new h(),
        m = { pageX: 0, pageY: 0 },
        y = null,
        g = [],
        _ = [
          "wheel",
          "mousewheel",
          "DOMMouseScroll",
          "touchstart",
          "touchmove"
        ];
      function w(e) {
        k.indexOf(e) >= 0 ||
          (0 === k.length &&
            (function() {
              f =
                f ||
                function(e) {
                  e.cancelable &&
                    (function(e) {
                      var t = Object(i.a)(e).rootTarget;
                      "touchmove" !== e.type &&
                        y !== t &&
                        ((y = t),
                        (g = (function(e) {
                          for (var t = [], n = e.indexOf(b), i = 0; i <= n; i++)
                            if (e[i].nodeType === Node.ELEMENT_NODE) {
                              var o = e[i],
                                r = o.style;
                              "scroll" !== r.overflow &&
                                "auto" !== r.overflow &&
                                (r = window.getComputedStyle(o)),
                                ("scroll" !== r.overflow &&
                                  "auto" !== r.overflow) ||
                                  t.push(o);
                            }
                          return t;
                        })(Object(i.a)(e).path)));
                      if (!g.length) return !0;
                      if ("touchstart" === e.type) return !1;
                      var n = (function(e) {
                        var t = { deltaX: e.deltaX, deltaY: e.deltaY };
                        if ("deltaX" in e);
                        else if ("wheelDeltaX" in e && "wheelDeltaY" in e)
                          (t.deltaX = -e.wheelDeltaX),
                            (t.deltaY = -e.wheelDeltaY);
                        else if ("wheelDelta" in e)
                          (t.deltaX = 0), (t.deltaY = -e.wheelDelta);
                        else if ("axis" in e)
                          (t.deltaX = 1 === e.axis ? e.detail : 0),
                            (t.deltaY = 2 === e.axis ? e.detail : 0);
                        else if (e.targetTouches) {
                          var n = e.targetTouches[0];
                          (t.deltaX = m.pageX - n.pageX),
                            (t.deltaY = m.pageY - n.pageY);
                        }
                        return t;
                      })(e);
                      return !(function(e, t, n) {
                        if (!t && !n) return;
                        for (
                          var i = Math.abs(n) >= Math.abs(t), o = 0;
                          o < e.length;
                          o++
                        ) {
                          var r = e[o];
                          if (
                            i
                              ? n < 0
                                ? r.scrollTop > 0
                                : r.scrollTop < r.scrollHeight - r.clientHeight
                              : t < 0
                              ? r.scrollLeft > 0
                              : r.scrollLeft < r.scrollWidth - r.clientWidth
                          )
                            return r;
                        }
                      })(g, n.deltaX, n.deltaY);
                    })(e) &&
                    e.preventDefault();
                  if (e.targetTouches) {
                    var t = e.targetTouches[0];
                    (m.pageX = t.pageX), (m.pageY = t.pageY);
                  }
                }.bind(void 0);
              for (var e = 0, t = _.length; e < t; e++)
                document.addEventListener(_[e], f, {
                  capture: !0,
                  passive: !1
                });
            })(),
          k.push(e),
          (b = k[k.length - 1]),
          [],
          []);
      }
      function x(e) {
        var t = k.indexOf(e);
        -1 !== t &&
          (k.splice(t, 1),
          (b = k[k.length - 1]),
          [],
          [],
          0 === k.length &&
            (function() {
              for (var e = 0, t = _.length; e < t; e++)
                document.removeEventListener(_[e], f, {
                  capture: !0,
                  passive: !1
                });
            })());
      }
      var k = [];
      n.d(t, "b", function() {
        return S;
      }),
        n.d(t, "a", function() {
          return C;
        });
      var S = {
          properties: {
            opened: {
              observer: "_openedChanged",
              type: Boolean,
              value: !1,
              notify: !0
            },
            canceled: {
              observer: "_canceledChanged",
              readOnly: !0,
              type: Boolean,
              value: !1
            },
            withBackdrop: { observer: "_withBackdropChanged", type: Boolean },
            noAutoFocus: { type: Boolean, value: !1 },
            noCancelOnEscKey: { type: Boolean, value: !1 },
            noCancelOnOutsideClick: { type: Boolean, value: !1 },
            closingReason: { type: Object },
            restoreFocusOnClose: { type: Boolean, value: !1 },
            allowClickThrough: { type: Boolean },
            alwaysOnTop: { type: Boolean },
            scrollAction: { type: String },
            _manager: { type: Object, value: v },
            _focusedChild: { type: Object }
          },
          listeners: { "iron-resize": "_onIronResize" },
          observers: [
            "__updateScrollObservers(isAttached, opened, scrollAction)"
          ],
          get backdropElement() {
            return this._manager.backdropElement;
          },
          get _focusNode() {
            return (
              this._focusedChild ||
              Object(i.a)(this).querySelector("[autofocus]") ||
              this
            );
          },
          get _focusableNodes() {
            return s.a.getTabbableNodes(this);
          },
          ready: function() {
            (this.__isAnimating = !1),
              (this.__shouldRemoveTabIndex = !1),
              (this.__firstFocusableNode = this.__lastFocusableNode = null),
              (this.__rafs = {}),
              (this.__restoreFocusNode = null),
              (this.__scrollTop = this.__scrollLeft = null),
              (this.__onCaptureScroll = this.__onCaptureScroll.bind(this)),
              (this.__rootNodes = null),
              this._ensureSetup();
          },
          attached: function() {
            this.opened && this._openedChanged(this.opened),
              (this._observer = Object(i.a)(this).observeNodes(
                this._onNodesChange
              ));
          },
          detached: function() {
            for (var e in (Object(i.a)(this).unobserveNodes(this._observer),
            (this._observer = null),
            this.__rafs))
              null !== this.__rafs[e] && cancelAnimationFrame(this.__rafs[e]);
            (this.__rafs = {}),
              this._manager.removeOverlay(this),
              this.__isAnimating &&
                (this.opened
                  ? this._finishRenderOpened()
                  : (this._applyFocus(), this._finishRenderClosed()));
          },
          toggle: function() {
            this._setCanceled(!1), (this.opened = !this.opened);
          },
          open: function() {
            this._setCanceled(!1), (this.opened = !0);
          },
          close: function() {
            this._setCanceled(!1), (this.opened = !1);
          },
          cancel: function(e) {
            this.fire("iron-overlay-canceled", e, {
              cancelable: !0
            }).defaultPrevented || (this._setCanceled(!0), (this.opened = !1));
          },
          invalidateTabbables: function() {
            this.__firstFocusableNode = this.__lastFocusableNode = null;
          },
          _ensureSetup: function() {
            this._overlaySetup ||
              ((this._overlaySetup = !0),
              (this.style.outline = "none"),
              (this.style.display = "none"));
          },
          _openedChanged: function(e) {
            e
              ? this.removeAttribute("aria-hidden")
              : this.setAttribute("aria-hidden", "true"),
              this.isAttached &&
                ((this.__isAnimating = !0),
                this.__deraf("__openedChanged", this.__openedChanged));
          },
          _canceledChanged: function() {
            (this.closingReason = this.closingReason || {}),
              (this.closingReason.canceled = this.canceled);
          },
          _withBackdropChanged: function() {
            this.withBackdrop && !this.hasAttribute("tabindex")
              ? (this.setAttribute("tabindex", "-1"),
                (this.__shouldRemoveTabIndex = !0))
              : this.__shouldRemoveTabIndex &&
                (this.removeAttribute("tabindex"),
                (this.__shouldRemoveTabIndex = !1)),
              this.opened && this.isAttached && this._manager.trackBackdrop();
          },
          _prepareRenderOpened: function() {
            (this.__restoreFocusNode = this._manager.deepActiveElement),
              this._preparePositioning(),
              this.refit(),
              this._finishPositioning(),
              this.noAutoFocus &&
                document.activeElement === this._focusNode &&
                (this._focusNode.blur(), this.__restoreFocusNode.focus());
          },
          _renderOpened: function() {
            this._finishRenderOpened();
          },
          _renderClosed: function() {
            this._finishRenderClosed();
          },
          _finishRenderOpened: function() {
            this.notifyResize(),
              (this.__isAnimating = !1),
              this.fire("iron-overlay-opened");
          },
          _finishRenderClosed: function() {
            (this.style.display = "none"),
              (this.style.zIndex = ""),
              this.notifyResize(),
              (this.__isAnimating = !1),
              this.fire("iron-overlay-closed", this.closingReason);
          },
          _preparePositioning: function() {
            (this.style.transition = this.style.webkitTransition = "none"),
              (this.style.transform = this.style.webkitTransform = "none"),
              (this.style.display = "");
          },
          _finishPositioning: function() {
            (this.style.display = "none"),
              (this.scrollTop = this.scrollTop),
              (this.style.transition = this.style.webkitTransition = ""),
              (this.style.transform = this.style.webkitTransform = ""),
              (this.style.display = ""),
              (this.scrollTop = this.scrollTop);
          },
          _applyFocus: function() {
            if (this.opened) this.noAutoFocus || this._focusNode.focus();
            else {
              if (this.restoreFocusOnClose && this.__restoreFocusNode) {
                var e = this._manager.deepActiveElement;
                (e === document.body || Object(i.a)(this).deepContains(e)) &&
                  this.__restoreFocusNode.focus();
              }
              (this.__restoreFocusNode = null),
                this._focusNode.blur(),
                (this._focusedChild = null);
            }
          },
          _onCaptureClick: function(e) {
            this.noCancelOnOutsideClick || this.cancel(e);
          },
          _onCaptureFocus: function(e) {
            if (this.withBackdrop) {
              var t = Object(i.a)(e).path;
              -1 === t.indexOf(this)
                ? (e.stopPropagation(), this._applyFocus())
                : (this._focusedChild = t[0]);
            }
          },
          _onCaptureEsc: function(e) {
            this.noCancelOnEscKey || this.cancel(e);
          },
          _onCaptureTab: function(e) {
            if (this.withBackdrop) {
              this.__ensureFirstLastFocusables();
              var t = e.shiftKey,
                n = t ? this.__firstFocusableNode : this.__lastFocusableNode,
                i = t ? this.__lastFocusableNode : this.__firstFocusableNode,
                o = !1;
              if (n === i) o = !0;
              else {
                var r = this._manager.deepActiveElement;
                o = r === n || r === this;
              }
              o &&
                (e.preventDefault(),
                (this._focusedChild = i),
                this._applyFocus());
            }
          },
          _onIronResize: function() {
            this.opened &&
              !this.__isAnimating &&
              this.__deraf("refit", this.refit);
          },
          _onNodesChange: function() {
            this.opened &&
              !this.__isAnimating &&
              (this.invalidateTabbables(), this.notifyResize());
          },
          __ensureFirstLastFocusables: function() {
            var e = this._focusableNodes;
            (this.__firstFocusableNode = e[0]),
              (this.__lastFocusableNode = e[e.length - 1]);
          },
          __openedChanged: function() {
            this.opened
              ? (this._prepareRenderOpened(),
                this._manager.addOverlay(this),
                this._applyFocus(),
                this._renderOpened())
              : (this._manager.removeOverlay(this),
                this._applyFocus(),
                this._renderClosed());
          },
          __deraf: function(e, t) {
            var n = this.__rafs;
            null !== n[e] && cancelAnimationFrame(n[e]),
              (n[e] = requestAnimationFrame(
                function() {
                  (n[e] = null), t.call(this);
                }.bind(this)
              ));
          },
          __updateScrollObservers: function(e, t, n) {
            e && t && this.__isValidScrollAction(n)
              ? ("lock" === n && (this.__saveScrollPosition(), w(this)),
                this.__addScrollListeners())
              : (x(this), this.__removeScrollListeners());
          },
          __addScrollListeners: function() {
            if (!this.__rootNodes) {
              if (((this.__rootNodes = []), a.f))
                for (var e = this; e; )
                  e.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
                    e.host &&
                    this.__rootNodes.push(e),
                    (e = e.host || e.assignedSlot || e.parentNode);
              this.__rootNodes.push(document);
            }
            this.__rootNodes.forEach(function(e) {
              e.addEventListener("scroll", this.__onCaptureScroll, {
                capture: !0,
                passive: !0
              });
            }, this);
          },
          __removeScrollListeners: function() {
            this.__rootNodes &&
              this.__rootNodes.forEach(function(e) {
                e.removeEventListener("scroll", this.__onCaptureScroll, {
                  capture: !0,
                  passive: !0
                });
              }, this),
              this.isAttached || (this.__rootNodes = null);
          },
          __isValidScrollAction: function(e) {
            return "lock" === e || "refit" === e || "cancel" === e;
          },
          __onCaptureScroll: function(e) {
            if (!(this.__isAnimating || Object(i.a)(e).path.indexOf(this) >= 0))
              switch (this.scrollAction) {
                case "lock":
                  this.__restoreScrollPosition();
                  break;
                case "refit":
                  this.__deraf("refit", this.refit);
                  break;
                case "cancel":
                  this.cancel(e);
              }
          },
          __saveScrollPosition: function() {
            document.scrollingElement
              ? ((this.__scrollTop = document.scrollingElement.scrollTop),
                (this.__scrollLeft = document.scrollingElement.scrollLeft))
              : ((this.__scrollTop = Math.max(
                  document.documentElement.scrollTop,
                  document.body.scrollTop
                )),
                (this.__scrollLeft = Math.max(
                  document.documentElement.scrollLeft,
                  document.body.scrollLeft
                )));
          },
          __restoreScrollPosition: function() {
            document.scrollingElement
              ? ((document.scrollingElement.scrollTop = this.__scrollTop),
                (document.scrollingElement.scrollLeft = this.__scrollLeft))
              : ((document.documentElement.scrollTop = document.body.scrollTop = this.__scrollTop),
                (document.documentElement.scrollLeft = document.body.scrollLeft = this.__scrollLeft));
          }
        },
        C = [o, r.a, S];
    },
    ,
    ,
    function(e, t, n) {
      "use strict";
      n(3);
      var i = n(24),
        o = n(81),
        r = {
          properties: {
            multi: { type: Boolean, value: !1, observer: "multiChanged" },
            selectedValues: {
              type: Array,
              notify: !0,
              value: function() {
                return [];
              }
            },
            selectedItems: {
              type: Array,
              readOnly: !0,
              notify: !0,
              value: function() {
                return [];
              }
            }
          },
          observers: ["_updateSelected(selectedValues.splices)"],
          select: function(e) {
            this.multi ? this._toggleSelected(e) : (this.selected = e);
          },
          multiChanged: function(e) {
            (this._selection.multi = e), this._updateSelected();
          },
          get _shouldUpdateSelection() {
            return (
              null != this.selected ||
              (null != this.selectedValues && this.selectedValues.length)
            );
          },
          _updateAttrForSelected: function() {
            this.multi
              ? this.selectedItems &&
                this.selectedItems.length > 0 &&
                (this.selectedValues = this.selectedItems
                  .map(function(e) {
                    return this._indexToValue(this.indexOf(e));
                  }, this)
                  .filter(function(e) {
                    return null != e;
                  }, this))
              : o.a._updateAttrForSelected.apply(this);
          },
          _updateSelected: function() {
            this.multi
              ? this._selectMulti(this.selectedValues)
              : this._selectSelected(this.selected);
          },
          _selectMulti: function(e) {
            e = e || [];
            var t = (this._valuesToItems(e) || []).filter(function(e) {
              return null != e;
            });
            this._selection.clear(t);
            for (var n = 0; n < t.length; n++)
              this._selection.setItemSelected(t[n], !0);
            this.fallbackSelection &&
              !this._selection.get().length &&
              this._valueToItem(this.fallbackSelection) &&
                this.select(this.fallbackSelection);
          },
          _selectionChange: function() {
            var e = this._selection.get();
            this.multi
              ? (this._setSelectedItems(e),
                this._setSelectedItem(e.length ? e[0] : null))
              : null != e
              ? (this._setSelectedItems([e]), this._setSelectedItem(e))
              : (this._setSelectedItems([]), this._setSelectedItem(null));
          },
          _toggleSelected: function(e) {
            var t = this.selectedValues.indexOf(e);
            t < 0
              ? this.push("selectedValues", e)
              : this.splice("selectedValues", t, 1);
          },
          _valuesToItems: function(e) {
            return null == e
              ? null
              : e.map(function(e) {
                  return this._valueToItem(e);
                }, this);
          }
        },
        a = [o.a, r],
        s = n(7);
      n.d(t, "b", function() {
        return l;
      }),
        n.d(t, "a", function() {
          return c;
        });
      var l = {
          properties: {
            focusedItem: {
              observer: "_focusedItemChanged",
              readOnly: !0,
              type: Object
            },
            attrForItemTitle: { type: String },
            disabled: { type: Boolean, value: !1, observer: "_disabledChanged" }
          },
          _MODIFIER_KEYS: [
            "Alt",
            "AltGraph",
            "CapsLock",
            "Control",
            "Fn",
            "FnLock",
            "Hyper",
            "Meta",
            "NumLock",
            "OS",
            "ScrollLock",
            "Shift",
            "Super",
            "Symbol",
            "SymbolLock"
          ],
          _SEARCH_RESET_TIMEOUT_MS: 1e3,
          _previousTabIndex: 0,
          hostAttributes: { role: "menu" },
          observers: ["_updateMultiselectable(multi)"],
          listeners: {
            focus: "_onFocus",
            keydown: "_onKeydown",
            "iron-items-changed": "_onIronItemsChanged"
          },
          keyBindings: {
            up: "_onUpKey",
            down: "_onDownKey",
            esc: "_onEscKey",
            "shift+tab:keydown": "_onShiftTabDown"
          },
          attached: function() {
            this._resetTabindices();
          },
          select: function(e) {
            this._defaultFocusAsync &&
              (this.cancelAsync(this._defaultFocusAsync),
              (this._defaultFocusAsync = null));
            var t = this._valueToItem(e);
            (t && t.hasAttribute("disabled")) ||
              (this._setFocusedItem(t), r.select.apply(this, arguments));
          },
          _resetTabindices: function() {
            var e = this.multi
              ? this.selectedItems && this.selectedItems[0]
              : this.selectedItem;
            this.items.forEach(function(t) {
              t.setAttribute("tabindex", t === e ? "0" : "-1"),
                t.setAttribute("aria-selected", this._selection.isSelected(t));
            }, this);
          },
          _updateMultiselectable: function(e) {
            e
              ? this.setAttribute("aria-multiselectable", "true")
              : this.removeAttribute("aria-multiselectable");
          },
          _focusWithKeyboardEvent: function(e) {
            if (-1 === this._MODIFIER_KEYS.indexOf(e.key)) {
              this.cancelDebouncer("_clearSearchText");
              for (
                var t,
                  n = this._searchText || "",
                  i = (n += (e.key && 1 == e.key.length
                    ? e.key
                    : String.fromCharCode(e.keyCode)
                  ).toLocaleLowerCase()).length,
                  o = 0;
                (t = this.items[o]);
                o++
              )
                if (!t.hasAttribute("disabled")) {
                  var r = this.attrForItemTitle || "textContent",
                    a = (t[r] || t.getAttribute(r) || "").trim();
                  if (
                    !(a.length < i) &&
                    a.slice(0, i).toLocaleLowerCase() == n
                  ) {
                    this._setFocusedItem(t);
                    break;
                  }
                }
              (this._searchText = n),
                this.debounce(
                  "_clearSearchText",
                  this._clearSearchText,
                  this._SEARCH_RESET_TIMEOUT_MS
                );
            }
          },
          _clearSearchText: function() {
            this._searchText = "";
          },
          _focusPrevious: function() {
            for (
              var e = this.items.length,
                t = Number(this.indexOf(this.focusedItem)),
                n = 1;
              n < e + 1;
              n++
            ) {
              var i = this.items[(t - n + e) % e];
              if (!i.hasAttribute("disabled")) {
                var o = Object(s.a)(i).getOwnerRoot() || document;
                if (
                  (this._setFocusedItem(i), Object(s.a)(o).activeElement == i)
                )
                  return;
              }
            }
          },
          _focusNext: function() {
            for (
              var e = this.items.length,
                t = Number(this.indexOf(this.focusedItem)),
                n = 1;
              n < e + 1;
              n++
            ) {
              var i = this.items[(t + n) % e];
              if (!i.hasAttribute("disabled")) {
                var o = Object(s.a)(i).getOwnerRoot() || document;
                if (
                  (this._setFocusedItem(i), Object(s.a)(o).activeElement == i)
                )
                  return;
              }
            }
          },
          _applySelection: function(e, t) {
            t
              ? e.setAttribute("aria-selected", "true")
              : e.setAttribute("aria-selected", "false"),
              o.a._applySelection.apply(this, arguments);
          },
          _focusedItemChanged: function(e, t) {
            t && t.setAttribute("tabindex", "-1"),
              !e ||
                e.hasAttribute("disabled") ||
                this.disabled ||
                (e.setAttribute("tabindex", "0"), e.focus());
          },
          _onIronItemsChanged: function(e) {
            e.detail.addedNodes.length && this._resetTabindices();
          },
          _onShiftTabDown: function(e) {
            var t = this.getAttribute("tabindex");
            (l._shiftTabPressed = !0),
              this._setFocusedItem(null),
              this.setAttribute("tabindex", "-1"),
              this.async(function() {
                this.setAttribute("tabindex", t), (l._shiftTabPressed = !1);
              }, 1);
          },
          _onFocus: function(e) {
            if (!l._shiftTabPressed) {
              var t = Object(s.a)(e).rootTarget;
              (t === this ||
                void 0 === t.tabIndex ||
                this.isLightDescendant(t)) &&
                (this._defaultFocusAsync = this.async(function() {
                  var e = this.multi
                    ? this.selectedItems && this.selectedItems[0]
                    : this.selectedItem;
                  this._setFocusedItem(null),
                    e
                      ? this._setFocusedItem(e)
                      : this.items[0] && this._focusNext();
                }));
            }
          },
          _onUpKey: function(e) {
            this._focusPrevious(), e.detail.keyboardEvent.preventDefault();
          },
          _onDownKey: function(e) {
            this._focusNext(), e.detail.keyboardEvent.preventDefault();
          },
          _onEscKey: function(e) {
            var t = this.focusedItem;
            t && t.blur();
          },
          _onKeydown: function(e) {
            this.keyboardEventMatchesKeys(e, "up down esc") ||
              this._focusWithKeyboardEvent(e),
              e.stopPropagation();
          },
          _activateHandler: function(e) {
            o.a._activateHandler.call(this, e), e.stopPropagation();
          },
          _disabledChanged: function(e) {
            e
              ? ((this._previousTabIndex = this.hasAttribute("tabindex")
                  ? this.tabIndex
                  : 0),
                this.removeAttribute("tabindex"))
              : this.hasAttribute("tabindex") ||
                this.setAttribute("tabindex", this._previousTabIndex);
          },
          _shiftTabPressed: !1
        },
        c = [a, i.a, l];
    },
    ,
    function(e, t, n) {
      "use strict";
      n(3);
      var i = n(7),
        o = n(47);
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var a = (function() {
        function e(t) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.selection = []),
            (this.selectCallback = t);
        }
        var t, n, i;
        return (
          (t = e),
          (n = [
            {
              key: "get",
              value: function() {
                return this.multi ? this.selection.slice() : this.selection[0];
              }
            },
            {
              key: "clear",
              value: function(e) {
                this.selection.slice().forEach(function(t) {
                  (!e || e.indexOf(t) < 0) && this.setItemSelected(t, !1);
                }, this);
              }
            },
            {
              key: "isSelected",
              value: function(e) {
                return this.selection.indexOf(e) >= 0;
              }
            },
            {
              key: "setItemSelected",
              value: function(e, t) {
                if (null != e && t !== this.isSelected(e)) {
                  if (t) this.selection.push(e);
                  else {
                    var n = this.selection.indexOf(e);
                    n >= 0 && this.selection.splice(n, 1);
                  }
                  this.selectCallback && this.selectCallback(e, t);
                }
              }
            },
            {
              key: "select",
              value: function(e) {
                this.multi
                  ? this.toggle(e)
                  : this.get() !== e &&
                    (this.setItemSelected(this.get(), !1),
                    this.setItemSelected(e, !0));
              }
            },
            {
              key: "toggle",
              value: function(e) {
                this.setItemSelected(e, !this.isSelected(e));
              }
            }
          ]) && r(t.prototype, n),
          i && r(t, i),
          e
        );
      })();
      n.d(t, "a", function() {
        return s;
      });
      var s = {
        properties: {
          attrForSelected: { type: String, value: null },
          selected: { type: String, notify: !0 },
          selectedItem: { type: Object, readOnly: !0, notify: !0 },
          activateEvent: {
            type: String,
            value: "tap",
            observer: "_activateEventChanged"
          },
          selectable: String,
          selectedClass: { type: String, value: "iron-selected" },
          selectedAttribute: { type: String, value: null },
          fallbackSelection: { type: String, value: null },
          items: {
            type: Array,
            readOnly: !0,
            notify: !0,
            value: function() {
              return [];
            }
          },
          _excludedLocalNames: {
            type: Object,
            value: function() {
              return {
                template: 1,
                "dom-bind": 1,
                "dom-if": 1,
                "dom-repeat": 1
              };
            }
          }
        },
        observers: [
          "_updateAttrForSelected(attrForSelected)",
          "_updateSelected(selected)",
          "_checkFallback(fallbackSelection)"
        ],
        created: function() {
          (this._bindFilterItem = this._filterItem.bind(this)),
            (this._selection = new a(this._applySelection.bind(this)));
        },
        attached: function() {
          (this._observer = this._observeItems(this)),
            this._addListener(this.activateEvent);
        },
        detached: function() {
          this._observer && Object(i.a)(this).unobserveNodes(this._observer),
            this._removeListener(this.activateEvent);
        },
        indexOf: function(e) {
          return this.items ? this.items.indexOf(e) : -1;
        },
        select: function(e) {
          this.selected = e;
        },
        selectPrevious: function() {
          var e = this.items.length,
            t = e - 1;
          void 0 !== this.selected &&
            (t = (Number(this._valueToIndex(this.selected)) - 1 + e) % e),
            (this.selected = this._indexToValue(t));
        },
        selectNext: function() {
          var e = 0;
          void 0 !== this.selected &&
            (e =
              (Number(this._valueToIndex(this.selected)) + 1) %
              this.items.length),
            (this.selected = this._indexToValue(e));
        },
        selectIndex: function(e) {
          this.select(this._indexToValue(e));
        },
        forceSynchronousItemUpdate: function() {
          this._observer && "function" == typeof this._observer.flush
            ? this._observer.flush()
            : this._updateItems();
        },
        get _shouldUpdateSelection() {
          return null != this.selected;
        },
        _checkFallback: function() {
          this._updateSelected();
        },
        _addListener: function(e) {
          this.listen(this, e, "_activateHandler");
        },
        _removeListener: function(e) {
          this.unlisten(this, e, "_activateHandler");
        },
        _activateEventChanged: function(e, t) {
          this._removeListener(t), this._addListener(e);
        },
        _updateItems: function() {
          var e = Object(i.a)(this).queryDistributedElements(
            this.selectable || "*"
          );
          (e = Array.prototype.filter.call(e, this._bindFilterItem)),
            this._setItems(e);
        },
        _updateAttrForSelected: function() {
          this.selectedItem &&
            (this.selected = this._valueForItem(this.selectedItem));
        },
        _updateSelected: function() {
          this._selectSelected(this.selected);
        },
        _selectSelected: function(e) {
          if (this.items) {
            var t = this._valueToItem(this.selected);
            t ? this._selection.select(t) : this._selection.clear(),
              this.fallbackSelection &&
                this.items.length &&
                void 0 === this._selection.get() &&
                (this.selected = this.fallbackSelection);
          }
        },
        _filterItem: function(e) {
          return !this._excludedLocalNames[e.localName];
        },
        _valueToItem: function(e) {
          return null == e ? null : this.items[this._valueToIndex(e)];
        },
        _valueToIndex: function(e) {
          if (!this.attrForSelected) return Number(e);
          for (var t, n = 0; (t = this.items[n]); n++)
            if (this._valueForItem(t) == e) return n;
        },
        _indexToValue: function(e) {
          if (!this.attrForSelected) return e;
          var t = this.items[e];
          return t ? this._valueForItem(t) : void 0;
        },
        _valueForItem: function(e) {
          if (!e) return null;
          if (!this.attrForSelected) {
            var t = this.indexOf(e);
            return -1 === t ? null : t;
          }
          var n = e[Object(o.b)(this.attrForSelected)];
          return null != n ? n : e.getAttribute(this.attrForSelected);
        },
        _applySelection: function(e, t) {
          this.selectedClass && this.toggleClass(this.selectedClass, t, e),
            this.selectedAttribute &&
              this.toggleAttribute(this.selectedAttribute, t, e),
            this._selectionChange(),
            this.fire("iron-" + (t ? "select" : "deselect"), { item: e });
        },
        _selectionChange: function() {
          this._setSelectedItem(this._selection.get());
        },
        _observeItems: function(e) {
          return Object(i.a)(e).observeNodes(function(e) {
            this._updateItems(),
              this._updateSelected(),
              this.fire("iron-items-changed", e, {
                bubbles: !1,
                cancelable: !1
              });
          });
        },
        _activateHandler: function(e) {
          for (var t = e.target, n = this.items; t && t != this; ) {
            var i = n.indexOf(t);
            if (i >= 0) {
              var o = this._indexToValue(i);
              return void this._itemActivate(o, t);
            }
            t = t.parentNode;
          }
        },
        _itemActivate: function(e, t) {
          this.fire(
            "iron-activate",
            { selected: e, item: t },
            {
              cancelable: !0
            }
          ).defaultPrevented || this.select(e);
        }
      };
    },
    function(e, t, n) {
      "use strict";
      n(3);
      var i = {
        properties: {
          animationConfig: { type: Object },
          entryAnimation: { observer: "_entryAnimationChanged", type: String },
          exitAnimation: { observer: "_exitAnimationChanged", type: String }
        },
        _entryAnimationChanged: function() {
          (this.animationConfig = this.animationConfig || {}),
            (this.animationConfig.entry = [
              { name: this.entryAnimation, node: this }
            ]);
        },
        _exitAnimationChanged: function() {
          (this.animationConfig = this.animationConfig || {}),
            (this.animationConfig.exit = [
              { name: this.exitAnimation, node: this }
            ]);
        },
        _copyProperties: function(e, t) {
          for (var n in t) e[n] = t[n];
        },
        _cloneConfig: function(e) {
          var t = { isClone: !0 };
          return this._copyProperties(t, e), t;
        },
        _getAnimationConfigRecursive: function(e, t, n) {
          var i;
          if (this.animationConfig)
            if (
              this.animationConfig.value &&
              "function" == typeof this.animationConfig.value
            )
              this._warn(
                this._logf(
                  "playAnimation",
                  "Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."
                )
              );
            else if (
              ((i = e ? this.animationConfig[e] : this.animationConfig),
              Array.isArray(i) || (i = [i]),
              i)
            )
              for (var o, r = 0; (o = i[r]); r++)
                if (o.animatable)
                  o.animatable._getAnimationConfigRecursive(o.type || e, t, n);
                else if (o.id) {
                  var a = t[o.id];
                  a
                    ? (a.isClone ||
                        ((t[o.id] = this._cloneConfig(a)), (a = t[o.id])),
                      this._copyProperties(a, o))
                    : (t[o.id] = o);
                } else n.push(o);
        },
        getAnimationConfig: function(e) {
          var t = {},
            n = [];
          for (var i in (this._getAnimationConfigRecursive(e, t, n), t))
            n.push(t[i]);
          return n;
        }
      };
      n.d(t, "a", function() {
        return o;
      });
      var o = [
        i,
        {
          _configureAnimations: function(e) {
            var t = [],
              n = [];
            if (e.length > 0)
              for (var i, o = 0; (i = e[o]); o++) {
                var r = document.createElement(i.name);
                if (r.isNeonAnimation) {
                  var a;
                  r.configure ||
                    (r.configure = function(e) {
                      return null;
                    }),
                    (a = r.configure(i)),
                    n.push({ result: a, config: i, neonAnimation: r });
                } else console.warn(this.is + ":", i.name, "not found!");
              }
            for (var s = 0; s < n.length; s++) {
              var l = n[s].result,
                c = n[s].config,
                d = n[s].neonAnimation;
              try {
                "function" != typeof l.cancel &&
                  (l = document.timeline.play(l));
              } catch (u) {
                (l = null), console.warn("Couldnt play", "(", c.name, ").", u);
              }
              l && t.push({ neonAnimation: d, config: c, animation: l });
            }
            return t;
          },
          _shouldComplete: function(e) {
            for (var t = !0, n = 0; n < e.length; n++)
              if ("finished" != e[n].animation.playState) {
                t = !1;
                break;
              }
            return t;
          },
          _complete: function(e) {
            for (var t = 0; t < e.length; t++)
              e[t].neonAnimation.complete(e[t].config);
            for (t = 0; t < e.length; t++) e[t].animation.cancel();
          },
          playAnimation: function(e, t) {
            var n = this.getAnimationConfig(e);
            if (n) {
              (this._active = this._active || {}),
                this._active[e] &&
                  (this._complete(this._active[e]), delete this._active[e]);
              var i = this._configureAnimations(n);
              if (0 != i.length) {
                this._active[e] = i;
                for (var o = 0; o < i.length; o++)
                  i[o].animation.onfinish = function() {
                    this._shouldComplete(i) &&
                      (this._complete(i),
                      delete this._active[e],
                      this.fire("neon-animation-finish", t, { bubbles: !1 }));
                  }.bind(this);
              } else this.fire("neon-animation-finish", t, { bubbles: !1 });
            }
          },
          cancelAnimation: function() {
            for (var e in this._active) {
              var t = this._active[e];
              for (var n in t) t[n].animation.cancel();
            }
            this._active = {};
          }
        }
      ];
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      "use strict";
      n(3);
      var i = n(24),
        o = n(6),
        r = n(7),
        a = n(5);
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n        position: absolute;\n        border-radius: inherit;\n        overflow: hidden;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n\n        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,\n         * creating a node (with a position:absolute) in the middle of an event\n         * handler "interrupts" that event handler (which happens when the\n         * ripple is created on demand) */\n        pointer-events: none;\n      }\n\n      :host([animating]) {\n        /* This resolves a rendering issue in Chrome (as of 40) where the\n           ripple is not properly clipped by its parent (which may have\n           rounded corners). See: http://jsbin.com/temexa/4\n\n           Note: We only apply this style conditionally. Otherwise, the browser\n           will create a new compositing layer for every ripple element on the\n           page, and that would be bad. */\n        -webkit-transform: translate(0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #background,\n      #waves,\n      .wave-container,\n      .wave {\n        pointer-events: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n\n      #background,\n      .wave {\n        opacity: 0;\n      }\n\n      #waves,\n      .wave {\n        overflow: hidden;\n      }\n\n      .wave-container,\n      .wave {\n        border-radius: 50%;\n      }\n\n      :host(.circle) #background,\n      :host(.circle) #waves {\n        border-radius: 50%;\n      }\n\n      :host(.circle) .wave-container {\n        overflow: hidden;\n      }\n    </style>\n\n    <div id="background"></div>\n    <div id="waves"></div>\n'
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      var l = {
        distance: function(e, t, n, i) {
          var o = e - n,
            r = t - i;
          return Math.sqrt(o * o + r * r);
        },
        now:
          window.performance && window.performance.now
            ? window.performance.now.bind(window.performance)
            : Date.now
      };
      function c(e) {
        (this.element = e),
          (this.width = this.boundingRect.width),
          (this.height = this.boundingRect.height),
          (this.size = Math.max(this.width, this.height));
      }
      function d(e) {
        (this.element = e),
          (this.color = window.getComputedStyle(e).color),
          (this.wave = document.createElement("div")),
          (this.waveContainer = document.createElement("div")),
          (this.wave.style.backgroundColor = this.color),
          this.wave.classList.add("wave"),
          this.waveContainer.classList.add("wave-container"),
          Object(r.a)(this.waveContainer).appendChild(this.wave),
          this.resetInteractionState();
      }
      (c.prototype = {
        get boundingRect() {
          return this.element.getBoundingClientRect();
        },
        furthestCornerDistanceFrom: function(e, t) {
          var n = l.distance(e, t, 0, 0),
            i = l.distance(e, t, this.width, 0),
            o = l.distance(e, t, 0, this.height),
            r = l.distance(e, t, this.width, this.height);
          return Math.max(n, i, o, r);
        }
      }),
        (d.MAX_RADIUS = 300),
        (d.prototype = {
          get recenters() {
            return this.element.recenters;
          },
          get center() {
            return this.element.center;
          },
          get mouseDownElapsed() {
            var e;
            return this.mouseDownStart
              ? ((e = l.now() - this.mouseDownStart),
                this.mouseUpStart && (e -= this.mouseUpElapsed),
                e)
              : 0;
          },
          get mouseUpElapsed() {
            return this.mouseUpStart ? l.now() - this.mouseUpStart : 0;
          },
          get mouseDownElapsedSeconds() {
            return this.mouseDownElapsed / 1e3;
          },
          get mouseUpElapsedSeconds() {
            return this.mouseUpElapsed / 1e3;
          },
          get mouseInteractionSeconds() {
            return this.mouseDownElapsedSeconds + this.mouseUpElapsedSeconds;
          },
          get initialOpacity() {
            return this.element.initialOpacity;
          },
          get opacityDecayVelocity() {
            return this.element.opacityDecayVelocity;
          },
          get radius() {
            var e = this.containerMetrics.width * this.containerMetrics.width,
              t = this.containerMetrics.height * this.containerMetrics.height,
              n = 1.1 * Math.min(Math.sqrt(e + t), d.MAX_RADIUS) + 5,
              i = 1.1 - (n / d.MAX_RADIUS) * 0.2,
              o = this.mouseInteractionSeconds / i,
              r = n * (1 - Math.pow(80, -o));
            return Math.abs(r);
          },
          get opacity() {
            return this.mouseUpStart
              ? Math.max(
                  0,
                  this.initialOpacity -
                    this.mouseUpElapsedSeconds * this.opacityDecayVelocity
                )
              : this.initialOpacity;
          },
          get outerOpacity() {
            var e = 0.3 * this.mouseUpElapsedSeconds,
              t = this.opacity;
            return Math.max(0, Math.min(e, t));
          },
          get isOpacityFullyDecayed() {
            return (
              this.opacity < 0.01 &&
              this.radius >= Math.min(this.maxRadius, d.MAX_RADIUS)
            );
          },
          get isRestingAtMaxRadius() {
            return (
              this.opacity >= this.initialOpacity &&
              this.radius >= Math.min(this.maxRadius, d.MAX_RADIUS)
            );
          },
          get isAnimationComplete() {
            return this.mouseUpStart
              ? this.isOpacityFullyDecayed
              : this.isRestingAtMaxRadius;
          },
          get translationFraction() {
            return Math.min(
              1,
              ((this.radius / this.containerMetrics.size) * 2) / Math.sqrt(2)
            );
          },
          get xNow() {
            return this.xEnd
              ? this.xStart +
                  this.translationFraction * (this.xEnd - this.xStart)
              : this.xStart;
          },
          get yNow() {
            return this.yEnd
              ? this.yStart +
                  this.translationFraction * (this.yEnd - this.yStart)
              : this.yStart;
          },
          get isMouseDown() {
            return this.mouseDownStart && !this.mouseUpStart;
          },
          resetInteractionState: function() {
            (this.maxRadius = 0),
              (this.mouseDownStart = 0),
              (this.mouseUpStart = 0),
              (this.xStart = 0),
              (this.yStart = 0),
              (this.xEnd = 0),
              (this.yEnd = 0),
              (this.slideDistance = 0),
              (this.containerMetrics = new c(this.element));
          },
          draw: function() {
            var e, t, n;
            (this.wave.style.opacity = this.opacity),
              (e = this.radius / (this.containerMetrics.size / 2)),
              (t = this.xNow - this.containerMetrics.width / 2),
              (n = this.yNow - this.containerMetrics.height / 2),
              (this.waveContainer.style.webkitTransform =
                "translate(" + t + "px, " + n + "px)"),
              (this.waveContainer.style.transform =
                "translate3d(" + t + "px, " + n + "px, 0)"),
              (this.wave.style.webkitTransform = "scale(" + e + "," + e + ")"),
              (this.wave.style.transform = "scale3d(" + e + "," + e + ",1)");
          },
          downAction: function(e) {
            var t = this.containerMetrics.width / 2,
              n = this.containerMetrics.height / 2;
            this.resetInteractionState(),
              (this.mouseDownStart = l.now()),
              this.center
                ? ((this.xStart = t),
                  (this.yStart = n),
                  (this.slideDistance = l.distance(
                    this.xStart,
                    this.yStart,
                    this.xEnd,
                    this.yEnd
                  )))
                : ((this.xStart = e
                    ? e.detail.x - this.containerMetrics.boundingRect.left
                    : this.containerMetrics.width / 2),
                  (this.yStart = e
                    ? e.detail.y - this.containerMetrics.boundingRect.top
                    : this.containerMetrics.height / 2)),
              this.recenters &&
                ((this.xEnd = t),
                (this.yEnd = n),
                (this.slideDistance = l.distance(
                  this.xStart,
                  this.yStart,
                  this.xEnd,
                  this.yEnd
                ))),
              (this.maxRadius = this.containerMetrics.furthestCornerDistanceFrom(
                this.xStart,
                this.yStart
              )),
              (this.waveContainer.style.top =
                (this.containerMetrics.height - this.containerMetrics.size) /
                  2 +
                "px"),
              (this.waveContainer.style.left =
                (this.containerMetrics.width - this.containerMetrics.size) / 2 +
                "px"),
              (this.waveContainer.style.width =
                this.containerMetrics.size + "px"),
              (this.waveContainer.style.height =
                this.containerMetrics.size + "px");
          },
          upAction: function(e) {
            this.isMouseDown && (this.mouseUpStart = l.now());
          },
          remove: function() {
            Object(r.a)(this.waveContainer.parentNode).removeChild(
              this.waveContainer
            );
          }
        }),
        Object(o.a)({
          _template: Object(a.a)(s()),
          is: "paper-ripple",
          behaviors: [i.a],
          properties: {
            initialOpacity: { type: Number, value: 0.25 },
            opacityDecayVelocity: { type: Number, value: 0.8 },
            recenters: { type: Boolean, value: !1 },
            center: { type: Boolean, value: !1 },
            ripples: {
              type: Array,
              value: function() {
                return [];
              }
            },
            animating: {
              type: Boolean,
              readOnly: !0,
              reflectToAttribute: !0,
              value: !1
            },
            holdDown: {
              type: Boolean,
              value: !1,
              observer: "_holdDownChanged"
            },
            noink: { type: Boolean, value: !1 },
            _animating: { type: Boolean },
            _boundAnimate: {
              type: Function,
              value: function() {
                return this.animate.bind(this);
              }
            }
          },
          get target() {
            return this.keyEventTarget;
          },
          keyBindings: {
            "enter:keydown": "_onEnterKeydown",
            "space:keydown": "_onSpaceKeydown",
            "space:keyup": "_onSpaceKeyup"
          },
          attached: function() {
            11 == this.parentNode.nodeType
              ? (this.keyEventTarget = Object(r.a)(this).getOwnerRoot().host)
              : (this.keyEventTarget = this.parentNode);
            var e = this.keyEventTarget;
            this.listen(e, "up", "uiUpAction"),
              this.listen(e, "down", "uiDownAction");
          },
          detached: function() {
            this.unlisten(this.keyEventTarget, "up", "uiUpAction"),
              this.unlisten(this.keyEventTarget, "down", "uiDownAction"),
              (this.keyEventTarget = null);
          },
          get shouldKeepAnimating() {
            for (var e = 0; e < this.ripples.length; ++e)
              if (!this.ripples[e].isAnimationComplete) return !0;
            return !1;
          },
          simulatedRipple: function() {
            this.downAction(null),
              this.async(function() {
                this.upAction();
              }, 1);
          },
          uiDownAction: function(e) {
            this.noink || this.downAction(e);
          },
          downAction: function(e) {
            (this.holdDown && this.ripples.length > 0) ||
              (this.addRipple().downAction(e),
              this._animating || ((this._animating = !0), this.animate()));
          },
          uiUpAction: function(e) {
            this.noink || this.upAction(e);
          },
          upAction: function(e) {
            this.holdDown ||
              (this.ripples.forEach(function(t) {
                t.upAction(e);
              }),
              (this._animating = !0),
              this.animate());
          },
          onAnimationComplete: function() {
            (this._animating = !1),
              (this.$.background.style.backgroundColor = null),
              this.fire("transitionend");
          },
          addRipple: function() {
            var e = new d(this);
            return (
              Object(r.a)(this.$.waves).appendChild(e.waveContainer),
              (this.$.background.style.backgroundColor = e.color),
              this.ripples.push(e),
              this._setAnimating(!0),
              e
            );
          },
          removeRipple: function(e) {
            var t = this.ripples.indexOf(e);
            t < 0 ||
              (this.ripples.splice(t, 1),
              e.remove(),
              this.ripples.length || this._setAnimating(!1));
          },
          animate: function() {
            if (this._animating) {
              var e, t;
              for (e = 0; e < this.ripples.length; ++e)
                (t = this.ripples[e]).draw(),
                  (this.$.background.style.opacity = t.outerOpacity),
                  t.isOpacityFullyDecayed &&
                    !t.isRestingAtMaxRadius &&
                    this.removeRipple(t);
              this.shouldKeepAnimating || 0 !== this.ripples.length
                ? window.requestAnimationFrame(this._boundAnimate)
                : this.onAnimationComplete();
            }
          },
          animateRipple: function() {
            return this.animate();
          },
          _onEnterKeydown: function() {
            this.uiDownAction(), this.async(this.uiUpAction, 1);
          },
          _onSpaceKeydown: function() {
            this.uiDownAction();
          },
          _onSpaceKeyup: function() {
            this.uiUpAction();
          },
          _holdDownChanged: function(e, t) {
            void 0 !== t && (e ? this.downAction() : this.upAction());
          }
        });
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      });
      var i = (function() {
        function e(e) {
          void 0 === e && (e = {}), (this.adapter_ = e);
        }
        return (
          Object.defineProperty(e, "cssClasses", {
            get: function() {
              return {};
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e, "strings", {
            get: function() {
              return {};
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e, "numbers", {
            get: function() {
              return {};
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e, "defaultAdapter", {
            get: function() {
              return {};
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.init = function() {}),
          (e.prototype.destroy = function() {}),
          e
        );
      })();
    },
    ,
    ,
    ,
    function(e, t, n) {
      "use strict";
      var i = document.createElement("template");
      i.setAttribute("style", "display: none;"),
        (i.innerHTML =
          "<dom-module id=\"paper-spinner-styles\">\n  <template>\n    <style>\n      /*\n      /**************************/\n      /* STYLES FOR THE SPINNER */\n      /**************************/\n\n      /*\n       * Constants:\n       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)\n       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)\n       *      ARCSTARTROT = 216 degrees (how much the start location of the arc\n       *                                should rotate each time, 216 gives us a\n       *                                5 pointed star shape (it's 360/5 * 3).\n       *                                For a 7 pointed star, we might do\n       *                                360/7 * 3 = 154.286)\n       *      SHRINK_TIME = 400ms\n       */\n\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 28px;\n        height: 28px;\n\n        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */\n        --paper-spinner-container-rotation-duration: 1568ms;\n\n        /* ARCTIME */\n        --paper-spinner-expand-contract-duration: 1333ms;\n\n        /* 4 * ARCTIME */\n        --paper-spinner-full-cycle-duration: 5332ms;\n\n        /* SHRINK_TIME */\n        --paper-spinner-cooldown-duration: 400ms;\n      }\n\n      #spinnerContainer {\n        width: 100%;\n        height: 100%;\n\n        /* The spinner does not have any contents that would have to be\n         * flipped if the direction changes. Always use ltr so that the\n         * style works out correctly in both cases. */\n        direction: ltr;\n      }\n\n      #spinnerContainer.active {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n      }\n\n      @-webkit-keyframes container-rotate {\n        to { -webkit-transform: rotate(360deg) }\n      }\n\n      @keyframes container-rotate {\n        to { transform: rotate(360deg) }\n      }\n\n      .spinner-layer {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        white-space: nowrap;\n        color: var(--paper-spinner-color, var(--google-blue-500));\n      }\n\n      .layer-1 {\n        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));\n      }\n\n      .layer-2 {\n        color: var(--paper-spinner-layer-2-color, var(--google-red-500));\n      }\n\n      .layer-3 {\n        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));\n      }\n\n      .layer-4 {\n        color: var(--paper-spinner-layer-4-color, var(--google-green-500));\n      }\n\n      /**\n       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):\n       *\n       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't\n       * guarantee that the animation will start _exactly_ after that value. So we avoid using\n       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it\n       * seems).\n       */\n      .active .spinner-layer {\n        -webkit-animation-name: fill-unfill-rotate;\n        -webkit-animation-duration: var(--paper-spinner-full-cycle-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-name: fill-unfill-rotate;\n        animation-duration: var(--paper-spinner-full-cycle-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n        opacity: 1;\n      }\n\n      .active .spinner-layer.layer-1 {\n        -webkit-animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-2 {\n        -webkit-animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-3 {\n        -webkit-animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-4 {\n        -webkit-animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n      }\n\n      @-webkit-keyframes fill-unfill-rotate {\n        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @keyframes fill-unfill-rotate {\n        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @-webkit-keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @-webkit-keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      .circle-clipper {\n        display: inline-block;\n        position: relative;\n        width: 50%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      /**\n       * Patch the gap that appear between the two adjacent div.circle-clipper while the\n       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).\n       */\n      .spinner-layer::after {\n        content: '';\n        left: 45%;\n        width: 10%;\n        border-top-style: solid;\n      }\n\n      .spinner-layer::after,\n      .circle-clipper .circle {\n        box-sizing: border-box;\n        position: absolute;\n        top: 0;\n        border-width: var(--paper-spinner-stroke-width, 3px);\n        border-radius: 50%;\n      }\n\n      .circle-clipper .circle {\n        bottom: 0;\n        width: 200%;\n        border-style: solid;\n        border-bottom-color: transparent !important;\n      }\n\n      .circle-clipper.left .circle {\n        left: 0;\n        border-right-color: transparent !important;\n        -webkit-transform: rotate(129deg);\n        transform: rotate(129deg);\n      }\n\n      .circle-clipper.right .circle {\n        left: -100%;\n        border-left-color: transparent !important;\n        -webkit-transform: rotate(-129deg);\n        transform: rotate(-129deg);\n      }\n\n      .active .gap-patch::after,\n      .active .circle-clipper .circle {\n        -webkit-animation-duration: var(--paper-spinner-expand-contract-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-duration: var(--paper-spinner-expand-contract-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n      }\n\n      .active .circle-clipper.left .circle {\n        -webkit-animation-name: left-spin;\n        animation-name: left-spin;\n      }\n\n      .active .circle-clipper.right .circle {\n        -webkit-animation-name: right-spin;\n        animation-name: right-spin;\n      }\n\n      @-webkit-keyframes left-spin {\n        0% { -webkit-transform: rotate(130deg) }\n        50% { -webkit-transform: rotate(-5deg) }\n        to { -webkit-transform: rotate(130deg) }\n      }\n\n      @keyframes left-spin {\n        0% { transform: rotate(130deg) }\n        50% { transform: rotate(-5deg) }\n        to { transform: rotate(130deg) }\n      }\n\n      @-webkit-keyframes right-spin {\n        0% { -webkit-transform: rotate(-130deg) }\n        50% { -webkit-transform: rotate(5deg) }\n        to { -webkit-transform: rotate(-130deg) }\n      }\n\n      @keyframes right-spin {\n        0% { transform: rotate(-130deg) }\n        50% { transform: rotate(5deg) }\n        to { transform: rotate(-130deg) }\n      }\n\n      #spinnerContainer.cooldown {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n      }\n\n      @-webkit-keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n    </style>\n  </template>\n</dom-module>"),
        document.head.appendChild(i.content);
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return i;
      });
      n(3);
      var i = {
        properties: {
          active: {
            type: Boolean,
            value: !1,
            reflectToAttribute: !0,
            observer: "__activeChanged"
          },
          alt: { type: String, value: "loading", observer: "__altChanged" },
          __coolingDown: { type: Boolean, value: !1 }
        },
        __computeContainerClasses: function(e, t) {
          return [e || t ? "active" : "", t ? "cooldown" : ""].join(" ");
        },
        __activeChanged: function(e, t) {
          this.__setAriaHidden(!e), (this.__coolingDown = !e && t);
        },
        __altChanged: function(e) {
          "loading" === e
            ? (this.alt = this.getAttribute("aria-label") || e)
            : (this.__setAriaHidden("" === e),
              this.setAttribute("aria-label", e));
        },
        __setAriaHidden: function(e) {
          e
            ? this.setAttribute("aria-hidden", "true")
            : this.removeAttribute("aria-hidden");
        },
        __reset: function() {
          (this.active = !1), (this.__coolingDown = !1);
        }
      };
    },
    function(e, t, n) {
      "use strict";
      n(3), n(10);
      var i = n(6),
        o = n(7),
        r = n(5),
        a = n(97);
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using `isolation: isolate`, but that\'s not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id="wrapper" class="initializing">\n      <slot id="headerSlot" name="header"></slot>\n\n      <div id="contentContainer">\n        <slot></slot>\n      </div>\n    </div>\n'
          ],
          [
            '\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using \\`isolation: isolate\\`, but that\'s not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id="wrapper" class="initializing">\n      <slot id="headerSlot" name="header"></slot>\n\n      <div id="contentContainer">\n        <slot></slot>\n      </div>\n    </div>\n'
          ]
        );
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        _template: Object(r.a)(s()),
        is: "app-header-layout",
        behaviors: [a.a],
        properties: {
          hasScrollingRegion: {
            type: Boolean,
            value: !1,
            reflectToAttribute: !0
          }
        },
        observers: ["resetLayout(isAttached, hasScrollingRegion)"],
        get header() {
          return Object(o.a)(this.$.headerSlot).getDistributedNodes()[0];
        },
        _updateLayoutStates: function() {
          var e = this.header;
          if (this.isAttached && e) {
            this.$.wrapper.classList.remove("initializing"),
              (e.scrollTarget = this.hasScrollingRegion
                ? this.$.contentContainer
                : this.ownerDocument.documentElement);
            var t = e.offsetHeight;
            this.hasScrollingRegion
              ? ((e.style.left = ""), (e.style.right = ""))
              : requestAnimationFrame(
                  function() {
                    var t = this.getBoundingClientRect(),
                      n = document.documentElement.clientWidth - t.right;
                    (e.style.left = t.left + "px"), (e.style.right = n + "px");
                  }.bind(this)
                );
            var n = this.$.contentContainer.style;
            e.fixed && !e.condenses && this.hasScrollingRegion
              ? ((n.marginTop = t + "px"), (n.paddingTop = ""))
              : ((n.paddingTop = t + "px"), (n.marginTop = ""));
          }
        }
      });
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return l;
      });
      n(3);
      var i = n(69),
        o = n(7),
        r = n(26),
        a = n(28),
        s = n(30),
        l = [
          i.a,
          {
            listeners: {
              "app-reset-layout": "_appResetLayoutHandler",
              "iron-resize": "resetLayout"
            },
            attached: function() {
              this.fire("app-reset-layout");
            },
            _appResetLayoutHandler: function(e) {
              Object(o.a)(e).path[0] !== this &&
                (this.resetLayout(), e.stopPropagation());
            },
            _updateLayoutStates: function() {
              console.error("unimplemented");
            },
            resetLayout: function() {
              var e = this._updateLayoutStates.bind(this);
              (this._layoutDebouncer = a.a.debounce(
                this._layoutDebouncer,
                r.a,
                e
              )),
                Object(s.a)(this._layoutDebouncer),
                this._notifyDescendantResize();
            },
            _notifyLayoutChanged: function() {
              var e = this;
              requestAnimationFrame(function() {
                e.fire("app-reset-layout");
              });
            },
            _notifyDescendantResize: function() {
              this.isAttached &&
                this._interestedResizables.forEach(function(e) {
                  this.resizerShouldNotify(e) && this._notifyDescendant(e);
                }, this);
            }
          }
        ];
    },
    function(e, t, n) {
      "use strict";
      n(3), n(10);
      var i = n(38),
        o = n(23),
        r = n(66),
        a = n(6),
        s = n(7),
        l = n(5);
      function c() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center;\n        @apply --layout-center-justified;\n        @apply --layout-flex-auto;\n\n        position: relative;\n        padding: 0 12px;\n        overflow: hidden;\n        cursor: pointer;\n        vertical-align: middle;\n\n        @apply --paper-font-common-base;\n        @apply --paper-tab;\n      }\n\n      :host(:focus) {\n        outline: none;\n      }\n\n      :host([link]) {\n        padding: 0;\n      }\n\n      .tab-content {\n        height: 100%;\n        transform: translateZ(0);\n          -webkit-transform: translateZ(0);\n        transition: opacity 0.1s cubic-bezier(0.4, 0.0, 1, 1);\n        @apply --layout-horizontal;\n        @apply --layout-center-center;\n        @apply --layout-flex-auto;\n        @apply --paper-tab-content;\n      }\n\n      :host(:not(.iron-selected)) > .tab-content {\n        opacity: 0.8;\n\n        @apply --paper-tab-content-unselected;\n      }\n\n      :host(:focus) .tab-content {\n        opacity: 1;\n        font-weight: 700;\n\n        @apply --paper-tab-content-focused;\n      }\n\n      paper-ripple {\n        color: var(--paper-tab-ink, var(--paper-yellow-a100));\n      }\n\n      .tab-content > ::slotted(a) {\n        @apply --layout-flex-auto;\n\n        height: 100%;\n      }\n    </style>\n\n    <div class="tab-content">\n      <slot></slot>\n    </div>\n'
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      Object(a.a)({
        _template: Object(l.a)(c()),
        is: "paper-tab",
        behaviors: [o.a, i.a, r.a],
        properties: {
          link: { type: Boolean, value: !1, reflectToAttribute: !0 }
        },
        hostAttributes: { role: "tab" },
        listeners: { down: "_updateNoink", tap: "_onTap" },
        attached: function() {
          this._updateNoink();
        },
        get _parentNoink() {
          var e = Object(s.a)(this).parentNode;
          return !!e && !!e.noink;
        },
        _updateNoink: function() {
          this.noink = !!this.noink || !!this._parentNoink;
        },
        _onTap: function(e) {
          if (this.link) {
            var t = this.queryEffectiveChildren("a");
            if (!t) return;
            if (e.target === t) return;
            t.click();
          }
        }
      });
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return o;
      }),
        n.d(t, "a", function() {
          return r;
        });
      n(3);
      var i = n(79),
        o = {
          hostAttributes: { role: "menubar" },
          keyBindings: { left: "_onLeftKey", right: "_onRightKey" },
          _onUpKey: function(e) {
            this.focusedItem.click(), e.detail.keyboardEvent.preventDefault();
          },
          _onDownKey: function(e) {
            this.focusedItem.click(), e.detail.keyboardEvent.preventDefault();
          },
          get _isRTL() {
            return "rtl" === window.getComputedStyle(this).direction;
          },
          _onLeftKey: function(e) {
            this._isRTL ? this._focusNext() : this._focusPrevious(),
              e.detail.keyboardEvent.preventDefault();
          },
          _onRightKey: function(e) {
            this._isRTL ? this._focusPrevious() : this._focusNext(),
              e.detail.keyboardEvent.preventDefault();
          },
          _onKeydown: function(e) {
            this.keyboardEventMatchesKeys(e, "up down left right esc") ||
              this._focusWithKeyboardEvent(e);
          }
        },
        r = [i.a, o];
    },
    function(e, t, n) {
      "use strict";
      n(3), n(11), n(10);
      var i = n(112),
        o = n(6),
        r = n(5),
        a = n(62);
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n<style>\n  :host {\n    display: inline-block;\n    line-height: 0;\n    white-space: nowrap;\n    cursor: pointer;\n    @apply --paper-font-common-base;\n    --calculated-paper-radio-button-size: var(--paper-radio-button-size, 16px);\n    /* -1px is a sentinel for the default and is replace in `attached`. */\n    --calculated-paper-radio-button-ink-size: var(--paper-radio-button-ink-size, -1px);\n  }\n\n  :host(:focus) {\n    outline: none;\n  }\n\n  #radioContainer {\n    @apply --layout-inline;\n    @apply --layout-center-center;\n    position: relative;\n    width: var(--calculated-paper-radio-button-size);\n    height: var(--calculated-paper-radio-button-size);\n    vertical-align: middle;\n\n    @apply --paper-radio-button-radio-container;\n  }\n\n  #ink {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    right: auto;\n    width: var(--calculated-paper-radio-button-ink-size);\n    height: var(--calculated-paper-radio-button-ink-size);\n    color: var(--paper-radio-button-unchecked-ink-color, var(--primary-text-color));\n    opacity: 0.6;\n    pointer-events: none;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n  }\n\n  #ink[checked] {\n    color: var(--paper-radio-button-checked-ink-color, var(--primary-color));\n  }\n\n  #offRadio, #onRadio {\n    position: absolute;\n    box-sizing: border-box;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n  }\n\n  #offRadio {\n    border: 2px solid var(--paper-radio-button-unchecked-color, var(--primary-text-color));\n    background-color: var(--paper-radio-button-unchecked-background-color, transparent);\n    transition: border-color 0.28s;\n  }\n\n  #onRadio {\n    background-color: var(--paper-radio-button-checked-color, var(--primary-color));\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    transition: -webkit-transform ease 0.28s;\n    transition: transform ease 0.28s;\n    will-change: transform;\n  }\n\n  :host([checked]) #offRadio {\n    border-color: var(--paper-radio-button-checked-color, var(--primary-color));\n  }\n\n  :host([checked]) #onRadio {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n\n  #radioLabel {\n    line-height: normal;\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: var(--paper-radio-button-label-spacing, 10px);\n    white-space: normal;\n    color: var(--paper-radio-button-label-color, var(--primary-text-color));\n\n    @apply --paper-radio-button-label;\n  }\n\n  :host([checked]) #radioLabel {\n    @apply --paper-radio-button-label-checked;\n  }\n\n  #radioLabel:dir(rtl) {\n    margin-left: 0;\n    margin-right: var(--paper-radio-button-label-spacing, 10px);\n  }\n\n  #radioLabel[hidden] {\n    display: none;\n  }\n\n  /* disabled state */\n\n  :host([disabled]) #offRadio {\n    border-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));\n    opacity: 0.5;\n  }\n\n  :host([disabled][checked]) #onRadio {\n    background-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));\n    opacity: 0.5;\n  }\n\n  :host([disabled]) #radioLabel {\n    /* slightly darker than the button, so that it\'s readable */\n    opacity: 0.65;\n  }\n</style>\n\n<div id="radioContainer">\n  <div id="offRadio"></div>\n  <div id="onRadio"></div>\n</div>\n\n<div id="radioLabel"><slot></slot></div>'
          ],
          [
            '\n<style>\n  :host {\n    display: inline-block;\n    line-height: 0;\n    white-space: nowrap;\n    cursor: pointer;\n    @apply --paper-font-common-base;\n    --calculated-paper-radio-button-size: var(--paper-radio-button-size, 16px);\n    /* -1px is a sentinel for the default and is replace in \\`attached\\`. */\n    --calculated-paper-radio-button-ink-size: var(--paper-radio-button-ink-size, -1px);\n  }\n\n  :host(:focus) {\n    outline: none;\n  }\n\n  #radioContainer {\n    @apply --layout-inline;\n    @apply --layout-center-center;\n    position: relative;\n    width: var(--calculated-paper-radio-button-size);\n    height: var(--calculated-paper-radio-button-size);\n    vertical-align: middle;\n\n    @apply --paper-radio-button-radio-container;\n  }\n\n  #ink {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    right: auto;\n    width: var(--calculated-paper-radio-button-ink-size);\n    height: var(--calculated-paper-radio-button-ink-size);\n    color: var(--paper-radio-button-unchecked-ink-color, var(--primary-text-color));\n    opacity: 0.6;\n    pointer-events: none;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n  }\n\n  #ink[checked] {\n    color: var(--paper-radio-button-checked-ink-color, var(--primary-color));\n  }\n\n  #offRadio, #onRadio {\n    position: absolute;\n    box-sizing: border-box;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n  }\n\n  #offRadio {\n    border: 2px solid var(--paper-radio-button-unchecked-color, var(--primary-text-color));\n    background-color: var(--paper-radio-button-unchecked-background-color, transparent);\n    transition: border-color 0.28s;\n  }\n\n  #onRadio {\n    background-color: var(--paper-radio-button-checked-color, var(--primary-color));\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    transition: -webkit-transform ease 0.28s;\n    transition: transform ease 0.28s;\n    will-change: transform;\n  }\n\n  :host([checked]) #offRadio {\n    border-color: var(--paper-radio-button-checked-color, var(--primary-color));\n  }\n\n  :host([checked]) #onRadio {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n\n  #radioLabel {\n    line-height: normal;\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: var(--paper-radio-button-label-spacing, 10px);\n    white-space: normal;\n    color: var(--paper-radio-button-label-color, var(--primary-text-color));\n\n    @apply --paper-radio-button-label;\n  }\n\n  :host([checked]) #radioLabel {\n    @apply --paper-radio-button-label-checked;\n  }\n\n  #radioLabel:dir(rtl) {\n    margin-left: 0;\n    margin-right: var(--paper-radio-button-label-spacing, 10px);\n  }\n\n  #radioLabel[hidden] {\n    display: none;\n  }\n\n  /* disabled state */\n\n  :host([disabled]) #offRadio {\n    border-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));\n    opacity: 0.5;\n  }\n\n  :host([disabled][checked]) #onRadio {\n    background-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));\n    opacity: 0.5;\n  }\n\n  :host([disabled]) #radioLabel {\n    /* slightly darker than the button, so that it\'s readable */\n    opacity: 0.65;\n  }\n</style>\n\n<div id="radioContainer">\n  <div id="offRadio"></div>\n  <div id="onRadio"></div>\n</div>\n\n<div id="radioLabel"><slot></slot></div>'
          ]
        );
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      var l = Object(r.a)(s());
      l.setAttribute("strip-whitespace", ""),
        Object(o.a)({
          _template: l,
          is: "paper-radio-button",
          behaviors: [i.a],
          hostAttributes: { role: "radio", "aria-checked": !1, tabindex: 0 },
          properties: {
            ariaActiveAttribute: { type: String, value: "aria-checked" }
          },
          ready: function() {
            this._rippleContainer = this.$.radioContainer;
          },
          attached: function() {
            Object(a.a)(this, function() {
              if (
                "-1px" ===
                this.getComputedStyleValue(
                  "--calculated-paper-radio-button-ink-size"
                ).trim()
              ) {
                var e = parseFloat(
                    this.getComputedStyleValue(
                      "--calculated-paper-radio-button-size"
                    ).trim()
                  ),
                  t = Math.floor(3 * e);
                t % 2 != e % 2 && t++,
                  this.updateStyles({
                    "--paper-radio-button-ink-size": t + "px"
                  });
              }
            });
          }
        });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      "use strict";
      var i;
      function o(e, t) {
        if (
          (void 0 === e && (e = window),
          void 0 === t && (t = !1),
          void 0 === i || t)
        ) {
          var n = !1;
          try {
            e.document.addEventListener("test", function() {}, {
              get passive() {
                return (n = !0);
              }
            });
          } catch (o) {}
          i = n;
        }
        return !!i && { passive: !0 };
      }
      function r(e, t) {
        return (
          e.matches ||
          e.webkitMatchesSelector ||
          e.msMatchesSelector
        ).call(e, t);
      }
      var a,
        s = n(32),
        l = n(90),
        c = {
          BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
          FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
          FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
          ROOT: "mdc-ripple-upgraded",
          UNBOUNDED: "mdc-ripple-upgraded--unbounded"
        },
        d = {
          VAR_FG_SCALE: "--mdc-ripple-fg-scale",
          VAR_FG_SIZE: "--mdc-ripple-fg-size",
          VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
          VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
          VAR_LEFT: "--mdc-ripple-left",
          VAR_TOP: "--mdc-ripple-top"
        },
        u = {
          DEACTIVATION_TIMEOUT_MS: 225,
          FG_DEACTIVATION_MS: 150,
          INITIAL_ORIGIN_SCALE: 0.6,
          PADDING: 10,
          TAP_DELAY_MS: 300
        };
      var p = ["touchstart", "pointerdown", "mousedown", "keydown"],
        h = ["touchend", "pointerup", "mouseup", "contextmenu"],
        f = [],
        b = (function(e) {
          function t(n) {
            var i = e.call(this, s.a({}, t.defaultAdapter, n)) || this;
            return (
              (i.activationAnimationHasEnded_ = !1),
              (i.activationTimer_ = 0),
              (i.fgDeactivationRemovalTimer_ = 0),
              (i.fgScale_ = "0"),
              (i.frame_ = { width: 0, height: 0 }),
              (i.initialSize_ = 0),
              (i.layoutFrame_ = 0),
              (i.maxRadius_ = 0),
              (i.unboundedCoords_ = { left: 0, top: 0 }),
              (i.activationState_ = i.defaultActivationState_()),
              (i.activationTimerCallback_ = function() {
                (i.activationAnimationHasEnded_ = !0),
                  i.runDeactivationUXLogicIfReady_();
              }),
              (i.activateHandler_ = function(e) {
                return i.activate_(e);
              }),
              (i.deactivateHandler_ = function() {
                return i.deactivate_();
              }),
              (i.focusHandler_ = function() {
                return i.handleFocus();
              }),
              (i.blurHandler_ = function() {
                return i.handleBlur();
              }),
              (i.resizeHandler_ = function() {
                return i.layout();
              }),
              i
            );
          }
          return (
            s.c(t, e),
            Object.defineProperty(t, "cssClasses", {
              get: function() {
                return c;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t, "strings", {
              get: function() {
                return d;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t, "numbers", {
              get: function() {
                return u;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t, "defaultAdapter", {
              get: function() {
                return {
                  addClass: function() {},
                  browserSupportsCssVars: function() {
                    return !0;
                  },
                  computeBoundingRect: function() {
                    return {
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      width: 0,
                      height: 0
                    };
                  },
                  containsEventTarget: function() {
                    return !0;
                  },
                  deregisterDocumentInteractionHandler: function() {},
                  deregisterInteractionHandler: function() {},
                  deregisterResizeHandler: function() {},
                  getWindowPageOffset: function() {
                    return { x: 0, y: 0 };
                  },
                  isSurfaceActive: function() {
                    return !0;
                  },
                  isSurfaceDisabled: function() {
                    return !0;
                  },
                  isUnbounded: function() {
                    return !0;
                  },
                  registerDocumentInteractionHandler: function() {},
                  registerInteractionHandler: function() {},
                  registerResizeHandler: function() {},
                  removeClass: function() {},
                  updateCssVariable: function() {}
                };
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.init = function() {
              var e = this,
                n = this.supportsPressRipple_();
              if ((this.registerRootHandlers_(n), n)) {
                var i = t.cssClasses,
                  o = i.ROOT,
                  r = i.UNBOUNDED;
                requestAnimationFrame(function() {
                  e.adapter_.addClass(o),
                    e.adapter_.isUnbounded() &&
                      (e.adapter_.addClass(r), e.layoutInternal_());
                });
              }
            }),
            (t.prototype.destroy = function() {
              var e = this;
              if (this.supportsPressRipple_()) {
                this.activationTimer_ &&
                  (clearTimeout(this.activationTimer_),
                  (this.activationTimer_ = 0),
                  this.adapter_.removeClass(t.cssClasses.FG_ACTIVATION)),
                  this.fgDeactivationRemovalTimer_ &&
                    (clearTimeout(this.fgDeactivationRemovalTimer_),
                    (this.fgDeactivationRemovalTimer_ = 0),
                    this.adapter_.removeClass(t.cssClasses.FG_DEACTIVATION));
                var n = t.cssClasses,
                  i = n.ROOT,
                  o = n.UNBOUNDED;
                requestAnimationFrame(function() {
                  e.adapter_.removeClass(i),
                    e.adapter_.removeClass(o),
                    e.removeCssVars_();
                });
              }
              this.deregisterRootHandlers_(),
                this.deregisterDeactivationHandlers_();
            }),
            (t.prototype.activate = function(e) {
              this.activate_(e);
            }),
            (t.prototype.deactivate = function() {
              this.deactivate_();
            }),
            (t.prototype.layout = function() {
              var e = this;
              this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_),
                (this.layoutFrame_ = requestAnimationFrame(function() {
                  e.layoutInternal_(), (e.layoutFrame_ = 0);
                }));
            }),
            (t.prototype.setUnbounded = function(e) {
              var n = t.cssClasses.UNBOUNDED;
              e ? this.adapter_.addClass(n) : this.adapter_.removeClass(n);
            }),
            (t.prototype.handleFocus = function() {
              var e = this;
              requestAnimationFrame(function() {
                return e.adapter_.addClass(t.cssClasses.BG_FOCUSED);
              });
            }),
            (t.prototype.handleBlur = function() {
              var e = this;
              requestAnimationFrame(function() {
                return e.adapter_.removeClass(t.cssClasses.BG_FOCUSED);
              });
            }),
            (t.prototype.supportsPressRipple_ = function() {
              return this.adapter_.browserSupportsCssVars();
            }),
            (t.prototype.defaultActivationState_ = function() {
              return {
                activationEvent: void 0,
                hasDeactivationUXRun: !1,
                isActivated: !1,
                isProgrammatic: !1,
                wasActivatedByPointer: !1,
                wasElementMadeActive: !1
              };
            }),
            (t.prototype.registerRootHandlers_ = function(e) {
              var t = this;
              e &&
                (p.forEach(function(e) {
                  t.adapter_.registerInteractionHandler(e, t.activateHandler_);
                }),
                this.adapter_.isUnbounded() &&
                  this.adapter_.registerResizeHandler(this.resizeHandler_)),
                this.adapter_.registerInteractionHandler(
                  "focus",
                  this.focusHandler_
                ),
                this.adapter_.registerInteractionHandler(
                  "blur",
                  this.blurHandler_
                );
            }),
            (t.prototype.registerDeactivationHandlers_ = function(e) {
              var t = this;
              "keydown" === e.type
                ? this.adapter_.registerInteractionHandler(
                    "keyup",
                    this.deactivateHandler_
                  )
                : h.forEach(function(e) {
                    t.adapter_.registerDocumentInteractionHandler(
                      e,
                      t.deactivateHandler_
                    );
                  });
            }),
            (t.prototype.deregisterRootHandlers_ = function() {
              var e = this;
              p.forEach(function(t) {
                e.adapter_.deregisterInteractionHandler(t, e.activateHandler_);
              }),
                this.adapter_.deregisterInteractionHandler(
                  "focus",
                  this.focusHandler_
                ),
                this.adapter_.deregisterInteractionHandler(
                  "blur",
                  this.blurHandler_
                ),
                this.adapter_.isUnbounded() &&
                  this.adapter_.deregisterResizeHandler(this.resizeHandler_);
            }),
            (t.prototype.deregisterDeactivationHandlers_ = function() {
              var e = this;
              this.adapter_.deregisterInteractionHandler(
                "keyup",
                this.deactivateHandler_
              ),
                h.forEach(function(t) {
                  e.adapter_.deregisterDocumentInteractionHandler(
                    t,
                    e.deactivateHandler_
                  );
                });
            }),
            (t.prototype.removeCssVars_ = function() {
              var e = this,
                n = t.strings;
              Object.keys(n).forEach(function(t) {
                0 === t.indexOf("VAR_") &&
                  e.adapter_.updateCssVariable(n[t], null);
              });
            }),
            (t.prototype.activate_ = function(e) {
              var t = this;
              if (!this.adapter_.isSurfaceDisabled()) {
                var n = this.activationState_;
                if (!n.isActivated) {
                  var i = this.previousActivationEvent_;
                  if (!(i && void 0 !== e && i.type !== e.type))
                    (n.isActivated = !0),
                      (n.isProgrammatic = void 0 === e),
                      (n.activationEvent = e),
                      (n.wasActivatedByPointer =
                        !n.isProgrammatic &&
                        void 0 !== e &&
                          ("mousedown" === e.type ||
                            "touchstart" === e.type ||
                            "pointerdown" === e.type)),
                      void 0 !== e &&
                      f.length > 0 &&
                      f.some(function(e) {
                        return t.adapter_.containsEventTarget(e);
                      })
                        ? this.resetActivationState_()
                        : (void 0 !== e &&
                            (f.push(e.target),
                            this.registerDeactivationHandlers_(e)),
                          (n.wasElementMadeActive = this.checkElementMadeActive_(
                            e
                          )),
                          n.wasElementMadeActive && this.animateActivation_(),
                          requestAnimationFrame(function() {
                            (f = []),
                              n.wasElementMadeActive ||
                                void 0 === e ||
                                (" " !== e.key && 32 !== e.keyCode) ||
                                ((n.wasElementMadeActive = t.checkElementMadeActive_(
                                  e
                                )),
                                n.wasElementMadeActive &&
                                  t.animateActivation_()),
                              n.wasElementMadeActive ||
                                (t.activationState_ = t.defaultActivationState_());
                          }));
                }
              }
            }),
            (t.prototype.checkElementMadeActive_ = function(e) {
              return (
                void 0 === e ||
                "keydown" !== e.type ||
                this.adapter_.isSurfaceActive()
              );
            }),
            (t.prototype.animateActivation_ = function() {
              var e = this,
                n = t.strings,
                i = n.VAR_FG_TRANSLATE_START,
                o = n.VAR_FG_TRANSLATE_END,
                r = t.cssClasses,
                a = r.FG_DEACTIVATION,
                s = r.FG_ACTIVATION,
                l = t.numbers.DEACTIVATION_TIMEOUT_MS;
              this.layoutInternal_();
              var c = "",
                d = "";
              if (!this.adapter_.isUnbounded()) {
                var u = this.getFgTranslationCoordinates_(),
                  p = u.startPoint,
                  h = u.endPoint;
                (c = p.x + "px, " + p.y + "px"),
                  (d = h.x + "px, " + h.y + "px");
              }
              this.adapter_.updateCssVariable(i, c),
                this.adapter_.updateCssVariable(o, d),
                clearTimeout(this.activationTimer_),
                clearTimeout(this.fgDeactivationRemovalTimer_),
                this.rmBoundedActivationClasses_(),
                this.adapter_.removeClass(a),
                this.adapter_.computeBoundingRect(),
                this.adapter_.addClass(s),
                (this.activationTimer_ = setTimeout(function() {
                  return e.activationTimerCallback_();
                }, l));
            }),
            (t.prototype.getFgTranslationCoordinates_ = function() {
              var e,
                t = this.activationState_,
                n = t.activationEvent;
              return {
                startPoint: (e = {
                  x:
                    (e = t.wasActivatedByPointer
                      ? (function(e, t, n) {
                          if (!e) return { x: 0, y: 0 };
                          var i,
                            o,
                            r = t.x,
                            a = t.y,
                            s = r + n.left,
                            l = a + n.top;
                          if ("touchstart" === e.type) {
                            var c = e;
                            (i = c.changedTouches[0].pageX - s),
                              (o = c.changedTouches[0].pageY - l);
                          } else {
                            var d = e;
                            (i = d.pageX - s), (o = d.pageY - l);
                          }
                          return { x: i, y: o };
                        })(
                          n,
                          this.adapter_.getWindowPageOffset(),
                          this.adapter_.computeBoundingRect()
                        )
                      : { x: this.frame_.width / 2, y: this.frame_.height / 2 })
                      .x -
                    this.initialSize_ / 2,
                  y: e.y - this.initialSize_ / 2
                }),
                endPoint: {
                  x: this.frame_.width / 2 - this.initialSize_ / 2,
                  y: this.frame_.height / 2 - this.initialSize_ / 2
                }
              };
            }),
            (t.prototype.runDeactivationUXLogicIfReady_ = function() {
              var e = this,
                n = t.cssClasses.FG_DEACTIVATION,
                i = this.activationState_,
                o = i.hasDeactivationUXRun,
                r = i.isActivated;
              (o || !r) &&
                this.activationAnimationHasEnded_ &&
                (this.rmBoundedActivationClasses_(),
                this.adapter_.addClass(n),
                (this.fgDeactivationRemovalTimer_ = setTimeout(function() {
                  e.adapter_.removeClass(n);
                }, u.FG_DEACTIVATION_MS)));
            }),
            (t.prototype.rmBoundedActivationClasses_ = function() {
              var e = t.cssClasses.FG_ACTIVATION;
              this.adapter_.removeClass(e),
                (this.activationAnimationHasEnded_ = !1),
                this.adapter_.computeBoundingRect();
            }),
            (t.prototype.resetActivationState_ = function() {
              var e = this;
              (this.previousActivationEvent_ = this.activationState_.activationEvent),
                (this.activationState_ = this.defaultActivationState_()),
                setTimeout(function() {
                  return (e.previousActivationEvent_ = void 0);
                }, t.numbers.TAP_DELAY_MS);
            }),
            (t.prototype.deactivate_ = function() {
              var e = this,
                t = this.activationState_;
              if (t.isActivated) {
                var n = s.a({}, t);
                t.isProgrammatic
                  ? (requestAnimationFrame(function() {
                      return e.animateDeactivation_(n);
                    }),
                    this.resetActivationState_())
                  : (this.deregisterDeactivationHandlers_(),
                    requestAnimationFrame(function() {
                      (e.activationState_.hasDeactivationUXRun = !0),
                        e.animateDeactivation_(n),
                        e.resetActivationState_();
                    }));
              }
            }),
            (t.prototype.animateDeactivation_ = function(e) {
              var t = e.wasActivatedByPointer,
                n = e.wasElementMadeActive;
              (t || n) && this.runDeactivationUXLogicIfReady_();
            }),
            (t.prototype.layoutInternal_ = function() {
              var e = this;
              this.frame_ = this.adapter_.computeBoundingRect();
              var n = Math.max(this.frame_.height, this.frame_.width);
              (this.maxRadius_ = this.adapter_.isUnbounded()
                ? n
                : Math.sqrt(
                    Math.pow(e.frame_.width, 2) + Math.pow(e.frame_.height, 2)
                  ) + t.numbers.PADDING),
                (this.initialSize_ = Math.floor(
                  n * t.numbers.INITIAL_ORIGIN_SCALE
                )),
                (this.fgScale_ = "" + this.maxRadius_ / this.initialSize_),
                this.updateLayoutCssVars_();
            }),
            (t.prototype.updateLayoutCssVars_ = function() {
              var e = t.strings,
                n = e.VAR_FG_SIZE,
                i = e.VAR_LEFT,
                o = e.VAR_TOP,
                r = e.VAR_FG_SCALE;
              this.adapter_.updateCssVariable(n, this.initialSize_ + "px"),
                this.adapter_.updateCssVariable(r, this.fgScale_),
                this.adapter_.isUnbounded() &&
                  ((this.unboundedCoords_ = {
                    left: Math.round(
                      this.frame_.width / 2 - this.initialSize_ / 2
                    ),
                    top: Math.round(
                      this.frame_.height / 2 - this.initialSize_ / 2
                    )
                  }),
                  this.adapter_.updateCssVariable(
                    i,
                    this.unboundedCoords_.left + "px"
                  ),
                  this.adapter_.updateCssVariable(
                    o,
                    this.unboundedCoords_.top + "px"
                  ));
            }),
            t
          );
        })(l.a),
        v = n(13),
        m = n(4);
      function y() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}"
        ]);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      var g = Object(m.c)(y());
      n.d(t, "a", function() {
        return C;
      });
      var _ = (function(e, t) {
          void 0 === t && (t = !1);
          var n = e.CSS,
            i = a;
          if ("boolean" == typeof a && !t) return a;
          if (!n || "function" != typeof n.supports) return !1;
          var o = n.supports("--css-vars", "yes"),
            r =
              n.supports("(--css-vars: yes)") &&
              n.supports("color", "#00000000");
          return (
            (i = !(
              (!o && !r) ||
              (function(e) {
                var t = e.document,
                  n = t.createElement("div");
                (n.className = "mdc-ripple-surface--test-edge-var-bug"),
                  t.head.appendChild(n);
                var i = e.getComputedStyle(n),
                  o = null !== i && "solid" === i.borderTopStyle;
                return n.parentNode && n.parentNode.removeChild(n), o;
              })(e)
            )),
            t || (a = i),
            i
          );
        })(window),
        w = navigator.userAgent.match(/Safari/),
        x = !1,
        k = function(e) {
          w &&
            !x &&
            (function() {
              x = !0;
              var e = new v.b({ templateFactory: v.k });
              e.appendInto(document.head), e.setValue(g), e.commit();
            })();
          var t = e.surfaceNode,
            n = e.interactionNode || t;
          n.getRootNode() !== t.getRootNode() &&
            "" === n.style.position &&
            (n.style.position = "relative");
          var i = new b({
            browserSupportsCssVars: function() {
              return _;
            },
            isUnbounded: function() {
              return void 0 === e.unbounded || e.unbounded;
            },
            isSurfaceActive: function() {
              return r(n, ":active");
            },
            isSurfaceDisabled: function() {
              return Boolean(e.disabled);
            },
            addClass: function(e) {
              return t.classList.add(e);
            },
            removeClass: function(e) {
              return t.classList.remove(e);
            },
            containsEventTarget: function(e) {
              return n.contains(e);
            },
            registerInteractionHandler: function(e, t) {
              return n.addEventListener(e, t, o());
            },
            deregisterInteractionHandler: function(e, t) {
              return n.removeEventListener(e, t, o());
            },
            registerDocumentInteractionHandler: function(e, t) {
              return document.documentElement.addEventListener(e, t, o());
            },
            deregisterDocumentInteractionHandler: function(e, t) {
              return document.documentElement.removeEventListener(e, t, o());
            },
            registerResizeHandler: function(e) {
              return window.addEventListener("resize", e);
            },
            deregisterResizeHandler: function(e) {
              return window.removeEventListener("resize", e);
            },
            updateCssVariable: function(e, n) {
              return t.style.setProperty(e, n);
            },
            computeBoundingRect: function() {
              return t.getBoundingClientRect();
            },
            getWindowPageOffset: function() {
              return { x: window.pageXOffset, y: window.pageYOffset };
            }
          });
          return i.init(), i;
        },
        S = new WeakMap(),
        C = Object(v.f)(function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(t) {
            var n = t.committer.element,
              i = e.interactionNode || n,
              o = t.value,
              r = S.get(o);
            void 0 !== r && r !== i && (o.destroy(), (o = v.h)),
              o === v.h
                ? ((o = k(Object.assign({}, e, { surfaceNode: n }))),
                  S.set(o, i),
                  t.setValue(o))
                : (void 0 !== e.unbounded && o.setUnbounded(e.unbounded),
                  void 0 !== e.disabled && o.setUnbounded(e.disabled)),
              !0 === e.active
                ? o.activate()
                : !1 === e.active && o.deactivate();
          };
        });
    },
    function(e, t, n) {
      "use strict";
      n(3);
      var i = n(24),
        o = n(23),
        r = n(76),
        a = n(82),
        s = n(6),
        l = n(7),
        c = n(5);
      function d() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        position: fixed;\n      }\n\n      #contentWrapper ::slotted(*) {\n        overflow: auto;\n      }\n\n      #contentWrapper.animating ::slotted(*) {\n        overflow: hidden;\n        pointer-events: none;\n      }\n    </style>\n\n    <div id="contentWrapper">\n      <slot id="content" name="dropdown-content"></slot>\n    </div>\n'
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      Object(s.a)({
        _template: Object(c.a)(d()),
        is: "iron-dropdown",
        behaviors: [o.a, i.a, r.a, a.a],
        properties: {
          horizontalAlign: {
            type: String,
            value: "left",
            reflectToAttribute: !0
          },
          verticalAlign: { type: String, value: "top", reflectToAttribute: !0 },
          openAnimationConfig: { type: Object },
          closeAnimationConfig: { type: Object },
          focusTarget: { type: Object },
          noAnimations: { type: Boolean, value: !1 },
          allowOutsideScroll: {
            type: Boolean,
            value: !1,
            observer: "_allowOutsideScrollChanged"
          }
        },
        listeners: { "neon-animation-finish": "_onNeonAnimationFinish" },
        observers: [
          "_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"
        ],
        get containedElement() {
          for (
            var e = Object(l.a)(this.$.content).getDistributedNodes(),
              t = 0,
              n = e.length;
            t < n;
            t++
          )
            if (e[t].nodeType === Node.ELEMENT_NODE) return e[t];
        },
        ready: function() {
          this.scrollAction ||
            (this.scrollAction = this.allowOutsideScroll ? "refit" : "lock"),
            (this._readied = !0);
        },
        attached: function() {
          (this.sizingTarget && this.sizingTarget !== this) ||
            (this.sizingTarget = this.containedElement || this);
        },
        detached: function() {
          this.cancelAnimation();
        },
        _openedChanged: function() {
          this.opened && this.disabled
            ? this.cancel()
            : (this.cancelAnimation(),
              this._updateAnimationConfig(),
              r.b._openedChanged.apply(this, arguments));
        },
        _renderOpened: function() {
          !this.noAnimations && this.animationConfig.open
            ? (this.$.contentWrapper.classList.add("animating"),
              this.playAnimation("open"))
            : r.b._renderOpened.apply(this, arguments);
        },
        _renderClosed: function() {
          !this.noAnimations && this.animationConfig.close
            ? (this.$.contentWrapper.classList.add("animating"),
              this.playAnimation("close"))
            : r.b._renderClosed.apply(this, arguments);
        },
        _onNeonAnimationFinish: function() {
          this.$.contentWrapper.classList.remove("animating"),
            this.opened
              ? this._finishRenderOpened()
              : this._finishRenderClosed();
        },
        _updateAnimationConfig: function() {
          for (
            var e = this.containedElement,
              t = []
                .concat(this.openAnimationConfig || [])
                .concat(this.closeAnimationConfig || []),
              n = 0;
            n < t.length;
            n++
          )
            t[n].node = e;
          this.animationConfig = {
            open: this.openAnimationConfig,
            close: this.closeAnimationConfig
          };
        },
        _updateOverlayPosition: function() {
          this.isAttached && this.notifyResize();
        },
        _allowOutsideScrollChanged: function(e) {
          this._readied &&
            (e
              ? (this.scrollAction && "lock" !== this.scrollAction) ||
                (this.scrollAction = "refit")
              : (this.scrollAction = "lock"));
        },
        _applyFocus: function() {
          var e = this.focusTarget || this.containedElement;
          e && this.opened && !this.noAutoFocus
            ? e.focus()
            : r.b._applyFocus.apply(this, arguments);
        }
      });
      var u = {
        properties: {
          animationTiming: {
            type: Object,
            value: function() {
              return {
                duration: 500,
                easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                fill: "both"
              };
            }
          }
        },
        isNeonAnimation: !0,
        created: function() {
          document.body.animate ||
            console.warn(
              "No web animations detected. This element will not function without a web animations polyfill."
            );
        },
        timingFromConfig: function(e) {
          if (e.timing)
            for (var t in e.timing) this.animationTiming[t] = e.timing[t];
          return this.animationTiming;
        },
        setPrefixedProperty: function(e, t, n) {
          for (
            var i,
              o = {
                transform: ["webkitTransform"],
                transformOrigin: ["mozTransformOrigin", "webkitTransformOrigin"]
              }[t],
              r = 0;
            (i = o[r]);
            r++
          )
            e.style[i] = n;
          e.style[t] = n;
        },
        complete: function(e) {}
      };
      Object(s.a)({
        is: "fade-in-animation",
        behaviors: [u],
        configure: function(e) {
          var t = e.node;
          return (
            (this._effect = new KeyframeEffect(
              t,
              [{ opacity: "0" }, { opacity: "1" }],
              this.timingFromConfig(e)
            )),
            this._effect
          );
        }
      }),
        Object(s.a)({
          is: "fade-out-animation",
          behaviors: [u],
          configure: function(e) {
            var t = e.node;
            return (
              (this._effect = new KeyframeEffect(
                t,
                [{ opacity: "1" }, { opacity: "0" }],
                this.timingFromConfig(e)
              )),
              this._effect
            );
          }
        });
      n(11), n(39);
      function p() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n\n        @apply --paper-menu-button;\n      }\n\n      :host([disabled]) {\n        cursor: auto;\n        color: var(--disabled-text-color);\n\n        @apply --paper-menu-button-disabled;\n      }\n\n      iron-dropdown {\n        @apply --paper-menu-button-dropdown;\n      }\n\n      .dropdown-content {\n        @apply --shadow-elevation-2dp;\n\n        position: relative;\n        border-radius: 2px;\n        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));\n\n        @apply --paper-menu-button-content;\n      }\n\n      :host([vertical-align="top"]) .dropdown-content {\n        margin-bottom: 20px;\n        margin-top: -10px;\n        top: 10px;\n      }\n\n      :host([vertical-align="bottom"]) .dropdown-content {\n        bottom: 10px;\n        margin-bottom: -10px;\n        margin-top: 20px;\n      }\n\n      #trigger {\n        cursor: pointer;\n      }\n    </style>\n\n    <div id="trigger" on-tap="toggle">\n      <slot name="dropdown-trigger"></slot>\n    </div>\n\n    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">\n      <div slot="dropdown-content" class="dropdown-content">\n        <slot id="content" name="dropdown-content"></slot>\n      </div>\n    </iron-dropdown>\n'
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      Object(s.a)({
        is: "paper-menu-grow-height-animation",
        behaviors: [u],
        configure: function(e) {
          var t = e.node,
            n = t.getBoundingClientRect().height;
          return (
            (this._effect = new KeyframeEffect(
              t,
              [{ height: n / 2 + "px" }, { height: n + "px" }],
              this.timingFromConfig(e)
            )),
            this._effect
          );
        }
      }),
        Object(s.a)({
          is: "paper-menu-grow-width-animation",
          behaviors: [u],
          configure: function(e) {
            var t = e.node,
              n = t.getBoundingClientRect().width;
            return (
              (this._effect = new KeyframeEffect(
                t,
                [{ width: n / 2 + "px" }, { width: n + "px" }],
                this.timingFromConfig(e)
              )),
              this._effect
            );
          }
        }),
        Object(s.a)({
          is: "paper-menu-shrink-width-animation",
          behaviors: [u],
          configure: function(e) {
            var t = e.node,
              n = t.getBoundingClientRect().width;
            return (
              (this._effect = new KeyframeEffect(
                t,
                [{ width: n + "px" }, { width: n - n / 20 + "px" }],
                this.timingFromConfig(e)
              )),
              this._effect
            );
          }
        }),
        Object(s.a)({
          is: "paper-menu-shrink-height-animation",
          behaviors: [u],
          configure: function(e) {
            var t = e.node,
              n = t.getBoundingClientRect().height;
            return (
              this.setPrefixedProperty(t, "transformOrigin", "0 0"),
              (this._effect = new KeyframeEffect(
                t,
                [
                  { height: n + "px", transform: "translateY(0)" },
                  {
                    height: n / 2 + "px",
                    transform: "translateY(-20px)"
                  }
                ],
                this.timingFromConfig(e)
              )),
              this._effect
            );
          }
        });
      var h = {
          ANIMATION_CUBIC_BEZIER: "cubic-bezier(.3,.95,.5,1)",
          MAX_ANIMATION_TIME_MS: 400
        },
        f = Object(s.a)({
          _template: Object(c.a)(p()),
          is: "paper-menu-button",
          behaviors: [i.a, o.a],
          properties: {
            opened: {
              type: Boolean,
              value: !1,
              notify: !0,
              observer: "_openedChanged"
            },
            horizontalAlign: {
              type: String,
              value: "left",
              reflectToAttribute: !0
            },
            verticalAlign: {
              type: String,
              value: "top",
              reflectToAttribute: !0
            },
            dynamicAlign: { type: Boolean },
            horizontalOffset: { type: Number, value: 0, notify: !0 },
            verticalOffset: { type: Number, value: 0, notify: !0 },
            noOverlap: { type: Boolean },
            noAnimations: { type: Boolean, value: !1 },
            ignoreSelect: { type: Boolean, value: !1 },
            closeOnActivate: { type: Boolean, value: !1 },
            openAnimationConfig: {
              type: Object,
              value: function() {
                return [
                  {
                    name: "fade-in-animation",
                    timing: { delay: 100, duration: 200 }
                  },
                  {
                    name: "paper-menu-grow-width-animation",
                    timing: {
                      delay: 100,
                      duration: 150,
                      easing: h.ANIMATION_CUBIC_BEZIER
                    }
                  },
                  {
                    name: "paper-menu-grow-height-animation",
                    timing: {
                      delay: 100,
                      duration: 275,
                      easing: h.ANIMATION_CUBIC_BEZIER
                    }
                  }
                ];
              }
            },
            closeAnimationConfig: {
              type: Object,
              value: function() {
                return [
                  { name: "fade-out-animation", timing: { duration: 150 } },
                  {
                    name: "paper-menu-shrink-width-animation",
                    timing: {
                      delay: 100,
                      duration: 50,
                      easing: h.ANIMATION_CUBIC_BEZIER
                    }
                  },
                  {
                    name: "paper-menu-shrink-height-animation",
                    timing: { duration: 200, easing: "ease-in" }
                  }
                ];
              }
            },
            allowOutsideScroll: { type: Boolean, value: !1 },
            restoreFocusOnClose: { type: Boolean, value: !0 },
            _dropdownContent: { type: Object }
          },
          hostAttributes: { role: "group", "aria-haspopup": "true" },
          listeners: {
            "iron-activate": "_onIronActivate",
            "iron-select": "_onIronSelect"
          },
          get contentElement() {
            for (
              var e = Object(l.a)(this.$.content).getDistributedNodes(),
                t = 0,
                n = e.length;
              t < n;
              t++
            )
              if (e[t].nodeType === Node.ELEMENT_NODE) return e[t];
          },
          toggle: function() {
            this.opened ? this.close() : this.open();
          },
          open: function() {
            this.disabled || this.$.dropdown.open();
          },
          close: function() {
            this.$.dropdown.close();
          },
          _onIronSelect: function(e) {
            this.ignoreSelect || this.close();
          },
          _onIronActivate: function(e) {
            this.closeOnActivate && this.close();
          },
          _openedChanged: function(e, t) {
            e
              ? ((this._dropdownContent = this.contentElement),
                this.fire("paper-dropdown-open"))
              : null != t && this.fire("paper-dropdown-close");
          },
          _disabledChanged: function(e) {
            o.a._disabledChanged.apply(this, arguments),
              e && this.opened && this.close();
          },
          __onIronOverlayCanceled: function(e) {
            var t = e.detail,
              n = this.$.trigger;
            Object(l.a)(t).path.indexOf(n) > -1 && e.preventDefault();
          }
        });
      Object.keys(h).forEach(function(e) {
        f[e] = h[e];
      });
    },
    function(e, t, n) {
      "use strict";
      n(3), n(10);
      var i = n(6),
        o = n(7),
        r = n(5),
        a = n(97);
      function s(e) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var l = {
          properties: {
            scrollTarget: {
              type: HTMLElement,
              value: function() {
                return this._defaultScrollTarget;
              }
            }
          },
          observers: ["_scrollTargetChanged(scrollTarget, isAttached)"],
          _shouldHaveListener: !0,
          _scrollTargetChanged: function(e, t) {
            if (
              (this._oldScrollTarget &&
                (this._toggleScrollListener(!1, this._oldScrollTarget),
                (this._oldScrollTarget = null)),
              t)
            )
              if ("document" === e) this.scrollTarget = this._doc;
              else if ("string" == typeof e) {
                var n = this.domHost;
                this.scrollTarget =
                  n && n.$
                    ? n.$[e]
                    : Object(o.a)(this.ownerDocument).querySelector("#" + e);
              } else
                this._isValidScrollTarget() &&
                  ((this._oldScrollTarget = e),
                  this._toggleScrollListener(this._shouldHaveListener, e));
          },
          _scrollHandler: function() {},
          get _defaultScrollTarget() {
            return this._doc;
          },
          get _doc() {
            return this.ownerDocument.documentElement;
          },
          get _scrollTop() {
            return this._isValidScrollTarget()
              ? this.scrollTarget === this._doc
                ? window.pageYOffset
                : this.scrollTarget.scrollTop
              : 0;
          },
          get _scrollLeft() {
            return this._isValidScrollTarget()
              ? this.scrollTarget === this._doc
                ? window.pageXOffset
                : this.scrollTarget.scrollLeft
              : 0;
          },
          set _scrollTop(e) {
            this.scrollTarget === this._doc
              ? window.scrollTo(window.pageXOffset, e)
              : this._isValidScrollTarget() &&
                (this.scrollTarget.scrollTop = e);
          },
          set _scrollLeft(e) {
            this.scrollTarget === this._doc
              ? window.scrollTo(e, window.pageYOffset)
              : this._isValidScrollTarget() &&
                (this.scrollTarget.scrollLeft = e);
          },
          scroll: function(e, t) {
            var n;
            "object" === s(e) ? ((n = e.left), (t = e.top)) : (n = e),
              (n = n || 0),
              (t = t || 0),
              this.scrollTarget === this._doc
                ? window.scrollTo(n, t)
                : this._isValidScrollTarget() &&
                  ((this.scrollTarget.scrollLeft = n),
                  (this.scrollTarget.scrollTop = t));
          },
          get _scrollTargetWidth() {
            return this._isValidScrollTarget()
              ? this.scrollTarget === this._doc
                ? window.innerWidth
                : this.scrollTarget.offsetWidth
              : 0;
          },
          get _scrollTargetHeight() {
            return this._isValidScrollTarget()
              ? this.scrollTarget === this._doc
                ? window.innerHeight
                : this.scrollTarget.offsetHeight
              : 0;
          },
          _isValidScrollTarget: function() {
            return this.scrollTarget instanceof HTMLElement;
          },
          _toggleScrollListener: function(e, t) {
            var n = t === this._doc ? window : t;
            e
              ? this._boundScrollHandler ||
                ((this._boundScrollHandler = this._scrollHandler.bind(this)),
                n.addEventListener("scroll", this._boundScrollHandler))
              : this._boundScrollHandler &&
                (n.removeEventListener("scroll", this._boundScrollHandler),
                (this._boundScrollHandler = null));
          },
          toggleScrollListener: function(e) {
            (this._shouldHaveListener = e),
              this._toggleScrollListener(e, this.scrollTarget);
          }
        },
        c = {},
        d = [
          l,
          {
            properties: {
              effects: { type: String },
              effectsConfig: {
                type: Object,
                value: function() {
                  return {};
                }
              },
              disabled: { type: Boolean, reflectToAttribute: !0, value: !1 },
              threshold: { type: Number, value: 0 },
              thresholdTriggered: {
                type: Boolean,
                notify: !0,
                readOnly: !0,
                reflectToAttribute: !0
              }
            },
            observers: ["_effectsChanged(effects, effectsConfig, isAttached)"],
            _updateScrollState: function(e) {},
            isOnScreen: function() {
              return !1;
            },
            isContentBelow: function() {
              return !1;
            },
            _effectsRunFn: null,
            _effects: null,
            get _clampedScrollTop() {
              return Math.max(0, this._scrollTop);
            },
            attached: function() {
              this._scrollStateChanged();
            },
            detached: function() {
              this._tearDownEffects();
            },
            createEffect: function(e, t) {
              var n = c[e];
              if (!n) throw new ReferenceError(this._getUndefinedMsg(e));
              var i = this._boundEffect(n, t || {});
              return i.setUp(), i;
            },
            _effectsChanged: function(e, t, n) {
              this._tearDownEffects(),
                e &&
                  n &&
                  (e.split(" ").forEach(function(e) {
                    var n;
                    "" !== e &&
                      ((n = c[e])
                        ? this._effects.push(this._boundEffect(n, t[e]))
                        : console.warn(this._getUndefinedMsg(e)));
                  }, this),
                  this._setUpEffect());
            },
            _layoutIfDirty: function() {
              return this.offsetWidth;
            },
            _boundEffect: function(e, t) {
              t = t || {};
              var n = parseFloat(t.startsAt || 0),
                i = parseFloat(t.endsAt || 1),
                o = i - n,
                r = function() {},
                a =
                  0 === n && 1 === i
                    ? e.run
                    : function(t, i) {
                        e.run.call(this, Math.max(0, (t - n) / o), i);
                      };
              return {
                setUp: e.setUp ? e.setUp.bind(this, t) : r,
                run: e.run ? a.bind(this) : r,
                tearDown: e.tearDown ? e.tearDown.bind(this) : r
              };
            },
            _setUpEffect: function() {
              this.isAttached &&
                this._effects &&
                ((this._effectsRunFn = []),
                this._effects.forEach(function(e) {
                  !1 !== e.setUp() && this._effectsRunFn.push(e.run);
                }, this));
            },
            _tearDownEffects: function() {
              this._effects &&
                this._effects.forEach(function(e) {
                  e.tearDown();
                }),
                (this._effectsRunFn = []),
                (this._effects = []);
            },
            _runEffects: function(e, t) {
              this._effectsRunFn &&
                this._effectsRunFn.forEach(function(n) {
                  n(e, t);
                });
            },
            _scrollHandler: function() {
              this._scrollStateChanged();
            },
            _scrollStateChanged: function() {
              if (!this.disabled) {
                var e = this._clampedScrollTop;
                this._updateScrollState(e),
                  this.threshold > 0 &&
                    this._setThresholdTriggered(e >= this.threshold);
              }
            },
            _getDOMRef: function(e) {
              console.warn("_getDOMRef", "`" + e + "` is undefined");
            },
            _getUndefinedMsg: function(e) {
              return (
                "Scroll effect `" +
                e +
                "` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/" +
                e +
                ".html ?"
              );
            }
          }
        ];
      function u() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n      :host {\n        position: relative;\n        display: block;\n        transition-timing-function: linear;\n        transition-property: -webkit-transform;\n        transition-property: transform;\n      }\n\n      :host::before {\n        position: absolute;\n        right: 0px;\n        bottom: -5px;\n        left: 0px;\n        width: 100%;\n        height: 5px;\n        content: "";\n        transition: opacity 0.4s;\n        pointer-events: none;\n        opacity: 0;\n        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);\n        will-change: opacity;\n        @apply --app-header-shadow;\n      }\n\n      :host([shadow])::before {\n        opacity: 1;\n      }\n\n      #background {\n        @apply --layout-fit;\n        overflow: hidden;\n      }\n\n      #backgroundFrontLayer,\n      #backgroundRearLayer {\n        @apply --layout-fit;\n        height: 100%;\n        pointer-events: none;\n        background-size: cover;\n      }\n\n      #backgroundFrontLayer {\n        @apply --app-header-background-front-layer;\n      }\n\n      #backgroundRearLayer {\n        opacity: 0;\n        @apply --app-header-background-rear-layer;\n      }\n\n      #contentContainer {\n        position: relative;\n        width: 100%;\n        height: 100%;\n      }\n\n      :host([disabled]),\n      :host([disabled])::after,\n      :host([disabled]) #backgroundFrontLayer,\n      :host([disabled]) #backgroundRearLayer,\n      /* Silent scrolling should not run CSS transitions */\n      :host([silent-scroll]),\n      :host([silent-scroll])::after,\n      :host([silent-scroll]) #backgroundFrontLayer,\n      :host([silent-scroll]) #backgroundRearLayer {\n        transition: none !important;\n      }\n\n      :host([disabled]) ::slotted(app-toolbar:first-of-type),\n      :host([disabled]) ::slotted([sticky]),\n      /* Silent scrolling should not run CSS transitions */\n      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),\n      :host([silent-scroll]) ::slotted([sticky]) {\n        transition: none !important;\n      }\n\n    </style>\n    <div id="contentContainer">\n      <slot id="slot"></slot>\n    </div>\n'
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        _template: Object(r.a)(u()),
        is: "app-header",
        behaviors: [d, a.a],
        properties: {
          condenses: { type: Boolean, value: !1 },
          fixed: { type: Boolean, value: !1 },
          reveals: { type: Boolean, value: !1 },
          shadow: { type: Boolean, reflectToAttribute: !0, value: !1 }
        },
        observers: ["_configChanged(isAttached, condenses, fixed)"],
        _height: 0,
        _dHeight: 0,
        _stickyElTop: 0,
        _stickyElRef: null,
        _top: 0,
        _progress: 0,
        _wasScrollingDown: !1,
        _initScrollTop: 0,
        _initTimestamp: 0,
        _lastTimestamp: 0,
        _lastScrollTop: 0,
        get _maxHeaderTop() {
          return this.fixed ? this._dHeight : this._height + 5;
        },
        get _stickyEl() {
          if (this._stickyElRef) return this._stickyElRef;
          for (
            var e, t = Object(o.a)(this.$.slot).getDistributedNodes(), n = 0;
            (e = t[n]);
            n++
          )
            if (e.nodeType === Node.ELEMENT_NODE) {
              if (e.hasAttribute("sticky")) {
                this._stickyElRef = e;
                break;
              }
              this._stickyElRef || (this._stickyElRef = e);
            }
          return this._stickyElRef;
        },
        _configChanged: function() {
          this.resetLayout(), this._notifyLayoutChanged();
        },
        _updateLayoutStates: function() {
          if (0 !== this.offsetWidth || 0 !== this.offsetHeight) {
            var e = this._clampedScrollTop,
              t = 0 === this._height || 0 === e,
              n = this.disabled;
            (this._height = this.offsetHeight),
              (this._stickyElRef = null),
              (this.disabled = !0),
              t || this._updateScrollState(0, !0),
              this._mayMove()
                ? (this._dHeight = this._stickyEl
                    ? this._height - this._stickyEl.offsetHeight
                    : 0)
                : (this._dHeight = 0),
              (this._stickyElTop = this._stickyEl
                ? this._stickyEl.offsetTop
                : 0),
              this._setUpEffect(),
              t
                ? this._updateScrollState(e, !0)
                : (this._updateScrollState(this._lastScrollTop, !0),
                  this._layoutIfDirty()),
              (this.disabled = n);
          }
        },
        _updateScrollState: function(e, t) {
          if (0 !== this._height) {
            var n = 0,
              i = 0,
              o = this._top,
              r = (this._lastScrollTop, this._maxHeaderTop),
              a = e - this._lastScrollTop,
              s = Math.abs(a),
              l = e > this._lastScrollTop,
              c = performance.now();
            if (
              (this._mayMove() &&
                (i = this._clamp(this.reveals ? o + a : e, 0, r)),
              e >= this._dHeight &&
                ((i =
                  this.condenses && !this.fixed
                    ? Math.max(this._dHeight, i)
                    : i),
                (this.style.transitionDuration = "0ms")),
              this.reveals &&
                !this.disabled &&
                s < 100 &&
                ((c - this._initTimestamp > 300 ||
                  this._wasScrollingDown !== l) &&
                  ((this._initScrollTop = e), (this._initTimestamp = c)),
                e >= r))
            )
              if (Math.abs(this._initScrollTop - e) > 30 || s > 10) {
                l && e >= r
                  ? (i = r)
                  : !l &&
                    e >= this._dHeight &&
                    (i = this.condenses && !this.fixed ? this._dHeight : 0);
                var d = a / (c - this._lastTimestamp);
                this.style.transitionDuration =
                  this._clamp((i - o) / d, 0, 300) + "ms";
              } else i = this._top;
            (n = 0 === this._dHeight ? (e > 0 ? 1 : 0) : i / this._dHeight),
              t ||
                ((this._lastScrollTop = e),
                (this._top = i),
                (this._wasScrollingDown = l),
                (this._lastTimestamp = c)),
              (t || n !== this._progress || o !== i || 0 === e) &&
                ((this._progress = n),
                this._runEffects(n, i),
                this._transformHeader(i));
          }
        },
        _mayMove: function() {
          return this.condenses || !this.fixed;
        },
        willCondense: function() {
          return this._dHeight > 0 && this.condenses;
        },
        isOnScreen: function() {
          return 0 !== this._height && this._top < this._height;
        },
        isContentBelow: function() {
          return 0 === this._top
            ? this._clampedScrollTop > 0
            : this._clampedScrollTop - this._maxHeaderTop >= 0;
        },
        _transformHeader: function(e) {
          this.translate3d(0, -e + "px", 0),
            this._stickyEl &&
              this.translate3d(
                0,
                this.condenses && e >= this._stickyElTop
                  ? Math.min(e, this._dHeight) - this._stickyElTop + "px"
                  : 0,
                0,
                this._stickyEl
              );
        },
        _clamp: function(e, t, n) {
          return Math.min(n, Math.max(t, e));
        },
        _ensureBgContainers: function() {
          this._bgContainer ||
            ((this._bgContainer = document.createElement("div")),
            (this._bgContainer.id = "background"),
            (this._bgRear = document.createElement("div")),
            (this._bgRear.id = "backgroundRearLayer"),
            this._bgContainer.appendChild(this._bgRear),
            (this._bgFront = document.createElement("div")),
            (this._bgFront.id = "backgroundFrontLayer"),
            this._bgContainer.appendChild(this._bgFront),
            Object(o.a)(this.root).insertBefore(
              this._bgContainer,
              this.$.contentContainer
            ));
        },
        _getDOMRef: function(e) {
          switch (e) {
            case "backgroundFrontLayer":
              return this._ensureBgContainers(), this._bgFront;
            case "backgroundRearLayer":
              return this._ensureBgContainers(), this._bgRear;
            case "background":
              return this._ensureBgContainers(), this._bgContainer;
            case "mainTitle":
              return Object(o.a)(this).querySelector("[main-title]");
            case "condensedTitle":
              return Object(o.a)(this).querySelector("[condensed-title]");
          }
          return null;
        },
        getScrollState: function() {
          return { progress: this._progress, top: this._top };
        }
      });
    },
    ,
    ,
    function(e, t, n) {
      "use strict";
      n(3);
      var i = n(70),
        o = n(55),
        r = {
          properties: {
            checked: {
              type: Boolean,
              value: !1,
              reflectToAttribute: !0,
              notify: !0,
              observer: "_checkedChanged"
            },
            toggles: { type: Boolean, value: !0, reflectToAttribute: !0 },
            value: { type: String, value: "on", observer: "_valueChanged" }
          },
          observers: ["_requiredChanged(required)"],
          created: function() {
            this._hasIronCheckedElementBehavior = !0;
          },
          _getValidity: function(e) {
            return this.disabled || !this.required || this.checked;
          },
          _requiredChanged: function() {
            this.required
              ? this.setAttribute("aria-required", "true")
              : this.removeAttribute("aria-required");
          },
          _checkedChanged: function() {
            (this.active = this.checked), this.fire("iron-change");
          },
          _valueChanged: function() {
            (void 0 !== this.value && null !== this.value) ||
              (this.value = "on");
          }
        },
        a = [i.a, o.a, r],
        s = n(65),
        l = n(66);
      n.d(t, "a", function() {
        return d;
      });
      var c = {
          _checkedChanged: function() {
            r._checkedChanged.call(this),
              this.hasRipple() &&
                (this.checked
                  ? this._ripple.setAttribute("checked", "")
                  : this._ripple.removeAttribute("checked"));
          },
          _buttonStateChanged: function() {
            l.a._buttonStateChanged.call(this),
              this.disabled ||
                (this.isAttached && (this.checked = this.active));
          }
        },
        d = [s.a, a, c];
    },
    function(e, t, n) {
      "use strict";
      n(10), n(88), n(11), n(39), n(29);
    },
    function(e, t, n) {
      "use strict";
      function i(e, t) {
        try {
          var n = e();
        } catch (e) {
          return t(e);
        }
        return n && n.then ? n.then(void 0, t) : n;
      }
      n.d(t, "a", function() {
        return u;
      }),
        "undefined" != typeof Symbol &&
          (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
        "undefined" != typeof Symbol &&
          (Symbol.asyncIterator ||
            (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
      function o(e) {
        return { type: "unsubscribe_events", subscription: e };
      }
      var r = function(e, t) {
        (this.options = t),
          (this.commandId = 1),
          (this.commands = new Map()),
          (this.eventListeners = new Map()),
          (this.closeRequested = !1),
          this.setSocket(e);
      };
      (r.prototype.setSocket = function(e) {
        var t = this,
          n = this.socket;
        if (
          ((this.socket = e),
          e.addEventListener("message", function(e) {
            return t._handleMessage(e);
          }),
          e.addEventListener("close", function(e) {
            return t._handleClose(e);
          }),
          n)
        ) {
          var i = this.commands;
          (this.commandId = 1),
            (this.commands = new Map()),
            i.forEach(function(e) {
              "subscribe" in e &&
                e.subscribe().then(function(t) {
                  (e.unsubscribe = t), e.resolve();
                });
            }),
            this.fireEvent("ready");
        }
      }),
        (r.prototype.addEventListener = function(e, t) {
          var n = this.eventListeners.get(e);
          n || this.eventListeners.set(e, (n = [])), n.push(t);
        }),
        (r.prototype.removeEventListener = function(e, t) {
          var n = this.eventListeners.get(e);
          if (n) {
            var i = n.indexOf(t);
            -1 !== i && n.splice(i, 1);
          }
        }),
        (r.prototype.fireEvent = function(e, t) {
          var n = this;
          (this.eventListeners.get(e) || []).forEach(function(e) {
            return e(n, t);
          });
        }),
        (r.prototype.close = function() {
          (this.closeRequested = !0), this.socket.close();
        }),
        (r.prototype.subscribeEvents = function(e, t) {
          try {
            return this.subscribeMessage(
              e,
              (function(e) {
                var t = { type: "subscribe_events" };
                return e && (t.event_type = e), t;
              })(t)
            );
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (r.prototype.ping = function() {
          return this.sendMessagePromise({ type: "ping" });
        }),
        (r.prototype.sendMessage = function(e, t) {
          t || (t = this._genCmdId()),
            (e.id = t),
            this.socket.send(JSON.stringify(e));
        }),
        (r.prototype.sendMessagePromise = function(e) {
          var t = this;
          return new Promise(function(n, i) {
            var o = t._genCmdId();
            t.commands.set(o, { resolve: n, reject: i }), t.sendMessage(e, o);
          });
        }),
        (r.prototype.subscribeMessage = function(e, t) {
          try {
            var n,
              i = this,
              r = i._genCmdId();
            return Promise.resolve(
              new Promise(function(a, s) {
                (n = {
                  resolve: a,
                  reject: s,
                  callback: e,
                  subscribe: function() {
                    return i.subscribeMessage(e, t);
                  },
                  unsubscribe: function() {
                    try {
                      return Promise.resolve(i.sendMessagePromise(o(r))).then(
                        function() {
                          i.commands.delete(r);
                        }
                      );
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  }
                }),
                  i.commands.set(r, n);
                try {
                  i.sendMessage(t, r);
                } catch (e) {}
              })
            ).then(function() {
              return function() {
                return n.unsubscribe();
              };
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (r.prototype._handleMessage = function(e) {
          var t = JSON.parse(e.data),
            n = this.commands.get(t.id);
          switch (t.type) {
            case "event":
              n
                ? n.callback(t.event)
                : (console.warn(
                    "Received event for unknown subscription " +
                      t.id +
                      ". Unsubscribing."
                  ),
                  this.sendMessagePromise(o(t.id)));
              break;
            case "result":
              n &&
                (t.success
                  ? (n.resolve(t.result),
                    "subscribe" in n || this.commands.delete(t.id))
                  : (n.reject(t.error), this.commands.delete(t.id)));
              break;
            case "pong":
              n
                ? (n.resolve(), this.commands.delete(t.id))
                : console.warn("Received unknown pong response " + t.id);
          }
        }),
        (r.prototype._handleClose = function(e) {
          var t = this;
          if (
            (this.commands.forEach(function(e) {
              "subscribe" in e ||
                e.reject({
                  type: "result",
                  success: !1,
                  error: { code: 3, message: "Connection lost" }
                });
            }),
            !this.closeRequested)
          ) {
            this.fireEvent("disconnected");
            var n = Object.assign({}, this.options, { setupRetry: 0 });
            !(function e(o) {
              var r = t;
              setTimeout(function() {
                try {
                  var t = i(
                    function() {
                      return Promise.resolve(n.createSocket(n)).then(function(
                        e
                      ) {
                        r.setSocket(e);
                      });
                    },
                    function(t) {
                      2 === t ? r.fireEvent("reconnect-error", t) : e(o + 1);
                    }
                  );
                  return Promise.resolve(
                    t && t.then ? t.then(function() {}) : void 0
                  );
                } catch (i) {
                  return Promise.reject(i);
                }
              }, 1e3 * Math.min(o, 5));
            })(0);
          }
        }),
        (r.prototype._genCmdId = function() {
          return ++this.commandId;
        });
      var a = function(e, t, n) {
          try {
            var i = "undefined" != typeof location && location;
            if (i && "https:" === i.protocol) {
              var o = document.createElement("a");
              if (
                ((o.href = e),
                "http:" === o.protocol && "localhost" !== o.hostname)
              )
                throw 5;
            }
            var r = new FormData();
            return (
              null !== t && r.append("client_id", t),
              Object.keys(n).forEach(function(e) {
                r.append(e, n[e]);
              }),
              Promise.resolve(
                fetch(e + "/auth/token", {
                  method: "POST",
                  credentials: "same-origin",
                  body: r
                })
              ).then(function(n) {
                if (!n.ok)
                  throw 400 === n.status || 403 === n.status
                    ? 2
                    : new Error("Unable to fetch tokens");
                return Promise.resolve(n.json()).then(function(n) {
                  return (
                    (n.hassUrl = e),
                    (n.clientId = t),
                    (n.expires = s(n.expires_in)),
                    n
                  );
                });
              })
            );
          } catch (e) {
            return Promise.reject(e);
          }
        },
        s = function(e) {
          return 1e3 * e + Date.now();
        };
      var l = function(e, t) {
          (this.data = e), (this._saveTokens = t);
        },
        c = {
          wsUrl: { configurable: !0 },
          accessToken: { configurable: !0 },
          expired: { configurable: !0 }
        };
      (c.wsUrl.get = function() {
        return "ws" + this.data.hassUrl.substr(4) + "/api/websocket";
      }),
        (c.accessToken.get = function() {
          return this.data.access_token;
        }),
        (c.expired.get = function() {
          return Date.now() > this.data.expires;
        }),
        (l.prototype.refreshAccessToken = function() {
          try {
            var e = this;
            return Promise.resolve(
              a(e.data.hassUrl, e.data.clientId, {
                grant_type: "refresh_token",
                refresh_token: e.data.refresh_token
              })
            ).then(function(t) {
              (t.refresh_token = e.data.refresh_token),
                (e.data = t),
                e._saveTokens && e._saveTokens(t);
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (l.prototype.revoke = function() {
          try {
            var e = this,
              t = new FormData();
            return (
              t.append("action", "revoke"),
              t.append("token", e.data.refresh_token),
              Promise.resolve(
                fetch(e.data.hassUrl + "/auth/token", {
                  method: "POST",
                  credentials: "same-origin",
                  body: t
                })
              ).then(function() {
                e._saveTokens && e._saveTokens(null);
              })
            );
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        Object.defineProperties(l.prototype, c);
      var d = function(e, t, n, i) {
          if (e[t]) return e[t];
          var o,
            r = 0,
            a = (function(e) {
              var t = [];
              function n(n, i) {
                e = i ? n : Object.assign({}, e, n);
                for (var o = t, r = 0; r < o.length; r++) o[r](e);
              }
              return {
                get state() {
                  return e;
                },
                action: function(t) {
                  function i(e) {
                    n(e, !1);
                  }
                  return function() {
                    for (
                      var n = arguments, o = [e], r = 0;
                      r < arguments.length;
                      r++
                    )
                      o.push(n[r]);
                    var a = t.apply(this, o);
                    if (null != a) return a.then ? a.then(i) : i(a);
                  };
                },
                setState: n,
                subscribe: function(e) {
                  return (
                    t.push(e),
                    function() {
                      !(function(e) {
                        for (var n = [], i = 0; i < t.length; i++)
                          t[i] === e ? (e = null) : n.push(t[i]);
                        t = n;
                      })(e);
                    }
                  );
                }
              };
            })(),
            s = function() {
              return n(e).then(function(e) {
                return a.setState(e, !0);
              });
            },
            l = function() {
              return s().catch(function(t) {
                if (e.socket.readyState == e.socket.OPEN) throw t;
              });
            };
          return (
            (e[t] = {
              get state() {
                return a.state;
              },
              refresh: s,
              subscribe: function(t) {
                1 == ++r &&
                  (i && (o = i(e, a)), e.addEventListener("ready", l), l());
                var n = a.subscribe(t);
                return (
                  void 0 !== a.state &&
                    setTimeout(function() {
                      return t(a.state);
                    }, 0),
                  function() {
                    n(),
                      --r ||
                        (o &&
                          o.then(function(e) {
                            e();
                          }),
                        e.removeEventListener("ready", s));
                  }
                );
              }
            }),
            e[t]
          );
        },
        u = function(e, t, n, i, o) {
          return d(i, e, t, n).subscribe(o);
        };
    },
    function(e, t, n) {
      "use strict";
      n(3), n(40), n(94);
      var i = n(6),
        o = n(5),
        r = n(95);
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n  <style include="paper-spinner-styles"></style>\n\n  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">\n    <div class="spinner-layer layer-1">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-2">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-3">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-4">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n  </div>\n'
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      var s = Object(o.a)(a());
      s.setAttribute("strip-whitespace", ""),
        Object(i.a)({ _template: s, is: "paper-spinner", behaviors: [r.a] });
    },
    function(e, t, n) {
      "use strict";
      n(3), n(11);
      var i = n(112),
        o = n(65),
        r = n(6),
        a = n(5),
        s = n(62);
      function l() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '<style>\n  :host {\n    display: inline-block;\n    white-space: nowrap;\n    cursor: pointer;\n    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);\n    /* -1px is a sentinel for the default and is replaced in `attached`. */\n    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);\n    @apply --paper-font-common-base;\n    line-height: 0;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  :host([hidden]) {\n    display: none !important;\n  }\n\n  :host(:focus) {\n    outline: none;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  #checkboxContainer {\n    display: inline-block;\n    position: relative;\n    width: var(--calculated-paper-checkbox-size);\n    height: var(--calculated-paper-checkbox-size);\n    min-width: var(--calculated-paper-checkbox-size);\n    margin: var(--paper-checkbox-margin, initial);\n    vertical-align: var(--paper-checkbox-vertical-align, middle);\n    background-color: var(--paper-checkbox-unchecked-background-color, transparent);\n  }\n\n  #ink {\n    position: absolute;\n\n    /* Center the ripple in the checkbox by negative offsetting it by\n     * (inkWidth - rippleWidth) / 2 */\n    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    width: var(--calculated-paper-checkbox-ink-size);\n    height: var(--calculated-paper-checkbox-ink-size);\n    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));\n    opacity: 0.6;\n    pointer-events: none;\n  }\n\n  #ink:dir(rtl) {\n    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    left: auto;\n  }\n\n  #ink[checked] {\n    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));\n  }\n\n  #checkbox {\n    position: relative;\n    box-sizing: border-box;\n    height: 100%;\n    border: solid 2px;\n    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n    border-radius: 2px;\n    pointer-events: none;\n    -webkit-transition: background-color 140ms, border-color 140ms;\n    transition: background-color 140ms, border-color 140ms;\n\n    -webkit-transition-duration: var(--paper-checkbox-animation-duration, 140ms);\n    transition-duration: var(--paper-checkbox-animation-duration, 140ms);\n  }\n\n  /* checkbox checked animations */\n  #checkbox.checked #checkmark {\n    -webkit-animation: checkmark-expand 140ms ease-out forwards;\n    animation: checkmark-expand 140ms ease-out forwards;\n\n    -webkit-animation-duration: var(--paper-checkbox-animation-duration, 140ms);\n    animation-duration: var(--paper-checkbox-animation-duration, 140ms);\n  }\n\n  @-webkit-keyframes checkmark-expand {\n    0% {\n      -webkit-transform: scale(0, 0) rotate(45deg);\n    }\n    100% {\n      -webkit-transform: scale(1, 1) rotate(45deg);\n    }\n  }\n\n  @keyframes checkmark-expand {\n    0% {\n      transform: scale(0, 0) rotate(45deg);\n    }\n    100% {\n      transform: scale(1, 1) rotate(45deg);\n    }\n  }\n\n  #checkbox.checked {\n    background-color: var(--paper-checkbox-checked-color, var(--primary-color));\n    border-color: var(--paper-checkbox-checked-color, var(--primary-color));\n  }\n\n  #checkmark {\n    position: absolute;\n    width: 36%;\n    height: 70%;\n    border-style: solid;\n    border-top: none;\n    border-left: none;\n    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n    border-color: var(--paper-checkbox-checkmark-color, white);\n    -webkit-transform-origin: 97% 86%;\n    transform-origin: 97% 86%;\n    box-sizing: content-box; /* protect against page-level box-sizing */\n  }\n\n  #checkmark:dir(rtl) {\n    -webkit-transform-origin: 50% 14%;\n    transform-origin: 50% 14%;\n  }\n\n  /* label */\n  #checkboxLabel {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    padding-left: var(--paper-checkbox-label-spacing, 8px);\n    white-space: normal;\n    line-height: normal;\n    color: var(--paper-checkbox-label-color, var(--primary-text-color));\n    @apply --paper-checkbox-label;\n  }\n\n  :host([checked]) #checkboxLabel {\n    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));\n    @apply --paper-checkbox-label-checked;\n  }\n\n  #checkboxLabel:dir(rtl) {\n    padding-right: var(--paper-checkbox-label-spacing, 8px);\n    padding-left: 0;\n  }\n\n  #checkboxLabel[hidden] {\n    display: none;\n  }\n\n  /* disabled state */\n\n  :host([disabled]) #checkbox {\n    opacity: 0.5;\n    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n  }\n\n  :host([disabled][checked]) #checkbox {\n    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n    opacity: 0.5;\n  }\n\n  :host([disabled]) #checkboxLabel  {\n    opacity: 0.65;\n  }\n\n  /* invalid state */\n  #checkbox.invalid:not(.checked) {\n    border-color: var(--paper-checkbox-error-color, var(--error-color));\n  }\n</style>\n\n<div id="checkboxContainer">\n  <div id="checkbox" class$="[[_computeCheckboxClass(checked, invalid)]]">\n    <div id="checkmark" class$="[[_computeCheckmarkClass(checked)]]"></div>\n  </div>\n</div>\n\n<div id="checkboxLabel"><slot></slot></div>'
          ],
          [
            '<style>\n  :host {\n    display: inline-block;\n    white-space: nowrap;\n    cursor: pointer;\n    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);\n    /* -1px is a sentinel for the default and is replaced in \\`attached\\`. */\n    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);\n    @apply --paper-font-common-base;\n    line-height: 0;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  :host([hidden]) {\n    display: none !important;\n  }\n\n  :host(:focus) {\n    outline: none;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  #checkboxContainer {\n    display: inline-block;\n    position: relative;\n    width: var(--calculated-paper-checkbox-size);\n    height: var(--calculated-paper-checkbox-size);\n    min-width: var(--calculated-paper-checkbox-size);\n    margin: var(--paper-checkbox-margin, initial);\n    vertical-align: var(--paper-checkbox-vertical-align, middle);\n    background-color: var(--paper-checkbox-unchecked-background-color, transparent);\n  }\n\n  #ink {\n    position: absolute;\n\n    /* Center the ripple in the checkbox by negative offsetting it by\n     * (inkWidth - rippleWidth) / 2 */\n    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    width: var(--calculated-paper-checkbox-ink-size);\n    height: var(--calculated-paper-checkbox-ink-size);\n    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));\n    opacity: 0.6;\n    pointer-events: none;\n  }\n\n  #ink:dir(rtl) {\n    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    left: auto;\n  }\n\n  #ink[checked] {\n    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));\n  }\n\n  #checkbox {\n    position: relative;\n    box-sizing: border-box;\n    height: 100%;\n    border: solid 2px;\n    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n    border-radius: 2px;\n    pointer-events: none;\n    -webkit-transition: background-color 140ms, border-color 140ms;\n    transition: background-color 140ms, border-color 140ms;\n\n    -webkit-transition-duration: var(--paper-checkbox-animation-duration, 140ms);\n    transition-duration: var(--paper-checkbox-animation-duration, 140ms);\n  }\n\n  /* checkbox checked animations */\n  #checkbox.checked #checkmark {\n    -webkit-animation: checkmark-expand 140ms ease-out forwards;\n    animation: checkmark-expand 140ms ease-out forwards;\n\n    -webkit-animation-duration: var(--paper-checkbox-animation-duration, 140ms);\n    animation-duration: var(--paper-checkbox-animation-duration, 140ms);\n  }\n\n  @-webkit-keyframes checkmark-expand {\n    0% {\n      -webkit-transform: scale(0, 0) rotate(45deg);\n    }\n    100% {\n      -webkit-transform: scale(1, 1) rotate(45deg);\n    }\n  }\n\n  @keyframes checkmark-expand {\n    0% {\n      transform: scale(0, 0) rotate(45deg);\n    }\n    100% {\n      transform: scale(1, 1) rotate(45deg);\n    }\n  }\n\n  #checkbox.checked {\n    background-color: var(--paper-checkbox-checked-color, var(--primary-color));\n    border-color: var(--paper-checkbox-checked-color, var(--primary-color));\n  }\n\n  #checkmark {\n    position: absolute;\n    width: 36%;\n    height: 70%;\n    border-style: solid;\n    border-top: none;\n    border-left: none;\n    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n    border-color: var(--paper-checkbox-checkmark-color, white);\n    -webkit-transform-origin: 97% 86%;\n    transform-origin: 97% 86%;\n    box-sizing: content-box; /* protect against page-level box-sizing */\n  }\n\n  #checkmark:dir(rtl) {\n    -webkit-transform-origin: 50% 14%;\n    transform-origin: 50% 14%;\n  }\n\n  /* label */\n  #checkboxLabel {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    padding-left: var(--paper-checkbox-label-spacing, 8px);\n    white-space: normal;\n    line-height: normal;\n    color: var(--paper-checkbox-label-color, var(--primary-text-color));\n    @apply --paper-checkbox-label;\n  }\n\n  :host([checked]) #checkboxLabel {\n    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));\n    @apply --paper-checkbox-label-checked;\n  }\n\n  #checkboxLabel:dir(rtl) {\n    padding-right: var(--paper-checkbox-label-spacing, 8px);\n    padding-left: 0;\n  }\n\n  #checkboxLabel[hidden] {\n    display: none;\n  }\n\n  /* disabled state */\n\n  :host([disabled]) #checkbox {\n    opacity: 0.5;\n    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n  }\n\n  :host([disabled][checked]) #checkbox {\n    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n    opacity: 0.5;\n  }\n\n  :host([disabled]) #checkboxLabel  {\n    opacity: 0.65;\n  }\n\n  /* invalid state */\n  #checkbox.invalid:not(.checked) {\n    border-color: var(--paper-checkbox-error-color, var(--error-color));\n  }\n</style>\n\n<div id="checkboxContainer">\n  <div id="checkbox" class$="[[_computeCheckboxClass(checked, invalid)]]">\n    <div id="checkmark" class$="[[_computeCheckmarkClass(checked)]]"></div>\n  </div>\n</div>\n\n<div id="checkboxLabel"><slot></slot></div>'
          ]
        );
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      var c = Object(a.a)(l());
      c.setAttribute("strip-whitespace", ""),
        Object(r.a)({
          _template: c,
          is: "paper-checkbox",
          behaviors: [i.a],
          hostAttributes: { role: "checkbox", "aria-checked": !1, tabindex: 0 },
          properties: {
            ariaActiveAttribute: { type: String, value: "aria-checked" }
          },
          attached: function() {
            Object(s.a)(this, function() {
              if (
                "-1px" ===
                this.getComputedStyleValue(
                  "--calculated-paper-checkbox-ink-size"
                ).trim()
              ) {
                var e = this.getComputedStyleValue(
                    "--calculated-paper-checkbox-size"
                  ).trim(),
                  t = "px",
                  n = e.match(/[A-Za-z]+$/);
                null !== n && (t = n[0]);
                var i = parseFloat(e),
                  o = (8 / 3) * i;
                "px" === t && (o = Math.floor(o)) % 2 != i % 2 && o++,
                  this.updateStyles({ "--paper-checkbox-ink-size": o + t });
              }
            });
          },
          _computeCheckboxClass: function(e, t) {
            var n = "";
            return e && (n += "checked "), t && (n += "invalid"), n;
          },
          _computeCheckmarkClass: function(e) {
            return e ? "" : "hidden";
          },
          _createRipple: function() {
            return (
              (this._rippleContainer = this.$.checkboxContainer),
              o.b._createRipple.call(this)
            );
          }
        });
    },
    function(e, t, n) {
      "use strict";
      n(3), n(24), n(100);
      var i = n(99),
        o = n(81),
        r = n(6),
        a = n(5);
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host ::slotted(*) {\n        padding: var(--paper-radio-group-item-padding, 12px);\n      }\n    </style>\n\n    <slot></slot>\n"
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      Object(r.a)({
        _template: Object(a.a)(s()),
        is: "paper-radio-group",
        behaviors: [i.a],
        hostAttributes: { role: "radiogroup" },
        properties: {
          attrForSelected: { type: String, value: "name" },
          selectedAttribute: { type: String, value: "checked" },
          selectable: { type: String, value: "paper-radio-button" },
          allowEmptySelection: { type: Boolean, value: !1 }
        },
        select: function(e) {
          var t = this._valueToItem(e);
          if (!t || !t.hasAttribute("disabled")) {
            if (this.selected) {
              var n = this._valueToItem(this.selected);
              if (this.selected == e) {
                if (!this.allowEmptySelection)
                  return void (n && (n.checked = !0));
                e = "";
              }
              n && (n.checked = !1);
            }
            o.a.select.apply(this, [e]), this.fire("paper-radio-group-changed");
          }
        },
        _activateFocusedItem: function() {
          this._itemActivate(
            this._valueForItem(this.focusedItem),
            this.focusedItem
          );
        },
        _onUpKey: function(e) {
          this._focusPrevious(),
            e.preventDefault(),
            this._activateFocusedItem();
        },
        _onDownKey: function(e) {
          this._focusNext(), e.preventDefault(), this._activateFocusedItem();
        },
        _onLeftKey: function(e) {
          i.b._onLeftKey.apply(this, arguments), this._activateFocusedItem();
        },
        _onRightKey: function(e) {
          i.b._onRightKey.apply(this, arguments), this._activateFocusedItem();
        }
      });
    },
    function(e, t, n) {
      (function(e) {
        var n, i, o, r;
        function a(e) {
          return (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        (r = function() {
          return (function(e) {
            var t = {};
            function n(i) {
              if (t[i]) return t[i].exports;
              var o = (t[i] = { i: i, l: !1, exports: {} });
              return (
                e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
              );
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function(e, t, i) {
                n.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: i });
              }),
              (n.r = function(e) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              (n.t = function(e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" == a(e) && e && e.__esModule) return e;
                var i = Object.create(null);
                if (
                  (n.r(i),
                  Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                  }),
                  2 & t && "string" != typeof e)
                )
                  for (var o in e)
                    n.d(
                      i,
                      o,
                      function(t) {
                        return e[t];
                      }.bind(null, o)
                    );
                return i;
              }),
              (n.n = function(e) {
                var t =
                  e && e.__esModule
                    ? function() {
                        return e.default;
                      }
                    : function() {
                        return e;
                      };
                return n.d(t, "a", t), t;
              }),
              (n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (n.p = ""),
              n((n.s = 1))
            );
          })([
            function(e, t) {
              e.exports = function(e) {
                return Array.isArray
                  ? Array.isArray(e)
                  : "[object Array]" === Object.prototype.toString.call(e);
              };
            },
            function(e, t, n) {
              function i(e) {
                return (i =
                  "function" == typeof Symbol && "symbol" == a(Symbol.iterator)
                    ? function(e) {
                        return a(e);
                      }
                    : function(e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : a(e);
                      })(e);
              }
              function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
                }
              }
              var r = n(2),
                s = n(8),
                l = n(0),
                c = (function() {
                  function e(t, n) {
                    var i = n.location,
                      o = void 0 === i ? 0 : i,
                      r = n.distance,
                      a = void 0 === r ? 100 : r,
                      l = n.threshold,
                      c = void 0 === l ? 0.6 : l,
                      d = n.maxPatternLength,
                      u = void 0 === d ? 32 : d,
                      p = n.caseSensitive,
                      h = void 0 !== p && p,
                      f = n.tokenSeparator,
                      b = void 0 === f ? / +/g : f,
                      v = n.findAllMatches,
                      m = void 0 !== v && v,
                      y = n.minMatchCharLength,
                      g = void 0 === y ? 1 : y,
                      _ = n.id,
                      w = void 0 === _ ? null : _,
                      x = n.keys,
                      k = void 0 === x ? [] : x,
                      S = n.shouldSort,
                      C = void 0 === S || S,
                      O = n.getFn,
                      A = void 0 === O ? s : O,
                      E = n.sortFn,
                      T =
                        void 0 === E
                          ? function(e, t) {
                              return e.score - t.score;
                            }
                          : E,
                      I = n.tokenize,
                      z = void 0 !== I && I,
                      j = n.matchAllTokens,
                      R = void 0 !== j && j,
                      B = n.includeMatches,
                      P = void 0 !== B && B,
                      N = n.includeScore,
                      L = void 0 !== N && N,
                      F = n.verbose,
                      M = void 0 !== F && F;
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.options = {
                        location: o,
                        distance: a,
                        threshold: c,
                        maxPatternLength: u,
                        isCaseSensitive: h,
                        tokenSeparator: b,
                        findAllMatches: m,
                        minMatchCharLength: g,
                        id: w,
                        keys: k,
                        includeMatches: P,
                        includeScore: L,
                        shouldSort: C,
                        getFn: A,
                        sortFn: T,
                        verbose: M,
                        tokenize: z,
                        matchAllTokens: R
                      }),
                      this.setCollection(t);
                  }
                  var t, n;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "setCollection",
                        value: function(e) {
                          return (this.list = e), e;
                        }
                      },
                      {
                        key: "search",
                        value: function(e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : { limit: !1 };
                          this._log(
                            '---------\nSearch pattern: "'.concat(e, '"')
                          );
                          var n = this._prepareSearchers(e),
                            i = n.tokenSearchers,
                            o = n.fullSearcher,
                            r = this._search(i, o),
                            a = r.weights,
                            s = r.results;
                          return (
                            this._computeScore(a, s),
                            this.options.shouldSort && this._sort(s),
                            t.limit &&
                              "number" == typeof t.limit &&
                              (s = s.slice(0, t.limit)),
                            this._format(s)
                          );
                        }
                      },
                      {
                        key: "_prepareSearchers",
                        value: function() {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            t = [];
                          if (this.options.tokenize)
                            for (
                              var n = e.split(this.options.tokenSeparator),
                                i = 0,
                                o = n.length;
                              i < o;
                              i += 1
                            )
                              t.push(new r(n[i], this.options));
                          return {
                            tokenSearchers: t,
                            fullSearcher: new r(e, this.options)
                          };
                        }
                      },
                      {
                        key: "_search",
                        value: function() {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = this.list,
                            i = {},
                            o = [];
                          if ("string" == typeof n[0]) {
                            for (var r = 0, a = n.length; r < a; r += 1)
                              this._analyze(
                                {
                                  key: "",
                                  value: n[r],
                                  record: r,
                                  index: r
                                },
                                {
                                  resultMap: i,
                                  results: o,
                                  tokenSearchers: e,
                                  fullSearcher: t
                                }
                              );
                            return { weights: null, results: o };
                          }
                          for (var s = {}, l = 0, c = n.length; l < c; l += 1)
                            for (
                              var d = n[l], u = 0, p = this.options.keys.length;
                              u < p;
                              u += 1
                            ) {
                              var h = this.options.keys[u];
                              if ("string" != typeof h) {
                                if (
                                  ((s[h.name] = {
                                    weight: 1 - h.weight || 1
                                  }),
                                  h.weight <= 0 || h.weight > 1)
                                )
                                  throw new Error(
                                    "Key weight has to be > 0 and <= 1"
                                  );
                                h = h.name;
                              } else s[h] = { weight: 1 };
                              this._analyze(
                                {
                                  key: h,
                                  value: this.options.getFn(d, h),
                                  record: d,
                                  index: l
                                },
                                {
                                  resultMap: i,
                                  results: o,
                                  tokenSearchers: e,
                                  fullSearcher: t
                                }
                              );
                            }
                          return { weights: s, results: o };
                        }
                      },
                      {
                        key: "_analyze",
                        value: function(e, t) {
                          var n = e.key,
                            i = e.arrayIndex,
                            o = void 0 === i ? -1 : i,
                            r = e.value,
                            a = e.record,
                            s = e.index,
                            c = t.tokenSearchers,
                            d = void 0 === c ? [] : c,
                            u = t.fullSearcher,
                            p = void 0 === u ? [] : u,
                            h = t.resultMap,
                            f = void 0 === h ? {} : h,
                            b = t.results,
                            v = void 0 === b ? [] : b;
                          if (null != r) {
                            var m = !1,
                              y = -1,
                              g = 0;
                            if ("string" == typeof r) {
                              this._log("\nKey: ".concat("" === n ? "-" : n));
                              var _ = p.search(r);
                              if (
                                (this._log(
                                  'Full text: "'
                                    .concat(r, '", score: ')
                                    .concat(_.score)
                                ),
                                this.options.tokenize)
                              ) {
                                for (
                                  var w = r.split(this.options.tokenSeparator),
                                    x = [],
                                    k = 0;
                                  k < d.length;
                                  k += 1
                                ) {
                                  var S = d[k];
                                  this._log(
                                    '\nPattern: "'.concat(S.pattern, '"')
                                  );
                                  for (
                                    var C = !1, O = 0;
                                    O < w.length;
                                    O += 1
                                  ) {
                                    var A = w[O],
                                      E = S.search(A),
                                      T = {};
                                    E.isMatch
                                      ? ((T[A] = E.score),
                                        (m = !0),
                                        (C = !0),
                                        x.push(E.score))
                                      : ((T[A] = 1),
                                        this.options.matchAllTokens ||
                                          x.push(1)),
                                      this._log(
                                        'Token: "'
                                          .concat(A, '", score: ')
                                          .concat(T[A])
                                      );
                                  }
                                  C && (g += 1);
                                }
                                y = x[0];
                                for (var I = x.length, z = 1; z < I; z += 1)
                                  y += x[z];
                                (y /= I), this._log("Token score average:", y);
                              }
                              var j = _.score;
                              y > -1 && (j = (j + y) / 2),
                                this._log("Score average:", j);
                              var R =
                                !this.options.tokenize ||
                                !this.options.matchAllTokens ||
                                g >= d.length;
                              if (
                                (this._log("\nCheck Matches: ".concat(R)),
                                (m || _.isMatch) && R)
                              ) {
                                var B = f[s];
                                B
                                  ? B.output.push({
                                      key: n,
                                      arrayIndex: o,
                                      value: r,
                                      score: j,
                                      matchedIndices: _.matchedIndices
                                    })
                                  : ((f[s] = {
                                      item: a,
                                      output: [
                                        {
                                          key: n,
                                          arrayIndex: o,
                                          value: r,
                                          score: j,
                                          matchedIndices: _.matchedIndices
                                        }
                                      ]
                                    }),
                                    v.push(f[s]));
                              }
                            } else if (l(r))
                              for (var P = 0, N = r.length; P < N; P += 1)
                                this._analyze(
                                  {
                                    key: n,
                                    arrayIndex: P,
                                    value: r[P],
                                    record: a,
                                    index: s
                                  },
                                  {
                                    resultMap: f,
                                    results: v,
                                    tokenSearchers: d,
                                    fullSearcher: p
                                  }
                                );
                          }
                        }
                      },
                      {
                        key: "_computeScore",
                        value: function(e, t) {
                          this._log("\n\nComputing score:\n");
                          for (var n = 0, i = t.length; n < i; n += 1) {
                            for (
                              var o = t[n].output,
                                r = o.length,
                                a = 1,
                                s = 1,
                                l = 0;
                              l < r;
                              l += 1
                            ) {
                              var c = e ? e[o[l].key].weight : 1,
                                d =
                                  (1 === c ? o[l].score : o[l].score || 0.001) *
                                  c;
                              1 !== c
                                ? (s = Math.min(s, d))
                                : ((o[l].nScore = d), (a *= d));
                            }
                            (t[n].score = 1 === s ? a : s), this._log(t[n]);
                          }
                        }
                      },
                      {
                        key: "_sort",
                        value: function(e) {
                          this._log("\n\nSorting...."),
                            e.sort(this.options.sortFn);
                        }
                      },
                      {
                        key: "_format",
                        value: function(e) {
                          var t = [];
                          if (this.options.verbose) {
                            var n = [];
                            this._log(
                              "\n\nOutput:\n\n",
                              JSON.stringify(e, function(e, t) {
                                if ("object" === i(t) && null !== t) {
                                  if (-1 !== n.indexOf(t)) return;
                                  n.push(t);
                                }
                                return t;
                              })
                            ),
                              (n = null);
                          }
                          var o = [];
                          this.options.includeMatches &&
                            o.push(function(e, t) {
                              var n = e.output;
                              t.matches = [];
                              for (var i = 0, o = n.length; i < o; i += 1) {
                                var r = n[i];
                                if (0 !== r.matchedIndices.length) {
                                  var a = {
                                    indices: r.matchedIndices,
                                    value: r.value
                                  };
                                  r.key && (a.key = r.key),
                                    r.hasOwnProperty("arrayIndex") &&
                                      r.arrayIndex > -1 &&
                                      (a.arrayIndex = r.arrayIndex),
                                    t.matches.push(a);
                                }
                              }
                            }),
                            this.options.includeScore &&
                              o.push(function(e, t) {
                                t.score = e.score;
                              });
                          for (var r = 0, a = e.length; r < a; r += 1) {
                            var s = e[r];
                            if (
                              (this.options.id &&
                                (s.item = this.options.getFn(
                                  s.item,
                                  this.options.id
                                )[0]),
                              o.length)
                            ) {
                              for (
                                var l = { item: s.item }, c = 0, d = o.length;
                                c < d;
                                c += 1
                              )
                                o[c](s, l);
                              t.push(l);
                            } else t.push(s.item);
                          }
                          return t;
                        }
                      },
                      {
                        key: "_log",
                        value: function() {
                          var e;
                          this.options.verbose &&
                            (e = console).log.apply(e, arguments);
                        }
                      }
                    ]) && o(t.prototype, n),
                    e
                  );
                })();
              e.exports = c;
            },
            function(e, t, n) {
              function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
                }
              }
              var o = n(3),
                r = n(4),
                a = n(7),
                s = (function() {
                  function e(t, n) {
                    var i = n.location,
                      o = void 0 === i ? 0 : i,
                      r = n.distance,
                      s = void 0 === r ? 100 : r,
                      l = n.threshold,
                      c = void 0 === l ? 0.6 : l,
                      d = n.maxPatternLength,
                      u = void 0 === d ? 32 : d,
                      p = n.isCaseSensitive,
                      h = void 0 !== p && p,
                      f = n.tokenSeparator,
                      b = void 0 === f ? / +/g : f,
                      v = n.findAllMatches,
                      m = void 0 !== v && v,
                      y = n.minMatchCharLength,
                      g = void 0 === y ? 1 : y;
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                      (this.options = {
                        location: o,
                        distance: s,
                        threshold: c,
                        maxPatternLength: u,
                        isCaseSensitive: h,
                        tokenSeparator: b,
                        findAllMatches: m,
                        minMatchCharLength: g
                      }),
                      (this.pattern = this.options.isCaseSensitive
                        ? t
                        : t.toLowerCase()),
                      this.pattern.length <= u &&
                        (this.patternAlphabet = a(this.pattern));
                  }
                  var t, n;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "search",
                        value: function(e) {
                          if (
                            (this.options.isCaseSensitive ||
                              (e = e.toLowerCase()),
                            this.pattern === e)
                          )
                            return {
                              isMatch: !0,
                              score: 0,
                              matchedIndices: [[0, e.length - 1]]
                            };
                          var t = this.options,
                            n = t.maxPatternLength,
                            i = t.tokenSeparator;
                          if (this.pattern.length > n)
                            return o(e, this.pattern, i);
                          var a = this.options,
                            s = a.location,
                            l = a.distance,
                            c = a.threshold,
                            d = a.findAllMatches,
                            u = a.minMatchCharLength;
                          return r(e, this.pattern, this.patternAlphabet, {
                            location: s,
                            distance: l,
                            threshold: c,
                            findAllMatches: d,
                            minMatchCharLength: u
                          });
                        }
                      }
                    ]) && i(t.prototype, n),
                    e
                  );
                })();
              e.exports = s;
            },
            function(e, t) {
              var n = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
              e.exports = function(e, t) {
                var i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : / +/g,
                  o = new RegExp(t.replace(n, "\\$&").replace(i, "|")),
                  r = e.match(o),
                  a = !!r,
                  s = [];
                if (a)
                  for (var l = 0, c = r.length; l < c; l += 1) {
                    var d = r[l];
                    s.push([e.indexOf(d), d.length - 1]);
                  }
                return { score: a ? 0.5 : 1, isMatch: a, matchedIndices: s };
              };
            },
            function(e, t, n) {
              var i = n(5),
                o = n(6);
              e.exports = function(e, t, n, r) {
                for (
                  var a = r.location,
                    s = void 0 === a ? 0 : a,
                    l = r.distance,
                    c = void 0 === l ? 100 : l,
                    d = r.threshold,
                    u = void 0 === d ? 0.6 : d,
                    p = r.findAllMatches,
                    h = void 0 !== p && p,
                    f = r.minMatchCharLength,
                    b = void 0 === f ? 1 : f,
                    v = s,
                    m = e.length,
                    y = u,
                    g = e.indexOf(t, v),
                    _ = t.length,
                    w = [],
                    x = 0;
                  x < m;
                  x += 1
                )
                  w[x] = 0;
                if (-1 !== g) {
                  var k = i(t, {
                    errors: 0,
                    currentLocation: g,
                    expectedLocation: v,
                    distance: c
                  });
                  if (
                    ((y = Math.min(k, y)), -1 !== (g = e.lastIndexOf(t, v + _)))
                  ) {
                    var S = i(t, {
                      errors: 0,
                      currentLocation: g,
                      expectedLocation: v,
                      distance: c
                    });
                    y = Math.min(S, y);
                  }
                }
                g = -1;
                for (
                  var C = [], O = 1, A = _ + m, E = 1 << (_ - 1), T = 0;
                  T < _;
                  T += 1
                ) {
                  for (var I = 0, z = A; I < z; )
                    i(t, {
                      errors: T,
                      currentLocation: v + z,
                      expectedLocation: v,
                      distance: c
                    }) <= y
                      ? (I = z)
                      : (A = z),
                      (z = Math.floor((A - I) / 2 + I));
                  A = z;
                  var j = Math.max(1, v - z + 1),
                    R = h ? m : Math.min(v + z, m) + _,
                    B = Array(R + 2);
                  B[R + 1] = (1 << T) - 1;
                  for (var P = R; P >= j; P -= 1) {
                    var N = P - 1,
                      L = n[e.charAt(N)];
                    if (
                      (L && (w[N] = 1),
                      (B[P] = ((B[P + 1] << 1) | 1) & L),
                      0 !== T &&
                        (B[P] |= ((C[P + 1] | C[P]) << 1) | 1 | C[P + 1]),
                      B[P] & E &&
                        (O = i(t, {
                          errors: T,
                          currentLocation: N,
                          expectedLocation: v,
                          distance: c
                        })) <= y)
                    ) {
                      if (((y = O), (g = N) <= v)) break;
                      j = Math.max(1, 2 * v - g);
                    }
                  }
                  if (
                    i(t, {
                      errors: T + 1,
                      currentLocation: v,
                      expectedLocation: v,
                      distance: c
                    }) > y
                  )
                    break;
                  C = B;
                }
                return {
                  isMatch: g >= 0,
                  score: 0 === O ? 0.001 : O,
                  matchedIndices: o(w, b)
                };
              };
            },
            function(e, t) {
              e.exports = function(e, t) {
                var n = t.errors,
                  i = void 0 === n ? 0 : n,
                  o = t.currentLocation,
                  r = void 0 === o ? 0 : o,
                  a = t.expectedLocation,
                  s = void 0 === a ? 0 : a,
                  l = t.distance,
                  c = void 0 === l ? 100 : l,
                  d = i / e.length,
                  u = Math.abs(s - r);
                return c ? d + u / c : u ? 1 : d;
              };
            },
            function(e, t) {
              e.exports = function() {
                for (
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 1,
                    n = [],
                    i = -1,
                    o = -1,
                    r = 0,
                    a = e.length;
                  r < a;
                  r += 1
                ) {
                  var s = e[r];
                  s && -1 === i
                    ? (i = r)
                    : s ||
                      -1 === i ||
                      ((o = r - 1) - i + 1 >= t && n.push([i, o]), (i = -1));
                }
                return e[r - 1] && r - i >= t && n.push([i, r - 1]), n;
              };
            },
            function(e, t) {
              e.exports = function(e) {
                for (var t = {}, n = e.length, i = 0; i < n; i += 1)
                  t[e.charAt(i)] = 0;
                for (var o = 0; o < n; o += 1)
                  t[e.charAt(o)] |= 1 << (n - o - 1);
                return t;
              };
            },
            function(e, t, n) {
              var i = n(0);
              e.exports = function(e, t) {
                return (function e(t, n, o) {
                  if (n) {
                    var r = n.indexOf("."),
                      a = n,
                      s = null;
                    -1 !== r && ((a = n.slice(0, r)), (s = n.slice(r + 1)));
                    var l = t[a];
                    if (null != l)
                      if (s || ("string" != typeof l && "number" != typeof l))
                        if (i(l))
                          for (var c = 0, d = l.length; c < d; c += 1)
                            e(l[c], s, o);
                        else s && e(l, s, o);
                      else o.push(l.toString());
                  } else o.push(t);
                  return o;
                })(e, t, []);
              };
            }
          ]);
        }),
          "object" == a(t) && "object" == a(e)
            ? (e.exports = r())
            : ((i = []),
              void 0 ===
                (o = "function" == typeof (n = r) ? n.apply(t, i) : n) ||
                (e.exports = o));
      }.call(this, n(119)(e)));
    },
    function(e, t) {
      e.exports = function(e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function() {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function() {
                return e.l;
              }
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function() {
                return e.i;
              }
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return u;
      });
      var i = n(13),
        o = function(e, t) {
          var n = e.startNode.parentNode,
            o = void 0 === t ? e.endNode : t.startNode,
            r = n.insertBefore(Object(i.e)(), o);
          n.insertBefore(Object(i.e)(), o);
          var a = new i.b(e.options);
          return a.insertAfterNode(r), a;
        },
        r = function(e, t) {
          return e.setValue(t), e.commit(), e;
        },
        a = function(e, t, n) {
          var o = e.startNode.parentNode,
            r = n ? n.startNode : e.endNode,
            a = t.endNode.nextSibling;
          a !== r && Object(i.j)(o, t.startNode, a, r);
        },
        s = function(e) {
          Object(i.i)(
            e.startNode.parentNode,
            e.startNode,
            e.endNode.nextSibling
          );
        },
        l = function(e, t, n) {
          for (var i = new Map(), o = t; o <= n; o++) i.set(e[o], o);
          return i;
        },
        c = new WeakMap(),
        d = new WeakMap(),
        u = Object(i.f)(function(e, t, n) {
          var u;
          return (
            void 0 === n ? (n = t) : void 0 !== t && (u = t),
            function(t) {
              if (!(t instanceof i.b))
                throw new Error("repeat can only be used in text bindings");
              var p,
                h,
                f = c.get(t) || [],
                b = d.get(t) || [],
                v = [],
                m = [],
                y = [],
                g = 0,
                _ = !0,
                w = !1,
                x = void 0;
              try {
                for (
                  var k, S = e[Symbol.iterator]();
                  !(_ = (k = S.next()).done);
                  _ = !0
                ) {
                  var C = k.value;
                  (y[g] = u ? u(C, g) : g), (m[g] = n(C, g)), g++;
                }
              } catch (P) {
                (w = !0), (x = P);
              } finally {
                try {
                  _ || null == S.return || S.return();
                } finally {
                  if (w) throw x;
                }
              }
              for (
                var O = 0, A = f.length - 1, E = 0, T = m.length - 1;
                O <= A && E <= T;

              )
                if (null === f[O]) O++;
                else if (null === f[A]) A--;
                else if (b[O] === y[E]) (v[E] = r(f[O], m[E])), O++, E++;
                else if (b[A] === y[T]) (v[T] = r(f[A], m[T])), A--, T--;
                else if (b[O] === y[T])
                  (v[T] = r(f[O], m[T])), a(t, f[O], v[T + 1]), O++, T--;
                else if (b[A] === y[E])
                  (v[E] = r(f[A], m[E])), a(t, f[A], f[O]), A--, E++;
                else if (
                  (void 0 === p && ((p = l(y, E, T)), (h = l(b, O, A))),
                  p.has(b[O]))
                )
                  if (p.has(b[A])) {
                    var I = h.get(y[E]),
                      z = void 0 !== I ? f[I] : null;
                    if (null === z) {
                      var j = o(t, f[O]);
                      r(j, m[E]), (v[E] = j);
                    } else (v[E] = r(z, m[E])), a(t, z, f[O]), (f[I] = null);
                    E++;
                  } else s(f[A]), A--;
                else s(f[O]), O++;
              for (; E <= T; ) {
                var R = o(t, v[T + 1]);
                r(R, m[E]), (v[E++] = R);
              }
              for (; O <= A; ) {
                var B = f[O++];
                null !== B && s(B);
              }
              c.set(t, v), d.set(t, y);
            }
          );
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
    function(e, t, n) {
      "use strict";
      n(3), n(10), n(20), n(22), n(40), n(57);
      var i = n(5);
      function o() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '<iron-iconset-svg name="paper-tabs" size="24">\n<svg><defs>\n<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>\n<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>\n</defs></svg>\n</iron-iconset-svg>'
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var r = Object(i.a)(o());
      document.head.appendChild(r.content);
      n(98);
      var a = n(79),
        s = n(99),
        l = n(69),
        c = n(6),
        d = n(7);
      function u() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(
          [
            '\n    <style>\n      :host {\n        @apply --layout;\n        @apply --layout-center;\n\n        height: 48px;\n        font-size: 14px;\n        font-weight: 500;\n        overflow: hidden;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        user-select: none;\n\n        /* NOTE: Both values are needed, since some phones require the value to be `transparent`. */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        @apply --paper-tabs;\n      }\n\n      :host(:dir(rtl)) {\n        @apply --layout-horizontal-reverse;\n      }\n\n      #tabsContainer {\n        position: relative;\n        height: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        @apply --layout-flex-auto;\n        @apply --paper-tabs-container;\n      }\n\n      #tabsContent {\n        height: 100%;\n        -moz-flex-basis: auto;\n        -ms-flex-basis: auto;\n        flex-basis: auto;\n        @apply --paper-tabs-content;\n      }\n\n      #tabsContent.scrollable {\n        position: absolute;\n        white-space: nowrap;\n      }\n\n      #tabsContent:not(.scrollable),\n      #tabsContent.scrollable.fit-container {\n        @apply --layout-horizontal;\n      }\n\n      #tabsContent.scrollable.fit-container {\n        min-width: 100%;\n      }\n\n      #tabsContent.scrollable.fit-container > ::slotted(*) {\n        /* IE - prevent tabs from compressing when they should scroll. */\n        -ms-flex: 1 0 auto;\n        -webkit-flex: 1 0 auto;\n        flex: 1 0 auto;\n      }\n\n      .hidden {\n        display: none;\n      }\n\n      .not-visible {\n        opacity: 0;\n        cursor: default;\n      }\n\n      paper-icon-button {\n        width: 48px;\n        height: 48px;\n        padding: 12px;\n        margin: 0 4px;\n      }\n\n      #selectionBar {\n        position: absolute;\n        height: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        border-bottom: 2px solid var(--paper-tabs-selection-bar-color, var(--paper-yellow-a100));\n          -webkit-transform: scale(0);\n        transform: scale(0);\n          -webkit-transform-origin: left center;\n        transform-origin: left center;\n          transition: -webkit-transform;\n        transition: transform;\n\n        @apply --paper-tabs-selection-bar;\n      }\n\n      #selectionBar.align-bottom {\n        top: 0;\n        bottom: auto;\n      }\n\n      #selectionBar.expand {\n        transition-duration: 0.15s;\n        transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);\n      }\n\n      #selectionBar.contract {\n        transition-duration: 0.18s;\n        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);\n      }\n\n      #tabsContent > ::slotted(:not(#selectionBar)) {\n        height: 100%;\n      }\n    </style>\n\n    <paper-icon-button icon="paper-tabs:chevron-left" class$="[[_computeScrollButtonClass(_leftHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onLeftScrollButtonDown" tabindex="-1"></paper-icon-button>\n\n    <div id="tabsContainer" on-track="_scroll" on-down="_down">\n      <div id="tabsContent" class$="[[_computeTabsContentClass(scrollable, fitContainer)]]">\n        <div id="selectionBar" class$="[[_computeSelectionBarClass(noBar, alignBottom)]]" on-transitionend="_onBarTransitionEnd"></div>\n        <slot></slot>\n      </div>\n    </div>\n\n    <paper-icon-button icon="paper-tabs:chevron-right" class$="[[_computeScrollButtonClass(_rightHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onRightScrollButtonDown" tabindex="-1"></paper-icon-button>\n'
          ],
          [
            '\n    <style>\n      :host {\n        @apply --layout;\n        @apply --layout-center;\n\n        height: 48px;\n        font-size: 14px;\n        font-weight: 500;\n        overflow: hidden;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        user-select: none;\n\n        /* NOTE: Both values are needed, since some phones require the value to be \\`transparent\\`. */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        @apply --paper-tabs;\n      }\n\n      :host(:dir(rtl)) {\n        @apply --layout-horizontal-reverse;\n      }\n\n      #tabsContainer {\n        position: relative;\n        height: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        @apply --layout-flex-auto;\n        @apply --paper-tabs-container;\n      }\n\n      #tabsContent {\n        height: 100%;\n        -moz-flex-basis: auto;\n        -ms-flex-basis: auto;\n        flex-basis: auto;\n        @apply --paper-tabs-content;\n      }\n\n      #tabsContent.scrollable {\n        position: absolute;\n        white-space: nowrap;\n      }\n\n      #tabsContent:not(.scrollable),\n      #tabsContent.scrollable.fit-container {\n        @apply --layout-horizontal;\n      }\n\n      #tabsContent.scrollable.fit-container {\n        min-width: 100%;\n      }\n\n      #tabsContent.scrollable.fit-container > ::slotted(*) {\n        /* IE - prevent tabs from compressing when they should scroll. */\n        -ms-flex: 1 0 auto;\n        -webkit-flex: 1 0 auto;\n        flex: 1 0 auto;\n      }\n\n      .hidden {\n        display: none;\n      }\n\n      .not-visible {\n        opacity: 0;\n        cursor: default;\n      }\n\n      paper-icon-button {\n        width: 48px;\n        height: 48px;\n        padding: 12px;\n        margin: 0 4px;\n      }\n\n      #selectionBar {\n        position: absolute;\n        height: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        border-bottom: 2px solid var(--paper-tabs-selection-bar-color, var(--paper-yellow-a100));\n          -webkit-transform: scale(0);\n        transform: scale(0);\n          -webkit-transform-origin: left center;\n        transform-origin: left center;\n          transition: -webkit-transform;\n        transition: transform;\n\n        @apply --paper-tabs-selection-bar;\n      }\n\n      #selectionBar.align-bottom {\n        top: 0;\n        bottom: auto;\n      }\n\n      #selectionBar.expand {\n        transition-duration: 0.15s;\n        transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);\n      }\n\n      #selectionBar.contract {\n        transition-duration: 0.18s;\n        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);\n      }\n\n      #tabsContent > ::slotted(:not(#selectionBar)) {\n        height: 100%;\n      }\n    </style>\n\n    <paper-icon-button icon="paper-tabs:chevron-left" class$="[[_computeScrollButtonClass(_leftHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onLeftScrollButtonDown" tabindex="-1"></paper-icon-button>\n\n    <div id="tabsContainer" on-track="_scroll" on-down="_down">\n      <div id="tabsContent" class$="[[_computeTabsContentClass(scrollable, fitContainer)]]">\n        <div id="selectionBar" class$="[[_computeSelectionBarClass(noBar, alignBottom)]]" on-transitionend="_onBarTransitionEnd"></div>\n        <slot></slot>\n      </div>\n    </div>\n\n    <paper-icon-button icon="paper-tabs:chevron-right" class$="[[_computeScrollButtonClass(_rightHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onRightScrollButtonDown" tabindex="-1"></paper-icon-button>\n'
          ]
        );
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      Object(c.a)({
        _template: Object(i.a)(u()),
        is: "paper-tabs",
        behaviors: [l.a, s.a],
        properties: {
          noink: { type: Boolean, value: !1, observer: "_noinkChanged" },
          noBar: { type: Boolean, value: !1 },
          noSlide: { type: Boolean, value: !1 },
          scrollable: { type: Boolean, value: !1 },
          fitContainer: { type: Boolean, value: !1 },
          disableDrag: { type: Boolean, value: !1 },
          hideScrollButtons: { type: Boolean, value: !1 },
          alignBottom: { type: Boolean, value: !1 },
          selectable: { type: String, value: "paper-tab" },
          autoselect: { type: Boolean, value: !1 },
          autoselectDelay: { type: Number, value: 0 },
          _step: { type: Number, value: 10 },
          _holdDelay: { type: Number, value: 1 },
          _leftHidden: { type: Boolean, value: !1 },
          _rightHidden: { type: Boolean, value: !1 },
          _previousTab: { type: Object }
        },
        hostAttributes: { role: "tablist" },
        listeners: {
          "iron-resize": "_onTabSizingChanged",
          "iron-items-changed": "_onTabSizingChanged",
          "iron-select": "_onIronSelect",
          "iron-deselect": "_onIronDeselect"
        },
        keyBindings: { "left:keyup right:keyup": "_onArrowKeyup" },
        created: function() {
          (this._holdJob = null),
            (this._pendingActivationItem = void 0),
            (this._pendingActivationTimeout = void 0),
            (this._bindDelayedActivationHandler = this._delayedActivationHandler.bind(
              this
            )),
            this.addEventListener("blur", this._onBlurCapture.bind(this), !0);
        },
        ready: function() {
          this.setScrollDirection("y", this.$.tabsContainer);
        },
        detached: function() {
          this._cancelPendingActivation();
        },
        _noinkChanged: function(e) {
          Object(d.a)(this)
            .querySelectorAll("paper-tab")
            .forEach(e ? this._setNoinkAttribute : this._removeNoinkAttribute);
        },
        _setNoinkAttribute: function(e) {
          e.setAttribute("noink", "");
        },
        _removeNoinkAttribute: function(e) {
          e.removeAttribute("noink");
        },
        _computeScrollButtonClass: function(e, t, n) {
          return !t || n ? "hidden" : e ? "not-visible" : "";
        },
        _computeTabsContentClass: function(e, t) {
          return e
            ? "scrollable" + (t ? " fit-container" : "")
            : " fit-container";
        },
        _computeSelectionBarClass: function(e, t) {
          return e ? "hidden" : t ? "align-bottom" : "";
        },
        _onTabSizingChanged: function() {
          this.debounce(
            "_onTabSizingChanged",
            function() {
              this._scroll(), this._tabChanged(this.selectedItem);
            },
            10
          );
        },
        _onIronSelect: function(e) {
          this._tabChanged(e.detail.item, this._previousTab),
            (this._previousTab = e.detail.item),
            this.cancelDebouncer("tab-changed");
        },
        _onIronDeselect: function(e) {
          this.debounce(
            "tab-changed",
            function() {
              this._tabChanged(null, this._previousTab),
                (this._previousTab = null);
            },
            1
          );
        },
        _activateHandler: function() {
          this._cancelPendingActivation(),
            a.b._activateHandler.apply(this, arguments);
        },
        _scheduleActivation: function(e, t) {
          (this._pendingActivationItem = e),
            (this._pendingActivationTimeout = this.async(
              this._bindDelayedActivationHandler,
              t
            ));
        },
        _delayedActivationHandler: function() {
          var e = this._pendingActivationItem;
          (this._pendingActivationItem = void 0),
            (this._pendingActivationTimeout = void 0),
            e.fire(this.activateEvent, null, { bubbles: !0, cancelable: !0 });
        },
        _cancelPendingActivation: function() {
          void 0 !== this._pendingActivationTimeout &&
            (this.cancelAsync(this._pendingActivationTimeout),
            (this._pendingActivationItem = void 0),
            (this._pendingActivationTimeout = void 0));
        },
        _onArrowKeyup: function(e) {
          this.autoselect &&
            this._scheduleActivation(this.focusedItem, this.autoselectDelay);
        },
        _onBlurCapture: function(e) {
          e.target === this._pendingActivationItem &&
            this._cancelPendingActivation();
        },
        get _tabContainerScrollSize() {
          return Math.max(
            0,
            this.$.tabsContainer.scrollWidth - this.$.tabsContainer.offsetWidth
          );
        },
        _scroll: function(e, t) {
          if (this.scrollable) {
            var n = (t && -t.ddx) || 0;
            this._affectScroll(n);
          }
        },
        _down: function(e) {
          this.async(function() {
            this._defaultFocusAsync &&
              (this.cancelAsync(this._defaultFocusAsync),
              (this._defaultFocusAsync = null));
          }, 1);
        },
        _affectScroll: function(e) {
          this.$.tabsContainer.scrollLeft += e;
          var t = this.$.tabsContainer.scrollLeft;
          (this._leftHidden = 0 === t),
            (this._rightHidden = t === this._tabContainerScrollSize);
        },
        _onLeftScrollButtonDown: function() {
          this._scrollToLeft(),
            (this._holdJob = setInterval(
              this._scrollToLeft.bind(this),
              this._holdDelay
            ));
        },
        _onRightScrollButtonDown: function() {
          this._scrollToRight(),
            (this._holdJob = setInterval(
              this._scrollToRight.bind(this),
              this._holdDelay
            ));
        },
        _onScrollButtonUp: function() {
          clearInterval(this._holdJob), (this._holdJob = null);
        },
        _scrollToLeft: function() {
          this._affectScroll(-this._step);
        },
        _scrollToRight: function() {
          this._affectScroll(this._step);
        },
        _tabChanged: function(e, t) {
          if (!e)
            return (
              this.$.selectionBar.classList.remove("expand"),
              this.$.selectionBar.classList.remove("contract"),
              void this._positionBar(0, 0)
            );
          var n = this.$.tabsContent.getBoundingClientRect(),
            i = n.width,
            o = e.getBoundingClientRect(),
            r = o.left - n.left;
          if (
            ((this._pos = {
              width: this._calcPercent(o.width, i),
              left: this._calcPercent(r, i)
            }),
            this.noSlide || null == t)
          )
            return (
              this.$.selectionBar.classList.remove("expand"),
              this.$.selectionBar.classList.remove("contract"),
              void this._positionBar(this._pos.width, this._pos.left)
            );
          var a = t.getBoundingClientRect(),
            s = this.items.indexOf(t),
            l = this.items.indexOf(e);
          this.$.selectionBar.classList.add("expand");
          var c = s < l;
          this._isRTL && (c = !c),
            c
              ? this._positionBar(
                  this._calcPercent(o.left + o.width - a.left, i) - 5,
                  this._left
                )
              : this._positionBar(
                  this._calcPercent(a.left + a.width - o.left, i) - 5,
                  this._calcPercent(r, i) + 5
                ),
            this.scrollable && this._scrollToSelectedIfNeeded(o.width, r);
        },
        _scrollToSelectedIfNeeded: function(e, t) {
          var n = t - this.$.tabsContainer.scrollLeft;
          n < 0
            ? (this.$.tabsContainer.scrollLeft += n)
            : (n += e - this.$.tabsContainer.offsetWidth) > 0 &&
              (this.$.tabsContainer.scrollLeft += n);
        },
        _calcPercent: function(e, t) {
          return (100 * e) / t;
        },
        _positionBar: function(e, t) {
          (e = e || 0),
            (t = t || 0),
            (this._width = e),
            (this._left = t),
            this.transform(
              "translateX(" + t + "%) scaleX(" + e / 100 + ")",
              this.$.selectionBar
            );
        },
        _onBarTransitionEnd: function(e) {
          var t = this.$.selectionBar.classList;
          t.contains("expand")
            ? (t.remove("expand"),
              t.add("contract"),
              this._positionBar(this._pos.width, this._pos.left))
            : t.contains("contract") && t.remove("contract");
        }
      });
    }
  ]
]);
//# sourceMappingURL=chunk.12902324b918e12549ba.js.map
