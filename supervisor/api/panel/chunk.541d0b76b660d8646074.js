/*! For license information please see chunk.541d0b76b660d8646074.js.LICENSE */
(self.webpackJsonp = self.webpackJsonp || []).push([
  [15],
  [
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      "use strict";
      var i = n(16),
        o = n(29),
        r = n(21),
        a = 133;
      function s(t, e) {
        for (
          var n = t.element.content,
            i = t.parts,
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
              e.has(h) && (u.push(h), null === p && (p = h)),
              null !== p && d++;
            void 0 !== s && s.index === l;

          )
            (s.index = null !== p ? -1 : s.index - d), (s = i[(r = c(i, r))]);
        }
        u.forEach(function(t) {
          return t.parentNode.removeChild(t);
        });
      }
      var l = function(t) {
          for (
            var e = 11 === t.nodeType ? 0 : 1,
              n = document.createTreeWalker(t, a, null, !1);
            n.nextNode();

          )
            e++;
          return e;
        },
        c = function(t) {
          for (
            var e =
              (arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : -1) + 1;
            e < t.length;
            e++
          ) {
            var n = t[e];
            if (Object(r.d)(n)) return e;
          }
          return -1;
        };
      var d = n(63),
        u = n(44),
        p = n(62);
      function h(t) {
        return (h =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var f = function(t, e) {
          return "".concat(t, "--").concat(e);
        },
        b = !0;
      void 0 === window.ShadyCSS
        ? (b = !1)
        : void 0 === window.ShadyCSS.prepareTemplateDom &&
          (console.warn(
            "Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."
          ),
          (b = !1));
      var v = function(t) {
          return function(e) {
            var n = f(e.type, t),
              i = u.a.get(n);
            void 0 === i &&
              ((i = { stringsArray: new WeakMap(), keyString: new Map() }),
              u.a.set(n, i));
            var o = i.stringsArray.get(e.strings);
            if (void 0 !== o) return o;
            var a = e.strings.join(r.f);
            if (void 0 === (o = i.keyString.get(a))) {
              var s = e.getTemplateElement();
              b && window.ShadyCSS.prepareTemplateDom(s, t),
                (o = new r.a(e, s)),
                i.keyString.set(a, o);
            }
            return i.stringsArray.set(e.strings, o), o;
          };
        },
        m = ["html", "svg"],
        y = new Set(),
        g = function(t, e, n) {
          y.add(t);
          var i = n ? n.element : document.createElement("template"),
            o = e.querySelectorAll("style"),
            r = o.length;
          if (0 !== r) {
            for (var d = document.createElement("style"), p = 0; p < r; p++) {
              var h = o[p];
              h.parentNode.removeChild(h), (d.textContent += h.textContent);
            }
            !(function(t) {
              m.forEach(function(e) {
                var n = u.a.get(f(e, t));
                void 0 !== n &&
                  n.keyString.forEach(function(t) {
                    var e = t.element.content,
                      n = new Set();
                    Array.from(e.querySelectorAll("style")).forEach(function(
                      t
                    ) {
                      n.add(t);
                    }),
                      s(t, n);
                  });
              });
            })(t);
            var b = i.content;
            n
              ? (function(t, e) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    i = t.element.content,
                    o = t.parts;
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
                            ((d = l(e)), n.parentNode.insertBefore(e, n));
                        -1 !== s && o[s].index === u;

                      ) {
                        if (d > 0) {
                          for (; -1 !== s; ) (o[s].index += d), (s = c(o, s));
                          return;
                        }
                        s = c(o, s);
                      }
                  else i.appendChild(e);
                })(n, d, b.firstChild)
              : b.insertBefore(d, b.firstChild),
              window.ShadyCSS.prepareTemplateStyles(i, t);
            var v = b.querySelector("style");
            if (window.ShadyCSS.nativeShadow && null !== v)
              e.insertBefore(v.cloneNode(!0), e.firstChild);
            else if (n) {
              b.insertBefore(d, b.firstChild);
              var g = new Set();
              g.add(d), s(n, g);
            }
          } else window.ShadyCSS.prepareTemplateStyles(i, t);
        };
      function _(t) {
        return (
          (function(t) {
            if (Array.isArray(t)) {
              for (var e = 0, n = new Array(t.length); e < t.length; e++)
                n[e] = t[e];
              return n;
            }
          })(t) ||
          (function(t) {
            if (
              Symbol.iterator in Object(t) ||
              "[object Arguments]" === Object.prototype.toString.call(t)
            )
              return Array.from(t);
          })(t) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function w(t) {
        return (w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function x(t, e, n, i, o, r, a) {
        try {
          var s = t[r](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? e(l) : Promise.resolve(l).then(i, o);
      }
      function k(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function S(t, e) {
        return !e || ("object" !== w(e) && "function" != typeof e)
          ? (function(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function C(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (C = function(t) {
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
            e.set(t, i);
          }
          function i() {
            return O(t, arguments, E(this).constructor);
          }
          return (
            (i.prototype = Object.create(t.prototype, {
              constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
            A(i, t)
          );
        })(t);
      }
      function O(t, e, n) {
        return (O = (function() {
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
          } catch (t) {
            return !1;
          }
        })()
          ? Reflect.construct
          : function(t, e, n) {
              var i = [null];
              i.push.apply(i, e);
              var o = new (Function.bind.apply(t, i))();
              return n && A(o, n.prototype), o;
            }).apply(null, arguments);
      }
      function A(t, e) {
        return (A =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function E(t) {
        return (E = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      window.JSCompiler_renameProperty = function(t, e) {
        return t;
      };
      var T = {
          toAttribute: function(t, e) {
            switch (e) {
              case Boolean:
                return t ? "" : null;
              case Object:
              case Array:
                return null == t ? t : JSON.stringify(t);
            }
            return t;
          },
          fromAttribute: function(t, e) {
            switch (e) {
              case Boolean:
                return null !== t;
              case Number:
                return null === t ? null : Number(t);
              case Object:
              case Array:
                return JSON.parse(t);
            }
            return t;
          }
        },
        I = function(t, e) {
          return e !== t && (e == e || t == t);
        },
        z = {
          attribute: !0,
          type: String,
          converter: T,
          reflect: !1,
          hasChanged: I
        },
        j = Promise.resolve(!0),
        R = (function(t) {
          function e() {
            var t;
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              ((t = S(this, E(e).call(this)))._updateState = 0),
              (t._instanceProperties = void 0),
              (t._updatePromise = j),
              (t._hasConnectedResolver = void 0),
              (t._changedProperties = new Map()),
              (t._reflectingProperties = void 0),
              t.initialize(),
              t
            );
          }
          var n, i, o;
          return (
            (function(t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 }
              })),
                e && A(t, e);
            })(e, C(HTMLElement)),
            (n = e),
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
                  var t = this;
                  this.constructor._classProperties.forEach(function(e, n) {
                    if (t.hasOwnProperty(n)) {
                      var i = t[n];
                      delete t[n],
                        t._instanceProperties ||
                          (t._instanceProperties = new Map()),
                        t._instanceProperties.set(n, i);
                    }
                  });
                }
              },
              {
                key: "_applyInstanceProperties",
                value: function() {
                  var t = this;
                  this._instanceProperties.forEach(function(e, n) {
                    return (t[n] = e);
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
                value: function(t, e, n) {
                  e !== n && this._attributeToProperty(t, n);
                }
              },
              {
                key: "_propertyToAttribute",
                value: function(t, e) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : z,
                    i = this.constructor,
                    o = i._attributeNameForProperty(t, n);
                  if (void 0 !== o) {
                    var r = i._propertyValueToAttribute(e, n);
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
                value: function(t, e) {
                  if (!(8 & this._updateState)) {
                    var n = this.constructor,
                      i = n._attributeToPropertyMap.get(t);
                    if (void 0 !== i) {
                      var o = n._classProperties.get(i) || z;
                      (this._updateState = 16 | this._updateState),
                        (this[i] = n._propertyValueFromAttribute(e, o)),
                        (this._updateState = -17 & this._updateState);
                    }
                  }
                }
              },
              {
                key: "_requestUpdate",
                value: function(t, e) {
                  var n = !0;
                  if (void 0 !== t) {
                    var i = this.constructor,
                      o = i._classProperties.get(t) || z;
                    i._valueHasChanged(this[t], e, o.hasChanged)
                      ? (this._changedProperties.has(t) ||
                          this._changedProperties.set(t, e),
                        !0 !== o.reflect ||
                          16 & this._updateState ||
                          (void 0 === this._reflectingProperties &&
                            (this._reflectingProperties = new Map()),
                          this._reflectingProperties.set(t, o)))
                      : (n = !1);
                  }
                  !this._hasRequestedUpdate && n && this._enqueueUpdate();
                }
              },
              {
                key: "requestUpdate",
                value: function(t, e) {
                  return this._requestUpdate(t, e), this.updateComplete;
                }
              },
              {
                key: "_enqueueUpdate",
                value: (function() {
                  var t,
                    e =
                      ((t = regeneratorRuntime.mark(function t() {
                        var e,
                          n,
                          i,
                          o,
                          r = this;
                        return regeneratorRuntime.wrap(
                          function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (this._updateState = 4 | this._updateState),
                                    (i = this._updatePromise),
                                    (this._updatePromise = new Promise(function(
                                      t,
                                      i
                                    ) {
                                      (e = t), (n = i);
                                    })),
                                    (t.prev = 3),
                                    (t.next = 6),
                                    i
                                  );
                                case 6:
                                  t.next = 10;
                                  break;
                                case 8:
                                  (t.prev = 8), (t.t0 = t.catch(3));
                                case 10:
                                  if (this._hasConnected) {
                                    t.next = 13;
                                    break;
                                  }
                                  return (
                                    (t.next = 13),
                                    new Promise(function(t) {
                                      return (r._hasConnectedResolver = t);
                                    })
                                  );
                                case 13:
                                  if (
                                    ((t.prev = 13),
                                    null == (o = this.performUpdate()))
                                  ) {
                                    t.next = 18;
                                    break;
                                  }
                                  return (t.next = 18), o;
                                case 18:
                                  t.next = 23;
                                  break;
                                case 20:
                                  (t.prev = 20), (t.t1 = t.catch(13)), n(t.t1);
                                case 23:
                                  e(!this._hasRequestedUpdate);
                                case 24:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [
                            [3, 8],
                            [13, 20]
                          ]
                        );
                      })),
                      function() {
                        var e = this,
                          n = arguments;
                        return new Promise(function(i, o) {
                          var r = t.apply(e, n);
                          function a(t) {
                            x(r, i, o, a, s, "next", t);
                          }
                          function s(t) {
                            x(r, i, o, a, s, "throw", t);
                          }
                          a(void 0);
                        });
                      });
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "performUpdate",
                value: function() {
                  this._instanceProperties && this._applyInstanceProperties();
                  var t = !1,
                    e = this._changedProperties;
                  try {
                    (t = this.shouldUpdate(e)) && this.update(e);
                  } catch (n) {
                    throw ((t = !1), n);
                  } finally {
                    this._markUpdated();
                  }
                  t &&
                    (1 & this._updateState ||
                      ((this._updateState = 1 | this._updateState),
                      this.firstUpdated(e)),
                    this.updated(e));
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
                value: function(t) {
                  return !0;
                }
              },
              {
                key: "update",
                value: function(t) {
                  var e = this;
                  void 0 !== this._reflectingProperties &&
                    this._reflectingProperties.size > 0 &&
                    (this._reflectingProperties.forEach(function(t, n) {
                      return e._propertyToAttribute(n, e[n], t);
                    }),
                    (this._reflectingProperties = void 0));
                }
              },
              { key: "updated", value: function(t) {} },
              { key: "firstUpdated", value: function(t) {} },
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
            ]),
            (o = [
              {
                key: "_ensureClassProperties",
                value: function() {
                  var t = this;
                  if (
                    !this.hasOwnProperty(
                      JSCompiler_renameProperty("_classProperties", this)
                    )
                  ) {
                    this._classProperties = new Map();
                    var e = Object.getPrototypeOf(this)._classProperties;
                    void 0 !== e &&
                      e.forEach(function(e, n) {
                        return t._classProperties.set(n, e);
                      });
                  }
                }
              },
              {
                key: "createProperty",
                value: function(t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : z;
                  if (
                    (this._ensureClassProperties(),
                    this._classProperties.set(t, e),
                    !e.noAccessor && !this.prototype.hasOwnProperty(t))
                  ) {
                    var n = "symbol" === w(t) ? Symbol() : "__".concat(t);
                    Object.defineProperty(this.prototype, t, {
                      get: function() {
                        return this[n];
                      },
                      set: function(e) {
                        var i = this[t];
                        (this[n] = e), this._requestUpdate(t, i);
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
                  var t = Object.getPrototypeOf(this);
                  if (
                    (t.hasOwnProperty("finalized") || t.finalize(),
                    (this.finalized = !0),
                    this._ensureClassProperties(),
                    (this._attributeToPropertyMap = new Map()),
                    this.hasOwnProperty(
                      JSCompiler_renameProperty("properties", this)
                    ))
                  ) {
                    var e = this.properties,
                      n = [].concat(
                        _(Object.getOwnPropertyNames(e)),
                        _(
                          "function" == typeof Object.getOwnPropertySymbols
                            ? Object.getOwnPropertySymbols(e)
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
                        this.createProperty(l, e[l]);
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
                value: function(t, e) {
                  var n = e.attribute;
                  return !1 === n
                    ? void 0
                    : "string" == typeof n
                    ? n
                    : "string" == typeof t
                    ? t.toLowerCase()
                    : void 0;
                }
              },
              {
                key: "_valueHasChanged",
                value: function(t, e) {
                  return (arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : I)(t, e);
                }
              },
              {
                key: "_propertyValueFromAttribute",
                value: function(t, e) {
                  var n = e.type,
                    i = e.converter || T,
                    o = "function" == typeof i ? i : i.fromAttribute;
                  return o ? o(t, n) : t;
                }
              },
              {
                key: "_propertyValueToAttribute",
                value: function(t, e) {
                  if (void 0 !== e.reflect) {
                    var n = e.type,
                      i = e.converter;
                    return ((i && i.toAttribute) || T.toAttribute)(t, n);
                  }
                }
              },
              {
                key: "observedAttributes",
                get: function() {
                  var t = this;
                  this.finalize();
                  var e = [];
                  return (
                    this._classProperties.forEach(function(n, i) {
                      var o = t._attributeNameForProperty(i, n);
                      void 0 !== o &&
                        (t._attributeToPropertyMap.set(o, i), e.push(o));
                    }),
                    e
                  );
                }
              }
            ]),
            i && k(n.prototype, i),
            o && k(n, o),
            e
          );
        })();
      R.finalized = !0;
      var B = function(t) {
          return function(e) {
            return "function" == typeof e
              ? (function(t, e) {
                  return window.customElements.define(t, e), e;
                })(t, e)
              : (function(t, e) {
                  return {
                    kind: e.kind,
                    elements: e.elements,
                    finisher: function(e) {
                      window.customElements.define(t, e);
                    }
                  };
                })(t, e);
          };
        },
        P = function(t, e) {
          return "method" !== e.kind || !e.descriptor || "value" in e.descriptor
            ? {
                kind: "field",
                key: Symbol(),
                placement: "own",
                descriptor: {},
                initializer: function() {
                  "function" == typeof e.initializer &&
                    (this[e.key] = e.initializer.call(this));
                },
                finisher: function(n) {
                  n.createProperty(e.key, t);
                }
              }
            : Object.assign({}, e, {
                finisher: function(n) {
                  n.createProperty(e.key, t);
                }
              });
        },
        N = function(t, e, n) {
          e.constructor.createProperty(n, t);
        };
      function L(t) {
        return function(e, n) {
          return void 0 !== n ? N(t, e, n) : P(t, e);
        };
      }
      function F(t) {
        return function(e, n) {
          var i = {
            get: function() {
              return this.renderRoot.querySelector(t);
            },
            enumerable: !0,
            configurable: !0
          };
          return void 0 !== n ? M(i, e, n) : D(i, e);
        };
      }
      var M = function(t, e, n) {
          Object.defineProperty(e, n, t);
        },
        D = function(t, e) {
          return {
            kind: "method",
            placement: "prototype",
            key: e.key,
            descriptor: t
          };
        };
      function H(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var V =
          "adoptedStyleSheets" in Document.prototype &&
          "replace" in CSSStyleSheet.prototype,
        U = Symbol(),
        $ = (function() {
          function t(e, n) {
            if (
              ((function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              n !== U)
            )
              throw new Error(
                "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
              );
            this.cssText = e;
          }
          var e, n, i;
          return (
            (e = t),
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
                      (V
                        ? ((this._styleSheet = new CSSStyleSheet()),
                          this._styleSheet.replaceSync(this.cssText))
                        : (this._styleSheet = null)),
                    this._styleSheet
                  );
                }
              }
            ]) && H(e.prototype, n),
            i && H(e, i),
            t
          );
        })(),
        K = function(t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1;
            i < e;
            i++
          )
            n[i - 1] = arguments[i];
          var o = n.reduce(function(e, n, i) {
            return (
              e +
              (function(t) {
                if (t instanceof $) return t.cssText;
                if ("number" == typeof t) return t;
                throw new Error(
                  "Value passed to 'css' function must be a 'css' function result: ".concat(
                    t,
                    ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."
                  )
                );
              })(n) +
              t[i + 1]
            );
          }, t[0]);
          return new $(o, U);
        };
      function q(t) {
        return (q =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function W(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function Z(t, e) {
        return !e || ("object" !== q(e) && "function" != typeof e)
          ? (function(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function X(t, e, n) {
        return (X =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(t, e, n) {
                var i = (function(t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = Y(t));

                  );
                  return t;
                })(t, e);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function Y(t) {
        return (Y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function G(t, e) {
        return (G =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      n.d(e, "a", function() {
        return Q;
      }),
        n.d(e, "b", function() {
          return R;
        }),
        n.d(e, "d", function() {
          return B;
        }),
        n.d(e, "f", function() {
          return L;
        }),
        n.d(e, "g", function() {
          return F;
        }),
        n.d(e, "e", function() {
          return i.g;
        }),
        n.d(e, "c", function() {
          return K;
        }),
        (window.litElementVersions || (window.litElementVersions = [])).push(
          "2.2.1"
        );
      var J = function(t) {
          return t.flat
            ? t.flat(1 / 0)
            : (function t(e) {
                for (
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    i = 0,
                    o = e.length;
                  i < o;
                  i++
                ) {
                  var r = e[i];
                  Array.isArray(r) ? t(r, n) : n.push(r);
                }
                return n;
              })(t);
        },
        Q = (function(t) {
          function e() {
            return (
              (function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              Z(this, Y(e).apply(this, arguments))
            );
          }
          var n, o, r;
          return (
            (function(t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 }
              })),
                e && G(t, e);
            })(e, R),
            (n = e),
            (r = [
              {
                key: "finalize",
                value: function() {
                  X(Y(e), "finalize", this).call(this),
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
                  var t = this.styles,
                    e = [];
                  Array.isArray(t)
                    ? J(t)
                        .reduceRight(function(t, e) {
                          return t.add(e), t;
                        }, new Set())
                        .forEach(function(t) {
                          return e.unshift(t);
                        })
                    : t && e.push(t);
                  return e;
                }
              }
            ]),
            (o = [
              {
                key: "initialize",
                value: function() {
                  X(Y(e.prototype), "initialize", this).call(this),
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
                  var t = this.constructor._styles;
                  0 !== t.length &&
                    (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow
                      ? V
                        ? (this.renderRoot.adoptedStyleSheets = t.map(function(
                            t
                          ) {
                            return t.styleSheet;
                          }))
                        : (this._needsShimAdoptedStyleSheets = !0)
                      : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
                          t.map(function(t) {
                            return t.cssText;
                          }),
                          this.localName
                        ));
                }
              },
              {
                key: "connectedCallback",
                value: function() {
                  X(Y(e.prototype), "connectedCallback", this).call(this),
                    this.hasUpdated &&
                      void 0 !== window.ShadyCSS &&
                      window.ShadyCSS.styleElement(this);
                }
              },
              {
                key: "update",
                value: function(t) {
                  var n = this;
                  X(Y(e.prototype), "update", this).call(this, t);
                  var o = this.render();
                  o instanceof i.d &&
                    this.constructor.render(o, this.renderRoot, {
                      scopeName: this.localName,
                      eventContext: this
                    }),
                    this._needsShimAdoptedStyleSheets &&
                      ((this._needsShimAdoptedStyleSheets = !1),
                      this.constructor._styles.forEach(function(t) {
                        var e = document.createElement("style");
                        (e.textContent = t.cssText),
                          n.renderRoot.appendChild(e);
                      }));
                }
              },
              { key: "render", value: function() {} }
            ]) && W(n.prototype, o),
            r && W(n, r),
            e
          );
        })();
      (Q.finalized = !0),
        (Q.render = function(t, e, n) {
          if (!n || "object" !== h(n) || !n.scopeName)
            throw new Error("The `scopeName` option is required.");
          var i = n.scopeName,
            r = d.a.has(e),
            a = b && 11 === e.nodeType && !!e.host,
            s = a && !y.has(i),
            l = s ? document.createDocumentFragment() : e;
          if (
            (Object(d.b)(t, l, Object.assign({ templateFactory: v(i) }, n)), s)
          ) {
            var c = d.a.get(l);
            d.a.delete(l);
            var u = c.value instanceof p.a ? c.value.template : void 0;
            g(i, l, u),
              Object(o.b)(e, e.firstChild),
              e.appendChild(l),
              d.a.set(e, c);
          }
          !r && a && window.ShadyCSS.styleElement(e.host);
        });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      "use strict";
      n(4);
      var i = n(6);
      function o() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n<custom-style>\n  <style is="custom-style">\n    [hidden] {\n      display: none !important;\n    }\n  </style>\n</custom-style>\n<custom-style>\n  <style is="custom-style">\n    html {\n\n      --layout: {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      };\n\n      --layout-inline: {\n        display: -ms-inline-flexbox;\n        display: -webkit-inline-flex;\n        display: inline-flex;\n      };\n\n      --layout-horizontal: {\n        @apply --layout;\n\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      };\n\n      --layout-horizontal-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: row-reverse;\n        -webkit-flex-direction: row-reverse;\n        flex-direction: row-reverse;\n      };\n\n      --layout-vertical: {\n        @apply --layout;\n\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      };\n\n      --layout-vertical-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: column-reverse;\n        -webkit-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n      };\n\n      --layout-wrap: {\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n      };\n\n      --layout-wrap-reverse: {\n        -ms-flex-wrap: wrap-reverse;\n        -webkit-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n      };\n\n      --layout-flex-auto: {\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n      };\n\n      --layout-flex-none: {\n        -ms-flex: none;\n        -webkit-flex: none;\n        flex: none;\n      };\n\n      --layout-flex: {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      };\n\n      --layout-flex-2: {\n        -ms-flex: 2;\n        -webkit-flex: 2;\n        flex: 2;\n      };\n\n      --layout-flex-3: {\n        -ms-flex: 3;\n        -webkit-flex: 3;\n        flex: 3;\n      };\n\n      --layout-flex-4: {\n        -ms-flex: 4;\n        -webkit-flex: 4;\n        flex: 4;\n      };\n\n      --layout-flex-5: {\n        -ms-flex: 5;\n        -webkit-flex: 5;\n        flex: 5;\n      };\n\n      --layout-flex-6: {\n        -ms-flex: 6;\n        -webkit-flex: 6;\n        flex: 6;\n      };\n\n      --layout-flex-7: {\n        -ms-flex: 7;\n        -webkit-flex: 7;\n        flex: 7;\n      };\n\n      --layout-flex-8: {\n        -ms-flex: 8;\n        -webkit-flex: 8;\n        flex: 8;\n      };\n\n      --layout-flex-9: {\n        -ms-flex: 9;\n        -webkit-flex: 9;\n        flex: 9;\n      };\n\n      --layout-flex-10: {\n        -ms-flex: 10;\n        -webkit-flex: 10;\n        flex: 10;\n      };\n\n      --layout-flex-11: {\n        -ms-flex: 11;\n        -webkit-flex: 11;\n        flex: 11;\n      };\n\n      --layout-flex-12: {\n        -ms-flex: 12;\n        -webkit-flex: 12;\n        flex: 12;\n      };\n\n      /* alignment in cross axis */\n\n      --layout-start: {\n        -ms-flex-align: start;\n        -webkit-align-items: flex-start;\n        align-items: flex-start;\n      };\n\n      --layout-center: {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      };\n\n      --layout-end: {\n        -ms-flex-align: end;\n        -webkit-align-items: flex-end;\n        align-items: flex-end;\n      };\n\n      --layout-baseline: {\n        -ms-flex-align: baseline;\n        -webkit-align-items: baseline;\n        align-items: baseline;\n      };\n\n      /* alignment in main axis */\n\n      --layout-start-justified: {\n        -ms-flex-pack: start;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      };\n\n      --layout-center-justified: {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      };\n\n      --layout-end-justified: {\n        -ms-flex-pack: end;\n        -webkit-justify-content: flex-end;\n        justify-content: flex-end;\n      };\n\n      --layout-around-justified: {\n        -ms-flex-pack: distribute;\n        -webkit-justify-content: space-around;\n        justify-content: space-around;\n      };\n\n      --layout-justified: {\n        -ms-flex-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n      };\n\n      --layout-center-center: {\n        @apply --layout-center;\n        @apply --layout-center-justified;\n      };\n\n      /* self alignment */\n\n      --layout-self-start: {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      };\n\n      --layout-self-center: {\n        -ms-align-self: center;\n        -webkit-align-self: center;\n        align-self: center;\n      };\n\n      --layout-self-end: {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      };\n\n      --layout-self-stretch: {\n        -ms-align-self: stretch;\n        -webkit-align-self: stretch;\n        align-self: stretch;\n      };\n\n      --layout-self-baseline: {\n        -ms-align-self: baseline;\n        -webkit-align-self: baseline;\n        align-self: baseline;\n      };\n\n      /* multi-line alignment in main axis */\n\n      --layout-start-aligned: {\n        -ms-flex-line-pack: start;  /* IE10 */\n        -ms-align-content: flex-start;\n        -webkit-align-content: flex-start;\n        align-content: flex-start;\n      };\n\n      --layout-end-aligned: {\n        -ms-flex-line-pack: end;  /* IE10 */\n        -ms-align-content: flex-end;\n        -webkit-align-content: flex-end;\n        align-content: flex-end;\n      };\n\n      --layout-center-aligned: {\n        -ms-flex-line-pack: center;  /* IE10 */\n        -ms-align-content: center;\n        -webkit-align-content: center;\n        align-content: center;\n      };\n\n      --layout-between-aligned: {\n        -ms-flex-line-pack: justify;  /* IE10 */\n        -ms-align-content: space-between;\n        -webkit-align-content: space-between;\n        align-content: space-between;\n      };\n\n      --layout-around-aligned: {\n        -ms-flex-line-pack: distribute;  /* IE10 */\n        -ms-align-content: space-around;\n        -webkit-align-content: space-around;\n        align-content: space-around;\n      };\n\n      /*******************************\n                Other Layout\n      *******************************/\n\n      --layout-block: {\n        display: block;\n      };\n\n      --layout-invisible: {\n        visibility: hidden !important;\n      };\n\n      --layout-relative: {\n        position: relative;\n      };\n\n      --layout-fit: {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-scroll: {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n      };\n\n      --layout-fullbleed: {\n        margin: 0;\n        height: 100vh;\n      };\n\n      /* fixed position */\n\n      --layout-fixed-top: {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n      };\n\n      --layout-fixed-right: {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n      };\n\n      --layout-fixed-bottom: {\n        position: fixed;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-fixed-left: {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n    }\n  </style>\n</custom-style>'
        ]);
        return (
          (o = function() {
            return t;
          }),
          t
        );
      }
      var r = Object(i.a)(o());
      r.setAttribute("style", "display: none;"),
        document.head.appendChild(r.content);
      var a = document.createElement("style");
      (a.textContent = "[hidden] { display: none !important; }"),
        document.head.appendChild(a);
    },
    function(t, e, n) {
      "use strict";
      n(4), n(101);
      var i = n(6);
      function o() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
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
            return t;
          }),
          t
        );
      }
      var r = Object(i.a)(o());
      r.setAttribute("style", "display: none;"),
        document.head.appendChild(r.content);
    },
    ,
    ,
    function(t, e, n) {
      "use strict";
      var i = n(20);
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var r = new ((function() {
          function t() {
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }
          var e, n, r;
          return (
            (e = t),
            (n = [
              {
                key: "handleAttributeExpressions",
                value: function(t, e, n, o) {
                  var r = e[0];
                  return "." === r
                    ? new i.f(t, e.slice(1), n).parts
                    : "@" === r
                    ? [new i.d(t, e.slice(1), o.eventContext)]
                    : "?" === r
                    ? [new i.c(t, e.slice(1), n)]
                    : new i.a(t, e, n).parts;
                }
              },
              {
                key: "handleTextExpression",
                value: function(t) {
                  return new i.e(t);
                }
              }
            ]) && o(e.prototype, n),
            r && o(e, r),
            t
          );
        })())(),
        a = n(43),
        s = n(60),
        l = n(29),
        c = n(61),
        d = (n(63), n(44)),
        u = (n(62), n(21));
      n.d(e, "g", function() {
        return p;
      }),
        n.d(e, "f", function() {
          return s.a;
        }),
        n.d(e, "i", function() {
          return l.b;
        }),
        n.d(e, "j", function() {
          return l.c;
        }),
        n.d(e, "h", function() {
          return c.a;
        }),
        n.d(e, "a", function() {
          return i.b;
        }),
        n.d(e, "b", function() {
          return i.e;
        }),
        n.d(e, "c", function() {
          return i.g;
        }),
        n.d(e, "k", function() {
          return d.b;
        }),
        n.d(e, "d", function() {
          return a.b;
        }),
        n.d(e, "e", function() {
          return u.c;
        }),
        (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");
      var p = function(t) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1;
          i < e;
          i++
        )
          n[i - 1] = arguments[i];
        return new a.b(t, n, "html", r);
      };
    },
    ,
    function(t, e, n) {
      "use strict";
      var i = n(36),
        o = n(5),
        r = n(69),
        a = n(47);
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function l() {
        var t = d([
          '\n      <button\n          id="button"\n          class="mdc-button ',
          '"\n          ?disabled="',
          '"\n          aria-label="',
          '">\n        <div class="mdc-button__ripple"></div>\n        ',
          '\n        <span class="mdc-button__label">',
          "</span>\n        ",
          "\n        <slot></slot>\n      </button>"
        ]);
        return (
          (l = function() {
            return t;
          }),
          t
        );
      }
      function c() {
        var t = d([
          '<span class="material-icons mdc-button__icon">',
          "</span>"
        ]);
        return (
          (c = function() {
            return t;
          }),
          t
        );
      }
      function d(t, e) {
        return (
          e || (e = t.slice(0)),
          Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function u(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function p(t, e) {
        return !e || ("object" !== s(e) && "function" != typeof e)
          ? (function(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function h(t) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function f(t, e) {
        return (f =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var b = (function(t) {
        function e() {
          var t;
          return (
            (function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            ((t = p(this, h(e).apply(this, arguments))).raised = !1),
            (t.unelevated = !1),
            (t.outlined = !1),
            (t.dense = !1),
            (t.disabled = !1),
            (t.trailingIcon = !1),
            (t.icon = ""),
            (t.label = ""),
            t
          );
        }
        var n, i, s;
        return (
          (function(t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 }
            })),
              e && f(t, e);
          })(e, o["a"]),
          (n = e),
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
                var t = this.buttonElement;
                if (t) {
                  var e = t.ripple;
                  e && e.handleFocus(), t.focus();
                }
              }
            },
            {
              key: "blur",
              value: function() {
                var t = this.buttonElement;
                if (t) {
                  var e = t.ripple;
                  e && e.handleBlur(), t.blur();
                }
              }
            },
            {
              key: "render",
              value: function() {
                var t = {
                    "mdc-button--raised": this.raised,
                    "mdc-button--unelevated": this.unelevated,
                    "mdc-button--outlined": this.outlined,
                    "mdc-button--dense": this.dense
                  },
                  e = Object(o.e)(c(), this.icon);
                return Object(o.e)(
                  l(),
                  Object(a.a)(t),
                  this.disabled,
                  this.label || this.icon,
                  this.icon && !this.trailingIcon ? e : "",
                  this.label,
                  this.icon && this.trailingIcon ? e : ""
                );
              }
            },
            {
              key: "firstUpdated",
              value: function() {
                this.buttonElement.ripple = Object(r.b)({
                  surfaceNode: this.buttonElement,
                  unbounded: !1
                });
              }
            }
          ]) && u(n.prototype, i),
          s && u(n, s),
          e
        );
      })();
      function v() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff}.mdc-button{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding:0 8px 0 8px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0,0,0,.38)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0,0,0,.38)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined:not(:disabled){border-color:rgba(0,0,0,.12)}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.12)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button .mdc-button__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button:hover .mdc-button__ripple::before{opacity:.04}.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.12}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-button .mdc-button__ripple{position:absolute;box-sizing:content-box;width:100%;height:100%;overflow:hidden}.mdc-button:not(.mdc-button--outlined) .mdc-button__ripple{top:0;left:0}.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after,.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:hover .mdc-button__ripple::before,.mdc-button--unelevated:hover .mdc-button__ripple::before{opacity:.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-button{height:36px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-button--raised{box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}:host{display:inline-flex;outline:none;vertical-align:top}:host([disabled]){pointer-events:none}.mdc-button{flex:auto;overflow:hidden;text-transform:var(--mdc-button-text-transform, uppercase);letter-spacing:var(--mdc-button-letter-spacing, 0.0892857143em);padding:0 var(--mdc-button-horizontal-padding, 8px) 0 var(--mdc-button-horizontal-padding, 8px)}.mdc-button.mdc-button--raised,.mdc-button.mdc-button--unelevated{padding:0 var(--mdc-button-horizontal-padding, 16px) 0 var(--mdc-button-horizontal-padding, 16px)}.mdc-button.mdc-button--outlined{padding:0 calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px)) 0 calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));border-width:var(--mdc-button-outline-width, 1px);border-color:var(--mdc-button-outline-color, var(--mdc-theme-primary, #6200ee))}.mdc-button.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button.mdc-button--dense .mdc-button__touch{display:none}.mdc-button .mdc-button__ripple{border-radius:0}:host([disabled]) .mdc-button.mdc-button--raised,:host([disabled]) .mdc-button.mdc-button--unelevated{background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12));color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button:not(.mdc-button--raised):not(.mdc-button--unelevated){color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button.mdc-button--outlined{border-color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38));border-color:var(--mdc-button-disabled-outline-color, var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38)))}'
        ]);
        return (
          (v = function() {
            return t;
          }),
          t
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
      function y(t) {
        return (y =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function g(t, e) {
        return !e || ("object" !== y(e) && "function" != typeof e)
          ? (function(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function _(t) {
        return (_ = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function w(t, e) {
        return (w =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var x = (function(t) {
        function e() {
          return (
            (function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            g(this, _(e).apply(this, arguments))
          );
        }
        return (
          (function(t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 }
            })),
              e && w(t, e);
          })(e, b),
          e
        );
      })();
      (x.styles = m), (x = Object(i.b)([Object(o.d)("mwc-button")], x));
    },
    function(t, e, n) {
      "use strict";
      n(4), n(12);
      var i = n(7),
        o = n(6),
        r = n(42);
      function a() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #baseURIAnchor {\n        display: none;\n      }\n\n      #sizedImgDiv {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n\n        display: none;\n      }\n\n      #img {\n        display: block;\n        width: var(--iron-image-width, auto);\n        height: var(--iron-image-height, auto);\n      }\n\n      :host([sizing]) #sizedImgDiv {\n        display: block;\n      }\n\n      :host([sizing]) #img {\n        display: none;\n      }\n\n      #placeholder {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n\n        background-color: inherit;\n        opacity: 1;\n\n        @apply --iron-image-placeholder;\n      }\n\n      #placeholder.faded-out {\n        transition: opacity 0.5s linear;\n        opacity: 0;\n      }\n    </style>\n\n    <a id="baseURIAnchor" href="#"></a>\n    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>\n    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">\n    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>\n'
        ]);
        return (
          (a = function() {
            return t;
          }),
          t
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
        _loadStateObserver: function(t, e) {
          var n = this._resolveSrc(t);
          n !== this._resolvedSrc &&
            ((this._resolvedSrc = ""),
            this.$.img.removeAttribute("src"),
            (this.$.sizedImgDiv.style.backgroundImage = ""),
            "" === t || e
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
          var t = this.$.sizedImgDiv.style,
            e = this.$.placeholder.style;
          (t.backgroundSize = e.backgroundSize = this.sizing),
            (t.backgroundPosition = e.backgroundPosition = this.sizing
              ? this.position
              : ""),
            (t.backgroundRepeat = e.backgroundRepeat = this.sizing
              ? "no-repeat"
              : "");
        },
        _resolveSrc: function(t) {
          var e = Object(r.c)(t, this.$.baseURIAnchor.href);
          return (
            e.length >= 2 &&
              "/" === e[0] &&
              "/" !== e[1] &&
              (e =
                (location.origin || location.protocol + "//" + location.host) +
                e),
            e
          );
        }
      });
      n(35);
      function s() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n<dom-module id="paper-material-styles">\n  <template>\n    <style>\n      html {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      .paper-material {\n        @apply --paper-material;\n      }\n      .paper-material[elevation="1"] {\n        @apply --paper-material-elevation-1;\n      }\n      .paper-material[elevation="2"] {\n        @apply --paper-material-elevation-2;\n      }\n      .paper-material[elevation="3"] {\n        @apply --paper-material-elevation-3;\n      }\n      .paper-material[elevation="4"] {\n        @apply --paper-material-elevation-4;\n      }\n      .paper-material[elevation="5"] {\n        @apply --paper-material-elevation-5;\n      }\n\n      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */\n      :host {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      :host(.paper-material) {\n        @apply --paper-material;\n      }\n      :host(.paper-material[elevation="1"]) {\n        @apply --paper-material-elevation-1;\n      }\n      :host(.paper-material[elevation="2"]) {\n        @apply --paper-material-elevation-2;\n      }\n      :host(.paper-material[elevation="3"]) {\n        @apply --paper-material-elevation-3;\n      }\n      :host(.paper-material[elevation="4"]) {\n        @apply --paper-material-elevation-4;\n      }\n      :host(.paper-material[elevation="5"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n  </template>\n</dom-module>'
        ]);
        return (
          (s = function() {
            return t;
          }),
          t
        );
      }
      var l = Object(o.a)(s());
      l.setAttribute("style", "display: none;"),
        document.head.appendChild(l.content);
      n(13);
      function c() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
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
            return t;
          }),
          t
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
        _isHidden: function(t) {
          return t ? "false" : "true";
        },
        _headingChanged: function(t) {
          var e = this.getAttribute("heading"),
            n = this.getAttribute("aria-label");
          ("string" == typeof n && n !== e) ||
            this.setAttribute("aria-label", t);
        },
        _computeHeadingClass: function(t) {
          return t ? " over-image" : "";
        },
        _computeAnimated: function(t) {
          return t;
        }
      });
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return _;
      }),
        n.d(e, "b", function() {
          return w;
        }),
        n.d(e, "e", function() {
          return x;
        }),
        n.d(e, "c", function() {
          return k;
        }),
        n.d(e, "f", function() {
          return S;
        }),
        n.d(e, "g", function() {
          return C;
        }),
        n.d(e, "d", function() {
          return E;
        });
      var i = n(60),
        o = n(29),
        r = n(61),
        a = n(62),
        s = n(43),
        l = n(21);
      function c(t, e) {
        return !e || ("object" !== m(e) && "function" != typeof e)
          ? (function(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function d(t, e, n) {
        return (d =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(t, e, n) {
                var i = (function(t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = u(t));

                  );
                  return t;
                })(t, e);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function u(t) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function p(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 }
        })),
          e && h(t, e);
      }
      function h(t, e) {
        return (h =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function f(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function b(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function v(t, e, n) {
        return e && b(t.prototype, e), n && b(t, n), t;
      }
      function m(t) {
        return (m =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var y = function(t) {
          return null === t || !("object" === m(t) || "function" == typeof t);
        },
        g = function(t) {
          return Array.isArray(t) || !(!t || !t[Symbol.iterator]);
        },
        _ = (function() {
          function t(e, n, i) {
            f(this, t),
              (this.dirty = !0),
              (this.element = e),
              (this.name = n),
              (this.strings = i),
              (this.parts = []);
            for (var o = 0; o < i.length - 1; o++)
              this.parts[o] = this._createPart();
          }
          return (
            v(t, [
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
                    var t = this.strings, e = t.length - 1, n = "", i = 0;
                    i < e;
                    i++
                  ) {
                    n += t[i];
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
                  return (n += t[e]);
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
            t
          );
        })(),
        w = (function() {
          function t(e) {
            f(this, t), (this.value = void 0), (this.committer = e);
          }
          return (
            v(t, [
              {
                key: "setValue",
                value: function(t) {
                  t === r.a ||
                    (y(t) && t === this.value) ||
                    ((this.value = t),
                    Object(i.b)(t) || (this.committer.dirty = !0));
                }
              },
              {
                key: "commit",
                value: function() {
                  for (; Object(i.b)(this.value); ) {
                    var t = this.value;
                    (this.value = r.a), t(this);
                  }
                  this.value !== r.a && this.committer.commit();
                }
              }
            ]),
            t
          );
        })(),
        x = (function() {
          function t(e) {
            f(this, t),
              (this.value = void 0),
              (this.__pendingValue = void 0),
              (this.options = e);
          }
          return (
            v(t, [
              {
                key: "appendInto",
                value: function(t) {
                  (this.startNode = t.appendChild(Object(l.c)())),
                    (this.endNode = t.appendChild(Object(l.c)()));
                }
              },
              {
                key: "insertAfterNode",
                value: function(t) {
                  (this.startNode = t), (this.endNode = t.nextSibling);
                }
              },
              {
                key: "appendIntoPart",
                value: function(t) {
                  t.__insert((this.startNode = Object(l.c)())),
                    t.__insert((this.endNode = Object(l.c)()));
                }
              },
              {
                key: "insertAfterPart",
                value: function(t) {
                  t.__insert((this.startNode = Object(l.c)())),
                    (this.endNode = t.endNode),
                    (t.endNode = this.startNode);
                }
              },
              {
                key: "setValue",
                value: function(t) {
                  this.__pendingValue = t;
                }
              },
              {
                key: "commit",
                value: function() {
                  for (; Object(i.b)(this.__pendingValue); ) {
                    var t = this.__pendingValue;
                    (this.__pendingValue = r.a), t(this);
                  }
                  var e = this.__pendingValue;
                  e !== r.a &&
                    (y(e)
                      ? e !== this.value && this.__commitText(e)
                      : e instanceof s.b
                      ? this.__commitTemplateResult(e)
                      : e instanceof Node
                      ? this.__commitNode(e)
                      : g(e)
                      ? this.__commitIterable(e)
                      : e === r.b
                      ? ((this.value = r.b), this.clear())
                      : this.__commitText(e));
                }
              },
              {
                key: "__insert",
                value: function(t) {
                  this.endNode.parentNode.insertBefore(t, this.endNode);
                }
              },
              {
                key: "__commitNode",
                value: function(t) {
                  this.value !== t &&
                    (this.clear(), this.__insert(t), (this.value = t));
                }
              },
              {
                key: "__commitText",
                value: function(t) {
                  var e = this.startNode.nextSibling,
                    n =
                      "string" == typeof (t = null == t ? "" : t)
                        ? t
                        : String(t);
                  e === this.endNode.previousSibling && 3 === e.nodeType
                    ? (e.data = n)
                    : this.__commitNode(document.createTextNode(n)),
                    (this.value = t);
                }
              },
              {
                key: "__commitTemplateResult",
                value: function(t) {
                  var e = this.options.templateFactory(t);
                  if (this.value instanceof a.a && this.value.template === e)
                    this.value.update(t.values);
                  else {
                    var n = new a.a(e, t.processor, this.options),
                      i = n._clone();
                    n.update(t.values), this.__commitNode(i), (this.value = n);
                  }
                }
              },
              {
                key: "__commitIterable",
                value: function(e) {
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
                      var l, c = e[Symbol.iterator]();
                      !(r = (l = c.next()).done);
                      r = !0
                    ) {
                      var d = l.value;
                      void 0 === (n = i[o]) &&
                        ((n = new t(this.options)),
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
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.startNode;
                  Object(o.b)(
                    this.startNode.parentNode,
                    t.nextSibling,
                    this.endNode
                  );
                }
              }
            ]),
            t
          );
        })(),
        k = (function() {
          function t(e, n, i) {
            if (
              (f(this, t),
              (this.value = void 0),
              (this.__pendingValue = void 0),
              2 !== i.length || "" !== i[0] || "" !== i[1])
            )
              throw new Error(
                "Boolean attributes can only contain a single expression"
              );
            (this.element = e), (this.name = n), (this.strings = i);
          }
          return (
            v(t, [
              {
                key: "setValue",
                value: function(t) {
                  this.__pendingValue = t;
                }
              },
              {
                key: "commit",
                value: function() {
                  for (; Object(i.b)(this.__pendingValue); ) {
                    var t = this.__pendingValue;
                    (this.__pendingValue = r.a), t(this);
                  }
                  if (this.__pendingValue !== r.a) {
                    var e = !!this.__pendingValue;
                    this.value !== e &&
                      (e
                        ? this.element.setAttribute(this.name, "")
                        : this.element.removeAttribute(this.name),
                      (this.value = e)),
                      (this.__pendingValue = r.a);
                  }
                }
              }
            ]),
            t
          );
        })(),
        S = (function(t) {
          function e(t, n, i) {
            var o;
            return (
              f(this, e),
              ((o = c(this, u(e).call(this, t, n, i))).single =
                2 === i.length && "" === i[0] && "" === i[1]),
              o
            );
          }
          return (
            p(e, _),
            v(e, [
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
                    : d(u(e.prototype), "_getValue", this).call(this);
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
            e
          );
        })(),
        C = (function(t) {
          function e() {
            return f(this, e), c(this, u(e).apply(this, arguments));
          }
          return p(e, w), e;
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
          function t(e, n, i) {
            var o = this;
            f(this, t),
              (this.value = void 0),
              (this.__pendingValue = void 0),
              (this.element = e),
              (this.eventName = n),
              (this.eventContext = i),
              (this.__boundHandleEvent = function(t) {
                return o.handleEvent(t);
              });
          }
          return (
            v(t, [
              {
                key: "setValue",
                value: function(t) {
                  this.__pendingValue = t;
                }
              },
              {
                key: "commit",
                value: function() {
                  for (; Object(i.b)(this.__pendingValue); ) {
                    var t = this.__pendingValue;
                    (this.__pendingValue = r.a), t(this);
                  }
                  if (this.__pendingValue !== r.a) {
                    var e = this.__pendingValue,
                      n = this.value,
                      o =
                        null == e ||
                        (null != n &&
                          (e.capture !== n.capture ||
                            e.once !== n.once ||
                            e.passive !== n.passive)),
                      a = null != e && (null == n || o);
                    o &&
                      this.element.removeEventListener(
                        this.eventName,
                        this.__boundHandleEvent,
                        this.__options
                      ),
                      a &&
                        ((this.__options = T(e)),
                        this.element.addEventListener(
                          this.eventName,
                          this.__boundHandleEvent,
                          this.__options
                        )),
                      (this.value = e),
                      (this.__pendingValue = r.a);
                  }
                }
              },
              {
                key: "handleEvent",
                value: function(t) {
                  "function" == typeof this.value
                    ? this.value.call(this.eventContext || this.element, t)
                    : this.value.handleEvent(t);
                }
              }
            ]),
            t
          );
        })(),
        T = function(t) {
          return (
            t &&
            (O
              ? { capture: t.capture, passive: t.passive, once: t.once }
              : t.capture)
          );
        };
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "f", function() {
        return i;
      }),
        n.d(e, "g", function() {
          return o;
        }),
        n.d(e, "b", function() {
          return a;
        }),
        n.d(e, "a", function() {
          return s;
        }),
        n.d(e, "d", function() {
          return c;
        }),
        n.d(e, "c", function() {
          return d;
        }),
        n.d(e, "e", function() {
          return u;
        });
      var i = "{{lit-".concat(String(Math.random()).slice(2), "}}"),
        o = "\x3c!--".concat(i, "--\x3e"),
        r = new RegExp("".concat(i, "|").concat(o)),
        a = "$lit$",
        s = function t(e, n) {
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.parts = []),
            (this.element = n);
          for (
            var o = [],
              s = [],
              c = document.createTreeWalker(n.content, 133, null, !1),
              p = 0,
              h = -1,
              f = 0,
              b = e.strings,
              v = e.values.length;
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
        l = function(t, e) {
          var n = t.length - e.length;
          return n >= 0 && t.slice(n) === e;
        },
        c = function(t) {
          return -1 !== t.index;
        },
        d = function() {
          return document.createComment("");
        },
        u = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
    },
    function(t, e, n) {
      "use strict";
      n(12), n(79);
      var i = n(7),
        o = n(8),
        r = n(6),
        a = n(4);
      function s() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          "\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--iron-icon-fill-color, currentcolor);\n        stroke: var(--iron-icon-stroke-color, none);\n\n        width: var(--iron-icon-width, 24px);\n        height: var(--iron-icon-height, 24px);\n        @apply --iron-icon;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n"
        ]);
        return (
          (s = function() {
            return t;
          }),
          t
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
        _iconChanged: function(t) {
          var e = (t || "").split(":");
          (this._iconName = e.pop()),
            (this._iconsetName = e.pop() || this._DEFAULT_ICONSET),
            this._updateIcon();
        },
        _srcChanged: function(t) {
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
    function(t, e, n) {
      "use strict";
      n(4), n(22), n(13);
      var i = n(80),
        o = n(7),
        r = n(6);
      function a() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
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
            return t;
          }),
          t
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
        _altChanged: function(t, e) {
          var n = this.getAttribute("aria-label");
          (n && e != n) || this.setAttribute("aria-label", t);
        }
      });
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      });
      n(4), n(8);
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
        _focusBlurHandler: function(t) {
          this._setFocused("focus" === t.type);
        },
        _disabledChanged: function(t, e) {
          this.setAttribute("aria-disabled", t ? "true" : "false"),
            (this.style.pointerEvents = t ? "none" : ""),
            t
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
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return b;
      });
      n(4);
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
      function u(t, e) {
        var n = "";
        if (t) {
          var i = t.toLowerCase();
          " " === i || c.test(i)
            ? (n = "space")
            : d.test(i)
            ? (n = "esc")
            : 1 == i.length
            ? (e && !a.test(i)) || (n = i)
            : (n = l.test(i)
                ? i.replace("arrow", "")
                : "multiply" == i
                ? "*"
                : i);
        }
        return n;
      }
      function p(t, e) {
        return t.key
          ? u(t.key, e)
          : t.detail && t.detail.key
          ? u(t.detail.key, e)
          : ((n = t.keyIdentifier),
            (r = ""),
            n &&
              (n in i
                ? (r = i[n])
                : s.test(n)
                ? ((n = parseInt(n.replace("U+", "0x"), 16)),
                  (r = String.fromCharCode(n).toLowerCase()))
                : (r = n.toLowerCase())),
            r ||
              (function(t) {
                var e = "";
                return (
                  Number(t) &&
                    (e =
                      t >= 65 && t <= 90
                        ? String.fromCharCode(32 + t)
                        : t >= 112 && t <= 123
                        ? "f" + (t - 112 + 1)
                        : t >= 48 && t <= 57
                        ? String(t - 48)
                        : t >= 96 && t <= 105
                        ? String(t - 96)
                        : o[t]),
                  e
                );
              })(t.keyCode) ||
              "");
        var n, r;
      }
      function h(t, e) {
        return (
          p(e, t.hasModifiers) === t.key &&
          (!t.hasModifiers ||
            (!!e.shiftKey == !!t.shiftKey &&
              !!e.ctrlKey == !!t.ctrlKey &&
              !!e.altKey == !!t.altKey &&
              !!e.metaKey == !!t.metaKey))
        );
      }
      function f(t) {
        return t
          .trim()
          .split(" ")
          .map(function(t) {
            return (function(t) {
              return 1 === t.length
                ? { combo: t, key: t, event: "keydown" }
                : t.split("+").reduce(
                    function(t, e) {
                      var n = e.split(":"),
                        i = n[0],
                        o = n[1];
                      return (
                        i in r
                          ? ((t[r[i]] = !0), (t.hasModifiers = !0))
                          : ((t.key = i), (t.event = o || "keydown")),
                        t
                      );
                    },
                    { combo: t.split(":").shift() }
                  );
            })(t);
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
        addOwnKeyBinding: function(t, e) {
          (this._imperativeKeyBindings[t] = e),
            this._prepKeyBindings(),
            this._resetKeyEventListeners();
        },
        removeOwnKeyBindings: function() {
          (this._imperativeKeyBindings = {}),
            this._prepKeyBindings(),
            this._resetKeyEventListeners();
        },
        keyboardEventMatchesKeys: function(t, e) {
          for (var n = f(e), i = 0; i < n.length; ++i)
            if (h(n[i], t)) return !0;
          return !1;
        },
        _collectKeyBindings: function() {
          var t = this.behaviors.map(function(t) {
            return t.keyBindings;
          });
          return (
            -1 === t.indexOf(this.keyBindings) && t.push(this.keyBindings), t
          );
        },
        _prepKeyBindings: function() {
          for (var t in ((this._keyBindings = {}),
          this._collectKeyBindings().forEach(function(t) {
            for (var e in t) this._addKeyBinding(e, t[e]);
          }, this),
          this._imperativeKeyBindings))
            this._addKeyBinding(t, this._imperativeKeyBindings[t]);
          for (var e in this._keyBindings)
            this._keyBindings[e].sort(function(t, e) {
              var n = t[0].hasModifiers;
              return n === e[0].hasModifiers ? 0 : n ? -1 : 1;
            });
        },
        _addKeyBinding: function(t, e) {
          f(t).forEach(function(t) {
            (this._keyBindings[t.event] = this._keyBindings[t.event] || []),
              this._keyBindings[t.event].push([t, e]);
          }, this);
        },
        _resetKeyEventListeners: function() {
          this._unlistenKeyEventListeners(),
            this.isAttached && this._listenKeyEventListeners();
        },
        _listenKeyEventListeners: function() {
          this.keyEventTarget &&
            Object.keys(this._keyBindings).forEach(function(t) {
              var e = this._keyBindings[t],
                n = this._onKeyBindingEvent.bind(this, e);
              this._boundKeyHandlers.push([this.keyEventTarget, t, n]),
                this.keyEventTarget.addEventListener(t, n);
            }, this);
        },
        _unlistenKeyEventListeners: function() {
          for (var t, e, n, i; this._boundKeyHandlers.length; )
            (e = (t = this._boundKeyHandlers.pop())[0]),
              (n = t[1]),
              (i = t[2]),
              e.removeEventListener(n, i);
        },
        _onKeyBindingEvent: function(t, e) {
          if (
            (this.stopKeyboardEventPropagation && e.stopPropagation(),
            !e.defaultPrevented)
          )
            for (var n = 0; n < t.length; n++) {
              var i = t[n][0],
                o = t[n][1];
              if (
                h(i, e) &&
                (this._triggerKeyHandler(i, o, e), e.defaultPrevented)
              )
                return;
            }
        },
        _triggerKeyHandler: function(t, e, n) {
          var i = Object.create(t);
          i.keyboardEvent = n;
          var o = new CustomEvent(t.event, { detail: i, cancelable: !0 });
          this[e].call(this, o), o.defaultPrevented && n.preventDefault();
        }
      };
    },
    ,
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      }),
        n.d(e, "c", function() {
          return o;
        }),
        n.d(e, "b", function() {
          return r;
        });
      var i =
          void 0 !== window.customElements &&
          void 0 !== window.customElements.polyfillWrapFlushCallback,
        o = function(t, e) {
          for (
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null,
              i =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
            e !== n;

          ) {
            var o = e.nextSibling;
            t.insertBefore(e, i), (e = o);
          }
        },
        r = function(t, e) {
          for (
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            e !== n;

          ) {
            var i = e.nextSibling;
            t.removeChild(e), (e = i);
          }
        };
    },
    function(t, e, n) {
      "use strict";
      n(4), n(46);
      var i = n(6);
      function o() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          "<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      /* Shared Styles */\n      --paper-font-common-base: {\n        font-family: 'Roboto', 'Noto', sans-serif;\n        -webkit-font-smoothing: antialiased;\n      };\n\n      --paper-font-common-code: {\n        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;\n        -webkit-font-smoothing: antialiased;\n      };\n\n      --paper-font-common-expensive-kerning: {\n        text-rendering: optimizeLegibility;\n      };\n\n      --paper-font-common-nowrap: {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      };\n\n      /* Material Font Styles */\n\n      --paper-font-display4: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 112px;\n        font-weight: 300;\n        letter-spacing: -.044em;\n        line-height: 120px;\n      };\n\n      --paper-font-display3: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 56px;\n        font-weight: 400;\n        letter-spacing: -.026em;\n        line-height: 60px;\n      };\n\n      --paper-font-display2: {\n        @apply --paper-font-common-base;\n\n        font-size: 45px;\n        font-weight: 400;\n        letter-spacing: -.018em;\n        line-height: 48px;\n      };\n\n      --paper-font-display1: {\n        @apply --paper-font-common-base;\n\n        font-size: 34px;\n        font-weight: 400;\n        letter-spacing: -.01em;\n        line-height: 40px;\n      };\n\n      --paper-font-headline: {\n        @apply --paper-font-common-base;\n\n        font-size: 24px;\n        font-weight: 400;\n        letter-spacing: -.012em;\n        line-height: 32px;\n      };\n\n      --paper-font-title: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 20px;\n        font-weight: 500;\n        line-height: 28px;\n      };\n\n      --paper-font-subhead: {\n        @apply --paper-font-common-base;\n\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n      };\n\n      --paper-font-body2: {\n        @apply --paper-font-common-base;\n\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 24px;\n      };\n\n      --paper-font-body1: {\n        @apply --paper-font-common-base;\n\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 20px;\n      };\n\n      --paper-font-caption: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 12px;\n        font-weight: 400;\n        letter-spacing: 0.011em;\n        line-height: 20px;\n      };\n\n      --paper-font-menu: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 13px;\n        font-weight: 500;\n        line-height: 24px;\n      };\n\n      --paper-font-button: {\n        @apply --paper-font-common-base;\n        @apply --paper-font-common-nowrap;\n\n        font-size: 14px;\n        font-weight: 500;\n        letter-spacing: 0.018em;\n        line-height: 24px;\n        text-transform: uppercase;\n      };\n\n      --paper-font-code2: {\n        @apply --paper-font-common-code;\n\n        font-size: 14px;\n        font-weight: 700;\n        line-height: 20px;\n      };\n\n      --paper-font-code1: {\n        @apply --paper-font-common-code;\n\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 20px;\n      };\n\n    }\n\n  </style>\n</custom-style>"
        ]);
        return (
          (o = function() {
            return t;
          }),
          t
        );
      }
      var r = Object(i.a)(o());
      r.setAttribute("style", "display: none;"),
        document.head.appendChild(r.content);
    },
    ,
    ,
    ,
    ,
    function(t, e, n) {
      "use strict";
      n(4);
      var i = n(6);
      function o() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n<custom-style>\n  <style is="custom-style">\n    html {\n\n      --shadow-transition: {\n        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n      };\n\n      --shadow-none: {\n        box-shadow: none;\n      };\n\n      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */\n\n      --shadow-elevation-2dp: {\n        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 5px 0 rgba(0, 0, 0, 0.12),\n                    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n      };\n\n      --shadow-elevation-3dp: {\n        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 8px 0 rgba(0, 0, 0, 0.12),\n                    0 3px 3px -2px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-4dp: {\n        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 10px 0 rgba(0, 0, 0, 0.12),\n                    0 2px 4px -1px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-6dp: {\n        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 18px 0 rgba(0, 0, 0, 0.12),\n                    0 3px 5px -1px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-8dp: {\n        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                    0 3px 14px 2px rgba(0, 0, 0, 0.12),\n                    0 5px 5px -3px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-12dp: {\n        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),\n                    0 4px 22px 3px rgba(0, 0, 0, 0.12),\n                    0 6px 7px -4px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-16dp: {\n        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),\n                    0  6px 30px 5px rgba(0, 0, 0, 0.12),\n                    0  8px 10px -5px rgba(0, 0, 0, 0.4);\n      };\n\n      --shadow-elevation-24dp: {\n        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),\n                    0 9px 46px 8px rgba(0, 0, 0, 0.12),\n                    0 11px 15px -7px rgba(0, 0, 0, 0.4);\n      };\n    }\n  </style>\n</custom-style>'
        ]);
        return (
          (o = function() {
            return t;
          }),
          t
        );
      }
      var r = Object(i.a)(o());
      r.setAttribute("style", "display: none;"),
        document.head.appendChild(r.content);
    },
    function(t, e, n) {
      "use strict";
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      n.d(e, "c", function() {
        return r;
      }),
        n.d(e, "a", function() {
          return a;
        }),
        n.d(e, "b", function() {
          return s;
        });
      var o = function(t, e) {
        return (o =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(t, e) {
              t.__proto__ = e;
            }) ||
          function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(t, e);
      };
      function r(t, e) {
        function n() {
          this.constructor = t;
        }
        o(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var a = function() {
        return (a =
          Object.assign ||
          function(t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
              for (var o in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      };
      function s(t, e, n, o) {
        var r,
          a = arguments.length,
          s =
            a < 3
              ? e
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(e, n))
              : o;
        if (
          "object" ===
            ("undefined" == typeof Reflect ? "undefined" : i(Reflect)) &&
          "function" == typeof Reflect.decorate
        )
          s = Reflect.decorate(t, e, n, o);
        else
          for (var l = t.length - 1; l >= 0; l--)
            (r = t[l]) &&
              (s = (a < 3 ? r(s) : a > 3 ? r(e, n, s) : r(e, n)) || s);
        return a > 3 && s && Object.defineProperty(e, n, s), s;
      }
    },
    ,
    ,
    ,
    function(t, e, n) {
      "use strict";
      n(4);
      var i = n(7),
        o = n(6);
      function r() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0px,0px,0px,0px);\n      }\n    </style>\n    <div aria-live$="[[mode]]">[[_text]]</div>\n'
        ]);
        return (
          (r = function() {
            return t;
          }),
          t
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
        announce: function(t) {
          (this._text = ""),
            this.async(function() {
              this._text = t;
            }, 100);
        },
        _onIronAnnounce: function(t) {
          t.detail && t.detail.text && this.announce(t.detail.text);
        }
      });
      (a.instance = null),
        (a.requestAvailability = function() {
          a.instance ||
            (a.instance = document.createElement("iron-a11y-announcer")),
            document.body.appendChild(a.instance);
        });
      var s = n(65),
        l = n(8);
      function c() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n      }\n    </style>\n    <slot id="content"></slot>\n'
        ]);
        return (
          (c = function() {
            return t;
          }),
          t
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
            function(t) {
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
          var t;
          if (this.allowedPattern) t = new RegExp(this.allowedPattern);
          else
            switch (this.inputElement.type) {
              case "number":
                t = /[0-9.,e-]/;
            }
          return t;
        },
        _bindValueChanged: function(t, e) {
          e &&
            (void 0 === t
              ? (e.value = null)
              : t !== e.value && (this.inputElement.value = t),
            this.autoValidate && this.validate(),
            this.fire("bind-value-changed", { value: t }));
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
        _isPrintable: function(t) {
          var e =
              8 == t.keyCode ||
              9 == t.keyCode ||
              13 == t.keyCode ||
              27 == t.keyCode,
            n =
              19 == t.keyCode ||
              20 == t.keyCode ||
              45 == t.keyCode ||
              46 == t.keyCode ||
              144 == t.keyCode ||
              145 == t.keyCode ||
              (t.keyCode > 32 && t.keyCode < 41) ||
              (t.keyCode > 111 && t.keyCode < 124);
          return !(e || (0 == t.charCode && n));
        },
        _onKeypress: function(t) {
          if (this.allowedPattern || "number" === this.inputElement.type) {
            var e = this._patternRegExp;
            if (e && !(t.metaKey || t.ctrlKey || t.altKey)) {
              this._patternAlreadyChecked = !0;
              var n = String.fromCharCode(t.charCode);
              this._isPrintable(t) &&
                !e.test(n) &&
                (t.preventDefault(),
                this._announceInvalidCharacter(
                  "Invalid character " + n + " not entered."
                ));
            }
          }
        },
        _checkPatternValidity: function() {
          var t = this._patternRegExp;
          if (!t) return !0;
          for (var e = 0; e < this.inputElement.value.length; e++)
            if (!t.test(this.inputElement.value[e])) return !1;
          return !0;
        },
        validate: function() {
          if (!this.inputElement) return (this.invalid = !1), !0;
          var t = this.inputElement.checkValidity();
          return (
            t &&
              (this.required && "" === this.bindValue
                ? (t = !1)
                : this.hasValidator() &&
                  (t = s.a.validate.call(this, this.bindValue))),
            (this.invalid = !t),
            this.fire("iron-input-validate"),
            t
          );
        },
        _announceInvalidCharacter: function(t) {
          this.fire("iron-announce", { text: t });
        },
        _computeValue: function(t) {
          return t;
        }
      });
      n(30);
      var d = {
        attached: function() {
          this.fire("addon-attached");
        },
        update: function(t) {}
      };
      function u() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          "\n    <style>\n      :host {\n        display: inline-block;\n        float: right;\n\n        @apply --paper-font-caption;\n        @apply --paper-input-char-counter;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:dir(rtl)) {\n        float: left;\n      }\n    </style>\n\n    <span>[[_charCounterStr]]</span>\n"
        ]);
        return (
          (u = function() {
            return t;
          }),
          t
        );
      }
      Object(i.a)({
        _template: Object(o.a)(u()),
        is: "paper-input-char-counter",
        behaviors: [d],
        properties: { _charCounterStr: { type: String, value: "0" } },
        update: function(t) {
          if (t.inputElement) {
            t.value = t.value || "";
            var e = t.value.toString().length.toString();
            t.inputElement.hasAttribute("maxlength") &&
              (e += "/" + t.inputElement.getAttribute("maxlength")),
              (this._charCounterStr = e);
          }
        }
      });
      n(12), n(13);
      var p = n(57);
      function h() {
        var t = b([
          '\n    <style>\n      :host {\n        display: block;\n        padding: 8px 0;\n        @apply --paper-input-container;\n      }\n\n      :host([inline]) {\n        display: inline-block;\n      }\n\n      :host([disabled]) {\n        pointer-events: none;\n        opacity: 0.33;\n\n        @apply --paper-input-container-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      .floated-label-placeholder {\n        @apply --paper-font-caption;\n      }\n\n      .underline {\n        height: 2px;\n        position: relative;\n      }\n\n      .focused-line {\n        @apply --layout-fit;\n        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));\n\n        -webkit-transform-origin: center center;\n        transform-origin: center center;\n        -webkit-transform: scale3d(0,1,1);\n        transform: scale3d(0,1,1);\n\n        @apply --paper-input-container-underline-focus;\n      }\n\n      .underline.is-highlighted .focused-line {\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .underline.is-invalid .focused-line {\n        border-color: var(--paper-input-container-invalid-color, var(--error-color));\n        -webkit-transform: none;\n        transform: none;\n        -webkit-transition: -webkit-transform 0.25s;\n        transition: transform 0.25s;\n\n        @apply --paper-transition-easing;\n      }\n\n      .unfocused-line {\n        @apply --layout-fit;\n        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline;\n      }\n\n      :host([disabled]) .unfocused-line {\n        border-bottom: 1px dashed;\n        border-color: var(--paper-input-container-color, var(--secondary-text-color));\n        @apply --paper-input-container-underline-disabled;\n      }\n\n      .input-wrapper {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        position: relative;\n      }\n\n      .input-content {\n        @apply --layout-flex-auto;\n        @apply --layout-relative;\n        max-width: 100%;\n      }\n\n      .input-content ::slotted(label),\n      .input-content ::slotted(.paper-input-label) {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        font: inherit;\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n        -webkit-transition: -webkit-transform 0.25s, width 0.25s;\n        transition: transform 0.25s, width 0.25s;\n        -webkit-transform-origin: left top;\n        transform-origin: left top;\n        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */\n        min-height: 1px;\n\n        @apply --paper-font-common-nowrap;\n        @apply --paper-font-subhead;\n        @apply --paper-input-container-label;\n        @apply --paper-transition-easing;\n      }\n\n      .input-content.label-is-floating ::slotted(label),\n      .input-content.label-is-floating ::slotted(.paper-input-label) {\n        -webkit-transform: translateY(-75%) scale(0.75);\n        transform: translateY(-75%) scale(0.75);\n\n        /* Since we scale to 75/100 of the size, we actually have 100/75 of the\n        original space now available */\n        width: 133%;\n\n        @apply --paper-input-container-label-floating;\n      }\n\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),\n      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {\n        right: 0;\n        left: auto;\n        -webkit-transform-origin: right top;\n        transform-origin: right top;\n      }\n\n      .input-content.label-is-highlighted ::slotted(label),\n      .input-content.label-is-highlighted ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n\n        @apply --paper-input-container-label-focus;\n      }\n\n      .input-content.is-invalid ::slotted(label),\n      .input-content.is-invalid ::slotted(.paper-input-label) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .input-content.label-is-hidden ::slotted(label),\n      .input-content.label-is-hidden ::slotted(.paper-input-label) {\n        visibility: hidden;\n      }\n\n      .input-content ::slotted(input),\n      .input-content ::slotted(iron-input),\n      .input-content ::slotted(textarea),\n      .input-content ::slotted(iron-autogrow-textarea),\n      .input-content ::slotted(.paper-input-input) {\n        @apply --paper-input-container-shared-input-style;\n        /* The apply shim doesn\'t apply the nested color custom property,\n          so we have to re-apply it here. */\n        color: var(--paper-input-container-input-color, var(--primary-text-color));\n        @apply --paper-input-container-input;\n      }\n\n      .input-content ::slotted(input)::-webkit-outer-spin-button,\n      .input-content ::slotted(input)::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      .input-content.focused ::slotted(input),\n      .input-content.focused ::slotted(iron-input),\n      .input-content.focused ::slotted(textarea),\n      .input-content.focused ::slotted(iron-autogrow-textarea),\n      .input-content.focused ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-focus;\n      }\n\n      .input-content.is-invalid ::slotted(input),\n      .input-content.is-invalid ::slotted(iron-input),\n      .input-content.is-invalid ::slotted(textarea),\n      .input-content.is-invalid ::slotted(iron-autogrow-textarea),\n      .input-content.is-invalid ::slotted(.paper-input-input) {\n        @apply --paper-input-container-input-invalid;\n      }\n\n      .prefix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n        @apply --paper-input-prefix;\n      }\n\n      .suffix ::slotted(*) {\n        display: inline-block;\n        @apply --paper-font-subhead;\n        @apply --layout-flex-none;\n\n        @apply --paper-input-suffix;\n      }\n\n      /* Firefox sets a min-width on the input, which can cause layout issues */\n      .input-content ::slotted(input) {\n        min-width: 0;\n      }\n\n      .input-content ::slotted(textarea) {\n        resize: none;\n      }\n\n      .add-on-content {\n        position: relative;\n      }\n\n      .add-on-content.is-invalid ::slotted(*) {\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n      }\n\n      .add-on-content.is-highlighted ::slotted(*) {\n        color: var(--paper-input-container-focus-color, var(--primary-color));\n      }\n    </style>\n\n    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>\n\n    <div class="input-wrapper">\n      <span class="prefix"><slot name="prefix"></slot></span>\n\n      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">\n        <slot name="label"></slot>\n        <slot name="input"></slot>\n      </div>\n\n      <span class="suffix"><slot name="suffix"></slot></span>\n    </div>\n\n    <div class$="[[_computeUnderlineClass(focused,invalid)]]">\n      <div class="unfocused-line"></div>\n      <div class="focused-line"></div>\n    </div>\n\n    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">\n      <slot name="add-on"></slot>\n    </div>\n'
        ]);
        return (
          (h = function() {
            return t;
          }),
          t
        );
      }
      function f() {
        var t = b([
          '\n<custom-style>\n  <style is="custom-style">\n    html {\n      --paper-input-container-shared-input-style: {\n        position: relative; /* to make a stacking context */\n        outline: none;\n        box-shadow: none;\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        max-width: 100%;\n        background: transparent;\n        border: none;\n        color: var(--paper-input-container-input-color, var(--primary-text-color));\n        -webkit-appearance: none;\n        text-align: inherit;\n        vertical-align: var(--paper-input-container-input-align, bottom);\n\n        @apply --paper-font-subhead;\n      };\n    }\n  </style>\n</custom-style>\n'
        ]);
        return (
          (f = function() {
            return t;
          }),
          t
        );
      }
      function b(t, e) {
        return (
          e || (e = t.slice(0)),
          Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      var v = Object(o.a)(f());
      function m() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
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
            return t;
          }),
          t
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
          _onAddonAttached: function(t) {
            this._addons || (this._addons = []);
            var e = t.target;
            -1 === this._addons.indexOf(e) &&
              (this._addons.push(e),
              this.isAttached && this._handleValue(this._inputElement));
          },
          _onFocus: function() {
            this._setFocused(!0);
          },
          _onBlur: function() {
            this._setFocused(!1),
              this._handleValueAndAutoValidate(this._inputElement);
          },
          _onInput: function(t) {
            this._handleValueAndAutoValidate(t.target);
          },
          _onValueChanged: function(t) {
            var e = t.target;
            (this.__isFirstValueUpdate &&
              ((this.__isFirstValueUpdate = !1),
              void 0 === e.value || "" === e.value)) ||
              this._handleValueAndAutoValidate(t.target);
          },
          _handleValue: function(t) {
            var e = this._inputElementValue;
            e || 0 === e || ("number" === t.type && !t.checkValidity())
              ? (this._inputHasContent = !0)
              : (this._inputHasContent = !1),
              this.updateAddons({
                inputElement: t,
                value: e,
                invalid: this.invalid
              });
          },
          _handleValueAndAutoValidate: function(t) {
            var e;
            this.autoValidate &&
              t &&
              ((e = t.validate
                ? t.validate(this._inputElementValue)
                : t.checkValidity()),
              (this.invalid = !e));
            this._handleValue(t);
          },
          _onIronInputValidate: function(t) {
            this.invalid = this._inputElement.invalid;
          },
          _invalidChanged: function() {
            this._addons && this.updateAddons({ invalid: this.invalid });
          },
          updateAddons: function(t) {
            for (var e, n = 0; (e = this._addons[n]); n++) e.update(t);
          },
          _computeInputContentClass: function(t, e, n, i, o) {
            var r = "input-content";
            if (t) o && (r += " label-is-hidden"), i && (r += " is-invalid");
            else {
              var a = this.querySelector("label");
              e || o
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
          _computeUnderlineClass: function(t, e) {
            var n = "underline";
            return e ? (n += " is-invalid") : t && (n += " is-highlighted"), n;
          },
          _computeAddOnContentClass: function(t, e) {
            var n = "add-on-content";
            return e ? (n += " is-invalid") : t && (n += " is-highlighted"), n;
          }
        }),
        Object(i.a)({
          _template: Object(o.a)(m()),
          is: "paper-input-error",
          behaviors: [d],
          properties: {
            invalid: { readOnly: !0, reflectToAttribute: !0, type: Boolean }
          },
          update: function(t) {
            this._setInvalid(t.invalid);
          }
        });
      var y = n(85),
        g = (n(77), n(26)),
        _ = n(25),
        w = n(34),
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
          _appendStringWithSpace: function(t, e) {
            return (t = t ? t + " " + e : e);
          },
          _onAddonAttached: function(t) {
            var e = Object(l.a)(t).rootTarget;
            if (e.id)
              this._ariaDescribedBy = this._appendStringWithSpace(
                this._ariaDescribedBy,
                e.id
              );
            else {
              var n = "paper-input-add-on-" + x.NextAddonID++;
              (e.id = n),
                (this._ariaDescribedBy = this._appendStringWithSpace(
                  this._ariaDescribedBy,
                  n
                ));
            }
          },
          validate: function() {
            return this.inputElement.validate();
          },
          _focusBlurHandler: function(t) {
            _.a._focusBlurHandler.call(this, t),
              this.focused &&
                !this._shiftTabPressed &&
                this._focusableElement &&
                this._focusableElement.focus();
          },
          _onShiftTabDown: function(t) {
            var e = this.getAttribute("tabindex");
            (this._shiftTabPressed = !0),
              this.setAttribute("tabindex", "-1"),
              this.async(function() {
                this.setAttribute("tabindex", e), (this._shiftTabPressed = !1);
              }, 1);
          },
          _handleAutoValidate: function() {
            this.autoValidate && this.validate();
          },
          updateValueAndPreserveCaret: function(t) {
            try {
              var e = this.inputElement.selectionStart;
              (this.value = t),
                (this.inputElement.selectionStart = e),
                (this.inputElement.selectionEnd = e);
            } catch (n) {
              this.value = t;
            }
          },
          _computeAlwaysFloatLabel: function(t, e) {
            return e || t;
          },
          _updateAriaLabelledBy: function() {
            var t,
              e = Object(l.a)(this.root).querySelector("label");
            e
              ? (e.id
                  ? (t = e.id)
                  : ((t = "paper-input-label-" + x.NextLabelID++), (e.id = t)),
                (this._ariaLabelledBy = t))
              : (this._ariaLabelledBy = "");
          },
          _generateInputId: function() {
            (this._inputId && "" !== this._inputId) ||
              (this._inputId = "input-" + x.NextInputID++);
          },
          _onChange: function(t) {
            this.shadowRoot &&
              this.fire(
                t.type,
                { sourceEvent: t },
                {
                  node: this,
                  bubbles: t.bubbles,
                  cancelable: t.cancelable
                }
              );
          },
          _autofocusChanged: function() {
            if (this.autofocus && this._focusableElement) {
              var t = document.activeElement;
              (t instanceof HTMLElement &&
                t !== document.body &&
                t !== document.documentElement) ||
                this._focusableElement.focus();
            }
          }
        },
        S = [_.a, g.a, k];
      function C() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([focused]) {\n        outline: none;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      input {\n        /* Firefox sets a min-width on the input, which can cause layout issues */\n        min-width: 0;\n      }\n\n      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.\n      In 2.x the <iron-input> is distributed to paper-input-container, which styles\n      it, but in order for this to work correctly, we need to reset some\n      of the native input\'s properties to inherit (from the iron-input) */\n      iron-input > input {\n        @apply --paper-input-container-shared-input-style;\n        font-family: inherit;\n        font-weight: inherit;\n        font-size: inherit;\n        letter-spacing: inherit;\n        word-spacing: inherit;\n        line-height: inherit;\n        text-shadow: inherit;\n        color: inherit;\n        cursor: inherit;\n      }\n\n      input:disabled {\n        @apply --paper-input-container-input-disabled;\n      }\n\n      input::-webkit-outer-spin-button,\n      input::-webkit-inner-spin-button {\n        @apply --paper-input-container-input-webkit-spinner;\n      }\n\n      input::-webkit-clear-button {\n        @apply --paper-input-container-input-webkit-clear;\n      }\n\n      input::-webkit-calendar-picker-indicator {\n        @apply --paper-input-container-input-webkit-calendar-picker-indicator;\n      }\n\n      input::-webkit-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input:-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-moz-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      input::-ms-clear {\n        @apply --paper-input-container-ms-clear;\n      }\n\n      input::-ms-reveal {\n        @apply --paper-input-container-ms-reveal;\n      }\n\n      input:-ms-input-placeholder {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n      }\n\n      label {\n        pointer-events: none;\n      }\n    </style>\n\n    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">\n\n      <slot name="prefix" slot="prefix"></slot>\n\n      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>\n\n      \x3c!-- Need to bind maxlength so that the paper-input-char-counter works correctly --\x3e\n      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">\n        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]">\n      </iron-input>\n\n      <slot name="suffix" slot="suffix"></slot>\n\n      <template is="dom-if" if="[[errorMessage]]">\n        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>\n      </template>\n\n      <template is="dom-if" if="[[charCounter]]">\n        <paper-input-char-counter slot="add-on"></paper-input-char-counter>\n      </template>\n\n    </paper-input-container>\n  '
        ]);
        return (
          (C = function() {
            return t;
          }),
          t
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
    function(t, e, n) {
      "use strict";
      n.d(e, "b", function() {
        return f;
      }),
        n.d(e, "a", function() {
          return b;
        });
      var i = n(29),
        o = n(21);
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function a(t, e) {
        return !e || ("object" !== r(e) && "function" != typeof e)
          ? (function(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : e;
      }
      function s(t, e, n) {
        return (s =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(t, e, n) {
                var i = (function(t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = l(t));

                  );
                  return t;
                })(t, e);
                if (i) {
                  var o = Object.getOwnPropertyDescriptor(i, e);
                  return o.get ? o.get.call(n) : o.value;
                }
              })(t, e, n || t);
      }
      function l(t) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function c(t, e) {
        return (c =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function d(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function p(t, e, n) {
        return e && u(t.prototype, e), n && u(t, n), t;
      }
      var h = " ".concat(o.f, " "),
        f = (function() {
          function t(e, n, i, o) {
            d(this, t),
              (this.strings = e),
              (this.values = n),
              (this.type = i),
              (this.processor = o);
          }
          return (
            p(t, [
              {
                key: "getHTML",
                value: function() {
                  for (
                    var t = this.strings.length - 1, e = "", n = !1, i = 0;
                    i < t;
                    i++
                  ) {
                    var r = this.strings[i],
                      a = r.lastIndexOf("\x3c!--");
                    n = (a > -1 || n) && -1 === r.indexOf("--\x3e", a + 1);
                    var s = o.e.exec(r);
                    e +=
                      null === s
                        ? r + (n ? h : o.g)
                        : r.substr(0, s.index) + s[1] + s[2] + o.b + s[3] + o.f;
                  }
                  return (e += this.strings[t]);
                }
              },
              {
                key: "getTemplateElement",
                value: function() {
                  var t = document.createElement("template");
                  return (t.innerHTML = this.getHTML()), t;
                }
              }
            ]),
            t
          );
        })(),
        b = (function(t) {
          function e() {
            return d(this, e), a(this, l(e).apply(this, arguments));
          }
          return (
            (function(t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 }
              })),
                e && c(t, e);
            })(e, f),
            p(e, [
              {
                key: "getHTML",
                value: function() {
                  return "<svg>".concat(
                    s(l(e.prototype), "getHTML", this).call(this),
                    "</svg>"
                  );
                }
              },
              {
                key: "getTemplateElement",
                value: function() {
                  var t = s(l(e.prototype), "getTemplateElement", this).call(
                      this
                    ),
                    n = t.content,
                    o = n.firstChild;
                  return n.removeChild(o), Object(i.c)(n, o.firstChild), t;
                }
              }
            ]),
            e
          );
        })();
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "b", function() {
        return o;
      }),
        n.d(e, "a", function() {
          return r;
        });
      var i = n(21);
      function o(t) {
        var e = r.get(t.type);
        void 0 === e &&
          ((e = { stringsArray: new WeakMap(), keyString: new Map() }),
          r.set(t.type, e));
        var n = e.stringsArray.get(t.strings);
        if (void 0 !== n) return n;
        var o = t.strings.join(i.f);
        return (
          void 0 === (n = e.keyString.get(o)) &&
            ((n = new i.a(t, t.getTemplateElement())), e.keyString.set(o, n)),
          e.stringsArray.set(t.strings, n),
          n
        );
      }
      var r = new Map();
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "b", function() {
        return r;
      }),
        n.d(e, "a", function() {
          return a;
        });
      n(4), n(25);
      var i = n(26),
        o = n(8),
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
          _focusChanged: function(t) {
            this._detectKeyboardFocus(t), t || this._setPressed(!1);
          },
          _detectKeyboardFocus: function(t) {
            this._setReceivedFocusFromKeyboard(!this.pointerDown && t);
          },
          _userActivate: function(t) {
            this.active !== t && ((this.active = t), this.fire("change"));
          },
          _downHandler: function(t) {
            this._setPointerDown(!0),
              this._setPressed(!0),
              this._setReceivedFocusFromKeyboard(!1);
          },
          _upHandler: function() {
            this._setPointerDown(!1), this._setPressed(!1);
          },
          _spaceKeyDownHandler: function(t) {
            var e = t.detail.keyboardEvent,
              n = Object(o.a)(e).localTarget;
            this.isLightDescendant(n) ||
              (e.preventDefault(),
              e.stopImmediatePropagation(),
              this._setPressed(!0));
          },
          _spaceKeyUpHandler: function(t) {
            var e = t.detail.keyboardEvent,
              n = Object(o.a)(e).localTarget;
            this.isLightDescendant(n) ||
              (this.pressed && this._asyncClick(), this._setPressed(!1));
          },
          _asyncClick: function() {
            this.async(function() {
              this.click();
            }, 1);
          },
          _pressedChanged: function(t) {
            this._changedButtonState();
          },
          _ariaActiveAttributeChanged: function(t, e) {
            e && e != t && this.hasAttribute(e) && this.removeAttribute(e);
          },
          _activeChanged: function(t, e) {
            this.toggles
              ? this.setAttribute(
                  this.ariaActiveAttribute,
                  t ? "true" : "false"
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
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return r;
      });
      var i = n(16),
        o = new WeakMap(),
        r = Object(i.f)(function(t) {
          return function(e) {
            if (
              !(e instanceof i.a) ||
              e instanceof i.c ||
              "class" !== e.committer.name ||
              e.committer.parts.length > 1
            )
              throw new Error(
                "The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute."
              );
            var n = e.committer,
              r = n.element;
            o.has(e) || (r.className = n.strings.join(" "));
            var a = r.classList,
              s = o.get(e);
            for (var l in s) l in t || a.remove(l);
            for (var c in t) {
              var d = t[c];
              if (!s || d !== s[c]) a[d ? "add" : "remove"](c);
            }
            o.set(e, t);
          };
        });
    },
    function(t, e, n) {
      "use strict";
      n(4), n(12);
      var i = n(7),
        o = n(6);
      function r() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          "\n    <style>\n\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        position: relative;\n        height: 64px;\n        padding: 0 16px;\n        pointer-events: none;\n        font-size: var(--app-toolbar-font-size, 20px);\n      }\n\n      :host ::slotted(*) {\n        pointer-events: auto;\n      }\n\n      :host ::slotted(paper-icon-button) {\n        /* paper-icon-button/issues/33 */\n        font-size: 0;\n      }\n\n      :host ::slotted([main-title]),\n      :host ::slotted([condensed-title]) {\n        pointer-events: none;\n        @apply --layout-flex;\n      }\n\n      :host ::slotted([bottom-item]) {\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      :host ::slotted([top-item]) {\n        position: absolute;\n        top: 0;\n        right: 0;\n        left: 0;\n      }\n\n      :host ::slotted([spacer]) {\n        margin-left: 64px;\n      }\n    </style>\n\n    <slot></slot>\n"
        ]);
        return (
          (r = function() {
            return t;
          }),
          t
        );
      }
      Object(i.a)({ _template: Object(o.a)(r()), is: "app-toolbar" });
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
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return o;
      }),
        n.d(e, "b", function() {
          return r;
        });
      var i = new WeakMap(),
        o = function(t) {
          return function() {
            var e = t.apply(void 0, arguments);
            return i.set(e, !0), e;
          };
        },
        r = function(t) {
          return "function" == typeof t && i.has(t);
        };
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      }),
        n.d(e, "b", function() {
          return o;
        });
      var i = {},
        o = {};
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return s;
      });
      var i = n(29),
        o = n(21);
      function r(t) {
        return (
          (function(t) {
            if (Array.isArray(t)) {
              for (var e = 0, n = new Array(t.length); e < t.length; e++)
                n[e] = t[e];
              return n;
            }
          })(t) ||
          (function(t) {
            if (
              Symbol.iterator in Object(t) ||
              "[object Arguments]" === Object.prototype.toString.call(t)
            )
              return Array.from(t);
          })(t) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var s = (function() {
        function t(e, n, i) {
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.__parts = []),
            (this.template = e),
            (this.processor = n),
            (this.options = i);
        }
        var e, n, s;
        return (
          (e = t),
          (n = [
            {
              key: "update",
              value: function(t) {
                var e = 0,
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
                    void 0 !== s && s.setValue(t[e]), e++;
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
                  var t,
                    e = i.a
                      ? this.template.element.content.cloneNode(!0)
                      : document.importNode(this.template.element.content, !0),
                    n = [],
                    a = this.template.parts,
                    s = document.createTreeWalker(e, 133, null, !1),
                    l = 0,
                    c = 0,
                    d = s.nextNode();
                  l < a.length;

                )
                  if (((t = a[l]), Object(o.d)(t))) {
                    for (; c < t.index; )
                      c++,
                        "TEMPLATE" === d.nodeName &&
                          (n.push(d), (s.currentNode = d.content)),
                        null === (d = s.nextNode()) &&
                          ((s.currentNode = n.pop()), (d = s.nextNode()));
                    if ("node" === t.type) {
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
                            t.name,
                            t.strings,
                            this.options
                          )
                        )
                      );
                    }
                    l++;
                  } else this.__parts.push(void 0), l++;
                return (
                  i.a && (document.adoptNode(e), customElements.upgrade(e)), e
                );
              }
            }
          ]) && a(e.prototype, n),
          s && a(e, s),
          t
        );
      })();
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return a;
      }),
        n.d(e, "b", function() {
          return s;
        });
      var i = n(29),
        o = n(20),
        r = n(44),
        a = new WeakMap(),
        s = function(t, e, n) {
          var s = a.get(e);
          void 0 === s &&
            (Object(i.b)(e, e.firstChild),
            a.set(e, (s = new o.e(Object.assign({ templateFactory: r.b }, n)))),
            s.appendInto(e)),
            s.setValue(t),
            s.commit();
        };
    },
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return r;
      });
      n(4);
      var i = n(79),
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
          validate: function(t) {
            return (
              void 0 === t && void 0 !== this.value
                ? (this.invalid = !this._getValidity(this.value))
                : (this.invalid = !this._getValidity(t)),
              !this.invalid
            );
          },
          _getValidity: function(t) {
            return !this.hasValidator() || this._validator.validate(t);
          }
        };
    },
    function(t, e) {
      t.exports = function(t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function() {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function() {
                return t.l;
              }
            }),
            Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function() {
                return t.i;
              }
            }),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return a;
      });
      n(4);
      var i = n(8),
        o = Element.prototype,
        r =
          o.matches ||
          o.matchesSelector ||
          o.mozMatchesSelector ||
          o.msMatchesSelector ||
          o.oMatchesSelector ||
          o.webkitMatchesSelector,
        a = {
          getTabbableNodes: function(t) {
            var e = [];
            return this._collectTabbableNodes(t, e)
              ? this._sortByTabIndex(e)
              : e;
          },
          isFocusable: function(t) {
            return r.call(t, "input, select, textarea, button, object")
              ? r.call(t, ":not([disabled])")
              : r.call(
                  t,
                  "a[href], area[href], iframe, [tabindex], [contentEditable]"
                );
          },
          isTabbable: function(t) {
            return (
              this.isFocusable(t) &&
              r.call(t, ':not([tabindex="-1"])') &&
              this._isVisible(t)
            );
          },
          _normalizedTabIndex: function(t) {
            if (this.isFocusable(t)) {
              var e = t.getAttribute("tabindex") || 0;
              return Number(e);
            }
            return -1;
          },
          _collectTabbableNodes: function(t, e) {
            if (t.nodeType !== Node.ELEMENT_NODE || !this._isVisible(t))
              return !1;
            var n,
              o = t,
              r = this._normalizedTabIndex(o),
              a = r > 0;
            r >= 0 && e.push(o),
              (n =
                "content" === o.localName || "slot" === o.localName
                  ? Object(i.a)(o).getDistributedNodes()
                  : Object(i.a)(o.root || o).children);
            for (var s = 0; s < n.length; s++)
              a = this._collectTabbableNodes(n[s], e) || a;
            return a;
          },
          _isVisible: function(t) {
            var e = t.style;
            return (
              "hidden" !== e.visibility &&
              "none" !== e.display &&
              "hidden" !== (e = window.getComputedStyle(t)).visibility &&
                "none" !== e.display
            );
          },
          _sortByTabIndex: function(t) {
            var e = t.length;
            if (e < 2) return t;
            var n = Math.ceil(e / 2),
              i = this._sortByTabIndex(t.slice(0, n)),
              o = this._sortByTabIndex(t.slice(n));
            return this._mergeSortByTabIndex(i, o);
          },
          _mergeSortByTabIndex: function(t, e) {
            for (var n = []; t.length > 0 && e.length > 0; )
              this._hasLowerTabOrder(t[0], e[0])
                ? n.push(e.shift())
                : n.push(t.shift());
            return n.concat(t, e);
          },
          _hasLowerTabOrder: function(t, e) {
            var n = Math.max(t.tabIndex, 0),
              i = Math.max(e.tabIndex, 0);
            return 0 === n || 0 === i ? i > n : n > i;
          }
        };
    },
    ,
    function(t, e, n) {
      "use strict";
      function i(t) {
        return (
          void 0 === t && (t = window),
          !!(function(t) {
            void 0 === t && (t = window);
            var e = !1;
            try {
              var n = {
                  get passive() {
                    return (e = !0), !1;
                  }
                },
                i = function() {};
              t.document.addEventListener("test", i, n),
                t.document.removeEventListener("test", i, n);
            } catch (o) {
              e = !1;
            }
            return e;
          })(t) && {
            passive: !0
          }
        );
      }
      var o,
        r = n(103),
        a = n(36),
        s = n(104),
        l = {
          BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
          FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
          FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
          ROOT: "mdc-ripple-upgraded",
          UNBOUNDED: "mdc-ripple-upgraded--unbounded"
        },
        c = {
          VAR_FG_SCALE: "--mdc-ripple-fg-scale",
          VAR_FG_SIZE: "--mdc-ripple-fg-size",
          VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
          VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
          VAR_LEFT: "--mdc-ripple-left",
          VAR_TOP: "--mdc-ripple-top"
        },
        d = {
          DEACTIVATION_TIMEOUT_MS: 225,
          FG_DEACTIVATION_MS: 150,
          INITIAL_ORIGIN_SCALE: 0.6,
          PADDING: 10,
          TAP_DELAY_MS: 300
        };
      var u = ["touchstart", "pointerdown", "mousedown", "keydown"],
        p = ["touchend", "pointerup", "mouseup", "contextmenu"],
        h = [],
        f = (function(t) {
          function e(n) {
            var i = t.call(this, a.a({}, e.defaultAdapter, n)) || this;
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
              (i.activateHandler_ = function(t) {
                return i.activate_(t);
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
            a.c(e, t),
            Object.defineProperty(e, "cssClasses", {
              get: function() {
                return l;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e, "strings", {
              get: function() {
                return c;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e, "numbers", {
              get: function() {
                return d;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e, "defaultAdapter", {
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
            (e.prototype.init = function() {
              var t = this,
                n = this.supportsPressRipple_();
              if ((this.registerRootHandlers_(n), n)) {
                var i = e.cssClasses,
                  o = i.ROOT,
                  r = i.UNBOUNDED;
                requestAnimationFrame(function() {
                  t.adapter_.addClass(o),
                    t.adapter_.isUnbounded() &&
                      (t.adapter_.addClass(r), t.layoutInternal_());
                });
              }
            }),
            (e.prototype.destroy = function() {
              var t = this;
              if (this.supportsPressRipple_()) {
                this.activationTimer_ &&
                  (clearTimeout(this.activationTimer_),
                  (this.activationTimer_ = 0),
                  this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),
                  this.fgDeactivationRemovalTimer_ &&
                    (clearTimeout(this.fgDeactivationRemovalTimer_),
                    (this.fgDeactivationRemovalTimer_ = 0),
                    this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));
                var n = e.cssClasses,
                  i = n.ROOT,
                  o = n.UNBOUNDED;
                requestAnimationFrame(function() {
                  t.adapter_.removeClass(i),
                    t.adapter_.removeClass(o),
                    t.removeCssVars_();
                });
              }
              this.deregisterRootHandlers_(),
                this.deregisterDeactivationHandlers_();
            }),
            (e.prototype.activate = function(t) {
              this.activate_(t);
            }),
            (e.prototype.deactivate = function() {
              this.deactivate_();
            }),
            (e.prototype.layout = function() {
              var t = this;
              this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_),
                (this.layoutFrame_ = requestAnimationFrame(function() {
                  t.layoutInternal_(), (t.layoutFrame_ = 0);
                }));
            }),
            (e.prototype.setUnbounded = function(t) {
              var n = e.cssClasses.UNBOUNDED;
              t ? this.adapter_.addClass(n) : this.adapter_.removeClass(n);
            }),
            (e.prototype.handleFocus = function() {
              var t = this;
              requestAnimationFrame(function() {
                return t.adapter_.addClass(e.cssClasses.BG_FOCUSED);
              });
            }),
            (e.prototype.handleBlur = function() {
              var t = this;
              requestAnimationFrame(function() {
                return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED);
              });
            }),
            (e.prototype.supportsPressRipple_ = function() {
              return this.adapter_.browserSupportsCssVars();
            }),
            (e.prototype.defaultActivationState_ = function() {
              return {
                activationEvent: void 0,
                hasDeactivationUXRun: !1,
                isActivated: !1,
                isProgrammatic: !1,
                wasActivatedByPointer: !1,
                wasElementMadeActive: !1
              };
            }),
            (e.prototype.registerRootHandlers_ = function(t) {
              var e = this;
              t &&
                (u.forEach(function(t) {
                  e.adapter_.registerInteractionHandler(t, e.activateHandler_);
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
            (e.prototype.registerDeactivationHandlers_ = function(t) {
              var e = this;
              "keydown" === t.type
                ? this.adapter_.registerInteractionHandler(
                    "keyup",
                    this.deactivateHandler_
                  )
                : p.forEach(function(t) {
                    e.adapter_.registerDocumentInteractionHandler(
                      t,
                      e.deactivateHandler_
                    );
                  });
            }),
            (e.prototype.deregisterRootHandlers_ = function() {
              var t = this;
              u.forEach(function(e) {
                t.adapter_.deregisterInteractionHandler(e, t.activateHandler_);
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
            (e.prototype.deregisterDeactivationHandlers_ = function() {
              var t = this;
              this.adapter_.deregisterInteractionHandler(
                "keyup",
                this.deactivateHandler_
              ),
                p.forEach(function(e) {
                  t.adapter_.deregisterDocumentInteractionHandler(
                    e,
                    t.deactivateHandler_
                  );
                });
            }),
            (e.prototype.removeCssVars_ = function() {
              var t = this,
                n = e.strings;
              Object.keys(n).forEach(function(e) {
                0 === e.indexOf("VAR_") &&
                  t.adapter_.updateCssVariable(n[e], null);
              });
            }),
            (e.prototype.activate_ = function(t) {
              var e = this;
              if (!this.adapter_.isSurfaceDisabled()) {
                var n = this.activationState_;
                if (!n.isActivated) {
                  var i = this.previousActivationEvent_;
                  if (!(i && void 0 !== t && i.type !== t.type))
                    (n.isActivated = !0),
                      (n.isProgrammatic = void 0 === t),
                      (n.activationEvent = t),
                      (n.wasActivatedByPointer =
                        !n.isProgrammatic &&
                        void 0 !== t &&
                          ("mousedown" === t.type ||
                            "touchstart" === t.type ||
                            "pointerdown" === t.type)),
                      void 0 !== t &&
                      h.length > 0 &&
                      h.some(function(t) {
                        return e.adapter_.containsEventTarget(t);
                      })
                        ? this.resetActivationState_()
                        : (void 0 !== t &&
                            (h.push(t.target),
                            this.registerDeactivationHandlers_(t)),
                          (n.wasElementMadeActive = this.checkElementMadeActive_(
                            t
                          )),
                          n.wasElementMadeActive && this.animateActivation_(),
                          requestAnimationFrame(function() {
                            (h = []),
                              n.wasElementMadeActive ||
                                void 0 === t ||
                                (" " !== t.key && 32 !== t.keyCode) ||
                                ((n.wasElementMadeActive = e.checkElementMadeActive_(
                                  t
                                )),
                                n.wasElementMadeActive &&
                                  e.animateActivation_()),
                              n.wasElementMadeActive ||
                                (e.activationState_ = e.defaultActivationState_());
                          }));
                }
              }
            }),
            (e.prototype.checkElementMadeActive_ = function(t) {
              return (
                void 0 === t ||
                "keydown" !== t.type ||
                this.adapter_.isSurfaceActive()
              );
            }),
            (e.prototype.animateActivation_ = function() {
              var t = this,
                n = e.strings,
                i = n.VAR_FG_TRANSLATE_START,
                o = n.VAR_FG_TRANSLATE_END,
                r = e.cssClasses,
                a = r.FG_DEACTIVATION,
                s = r.FG_ACTIVATION,
                l = e.numbers.DEACTIVATION_TIMEOUT_MS;
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
                  return t.activationTimerCallback_();
                }, l));
            }),
            (e.prototype.getFgTranslationCoordinates_ = function() {
              var t,
                e = this.activationState_,
                n = e.activationEvent;
              return {
                startPoint: (t = {
                  x:
                    (t = e.wasActivatedByPointer
                      ? (function(t, e, n) {
                          if (!t) return { x: 0, y: 0 };
                          var i,
                            o,
                            r = e.x,
                            a = e.y,
                            s = r + n.left,
                            l = a + n.top;
                          if ("touchstart" === t.type) {
                            var c = t;
                            (i = c.changedTouches[0].pageX - s),
                              (o = c.changedTouches[0].pageY - l);
                          } else {
                            var d = t;
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
                  y: t.y - this.initialSize_ / 2
                }),
                endPoint: {
                  x: this.frame_.width / 2 - this.initialSize_ / 2,
                  y: this.frame_.height / 2 - this.initialSize_ / 2
                }
              };
            }),
            (e.prototype.runDeactivationUXLogicIfReady_ = function() {
              var t = this,
                n = e.cssClasses.FG_DEACTIVATION,
                i = this.activationState_,
                o = i.hasDeactivationUXRun,
                r = i.isActivated;
              (o || !r) &&
                this.activationAnimationHasEnded_ &&
                (this.rmBoundedActivationClasses_(),
                this.adapter_.addClass(n),
                (this.fgDeactivationRemovalTimer_ = setTimeout(function() {
                  t.adapter_.removeClass(n);
                }, d.FG_DEACTIVATION_MS)));
            }),
            (e.prototype.rmBoundedActivationClasses_ = function() {
              var t = e.cssClasses.FG_ACTIVATION;
              this.adapter_.removeClass(t),
                (this.activationAnimationHasEnded_ = !1),
                this.adapter_.computeBoundingRect();
            }),
            (e.prototype.resetActivationState_ = function() {
              var t = this;
              (this.previousActivationEvent_ = this.activationState_.activationEvent),
                (this.activationState_ = this.defaultActivationState_()),
                setTimeout(function() {
                  return (t.previousActivationEvent_ = void 0);
                }, e.numbers.TAP_DELAY_MS);
            }),
            (e.prototype.deactivate_ = function() {
              var t = this,
                e = this.activationState_;
              if (e.isActivated) {
                var n = a.a({}, e);
                e.isProgrammatic
                  ? (requestAnimationFrame(function() {
                      return t.animateDeactivation_(n);
                    }),
                    this.resetActivationState_())
                  : (this.deregisterDeactivationHandlers_(),
                    requestAnimationFrame(function() {
                      (t.activationState_.hasDeactivationUXRun = !0),
                        t.animateDeactivation_(n),
                        t.resetActivationState_();
                    }));
              }
            }),
            (e.prototype.animateDeactivation_ = function(t) {
              var e = t.wasActivatedByPointer,
                n = t.wasElementMadeActive;
              (e || n) && this.runDeactivationUXLogicIfReady_();
            }),
            (e.prototype.layoutInternal_ = function() {
              var t = this;
              this.frame_ = this.adapter_.computeBoundingRect();
              var n = Math.max(this.frame_.height, this.frame_.width);
              this.maxRadius_ = this.adapter_.isUnbounded()
                ? n
                : Math.sqrt(
                    Math.pow(t.frame_.width, 2) + Math.pow(t.frame_.height, 2)
                  ) + e.numbers.PADDING;
              var i = Math.floor(n * e.numbers.INITIAL_ORIGIN_SCALE);
              this.adapter_.isUnbounded() && i % 2 != 0
                ? (this.initialSize_ = i - 1)
                : (this.initialSize_ = i),
                (this.fgScale_ = "" + this.maxRadius_ / this.initialSize_),
                this.updateLayoutCssVars_();
            }),
            (e.prototype.updateLayoutCssVars_ = function() {
              var t = e.strings,
                n = t.VAR_FG_SIZE,
                i = t.VAR_LEFT,
                o = t.VAR_TOP,
                r = t.VAR_FG_SCALE;
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
            e
          );
        })(s.a),
        b = n(16),
        v = n(5);
      function m() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          "@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}"
        ]);
        return (
          (m = function() {
            return t;
          }),
          t
        );
      }
      var y = Object(v.c)(m());
      n.d(e, "b", function() {
        return x;
      }),
        n.d(e, "a", function() {
          return S;
        });
      var g = (function(t, e) {
          void 0 === e && (e = !1);
          var n,
            i = t.CSS;
          if ("boolean" == typeof o && !e) return o;
          if (!i || "function" != typeof i.supports) return !1;
          var r = i.supports("--css-vars", "yes"),
            a =
              i.supports("(--css-vars: yes)") &&
              i.supports("color", "#00000000");
          return (n = r || a), e || (o = n), n;
        })(window),
        _ = navigator.userAgent.match(/Safari/),
        w = !1,
        x = function(t) {
          _ &&
            !w &&
            (function() {
              w = !0;
              var t = document.createElement("style"),
                e = new b.b({ templateFactory: b.k });
              e.appendInto(t),
                e.setValue(y),
                e.commit(),
                document.head.appendChild(t);
            })();
          var e = t.surfaceNode,
            n = t.interactionNode || e;
          n.getRootNode() !== e.getRootNode() &&
            "" === n.style.position &&
            (n.style.position = "relative");
          var o = new f({
            browserSupportsCssVars: function() {
              return g;
            },
            isUnbounded: function() {
              return void 0 === t.unbounded || t.unbounded;
            },
            isSurfaceActive: function() {
              return Object(r.a)(n, ":active");
            },
            isSurfaceDisabled: function() {
              return Boolean(n.hasAttribute("disabled"));
            },
            addClass: function(t) {
              return e.classList.add(t);
            },
            removeClass: function(t) {
              return e.classList.remove(t);
            },
            containsEventTarget: function(t) {
              return n.contains(t);
            },
            registerInteractionHandler: function(t, e) {
              return n.addEventListener(t, e, i());
            },
            deregisterInteractionHandler: function(t, e) {
              return n.removeEventListener(t, e, i());
            },
            registerDocumentInteractionHandler: function(t, e) {
              return document.documentElement.addEventListener(t, e, i());
            },
            deregisterDocumentInteractionHandler: function(t, e) {
              return document.documentElement.removeEventListener(t, e, i());
            },
            registerResizeHandler: function(t) {
              return window.addEventListener("resize", t);
            },
            deregisterResizeHandler: function(t) {
              return window.removeEventListener("resize", t);
            },
            updateCssVariable: function(t, n) {
              return e.style.setProperty(t, n);
            },
            computeBoundingRect: function() {
              return e.getBoundingClientRect();
            },
            getWindowPageOffset: function() {
              return { x: window.pageXOffset, y: window.pageYOffset };
            }
          });
          return o.init(), o;
        },
        k = new WeakMap(),
        S = Object(b.f)(function() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e) {
            var n = e.committer.element,
              i = t.interactionNode || n,
              o = e.value,
              r = k.get(o);
            void 0 !== r && r !== i && (o.destroy(), (o = b.h)),
              o === b.h
                ? ((o = x(Object.assign({}, t, { surfaceNode: n }))),
                  k.set(o, i),
                  e.setValue(o))
                : (void 0 !== t.unbounded && o.setUnbounded(t.unbounded),
                  void 0 !== t.disabled && o.setUnbounded(t.disabled)),
              !0 === t.active
                ? o.activate()
                : !1 === t.active && o.deactivate();
          };
        });
    },
    function(t, e, n) {
      "use strict";
      n(4);
      var i = n(8),
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
            var t = Object(i.a)(this).parentNode;
            return (
              t && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (t = t.host), t
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
              var t = window.getComputedStyle(this),
                e = window.getComputedStyle(this.sizingTarget);
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
                    "auto" !== t.top
                      ? "top"
                      : "auto" !== t.bottom
                      ? "bottom"
                      : null,
                  horizontally:
                    "auto" !== t.left
                      ? "left"
                      : "auto" !== t.right
                      ? "right"
                      : null
                },
                sizedBy: {
                  height: "none" !== e.maxHeight,
                  width: "none" !== e.maxWidth,
                  minWidth: parseInt(e.minWidth, 10) || 0,
                  minHeight: parseInt(e.minHeight, 10) || 0
                },
                margin: {
                  top: parseInt(t.marginTop, 10) || 0,
                  right: parseInt(t.marginRight, 10) || 0,
                  bottom: parseInt(t.marginBottom, 10) || 0,
                  left: parseInt(t.marginLeft, 10) || 0
                }
              };
            }
          },
          resetFit: function() {
            var t = this._fitInfo || {};
            for (var e in t.sizerInlineStyle)
              this.sizingTarget.style[e] = t.sizerInlineStyle[e];
            for (var e in t.inlineStyle) this.style[e] = t.inlineStyle[e];
            this._fitInfo = null;
          },
          refit: function() {
            var t = this.sizingTarget.scrollLeft,
              e = this.sizingTarget.scrollTop;
            this.resetFit(),
              this.fit(),
              (this.sizingTarget.scrollLeft = t),
              (this.sizingTarget.scrollTop = e);
          },
          position: function() {
            if (this.__shouldPosition) {
              this._discoverInfo(),
                (this.style.position = "fixed"),
                (this.sizingTarget.style.boxSizing = "border-box"),
                (this.style.left = "0px"),
                (this.style.top = "0px");
              var t = this.getBoundingClientRect(),
                e = this.__getNormalizedRect(this.positionTarget),
                n = this.__getNormalizedRect(this.fitInto),
                i = this._fitInfo.margin,
                o = {
                  width: t.width + i.left + i.right,
                  height: t.height + i.top + i.bottom
                },
                r = this.__getPosition(
                  this._localeHorizontalAlign,
                  this.verticalAlign,
                  o,
                  t,
                  e,
                  n
                ),
                a = r.left + i.left,
                s = r.top + i.top,
                l = Math.min(n.right - i.right, a + t.width),
                c = Math.min(n.bottom - i.bottom, s + t.height);
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
                (this.style.left = a - t.left + "px"),
                (this.style.top = s - t.top + "px");
            }
          },
          constrain: function() {
            if (!this.__shouldPosition) {
              this._discoverInfo();
              var t = this._fitInfo;
              t.positionedBy.vertically ||
                ((this.style.position = "fixed"), (this.style.top = "0px")),
                t.positionedBy.horizontally ||
                  ((this.style.position = "fixed"), (this.style.left = "0px")),
                (this.sizingTarget.style.boxSizing = "border-box");
              var e = this.getBoundingClientRect();
              t.sizedBy.height ||
                this.__sizeDimension(
                  e,
                  t.positionedBy.vertically,
                  "top",
                  "bottom",
                  "Height"
                ),
                t.sizedBy.width ||
                  this.__sizeDimension(
                    e,
                    t.positionedBy.horizontally,
                    "left",
                    "right",
                    "Width"
                  );
            }
          },
          _sizeDimension: function(t, e, n, i, o) {
            this.__sizeDimension(t, e, n, i, o);
          },
          __sizeDimension: function(t, e, n, i, o) {
            var r = this._fitInfo,
              a = this.__getNormalizedRect(this.fitInto),
              s = "Width" === o ? a.width : a.height,
              l = e === i,
              c = l ? s - t[i] : t[n],
              d = r.margin[l ? n : i],
              u = "offset" + o,
              p = this[u] - this.sizingTarget[u];
            this.sizingTarget.style["max" + o] = s - d - c - p + "px";
          },
          center: function() {
            if (!this.__shouldPosition) {
              this._discoverInfo();
              var t = this._fitInfo.positionedBy;
              if (!t.vertically || !t.horizontally) {
                (this.style.position = "fixed"),
                  t.vertically || (this.style.top = "0px"),
                  t.horizontally || (this.style.left = "0px");
                var e = this.getBoundingClientRect(),
                  n = this.__getNormalizedRect(this.fitInto);
                if (!t.vertically) {
                  var i = n.top - e.top + (n.height - e.height) / 2;
                  this.style.top = i + "px";
                }
                if (!t.horizontally) {
                  var o = n.left - e.left + (n.width - e.width) / 2;
                  this.style.left = o + "px";
                }
              }
            }
          },
          __getNormalizedRect: function(t) {
            return t === document.documentElement || t === window
              ? {
                  top: 0,
                  left: 0,
                  width: window.innerWidth,
                  height: window.innerHeight,
                  right: window.innerWidth,
                  bottom: window.innerHeight
                }
              : t.getBoundingClientRect();
          },
          __getOffscreenArea: function(t, e, n) {
            var i =
                Math.min(0, t.top) + Math.min(0, n.bottom - (t.top + e.height)),
              o =
                Math.min(0, t.left) + Math.min(0, n.right - (t.left + e.width));
            return Math.abs(i) * e.width + Math.abs(o) * e.height;
          },
          __getPosition: function(t, e, n, i, o, r) {
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
            (e = "auto" === e ? null : e),
              ((t = "auto" === t ? null : t) && "center" !== t) ||
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
              (e && "middle" !== e) ||
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
              "middle" === e &&
                "center" === t &&
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
                h = p.verticalAlign === e,
                f = p.horizontalAlign === t;
              if (!this.dynamicAlign && !this.noOverlap && h && f) {
                a = p;
                break;
              }
              var b = (!e || h) && (!t || f);
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
        r = n(84),
        a = n(23),
        s = n(67),
        l = n(7),
        c = n(6);
      function d() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          "\n    <style>\n      :host {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: var(--iron-overlay-backdrop-background-color, #000);\n        opacity: 0;\n        transition: opacity 0.2s;\n        pointer-events: none;\n        @apply --iron-overlay-backdrop;\n      }\n\n      :host(.opened) {\n        opacity: var(--iron-overlay-backdrop-opacity, 0.6);\n        pointer-events: auto;\n        @apply --iron-overlay-backdrop-opened;\n      }\n    </style>\n\n    <slot></slot>\n"
        ]);
        return (
          (d = function() {
            return t;
          }),
          t
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
        _onTransitionend: function(t) {
          t && t.target === this && this.complete();
        },
        _openedChanged: function(t) {
          if (t) this.prepare();
          else {
            var e = window.getComputedStyle(this);
            ("0s" !== e.transitionDuration && 0 != e.opacity) ||
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
      var u = n(26),
        p = n(58),
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
          var t = document.activeElement;
          for (
            (t && t instanceof Element != !1) || (t = document.body);
            t.root && Object(i.a)(t.root).activeElement;

          )
            t = Object(i.a)(t.root).activeElement;
          return t;
        },
        _bringOverlayAtIndexToFront: function(t) {
          var e = this._overlays[t];
          if (e) {
            var n = this._overlays.length - 1,
              i = this._overlays[n];
            if ((i && this._shouldBeBehindOverlay(e, i) && n--, !(t >= n))) {
              var o = Math.max(this.currentOverlayZ(), this._minimumZ);
              for (this._getZ(e) <= o && this._applyOverlayZ(e, o); t < n; )
                (this._overlays[t] = this._overlays[t + 1]), t++;
              this._overlays[n] = e;
            }
          }
        },
        addOrRemoveOverlay: function(t) {
          t.opened ? this.addOverlay(t) : this.removeOverlay(t);
        },
        addOverlay: function(t) {
          var e = this._overlays.indexOf(t);
          if (e >= 0)
            return (
              this._bringOverlayAtIndexToFront(e), void this.trackBackdrop()
            );
          var n = this._overlays.length,
            i = this._overlays[n - 1],
            o = Math.max(this._getZ(i), this._minimumZ),
            r = this._getZ(t);
          if (i && this._shouldBeBehindOverlay(t, i)) {
            this._applyOverlayZ(i, o), n--;
            var a = this._overlays[n - 1];
            o = Math.max(this._getZ(a), this._minimumZ);
          }
          r <= o && this._applyOverlayZ(t, o),
            this._overlays.splice(n, 0, t),
            this.trackBackdrop();
        },
        removeOverlay: function(t) {
          var e = this._overlays.indexOf(t);
          -1 !== e && (this._overlays.splice(e, 1), this.trackBackdrop());
        },
        currentOverlay: function() {
          var t = this._overlays.length - 1;
          return this._overlays[t];
        },
        currentOverlayZ: function() {
          return this._getZ(this.currentOverlay());
        },
        ensureMinimumZ: function(t) {
          this._minimumZ = Math.max(this._minimumZ, t);
        },
        focusOverlay: function() {
          var t = this.currentOverlay();
          t && t._applyFocus();
        },
        trackBackdrop: function() {
          var t = this._overlayWithBackdrop();
          (t || this._backdropElement) &&
            ((this.backdropElement.style.zIndex = this._getZ(t) - 1),
            (this.backdropElement.opened = !!t),
            this.backdropElement.prepare());
        },
        getBackdrops: function() {
          for (var t = [], e = 0; e < this._overlays.length; e++)
            this._overlays[e].withBackdrop && t.push(this._overlays[e]);
          return t;
        },
        backdropZ: function() {
          return this._getZ(this._overlayWithBackdrop()) - 1;
        },
        _overlayWithBackdrop: function() {
          for (var t = this._overlays.length - 1; t >= 0; t--)
            if (this._overlays[t].withBackdrop) return this._overlays[t];
        },
        _getZ: function(t) {
          var e = this._minimumZ;
          if (t) {
            var n = Number(t.style.zIndex || window.getComputedStyle(t).zIndex);
            n == n && (e = n);
          }
          return e;
        },
        _setZ: function(t, e) {
          t.style.zIndex = e;
        },
        _applyOverlayZ: function(t, e) {
          this._setZ(t, e + 2);
        },
        _overlayInPath: function(t) {
          t = t || [];
          for (var e = 0; e < t.length; e++)
            if (t[e]._manager === this) return t[e];
        },
        _onCaptureClick: function(t) {
          var e = this._overlays.length - 1;
          if (-1 !== e)
            for (
              var n, o = Object(i.a)(t).path;
              (n = this._overlays[e]) &&
              this._overlayInPath(o) !== n &&
              (n._onCaptureClick(t), n.allowClickThrough);

            )
              e--;
        },
        _onCaptureFocus: function(t) {
          var e = this.currentOverlay();
          e && e._onCaptureFocus(t);
        },
        _onCaptureKeyDown: function(t) {
          var e = this.currentOverlay();
          e &&
            (u.a.keyboardEventMatchesKeys(t, "esc")
              ? e._onCaptureEsc(t)
              : u.a.keyboardEventMatchesKeys(t, "tab") && e._onCaptureTab(t));
        },
        _shouldBeBehindOverlay: function(t, e) {
          return !t.alwaysOnTop && e.alwaysOnTop;
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
      function w(t) {
        k.indexOf(t) >= 0 ||
          (0 === k.length &&
            (function() {
              f =
                f ||
                function(t) {
                  t.cancelable &&
                    (function(t) {
                      var e = Object(i.a)(t).rootTarget;
                      "touchmove" !== t.type &&
                        y !== e &&
                        ((y = e),
                        (g = (function(t) {
                          for (var e = [], n = t.indexOf(b), i = 0; i <= n; i++)
                            if (t[i].nodeType === Node.ELEMENT_NODE) {
                              var o = t[i],
                                r = o.style;
                              "scroll" !== r.overflow &&
                                "auto" !== r.overflow &&
                                (r = window.getComputedStyle(o)),
                                ("scroll" !== r.overflow &&
                                  "auto" !== r.overflow) ||
                                  e.push(o);
                            }
                          return e;
                        })(Object(i.a)(t).path)));
                      if (!g.length) return !0;
                      if ("touchstart" === t.type) return !1;
                      var n = (function(t) {
                        var e = { deltaX: t.deltaX, deltaY: t.deltaY };
                        if ("deltaX" in t);
                        else if ("wheelDeltaX" in t && "wheelDeltaY" in t)
                          (e.deltaX = -t.wheelDeltaX),
                            (e.deltaY = -t.wheelDeltaY);
                        else if ("wheelDelta" in t)
                          (e.deltaX = 0), (e.deltaY = -t.wheelDelta);
                        else if ("axis" in t)
                          (e.deltaX = 1 === t.axis ? t.detail : 0),
                            (e.deltaY = 2 === t.axis ? t.detail : 0);
                        else if (t.targetTouches) {
                          var n = t.targetTouches[0];
                          (e.deltaX = m.pageX - n.pageX),
                            (e.deltaY = m.pageY - n.pageY);
                        }
                        return e;
                      })(t);
                      return !(function(t, e, n) {
                        if (!e && !n) return;
                        for (
                          var i = Math.abs(n) >= Math.abs(e), o = 0;
                          o < t.length;
                          o++
                        ) {
                          var r = t[o];
                          if (
                            i
                              ? n < 0
                                ? r.scrollTop > 0
                                : r.scrollTop < r.scrollHeight - r.clientHeight
                              : e < 0
                              ? r.scrollLeft > 0
                              : r.scrollLeft < r.scrollWidth - r.clientWidth
                          )
                            return r;
                        }
                      })(g, n.deltaX, n.deltaY);
                    })(t) &&
                    t.preventDefault();
                  if (t.targetTouches) {
                    var e = t.targetTouches[0];
                    (m.pageX = e.pageX), (m.pageY = e.pageY);
                  }
                }.bind(void 0);
              for (var t = 0, e = _.length; t < e; t++)
                document.addEventListener(_[t], f, {
                  capture: !0,
                  passive: !1
                });
            })(),
          k.push(t),
          (b = k[k.length - 1]),
          [],
          []);
      }
      function x(t) {
        var e = k.indexOf(t);
        -1 !== e &&
          (k.splice(e, 1),
          (b = k[k.length - 1]),
          [],
          [],
          0 === k.length &&
            (function() {
              for (var t = 0, e = _.length; t < e; t++)
                document.removeEventListener(_[t], f, {
                  capture: !0,
                  passive: !1
                });
            })());
      }
      var k = [];
      n.d(e, "b", function() {
        return S;
      }),
        n.d(e, "a", function() {
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
            for (var t in (Object(i.a)(this).unobserveNodes(this._observer),
            (this._observer = null),
            this.__rafs))
              null !== this.__rafs[t] && cancelAnimationFrame(this.__rafs[t]);
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
          cancel: function(t) {
            this.fire("iron-overlay-canceled", t, {
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
          _openedChanged: function(t) {
            t
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
                var t = this._manager.deepActiveElement;
                (t === document.body || Object(i.a)(this).deepContains(t)) &&
                  this.__restoreFocusNode.focus();
              }
              (this.__restoreFocusNode = null),
                this._focusNode.blur(),
                (this._focusedChild = null);
            }
          },
          _onCaptureClick: function(t) {
            this.noCancelOnOutsideClick || this.cancel(t);
          },
          _onCaptureFocus: function(t) {
            if (this.withBackdrop) {
              var e = Object(i.a)(t).path;
              -1 === e.indexOf(this)
                ? (t.stopPropagation(), this._applyFocus())
                : (this._focusedChild = e[0]);
            }
          },
          _onCaptureEsc: function(t) {
            this.noCancelOnEscKey || this.cancel(t);
          },
          _onCaptureTab: function(t) {
            if (this.withBackdrop) {
              this.__ensureFirstLastFocusables();
              var e = t.shiftKey,
                n = e ? this.__firstFocusableNode : this.__lastFocusableNode,
                i = e ? this.__lastFocusableNode : this.__firstFocusableNode,
                o = !1;
              if (n === i) o = !0;
              else {
                var r = this._manager.deepActiveElement;
                o = r === n || r === this;
              }
              o &&
                (t.preventDefault(),
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
            var t = this._focusableNodes;
            (this.__firstFocusableNode = t[0]),
              (this.__lastFocusableNode = t[t.length - 1]);
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
          __deraf: function(t, e) {
            var n = this.__rafs;
            null !== n[t] && cancelAnimationFrame(n[t]),
              (n[t] = requestAnimationFrame(
                function() {
                  (n[t] = null), e.call(this);
                }.bind(this)
              ));
          },
          __updateScrollObservers: function(t, e, n) {
            t && e && this.__isValidScrollAction(n)
              ? ("lock" === n && (this.__saveScrollPosition(), w(this)),
                this.__addScrollListeners())
              : (x(this), this.__removeScrollListeners());
          },
          __addScrollListeners: function() {
            if (!this.__rootNodes) {
              if (((this.__rootNodes = []), a.f))
                for (var t = this; t; )
                  t.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
                    t.host &&
                    this.__rootNodes.push(t),
                    (t = t.host || t.assignedSlot || t.parentNode);
              this.__rootNodes.push(document);
            }
            this.__rootNodes.forEach(function(t) {
              t.addEventListener("scroll", this.__onCaptureScroll, {
                capture: !0,
                passive: !0
              });
            }, this);
          },
          __removeScrollListeners: function() {
            this.__rootNodes &&
              this.__rootNodes.forEach(function(t) {
                t.removeEventListener("scroll", this.__onCaptureScroll, {
                  capture: !0,
                  passive: !0
                });
              }, this),
              this.isAttached || (this.__rootNodes = null);
          },
          __isValidScrollAction: function(t) {
            return "lock" === t || "refit" === t || "cancel" === t;
          },
          __onCaptureScroll: function(t) {
            if (!(this.__isAnimating || Object(i.a)(t).path.indexOf(this) >= 0))
              switch (this.scrollAction) {
                case "lock":
                  this.__restoreScrollPosition();
                  break;
                case "refit":
                  this.__deraf("refit", this.refit);
                  break;
                case "cancel":
                  this.cancel(t);
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
    function(t, e, n) {
      "use strict";
      n(4);
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
        _copyProperties: function(t, e) {
          for (var n in e) t[n] = e[n];
        },
        _cloneConfig: function(t) {
          var e = { isClone: !0 };
          return this._copyProperties(e, t), e;
        },
        _getAnimationConfigRecursive: function(t, e, n) {
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
              ((i = t ? this.animationConfig[t] : this.animationConfig),
              Array.isArray(i) || (i = [i]),
              i)
            )
              for (var o, r = 0; (o = i[r]); r++)
                if (o.animatable)
                  o.animatable._getAnimationConfigRecursive(o.type || t, e, n);
                else if (o.id) {
                  var a = e[o.id];
                  a
                    ? (a.isClone ||
                        ((e[o.id] = this._cloneConfig(a)), (a = e[o.id])),
                      this._copyProperties(a, o))
                    : (e[o.id] = o);
                } else n.push(o);
        },
        getAnimationConfig: function(t) {
          var e = {},
            n = [];
          for (var i in (this._getAnimationConfigRecursive(t, e, n), e))
            n.push(e[i]);
          return n;
        }
      };
      n.d(e, "a", function() {
        return o;
      });
      var o = [
        i,
        {
          _configureAnimations: function(t) {
            var e = [],
              n = [];
            if (t.length > 0)
              for (var i, o = 0; (i = t[o]); o++) {
                var r = document.createElement(i.name);
                if (r.isNeonAnimation) {
                  var a;
                  r.configure ||
                    (r.configure = function(t) {
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
              l && e.push({ neonAnimation: d, config: c, animation: l });
            }
            return e;
          },
          _shouldComplete: function(t) {
            for (var e = !0, n = 0; n < t.length; n++)
              if ("finished" != t[n].animation.playState) {
                e = !1;
                break;
              }
            return e;
          },
          _complete: function(t) {
            for (var e = 0; e < t.length; e++)
              t[e].neonAnimation.complete(t[e].config);
            for (e = 0; e < t.length; e++) t[e].animation.cancel();
          },
          playAnimation: function(t, e) {
            var n = this.getAnimationConfig(t);
            if (n) {
              (this._active = this._active || {}),
                this._active[t] &&
                  (this._complete(this._active[t]), delete this._active[t]);
              var i = this._configureAnimations(n);
              if (0 != i.length) {
                this._active[t] = i;
                for (var o = 0; o < i.length; o++)
                  i[o].animation.onfinish = function() {
                    this._shouldComplete(i) &&
                      (this._complete(i),
                      delete this._active[t],
                      this.fire("neon-animation-finish", e, { bubbles: !1 }));
                  }.bind(this);
              } else this.fire("neon-animation-finish", e, { bubbles: !1 });
            }
          },
          cancelAnimation: function() {
            for (var t in this._active) {
              var e = this._active[t];
              for (var n in e) e[n].animation.cancel();
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
    ,
    function(t, e, n) {
      "use strict";
      n.d(e, "b", function() {
        return a;
      }),
        n.d(e, "a", function() {
          return s;
        });
      n(4);
      var i = n(45),
        o = n(25),
        r = n(81),
        a = {
          observers: ["_focusedChanged(receivedFocusFromKeyboard)"],
          _focusedChanged: function(t) {
            t && this.ensureRipple(),
              this.hasRipple() && (this._ripple.holdDown = t);
          },
          _createRipple: function() {
            var t = r.a._createRipple();
            return (
              (t.id = "ink"),
              t.setAttribute("center", ""),
              t.classList.add("circle"),
              t
            );
          }
        },
        s = [i.a, o.a, r.a, a];
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return r;
      });
      n(4), n(102);
      var i = n(45),
        o = n(8),
        r = {
          properties: {
            noink: { type: Boolean, observer: "_noinkChanged" },
            _rippleContainer: { type: Object }
          },
          _buttonStateChanged: function() {
            this.focused && this.ensureRipple();
          },
          _downHandler: function(t) {
            i.b._downHandler.call(this, t),
              this.pressed && this.ensureRipple(t);
          },
          ensureRipple: function(t) {
            if (!this.hasRipple()) {
              (this._ripple = this._createRipple()),
                (this._ripple.noink = this.noink);
              var e = this._rippleContainer || this.root;
              if ((e && Object(o.a)(e).appendChild(this._ripple), t)) {
                var n = Object(o.a)(this._rippleContainer || this),
                  i = Object(o.a)(t).rootTarget;
                n.deepContains(i) && this._ripple.uiDownAction(t);
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
          _noinkChanged: function(t) {
            this.hasRipple() && (this._ripple.noink = t);
          }
        };
    },
    function(t, e, n) {
      "use strict";
      n(4), n(46), n(108);
      var i = n(7),
        o = n(6),
        r = n(109);
      function a() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n  <style include="paper-spinner-styles"></style>\n\n  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">\n    <div class="spinner-layer">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n  </div>\n'
        ]);
        return (
          (a = function() {
            return t;
          }),
          t
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
    function(t, e, n) {
      "use strict";
      var i = function(t, e) {
        return (
          t.length === e.length &&
          t.every(function(t, n) {
            return (i = t), (o = e[n]), i === o;
            var i, o;
          })
        );
      };
      e.a = function(t, e) {
        var n;
        void 0 === e && (e = i);
        var o,
          r = [],
          a = !1;
        return function() {
          for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
            s[l] = arguments[l];
          return a && n === this && e(s, r)
            ? o
            : ((o = t.apply(this, s)), (a = !0), (n = this), (r = s), o);
        };
      };
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return a;
      });
      n(4);
      var i = n(8),
        o = n(23),
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
              (this._interestedResizables.forEach(function(t) {
                this.resizerShouldNotify(t) && this._notifyDescendant(t);
              }, this),
              this._fireResize());
          },
          assignParentResizable: function(t) {
            this._parentResizable &&
              this._parentResizable.stopResizeNotificationsFor(this),
              (this._parentResizable = t),
              t &&
                -1 === t._interestedResizables.indexOf(this) &&
                (t._interestedResizables.push(this),
                t._subscribeIronResize(this));
          },
          stopResizeNotificationsFor: function(t) {
            var e = this._interestedResizables.indexOf(t);
            e > -1 &&
              (this._interestedResizables.splice(e, 1),
              this._unsubscribeIronResize(t));
          },
          _subscribeIronResize: function(t) {
            t.addEventListener(
              "iron-resize",
              this._boundOnDescendantIronResize
            );
          },
          _unsubscribeIronResize: function(t) {
            t.removeEventListener(
              "iron-resize",
              this._boundOnDescendantIronResize
            );
          },
          resizerShouldNotify: function(t) {
            return !0;
          },
          _onDescendantIronResize: function(t) {
            this._notifyingDescendant
              ? t.stopPropagation()
              : o.f || this._fireResize();
          },
          _fireResize: function() {
            this.fire("iron-resize", null, { node: this, bubbles: !1 });
          },
          _onIronRequestResizeNotifications: function(t) {
            var e = Object(i.a)(t).rootTarget;
            e !== this &&
              (e.assignParentResizable(this),
              this._notifyDescendant(e),
              t.stopPropagation());
          },
          _parentResizableChanged: function(t) {
            t && window.removeEventListener("resize", this._boundNotifyResize);
          },
          _notifyDescendant: function(t) {
            this.isAttached &&
              ((this._notifyingDescendant = !0),
              t.notifyResize(),
              (this._notifyingDescendant = !1));
          },
          _requestResizeNotifications: function() {
            if (this.isAttached)
              if ("loading" === document.readyState) {
                var t = this._requestResizeNotifications.bind(this);
                document.addEventListener("readystatechange", function e() {
                  document.removeEventListener("readystatechange", e), t();
                });
              } else
                this._findParent(),
                  this._parentResizable
                    ? this._parentResizable._interestedResizables.forEach(
                        function(t) {
                          t !== this && t._findParent();
                        },
                        this
                      )
                    : (r.forEach(function(t) {
                        t !== this && t._findParent();
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
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      });
      n(4);
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
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      "use strict";
      n(4);
      var i = n(26),
        o = n(95),
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
          select: function(t) {
            this.multi ? this._toggleSelected(t) : (this.selected = t);
          },
          multiChanged: function(t) {
            (this._selection.multi = t), this._updateSelected();
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
                  .map(function(t) {
                    return this._indexToValue(this.indexOf(t));
                  }, this)
                  .filter(function(t) {
                    return null != t;
                  }, this))
              : o.a._updateAttrForSelected.apply(this);
          },
          _updateSelected: function() {
            this.multi
              ? this._selectMulti(this.selectedValues)
              : this._selectSelected(this.selected);
          },
          _selectMulti: function(t) {
            t = t || [];
            var e = (this._valuesToItems(t) || []).filter(function(t) {
              return null != t;
            });
            this._selection.clear(e);
            for (var n = 0; n < e.length; n++)
              this._selection.setItemSelected(e[n], !0);
            this.fallbackSelection &&
              !this._selection.get().length &&
              this._valueToItem(this.fallbackSelection) &&
                this.select(this.fallbackSelection);
          },
          _selectionChange: function() {
            var t = this._selection.get();
            this.multi
              ? (this._setSelectedItems(t),
                this._setSelectedItem(t.length ? t[0] : null))
              : null != t
              ? (this._setSelectedItems([t]), this._setSelectedItem(t))
              : (this._setSelectedItems([]), this._setSelectedItem(null));
          },
          _toggleSelected: function(t) {
            var e = this.selectedValues.indexOf(t);
            e < 0
              ? this.push("selectedValues", t)
              : this.splice("selectedValues", e, 1);
          },
          _valuesToItems: function(t) {
            return null == t
              ? null
              : t.map(function(t) {
                  return this._valueToItem(t);
                }, this);
          }
        },
        a = [o.a, r],
        s = n(8);
      n.d(e, "b", function() {
        return l;
      }),
        n.d(e, "a", function() {
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
          select: function(t) {
            this._defaultFocusAsync &&
              (this.cancelAsync(this._defaultFocusAsync),
              (this._defaultFocusAsync = null));
            var e = this._valueToItem(t);
            (e && e.hasAttribute("disabled")) ||
              (this._setFocusedItem(e), r.select.apply(this, arguments));
          },
          _resetTabindices: function() {
            var t = this.multi
              ? this.selectedItems && this.selectedItems[0]
              : this.selectedItem;
            this.items.forEach(function(e) {
              e.setAttribute("tabindex", e === t ? "0" : "-1"),
                e.setAttribute("aria-selected", this._selection.isSelected(e));
            }, this);
          },
          _updateMultiselectable: function(t) {
            t
              ? this.setAttribute("aria-multiselectable", "true")
              : this.removeAttribute("aria-multiselectable");
          },
          _focusWithKeyboardEvent: function(t) {
            if (-1 === this._MODIFIER_KEYS.indexOf(t.key)) {
              this.cancelDebouncer("_clearSearchText");
              for (
                var e,
                  n = this._searchText || "",
                  i = (n += (t.key && 1 == t.key.length
                    ? t.key
                    : String.fromCharCode(t.keyCode)
                  ).toLocaleLowerCase()).length,
                  o = 0;
                (e = this.items[o]);
                o++
              )
                if (!e.hasAttribute("disabled")) {
                  var r = this.attrForItemTitle || "textContent",
                    a = (e[r] || e.getAttribute(r) || "").trim();
                  if (
                    !(a.length < i) &&
                    a.slice(0, i).toLocaleLowerCase() == n
                  ) {
                    this._setFocusedItem(e);
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
              var t = this.items.length,
                e = Number(this.indexOf(this.focusedItem)),
                n = 1;
              n < t + 1;
              n++
            ) {
              var i = this.items[(e - n + t) % t];
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
              var t = this.items.length,
                e = Number(this.indexOf(this.focusedItem)),
                n = 1;
              n < t + 1;
              n++
            ) {
              var i = this.items[(e + n) % t];
              if (!i.hasAttribute("disabled")) {
                var o = Object(s.a)(i).getOwnerRoot() || document;
                if (
                  (this._setFocusedItem(i), Object(s.a)(o).activeElement == i)
                )
                  return;
              }
            }
          },
          _applySelection: function(t, e) {
            e
              ? t.setAttribute("aria-selected", "true")
              : t.setAttribute("aria-selected", "false"),
              o.a._applySelection.apply(this, arguments);
          },
          _focusedItemChanged: function(t, e) {
            e && e.setAttribute("tabindex", "-1"),
              !t ||
                t.hasAttribute("disabled") ||
                this.disabled ||
                (t.setAttribute("tabindex", "0"), t.focus());
          },
          _onIronItemsChanged: function(t) {
            t.detail.addedNodes.length && this._resetTabindices();
          },
          _onShiftTabDown: function(t) {
            var e = this.getAttribute("tabindex");
            (l._shiftTabPressed = !0),
              this._setFocusedItem(null),
              this.setAttribute("tabindex", "-1"),
              this.async(function() {
                this.setAttribute("tabindex", e), (l._shiftTabPressed = !1);
              }, 1);
          },
          _onFocus: function(t) {
            if (!l._shiftTabPressed) {
              var e = Object(s.a)(t).rootTarget;
              (e === this ||
                void 0 === e.tabIndex ||
                this.isLightDescendant(e)) &&
                (this._defaultFocusAsync = this.async(function() {
                  var t = this.multi
                    ? this.selectedItems && this.selectedItems[0]
                    : this.selectedItem;
                  this._setFocusedItem(null),
                    t
                      ? this._setFocusedItem(t)
                      : this.items[0] && this._focusNext();
                }));
            }
          },
          _onUpKey: function(t) {
            this._focusPrevious(), t.detail.keyboardEvent.preventDefault();
          },
          _onDownKey: function(t) {
            this._focusNext(), t.detail.keyboardEvent.preventDefault();
          },
          _onEscKey: function(t) {
            var e = this.focusedItem;
            e && e.blur();
          },
          _onKeydown: function(t) {
            this.keyboardEventMatchesKeys(t, "up down esc") ||
              this._focusWithKeyboardEvent(t),
              t.stopPropagation();
          },
          _activateHandler: function(t) {
            o.a._activateHandler.call(this, t), t.stopPropagation();
          },
          _disabledChanged: function(t) {
            t
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
    ,
    function(t, e, n) {
      "use strict";
      n(4);
      var i = n(8),
        o = n(57);
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var a = (function() {
        function t(e) {
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.selection = []),
            (this.selectCallback = e);
        }
        var e, n, i;
        return (
          (e = t),
          (n = [
            {
              key: "get",
              value: function() {
                return this.multi ? this.selection.slice() : this.selection[0];
              }
            },
            {
              key: "clear",
              value: function(t) {
                this.selection.slice().forEach(function(e) {
                  (!t || t.indexOf(e) < 0) && this.setItemSelected(e, !1);
                }, this);
              }
            },
            {
              key: "isSelected",
              value: function(t) {
                return this.selection.indexOf(t) >= 0;
              }
            },
            {
              key: "setItemSelected",
              value: function(t, e) {
                if (null != t && e !== this.isSelected(t)) {
                  if (e) this.selection.push(t);
                  else {
                    var n = this.selection.indexOf(t);
                    n >= 0 && this.selection.splice(n, 1);
                  }
                  this.selectCallback && this.selectCallback(t, e);
                }
              }
            },
            {
              key: "select",
              value: function(t) {
                this.multi
                  ? this.toggle(t)
                  : this.get() !== t &&
                    (this.setItemSelected(this.get(), !1),
                    this.setItemSelected(t, !0));
              }
            },
            {
              key: "toggle",
              value: function(t) {
                this.setItemSelected(t, !this.isSelected(t));
              }
            }
          ]) && r(e.prototype, n),
          i && r(e, i),
          t
        );
      })();
      n.d(e, "a", function() {
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
        indexOf: function(t) {
          return this.items ? this.items.indexOf(t) : -1;
        },
        select: function(t) {
          this.selected = t;
        },
        selectPrevious: function() {
          var t = this.items.length,
            e = t - 1;
          void 0 !== this.selected &&
            (e = (Number(this._valueToIndex(this.selected)) - 1 + t) % t),
            (this.selected = this._indexToValue(e));
        },
        selectNext: function() {
          var t = 0;
          void 0 !== this.selected &&
            (t =
              (Number(this._valueToIndex(this.selected)) + 1) %
              this.items.length),
            (this.selected = this._indexToValue(t));
        },
        selectIndex: function(t) {
          this.select(this._indexToValue(t));
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
        _addListener: function(t) {
          this.listen(this, t, "_activateHandler");
        },
        _removeListener: function(t) {
          this.unlisten(this, t, "_activateHandler");
        },
        _activateEventChanged: function(t, e) {
          this._removeListener(e), this._addListener(t);
        },
        _updateItems: function() {
          var t = Object(i.a)(this).queryDistributedElements(
            this.selectable || "*"
          );
          (t = Array.prototype.filter.call(t, this._bindFilterItem)),
            this._setItems(t);
        },
        _updateAttrForSelected: function() {
          this.selectedItem &&
            (this.selected = this._valueForItem(this.selectedItem));
        },
        _updateSelected: function() {
          this._selectSelected(this.selected);
        },
        _selectSelected: function(t) {
          if (this.items) {
            var e = this._valueToItem(this.selected);
            e ? this._selection.select(e) : this._selection.clear(),
              this.fallbackSelection &&
                this.items.length &&
                void 0 === this._selection.get() &&
                (this.selected = this.fallbackSelection);
          }
        },
        _filterItem: function(t) {
          return !this._excludedLocalNames[t.localName];
        },
        _valueToItem: function(t) {
          return null == t ? null : this.items[this._valueToIndex(t)];
        },
        _valueToIndex: function(t) {
          if (!this.attrForSelected) return Number(t);
          for (var e, n = 0; (e = this.items[n]); n++)
            if (this._valueForItem(e) == t) return n;
        },
        _indexToValue: function(t) {
          if (!this.attrForSelected) return t;
          var e = this.items[t];
          return e ? this._valueForItem(e) : void 0;
        },
        _valueForItem: function(t) {
          if (!t) return null;
          if (!this.attrForSelected) {
            var e = this.indexOf(t);
            return -1 === e ? null : e;
          }
          var n = t[Object(o.b)(this.attrForSelected)];
          return null != n ? n : t.getAttribute(this.attrForSelected);
        },
        _applySelection: function(t, e) {
          this.selectedClass && this.toggleClass(this.selectedClass, e, t),
            this.selectedAttribute &&
              this.toggleAttribute(this.selectedAttribute, e, t),
            this._selectionChange(),
            this.fire("iron-" + (e ? "select" : "deselect"), { item: t });
        },
        _selectionChange: function() {
          this._setSelectedItem(this._selection.get());
        },
        _observeItems: function(t) {
          return Object(i.a)(t).observeNodes(function(t) {
            this._updateItems(),
              this._updateSelected(),
              this.fire("iron-items-changed", t, {
                bubbles: !1,
                cancelable: !1
              });
          });
        },
        _activateHandler: function(t) {
          for (var e = t.target, n = this.items; e && e != this; ) {
            var i = n.indexOf(e);
            if (i >= 0) {
              var o = this._indexToValue(i);
              return void this._itemActivate(o, e);
            }
            e = e.parentNode;
          }
        },
        _itemActivate: function(t, e) {
          this.fire(
            "iron-activate",
            { selected: t, item: e },
            {
              cancelable: !0
            }
          ).defaultPrevented || this.select(t);
        }
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      "use strict";
      n(4);
      var i = n(26),
        o = n(7),
        r = n(8),
        a = n(6);
      function s() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: block;\n        position: absolute;\n        border-radius: inherit;\n        overflow: hidden;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n\n        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,\n         * creating a node (with a position:absolute) in the middle of an event\n         * handler "interrupts" that event handler (which happens when the\n         * ripple is created on demand) */\n        pointer-events: none;\n      }\n\n      :host([animating]) {\n        /* This resolves a rendering issue in Chrome (as of 40) where the\n           ripple is not properly clipped by its parent (which may have\n           rounded corners). See: http://jsbin.com/temexa/4\n\n           Note: We only apply this style conditionally. Otherwise, the browser\n           will create a new compositing layer for every ripple element on the\n           page, and that would be bad. */\n        -webkit-transform: translate(0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #background,\n      #waves,\n      .wave-container,\n      .wave {\n        pointer-events: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n\n      #background,\n      .wave {\n        opacity: 0;\n      }\n\n      #waves,\n      .wave {\n        overflow: hidden;\n      }\n\n      .wave-container,\n      .wave {\n        border-radius: 50%;\n      }\n\n      :host(.circle) #background,\n      :host(.circle) #waves {\n        border-radius: 50%;\n      }\n\n      :host(.circle) .wave-container {\n        overflow: hidden;\n      }\n    </style>\n\n    <div id="background"></div>\n    <div id="waves"></div>\n'
        ]);
        return (
          (s = function() {
            return t;
          }),
          t
        );
      }
      var l = {
        distance: function(t, e, n, i) {
          var o = t - n,
            r = e - i;
          return Math.sqrt(o * o + r * r);
        },
        now:
          window.performance && window.performance.now
            ? window.performance.now.bind(window.performance)
            : Date.now
      };
      function c(t) {
        (this.element = t),
          (this.width = this.boundingRect.width),
          (this.height = this.boundingRect.height),
          (this.size = Math.max(this.width, this.height));
      }
      function d(t) {
        (this.element = t),
          (this.color = window.getComputedStyle(t).color),
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
        furthestCornerDistanceFrom: function(t, e) {
          var n = l.distance(t, e, 0, 0),
            i = l.distance(t, e, this.width, 0),
            o = l.distance(t, e, 0, this.height),
            r = l.distance(t, e, this.width, this.height);
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
            var t;
            return this.mouseDownStart
              ? ((t = l.now() - this.mouseDownStart),
                this.mouseUpStart && (t -= this.mouseUpElapsed),
                t)
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
            var t = this.containerMetrics.width * this.containerMetrics.width,
              e = this.containerMetrics.height * this.containerMetrics.height,
              n = 1.1 * Math.min(Math.sqrt(t + e), d.MAX_RADIUS) + 5,
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
            var t = 0.3 * this.mouseUpElapsedSeconds,
              e = this.opacity;
            return Math.max(0, Math.min(t, e));
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
            var t, e, n;
            (this.wave.style.opacity = this.opacity),
              (t = this.radius / (this.containerMetrics.size / 2)),
              (e = this.xNow - this.containerMetrics.width / 2),
              (n = this.yNow - this.containerMetrics.height / 2),
              (this.waveContainer.style.webkitTransform =
                "translate(" + e + "px, " + n + "px)"),
              (this.waveContainer.style.transform =
                "translate3d(" + e + "px, " + n + "px, 0)"),
              (this.wave.style.webkitTransform = "scale(" + t + "," + t + ")"),
              (this.wave.style.transform = "scale3d(" + t + "," + t + ",1)");
          },
          downAction: function(t) {
            var e = this.containerMetrics.width / 2,
              n = this.containerMetrics.height / 2;
            this.resetInteractionState(),
              (this.mouseDownStart = l.now()),
              this.center
                ? ((this.xStart = e),
                  (this.yStart = n),
                  (this.slideDistance = l.distance(
                    this.xStart,
                    this.yStart,
                    this.xEnd,
                    this.yEnd
                  )))
                : ((this.xStart = t
                    ? t.detail.x - this.containerMetrics.boundingRect.left
                    : this.containerMetrics.width / 2),
                  (this.yStart = t
                    ? t.detail.y - this.containerMetrics.boundingRect.top
                    : this.containerMetrics.height / 2)),
              this.recenters &&
                ((this.xEnd = e),
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
          upAction: function(t) {
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
            var t = this.keyEventTarget;
            this.listen(t, "up", "uiUpAction"),
              this.listen(t, "down", "uiDownAction");
          },
          detached: function() {
            this.unlisten(this.keyEventTarget, "up", "uiUpAction"),
              this.unlisten(this.keyEventTarget, "down", "uiDownAction"),
              (this.keyEventTarget = null);
          },
          get shouldKeepAnimating() {
            for (var t = 0; t < this.ripples.length; ++t)
              if (!this.ripples[t].isAnimationComplete) return !0;
            return !1;
          },
          simulatedRipple: function() {
            this.downAction(null),
              this.async(function() {
                this.upAction();
              }, 1);
          },
          uiDownAction: function(t) {
            this.noink || this.downAction(t);
          },
          downAction: function(t) {
            (this.holdDown && this.ripples.length > 0) ||
              (this.addRipple().downAction(t),
              this._animating || ((this._animating = !0), this.animate()));
          },
          uiUpAction: function(t) {
            this.noink || this.upAction(t);
          },
          upAction: function(t) {
            this.holdDown ||
              (this.ripples.forEach(function(e) {
                e.upAction(t);
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
            var t = new d(this);
            return (
              Object(r.a)(this.$.waves).appendChild(t.waveContainer),
              (this.$.background.style.backgroundColor = t.color),
              this.ripples.push(t),
              this._setAnimating(!0),
              t
            );
          },
          removeRipple: function(t) {
            var e = this.ripples.indexOf(t);
            e < 0 ||
              (this.ripples.splice(e, 1),
              t.remove(),
              this.ripples.length || this._setAnimating(!1));
          },
          animate: function() {
            if (this._animating) {
              var t, e;
              for (t = 0; t < this.ripples.length; ++t)
                (e = this.ripples[t]).draw(),
                  (this.$.background.style.opacity = e.outerOpacity),
                  e.isOpacityFullyDecayed &&
                    !e.isRestingAtMaxRadius &&
                    this.removeRipple(e);
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
          _holdDownChanged: function(t, e) {
            void 0 !== e && (t ? this.downAction() : this.upAction());
          }
        });
    },
    function(t, e, n) {
      "use strict";
      function i(t, e) {
        return (
          t.matches ||
          t.webkitMatchesSelector ||
          t.msMatchesSelector
        ).call(t, e);
      }
      n.d(e, "a", function() {
        return i;
      });
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      });
      var i = (function() {
        function t(t) {
          void 0 === t && (t = {}), (this.adapter_ = t);
        }
        return (
          Object.defineProperty(t, "cssClasses", {
            get: function() {
              return {};
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t, "strings", {
            get: function() {
              return {};
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t, "numbers", {
            get: function() {
              return {};
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t, "defaultAdapter", {
            get: function() {
              return {};
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.init = function() {}),
          (t.prototype.destroy = function() {}),
          t
        );
      })();
    },
    ,
    ,
    ,
    function(t, e, n) {
      "use strict";
      var i = document.createElement("template");
      i.setAttribute("style", "display: none;"),
        (i.innerHTML =
          "<dom-module id=\"paper-spinner-styles\">\n  <template>\n    <style>\n      /*\n      /**************************/\n      /* STYLES FOR THE SPINNER */\n      /**************************/\n\n      /*\n       * Constants:\n       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)\n       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)\n       *      ARCSTARTROT = 216 degrees (how much the start location of the arc\n       *                                should rotate each time, 216 gives us a\n       *                                5 pointed star shape (it's 360/5 * 3).\n       *                                For a 7 pointed star, we might do\n       *                                360/7 * 3 = 154.286)\n       *      SHRINK_TIME = 400ms\n       */\n\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 28px;\n        height: 28px;\n\n        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */\n        --paper-spinner-container-rotation-duration: 1568ms;\n\n        /* ARCTIME */\n        --paper-spinner-expand-contract-duration: 1333ms;\n\n        /* 4 * ARCTIME */\n        --paper-spinner-full-cycle-duration: 5332ms;\n\n        /* SHRINK_TIME */\n        --paper-spinner-cooldown-duration: 400ms;\n      }\n\n      #spinnerContainer {\n        width: 100%;\n        height: 100%;\n\n        /* The spinner does not have any contents that would have to be\n         * flipped if the direction changes. Always use ltr so that the\n         * style works out correctly in both cases. */\n        direction: ltr;\n      }\n\n      #spinnerContainer.active {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n      }\n\n      @-webkit-keyframes container-rotate {\n        to { -webkit-transform: rotate(360deg) }\n      }\n\n      @keyframes container-rotate {\n        to { transform: rotate(360deg) }\n      }\n\n      .spinner-layer {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        white-space: nowrap;\n        color: var(--paper-spinner-color, var(--google-blue-500));\n      }\n\n      .layer-1 {\n        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));\n      }\n\n      .layer-2 {\n        color: var(--paper-spinner-layer-2-color, var(--google-red-500));\n      }\n\n      .layer-3 {\n        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));\n      }\n\n      .layer-4 {\n        color: var(--paper-spinner-layer-4-color, var(--google-green-500));\n      }\n\n      /**\n       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):\n       *\n       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't\n       * guarantee that the animation will start _exactly_ after that value. So we avoid using\n       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it\n       * seems).\n       */\n      .active .spinner-layer {\n        -webkit-animation-name: fill-unfill-rotate;\n        -webkit-animation-duration: var(--paper-spinner-full-cycle-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-name: fill-unfill-rotate;\n        animation-duration: var(--paper-spinner-full-cycle-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n        opacity: 1;\n      }\n\n      .active .spinner-layer.layer-1 {\n        -webkit-animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-2 {\n        -webkit-animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-3 {\n        -webkit-animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-4 {\n        -webkit-animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n      }\n\n      @-webkit-keyframes fill-unfill-rotate {\n        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @keyframes fill-unfill-rotate {\n        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @-webkit-keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @-webkit-keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      .circle-clipper {\n        display: inline-block;\n        position: relative;\n        width: 50%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      /**\n       * Patch the gap that appear between the two adjacent div.circle-clipper while the\n       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).\n       */\n      .spinner-layer::after {\n        content: '';\n        left: 45%;\n        width: 10%;\n        border-top-style: solid;\n      }\n\n      .spinner-layer::after,\n      .circle-clipper .circle {\n        box-sizing: border-box;\n        position: absolute;\n        top: 0;\n        border-width: var(--paper-spinner-stroke-width, 3px);\n        border-radius: 50%;\n      }\n\n      .circle-clipper .circle {\n        bottom: 0;\n        width: 200%;\n        border-style: solid;\n        border-bottom-color: transparent !important;\n      }\n\n      .circle-clipper.left .circle {\n        left: 0;\n        border-right-color: transparent !important;\n        -webkit-transform: rotate(129deg);\n        transform: rotate(129deg);\n      }\n\n      .circle-clipper.right .circle {\n        left: -100%;\n        border-left-color: transparent !important;\n        -webkit-transform: rotate(-129deg);\n        transform: rotate(-129deg);\n      }\n\n      .active .gap-patch::after,\n      .active .circle-clipper .circle {\n        -webkit-animation-duration: var(--paper-spinner-expand-contract-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-duration: var(--paper-spinner-expand-contract-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n      }\n\n      .active .circle-clipper.left .circle {\n        -webkit-animation-name: left-spin;\n        animation-name: left-spin;\n      }\n\n      .active .circle-clipper.right .circle {\n        -webkit-animation-name: right-spin;\n        animation-name: right-spin;\n      }\n\n      @-webkit-keyframes left-spin {\n        0% { -webkit-transform: rotate(130deg) }\n        50% { -webkit-transform: rotate(-5deg) }\n        to { -webkit-transform: rotate(130deg) }\n      }\n\n      @keyframes left-spin {\n        0% { transform: rotate(130deg) }\n        50% { transform: rotate(-5deg) }\n        to { transform: rotate(130deg) }\n      }\n\n      @-webkit-keyframes right-spin {\n        0% { -webkit-transform: rotate(-130deg) }\n        50% { -webkit-transform: rotate(5deg) }\n        to { -webkit-transform: rotate(-130deg) }\n      }\n\n      @keyframes right-spin {\n        0% { transform: rotate(-130deg) }\n        50% { transform: rotate(5deg) }\n        to { transform: rotate(-130deg) }\n      }\n\n      #spinnerContainer.cooldown {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n      }\n\n      @-webkit-keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n    </style>\n  </template>\n</dom-module>"),
        document.head.appendChild(i.content);
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      });
      n(4);
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
        __computeContainerClasses: function(t, e) {
          return [t || e ? "active" : "", e ? "cooldown" : ""].join(" ");
        },
        __activeChanged: function(t, e) {
          this.__setAriaHidden(!t), (this.__coolingDown = !t && e);
        },
        __altChanged: function(t) {
          "loading" === t
            ? (this.alt = this.getAttribute("aria-label") || t)
            : (this.__setAriaHidden("" === t),
              this.setAttribute("aria-label", t));
        },
        __setAriaHidden: function(t) {
          t
            ? this.setAttribute("aria-hidden", "true")
            : this.removeAttribute("aria-hidden");
        },
        __reset: function() {
          (this.active = !1), (this.__coolingDown = !1);
        }
      };
    },
    function(t, e, n) {
      "use strict";
      n(4), n(12);
      var i = n(7),
        o = n(8),
        r = n(6),
        a = n(111);
      function s() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
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
            return t;
          }),
          t
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
          var t = this.header;
          if (this.isAttached && t) {
            this.$.wrapper.classList.remove("initializing"),
              (t.scrollTarget = this.hasScrollingRegion
                ? this.$.contentContainer
                : this.ownerDocument.documentElement);
            var e = t.offsetHeight;
            this.hasScrollingRegion
              ? ((t.style.left = ""), (t.style.right = ""))
              : requestAnimationFrame(
                  function() {
                    var e = this.getBoundingClientRect(),
                      n = document.documentElement.clientWidth - e.right;
                    (t.style.left = e.left + "px"), (t.style.right = n + "px");
                  }.bind(this)
                );
            var n = this.$.contentContainer.style;
            t.fixed && !t.condenses && this.hasScrollingRegion
              ? ((n.marginTop = e + "px"), (n.paddingTop = ""))
              : ((n.paddingTop = e + "px"), (n.marginTop = ""));
          }
        }
      });
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return l;
      });
      n(4);
      var i = n(84),
        o = n(8),
        r = n(28),
        a = n(32),
        s = n(33),
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
            _appResetLayoutHandler: function(t) {
              Object(o.a)(t).path[0] !== this &&
                (this.resetLayout(), t.stopPropagation());
            },
            _updateLayoutStates: function() {
              console.error("unimplemented");
            },
            resetLayout: function() {
              var t = this._updateLayoutStates.bind(this);
              (this._layoutDebouncer = a.a.debounce(
                this._layoutDebouncer,
                r.a,
                t
              )),
                Object(s.a)(this._layoutDebouncer),
                this._notifyDescendantResize();
            },
            _notifyLayoutChanged: function() {
              var t = this;
              requestAnimationFrame(function() {
                t.fire("app-reset-layout");
              });
            },
            _notifyDescendantResize: function() {
              this.isAttached &&
                this._interestedResizables.forEach(function(t) {
                  this.resizerShouldNotify(t) && this._notifyDescendant(t);
                }, this);
            }
          }
        ];
    },
    function(t, e, n) {
      "use strict";
      n(4), n(12);
      var i = n(45),
        o = n(25),
        r = n(81),
        a = n(7),
        s = n(8),
        l = n(6);
      function c() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center;\n        @apply --layout-center-justified;\n        @apply --layout-flex-auto;\n\n        position: relative;\n        padding: 0 12px;\n        overflow: hidden;\n        cursor: pointer;\n        vertical-align: middle;\n\n        @apply --paper-font-common-base;\n        @apply --paper-tab;\n      }\n\n      :host(:focus) {\n        outline: none;\n      }\n\n      :host([link]) {\n        padding: 0;\n      }\n\n      .tab-content {\n        height: 100%;\n        transform: translateZ(0);\n          -webkit-transform: translateZ(0);\n        transition: opacity 0.1s cubic-bezier(0.4, 0.0, 1, 1);\n        @apply --layout-horizontal;\n        @apply --layout-center-center;\n        @apply --layout-flex-auto;\n        @apply --paper-tab-content;\n      }\n\n      :host(:not(.iron-selected)) > .tab-content {\n        opacity: 0.8;\n\n        @apply --paper-tab-content-unselected;\n      }\n\n      :host(:focus) .tab-content {\n        opacity: 1;\n        font-weight: 700;\n\n        @apply --paper-tab-content-focused;\n      }\n\n      paper-ripple {\n        color: var(--paper-tab-ink, var(--paper-yellow-a100));\n      }\n\n      .tab-content > ::slotted(a) {\n        @apply --layout-flex-auto;\n\n        height: 100%;\n      }\n    </style>\n\n    <div class="tab-content">\n      <slot></slot>\n    </div>\n'
        ]);
        return (
          (c = function() {
            return t;
          }),
          t
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
          var t = Object(s.a)(this).parentNode;
          return !!t && !!t.noink;
        },
        _updateNoink: function() {
          this.noink = !!this.noink || !!this._parentNoink;
        },
        _onTap: function(t) {
          if (this.link) {
            var e = this.queryEffectiveChildren("a");
            if (!e) return;
            if (t.target === e) return;
            e.click();
          }
        }
      });
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "b", function() {
        return o;
      }),
        n.d(e, "a", function() {
          return r;
        });
      n(4);
      var i = n(92),
        o = {
          hostAttributes: { role: "menubar" },
          keyBindings: { left: "_onLeftKey", right: "_onRightKey" },
          _onUpKey: function(t) {
            this.focusedItem.click(), t.detail.keyboardEvent.preventDefault();
          },
          _onDownKey: function(t) {
            this.focusedItem.click(), t.detail.keyboardEvent.preventDefault();
          },
          get _isRTL() {
            return "rtl" === window.getComputedStyle(this).direction;
          },
          _onLeftKey: function(t) {
            this._isRTL ? this._focusNext() : this._focusPrevious(),
              t.detail.keyboardEvent.preventDefault();
          },
          _onRightKey: function(t) {
            this._isRTL ? this._focusPrevious() : this._focusNext(),
              t.detail.keyboardEvent.preventDefault();
          },
          _onKeydown: function(t) {
            this.keyboardEventMatchesKeys(t, "up down left right esc") ||
              this._focusWithKeyboardEvent(t);
          }
        },
        r = [i.a, o];
    },
    ,
    function(t, e, n) {
      "use strict";
      n(4), n(13), n(12);
      var i = n(129),
        o = n(7),
        r = n(6),
        a = n(78);
      function s() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
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
            return t;
          }),
          t
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
                var t = parseFloat(
                    this.getComputedStyleValue(
                      "--calculated-paper-radio-button-size"
                    ).trim()
                  ),
                  e = Math.floor(3 * t);
                e % 2 != t % 2 && e++,
                  this.updateStyles({
                    "--paper-radio-button-ink-size": e + "px"
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
    ,
    ,
    ,
    function(t, e, n) {
      "use strict";
      n(4);
      var i = n(26),
        o = n(25),
        r = n(70),
        a = n(72),
        s = n(7),
        l = n(8),
        c = n(6);
      function d() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n    <style>\n      :host {\n        position: fixed;\n      }\n\n      #contentWrapper ::slotted(*) {\n        overflow: auto;\n      }\n\n      #contentWrapper.animating ::slotted(*) {\n        overflow: hidden;\n        pointer-events: none;\n      }\n    </style>\n\n    <div id="contentWrapper">\n      <slot id="content" name="dropdown-content"></slot>\n    </div>\n'
        ]);
        return (
          (d = function() {
            return t;
          }),
          t
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
            var t = Object(l.a)(this.$.content).getDistributedNodes(),
              e = 0,
              n = t.length;
            e < n;
            e++
          )
            if (t[e].nodeType === Node.ELEMENT_NODE) return t[e];
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
            var t = this.containedElement,
              e = []
                .concat(this.openAnimationConfig || [])
                .concat(this.closeAnimationConfig || []),
              n = 0;
            n < e.length;
            n++
          )
            e[n].node = t;
          this.animationConfig = {
            open: this.openAnimationConfig,
            close: this.closeAnimationConfig
          };
        },
        _updateOverlayPosition: function() {
          this.isAttached && this.notifyResize();
        },
        _allowOutsideScrollChanged: function(t) {
          this._readied &&
            (t
              ? (this.scrollAction && "lock" !== this.scrollAction) ||
                (this.scrollAction = "refit")
              : (this.scrollAction = "lock"));
        },
        _applyFocus: function() {
          var t = this.focusTarget || this.containedElement;
          t && this.opened && !this.noAutoFocus
            ? t.focus()
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
        timingFromConfig: function(t) {
          if (t.timing)
            for (var e in t.timing) this.animationTiming[e] = t.timing[e];
          return this.animationTiming;
        },
        setPrefixedProperty: function(t, e, n) {
          for (
            var i,
              o = {
                transform: ["webkitTransform"],
                transformOrigin: ["mozTransformOrigin", "webkitTransformOrigin"]
              }[e],
              r = 0;
            (i = o[r]);
            r++
          )
            t.style[i] = n;
          t.style[e] = n;
        },
        complete: function(t) {}
      };
      Object(s.a)({
        is: "fade-in-animation",
        behaviors: [u],
        configure: function(t) {
          var e = t.node;
          return (
            (this._effect = new KeyframeEffect(
              e,
              [{ opacity: "0" }, { opacity: "1" }],
              this.timingFromConfig(t)
            )),
            this._effect
          );
        }
      }),
        Object(s.a)({
          is: "fade-out-animation",
          behaviors: [u],
          configure: function(t) {
            var e = t.node;
            return (
              (this._effect = new KeyframeEffect(
                e,
                [{ opacity: "1" }, { opacity: "0" }],
                this.timingFromConfig(t)
              )),
              this._effect
            );
          }
        });
      n(13), n(35);
      function p() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n\n        @apply --paper-menu-button;\n      }\n\n      :host([disabled]) {\n        cursor: auto;\n        color: var(--disabled-text-color);\n\n        @apply --paper-menu-button-disabled;\n      }\n\n      iron-dropdown {\n        @apply --paper-menu-button-dropdown;\n      }\n\n      .dropdown-content {\n        @apply --shadow-elevation-2dp;\n\n        position: relative;\n        border-radius: 2px;\n        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));\n\n        @apply --paper-menu-button-content;\n      }\n\n      :host([vertical-align="top"]) .dropdown-content {\n        margin-bottom: 20px;\n        margin-top: -10px;\n        top: 10px;\n      }\n\n      :host([vertical-align="bottom"]) .dropdown-content {\n        bottom: 10px;\n        margin-bottom: -10px;\n        margin-top: 20px;\n      }\n\n      #trigger {\n        cursor: pointer;\n      }\n    </style>\n\n    <div id="trigger" on-tap="toggle">\n      <slot name="dropdown-trigger"></slot>\n    </div>\n\n    <iron-dropdown id="dropdown" opened="{{opened}}" horizontal-align="[[horizontalAlign]]" vertical-align="[[verticalAlign]]" dynamic-align="[[dynamicAlign]]" horizontal-offset="[[horizontalOffset]]" vertical-offset="[[verticalOffset]]" no-overlap="[[noOverlap]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]" no-animations="[[noAnimations]]" focus-target="[[_dropdownContent]]" allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]" on-iron-overlay-canceled="__onIronOverlayCanceled">\n      <div slot="dropdown-content" class="dropdown-content">\n        <slot id="content" name="dropdown-content"></slot>\n      </div>\n    </iron-dropdown>\n'
        ]);
        return (
          (p = function() {
            return t;
          }),
          t
        );
      }
      Object(s.a)({
        is: "paper-menu-grow-height-animation",
        behaviors: [u],
        configure: function(t) {
          var e = t.node,
            n = e.getBoundingClientRect().height;
          return (
            (this._effect = new KeyframeEffect(
              e,
              [{ height: n / 2 + "px" }, { height: n + "px" }],
              this.timingFromConfig(t)
            )),
            this._effect
          );
        }
      }),
        Object(s.a)({
          is: "paper-menu-grow-width-animation",
          behaviors: [u],
          configure: function(t) {
            var e = t.node,
              n = e.getBoundingClientRect().width;
            return (
              (this._effect = new KeyframeEffect(
                e,
                [{ width: n / 2 + "px" }, { width: n + "px" }],
                this.timingFromConfig(t)
              )),
              this._effect
            );
          }
        }),
        Object(s.a)({
          is: "paper-menu-shrink-width-animation",
          behaviors: [u],
          configure: function(t) {
            var e = t.node,
              n = e.getBoundingClientRect().width;
            return (
              (this._effect = new KeyframeEffect(
                e,
                [{ width: n + "px" }, { width: n - n / 20 + "px" }],
                this.timingFromConfig(t)
              )),
              this._effect
            );
          }
        }),
        Object(s.a)({
          is: "paper-menu-shrink-height-animation",
          behaviors: [u],
          configure: function(t) {
            var e = t.node,
              n = e.getBoundingClientRect().height;
            return (
              this.setPrefixedProperty(e, "transformOrigin", "0 0"),
              (this._effect = new KeyframeEffect(
                e,
                [
                  { height: n + "px", transform: "translateY(0)" },
                  {
                    height: n / 2 + "px",
                    transform: "translateY(-20px)"
                  }
                ],
                this.timingFromConfig(t)
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
              var t = Object(l.a)(this.$.content).getDistributedNodes(),
                e = 0,
                n = t.length;
              e < n;
              e++
            )
              if (t[e].nodeType === Node.ELEMENT_NODE) return t[e];
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
          _onIronSelect: function(t) {
            this.ignoreSelect || this.close();
          },
          _onIronActivate: function(t) {
            this.closeOnActivate && this.close();
          },
          _openedChanged: function(t, e) {
            t
              ? ((this._dropdownContent = this.contentElement),
                this.fire("paper-dropdown-open"))
              : null != e && this.fire("paper-dropdown-close");
          },
          _disabledChanged: function(t) {
            o.a._disabledChanged.apply(this, arguments),
              t && this.opened && this.close();
          },
          __onIronOverlayCanceled: function(t) {
            var e = t.detail,
              n = this.$.trigger;
            Object(l.a)(e).path.indexOf(n) > -1 && t.preventDefault();
          }
        });
      Object.keys(h).forEach(function(t) {
        f[t] = h[t];
      });
    },
    function(t, e, n) {
      "use strict";
      n(4), n(12);
      var i = n(7),
        o = n(8),
        r = n(6),
        a = n(111);
      function s(t) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
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
          _scrollTargetChanged: function(t, e) {
            if (
              (this._oldScrollTarget &&
                (this._toggleScrollListener(!1, this._oldScrollTarget),
                (this._oldScrollTarget = null)),
              e)
            )
              if ("document" === t) this.scrollTarget = this._doc;
              else if ("string" == typeof t) {
                var n = this.domHost;
                this.scrollTarget =
                  n && n.$
                    ? n.$[t]
                    : Object(o.a)(this.ownerDocument).querySelector("#" + t);
              } else
                this._isValidScrollTarget() &&
                  ((this._oldScrollTarget = t),
                  this._toggleScrollListener(this._shouldHaveListener, t));
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
          set _scrollTop(t) {
            this.scrollTarget === this._doc
              ? window.scrollTo(window.pageXOffset, t)
              : this._isValidScrollTarget() &&
                (this.scrollTarget.scrollTop = t);
          },
          set _scrollLeft(t) {
            this.scrollTarget === this._doc
              ? window.scrollTo(t, window.pageYOffset)
              : this._isValidScrollTarget() &&
                (this.scrollTarget.scrollLeft = t);
          },
          scroll: function(t, e) {
            var n;
            "object" === s(t) ? ((n = t.left), (e = t.top)) : (n = t),
              (n = n || 0),
              (e = e || 0),
              this.scrollTarget === this._doc
                ? window.scrollTo(n, e)
                : this._isValidScrollTarget() &&
                  ((this.scrollTarget.scrollLeft = n),
                  (this.scrollTarget.scrollTop = e));
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
          _toggleScrollListener: function(t, e) {
            var n = e === this._doc ? window : e;
            t
              ? this._boundScrollHandler ||
                ((this._boundScrollHandler = this._scrollHandler.bind(this)),
                n.addEventListener("scroll", this._boundScrollHandler))
              : this._boundScrollHandler &&
                (n.removeEventListener("scroll", this._boundScrollHandler),
                (this._boundScrollHandler = null));
          },
          toggleScrollListener: function(t) {
            (this._shouldHaveListener = t),
              this._toggleScrollListener(t, this.scrollTarget);
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
            _updateScrollState: function(t) {},
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
            createEffect: function(t, e) {
              var n = c[t];
              if (!n) throw new ReferenceError(this._getUndefinedMsg(t));
              var i = this._boundEffect(n, e || {});
              return i.setUp(), i;
            },
            _effectsChanged: function(t, e, n) {
              this._tearDownEffects(),
                t &&
                  n &&
                  (t.split(" ").forEach(function(t) {
                    var n;
                    "" !== t &&
                      ((n = c[t])
                        ? this._effects.push(this._boundEffect(n, e[t]))
                        : console.warn(this._getUndefinedMsg(t)));
                  }, this),
                  this._setUpEffect());
            },
            _layoutIfDirty: function() {
              return this.offsetWidth;
            },
            _boundEffect: function(t, e) {
              e = e || {};
              var n = parseFloat(e.startsAt || 0),
                i = parseFloat(e.endsAt || 1),
                o = i - n,
                r = function() {},
                a =
                  0 === n && 1 === i
                    ? t.run
                    : function(e, i) {
                        t.run.call(this, Math.max(0, (e - n) / o), i);
                      };
              return {
                setUp: t.setUp ? t.setUp.bind(this, e) : r,
                run: t.run ? a.bind(this) : r,
                tearDown: t.tearDown ? t.tearDown.bind(this) : r
              };
            },
            _setUpEffect: function() {
              this.isAttached &&
                this._effects &&
                ((this._effectsRunFn = []),
                this._effects.forEach(function(t) {
                  !1 !== t.setUp() && this._effectsRunFn.push(t.run);
                }, this));
            },
            _tearDownEffects: function() {
              this._effects &&
                this._effects.forEach(function(t) {
                  t.tearDown();
                }),
                (this._effectsRunFn = []),
                (this._effects = []);
            },
            _runEffects: function(t, e) {
              this._effectsRunFn &&
                this._effectsRunFn.forEach(function(n) {
                  n(t, e);
                });
            },
            _scrollHandler: function() {
              this._scrollStateChanged();
            },
            _scrollStateChanged: function() {
              if (!this.disabled) {
                var t = this._clampedScrollTop;
                this._updateScrollState(t),
                  this.threshold > 0 &&
                    this._setThresholdTriggered(t >= this.threshold);
              }
            },
            _getDOMRef: function(t) {
              console.warn("_getDOMRef", "`" + t + "` is undefined");
            },
            _getUndefinedMsg: function(t) {
              return (
                "Scroll effect `" +
                t +
                "` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/" +
                t +
                ".html ?"
              );
            }
          }
        ];
      function u() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n    <style>\n      :host {\n        position: relative;\n        display: block;\n        transition-timing-function: linear;\n        transition-property: -webkit-transform;\n        transition-property: transform;\n      }\n\n      :host::before {\n        position: absolute;\n        right: 0px;\n        bottom: -5px;\n        left: 0px;\n        width: 100%;\n        height: 5px;\n        content: "";\n        transition: opacity 0.4s;\n        pointer-events: none;\n        opacity: 0;\n        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);\n        will-change: opacity;\n        @apply --app-header-shadow;\n      }\n\n      :host([shadow])::before {\n        opacity: 1;\n      }\n\n      #background {\n        @apply --layout-fit;\n        overflow: hidden;\n      }\n\n      #backgroundFrontLayer,\n      #backgroundRearLayer {\n        @apply --layout-fit;\n        height: 100%;\n        pointer-events: none;\n        background-size: cover;\n      }\n\n      #backgroundFrontLayer {\n        @apply --app-header-background-front-layer;\n      }\n\n      #backgroundRearLayer {\n        opacity: 0;\n        @apply --app-header-background-rear-layer;\n      }\n\n      #contentContainer {\n        position: relative;\n        width: 100%;\n        height: 100%;\n      }\n\n      :host([disabled]),\n      :host([disabled])::after,\n      :host([disabled]) #backgroundFrontLayer,\n      :host([disabled]) #backgroundRearLayer,\n      /* Silent scrolling should not run CSS transitions */\n      :host([silent-scroll]),\n      :host([silent-scroll])::after,\n      :host([silent-scroll]) #backgroundFrontLayer,\n      :host([silent-scroll]) #backgroundRearLayer {\n        transition: none !important;\n      }\n\n      :host([disabled]) ::slotted(app-toolbar:first-of-type),\n      :host([disabled]) ::slotted([sticky]),\n      /* Silent scrolling should not run CSS transitions */\n      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),\n      :host([silent-scroll]) ::slotted([sticky]) {\n        transition: none !important;\n      }\n\n    </style>\n    <div id="contentContainer">\n      <slot id="slot"></slot>\n    </div>\n'
        ]);
        return (
          (u = function() {
            return t;
          }),
          t
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
            var t, e = Object(o.a)(this.$.slot).getDistributedNodes(), n = 0;
            (t = e[n]);
            n++
          )
            if (t.nodeType === Node.ELEMENT_NODE) {
              if (t.hasAttribute("sticky")) {
                this._stickyElRef = t;
                break;
              }
              this._stickyElRef || (this._stickyElRef = t);
            }
          return this._stickyElRef;
        },
        _configChanged: function() {
          this.resetLayout(), this._notifyLayoutChanged();
        },
        _updateLayoutStates: function() {
          if (0 !== this.offsetWidth || 0 !== this.offsetHeight) {
            var t = this._clampedScrollTop,
              e = 0 === this._height || 0 === t,
              n = this.disabled;
            (this._height = this.offsetHeight),
              (this._stickyElRef = null),
              (this.disabled = !0),
              e || this._updateScrollState(0, !0),
              this._mayMove()
                ? (this._dHeight = this._stickyEl
                    ? this._height - this._stickyEl.offsetHeight
                    : 0)
                : (this._dHeight = 0),
              (this._stickyElTop = this._stickyEl
                ? this._stickyEl.offsetTop
                : 0),
              this._setUpEffect(),
              e
                ? this._updateScrollState(t, !0)
                : (this._updateScrollState(this._lastScrollTop, !0),
                  this._layoutIfDirty()),
              (this.disabled = n);
          }
        },
        _updateScrollState: function(t, e) {
          if (0 !== this._height) {
            var n = 0,
              i = 0,
              o = this._top,
              r = (this._lastScrollTop, this._maxHeaderTop),
              a = t - this._lastScrollTop,
              s = Math.abs(a),
              l = t > this._lastScrollTop,
              c = performance.now();
            if (
              (this._mayMove() &&
                (i = this._clamp(this.reveals ? o + a : t, 0, r)),
              t >= this._dHeight &&
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
                  ((this._initScrollTop = t), (this._initTimestamp = c)),
                t >= r))
            )
              if (Math.abs(this._initScrollTop - t) > 30 || s > 10) {
                l && t >= r
                  ? (i = r)
                  : !l &&
                    t >= this._dHeight &&
                    (i = this.condenses && !this.fixed ? this._dHeight : 0);
                var d = a / (c - this._lastTimestamp);
                this.style.transitionDuration =
                  this._clamp((i - o) / d, 0, 300) + "ms";
              } else i = this._top;
            (n = 0 === this._dHeight ? (t > 0 ? 1 : 0) : i / this._dHeight),
              e ||
                ((this._lastScrollTop = t),
                (this._top = i),
                (this._wasScrollingDown = l),
                (this._lastTimestamp = c)),
              (e || n !== this._progress || o !== i || 0 === t) &&
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
        _transformHeader: function(t) {
          this.translate3d(0, -t + "px", 0),
            this._stickyEl &&
              this.translate3d(
                0,
                this.condenses && t >= this._stickyElTop
                  ? Math.min(t, this._dHeight) - this._stickyElTop + "px"
                  : 0,
                0,
                this._stickyEl
              );
        },
        _clamp: function(t, e, n) {
          return Math.min(n, Math.max(e, t));
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
        _getDOMRef: function(t) {
          switch (t) {
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
    function(t, e, n) {
      "use strict";
      n(4);
      var i = n(85),
        o = n(65),
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
          _getValidity: function(t) {
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
        s = n(80),
        l = n(81);
      n.d(e, "a", function() {
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
    function(t, e, n) {
      "use strict";
      n(12), n(101), n(13), n(35), n(30);
    },
    function(t, e, n) {
      "use strict";
      function i(t, e) {
        try {
          var n = t();
        } catch (t) {
          return e(t);
        }
        return n && n.then ? n.then(void 0, e) : n;
      }
      n.d(e, "a", function() {
        return u;
      }),
        "undefined" != typeof Symbol &&
          (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
        "undefined" != typeof Symbol &&
          (Symbol.asyncIterator ||
            (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
      function o(t) {
        return { type: "unsubscribe_events", subscription: t };
      }
      var r = function(t, e) {
        (this.options = e),
          (this.commandId = 1),
          (this.commands = new Map()),
          (this.eventListeners = new Map()),
          (this.closeRequested = !1),
          this.setSocket(t);
      };
      (r.prototype.setSocket = function(t) {
        var e = this,
          n = this.socket;
        if (
          ((this.socket = t),
          t.addEventListener("message", function(t) {
            return e._handleMessage(t);
          }),
          t.addEventListener("close", function(t) {
            return e._handleClose(t);
          }),
          n)
        ) {
          var i = this.commands;
          (this.commandId = 1),
            (this.commands = new Map()),
            i.forEach(function(t) {
              "subscribe" in t &&
                t.subscribe().then(function(e) {
                  (t.unsubscribe = e), t.resolve();
                });
            }),
            this.fireEvent("ready");
        }
      }),
        (r.prototype.addEventListener = function(t, e) {
          var n = this.eventListeners.get(t);
          n || this.eventListeners.set(t, (n = [])), n.push(e);
        }),
        (r.prototype.removeEventListener = function(t, e) {
          var n = this.eventListeners.get(t);
          if (n) {
            var i = n.indexOf(e);
            -1 !== i && n.splice(i, 1);
          }
        }),
        (r.prototype.fireEvent = function(t, e) {
          var n = this;
          (this.eventListeners.get(t) || []).forEach(function(t) {
            return t(n, e);
          });
        }),
        (r.prototype.close = function() {
          (this.closeRequested = !0), this.socket.close();
        }),
        (r.prototype.subscribeEvents = function(t, e) {
          try {
            return this.subscribeMessage(
              t,
              (function(t) {
                var e = { type: "subscribe_events" };
                return t && (e.event_type = t), e;
              })(e)
            );
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (r.prototype.ping = function() {
          return this.sendMessagePromise({ type: "ping" });
        }),
        (r.prototype.sendMessage = function(t, e) {
          e || (e = this._genCmdId()),
            (t.id = e),
            this.socket.send(JSON.stringify(t));
        }),
        (r.prototype.sendMessagePromise = function(t) {
          var e = this;
          return new Promise(function(n, i) {
            var o = e._genCmdId();
            e.commands.set(o, { resolve: n, reject: i }), e.sendMessage(t, o);
          });
        }),
        (r.prototype.subscribeMessage = function(t, e) {
          try {
            var n,
              i = this,
              r = i._genCmdId();
            return Promise.resolve(
              new Promise(function(a, s) {
                (n = {
                  resolve: a,
                  reject: s,
                  callback: t,
                  subscribe: function() {
                    return i.subscribeMessage(t, e);
                  },
                  unsubscribe: function() {
                    try {
                      return Promise.resolve(i.sendMessagePromise(o(r))).then(
                        function() {
                          i.commands.delete(r);
                        }
                      );
                    } catch (t) {
                      return Promise.reject(t);
                    }
                  }
                }),
                  i.commands.set(r, n);
                try {
                  i.sendMessage(e, r);
                } catch (t) {}
              })
            ).then(function() {
              return function() {
                return n.unsubscribe();
              };
            });
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (r.prototype._handleMessage = function(t) {
          var e = JSON.parse(t.data),
            n = this.commands.get(e.id);
          switch (e.type) {
            case "event":
              n
                ? n.callback(e.event)
                : (console.warn(
                    "Received event for unknown subscription " +
                      e.id +
                      ". Unsubscribing."
                  ),
                  this.sendMessagePromise(o(e.id)));
              break;
            case "result":
              n &&
                (e.success
                  ? (n.resolve(e.result),
                    "subscribe" in n || this.commands.delete(e.id))
                  : (n.reject(e.error), this.commands.delete(e.id)));
              break;
            case "pong":
              n
                ? (n.resolve(), this.commands.delete(e.id))
                : console.warn("Received unknown pong response " + e.id);
          }
        }),
        (r.prototype._handleClose = function(t) {
          var e = this;
          if (
            (this.commands.forEach(function(t) {
              "subscribe" in t ||
                t.reject({
                  type: "result",
                  success: !1,
                  error: { code: 3, message: "Connection lost" }
                });
            }),
            !this.closeRequested)
          ) {
            this.fireEvent("disconnected");
            var n = Object.assign({}, this.options, { setupRetry: 0 });
            !(function t(o) {
              var r = e;
              setTimeout(function() {
                try {
                  var e = i(
                    function() {
                      return Promise.resolve(n.createSocket(n)).then(function(
                        t
                      ) {
                        r.setSocket(t);
                      });
                    },
                    function(e) {
                      2 === e ? r.fireEvent("reconnect-error", e) : t(o + 1);
                    }
                  );
                  return Promise.resolve(
                    e && e.then ? e.then(function() {}) : void 0
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
      var a = function(t, e, n) {
          try {
            var i = "undefined" != typeof location && location;
            if (i && "https:" === i.protocol) {
              var o = document.createElement("a");
              if (
                ((o.href = t),
                "http:" === o.protocol && "localhost" !== o.hostname)
              )
                throw 5;
            }
            var r = new FormData();
            return (
              null !== e && r.append("client_id", e),
              Object.keys(n).forEach(function(t) {
                r.append(t, n[t]);
              }),
              Promise.resolve(
                fetch(t + "/auth/token", {
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
                    (n.hassUrl = t),
                    (n.clientId = e),
                    (n.expires = s(n.expires_in)),
                    n
                  );
                });
              })
            );
          } catch (t) {
            return Promise.reject(t);
          }
        },
        s = function(t) {
          return 1e3 * t + Date.now();
        };
      var l = function(t, e) {
          (this.data = t), (this._saveTokens = e);
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
            var t = this;
            return Promise.resolve(
              a(t.data.hassUrl, t.data.clientId, {
                grant_type: "refresh_token",
                refresh_token: t.data.refresh_token
              })
            ).then(function(e) {
              (e.refresh_token = t.data.refresh_token),
                (t.data = e),
                t._saveTokens && t._saveTokens(e);
            });
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        (l.prototype.revoke = function() {
          try {
            var t = this,
              e = new FormData();
            return (
              e.append("action", "revoke"),
              e.append("token", t.data.refresh_token),
              Promise.resolve(
                fetch(t.data.hassUrl + "/auth/token", {
                  method: "POST",
                  credentials: "same-origin",
                  body: e
                })
              ).then(function() {
                t._saveTokens && t._saveTokens(null);
              })
            );
          } catch (t) {
            return Promise.reject(t);
          }
        }),
        Object.defineProperties(l.prototype, c);
      var d = function(t, e, n, i) {
          if (t[e]) return t[e];
          var o,
            r = 0,
            a = (function(t) {
              var e = [];
              function n(n, i) {
                t = i ? n : Object.assign({}, t, n);
                for (var o = e, r = 0; r < o.length; r++) o[r](t);
              }
              return {
                get state() {
                  return t;
                },
                action: function(e) {
                  function i(t) {
                    n(t, !1);
                  }
                  return function() {
                    for (
                      var n = arguments, o = [t], r = 0;
                      r < arguments.length;
                      r++
                    )
                      o.push(n[r]);
                    var a = e.apply(this, o);
                    if (null != a) return a.then ? a.then(i) : i(a);
                  };
                },
                setState: n,
                subscribe: function(t) {
                  return (
                    e.push(t),
                    function() {
                      !(function(t) {
                        for (var n = [], i = 0; i < e.length; i++)
                          e[i] === t ? (t = null) : n.push(e[i]);
                        e = n;
                      })(t);
                    }
                  );
                }
              };
            })(),
            s = function() {
              return n(t).then(function(t) {
                return a.setState(t, !0);
              });
            },
            l = function() {
              return s().catch(function(e) {
                if (t.socket.readyState == t.socket.OPEN) throw e;
              });
            };
          return (
            (t[e] = {
              get state() {
                return a.state;
              },
              refresh: s,
              subscribe: function(e) {
                1 == ++r &&
                  (i && (o = i(t, a)), t.addEventListener("ready", l), l());
                var n = a.subscribe(e);
                return (
                  void 0 !== a.state &&
                    setTimeout(function() {
                      return e(a.state);
                    }, 0),
                  function() {
                    n(),
                      --r ||
                        (o &&
                          o.then(function(t) {
                            t();
                          }),
                        t.removeEventListener("ready", s));
                  }
                );
              }
            }),
            t[e]
          );
        },
        u = function(t, e, n, i, o) {
          return d(i, t, e, n).subscribe(o);
        };
    },
    function(t, e, n) {
      "use strict";
      n(4), n(46), n(108);
      var i = n(7),
        o = n(6),
        r = n(109);
      function a() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n  <style include="paper-spinner-styles"></style>\n\n  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">\n    <div class="spinner-layer layer-1">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-2">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-3">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-4">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n  </div>\n'
        ]);
        return (
          (a = function() {
            return t;
          }),
          t
        );
      }
      var s = Object(o.a)(a());
      s.setAttribute("strip-whitespace", ""),
        Object(i.a)({ _template: s, is: "paper-spinner", behaviors: [r.a] });
    },
    function(t, e, n) {
      "use strict";
      n(4), n(13);
      var i = n(129),
        o = n(80),
        r = n(7),
        a = n(6),
        s = n(78);
      function l() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
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
            return t;
          }),
          t
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
                var t = this.getComputedStyleValue(
                    "--calculated-paper-checkbox-size"
                  ).trim(),
                  e = "px",
                  n = t.match(/[A-Za-z]+$/);
                null !== n && (e = n[0]);
                var i = parseFloat(t),
                  o = (8 / 3) * i;
                "px" === e && (o = Math.floor(o)) % 2 != i % 2 && o++,
                  this.updateStyles({ "--paper-checkbox-ink-size": o + e });
              }
            });
          },
          _computeCheckboxClass: function(t, e) {
            var n = "";
            return t && (n += "checked "), e && (n += "invalid"), n;
          },
          _computeCheckmarkClass: function(t) {
            return t ? "" : "hidden";
          },
          _createRipple: function() {
            return (
              (this._rippleContainer = this.$.checkboxContainer),
              o.b._createRipple.call(this)
            );
          }
        });
    },
    function(t, e, n) {
      "use strict";
      n(4), n(26), n(115);
      var i = n(113),
        o = n(95),
        r = n(7),
        a = n(6);
      function s() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          "\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host ::slotted(*) {\n        padding: var(--paper-radio-group-item-padding, 12px);\n      }\n    </style>\n\n    <slot></slot>\n"
        ]);
        return (
          (s = function() {
            return t;
          }),
          t
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
        select: function(t) {
          var e = this._valueToItem(t);
          if (!e || !e.hasAttribute("disabled")) {
            if (this.selected) {
              var n = this._valueToItem(this.selected);
              if (this.selected == t) {
                if (!this.allowEmptySelection)
                  return void (n && (n.checked = !0));
                t = "";
              }
              n && (n.checked = !1);
            }
            o.a.select.apply(this, [t]), this.fire("paper-radio-group-changed");
          }
        },
        _activateFocusedItem: function() {
          this._itemActivate(
            this._valueForItem(this.focusedItem),
            this.focusedItem
          );
        },
        _onUpKey: function(t) {
          this._focusPrevious(),
            t.preventDefault(),
            this._activateFocusedItem();
        },
        _onDownKey: function(t) {
          this._focusNext(), t.preventDefault(), this._activateFocusedItem();
        },
        _onLeftKey: function(t) {
          i.b._onLeftKey.apply(this, arguments), this._activateFocusedItem();
        },
        _onRightKey: function(t) {
          i.b._onRightKey.apply(this, arguments), this._activateFocusedItem();
        }
      });
    },
    function(t, e, n) {
      (function(t) {
        var n, i, o, r;
        function a(t) {
          return (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        (r = function() {
          return (function(t) {
            var e = {};
            function n(i) {
              if (e[i]) return e[i].exports;
              var o = (e[i] = { i: i, l: !1, exports: {} });
              return (
                t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
              );
            }
            return (
              (n.m = t),
              (n.c = e),
              (n.d = function(t, e, i) {
                n.o(t, e) ||
                  Object.defineProperty(t, e, { enumerable: !0, get: i });
              }),
              (n.r = function(t) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                  }),
                  Object.defineProperty(t, "__esModule", { value: !0 });
              }),
              (n.t = function(t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && "object" == a(t) && t && t.__esModule) return t;
                var i = Object.create(null);
                if (
                  (n.r(i),
                  Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: t
                  }),
                  2 & e && "string" != typeof t)
                )
                  for (var o in t)
                    n.d(
                      i,
                      o,
                      function(e) {
                        return t[e];
                      }.bind(null, o)
                    );
                return i;
              }),
              (n.n = function(t) {
                var e =
                  t && t.__esModule
                    ? function() {
                        return t.default;
                      }
                    : function() {
                        return t;
                      };
                return n.d(e, "a", e), e;
              }),
              (n.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (n.p = ""),
              n((n.s = 1))
            );
          })([
            function(t, e) {
              t.exports = function(t) {
                return Array.isArray
                  ? Array.isArray(t)
                  : "[object Array]" === Object.prototype.toString.call(t);
              };
            },
            function(t, e, n) {
              function i(t) {
                return (i =
                  "function" == typeof Symbol && "symbol" == a(Symbol.iterator)
                    ? function(t) {
                        return a(t);
                      }
                    : function(t) {
                        return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : a(t);
                      })(t);
              }
              function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var i = e[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i);
                }
              }
              var r = n(2),
                s = n(8),
                l = n(0),
                c = (function() {
                  function t(e, n) {
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
                          ? function(t, e) {
                              return t.score - e.score;
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
                    !(function(t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t),
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
                      this.setCollection(e);
                  }
                  var e, n;
                  return (
                    (e = t),
                    (n = [
                      {
                        key: "setCollection",
                        value: function(t) {
                          return (this.list = t), t;
                        }
                      },
                      {
                        key: "search",
                        value: function(t) {
                          var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : { limit: !1 };
                          this._log(
                            '---------\nSearch pattern: "'.concat(t, '"')
                          );
                          var n = this._prepareSearchers(t),
                            i = n.tokenSearchers,
                            o = n.fullSearcher,
                            r = this._search(i, o),
                            a = r.weights,
                            s = r.results;
                          return (
                            this._computeScore(a, s),
                            this.options.shouldSort && this._sort(s),
                            e.limit &&
                              "number" == typeof e.limit &&
                              (s = s.slice(0, e.limit)),
                            this._format(s)
                          );
                        }
                      },
                      {
                        key: "_prepareSearchers",
                        value: function() {
                          var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            e = [];
                          if (this.options.tokenize)
                            for (
                              var n = t.split(this.options.tokenSeparator),
                                i = 0,
                                o = n.length;
                              i < o;
                              i += 1
                            )
                              e.push(new r(n[i], this.options));
                          return {
                            tokenSearchers: e,
                            fullSearcher: new r(t, this.options)
                          };
                        }
                      },
                      {
                        key: "_search",
                        value: function() {
                          var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            e = arguments.length > 1 ? arguments[1] : void 0,
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
                                  tokenSearchers: t,
                                  fullSearcher: e
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
                                  tokenSearchers: t,
                                  fullSearcher: e
                                }
                              );
                            }
                          return { weights: s, results: o };
                        }
                      },
                      {
                        key: "_analyze",
                        value: function(t, e) {
                          var n = t.key,
                            i = t.arrayIndex,
                            o = void 0 === i ? -1 : i,
                            r = t.value,
                            a = t.record,
                            s = t.index,
                            c = e.tokenSearchers,
                            d = void 0 === c ? [] : c,
                            u = e.fullSearcher,
                            p = void 0 === u ? [] : u,
                            h = e.resultMap,
                            f = void 0 === h ? {} : h,
                            b = e.results,
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
                        value: function(t, e) {
                          this._log("\n\nComputing score:\n");
                          for (var n = 0, i = e.length; n < i; n += 1) {
                            for (
                              var o = e[n].output,
                                r = o.length,
                                a = 1,
                                s = 1,
                                l = 0;
                              l < r;
                              l += 1
                            ) {
                              var c = t ? t[o[l].key].weight : 1,
                                d =
                                  (1 === c ? o[l].score : o[l].score || 0.001) *
                                  c;
                              1 !== c
                                ? (s = Math.min(s, d))
                                : ((o[l].nScore = d), (a *= d));
                            }
                            (e[n].score = 1 === s ? a : s), this._log(e[n]);
                          }
                        }
                      },
                      {
                        key: "_sort",
                        value: function(t) {
                          this._log("\n\nSorting...."),
                            t.sort(this.options.sortFn);
                        }
                      },
                      {
                        key: "_format",
                        value: function(t) {
                          var e = [];
                          if (this.options.verbose) {
                            var n = [];
                            this._log(
                              "\n\nOutput:\n\n",
                              JSON.stringify(t, function(t, e) {
                                if ("object" === i(e) && null !== e) {
                                  if (-1 !== n.indexOf(e)) return;
                                  n.push(e);
                                }
                                return e;
                              })
                            ),
                              (n = null);
                          }
                          var o = [];
                          this.options.includeMatches &&
                            o.push(function(t, e) {
                              var n = t.output;
                              e.matches = [];
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
                                    e.matches.push(a);
                                }
                              }
                            }),
                            this.options.includeScore &&
                              o.push(function(t, e) {
                                e.score = t.score;
                              });
                          for (var r = 0, a = t.length; r < a; r += 1) {
                            var s = t[r];
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
                              e.push(l);
                            } else e.push(s.item);
                          }
                          return e;
                        }
                      },
                      {
                        key: "_log",
                        value: function() {
                          var t;
                          this.options.verbose &&
                            (t = console).log.apply(t, arguments);
                        }
                      }
                    ]) && o(e.prototype, n),
                    t
                  );
                })();
              t.exports = c;
            },
            function(t, e, n) {
              function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var i = e[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i);
                }
              }
              var o = n(3),
                r = n(4),
                a = n(7),
                s = (function() {
                  function t(e, n) {
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
                    !(function(t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t),
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
                        ? e
                        : e.toLowerCase()),
                      this.pattern.length <= u &&
                        (this.patternAlphabet = a(this.pattern));
                  }
                  var e, n;
                  return (
                    (e = t),
                    (n = [
                      {
                        key: "search",
                        value: function(t) {
                          if (
                            (this.options.isCaseSensitive ||
                              (t = t.toLowerCase()),
                            this.pattern === t)
                          )
                            return {
                              isMatch: !0,
                              score: 0,
                              matchedIndices: [[0, t.length - 1]]
                            };
                          var e = this.options,
                            n = e.maxPatternLength,
                            i = e.tokenSeparator;
                          if (this.pattern.length > n)
                            return o(t, this.pattern, i);
                          var a = this.options,
                            s = a.location,
                            l = a.distance,
                            c = a.threshold,
                            d = a.findAllMatches,
                            u = a.minMatchCharLength;
                          return r(t, this.pattern, this.patternAlphabet, {
                            location: s,
                            distance: l,
                            threshold: c,
                            findAllMatches: d,
                            minMatchCharLength: u
                          });
                        }
                      }
                    ]) && i(e.prototype, n),
                    t
                  );
                })();
              t.exports = s;
            },
            function(t, e) {
              var n = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
              t.exports = function(t, e) {
                var i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : / +/g,
                  o = new RegExp(e.replace(n, "\\$&").replace(i, "|")),
                  r = t.match(o),
                  a = !!r,
                  s = [];
                if (a)
                  for (var l = 0, c = r.length; l < c; l += 1) {
                    var d = r[l];
                    s.push([t.indexOf(d), d.length - 1]);
                  }
                return { score: a ? 0.5 : 1, isMatch: a, matchedIndices: s };
              };
            },
            function(t, e, n) {
              var i = n(5),
                o = n(6);
              t.exports = function(t, e, n, r) {
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
                    m = t.length,
                    y = u,
                    g = t.indexOf(e, v),
                    _ = e.length,
                    w = [],
                    x = 0;
                  x < m;
                  x += 1
                )
                  w[x] = 0;
                if (-1 !== g) {
                  var k = i(e, {
                    errors: 0,
                    currentLocation: g,
                    expectedLocation: v,
                    distance: c
                  });
                  if (
                    ((y = Math.min(k, y)), -1 !== (g = t.lastIndexOf(e, v + _)))
                  ) {
                    var S = i(e, {
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
                    i(e, {
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
                      L = n[t.charAt(N)];
                    if (
                      (L && (w[N] = 1),
                      (B[P] = ((B[P + 1] << 1) | 1) & L),
                      0 !== T &&
                        (B[P] |= ((C[P + 1] | C[P]) << 1) | 1 | C[P + 1]),
                      B[P] & E &&
                        (O = i(e, {
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
                    i(e, {
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
            function(t, e) {
              t.exports = function(t, e) {
                var n = e.errors,
                  i = void 0 === n ? 0 : n,
                  o = e.currentLocation,
                  r = void 0 === o ? 0 : o,
                  a = e.expectedLocation,
                  s = void 0 === a ? 0 : a,
                  l = e.distance,
                  c = void 0 === l ? 100 : l,
                  d = i / t.length,
                  u = Math.abs(s - r);
                return c ? d + u / c : u ? 1 : d;
              };
            },
            function(t, e) {
              t.exports = function() {
                for (
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 1,
                    n = [],
                    i = -1,
                    o = -1,
                    r = 0,
                    a = t.length;
                  r < a;
                  r += 1
                ) {
                  var s = t[r];
                  s && -1 === i
                    ? (i = r)
                    : s ||
                      -1 === i ||
                      ((o = r - 1) - i + 1 >= e && n.push([i, o]), (i = -1));
                }
                return t[r - 1] && r - i >= e && n.push([i, r - 1]), n;
              };
            },
            function(t, e) {
              t.exports = function(t) {
                for (var e = {}, n = t.length, i = 0; i < n; i += 1)
                  e[t.charAt(i)] = 0;
                for (var o = 0; o < n; o += 1)
                  e[t.charAt(o)] |= 1 << (n - o - 1);
                return e;
              };
            },
            function(t, e, n) {
              var i = n(0);
              t.exports = function(t, e) {
                return (function t(e, n, o) {
                  if (n) {
                    var r = n.indexOf("."),
                      a = n,
                      s = null;
                    -1 !== r && ((a = n.slice(0, r)), (s = n.slice(r + 1)));
                    var l = e[a];
                    if (null != l)
                      if (s || ("string" != typeof l && "number" != typeof l))
                        if (i(l))
                          for (var c = 0, d = l.length; c < d; c += 1)
                            t(l[c], s, o);
                        else s && t(l, s, o);
                      else o.push(l.toString());
                  } else o.push(e);
                  return o;
                })(t, e, []);
              };
            }
          ]);
        }),
          "object" == a(e) && "object" == a(t)
            ? (t.exports = r())
            : ((i = []),
              void 0 ===
                (o = "function" == typeof (n = r) ? n.apply(e, i) : n) ||
                (t.exports = o));
      }.call(this, n(66)(t)));
    },
    function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return u;
      });
      var i = n(16),
        o = function(t, e) {
          var n = t.startNode.parentNode,
            o = void 0 === e ? t.endNode : e.startNode,
            r = n.insertBefore(Object(i.e)(), o);
          n.insertBefore(Object(i.e)(), o);
          var a = new i.b(t.options);
          return a.insertAfterNode(r), a;
        },
        r = function(t, e) {
          return t.setValue(e), t.commit(), t;
        },
        a = function(t, e, n) {
          var o = t.startNode.parentNode,
            r = n ? n.startNode : t.endNode,
            a = e.endNode.nextSibling;
          a !== r && Object(i.j)(o, e.startNode, a, r);
        },
        s = function(t) {
          Object(i.i)(
            t.startNode.parentNode,
            t.startNode,
            t.endNode.nextSibling
          );
        },
        l = function(t, e, n) {
          for (var i = new Map(), o = e; o <= n; o++) i.set(t[o], o);
          return i;
        },
        c = new WeakMap(),
        d = new WeakMap(),
        u = Object(i.f)(function(t, e, n) {
          var u;
          return (
            void 0 === n ? (n = e) : void 0 !== e && (u = e),
            function(e) {
              if (!(e instanceof i.b))
                throw new Error("repeat can only be used in text bindings");
              var p,
                h,
                f = c.get(e) || [],
                b = d.get(e) || [],
                v = [],
                m = [],
                y = [],
                g = 0,
                _ = !0,
                w = !1,
                x = void 0;
              try {
                for (
                  var k, S = t[Symbol.iterator]();
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
                  (v[T] = r(f[O], m[T])), a(e, f[O], v[T + 1]), O++, T--;
                else if (b[A] === y[E])
                  (v[E] = r(f[A], m[E])), a(e, f[A], f[O]), A--, E++;
                else if (
                  (void 0 === p && ((p = l(y, E, T)), (h = l(b, O, A))),
                  p.has(b[O]))
                )
                  if (p.has(b[A])) {
                    var I = h.get(y[E]),
                      z = void 0 !== I ? f[I] : null;
                    if (null === z) {
                      var j = o(e, f[O]);
                      r(j, m[E]), (v[E] = j);
                    } else (v[E] = r(z, m[E])), a(e, z, f[O]), (f[I] = null);
                    E++;
                  } else s(f[A]), A--;
                else s(f[O]), O++;
              for (; E <= T; ) {
                var R = o(e, v[T + 1]);
                r(R, m[E]), (v[E++] = R);
              }
              for (; O <= A; ) {
                var B = f[O++];
                null !== B && s(B);
              }
              c.set(e, v), d.set(e, y);
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
    function(t, e, n) {
      "use strict";
      n(4), n(12), n(22), n(24), n(46), n(73);
      var i = n(6);
      function o() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '<iron-iconset-svg name="paper-tabs" size="24">\n<svg><defs>\n<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>\n<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>\n</defs></svg>\n</iron-iconset-svg>'
        ]);
        return (
          (o = function() {
            return t;
          }),
          t
        );
      }
      var r = Object(i.a)(o());
      document.head.appendChild(r.content);
      n(112);
      var a = n(92),
        s = n(113),
        l = n(84),
        c = n(7),
        d = n(8);
      function u() {
        var t = (function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
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
            return t;
          }),
          t
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
        _noinkChanged: function(t) {
          Object(d.a)(this)
            .querySelectorAll("paper-tab")
            .forEach(t ? this._setNoinkAttribute : this._removeNoinkAttribute);
        },
        _setNoinkAttribute: function(t) {
          t.setAttribute("noink", "");
        },
        _removeNoinkAttribute: function(t) {
          t.removeAttribute("noink");
        },
        _computeScrollButtonClass: function(t, e, n) {
          return !e || n ? "hidden" : t ? "not-visible" : "";
        },
        _computeTabsContentClass: function(t, e) {
          return t
            ? "scrollable" + (e ? " fit-container" : "")
            : " fit-container";
        },
        _computeSelectionBarClass: function(t, e) {
          return t ? "hidden" : e ? "align-bottom" : "";
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
        _onIronSelect: function(t) {
          this._tabChanged(t.detail.item, this._previousTab),
            (this._previousTab = t.detail.item),
            this.cancelDebouncer("tab-changed");
        },
        _onIronDeselect: function(t) {
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
        _scheduleActivation: function(t, e) {
          (this._pendingActivationItem = t),
            (this._pendingActivationTimeout = this.async(
              this._bindDelayedActivationHandler,
              e
            ));
        },
        _delayedActivationHandler: function() {
          var t = this._pendingActivationItem;
          (this._pendingActivationItem = void 0),
            (this._pendingActivationTimeout = void 0),
            t.fire(this.activateEvent, null, { bubbles: !0, cancelable: !0 });
        },
        _cancelPendingActivation: function() {
          void 0 !== this._pendingActivationTimeout &&
            (this.cancelAsync(this._pendingActivationTimeout),
            (this._pendingActivationItem = void 0),
            (this._pendingActivationTimeout = void 0));
        },
        _onArrowKeyup: function(t) {
          this.autoselect &&
            this._scheduleActivation(this.focusedItem, this.autoselectDelay);
        },
        _onBlurCapture: function(t) {
          t.target === this._pendingActivationItem &&
            this._cancelPendingActivation();
        },
        get _tabContainerScrollSize() {
          return Math.max(
            0,
            this.$.tabsContainer.scrollWidth - this.$.tabsContainer.offsetWidth
          );
        },
        _scroll: function(t, e) {
          if (this.scrollable) {
            var n = (e && -e.ddx) || 0;
            this._affectScroll(n);
          }
        },
        _down: function(t) {
          this.async(function() {
            this._defaultFocusAsync &&
              (this.cancelAsync(this._defaultFocusAsync),
              (this._defaultFocusAsync = null));
          }, 1);
        },
        _affectScroll: function(t) {
          this.$.tabsContainer.scrollLeft += t;
          var e = this.$.tabsContainer.scrollLeft;
          (this._leftHidden = 0 === e),
            (this._rightHidden = e === this._tabContainerScrollSize);
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
        _tabChanged: function(t, e) {
          if (!t)
            return (
              this.$.selectionBar.classList.remove("expand"),
              this.$.selectionBar.classList.remove("contract"),
              void this._positionBar(0, 0)
            );
          var n = this.$.tabsContent.getBoundingClientRect(),
            i = n.width,
            o = t.getBoundingClientRect(),
            r = o.left - n.left;
          if (
            ((this._pos = {
              width: this._calcPercent(o.width, i),
              left: this._calcPercent(r, i)
            }),
            this.noSlide || null == e)
          )
            return (
              this.$.selectionBar.classList.remove("expand"),
              this.$.selectionBar.classList.remove("contract"),
              void this._positionBar(this._pos.width, this._pos.left)
            );
          var a = e.getBoundingClientRect(),
            s = this.items.indexOf(e),
            l = this.items.indexOf(t);
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
        _scrollToSelectedIfNeeded: function(t, e) {
          var n = e - this.$.tabsContainer.scrollLeft;
          n < 0
            ? (this.$.tabsContainer.scrollLeft += n)
            : (n += t - this.$.tabsContainer.offsetWidth) > 0 &&
              (this.$.tabsContainer.scrollLeft += n);
        },
        _calcPercent: function(t, e) {
          return (100 * t) / e;
        },
        _positionBar: function(t, e) {
          (t = t || 0),
            (e = e || 0),
            (this._width = t),
            (this._left = e),
            this.transform(
              "translateX(" + e + "%) scaleX(" + t / 100 + ")",
              this.$.selectionBar
            );
        },
        _onBarTransitionEnd: function(t) {
          var e = this.$.selectionBar.classList;
          e.contains("expand")
            ? (e.remove("expand"),
              e.add("contract"),
              this._positionBar(this._pos.width, this._pos.left))
            : e.contains("contract") && e.remove("contract");
        }
      });
    }
  ]
]);
//# sourceMappingURL=chunk.541d0b76b660d8646074.js.map
