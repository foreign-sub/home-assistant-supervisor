/*! For license information please see chunk.0f20b7eb2535b079dbfe.js.LICENSE */
(self.webpackJsonp = self.webpackJsonp || []).push([
  [0],
  {
    124: function (t, e, r) {
      "use strict";
      var n = r(29),
        c = r(6),
        o = function (t) {
          return function (e, r) {
            if (e.constructor._observers) {
              if (!e.constructor.hasOwnProperty("_observers")) {
                var n = e.constructor._observers;
                (e.constructor._observers = new Map()),
                  n.forEach(function (t, r) {
                    return e.constructor._observers.set(r, t);
                  });
              }
            } else {
              e.constructor._observers = new Map();
              var c = e.updated;
              e.updated = function (t) {
                var e = this;
                c.call(this, t),
                  t.forEach(function (t, r) {
                    var n = e.constructor._observers.get(r);
                    void 0 !== n && n.call(e, e[r], t);
                  });
              };
            }
            e.constructor._observers.set(r, t);
          };
        };
      r(107);
      var i = function () {},
        a = {
          get passive() {
            return !0, !1;
          },
        };
      document.addEventListener("x", i, a),
        document.removeEventListener("x", i);
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
      function s(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function d(t, e) {
        return (d =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function l(t) {
        return function () {
          var e,
            r = f(t);
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
            var n = f(this).constructor;
            e = Reflect.construct(r, arguments, n);
          } else e = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === u(e) || "function" == typeof e)) return e;
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
      var p = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && d(t, e);
        })(i, c["a"]);
        var e,
          r,
          n,
          o = l(i);
        function i() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            o.apply(this, arguments)
          );
        }
        return (
          (e = i),
          (r = [
            {
              key: "createFoundation",
              value: function () {
                void 0 !== this.mdcFoundation && this.mdcFoundation.destroy(),
                  (this.mdcFoundation = new this.mdcFoundationClass(
                    this.createAdapter()
                  )),
                  this.mdcFoundation.init();
              },
            },
            {
              key: "firstUpdated",
              value: function () {
                this.createFoundation();
              },
            },
          ]) && s(e.prototype, r),
          n && s(e, n),
          i
        );
      })();
      function h(t) {
        return (h =
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
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function b(t, e, r) {
        return (b =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, r) {
                var n = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = w(t));

                  );
                  return t;
                })(t, e);
                if (n) {
                  var c = Object.getOwnPropertyDescriptor(n, e);
                  return c.get ? c.get.call(r) : c.value;
                }
              })(t, e, r || t);
      }
      function y(t, e) {
        return (y =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function _(t) {
        return function () {
          var e,
            r = w(t);
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
            var n = w(this).constructor;
            e = Reflect.construct(r, arguments, n);
          } else e = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === h(e) || "function" == typeof e)) return e;
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
      function w(t) {
        return (w = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
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
              e && y(t, e);
          })(o, p);
          var e,
            r,
            n,
            c = _(o);
          function o() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, o),
              c.apply(this, arguments)
            );
          }
          return (
            (e = o),
            (r = [
              {
                key: "createRenderRoot",
                value: function () {
                  return this.attachShadow({
                    mode: "open",
                    delegatesFocus: !0,
                  });
                },
              },
              {
                key: "click",
                value: function () {
                  this.formElement &&
                    (this.formElement.focus(), this.formElement.click());
                },
              },
              {
                key: "setAriaLabel",
                value: function (t) {
                  this.formElement &&
                    this.formElement.setAttribute("aria-label", t);
                },
              },
              {
                key: "firstUpdated",
                value: function () {
                  var t = this;
                  b(w(o.prototype), "firstUpdated", this).call(this),
                    this.mdcRoot.addEventListener("change", function (e) {
                      t.dispatchEvent(new Event("change", e));
                    });
                },
              },
            ]) && m(e.prototype, r),
            n && m(e, n),
            o
          );
        })(),
        g = r(55),
        k = r(108),
        O = {
          CHECKED: "mdc-switch--checked",
          DISABLED: "mdc-switch--disabled",
        },
        j = {
          ARIA_CHECKED_ATTR: "aria-checked",
          NATIVE_CONTROL_SELECTOR: ".mdc-switch__native-control",
          RIPPLE_SURFACE_SELECTOR: ".mdc-switch__thumb-underlay",
        },
        C = (function (t) {
          function e(r) {
            return t.call(this, n.a({}, e.defaultAdapter, r)) || this;
          }
          return (
            n.c(e, t),
            Object.defineProperty(e, "strings", {
              get: function () {
                return j;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e, "cssClasses", {
              get: function () {
                return O;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e, "defaultAdapter", {
              get: function () {
                return {
                  addClass: function () {},
                  removeClass: function () {},
                  setNativeControlChecked: function () {},
                  setNativeControlDisabled: function () {},
                  setNativeControlAttr: function () {},
                };
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.setChecked = function (t) {
              this.adapter_.setNativeControlChecked(t),
                this.updateAriaChecked_(t),
                this.updateCheckedStyling_(t);
            }),
            (e.prototype.setDisabled = function (t) {
              this.adapter_.setNativeControlDisabled(t),
                t
                  ? this.adapter_.addClass(O.DISABLED)
                  : this.adapter_.removeClass(O.DISABLED);
            }),
            (e.prototype.handleChange = function (t) {
              var e = t.target;
              this.updateAriaChecked_(e.checked),
                this.updateCheckedStyling_(e.checked);
            }),
            (e.prototype.updateCheckedStyling_ = function (t) {
              t
                ? this.adapter_.addClass(O.CHECKED)
                : this.adapter_.removeClass(O.CHECKED);
            }),
            (e.prototype.updateAriaChecked_ = function (t) {
              this.adapter_.setNativeControlAttr(j.ARIA_CHECKED_ATTR, "" + !!t);
            }),
            e
          );
        })(k.a);
      function x(t) {
        return (x =
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
      function E() {
        var t = (function (t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '\n      <div class="mdc-switch">\n        <div class="mdc-switch__track"></div>\n        <div class="mdc-switch__thumb-underlay" .ripple="',
          '">\n          <div class="mdc-switch__thumb">\n            <input\n              type="checkbox"\n              id="basic-switch"\n              class="mdc-switch__native-control"\n              role="switch"\n              @change="',
          '">\n          </div>\n        </div>\n      </div>\n      <slot></slot>',
        ]);
        return (
          (E = function () {
            return t;
          }),
          t
        );
      }
      function R(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function S(t, e) {
        return (S =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function P(t) {
        return function () {
          var e,
            r = D(t);
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
            var n = D(this).constructor;
            e = Reflect.construct(r, arguments, n);
          } else e = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === x(e) || "function" == typeof e)) return e;
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
      function D(t) {
        return (D = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var A = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && S(t, e);
        })(i, v);
        var e,
          r,
          n,
          o = P(i);
        function i() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            ((t = o.apply(this, arguments)).checked = !1),
            (t.disabled = !1),
            (t.mdcFoundationClass = C),
            t
          );
        }
        return (
          (e = i),
          (r = [
            {
              key: "_changeHandler",
              value: function (t) {
                this.mdcFoundation.handleChange(t),
                  (this.checked = this.formElement.checked);
              },
            },
            {
              key: "createAdapter",
              value: function () {
                var t,
                  e = this;
                return Object.assign(
                  Object.assign(
                    {},
                    ((t = this.mdcRoot),
                    {
                      addClass: function (e) {
                        t.classList.add(e);
                      },
                      removeClass: function (e) {
                        t.classList.remove(e);
                      },
                      hasClass: function (e) {
                        return t.classList.contains(e);
                      },
                    })
                  ),
                  {
                    setNativeControlChecked: function (t) {
                      e.formElement.checked = t;
                    },
                    setNativeControlDisabled: function (t) {
                      e.formElement.disabled = t;
                    },
                    setNativeControlAttr: function (t, r) {
                      e.formElement.setAttribute(t, r);
                    },
                  }
                );
              },
            },
            {
              key: "render",
              value: function () {
                return Object(c.e)(
                  E(),
                  Object(g.a)({ interactionNode: this }),
                  this._changeHandler
                );
              },
            },
            {
              key: "ripple",
              get: function () {
                return this.rippleNode.ripple;
              },
            },
          ]) && R(e.prototype, r),
          n && R(e, n),
          i
        );
      })();
      Object(n.b)(
        [
          Object(c.f)({ type: Boolean }),
          o(function (t) {
            this.mdcFoundation.setChecked(t);
          }),
        ],
        A.prototype,
        "checked",
        void 0
      ),
        Object(n.b)(
          [
            Object(c.f)({ type: Boolean }),
            o(function (t) {
              this.mdcFoundation.setDisabled(t);
            }),
          ],
          A.prototype,
          "disabled",
          void 0
        ),
        Object(n.b)(
          [Object(c.g)(".mdc-switch")],
          A.prototype,
          "mdcRoot",
          void 0
        ),
        Object(n.b)([Object(c.g)("input")], A.prototype, "formElement", void 0),
        Object(n.b)(
          [Object(c.g)(".mdc-switch__thumb-underlay")],
          A.prototype,
          "rippleNode",
          void 0
        );
      var z = r(91);
      function T(t) {
        return (T =
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
      function L(t, e) {
        return (L =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function N(t) {
        return function () {
          var e,
            r = F(t);
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
            var n = F(this).constructor;
            e = Reflect.construct(r, arguments, n);
          } else e = r.apply(this, arguments);
          return (function (t, e) {
            if (e && ("object" === T(e) || "function" == typeof e)) return e;
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
      function F(t) {
        return (F = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var H = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && L(t, e);
        })(r, A);
        var e = N(r);
        function r() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, r),
            e.apply(this, arguments)
          );
        }
        return r;
      })();
      (H.styles = z.a), (H = Object(n.b)([Object(c.d)("mwc-switch")], H));
    },
    91: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return o;
      });
      var n = r(6);
      function c() {
        var t = (function (t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          );
        })([
          '.mdc-switch__thumb-underlay{left:-18px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-18px}.mdc-switch__native-control{width:68px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;border-color:#fff}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:32px;height:14px;border:1px solid;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1);border-color:transparent}.mdc-switch__thumb-underlay{display:flex;position:absolute;align-items:center;justify-content:center;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-20px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(20px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::after{background-color:#9e9e9e}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:hover::before{opacity:.08}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-switch__thumb-underlay{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-switch__thumb-underlay::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before,.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch__thumb-underlay:hover::before{opacity:.04}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}:host{outline:none}',
        ]);
        return (
          (c = function () {
            return t;
          }),
          t
        );
      }
      var o = Object(n.c)(c());
    },
  },
]);
//# sourceMappingURL=chunk.0f20b7eb2535b079dbfe.js.map
