(self.webpackJsonp = self.webpackJsonp || []).push([
  [10],
  {
    10: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return s;
      }),
        r.d(t, "b", function() {
          return c;
        }),
        r.d(t, "c", function() {
          return l;
        });
      var n = r(5);
      function i() {
        var e = a([
          "\n  /* prevent clipping of positioned elements */\n  paper-dialog-scrollable {\n    --paper-dialog-scrollable: {\n      -webkit-overflow-scrolling: auto;\n    }\n  }\n\n  /* force smooth scrolling for iOS 10 */\n  paper-dialog-scrollable.can-scroll {\n    --paper-dialog-scrollable: {\n      -webkit-overflow-scrolling: touch;\n    }\n  }\n\n  .paper-dialog-buttons {\n    align-items: flex-end;\n    padding: 8px;\n  }\n\n  .paper-dialog-buttons .warning {\n    --mdc-theme-primary: var(--google-red-500);\n  }\n\n  @media all and (max-width: 450px), all and (max-height: 500px) {\n    paper-dialog,\n    ha-paper-dialog {\n      margin: 0;\n      width: 100% !important;\n      max-height: calc(100% - 64px);\n\n      position: fixed !important;\n      bottom: 0px;\n      left: 0px;\n      right: 0px;\n      overflow: scroll;\n      border-bottom-left-radius: 0px;\n      border-bottom-right-radius: 0px;\n    }\n  }\n"
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = a([
          "\n  :host {\n    @apply --paper-font-body1;\n  }\n\n  app-header-layout,\n  ha-app-layout {\n    background-color: var(--primary-background-color);\n  }\n\n  app-header,\n  app-toolbar {\n    background-color: var(--app-header-background-color);\n    font-weight: 400;\n    color: var(--app-header-text-color, white);\n  }\n\n  app-toolbar ha-menu-button + [main-title],\n  app-toolbar ha-paper-icon-button-arrow-prev + [main-title],\n  app-toolbar paper-icon-button + [main-title] {\n    margin-left: 24px;\n  }\n\n  h1 {\n    @apply --paper-font-title;\n  }\n\n  button.link {\n    background: none;\n    color: inherit;\n    border: none;\n    padding: 0;\n    font: inherit;\n    text-align: left;\n    text-decoration: underline;\n    cursor: pointer;\n  }\n\n  .card-actions a {\n    text-decoration: none;\n  }\n\n  .card-actions .warning {\n    --mdc-theme-primary: var(--google-red-500);\n  }\n"
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      function a(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      var s = {
          "paper-spinner-color": "var(--primary-color)",
          "error-state-color": "var(--error-color)",
          "state-icon-unavailable-color": "var(--disabled-text-color)",
          "sidebar-text-color": "var(--primary-text-color)",
          "sidebar-background-color": "var(--paper-listbox-background-color);",
          "sidebar-selected-text-color": "var(--primary-color)",
          "sidebar-selected-icon-color": "var(--primary-color)",
          "switch-checked-color": "var(--primary-color)",
          "switch-checked-button-color":
            "var(--switch-checked-color, var(--paper-grey-50))",
          "switch-checked-track-color": "var(--switch-checked-color, #000000)",
          "switch-unchecked-button-color":
            "var(--switch-unchecked-color, var(--paper-grey-50))",
          "switch-unchecked-track-color":
            "var(--switch-unchecked-color, #000000)",
          "slider-color": "var(--primary-color)",
          "slider-secondary-color": "var(--light-primary-color)",
          "slider-bar-color": "var(--disabled-text-color)",
          "label-badge-grey": "var(--paper-grey-500)",
          "paper-card-background-color": "var(--card-background-color)",
          "paper-listbox-background-color": "var(--card-background-color)",
          "paper-item-icon-color": "var(--state-icon-color)",
          "paper-item-icon-active-color": "var(--state-icon-active-color)",
          "table-row-background-color": "var(--primary-background-color)",
          "table-row-alternative-background-color":
            "var(--secondary-background-color)",
          "paper-slider-knob-color": "var(--slider-color)",
          "paper-slider-knob-start-color": "var(--slider-color)",
          "paper-slider-pin-color": "var(--slider-color)",
          "paper-slider-active-color": "var(--slider-color)",
          "paper-slider-secondary-color": "var(--slider-secondary-color)",
          "paper-slider-container-color": "var(--slider-bar-color)",
          "data-table-background-color": "var(--card-background-color)",
          "mdc-theme-primary": "var(--primary-color)",
          "mdc-theme-secondary": "var(--accent-color)",
          "mdc-theme-background": "var(--primary-background-color)",
          "mdc-theme-surface":
            "var(--paper-card-background-color, var(--card-background-color))",
          "mdc-theme-on-primary": "var(--text-primary-color)",
          "mdc-theme-on-secondary": "var(--text-primary-color)",
          "mdc-theme-on-surface": "var(--primary-text-color)",
          "app-header-text-color": "var(--text-primary-color)",
          "app-header-background-color": "var(--primary-color)"
        },
        c = Object(n.c)(o()),
        l = Object(n.c)(i());
    },
    101: function(e, t) {},
    104: function(e, t, r) {
      "use strict";
      var n = r(5),
        i = (r(91), r(105), r(47));
      function o(e) {
        return (o =
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
      function a() {
        var e = c([
          '\n      :host {\n        display: block;\n        height: 100%;\n        background-color: var(--primary-background-color);\n      }\n\n      .toolbar {\n        display: flex;\n        align-items: center;\n        font-size: 20px;\n        height: 65px;\n        padding: 0 16px;\n        pointer-events: none;\n        background-color: var(--app-header-background-color);\n        font-weight: 400;\n        color: var(--app-header-text-color, white);\n        border-bottom: var(--app-header-border-bottom, none);\n        box-sizing: border-box;\n      }\n\n      ha-menu-button,\n      ha-paper-icon-button-arrow-prev,\n      ::slotted([slot="toolbar-icon"]) {\n        pointer-events: auto;\n      }\n\n      ha-paper-icon-button-arrow-prev.hidden {\n        visibility: hidden;\n      }\n\n      [main-title] {\n        margin: 0 0 0 24px;\n        line-height: 20px;\n        flex-grow: 1;\n      }\n\n      .content {\n        position: relative;\n        width: 100%;\n        height: calc(100% - 65px);\n        overflow-y: auto;\n        overflow: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n    '
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = c([
          '\n      <div class="toolbar">\n        <ha-paper-icon-button-arrow-prev\n          aria-label="Back"\n          .hassio=',
          "\n          @click=",
          "\n          class=",
          "\n        ></ha-paper-icon-button-arrow-prev>\n\n        <div main-title>",
          '</div>\n        <slot name="toolbar-icon"></slot>\n      </div>\n      <div class="content"><slot></slot></div>\n    '
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function c(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        var t,
          r = v(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function p(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function h(e) {
        return e.decorators && e.decorators.length;
      }
      function m(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function y(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function v(e) {
        var t = (function(e, t) {
          if ("object" !== o(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== o(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === o(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!h(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = v(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = y(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = y(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (m(o.descriptor) || m(i.descriptor)) {
                    if (h(o) || h(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (h(o)) {
                      if (h(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    p(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(f)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hass-subpage")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, a;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var s = arguments.length, c = new Array(s), d = 0;
                  d < s;
                  d++
                )
                  c[d] = arguments[d];
                return (
                  (i = this),
                  (r =
                    !(a = (t = l(n)).call.apply(t, [this].concat(c))) ||
                    ("object" !== o(a) && "function" != typeof a)
                      ? u(i)
                      : a),
                  e(u(r)),
                  r
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
                    t && d(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "header",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "showBackButton",
                value: function() {
                  return !0;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "hassio",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    s(),
                    this.hassio,
                    this._backTapped,
                    Object(i.a)({ hidden: !this.showBackButton }),
                    this.header
                  );
                }
              },
              {
                kind: "method",
                key: "_backTapped",
                value: function() {
                  history.back();
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(n.c)(a());
                }
              }
            ]
          };
        },
        n.a
      );
    },
    105: function(e, t, r) {
      "use strict";
      r(24);
      function n(e) {
        return (n =
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
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function o(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function a(e, t, r) {
        return (a =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = s(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function s(e) {
        return (s = Object.setPrototypeOf
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
      var l = customElements.get("paper-icon-button"),
        u = (function(e) {
          function t() {
            var e, r, i, a, c, l, u;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            for (var d = arguments.length, f = new Array(d), p = 0; p < d; p++)
              f[p] = arguments[p];
            return (
              (i = this),
              (r =
                !(a = (e = s(t)).call.apply(e, [this].concat(f))) ||
                ("object" !== n(a) && "function" != typeof a)
                  ? o(i)
                  : a),
              (c = o(r)),
              (u = void 0),
              (l = "hassio") in c
                ? Object.defineProperty(c, l, {
                    value: u,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  })
                : (c[l] = u),
              r
            );
          }
          var r, u, d;
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
            })(t, l),
            (r = t),
            (u = [
              {
                key: "connectedCallback",
                value: function() {
                  var e = this;
                  a(s(t.prototype), "connectedCallback", this).call(this),
                    setTimeout(function() {
                      e.icon =
                        "ltr" === window.getComputedStyle(e).direction
                          ? e.hassio
                            ? "hassio:arrow-left"
                            : "hass:arrow-left"
                          : e.hassio
                          ? "hassio:arrow-right"
                          : "hass:arrow-right";
                    }, 100);
                }
              }
            ]) && i(r.prototype, u),
            d && i(r, d),
            t
          );
        })();
      customElements.define("ha-paper-icon-button-arrow-prev", u);
    },
    106: function(e, t, r) {
      "use strict";
      r(48), r(82);
      var n = r(5),
        i = (r(91), r(105), r(10));
      function o(e) {
        return (o =
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
      function a() {
        var e = u([
          "\n        :host {\n          display: block;\n          height: 100%;\n          background-color: var(--primary-background-color);\n        }\n        .content {\n          height: calc(100% - 64px);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        }\n      "
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = u([
          "\n              <ha-paper-icon-button-arrow-prev\n                @click=",
          "\n              ></ha-paper-icon-button-arrow-prev>\n            "
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = u([
          "\n              <ha-menu-button\n                .hass=",
          "\n                .narrow=",
          "\n              ></ha-menu-button>\n            "
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = u([
          "\n      <app-toolbar>\n        ",
          '\n      </app-toolbar>\n      <div class="content">\n        <paper-spinner-lite active></paper-spinner-lite>\n      </div>\n    '
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function u(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function h(e) {
        var t,
          r = g(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function m(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function y(e) {
        return e.decorators && e.decorators.length;
      }
      function v(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function b(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function g(e) {
        var t = (function(e, t) {
          if ("object" !== o(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== o(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === o(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!y(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = g(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = b(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = b(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (v(o.descriptor) || v(i.descriptor)) {
                    if (y(o) || y(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (y(o)) {
                      if (y(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    m(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(h)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hass-loading-screen")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, a;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var s = arguments.length, c = new Array(s), l = 0;
                  l < s;
                  l++
                )
                  c[l] = arguments[l];
                return (
                  (i = this),
                  (r =
                    !(a = (t = d(n)).call.apply(t, [this].concat(c))) ||
                    ("object" !== o(a) && "function" != typeof a)
                      ? f(i)
                      : a),
                  e(f(r)),
                  r
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
                    t && p(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "rootnav",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "narrow",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    l(),
                    this.rootnav
                      ? Object(n.e)(c(), this.hass, this.narrow)
                      : Object(n.e)(s(), this._handleBack)
                  );
                }
              },
              {
                kind: "method",
                key: "_handleBack",
                value: function() {
                  history.back();
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, Object(n.c)(a())];
                }
              }
            ]
          };
        },
        n.a
      );
    },
    11: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return n;
      });
      var n = function(e, t, r, n) {
        (n = n || {}), (r = null == r ? {} : r);
        var i = new Event(t, {
          bubbles: void 0 === n.bubbles || n.bubbles,
          cancelable: Boolean(n.cancelable),
          composed: void 0 === n.composed || n.composed
        });
        return (i.detail = r), e.dispatchEvent(i), i;
      };
    },
    113: function(e, t, r) {
      "use strict";
      r(18), r(131);
      var n = r(6),
        i = r(34);
      function o(e) {
        return (o =
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
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        .container {\n          position: relative;\n          display: inline-block;\n        }\n\n        mwc-button {\n          transition: all 1s;\n        }\n\n        .success mwc-button {\n          --mdc-theme-primary: white;\n          background-color: var(--google-green-500);\n          transition: none;\n        }\n\n        .error mwc-button {\n          --mdc-theme-primary: white;\n          background-color: var(--google-red-500);\n          transition: none;\n        }\n\n        .progress {\n          @apply --layout;\n          @apply --layout-center-center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n        }\n      </style>\n      <div class="container" id="container">\n        <mwc-button\n          id="button"\n          disabled="[[computeDisabled(disabled, progress)]]"\n          on-click="buttonTapped"\n        >\n          <slot></slot>\n        </mwc-button>\n        <template is="dom-if" if="[[progress]]">\n          <div class="progress"><paper-spinner active=""></paper-spinner></div>\n        </template>\n      </div>\n    '
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function c(e, t) {
        return !t || ("object" !== o(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function l(e, t, r) {
        return (l =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = u(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function u(e) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            c(this, u(t).apply(this, arguments))
          );
        }
        var r, o, f;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && d(e, t);
          })(t, i["a"]),
          (r = t),
          (f = [
            {
              key: "template",
              get: function() {
                return Object(n.a)(a());
              }
            },
            {
              key: "properties",
              get: function() {
                return {
                  hass: { type: Object },
                  progress: { type: Boolean, value: !1 },
                  disabled: { type: Boolean, value: !1 }
                };
              }
            }
          ]),
          (o = [
            {
              key: "tempClass",
              value: function(e) {
                var t = this.$.container.classList;
                t.add(e),
                  setTimeout(function() {
                    t.remove(e);
                  }, 1e3);
              }
            },
            {
              key: "ready",
              value: function() {
                var e = this;
                l(u(t.prototype), "ready", this).call(this),
                  this.addEventListener("click", function(t) {
                    return e.buttonTapped(t);
                  });
              }
            },
            {
              key: "buttonTapped",
              value: function(e) {
                this.progress && e.stopPropagation();
              }
            },
            {
              key: "actionSuccess",
              value: function() {
                this.tempClass("success");
              }
            },
            {
              key: "actionError",
              value: function() {
                this.tempClass("error");
              }
            },
            {
              key: "computeDisabled",
              value: function(e, t) {
                return e || t;
              }
            }
          ]) && s(r.prototype, o),
          f && s(r, f),
          t
        );
      })();
      customElements.define("ha-progress-button", f);
    },
    115: function(e, t, r) {
      "use strict";
      r.d(t, "d", function() {
        return i;
      }),
        r.d(t, "c", function() {
          return o;
        }),
        r.d(t, "e", function() {
          return a;
        }),
        r.d(t, "a", function() {
          return s;
        }),
        r.d(t, "b", function() {
          return c;
        });
      var n = r(49),
        i = function(e) {
          return regeneratorRuntime.async(function(t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.t0 = n.a),
                    (t.next = 3),
                    regeneratorRuntime.awrap(
                      e.callApi("GET", "hassio/snapshots")
                    )
                  );
                case 3:
                  return (
                    (t.t1 = t.sent),
                    t.abrupt("return", (0, t.t0)(t.t1).snapshots)
                  );
                case 5:
                case "end":
                  return t.stop();
              }
          });
        },
        o = function(e, t) {
          return regeneratorRuntime.async(function(r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.t0 = n.a),
                    (r.next = 3),
                    regeneratorRuntime.awrap(
                      e.callApi("GET", "hassio/snapshots/".concat(t, "/info"))
                    )
                  );
                case 3:
                  return (r.t1 = r.sent), r.abrupt("return", (0, r.t0)(r.t1));
                case 5:
                case "end":
                  return r.stop();
              }
          });
        },
        a = function(e) {
          return regeneratorRuntime.async(function(t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.next = 2),
                    regeneratorRuntime.awrap(
                      e.callApi("POST", "hassio/snapshots/reload")
                    )
                  );
                case 2:
                case "end":
                  return t.stop();
              }
          });
        },
        s = function(e, t) {
          return regeneratorRuntime.async(function(r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.next = 2),
                    regeneratorRuntime.awrap(
                      e.callApi("POST", "hassio/snapshots/new/full", t)
                    )
                  );
                case 2:
                case "end":
                  return r.stop();
              }
          });
        },
        c = function(e, t) {
          return regeneratorRuntime.async(function(r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.next = 2),
                    regeneratorRuntime.awrap(
                      e.callApi("POST", "hassio/snapshots/new/partial", t)
                    )
                  );
                case 2:
                case "end":
                  return r.stop();
              }
          });
        };
    },
    116: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return i;
      }),
        r.d(t, "b", function() {
          return o;
        });
      var n = r(49),
        i = function(e) {
          return regeneratorRuntime.async(function(t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.t0 = n.a),
                    (t.next = 3),
                    regeneratorRuntime.awrap(
                      e.callApi("GET", "hassio/hardware/audio")
                    )
                  );
                case 3:
                  return (t.t1 = t.sent), t.abrupt("return", (0, t.t0)(t.t1));
                case 5:
                case "end":
                  return t.stop();
              }
          });
        },
        o = function(e) {
          return regeneratorRuntime.async(function(t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.t0 = n.a),
                    (t.next = 3),
                    regeneratorRuntime.awrap(
                      e.callApi("GET", "hassio/hardware/info")
                    )
                  );
                case 3:
                  return (t.t1 = t.sent), t.abrupt("return", (0, t.t0)(t.t1));
                case 5:
                case "end":
                  return t.stop();
              }
          });
        };
    },
    117: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return i;
      });
      var n = r(11),
        i = function(e, t) {
          Object(n.a)(e, "show-dialog", {
            dialogTag: "dialog-hassio-markdown",
            dialogImport: function() {
              return r.e(4).then(r.bind(null, 167));
            },
            dialogParams: t
          });
        };
    },
    118: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return o;
      }),
        r.d(t, "b", function() {
          return a;
        });
      var n = r(5);
      function i() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n  .bold {\n    font-weight: bold;\n  }\n  .italic {\n    font-style: italic;\n  }\n  .underline {\n    text-decoration: underline;\n  }\n  .strikethrough {\n    text-decoration: line-through;\n  }\n  .underline.strikethrough {\n    text-decoration: underline line-through;\n  }\n  .fg-red {\n    color: rgb(222, 56, 43);\n  }\n  .fg-green {\n    color: rgb(57, 181, 74);\n  }\n  .fg-yellow {\n    color: rgb(255, 199, 6);\n  }\n  .fg-blue {\n    color: rgb(0, 111, 184);\n  }\n  .fg-magenta {\n    color: rgb(118, 38, 113);\n  }\n  .fg-cyan {\n    color: rgb(44, 181, 233);\n  }\n  .fg-white {\n    color: rgb(204, 204, 204);\n  }\n  .bg-black {\n    background-color: rgb(0, 0, 0);\n  }\n  .bg-red {\n    background-color: rgb(222, 56, 43);\n  }\n  .bg-green {\n    background-color: rgb(57, 181, 74);\n  }\n  .bg-yellow {\n    background-color: rgb(255, 199, 6);\n  }\n  .bg-blue {\n    background-color: rgb(0, 111, 184);\n  }\n  .bg-magenta {\n    background-color: rgb(118, 38, 113);\n  }\n  .bg-cyan {\n    background-color: rgb(44, 181, 233);\n  }\n  .bg-white {\n    background-color: rgb(204, 204, 204);\n  }\n"
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      var o = Object(n.c)(i());
      function a(e) {
        for (
          var t,
            r = document.createElement("pre"),
            n = /\033(?:\[(.*?)[@-~]|\].*?(?:\007|\033\\))/g,
            i = 0,
            o = {
              bold: !1,
              italic: !1,
              underline: !1,
              strikethrough: !1,
              foregroundColor: null,
              backgroundColor: null
            },
            a = function(e) {
              var t = document.createElement("span");
              o.bold && t.classList.add("bold"),
                o.italic && t.classList.add("italic"),
                o.underline && t.classList.add("underline"),
                o.strikethrough && t.classList.add("strikethrough"),
                null !== o.foregroundColor &&
                  t.classList.add("fg-".concat(o.foregroundColor)),
                null !== o.backgroundColor &&
                  t.classList.add("bg-".concat(o.backgroundColor)),
                t.appendChild(document.createTextNode(e)),
                r.appendChild(t);
            };
          null !== (t = n.exec(e));

        ) {
          var s = t.index;
          a(e.substring(i, s)),
            (i = s + t[0].length),
            void 0 !== t[1] &&
              t[1].split(";").forEach(function(e) {
                switch (parseInt(e, 10)) {
                  case 0:
                    (o.bold = !1),
                      (o.italic = !1),
                      (o.underline = !1),
                      (o.strikethrough = !1),
                      (o.foregroundColor = null),
                      (o.backgroundColor = null);
                    break;
                  case 1:
                    o.bold = !0;
                    break;
                  case 3:
                    o.italic = !0;
                    break;
                  case 4:
                    o.underline = !0;
                    break;
                  case 9:
                    o.strikethrough = !0;
                    break;
                  case 22:
                    o.bold = !1;
                    break;
                  case 23:
                    o.italic = !1;
                    break;
                  case 24:
                    o.underline = !1;
                    break;
                  case 29:
                    o.strikethrough = !1;
                    break;
                  case 30:
                    o.foregroundColor = null;
                    break;
                  case 31:
                    o.foregroundColor = "red";
                    break;
                  case 32:
                    o.foregroundColor = "green";
                    break;
                  case 33:
                    o.foregroundColor = "yellow";
                    break;
                  case 34:
                    o.foregroundColor = "blue";
                    break;
                  case 35:
                    o.foregroundColor = "magenta";
                    break;
                  case 36:
                    o.foregroundColor = "cyan";
                    break;
                  case 37:
                    o.foregroundColor = "white";
                    break;
                  case 39:
                    o.foregroundColor = null;
                    break;
                  case 40:
                    o.backgroundColor = "black";
                    break;
                  case 41:
                    o.backgroundColor = "red";
                    break;
                  case 42:
                    o.backgroundColor = "green";
                    break;
                  case 43:
                    o.backgroundColor = "yellow";
                    break;
                  case 44:
                    o.backgroundColor = "blue";
                    break;
                  case 45:
                    o.backgroundColor = "magenta";
                    break;
                  case 46:
                    o.backgroundColor = "cyan";
                    break;
                  case 47:
                    o.backgroundColor = "white";
                    break;
                  case 49:
                    o.backgroundColor = null;
                }
              });
        }
        return a(e.substring(i)), r;
      }
    },
    119: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return a;
      }),
        r.d(t, "b", function() {
          return s;
        });
      var n = r(11),
        i = function() {
          return Promise.all([r.e(0), r.e(3)]).then(r.bind(null, 168));
        },
        o = function(e, t, r) {
          return new Promise(function(o) {
            var a = t.cancel,
              s = t.confirm;
            Object(n.a)(e, "show-dialog", {
              dialogTag: "dialog-box",
              dialogImport: i,
              dialogParams: Object.assign({}, t, {}, r, {
                cancel: function() {
                  o(!(null == r || !r.prompt) && null), a && a();
                },
                confirm: function(e) {
                  o(null == r || !r.prompt || e), s && s(e);
                }
              })
            });
          });
        },
        a = function(e, t) {
          return o(e, t);
        },
        s = function(e, t) {
          return o(e, t, { confirmation: !0 });
        };
    },
    15: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return o;
      });
      var n = r(5);
      function i() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n  .content {\n    margin: 8px;\n  }\n  h1 {\n    color: var(--primary-text-color);\n    font-size: 2em;\n    margin-bottom: 8px;\n    font-family: var(--paper-font-headline_-_font-family);\n    -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);\n    font-size: var(--paper-font-headline_-_font-size);\n    font-weight: var(--paper-font-headline_-_font-weight);\n    letter-spacing: var(--paper-font-headline_-_letter-spacing);\n    line-height: var(--paper-font-headline_-_line-height);\n    padding-left: 8px;\n  }\n  .description {\n    margin-top: 4px;\n    padding-left: 8px;\n  }\n  .card-group {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    grid-gap: 8px;\n  }\n  @media screen and (min-width: 640px) {\n    .card-group {\n      grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));\n    }\n  }\n  @media screen and (min-width: 1020px) {\n    .card-group {\n      grid-template-columns: repeat(auto-fit, minmax(300px, 0.333fr));\n    }\n  }\n  @media screen and (min-width: 1300px) {\n    .card-group {\n      grid-template-columns: repeat(auto-fit, minmax(300px, 0.25fr));\n    }\n  }\n  ha-call-api-button {\n    font-weight: 500;\n    color: var(--primary-color);\n  }\n  .error {\n    color: var(--error-color);\n    margin-top: 16px;\n  }\n"
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      var o = Object(n.c)(i());
    },
    2: function(e, t, r) {
      "use strict";
      r.r(t);
      var n = r(5),
        i = (r(24), r(129), r(126), r(10));
      function o(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              )
            )
              return;
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(n = (a = s.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (c) {
              (i = !0), (o = c);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(e, t) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      var a = document.createElement("template");
      a.setAttribute("style", "display: none;"),
        (a.innerHTML = "<custom-style>\n  <style>\n    /*\n      Home Assistant default styles.\n\n      In Polymer 2.0, default styles should to be set on the html selector.\n      (Setting all default styles only on body breaks shadyCSS polyfill.)\n      See: https://github.com/home-assistant/home-assistant-polymer/pull/901\n    */\n    html {\n      font-size: 14px;\n      height: 100vh;\n\n      /* text */\n      --primary-text-color: #212121;\n      --secondary-text-color: #727272;\n      --text-primary-color: #ffffff;\n      --disabled-text-color: #bdbdbd;\n\n      /* main interface colors */\n      --primary-color: #03a9f4;\n      --dark-primary-color: #0288d1;\n      --light-primary-color: #b3e5fC;\n      --accent-color: #ff9800;\n      --divider-color: rgba(0, 0, 0, .12);\n\n      --scrollbar-thumb-color: rgb(194, 194, 194);\n\n      --error-color: #db4437;\n\n      /* states and badges */\n      --state-icon-color: #44739e;\n      --state-icon-active-color: #FDD835;\n\n      /* background and sidebar */\n      --card-background-color: #ffffff;\n      --primary-background-color: #fafafa;\n      --secondary-background-color: #e5e5e5; /* behind the cards on state */\n\n      /* sidebar menu */\n      --sidebar-icon-color: rgba(0, 0, 0, 0.5);\n\n      /* for label-badge */\n      --label-badge-background-color: white;\n      --label-badge-text-color: rgb(76, 76, 76);\n      --label-badge-red: #DF4C1E;\n      --label-badge-blue: #039be5;\n      --label-badge-green: #0DA035;\n      --label-badge-yellow: #f4b400;\n\n      /*\n        Paper-styles color.html dependency is stripped on build.\n        When a default paper-style color is used, it needs to be copied\n        from paper-styles/color.html to here.\n      */\n\n      --paper-grey-50: #fafafa; /* default for: --mwc-switch-unchecked-button-color */\n      --paper-grey-200: #eeeeee;  /* for ha-date-picker-style */\n      --paper-grey-500: #9e9e9e;  /* --label-badge-grey */\n\n      /* for paper-spinner */\n      --google-red-500: #db4437;\n      --google-blue-500: #4285f4;\n      --google-green-500: #0f9d58;\n      --google-yellow-500: #f4b400;\n\n      /* for paper-slider */\n      --paper-green-400: #66bb6a;\n      --paper-blue-400: #42a5f5;\n      --paper-orange-400: #ffa726;\n\n      /* opacity for dark text on a light background */\n      --dark-divider-opacity: 0.12;\n      --dark-disabled-opacity: 0.38; /* or hint text or icon */\n      --dark-secondary-opacity: 0.54;\n      --dark-primary-opacity: 0.87;\n\n      /* opacity for light text on a dark background */\n      --light-divider-opacity: 0.12;\n      --light-disabled-opacity: 0.3; /* or hint text or icon */\n      --light-secondary-opacity: 0.7;\n      --light-primary-opacity: 1.0;\n\n      /* set our slider style */\n      --ha-paper-slider-pin-font-size: 15px;\n\n      /* rgb */\n      --rgb-primary-color: 3, 169, 244;\n      --rgb-accent-color: 255, 152, 0;\n      --rgb-primary-text-color: 33, 33, 33;\n      --rgb-secondary-text-color: 114, 114, 114;\n      --rgb-text-primary-color: 255, 255, 255;\n\n      "
          .concat(
            Object.entries(i.a)
              .map(function(e) {
                var t = o(e, 2),
                  r = t[0],
                  n = t[1];
                return "--".concat(r, ": ").concat(n, ";");
              })
              .join(""),
            '\n    }\n  </style>\n\n  <style shady-unscoped="">\n    /*\n      prevent clipping of positioned elements in a small scrollable\n      force smooth scrolling if can scroll\n      use non-shady selectors so this only targets iOS 9\n      conditional mixin set in ha-style-dialog does not work with shadyCSS\n    */\n    paper-dialog-scrollable:not(.can-scroll) &gt; .scrollable {\n      -webkit-overflow-scrolling: auto !important;\n    }\n\n    paper-dialog-scrollable.can-scroll &gt; .scrollable {\n      -webkit-overflow-scrolling: touch !important;\n    }\n  </style>\n</custom-style><dom-module id="ha-style">\n  <template>\n    <style>\n    '
          )
          .concat(
            i.b.cssText,
            '\n    </style>\n  </template>\n</dom-module><dom-module id="ha-style-dialog">\n  <template>\n    <style>\n      '
          )
          .concat(i.c.cssText, "\n    </style>\n  </template>\n</dom-module>")),
        document.head.appendChild(a.content);
      var s = function(e, t, r) {
          var n =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          e._themes || (e._themes = {});
          var o = t.default_theme;
          ("default" === r || (r && t.themes[r])) && (o = r);
          var a = Object.assign({}, e._themes);
          if ("default" !== o) {
            var s = Object.assign({}, i.a, {}, t.themes[o]);
            Object.keys(s).forEach(function(t) {
              var r = "--".concat(t);
              if (((e._themes[r] = ""), (a[r] = s[t]), !t.startsWith("rgb"))) {
                var n = "rgb-".concat(t);
                if (void 0 === s[n]) {
                  var i = "--".concat(n);
                  e._themes[i] = "";
                  var o,
                    c,
                    l,
                    u =
                      ((o = s[t]),
                      (c = o.replace(
                        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        function(e, t, r, n) {
                          return t + t + r + r + n + n;
                        }
                      )),
                      (l = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c))
                        ? ""
                            .concat(parseInt(l[1], 16), ", ")
                            .concat(parseInt(l[2], 16), ", ")
                            .concat(parseInt(l[3], 16))
                        : null);
                  null !== u && (a[i] = u);
                }
              }
            });
          }
          if (
            (e.updateStyles
              ? e.updateStyles(a)
              : window.ShadyCSS && window.ShadyCSS.styleSubtree(e, a),
            n)
          ) {
            var c = document.querySelector("meta[name=theme-color]");
            if (c) {
              c.hasAttribute("default-content") ||
                c.setAttribute("default-content", c.getAttribute("content"));
              var l = a["--primary-color"] || c.getAttribute("default-content");
              c.setAttribute("content", l);
            }
          }
        },
        c = r(11);
      r(18), r(104);
      function l(e) {
        return (l =
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
      function u() {
        var e = f([
          "\n        .content {\n          height: calc(100% - 64px);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          flex-direction: column;\n        }\n      "
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = f([
          '\n      <hass-subpage>\n        <div class="content">\n          <h3>',
          "</h3>\n          <slot>\n            <mwc-button @click=",
          ">go back</mwc-button>\n          </slot>\n        </div>\n      </hass-subpage>\n    "
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function f(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function y(e) {
        var t,
          r = k(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function v(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function b(e) {
        return e.decorators && e.decorators.length;
      }
      function g(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function w(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function k(e) {
        var t = (function(e, t) {
          if ("object" !== l(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== l(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === l(t) ? t : String(t);
      }
      (function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!b(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = k(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = w(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = w(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (g(o.descriptor) || g(i.descriptor)) {
                    if (b(o) || b(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (b(o)) {
                      if (b(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    v(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(y)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hass-error-screen")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = p(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== l(o) && "function" != typeof o)
                      ? h(i)
                      : o),
                  e(h(r)),
                  r
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
                    t && m(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "error",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(d(), this.error, this._backTapped);
                }
              },
              {
                kind: "method",
                key: "_backTapped",
                value: function() {
                  history.back();
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [Object(n.c)(u())];
                }
              }
            ]
          };
        },
        n.a
      ),
        r(106);
      var E = r(37),
        O = r(83);
      function j(e) {
        return (j =
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
      function P(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function x(e, t) {
        return (x =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _(e) {
        var t,
          r = A(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function S(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function C(e) {
        return e.decorators && e.decorators.length;
      }
      function D(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function T(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function A(e) {
        var t = (function(e, t) {
          if ("object" !== j(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== j(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === j(t) ? t : String(t);
      }
      function z(e, t, r) {
        return (z =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = R(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function R(e) {
        return (R = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var I = (function(e, t, r, n) {
          var i = (function() {
            var e = {
              elementsDefinitionOrder: [["method"], ["field"]],
              initializeInstanceElements: function(e, t) {
                ["method", "field"].forEach(function(r) {
                  t.forEach(function(t) {
                    t.kind === r &&
                      "own" === t.placement &&
                      this.defineClassElement(e, t);
                  }, this);
                }, this);
              },
              initializeClassElements: function(e, t) {
                var r = e.prototype;
                ["method", "field"].forEach(function(n) {
                  t.forEach(function(t) {
                    var i = t.placement;
                    if (t.kind === n && ("static" === i || "prototype" === i)) {
                      var o = "static" === i ? e : r;
                      this.defineClassElement(o, t);
                    }
                  }, this);
                }, this);
              },
              defineClassElement: function(e, t) {
                var r = t.descriptor;
                if ("field" === t.kind) {
                  var n = t.initializer;
                  r = {
                    enumerable: r.enumerable,
                    writable: r.writable,
                    configurable: r.configurable,
                    value: void 0 === n ? void 0 : n.call(e)
                  };
                }
                Object.defineProperty(e, t.key, r);
              },
              decorateClass: function(e, t) {
                var r = [],
                  n = [],
                  i = { static: [], prototype: [], own: [] };
                if (
                  (e.forEach(function(e) {
                    this.addElementPlacement(e, i);
                  }, this),
                  e.forEach(function(e) {
                    if (!C(e)) return r.push(e);
                    var t = this.decorateElement(e, i);
                    r.push(t.element),
                      r.push.apply(r, t.extras),
                      n.push.apply(n, t.finishers);
                  }, this),
                  !t)
                )
                  return { elements: r, finishers: n };
                var o = this.decorateConstructor(r, t);
                return n.push.apply(n, o.finishers), (o.finishers = n), o;
              },
              addElementPlacement: function(e, t, r) {
                var n = t[e.placement];
                if (!r && -1 !== n.indexOf(e.key))
                  throw new TypeError("Duplicated element (" + e.key + ")");
                n.push(e.key);
              },
              decorateElement: function(e, t) {
                for (
                  var r = [], n = [], i = e.decorators, o = i.length - 1;
                  o >= 0;
                  o--
                ) {
                  var a = t[e.placement];
                  a.splice(a.indexOf(e.key), 1);
                  var s = this.fromElementDescriptor(e),
                    c = this.toElementFinisherExtras((0, i[o])(s) || s);
                  (e = c.element),
                    this.addElementPlacement(e, t),
                    c.finisher && n.push(c.finisher);
                  var l = c.extras;
                  if (l) {
                    for (var u = 0; u < l.length; u++)
                      this.addElementPlacement(l[u], t);
                    r.push.apply(r, l);
                  }
                }
                return { element: e, finishers: n, extras: r };
              },
              decorateConstructor: function(e, t) {
                for (var r = [], n = t.length - 1; n >= 0; n--) {
                  var i = this.fromClassDescriptor(e),
                    o = this.toClassDescriptor((0, t[n])(i) || i);
                  if (
                    (void 0 !== o.finisher && r.push(o.finisher),
                    void 0 !== o.elements)
                  ) {
                    e = o.elements;
                    for (var a = 0; a < e.length - 1; a++)
                      for (var s = a + 1; s < e.length; s++)
                        if (
                          e[a].key === e[s].key &&
                          e[a].placement === e[s].placement
                        )
                          throw new TypeError(
                            "Duplicated element (" + e[a].key + ")"
                          );
                  }
                }
                return { elements: e, finishers: r };
              },
              fromElementDescriptor: function(e) {
                var t = {
                  kind: e.kind,
                  key: e.key,
                  placement: e.placement,
                  descriptor: e.descriptor
                };
                return (
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0
                  }),
                  "field" === e.kind && (t.initializer = e.initializer),
                  t
                );
              },
              toElementDescriptors: function(e) {
                var t;
                if (void 0 !== e)
                  return ((t = e),
                  (function(e) {
                    if (Array.isArray(e)) return e;
                  })(t) ||
                    (function(e) {
                      if (
                        Symbol.iterator in Object(e) ||
                        "[object Arguments]" ===
                          Object.prototype.toString.call(e)
                      )
                        return Array.from(e);
                    })(t) ||
                    (function() {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance"
                      );
                    })()).map(function(e) {
                    var t = this.toElementDescriptor(e);
                    return (
                      this.disallowProperty(
                        e,
                        "finisher",
                        "An element descriptor"
                      ),
                      this.disallowProperty(
                        e,
                        "extras",
                        "An element descriptor"
                      ),
                      t
                    );
                  }, this);
              },
              toElementDescriptor: function(e) {
                var t = String(e.kind);
                if ("method" !== t && "field" !== t)
                  throw new TypeError(
                    'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                      t +
                      '"'
                  );
                var r = A(e.key),
                  n = String(e.placement);
                if ("static" !== n && "prototype" !== n && "own" !== n)
                  throw new TypeError(
                    'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                      n +
                      '"'
                  );
                var i = e.descriptor;
                this.disallowProperty(e, "elements", "An element descriptor");
                var o = {
                  kind: t,
                  key: r,
                  placement: n,
                  descriptor: Object.assign({}, i)
                };
                return (
                  "field" !== t
                    ? this.disallowProperty(
                        e,
                        "initializer",
                        "A method descriptor"
                      )
                    : (this.disallowProperty(
                        i,
                        "get",
                        "The property descriptor of a field descriptor"
                      ),
                      this.disallowProperty(
                        i,
                        "set",
                        "The property descriptor of a field descriptor"
                      ),
                      this.disallowProperty(
                        i,
                        "value",
                        "The property descriptor of a field descriptor"
                      ),
                      (o.initializer = e.initializer)),
                  o
                );
              },
              toElementFinisherExtras: function(e) {
                var t = this.toElementDescriptor(e),
                  r = T(e, "finisher"),
                  n = this.toElementDescriptors(e.extras);
                return { element: t, finisher: r, extras: n };
              },
              fromClassDescriptor: function(e) {
                var t = {
                  kind: "class",
                  elements: e.map(this.fromElementDescriptor, this)
                };
                return (
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0
                  }),
                  t
                );
              },
              toClassDescriptor: function(e) {
                var t = String(e.kind);
                if ("class" !== t)
                  throw new TypeError(
                    'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                      t +
                      '"'
                  );
                this.disallowProperty(e, "key", "A class descriptor"),
                  this.disallowProperty(e, "placement", "A class descriptor"),
                  this.disallowProperty(e, "descriptor", "A class descriptor"),
                  this.disallowProperty(e, "initializer", "A class descriptor"),
                  this.disallowProperty(e, "extras", "A class descriptor");
                var r = T(e, "finisher"),
                  n = this.toElementDescriptors(e.elements);
                return { elements: n, finisher: r };
              },
              runClassFinishers: function(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = (0, t[r])(e);
                  if (void 0 !== n) {
                    if ("function" != typeof n)
                      throw new TypeError(
                        "Finishers must return a constructor."
                      );
                    e = n;
                  }
                }
                return e;
              },
              disallowProperty: function(e, t, r) {
                if (void 0 !== e[t])
                  throw new TypeError(r + " can't have a ." + t + " property.");
              }
            };
            return e;
          })();
          if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
          var a = t(function(e) {
              i.initializeInstanceElements(e, s.elements);
            }, r),
            s = i.decorateClass(
              (function(e) {
                for (
                  var t = [],
                    r = function(e) {
                      return (
                        "method" === e.kind &&
                        e.key === o.key &&
                        e.placement === o.placement
                      );
                    },
                    n = 0;
                  n < e.length;
                  n++
                ) {
                  var i,
                    o = e[n];
                  if ("method" === o.kind && (i = t.find(r)))
                    if (D(o.descriptor) || D(i.descriptor)) {
                      if (C(o) || C(i))
                        throw new ReferenceError(
                          "Duplicated methods (" +
                            o.key +
                            ") can't be decorated."
                        );
                      i.descriptor = o.descriptor;
                    } else {
                      if (C(o)) {
                        if (C(i))
                          throw new ReferenceError(
                            "Decorators can't be placed on different accessors with for the same property (" +
                              o.key +
                              ")."
                          );
                        i.decorators = o.decorators;
                      }
                      S(o, i);
                    }
                  else t.push(o);
                }
                return t;
              })(a.d.map(_)),
              e
            );
          return (
            i.initializeClassElements(a.F, s.elements),
            i.runClassFinishers(a.F, s.finishers)
          );
        })(
          null,
          function(e, t) {
            var r = (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = R(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== j(o) && "function" != typeof o)
                      ? P(i)
                      : o),
                  e(P(r)),
                  r
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
                    t && x(e, t);
                })(n, t),
                n
              );
            })();
            return {
              F: r,
              d: [
                {
                  kind: "field",
                  decorators: [Object(n.f)()],
                  key: "route",
                  value: void 0
                },
                {
                  kind: "field",
                  key: "routerOptions",
                  value: void 0
                },
                {
                  kind: "field",
                  key: "_currentPage",
                  value: function() {
                    return "";
                  }
                },
                {
                  kind: "field",
                  key: "_currentLoadProm",
                  value: void 0
                },
                {
                  kind: "field",
                  key: "_cache",
                  value: function() {
                    return {};
                  }
                },
                {
                  kind: "field",
                  key: "_initialLoadDone",
                  value: function() {
                    return !1;
                  }
                },
                {
                  kind: "field",
                  key: "_computeTail",
                  value: function() {
                    return Object(O.a)(function(e) {
                      var t = e.path.indexOf("/", 1);
                      return -1 === t
                        ? {
                            prefix: e.prefix + e.path,
                            path: ""
                          }
                        : {
                            prefix: e.prefix + e.path.substr(0, t),
                            path: e.path.substr(t)
                          };
                    });
                  }
                },
                {
                  kind: "method",
                  key: "update",
                  value: function(e) {
                    var t = this;
                    z(R(r.prototype), "update", this).call(this, e);
                    var n = this.routerOptions || { routes: {} };
                    if (!n || !n.initialLoad || this._initialLoadDone)
                      if (e.has("route")) {
                        var i = this.route,
                          o = n.defaultPage;
                        i &&
                          "" === i.path &&
                          void 0 !== o &&
                          Object(E.a)(
                            this,
                            "".concat(i.prefix, "/").concat(o),
                            !0
                          );
                        for (
                          var a = i
                              ? (function(e, t) {
                                  if ("" === e) return t;
                                  var r = e.indexOf("/", 1);
                                  return -1 === r
                                    ? e.substr(1)
                                    : e.substr(1, r - 1);
                                })(i.path, o || "")
                              : "not_found",
                            s = n.routes[a];
                          "string" == typeof s;

                        )
                          (a = s), (s = n.routes[a]);
                        if (n.beforeRender) {
                          var c = n.beforeRender(a);
                          if (void 0 !== c) {
                            for (a = c, s = n.routes[a]; "string" == typeof s; )
                              (a = s), (s = n.routes[a]);
                            i &&
                              Object(E.a)(
                                this,
                                "".concat(i.prefix, "/").concat(c),
                                !0
                              );
                          }
                        }
                        if (this._currentPage !== a) {
                          if (!s)
                            return (
                              (this._currentPage = ""),
                              void (
                                this.lastChild &&
                                this.removeChild(this.lastChild)
                              )
                            );
                          this._currentPage = a;
                          var l = s.load ? s.load() : Promise.resolve();
                          if (
                            (l.catch(function(e) {
                              if (
                                (console.error("Error loading page", a, e),
                                t._currentPage === a)
                              ) {
                                t.removeChild(t.lastChild);
                                var r = document.createElement(
                                  "hass-error-screen"
                                );
                                (r.error = "Error while loading page ".concat(
                                  a,
                                  "."
                                )),
                                  t.appendChild(r);
                              }
                            }),
                            n.showLoading)
                          ) {
                            var u = !1;
                            setTimeout(function() {
                              u ||
                                t._currentPage !== a ||
                                (t.lastChild && t.removeChild(t.lastChild),
                                t.appendChild(t.createLoadingScreen()));
                            }, 400),
                              (this._currentLoadProm = l.then(
                                function() {
                                  (t._currentLoadProm = void 0),
                                    t._currentPage === a &&
                                      ((u = !0), t._createPanel(n, a, s));
                                },
                                function() {
                                  t._currentLoadProm = void 0;
                                }
                              ));
                          } else this._createPanel(n, a, s);
                        } else
                          this.lastChild &&
                            this.updatePageEl(this.lastChild, e);
                      } else
                        this.lastChild &&
                          !this._currentLoadProm &&
                          this.updatePageEl(this.lastChild, e);
                  }
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function(e) {
                    var t = this;
                    z(R(r.prototype), "firstUpdated", this).call(this, e);
                    var n = this.routerOptions;
                    n &&
                      (n.preloadAll &&
                        Object.values(n.routes).forEach(function(e) {
                          return "object" === j(e) && e.load && e.load();
                        }),
                      n.initialLoad &&
                        (setTimeout(function() {
                          t._initialLoadDone ||
                            t.appendChild(t.createLoadingScreen());
                        }, 400),
                        n.initialLoad().then(function() {
                          (t._initialLoadDone = !0), t.requestUpdate("route");
                        })));
                  }
                },
                {
                  kind: "method",
                  key: "createLoadingScreen",
                  value: function() {
                    return document.createElement("hass-loading-screen");
                  }
                },
                {
                  kind: "method",
                  key: "rebuild",
                  value: function() {
                    var e;
                    return regeneratorRuntime.async(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (void 0 !== (e = this.route)) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt("return");
                            case 3:
                              return (
                                (this.route = void 0),
                                (t.next = 6),
                                regeneratorRuntime.awrap(this.updateComplete)
                              );
                            case 6:
                              void 0 === this.route && (this.route = e);
                            case 7:
                            case "end":
                              return t.stop();
                          }
                      },
                      null,
                      this
                    );
                  }
                },
                {
                  kind: "get",
                  key: "pageRendered",
                  value: function() {
                    var e = this;
                    return this.updateComplete.then(function() {
                      return e._currentLoadProm;
                    });
                  }
                },
                {
                  kind: "method",
                  key: "createElement",
                  value: function(e) {
                    return document.createElement(e);
                  }
                },
                {
                  kind: "method",
                  key: "updatePageEl",
                  value: function(e, t) {}
                },
                {
                  kind: "get",
                  key: "routeTail",
                  value: function() {
                    return this._computeTail(this.route);
                  }
                },
                {
                  kind: "method",
                  key: "_createPanel",
                  value: function(e, t, r) {
                    this.lastChild && this.removeChild(this.lastChild);
                    var n = this._cache[t] || this.createElement(r.tag);
                    this.updatePageEl(n),
                      this.appendChild(n),
                      (e.cacheAll || r.cache) && (this._cache[t] = n);
                  }
                }
              ]
            };
          },
          n.b
        ),
        F = r(64),
        L = r(49),
        N = function(e) {
          var t;
          return regeneratorRuntime.async(function(r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.next = 2),
                    regeneratorRuntime.awrap(
                      e.callApi("GET", "hassio/host/info")
                    )
                  );
                case 2:
                  return (t = r.sent), r.abrupt("return", Object(L.a)(t));
                case 4:
                case "end":
                  return r.stop();
              }
          });
        },
        H = function(e) {
          return regeneratorRuntime.async(function(t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.t0 = L.a),
                    (t.next = 3),
                    regeneratorRuntime.awrap(
                      e.callApi("GET", "hassio/hassos/info")
                    )
                  );
                case 3:
                  return (t.t1 = t.sent), t.abrupt("return", (0, t.t0)(t.t1));
                case 5:
                case "end":
                  return t.stop();
              }
          });
        },
        U = r(27),
        B = {},
        M = function(e, t, r, n, i) {
          return regeneratorRuntime.async(function(o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (
                    n in B ||
                      (B[n] = r().then(function() {
                        var r = document.createElement(n);
                        return e.provideHass(r), t.appendChild(r), r;
                      })),
                    (o.next = 3),
                    regeneratorRuntime.awrap(B[n])
                  );
                case 3:
                  o.sent.showDialog(i);
                case 5:
                case "end":
                  return o.stop();
              }
          });
        };
      function G(e) {
        return (G =
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
      function V(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function q(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function W(e, t, r) {
        return (W =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = J(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function J(e) {
        return (J = Object.setPrototypeOf
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
      function $(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      r(109), r(125), r(48), r(111), r(174), r(91), r(19);
      var K = r(15);
      r(41);
      function Q(e) {
        return (Q =
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
      function X() {
        var e = re([
          "\n        paper-card {\n          cursor: pointer;\n        }\n      "
        ]);
        return (
          (X = function() {
            return e;
          }),
          e
        );
      }
      function Z() {
        var e = re([
          "\n                    <paper-card .addon=",
          " @click=",
          '>\n                      <div class="card-content">\n                        <hassio-card-content\n                          .hass=',
          "\n                          .title=",
          "\n                          .description=",
          "\n                          available\n                          .showTopbar=",
          '\n                          topbarClass="update"\n                          .icon=',
          "\n                          .iconTitle=",
          "\n                          .iconClass=",
          "\n                          .iconImage=",
          "\n                        ></hassio-card-content>\n                      </div>\n                    </paper-card>\n                  "
        ]);
        return (
          (Z = function() {
            return e;
          }),
          e
        );
      }
      function ee() {
        var e = re([
          '\n                <paper-card>\n                  <div class="card-content">\n                    You don\'t have any add-ons installed yet. Head over to\n                    <a href="#" @click=',
          ">the add-on store</a>\n                    to get started!\n                  </div>\n                </paper-card>\n              "
        ]);
        return (
          (ee = function() {
            return e;
          }),
          e
        );
      }
      function te() {
        var e = re([
          '\n      <div class="content">\n        <h1>Add-ons</h1>\n        <div class="card-group">\n          ',
          "\n        </div>\n      </div>\n    "
        ]);
        return (
          (te = function() {
            return e;
          }),
          e
        );
      }
      function re(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function ne(e, t) {
        return (
          he(e) ||
          (function(e, t) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              )
            )
              return;
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(n = (a = s.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (c) {
              (i = !0), (o = c);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(e, t) ||
          pe()
        );
      }
      function ie(e) {
        return (ie = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function oe(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ae(e, t) {
        return (ae =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function se(e) {
        var t,
          r = fe(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function ce(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function le(e) {
        return e.decorators && e.decorators.length;
      }
      function ue(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function de(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function fe(e) {
        var t = (function(e, t) {
          if ("object" !== Q(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Q(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Q(t) ? t : String(t);
      }
      function pe() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      }
      function he(e) {
        if (Array.isArray(e)) return e;
      }
      (function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!le(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                he(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  pe()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = fe(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = de(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = de(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (ue(o.descriptor) || ue(i.descriptor)) {
                    if (le(o) || le(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (le(o)) {
                      if (le(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    ce(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(se)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-addons")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = ie(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== Q(o) && "function" != typeof o)
                      ? oe(i)
                      : o),
                  e(oe(r)),
                  r
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
                    t && ae(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "addons",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e = this,
                    t = ne(this.hass.config.version.split(".", 2), 2),
                    r = t[0],
                    i = t[1],
                    o = Number(r) > 0 || ("0" === r && Number(i) >= 105);
                  return Object(n.e)(
                    te(),
                    this.addons
                      ? this.addons
                          .sort(function(e, t) {
                            return e.name > t.name ? 1 : -1;
                          })
                          .map(function(t) {
                            return Object(n.e)(
                              Z(),
                              t,
                              e._addonTapped,
                              e.hass,
                              t.name,
                              t.description,
                              t.installed !== t.version,
                              t.installed !== t.version
                                ? "hassio:arrow-up-bold-circle"
                                : "hassio:puzzle",
                              "started" !== t.state
                                ? "Add-on is stopped"
                                : t.installed !== t.version
                                ? "New version available"
                                : "Add-on is running",
                              t.installed && t.installed !== t.version
                                ? "started" === t.state
                                  ? "update"
                                  : "update stopped"
                                : t.installed && "started" === t.state
                                ? "running"
                                : "stopped",
                              o && t.icon
                                ? "/api/hassio/addons/".concat(t.slug, "/icon")
                                : void 0
                            );
                          })
                      : Object(n.e)(ee(), this._openStore)
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, K.a, Object(n.c)(X())];
                }
              },
              {
                kind: "method",
                key: "_addonTapped",
                value: function(e) {
                  Object(E.a)(
                    this,
                    "/hassio/addon/".concat(e.currentTarget.addon.slug)
                  );
                }
              },
              {
                kind: "method",
                key: "_openStore",
                value: function() {
                  Object(E.a)(this, "/hassio/store");
                }
              }
            ]
          };
        },
        n.a
      ),
        r(22),
        r(50);
      function me() {
        var e = Oe([
          "\n        .icon {\n          --iron-icon-height: 48px;\n          --iron-icon-width: 48px;\n          float: right;\n          margin: 0 0 2px 10px;\n        }\n        .update-heading {\n          font-size: var(--paper-font-subhead_-_font-size);\n          font-weight: 500;\n          margin-bottom: 0.5em;\n        }\n        .warning {\n          color: var(--secondary-text-color);\n        }\n        .card-content {\n          height: calc(100% - 47px);\n          box-sizing: border-box;\n        }\n        .card-actions {\n          text-align: right;\n        }\n        .errors {\n          color: var(--google-red-500);\n          padding: 16px;\n        }\n        a {\n          text-decoration: none;\n        }\n      "
        ]);
        return (
          (me = function() {
            return e;
          }),
          e
        );
      }
      function ye(e) {
        return (ye =
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
      function ve() {
        var e = Oe([
          '\n                <div class="icon">\n                  <iron-icon .icon="',
          '" />\n                </div>\n              '
        ]);
        return (
          (ve = function() {
            return e;
          }),
          e
        );
      }
      function be() {
        var e = Oe([
          '\n      <paper-card>\n        <div class="card-content">\n          ',
          '\n          <div class="update-heading">',
          " ",
          '</div>\n          <div class="warning">\n            You are currently running version ',
          '\n          </div>\n        </div>\n        <div class="card-actions">\n          <a href="',
          '" target="_blank">\n            <mwc-button>Release notes</mwc-button>\n          </a>\n          <ha-call-api-button\n            .hass=',
          "\n            .path=",
          "\n            @hass-api-called=",
          "\n          >\n            Update\n          </ha-call-api-button>\n        </div>\n      </paper-card>\n    "
        ]);
        return (
          (be = function() {
            return e;
          }),
          e
        );
      }
      function ge() {
        var e = Oe([""]);
        return (
          (ge = function() {
            return e;
          }),
          e
        );
      }
      function we() {
        var e = Oe([
          '\n              <div class="error">Error: ',
          "</div>\n            "
        ]);
        return (
          (we = function() {
            return e;
          }),
          e
        );
      }
      function ke() {
        var e = Oe([
          '\n      <div class="content">\n        ',
          "\n        <h1>\n          ",
          '\n        </h1>\n        <div class="card-group">\n          ',
          "\n          ",
          "\n          ",
          "\n        </div>\n      </div>\n    "
        ]);
        return (
          (ke = function() {
            return e;
          }),
          e
        );
      }
      function Ee() {
        var e = Oe([""]);
        return (
          (Ee = function() {
            return e;
          }),
          e
        );
      }
      function Oe(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function je(e) {
        return (je = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Pe(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function xe(e, t) {
        return (xe =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _e(e) {
        var t,
          r = Ae(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Se(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Ce(e) {
        return e.decorators && e.decorators.length;
      }
      function De(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Te(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Ae(e) {
        var t = (function(e, t) {
          if ("object" !== ye(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== ye(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === ye(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!Ce(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Ae(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = Te(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = Te(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (De(o.descriptor) || De(i.descriptor)) {
                    if (Ce(o) || Ce(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Ce(o)) {
                      if (Ce(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Se(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(_e)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-update")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = je(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== ye(o) && "function" != typeof o)
                      ? Pe(i)
                      : o),
                  e(Pe(r)),
                  r
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
                    t && xe(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassOsInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "supervisorInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_error",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e = [
                    this.hassInfo,
                    this.supervisorInfo,
                    this.hassOsInfo
                  ].filter(function(e) {
                    return (
                      !!e &&
                      (e.last_version
                        ? e.version !== e.last_version
                        : e.version !== e.version_latest)
                    );
                  }).length;
                  return e
                    ? Object(n.e)(
                        ke(),
                        this._error ? Object(n.e)(we(), this._error) : "",
                        e > 1 ? "Updates Available 🎉" : "Update Available 🎉",
                        this._renderUpdateCard(
                          "Home Assistant Core",
                          this.hassInfo.version,
                          this.hassInfo.last_version,
                          "hassio/homeassistant/update",
                          "https://".concat(
                            this.hassInfo.last_version.includes("b")
                              ? "rc"
                              : "www",
                            ".home-assistant.io/latest-release-notes/"
                          ),
                          "hassio:home-assistant"
                        ),
                        this._renderUpdateCard(
                          "Supervisor",
                          this.supervisorInfo.version,
                          this.supervisorInfo.last_version,
                          "hassio/supervisor/update",
                          "https://github.com//home-assistant/hassio/releases/tag/".concat(
                            this.supervisorInfo.last_version
                          )
                        ),
                        this.hassOsInfo
                          ? this._renderUpdateCard(
                              "Operating System",
                              this.hassOsInfo.version,
                              this.hassOsInfo.version_latest,
                              "hassio/hassos/update",
                              "https://github.com//home-assistant/hassos/releases/tag/".concat(
                                this.hassOsInfo.version_latest
                              )
                            )
                          : ""
                      )
                    : Object(n.e)(Ee());
                }
              },
              {
                kind: "method",
                key: "_renderUpdateCard",
                value: function(e, t, r, i, o, a) {
                  return r === t
                    ? Object(n.e)(ge())
                    : Object(n.e)(
                        be(),
                        a ? Object(n.e)(ve(), a) : "",
                        e,
                        r,
                        t,
                        o,
                        this.hass,
                        i,
                        this._apiCalled
                      );
                }
              },
              {
                kind: "method",
                key: "_apiCalled",
                value: function(e) {
                  if (e.detail.success) this._error = "";
                  else {
                    var t = e.detail.response;
                    "object" === ye(t.body)
                      ? (this._error = t.body.message || "Unknown error")
                      : (this._error = t.body);
                  }
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, K.a, Object(n.c)(me())];
                }
              }
            ]
          };
        },
        n.a
      );
      function ze(e) {
        return (ze =
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
      function Re() {
        var e = Fe([
          "\n        .content {\n          margin: 0 auto;\n        }\n      "
        ]);
        return (
          (Re = function() {
            return e;
          }),
          e
        );
      }
      function Ie() {
        var e = Fe([
          '\n      <div class="content">\n        <hassio-update\n          .hass=',
          "\n          .hassInfo=",
          "\n          .supervisorInfo=",
          "\n          .hassOsInfo=",
          "\n        ></hassio-update>\n        <hassio-addons\n          .hass=",
          "\n          .addons=",
          "\n        ></hassio-addons>\n      </div>\n    "
        ]);
        return (
          (Ie = function() {
            return e;
          }),
          e
        );
      }
      function Fe(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Le(e) {
        return (Le = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Ne(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function He(e, t) {
        return (He =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Ue(e) {
        var t,
          r = qe(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Be(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Me(e) {
        return e.decorators && e.decorators.length;
      }
      function Ge(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Ve(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function qe(e) {
        var t = (function(e, t) {
          if ("object" !== ze(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== ze(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === ze(t) ? t : String(t);
      }
      (function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!Me(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = qe(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = Ve(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = Ve(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (Ge(o.descriptor) || Ge(i.descriptor)) {
                    if (Me(o) || Me(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Me(o)) {
                      if (Me(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Be(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Ue)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-dashboard")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = Le(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== ze(o) && "function" != typeof o)
                      ? Ne(i)
                      : o),
                  e(Ne(r)),
                  r
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
                    t && He(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "supervisorInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassOsInfo",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    Ie(),
                    this.hass,
                    this.hassInfo,
                    this.supervisorInfo,
                    this.hassOsInfo,
                    this.hass,
                    this.supervisorInfo.addons
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, Object(n.c)(Re())];
                }
              }
            ]
          };
        },
        n.a
      ),
        r(132),
        r(40),
        r(114),
        r(133);
      var We = r(115);
      function Je(e) {
        return (Je =
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
      function Ye() {
        var e = nt([
          '\n        paper-radio-group {\n          display: block;\n        }\n        paper-radio-button {\n          padding: 0 0 2px 2px;\n        }\n        paper-radio-button,\n        paper-checkbox,\n        paper-input[type="password"] {\n          display: block;\n          margin: 4px 0 4px 48px;\n        }\n        .pointer {\n          cursor: pointer;\n        }\n      '
        ]);
        return (
          (Ye = function() {
            return e;
          }),
          e
        );
      }
      function $e() {
        var e = nt([
          '\n                  <paper-card\n                    class="pointer"\n                    .snapshot=',
          "\n                    @click=",
          '\n                  >\n                    <div class="card-content">\n                      <hassio-card-content\n                        .hass=',
          "\n                        .title=",
          "\n                        .description=",
          "\n                        .datetime=",
          "\n                        .icon=",
          '\n                        .\n                        .icon-class="snapshot"\n                      ></hassio-card-content>\n                    </div>\n                  </paper-card>\n                '
        ]);
        return (
          ($e = function() {
            return e;
          }),
          e
        );
      }
      function Ke() {
        var e = nt([
          '\n                <paper-card>\n                  <div class="card-content">\n                    You don\'t have any snapshots yet.\n                  </div>\n                </paper-card>\n              '
        ]);
        return (
          (Ke = function() {
            return e;
          }),
          e
        );
      }
      function Qe() {
        var e = nt([
          '\n                    <p class="error">',
          "</p>\n                  "
        ]);
        return (
          (Qe = function() {
            return e;
          }),
          e
        );
      }
      function Xe() {
        var e = nt([
          '\n                    <paper-input\n                      label="Password"\n                      type="password"\n                      name="snapshotPassword"\n                      .value=',
          "\n                      @value-changed=",
          "\n                    ></paper-input>\n                  "
        ]);
        return (
          (Xe = function() {
            return e;
          }),
          e
        );
      }
      function Ze() {
        var e = nt([
          "\n                        <paper-checkbox\n                          .idx=",
          '\n                          .checked="{{item.checked}}"\n                          @checked-changed=',
          "\n                        >\n                          ",
          "\n                        </paper-checkbox>\n                      "
        ]);
        return (
          (Ze = function() {
            return e;
          }),
          e
        );
      }
      function et() {
        var e = nt([
          "\n                        <paper-checkbox\n                          .idx=",
          "\n                          .checked=",
          "\n                          @checked-changed=",
          "\n                        >\n                          ",
          "\n                        </paper-checkbox>\n                      "
        ]);
        return (
          (et = function() {
            return e;
          }),
          e
        );
      }
      function tt() {
        var e = nt([
          "\n                    Folders:\n                    ",
          "\n                    Add-ons:\n                    ",
          "\n                  "
        ]);
        return (
          (tt = function() {
            return e;
          }),
          e
        );
      }
      function rt() {
        var e = nt([
          '\n      <div class="content">\n        <h1>\n          Create snapshot\n        </h1>\n        <p class="description">\n          Snapshots allow you to easily backup and restore all data of your Home\n          Assistant instance.\n        </p>\n        <div class="card-group">\n          <paper-card>\n            <div class="card-content">\n              <paper-input\n                autofocus\n                label="Name"\n                name="snapshotName"\n                .value=',
          "\n                @value-changed=",
          '\n              ></paper-input>\n              Type:\n              <paper-radio-group\n                name="snapshotType"\n                .selected=',
          "\n                @selected-changed=",
          '\n              >\n                <paper-radio-button name="full">\n                  Full snapshot\n                </paper-radio-button>\n                <paper-radio-button name="partial">\n                  Partial snapshot\n                </paper-radio-button>\n              </paper-radio-group>\n              ',
          '\n              Security:\n              <paper-checkbox\n                name="snapshotHasPassword"\n                .checked=',
          "\n                @checked-changed=",
          "\n              >\n                Password protection\n              </paper-checkbox>\n              ",
          "\n              ",
          '\n            </div>\n            <div class="card-actions">\n              <mwc-button\n                .disabled=',
          "\n                @click=",
          '\n              >\n                Create\n              </mwc-button>\n            </div>\n          </paper-card>\n        </div>\n\n        <h1>Available snapshots</h1>\n        <div class="card-group">\n          ',
          "\n        </div>\n      </div>\n    "
        ]);
        return (
          (rt = function() {
            return e;
          }),
          e
        );
      }
      function nt(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function it(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ot(e, t) {
        return (ot =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function at(e) {
        var t,
          r = dt(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function st(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function ct(e) {
        return e.decorators && e.decorators.length;
      }
      function lt(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function ut(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function dt(e) {
        var t = (function(e, t) {
          if ("object" !== Je(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Je(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Je(t) ? t : String(t);
      }
      function ft(e, t, r) {
        return (ft =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = pt(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function pt(e) {
        return (pt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!ct(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = dt(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = ut(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = ut(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (lt(o.descriptor) || lt(i.descriptor)) {
                    if (ct(o) || ct(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (ct(o)) {
                      if (ct(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    st(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(at)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-snapshots")],
        function(e, t) {
          var o = (function(r) {
            function n() {
              var t, r, i, o;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              for (
                var a = arguments.length, s = new Array(a), c = 0;
                c < a;
                c++
              )
                s[c] = arguments[c];
              return (
                (i = this),
                (r =
                  !(o = (t = pt(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== Je(o) && "function" != typeof o)
                    ? it(i)
                    : o),
                e(it(r)),
                r
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
                  t && ot(e, t);
              })(n, t),
              n
            );
          })();
          return {
            F: o,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "supervisorInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_snapshotName",
                value: function() {
                  return "";
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_snapshotPassword",
                value: function() {
                  return "";
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_snapshotHasPassword",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_snapshotType",
                value: function() {
                  return "full";
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_snapshots",
                value: function() {
                  return [];
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_addonList",
                value: function() {
                  return [];
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_folderList",
                value: function() {
                  return [
                    {
                      slug: "homeassistant",
                      name: "Home Assistant configuration",
                      checked: !0
                    },
                    { slug: "ssl", name: "SSL", checked: !0 },
                    { slug: "share", name: "Share", checked: !0 },
                    { slug: "addons/local", name: "Local add-ons", checked: !0 }
                  ];
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_creatingSnapshot",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_error",
                value: function() {
                  return "";
                }
              },
              {
                kind: "method",
                key: "refreshData",
                value: function() {
                  return regeneratorRuntime.async(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              regeneratorRuntime.awrap(Object(We.e)(this.hass))
                            );
                          case 2:
                            return (
                              (e.next = 4),
                              regeneratorRuntime.awrap(this._updateSnapshots())
                            );
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    },
                    null,
                    this
                  );
                }
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e = this;
                  return Object(n.e)(
                    rt(),
                    this._snapshotName,
                    this._handleTextValueChanged,
                    this._snapshotType,
                    this._handleRadioValueChanged,
                    "full" === this._snapshotType
                      ? void 0
                      : Object(n.e)(
                          tt(),
                          this._folderList.map(function(t, r) {
                            return Object(n.e)(
                              et(),
                              r,
                              t.checked,
                              e._folderChecked,
                              t.name
                            );
                          }),
                          this._addonList.map(function(t, r) {
                            return Object(n.e)(
                              Ze(),
                              r,
                              e._addonChecked,
                              t.name
                            );
                          })
                        ),
                    this._snapshotHasPassword,
                    this._handleCheckboxValueChanged,
                    this._snapshotHasPassword
                      ? Object(n.e)(
                          Xe(),
                          this._snapshotPassword,
                          this._handleTextValueChanged
                        )
                      : void 0,
                    "" !== this._error
                      ? Object(n.e)(Qe(), this._error)
                      : void 0,
                    this._creatingSnapshot,
                    this._createSnapshot,
                    void 0 === this._snapshots
                      ? void 0
                      : 0 === this._snapshots.length
                      ? Object(n.e)(Ke())
                      : this._snapshots.map(function(t) {
                          return Object(n.e)(
                            $e(),
                            t,
                            e._snapshotClicked,
                            e.hass,
                            t.name || t.slug,
                            e._computeDetails(t),
                            t.date,
                            "full" === t.type
                              ? "hassio:package-variant-closed"
                              : "hassio:package-variant"
                          );
                        })
                  );
                }
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function(e) {
                  ft(pt(o.prototype), "firstUpdated", this).call(this, e),
                    this._updateSnapshots();
                }
              },
              {
                kind: "method",
                key: "updated",
                value: function(e) {
                  e.has("supervisorInfo") &&
                    (this._addonList = this.supervisorInfo.addons
                      .map(function(e) {
                        return {
                          slug: e.slug,
                          name: e.name,
                          checked: !0
                        };
                      })
                      .sort(function(e, t) {
                        return e.name < t.name ? -1 : 1;
                      }));
                }
              },
              {
                kind: "method",
                key: "_handleTextValueChanged",
                value: function(e) {
                  var t = e.currentTarget;
                  this["_".concat(t.name)] = e.detail.value;
                }
              },
              {
                kind: "method",
                key: "_handleCheckboxValueChanged",
                value: function(e) {
                  var t = e.currentTarget;
                  this["_".concat(t.name)] = t.checked;
                }
              },
              {
                kind: "method",
                key: "_handleRadioValueChanged",
                value: function(e) {
                  var t = e.currentTarget;
                  this["_".concat(t.getAttribute("name"))] = e.detail.value;
                }
              },
              {
                kind: "method",
                key: "_folderChecked",
                value: function(e) {
                  var t = e.currentTarget,
                    r = t.idx,
                    n = t.checked;
                  this._folderList = this._folderList.map(function(e, t) {
                    return t === r ? Object.assign({}, e, { checked: n }) : e;
                  });
                }
              },
              {
                kind: "method",
                key: "_addonChecked",
                value: function(e) {
                  var t = e.currentTarget,
                    r = t.idx,
                    n = t.checked;
                  this._addonList = this._addonList.map(function(e, t) {
                    return t === r ? Object.assign({}, e, { checked: n }) : e;
                  });
                }
              },
              {
                kind: "method",
                key: "_updateSnapshots",
                value: function() {
                  return regeneratorRuntime.async(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              regeneratorRuntime.awrap(Object(We.d)(this.hass))
                            );
                          case 3:
                            (this._snapshots = e.sent),
                              this._snapshots.sort(function(e, t) {
                                return e.date < t.date ? 1 : -1;
                              }),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              (this._error = e.t0.message);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    null,
                    this,
                    [[0, 7]]
                  );
                }
              },
              {
                kind: "method",
                key: "_createSnapshot",
                value: function() {
                  var e, t, r, n, i;
                  return regeneratorRuntime.async(
                    function(o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            if (
                              ((this._error = ""),
                              !this._snapshotHasPassword ||
                                this._snapshotPassword.length)
                            ) {
                              o.next = 4;
                              break;
                            }
                            return (
                              (this._error = "Please enter a password."),
                              o.abrupt("return")
                            );
                          case 4:
                            return (
                              (this._creatingSnapshot = !0),
                              (o.next = 7),
                              regeneratorRuntime.awrap(this.updateComplete)
                            );
                          case 7:
                            if (
                              ((e =
                                this._snapshotName ||
                                new Date().toLocaleDateString(
                                  navigator.language,
                                  {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric"
                                  }
                                )),
                              (o.prev = 8),
                              "full" !== this._snapshotType)
                            ) {
                              o.next = 16;
                              break;
                            }
                            return (
                              (t = { name: e }),
                              this._snapshotHasPassword &&
                                (t.password = this._snapshotPassword),
                              (o.next = 14),
                              regeneratorRuntime.awrap(
                                Object(We.a)(this.hass, t)
                              )
                            );
                          case 14:
                            o.next = 22;
                            break;
                          case 16:
                            return (
                              (r = this._addonList
                                .filter(function(e) {
                                  return e.checked;
                                })
                                .map(function(e) {
                                  return e.slug;
                                })),
                              (n = this._folderList
                                .filter(function(e) {
                                  return e.checked;
                                })
                                .map(function(e) {
                                  return e.slug;
                                })),
                              (i = { name: e, folders: n, addons: r }),
                              this._snapshotHasPassword &&
                                (i.password = this._snapshotPassword),
                              (o.next = 22),
                              regeneratorRuntime.awrap(
                                Object(We.b)(this.hass, i)
                              )
                            );
                          case 22:
                            this._updateSnapshots(),
                              Object(c.a)(this, "hass-api-called", {
                                success: !0,
                                response: null
                              }),
                              (o.next = 29);
                            break;
                          case 26:
                            (o.prev = 26),
                              (o.t0 = o.catch(8)),
                              (this._error = o.t0.message);
                          case 29:
                            return (
                              (o.prev = 29),
                              (this._creatingSnapshot = !1),
                              o.finish(29)
                            );
                          case 32:
                          case "end":
                            return o.stop();
                        }
                    },
                    null,
                    this,
                    [[8, 26, 29, 32]]
                  );
                }
              },
              {
                kind: "method",
                key: "_computeDetails",
                value: function(e) {
                  var t =
                    "full" === e.type ? "Full snapshot" : "Partial snapshot";
                  return e.protected ? "".concat(t, ", password protected") : t;
                }
              },
              {
                kind: "method",
                key: "_snapshotClicked",
                value: function(e) {
                  var t,
                    n,
                    i = this;
                  (t = this),
                    (n = {
                      slug: e.currentTarget.snapshot.slug,
                      onDelete: function() {
                        return i._updateSnapshots();
                      }
                    }),
                    Object(c.a)(t, "show-dialog", {
                      dialogTag: "dialog-hassio-snapshot",
                      dialogImport: function() {
                        return r.e(5).then(r.bind(null, 178));
                      },
                      dialogParams: n
                    });
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, K.a, Object(n.c)(Ye())];
                }
              }
            ]
          };
        },
        n.a
      );
      var ht = r(134);
      function mt(e) {
        return (mt =
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
      function yt() {
        var e = kt([
          "\n        paper-card {\n          cursor: pointer;\n        }\n        .not_available {\n          opacity: 0.6;\n        }\n        a.repo {\n          color: var(--primary-text-color);\n        }\n      "
        ]);
        return (
          (yt = function() {
            return e;
          }),
          e
        );
      }
      function vt(e, t) {
        return (
          At(e) ||
          (function(e, t) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              )
            )
              return;
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(n = (a = s.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (c) {
              (i = !0), (o = c);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(e, t) ||
          Tt()
        );
      }
      function bt() {
        var e = kt([
          "\n              <paper-card\n                .addon=",
          "\n                class=",
          "\n                @click=",
          '\n              >\n                <div class="card-content">\n                  <hassio-card-content\n                    .hass=',
          "\n                    .title=",
          "\n                    .description=",
          "\n                    .available=",
          "\n                    .icon=",
          "\n                    .iconTitle=",
          "\n                    .iconClass=",
          "\n                    .iconImage=",
          "\n                    .showTopbar=",
          "\n                    .topbarClass=",
          "\n                  ></hassio-card-content>\n                </div>\n              </paper-card>\n            "
        ]);
        return (
          (bt = function() {
            return e;
          }),
          e
        );
      }
      function gt() {
        var e = kt([
          '\n      <div class="content">\n        <h1>\n          ',
          '\n        </h1>\n        <p class="description">\n          Maintained by ',
          '<br />\n          <a class="repo" href=',
          ' target="_blank">',
          '</a>\n        </p>\n        <div class="card-group">\n          ',
          "\n        </div>\n      </div>\n    "
        ]);
        return (
          (gt = function() {
            return e;
          }),
          e
        );
      }
      function wt() {
        var e = kt([
          '\n        <div class="content">\n          <p class="description">\n            No results found in "',
          '"\n          </p>\n        </div>\n      '
        ]);
        return (
          (wt = function() {
            return e;
          }),
          e
        );
      }
      function kt(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Et(e) {
        return (Et = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Ot(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function jt(e, t) {
        return (jt =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Pt(e) {
        var t,
          r = Dt(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function xt(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function _t(e) {
        return e.decorators && e.decorators.length;
      }
      function St(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Ct(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Dt(e) {
        var t = (function(e, t) {
          if ("object" !== mt(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== mt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === mt(t) ? t : String(t);
      }
      function Tt() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      }
      function At(e) {
        if (Array.isArray(e)) return e;
      }
      var zt = (function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!_t(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                At(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  Tt()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Dt(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = Ct(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = Ct(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (St(o.descriptor) || St(i.descriptor)) {
                    if (_t(o) || _t(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (_t(o)) {
                      if (_t(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    xt(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Pt)),
            e
          );
        return (
          i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers)
        );
      })(
        null,
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = Et(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== mt(o) && "function" != typeof o)
                      ? Ot(i)
                      : o),
                  e(Ot(r)),
                  r
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
                    t && jt(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "repo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "addons",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "filter",
                value: void 0
              },
              {
                kind: "field",
                key: "_getAddons",
                value: function() {
                  return Object(O.a)(function(e, t) {
                    return t
                      ? (function(e, t) {
                          return new ht(e, {
                            keys: ["name", "description", "slug"],
                            caseSensitive: !1,
                            minMatchCharLength: 2,
                            threshold: 0.2
                          }).search(t);
                        })(e, t)
                      : e.sort(function(e, t) {
                          return e.name.toUpperCase() < t.name.toUpperCase()
                            ? -1
                            : 1;
                        });
                  });
                }
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e = this,
                    t = this.repo,
                    r = this._getAddons(this.addons, this.filter),
                    i = this._computeHA105plus;
                  return this.filter && r.length < 1
                    ? Object(n.e)(wt(), t.name)
                    : Object(n.e)(
                        gt(),
                        t.name,
                        t.maintainer,
                        t.url,
                        t.url,
                        r.map(function(t) {
                          return Object(n.e)(
                            bt(),
                            t,
                            t.available ? "" : "not_available",
                            e._addonTapped,
                            e.hass,
                            t.name,
                            t.description,
                            t.available,
                            t.installed && t.installed !== t.version
                              ? "hassio:arrow-up-bold-circle"
                              : "hassio:puzzle",
                            t.installed
                              ? t.installed !== t.version
                                ? "New version available"
                                : "Add-on is installed"
                              : t.available
                              ? "Add-on is not installed"
                              : "Add-on is not available on your system",
                            t.installed
                              ? t.installed !== t.version
                                ? "update"
                                : "installed"
                              : t.available
                              ? ""
                              : "not_available",
                            i && t.icon
                              ? "/api/hassio/addons/".concat(t.slug, "/icon")
                              : void 0,
                            t.installed || !t.available,
                            t.installed
                              ? t.installed !== t.version
                                ? "update"
                                : "installed"
                              : t.available
                              ? ""
                              : "unavailable"
                          );
                        })
                      );
                }
              },
              {
                kind: "method",
                key: "_addonTapped",
                value: function(e) {
                  Object(E.a)(
                    this,
                    "/hassio/addon/".concat(e.currentTarget.addon.slug)
                  );
                }
              },
              {
                kind: "get",
                key: "_computeHA105plus",
                value: function() {
                  var e = vt(this.hass.config.version.split(".", 2), 2),
                    t = e[0],
                    r = e[1];
                  return Number(t) > 0 || ("0" === t && Number(r) >= 105);
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [K.a, Object(n.c)(yt())];
                }
              }
            ]
          };
        },
        n.a
      );
      customElements.define("hassio-addon-repository", zt);
      var Rt = r(135);
      function It(e) {
        return (It =
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
      function Ft() {
        var e = Ht([
          "\n        .add {\n          padding: 12px 16px;\n        }\n        iron-icon {\n          color: var(--secondary-text-color);\n          margin-right: 16px;\n          display: inline-block;\n        }\n        paper-input {\n          width: calc(100% - 49px);\n          display: inline-block;\n          margin-top: -4px;\n        }\n      "
        ]);
        return (
          (Ft = function() {
            return e;
          }),
          e
        );
      }
      function Lt() {
        var e = Ht([
          '\n              <paper-card>\n                <div class="card-content">\n                  <hassio-card-content\n                    .hass=',
          "\n                    .title=",
          "\n                    .description=",
          '\n                    icon="hassio:github-circle"\n                  ></hassio-card-content>\n                </div>\n                <div class="card-actions">\n                  <ha-call-api-button\n                    path="hassio/supervisor/options"\n                    .hass=',
          "\n                    .data=",
          '\n                    class="warning"\n                  >\n                    Remove\n                  </ha-call-api-button>\n                </div>\n              </paper-card>\n            '
        ]);
        return (
          (Lt = function() {
            return e;
          }),
          e
        );
      }
      function Nt() {
        var e = Ht([
          '\n      <div class="content">\n        <h1>\n          Repositories\n        </h1>\n        <p class="description">\n          Configure which add-on repositories to fetch data from:\n        </p>\n        <div class="card-group">\n          ',
          '\n\n          <paper-card>\n            <div class="card-content add">\n              <iron-icon icon="hassio:github-circle"></iron-icon>\n              <paper-input\n                label="Add new repository by URL"\n                .value=',
          "\n                @value-changed=",
          '\n              ></paper-input>\n            </div>\n            <div class="card-actions">\n              <ha-call-api-button\n                path="hassio/supervisor/options"\n                .hass=',
          "\n                .data=",
          "\n              >\n                Add\n              </ha-call-api-button>\n            </div>\n          </paper-card>\n        </div>\n      </div>\n    "
        ]);
        return (
          (Nt = function() {
            return e;
          }),
          e
        );
      }
      function Ht(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Ut(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Bt(e, t) {
        return (Bt =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Mt(e) {
        var t,
          r = Jt(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Gt(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Vt(e) {
        return e.decorators && e.decorators.length;
      }
      function qt(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Wt(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Jt(e) {
        var t = (function(e, t) {
          if ("object" !== It(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== It(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === It(t) ? t : String(t);
      }
      function Yt(e, t, r) {
        return (Yt =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = $t(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function $t(e) {
        return ($t = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!Vt(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Jt(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = Wt(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = Wt(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (qt(o.descriptor) || qt(i.descriptor)) {
                    if (Vt(o) || Vt(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Vt(o)) {
                      if (Vt(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Gt(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Mt)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-repositories-editor")],
        function(e, t) {
          var r = (function(r) {
            function n() {
              var t, r, i, o;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              for (
                var a = arguments.length, s = new Array(a), c = 0;
                c < a;
                c++
              )
                s[c] = arguments[c];
              return (
                (i = this),
                (r =
                  !(o = (t = $t(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== It(o) && "function" != typeof o)
                    ? Ut(i)
                    : o),
                e(Ut(r)),
                r
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
                  t && Bt(e, t);
              })(n, t),
              n
            );
          })();
          return {
            F: r,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "repos",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_repoUrl",
                value: function() {
                  return "";
                }
              },
              {
                kind: "field",
                key: "_sortedRepos",
                value: function() {
                  return Object(O.a)(function(e) {
                    return e
                      .filter(function(e) {
                        return "core" !== e.slug && "local" !== e.slug;
                      })
                      .sort(function(e, t) {
                        return e.name < t.name ? -1 : 1;
                      });
                  });
                }
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e = this,
                    t = this._sortedRepos(this.repos);
                  return Object(n.e)(
                    Nt(),
                    Object(Rt.a)(
                      t,
                      function(e) {
                        return e.slug;
                      },
                      function(r) {
                        return Object(n.e)(
                          Lt(),
                          e.hass,
                          r.name,
                          r.url,
                          e.hass,
                          e.computeRemoveRepoData(t, r.url)
                        );
                      }
                    ),
                    this._repoUrl,
                    this._urlChanged,
                    this.hass,
                    this.computeAddRepoData(t, this._repoUrl)
                  );
                }
              },
              {
                kind: "method",
                key: "updated",
                value: function(e) {
                  Yt($t(r.prototype), "updated", this).call(this, e),
                    e.has("repos") && (this._repoUrl = "");
                }
              },
              {
                kind: "method",
                key: "_urlChanged",
                value: function(e) {
                  this._repoUrl = e.detail.value;
                }
              },
              {
                kind: "method",
                key: "computeRemoveRepoData",
                value: function(e, t) {
                  return {
                    addons_repositories: e
                      .filter(function(e) {
                        return e.url !== t;
                      })
                      .map(function(e) {
                        return e.source;
                      })
                  };
                }
              },
              {
                kind: "method",
                key: "computeAddRepoData",
                value: function(e, t) {
                  var r = e
                    ? e.map(function(e) {
                        return e.source;
                      })
                    : [];
                  return r.push(t), { addons_repositories: r };
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [K.a, Object(n.c)(Ft())];
                }
              }
            ]
          };
        },
        n.a
      );
      var Kt = r(16);
      r(82);
      function Qt(e) {
        return (Qt =
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
      function Xt() {
        var e = er([
          "\n      :host {\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n    "
        ]);
        return (
          (Xt = function() {
            return e;
          }),
          e
        );
      }
      function Zt() {
        var e = er([
          "\n      <paper-spinner-lite active></paper-spinner-lite>\n    "
        ]);
        return (
          (Zt = function() {
            return e;
          }),
          e
        );
      }
      function er(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function tr(e) {
        return (tr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function rr(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function nr(e, t) {
        return (nr =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ir(e) {
        var t,
          r = lr(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function or(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function ar(e) {
        return e.decorators && e.decorators.length;
      }
      function sr(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function cr(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function lr(e) {
        var t = (function(e, t) {
          if ("object" !== Qt(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Qt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Qt(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!ar(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = lr(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = cr(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = cr(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (sr(o.descriptor) || sr(i.descriptor)) {
                    if (ar(o) || ar(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (ar(o)) {
                      if (ar(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    or(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(ir)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("loading-screen")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = tr(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== Qt(o) && "function" != typeof o)
                      ? rr(i)
                      : o),
                  e(rr(r)),
                  r
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
                    t && nr(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(Zt());
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(n.c)(Xt());
                }
              }
            ]
          };
        },
        n.a
      );
      function ur(e) {
        return (ur =
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
      function dr() {
        var e = hr([
          "\n      paper-input {\n        flex: 1 1 auto;\n        margin: 0 16px;\n      }\n      .search-container {\n        display: inline-flex;\n        width: 100%;\n        align-items: center;\n      }\n      .prefix {\n        margin: 8px;\n      }\n    "
        ]);
        return (
          (dr = function() {
            return e;
          }),
          e
        );
      }
      function fr() {
        var e = hr([
          '\n              <paper-icon-button\n                slot="suffix"\n                class="suffix"\n                @click=',
          '\n                icon="hassio:close"\n                alt="Clear"\n                title="Clear"\n              ></paper-icon-button>\n            '
        ]);
        return (
          (fr = function() {
            return e;
          }),
          e
        );
      }
      function pr() {
        var e = hr([
          '\n      <div class="search-container">\n        <paper-input\n          label="Search"\n          .value=',
          "\n          @value-changed=",
          '\n        >\n          <iron-icon\n            icon="hassio:magnify"\n            slot="prefix"\n            class="prefix"\n          ></iron-icon>\n          ',
          "\n        </paper-input>\n      </div>\n    "
        ]);
        return (
          (pr = function() {
            return e;
          }),
          e
        );
      }
      function hr(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function mr(e) {
        return (mr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function yr(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function vr(e, t) {
        return (vr =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function br(e) {
        var t,
          r = Or(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function gr(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function wr(e) {
        return e.decorators && e.decorators.length;
      }
      function kr(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Er(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Or(e) {
        var t = (function(e, t) {
          if ("object" !== ur(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== ur(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === ur(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!wr(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Or(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = Er(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = Er(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (kr(o.descriptor) || kr(i.descriptor)) {
                    if (wr(o) || wr(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (wr(o)) {
                      if (wr(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    gr(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(br)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-search-input")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = mr(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== ur(o) && "function" != typeof o)
                      ? yr(i)
                      : o),
                  e(yr(r)),
                  r
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
                    t && vr(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "filter",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(Kt.g)(
                    pr(),
                    this.filter,
                    this._filterInputChanged,
                    this.filter && Object(Kt.g)(fr(), this._clearSearch)
                  );
                }
              },
              {
                kind: "method",
                key: "_filterChanged",
                value: function(e) {
                  return regeneratorRuntime.async(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            Object(c.a)(this, "value-changed", {
                              value: String(e)
                            });
                          case 1:
                          case "end":
                            return t.stop();
                        }
                    },
                    null,
                    this
                  );
                }
              },
              {
                kind: "method",
                key: "_filterInputChanged",
                value: function(e) {
                  return regeneratorRuntime.async(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            this._filterChanged(e.target.value);
                          case 1:
                          case "end":
                            return t.stop();
                        }
                    },
                    null,
                    this
                  );
                }
              },
              {
                kind: "method",
                key: "_clearSearch",
                value: function() {
                  return regeneratorRuntime.async(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            this._filterChanged("");
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    },
                    null,
                    this
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(n.c)(dr());
                }
              }
            ]
          };
        },
        n.a
      );
      function jr(e) {
        return (jr =
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
      function Pr() {
        var e = Cr([
          "\n      hassio-addon-repository {\n        margin-top: 24px;\n      }\n    "
        ]);
        return (
          (Pr = function() {
            return e;
          }),
          e
        );
      }
      function xr() {
        var e = Cr([
          "\n        <hassio-addon-repository\n          .hass=",
          "\n          .repo=",
          "\n          .addons=",
          "\n          .filter=",
          "\n        ></hassio-addon-repository>\n      "
        ]);
        return (
          (xr = function() {
            return e;
          }),
          e
        );
      }
      function _r() {
        var e = Cr([
          "\n      <hassio-repositories-editor\n        .hass=",
          "\n        .repos=",
          "\n      ></hassio-repositories-editor>\n\n      <hassio-search-input\n        .filter=",
          "\n        @value-changed=",
          "\n      ></hassio-search-input>\n\n      ",
          "\n    "
        ]);
        return (
          (_r = function() {
            return e;
          }),
          e
        );
      }
      function Sr() {
        var e = Cr(["\n        <loading-screen></loading-screen>\n      "]);
        return (
          (Sr = function() {
            return e;
          }),
          e
        );
      }
      function Cr(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Dr(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Tr(e, t) {
        return (Tr =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Ar(e) {
        var t,
          r = Lr(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function zr(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Rr(e) {
        return e.decorators && e.decorators.length;
      }
      function Ir(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Fr(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Lr(e) {
        var t = (function(e, t) {
          if ("object" !== jr(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== jr(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === jr(t) ? t : String(t);
      }
      function Nr(e, t, r) {
        return (Nr =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Hr(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function Hr(e) {
        return (Hr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var Ur = function(e, t) {
          return "local" === e.slug
            ? -1
            : "local" === t.slug
            ? 1
            : "core" === e.slug
            ? -1
            : "core" === t.slug
            ? 1
            : e.name.toUpperCase() < t.name.toUpperCase()
            ? -1
            : 1;
        },
        Br = (function(e, t, r, n) {
          var i = (function() {
            var e = {
              elementsDefinitionOrder: [["method"], ["field"]],
              initializeInstanceElements: function(e, t) {
                ["method", "field"].forEach(function(r) {
                  t.forEach(function(t) {
                    t.kind === r &&
                      "own" === t.placement &&
                      this.defineClassElement(e, t);
                  }, this);
                }, this);
              },
              initializeClassElements: function(e, t) {
                var r = e.prototype;
                ["method", "field"].forEach(function(n) {
                  t.forEach(function(t) {
                    var i = t.placement;
                    if (t.kind === n && ("static" === i || "prototype" === i)) {
                      var o = "static" === i ? e : r;
                      this.defineClassElement(o, t);
                    }
                  }, this);
                }, this);
              },
              defineClassElement: function(e, t) {
                var r = t.descriptor;
                if ("field" === t.kind) {
                  var n = t.initializer;
                  r = {
                    enumerable: r.enumerable,
                    writable: r.writable,
                    configurable: r.configurable,
                    value: void 0 === n ? void 0 : n.call(e)
                  };
                }
                Object.defineProperty(e, t.key, r);
              },
              decorateClass: function(e, t) {
                var r = [],
                  n = [],
                  i = { static: [], prototype: [], own: [] };
                if (
                  (e.forEach(function(e) {
                    this.addElementPlacement(e, i);
                  }, this),
                  e.forEach(function(e) {
                    if (!Rr(e)) return r.push(e);
                    var t = this.decorateElement(e, i);
                    r.push(t.element),
                      r.push.apply(r, t.extras),
                      n.push.apply(n, t.finishers);
                  }, this),
                  !t)
                )
                  return { elements: r, finishers: n };
                var o = this.decorateConstructor(r, t);
                return n.push.apply(n, o.finishers), (o.finishers = n), o;
              },
              addElementPlacement: function(e, t, r) {
                var n = t[e.placement];
                if (!r && -1 !== n.indexOf(e.key))
                  throw new TypeError("Duplicated element (" + e.key + ")");
                n.push(e.key);
              },
              decorateElement: function(e, t) {
                for (
                  var r = [], n = [], i = e.decorators, o = i.length - 1;
                  o >= 0;
                  o--
                ) {
                  var a = t[e.placement];
                  a.splice(a.indexOf(e.key), 1);
                  var s = this.fromElementDescriptor(e),
                    c = this.toElementFinisherExtras((0, i[o])(s) || s);
                  (e = c.element),
                    this.addElementPlacement(e, t),
                    c.finisher && n.push(c.finisher);
                  var l = c.extras;
                  if (l) {
                    for (var u = 0; u < l.length; u++)
                      this.addElementPlacement(l[u], t);
                    r.push.apply(r, l);
                  }
                }
                return { element: e, finishers: n, extras: r };
              },
              decorateConstructor: function(e, t) {
                for (var r = [], n = t.length - 1; n >= 0; n--) {
                  var i = this.fromClassDescriptor(e),
                    o = this.toClassDescriptor((0, t[n])(i) || i);
                  if (
                    (void 0 !== o.finisher && r.push(o.finisher),
                    void 0 !== o.elements)
                  ) {
                    e = o.elements;
                    for (var a = 0; a < e.length - 1; a++)
                      for (var s = a + 1; s < e.length; s++)
                        if (
                          e[a].key === e[s].key &&
                          e[a].placement === e[s].placement
                        )
                          throw new TypeError(
                            "Duplicated element (" + e[a].key + ")"
                          );
                  }
                }
                return { elements: e, finishers: r };
              },
              fromElementDescriptor: function(e) {
                var t = {
                  kind: e.kind,
                  key: e.key,
                  placement: e.placement,
                  descriptor: e.descriptor
                };
                return (
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0
                  }),
                  "field" === e.kind && (t.initializer = e.initializer),
                  t
                );
              },
              toElementDescriptors: function(e) {
                var t;
                if (void 0 !== e)
                  return ((t = e),
                  (function(e) {
                    if (Array.isArray(e)) return e;
                  })(t) ||
                    (function(e) {
                      if (
                        Symbol.iterator in Object(e) ||
                        "[object Arguments]" ===
                          Object.prototype.toString.call(e)
                      )
                        return Array.from(e);
                    })(t) ||
                    (function() {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance"
                      );
                    })()).map(function(e) {
                    var t = this.toElementDescriptor(e);
                    return (
                      this.disallowProperty(
                        e,
                        "finisher",
                        "An element descriptor"
                      ),
                      this.disallowProperty(
                        e,
                        "extras",
                        "An element descriptor"
                      ),
                      t
                    );
                  }, this);
              },
              toElementDescriptor: function(e) {
                var t = String(e.kind);
                if ("method" !== t && "field" !== t)
                  throw new TypeError(
                    'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                      t +
                      '"'
                  );
                var r = Lr(e.key),
                  n = String(e.placement);
                if ("static" !== n && "prototype" !== n && "own" !== n)
                  throw new TypeError(
                    'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                      n +
                      '"'
                  );
                var i = e.descriptor;
                this.disallowProperty(e, "elements", "An element descriptor");
                var o = {
                  kind: t,
                  key: r,
                  placement: n,
                  descriptor: Object.assign({}, i)
                };
                return (
                  "field" !== t
                    ? this.disallowProperty(
                        e,
                        "initializer",
                        "A method descriptor"
                      )
                    : (this.disallowProperty(
                        i,
                        "get",
                        "The property descriptor of a field descriptor"
                      ),
                      this.disallowProperty(
                        i,
                        "set",
                        "The property descriptor of a field descriptor"
                      ),
                      this.disallowProperty(
                        i,
                        "value",
                        "The property descriptor of a field descriptor"
                      ),
                      (o.initializer = e.initializer)),
                  o
                );
              },
              toElementFinisherExtras: function(e) {
                var t = this.toElementDescriptor(e),
                  r = Fr(e, "finisher"),
                  n = this.toElementDescriptors(e.extras);
                return { element: t, finisher: r, extras: n };
              },
              fromClassDescriptor: function(e) {
                var t = {
                  kind: "class",
                  elements: e.map(this.fromElementDescriptor, this)
                };
                return (
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0
                  }),
                  t
                );
              },
              toClassDescriptor: function(e) {
                var t = String(e.kind);
                if ("class" !== t)
                  throw new TypeError(
                    'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                      t +
                      '"'
                  );
                this.disallowProperty(e, "key", "A class descriptor"),
                  this.disallowProperty(e, "placement", "A class descriptor"),
                  this.disallowProperty(e, "descriptor", "A class descriptor"),
                  this.disallowProperty(e, "initializer", "A class descriptor"),
                  this.disallowProperty(e, "extras", "A class descriptor");
                var r = Fr(e, "finisher"),
                  n = this.toElementDescriptors(e.elements);
                return { elements: n, finisher: r };
              },
              runClassFinishers: function(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = (0, t[r])(e);
                  if (void 0 !== n) {
                    if ("function" != typeof n)
                      throw new TypeError(
                        "Finishers must return a constructor."
                      );
                    e = n;
                  }
                }
                return e;
              },
              disallowProperty: function(e, t, r) {
                if (void 0 !== e[t])
                  throw new TypeError(r + " can't have a ." + t + " property.");
              }
            };
            return e;
          })();
          if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
          var a = t(function(e) {
              i.initializeInstanceElements(e, s.elements);
            }, r),
            s = i.decorateClass(
              (function(e) {
                for (
                  var t = [],
                    r = function(e) {
                      return (
                        "method" === e.kind &&
                        e.key === o.key &&
                        e.placement === o.placement
                      );
                    },
                    n = 0;
                  n < e.length;
                  n++
                ) {
                  var i,
                    o = e[n];
                  if ("method" === o.kind && (i = t.find(r)))
                    if (Ir(o.descriptor) || Ir(i.descriptor)) {
                      if (Rr(o) || Rr(i))
                        throw new ReferenceError(
                          "Duplicated methods (" +
                            o.key +
                            ") can't be decorated."
                        );
                      i.descriptor = o.descriptor;
                    } else {
                      if (Rr(o)) {
                        if (Rr(i))
                          throw new ReferenceError(
                            "Decorators can't be placed on different accessors with for the same property (" +
                              o.key +
                              ")."
                          );
                        i.decorators = o.decorators;
                      }
                      zr(o, i);
                    }
                  else t.push(o);
                }
                return t;
              })(a.d.map(Ar)),
              e
            );
          return (
            i.initializeClassElements(a.F, s.elements),
            i.runClassFinishers(a.F, s.finishers)
          );
        })(
          null,
          function(e, t) {
            var r = (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = Hr(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== jr(o) && "function" != typeof o)
                      ? Dr(i)
                      : o),
                  e(Dr(r)),
                  r
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
                    t && Tr(e, t);
                })(n, t),
                n
              );
            })();
            return {
              F: r,
              d: [
                {
                  kind: "field",
                  decorators: [Object(n.f)()],
                  key: "hass",
                  value: void 0
                },
                {
                  kind: "field",
                  decorators: [Object(n.f)()],
                  key: "_addons",
                  value: void 0
                },
                {
                  kind: "field",
                  decorators: [Object(n.f)()],
                  key: "_repos",
                  value: void 0
                },
                {
                  kind: "field",
                  decorators: [Object(n.f)()],
                  key: "_filter",
                  value: void 0
                },
                {
                  kind: "method",
                  key: "refreshData",
                  value: function() {
                    return regeneratorRuntime.async(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this._repos = void 0),
                                (this._addons = void 0),
                                (this._filter = void 0),
                                (e.next = 5),
                                regeneratorRuntime.awrap(Object(U.f)(this.hass))
                              );
                            case 5:
                              return (
                                (e.next = 7),
                                regeneratorRuntime.awrap(this._loadData())
                              );
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      null,
                      this
                    );
                  }
                },
                {
                  kind: "method",
                  key: "render",
                  value: function() {
                    var e = this;
                    if (!this._addons || !this._repos)
                      return Object(Kt.g)(Sr());
                    var t = [],
                      r = !0,
                      n = !1,
                      i = void 0;
                    try {
                      for (
                        var o,
                          a = function() {
                            var r = o.value,
                              n = e._addons.filter(function(e) {
                                return e.repository === r.slug;
                              });
                            if (0 === n.length) return "continue";
                            t.push(Object(Kt.g)(xr(), e.hass, r, n, e._filter));
                          },
                          s = this._repos[Symbol.iterator]();
                        !(r = (o = s.next()).done);
                        r = !0
                      )
                        a();
                    } catch (c) {
                      (n = !0), (i = c);
                    } finally {
                      try {
                        r || null == s.return || s.return();
                      } finally {
                        if (n) throw i;
                      }
                    }
                    return Object(Kt.g)(
                      _r(),
                      this.hass,
                      this._repos,
                      this._filter,
                      this._filterChanged,
                      t
                    );
                  }
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function(e) {
                    var t = this;
                    Nr(Hr(r.prototype), "firstUpdated", this).call(this, e),
                      this.addEventListener("hass-api-called", function(e) {
                        return t.apiCalled(e);
                      }),
                      this._loadData();
                  }
                },
                {
                  kind: "method",
                  key: "apiCalled",
                  value: function(e) {
                    e.detail.success && this._loadData();
                  }
                },
                {
                  kind: "method",
                  key: "_loadData",
                  value: function() {
                    var e;
                    return regeneratorRuntime.async(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                regeneratorRuntime.awrap(Object(U.d)(this.hass))
                              );
                            case 3:
                              (e = t.sent),
                                (this._repos = e.repositories),
                                this._repos.sort(Ur),
                                (this._addons = e.addons),
                                (t.next = 12);
                              break;
                            case 9:
                              (t.prev = 9),
                                (t.t0 = t.catch(0)),
                                alert("Failed to fetch add-on info");
                            case 12:
                            case "end":
                              return t.stop();
                          }
                      },
                      null,
                      this,
                      [[0, 9]]
                    );
                  }
                },
                {
                  kind: "method",
                  key: "_filterChanged",
                  value: function(e) {
                    return regeneratorRuntime.async(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              this._filter = e.detail.value;
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      },
                      null,
                      this
                    );
                  }
                },
                {
                  kind: "get",
                  static: !0,
                  key: "styles",
                  value: function() {
                    return Object(n.c)(Pr());
                  }
                }
              ]
            };
          },
          n.a
        );
      customElements.define("hassio-addon-store", Br);
      r(124);
      var Mr = r(116),
        Gr = r(117);
      function Vr(e) {
        return (Vr =
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
      function qr() {
        var e = en([
          "\n        paper-card {\n          height: 100%;\n          width: 100%;\n        }\n        .card-content {\n          color: var(--primary-text-color);\n          box-sizing: border-box;\n          height: calc(100% - 47px);\n        }\n        .info {\n          width: 100%;\n        }\n        .info td:nth-child(2) {\n          text-align: right;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-top: 16px;\n        }\n        mwc-button.info {\n          max-width: calc(50% - 12px);\n        }\n        table.info {\n          margin-bottom: 10px;\n        }\n        .warning {\n          --mdc-theme-primary: var(--google-red-500);\n        }\n      "
        ]);
        return (
          (qr = function() {
            return e;
          }),
          e
        );
      }
      function Wr() {
        var e = en([
          "\n                <ha-call-api-button\n                  .hass=",
          '\n                  path="hassio/hassos/update"\n                  >Update</ha-call-api-button\n                >\n              '
        ]);
        return (
          (Wr = function() {
            return e;
          }),
          e
        );
      }
      function Jr() {
        var e = en([
          '\n                <ha-call-api-button\n                  class="warning"\n                  .hass=',
          '\n                  path="hassio/hassos/config/sync"\n                  title="Load HassOS configs or updates from USB"\n                  >Import from USB</ha-call-api-button\n                >\n              '
        ]);
        return (
          (Jr = function() {
            return e;
          }),
          e
        );
      }
      function Yr() {
        var e = en([
          '\n                <ha-call-api-button\n                  class="warning"\n                  .hass=',
          '\n                  path="hassio/host/shutdown"\n                  >Shutdown</ha-call-api-button\n                >\n              '
        ]);
        return (
          (Yr = function() {
            return e;
          }),
          e
        );
      }
      function $r() {
        var e = en([
          '\n                <ha-call-api-button\n                  class="warning"\n                  .hass=',
          '\n                  path="hassio/host/reboot"\n                  >Reboot</ha-call-api-button\n                >\n              '
        ]);
        return (
          ($r = function() {
            return e;
          }),
          e
        );
      }
      function Kr() {
        var e = en([
          '\n                <div class="errors">Error: ',
          "</div>\n              "
        ]);
        return (
          (Kr = function() {
            return e;
          }),
          e
        );
      }
      function Qr() {
        var e = en([
          "\n                <mwc-button\n                  raised\n                  @click=",
          '\n                  class="info"\n                >\n                  Change hostname\n                </mwc-button>\n              '
        ]);
        return (
          (Qr = function() {
            return e;
          }),
          e
        );
      }
      function Xr() {
        var e = en([
          "\n                    <tr>\n                      <td>Deployment</td>\n                      <td>",
          "</td>\n                    </tr>\n                  "
        ]);
        return (
          (Xr = function() {
            return e;
          }),
          e
        );
      }
      function Zr() {
        var e = en([
          '\n      <paper-card>\n        <div class="card-content">\n          <h2>Host system</h2>\n          <table class="info">\n            <tbody>\n              <tr>\n                <td>Hostname</td>\n                <td>',
          "</td>\n              </tr>\n              <tr>\n                <td>System</td>\n                <td>",
          "</td>\n              </tr>\n              ",
          "\n            </tbody>\n          </table>\n          <mwc-button raised @click=",
          ' class="info">\n            Hardware\n          </mwc-button>\n          ',
          "\n          ",
          '\n        </div>\n        <div class="card-actions">\n          ',
          "\n          ",
          "\n          ",
          "\n          ",
          "\n        </div>\n      </paper-card>\n    "
        ]);
        return (
          (Zr = function() {
            return e;
          }),
          e
        );
      }
      function en(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function tn(e) {
        return (tn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function rn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function nn(e, t) {
        return (nn =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function on(e) {
        var t,
          r = un(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function an(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function sn(e) {
        return e.decorators && e.decorators.length;
      }
      function cn(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function ln(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function un(e) {
        var t = (function(e, t) {
          if ("object" !== Vr(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Vr(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Vr(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!sn(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = un(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = ln(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = ln(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (cn(o.descriptor) || cn(i.descriptor)) {
                    if (sn(o) || sn(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (sn(o)) {
                      if (sn(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    an(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(on)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-host-info")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = tn(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== Vr(o) && "function" != typeof o)
                      ? rn(i)
                      : o),
                  e(rn(r)),
                  r
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
                    t && nn(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hostInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassOsInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_errors",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    Zr(),
                    this.hostInfo.hostname,
                    this.hostInfo.operating_system,
                    this.hostInfo.deployment
                      ? Object(n.e)(Xr(), this.hostInfo.deployment)
                      : "",
                    this._showHardware,
                    this.hostInfo.features.includes("hostname")
                      ? Object(n.e)(Qr(), this._changeHostnameClicked)
                      : "",
                    this._errors ? Object(n.e)(Kr(), this._errors) : "",
                    this.hostInfo.features.includes("reboot")
                      ? Object(n.e)($r(), this.hass)
                      : "",
                    this.hostInfo.features.includes("shutdown")
                      ? Object(n.e)(Yr(), this.hass)
                      : "",
                    this.hostInfo.features.includes("hassos")
                      ? Object(n.e)(Jr(), this.hass)
                      : "",
                    this.hostInfo.version !== this.hostInfo.version_latest
                      ? Object(n.e)(Wr(), this.hass)
                      : ""
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, K.a, Object(n.c)(qr())];
                }
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function() {
                  var e = this;
                  this.addEventListener("hass-api-called", function(t) {
                    return e._apiCalled(t);
                  });
                }
              },
              {
                kind: "method",
                key: "_apiCalled",
                value: function(e) {
                  if (e.detail.success) this._errors = void 0;
                  else {
                    var t = e.detail.response;
                    this._errors =
                      "object" === Vr(t.body)
                        ? t.body.message || "Unknown error"
                        : t.body;
                  }
                }
              },
              {
                kind: "method",
                key: "_showHardware",
                value: function() {
                  var e;
                  return regeneratorRuntime.async(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.t0 = this),
                              (t.next = 4),
                              regeneratorRuntime.awrap(Object(Mr.b)(this.hass))
                            );
                          case 4:
                            (t.t1 = t.sent),
                              (e = t.t0._objectToMarkdown.call(t.t0, t.t1)),
                              Object(Gr.a)(this, {
                                title: "Hardware",
                                content: e
                              }),
                              (t.next = 12);
                            break;
                          case 9:
                            (t.prev = 9),
                              (t.t2 = t.catch(0)),
                              Object(Gr.a)(this, {
                                title: "Hardware",
                                content: "Error getting hardware info"
                              });
                          case 12:
                          case "end":
                            return t.stop();
                        }
                    },
                    null,
                    this,
                    [[0, 9]]
                  );
                }
              },
              {
                kind: "method",
                key: "_objectToMarkdown",
                value: function(e) {
                  var t = this,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                    n = "";
                  return (
                    Object.keys(e).forEach(function(i) {
                      "object" !== Vr(e[i])
                        ? (n += ""
                            .concat(r, "- ")
                            .concat(i, ": ")
                            .concat(e[i], "\n"))
                        : ((n += "".concat(r, "- ").concat(i, ":\n")),
                          Array.isArray(e[i])
                            ? e[i].length &&
                              (n +=
                                "".concat(r, "    - ") +
                                e[i].join("\n".concat(r, "    - ")) +
                                "\n")
                            : (n += t._objectToMarkdown(
                                e[i],
                                "    ".concat(r)
                              )));
                    }),
                    n
                  );
                }
              },
              {
                kind: "method",
                key: "_changeHostnameClicked",
                value: function() {
                  var e = this.hostInfo.hostname,
                    t = prompt("Please enter a new hostname:", e);
                  t &&
                    t !== e &&
                    this.hass.callApi("POST", "hassio/host/options", {
                      hostname: t
                    });
                }
              }
            ]
          };
        },
        n.a
      );
      function dn(e) {
        return (dn =
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
      function fn() {
        var e = gn([
          "\n        paper-card {\n          height: 100%;\n          width: 100%;\n        }\n        .card-content {\n          color: var(--primary-text-color);\n          box-sizing: border-box;\n          height: calc(100% - 47px);\n        }\n        .info {\n          width: 100%;\n        }\n        .info td:nth-child(2) {\n          text-align: right;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-top: 16px;\n        }\n      "
        ]);
        return (
          (fn = function() {
            return e;
          }),
          e
        );
      }
      function pn() {
        var e = gn([
          "\n                <mwc-button\n                  @click=",
          '\n                  class="warning"\n                  title="Get beta updates for Home Assistant (RCs), supervisor and host"\n                  >Join beta channel</mwc-button\n                >\n              '
        ]);
        return (
          (pn = function() {
            return e;
          }),
          e
        );
      }
      function hn() {
        var e = gn([
          "\n                <ha-call-api-button\n                  .hass=",
          '\n                  path="hassio/supervisor/options"\n                  .data=',
          "\n                  >Leave beta channel</ha-call-api-button\n                >\n              "
        ]);
        return (
          (hn = function() {
            return e;
          }),
          e
        );
      }
      function mn() {
        var e = gn([
          "\n                <ha-call-api-button\n                  .hass=",
          '\n                  path="hassio/supervisor/update"\n                  >Update</ha-call-api-button\n                >\n              '
        ]);
        return (
          (mn = function() {
            return e;
          }),
          e
        );
      }
      function yn() {
        var e = gn([
          '\n                <div class="errors">Error: ',
          "</div>\n              "
        ]);
        return (
          (yn = function() {
            return e;
          }),
          e
        );
      }
      function vn() {
        var e = gn([
          "\n                    <tr>\n                      <td>Channel</td>\n                      <td>",
          "</td>\n                    </tr>\n                  "
        ]);
        return (
          (vn = function() {
            return e;
          }),
          e
        );
      }
      function bn() {
        var e = gn([
          '\n      <paper-card>\n        <div class="card-content">\n          <h2>Supervisor</h2>\n          <table class="info">\n            <tbody>\n              <tr>\n                <td>Version</td>\n                <td>',
          "</td>\n              </tr>\n              <tr>\n                <td>Latest version</td>\n                <td>",
          "</td>\n              </tr>\n              ",
          "\n            </tbody>\n          </table>\n          ",
          '\n        </div>\n        <div class="card-actions">\n          <ha-call-api-button .hass=',
          ' path="hassio/supervisor/reload"\n            >Reload</ha-call-api-button\n          >\n          ',
          "\n          ",
          "\n          ",
          "\n        </div>\n      </paper-card>\n    "
        ]);
        return (
          (bn = function() {
            return e;
          }),
          e
        );
      }
      function gn(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function wn(e) {
        return (wn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function kn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function En(e, t) {
        return (En =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function On(e) {
        var t,
          r = Sn(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function jn(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Pn(e) {
        return e.decorators && e.decorators.length;
      }
      function xn(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function _n(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Sn(e) {
        var t = (function(e, t) {
          if ("object" !== dn(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== dn(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === dn(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!Pn(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Sn(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = _n(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = _n(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (xn(o.descriptor) || xn(i.descriptor)) {
                    if (Pn(o) || Pn(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Pn(o)) {
                      if (Pn(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    jn(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(On)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-supervisor-info")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = wn(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== dn(o) && "function" != typeof o)
                      ? kn(i)
                      : o),
                  e(kn(r)),
                  r
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
                    t && En(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "supervisorInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_errors",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    bn(),
                    this.supervisorInfo.version,
                    this.supervisorInfo.last_version,
                    "stable" !== this.supervisorInfo.channel
                      ? Object(n.e)(vn(), this.supervisorInfo.channel)
                      : "",
                    this._errors ? Object(n.e)(yn(), this._errors) : "",
                    this.hass,
                    this.supervisorInfo.version !==
                      this.supervisorInfo.last_version
                      ? Object(n.e)(mn(), this.hass)
                      : "",
                    "beta" === this.supervisorInfo.channel
                      ? Object(n.e)(hn(), this.hass, { channel: "stable" })
                      : "",
                    "stable" === this.supervisorInfo.channel
                      ? Object(n.e)(pn(), this._joinBeta)
                      : ""
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, K.a, Object(n.c)(fn())];
                }
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function() {
                  var e = this;
                  this.addEventListener("hass-api-called", function(t) {
                    return e._apiCalled(t);
                  });
                }
              },
              {
                kind: "method",
                key: "_apiCalled",
                value: function(e) {
                  if (e.detail.success) this._errors = void 0;
                  else {
                    var t = e.detail.response;
                    this._errors =
                      "object" === dn(t.body)
                        ? t.body.message || "Unknown error"
                        : t.body;
                  }
                }
              },
              {
                kind: "method",
                key: "_joinBeta",
                value: function() {
                  var e, t, r;
                  return regeneratorRuntime.async(
                    function(n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (
                              confirm(
                                "WARNING:\nBeta releases are for testers and early adopters and can contain unstable code changes. Make sure you have backups of your data before you activate this feature.\n\nThis inludes beta releases for:\n- Home Assistant (Release Candidates)\n- Hass.io supervisor\n- Host system"
                              )
                            ) {
                              n.next = 2;
                              break;
                            }
                            return n.abrupt("return");
                          case 2:
                            return (
                              (n.prev = 2),
                              (e = { channel: "beta" }),
                              (n.next = 6),
                              regeneratorRuntime.awrap(
                                Object(F.e)(this.hass, e)
                              )
                            );
                          case 6:
                            (t = {
                              success: !0,
                              response: void 0,
                              path: "option"
                            }),
                              Object(c.a)(this, "hass-api-called", t),
                              (n.next = 13);
                            break;
                          case 10:
                            (n.prev = 10),
                              (n.t0 = n.catch(2)),
                              (this._errors = "Error joining beta channel, ".concat(
                                (null === (r = n.t0.body) || void 0 === r
                                  ? void 0
                                  : r.message) || n.t0
                              ));
                          case 13:
                          case "end":
                            return n.stop();
                        }
                    },
                    null,
                    this,
                    [[2, 10]]
                  );
                }
              }
            ]
          };
        },
        n.a
      );
      var Cn = r(118);
      function Dn(e) {
        return (Dn =
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
      function Tn() {
        var e = Rn([
          "\n        paper-card {\n          width: 100%;\n        }\n        pre {\n          white-space: pre-wrap;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-bottom: 16px;\n        }\n      "
        ]);
        return (
          (Tn = function() {
            return e;
          }),
          e
        );
      }
      function An() {
        var e = Rn([
          '\n              <div class="errors">',
          "</div>\n            "
        ]);
        return (
          (An = function() {
            return e;
          }),
          e
        );
      }
      function zn() {
        var e = Rn([
          "\n      <paper-card>\n        ",
          '\n        <div class="card-content" id="content"></div>\n        <div class="card-actions">\n          <mwc-button @click=',
          ">Refresh</mwc-button>\n        </div>\n      </paper-card>\n    "
        ]);
        return (
          (zn = function() {
            return e;
          }),
          e
        );
      }
      function Rn(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function In(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Fn(e, t) {
        return (Fn =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Ln(e) {
        var t,
          r = Mn(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Nn(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Hn(e) {
        return e.decorators && e.decorators.length;
      }
      function Un(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Bn(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Mn(e) {
        var t = (function(e, t) {
          if ("object" !== Dn(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Dn(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Dn(t) ? t : String(t);
      }
      function Gn(e, t, r) {
        return (Gn =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Vn(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function Vn(e) {
        return (Vn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!Hn(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Mn(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = Bn(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = Bn(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (Un(o.descriptor) || Un(i.descriptor)) {
                    if (Hn(o) || Hn(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Hn(o)) {
                      if (Hn(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Nn(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Ln)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-supervisor-log")],
        function(e, t) {
          var r = (function(r) {
            function n() {
              var t, r, i, o;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              for (
                var a = arguments.length, s = new Array(a), c = 0;
                c < a;
                c++
              )
                s[c] = arguments[c];
              return (
                (i = this),
                (r =
                  !(o = (t = Vn(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== Dn(o) && "function" != typeof o)
                    ? In(i)
                    : o),
                e(In(r)),
                r
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
                  t && Fn(e, t);
              })(n, t),
              n
            );
          })();
          return {
            F: r,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_error",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.g)("#content")],
                key: "_logContent",
                value: void 0
              },
              {
                kind: "method",
                key: "connectedCallback",
                value: function() {
                  return regeneratorRuntime.async(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              Gn(
                                Vn(r.prototype),
                                "connectedCallback",
                                this
                              ).call(this),
                              (e.next = 3),
                              regeneratorRuntime.awrap(this._loadData())
                            );
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    },
                    null,
                    this
                  );
                }
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    zn(),
                    this._error ? Object(n.e)(An(), this._error) : "",
                    this._refresh
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, K.a, Cn.a, Object(n.c)(Tn())];
                }
              },
              {
                kind: "method",
                key: "_loadData",
                value: function() {
                  var e, t;
                  return regeneratorRuntime.async(
                    function(r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (this._error = void 0),
                              (r.prev = 1),
                              (r.next = 4),
                              regeneratorRuntime.awrap(Object(F.d)(this.hass))
                            );
                          case 4:
                            for (e = r.sent; this._logContent.lastChild; )
                              this._logContent.removeChild(
                                this._logContent.lastChild
                              );
                            this._logContent.appendChild(Object(Cn.b)(e)),
                              (r.next = 12);
                            break;
                          case 9:
                            (r.prev = 9),
                              (r.t0 = r.catch(1)),
                              (this._error = "Failed to get supervisor logs, ".concat(
                                (null === (t = r.t0.body) || void 0 === t
                                  ? void 0
                                  : t.message) || r.t0
                              ));
                          case 12:
                          case "end":
                            return r.stop();
                        }
                    },
                    null,
                    this,
                    [[1, 9]]
                  );
                }
              },
              {
                kind: "method",
                key: "_refresh",
                value: function() {
                  return regeneratorRuntime.async(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              regeneratorRuntime.awrap(this._loadData())
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    },
                    null,
                    this
                  );
                }
              }
            ]
          };
        },
        n.a
      );
      function qn(e) {
        return (qn =
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
      function Wn() {
        var e = Yn([
          "\n        .content {\n          margin: 8px;\n          color: var(--primary-text-color);\n        }\n        .title {\n          margin-top: 24px;\n          color: var(--primary-text-color);\n          font-size: 2em;\n          padding-left: 8px;\n          margin-bottom: 8px;\n        }\n        hassio-supervisor-log {\n          width: 100%;\n        }\n      "
        ]);
        return (
          (Wn = function() {
            return e;
          }),
          e
        );
      }
      function Jn() {
        var e = Yn([
          '\n      <div class="content">\n        <h1>Information</h1>\n        <div class="card-group">\n          <hassio-supervisor-info\n            .hass=',
          "\n            .supervisorInfo=",
          "\n          ></hassio-supervisor-info>\n          <hassio-host-info\n            .hass=",
          "\n            .hostInfo=",
          "\n            .hassOsInfo=",
          "\n          ></hassio-host-info>\n        </div>\n        <h1>System log</h1>\n        <hassio-supervisor-log .hass=",
          "></hassio-supervisor-log>\n      </div>\n    "
        ]);
        return (
          (Jn = function() {
            return e;
          }),
          e
        );
      }
      function Yn(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function $n(e) {
        return ($n = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Kn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Qn(e, t) {
        return (Qn =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Xn(e) {
        var t,
          r = ni(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Zn(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function ei(e) {
        return e.decorators && e.decorators.length;
      }
      function ti(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function ri(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function ni(e) {
        var t = (function(e, t) {
          if ("object" !== qn(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== qn(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === qn(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!ei(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = ni(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = ri(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = ri(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (ti(o.descriptor) || ti(i.descriptor)) {
                    if (ei(o) || ei(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (ei(o)) {
                      if (ei(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Zn(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Xn)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-system")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = $n(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== qn(o) && "function" != typeof o)
                      ? Kn(i)
                      : o),
                  e(Kn(r)),
                  r
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
                    t && Qn(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "supervisorInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hostInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassOsInfo",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    Jn(),
                    this.hass,
                    this.supervisorInfo,
                    this.hass,
                    this.hostInfo,
                    this.hassOsInfo,
                    this.hass
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.b, K.a, Object(n.c)(Wn())];
                }
              }
            ]
          };
        },
        n.a
      );
      function ii(e) {
        return (ii =
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
      function oi(e) {
        return (oi = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ai(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function si(e, t) {
        return (si =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ci(e) {
        var t,
          r = pi(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function li(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function ui(e) {
        return e.decorators && e.decorators.length;
      }
      function di(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function fi(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function pi(e) {
        var t = (function(e, t) {
          if ("object" !== ii(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== ii(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === ii(t) ? t : String(t);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!ui(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = pi(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = fi(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = fi(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (di(o.descriptor) || di(i.descriptor)) {
                    if (ui(o) || ui(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (ui(o)) {
                      if (ui(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    li(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(ci)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-tabs-router")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = oi(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== ii(o) && "function" != typeof o)
                      ? ai(i)
                      : o),
                  e(ai(r)),
                  r
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
                    t && si(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "supervisorInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hostInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassOsInfo",
                value: void 0
              },
              {
                kind: "field",
                key: "routerOptions",
                value: function() {
                  return {
                    routes: {
                      dashboard: { tag: "hassio-dashboard" },
                      snapshots: { tag: "hassio-snapshots" },
                      store: { tag: "hassio-addon-store" },
                      system: { tag: "hassio-system" }
                    }
                  };
                }
              },
              {
                kind: "method",
                key: "updatePageEl",
                value: function(e) {
                  "setProperties" in e
                    ? e.setProperties({
                        hass: this.hass,
                        supervisorInfo: this.supervisorInfo,
                        hostInfo: this.hostInfo,
                        hassInfo: this.hassInfo,
                        hassOsInfo: this.hassOsInfo
                      })
                    : ((e.hass = this.hass),
                      (e.supervisorInfo = this.supervisorInfo),
                      (e.hostInfo = this.hostInfo),
                      (e.hassInfo = this.hassInfo),
                      (e.hassOsInfo = this.hassOsInfo));
                }
              }
            ]
          };
        },
        I
      );
      function hi(e) {
        return (hi =
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
      function mi() {
        var e = bi([
          "\n        :host {\n          color: var(--primary-text-color);\n          --paper-card-header-color: var(--primary-text-color);\n        }\n        paper-tabs {\n          margin-left: 12px;\n          --paper-tabs-selection-bar-color: var(--text-primary-color, #fff);\n          text-transform: uppercase;\n        }\n      "
        ]);
        return (
          (mi = function() {
            return e;
          }),
          e
        );
      }
      function yi() {
        var e = bi([
          '\n                  <paper-icon-button\n                    icon="hassio:refresh"\n                    @click=',
          "\n                  ></paper-icon-button>\n                "
        ]);
        return (
          (yi = function() {
            return e;
          }),
          e
        );
      }
      function vi() {
        var e = bi([
          '\n      <app-header-layout has-scrolling-region>\n        <app-header fixed slot="header">\n          <app-toolbar>\n            <ha-menu-button\n              .hass=',
          "\n              .narrow=",
          "\n              hassio\n            ></ha-menu-button>\n            <div main-title>Supervisor</div>\n            ",
          '\n          </app-toolbar>\n          <paper-tabs\n            scrollable\n            attr-for-selected="page-name"\n            .selected=',
          "\n            @iron-activate=",
          '\n          >\n            <paper-tab page-name="dashboard">Dashboard</paper-tab>\n            <paper-tab page-name="snapshots">Snapshots</paper-tab>\n            <paper-tab page-name="store">Add-on store</paper-tab>\n            <paper-tab page-name="system">System</paper-tab>\n          </paper-tabs>\n        </app-header>\n        <hassio-tabs-router\n          .route=',
          "\n          .hass=",
          "\n          .supervisorInfo=",
          "\n          .hostInfo=",
          "\n          .hassInfo=",
          "\n          .hassOsInfo=",
          "\n        ></hassio-tabs-router>\n      </app-header-layout>\n    "
        ]);
        return (
          (vi = function() {
            return e;
          }),
          e
        );
      }
      function bi(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function gi(e) {
        return (gi = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function wi(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ki(e, t) {
        return (ki =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Ei(e) {
        var t,
          r = _i(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Oi(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function ji(e) {
        return e.decorators && e.decorators.length;
      }
      function Pi(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function xi(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function _i(e) {
        var t = (function(e, t) {
          if ("object" !== hi(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== hi(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === hi(t) ? t : String(t);
      }
      var Si = ["store", "snapshots"],
        Ci =
          ((function(e, t, r, n) {
            var i = (function() {
              var e = {
                elementsDefinitionOrder: [["method"], ["field"]],
                initializeInstanceElements: function(e, t) {
                  ["method", "field"].forEach(function(r) {
                    t.forEach(function(t) {
                      t.kind === r &&
                        "own" === t.placement &&
                        this.defineClassElement(e, t);
                    }, this);
                  }, this);
                },
                initializeClassElements: function(e, t) {
                  var r = e.prototype;
                  ["method", "field"].forEach(function(n) {
                    t.forEach(function(t) {
                      var i = t.placement;
                      if (
                        t.kind === n &&
                        ("static" === i || "prototype" === i)
                      ) {
                        var o = "static" === i ? e : r;
                        this.defineClassElement(o, t);
                      }
                    }, this);
                  }, this);
                },
                defineClassElement: function(e, t) {
                  var r = t.descriptor;
                  if ("field" === t.kind) {
                    var n = t.initializer;
                    r = {
                      enumerable: r.enumerable,
                      writable: r.writable,
                      configurable: r.configurable,
                      value: void 0 === n ? void 0 : n.call(e)
                    };
                  }
                  Object.defineProperty(e, t.key, r);
                },
                decorateClass: function(e, t) {
                  var r = [],
                    n = [],
                    i = { static: [], prototype: [], own: [] };
                  if (
                    (e.forEach(function(e) {
                      this.addElementPlacement(e, i);
                    }, this),
                    e.forEach(function(e) {
                      if (!ji(e)) return r.push(e);
                      var t = this.decorateElement(e, i);
                      r.push(t.element),
                        r.push.apply(r, t.extras),
                        n.push.apply(n, t.finishers);
                    }, this),
                    !t)
                  )
                    return { elements: r, finishers: n };
                  var o = this.decorateConstructor(r, t);
                  return n.push.apply(n, o.finishers), (o.finishers = n), o;
                },
                addElementPlacement: function(e, t, r) {
                  var n = t[e.placement];
                  if (!r && -1 !== n.indexOf(e.key))
                    throw new TypeError("Duplicated element (" + e.key + ")");
                  n.push(e.key);
                },
                decorateElement: function(e, t) {
                  for (
                    var r = [], n = [], i = e.decorators, o = i.length - 1;
                    o >= 0;
                    o--
                  ) {
                    var a = t[e.placement];
                    a.splice(a.indexOf(e.key), 1);
                    var s = this.fromElementDescriptor(e),
                      c = this.toElementFinisherExtras((0, i[o])(s) || s);
                    (e = c.element),
                      this.addElementPlacement(e, t),
                      c.finisher && n.push(c.finisher);
                    var l = c.extras;
                    if (l) {
                      for (var u = 0; u < l.length; u++)
                        this.addElementPlacement(l[u], t);
                      r.push.apply(r, l);
                    }
                  }
                  return { element: e, finishers: n, extras: r };
                },
                decorateConstructor: function(e, t) {
                  for (var r = [], n = t.length - 1; n >= 0; n--) {
                    var i = this.fromClassDescriptor(e),
                      o = this.toClassDescriptor((0, t[n])(i) || i);
                    if (
                      (void 0 !== o.finisher && r.push(o.finisher),
                      void 0 !== o.elements)
                    ) {
                      e = o.elements;
                      for (var a = 0; a < e.length - 1; a++)
                        for (var s = a + 1; s < e.length; s++)
                          if (
                            e[a].key === e[s].key &&
                            e[a].placement === e[s].placement
                          )
                            throw new TypeError(
                              "Duplicated element (" + e[a].key + ")"
                            );
                    }
                  }
                  return { elements: e, finishers: r };
                },
                fromElementDescriptor: function(e) {
                  var t = {
                    kind: e.kind,
                    key: e.key,
                    placement: e.placement,
                    descriptor: e.descriptor
                  };
                  return (
                    Object.defineProperty(t, Symbol.toStringTag, {
                      value: "Descriptor",
                      configurable: !0
                    }),
                    "field" === e.kind && (t.initializer = e.initializer),
                    t
                  );
                },
                toElementDescriptors: function(e) {
                  var t;
                  if (void 0 !== e)
                    return ((t = e),
                    (function(e) {
                      if (Array.isArray(e)) return e;
                    })(t) ||
                      (function(e) {
                        if (
                          Symbol.iterator in Object(e) ||
                          "[object Arguments]" ===
                            Object.prototype.toString.call(e)
                        )
                          return Array.from(e);
                      })(t) ||
                      (function() {
                        throw new TypeError(
                          "Invalid attempt to destructure non-iterable instance"
                        );
                      })()).map(function(e) {
                      var t = this.toElementDescriptor(e);
                      return (
                        this.disallowProperty(
                          e,
                          "finisher",
                          "An element descriptor"
                        ),
                        this.disallowProperty(
                          e,
                          "extras",
                          "An element descriptor"
                        ),
                        t
                      );
                    }, this);
                },
                toElementDescriptor: function(e) {
                  var t = String(e.kind);
                  if ("method" !== t && "field" !== t)
                    throw new TypeError(
                      'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                        t +
                        '"'
                    );
                  var r = _i(e.key),
                    n = String(e.placement);
                  if ("static" !== n && "prototype" !== n && "own" !== n)
                    throw new TypeError(
                      'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                        n +
                        '"'
                    );
                  var i = e.descriptor;
                  this.disallowProperty(e, "elements", "An element descriptor");
                  var o = {
                    kind: t,
                    key: r,
                    placement: n,
                    descriptor: Object.assign({}, i)
                  };
                  return (
                    "field" !== t
                      ? this.disallowProperty(
                          e,
                          "initializer",
                          "A method descriptor"
                        )
                      : (this.disallowProperty(
                          i,
                          "get",
                          "The property descriptor of a field descriptor"
                        ),
                        this.disallowProperty(
                          i,
                          "set",
                          "The property descriptor of a field descriptor"
                        ),
                        this.disallowProperty(
                          i,
                          "value",
                          "The property descriptor of a field descriptor"
                        ),
                        (o.initializer = e.initializer)),
                    o
                  );
                },
                toElementFinisherExtras: function(e) {
                  var t = this.toElementDescriptor(e),
                    r = xi(e, "finisher"),
                    n = this.toElementDescriptors(e.extras);
                  return { element: t, finisher: r, extras: n };
                },
                fromClassDescriptor: function(e) {
                  var t = {
                    kind: "class",
                    elements: e.map(this.fromElementDescriptor, this)
                  };
                  return (
                    Object.defineProperty(t, Symbol.toStringTag, {
                      value: "Descriptor",
                      configurable: !0
                    }),
                    t
                  );
                },
                toClassDescriptor: function(e) {
                  var t = String(e.kind);
                  if ("class" !== t)
                    throw new TypeError(
                      'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                        t +
                        '"'
                    );
                  this.disallowProperty(e, "key", "A class descriptor"),
                    this.disallowProperty(e, "placement", "A class descriptor"),
                    this.disallowProperty(
                      e,
                      "descriptor",
                      "A class descriptor"
                    ),
                    this.disallowProperty(
                      e,
                      "initializer",
                      "A class descriptor"
                    ),
                    this.disallowProperty(e, "extras", "A class descriptor");
                  var r = xi(e, "finisher"),
                    n = this.toElementDescriptors(e.elements);
                  return { elements: n, finisher: r };
                },
                runClassFinishers: function(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = (0, t[r])(e);
                    if (void 0 !== n) {
                      if ("function" != typeof n)
                        throw new TypeError(
                          "Finishers must return a constructor."
                        );
                      e = n;
                    }
                  }
                  return e;
                },
                disallowProperty: function(e, t, r) {
                  if (void 0 !== e[t])
                    throw new TypeError(
                      r + " can't have a ." + t + " property."
                    );
                }
              };
              return e;
            })();
            if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
            var a = t(function(e) {
                i.initializeInstanceElements(e, s.elements);
              }, r),
              s = i.decorateClass(
                (function(e) {
                  for (
                    var t = [],
                      r = function(e) {
                        return (
                          "method" === e.kind &&
                          e.key === o.key &&
                          e.placement === o.placement
                        );
                      },
                      n = 0;
                    n < e.length;
                    n++
                  ) {
                    var i,
                      o = e[n];
                    if ("method" === o.kind && (i = t.find(r)))
                      if (Pi(o.descriptor) || Pi(i.descriptor)) {
                        if (ji(o) || ji(i))
                          throw new ReferenceError(
                            "Duplicated methods (" +
                              o.key +
                              ") can't be decorated."
                          );
                        i.descriptor = o.descriptor;
                      } else {
                        if (ji(o)) {
                          if (ji(i))
                            throw new ReferenceError(
                              "Decorators can't be placed on different accessors with for the same property (" +
                                o.key +
                                ")."
                            );
                          i.decorators = o.decorators;
                        }
                        Oi(o, i);
                      }
                    else t.push(o);
                  }
                  return t;
                })(a.d.map(Ei)),
                e
              );
            i.initializeClassElements(a.F, s.elements),
              i.runClassFinishers(a.F, s.finishers);
          })(
            [Object(n.d)("hassio-pages-with-tabs")],
            function(e, t) {
              return {
                F: (function(r) {
                  function n() {
                    var t, r, i, o;
                    !(function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, n);
                    for (
                      var a = arguments.length, s = new Array(a), c = 0;
                      c < a;
                      c++
                    )
                      s[c] = arguments[c];
                    return (
                      (i = this),
                      (r =
                        !(o = (t = gi(n)).call.apply(t, [this].concat(s))) ||
                        ("object" !== hi(o) && "function" != typeof o)
                          ? wi(i)
                          : o),
                      e(wi(r)),
                      r
                    );
                  }
                  return (
                    (function(e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function"
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          writable: !0,
                          configurable: !0
                        }
                      })),
                        t && ki(e, t);
                    })(n, t),
                    n
                  );
                })(),
                d: [
                  {
                    kind: "field",
                    decorators: [Object(n.f)()],
                    key: "hass",
                    value: void 0
                  },
                  {
                    kind: "field",
                    decorators: [Object(n.f)()],
                    key: "narrow",
                    value: void 0
                  },
                  {
                    kind: "field",
                    decorators: [Object(n.f)()],
                    key: "route",
                    value: void 0
                  },
                  {
                    kind: "field",
                    decorators: [Object(n.f)()],
                    key: "supervisorInfo",
                    value: void 0
                  },
                  {
                    kind: "field",
                    decorators: [Object(n.f)()],
                    key: "hostInfo",
                    value: void 0
                  },
                  {
                    kind: "field",
                    decorators: [Object(n.f)()],
                    key: "hassInfo",
                    value: void 0
                  },
                  {
                    kind: "field",
                    decorators: [Object(n.f)()],
                    key: "hassOsInfo",
                    value: void 0
                  },
                  {
                    kind: "method",
                    key: "render",
                    value: function() {
                      var e = this._page;
                      return Object(n.e)(
                        vi(),
                        this.hass,
                        this.narrow,
                        Si.includes(e)
                          ? Object(n.e)(yi(), this.refreshClicked)
                          : void 0,
                        e,
                        this.handlePageSelected,
                        this.route,
                        this.hass,
                        this.supervisorInfo,
                        this.hostInfo,
                        this.hassInfo,
                        this.hassOsInfo
                      );
                    }
                  },
                  {
                    kind: "method",
                    key: "handlePageSelected",
                    value: function(e) {
                      var t,
                        r,
                        n,
                        i,
                        o,
                        a,
                        s,
                        c = e.detail.item.getAttribute("page-name");
                      c !== this._page &&
                        Object(E.a)(this, "/hassio/".concat(c)),
                        (t = this),
                        (r = this.shadowRoot.querySelector("app-header-layout")
                          .header.scrollTarget),
                        (n = r),
                        (i = Math.random()),
                        (o = Date.now()),
                        (a = n.scrollTop),
                        (s = 0 - a),
                        (t._currentAnimationId = i),
                        function e() {
                          var r,
                            c = Date.now() - o;
                          c > 200
                            ? (n.scrollTop = 0)
                            : t._currentAnimationId === i &&
                              ((n.scrollTop =
                                ((r = c), -s * (r /= 200) * (r - 2) + a)),
                              requestAnimationFrame(e.bind(t)));
                        }.call(t);
                    }
                  },
                  {
                    kind: "method",
                    key: "refreshClicked",
                    value: function() {
                      "snapshots" === this._page
                        ? this.shadowRoot
                            .querySelector("hassio-snapshots")
                            .refreshData()
                        : this.shadowRoot
                            .querySelector("hassio-addon-store")
                            .refreshData();
                    }
                  },
                  {
                    kind: "get",
                    key: "_page",
                    value: function() {
                      return this.route.path.substr(1);
                    }
                  },
                  {
                    kind: "get",
                    static: !0,
                    key: "styles",
                    value: function() {
                      return [i.b, Object(n.c)(mi())];
                    }
                  }
                ]
              };
            },
            n.a
          ),
          r(119));
      function Di(e) {
        return (Di =
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
      function Ti(e, t) {
        return (
          Bi(e) ||
          (function(e, t) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              )
            )
              return;
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(n = (a = s.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (c) {
              (i = !0), (o = c);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(e, t) ||
          Ui()
        );
      }
      function Ai(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function zi(e, t) {
        return (zi =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Ri(e) {
        var t,
          r = Hi(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Ii(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Fi(e) {
        return e.decorators && e.decorators.length;
      }
      function Li(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Ni(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Hi(e) {
        var t = (function(e, t) {
          if ("object" !== Di(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Di(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Di(t) ? t : String(t);
      }
      function Ui() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      }
      function Bi(e) {
        if (Array.isArray(e)) return e;
      }
      function Mi(e, t, r) {
        return (Mi =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Gi(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function Gi(e) {
        return (Gi = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      customElements.get("paper-icon-button").prototype._keyBindings = {};
      var Vi;
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!Fi(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                Bi(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  Ui()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Hi(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = Ni(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = Ni(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (Li(o.descriptor) || Li(i.descriptor)) {
                    if (Fi(o) || Fi(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Fi(o)) {
                      if (Fi(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Ii(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Ri)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-main")],
        function(e, t) {
          var i = (function(r) {
            function n() {
              var t, r, i, o;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              for (
                var a = arguments.length, s = new Array(a), c = 0;
                c < a;
                c++
              )
                s[c] = arguments[c];
              return (
                (i = this),
                (r =
                  !(o = (t = Gi(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== Di(o) && "function" != typeof o)
                    ? Ai(i)
                    : o),
                e(Ai(r)),
                r
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
                  t && zi(e, t);
              })(n, t),
              n
            );
          })();
          return {
            F: i,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "panel",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "narrow",
                value: void 0
              },
              {
                kind: "field",
                key: "routerOptions",
                value: function() {
                  var e = this;
                  return {
                    defaultPage: "dashboard",
                    initialLoad: function() {
                      return e._fetchData();
                    },
                    showLoading: !0,
                    routes: {
                      dashboard: { tag: "hassio-pages-with-tabs", cache: !0 },
                      snapshots: "dashboard",
                      store: "dashboard",
                      system: "dashboard",
                      addon: {
                        tag: "hassio-addon-view",
                        load: function() {
                          return Promise.all([r.e(0), r.e(14), r.e(7)]).then(
                            r.bind(null, 177)
                          );
                        }
                      },
                      ingress: {
                        tag: "hassio-ingress-view",
                        load: function() {
                          return r.e(9).then(r.bind(null, 175));
                        }
                      }
                    }
                  };
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_supervisorInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_hostInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_hassOsInfo",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_hassInfo",
                value: void 0
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function(e) {
                  var t,
                    r,
                    n = this;
                  Mi(Gi(i.prototype), "firstUpdated", this).call(this, e),
                    s(
                      this.parentElement,
                      this.hass.themes,
                      this.hass.selectedTheme,
                      !0
                    ),
                    this.addEventListener("hass-api-called", function(e) {
                      return n._apiCalled(e);
                    }),
                    this.addEventListener("hass-toggle-menu", function() {
                      Object(c.a)(
                        window.parent.customPanel,
                        n.hass.dockedSidebar
                          ? "hass-close-menu"
                          : "hass-open-menu"
                      );
                    }),
                    window.addEventListener("location-changed", function(e) {
                      return Object(c.a)(n, e.type, e.detail, { bubbles: !1 });
                    }),
                    window.addEventListener("haptic", function(e) {
                      Object(c.a)(window.parent, e.type, e.detail, {
                        bubbles: !1
                      });
                    }),
                    (t = this),
                    (r = document.body),
                    t.addEventListener("show-dialog", function(e) {
                      var n, i, o, a;
                      return regeneratorRuntime.async(function(s) {
                        for (;;)
                          switch ((s.prev = s.next)) {
                            case 0:
                              (n = e.detail),
                                (i = n.dialogTag),
                                (o = n.dialogImport),
                                (a = n.dialogParams),
                                M(t, r, o, i, a);
                            case 2:
                            case "end":
                              return s.stop();
                          }
                      });
                    });
                }
              },
              {
                kind: "method",
                key: "updatePageEl",
                value: function(e) {
                  var t =
                    "HASSIO-PAGES-WITH-TABS" === e.nodeName
                      ? this.route
                      : this.routeTail;
                  "setProperties" in e
                    ? e.setProperties({
                        hass: this.hass,
                        narrow: this.narrow,
                        supervisorInfo: this._supervisorInfo,
                        hostInfo: this._hostInfo,
                        hassInfo: this._hassInfo,
                        hassOsInfo: this._hassOsInfo,
                        route: t
                      })
                    : ((e.hass = this.hass),
                      (e.narrow = this.narrow),
                      (e.supervisorInfo = this._supervisorInfo),
                      (e.hostInfo = this._hostInfo),
                      (e.hassInfo = this._hassInfo),
                      (e.hassOsInfo = this._hassOsInfo),
                      (e.route = t));
                }
              },
              {
                kind: "method",
                key: "_fetchData",
                value: function() {
                  var e, t, r, n, i;
                  return regeneratorRuntime.async(
                    function(o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            if (
                              !this.panel.config ||
                              !this.panel.config.ingress
                            ) {
                              o.next = 4;
                              break;
                            }
                            return (
                              (o.next = 3),
                              regeneratorRuntime.awrap(
                                this._redirectIngress(this.panel.config.ingress)
                              )
                            );
                          case 3:
                            return o.abrupt("return");
                          case 4:
                            return (
                              (o.next = 6),
                              regeneratorRuntime.awrap(
                                Promise.all([
                                  Object(F.c)(this.hass),
                                  N(this.hass),
                                  Object(F.b)(this.hass)
                                ])
                              )
                            );
                          case 6:
                            if (
                              ((e = o.sent),
                              (t = Ti(e, 3)),
                              (r = t[0]),
                              (n = t[1]),
                              (i = t[2]),
                              (this._supervisorInfo = r),
                              (this._hostInfo = n),
                              (this._hassInfo = i),
                              !this._hostInfo.features ||
                                !this._hostInfo.features.includes("hassos"))
                            ) {
                              o.next = 18;
                              break;
                            }
                            return (
                              (o.next = 17),
                              regeneratorRuntime.awrap(H(this.hass))
                            );
                          case 17:
                            this._hassOsInfo = o.sent;
                          case 18:
                          case "end":
                            return o.stop();
                        }
                    },
                    null,
                    this
                  );
                }
              },
              {
                kind: "method",
                key: "_redirectIngress",
                value: function(e) {
                  var t,
                    r,
                    n,
                    i = this;
                  return regeneratorRuntime.async(
                    function(o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (t = function(e, t) {
                                return regeneratorRuntime.async(function(r) {
                                  for (;;)
                                    switch ((r.prev = r.next)) {
                                      case 0:
                                        return (
                                          (r.next = 2),
                                          regeneratorRuntime.awrap(
                                            new Promise(function(t) {
                                              (e.confirm = t),
                                                Object(Ci.a)(i, e);
                                            })
                                          )
                                        );
                                      case 2:
                                        return (
                                          t(),
                                          (r.next = 5),
                                          regeneratorRuntime.awrap(
                                            new Promise(function(e) {
                                              return setTimeout(e, 1e3);
                                            })
                                          )
                                        );
                                      case 5:
                                      case "end":
                                        return r.stop();
                                    }
                                });
                              }),
                              (r = Object(F.a)(this.hass).then(
                                function() {
                                  return !0;
                                },
                                function() {
                                  return !1;
                                }
                              )),
                              (o.prev = 2),
                              (o.next = 5),
                              regeneratorRuntime.awrap(
                                Object(U.b)(this.hass, e)
                              )
                            );
                          case 5:
                            (n = o.sent), (o.next = 13);
                            break;
                          case 8:
                            return (
                              (o.prev = 8),
                              (o.t0 = o.catch(2)),
                              (o.next = 12),
                              regeneratorRuntime.awrap(
                                t(
                                  {
                                    text:
                                      "Unable to fetch add-on info to start Ingress",
                                    title: "Hass.io"
                                  },
                                  function() {
                                    return history.back();
                                  }
                                )
                              )
                            );
                          case 12:
                            return o.abrupt("return");
                          case 13:
                            if (n.ingress_url) {
                              o.next = 17;
                              break;
                            }
                            return (
                              (o.next = 16),
                              regeneratorRuntime.awrap(
                                t(
                                  {
                                    text: "Add-on does not support Ingress",
                                    title: n.name
                                  },
                                  function() {
                                    return history.back();
                                  }
                                )
                              )
                            );
                          case 16:
                            return o.abrupt("return");
                          case 17:
                            if ("started" === n.state) {
                              o.next = 21;
                              break;
                            }
                            return (
                              (o.next = 20),
                              regeneratorRuntime.awrap(
                                t(
                                  {
                                    text:
                                      "Add-on is not running. Please start it first",
                                    title: n.name
                                  },
                                  function() {
                                    return Object(E.a)(
                                      i,
                                      "/hassio/addon/".concat(n.slug),
                                      !0
                                    );
                                  }
                                )
                              )
                            );
                          case 20:
                            return o.abrupt("return");
                          case 21:
                            return (o.next = 23), regeneratorRuntime.awrap(r);
                          case 23:
                            if (o.sent) {
                              o.next = 27;
                              break;
                            }
                            return (
                              (o.next = 26),
                              regeneratorRuntime.awrap(
                                t(
                                  {
                                    text: "Unable to create an Ingress session",
                                    title: n.name
                                  },
                                  function() {
                                    return history.back();
                                  }
                                )
                              )
                            );
                          case 26:
                            return o.abrupt("return");
                          case 27:
                            return (
                              location.assign(n.ingress_url),
                              (o.next = 30),
                              regeneratorRuntime.awrap(
                                new Promise(function() {})
                              )
                            );
                          case 30:
                          case "end":
                            return o.stop();
                        }
                    },
                    null,
                    this,
                    [[2, 8]]
                  );
                }
              },
              {
                kind: "method",
                key: "_apiCalled",
                value: function(e) {
                  var t = this;
                  if (e.detail.success) {
                    var r = 1;
                    !(function e() {
                      t._fetchData().catch(function() {
                        (r += 1), setTimeout(e, 1e3 * Math.min(r, 5));
                      });
                    })();
                  }
                }
              }
            ]
          };
        },
        ((Vi = I),
        (function(e) {
          function t() {
            var e, r, n, i;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
              a[s] = arguments[s];
            return (
              (n = this),
              (r =
                !(i = (e = J(t)).call.apply(e, [this].concat(a))) ||
                ("object" !== G(i) && "function" != typeof i)
                  ? q(n)
                  : i),
              $(q(r), "hass", void 0),
              $(q(r), "__provideHass", []),
              r
            );
          }
          var r, n, i;
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
            })(t, Vi),
            (r = t),
            (n = [
              {
                key: "provideHass",
                value: function(e) {
                  this.__provideHass.push(e), (e.hass = this.hass);
                }
              },
              {
                key: "updated",
                value: function(e) {
                  var r = this;
                  W(J(t.prototype), "updated", this).call(this, e),
                    e.has("hass") &&
                      this.__provideHass.forEach(function(e) {
                        e.hass = r.hass;
                      });
                }
              }
            ]) && V(r.prototype, n),
            i && V(r, i),
            t
          );
        })())
      );
    },
    27: function(e, t, r) {
      "use strict";
      r.d(t, "f", function() {
        return i;
      }),
        r.d(t, "d", function() {
          return o;
        }),
        r.d(t, "b", function() {
          return a;
        }),
        r.d(t, "a", function() {
          return s;
        }),
        r.d(t, "c", function() {
          return c;
        }),
        r.d(t, "g", function() {
          return l;
        }),
        r.d(t, "h", function() {
          return u;
        }),
        r.d(t, "e", function() {
          return d;
        }),
        r.d(t, "i", function() {
          return f;
        });
      var n = r(49),
        i = function(e) {
          return regeneratorRuntime.async(function(t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.next = 2),
                    regeneratorRuntime.awrap(
                      e.callApi("POST", "hassio/addons/reload")
                    )
                  );
                case 2:
                case "end":
                  return t.stop();
              }
          });
        },
        o = function(e) {
          return regeneratorRuntime.async(function(t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.t0 = n.a),
                    (t.next = 3),
                    regeneratorRuntime.awrap(e.callApi("GET", "hassio/addons"))
                  );
                case 3:
                  return (t.t1 = t.sent), t.abrupt("return", (0, t.t0)(t.t1));
                case 5:
                case "end":
                  return t.stop();
              }
          });
        },
        a = function(e, t) {
          return regeneratorRuntime.async(function(r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.t0 = n.a),
                    (r.next = 3),
                    regeneratorRuntime.awrap(
                      e.callApi("GET", "hassio/addons/".concat(t, "/info"))
                    )
                  );
                case 3:
                  return (r.t1 = r.sent), r.abrupt("return", (0, r.t0)(r.t1));
                case 5:
                case "end":
                  return r.stop();
              }
          });
        },
        s = function(e, t) {
          return regeneratorRuntime.async(function(r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return r.abrupt(
                    "return",
                    e.callApi("GET", "hassio/addons/".concat(t, "/changelog"))
                  );
                case 1:
                case "end":
                  return r.stop();
              }
          });
        },
        c = function(e, t) {
          return regeneratorRuntime.async(function(r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return r.abrupt(
                    "return",
                    e.callApi("GET", "hassio/addons/".concat(t, "/logs"))
                  );
                case 1:
                case "end":
                  return r.stop();
              }
          });
        },
        l = function(e, t, r) {
          return regeneratorRuntime.async(function(n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (n.next = 2),
                    regeneratorRuntime.awrap(
                      e.callApi(
                        "POST",
                        "hassio/addons/".concat(t, "/options"),
                        r
                      )
                    )
                  );
                case 2:
                case "end":
                  return n.stop();
              }
          });
        },
        u = function(e, t, r) {
          return regeneratorRuntime.async(function(n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (n.next = 2),
                    regeneratorRuntime.awrap(
                      e.callApi(
                        "POST",
                        "hassio/addons/".concat(t, "/security"),
                        r
                      )
                    )
                  );
                case 2:
                case "end":
                  return n.stop();
              }
          });
        },
        d = function(e, t) {
          return regeneratorRuntime.async(function(r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return r.abrupt(
                    "return",
                    e.callApi("POST", "hassio/addons/".concat(t, "/install"))
                  );
                case 1:
                case "end":
                  return r.stop();
              }
          });
        },
        f = function(e, t) {
          return regeneratorRuntime.async(function(r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.next = 2),
                    regeneratorRuntime.awrap(
                      e.callApi(
                        "POST",
                        "hassio/addons/".concat(t, "/uninstall")
                      )
                    )
                  );
                case 2:
                case "end":
                  return r.stop();
              }
          });
        };
    },
    37: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return i;
      });
      var n = r(11),
        i = function(e, t) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          r
            ? history.replaceState(null, "", t)
            : history.pushState(null, "", t),
            Object(n.a)(window, "location-changed", { replace: r });
        };
    },
    41: function(e, t, r) {
      "use strict";
      var n = r(5),
        i = (r(22), r(8)),
        o = r(34),
        a = [60, 60, 24, 7],
        s = ["second", "minute", "hour", "day"];
      var c = r(17);
      function l(e) {
        return (l =
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
      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function d(e, t) {
        return !t || ("object" !== l(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var h = Object(c.a)(function(e) {
        return (function(t) {
          function r() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
              d(this, f(r).apply(this, arguments))
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
                t && p(e, t);
            })(r, e),
            (n = r),
            (o = [
              {
                key: "properties",
                get: function() {
                  return {
                    hass: Object,
                    localize: {
                      type: Function,
                      computed: "__computeLocalize(hass.localize)"
                    }
                  };
                }
              }
            ]),
            (i = [
              {
                key: "__computeLocalize",
                value: function(e) {
                  return e;
                }
              }
            ]) && u(n.prototype, i),
            o && u(n, o),
            r
          );
        })();
      });
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
      function y(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function v(e, t, r) {
        return (v =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = b(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function g(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function w(e, t, r) {
        return t && g(e.prototype, t), r && g(e, r), e;
      }
      function k(e, t) {
        return (k =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var E = (function(e) {
        function t() {
          var e, r, n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (r = this),
            ((e =
              !(n = b(t).call(this)) ||
              ("object" !== m(n) && "function" != typeof n)
                ? y(r)
                : n).updateRelative = e.updateRelative.bind(y(e))),
            e
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
              t && k(e, t);
          })(t, h(o["a"])),
          w(t, null, [
            {
              key: "properties",
              get: function() {
                return {
                  hass: Object,
                  datetime: { type: String, observer: "datetimeChanged" },
                  datetimeObj: { type: Object, observer: "datetimeObjChanged" },
                  parsedDateTime: Object
                };
              }
            }
          ]),
          w(t, [
            {
              key: "connectedCallback",
              value: function() {
                v(b(t.prototype), "connectedCallback", this).call(this),
                  (this.updateInterval = setInterval(this.updateRelative, 6e4));
              }
            },
            {
              key: "disconnectedCallback",
              value: function() {
                v(b(t.prototype), "disconnectedCallback", this).call(this),
                  clearInterval(this.updateInterval);
              }
            },
            {
              key: "datetimeChanged",
              value: function(e) {
                (this.parsedDateTime = e ? new Date(e) : null),
                  this.updateRelative();
              }
            },
            {
              key: "datetimeObjChanged",
              value: function(e) {
                (this.parsedDateTime = e), this.updateRelative();
              }
            },
            {
              key: "updateRelative",
              value: function() {
                var e = Object(i.a)(this);
                this.parsedDateTime
                  ? (e.innerHTML = (function(e, t) {
                      var r,
                        n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                        i =
                          ((n.compareTime || new Date()).getTime() -
                            e.getTime()) /
                          1e3,
                        o = i >= 0 ? "past" : "future";
                      i = Math.abs(i);
                      for (var c = 0; c < a.length; c++) {
                        if (i < a[c]) {
                          (i = Math.floor(i)),
                            (r = t(
                              "ui.components.relative_time.duration.".concat(
                                s[c]
                              ),
                              "count",
                              i
                            ));
                          break;
                        }
                        i /= a[c];
                      }
                      return (
                        void 0 === r &&
                          (r = t(
                            "ui.components.relative_time.duration.week",
                            "count",
                            (i = Math.floor(i))
                          )),
                        !1 === n.includeTense
                          ? r
                          : t(
                              "ui.components.relative_time.".concat(o),
                              "time",
                              r
                            )
                      );
                    })(this.parsedDateTime, this.localize))
                  : (e.innerHTML = this.localize(
                      "ui.components.relative_time.never"
                    ));
              }
            }
          ]),
          t
        );
      })();
      function O(e) {
        return (O =
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
      function j() {
        var e = D([
          "\n      iron-icon {\n        margin-right: 24px;\n        margin-left: 8px;\n        margin-top: 12px;\n        float: left;\n        color: var(--secondary-text-color);\n      }\n      iron-icon.update {\n        color: var(--paper-orange-400);\n      }\n      iron-icon.running,\n      iron-icon.installed {\n        color: var(--paper-green-400);\n      }\n      iron-icon.hassupdate,\n      iron-icon.snapshot {\n        color: var(--paper-item-icon-color);\n      }\n      iron-icon.not_available {\n        color: var(--google-red-500);\n      }\n      .title {\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n      }\n      .addition {\n        color: var(--secondary-text-color);\n        overflow: hidden;\n        position: relative;\n        height: 2.4em;\n        line-height: 1.2em;\n      }\n      ha-relative-time {\n        display: block;\n      }\n      .icon_image img {\n        max-height: 40px;\n        max-width: 40px;\n        margin-top: 4px;\n        margin-right: 16px;\n        float: left;\n      }\n      .icon_image.stopped,\n      .icon_image.not_available {\n        filter: grayscale(1);\n      }\n      .dot {\n        position: absolute;\n        background-color: var(--paper-orange-400);\n        width: 12px;\n        height: 12px;\n        top: 8px;\n        right: 8px;\n        border-radius: 50%;\n      }\n      .topbar {\n        position: absolute;\n        width: 100%;\n        height: 2px;\n        top: 0;\n        left: 0;\n        border-top-left-radius: 2px;\n        border-top-right-radius: 2px;\n      }\n      .topbar.installed {\n        background-color: var(--primary-color);\n      }\n      .topbar.update {\n        background-color: var(--accent-color);\n      }\n      .topbar.unavailable {\n        background-color: var(--error-color);\n      }\n    "
        ]);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      function P() {
        var e = D([
          "\n                <ha-relative-time\n                  .hass=",
          '\n                  class="addition"\n                  .datetime=',
          "\n                ></ha-relative-time>\n              "
        ]);
        return (
          (P = function() {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = D([
          "\n            <iron-icon\n              class=",
          "\n              .icon=",
          "\n              .title=",
          "\n            ></iron-icon>\n          "
        ]);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = D([
          '\n            <div class="icon_image ',
          '">\n              <img src="',
          '" title="',
          '" />\n              <div></div>\n            </div>\n          '
        ]);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = D([
          '\n            <div class="topbar ',
          '"></div>\n          '
        ]);
        return (
          (S = function() {
            return e;
          }),
          e
        );
      }
      function C() {
        var e = D([
          "\n      ",
          "\n      ",
          '\n      <div>\n        <div class="title">\n          ',
          '\n        </div>\n        <div class="addition">\n          ',
          "\n          ",
          "\n          ",
          "\n        </div>\n      </div>\n    "
        ]);
        return (
          (C = function() {
            return e;
          }),
          e
        );
      }
      function D(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function T(e) {
        return (T = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function A(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function z(e, t) {
        return (z =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function R(e) {
        var t,
          r = H(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function I(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function F(e) {
        return e.decorators && e.decorators.length;
      }
      function L(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function N(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function H(e) {
        var t = (function(e, t) {
          if ("object" !== O(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== O(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === O(t) ? t : String(t);
      }
      customElements.define("ha-relative-time", E);
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!F(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = H(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = N(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = N(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (L(o.descriptor) || L(i.descriptor)) {
                    if (F(o) || F(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (F(o)) {
                      if (F(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    I(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(R)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-card-content")],
        function(e, t) {
          return {
            F: (function(r) {
              function n() {
                var t, r, i, o;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n);
                for (
                  var a = arguments.length, s = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  s[c] = arguments[c];
                return (
                  (i = this),
                  (r =
                    !(o = (t = T(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== O(o) && "function" != typeof o)
                      ? A(i)
                      : o),
                  e(A(r)),
                  r
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
                    t && z(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "title",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "description",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "available",
                value: function() {
                  return !0;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "showTopbar",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "topbarClass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "datetime",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "iconTitle",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "iconClass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "icon",
                value: function() {
                  return "hass:help-circle";
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "iconImage",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    C(),
                    this.showTopbar ? Object(n.e)(S(), this.topbarClass) : "",
                    this.iconImage
                      ? Object(n.e)(
                          _(),
                          this.iconClass,
                          this.iconImage,
                          this.iconTitle
                        )
                      : Object(n.e)(
                          x(),
                          this.iconClass,
                          this.icon,
                          this.iconTitle
                        ),
                    this.title,
                    this.description,
                    !1 === this.available ? " (Not available)" : "",
                    this.datetime
                      ? Object(n.e)(P(), this.hass, this.datetime)
                      : void 0
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(n.c)(j());
                }
              }
            ]
          };
        },
        n.a
      );
    },
    46: function(e, t) {},
    49: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return n;
      });
      var n = function(e) {
        return e.data;
      };
    },
    50: function(e, t, r) {
      "use strict";
      var n = r(5),
        i = (r(113), r(11));
      function o(e) {
        return (o =
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
      function a() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <ha-progress-button\n        .progress="',
          '"\n        @click="',
          '"\n        ?disabled="',
          '"\n        ><slot></slot\n      ></ha-progress-button>\n    '
        ]);
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
      function s(e, t) {
        return !t || ("object" !== o(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function u(e, t, r) {
        return t && l(e.prototype, t), r && l(e, r), e;
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = (function(e) {
        function t() {
          var e;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((e = s(this, c(t).call(this))).method = "POST"),
            (e.data = {}),
            (e.disabled = !1),
            (e.progress = !1),
            e
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
              t && d(e, t);
          })(t, n["a"]),
          u(t, [
            {
              key: "render",
              value: function() {
                return Object(n.e)(
                  a(),
                  this.progress,
                  this._buttonTapped,
                  this.disabled
                );
              }
            }
          ]),
          u(
            t,
            [
              {
                key: "_buttonTapped",
                value: function() {
                  var e, t;
                  return regeneratorRuntime.async(
                    function(r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (this.progress = !0),
                              (e = {
                                method: this.method,
                                path: this.path,
                                data: this.data
                              }),
                              (r.prev = 2),
                              (r.next = 5),
                              regeneratorRuntime.awrap(
                                this.hass.callApi(
                                  this.method,
                                  this.path,
                                  this.data
                                )
                              )
                            );
                          case 5:
                            (t = r.sent),
                              (this.progress = !1),
                              this.progressButton.actionSuccess(),
                              (e.success = !0),
                              (e.response = t),
                              (r.next = 18);
                            break;
                          case 12:
                            (r.prev = 12),
                              (r.t0 = r.catch(2)),
                              (this.progress = !1),
                              this.progressButton.actionError(),
                              (e.success = !1),
                              (e.response = r.t0);
                          case 18:
                            Object(i.a)(this, "hass-api-called", e);
                          case 19:
                          case "end":
                            return r.stop();
                        }
                    },
                    null,
                    this,
                    [[2, 12]]
                  );
                }
              },
              {
                key: "progressButton",
                get: function() {
                  return this.renderRoot.querySelector("ha-progress-button");
                }
              }
            ],
            [
              {
                key: "properties",
                get: function() {
                  return {
                    hass: {},
                    progress: Boolean,
                    path: String,
                    method: String,
                    data: {},
                    disabled: Boolean
                  };
                }
              }
            ]
          ),
          t
        );
      })();
      customElements.define("ha-call-api-button", f);
    },
    64: function(e, t, r) {
      "use strict";
      r.d(t, "b", function() {
        return i;
      }),
        r.d(t, "c", function() {
          return o;
        }),
        r.d(t, "d", function() {
          return a;
        }),
        r.d(t, "a", function() {
          return s;
        }),
        r.d(t, "e", function() {
          return c;
        });
      var n = r(49),
        i = function(e) {
          return regeneratorRuntime.async(function(t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.t0 = n.a),
                    (t.next = 3),
                    regeneratorRuntime.awrap(
                      e.callApi("GET", "hassio/homeassistant/info")
                    )
                  );
                case 3:
                  return (t.t1 = t.sent), t.abrupt("return", (0, t.t0)(t.t1));
                case 5:
                case "end":
                  return t.stop();
              }
          });
        },
        o = function(e) {
          return regeneratorRuntime.async(function(t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.t0 = n.a),
                    (t.next = 3),
                    regeneratorRuntime.awrap(
                      e.callApi("GET", "hassio/supervisor/info")
                    )
                  );
                case 3:
                  return (t.t1 = t.sent), t.abrupt("return", (0, t.t0)(t.t1));
                case 5:
                case "end":
                  return t.stop();
              }
          });
        },
        a = function(e) {
          return regeneratorRuntime.async(function(t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt(
                    "return",
                    e.callApi("GET", "hassio/supervisor/logs")
                  );
                case 1:
                case "end":
                  return t.stop();
              }
          });
        },
        s = function(e) {
          var t;
          return regeneratorRuntime.async(function(r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.next = 2),
                    regeneratorRuntime.awrap(
                      e.callApi("POST", "hassio/ingress/session")
                    )
                  );
                case 2:
                  (t = r.sent),
                    (document.cookie = "ingress_session=".concat(
                      t.data.session,
                      ";path=/api/hassio_ingress/"
                    ));
                case 4:
                case "end":
                  return r.stop();
              }
          });
        },
        c = function(e, t) {
          return regeneratorRuntime.async(function(r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.next = 2),
                    regeneratorRuntime.awrap(
                      e.callApi("POST", "hassio/supervisor/options", t)
                    )
                  );
                case 2:
                case "end":
                  return r.stop();
              }
          });
        };
    },
    91: function(e, t, r) {
      "use strict";
      r(24);
      var n = r(5),
        i = r(11),
        o = r(130),
        a = function(e) {
          return e.sendMessagePromise({ type: "persistent_notification/get" });
        },
        s = function(e, t) {
          return e.subscribeEvents(function() {
            return a(e).then(function(e) {
              return t.setState(e, !0);
            });
          }, "persistent_notifications_updated");
        };
      function c(e) {
        return (c =
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
        var e = f([
          "\n      :host {\n        position: relative;\n      }\n      .dot {\n        pointer-events: none;\n        position: absolute;\n        background-color: var(--accent-color);\n        width: 12px;\n        height: 12px;\n        top: 5px;\n        right: 2px;\n        border-radius: 50%;\n        border: 2px solid var(--app-header-background-color);\n      }\n    "
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = f(['\n            <div class="dot"></div>\n          ']);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = f([
          "\n      <paper-icon-button\n        aria-label=",
          "\n        .icon=",
          "\n        @click=",
          "\n      ></paper-icon-button>\n      ",
          "\n    "
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function f(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function p(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function h(e, t) {
        return (h =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function m(e) {
        var t,
          r = w(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function y(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function v(e) {
        return e.decorators && e.decorators.length;
      }
      function b(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function g(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function w(e) {
        var t = (function(e, t) {
          if ("object" !== c(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== c(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === c(t) ? t : String(t);
      }
      function k(e, t, r) {
        return (k =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = E(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function E(e) {
        return (E = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      !(function(e, t, r, n) {
        var i = (function() {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function(e, t) {
              ["method", "field"].forEach(function(r) {
                t.forEach(function(t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function(e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function(e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e)
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function(e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function(e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function(e) {
                  if (!v(e)) return r.push(e);
                  var t = this.decorateElement(e, i);
                  r.push(t.element),
                    r.push.apply(r, t.extras),
                    n.push.apply(n, t.finishers);
                }, this),
                !t)
              )
                return { elements: r, finishers: n };
              var o = this.decorateConstructor(r, t);
              return n.push.apply(n, o.finishers), (o.finishers = n), o;
            },
            addElementPlacement: function(e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function(e, t) {
              for (
                var r = [], n = [], i = e.decorators, o = i.length - 1;
                o >= 0;
                o--
              ) {
                var a = t[e.placement];
                a.splice(a.indexOf(e.key), 1);
                var s = this.fromElementDescriptor(e),
                  c = this.toElementFinisherExtras((0, i[o])(s) || s);
                (e = c.element),
                  this.addElementPlacement(e, t),
                  c.finisher && n.push(c.finisher);
                var l = c.extras;
                if (l) {
                  for (var u = 0; u < l.length; u++)
                    this.addElementPlacement(l[u], t);
                  r.push.apply(r, l);
                }
              }
              return { element: e, finishers: n, extras: r };
            },
            decorateConstructor: function(e, t) {
              for (var r = [], n = t.length - 1; n >= 0; n--) {
                var i = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[n])(i) || i);
                if (
                  (void 0 !== o.finisher && r.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var a = 0; a < e.length - 1; a++)
                    for (var s = a + 1; s < e.length; s++)
                      if (
                        e[a].key === e[s].key &&
                        e[a].placement === e[s].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[a].key + ")"
                        );
                }
              }
              return { elements: e, finishers: r };
            },
            fromElementDescriptor: function(e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function(e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function(e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function() {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  })()).map(function(e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = w(e.key),
                n = String(e.placement);
              if ("static" !== n && "prototype" !== n && "own" !== n)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    n +
                    '"'
                );
              var i = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: r,
                placement: n,
                descriptor: Object.assign({}, i)
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      i,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      i,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function(e) {
              var t = this.toElementDescriptor(e),
                r = g(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function(e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this)
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0
                }),
                t
              );
            },
            toClassDescriptor: function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var r = g(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = (0, t[r])(e);
                if (void 0 !== n) {
                  if ("function" != typeof n)
                    throw new TypeError("Finishers must return a constructor.");
                  e = n;
                }
              }
              return e;
            },
            disallowProperty: function(e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            }
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function(e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function(e) {
              for (
                var t = [],
                  r = function(e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  n = 0;
                n < e.length;
                n++
              ) {
                var i,
                  o = e[n];
                if ("method" === o.kind && (i = t.find(r)))
                  if (b(o.descriptor) || b(i.descriptor)) {
                    if (v(o) || v(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (v(o)) {
                      if (v(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    y(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(m)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("ha-menu-button")],
        function(e, t) {
          var r = (function(r) {
            function n() {
              var t, r, i, o;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              for (
                var a = arguments.length, s = new Array(a), l = 0;
                l < a;
                l++
              )
                s[l] = arguments[l];
              return (
                (i = this),
                (r =
                  !(o = (t = E(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== c(o) && "function" != typeof o)
                    ? p(i)
                    : o),
                e(p(r)),
                r
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
                  t && h(e, t);
              })(n, t),
              n
            );
          })();
          return {
            F: r,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "hassio",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "narrow",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_hasNotifications",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                key: "_alwaysVisible",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                key: "_attachNotifOnConnect",
                value: function() {
                  return !1;
                }
              },
              { kind: "field", key: "_unsubNotifications", value: void 0 },
              {
                kind: "method",
                key: "connectedCallback",
                value: function() {
                  k(E(r.prototype), "connectedCallback", this).call(this),
                    this._attachNotifOnConnect &&
                      ((this._attachNotifOnConnect = !1),
                      this._subscribeNotifications());
                }
              },
              {
                kind: "method",
                key: "disconnectedCallback",
                value: function() {
                  k(E(r.prototype), "disconnectedCallback", this).call(this),
                    this._unsubNotifications &&
                      ((this._attachNotifOnConnect = !0),
                      this._unsubNotifications(),
                      (this._unsubNotifications = void 0));
                }
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e =
                    (this.narrow ||
                      "always_hidden" === this.hass.dockedSidebar) &&
                    (this._hasNotifications ||
                      Object.keys(this.hass.states).some(function(e) {
                        return (
                          "configurator" ===
                          (function(e) {
                            return e.substr(0, e.indexOf("."));
                          })(e)
                        );
                      }));
                  return Object(n.e)(
                    d(),
                    this.hass.localize("ui.sidebar.sidebar_toggle"),
                    this.hassio ? "hassio:menu" : "hass:menu",
                    this._toggleMenu,
                    e ? Object(n.e)(u()) : ""
                  );
                }
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function(e) {
                  k(E(r.prototype), "firstUpdated", this).call(this, e),
                    this.hassio &&
                      (this._alwaysVisible =
                        (Number(window.parent.frontendVersion) || 0) <
                        20190710);
                }
              },
              {
                kind: "method",
                key: "updated",
                value: function(e) {
                  if (
                    (k(E(r.prototype), "updated", this).call(this, e),
                    e.has("narrow") || e.has("hass"))
                  ) {
                    var t = e.get("hass"),
                      n =
                        e.get("narrow") ||
                        (t && "always_hidden" === t.dockedSidebar),
                      i =
                        this.narrow ||
                        "always_hidden" === this.hass.dockedSidebar;
                    if (n !== i) {
                      if (
                        ((this.style.visibility =
                          i || this._alwaysVisible ? "initial" : "hidden"),
                        !i)
                      )
                        return (
                          (this._hasNotifications = !1),
                          void (
                            this._unsubNotifications &&
                            (this._unsubNotifications(),
                            (this._unsubNotifications = void 0))
                          )
                        );
                      this._subscribeNotifications();
                    }
                  }
                }
              },
              {
                kind: "method",
                key: "_subscribeNotifications",
                value: function() {
                  var e,
                    t,
                    r = this;
                  this._unsubNotifications =
                    ((e = this.hass.connection),
                    (t = function(e) {
                      r._hasNotifications = e.length > 0;
                    }),
                    Object(o.a)("_ntf", a, s, e, t));
                }
              },
              {
                kind: "method",
                key: "_toggleMenu",
                value: function() {
                  Object(i.a)(this, "hass-toggle-menu");
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(n.c)(l());
                }
              }
            ]
          };
        },
        n.a
      );
    }
  }
]);
//# sourceMappingURL=chunk.4d45ee0a3d852768f97e.js.map
