(self.webpackJsonp = self.webpackJsonp || []).push([
  [10],
  {
    103: function (e, t) {},
    106: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return s;
        });
      var n = r(12),
        i = function () {
          return Promise.all([r.e(0), r.e(3)]).then(r.bind(null, 167));
        },
        o = function (e, t, r) {
          return new Promise(function (o) {
            var a = t.cancel,
              s = t.confirm;
            Object(n.a)(e, "show-dialog", {
              dialogTag: "dialog-box",
              dialogImport: i,
              dialogParams: Object.assign({}, t, {}, r, {
                cancel: function () {
                  o(!(null == r || !r.prompt) && null), a && a();
                },
                confirm: function (e) {
                  o(null == r || !r.prompt || e), s && s(e);
                },
              }),
            });
          });
        },
        a = function (e, t) {
          return o(e, t);
        },
        s = function (e, t) {
          return o(e, t, { confirmation: !0 });
        };
    },
    109: function (e, t, r) {
      "use strict";
      var n = r(6),
        i = r(34);
      r(92), r(83);
      function o(e) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
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
          '\n      :host {\n        display: block;\n        height: 100%;\n        background-color: var(--primary-background-color);\n      }\n\n      .toolbar {\n        display: flex;\n        align-items: center;\n        font-size: 20px;\n        height: 65px;\n        padding: 0 16px;\n        pointer-events: none;\n        background-color: var(--app-header-background-color);\n        font-weight: 400;\n        color: var(--app-header-text-color, white);\n        border-bottom: var(--app-header-border-bottom, none);\n        box-sizing: border-box;\n      }\n\n      ha-menu-button,\n      ha-paper-icon-button-arrow-prev,\n      ::slotted([slot="toolbar-icon"]) {\n        pointer-events: auto;\n      }\n\n      ha-paper-icon-button-arrow-prev.hidden {\n        visibility: hidden;\n      }\n\n      [main-title] {\n        margin: 0 0 0 24px;\n        line-height: 20px;\n        flex-grow: 1;\n      }\n\n      .content {\n        position: relative;\n        width: 100%;\n        height: calc(100% - 65px);\n        overflow-y: auto;\n        overflow: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n    ',
        ]);
        return (
          (a = function () {
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
          '</div>\n        <slot name="toolbar-icon"></slot>\n      </div>\n      <div class="content"><slot></slot></div>\n    ',
        ]);
        return (
          (s = function () {
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
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function u(e) {
        return function () {
          var t,
            r = d(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = d(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === o(t) || "function" == typeof t)) return t;
            return f(e);
          })(this, t);
        };
      }
      function f(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e) {
        var t,
          r = b(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function h(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function m(e) {
        return e.decorators && e.decorators.length;
      }
      function y(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function v(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function b(e) {
        var t = (function (e, t) {
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
      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      !(function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
                  if (!m(e)) return r.push(e);
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return g(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? g(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = b(e.key),
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = v(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = v(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                  if (y(o.descriptor) || y(i.descriptor)) {
                    if (m(o) || m(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (m(o)) {
                      if (m(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    h(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(p)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hass-subpage")],
        function (e, t) {
          return {
            F: (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && l(e, t);
              })(i, t);
              var n = u(i);
              function i() {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(f(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "header",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "showBackButton",
                value: function () {
                  return !0;
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "hassio",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(n.e)(
                    s(),
                    this.hassio,
                    this._backTapped,
                    Object(i.a)({ hidden: !this.showBackButton }),
                    this.header
                  );
                },
              },
              {
                kind: "method",
                key: "_backTapped",
                value: function () {
                  history.back();
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return Object(n.c)(a());
                },
              },
            ],
          };
        },
        n.a
      );
    },
    11: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      }),
        r.d(t, "b", function () {
          return c;
        }),
        r.d(t, "c", function () {
          return l;
        });
      var n = r(6);
      function i() {
        var e = a([
          "\n  /* prevent clipping of positioned elements */\n  paper-dialog-scrollable {\n    --paper-dialog-scrollable: {\n      -webkit-overflow-scrolling: auto;\n    }\n  }\n\n  /* force smooth scrolling for iOS 10 */\n  paper-dialog-scrollable.can-scroll {\n    --paper-dialog-scrollable: {\n      -webkit-overflow-scrolling: touch;\n    }\n  }\n\n  .paper-dialog-buttons {\n    align-items: flex-end;\n    padding: 8px;\n  }\n\n  @media all and (min-width: 450px) {\n    ha-paper-dialog {\n      min-width: 400px;\n    }\n  }\n\n  @media all and (max-width: 450px), all and (max-height: 500px) {\n    paper-dialog,\n    ha-paper-dialog {\n      margin: 0;\n      width: 100% !important;\n      max-height: calc(100% - 64px);\n\n      position: fixed !important;\n      bottom: 0px;\n      left: 0px;\n      right: 0px;\n      overflow: scroll;\n      border-bottom-left-radius: 0px;\n      border-bottom-right-radius: 0px;\n    }\n  }\n\n  /* mwc-dialog (ha-dialog) styles */\n  ha-dialog {\n    --mdc-dialog-min-width: 400px;\n    --mdc-dialog-max-width: 600px;\n    --mdc-dialog-heading-ink-color: var(--primary-text-color);\n    --mdc-dialog-content-ink-color: var(--primary-text-color);\n    --justify-action-buttons: space-between;\n  }\n\n  ha-dialog .form {\n    padding-bottom: 24px;\n    color: var(--primary-text-color);\n  }\n\n  /* make dialog fullscreen on small screens */\n  @media all and (max-width: 450px), all and (max-height: 500px) {\n    ha-dialog {\n      --mdc-dialog-min-width: 100vw;\n      --mdc-dialog-max-height: 100vh;\n      --mdc-dialog-shape-radius: 0px;\n      --vertial-align-dialog: flex-end;\n    }\n  }\n  mwc-button.warning {\n    --mdc-theme-primary: var(--google-red-500);\n  }\n  .error {\n    color: var(--google-red-500);\n  }\n",
        ]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = a([
          "\n  :host {\n    font-family: var(--paper-font-body1_-_font-family);\n    -webkit-font-smoothing: var(--paper-font-body1_-_-webkit-font-smoothing);\n    font-size: var(--paper-font-body1_-_font-size);\n    font-weight: var(--paper-font-body1_-_font-weight);\n    line-height: var(--paper-font-body1_-_line-height);\n  }\n\n  app-header-layout,\n  ha-app-layout {\n    background-color: var(--primary-background-color);\n  }\n\n  app-header,\n  app-toolbar {\n    background-color: var(--app-header-background-color);\n    font-weight: 400;\n    color: var(--app-header-text-color, white);\n  }\n\n  app-toolbar ha-menu-button + [main-title],\n  app-toolbar ha-paper-icon-button-arrow-prev + [main-title],\n  app-toolbar paper-icon-button + [main-title] {\n    margin-left: 24px;\n  }\n\n  h1 {\n    font-family: var(--paper-font-title_-_font-family);\n    -webkit-font-smoothing: var(--paper-font-title_-_-webkit-font-smoothing);\n    white-space: var(--paper-font-title_-_white-space);\n    overflow: var(--paper-font-title_-_overflow);\n    text-overflow: var(--paper-font-title_-_text-overflow);\n    font-size: var(--paper-font-title_-_font-size);\n    font-weight: var(--paper-font-title_-_font-weight);\n    line-height: var(--paper-font-title_-_line-height);\n  }\n\n  h2 {\n    font-family: var(--paper-font-subhead_-_font-family);\n    -webkit-font-smoothing: var(--paper-font-subhead_-_-webkit-font-smoothing);\n    white-space: var(--paper-font-subhead_-_white-space);\n    overflow: var(--paper-font-subhead_-_overflow);\n    text-overflow: var(--paper-font-subhead_-_text-overflow);\n    font-size: var(--paper-font-subhead_-_font-size);\n    font-weight: var(--paper-font-subhead_-_font-weight);\n    line-height: var(--paper-font-subhead_-_line-height);\n  }\n\n  .secondary {\n    color: var(--secondary-text-color);\n  }\n\n  .error {\n    color: var(--google-red-500);\n  }\n\n  .warning {\n    color: var(--google-red-500);\n  }\n\n  mwc-button.warning {\n    --mdc-theme-primary: var(--google-red-500);\n  }\n\n  button.link {\n    background: none;\n    color: inherit;\n    border: none;\n    padding: 0;\n    font: inherit;\n    text-align: left;\n    text-decoration: underline;\n    cursor: pointer;\n  }\n\n  .card-actions a {\n    text-decoration: none;\n  }\n\n  .card-actions .warning {\n    --mdc-theme-primary: var(--google-red-500);\n  }\n\n  .layout.horizontal,\n  .layout.vertical {\n    display: flex;\n  }\n  .layout.inline {\n    display: inline-flex;\n  }\n  .layout.horizontal {\n    flex-direction: row;\n  }\n  .layout.vertical {\n    flex-direction: column;\n  }\n  .layout.wrap {\n    flex-wrap: wrap;\n  }\n  .layout.no-wrap {\n    flex-wrap: nowrap;\n  }\n  .layout.center,\n  .layout.center-center {\n    align-items: center;\n  }\n  .layout.bottom {\n    align-items: flex-end;\n  }\n  .layout.center-justified,\n  .layout.center-center {\n    justify-content: center;\n  }\n  .flex {\n    flex: 1;\n    flex-basis: 0.000000001px;\n  }\n  .flex-auto {\n    flex: 1 1 auto;\n  }\n  .flex-none {\n    flex: none;\n  }\n  .layout.justified {\n    justify-content: space-between;\n  }\n",
        ]);
        return (
          (o = function () {
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
          "sidebar-background-color": "var(--card-background-color)",
          "sidebar-selected-text-color": "var(--primary-color)",
          "sidebar-selected-icon-color": "var(--primary-color)",
          "sidebar-icon-color": "rgba(var(--rgb-primary-text-color), 0.6)",
          "switch-checked-color": "var(--primary-color)",
          "switch-checked-button-color":
            "var(--switch-checked-color, var(--primary-background-color))",
          "switch-checked-track-color": "var(--switch-checked-color, #000000)",
          "switch-unchecked-button-color":
            "var(--switch-unchecked-color, var(--primary-background-color))",
          "switch-unchecked-track-color":
            "var(--switch-unchecked-color, #000000)",
          "slider-color": "var(--primary-color)",
          "slider-secondary-color": "var(--light-primary-color)",
          "slider-bar-color": "var(--disabled-text-color)",
          "label-badge-grey": "var(--paper-grey-500)",
          "label-badge-background-color": "var(--card-background-color)",
          "label-badge-text-color": "rgba(var(--rgb-primary-text-color), 0.8)",
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
          "mdc-theme-surface": "var(--card-background-color)",
          "mdc-theme-on-primary": "var(--text-primary-color)",
          "mdc-theme-on-secondary": "var(--text-primary-color)",
          "mdc-theme-on-surface": "var(--primary-text-color)",
          "app-header-text-color": "var(--text-primary-color)",
          "app-header-background-color": "var(--primary-color)",
          "material-body-text-color": "var(--primary-text-color)",
          "material-background-color": "var(--card-background-color)",
          "material-secondary-background-color":
            "var(--secondary-background-color)",
        },
        c = Object(n.c)(o()),
        l = Object(n.c)(i());
    },
    110: function (e, t, r) {
      "use strict";
      r(84), r(35);
      var n = r(6),
        i = (r(92), r(83), r(11));
      function o(e) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
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
          "\n        :host {\n          display: block;\n          height: 100%;\n          background-color: var(--primary-background-color);\n        }\n        .content {\n          height: calc(100% - 64px);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        }\n      ",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = u([
          "\n              <ha-paper-icon-button-arrow-prev\n                @click=",
          "\n              ></ha-paper-icon-button-arrow-prev>\n            ",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = u([
          "\n              <ha-menu-button\n                .hass=",
          "\n                .narrow=",
          "\n              ></ha-menu-button>\n            ",
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = u([
          "\n      <app-toolbar>\n        ",
          '\n      </app-toolbar>\n      <div class="content">\n        <paper-spinner-lite active></paper-spinner-lite>\n      </div>\n    ',
        ]);
        return (
          (l = function () {
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
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        return function () {
          var t,
            r = h(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = h(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === o(t) || "function" == typeof t)) return t;
            return p(e);
          })(this, t);
        };
      }
      function p(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e) {
        var t,
          r = w(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
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
        var t = (function (e, t) {
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
      function k(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      !(function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return k(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? k(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = g(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
        [Object(n.d)("hass-loading-screen")],
        function (e, t) {
          return {
            F: (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && f(e, t);
              })(i, t);
              var n = d(i);
              function i() {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(p(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "rootnav",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "narrow",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(n.e)(
                    l(),
                    this.rootnav
                      ? Object(n.e)(c(), this.hass, this.narrow)
                      : Object(n.e)(s(), this._handleBack)
                  );
                },
              },
              {
                kind: "method",
                key: "_handleBack",
                value: function () {
                  history.back();
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [i.b, Object(n.c)(a())];
                },
              },
            ],
          };
        },
        n.a
      );
    },
    113: function (e, t, r) {
      "use strict";
      r(18), r(136);
      var n = r(7),
        i = r(37);
      function o(e) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function a() {
        var e = (function (e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        .container {\n          position: relative;\n          display: inline-block;\n        }\n\n        mwc-button {\n          transition: all 1s;\n        }\n\n        .success mwc-button {\n          --mdc-theme-primary: white;\n          background-color: var(--google-green-500);\n          transition: none;\n        }\n\n        .error mwc-button {\n          --mdc-theme-primary: white;\n          background-color: var(--google-red-500);\n          transition: none;\n        }\n\n        .progress {\n          @apply --layout;\n          @apply --layout-center-center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n        }\n      </style>\n      <div class="container" id="container">\n        <mwc-button\n          id="button"\n          disabled="[[computeDisabled(disabled, progress)]]"\n          on-click="buttonTapped"\n        >\n          <slot></slot>\n        </mwc-button>\n        <template is="dom-if" if="[[progress]]">\n          <div class="progress"><paper-spinner active=""></paper-spinner></div>\n        </template>\n      </div>\n    ',
        ]);
        return (
          (a = function () {
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
      function c(e, t, r) {
        return (c =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = f(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function u(e) {
        return function () {
          var t,
            r = f(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = f(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === o(t) || "function" == typeof t)) return t;
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e);
          })(this, t);
        };
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var d = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && l(e, t);
        })(p, i["a"]);
        var t,
          r,
          o,
          d = u(p);
        function p() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, p),
            d.apply(this, arguments)
          );
        }
        return (
          (t = p),
          (o = [
            {
              key: "template",
              get: function () {
                return Object(n.a)(a());
              },
            },
            {
              key: "properties",
              get: function () {
                return {
                  hass: { type: Object },
                  progress: { type: Boolean, value: !1 },
                  disabled: { type: Boolean, value: !1 },
                };
              },
            },
          ]),
          (r = [
            {
              key: "tempClass",
              value: function (e) {
                var t = this.$.container.classList;
                t.add(e),
                  setTimeout(function () {
                    t.remove(e);
                  }, 1e3);
              },
            },
            {
              key: "ready",
              value: function () {
                var e = this;
                c(f(p.prototype), "ready", this).call(this),
                  this.addEventListener("click", function (t) {
                    return e.buttonTapped(t);
                  });
              },
            },
            {
              key: "buttonTapped",
              value: function (e) {
                this.progress && e.stopPropagation();
              },
            },
            {
              key: "actionSuccess",
              value: function () {
                this.tempClass("success");
              },
            },
            {
              key: "actionError",
              value: function () {
                this.tempClass("error");
              },
            },
            {
              key: "computeDisabled",
              value: function (e, t) {
                return e || t;
              },
            },
          ]) && s(t.prototype, r),
          o && s(t, o),
          p
        );
      })();
      customElements.define("ha-progress-button", d);
    },
    115: function (e, t, r) {
      "use strict";
      r.d(t, "d", function () {
        return a;
      }),
        r.d(t, "c", function () {
          return s;
        }),
        r.d(t, "e", function () {
          return c;
        }),
        r.d(t, "a", function () {
          return l;
        }),
        r.d(t, "b", function () {
          return u;
        });
      var n = r(48);
      function i(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function o(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var a = e.apply(t, r);
            function s(e) {
              i(a, n, o, s, c, "next", e);
            }
            function c(e) {
              i(a, n, o, s, c, "throw", e);
            }
            s(void 0);
          });
        };
      }
      var a = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = n.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/snapshots")
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent),
                        e.abrupt("return", (0, e.t0)(e.t1).snapshots)
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        s = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = n.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/snapshots/".concat(r, "/info"))
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent), e.abrupt("return", (0, e.t0)(e.t1))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })(),
        c = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.callApi("POST", "hassio/snapshots/reload")
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        l = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.callApi("POST", "hassio/snapshots/new/full", r)
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })(),
        u = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.callApi("POST", "hassio/snapshots/new/partial", r)
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })();
    },
    116: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return a;
      }),
        r.d(t, "b", function () {
          return s;
        });
      var n = r(48);
      function i(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function o(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var a = e.apply(t, r);
            function s(e) {
              i(a, n, o, s, c, "next", e);
            }
            function c(e) {
              i(a, n, o, s, c, "throw", e);
            }
            s(void 0);
          });
        };
      }
      var a = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = n.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/hardware/audio")
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent), e.abrupt("return", (0, e.t0)(e.t1))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        s = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = n.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/hardware/info")
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent), e.abrupt("return", (0, e.t0)(e.t1))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
    },
    117: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      });
      var n = r(12),
        i = function (e, t) {
          Object(n.a)(e, "show-dialog", {
            dialogTag: "dialog-hassio-markdown",
            dialogImport: function () {
              return r.e(4).then(r.bind(null, 168));
            },
            dialogParams: t,
          });
        };
    },
    119: function (e, t, r) {
      "use strict";
      var n = r(6);
      function i(e) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function o() {
        var e = s([
          "\n      pre {\n        overflow-x: auto;\n        white-space: pre-wrap;\n        overflow-wrap: break-word;\n      }\n      .bold {\n        font-weight: bold;\n      }\n      .italic {\n        font-style: italic;\n      }\n      .underline {\n        text-decoration: underline;\n      }\n      .strikethrough {\n        text-decoration: line-through;\n      }\n      .underline.strikethrough {\n        text-decoration: underline line-through;\n      }\n      .fg-red {\n        color: rgb(222, 56, 43);\n      }\n      .fg-green {\n        color: rgb(57, 181, 74);\n      }\n      .fg-yellow {\n        color: rgb(255, 199, 6);\n      }\n      .fg-blue {\n        color: rgb(0, 111, 184);\n      }\n      .fg-magenta {\n        color: rgb(118, 38, 113);\n      }\n      .fg-cyan {\n        color: rgb(44, 181, 233);\n      }\n      .fg-white {\n        color: rgb(204, 204, 204);\n      }\n      .bg-black {\n        background-color: rgb(0, 0, 0);\n      }\n      .bg-red {\n        background-color: rgb(222, 56, 43);\n      }\n      .bg-green {\n        background-color: rgb(57, 181, 74);\n      }\n      .bg-yellow {\n        background-color: rgb(255, 199, 6);\n      }\n      .bg-blue {\n        background-color: rgb(0, 111, 184);\n      }\n      .bg-magenta {\n        background-color: rgb(118, 38, 113);\n      }\n      .bg-cyan {\n        background-color: rgb(44, 181, 233);\n      }\n      .bg-white {\n        background-color: rgb(204, 204, 204);\n      }\n    ",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function a() {
        var e = s(["", ""]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function s(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function l(e) {
        return function () {
          var t,
            r = f(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = f(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === i(t) || "function" == typeof t)) return t;
            return u(e);
          })(this, t);
        };
      }
      function u(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function d(e) {
        var t,
          r = v(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
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
        var t = (function (e, t) {
          if ("object" !== i(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== i(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === i(t) ? t : String(t);
      }
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      !(function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return b(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? b(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = y(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
            })(a.d.map(d)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-ansi-to-html")],
        function (e, t) {
          return {
            F: (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && c(e, t);
              })(i, t);
              var n = l(i);
              function i() {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(u(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "content",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(n.e)(
                    a(),
                    this._parseTextToColoredPre(this.content)
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return Object(n.c)(o());
                },
              },
              {
                kind: "method",
                key: "_parseTextToColoredPre",
                value: function (e) {
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
                        backgroundColor: null,
                      },
                      a = function (e) {
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
                        t[1].split(";").forEach(function (e) {
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
                },
              },
            ],
          };
        },
        n.a
      );
    },
    12: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      });
      var n = function (e, t, r, n) {
        (n = n || {}), (r = null == r ? {} : r);
        var i = new Event(t, {
          bubbles: void 0 === n.bubbles || n.bubbles,
          cancelable: Boolean(n.cancelable),
          composed: void 0 === n.composed || n.composed,
        });
        return (i.detail = r), e.dispatchEvent(i), i;
      };
    },
    120: function (e, t, r) {
      "use strict";
      r(25);
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
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
      function o(e, t, r) {
        return (o =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = l(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function a(e, t) {
        return (a =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function s(e) {
        return function () {
          var t,
            r = l(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var i = l(this).constructor;
            t = Reflect.construct(r, arguments, i);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === n(t) || "function" == typeof t)) return t;
            return c(e);
          })(this, t);
        };
      }
      function c(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var u = customElements.get("iron-icon"),
        f = !1,
        d = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && a(e, t);
          })(h, u);
          var t,
            n,
            d,
            p = s(h);
          function h() {
            var e, t, r, n;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, h);
            for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
              o[a] = arguments[a];
            return (
              (e = p.call.apply(p, [this].concat(o))),
              (t = c(e)),
              (n = void 0),
              (r = "_iconsetName") in t
                ? Object.defineProperty(t, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[r] = n),
              e
            );
          }
          return (
            (t = h),
            (n = [
              {
                key: "listen",
                value: function (e, t, n) {
                  o(l(h.prototype), "listen", this).call(this, e, t, n),
                    f ||
                      "mdi" !== this._iconsetName ||
                      ((f = !0), r.e(11).then(r.bind(null, 174)));
                },
              },
            ]) && i(t.prototype, n),
            d && i(t, d),
            h
          );
        })();
      customElements.define("ha-icon", d);
    },
    129: function (e, t, r) {
      "use strict";
      r(172);
      var n = r(6),
        i = r(34),
        o = r(49),
        a = r(38);
      r(92), r(83), r(120);
      function s(e) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function c() {
        var e = m([
          '\n      :host {\n        display: block;\n        height: 100%;\n        background-color: var(--primary-background-color);\n      }\n\n      .toolbar {\n        display: flex;\n        align-items: center;\n        font-size: 20px;\n        height: 65px;\n        background-color: var(--sidebar-background-color);\n        font-weight: 400;\n        color: var(--sidebar-text-color);\n        border-bottom: 1px solid var(--divider-color);\n        padding: 0 16px;\n        box-sizing: border-box;\n      }\n\n      #tabbar {\n        display: flex;\n        font-size: 14px;\n      }\n\n      #tabbar.bottom-bar {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        padding: 0 16px;\n        box-sizing: border-box;\n        background-color: var(--sidebar-background-color);\n        border-top: 1px solid var(--divider-color);\n        justify-content: space-between;\n        z-index: 1;\n        font-size: 12px;\n        width: 100%;\n      }\n\n      #tabbar:not(.bottom-bar) {\n        flex: 1;\n        justify-content: center;\n      }\n\n      .tab {\n        padding: 0 32px;\n        display: flex;\n        flex-direction: column;\n        text-align: center;\n        align-items: center;\n        justify-content: center;\n        height: 64px;\n        cursor: pointer;\n      }\n\n      .name {\n        white-space: nowrap;\n      }\n\n      .tab.active {\n        color: var(--primary-color);\n      }\n\n      #tabbar:not(.bottom-bar) .tab.active {\n        border-bottom: 2px solid var(--primary-color);\n      }\n\n      .bottom-bar .tab {\n        padding: 0 16px;\n        width: 20%;\n        min-width: 0;\n      }\n\n      :host(:not([narrow])) #toolbar-icon {\n        min-width: 40px;\n      }\n\n      ha-menu-button,\n      ha-paper-icon-button-arrow-prev,\n      ::slotted([slot="toolbar-icon"]) {\n        flex-shrink: 0;\n        pointer-events: auto;\n        color: var(--sidebar-icon-color);\n      }\n\n      .main-title {\n        flex: 1;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-height: 40px;\n        line-height: 20px;\n      }\n\n      .content {\n        position: relative;\n        width: 100%;\n        height: calc(100% - 65px);\n        overflow-y: auto;\n        overflow: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([narrow]) .content {\n        height: calc(100% - 128px);\n      }\n    ',
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = m([
          '\n              <div id="tabbar" class=',
          ">\n                ",
          "\n              </div>\n            ",
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = m([
          ' <div class="main-title"><slot name="header"></slot></div> ',
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = m([
          '\n      <div class="toolbar">\n        <ha-paper-icon-button-arrow-prev\n          aria-label="Back"\n          .hassio=',
          "\n          @click=",
          "\n        ></ha-paper-icon-button-arrow-prev>\n        ",
          "\n        ",
          '\n        <div id="toolbar-icon">\n          <slot name="toolbar-icon"></slot>\n        </div>\n      </div>\n      <div class="content">\n        <slot></slot>\n      </div>\n    ',
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = m([
          '\n                    <span class="name"\n                      >',
          "</span\n                    >\n                  ",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = m([" <ha-icon .icon=", "></ha-icon> "]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = m([
          '\n            <div\n              class="tab ',
          '"\n              @click=',
          "\n              .path=",
          "\n            >\n              ",
          "\n              ",
          "\n              <mwc-ripple></mwc-ripple>\n            </div>\n          ",
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function m(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function v(e) {
        return function () {
          var t,
            r = S(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = S(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === s(t) || "function" == typeof t)) return t;
            return b(e);
          })(this, t);
        };
      }
      function b(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function g(e) {
        var t,
          r = P(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function w(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function k(e) {
        return e.decorators && e.decorators.length;
      }
      function E(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function O(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function P(e) {
        var t = (function (e, t) {
          if ("object" !== s(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== s(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === s(t) ? t : String(t);
      }
      function j(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function x(e, t, r) {
        return (x =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = S(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function S(e) {
        return (S = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      !(function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
                  if (!k(e)) return r.push(e);
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return j(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? j(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = P(e.key),
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = O(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = O(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                  if (E(o.descriptor) || E(i.descriptor)) {
                    if (k(o) || k(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (k(o)) {
                      if (k(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    w(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(g)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hass-tabs-subpage")],
        function (e, t) {
          var r = (function (r) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && y(e, t);
            })(i, t);
            var n = v(i);
            function i() {
              var t;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i);
              for (
                var r = arguments.length, o = new Array(r), a = 0;
                a < r;
                a++
              )
                o[a] = arguments[a];
              return (t = n.call.apply(n, [this].concat(o))), e(b(t)), t;
            }
            return i;
          })();
          return {
            F: r,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [
                  Object(n.f)({ type: String, attribute: "back-path" }),
                ],
                key: "backPath",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "backCallback",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "hassio",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "route",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "tabs",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean, reflect: !0 })],
                key: "narrow",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_activeTab",
                value: void 0,
              },
              {
                kind: "field",
                key: "_getTabs",
                value: function () {
                  var e = this;
                  return Object(o.a)(function (t, r, o, a, s, c) {
                    return t
                      .filter(function (t) {
                        return (
                          (!t.component ||
                            t.core ||
                            ((r = e.hass),
                            (n = t.component),
                            r && -1 !== r.config.components.indexOf(n))) &&
                          (!t.advancedOnly || o)
                        );
                        var r, n;
                      })
                      .map(function (t) {
                        return Object(n.e)(
                          h(),
                          Object(i.a)({ active: t === r }),
                          e._tabTapped,
                          t.path,
                          e.narrow ? Object(n.e)(p(), t.icon) : "",
                          e.narrow && t !== r
                            ? ""
                            : Object(n.e)(
                                d(),
                                t.translationKey
                                  ? e.hass.localize(t.translationKey)
                                  : t.name
                              )
                        );
                      });
                  });
                },
              },
              {
                kind: "method",
                key: "updated",
                value: function (e) {
                  var t = this;
                  x(S(r.prototype), "updated", this).call(this, e),
                    e.has("route") &&
                      (this._activeTab = this.tabs.find(function (e) {
                        return ""
                          .concat(t.route.prefix)
                          .concat(t.route.path)
                          .includes(e.path);
                      }));
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  var e,
                    t = this._getTabs(
                      this.tabs,
                      this._activeTab,
                      null === (e = this.hass.userData) || void 0 === e
                        ? void 0
                        : e.showAdvanced,
                      this.hass.config.components,
                      this.hass.language,
                      this.narrow
                    );
                  return Object(n.e)(
                    f(),
                    this.hassio,
                    this._backTapped,
                    this.narrow ? Object(n.e)(u()) : "",
                    t.length > 1 || !this.narrow
                      ? Object(n.e)(
                          l(),
                          Object(i.a)({ "bottom-bar": this.narrow }),
                          t
                        )
                      : ""
                  );
                },
              },
              {
                kind: "method",
                key: "_tabTapped",
                value: function (e) {
                  Object(a.a)(this, e.currentTarget.path, !0);
                },
              },
              {
                kind: "method",
                key: "_backTapped",
                value: function () {
                  this.backPath
                    ? Object(a.a)(this, this.backPath)
                    : this.backCallback
                    ? this.backCallback()
                    : history.back();
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return Object(n.c)(c());
                },
              },
            ],
          };
        },
        n.a
      );
    },
    13: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      });
      var n = r(6);
      function i() {
        var e = (function (e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n  .content {\n    margin: 8px;\n  }\n  h1 {\n    color: var(--primary-text-color);\n    font-size: 2em;\n    margin-bottom: 8px;\n    font-family: var(--paper-font-headline_-_font-family);\n    -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);\n    font-size: var(--paper-font-headline_-_font-size);\n    font-weight: var(--paper-font-headline_-_font-weight);\n    letter-spacing: var(--paper-font-headline_-_letter-spacing);\n    line-height: var(--paper-font-headline_-_line-height);\n    padding-left: 8px;\n  }\n  .description {\n    margin-top: 4px;\n    padding-left: 8px;\n  }\n  .card-group {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    grid-gap: 8px;\n  }\n  @media screen and (min-width: 640px) {\n    .card-group {\n      grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));\n    }\n  }\n  @media screen and (min-width: 1020px) {\n    .card-group {\n      grid-template-columns: repeat(auto-fit, minmax(300px, 0.333fr));\n    }\n  }\n  @media screen and (min-width: 1300px) {\n    .card-group {\n      grid-template-columns: repeat(auto-fit, minmax(300px, 0.25fr));\n    }\n  }\n  ha-call-api-button {\n    font-weight: 500;\n    color: var(--primary-color);\n  }\n  .error {\n    color: var(--error-color);\n    margin-top: 16px;\n  }\n",
        ]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      var o = Object(n.c)(i());
    },
    23: function (e, t, r) {
      "use strict";
      r.d(t, "g", function () {
        return a;
      }),
        r.d(t, "e", function () {
          return s;
        }),
        r.d(t, "c", function () {
          return c;
        }),
        r.d(t, "a", function () {
          return l;
        }),
        r.d(t, "d", function () {
          return u;
        }),
        r.d(t, "b", function () {
          return f;
        }),
        r.d(t, "h", function () {
          return d;
        }),
        r.d(t, "i", function () {
          return p;
        }),
        r.d(t, "f", function () {
          return h;
        }),
        r.d(t, "j", function () {
          return m;
        });
      var n = r(48);
      function i(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function o(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var a = e.apply(t, r);
            function s(e) {
              i(a, n, o, s, c, "next", e);
            }
            function c(e) {
              i(a, n, o, s, c, "throw", e);
            }
            s(void 0);
          });
        };
      }
      var a = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), t.callApi("POST", "hassio/addons/reload")
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        s = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = n.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/addons")
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent), e.abrupt("return", (0, e.t0)(e.t1))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        c = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = n.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/addons/".concat(r, "/info"))
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent), e.abrupt("return", (0, e.t0)(e.t1))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })(),
        l = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        t.callApi(
                          "GET",
                          "hassio/addons/".concat(r, "/changelog")
                        )
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })(),
        u = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        t.callApi("GET", "hassio/addons/".concat(r, "/logs"))
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })(),
        f = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        t.callApi(
                          "GET",
                          "hassio/addons/".concat(r, "/documentation")
                        )
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })(),
        d = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t, r, n) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.callApi(
                          "POST",
                          "hassio/addons/".concat(r, "/options"),
                          n
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r, n) {
            return e.apply(this, arguments);
          };
        })(),
        p = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t, r, n) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.callApi(
                          "POST",
                          "hassio/addons/".concat(r, "/security"),
                          n
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r, n) {
            return e.apply(this, arguments);
          };
        })(),
        h = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        t.callApi(
                          "POST",
                          "hassio/addons/".concat(r, "/install")
                        )
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })(),
        m = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.callApi(
                          "POST",
                          "hassio/addons/".concat(r, "/uninstall")
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })();
    },
    3: function (e, t, r) {
      "use strict";
      r.r(t);
      r(33);
      var n = r(6),
        i = r(11),
        o = {},
        a = function (e, t) {
          if (t.themes[e]) {
            for (
              var r,
                n,
                a = Object.assign({}, i.a, {}, t.themes[e]),
                s = {},
                c = {},
                l = 0,
                u = Object.keys(a);
              l < u.length;
              l++
            ) {
              var f = u[l],
                d = "--".concat(f),
                p = a[f];
              if (((s[d] = p), (c[d] = ""), p.startsWith("#"))) {
                var h = "rgb-".concat(f);
                if (void 0 === a[h]) {
                  var m =
                    ((r = void 0),
                    (n = void 0),
                    (r = p.replace(
                      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                      function (e, t, r, n) {
                        return t + t + r + r + n + n;
                      }
                    )),
                    (n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r))
                      ? ""
                          .concat(parseInt(n[1], 16), ", ")
                          .concat(parseInt(n[2], 16), ", ")
                          .concat(parseInt(n[3], 16))
                      : null);
                  if (null !== m) {
                    var y = "--".concat(h);
                    (s[y] = m), (c[y] = "");
                  }
                }
              }
            }
            return (o[e] = { styles: s, keys: c }), { styles: s, keys: c };
          }
        },
        s = r(12),
        c = r(38),
        l = r(23),
        u = r(48);
      function f(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function d(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = e.apply(t, r);
            function a(e) {
              f(o, n, i, a, s, "next", e);
            }
            function s(e) {
              f(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      var p = (function () {
          var e = d(
            regeneratorRuntime.mark(function e(t) {
              var r;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t.callApi("GET", "hassio/host/info");
                    case 2:
                      return (r = e.sent), e.abrupt("return", Object(u.a)(r));
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        h = (function () {
          var e = d(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = u.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/os/info")
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent), e.abrupt("return", (0, e.t0)(e.t1))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        m = r(66),
        y = r(106);
      function v(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function b(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = e.apply(t, r);
            function a(e) {
              v(o, n, i, a, s, "next", e);
            }
            function s(e) {
              v(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      var g = {},
        w = (function () {
          var e = b(
            regeneratorRuntime.mark(function e(t, r, n, i, o) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        i in g ||
                          (g[i] = n().then(function () {
                            var e = document.createElement(i);
                            return t.provideHass(e), r.appendChild(e), e;
                          })),
                        (e.next = 3),
                        g[i]
                      );
                    case 3:
                      e.sent.showDialog(o);
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r, n, i, o) {
            return e.apply(this, arguments);
          };
        })(),
        k = r(93);
      function E(e) {
        return (E =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function O(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function P(e, t, r) {
        return (P =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = _(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function j(e, t) {
        return (j =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function x(e) {
        return function () {
          var t,
            r = _(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = _(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === E(t) || "function" == typeof t)) return t;
            return S(e);
          })(this, t);
        };
      }
      function S(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _(e) {
        return (_ = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function D(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      r(133), r(128);
      function C(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
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
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return A(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return A(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function A(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var T = document.createElement("template");
      T.setAttribute("style", "display: none;"),
        (T.innerHTML = "<custom-style>\n  <style>\n    /*\n      Home Assistant default styles.\n\n      In Polymer 2.0, default styles should to be set on the html selector.\n      (Setting all default styles only on body breaks shadyCSS polyfill.)\n      See: https://github.com/home-assistant/home-assistant-polymer/pull/901\n    */\n    html {\n      font-size: 14px;\n      height: 100vh;\n\n      /* text */\n      --primary-text-color: #212121;\n      --secondary-text-color: #727272;\n      --text-primary-color: #ffffff;\n      --disabled-text-color: #bdbdbd;\n\n      /* main interface colors */\n      --primary-color: #03a9f4;\n      --dark-primary-color: #0288d1;\n      --light-primary-color: #b3e5fC;\n      --accent-color: #ff9800;\n      --divider-color: rgba(0, 0, 0, .12);\n\n      --scrollbar-thumb-color: rgb(194, 194, 194);\n\n      --error-color: #db4437;\n\n      /* states and badges */\n      --state-icon-color: #44739e;\n      --state-icon-active-color: #FDD835;\n\n      /* background and sidebar */\n      --card-background-color: #ffffff;\n      --primary-background-color: #fafafa;\n      --secondary-background-color: #e5e5e5; /* behind the cards on state */\n\n      /* for label-badge */\n      --label-badge-red: #DF4C1E;\n      --label-badge-blue: #039be5;\n      --label-badge-green: #0DA035;\n      --label-badge-yellow: #f4b400;\n\n      /*\n        Paper-styles color.html dependency is stripped on build.\n        When a default paper-style color is used, it needs to be copied\n        from paper-styles/color.html to here.\n      */\n\n      --paper-grey-50: #fafafa; /* default for: --mwc-switch-unchecked-button-color */\n      --paper-grey-200: #eeeeee;  /* for ha-date-picker-style */\n      --paper-grey-500: #9e9e9e;  /* --label-badge-grey */\n\n      /* for paper-spinner */\n      --google-red-500: #db4437;\n      --google-blue-500: #4285f4;\n      --google-green-500: #0f9d58;\n      --google-yellow-500: #f4b400;\n\n      /* for paper-slider */\n      --paper-green-400: #66bb6a;\n      --paper-blue-400: #42a5f5;\n      --paper-orange-400: #ffa726;\n\n      /* opacity for dark text on a light background */\n      --dark-divider-opacity: 0.12;\n      --dark-disabled-opacity: 0.38; /* or hint text or icon */\n      --dark-secondary-opacity: 0.54;\n      --dark-primary-opacity: 0.87;\n\n      /* opacity for light text on a dark background */\n      --light-divider-opacity: 0.12;\n      --light-disabled-opacity: 0.3; /* or hint text or icon */\n      --light-secondary-opacity: 0.7;\n      --light-primary-opacity: 1.0;\n\n      /* set our slider style */\n      --ha-paper-slider-pin-font-size: 15px;\n\n      /* rgb */\n      --rgb-primary-color: 3, 169, 244;\n      --rgb-accent-color: 255, 152, 0;\n      --rgb-primary-text-color: 33, 33, 33;\n      --rgb-secondary-text-color: 114, 114, 114;\n      --rgb-text-primary-color: 255, 255, 255;\n\n      "
          .concat(
            Object.entries(i.a)
              .map(function (e) {
                var t = C(e, 2),
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
        document.head.appendChild(T.content);
      var R = r(17);
      r(68), r(18), r(25), r(42);
      function z(e) {
        return (z =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function I() {
        var e = M([
          "\n      paper-input {\n        flex: 1 1 auto;\n        margin: 0 16px;\n      }\n      .search-container {\n        display: inline-flex;\n        width: 100%;\n        align-items: center;\n      }\n      .prefix {\n        margin: 8px;\n      }\n    ",
        ]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      function F(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function L(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = e.apply(t, r);
            function a(e) {
              F(o, n, i, a, s, "next", e);
            }
            function s(e) {
              F(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function U() {
        var e = M([
          '\n            <paper-icon-button\n              slot="suffix"\n              class="suffix"\n              @click=',
          '\n              icon="hassio:close"\n              alt="Clear"\n              title="Clear"\n            ></paper-icon-button>\n          ',
        ]);
        return (
          (U = function () {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = M([
          '\n      <div class="search-container">\n        <paper-input\n          label="Search"\n          .value=',
          "\n          @value-changed=",
          '\n        >\n          <iron-icon\n            icon="hassio:magnify"\n            slot="prefix"\n            class="prefix"\n          ></iron-icon>\n          ',
          "\n        </paper-input>\n      </div>\n    ",
        ]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      function M(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function H(e, t) {
        return (H =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function B(e) {
        return function () {
          var t,
            r = G(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = G(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === z(t) || "function" == typeof t)) return t;
            return $(e);
          })(this, t);
        };
      }
      function $(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function G(e) {
        return (G = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function V(e) {
        var t,
          r = K(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function J(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function W(e) {
        return e.decorators && e.decorators.length;
      }
      function Y(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function q(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function K(e) {
        var t = (function (e, t) {
          if ("object" !== z(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== z(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === z(t) ? t : String(t);
      }
      function Q(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      (function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
                  if (!W(e)) return r.push(e);
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return Q(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? Q(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = K(e.key),
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = q(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = q(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                  if (Y(o.descriptor) || Y(i.descriptor)) {
                    if (W(o) || W(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (W(o)) {
                      if (W(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    J(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(V)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-search-input")],
        function (e, t) {
          return {
            F: (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && H(e, t);
              })(i, t);
              var n = B(i);
              function i() {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e($(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "filter",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(R.g)(
                    N(),
                    this.filter,
                    this._filterInputChanged,
                    this.filter && Object(R.g)(U(), this._clearSearch)
                  );
                },
              },
              {
                kind: "method",
                key: "_filterChanged",
                value: (function () {
                  var e = L(
                    regeneratorRuntime.mark(function e(t) {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                Object(s.a)(this, "value-changed", {
                                  value: String(t),
                                });
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "_filterInputChanged",
                value: (function () {
                  var e = L(
                    regeneratorRuntime.mark(function e(t) {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this._filterChanged(t.target.value);
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "_clearSearch",
                value: (function () {
                  var e = L(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this._filterChanged("");
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return Object(n.c)(I());
                },
              },
            ],
          };
        },
        n.a
      ),
        r(20);
      var X = r(49),
        Z = r(86),
        ee = (r(43), r(134));
      var te = r(13);
      function re(e) {
        return (re =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function ne() {
        var e = ce([
          "\n        paper-card {\n          cursor: pointer;\n        }\n        .not_available {\n          opacity: 0.6;\n        }\n        a.repo {\n          color: var(--primary-text-color);\n        }\n      ",
        ]);
        return (
          (ne = function () {
            return e;
          }),
          e
        );
      }
      function ie() {
        var e = ce([
          "\n                    <paper-card\n                      .addon=",
          "\n                      class=",
          "\n                      @click=",
          '\n                    >\n                      <div class="card-content">\n                        <hassio-card-content\n                          .hass=',
          "\n                          .title=",
          "\n                          .description=",
          "\n                          .available=",
          "\n                          .icon=",
          "\n                          .iconTitle=",
          "\n                          .iconClass=",
          "\n                          .iconImage=",
          "\n                          .showTopbar=",
          "\n                          .topbarClass=",
          "\n                        ></hassio-card-content>\n                      </div>\n                    </paper-card>\n                  ",
        ]);
        return (
          (ie = function () {
            return e;
          }),
          e
        );
      }
      function oe() {
        var e = ce(["\n              ", "\n            "]);
        return (
          (oe = function () {
            return e;
          }),
          e
        );
      }
      function ae() {
        var e = ce([
          '\n      <div class="content">\n        <h1>\n          ',
          '\n        </h1>\n        <p class="description">\n          Maintained by ',
          '<br />\n          <a class="repo" href=',
          ' target="_blank" rel="noreferrer">\n            ',
          '\n          </a>\n        </p>\n        <div class="card-group">\n          ',
          "\n        </div>\n      </div>\n    ",
        ]);
        return (
          (ae = function () {
            return e;
          }),
          e
        );
      }
      function se() {
        var e = ce([
          '\n        <div class="content">\n          <p class="description">\n            No results found in "',
          '"\n          </p>\n        </div>\n      ',
        ]);
        return (
          (se = function () {
            return e;
          }),
          e
        );
      }
      function ce(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function le(e, t) {
        return (le =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ue(e) {
        return function () {
          var t,
            r = de(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = de(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === re(t) || "function" == typeof t)) return t;
            return fe(e);
          })(this, t);
        };
      }
      function fe(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function de(e) {
        return (de = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function pe(e) {
        var t,
          r = be(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function he(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function me(e) {
        return e.decorators && e.decorators.length;
      }
      function ye(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function ve(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function be(e) {
        var t = (function (e, t) {
          if ("object" !== re(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== re(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === re(t) ? t : String(t);
      }
      function ge(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var we = (function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
                  if (!me(e)) return r.push(e);
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return ge(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? ge(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = be(e.key),
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = ve(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = ve(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                  if (ye(o.descriptor) || ye(i.descriptor)) {
                    if (me(o) || me(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (me(o)) {
                      if (me(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    he(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(pe)),
            e
          );
        return (
          i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers)
        );
      })(
        null,
        function (e, t) {
          return {
            F: (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && le(e, t);
              })(i, t);
              var n = ue(i);
              function i() {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(fe(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "repo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "addons",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "filter",
                value: void 0,
              },
              {
                kind: "field",
                key: "_getAddons",
                value: function () {
                  return Object(X.a)(function (e, t) {
                    return t
                      ? (function (e, t) {
                          return new ee(e, {
                            keys: ["name", "description", "slug"],
                            caseSensitive: !1,
                            minMatchCharLength: 2,
                            threshold: 0.2,
                          }).search(t);
                        })(e, t)
                      : e.sort(function (e, t) {
                          return e.name.toUpperCase() < t.name.toUpperCase()
                            ? -1
                            : 1;
                        });
                  });
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  var e = this,
                    t = this.repo,
                    r = this._getAddons(this.addons, this.filter);
                  return this.filter && r.length < 1
                    ? Object(n.e)(se(), t.name)
                    : Object(n.e)(
                        ae(),
                        t.name,
                        t.maintainer,
                        t.url,
                        t.url,
                        r.map(function (t) {
                          var r;
                          return Object(n.e)(
                            oe(),
                            t.advanced &&
                              !(null === (r = e.hass.userData) || void 0 === r
                                ? void 0
                                : r.showAdvanced)
                              ? ""
                              : Object(n.e)(
                                  ie(),
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
                                  Object(Z.a)(e.hass.config.version, 0, 105) &&
                                    t.icon
                                    ? "/api/hassio/addons/".concat(
                                        t.slug,
                                        "/icon"
                                      )
                                    : void 0,
                                  t.installed || !t.available,
                                  t.installed
                                    ? t.installed !== t.version
                                      ? "update"
                                      : "installed"
                                    : t.available
                                    ? ""
                                    : "unavailable"
                                )
                          );
                        })
                      );
                },
              },
              {
                kind: "method",
                key: "_addonTapped",
                value: function (e) {
                  Object(c.a)(
                    this,
                    "/hassio/addon/".concat(e.currentTarget.addon.slug)
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [te.a, Object(n.c)(ne())];
                },
              },
            ],
          };
        },
        n.a
      );
      customElements.define("hassio-addon-repository", we);
      var ke = r(135);
      r(50);
      function Ee(e) {
        return (Ee =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Oe() {
        var e = xe([
          "\n        .add {\n          padding: 12px 16px;\n        }\n        iron-icon {\n          color: var(--secondary-text-color);\n          margin-right: 16px;\n          display: inline-block;\n        }\n        paper-input {\n          width: calc(100% - 49px);\n          display: inline-block;\n          margin-top: -4px;\n        }\n      ",
        ]);
        return (
          (Oe = function () {
            return e;
          }),
          e
        );
      }
      function Pe() {
        var e = xe([
          '\n              <paper-card>\n                <div class="card-content">\n                  <hassio-card-content\n                    .hass=',
          "\n                    .title=",
          "\n                    .description=",
          '\n                    icon="hassio:github-circle"\n                  ></hassio-card-content>\n                </div>\n                <div class="card-actions">\n                  <ha-call-api-button\n                    path="hassio/supervisor/options"\n                    .hass=',
          "\n                    .data=",
          '\n                    class="warning"\n                  >\n                    Remove\n                  </ha-call-api-button>\n                </div>\n              </paper-card>\n            ',
        ]);
        return (
          (Pe = function () {
            return e;
          }),
          e
        );
      }
      function je() {
        var e = xe([
          '\n      <div class="content">\n        <h1>\n          Repositories\n        </h1>\n        <p class="description">\n          Configure which add-on repositories to fetch data from:\n        </p>\n        <div class="card-group">\n          ',
          '\n\n          <paper-card>\n            <div class="card-content add">\n              <iron-icon icon="hassio:github-circle"></iron-icon>\n              <paper-input\n                label="Add new repository by URL"\n                .value=',
          "\n                @value-changed=",
          '\n              ></paper-input>\n            </div>\n            <div class="card-actions">\n              <ha-call-api-button\n                path="hassio/supervisor/options"\n                .hass=',
          "\n                .data=",
          "\n              >\n                Add\n              </ha-call-api-button>\n            </div>\n          </paper-card>\n        </div>\n      </div>\n    ",
        ]);
        return (
          (je = function () {
            return e;
          }),
          e
        );
      }
      function xe(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Se(e, t) {
        return (Se =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _e(e) {
        return function () {
          var t,
            r = Ue(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = Ue(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === Ee(t) || "function" == typeof t)) return t;
            return De(e);
          })(this, t);
        };
      }
      function De(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ce(e) {
        var t,
          r = Ie(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Ae(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Te(e) {
        return e.decorators && e.decorators.length;
      }
      function Re(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function ze(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Ie(e) {
        var t = (function (e, t) {
          if ("object" !== Ee(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Ee(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Ee(t) ? t : String(t);
      }
      function Fe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Le(e, t, r) {
        return (Le =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Ue(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function Ue(e) {
        return (Ue = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      !(function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
                  if (!Te(e)) return r.push(e);
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return Fe(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? Fe(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Ie(e.key),
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = ze(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = ze(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                  if (Re(o.descriptor) || Re(i.descriptor)) {
                    if (Te(o) || Te(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Te(o)) {
                      if (Te(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Ae(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Ce)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-repositories-editor")],
        function (e, t) {
          var r = (function (r) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && Se(e, t);
            })(i, t);
            var n = _e(i);
            function i() {
              var t;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i);
              for (
                var r = arguments.length, o = new Array(r), a = 0;
                a < r;
                a++
              )
                o[a] = arguments[a];
              return (t = n.call.apply(n, [this].concat(o))), e(De(t)), t;
            }
            return i;
          })();
          return {
            F: r,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "repos",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_repoUrl",
                value: function () {
                  return "";
                },
              },
              {
                kind: "field",
                key: "_sortedRepos",
                value: function () {
                  return Object(X.a)(function (e) {
                    return e
                      .filter(function (e) {
                        return "core" !== e.slug && "local" !== e.slug;
                      })
                      .sort(function (e, t) {
                        return e.name < t.name ? -1 : 1;
                      });
                  });
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  var e = this,
                    t = this._sortedRepos(this.repos);
                  return Object(n.e)(
                    je(),
                    Object(ke.a)(
                      t,
                      function (e) {
                        return e.slug;
                      },
                      function (r) {
                        return Object(n.e)(
                          Pe(),
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
                },
              },
              {
                kind: "method",
                key: "updated",
                value: function (e) {
                  Le(Ue(r.prototype), "updated", this).call(this, e),
                    e.has("repos") && (this._repoUrl = "");
                },
              },
              {
                kind: "method",
                key: "_urlChanged",
                value: function (e) {
                  this._repoUrl = e.detail.value;
                },
              },
              {
                kind: "method",
                key: "computeRemoveRepoData",
                value: function (e, t) {
                  return {
                    addons_repositories: e
                      .filter(function (e) {
                        return e.url !== t;
                      })
                      .map(function (e) {
                        return e.source;
                      }),
                  };
                },
              },
              {
                kind: "method",
                key: "computeAddRepoData",
                value: function (e, t) {
                  var r = e
                    ? e.map(function (e) {
                        return e.source;
                      })
                    : [];
                  return r.push(t), { addons_repositories: r };
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [te.a, Object(n.c)(Oe())];
                },
              },
            ],
          };
        },
        n.a
      );
      function Ne(e) {
        return (Ne =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Me() {
        var e = Ge([
          "\n      hassio-addon-repository {\n        margin-top: 24px;\n      }\n    ",
        ]);
        return (
          (Me = function () {
            return e;
          }),
          e
        );
      }
      function He() {
        var e = Ge([
          "\n        <hassio-addon-repository\n          .hass=",
          "\n          .repo=",
          "\n          .addons=",
          "\n          .filter=",
          "\n        ></hassio-addon-repository>\n      ",
        ]);
        return (
          (He = function () {
            return e;
          }),
          e
        );
      }
      function Be() {
        var e = Ge([
          "\n      <hassio-repositories-editor\n        .hass=",
          "\n        .repos=",
          "\n      ></hassio-repositories-editor>\n\n      <hassio-search-input\n        .filter=",
          "\n        @value-changed=",
          "\n      ></hassio-search-input>\n\n      ",
          "\n    ",
        ]);
        return (
          (Be = function () {
            return e;
          }),
          e
        );
      }
      function $e() {
        var e = Ge([" <loading-screen></loading-screen> "]);
        return (
          ($e = function () {
            return e;
          }),
          e
        );
      }
      function Ge(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Ve(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function Je(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = e.apply(t, r);
            function a(e) {
              Ve(o, n, i, a, s, "next", e);
            }
            function s(e) {
              Ve(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function We(e, t) {
        return (We =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Ye(e) {
        return function () {
          var t,
            r = ot(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = ot(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === Ne(t) || "function" == typeof t)) return t;
            return qe(e);
          })(this, t);
        };
      }
      function qe(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ke(e) {
        var t,
          r = tt(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Qe(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Xe(e) {
        return e.decorators && e.decorators.length;
      }
      function Ze(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function et(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function tt(e) {
        var t = (function (e, t) {
          if ("object" !== Ne(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Ne(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Ne(t) ? t : String(t);
      }
      function rt(e, t) {
        if (e) {
          if ("string" == typeof e) return nt(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(r)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? nt(e, t)
              : void 0
          );
        }
      }
      function nt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function it(e, t, r) {
        return (it =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = ot(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function ot(e) {
        return (ot = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var at = function (e, t) {
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
        st = (function (e, t, r, n) {
          var i = (function () {
            var e = {
              elementsDefinitionOrder: [["method"], ["field"]],
              initializeInstanceElements: function (e, t) {
                ["method", "field"].forEach(function (r) {
                  t.forEach(function (t) {
                    t.kind === r &&
                      "own" === t.placement &&
                      this.defineClassElement(e, t);
                  }, this);
                }, this);
              },
              initializeClassElements: function (e, t) {
                var r = e.prototype;
                ["method", "field"].forEach(function (n) {
                  t.forEach(function (t) {
                    var i = t.placement;
                    if (t.kind === n && ("static" === i || "prototype" === i)) {
                      var o = "static" === i ? e : r;
                      this.defineClassElement(o, t);
                    }
                  }, this);
                }, this);
              },
              defineClassElement: function (e, t) {
                var r = t.descriptor;
                if ("field" === t.kind) {
                  var n = t.initializer;
                  r = {
                    enumerable: r.enumerable,
                    writable: r.writable,
                    configurable: r.configurable,
                    value: void 0 === n ? void 0 : n.call(e),
                  };
                }
                Object.defineProperty(e, t.key, r);
              },
              decorateClass: function (e, t) {
                var r = [],
                  n = [],
                  i = { static: [], prototype: [], own: [] };
                if (
                  (e.forEach(function (e) {
                    this.addElementPlacement(e, i);
                  }, this),
                  e.forEach(function (e) {
                    if (!Xe(e)) return r.push(e);
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
              addElementPlacement: function (e, t, r) {
                var n = t[e.placement];
                if (!r && -1 !== n.indexOf(e.key))
                  throw new TypeError("Duplicated element (" + e.key + ")");
                n.push(e.key);
              },
              decorateElement: function (e, t) {
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
              decorateConstructor: function (e, t) {
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
              fromElementDescriptor: function (e) {
                var t = {
                  kind: e.kind,
                  key: e.key,
                  placement: e.placement,
                  descriptor: e.descriptor,
                };
                return (
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0,
                  }),
                  "field" === e.kind && (t.initializer = e.initializer),
                  t
                );
              },
              toElementDescriptors: function (e) {
                var t;
                if (void 0 !== e)
                  return ((t = e),
                  (function (e) {
                    if (Array.isArray(e)) return e;
                  })(t) ||
                    (function (e) {
                      if (
                        "undefined" != typeof Symbol &&
                        Symbol.iterator in Object(e)
                      )
                        return Array.from(e);
                    })(t) ||
                    rt(t) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()).map(function (e) {
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
              toElementDescriptor: function (e) {
                var t = String(e.kind);
                if ("method" !== t && "field" !== t)
                  throw new TypeError(
                    'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                      t +
                      '"'
                  );
                var r = tt(e.key),
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
                  descriptor: Object.assign({}, i),
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
              toElementFinisherExtras: function (e) {
                var t = this.toElementDescriptor(e),
                  r = et(e, "finisher"),
                  n = this.toElementDescriptors(e.extras);
                return { element: t, finisher: r, extras: n };
              },
              fromClassDescriptor: function (e) {
                var t = {
                  kind: "class",
                  elements: e.map(this.fromElementDescriptor, this),
                };
                return (
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0,
                  }),
                  t
                );
              },
              toClassDescriptor: function (e) {
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
                var r = et(e, "finisher"),
                  n = this.toElementDescriptors(e.elements);
                return { elements: n, finisher: r };
              },
              runClassFinishers: function (e, t) {
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
              disallowProperty: function (e, t, r) {
                if (void 0 !== e[t])
                  throw new TypeError(r + " can't have a ." + t + " property.");
              },
            };
            return e;
          })();
          if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
          var a = t(function (e) {
              i.initializeInstanceElements(e, s.elements);
            }, r),
            s = i.decorateClass(
              (function (e) {
                for (
                  var t = [],
                    r = function (e) {
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
                    if (Ze(o.descriptor) || Ze(i.descriptor)) {
                      if (Xe(o) || Xe(i))
                        throw new ReferenceError(
                          "Duplicated methods (" +
                            o.key +
                            ") can't be decorated."
                        );
                      i.descriptor = o.descriptor;
                    } else {
                      if (Xe(o)) {
                        if (Xe(i))
                          throw new ReferenceError(
                            "Decorators can't be placed on different accessors with for the same property (" +
                              o.key +
                              ")."
                          );
                        i.decorators = o.decorators;
                      }
                      Qe(o, i);
                    }
                  else t.push(o);
                }
                return t;
              })(a.d.map(Ke)),
              e
            );
          return (
            i.initializeClassElements(a.F, s.elements),
            i.runClassFinishers(a.F, s.finishers)
          );
        })(
          null,
          function (e, t) {
            var r = (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && We(e, t);
              })(i, t);
              var n = Ye(i);
              function i() {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(qe(t)), t;
              }
              return i;
            })();
            return {
              F: r,
              d: [
                {
                  kind: "field",
                  decorators: [Object(n.f)()],
                  key: "hass",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(n.f)()],
                  key: "_addons",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(n.f)()],
                  key: "_repos",
                  value: void 0,
                },
                {
                  kind: "field",
                  decorators: [Object(n.f)()],
                  key: "_filter",
                  value: void 0,
                },
                {
                  kind: "method",
                  key: "refreshData",
                  value: (function () {
                    var e = Je(
                      regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this._repos = void 0),
                                    (this._addons = void 0),
                                    (this._filter = void 0),
                                    (e.next = 5),
                                    Object(l.g)(this.hass)
                                  );
                                case 5:
                                  return (e.next = 7), this._loadData();
                                case 7:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  kind: "method",
                  key: "render",
                  value: function () {
                    var e = this;
                    if (!this._addons || !this._repos) return Object(R.g)($e());
                    var t,
                      r = [],
                      n = (function (e) {
                        if (
                          "undefined" == typeof Symbol ||
                          null == e[Symbol.iterator]
                        ) {
                          if (Array.isArray(e) || (e = rt(e))) {
                            var t = 0,
                              r = function () {};
                            return {
                              s: r,
                              n: function () {
                                return t >= e.length
                                  ? { done: !0 }
                                  : { done: !1, value: e[t++] };
                              },
                              e: function (e) {
                                throw e;
                              },
                              f: r,
                            };
                          }
                          throw new TypeError(
                            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        }
                        var n,
                          i,
                          o = !0,
                          a = !1;
                        return {
                          s: function () {
                            n = e[Symbol.iterator]();
                          },
                          n: function () {
                            var e = n.next();
                            return (o = e.done), e;
                          },
                          e: function (e) {
                            (a = !0), (i = e);
                          },
                          f: function () {
                            try {
                              o || null == n.return || n.return();
                            } finally {
                              if (a) throw i;
                            }
                          },
                        };
                      })(this._repos);
                    try {
                      var i = function () {
                        var n = t.value,
                          i = e._addons.filter(function (e) {
                            return e.repository === n.slug;
                          });
                        if (0 === i.length) return "continue";
                        r.push(Object(R.g)(He(), e.hass, n, i, e._filter));
                      };
                      for (n.s(); !(t = n.n()).done; ) i();
                    } catch (o) {
                      n.e(o);
                    } finally {
                      n.f();
                    }
                    return Object(R.g)(
                      Be(),
                      this.hass,
                      this._repos,
                      this._filter,
                      this._filterChanged,
                      r
                    );
                  },
                },
                {
                  kind: "method",
                  key: "firstUpdated",
                  value: function (e) {
                    var t = this;
                    it(ot(r.prototype), "firstUpdated", this).call(this, e),
                      this.addEventListener("hass-api-called", function (e) {
                        return t.apiCalled(e);
                      }),
                      this._loadData();
                  },
                },
                {
                  kind: "method",
                  key: "apiCalled",
                  value: function (e) {
                    e.detail.success && this._loadData();
                  },
                },
                {
                  kind: "method",
                  key: "_loadData",
                  value: (function () {
                    var e = Je(
                      regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    Object(l.e)(this.hass)
                                  );
                                case 3:
                                  (t = e.sent),
                                    (this._repos = t.repositories),
                                    this._repos.sort(at),
                                    (this._addons = t.addons),
                                    (e.next = 12);
                                  break;
                                case 9:
                                  (e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    alert("Failed to fetch add-on info");
                                case 12:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 9]]
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  kind: "method",
                  key: "_filterChanged",
                  value: (function () {
                    var e = Je(
                      regeneratorRuntime.mark(function e(t) {
                        return regeneratorRuntime.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this._filter = t.detail.value;
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  kind: "get",
                  static: !0,
                  key: "styles",
                  value: function () {
                    return Object(n.c)(Me());
                  },
                },
              ],
            };
          },
          n.a
        );
      function ct(e) {
        return (ct =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function lt() {
        var e = pt([
          "\n        paper-card {\n          cursor: pointer;\n        }\n      ",
        ]);
        return (
          (lt = function () {
            return e;
          }),
          e
        );
      }
      function ut() {
        var e = pt([
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
          "\n                        ></hassio-card-content>\n                      </div>\n                    </paper-card>\n                  ",
        ]);
        return (
          (ut = function () {
            return e;
          }),
          e
        );
      }
      function ft() {
        var e = pt([
          '\n                <paper-card>\n                  <div class="card-content">\n                    You don\'t have any add-ons installed yet. Head over to\n                    <a href="#" @click=',
          ">the add-on store</a>\n                    to get started!\n                  </div>\n                </paper-card>\n              ",
        ]);
        return (
          (ft = function () {
            return e;
          }),
          e
        );
      }
      function dt() {
        var e = pt([
          '\n      <div class="content">\n        <h1>Add-ons</h1>\n        <div class="card-group">\n          ',
          "\n        </div>\n      </div>\n    ",
        ]);
        return (
          (dt = function () {
            return e;
          }),
          e
        );
      }
      function pt(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function ht(e, t) {
        return (ht =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function mt(e) {
        return function () {
          var t,
            r = vt(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = vt(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === ct(t) || "function" == typeof t)) return t;
            return yt(e);
          })(this, t);
        };
      }
      function yt(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function vt(e) {
        return (vt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function bt(e) {
        var t,
          r = Ot(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function gt(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function wt(e) {
        return e.decorators && e.decorators.length;
      }
      function kt(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Et(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Ot(e) {
        var t = (function (e, t) {
          if ("object" !== ct(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== ct(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === ct(t) ? t : String(t);
      }
      function Pt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      customElements.define("hassio-addon-store", st);
      !(function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
                  if (!wt(e)) return r.push(e);
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return Pt(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? Pt(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Ot(e.key),
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = Et(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = Et(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                  if (kt(o.descriptor) || kt(i.descriptor)) {
                    if (wt(o) || wt(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (wt(o)) {
                      if (wt(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    gt(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(bt)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-addons")],
        function (e, t) {
          return {
            F: (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && ht(e, t);
              })(i, t);
              var n = mt(i);
              function i() {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(yt(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "addons",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  var e = this;
                  return Object(n.e)(
                    dt(),
                    this.addons
                      ? this.addons
                          .sort(function (e, t) {
                            return e.name > t.name ? 1 : -1;
                          })
                          .map(function (t) {
                            return Object(n.e)(
                              ut(),
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
                              Object(Z.a)(e.hass.config.version, 0, 105) &&
                                t.icon
                                ? "/api/hassio/addons/".concat(t.slug, "/icon")
                                : void 0
                            );
                          })
                      : Object(n.e)(ft(), this._openStore)
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [i.b, te.a, Object(n.c)(lt())];
                },
              },
              {
                kind: "method",
                key: "_addonTapped",
                value: function (e) {
                  Object(c.a)(
                    this,
                    "/hassio/addon/".concat(e.currentTarget.addon.slug, "/info")
                  );
                },
              },
              {
                kind: "method",
                key: "_openStore",
                value: function () {
                  Object(c.a)(this, "/hassio/store");
                },
              },
            ],
          };
        },
        n.a
      );
      function jt() {
        var e = Rt([
          "\n        .icon {\n          --iron-icon-height: 48px;\n          --iron-icon-width: 48px;\n          float: right;\n          margin: 0 0 2px 10px;\n        }\n        .update-heading {\n          font-size: var(--paper-font-subhead_-_font-size);\n          font-weight: 500;\n          margin-bottom: 0.5em;\n        }\n        .warning {\n          color: var(--secondary-text-color);\n        }\n        .card-content {\n          height: calc(100% - 47px);\n          box-sizing: border-box;\n        }\n        .card-actions {\n          text-align: right;\n        }\n        .errors {\n          color: var(--google-red-500);\n          padding: 16px;\n        }\n        a {\n          text-decoration: none;\n        }\n      ",
        ]);
        return (
          (jt = function () {
            return e;
          }),
          e
        );
      }
      function xt(e) {
        return (xt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function St() {
        var e = Rt([
          '\n                <div class="icon">\n                  <iron-icon .icon=',
          "></iron-icon>\n                </div>\n              ",
        ]);
        return (
          (St = function () {
            return e;
          }),
          e
        );
      }
      function _t() {
        var e = Rt([
          '\n      <paper-card>\n        <div class="card-content">\n          ',
          '\n          <div class="update-heading">',
          " ",
          '</div>\n          <div class="warning">\n            You are currently running version ',
          '\n          </div>\n        </div>\n        <div class="card-actions">\n          <a href="',
          '" target="_blank" rel="noreferrer">\n            <mwc-button>Release notes</mwc-button>\n          </a>\n          <ha-call-api-button\n            .hass=',
          "\n            .path=",
          "\n            @hass-api-called=",
          "\n          >\n            Update\n          </ha-call-api-button>\n        </div>\n      </paper-card>\n    ",
        ]);
        return (
          (_t = function () {
            return e;
          }),
          e
        );
      }
      function Dt() {
        var e = Rt([""]);
        return (
          (Dt = function () {
            return e;
          }),
          e
        );
      }
      function Ct() {
        var e = Rt([' <div class="error">Error: ', "</div> "]);
        return (
          (Ct = function () {
            return e;
          }),
          e
        );
      }
      function At() {
        var e = Rt([
          '\n      <div class="content">\n        ',
          "\n        <h1>\n          ",
          '\n        </h1>\n        <div class="card-group">\n          ',
          "\n          ",
          "\n          ",
          "\n        </div>\n      </div>\n    ",
        ]);
        return (
          (At = function () {
            return e;
          }),
          e
        );
      }
      function Tt() {
        var e = Rt([""]);
        return (
          (Tt = function () {
            return e;
          }),
          e
        );
      }
      function Rt(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function zt(e, t) {
        return (zt =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function It(e) {
        return function () {
          var t,
            r = Lt(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = Lt(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === xt(t) || "function" == typeof t)) return t;
            return Ft(e);
          })(this, t);
        };
      }
      function Ft(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Lt(e) {
        return (Lt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Ut(e) {
        var t,
          r = $t(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Nt(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Mt(e) {
        return e.decorators && e.decorators.length;
      }
      function Ht(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Bt(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function $t(e) {
        var t = (function (e, t) {
          if ("object" !== xt(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== xt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === xt(t) ? t : String(t);
      }
      function Gt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      !(function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
                  if (!Mt(e)) return r.push(e);
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return Gt(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? Gt(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = $t(e.key),
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = Bt(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = Bt(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                  if (Ht(o.descriptor) || Ht(i.descriptor)) {
                    if (Mt(o) || Mt(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Mt(o)) {
                      if (Mt(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Nt(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Ut)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-update")],
        function (e, t) {
          return {
            F: (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && zt(e, t);
              })(i, t);
              var n = It(i);
              function i() {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(Ft(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassOsInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "supervisorInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_error",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  var e = [
                    this.hassInfo,
                    this.supervisorInfo,
                    this.hassOsInfo,
                  ].filter(function (e) {
                    return (
                      !!e &&
                      (e.version_latest
                        ? e.version !== e.version_latest
                        : !!e.version_latest && e.version !== e.version_latest)
                    );
                  }).length;
                  return e
                    ? Object(n.e)(
                        At(),
                        this._error ? Object(n.e)(Ct(), this._error) : "",
                        e > 1 ? "Updates Available 🎉" : "Update Available 🎉",
                        this._renderUpdateCard(
                          "Home Assistant Core",
                          this.hassInfo.version,
                          this.hassInfo.version_latest,
                          "hassio/homeassistant/update",
                          "https://".concat(
                            this.hassInfo.version_latest.includes("b")
                              ? "rc"
                              : "www",
                            ".home-assistant.io/latest-release-notes/"
                          ),
                          "hassio:home-assistant"
                        ),
                        this._renderUpdateCard(
                          "Supervisor",
                          this.supervisorInfo.version,
                          this.supervisorInfo.version_latest,
                          "hassio/supervisor/update",
                          "https://github.com//home-assistant/hassio/releases/tag/".concat(
                            this.supervisorInfo.version_latest
                          )
                        ),
                        this.hassOsInfo
                          ? this._renderUpdateCard(
                              "Operating System",
                              this.hassOsInfo.version,
                              this.hassOsInfo.version_latest,
                              "hassio/os/update",
                              "https://github.com//home-assistant/hassos/releases/tag/".concat(
                                this.hassOsInfo.version_latest
                              )
                            )
                          : ""
                      )
                    : Object(n.e)(Tt());
                },
              },
              {
                kind: "method",
                key: "_renderUpdateCard",
                value: function (e, t, r, i, o, a) {
                  return r && r !== t
                    ? Object(n.e)(
                        _t(),
                        a ? Object(n.e)(St(), a) : "",
                        e,
                        r,
                        t,
                        o,
                        this.hass,
                        i,
                        this._apiCalled
                      )
                    : Object(n.e)(Dt());
                },
              },
              {
                kind: "method",
                key: "_apiCalled",
                value: function (e) {
                  if (e.detail.success) this._error = "";
                  else {
                    var t = e.detail.response;
                    "object" === xt(t.body)
                      ? (this._error = t.body.message || "Unknown error")
                      : (this._error = t.body);
                  }
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [i.b, te.a, Object(n.c)(jt())];
                },
              },
            ],
          };
        },
        n.a
      );
      function Vt(e) {
        return (Vt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Jt() {
        var e = Yt([
          "\n        .content {\n          margin: 0 auto;\n        }\n      ",
        ]);
        return (
          (Jt = function () {
            return e;
          }),
          e
        );
      }
      function Wt() {
        var e = Yt([
          '\n      <div class="content">\n        <hassio-update\n          .hass=',
          "\n          .hassInfo=",
          "\n          .supervisorInfo=",
          "\n          .hassOsInfo=",
          "\n        ></hassio-update>\n        <hassio-addons\n          .hass=",
          "\n          .addons=",
          "\n        ></hassio-addons>\n      </div>\n    ",
        ]);
        return (
          (Wt = function () {
            return e;
          }),
          e
        );
      }
      function Yt(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function qt(e, t) {
        return (qt =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Kt(e) {
        return function () {
          var t,
            r = Xt(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = Xt(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === Vt(t) || "function" == typeof t)) return t;
            return Qt(e);
          })(this, t);
        };
      }
      function Qt(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Xt(e) {
        return (Xt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Zt(e) {
        var t,
          r = ir(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function er(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function tr(e) {
        return e.decorators && e.decorators.length;
      }
      function rr(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function nr(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function ir(e) {
        var t = (function (e, t) {
          if ("object" !== Vt(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Vt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Vt(t) ? t : String(t);
      }
      function or(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      (function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
                  if (!tr(e)) return r.push(e);
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return or(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? or(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = ir(e.key),
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = nr(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = nr(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                  if (rr(o.descriptor) || rr(i.descriptor)) {
                    if (tr(o) || tr(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (tr(o)) {
                      if (tr(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    er(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Zt)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-dashboard")],
        function (e, t) {
          return {
            F: (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && qt(e, t);
              })(i, t);
              var n = Kt(i);
              function i() {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(Qt(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "supervisorInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassOsInfo",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(n.e)(
                    Wt(),
                    this.hass,
                    this.hassInfo,
                    this.supervisorInfo,
                    this.hassOsInfo,
                    this.hass,
                    this.supervisorInfo.addons
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [i.b, Object(n.c)(Jt())];
                },
              },
            ],
          };
        },
        n.a
      ),
        r(137),
        r(114),
        r(173);
      var ar = r(115);
      function sr(e) {
        return (sr =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function cr() {
        var e = vr([
          '\n        paper-radio-group {\n          display: block;\n        }\n        paper-radio-button {\n          padding: 0 0 2px 2px;\n        }\n        paper-radio-button,\n        paper-checkbox,\n        paper-input[type="password"] {\n          display: block;\n          margin: 4px 0 4px 48px;\n        }\n        .pointer {\n          cursor: pointer;\n        }\n      ',
        ]);
        return (
          (cr = function () {
            return e;
          }),
          e
        );
      }
      function lr() {
        var e = vr([
          '\n                  <paper-card\n                    class="pointer"\n                    .snapshot=',
          "\n                    @click=",
          '\n                  >\n                    <div class="card-content">\n                      <hassio-card-content\n                        .hass=',
          "\n                        .title=",
          "\n                        .description=",
          "\n                        .datetime=",
          "\n                        .icon=",
          '\n                        .icon-class="snapshot"\n                      ></hassio-card-content>\n                    </div>\n                  </paper-card>\n                ',
        ]);
        return (
          (lr = function () {
            return e;
          }),
          e
        );
      }
      function ur() {
        var e = vr([
          '\n                <paper-card>\n                  <div class="card-content">\n                    You don\'t have any snapshots yet.\n                  </div>\n                </paper-card>\n              ',
        ]);
        return (
          (ur = function () {
            return e;
          }),
          e
        );
      }
      function fr() {
        var e = vr([' <p class="error">', "</p> "]);
        return (
          (fr = function () {
            return e;
          }),
          e
        );
      }
      function dr() {
        var e = vr([
          '\n                    <paper-input\n                      label="Password"\n                      type="password"\n                      name="snapshotPassword"\n                      .value=',
          "\n                      @value-changed=",
          "\n                    ></paper-input>\n                  ",
        ]);
        return (
          (dr = function () {
            return e;
          }),
          e
        );
      }
      function pr() {
        var e = vr([
          "\n                        <paper-checkbox\n                          .idx=",
          "\n                          .checked=",
          "\n                          @checked-changed=",
          "\n                        >\n                          ",
          "\n                        </paper-checkbox>\n                      ",
        ]);
        return (
          (pr = function () {
            return e;
          }),
          e
        );
      }
      function hr() {
        var e = vr([
          "\n                        <paper-checkbox\n                          .idx=",
          "\n                          .checked=",
          "\n                          @checked-changed=",
          "\n                        >\n                          ",
          "\n                        </paper-checkbox>\n                      ",
        ]);
        return (
          (hr = function () {
            return e;
          }),
          e
        );
      }
      function mr() {
        var e = vr([
          "\n                    Folders:\n                    ",
          "\n                    Add-ons:\n                    ",
          "\n                  ",
        ]);
        return (
          (mr = function () {
            return e;
          }),
          e
        );
      }
      function yr() {
        var e = vr([
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
          "\n        </div>\n      </div>\n    ",
        ]);
        return (
          (yr = function () {
            return e;
          }),
          e
        );
      }
      function vr(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function br(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function gr(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = e.apply(t, r);
            function a(e) {
              br(o, n, i, a, s, "next", e);
            }
            function s(e) {
              br(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function wr(e, t) {
        return (wr =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function kr(e) {
        return function () {
          var t,
            r = Ar(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = Ar(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === sr(t) || "function" == typeof t)) return t;
            return Er(e);
          })(this, t);
        };
      }
      function Er(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Or(e) {
        var t,
          r = _r(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Pr(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function jr(e) {
        return e.decorators && e.decorators.length;
      }
      function xr(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Sr(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function _r(e) {
        var t = (function (e, t) {
          if ("object" !== sr(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== sr(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === sr(t) ? t : String(t);
      }
      function Dr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Cr(e, t, r) {
        return (Cr =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Ar(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function Ar(e) {
        return (Ar = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      (function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
                  if (!jr(e)) return r.push(e);
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return Dr(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? Dr(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = _r(e.key),
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = Sr(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = Sr(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                  if (xr(o.descriptor) || xr(i.descriptor)) {
                    if (jr(o) || jr(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (jr(o)) {
                      if (jr(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Pr(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Or)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-snapshots")],
        function (e, t) {
          var o = (function (r) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && wr(e, t);
            })(i, t);
            var n = kr(i);
            function i() {
              var t;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i);
              for (
                var r = arguments.length, o = new Array(r), a = 0;
                a < r;
                a++
              )
                o[a] = arguments[a];
              return (t = n.call.apply(n, [this].concat(o))), e(Er(t)), t;
            }
            return i;
          })();
          return {
            F: o,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "supervisorInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_snapshotName",
                value: function () {
                  return "";
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_snapshotPassword",
                value: function () {
                  return "";
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_snapshotHasPassword",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_snapshotType",
                value: function () {
                  return "full";
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_snapshots",
                value: function () {
                  return [];
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_addonList",
                value: function () {
                  return [];
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_folderList",
                value: function () {
                  return [
                    {
                      slug: "homeassistant",
                      name: "Home Assistant configuration",
                      checked: !0,
                    },
                    { slug: "ssl", name: "SSL", checked: !0 },
                    { slug: "share", name: "Share", checked: !0 },
                    {
                      slug: "addons/local",
                      name: "Local add-ons",
                      checked: !0,
                    },
                  ];
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_creatingSnapshot",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_error",
                value: function () {
                  return "";
                },
              },
              {
                kind: "method",
                key: "refreshData",
                value: (function () {
                  var e = gr(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), Object(ar.e)(this.hass);
                              case 2:
                                return (e.next = 4), this._updateSnapshots();
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  var e = this;
                  return Object(n.e)(
                    yr(),
                    this._snapshotName,
                    this._handleTextValueChanged,
                    this._snapshotType,
                    this._handleRadioValueChanged,
                    "full" === this._snapshotType
                      ? void 0
                      : Object(n.e)(
                          mr(),
                          this._folderList.map(function (t, r) {
                            return Object(n.e)(
                              hr(),
                              r,
                              t.checked,
                              e._folderChecked,
                              t.name
                            );
                          }),
                          this._addonList.map(function (t, r) {
                            return Object(n.e)(
                              pr(),
                              r,
                              t.checked,
                              e._addonChecked,
                              t.name
                            );
                          })
                        ),
                    this._snapshotHasPassword,
                    this._handleCheckboxValueChanged,
                    this._snapshotHasPassword
                      ? Object(n.e)(
                          dr(),
                          this._snapshotPassword,
                          this._handleTextValueChanged
                        )
                      : void 0,
                    "" !== this._error
                      ? Object(n.e)(fr(), this._error)
                      : void 0,
                    this._creatingSnapshot,
                    this._createSnapshot,
                    void 0 === this._snapshots
                      ? void 0
                      : 0 === this._snapshots.length
                      ? Object(n.e)(ur())
                      : this._snapshots.map(function (t) {
                          return Object(n.e)(
                            lr(),
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
                },
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function (e) {
                  Cr(Ar(o.prototype), "firstUpdated", this).call(this, e),
                    this._updateSnapshots();
                },
              },
              {
                kind: "method",
                key: "updated",
                value: function (e) {
                  e.has("supervisorInfo") &&
                    (this._addonList = this.supervisorInfo.addons
                      .map(function (e) {
                        return {
                          slug: e.slug,
                          name: e.name,
                          checked: !0,
                        };
                      })
                      .sort(function (e, t) {
                        return e.name < t.name ? -1 : 1;
                      }));
                },
              },
              {
                kind: "method",
                key: "_handleTextValueChanged",
                value: function (e) {
                  var t = e.currentTarget;
                  this["_".concat(t.name)] = e.detail.value;
                },
              },
              {
                kind: "method",
                key: "_handleCheckboxValueChanged",
                value: function (e) {
                  var t = e.currentTarget;
                  this["_".concat(t.name)] = t.checked;
                },
              },
              {
                kind: "method",
                key: "_handleRadioValueChanged",
                value: function (e) {
                  var t = e.currentTarget;
                  this["_".concat(t.getAttribute("name"))] = e.detail.value;
                },
              },
              {
                kind: "method",
                key: "_folderChecked",
                value: function (e) {
                  var t = e.currentTarget,
                    r = t.idx,
                    n = t.checked;
                  this._folderList = this._folderList.map(function (e, t) {
                    return t === r ? Object.assign({}, e, { checked: n }) : e;
                  });
                },
              },
              {
                kind: "method",
                key: "_addonChecked",
                value: function (e) {
                  var t = e.currentTarget,
                    r = t.idx,
                    n = t.checked;
                  this._addonList = this._addonList.map(function (e, t) {
                    return t === r ? Object.assign({}, e, { checked: n }) : e;
                  });
                },
              },
              {
                kind: "method",
                key: "_updateSnapshots",
                value: (function () {
                  var e = gr(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  Object(ar.d)(this.hass)
                                );
                              case 3:
                                (this._snapshots = e.sent),
                                  this._snapshots.sort(function (e, t) {
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
                        e,
                        this,
                        [[0, 7]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "_createSnapshot",
                value: (function () {
                  var e = gr(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n, i, o;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((this._error = ""),
                                  !this._snapshotHasPassword ||
                                    this._snapshotPassword.length)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return (
                                  (this._error = "Please enter a password."),
                                  e.abrupt("return")
                                );
                              case 4:
                                return (
                                  (this._creatingSnapshot = !0),
                                  (e.next = 7),
                                  this.updateComplete
                                );
                              case 7:
                                if (
                                  ((t =
                                    this._snapshotName ||
                                    new Date().toLocaleDateString(
                                      navigator.language,
                                      {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                      }
                                    )),
                                  (e.prev = 8),
                                  "full" !== this._snapshotType)
                                ) {
                                  e.next = 16;
                                  break;
                                }
                                return (
                                  (r = { name: t }),
                                  this._snapshotHasPassword &&
                                    (r.password = this._snapshotPassword),
                                  (e.next = 14),
                                  Object(ar.a)(this.hass, r)
                                );
                              case 14:
                                e.next = 22;
                                break;
                              case 16:
                                return (
                                  (n = this._addonList
                                    .filter(function (e) {
                                      return e.checked;
                                    })
                                    .map(function (e) {
                                      return e.slug;
                                    })),
                                  (i = this._folderList
                                    .filter(function (e) {
                                      return e.checked;
                                    })
                                    .map(function (e) {
                                      return e.slug;
                                    })),
                                  (o = { name: t, folders: i, addons: n }),
                                  this._snapshotHasPassword &&
                                    (o.password = this._snapshotPassword),
                                  (e.next = 22),
                                  Object(ar.b)(this.hass, o)
                                );
                              case 22:
                                this._updateSnapshots(),
                                  Object(s.a)(this, "hass-api-called", {
                                    success: !0,
                                    response: null,
                                  }),
                                  (e.next = 29);
                                break;
                              case 26:
                                (e.prev = 26),
                                  (e.t0 = e.catch(8)),
                                  (this._error = e.t0.message);
                              case 29:
                                return (
                                  (e.prev = 29),
                                  (this._creatingSnapshot = !1),
                                  e.finish(29)
                                );
                              case 32:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[8, 26, 29, 32]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "_computeDetails",
                value: function (e) {
                  var t =
                    "full" === e.type ? "Full snapshot" : "Partial snapshot";
                  return e.protected ? "".concat(t, ", password protected") : t;
                },
              },
              {
                kind: "method",
                key: "_snapshotClicked",
                value: function (e) {
                  var t,
                    n,
                    i = this;
                  (t = this),
                    (n = {
                      slug: e.currentTarget.snapshot.slug,
                      onDelete: function () {
                        return i._updateSnapshots();
                      },
                    }),
                    Object(s.a)(t, "show-dialog", {
                      dialogTag: "dialog-hassio-snapshot",
                      dialogImport: function () {
                        return r.e(5).then(r.bind(null, 179));
                      },
                      dialogParams: n,
                    });
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [i.b, te.a, Object(n.c)(cr())];
                },
              },
            ],
          };
        },
        n.a
      ),
        r(125);
      var Tr = r(116),
        Rr = r(117);
      function zr(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function Ir(e) {
        return (Ir =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Fr() {
        var e = Vr([
          "\n        paper-card {\n          height: 100%;\n          width: 100%;\n        }\n        .card-content {\n          color: var(--primary-text-color);\n          box-sizing: border-box;\n          height: calc(100% - 47px);\n        }\n        .info {\n          width: 100%;\n        }\n        .info td:nth-child(2) {\n          text-align: right;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-top: 16px;\n        }\n        mwc-button.info {\n          max-width: calc(50% - 12px);\n        }\n        table.info {\n          margin-bottom: 10px;\n        }\n        .warning {\n          --mdc-theme-primary: var(--google-red-500);\n        }\n      ",
        ]);
        return (
          (Fr = function () {
            return e;
          }),
          e
        );
      }
      function Lr() {
        var e = Vr([
          "\n                <ha-call-api-button .hass=",
          ' path="hassio/os/update"\n                  >Update</ha-call-api-button\n                >\n              ',
        ]);
        return (
          (Lr = function () {
            return e;
          }),
          e
        );
      }
      function Ur() {
        var e = Vr([
          '\n                <ha-call-api-button\n                  class="warning"\n                  .hass=',
          '\n                  path="hassio/os/config/sync"\n                  title="Load HassOS configs or updates from USB"\n                  >Import from USB</ha-call-api-button\n                >\n              ',
        ]);
        return (
          (Ur = function () {
            return e;
          }),
          e
        );
      }
      function Nr() {
        var e = Vr([
          '\n                <ha-call-api-button\n                  class="warning"\n                  .hass=',
          '\n                  path="hassio/host/shutdown"\n                  >Shutdown</ha-call-api-button\n                >\n              ',
        ]);
        return (
          (Nr = function () {
            return e;
          }),
          e
        );
      }
      function Mr() {
        var e = Vr([
          '\n                <ha-call-api-button\n                  class="warning"\n                  .hass=',
          '\n                  path="hassio/host/reboot"\n                  >Reboot</ha-call-api-button\n                >\n              ',
        ]);
        return (
          (Mr = function () {
            return e;
          }),
          e
        );
      }
      function Hr() {
        var e = Vr([' <div class="errors">Error: ', "</div> "]);
        return (
          (Hr = function () {
            return e;
          }),
          e
        );
      }
      function Br() {
        var e = Vr([
          "\n                <mwc-button\n                  raised\n                  @click=",
          '\n                  class="info"\n                >\n                  Change hostname\n                </mwc-button>\n              ',
        ]);
        return (
          (Br = function () {
            return e;
          }),
          e
        );
      }
      function $r() {
        var e = Vr([
          "\n                    <tr>\n                      <td>Deployment</td>\n                      <td>",
          "</td>\n                    </tr>\n                  ",
        ]);
        return (
          ($r = function () {
            return e;
          }),
          e
        );
      }
      function Gr() {
        var e = Vr([
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
          "\n        </div>\n      </paper-card>\n    ",
        ]);
        return (
          (Gr = function () {
            return e;
          }),
          e
        );
      }
      function Vr(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Jr(e, t) {
        return (Jr =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Wr(e) {
        return function () {
          var t,
            r = qr(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = qr(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === Ir(t) || "function" == typeof t)) return t;
            return Yr(e);
          })(this, t);
        };
      }
      function Yr(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function qr(e) {
        return (qr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Kr(e) {
        var t,
          r = tn(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Qr(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Xr(e) {
        return e.decorators && e.decorators.length;
      }
      function Zr(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function en(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function tn(e) {
        var t = (function (e, t) {
          if ("object" !== Ir(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Ir(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Ir(t) ? t : String(t);
      }
      function rn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      !(function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
                  if (!Xr(e)) return r.push(e);
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return rn(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? rn(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = tn(e.key),
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = en(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = en(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                  if (Zr(o.descriptor) || Zr(i.descriptor)) {
                    if (Xr(o) || Xr(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Xr(o)) {
                      if (Xr(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Qr(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Kr)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-host-info")],
        function (e, t) {
          return {
            F: (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && Jr(e, t);
              })(i, t);
              var n = Wr(i);
              function i() {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(Yr(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hostInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassOsInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_errors",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(n.e)(
                    Gr(),
                    this.hostInfo.hostname,
                    this.hostInfo.operating_system,
                    this.hostInfo.deployment
                      ? Object(n.e)($r(), this.hostInfo.deployment)
                      : "",
                    this._showHardware,
                    this.hostInfo.features.includes("hostname")
                      ? Object(n.e)(Br(), this._changeHostnameClicked)
                      : "",
                    this._errors ? Object(n.e)(Hr(), this._errors) : "",
                    this.hostInfo.features.includes("reboot")
                      ? Object(n.e)(Mr(), this.hass)
                      : "",
                    this.hostInfo.features.includes("shutdown")
                      ? Object(n.e)(Nr(), this.hass)
                      : "",
                    this.hostInfo.features.includes("hassos")
                      ? Object(n.e)(Ur(), this.hass)
                      : "",
                    this.hostInfo.version !== this.hostInfo.version_latest
                      ? Object(n.e)(Lr(), this.hass)
                      : ""
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [i.b, te.a, Object(n.c)(Fr())];
                },
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function () {
                  var e = this;
                  this.addEventListener("hass-api-called", function (t) {
                    return e._apiCalled(t);
                  });
                },
              },
              {
                kind: "method",
                key: "_apiCalled",
                value: function (e) {
                  if (e.detail.success) this._errors = void 0;
                  else {
                    var t = e.detail.response;
                    this._errors =
                      "object" === Ir(t.body)
                        ? t.body.message || "Unknown error"
                        : t.body;
                  }
                },
              },
              {
                kind: "method",
                key: "_showHardware",
                value: (function () {
                  var e,
                    t =
                      ((e = regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.t0 = this),
                                    (e.next = 4),
                                    Object(Tr.b)(this.hass)
                                  );
                                case 4:
                                  (e.t1 = e.sent),
                                    (t = e.t0._objectToMarkdown.call(
                                      e.t0,
                                      e.t1
                                    )),
                                    Object(Rr.a)(this, {
                                      title: "Hardware",
                                      content: t,
                                    }),
                                    (e.next = 12);
                                  break;
                                case 9:
                                  (e.prev = 9),
                                    (e.t2 = e.catch(0)),
                                    Object(Rr.a)(this, {
                                      title: "Hardware",
                                      content: "Error getting hardware info",
                                    });
                                case 12:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 9]]
                        );
                      })),
                      function () {
                        var t = this,
                          r = arguments;
                        return new Promise(function (n, i) {
                          var o = e.apply(t, r);
                          function a(e) {
                            zr(o, n, i, a, s, "next", e);
                          }
                          function s(e) {
                            zr(o, n, i, a, s, "throw", e);
                          }
                          a(void 0);
                        });
                      });
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "_objectToMarkdown",
                value: function (e) {
                  var t = this,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                    n = "";
                  return (
                    Object.keys(e).forEach(function (i) {
                      "object" !== Ir(e[i])
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
                },
              },
              {
                kind: "method",
                key: "_changeHostnameClicked",
                value: function () {
                  var e = this.hostInfo.hostname,
                    t = prompt("Please enter a new hostname:", e);
                  t &&
                    t !== e &&
                    this.hass.callApi("POST", "hassio/host/options", {
                      hostname: t,
                    });
                },
              },
            ],
          };
        },
        n.a
      );
      function nn(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function on(e) {
        return (on =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function an() {
        var e = pn([
          "\n        paper-card {\n          height: 100%;\n          width: 100%;\n        }\n        .card-content {\n          color: var(--primary-text-color);\n          box-sizing: border-box;\n          height: calc(100% - 47px);\n        }\n        .info {\n          width: 100%;\n        }\n        .info td:nth-child(2) {\n          text-align: right;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-top: 16px;\n        }\n      ",
        ]);
        return (
          (an = function () {
            return e;
          }),
          e
        );
      }
      function sn() {
        var e = pn([
          "\n                <mwc-button\n                  @click=",
          '\n                  class="warning"\n                  title="Get beta updates for Home Assistant (RCs), supervisor and host"\n                  >Join beta channel</mwc-button\n                >\n              ',
        ]);
        return (
          (sn = function () {
            return e;
          }),
          e
        );
      }
      function cn() {
        var e = pn([
          "\n                <ha-call-api-button\n                  .hass=",
          '\n                  path="hassio/supervisor/options"\n                  .data=',
          "\n                  >Leave beta channel</ha-call-api-button\n                >\n              ",
        ]);
        return (
          (cn = function () {
            return e;
          }),
          e
        );
      }
      function ln() {
        var e = pn([
          "\n                <ha-call-api-button\n                  .hass=",
          '\n                  path="hassio/supervisor/update"\n                  >Update</ha-call-api-button\n                >\n              ',
        ]);
        return (
          (ln = function () {
            return e;
          }),
          e
        );
      }
      function un() {
        var e = pn([' <div class="errors">Error: ', "</div> "]);
        return (
          (un = function () {
            return e;
          }),
          e
        );
      }
      function fn() {
        var e = pn([
          "\n                    <tr>\n                      <td>Channel</td>\n                      <td>",
          "</td>\n                    </tr>\n                  ",
        ]);
        return (
          (fn = function () {
            return e;
          }),
          e
        );
      }
      function dn() {
        var e = pn([
          '\n      <paper-card>\n        <div class="card-content">\n          <h2>Supervisor</h2>\n          <table class="info">\n            <tbody>\n              <tr>\n                <td>Version</td>\n                <td>',
          "</td>\n              </tr>\n              <tr>\n                <td>Latest version</td>\n                <td>",
          "</td>\n              </tr>\n              ",
          "\n            </tbody>\n          </table>\n          ",
          '\n        </div>\n        <div class="card-actions">\n          <ha-call-api-button .hass=',
          ' path="hassio/supervisor/reload"\n            >Reload</ha-call-api-button\n          >\n          ',
          "\n          ",
          "\n          ",
          "\n        </div>\n      </paper-card>\n    ",
        ]);
        return (
          (dn = function () {
            return e;
          }),
          e
        );
      }
      function pn(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function hn(e, t) {
        return (hn =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function mn(e) {
        return function () {
          var t,
            r = vn(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = vn(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === on(t) || "function" == typeof t)) return t;
            return yn(e);
          })(this, t);
        };
      }
      function yn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function vn(e) {
        return (vn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function bn(e) {
        var t,
          r = On(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function gn(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function wn(e) {
        return e.decorators && e.decorators.length;
      }
      function kn(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function En(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function On(e) {
        var t = (function (e, t) {
          if ("object" !== on(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== on(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === on(t) ? t : String(t);
      }
      function Pn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      (function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
                  if (!wn(e)) return r.push(e);
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return Pn(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? Pn(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = On(e.key),
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = En(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = En(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                  if (kn(o.descriptor) || kn(i.descriptor)) {
                    if (wn(o) || wn(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (wn(o)) {
                      if (wn(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    gn(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(bn)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-supervisor-info")],
        function (e, t) {
          return {
            F: (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && hn(e, t);
              })(i, t);
              var n = mn(i);
              function i() {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(yn(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "supervisorInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_errors",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(n.e)(
                    dn(),
                    this.supervisorInfo.version,
                    this.supervisorInfo.version_latest,
                    "stable" !== this.supervisorInfo.channel
                      ? Object(n.e)(fn(), this.supervisorInfo.channel)
                      : "",
                    this._errors ? Object(n.e)(un(), this._errors) : "",
                    this.hass,
                    this.supervisorInfo.version !==
                      this.supervisorInfo.version_latest
                      ? Object(n.e)(ln(), this.hass)
                      : "",
                    "beta" === this.supervisorInfo.channel
                      ? Object(n.e)(cn(), this.hass, { channel: "stable" })
                      : "",
                    "stable" === this.supervisorInfo.channel
                      ? Object(n.e)(sn(), this._joinBeta)
                      : ""
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [i.b, te.a, Object(n.c)(an())];
                },
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function () {
                  var e = this;
                  this.addEventListener("hass-api-called", function (t) {
                    return e._apiCalled(t);
                  });
                },
              },
              {
                kind: "method",
                key: "_apiCalled",
                value: function (e) {
                  if (e.detail.success) this._errors = void 0;
                  else {
                    var t = e.detail.response;
                    this._errors =
                      "object" === on(t.body)
                        ? t.body.message || "Unknown error"
                        : t.body;
                  }
                },
              },
              {
                kind: "method",
                key: "_joinBeta",
                value: (function () {
                  var e,
                    t =
                      ((e = regeneratorRuntime.mark(function e() {
                        var t, r, n;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    confirm(
                                      "WARNING:\nBeta releases are for testers and early adopters and can contain unstable code changes. Make sure you have backups of your data before you activate this feature.\n\nThis includes beta releases for:\n- Home Assistant (Release Candidates)\n- Hass.io supervisor\n- Host system"
                                    )
                                  ) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  return (
                                    (e.prev = 2),
                                    (t = {
                                      channel: "beta",
                                    }),
                                    (e.next = 6),
                                    Object(m.e)(this.hass, t)
                                  );
                                case 6:
                                  (r = {
                                    success: !0,
                                    response: void 0,
                                    path: "option",
                                  }),
                                    Object(s.a)(this, "hass-api-called", r),
                                    (e.next = 13);
                                  break;
                                case 10:
                                  (e.prev = 10),
                                    (e.t0 = e.catch(2)),
                                    (this._errors = "Error joining beta channel, ".concat(
                                      (null === (n = e.t0.body) || void 0 === n
                                        ? void 0
                                        : n.message) || e.t0
                                    ));
                                case 13:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[2, 10]]
                        );
                      })),
                      function () {
                        var t = this,
                          r = arguments;
                        return new Promise(function (n, i) {
                          var o = e.apply(t, r);
                          function a(e) {
                            nn(o, n, i, a, s, "next", e);
                          }
                          function s(e) {
                            nn(o, n, i, a, s, "throw", e);
                          }
                          a(void 0);
                        });
                      });
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
            ],
          };
        },
        n.a
      ),
        r(126),
        r(127),
        r(118),
        r(119);
      function jn(e) {
        return (jn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function xn() {
        var e = Rn([
          "\n        paper-card {\n          width: 100%;\n        }\n        pre {\n          white-space: pre-wrap;\n        }\n        paper-dropdown-menu {\n          padding: 0 2%;\n          width: 96%;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-bottom: 16px;\n        }\n        .card-content {\n          padding-top: 0px;\n        }\n      ",
        ]);
        return (
          (xn = function () {
            return e;
          }),
          e
        );
      }
      function Sn() {
        var e = Rn(["<loading-screen></loading-screen>"]);
        return (
          (Sn = function () {
            return e;
          }),
          e
        );
      }
      function _n() {
        var e = Rn([
          "<hassio-ansi-to-html\n                .content=",
          "\n              ></hassio-ansi-to-html>",
        ]);
        return (
          (_n = function () {
            return e;
          }),
          e
        );
      }
      function Dn() {
        var e = Rn([
          "\n                      <paper-item provider=",
          "\n                        >",
          "</paper-item\n                      >\n                    ",
        ]);
        return (
          (Dn = function () {
            return e;
          }),
          e
        );
      }
      function Cn() {
        var e = Rn([
          '\n              <paper-dropdown-menu\n                label="Log provider"\n                @iron-select=',
          '\n              >\n                <paper-listbox\n                  slot="dropdown-content"\n                  attr-for-selected="provider"\n                  .selected=',
          "\n                >\n                  ",
          "\n                </paper-listbox>\n              </paper-dropdown-menu>\n            ",
        ]);
        return (
          (Cn = function () {
            return e;
          }),
          e
        );
      }
      function An() {
        var e = Rn([' <div class="errors">', "</div> "]);
        return (
          (An = function () {
            return e;
          }),
          e
        );
      }
      function Tn() {
        var e = Rn([
          "\n      <paper-card>\n        ",
          "\n        ",
          '\n\n        <div class="card-content" id="content">\n          ',
          '\n        </div>\n        <div class="card-actions">\n          <mwc-button @click=',
          ">Refresh</mwc-button>\n        </div>\n      </paper-card>\n    ",
        ]);
        return (
          (Tn = function () {
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
      function zn(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function In(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = e.apply(t, r);
            function a(e) {
              zn(o, n, i, a, s, "next", e);
            }
            function s(e) {
              zn(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function Fn(e, t) {
        return (Fn =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Ln(e) {
        return function () {
          var t,
            r = Wn(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = Wn(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === jn(t) || "function" == typeof t)) return t;
            return Un(e);
          })(this, t);
        };
      }
      function Un(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Nn(e) {
        var t,
          r = Gn(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Mn(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Hn(e) {
        return e.decorators && e.decorators.length;
      }
      function Bn(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function $n(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Gn(e) {
        var t = (function (e, t) {
          if ("object" !== jn(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== jn(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === jn(t) ? t : String(t);
      }
      function Vn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Jn(e, t, r) {
        return (Jn =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Wn(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function Wn(e) {
        return (Wn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var Yn = [
        { key: "supervisor", name: "Supervisor" },
        { key: "core", name: "Core" },
        { key: "host", name: "Host" },
        { key: "dns", name: "DNS" },
        { key: "audio", name: "Audio" },
        { key: "multicast", name: "Multicast" },
      ];
      !(function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return Vn(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? Vn(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Gn(e.key),
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = $n(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = $n(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                  if (Bn(o.descriptor) || Bn(i.descriptor)) {
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
                    Mn(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Nn)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-supervisor-log")],
        function (e, t) {
          var r = (function (r) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && Fn(e, t);
            })(i, t);
            var n = Ln(i);
            function i() {
              var t;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i);
              for (
                var r = arguments.length, o = new Array(r), a = 0;
                a < r;
                a++
              )
                o[a] = arguments[a];
              return (t = n.call.apply(n, [this].concat(o))), e(Un(t)), t;
            }
            return i;
          })();
          return {
            F: r,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_error",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_selectedLogProvider",
                value: function () {
                  return "supervisor";
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_content",
                value: void 0,
              },
              {
                kind: "method",
                key: "connectedCallback",
                value: (function () {
                  var e = In(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  Jn(
                                    Wn(r.prototype),
                                    "connectedCallback",
                                    this
                                  ).call(this),
                                  (e.next = 3),
                                  this._loadData()
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  var e;
                  return Object(n.e)(
                    Tn(),
                    this._error ? Object(n.e)(An(), this._error) : "",
                    (
                      null === (e = this.hass.userData) || void 0 === e
                        ? void 0
                        : e.showAdvanced
                    )
                      ? Object(n.e)(
                          Cn(),
                          this._setLogProvider,
                          this._selectedLogProvider,
                          Yn.map(function (e) {
                            return Object(n.e)(Dn(), e.key, e.name);
                          })
                        )
                      : "",
                    this._content
                      ? Object(n.e)(_n(), this._content)
                      : Object(n.e)(Sn()),
                    this._refresh
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [i.b, te.a, Object(n.c)(xn())];
                },
              },
              {
                kind: "method",
                key: "_setLogProvider",
                value: (function () {
                  var e = In(
                    regeneratorRuntime.mark(function e(t) {
                      var r;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = t.detail.item.getAttribute("provider")),
                                  (this._selectedLogProvider = r),
                                  (e.next = 4),
                                  this._loadData()
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "_loadData",
                value: (function () {
                  var e = In(
                    regeneratorRuntime.mark(function e() {
                      var t;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (this._content = void 0),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  Object(m.c)(
                                    this.hass,
                                    this._selectedLogProvider
                                  )
                                );
                              case 5:
                                (this._content = e.sent), (e.next = 11);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(2)),
                                  (this._error = "Failed to get supervisor logs, ".concat(
                                    (null === (t = e.t0.body) || void 0 === t
                                      ? void 0
                                      : t.message) || e.t0
                                  ));
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 8]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "_refresh",
                value: (function () {
                  var e = In(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this._loadData();
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ],
          };
        },
        n.a
      );
      function qn(e) {
        return (qn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Kn() {
        var e = Xn([
          "\n        .content {\n          margin: 8px;\n          color: var(--primary-text-color);\n        }\n        .title {\n          margin-top: 24px;\n          color: var(--primary-text-color);\n          font-size: 2em;\n          padding-left: 8px;\n          margin-bottom: 8px;\n        }\n        hassio-supervisor-log {\n          width: 100%;\n        }\n      ",
        ]);
        return (
          (Kn = function () {
            return e;
          }),
          e
        );
      }
      function Qn() {
        var e = Xn([
          '\n      <div class="content">\n        <h1>Information</h1>\n        <div class="card-group">\n          <hassio-supervisor-info\n            .hass=',
          "\n            .supervisorInfo=",
          "\n          ></hassio-supervisor-info>\n          <hassio-host-info\n            .hass=",
          "\n            .hostInfo=",
          "\n            .hassOsInfo=",
          "\n          ></hassio-host-info>\n        </div>\n        <h1>System log</h1>\n        <hassio-supervisor-log .hass=",
          "></hassio-supervisor-log>\n      </div>\n    ",
        ]);
        return (
          (Qn = function () {
            return e;
          }),
          e
        );
      }
      function Xn(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Zn(e, t) {
        return (Zn =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ei(e) {
        return function () {
          var t,
            r = ri(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = ri(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === qn(t) || "function" == typeof t)) return t;
            return ti(e);
          })(this, t);
        };
      }
      function ti(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ri(e) {
        return (ri = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ni(e) {
        var t,
          r = ci(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function ii(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function oi(e) {
        return e.decorators && e.decorators.length;
      }
      function ai(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function si(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function ci(e) {
        var t = (function (e, t) {
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
      function li(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      !(function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
                  if (!oi(e)) return r.push(e);
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return li(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? li(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = ci(e.key),
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = si(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = si(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                  if (ai(o.descriptor) || ai(i.descriptor)) {
                    if (oi(o) || oi(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (oi(o)) {
                      if (oi(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    ii(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(ni)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-system")],
        function (e, t) {
          return {
            F: (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && Zn(e, t);
              })(i, t);
              var n = ei(i);
              function i() {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(ti(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "supervisorInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hostInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hassOsInfo",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(n.e)(
                    Qn(),
                    this.hass,
                    this.supervisorInfo,
                    this.hass,
                    this.hostInfo,
                    this.hassOsInfo,
                    this.hass
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [i.b, te.a, Object(n.c)(Kn())];
                },
              },
            ],
          };
        },
        n.a
      );
      function ui(e) {
        return (ui =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function fi(e, t) {
        return (fi =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function di(e) {
        return function () {
          var t,
            r = hi(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = hi(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === ui(t) || "function" == typeof t)) return t;
            return pi(e);
          })(this, t);
        };
      }
      function pi(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function hi(e) {
        return (hi = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function mi(e) {
        var t,
          r = wi(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function yi(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function vi(e) {
        return e.decorators && e.decorators.length;
      }
      function bi(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function gi(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function wi(e) {
        var t = (function (e, t) {
          if ("object" !== ui(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== ui(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === ui(t) ? t : String(t);
      }
      function ki(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      (function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
                  if (!vi(e)) return r.push(e);
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return ki(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? ki(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = wi(e.key),
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = gi(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = gi(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                  if (bi(o.descriptor) || bi(i.descriptor)) {
                    if (vi(o) || vi(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (vi(o)) {
                      if (vi(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    yi(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(mi)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-panel-router")],
        function (e, t) {
          return {
            F: (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && fi(e, t);
              })(i, t);
              var n = di(i);
              function i() {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(pi(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "supervisorInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "hostInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "hassInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "hassOsInfo",
                value: void 0,
              },
              {
                kind: "field",
                key: "routerOptions",
                value: function () {
                  return {
                    routes: {
                      dashboard: { tag: "hassio-dashboard" },
                      store: { tag: "hassio-addon-store" },
                      snapshots: { tag: "hassio-snapshots" },
                      system: { tag: "hassio-system" },
                    },
                  };
                },
              },
              {
                kind: "method",
                key: "updatePageEl",
                value: function (e) {
                  (e.hass = this.hass),
                    (e.supervisorInfo = this.supervisorInfo),
                    (e.hostInfo = this.hostInfo),
                    (e.hassInfo = this.hassInfo),
                    (e.hassOsInfo = this.hassOsInfo);
                },
              },
            ],
          };
        },
        k.a
      ),
        r(129);
      function Ei(e) {
        return (Ei =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Oi() {
        var e = (function (e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n      <hass-tabs-subpage\n        .hass=",
          "\n        .narrow=",
          "\n        .route=",
          "\n        .tabs=",
          '\n      >\n        <span slot="header">Supervisor</span>\n        <hassio-panel-router\n          .route=',
          "\n          .hass=",
          "\n          .supervisorInfo=",
          "\n          .hostInfo=",
          "\n          .hassInfo=",
          "\n          .hassOsInfo=",
          "\n        ></hassio-panel-router>\n      </hass-tabs-subpage>\n    ",
        ]);
        return (
          (Oi = function () {
            return e;
          }),
          e
        );
      }
      function Pi(e, t) {
        return (Pi =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ji(e) {
        return function () {
          var t,
            r = Si(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = Si(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === Ei(t) || "function" == typeof t)) return t;
            return xi(e);
          })(this, t);
        };
      }
      function xi(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Si(e) {
        return (Si = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _i(e) {
        var t,
          r = Ri(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function Di(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Ci(e) {
        return e.decorators && e.decorators.length;
      }
      function Ai(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Ti(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Ri(e) {
        var t = (function (e, t) {
          if ("object" !== Ei(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Ei(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Ei(t) ? t : String(t);
      }
      function zi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      !(function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
                  if (!Ci(e)) return r.push(e);
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return zi(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? zi(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Ri(e.key),
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = Ti(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = Ti(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                  if (Ai(o.descriptor) || Ai(i.descriptor)) {
                    if (Ci(o) || Ci(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Ci(o)) {
                      if (Ci(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Di(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(_i)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-panel")],
        function (e, t) {
          return {
            F: (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && Pi(e, t);
              })(i, t);
              var n = ji(i);
              function i() {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(xi(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "narrow",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "route",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "supervisorInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "hostInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "hassInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "hassOsInfo",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(n.e)(
                    Oi(),
                    this.hass,
                    this.narrow,
                    this.route,
                    [
                      {
                        name: "Dashboard",
                        path: "/hassio/dashboard",
                        icon: "mdi:view-dashboard",
                      },
                      {
                        name: "Add-on store",
                        path: "/hassio/store",
                        icon: "mdi:store",
                      },
                      {
                        name: "Snapshots",
                        path: "/hassio/snapshots",
                        icon: "mdi:backup-restore",
                      },
                      {
                        name: "System",
                        path: "/hassio/system",
                        icon: "mdi:cogs",
                      },
                    ],
                    this.route,
                    this.hass,
                    this.supervisorInfo,
                    this.hostInfo,
                    this.hassInfo,
                    this.hassOsInfo
                  );
                },
              },
            ],
          };
        },
        n.a
      );
      function Ii(e) {
        return (Ii =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Fi(e, t) {
        return (
          Qi(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
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
          qi(e, t) ||
          Yi()
        );
      }
      function Li(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function Ui(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = e.apply(t, r);
            function a(e) {
              Li(o, n, i, a, s, "next", e);
            }
            function s(e) {
              Li(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function Ni(e, t) {
        return (Ni =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Mi(e) {
        return function () {
          var t,
            r = Zi(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = Zi(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === Ii(t) || "function" == typeof t)) return t;
            return Hi(e);
          })(this, t);
        };
      }
      function Hi(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Bi(e) {
        var t,
          r = Wi(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function $i(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Gi(e) {
        return e.decorators && e.decorators.length;
      }
      function Vi(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Ji(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Wi(e) {
        var t = (function (e, t) {
          if ("object" !== Ii(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Ii(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Ii(t) ? t : String(t);
      }
      function Yi() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function qi(e, t) {
        if (e) {
          if ("string" == typeof e) return Ki(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(r)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? Ki(e, t)
              : void 0
          );
        }
      }
      function Ki(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Qi(e) {
        if (Array.isArray(e)) return e;
      }
      function Xi(e, t, r) {
        return (Xi =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Zi(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function Zi(e) {
        return (Zi = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      customElements.get("paper-icon-button").prototype._keyBindings = {};
      var eo;
      !(function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
                  if (!Gi(e)) return r.push(e);
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                Qi(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  qi(t) ||
                  Yi()).map(function (e) {
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
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var r = Wi(e.key),
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = Ji(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = Ji(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                  if (Vi(o.descriptor) || Vi(i.descriptor)) {
                    if (Gi(o) || Gi(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Gi(o)) {
                      if (Gi(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    $i(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Bi)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-main")],
        function (e, t) {
          var i = (function (r) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && Ni(e, t);
            })(i, t);
            var n = Mi(i);
            function i() {
              var t;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i);
              for (
                var r = arguments.length, o = new Array(r), a = 0;
                a < r;
                a++
              )
                o[a] = arguments[a];
              return (t = n.call.apply(n, [this].concat(o))), e(Hi(t)), t;
            }
            return i;
          })();
          return {
            F: i,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "panel",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "narrow",
                value: void 0,
              },
              {
                kind: "field",
                key: "routerOptions",
                value: function () {
                  var e = this;
                  return {
                    defaultPage: "dashboard",
                    initialLoad: function () {
                      return e._fetchData();
                    },
                    showLoading: !0,
                    routes: {
                      dashboard: { tag: "hassio-panel", cache: !0 },
                      snapshots: "dashboard",
                      store: "dashboard",
                      system: "dashboard",
                      addon: {
                        tag: "hassio-addon-dashboard",
                        load: function () {
                          return Promise.all([r.e(0), r.e(14), r.e(7)]).then(
                            r.bind(null, 178)
                          );
                        },
                      },
                      ingress: {
                        tag: "hassio-ingress-view",
                        load: function () {
                          return r.e(9).then(r.bind(null, 176));
                        },
                      },
                    },
                  };
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_supervisorInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_hostInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_hassOsInfo",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_hassInfo",
                value: void 0,
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function (e) {
                  var t,
                    r,
                    n,
                    c = this;
                  Xi(Zi(i.prototype), "firstUpdated", this).call(this, e),
                    (function (e, t, r) {
                      var n = r ? o[r] || a(r, t) : void 0;
                      if (e._themes || n) {
                        var i = Object.assign(
                          {},
                          e._themes,
                          {},
                          null == n ? void 0 : n.styles
                        );
                        (e._themes = null == n ? void 0 : n.keys),
                          e.updateStyles
                            ? e.updateStyles(i)
                            : window.ShadyCSS &&
                              window.ShadyCSS.styleSubtree(e, i);
                      }
                    })(
                      this.parentElement,
                      this.hass.themes,
                      this.hass.selectedTheme || this.hass.themes.default_theme
                    ),
                    this.addEventListener("hass-api-called", function (e) {
                      return c._apiCalled(e);
                    }),
                    this.addEventListener("hass-toggle-menu", function () {
                      Object(s.a)(
                        window.parent.customPanel,
                        c.hass.dockedSidebar
                          ? "hass-close-menu"
                          : "hass-open-menu"
                      );
                    }),
                    window.addEventListener("location-changed", function (e) {
                      return Object(s.a)(c, e.type, e.detail, { bubbles: !1 });
                    }),
                    window.addEventListener("haptic", function (e) {
                      Object(s.a)(window.parent, e.type, e.detail, {
                        bubbles: !1,
                      });
                    }),
                    (t = this),
                    (r = document.body),
                    t.addEventListener(
                      "show-dialog",
                      ((n = b(
                        regeneratorRuntime.mark(function e(n) {
                          var i, o, a, s;
                          return regeneratorRuntime.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (i = n.detail),
                                    (o = i.dialogTag),
                                    (a = i.dialogImport),
                                    (s = i.dialogParams),
                                    w(t, r, a, o, s);
                                case 2:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )),
                      function (e) {
                        return n.apply(this, arguments);
                      })
                    );
                },
              },
              {
                kind: "method",
                key: "updatePageEl",
                value: function (e) {
                  var t =
                    "HASSIO-PANEL" === e.nodeName ? this.route : this.routeTail;
                  "setProperties" in e
                    ? e.setProperties({
                        hass: this.hass,
                        narrow: this.narrow,
                        supervisorInfo: this._supervisorInfo,
                        hostInfo: this._hostInfo,
                        hassInfo: this._hassInfo,
                        hassOsInfo: this._hassOsInfo,
                        route: t,
                      })
                    : ((e.hass = this.hass),
                      (e.narrow = this.narrow),
                      (e.supervisorInfo = this._supervisorInfo),
                      (e.hostInfo = this._hostInfo),
                      (e.hassInfo = this._hassInfo),
                      (e.hassOsInfo = this._hassOsInfo),
                      (e.route = t));
                },
              },
              {
                kind: "method",
                key: "_fetchData",
                value: (function () {
                  var e = Ui(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n, i, o;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  !this.panel.config ||
                                  !this.panel.config.ingress
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return (
                                  (e.next = 3),
                                  this._redirectIngress(
                                    this.panel.config.ingress
                                  )
                                );
                              case 3:
                                return e.abrupt("return");
                              case 4:
                                return (
                                  (e.next = 6),
                                  Promise.all([
                                    Object(m.d)(this.hass),
                                    p(this.hass),
                                    Object(m.b)(this.hass),
                                  ])
                                );
                              case 6:
                                if (
                                  ((t = e.sent),
                                  (r = Fi(t, 3)),
                                  (n = r[0]),
                                  (i = r[1]),
                                  (o = r[2]),
                                  (this._supervisorInfo = n),
                                  (this._hostInfo = i),
                                  (this._hassInfo = o),
                                  !this._hostInfo.features ||
                                    !this._hostInfo.features.includes("hassos"))
                                ) {
                                  e.next = 18;
                                  break;
                                }
                                return (e.next = 17), h(this.hass);
                              case 17:
                                this._hassOsInfo = e.sent;
                              case 18:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "_redirectIngress",
                value: (function () {
                  var e = Ui(
                    regeneratorRuntime.mark(function e(t) {
                      var r,
                        n,
                        i,
                        o = this;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = (function () {
                                    var e = Ui(
                                      regeneratorRuntime.mark(function e(t, r) {
                                        return regeneratorRuntime.wrap(
                                          function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.next = 2),
                                                    new Promise(function (e) {
                                                      (t.confirm = e),
                                                        Object(y.a)(o, t);
                                                    })
                                                  );
                                                case 2:
                                                  return (
                                                    r(),
                                                    (e.next = 5),
                                                    new Promise(function (e) {
                                                      return setTimeout(e, 1e3);
                                                    })
                                                  );
                                                case 5:
                                                case "end":
                                                  return e.stop();
                                              }
                                          },
                                          e
                                        );
                                      })
                                    );
                                    return function (t, r) {
                                      return e.apply(this, arguments);
                                    };
                                  })()),
                                  (n = Object(m.a)(this.hass).then(
                                    function () {
                                      return !0;
                                    },
                                    function () {
                                      return !1;
                                    }
                                  )),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  Object(l.c)(this.hass, t)
                                );
                              case 5:
                                (i = e.sent), (e.next = 13);
                                break;
                              case 8:
                                return (
                                  (e.prev = 8),
                                  (e.t0 = e.catch(2)),
                                  (e.next = 12),
                                  r(
                                    {
                                      text:
                                        "Unable to fetch add-on info to start Ingress",
                                      title: "Hass.io",
                                    },
                                    function () {
                                      return history.back();
                                    }
                                  )
                                );
                              case 12:
                                return e.abrupt("return");
                              case 13:
                                if (i.ingress_url) {
                                  e.next = 17;
                                  break;
                                }
                                return (
                                  (e.next = 16),
                                  r(
                                    {
                                      text: "Add-on does not support Ingress",
                                      title: i.name,
                                    },
                                    function () {
                                      return history.back();
                                    }
                                  )
                                );
                              case 16:
                                return e.abrupt("return");
                              case 17:
                                if ("started" === i.state) {
                                  e.next = 21;
                                  break;
                                }
                                return (
                                  (e.next = 20),
                                  r(
                                    {
                                      text:
                                        "Add-on is not running. Please start it first",
                                      title: i.name,
                                    },
                                    function () {
                                      return Object(c.a)(
                                        o,
                                        "/hassio/addon/".concat(
                                          i.slug,
                                          "/info"
                                        ),
                                        !0
                                      );
                                    }
                                  )
                                );
                              case 20:
                                return e.abrupt("return");
                              case 21:
                                return (e.next = 23), n;
                              case 23:
                                if (e.sent) {
                                  e.next = 27;
                                  break;
                                }
                                return (
                                  (e.next = 26),
                                  r(
                                    {
                                      text:
                                        "Unable to create an Ingress session",
                                      title: i.name,
                                    },
                                    function () {
                                      return history.back();
                                    }
                                  )
                                );
                              case 26:
                                return e.abrupt("return");
                              case 27:
                                return (
                                  location.assign(i.ingress_url),
                                  (e.next = 30),
                                  new Promise(function () {})
                                );
                              case 30:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 8]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "_apiCalled",
                value: function (e) {
                  var t = this;
                  if (e.detail.success) {
                    var r = 1;
                    !(function e() {
                      t._fetchData().catch(function () {
                        (r += 1), setTimeout(e, 1e3 * Math.min(r, 5));
                      });
                    })();
                  }
                },
              },
            ],
          };
        },
        ((eo = k.a),
        (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && j(e, t);
          })(o, eo);
          var t,
            r,
            n,
            i = x(o);
          function o() {
            var e;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, o);
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return (
              D(S((e = i.call.apply(i, [this].concat(r)))), "hass", void 0),
              D(S(e), "__provideHass", []),
              e
            );
          }
          return (
            (t = o),
            (r = [
              {
                key: "provideHass",
                value: function (e) {
                  this.__provideHass.push(e), (e.hass = this.hass);
                },
              },
              {
                key: "updated",
                value: function (e) {
                  var t = this;
                  P(_(o.prototype), "updated", this).call(this, e),
                    e.has("hass") &&
                      this.__provideHass.forEach(function (e) {
                        e.hass = t.hass;
                      });
                },
              },
            ]) && O(t.prototype, r),
            n && O(t, n),
            o
          );
        })())
      );
    },
    38: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      });
      var n = r(12),
        i = function (e, t) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          r
            ? history.replaceState(null, "", t)
            : history.pushState(null, "", t),
            Object(n.a)(window, "location-changed", { replace: r });
        };
    },
    43: function (e, t, r) {
      "use strict";
      r(25);
      var n = r(6),
        i = r(9),
        o = r(37),
        a = [60, 60, 24, 7],
        s = ["second", "minute", "hour", "day"];
      var c = r(19);
      function l(e) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
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
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        return function () {
          var t,
            r = p(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = p(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === l(t) || "function" == typeof t)) return t;
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e);
          })(this, t);
        };
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var h = Object(c.a)(function (e) {
        return (function (t) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && f(e, t);
          })(a, e);
          var r,
            n,
            i,
            o = d(a);
          function a() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              o.apply(this, arguments)
            );
          }
          return (
            (r = a),
            (i = [
              {
                key: "properties",
                get: function () {
                  return {
                    hass: Object,
                    localize: {
                      type: Function,
                      computed: "__computeLocalize(hass.localize)",
                    },
                  };
                },
              },
            ]),
            (n = [
              {
                key: "__computeLocalize",
                value: function (e) {
                  return e;
                },
              },
            ]) && u(r.prototype, n),
            i && u(r, i),
            a
          );
        })();
      });
      function m(e) {
        return (m =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function y(e, t, r) {
        return (y =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
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
      function v(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function b(e, t, r) {
        return t && v(e.prototype, t), r && v(e, r), e;
      }
      function g(e, t) {
        return (g =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function w(e) {
        return function () {
          var t,
            r = E(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = E(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === m(t) || "function" == typeof t)) return t;
            return k(e);
          })(this, t);
        };
      }
      function k(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function E(e) {
        return (E = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var O = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && g(e, t);
        })(r, h(o["a"]));
        var t = w(r);
        function r() {
          var e;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r),
            ((e = t.call(this)).updateRelative = e.updateRelative.bind(k(e))),
            e
          );
        }
        return (
          b(r, null, [
            {
              key: "properties",
              get: function () {
                return {
                  hass: Object,
                  datetime: { type: String, observer: "datetimeChanged" },
                  datetimeObj: { type: Object, observer: "datetimeObjChanged" },
                  parsedDateTime: Object,
                };
              },
            },
          ]),
          b(r, [
            {
              key: "connectedCallback",
              value: function () {
                y(E(r.prototype), "connectedCallback", this).call(this),
                  (this.updateInterval = setInterval(this.updateRelative, 6e4));
              },
            },
            {
              key: "disconnectedCallback",
              value: function () {
                y(E(r.prototype), "disconnectedCallback", this).call(this),
                  clearInterval(this.updateInterval);
              },
            },
            {
              key: "datetimeChanged",
              value: function (e) {
                (this.parsedDateTime = e ? new Date(e) : null),
                  this.updateRelative();
              },
            },
            {
              key: "datetimeObjChanged",
              value: function (e) {
                (this.parsedDateTime = e), this.updateRelative();
              },
            },
            {
              key: "updateRelative",
              value: function () {
                var e = Object(i.a)(this);
                this.parsedDateTime
                  ? (e.innerHTML = (function (e, t) {
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
              },
            },
          ]),
          r
        );
      })();
      function P(e) {
        return (P =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function j() {
        var e = A([
          "\n      iron-icon {\n        margin-right: 24px;\n        margin-left: 8px;\n        margin-top: 12px;\n        float: left;\n        color: var(--secondary-text-color);\n      }\n      iron-icon.update {\n        color: var(--paper-orange-400);\n      }\n      iron-icon.running,\n      iron-icon.installed {\n        color: var(--paper-green-400);\n      }\n      iron-icon.hassupdate,\n      iron-icon.snapshot {\n        color: var(--paper-item-icon-color);\n      }\n      iron-icon.not_available {\n        color: var(--google-red-500);\n      }\n      .title {\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n      }\n      .addition {\n        color: var(--secondary-text-color);\n        overflow: hidden;\n        position: relative;\n        height: 2.4em;\n        line-height: 1.2em;\n      }\n      ha-relative-time {\n        display: block;\n      }\n      .icon_image img {\n        max-height: 40px;\n        max-width: 40px;\n        margin-top: 4px;\n        margin-right: 16px;\n        float: left;\n      }\n      .icon_image.stopped,\n      .icon_image.not_available {\n        filter: grayscale(1);\n      }\n      .dot {\n        position: absolute;\n        background-color: var(--paper-orange-400);\n        width: 12px;\n        height: 12px;\n        top: 8px;\n        right: 8px;\n        border-radius: 50%;\n      }\n      .topbar {\n        position: absolute;\n        width: 100%;\n        height: 2px;\n        top: 0;\n        left: 0;\n        border-top-left-radius: 2px;\n        border-top-right-radius: 2px;\n      }\n      .topbar.installed {\n        background-color: var(--primary-color);\n      }\n      .topbar.update {\n        background-color: var(--accent-color);\n      }\n      .topbar.unavailable {\n        background-color: var(--error-color);\n      }\n    ",
        ]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = A([
          "\n                <ha-relative-time\n                  .hass=",
          '\n                  class="addition"\n                  .datetime=',
          "\n                ></ha-relative-time>\n              ",
        ]);
        return (
          (x = function () {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = A([
          "\n            <iron-icon\n              class=",
          "\n              .icon=",
          "\n              .title=",
          "\n            ></iron-icon>\n          ",
        ]);
        return (
          (S = function () {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = A([
          '\n            <div class="icon_image ',
          '">\n              <img src="',
          '" title="',
          '" />\n              <div></div>\n            </div>\n          ',
        ]);
        return (
          (_ = function () {
            return e;
          }),
          e
        );
      }
      function D() {
        var e = A([' <div class="topbar ', '"></div> ']);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      function C() {
        var e = A([
          "\n      ",
          "\n      ",
          '\n      <div>\n        <div class="title">\n          ',
          '\n        </div>\n        <div class="addition">\n          ',
          "\n          ",
          "\n          ",
          "\n        </div>\n      </div>\n    ",
        ]);
        return (
          (C = function () {
            return e;
          }),
          e
        );
      }
      function A(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function T(e, t) {
        return (T =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function R(e) {
        return function () {
          var t,
            r = I(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = I(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === P(t) || "function" == typeof t)) return t;
            return z(e);
          })(this, t);
        };
      }
      function z(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function I(e) {
        return (I = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function F(e) {
        var t,
          r = H(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (n.decorators = e.decorators),
          "field" === e.kind && (n.initializer = e.value),
          n
        );
      }
      function L(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function U(e) {
        return e.decorators && e.decorators.length;
      }
      function N(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function M(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function H(e) {
        var t = (function (e, t) {
          if ("object" !== P(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== P(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === P(t) ? t : String(t);
      }
      function B(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      customElements.define("ha-relative-time", O);
      !(function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
                  if (!U(e)) return r.push(e);
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return B(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? B(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = M(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = M(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                  if (N(o.descriptor) || N(i.descriptor)) {
                    if (U(o) || U(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (U(o)) {
                      if (U(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    L(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(F)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-card-content")],
        function (e, t) {
          return {
            F: (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && T(e, t);
              })(i, t);
              var n = R(i);
              function i() {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(z(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "title",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "description",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "available",
                value: function () {
                  return !0;
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "showTopbar",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "topbarClass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "datetime",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "iconTitle",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "iconClass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "icon",
                value: function () {
                  return "hass:help-circle";
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "iconImage",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(n.e)(
                    C(),
                    this.showTopbar ? Object(n.e)(D(), this.topbarClass) : "",
                    this.iconImage
                      ? Object(n.e)(
                          _(),
                          this.iconClass,
                          this.iconImage,
                          this.iconTitle
                        )
                      : Object(n.e)(
                          S(),
                          this.iconClass,
                          this.icon,
                          this.iconTitle
                        ),
                    this.title,
                    this.description,
                    !1 === this.available ? " (Not available)" : "",
                    this.datetime
                      ? Object(n.e)(x(), this.hass, this.datetime)
                      : void 0
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return Object(n.c)(j());
                },
              },
            ],
          };
        },
        n.a
      );
    },
    48: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      });
      var n = function (e) {
        return e.data;
      };
    },
    50: function (e, t, r) {
      "use strict";
      var n = r(6),
        i = r(12);
      r(113);
      function o(e) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function a(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function s() {
        var e = (function (e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <ha-progress-button\n        .progress="',
          '"\n        @click="',
          '"\n        ?disabled="',
          '"\n        ><slot></slot\n      ></ha-progress-button>\n    ',
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function c(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function l(e, t, r) {
        return t && c(e.prototype, t), r && c(e, r), e;
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        return function () {
          var t,
            r = d(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = d(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === o(t) || "function" == typeof t)) return t;
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e);
          })(this, t);
        };
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var p = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && u(e, t);
        })(r, n["a"]);
        var t = f(r);
        function r() {
          var e;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r),
            ((e = t.call(this)).method = "POST"),
            (e.data = {}),
            (e.disabled = !1),
            (e.progress = !1),
            e
          );
        }
        return (
          l(r, [
            {
              key: "render",
              value: function () {
                return Object(n.e)(
                  s(),
                  this.progress,
                  this._buttonTapped,
                  this.disabled
                );
              },
            },
          ]),
          l(
            r,
            [
              {
                key: "_buttonTapped",
                value: (function () {
                  var e,
                    t =
                      ((e = regeneratorRuntime.mark(function e() {
                        var t, r;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.progress = !0),
                                    (t = {
                                      method: this.method,
                                      path: this.path,
                                      data: this.data,
                                    }),
                                    (e.prev = 2),
                                    (e.next = 5),
                                    this.hass.callApi(
                                      this.method,
                                      this.path,
                                      this.data
                                    )
                                  );
                                case 5:
                                  (r = e.sent),
                                    (this.progress = !1),
                                    this.progressButton.actionSuccess(),
                                    (t.success = !0),
                                    (t.response = r),
                                    (e.next = 18);
                                  break;
                                case 12:
                                  (e.prev = 12),
                                    (e.t0 = e.catch(2)),
                                    (this.progress = !1),
                                    this.progressButton.actionError(),
                                    (t.success = !1),
                                    (t.response = e.t0);
                                case 18:
                                  Object(i.a)(this, "hass-api-called", t);
                                case 19:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[2, 12]]
                        );
                      })),
                      function () {
                        var t = this,
                          r = arguments;
                        return new Promise(function (n, i) {
                          var o = e.apply(t, r);
                          function s(e) {
                            a(o, n, i, s, c, "next", e);
                          }
                          function c(e) {
                            a(o, n, i, s, c, "throw", e);
                          }
                          s(void 0);
                        });
                      });
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "progressButton",
                get: function () {
                  return this.renderRoot.querySelector("ha-progress-button");
                },
              },
            ],
            [
              {
                key: "properties",
                get: function () {
                  return {
                    hass: {},
                    progress: Boolean,
                    path: String,
                    method: String,
                    data: {},
                    disabled: Boolean,
                  };
                },
              },
            ]
          ),
          r
        );
      })();
      customElements.define("ha-call-api-button", p);
    },
    66: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return a;
      }),
        r.d(t, "d", function () {
          return s;
        }),
        r.d(t, "c", function () {
          return c;
        }),
        r.d(t, "a", function () {
          return l;
        }),
        r.d(t, "e", function () {
          return u;
        });
      var n = r(48);
      function i(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function o(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var a = e.apply(t, r);
            function s(e) {
              i(a, n, o, s, c, "next", e);
            }
            function c(e) {
              i(a, n, o, s, c, "throw", e);
            }
            s(void 0);
          });
        };
      }
      var a = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = n.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/core/info")
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent), e.abrupt("return", (0, e.t0)(e.t1))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        s = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = n.a),
                        (e.next = 3),
                        t.callApi("GET", "hassio/supervisor/info")
                      );
                    case 3:
                      return (
                        (e.t1 = e.sent), e.abrupt("return", (0, e.t0)(e.t1))
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        c = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        t.callApi("GET", "hassio/".concat(r, "/logs"))
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })(),
        l = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              var r;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.callApi("POST", "hassio/ingress/session")
                      );
                    case 2:
                      (r = e.sent),
                        (document.cookie = "ingress_session=".concat(
                          r.data.session,
                          ";path=/api/hassio_ingress/"
                        ));
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        u = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.callApi("POST", "hassio/supervisor/options", r)
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })();
    },
    67: function (e, t) {},
    68: function (e, t, r) {
      "use strict";
      r(35);
      var n = r(6);
      function i(e) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function o() {
        var e = s([
          "\n      :host {\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n    ",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      function a() {
        var e = s([" <paper-spinner-lite active></paper-spinner-lite> "]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function s(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function l(e) {
        return function () {
          var t,
            r = f(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = f(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === i(t) || "function" == typeof t)) return t;
            return u(e);
          })(this, t);
        };
      }
      function u(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function d(e) {
        var t,
          r = v(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
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
        var t = (function (e, t) {
          if ("object" !== i(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== i(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === i(t) ? t : String(t);
      }
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      !(function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return b(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? b(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = y(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
            })(a.d.map(d)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("loading-screen")],
        function (e, t) {
          return {
            F: (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && c(e, t);
              })(i, t);
              var n = l(i);
              function i() {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(u(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(n.e)(a());
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return Object(n.c)(o());
                },
              },
            ],
          };
        },
        n.a
      );
    },
    83: function (e, t, r) {
      "use strict";
      r(33);
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
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
      function o(e, t, r) {
        return (o =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = l(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function a(e, t) {
        return (a =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function s(e) {
        return function () {
          var t,
            r = l(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var i = l(this).constructor;
            t = Reflect.construct(r, arguments, i);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === n(t) || "function" == typeof t)) return t;
            return c(e);
          })(this, t);
        };
      }
      function c(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var u = customElements.get("paper-icon-button"),
        f = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && a(e, t);
          })(d, u);
          var t,
            r,
            n,
            f = s(d);
          function d() {
            var e, t, r, n;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, d);
            for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
              o[a] = arguments[a];
            return (
              (e = f.call.apply(f, [this].concat(o))),
              (t = c(e)),
              (n = void 0),
              (r = "hassio") in t
                ? Object.defineProperty(t, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[r] = n),
              e
            );
          }
          return (
            (t = d),
            (r = [
              {
                key: "connectedCallback",
                value: function () {
                  var e = this;
                  o(l(d.prototype), "connectedCallback", this).call(this),
                    setTimeout(function () {
                      e.icon =
                        "ltr" === window.getComputedStyle(e).direction
                          ? e.hassio
                            ? "hassio:arrow-left"
                            : "hass:arrow-left"
                          : e.hassio
                          ? "hassio:arrow-right"
                          : "hass:arrow-right";
                    }, 100);
                },
              },
            ]) && i(t.prototype, r),
            n && i(t, n),
            d
          );
        })();
      customElements.define("ha-paper-icon-button-arrow-prev", f);
    },
    86: function (e, t, r) {
      "use strict";
      function n(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
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
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return i(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return i(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      r.d(t, "a", function () {
        return o;
      });
      var o = function (e, t, r) {
        var i = n(e.split(".", 2), 2),
          o = i[0],
          a = i[1];
        return Number(o) > t || (Number(o) === t && Number(a) >= r);
      };
    },
    92: function (e, t, r) {
      "use strict";
      r(33);
      var n = r(6),
        i = r(12),
        o = r(180),
        a = function (e) {
          return e.sendMessagePromise({ type: "persistent_notification/get" });
        },
        s = function (e, t) {
          return e.subscribeEvents(function () {
            return a(e).then(function (e) {
              return t.setState(e, !0);
            });
          }, "persistent_notifications_updated");
        };
      function c(e) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
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
          "\n      :host {\n        position: relative;\n      }\n      .dot {\n        pointer-events: none;\n        position: absolute;\n        background-color: var(--accent-color);\n        width: 12px;\n        height: 12px;\n        top: 5px;\n        right: 2px;\n        border-radius: 50%;\n        border: 2px solid var(--app-header-background-color);\n      }\n    ",
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = d([' <div class="dot"></div> ']);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = d([
          "\n      <paper-icon-button\n        aria-label=",
          "\n        .icon=",
          "\n        @click=",
          "\n      ></paper-icon-button>\n      ",
          "\n    ",
        ]);
        return (
          (f = function () {
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
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function h(e) {
        return function () {
          var t,
            r = P(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = P(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === c(t) || "function" == typeof t)) return t;
            return m(e);
          })(this, t);
        };
      }
      function m(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e) {
        var t,
          r = k(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
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
        var t = (function (e, t) {
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
      function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function O(e, t, r) {
        return (O =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = P(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function P(e) {
        return (P = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      !(function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return E(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? E(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = w(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
        [Object(n.d)("ha-menu-button")],
        function (e, t) {
          var r = (function (r) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && p(e, t);
            })(i, t);
            var n = h(i);
            function i() {
              var t;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i);
              for (
                var r = arguments.length, o = new Array(r), a = 0;
                a < r;
                a++
              )
                o[a] = arguments[a];
              return (t = n.call.apply(n, [this].concat(o))), e(m(t)), t;
            }
            return i;
          })();
          return {
            F: r,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "hassio",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "narrow",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_hasNotifications",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                key: "_alwaysVisible",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                key: "_attachNotifOnConnect",
                value: function () {
                  return !1;
                },
              },
              { kind: "field", key: "_unsubNotifications", value: void 0 },
              {
                kind: "method",
                key: "connectedCallback",
                value: function () {
                  O(P(r.prototype), "connectedCallback", this).call(this),
                    this._attachNotifOnConnect &&
                      ((this._attachNotifOnConnect = !1),
                      this._subscribeNotifications());
                },
              },
              {
                kind: "method",
                key: "disconnectedCallback",
                value: function () {
                  O(P(r.prototype), "disconnectedCallback", this).call(this),
                    this._unsubNotifications &&
                      ((this._attachNotifOnConnect = !0),
                      this._unsubNotifications(),
                      (this._unsubNotifications = void 0));
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  var e =
                    (this.narrow ||
                      "always_hidden" === this.hass.dockedSidebar) &&
                    (this._hasNotifications ||
                      Object.keys(this.hass.states).some(function (e) {
                        return (
                          "configurator" ===
                          (function (e) {
                            return e.substr(0, e.indexOf("."));
                          })(e)
                        );
                      }));
                  return Object(n.e)(
                    f(),
                    this.hass.localize("ui.sidebar.sidebar_toggle"),
                    this.hassio ? "hassio:menu" : "hass:menu",
                    this._toggleMenu,
                    e ? Object(n.e)(u()) : ""
                  );
                },
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function (e) {
                  O(P(r.prototype), "firstUpdated", this).call(this, e),
                    this.hassio &&
                      (this._alwaysVisible =
                        (Number(window.parent.frontendVersion) || 0) <
                        20190710);
                },
              },
              {
                kind: "method",
                key: "updated",
                value: function (e) {
                  if (
                    (O(P(r.prototype), "updated", this).call(this, e),
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
                },
              },
              {
                kind: "method",
                key: "_subscribeNotifications",
                value: function () {
                  var e,
                    t,
                    r = this;
                  this._unsubNotifications =
                    ((e = this.hass.connection),
                    (t = function (e) {
                      r._hasNotifications = e.length > 0;
                    }),
                    Object(o.a)("_ntf", a, s, e, t));
                },
              },
              {
                kind: "method",
                key: "_toggleMenu",
                value: function () {
                  Object(i.a)(this, "hass-toggle-menu");
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return Object(n.c)(l());
                },
              },
            ],
          };
        },
        n.a
      );
    },
    93: function (e, t, r) {
      "use strict";
      var n = r(6),
        i = r(49),
        o = r(38);
      r(18), r(109);
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function s() {
        var e = l([
          "\n        .content {\n          height: calc(100% - 64px);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          flex-direction: column;\n        }\n      ",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = l([
          '\n      <hass-subpage>\n        <div class="content">\n          <h3>',
          "</h3>\n          <slot>\n            <mwc-button @click=",
          ">go back</mwc-button>\n          </slot>\n        </div>\n      </hass-subpage>\n    ",
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function l(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        return function () {
          var t,
            r = p(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = p(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === a(t) || "function" == typeof t)) return t;
            return d(e);
          })(this, t);
        };
      }
      function d(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function h(e) {
        var t,
          r = g(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
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
        var t = (function (e, t) {
          if ("object" !== a(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== a(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === a(t) ? t : String(t);
      }
      function w(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      (function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return w(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? w(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = b(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
        [Object(n.d)("hass-error-screen")],
        function (e, t) {
          return {
            F: (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && u(e, t);
              })(i, t);
              var n = f(i);
              function i() {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var r = arguments.length, o = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  o[a] = arguments[a];
                return (t = n.call.apply(n, [this].concat(o))), e(d(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "error",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(n.e)(c(), this.error, this._backTapped);
                },
              },
              {
                kind: "method",
                key: "_backTapped",
                value: function () {
                  history.back();
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [Object(n.c)(s())];
                },
              },
            ],
          };
        },
        n.a
      ),
        r(110);
      function k(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function E(e) {
        return (E =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function O(e, t) {
        return (O =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function P(e) {
        return function () {
          var t,
            r = z(e);
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
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var n = z(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === E(t) || "function" == typeof t)) return t;
            return j(e);
          })(this, t);
        };
      }
      function j(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function x(e) {
        var t,
          r = A(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = {
              set: e.value,
              configurable: !0,
              enumerable: !1,
            })
          : "field" === e.kind &&
            (t = {
              configurable: !0,
              writable: !0,
              enumerable: !0,
            });
        var n = {
          kind: "field" === e.kind ? "field" : "method",
          key: r,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
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
      function _(e) {
        return e.decorators && e.decorators.length;
      }
      function D(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function C(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function A(e) {
        var t = (function (e, t) {
          if ("object" !== E(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== E(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === E(t) ? t : String(t);
      }
      function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function R(e, t, r) {
        return (R =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = z(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function z(e) {
        return (z = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      r.d(t, "a", function () {
        return I;
      });
      var I = (function (e, t, r, n) {
        var i = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (r) {
                t.forEach(function (t) {
                  t.kind === r &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var r = e.prototype;
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  var i = t.placement;
                  if (t.kind === n && ("static" === i || "prototype" === i)) {
                    var o = "static" === i ? e : r;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var r = t.descriptor;
              if ("field" === t.kind) {
                var n = t.initializer;
                r = {
                  enumerable: r.enumerable,
                  writable: r.writable,
                  configurable: r.configurable,
                  value: void 0 === n ? void 0 : n.call(e),
                };
              }
              Object.defineProperty(e, t.key, r);
            },
            decorateClass: function (e, t) {
              var r = [],
                n = [],
                i = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, i);
                }, this),
                e.forEach(function (e) {
                  if (!_(e)) return r.push(e);
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
            addElementPlacement: function (e, t, r) {
              var n = t[e.placement];
              if (!r && -1 !== n.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              n.push(e.key);
            },
            decorateElement: function (e, t) {
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
            decorateConstructor: function (e, t) {
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
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(t) ||
                  (function (e) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return T(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? T(e, t)
                          : void 0
                      );
                    }
                  })(t) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e) {
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
            toElementDescriptor: function (e) {
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
                descriptor: Object.assign({}, i),
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
            toElementFinisherExtras: function (e) {
              var t = this.toElementDescriptor(e),
                r = C(e, "finisher"),
                n = this.toElementDescriptors(e.extras);
              return { element: t, finisher: r, extras: n };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
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
              var r = C(e, "finisher"),
                n = this.toElementDescriptors(e.elements);
              return { elements: n, finisher: r };
            },
            runClassFinishers: function (e, t) {
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
            disallowProperty: function (e, t, r) {
              if (void 0 !== e[t])
                throw new TypeError(r + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (n) for (var o = 0; o < n.length; o++) i = n[o](i);
        var a = t(function (e) {
            i.initializeInstanceElements(e, s.elements);
          }, r),
          s = i.decorateClass(
            (function (e) {
              for (
                var t = [],
                  r = function (e) {
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
                    if (_(o) || _(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (_(o)) {
                      if (_(i))
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
            })(a.d.map(x)),
            e
          );
        return (
          i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers)
        );
      })(
        null,
        function (e, t) {
          var r = (function (r) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && O(e, t);
            })(i, t);
            var n = P(i);
            function i() {
              var t;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i);
              for (
                var r = arguments.length, o = new Array(r), a = 0;
                a < r;
                a++
              )
                o[a] = arguments[a];
              return (t = n.call.apply(n, [this].concat(o))), e(j(t)), t;
            }
            return i;
          })();
          return {
            F: r,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "route",
                value: void 0,
              },
              {
                kind: "field",
                key: "routerOptions",
                value: void 0,
              },
              {
                kind: "field",
                key: "_currentPage",
                value: function () {
                  return "";
                },
              },
              {
                kind: "field",
                key: "_currentLoadProm",
                value: void 0,
              },
              {
                kind: "field",
                key: "_cache",
                value: function () {
                  return {};
                },
              },
              {
                kind: "field",
                key: "_initialLoadDone",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                key: "_computeTail",
                value: function () {
                  return Object(i.a)(function (e) {
                    var t = e.path.indexOf("/", 1);
                    return -1 === t
                      ? {
                          prefix: e.prefix + e.path,
                          path: "",
                        }
                      : {
                          prefix: e.prefix + e.path.substr(0, t),
                          path: e.path.substr(t),
                        };
                  });
                },
              },
              {
                kind: "method",
                key: "update",
                value: function (e) {
                  var t = this;
                  R(z(r.prototype), "update", this).call(this, e);
                  var n = this.routerOptions || { routes: {} };
                  if (!n || !n.initialLoad || this._initialLoadDone)
                    if (e.has("route")) {
                      var i = this.route,
                        a = n.defaultPage;
                      i &&
                        "" === i.path &&
                        void 0 !== a &&
                        Object(o.a)(
                          this,
                          "".concat(i.prefix, "/").concat(a),
                          !0
                        );
                      for (
                        var s = i
                            ? (function (e, t) {
                                if ("" === e) return t;
                                var r = e.indexOf("/", 1);
                                return -1 === r
                                  ? e.substr(1)
                                  : e.substr(1, r - 1);
                              })(i.path, a || "")
                            : "not_found",
                          c = n.routes[s];
                        "string" == typeof c;

                      )
                        (s = c), (c = n.routes[s]);
                      if (n.beforeRender) {
                        var l = n.beforeRender(s);
                        if (void 0 !== l) {
                          for (s = l, c = n.routes[s]; "string" == typeof c; )
                            (s = c), (c = n.routes[s]);
                          i &&
                            Object(o.a)(
                              this,
                              "".concat(i.prefix, "/").concat(l),
                              !0
                            );
                        }
                      }
                      if (this._currentPage !== s) {
                        if (!c)
                          return (
                            (this._currentPage = ""),
                            void (
                              this.lastChild && this.removeChild(this.lastChild)
                            )
                          );
                        this._currentPage = s;
                        var u = c.load ? c.load() : Promise.resolve();
                        if (
                          (u.catch(function (e) {
                            if (
                              (console.error("Error loading page", s, e),
                              t._currentPage === s)
                            ) {
                              t.removeChild(t.lastChild);
                              var r = document.createElement(
                                "hass-error-screen"
                              );
                              (r.error = "Error while loading page ".concat(
                                s,
                                "."
                              )),
                                t.appendChild(r);
                            }
                          }),
                          n.showLoading)
                        ) {
                          var f = !1;
                          setTimeout(function () {
                            f ||
                              t._currentPage !== s ||
                              (t.lastChild && t.removeChild(t.lastChild),
                              t.appendChild(t.createLoadingScreen()));
                          }, 400),
                            (this._currentLoadProm = u.then(
                              function () {
                                (t._currentLoadProm = void 0),
                                  t._currentPage === s &&
                                    ((f = !0), t._createPanel(n, s, c));
                              },
                              function () {
                                t._currentLoadProm = void 0;
                              }
                            ));
                        } else this._createPanel(n, s, c);
                      } else
                        this.lastChild && this.updatePageEl(this.lastChild, e);
                    } else
                      this.lastChild &&
                        !this._currentLoadProm &&
                        this.updatePageEl(this.lastChild, e);
                },
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function (e) {
                  var t = this;
                  R(z(r.prototype), "firstUpdated", this).call(this, e);
                  var n = this.routerOptions;
                  n &&
                    (n.preloadAll &&
                      Object.values(n.routes).forEach(function (e) {
                        return "object" === E(e) && e.load && e.load();
                      }),
                    n.initialLoad &&
                      (setTimeout(function () {
                        t._initialLoadDone ||
                          t.appendChild(t.createLoadingScreen());
                      }, 400),
                      n.initialLoad().then(function () {
                        (t._initialLoadDone = !0), t.requestUpdate("route");
                      })));
                },
              },
              {
                kind: "method",
                key: "createLoadingScreen",
                value: function () {
                  return document.createElement("hass-loading-screen");
                },
              },
              {
                kind: "method",
                key: "rebuild",
                value: (function () {
                  var e,
                    t =
                      ((e = regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (void 0 !== (t = this.route)) {
                                    e.next = 3;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 3:
                                  return (
                                    (this.route = void 0),
                                    (e.next = 6),
                                    this.updateComplete
                                  );
                                case 6:
                                  void 0 === this.route && (this.route = t);
                                case 7:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })),
                      function () {
                        var t = this,
                          r = arguments;
                        return new Promise(function (n, i) {
                          var o = e.apply(t, r);
                          function a(e) {
                            k(o, n, i, a, s, "next", e);
                          }
                          function s(e) {
                            k(o, n, i, a, s, "throw", e);
                          }
                          a(void 0);
                        });
                      });
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "get",
                key: "pageRendered",
                value: function () {
                  var e = this;
                  return this.updateComplete.then(function () {
                    return e._currentLoadProm;
                  });
                },
              },
              {
                kind: "method",
                key: "createElement",
                value: function (e) {
                  return document.createElement(e);
                },
              },
              {
                kind: "method",
                key: "updatePageEl",
                value: function (e, t) {},
              },
              {
                kind: "get",
                key: "routeTail",
                value: function () {
                  return this._computeTail(this.route);
                },
              },
              {
                kind: "method",
                key: "_createPanel",
                value: function (e, t, r) {
                  this.lastChild && this.removeChild(this.lastChild);
                  var n = this._cache[t] || this.createElement(r.tag);
                  this.updatePageEl(n),
                    this.appendChild(n),
                    (e.cacheAll || r.cache) && (this._cache[t] = n);
                },
              },
            ],
          };
        },
        n.b
      );
    },
  },
]);
//# sourceMappingURL=chunk.a87cb6b23bf028d87ce9.js.map
