(self.webpackJsonp = self.webpackJsonp || []).push([
  [7],
  {
    178: function (e, t, r) {
      "use strict";
      r.r(t);
      r(33), r(35);
      var n = r(6),
        i = r(49),
        o = r(23),
        a = r(11),
        s = r(13),
        c = (r(18), r(20), r(126), r(127), r(118), r(138), r(116));
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
      function u(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return S(e);
          })(e) ||
          A(e) ||
          D(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function d(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function f(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = e.apply(t, r);
            function a(e) {
              d(o, n, i, a, s, "next", e);
            }
            function s(e) {
              d(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function p() {
        var e = b([
          "\n        :host,\n        paper-card,\n        paper-dropdown-menu {\n          display: block;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-bottom: 16px;\n        }\n        paper-item {\n          width: 450px;\n        }\n        .card-actions {\n          text-align: right;\n        }\n      ",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = b([
          "\n                  <paper-item device=",
          "\n                    >",
          "</paper-item\n                  >\n                ",
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = b([
          "\n                  <paper-item device=",
          "\n                    >",
          "</paper-item\n                  >\n                ",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = b([' <div class="errors">', "</div> "]);
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = b([
          '\n      <paper-card heading="Audio">\n        <div class="card-content">\n          ',
          '\n\n          <paper-dropdown-menu\n            label="Input"\n            @iron-select=',
          '\n          >\n            <paper-listbox\n              slot="dropdown-content"\n              attr-for-selected="device"\n              .selected=',
          "\n            >\n              ",
          '\n            </paper-listbox>\n          </paper-dropdown-menu>\n          <paper-dropdown-menu\n            label="Output"\n            @iron-select=',
          '\n          >\n            <paper-listbox\n              slot="dropdown-content"\n              attr-for-selected="device"\n              .selected=',
          "\n            >\n              ",
          '\n            </paper-listbox>\n          </paper-dropdown-menu>\n        </div>\n        <div class="card-actions">\n          <mwc-button @click=',
          ">Save</mwc-button>\n        </div>\n      </paper-card>\n    ",
        ]);
        return (
          (v = function () {
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
            r = T(e);
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
            var n = T(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === l(t) || "function" == typeof t)) return t;
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
      function O(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function j(e) {
        return e.decorators && e.decorators.length;
      }
      function P(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function _(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function x(e) {
        var t = (function (e, t) {
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
      function D(e, t) {
        if (e) {
          if ("string" == typeof e) return S(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(r)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? S(e, t)
              : void 0
          );
        }
      }
      function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function A(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }
      function C(e, t, r) {
        return (C =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = T(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function T(e) {
        return (T = Object.setPrototypeOf
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
                  if (!j(e)) return r.push(e);
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
                  A(t) ||
                  D(t) ||
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
                r = _(e, "finisher"),
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
              var r = _(e, "finisher"),
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
                  if (P(o.descriptor) || P(i.descriptor)) {
                    if (j(o) || j(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (j(o)) {
                      if (j(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    O(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(E)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-addon-audio")],
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
                t && g(e, t);
            })(i, t);
            var n = w(i);
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
              return (t = n.call.apply(n, [this].concat(o))), e(k(t)), t;
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
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "addon",
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
                key: "_inputDevices",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_outputDevices",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_selectedInput",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_selectedOutput",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(n.e)(
                    v(),
                    this._error ? Object(n.e)(y(), this._error) : "",
                    this._setInputDevice,
                    this._selectedInput,
                    this._inputDevices &&
                      this._inputDevices.map(function (e) {
                        return Object(n.e)(m(), e.device || "", e.name);
                      }),
                    this._setOutputDevice,
                    this._selectedOutput,
                    this._outputDevices &&
                      this._outputDevices.map(function (e) {
                        return Object(n.e)(h(), e.device || "", e.name);
                      }),
                    this._saveSettings
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [a.b, s.a, Object(n.c)(p())];
                },
              },
              {
                kind: "method",
                key: "update",
                value: function (e) {
                  C(T(r.prototype), "update", this).call(this, e),
                    e.has("addon") && this._addonChanged();
                },
              },
              {
                kind: "method",
                key: "_setInputDevice",
                value: function (e) {
                  var t = e.detail.item.getAttribute("device");
                  this._selectedInput = t;
                },
              },
              {
                kind: "method",
                key: "_setOutputDevice",
                value: function (e) {
                  var t = e.detail.item.getAttribute("device");
                  this._selectedOutput = t;
                },
              },
              {
                kind: "method",
                key: "_addonChanged",
                value: (function () {
                  var e = f(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n, i, o;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((this._selectedInput =
                                    null === this.addon.audio_input
                                      ? "default"
                                      : this.addon.audio_input),
                                  (this._selectedOutput =
                                    null === this.addon.audio_output
                                      ? "default"
                                      : this.addon.audio_output),
                                  !this._outputDevices)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt("return");
                              case 4:
                                return (
                                  (t = { device: "default", name: "Default" }),
                                  (e.prev = 5),
                                  (e.next = 8),
                                  Object(c.a)(this.hass)
                                );
                              case 8:
                                (r = e.sent),
                                  (n = r.audio),
                                  (i = Object.keys(n.input).map(function (e) {
                                    return { device: e, name: n.input[e] };
                                  })),
                                  (o = Object.keys(n.output).map(function (e) {
                                    return { device: e, name: n.output[e] };
                                  })),
                                  (this._inputDevices = [t].concat(u(i))),
                                  (this._outputDevices = [t].concat(u(o))),
                                  (e.next = 21);
                                break;
                              case 16:
                                (e.prev = 16),
                                  (e.t0 = e.catch(5)),
                                  (this._error =
                                    "Failed to fetch audio hardware"),
                                  (this._inputDevices = [t]),
                                  (this._outputDevices = [t]);
                              case 21:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[5, 16]]
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
                key: "_saveSettings",
                value: (function () {
                  var e = f(
                    regeneratorRuntime.mark(function e() {
                      var t;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (t = {
                                    audio_input:
                                      "default" === this._selectedInput
                                        ? null
                                        : this._selectedInput,
                                    audio_output:
                                      "default" === this._selectedOutput
                                        ? null
                                        : this._selectedOutput,
                                  }),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  Object(o.h)(this.hass, this.addon.slug, t)
                                );
                              case 5:
                                e.next = 10;
                                break;
                              case 7:
                                (e.prev = 7),
                                  (e.t0 = e.catch(2)),
                                  (this._error =
                                    "Failed to set addon audio device");
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 7]]
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
      ),
        r(139);
      var z,
        R = r(12),
        F = r(140),
        I = function (e) {
          requestAnimationFrame(function () {
            return setTimeout(e, 0);
          });
        };
      function M(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      var U = (function () {
        var e,
          t =
            ((e = regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        z ||
                          (z = Promise.all([r.e(13), r.e(2)]).then(
                            r.bind(null, 177)
                          )),
                        e.abrupt("return", z)
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })),
            function () {
              var t = this,
                r = arguments;
              return new Promise(function (n, i) {
                var o = e.apply(t, r);
                function a(e) {
                  M(o, n, i, a, s, "next", e);
                }
                function s(e) {
                  M(o, n, i, a, s, "throw", e);
                }
                a(void 0);
              });
            });
        return function () {
          return t.apply(this, arguments);
        };
      })();
      function N(e) {
        return (N =
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
      function H(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function B(e, t) {
        return (B =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function L(e) {
        return function () {
          var t,
            r = X(e);
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
            var n = X(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === N(t) || "function" == typeof t)) return t;
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
      function V(e) {
        var t,
          r = J(e.key);
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
      function q(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function W(e) {
        return e.decorators && e.decorators.length;
      }
      function G(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Y(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function J(e) {
        var t = (function (e, t) {
          if ("object" !== N(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== N(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === N(t) ? t : String(t);
      }
      function K(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Q(e, t, r) {
        return (Q =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = X(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function X(e) {
        return (X = Object.setPrototypeOf
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
                      if ("string" == typeof e) return K(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? K(e, t)
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
              var r = J(e.key),
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
                r = Y(e, "finisher"),
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
              var r = Y(e, "finisher"),
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
                  if (G(o.descriptor) || G(i.descriptor)) {
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
                    q(o, i);
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
        [Object(n.d)("ha-code-editor")],
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
                t && B(e, t);
            })(i, t);
            var n = L(i);
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
          })();
          return {
            F: r,
            d: [
              { kind: "field", key: "codemirror", value: void 0 },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "mode",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "autofocus",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "readOnly",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "rtl",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "error",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_value",
                value: function () {
                  return "";
                },
              },
              {
                kind: "set",
                key: "value",
                value: function (e) {
                  this._value = e;
                },
              },
              {
                kind: "get",
                key: "value",
                value: function () {
                  return this.codemirror
                    ? this.codemirror.getValue()
                    : this._value;
                },
              },
              {
                kind: "get",
                key: "hasComments",
                value: function () {
                  return !!this.shadowRoot.querySelector("span.cm-comment");
                },
              },
              {
                kind: "method",
                key: "connectedCallback",
                value: function () {
                  Q(X(r.prototype), "connectedCallback", this).call(this),
                    this.codemirror &&
                      (this.codemirror.refresh(),
                      !1 !== this.autofocus && this.codemirror.focus());
                },
              },
              {
                kind: "method",
                key: "update",
                value: function (e) {
                  Q(X(r.prototype), "update", this).call(this, e),
                    this.codemirror &&
                      (e.has("mode") &&
                        this.codemirror.setOption("mode", this.mode),
                      e.has("autofocus") &&
                        this.codemirror.setOption(
                          "autofocus",
                          !1 !== this.autofocus
                        ),
                      e.has("_value") &&
                        this._value !== this.value &&
                        this.codemirror.setValue(this._value),
                      e.has("rtl") &&
                        (this.codemirror.setOption(
                          "gutters",
                          this._calcGutters()
                        ),
                        this._setScrollBarDirection()),
                      e.has("error") &&
                        this.classList.toggle("error-state", this.error));
                },
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function (e) {
                  Q(X(r.prototype), "firstUpdated", this).call(this, e),
                    this._load();
                },
              },
              {
                kind: "method",
                key: "_load",
                value: (function () {
                  var e,
                    t =
                      ((e = regeneratorRuntime.mark(function e() {
                        var t,
                          r,
                          n,
                          i = this;
                        return regeneratorRuntime.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), U();
                                case 2:
                                  (t = e.sent),
                                    (r = t.codeMirror),
                                    ((n = this.attachShadow({
                                      mode: "open",
                                    })).innerHTML = "\n    <style>\n      ".concat(
                                      t.codeMirrorCss,
                                      "\n      .CodeMirror {\n        height: var(--code-mirror-height, auto);\n        direction: var(--code-mirror-direction, ltr);\n      }\n      .CodeMirror-scroll {\n        max-height: var(--code-mirror-max-height, --code-mirror-height);\n      }\n      .CodeMirror-gutters {\n        border-right: 1px solid var(--paper-input-container-color, var(--secondary-text-color));\n        background-color: var(--paper-dialog-background-color, var(--primary-background-color));\n        transition: 0.2s ease border-right;\n      }\n      :host(.error-state) .CodeMirror-gutters {\n        border-color: var(--error-state-color, red);\n      }\n      .CodeMirror-focused .CodeMirror-gutters {\n        border-right: 2px solid var(--paper-input-container-focus-color, var(--primary-color));\n      }\n      .CodeMirror-linenumber {\n        color: var(--paper-dialog-color, var(--primary-text-color));\n      }\n      .rtl .CodeMirror-vscrollbar {\n        right: auto;\n        left: 0px;\n      }\n      .rtl-gutter {\n        width: 20px;\n      }\n    </style>"
                                    )),
                                    (this.codemirror = r(n, {
                                      value: this._value,
                                      lineNumbers: !0,
                                      tabSize: 2,
                                      mode: this.mode,
                                      autofocus: !1 !== this.autofocus,
                                      viewportMargin: 1 / 0,
                                      readOnly: this.readOnly,
                                      extraKeys: {
                                        Tab: "indentMore",
                                        "Shift-Tab": "indentLess",
                                      },
                                      gutters: this._calcGutters(),
                                    })),
                                    this._setScrollBarDirection(),
                                    this.codemirror.on("changes", function () {
                                      return i._onChange();
                                    });
                                case 9:
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
                            H(o, n, i, a, s, "next", e);
                          }
                          function s(e) {
                            H(o, n, i, a, s, "throw", e);
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
                key: "_onChange",
                value: function () {
                  var e = this.value;
                  e !== this._value &&
                    ((this._value = e),
                    Object(R.a)(this, "value-changed", { value: this._value }));
                },
              },
              {
                kind: "method",
                key: "_calcGutters",
                value: function () {
                  return this.rtl
                    ? ["rtl-gutter", "CodeMirror-linenumbers"]
                    : [];
                },
              },
              {
                kind: "method",
                key: "_setScrollBarDirection",
                value: function () {
                  this.codemirror &&
                    this.codemirror
                      .getWrapperElement()
                      .classList.toggle("rtl", this.rtl);
                },
              },
            ],
          };
        },
        n.b
      );
      function Z() {
        var e = re([" <p>", "</p> "]);
        return (
          (Z = function () {
            return e;
          }),
          e
        );
      }
      function ee() {
        var e = re([
          "\n      ",
          "\n      <ha-code-editor\n        .value=",
          '\n        mode="yaml"\n        .error=',
          "\n        @value-changed=",
          "\n      ></ha-code-editor>\n    ",
        ]);
        return (
          (ee = function () {
            return e;
          }),
          e
        );
      }
      function te() {
        var e = re([""]);
        return (
          (te = function () {
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
        return (ne =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ie(e) {
        return function () {
          var t,
            r = ae(e);
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
            var n = ae(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === he(t) || "function" == typeof t)) return t;
            return oe(e);
          })(this, t);
        };
      }
      function oe(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ae(e) {
        return (ae = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function se(e) {
        var t,
          r = fe(e.key);
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
        var t = (function (e, t) {
          if ("object" !== he(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== he(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === he(t) ? t : String(t);
      }
      function pe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function he(e) {
        return (he =
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
                      if ("string" == typeof e) return pe(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? pe(e, t)
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
                r = de(e, "finisher"),
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
              var r = de(e, "finisher"),
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
        [Object(n.d)("ha-yaml-editor")],
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
                  t && ne(e, t);
              })(i, t);
              var n = ie(i);
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
                return (t = n.call.apply(n, [this].concat(o))), e(oe(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "value",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "defaultValue",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "isValid",
                value: function () {
                  return !0;
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "label",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_yaml",
                value: function () {
                  return "";
                },
              },
              {
                kind: "field",
                decorators: [Object(n.g)("ha-code-editor")],
                key: "_editor",
                value: void 0,
              },
              {
                kind: "method",
                key: "setValue",
                value: function (e) {
                  var t = this;
                  try {
                    this._yaml =
                      e &&
                      !(function (e) {
                        if ("object" !== he(e)) return !1;
                        for (var t in e)
                          if (Object.prototype.hasOwnProperty.call(e, t))
                            return !1;
                        return !0;
                      })(e)
                        ? Object(F.safeDump)(e)
                        : "";
                  } catch (r) {
                    alert("There was an error converting to YAML: ".concat(r));
                  }
                  I(function () {
                    var e;
                    (null === (e = t._editor) || void 0 === e
                      ? void 0
                      : e.codemirror) && t._editor.codemirror.refresh(),
                      I(function () {
                        return Object(R.a)(t, "editor-refreshed");
                      });
                  });
                },
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function () {
                  this.defaultValue && this.setValue(this.defaultValue);
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return void 0 === this._yaml
                    ? Object(n.e)(te())
                    : Object(n.e)(
                        ee(),
                        this.label ? Object(n.e)(Z(), this.label) : "",
                        this._yaml,
                        !1 === this.isValid,
                        this._onChange
                      );
                },
              },
              {
                kind: "method",
                key: "_onChange",
                value: function (e) {
                  e.stopPropagation();
                  var t,
                    r = e.detail.value,
                    n = !0;
                  if (r)
                    try {
                      t = Object(F.safeLoad)(r);
                    } catch (i) {
                      n = !1;
                    }
                  else t = {};
                  (this.value = t),
                    (this.isValid = n),
                    Object(R.a)(this, "value-changed", {
                      value: t,
                      isValid: n,
                    });
                },
              },
            ],
          };
        },
        n.a
      );
      var me = r(106);
      function ye(e) {
        return (ye =
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
      function ve(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function be(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = e.apply(t, r);
            function a(e) {
              ve(o, n, i, a, s, "next", e);
            }
            function s(e) {
              ve(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function ge() {
        var e = Oe([
          "\n        :host {\n          display: block;\n        }\n        paper-card {\n          display: block;\n        }\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-top: 16px;\n        }\n        iron-autogrow-textarea {\n          width: 100%;\n          font-family: monospace;\n        }\n        .syntaxerror {\n          color: var(--google-red-500);\n        }\n      ",
        ]);
        return (
          (ge = function () {
            return e;
          }),
          e
        );
      }
      function we() {
        var e = Oe([' <div class="errors">Invalid YAML</div> ']);
        return (
          (we = function () {
            return e;
          }),
          e
        );
      }
      function ke() {
        var e = Oe([' <div class="errors">', "</div> "]);
        return (
          (ke = function () {
            return e;
          }),
          e
        );
      }
      function Ee() {
        var e = Oe([
          '\n      <paper-card heading="Config">\n        <div class="card-content">\n          <ha-yaml-editor\n            @value-changed=',
          "\n          ></ha-yaml-editor>\n          ",
          "\n          ",
          '\n        </div>\n        <div class="card-actions">\n          <mwc-button class="warning" @click=',
          ">\n            Reset to defaults\n          </mwc-button>\n          <mwc-button\n            @click=",
          "\n            .disabled=",
          "\n          >\n            Save\n          </mwc-button>\n        </div>\n      </paper-card>\n    ",
        ]);
        return (
          (Ee = function () {
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
      function je(e, t) {
        return (je =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Pe(e) {
        return function () {
          var t,
            r = Fe(e);
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
            var n = Fe(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === ye(t) || "function" == typeof t)) return t;
            return _e(e);
          })(this, t);
        };
      }
      function _e(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function xe(e) {
        var t,
          r = Te(e.key);
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
      function De(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Se(e) {
        return e.decorators && e.decorators.length;
      }
      function Ae(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Ce(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Te(e) {
        var t = (function (e, t) {
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
      function ze(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Re(e, t, r) {
        return (Re =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Fe(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function Fe(e) {
        return (Fe = Object.setPrototypeOf
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
                  if (!Se(e)) return r.push(e);
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
                      if ("string" == typeof e) return ze(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? ze(e, t)
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
              var r = Te(e.key),
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
                r = Ce(e, "finisher"),
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
              var r = Ce(e, "finisher"),
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
                  if (Ae(o.descriptor) || Ae(i.descriptor)) {
                    if (Se(o) || Se(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Se(o)) {
                      if (Se(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    De(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(xe)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-addon-config")],
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
                t && je(e, t);
            })(i, t);
            var n = Pe(i);
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
              return (t = n.call.apply(n, [this].concat(o))), e(_e(t)), t;
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
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "addon",
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
                decorators: [Object(n.f)({ type: Boolean })],
                key: "_configHasChanged",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(n.g)("ha-yaml-editor")],
                key: "_editor",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  var e = this._editor,
                    t = !e || e.isValid;
                  return Object(n.e)(
                    Ee(),
                    this._configChanged,
                    this._error ? Object(n.e)(ke(), this._error) : "",
                    t ? "" : Object(n.e)(we()),
                    this._resetTapped,
                    this._saveTapped,
                    !this._configHasChanged || !t
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [a.b, s.a, Object(n.c)(ge())];
                },
              },
              {
                kind: "method",
                key: "updated",
                value: function (e) {
                  Re(Fe(r.prototype), "updated", this).call(this, e),
                    e.has("addon") && this._editor.setValue(this.addon.options);
                },
              },
              {
                kind: "method",
                key: "_configChanged",
                value: function () {
                  (this._configHasChanged = !0), this.requestUpdate();
                },
              },
              {
                kind: "method",
                key: "_resetTapped",
                value: (function () {
                  var e = be(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Object(me.b)(this, {
                                    title: this.addon.name,
                                    text:
                                      "Are you sure you want to reset all your options?",
                                    confirmText: "reset options",
                                  })
                                );
                              case 2:
                                if (e.sent) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return");
                              case 5:
                                return (
                                  (this._error = void 0),
                                  (t = { options: null }),
                                  (e.prev = 7),
                                  (e.next = 10),
                                  Object(o.h)(this.hass, this.addon.slug, t)
                                );
                              case 10:
                                (this._configHasChanged = !1),
                                  (r = {
                                    success: !0,
                                    response: void 0,
                                    path: "options",
                                  }),
                                  Object(R.a)(this, "hass-api-called", r),
                                  (e.next = 18);
                                break;
                              case 15:
                                (e.prev = 15),
                                  (e.t0 = e.catch(7)),
                                  (this._error = "Failed to reset addon configuration, ".concat(
                                    (null === (n = e.t0.body) || void 0 === n
                                      ? void 0
                                      : n.message) || e.t0
                                  ));
                              case 18:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[7, 15]]
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
                key: "_saveTapped",
                value: (function () {
                  var e = be(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (this._error = void 0),
                                  (e.prev = 1),
                                  (t = { options: this._editor.value }),
                                  (e.next = 9);
                                break;
                              case 5:
                                return (
                                  (e.prev = 5),
                                  (e.t0 = e.catch(1)),
                                  (this._error = e.t0),
                                  e.abrupt("return")
                                );
                              case 9:
                                return (
                                  (e.prev = 9),
                                  (e.next = 12),
                                  Object(o.h)(this.hass, this.addon.slug, t)
                                );
                              case 12:
                                (this._configHasChanged = !1),
                                  (r = {
                                    success: !0,
                                    response: void 0,
                                    path: "options",
                                  }),
                                  Object(R.a)(this, "hass-api-called", r),
                                  (e.next = 20);
                                break;
                              case 17:
                                (e.prev = 17),
                                  (e.t1 = e.catch(9)),
                                  (this._error = "Failed to save addon configuration, ".concat(
                                    (null === (n = e.t1.body) || void 0 === n
                                      ? void 0
                                      : n.message) || e.t1
                                  ));
                              case 20:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [
                          [1, 5],
                          [9, 17],
                        ]
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
      ),
        r(25),
        r(166);
      var Ie = r(34),
        Me = r(86),
        Ue = r(38);
      r(50), r(113), r(120);
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
      function He() {
        var e = We([
          "\n        .badge-container {\n          display: inline-block;\n          text-align: center;\n          vertical-align: top;\n        }\n        .label-badge {\n          position: relative;\n          display: block;\n          margin: 0 auto;\n          width: var(--ha-label-badge-size, 2.5em);\n          text-align: center;\n          height: var(--ha-label-badge-size, 2.5em);\n          line-height: var(--ha-label-badge-size, 2.5em);\n          font-size: var(--ha-label-badge-font-size, 1.5em);\n          border-radius: 50%;\n          border: 0.1em solid var(--ha-label-badge-color, var(--primary-color));\n          color: var(--label-badge-text-color, rgb(76, 76, 76));\n\n          white-space: nowrap;\n          background-color: var(--label-badge-background-color, white);\n          background-size: cover;\n          transition: border 0.3s ease-in-out;\n        }\n        .label-badge .value {\n          font-size: 90%;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        .label-badge .value.big {\n          font-size: 70%;\n        }\n        .label-badge .label {\n          position: absolute;\n          bottom: -1em;\n          /* Make the label as wide as container+border. (parent_borderwidth / font-size) */\n          left: -0.2em;\n          right: -0.2em;\n          line-height: 1em;\n          font-size: 0.5em;\n        }\n        .label-badge .label span {\n          box-sizing: border-box;\n          max-width: 100%;\n          display: inline-block;\n          background-color: var(--ha-label-badge-color, var(--primary-color));\n          color: var(--ha-label-badge-label-color, white);\n          border-radius: 1em;\n          padding: 9% 16% 8% 16%; /* mostly apitalized text, not much descenders => bit more top margin */\n          font-weight: 500;\n          overflow: hidden;\n          text-transform: uppercase;\n          text-overflow: ellipsis;\n          transition: background-color 0.3s ease-in-out;\n          text-transform: var(--ha-label-badge-label-text-transform, uppercase);\n        }\n        .label-badge .label.big span {\n          font-size: 90%;\n          padding: 10% 12% 7% 12%; /* push smaller text a bit down to center vertically */\n        }\n        .badge-container .title {\n          margin-top: 1em;\n          font-size: var(--ha-label-badge-title-font-size, 0.9em);\n          width: var(--ha-label-badge-title-width, 5em);\n          font-weight: var(--ha-label-badge-title-font-weight, 400);\n          overflow: hidden;\n          text-overflow: ellipsis;\n          line-height: normal;\n        }\n      ",
        ]);
        return (
          (He = function () {
            return e;
          }),
          e
        );
      }
      function Be() {
        var e = We([' <div class="title">', "</div> "]);
        return (
          (Be = function () {
            return e;
          }),
          e
        );
      }
      function Le() {
        var e = We([
          '\n                <div\n                  class="',
          '"\n                >\n                  <span>',
          "</span>\n                </div>\n              ",
        ]);
        return (
          (Le = function () {
            return e;
          }),
          e
        );
      }
      function $e() {
        var e = We([" <span>", "</span> "]);
        return (
          ($e = function () {
            return e;
          }),
          e
        );
      }
      function Ve() {
        var e = We([' <ha-icon .icon="', '"></ha-icon> ']);
        return (
          (Ve = function () {
            return e;
          }),
          e
        );
      }
      function qe() {
        var e = We([
          '\n      <div class="badge-container">\n        <div class="label-badge" id="badge">\n          <div\n            class="',
          '"\n          >\n            ',
          "\n            ",
          "\n          </div>\n          ",
          "\n        </div>\n        ",
          "\n      </div>\n    ",
        ]);
        return (
          (qe = function () {
            return e;
          }),
          e
        );
      }
      function We(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Ge(e, t) {
        return (Ge =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Ye(e) {
        return function () {
          var t,
            r = it(e);
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
            var n = it(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === Ne(t) || "function" == typeof t)) return t;
            return Je(e);
          })(this, t);
        };
      }
      function Je(e) {
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
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function nt(e, t, r) {
        return (nt =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = it(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function it(e) {
        return (it = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var ot = (function (e, t, r, n) {
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
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return rt(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? rt(e, t)
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
                  if (Ze(o.descriptor) || Ze(i.descriptor)) {
                    if (Xe(o) || Xe(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
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
                t && Ge(e, t);
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
              return (t = n.call.apply(n, [this].concat(o))), e(Je(t)), t;
            }
            return i;
          })();
          return {
            F: r,
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "value",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "icon",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "label",
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
                decorators: [Object(n.f)()],
                key: "image",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(n.e)(
                    qe(),
                    Object(Ie.a)({
                      value: !0,
                      big: Boolean(this.value && this.value.length > 4),
                    }),
                    !this.icon || this.value || this.image
                      ? ""
                      : Object(n.e)(Ve(), this.icon),
                    this.value && !this.image
                      ? Object(n.e)($e(), this.value)
                      : "",
                    this.label
                      ? Object(n.e)(
                          Le(),
                          Object(Ie.a)({
                            label: !0,
                            big: this.label.length > 5,
                          }),
                          this.label
                        )
                      : "",
                    this.description ? Object(n.e)(Be(), this.description) : ""
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [Object(n.c)(He())];
                },
              },
              {
                kind: "method",
                key: "updated",
                value: function (e) {
                  nt(it(r.prototype), "updated", this).call(this, e),
                    e.has("image") &&
                      (this.shadowRoot.getElementById(
                        "badge"
                      ).style.backgroundImage = this.image
                        ? "url(".concat(this.image, ")")
                        : "");
                },
              },
            ],
          };
        },
        n.a
      );
      customElements.define("ha-label-badge", ot);
      r(72), r(94), r(43);
      var at = r(117);
      function st(e) {
        return (st =
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
      function ct(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function lt(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = e.apply(t, r);
            function a(e) {
              ct(o, n, i, a, s, "next", e);
            }
            function s(e) {
              ct(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function ut() {
        var e = Vt([
          "\n        :host {\n          display: block;\n        }\n        paper-card {\n          display: block;\n          margin-bottom: 16px;\n        }\n        paper-card.warning {\n          background-color: var(--google-red-500);\n          color: white;\n          --paper-card-header-color: white;\n        }\n        paper-card.warning mwc-button {\n          --mdc-theme-primary: white !important;\n        }\n        .warning {\n          color: var(--google-red-500);\n          --mdc-theme-primary: var(--google-red-500);\n        }\n        .light-color {\n          color: var(--secondary-text-color);\n        }\n        .addon-header {\n          font-size: 24px;\n          color: var(--paper-card-header-color, --primary-text-color);\n        }\n        .addon-version {\n          float: right;\n          font-size: 15px;\n          vertical-align: middle;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-bottom: 16px;\n        }\n        .description {\n          margin-bottom: 16px;\n        }\n        .logo img {\n          max-height: 60px;\n          margin: 16px 0;\n          display: block;\n        }\n        .state {\n          display: flex;\n          margin: 33px 0;\n        }\n        .state div {\n          width: 180px;\n          display: inline-block;\n        }\n        .state iron-icon {\n          width: 16px;\n          height: 16px;\n          color: var(--secondary-text-color);\n        }\n        ha-switch {\n          display: flex;\n        }\n        iron-icon.running {\n          color: var(--paper-green-400);\n        }\n        iron-icon.stopped {\n          color: var(--google-red-300);\n        }\n        ha-call-api-button {\n          font-weight: 500;\n          color: var(--primary-color);\n        }\n        .right {\n          float: right;\n        }\n        ha-markdown img {\n          max-width: 100%;\n        }\n        protection-enable mwc-button {\n          --mdc-theme-primary: white;\n        }\n        .description a,\n        ha-markdown a {\n          color: var(--primary-color);\n        }\n        .red {\n          --ha-label-badge-color: var(--label-badge-red, #df4c1e);\n        }\n        .blue {\n          --ha-label-badge-color: var(--label-badge-blue, #039be5);\n        }\n        .green {\n          --ha-label-badge-color: var(--label-badge-green, #0da035);\n        }\n        .yellow {\n          --ha-label-badge-color: var(--label-badge-yellow, #f4b400);\n        }\n        .security {\n          margin-bottom: 16px;\n        }\n        .card-actions {\n          display: flow-root;\n        }\n        .security h3 {\n          margin-bottom: 8px;\n          font-weight: normal;\n        }\n        .security ha-label-badge {\n          cursor: pointer;\n          margin-right: 4px;\n          --iron-icon-height: 45px;\n        }\n      ",
        ]);
        return (
          (ut = function () {
            return e;
          }),
          e
        );
      }
      function dt() {
        var e = Vt([
          '\n            <paper-card>\n              <div class="card-content">\n                <ha-markdown\n                  .content=',
          "\n                ></ha-markdown>\n              </div>\n            </paper-card>\n          ",
        ]);
        return (
          (dt = function () {
            return e;
          }),
          e
        );
      }
      function ft() {
        var e = Vt([
          '\n                      <p class="warning">\n                        This add-on is not available on your system.\n                      </p>\n                    ',
        ]);
        return (
          (ft = function () {
            return e;
          }),
          e
        );
      }
      function pt() {
        var e = Vt([
          "\n                ",
          "\n                <ha-progress-button\n                  .disabled=",
          "\n                  .progress=",
          "\n                  @click=",
          "\n                >\n                  Install\n                </ha-progress-button>\n              ",
        ]);
        return (
          (pt = function () {
            return e;
          }),
          e
        );
      }
      function ht() {
        var e = Vt([
          '\n                      <mwc-button class="right" @click=',
          ">\n                        Open web UI\n                      </mwc-button>\n                    ",
        ]);
        return (
          (ht = function () {
            return e;
          }),
          e
        );
      }
      function mt() {
        var e = Vt([
          "\n                      <a\n                        href=",
          '\n                        tabindex="-1"\n                        target="_blank"\n                        class="right"\n                        rel="noopener"\n                      >\n                        <mwc-button>\n                          Open web UI\n                        </mwc-button>\n                      </a>\n                    ',
        ]);
        return (
          (mt = function () {
            return e;
          }),
          e
        );
      }
      function yt() {
        var e = Vt([
          "\n                      <ha-call-api-button\n                        .hass=",
          '\n                        .path="hassio/addons/',
          '/start"\n                      >\n                        Start\n                      </ha-call-api-button>\n                    ',
        ]);
        return (
          (yt = function () {
            return e;
          }),
          e
        );
      }
      function vt() {
        var e = Vt([
          '\n                      <ha-call-api-button\n                        class="warning"\n                        .hass=',
          '\n                        .path="hassio/addons/',
          '/restart"\n                      >\n                        Restart\n                      </ha-call-api-button>\n                      <ha-call-api-button\n                        class="warning"\n                        .hass=',
          '\n                        .path="hassio/addons/',
          '/stop"\n                      >\n                        Stop\n                      </ha-call-api-button>\n                    ',
        ]);
        return (
          (vt = function () {
            return e;
          }),
          e
        );
      }
      function bt() {
        var e = Vt([
          '\n                      <ha-call-api-button\n                        class="warning"\n                        .hass=',
          '\n                        .path="hassio/addons/',
          '/rebuild"\n                      >\n                        Rebuild\n                      </ha-call-api-button>\n                    ',
        ]);
        return (
          (bt = function () {
            return e;
          }),
          e
        );
      }
      function gt() {
        var e = Vt([
          '\n                <mwc-button class="warning" @click=',
          ">\n                  Uninstall\n                </mwc-button>\n                ",
          "\n                ",
          "\n                ",
          "\n                ",
          "\n              ",
        ]);
        return (
          (gt = function () {
            return e;
          }),
          e
        );
      }
      function wt() {
        var e = Vt([' <div class="errors">', "</div> "]);
        return (
          (wt = function () {
            return e;
          }),
          e
        );
      }
      function kt() {
        var e = Vt([
          '\n                      <div class="state">\n                        <div>\n                          Protection mode\n                          <span>\n                            <iron-icon icon="hassio:information"></iron-icon>\n                            <paper-tooltip>\n                              Grant the add-on elevated system access.\n                            </paper-tooltip>\n                          </span>\n                        </div>\n                        <ha-switch\n                          @change=',
          "\n                          .checked=",
          "\n                          haptic\n                        ></ha-switch>\n                      </div>\n                    ",
        ]);
        return (
          (kt = function () {
            return e;
          }),
          e
        );
      }
      function Et() {
        var e = Vt([
          "\n                              <span>\n                                This option requires Home Assistant 0.92 or\n                                later.\n                              </span>\n                            ",
        ]);
        return (
          (Et = function () {
            return e;
          }),
          e
        );
      }
      function Ot() {
        var e = Vt([
          '\n                      <div class="state">\n                        <div>Show in sidebar</div>\n                        <ha-switch\n                          @change=',
          "\n                          .checked=",
          "\n                          .disabled=",
          "\n                          haptic\n                        ></ha-switch>\n                        ",
          "\n                      </div>\n                    ",
        ]);
        return (
          (Ot = function () {
            return e;
          }),
          e
        );
      }
      function jt() {
        var e = Vt([
          '\n                <div class="state">\n                  <div>Start on boot</div>\n                  <ha-switch\n                    @change=',
          "\n                    .checked=",
          '\n                    haptic\n                  ></ha-switch>\n                </div>\n                <div class="state">\n                  <div>Auto update</div>\n                  <ha-switch\n                    @change=',
          "\n                    .checked=",
          "\n                    haptic\n                  ></ha-switch>\n                </div>\n                ",
          "\n                ",
          "\n              ",
        ]);
        return (
          (jt = function () {
            return e;
          }),
          e
        );
      }
      function Pt() {
        var e = Vt([
          "\n                  <ha-label-badge\n                    @click=",
          '\n                    id="ingress"\n                    icon="hassio:cursor-default-click-outline"\n                    label="ingress"\n                    description=""\n                  ></ha-label-badge>\n                ',
        ]);
        return (
          (Pt = function () {
            return e;
          }),
          e
        );
      }
      function _t() {
        var e = Vt([
          "\n                  <ha-label-badge\n                    @click=",
          '\n                    id="auth_api"\n                    icon="hassio:key"\n                    label="auth"\n                    description=""\n                  ></ha-label-badge>\n                ',
        ]);
        return (
          (_t = function () {
            return e;
          }),
          e
        );
      }
      function xt() {
        var e = Vt([
          "\n                  <ha-label-badge\n                    @click=",
          "\n                    class=",
          '\n                    id="apparmor"\n                    icon="hassio:shield"\n                    label="apparmor"\n                    description=""\n                  ></ha-label-badge>\n                ',
        ]);
        return (
          (xt = function () {
            return e;
          }),
          e
        );
      }
      function Dt() {
        var e = Vt([
          "\n                  <ha-label-badge\n                    @click=",
          '\n                    id="host_pid"\n                    icon="hassio:pound"\n                    label="host pid"\n                    description=""\n                  ></ha-label-badge>\n                ',
        ]);
        return (
          (Dt = function () {
            return e;
          }),
          e
        );
      }
      function St() {
        var e = Vt([
          "\n                  <ha-label-badge\n                    @click=",
          '\n                    id="docker_api"\n                    icon="hassio:docker"\n                    label="docker"\n                    description=""\n                  ></ha-label-badge>\n                ',
        ]);
        return (
          (St = function () {
            return e;
          }),
          e
        );
      }
      function At() {
        var e = Vt([
          "\n                  <ha-label-badge\n                    @click=",
          '\n                    id="hassio_api"\n                    icon="hassio:home-assistant"\n                    label="hassio"\n                    .description=',
          "\n                  ></ha-label-badge>\n                ",
        ]);
        return (
          (At = function () {
            return e;
          }),
          e
        );
      }
      function Ct() {
        var e = Vt([
          "\n                  <ha-label-badge\n                    @click=",
          '\n                    id="homeassistant_api"\n                    icon="hassio:home-assistant"\n                    label="hass"\n                    description=""\n                  ></ha-label-badge>\n                ',
        ]);
        return (
          (Ct = function () {
            return e;
          }),
          e
        );
      }
      function Tt() {
        var e = Vt([
          "\n                  <ha-label-badge\n                    @click=",
          '\n                    id="full_access"\n                    icon="hassio:chip"\n                    label="hardware"\n                    description=""\n                  ></ha-label-badge>\n                ',
        ]);
        return (
          (Tt = function () {
            return e;
          }),
          e
        );
      }
      function zt() {
        var e = Vt([
          "\n                  <ha-label-badge\n                    @click=",
          '\n                    id="host_network"\n                    icon="hassio:network"\n                    label="host"\n                    description=""\n                  ></ha-label-badge>\n                ',
        ]);
        return (
          (zt = function () {
            return e;
          }),
          e
        );
      }
      function Rt() {
        var e = Vt([
          '\n                <a\n                  href="',
          '"\n                  target="_blank"\n                  class="logo"\n                  rel="noreferrer"\n                >\n                  <img src="/api/hassio/addons/',
          '/logo" />\n                </a>\n              ',
        ]);
        return (
          (Rt = function () {
            return e;
          }),
          e
        );
      }
      function Ft() {
        var e = Vt([" ", " "]);
        return (
          (Ft = function () {
            return e;
          }),
          e
        );
      }
      function It() {
        var e = Vt([
          '\n                          <iron-icon\n                            title="Add-on is stopped"\n                            class="stopped"\n                            icon="hassio:circle"\n                          ></iron-icon>\n                        ',
        ]);
        return (
          (It = function () {
            return e;
          }),
          e
        );
      }
      function Mt() {
        var e = Vt([
          '\n                          <iron-icon\n                            title="Add-on is running"\n                            class="running"\n                            icon="hassio:circle"\n                          ></iron-icon>\n                        ',
        ]);
        return (
          (Mt = function () {
            return e;
          }),
          e
        );
      }
      function Ut() {
        var e = Vt([
          "\n                    ",
          "\n                    ",
          "\n                  ",
        ]);
        return (
          (Ut = function () {
            return e;
          }),
          e
        );
      }
      function Nt() {
        var e = Vt([
          '\n        <paper-card heading="Warning: Protection mode is disabled!" class="warning">\n          <div class="card-content">\n            Protection mode on this add-on is disabled! This gives the add-on full access to the entire system, which adds security risks, and could damage your system when used incorrectly. Only disable the protection mode if you know, need AND trust the source of this add-on.\n          </div>\n          <div class="card-actions protection-enable">\n              <mwc-button @click=',
          ">Enable Protection mode</mwc-button>\n            </div>\n          </div>\n        </paper-card>\n      ",
        ]);
        return (
          (Nt = function () {
            return e;
          }),
          e
        );
      }
      function Ht() {
        var e = Vt([
          "\n                      <mwc-button @click=",
          ">\n                        Changelog\n                      </mwc-button>\n                    ",
        ]);
        return (
          (Ht = function () {
            return e;
          }),
          e
        );
      }
      function Bt() {
        var e = Vt([
          "\n                      <p>\n                        This update is no longer compatible with your system.\n                      </p>\n                    ",
        ]);
        return (
          (Bt = function () {
            return e;
          }),
          e
        );
      }
      function Lt() {
        var e = Vt([
          '\n            <paper-card heading="Update available! 🎉">\n              <div class="card-content">\n                <hassio-card-content\n                  .hass=',
          '\n                  .title="',
          " ",
          ' is available"\n                  .description="You are currently running version ',
          '"\n                  icon="hassio:arrow-up-bold-circle"\n                  iconClass="update"\n                ></hassio-card-content>\n                ',
          '\n              </div>\n              <div class="card-actions">\n                <ha-call-api-button\n                  .hass=',
          "\n                  .disabled=",
          '\n                  path="hassio/addons/',
          '/update"\n                >\n                  Update\n                </ha-call-api-button>\n                ',
          "\n              </div>\n            </paper-card>\n          ",
        ]);
        return (
          (Lt = function () {
            return e;
          }),
          e
        );
      }
      function $t() {
        var e = Vt([
          "\n      ",
          "\n      ",
          '\n\n      <paper-card>\n        <div class="card-content">\n          <div class="addon-header">\n            ',
          '\n            <div class="addon-version light-color">\n              ',
          '\n            </div>\n          </div>\n          <div class="description light-color">\n            ',
          '.<br />\n            Visit\n            <a href="',
          '" target="_blank" rel="noreferrer">\n              ',
          " page</a\n            >\n            for details.\n          </div>\n          ",
          '\n          <div class="security">\n            <ha-label-badge\n              class=',
          "\n              @click=",
          '\n              id="stage"\n              .icon=',
          '\n              label="stage"\n              description=""\n            ></ha-label-badge>\n            <ha-label-badge\n              class=',
          "\n              @click=",
          '\n              id="rating"\n              .value=',
          '\n              label="rating"\n              description=""\n            ></ha-label-badge>\n            ',
          "\n            ",
          "\n            ",
          "\n            ",
          "\n            ",
          "\n            ",
          "\n            ",
          "\n            ",
          "\n            ",
          "\n          </div>\n\n          ",
          "\n          ",
          '\n        </div>\n        <div class="card-actions">\n          ',
          "\n        </div>\n      </paper-card>\n\n      ",
          "\n    ",
        ]);
        return (
          ($t = function () {
            return e;
          }),
          e
        );
      }
      function Vt(e, t) {
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
      function Wt(e) {
        return function () {
          var t,
            r = Yt(e);
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
            var n = Yt(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === st(t) || "function" == typeof t)) return t;
            return Gt(e);
          })(this, t);
        };
      }
      function Gt(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Yt(e) {
        return (Yt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Jt(e) {
        var t,
          r = er(e.key);
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
      function Kt(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Qt(e) {
        return e.decorators && e.decorators.length;
      }
      function Xt(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Zt(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function er(e) {
        var t = (function (e, t) {
          if ("object" !== st(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== st(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === st(t) ? t : String(t);
      }
      function tr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var rr = {
          stable: "mdi:check-circle",
          experimental: "mdi:flask",
          deprecated: "mdi:exclamation-thick",
        },
        nr = {
          stage: {
            title: "Add-on Stage",
            description: "Add-ons can have one of three stages:\n\n<ha-icon icon='"
              .concat(
                rr.stable,
                "'></ha-icon>**Stable**: These are add-ons ready to be used in production.\n<ha-icon icon='"
              )
              .concat(
                rr.experimental,
                "'></ha-icon>**Experimental**: These may contain bugs, and may be unfinished.\n<ha-icon icon='"
              )
              .concat(
                rr.deprecated,
                "'></ha-icon>**Deprecated**: These add-ons will no longer recieve any updates."
              ),
          },
          rating: {
            title: "Add-on Security Rating",
            description:
              "Hass.io provides a security rating to each of the add-ons, which indicates the risks involved when using this add-on. The more access an add-on requires on your system, the lower the score, thus raising the possible security risks.\n\nA score is on a scale from 1 to 6. Where 1 is the lowest score (considered the most insecure and highest risk) and a score of 6 is the highest score (considered the most secure and lowest risk).",
          },
          host_network: {
            title: "Host Network",
            description:
              "Add-ons usually run in their own isolated network layer, which prevents them from accessing the network of the host operating system. In some cases, this network isolation can limit add-ons in providing their services and therefore, the isolation can be lifted by the add-on author, giving the add-on full access to the network capabilities of the host machine. This gives the add-on more networking capabilities but lowers the security, hence, the security rating of the add-on will be lowered when this option is used by the add-on.",
          },
          homeassistant_api: {
            title: "Home Assistant API Access",
            description:
              "This add-on is allowed to access your running Home Assistant instance directly via the Home Assistant API. This mode handles authentication for the add-on as well, which enables an add-on to interact with Home Assistant without the need for additional authentication tokens.",
          },
          full_access: {
            title: "Full Hardware Access",
            description:
              "This add-on is given full access to the hardware of your system, by request of the add-on author. Access is comparable to the privileged mode in Docker. Since this opens up possible security risks, this feature impacts the add-on security score negatively.\n\nThis level of access is not granted automatically and needs to be confirmed by you. To do this, you need to disable the protection mode on the add-on manually. Only disable the protection mode if you know, need AND trust the source of this add-on.",
          },
          hassio_api: {
            title: "Hass.io API Access",
            description:
              "The add-on was given access to the Hass.io API, by request of the add-on author. By default, the add-on can access general version information of your system. When the add-on requests 'manager' or 'admin' level access to the API, it will gain access to control multiple parts of your Hass.io system. This permission is indicated by this badge and will impact the security score of the addon negatively.",
          },
          docker_api: {
            title: "Full Docker Access",
            description:
              "The add-on author has requested the add-on to have management access to the Docker instance running on your system. This mode gives the add-on full access and control to your entire Hass.io system, which adds security risks, and could damage your system when misused. Therefore, this feature impacts the add-on security score negatively.\n\nThis level of access is not granted automatically and needs to be confirmed by you. To do this, you need to disable the protection mode on the add-on manually. Only disable the protection mode if you know, need AND trust the source of this add-on.",
          },
          host_pid: {
            title: "Host Processes Namespace",
            description:
              "Usually, the processes the add-on runs, are isolated from all other system processes. The add-on author has requested the add-on to have access to the system processes running on the host system instance, and allow the add-on to spawn processes on the host system as well. This mode gives the add-on full access and control to your entire Hass.io system, which adds security risks, and could damage your system when misused. Therefore, this feature impacts the add-on security score negatively.\n\nThis level of access is not granted automatically and needs to be confirmed by you. To do this, you need to disable the protection mode on the add-on manually. Only disable the protection mode if you know, need AND trust the source of this add-on.",
          },
          apparmor: {
            title: "AppArmor",
            description:
              "AppArmor ('Application Armor') is a Linux kernel security module that restricts add-ons capabilities like network access, raw socket access, and permission to read, write, or execute specific files.\n\nAdd-on authors can provide their security profiles, optimized for the add-on, or request it to be disabled. If AppArmor is disabled, it will raise security risks and therefore, has a negative impact on the security score of the add-on.",
          },
          auth_api: {
            title: "Home Assistant Authentication",
            description:
              "An add-on can authenticate users against Home Assistant, allowing add-ons to give users the possibility to log into applications running inside add-ons, using their Home Assistant username/password. This badge indicates if the add-on author requests this capability.",
          },
          ingress: {
            title: "Ingress",
            description:
              "This add-on is using Ingress to embed its interface securely into Home Assistant.",
          },
        };
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
                  if (!Qt(e)) return r.push(e);
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
                      if ("string" == typeof e) return tr(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? tr(e, t)
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
              var r = er(e.key),
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
                r = Zt(e, "finisher"),
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
              var r = Zt(e, "finisher"),
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
                  if (Xt(o.descriptor) || Xt(i.descriptor)) {
                    if (Qt(o) || Qt(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Qt(o)) {
                      if (Qt(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Kt(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Jt)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-addon-info")],
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
              var n = Wt(i);
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
                return (t = n.call.apply(n, [this].concat(o))), e(Gt(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "narrow",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "addon",
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
                decorators: [Object(n.f)({ type: Boolean })],
                key: "_installing",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return Object(n.e)(
                    $t(),
                    this._computeUpdateAvailable
                      ? Object(n.e)(
                          Lt(),
                          this.hass,
                          this.addon.name,
                          this.addon.version_latest,
                          this.addon.version,
                          this.addon.available ? "" : Object(n.e)(Bt()),
                          this.hass,
                          !this.addon.available,
                          this.addon.slug,
                          this.addon.changelog
                            ? Object(n.e)(Ht(), this._openChangelog)
                            : ""
                        )
                      : "",
                    this.addon.protected
                      ? ""
                      : Object(n.e)(Nt(), this._protectionToggled),
                    this.narrow ? "" : this.addon.name,
                    this.addon.version
                      ? Object(n.e)(
                          Ut(),
                          this.addon.version,
                          this._computeIsRunning
                            ? Object(n.e)(Mt())
                            : Object(n.e)(It())
                        )
                      : Object(n.e)(Ft(), this.addon.version_latest),
                    this.addon.description,
                    this.addon.url,
                    this.addon.name,
                    this.addon.logo
                      ? Object(n.e)(Rt(), this.addon.url, this.addon.slug)
                      : "",
                    Object(Ie.a)({
                      green: "stable" === this.addon.stage,
                      yellow: "experimental" === this.addon.stage,
                      red: "deprecated" === this.addon.stage,
                    }),
                    this._showMoreInfo,
                    rr[this.addon.stage],
                    Object(Ie.a)({
                      green: [5, 6].includes(Number(this.addon.rating)),
                      yellow: [3, 4].includes(Number(this.addon.rating)),
                      red: [1, 2].includes(Number(this.addon.rating)),
                    }),
                    this._showMoreInfo,
                    this.addon.rating,
                    this.addon.host_network
                      ? Object(n.e)(zt(), this._showMoreInfo)
                      : "",
                    this.addon.full_access
                      ? Object(n.e)(Tt(), this._showMoreInfo)
                      : "",
                    this.addon.homeassistant_api
                      ? Object(n.e)(Ct(), this._showMoreInfo)
                      : "",
                    this._computeHassioApi
                      ? Object(n.e)(
                          At(),
                          this._showMoreInfo,
                          this.addon.hassio_role
                        )
                      : "",
                    this.addon.docker_api
                      ? Object(n.e)(St(), this._showMoreInfo)
                      : "",
                    this.addon.host_pid
                      ? Object(n.e)(Dt(), this._showMoreInfo)
                      : "",
                    this.addon.apparmor
                      ? Object(n.e)(
                          xt(),
                          this._showMoreInfo,
                          this._computeApparmorClassName
                        )
                      : "",
                    this.addon.auth_api
                      ? Object(n.e)(_t(), this._showMoreInfo)
                      : "",
                    this.addon.ingress
                      ? Object(n.e)(Pt(), this._showMoreInfo)
                      : "",
                    this.addon.version
                      ? Object(n.e)(
                          jt(),
                          this._startOnBootToggled,
                          "auto" === this.addon.boot,
                          this._autoUpdateToggled,
                          this.addon.auto_update,
                          this.addon.ingress
                            ? Object(n.e)(
                                Ot(),
                                this._panelToggled,
                                this.addon.ingress_panel,
                                this._computeCannotIngressSidebar,
                                this._computeCannotIngressSidebar
                                  ? Object(n.e)(Et())
                                  : ""
                              )
                            : "",
                          this._computeUsesProtectedOptions
                            ? Object(n.e)(
                                kt(),
                                this._protectionToggled,
                                this.addon.protected
                              )
                            : ""
                        )
                      : "",
                    this._error ? Object(n.e)(wt(), this._error) : "",
                    this.addon.version
                      ? Object(n.e)(
                          gt(),
                          this._uninstallClicked,
                          this.addon.build
                            ? Object(n.e)(bt(), this.hass, this.addon.slug)
                            : "",
                          this._computeIsRunning
                            ? Object(n.e)(
                                vt(),
                                this.hass,
                                this.addon.slug,
                                this.hass,
                                this.addon.slug
                              )
                            : Object(n.e)(yt(), this.hass, this.addon.slug),
                          this._computeShowWebUI
                            ? Object(n.e)(mt(), this._pathWebui)
                            : "",
                          this._computeShowIngressUI
                            ? Object(n.e)(ht(), this._openIngress)
                            : ""
                        )
                      : Object(n.e)(
                          pt(),
                          this.addon.available ? "" : Object(n.e)(ft()),
                          !this.addon.available || this._installing,
                          this._installing,
                          this._installClicked
                        ),
                    this.addon.long_description
                      ? Object(n.e)(dt(), this.addon.long_description)
                      : ""
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [a.b, s.a, Object(n.c)(ut())];
                },
              },
              {
                kind: "get",
                key: "_computeHassioApi",
                value: function () {
                  return (
                    this.addon.hassio_api &&
                    ("manager" === this.addon.hassio_role ||
                      "admin" === this.addon.hassio_role)
                  );
                },
              },
              {
                kind: "get",
                key: "_computeApparmorClassName",
                value: function () {
                  return "profile" === this.addon.apparmor
                    ? "green"
                    : "disable" === this.addon.apparmor
                    ? "red"
                    : "";
                },
              },
              {
                kind: "method",
                key: "_showMoreInfo",
                value: function (e) {
                  var t = e.target.getAttribute("id");
                  Object(at.a)(this, {
                    title: nr[t].title,
                    content: nr[t].description,
                  });
                },
              },
              {
                kind: "get",
                key: "_computeIsRunning",
                value: function () {
                  var e;
                  return (
                    "started" ===
                    (null === (e = this.addon) || void 0 === e
                      ? void 0
                      : e.state)
                  );
                },
              },
              {
                kind: "get",
                key: "_computeUpdateAvailable",
                value: function () {
                  return (
                    this.addon &&
                    !this.addon.detached &&
                    this.addon.version &&
                    this.addon.version !== this.addon.version_latest
                  );
                },
              },
              {
                kind: "get",
                key: "_pathWebui",
                value: function () {
                  return (
                    this.addon.webui &&
                    this.addon.webui.replace(
                      "[HOST]",
                      document.location.hostname
                    )
                  );
                },
              },
              {
                kind: "get",
                key: "_computeShowWebUI",
                value: function () {
                  return (
                    !this.addon.ingress &&
                    this.addon.webui &&
                    this._computeIsRunning
                  );
                },
              },
              {
                kind: "method",
                key: "_openIngress",
                value: function () {
                  Object(Ue.a)(
                    this,
                    "/hassio/ingress/".concat(this.addon.slug)
                  );
                },
              },
              {
                kind: "get",
                key: "_computeShowIngressUI",
                value: function () {
                  return this.addon.ingress && this._computeIsRunning;
                },
              },
              {
                kind: "get",
                key: "_computeCannotIngressSidebar",
                value: function () {
                  return (
                    !this.addon.ingress ||
                    !Object(Me.a)(this.hass.config.version, 0, 92)
                  );
                },
              },
              {
                kind: "get",
                key: "_computeUsesProtectedOptions",
                value: function () {
                  return (
                    this.addon.docker_api ||
                    this.addon.full_access ||
                    this.addon.host_pid
                  );
                },
              },
              {
                kind: "method",
                key: "_startOnBootToggled",
                value: (function () {
                  var e = lt(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (t = {
                                    boot:
                                      "auto" === this.addon.boot
                                        ? "manual"
                                        : "auto",
                                  }),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  Object(o.h)(this.hass, this.addon.slug, t)
                                );
                              case 5:
                                (r = {
                                  success: !0,
                                  response: void 0,
                                  path: "option",
                                }),
                                  Object(R.a)(this, "hass-api-called", r),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(2)),
                                  (this._error = "Failed to set addon option, ".concat(
                                    (null === (n = e.t0.body) || void 0 === n
                                      ? void 0
                                      : n.message) || e.t0
                                  ));
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 9]]
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
                key: "_autoUpdateToggled",
                value: (function () {
                  var e = lt(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (t = {
                                    auto_update: !this.addon.auto_update,
                                  }),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  Object(o.h)(this.hass, this.addon.slug, t)
                                );
                              case 5:
                                (r = {
                                  success: !0,
                                  response: void 0,
                                  path: "option",
                                }),
                                  Object(R.a)(this, "hass-api-called", r),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(2)),
                                  (this._error = "Failed to set addon option, ".concat(
                                    (null === (n = e.t0.body) || void 0 === n
                                      ? void 0
                                      : n.message) || e.t0
                                  ));
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 9]]
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
                key: "_protectionToggled",
                value: (function () {
                  var e = lt(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (t = { protected: !this.addon.protected }),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  Object(o.i)(this.hass, this.addon.slug, t)
                                );
                              case 5:
                                (r = {
                                  success: !0,
                                  response: void 0,
                                  path: "security",
                                }),
                                  Object(R.a)(this, "hass-api-called", r),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(2)),
                                  (this._error = "Failed to set addon security option, ".concat(
                                    (null === (n = e.t0.body) || void 0 === n
                                      ? void 0
                                      : n.message) || e.t0
                                  ));
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 9]]
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
                key: "_panelToggled",
                value: (function () {
                  var e = lt(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (t = {
                                    ingress_panel: !this.addon.ingress_panel,
                                  }),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  Object(o.h)(this.hass, this.addon.slug, t)
                                );
                              case 5:
                                (r = {
                                  success: !0,
                                  response: void 0,
                                  path: "option",
                                }),
                                  Object(R.a)(this, "hass-api-called", r),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(2)),
                                  (this._error = "Failed to set addon option, ".concat(
                                    (null === (n = e.t0.body) || void 0 === n
                                      ? void 0
                                      : n.message) || e.t0
                                  ));
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 9]]
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
                key: "_openChangelog",
                value: (function () {
                  var e = lt(
                    regeneratorRuntime.mark(function e() {
                      var t, r;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  Object(o.a)(this.hass, this.addon.slug)
                                );
                              case 4:
                                (t = e.sent),
                                  Object(at.a)(this, {
                                    title: "Changelog",
                                    content: t,
                                  }),
                                  (e.next = 11);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(1)),
                                  (this._error = "Failed to get addon changelog, ".concat(
                                    (null === (r = e.t0.body) || void 0 === r
                                      ? void 0
                                      : r.message) || e.t0
                                  ));
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 8]]
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
                key: "_installClicked",
                value: (function () {
                  var e = lt(
                    regeneratorRuntime.mark(function e() {
                      var t, r;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (this._installing = !0),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  Object(o.f)(this.hass, this.addon.slug)
                                );
                              case 5:
                                (t = {
                                  success: !0,
                                  response: void 0,
                                  path: "install",
                                }),
                                  Object(R.a)(this, "hass-api-called", t),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(2)),
                                  (this._error = "Failed to install addon, ".concat(
                                    (null === (r = e.t0.body) || void 0 === r
                                      ? void 0
                                      : r.message) || e.t0
                                  ));
                              case 12:
                                this._installing = !1;
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 9]]
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
                key: "_uninstallClicked",
                value: (function () {
                  var e = lt(
                    regeneratorRuntime.mark(function e() {
                      var t, r;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  confirm(
                                    "Are you sure you want to uninstall this add-on?"
                                  )
                                ) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                return (
                                  (this._error = void 0),
                                  (e.prev = 3),
                                  (e.next = 6),
                                  Object(o.j)(this.hass, this.addon.slug)
                                );
                              case 6:
                                (t = {
                                  success: !0,
                                  response: void 0,
                                  path: "uninstall",
                                }),
                                  Object(R.a)(this, "hass-api-called", t),
                                  (e.next = 13);
                                break;
                              case 10:
                                (e.prev = 10),
                                  (e.t0 = e.catch(3)),
                                  (this._error = "Failed to uninstall addon, ".concat(
                                    (null === (r = e.t0.body) || void 0 === r
                                      ? void 0
                                      : r.message) || e.t0
                                  ));
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 10]]
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
      ),
        r(68),
        r(119);
      function ir(e) {
        return (ir =
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
      function or() {
        var e = ur([
          "\n        :host,\n        paper-card {\n          display: block;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-bottom: 16px;\n        }\n      ",
        ]);
        return (
          (or = function () {
            return e;
          }),
          e
        );
      }
      function ar() {
        var e = ur(["<loading-screen></loading-screen>"]);
        return (
          (ar = function () {
            return e;
          }),
          e
        );
      }
      function sr() {
        var e = ur([
          "<hassio-ansi-to-html\n                .content=",
          "\n              ></hassio-ansi-to-html>",
        ]);
        return (
          (sr = function () {
            return e;
          }),
          e
        );
      }
      function cr() {
        var e = ur([' <div class="errors">', "</div> "]);
        return (
          (cr = function () {
            return e;
          }),
          e
        );
      }
      function lr() {
        var e = ur([
          '\n      <paper-card heading="Log">\n        ',
          '\n        <div class="card-content">\n          ',
          '\n        </div>\n        <div class="card-actions">\n          <mwc-button @click=',
          ">Refresh</mwc-button>\n        </div>\n      </paper-card>\n    ",
        ]);
        return (
          (lr = function () {
            return e;
          }),
          e
        );
      }
      function ur(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function dr(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function fr(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = e.apply(t, r);
            function a(e) {
              dr(o, n, i, a, s, "next", e);
            }
            function s(e) {
              dr(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function pr(e, t) {
        return (pr =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function hr(e) {
        return function () {
          var t,
            r = jr(e);
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
            var n = jr(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === ir(t) || "function" == typeof t)) return t;
            return mr(e);
          })(this, t);
        };
      }
      function mr(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function yr(e) {
        var t,
          r = kr(e.key);
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
      function vr(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function br(e) {
        return e.decorators && e.decorators.length;
      }
      function gr(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function wr(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function kr(e) {
        var t = (function (e, t) {
          if ("object" !== ir(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== ir(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === ir(t) ? t : String(t);
      }
      function Er(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Or(e, t, r) {
        return (Or =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = jr(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function jr(e) {
        return (jr = Object.setPrototypeOf
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
                  if (!br(e)) return r.push(e);
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
                      if ("string" == typeof e) return Er(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? Er(e, t)
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
              var r = kr(e.key),
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
                r = wr(e, "finisher"),
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
              var r = wr(e, "finisher"),
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
                  if (gr(o.descriptor) || gr(i.descriptor)) {
                    if (br(o) || br(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (br(o)) {
                      if (br(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    vr(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(yr)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-addon-logs")],
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
                t && pr(e, t);
            })(i, t);
            var n = hr(i);
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
              return (t = n.call.apply(n, [this].concat(o))), e(mr(t)), t;
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
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "addon",
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
                key: "_content",
                value: void 0,
              },
              {
                kind: "method",
                key: "connectedCallback",
                value: (function () {
                  var e = fr(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  Or(
                                    jr(r.prototype),
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
                  return Object(n.e)(
                    lr(),
                    this._error ? Object(n.e)(cr(), this._error) : "",
                    this._content
                      ? Object(n.e)(sr(), this._content)
                      : Object(n.e)(ar()),
                    this._refresh
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [a.b, s.a, Object(n.c)(or())];
                },
              },
              {
                kind: "method",
                key: "_loadData",
                value: (function () {
                  var e = fr(
                    regeneratorRuntime.mark(function e() {
                      var t;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  Object(o.d)(this.hass, this.addon.slug)
                                );
                              case 4:
                                (this._content = e.sent), (e.next = 10);
                                break;
                              case 7:
                                (e.prev = 7),
                                  (e.t0 = e.catch(1)),
                                  (this._error = "Failed to get addon logs, ".concat(
                                    (null === (t = e.t0.body) || void 0 === t
                                      ? void 0
                                      : t.message) || e.t0
                                  ));
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 7]]
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
                  var e = fr(
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
      function Pr(e) {
        return (Pr =
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
      function _r(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function xr(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = e.apply(t, r);
            function a(e) {
              _r(o, n, i, a, s, "next", e);
            }
            function s(e) {
              _r(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function Dr() {
        var e = zr([
          "\n        :host {\n          display: block;\n        }\n        paper-card {\n          display: block;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-bottom: 16px;\n        }\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n        }\n      ",
        ]);
        return (
          (Dr = function () {
            return e;
          }),
          e
        );
      }
      function Sr() {
        var e = zr([
          "\n                  <tr>\n                    <td>",
          "</td>\n                    <td>\n                      <paper-input\n                        @value-changed=",
          '\n                        placeholder="disabled"\n                        .value=',
          "\n                        .container=",
          "\n                        no-label-float\n                      ></paper-input>\n                    </td>\n                    <td>",
          "</td>\n                  </tr>\n                ",
        ]);
        return (
          (Sr = function () {
            return e;
          }),
          e
        );
      }
      function Ar() {
        var e = zr([' <div class="errors">', "</div> "]);
        return (
          (Ar = function () {
            return e;
          }),
          e
        );
      }
      function Cr() {
        var e = zr([
          '\n      <paper-card heading="Network">\n        <div class="card-content">\n          ',
          "\n\n          <table>\n            <tbody>\n              <tr>\n                <th>Container</th>\n                <th>Host</th>\n                <th>Description</th>\n              </tr>\n              ",
          '\n            </tbody>\n          </table>\n        </div>\n        <div class="card-actions">\n          <mwc-button class="warning" @click=',
          ">\n            Reset to defaults\n          </mwc-button>\n          <mwc-button @click=",
          ">Save</mwc-button>\n        </div>\n      </paper-card>\n    ",
        ]);
        return (
          (Cr = function () {
            return e;
          }),
          e
        );
      }
      function Tr() {
        var e = zr([""]);
        return (
          (Tr = function () {
            return e;
          }),
          e
        );
      }
      function zr(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Rr(e, t) {
        return (Rr =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Fr(e) {
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
            if (t && ("object" === Pr(t) || "function" == typeof t)) return t;
            return Ir(e);
          })(this, t);
        };
      }
      function Ir(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Mr(e) {
        var t,
          r = Lr(e.key);
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
      function Ur(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Nr(e) {
        return e.decorators && e.decorators.length;
      }
      function Hr(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Br(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Lr(e) {
        var t = (function (e, t) {
          if ("object" !== Pr(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Pr(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Pr(t) ? t : String(t);
      }
      function $r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Vr(e, t, r) {
        return (Vr =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = qr(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function qr(e) {
        return (qr = Object.setPrototypeOf
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
                  if (!Nr(e)) return r.push(e);
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
                      if ("string" == typeof e) return $r(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? $r(e, t)
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
                r = Br(e, "finisher"),
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
              var r = Br(e, "finisher"),
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
                  if (Hr(o.descriptor) || Hr(i.descriptor)) {
                    if (Nr(o) || Nr(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Nr(o)) {
                      if (Nr(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Ur(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Mr)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-addon-network")],
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
                t && Rr(e, t);
            })(i, t);
            var n = Fr(i);
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
              return (t = n.call.apply(n, [this].concat(o))), e(Ir(t)), t;
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
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "addon",
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
                key: "_config",
                value: void 0,
              },
              {
                kind: "method",
                key: "connectedCallback",
                value: function () {
                  Vr(qr(r.prototype), "connectedCallback", this).call(this),
                    this._setNetworkConfig();
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  var e = this;
                  return this._config
                    ? Object(n.e)(
                        Cr(),
                        this._error ? Object(n.e)(Ar(), this._error) : "",
                        this._config.map(function (t) {
                          return Object(n.e)(
                            Sr(),
                            t.container,
                            e._configChanged,
                            String(t.host),
                            t.container,
                            t.description
                          );
                        }),
                        this._resetTapped,
                        this._saveTapped
                      )
                    : Object(n.e)(Tr());
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [a.b, s.a, Object(n.c)(Dr())];
                },
              },
              {
                kind: "method",
                key: "update",
                value: function (e) {
                  Vr(qr(r.prototype), "update", this).call(this, e),
                    e.has("addon") && this._setNetworkConfig();
                },
              },
              {
                kind: "method",
                key: "_setNetworkConfig",
                value: function () {
                  var e = this.addon.network || {},
                    t = this.addon.network_description || {},
                    r = Object.keys(e).map(function (r) {
                      return { container: r, host: e[r], description: t[r] };
                    });
                  this._config = r.sort(function (e, t) {
                    return e.container > t.container ? 1 : -1;
                  });
                },
              },
              {
                kind: "method",
                key: "_configChanged",
                value: (function () {
                  var e = xr(
                    regeneratorRuntime.mark(function e(t) {
                      var r;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (r = t.target),
                                  this._config.forEach(function (e) {
                                    e.container === r.container &&
                                      e.host !==
                                        parseInt(String(r.value), 10) &&
                                      (e.host = r.value
                                        ? parseInt(String(r.value), 10)
                                        : null);
                                  });
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
                key: "_resetTapped",
                value: (function () {
                  var e = xr(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = { network: null }),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  Object(o.h)(this.hass, this.addon.slug, t)
                                );
                              case 4:
                                (r = {
                                  success: !0,
                                  response: void 0,
                                  path: "option",
                                }),
                                  Object(R.a)(this, "hass-api-called", r),
                                  (e.next = 11);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(1)),
                                  (this._error = "Failed to set addon network configuration, ".concat(
                                    (null === (n = e.t0.body) || void 0 === n
                                      ? void 0
                                      : n.message) || e.t0
                                  ));
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 8]]
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
                key: "_saveTapped",
                value: (function () {
                  var e = xr(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n, i;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (t = {}),
                                  this._config.forEach(function (e) {
                                    t[e.container] = parseInt(
                                      String(e.host),
                                      10
                                    );
                                  }),
                                  (r = { network: t }),
                                  (e.prev = 4),
                                  (e.next = 7),
                                  Object(o.h)(this.hass, this.addon.slug, r)
                                );
                              case 7:
                                (n = {
                                  success: !0,
                                  response: void 0,
                                  path: "option",
                                }),
                                  Object(R.a)(this, "hass-api-called", n),
                                  (e.next = 14);
                                break;
                              case 11:
                                (e.prev = 11),
                                  (e.t0 = e.catch(4)),
                                  (this._error = "Failed to set addon network configuration, ".concat(
                                    (null === (i = e.t0.body) || void 0 === i
                                      ? void 0
                                      : i.message) || e.t0
                                  ));
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[4, 11]]
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
      ),
        r(129);
      var Wr = r(93);
      function Gr(e) {
        return (Gr =
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
      function Yr() {
        var e = Qr([
          "\n        @media screen and (min-width: 1024px) {\n          .content {\n            width: 50%;\n            margin: auto;\n            margin-top: 8px;\n            max-width: 1024px;\n          }\n        }\n      ",
        ]);
        return (
          (Yr = function () {
            return e;
          }),
          e
        );
      }
      function Jr() {
        var e = Qr([
          '\n      <div class="content">\n        <hassio-addon-info\n          .narrow=',
          "\n          .hass=",
          "\n          .addon=",
          "\n        ></hassio-addon-info>\n      </div>\n    ",
        ]);
        return (
          (Jr = function () {
            return e;
          }),
          e
        );
      }
      function Kr() {
        var e = Qr([" <paper-spinner-lite active></paper-spinner-lite> "]);
        return (
          (Kr = function () {
            return e;
          }),
          e
        );
      }
      function Qr(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Xr(e, t) {
        return (Xr =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Zr(e) {
        return function () {
          var t,
            r = tn(e);
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
            var n = tn(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === Gr(t) || "function" == typeof t)) return t;
            return en(e);
          })(this, t);
        };
      }
      function en(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function tn(e) {
        return (tn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function rn(e) {
        var t,
          r = cn(e.key);
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
      function nn(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function on(e) {
        return e.decorators && e.decorators.length;
      }
      function an(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function sn(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function cn(e) {
        var t = (function (e, t) {
          if ("object" !== Gr(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Gr(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Gr(t) ? t : String(t);
      }
      function ln(e, t) {
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
                  if (!on(e)) return r.push(e);
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
                      if ("string" == typeof e) return ln(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? ln(e, t)
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
              var r = cn(e.key),
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
                r = sn(e, "finisher"),
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
              var r = sn(e, "finisher"),
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
                  if (an(o.descriptor) || an(i.descriptor)) {
                    if (on(o) || on(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (on(o)) {
                      if (on(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    nn(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(rn)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-addon-info-tab")],
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
                  t && Xr(e, t);
              })(i, t);
              var n = Zr(i);
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
                return (t = n.call.apply(n, [this].concat(o))), e(en(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "narrow",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "addon",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return this.addon
                    ? Object(n.e)(Jr(), this.narrow, this.hass, this.addon)
                    : Object(n.e)(Kr());
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [a.b, s.a, Object(n.c)(Yr())];
                },
              },
            ],
          };
        },
        n.a
      );
      function un(e) {
        return (un =
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
      function dn() {
        var e = yn([
          "\n        @media screen and (min-width: 1024px) {\n          .content {\n            width: 50%;\n            margin: auto;\n            margin-top: 8px;\n            max-width: 1024px;\n          }\n        }\n        hassio-addon-network,\n        hassio-addon-audio,\n        hassio-addon-config {\n          margin-bottom: 24px;\n        }\n      ",
        ]);
        return (
          (dn = function () {
            return e;
          }),
          e
        );
      }
      function fn() {
        var e = yn([
          "\n              <hassio-addon-audio\n                .hass=",
          "\n                .addon=",
          "\n              ></hassio-addon-audio>\n            ",
        ]);
        return (
          (fn = function () {
            return e;
          }),
          e
        );
      }
      function pn() {
        var e = yn([
          "\n              <hassio-addon-network\n                .hass=",
          "\n                .addon=",
          "\n              ></hassio-addon-network>\n            ",
        ]);
        return (
          (pn = function () {
            return e;
          }),
          e
        );
      }
      function hn() {
        var e = yn([
          '\n      <div class="content">\n        <hassio-addon-config\n          .hass=',
          "\n          .addon=",
          "\n        ></hassio-addon-config>\n        ",
          "\n        ",
          "\n      </div>\n    ",
        ]);
        return (
          (hn = function () {
            return e;
          }),
          e
        );
      }
      function mn() {
        var e = yn([" <paper-spinner-lite active></paper-spinner-lite> "]);
        return (
          (mn = function () {
            return e;
          }),
          e
        );
      }
      function yn(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function vn(e, t) {
        return (vn =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function bn(e) {
        return function () {
          var t,
            r = wn(e);
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
            var n = wn(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === un(t) || "function" == typeof t)) return t;
            return gn(e);
          })(this, t);
        };
      }
      function gn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function wn(e) {
        return (wn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function kn(e) {
        var t,
          r = _n(e.key);
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
      function En(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function On(e) {
        return e.decorators && e.decorators.length;
      }
      function jn(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Pn(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function _n(e) {
        var t = (function (e, t) {
          if ("object" !== un(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== un(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === un(t) ? t : String(t);
      }
      function xn(e, t) {
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
                  if (!On(e)) return r.push(e);
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
                      if ("string" == typeof e) return xn(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? xn(e, t)
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
              var r = _n(e.key),
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
                r = Pn(e, "finisher"),
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
              var r = Pn(e, "finisher"),
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
                  if (jn(o.descriptor) || jn(i.descriptor)) {
                    if (On(o) || On(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (On(o)) {
                      if (On(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    En(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(kn)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-addon-config-tab")],
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
                  t && vn(e, t);
              })(i, t);
              var n = bn(i);
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
                return (t = n.call.apply(n, [this].concat(o))), e(gn(t)), t;
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
                key: "addon",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return this.addon
                    ? Object(n.e)(
                        hn(),
                        this.hass,
                        this.addon,
                        this.addon.network
                          ? Object(n.e)(pn(), this.hass, this.addon)
                          : "",
                        this.addon.audio
                          ? Object(n.e)(fn(), this.hass, this.addon)
                          : ""
                      )
                    : Object(n.e)(mn());
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [a.b, s.a, Object(n.c)(dn())];
                },
              },
            ],
          };
        },
        n.a
      );
      function Dn(e) {
        return (Dn =
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
      function Sn() {
        var e = Tn([
          "\n        @media screen and (min-width: 1024px) {\n          .content {\n            width: 50%;\n            margin: auto;\n            margin-top: 8px;\n            max-width: 1024px;\n          }\n        }\n      ",
        ]);
        return (
          (Sn = function () {
            return e;
          }),
          e
        );
      }
      function An() {
        var e = Tn([
          '\n      <div class="content">\n        <hassio-addon-logs\n          .hass=',
          "\n          .addon=",
          "\n        ></hassio-addon-logs>\n      </div>\n    ",
        ]);
        return (
          (An = function () {
            return e;
          }),
          e
        );
      }
      function Cn() {
        var e = Tn([" <paper-spinner-lite active></paper-spinner-lite> "]);
        return (
          (Cn = function () {
            return e;
          }),
          e
        );
      }
      function Tn(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function zn(e, t) {
        return (zn =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Rn(e) {
        return function () {
          var t,
            r = In(e);
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
            var n = In(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === Dn(t) || "function" == typeof t)) return t;
            return Fn(e);
          })(this, t);
        };
      }
      function Fn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function In(e) {
        return (In = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Mn(e) {
        var t,
          r = Ln(e.key);
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
      function Un(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Nn(e) {
        return e.decorators && e.decorators.length;
      }
      function Hn(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Bn(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Ln(e) {
        var t = (function (e, t) {
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
      function $n(e, t) {
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
                  if (!Nn(e)) return r.push(e);
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
                      if ("string" == typeof e) return $n(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? $n(e, t)
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
              var r = Ln(e.key),
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
                r = Bn(e, "finisher"),
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
              var r = Bn(e, "finisher"),
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
                  if (Hn(o.descriptor) || Hn(i.descriptor)) {
                    if (Nn(o) || Nn(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Nn(o)) {
                      if (Nn(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Un(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Mn)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-addon-log-tab")],
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
                  t && zn(e, t);
              })(i, t);
              var n = Rn(i);
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
                return (t = n.call.apply(n, [this].concat(o))), e(Fn(t)), t;
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
                key: "addon",
                value: void 0,
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  return this.addon
                    ? Object(n.e)(An(), this.hass, this.addon)
                    : Object(n.e)(Cn());
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [a.b, s.a, Object(n.c)(Sn())];
                },
              },
            ],
          };
        },
        n.a
      );
      function Vn(e) {
        return (Vn =
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
      function qn() {
        var e = Qn([
          "\n        @media screen and (min-width: 1024px) {\n          .content {\n            width: 50%;\n            margin: auto;\n            max-width: 1024px;\n          }\n        }\n      ",
        ]);
        return (
          (qn = function () {
            return e;
          }),
          e
        );
      }
      function Wn() {
        var e = Qn(["<loading-screen></loading-screen>"]);
        return (
          (Wn = function () {
            return e;
          }),
          e
        );
      }
      function Gn() {
        var e = Qn(["<ha-markdown .content=", "></ha-markdown>"]);
        return (
          (Gn = function () {
            return e;
          }),
          e
        );
      }
      function Yn() {
        var e = Qn([' <div class="errors">', "</div> "]);
        return (
          (Yn = function () {
            return e;
          }),
          e
        );
      }
      function Jn() {
        var e = Qn([
          '\n      <div class="content">\n        ',
          '\n        <div class="card-content">\n          ',
          "\n        </div>\n      </div>\n    ",
        ]);
        return (
          (Jn = function () {
            return e;
          }),
          e
        );
      }
      function Kn() {
        var e = Qn([" <paper-spinner-lite active></paper-spinner-lite> "]);
        return (
          (Kn = function () {
            return e;
          }),
          e
        );
      }
      function Qn(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Xn(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function Zn(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = e.apply(t, r);
            function a(e) {
              Xn(o, n, i, a, s, "next", e);
            }
            function s(e) {
              Xn(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function ei(e, t) {
        return (ei =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ti(e) {
        return function () {
          var t,
            r = di(e);
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
            var n = di(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === Vn(t) || "function" == typeof t)) return t;
            return ri(e);
          })(this, t);
        };
      }
      function ri(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
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
          if ("object" !== Vn(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Vn(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Vn(t) ? t : String(t);
      }
      function li(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function ui(e, t, r) {
        return (ui =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = di(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function di(e) {
        return (di = Object.setPrototypeOf
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
        [Object(n.d)("hassio-addon-documentation-tab")],
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
                t && ei(e, t);
            })(i, t);
            var n = ti(i);
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
              return (t = n.call.apply(n, [this].concat(o))), e(ri(t)), t;
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
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "addon",
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
                key: "_content",
                value: void 0,
              },
              {
                kind: "method",
                key: "connectedCallback",
                value: (function () {
                  var e = Zn(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  ui(
                                    di(r.prototype),
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
                  return this.addon
                    ? Object(n.e)(
                        Jn(),
                        this._error ? Object(n.e)(Yn(), this._error) : "",
                        this._content
                          ? Object(n.e)(Gn(), this._content)
                          : Object(n.e)(Wn())
                      )
                    : Object(n.e)(Kn());
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [a.b, s.a, Object(n.c)(qn())];
                },
              },
              {
                kind: "method",
                key: "_loadData",
                value: (function () {
                  var e = Zn(
                    regeneratorRuntime.mark(function e() {
                      var t;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  Object(o.b)(this.hass, this.addon.slug)
                                );
                              case 4:
                                (this._content = e.sent), (e.next = 10);
                                break;
                              case 7:
                                (e.prev = 7),
                                  (e.t0 = e.catch(1)),
                                  (this._error = "Failed to get addon documentation, ".concat(
                                    (null === (t = e.t0.body) || void 0 === t
                                      ? void 0
                                      : t.message) || e.t0
                                  ));
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 7]]
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
      function fi(e) {
        return (fi =
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
      function pi(e, t) {
        return (pi =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function hi(e) {
        return function () {
          var t,
            r = yi(e);
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
            var n = yi(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === fi(t) || "function" == typeof t)) return t;
            return mi(e);
          })(this, t);
        };
      }
      function mi(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function yi(e) {
        return (yi = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function vi(e) {
        var t,
          r = Ei(e.key);
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
      function bi(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function gi(e) {
        return e.decorators && e.decorators.length;
      }
      function wi(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function ki(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Ei(e) {
        var t = (function (e, t) {
          if ("object" !== fi(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== fi(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === fi(t) ? t : String(t);
      }
      function Oi(e, t) {
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
                  if (!gi(e)) return r.push(e);
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
                      if ("string" == typeof e) return Oi(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? Oi(e, t)
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
              var r = Ei(e.key),
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
                r = ki(e, "finisher"),
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
              var r = ki(e, "finisher"),
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
                  if (wi(o.descriptor) || wi(i.descriptor)) {
                    if (gi(o) || gi(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (gi(o)) {
                      if (gi(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    bi(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(vi)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-addon-router")],
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
                  t && pi(e, t);
              })(i, t);
              var n = hi(i);
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
                return (t = n.call.apply(n, [this].concat(o))), e(mi(t)), t;
              }
              return i;
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "narrow",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "hass",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "addon",
                value: void 0,
              },
              {
                kind: "field",
                key: "routerOptions",
                value: function () {
                  return {
                    defaultPage: "info",
                    showLoading: !0,
                    routes: {
                      info: { tag: "hassio-addon-info-tab" },
                      documentation: { tag: "hassio-addon-documentation-tab" },
                      config: { tag: "hassio-addon-config-tab" },
                      logs: { tag: "hassio-addon-log-tab" },
                    },
                  };
                },
              },
              {
                kind: "method",
                key: "updatePageEl",
                value: function (e) {
                  (e.route = this.routeTail),
                    (e.hass = this.hass),
                    (e.addon = this.addon),
                    (e.narrow = this.narrow);
                },
              },
            ],
          };
        },
        Wr.a
      );
      function ji(e) {
        return (ji =
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
      function Pi(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function _i(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var o = e.apply(t, r);
            function a(e) {
              Pi(o, n, i, a, s, "next", e);
            }
            function s(e) {
              Pi(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function xi() {
        var e = Ai([
          "\n        :host {\n          color: var(--primary-text-color);\n          --paper-card-header-color: var(--primary-text-color);\n        }\n        .content {\n          padding: 24px 0 32px;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n        }\n        hassio-addon-info,\n        hassio-addon-network,\n        hassio-addon-audio,\n        hassio-addon-config {\n          margin-bottom: 24px;\n          width: 600px;\n        }\n        hassio-addon-logs {\n          max-width: calc(100% - 8px);\n          min-width: 600px;\n        }\n        @media only screen and (max-width: 600px) {\n          hassio-addon-info,\n          hassio-addon-network,\n          hassio-addon-audio,\n          hassio-addon-config,\n          hassio-addon-logs {\n            max-width: 100%;\n            min-width: 100%;\n          }\n        }\n      ",
        ]);
        return (
          (xi = function () {
            return e;
          }),
          e
        );
      }
      function Di() {
        var e = Ai([
          "\n      <hass-tabs-subpage\n        .hass=",
          "\n        .narrow=",
          "\n        .backPath=",
          "\n        .route=",
          "\n        .hassio=",
          "\n        .tabs=",
          '\n      >\n        <span slot="header">',
          "</span>\n        <hassio-addon-router\n          .route=",
          "\n          .narrow=",
          "\n          .hass=",
          "\n          .addon=",
          "\n        ></hassio-addon-router>\n      </hass-tabs-subpage>\n    ",
        ]);
        return (
          (Di = function () {
            return e;
          }),
          e
        );
      }
      function Si() {
        var e = Ai([" <paper-spinner-lite active></paper-spinner-lite> "]);
        return (
          (Si = function () {
            return e;
          }),
          e
        );
      }
      function Ai(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Ci(e, t) {
        return (Ci =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Ti(e) {
        return function () {
          var t,
            r = Ri(e);
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
            var n = Ri(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === ji(t) || "function" == typeof t)) return t;
            return zi(e);
          })(this, t);
        };
      }
      function zi(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ri(e) {
        return (Ri = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Fi(e) {
        var t,
          r = Hi(e.key);
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
      function Ii(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Mi(e) {
        return e.decorators && e.decorators.length;
      }
      function Ui(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Ni(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Hi(e) {
        var t = (function (e, t) {
          if ("object" !== ji(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== ji(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === ji(t) ? t : String(t);
      }
      function Bi(e, t) {
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
                  if (!Mi(e)) return r.push(e);
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
                      if ("string" == typeof e) return Bi(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(r)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? Bi(e, t)
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
                r = Ni(e, "finisher"),
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
              var r = Ni(e, "finisher"),
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
                  if (Ui(o.descriptor) || Ui(i.descriptor)) {
                    if (Mi(o) || Mi(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Mi(o)) {
                      if (Mi(i))
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
            })(a.d.map(Fi)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-addon-dashboard")],
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
                  t && Ci(e, t);
              })(i, t);
              var n = Ti(i);
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
                return (t = n.call.apply(n, [this].concat(o))), e(zi(t)), t;
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
                key: "route",
                value: void 0,
              },
              {
                kind: "field",
                decorators: [Object(n.f)({ attribute: !1 })],
                key: "addon",
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
                key: "_computeTail",
                value: function () {
                  return Object(i.a)(function (e) {
                    var t = e.path.indexOf("/", 1);
                    return -1 === t
                      ? { prefix: e.prefix + e.path, path: "" }
                      : {
                          prefix: e.prefix + e.path.substr(0, t),
                          path: e.path.substr(t),
                        };
                  });
                },
              },
              {
                kind: "method",
                key: "render",
                value: function () {
                  if (!this.addon) return Object(n.e)(Si());
                  var e = [
                    {
                      name: "Info",
                      path: "/hassio/addon/".concat(this.addon.slug, "/info"),
                      icon: "mdi:information-variant",
                    },
                  ];
                  this.addon.documentation &&
                    e.push({
                      name: "Documentation",
                      path: "/hassio/addon/".concat(
                        this.addon.slug,
                        "/documentation"
                      ),
                      icon: "mdi:file-document",
                    }),
                    this.addon.version &&
                      e.push(
                        {
                          name: "Configuration",
                          path: "/hassio/addon/".concat(
                            this.addon.slug,
                            "/config"
                          ),
                          icon: "mdi:cogs",
                        },
                        {
                          name: "Log",
                          path: "/hassio/addon/".concat(
                            this.addon.slug,
                            "/logs"
                          ),
                          icon: "mdi:math-log",
                        }
                      );
                  var t = this._computeTail(this.route);
                  return Object(n.e)(
                    Di(),
                    this.hass,
                    this.narrow,
                    this.addon.version ? "/hassio/dashboard" : "/hassio/store",
                    t,
                    !0,
                    e,
                    this.addon.name,
                    t,
                    this.narrow,
                    this.hass,
                    this.addon
                  );
                },
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function () {
                  return [a.b, s.a, Object(n.c)(xi())];
                },
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: (function () {
                  var e = _i(
                    regeneratorRuntime.mark(function e() {
                      var t = this;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this._routeDataChanged(this.route)
                                );
                              case 2:
                                this.addEventListener(
                                  "hass-api-called",
                                  function (e) {
                                    return t._apiCalled(e);
                                  }
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
                key: "_apiCalled",
                value: (function () {
                  var e = _i(
                    regeneratorRuntime.mark(function e(t) {
                      var r;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if ((r = t.detail.path)) {
                                  e.next = 3;
                                  break;
                                }
                                return e.abrupt("return");
                              case 3:
                                if ("uninstall" !== r) {
                                  e.next = 7;
                                  break;
                                }
                                history.back(), (e.next = 9);
                                break;
                              case 7:
                                return (
                                  (e.next = 9),
                                  this._routeDataChanged(this.route)
                                );
                              case 9:
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
                key: "_routeDataChanged",
                value: (function () {
                  var e = _i(
                    regeneratorRuntime.mark(function e(t) {
                      var r, n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = t.path.split("/")[1]),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  Object(o.c)(this.hass, r)
                                );
                              case 4:
                                (n = e.sent), (this.addon = n), (e.next = 11);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(1)),
                                  (this.addon = void 0);
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 8]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ],
          };
        },
        n.a
      );
    },
    72: function (e, t, r) {
      "use strict";
      var n,
        i = r(6),
        o = r(89),
        a = r.n(o),
        s = r(12);
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
      function l(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        return function () {
          var t,
            r = k(e);
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
            var n = k(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === c(t) || "function" == typeof t)) return t;
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
      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function w(e, t, r) {
        return (w =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, r) {
                var n = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = k(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function k(e) {
        return (k = Object.setPrototypeOf
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
        [Object(i.d)("ha-markdown")],
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
                t && u(e, t);
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
              return (t = n.call.apply(n, [this].concat(o))), e(f(t)), t;
            }
            return i;
          })();
          return {
            F: r,
            d: [
              {
                kind: "field",
                decorators: [Object(i.f)()],
                key: "content",
                value: function () {
                  return "";
                },
              },
              {
                kind: "field",
                decorators: [Object(i.f)({ type: Boolean })],
                key: "allowSvg",
                value: function () {
                  return !1;
                },
              },
              {
                kind: "method",
                key: "update",
                value: function (e) {
                  w(k(r.prototype), "update", this).call(this, e),
                    n || (n = a()()),
                    this._render();
                },
              },
              {
                kind: "method",
                key: "_render",
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
                                    (e.next = 2),
                                    n.renderMarkdown(
                                      this.content,
                                      { breaks: !0, gfm: !0, tables: !0 },
                                      { allowSvg: this.allowSvg }
                                    )
                                  );
                                case 2:
                                  for (
                                    this.innerHTML = e.sent,
                                      this._resize(),
                                      t = document.createTreeWalker(
                                        this,
                                        1,
                                        null,
                                        !1
                                      );
                                    t.nextNode();

                                  )
                                    (r = t.currentNode) instanceof
                                      HTMLAnchorElement &&
                                    r.host !== document.location.host
                                      ? ((r.target = "_blank"),
                                        (r.rel = "noreferrer"),
                                        (r.rel = "noreferrer noopener"))
                                      : r &&
                                        r.addEventListener(
                                          "load",
                                          this._resize
                                        );
                                case 6:
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
                            l(o, n, i, a, s, "next", e);
                          }
                          function s(e) {
                            l(o, n, i, a, s, "throw", e);
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
                kind: "field",
                key: "_resize",
                value: function () {
                  var e = this;
                  return function () {
                    return Object(s.a)(e, "iron-resize");
                  };
                },
              },
            ],
          };
        },
        i.b
      );
    },
    89: function (e, t, r) {
      var n = r(90),
        i = ["renderMarkdown"];
      e.exports = function () {
        var e = new Worker(r.p + "264283c05b3002fb79ff.worker.js", {
          name: "[hash].worker.js",
        });
        return n(e, i), e;
      };
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
      function f(e) {
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
            if (t && ("object" === s(t) || "function" == typeof t)) return t;
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
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var O = customElements.get("mwc-switch");
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
              return (t = n.call.apply(n, [this].concat(o))), e(p(t)), t;
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
                  k(E(r.prototype), "firstUpdated", this).call(this),
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
        O
      );
    },
  },
]);
//# sourceMappingURL=chunk.4caf65292b82df27c80d.js.map
