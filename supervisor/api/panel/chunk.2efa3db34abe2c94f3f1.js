/*! For license information please see chunk.2efa3db34abe2c94f3f1.js.LICENSE */
(self.webpackJsonp = self.webpackJsonp || []).push([
  [3],
  {
    167: function (e, t, r) {
      "use strict";
      r.r(t);
      r(18), r(53), r(42);
      var n = r(6),
        i = r(34),
        o = (r(56), r(94), r(11));
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
        var e = f([
          "\n        :host([inert]) {\n          pointer-events: initial !important;\n          cursor: initial !important;\n        }\n        ha-paper-dialog {\n          min-width: 400px;\n          max-width: 500px;\n        }\n        @media (max-width: 400px) {\n          ha-paper-dialog {\n            min-width: initial;\n          }\n        }\n        a {\n          color: var(--primary-color);\n        }\n        p {\n          margin: 0;\n          padding-top: 6px;\n          padding-bottom: 24px;\n          color: var(--primary-text-color);\n        }\n        .no-bottom-padding {\n          padding-bottom: 0;\n        }\n        .secondary {\n          color: var(--secondary-text-color);\n        }\n      ",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = f([
          '\n            <mwc-button @click="',
          '">\n              ',
          "\n            </mwc-button>\n          ",
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = f([
          "\n                <paper-input\n                  autofocus\n                  .value=",
          "\n                  @value-changed=",
          "\n                  @keyup=",
          "\n                  .label=",
          "\n                  .type=",
          "\n                ></paper-input>\n              ",
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = f([
          "\n                <p\n                  class=",
          "\n                >\n                  ",
          "\n                </p>\n              ",
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = f([
          '\n      <ha-paper-dialog\n        with-backdrop\n        opened\n        modal\n        @opened-changed="',
          '"\n      >\n        <h2>\n          ',
          "\n        </h2>\n        <paper-dialog-scrollable>\n          ",
          "\n          ",
          '\n        </paper-dialog-scrollable>\n        <div class="paper-dialog-buttons">\n          ',
          '\n          <mwc-button @click="',
          '">\n            ',
          "\n          </mwc-button>\n        </div>\n      </ha-paper-dialog>\n    ",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = f([""]);
        return (
          (p = function () {
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
      function h(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function m(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = e.apply(t, r);
            function a(e) {
              h(o, n, i, a, s, "next", e);
            }
            function s(e) {
              h(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
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
            r = g(e);
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
            var n = g(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === a(t) || "function" == typeof t)) return t;
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
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function w(e) {
        var t,
          r = x(e.key);
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
      function k(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function _(e) {
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
      function x(e) {
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
      function C(e, t) {
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
                      if ("string" == typeof e) return C(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? C(e, t)
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
              var r = x(e.key),
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
                    k(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(w)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("dialog-box")],
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
                key: "_params",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_value",
                value: void 0,
              },
              {
                kind: "method",
                key: "showDialog",
                value: (function () {
                  var e = m(
                    regeneratorRuntime.mark(function e(t) {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (this._params = t),
                                  t.prompt && (this._value = t.defaultValue);
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
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  if (!this._params) return Object(n.e)(p());
                  var e = this._params.confirmation || this._params.prompt;
                  return Object(n.e)(
                    d(),
                    this._openedChanged,
                    this._params.title
                      ? this._params.title
                      : this._params.confirmation &&
                          this.hass.localize(
                            "ui.dialogs.generic.default_confirmation_title"
                          ),
                    this._params.text
                      ? Object(n.e)(
                          u(),
                          Object(i.a)({
                            "no-bottom-padding": Boolean(this._params.prompt),
                          }),
                          this._params.text
                        )
                      : "",
                    this._params.prompt
                      ? Object(n.e)(
                          l(),
                          this._value,
                          this._valueChanged,
                          this._handleKeyUp,
                          this._params.inputLabel
                            ? this._params.inputLabel
                            : "",
                          this._params.inputType
                            ? this._params.inputType
                            : "text"
                        )
                      : "",
                    e &&
                      Object(n.e)(
                        c(),
                        this._dismiss,
                        this._params.dismissText
                          ? this._params.dismissText
                          : this.hass.localize("ui.dialogs.generic.cancel")
                      ),
                    this._confirm,
                    this._params.confirmText
                      ? this._params.confirmText
                      : this.hass.localize("ui.dialogs.generic.ok")
                  );
                },
              },
              {
                kind: "method",
                key: "_valueChanged",
                value: function (e) {
                  this._value = e.detail.value;
                },
              },
              {
                kind: "method",
                key: "_dismiss",
                value: (function () {
                  var e = m(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this._params.cancel && this._params.cancel(),
                                  (this._params = void 0);
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
              {
                kind: "method",
                key: "_handleKeyUp",
                value: function (e) {
                  13 === e.keyCode && this._confirm();
                },
              },
              {
                kind: "method",
                key: "_confirm",
                value: (function () {
                  var e = m(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this._params.confirm &&
                                  this._params.confirm(this._value),
                                  this._dismiss();
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
              {
                kind: "method",
                key: "_openedChanged",
                value: function (e) {
                  e.detail.value || (this._params = void 0);
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [o.c, Object(n.c)(s())];
                },
              },
            ],
          };
        },
        n.a
      );
    },
    31: function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return o;
      }),
        r.d(t, "a", function () {
          return a;
        });
      r(5);
      var n = r(73),
        i = r(9),
        o = {
          hostAttributes: { role: "dialog", tabindex: "-1" },
          properties: {
            modal: { type: Boolean, value: !1 },
            __readied: { type: Boolean, value: !1 },
          },
          observers: ["_modalChanged(modal, __readied)"],
          listeners: { tap: "_onDialogClick" },
          ready: function () {
            (this.__prevNoCancelOnOutsideClick = this.noCancelOnOutsideClick),
              (this.__prevNoCancelOnEscKey = this.noCancelOnEscKey),
              (this.__prevWithBackdrop = this.withBackdrop),
              (this.__readied = !0);
          },
          _modalChanged: function (e, t) {
            t &&
              (e
                ? ((this.__prevNoCancelOnOutsideClick = this.noCancelOnOutsideClick),
                  (this.__prevNoCancelOnEscKey = this.noCancelOnEscKey),
                  (this.__prevWithBackdrop = this.withBackdrop),
                  (this.noCancelOnOutsideClick = !0),
                  (this.noCancelOnEscKey = !0),
                  (this.withBackdrop = !0))
                : ((this.noCancelOnOutsideClick =
                    this.noCancelOnOutsideClick &&
                    this.__prevNoCancelOnOutsideClick),
                  (this.noCancelOnEscKey =
                    this.noCancelOnEscKey && this.__prevNoCancelOnEscKey),
                  (this.withBackdrop =
                    this.withBackdrop && this.__prevWithBackdrop)));
          },
          _updateClosingReasonConfirmed: function (e) {
            (this.closingReason = this.closingReason || {}),
              (this.closingReason.confirmed = e);
          },
          _onDialogClick: function (e) {
            for (
              var t = Object(i.a)(e).path, r = 0, n = t.indexOf(this);
              r < n;
              r++
            ) {
              var o = t[r];
              if (
                o.hasAttribute &&
                (o.hasAttribute("dialog-dismiss") ||
                  o.hasAttribute("dialog-confirm"))
              ) {
                this._updateClosingReasonConfirmed(
                  o.hasAttribute("dialog-confirm")
                ),
                  this.close(),
                  e.stopPropagation();
                break;
              }
            }
          },
        },
        a = [n.a, o];
    },
    53: function (e, t, r) {
      "use strict";
      r(5), r(16), r(14);
      var n = r(31),
        i = r(8),
        o = r(7);
      function a() {
        var e = (function (e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style>\n\n      :host {\n        display: block;\n        @apply --layout-relative;\n      }\n\n      :host(.is-scrolled:not(:first-child))::before {\n        content: \'\';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {\n        content: \'\';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      .scrollable {\n        padding: 0 24px;\n\n        @apply --layout-scroll;\n        @apply --paper-dialog-scrollable;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n    </style>\n\n    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">\n      <slot></slot>\n    </div>\n',
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      Object(i.a)({
        _template: Object(o.a)(a()),
        is: "paper-dialog-scrollable",
        properties: { dialogElement: { type: Object } },
        get scrollTarget() {
          return this.$.scrollable;
        },
        ready: function () {
          this._ensureTarget(), this.classList.add("no-padding");
        },
        attached: function () {
          this._ensureTarget(),
            requestAnimationFrame(this.updateScrollState.bind(this));
        },
        updateScrollState: function () {
          this.toggleClass("is-scrolled", this.scrollTarget.scrollTop > 0),
            this.toggleClass(
              "can-scroll",
              this.scrollTarget.offsetHeight < this.scrollTarget.scrollHeight
            ),
            this.toggleClass(
              "scrolled-to-bottom",
              this.scrollTarget.scrollTop + this.scrollTarget.offsetHeight >=
                this.scrollTarget.scrollHeight
            );
        },
        _ensureTarget: function () {
          (this.dialogElement = this.dialogElement || this.parentElement),
            this.dialogElement &&
            this.dialogElement.behaviors &&
            this.dialogElement.behaviors.indexOf(n.b) >= 0
              ? ((this.dialogElement.sizingTarget = this.scrollTarget),
                this.scrollTarget.classList.remove("fit"))
              : this.dialogElement && this.scrollTarget.classList.add("fit");
        },
      });
    },
    56: function (e, t, r) {
      "use strict";
      r(5), r(16), r(14), r(30), r(39);
      var n = document.createElement("template");
      n.setAttribute("style", "display: none;"),
        (n.innerHTML =
          '<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>'),
        document.head.appendChild(n.content);
      var i = r(75),
        o = r(31),
        a = r(8),
        s = r(7);
      function c() {
        var e = (function (e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n    <style include="paper-dialog-shared-styles"></style>\n    <slot></slot>\n',
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      Object(a.a)({
        _template: Object(s.a)(c()),
        is: "paper-dialog",
        behaviors: [o.a, i.a],
        listeners: { "neon-animation-finish": "_onNeonAnimationFinish" },
        _renderOpened: function () {
          this.cancelAnimation(), this.playAnimation("entry");
        },
        _renderClosed: function () {
          this.cancelAnimation(), this.playAnimation("exit");
        },
        _onNeonAnimationFinish: function () {
          this.opened ? this._finishRenderOpened() : this._finishRenderClosed();
        },
      });
      var l = r(60),
        u = r(70),
        d = r(9),
        p = {
          getTabbableNodes: function (e) {
            var t = [];
            return this._collectTabbableNodes(e, t)
              ? u.a._sortByTabIndex(t)
              : t;
          },
          _collectTabbableNodes: function (e, t) {
            if (e.nodeType !== Node.ELEMENT_NODE || !u.a._isVisible(e))
              return !1;
            var r,
              n = e,
              i = u.a._normalizedTabIndex(n),
              o = i > 0;
            i >= 0 && t.push(n),
              (r =
                "content" === n.localName || "slot" === n.localName
                  ? Object(d.a)(n).getDistributedNodes()
                  : Object(d.a)(n.shadowRoot || n.root || n).children);
            for (var a = 0; a < r.length; a++)
              o = this._collectTabbableNodes(r[a], t) || o;
            return o;
          },
        };
      function f(e) {
        return (f =
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
      function h(e, t) {
        return (h =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function m(e) {
        return function () {
          var t,
            r = y(e);
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
            var n = y(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === f(t) || "function" == typeof t)) return t;
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
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var v = customElements.get("paper-dialog"),
        b = {
          get _focusableNodes() {
            return p.getTabbableNodes(this);
          },
        },
        g = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && h(e, t);
          })(r, Object(l["b"])([b], v));
          var t = m(r);
          function r() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
              t.apply(this, arguments)
            );
          }
          return r;
        })();
      customElements.define("ha-paper-dialog", g);
    },
    94: function (e, t, r) {
      "use strict";
      var n = r(55),
        i = (r(124), r(91)),
        o = r(6),
        a = r(12);
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
        var e = u([
          "\n        :host {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n        }\n        .mdc-switch.mdc-switch--checked .mdc-switch__thumb {\n          background-color: var(--switch-checked-button-color);\n          border-color: var(--switch-checked-button-color);\n        }\n        .mdc-switch.mdc-switch--checked .mdc-switch__track {\n          background-color: var(--switch-checked-track-color);\n          border-color: var(--switch-checked-track-color);\n        }\n        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb {\n          background-color: var(--switch-unchecked-button-color);\n          border-color: var(--switch-unchecked-button-color);\n        }\n        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__track {\n          background-color: var(--switch-unchecked-track-color);\n          border-color: var(--switch-unchecked-track-color);\n        }\n        :host(.slotted) .mdc-switch {\n          margin-right: 24px;\n        }\n      ",
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
          '\n      <div class="mdc-switch">\n        <div class="mdc-switch__track"></div>\n        <div\n          class="mdc-switch__thumb-underlay"\n          .ripple="',
          '"\n        >\n          <div class="mdc-switch__thumb">\n            <input\n              type="checkbox"\n              id="basic-switch"\n              class="mdc-switch__native-control"\n              role="switch"\n              @change="',
          '"\n            />\n          </div>\n        </div>\n      </div>\n      <label for="basic-switch"><slot></slot></label>\n    ',
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
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function p(e) {
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
            if (t && ("object" === s(t) || "function" == typeof t)) return t;
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
      function w(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function k(e, t, r) {
        return (k =
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
      function _(e) {
        return (_ = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var E = customElements.get("mwc-switch");
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
        [Object(o.d)("ha-switch")],
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
                t && d(e, t);
            })(i, t);
            var n = p(i);
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
          })();
          return {
            F: r,
            d: [
              {
                kind: "field",
                decorators: [Object(o.f)({ type: Boolean })],
                key: "haptic",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(o.g)("slot")],
                key: "_slot",
                value: void 0,
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function () {
                  var e = this;
                  k(_(r.prototype), "firstUpdated", this).call(this),
                    this.style.setProperty(
                      "--mdc-theme-secondary",
                      "var(--switch-checked-color)"
                    ),
                    this.classList.toggle(
                      "slotted",
                      Boolean(this._slot.assignedNodes().length)
                    ),
                    this.addEventListener("change", function () {
                      var t;
                      e.haptic &&
                        ((t = "light"), Object(a.a)(window, "haptic", t));
                    });
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(o.e)(
                    l(),
                    Object(n.a)({ interactionNode: this }),
                    this._haChangeHandler
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [i.a, Object(o.c)(c())];
                },
              },
              {
                kind: "method",
                key: "_haChangeHandler",
                value: function (e) {
                  this.mdcFoundation.handleChange(e),
                    (this.checked = this.formElement.checked);
                },
              },
            ],
          };
        },
        E
      );
    },
  },
]);
//# sourceMappingURL=chunk.2efa3db34abe2c94f3f1.js.map
