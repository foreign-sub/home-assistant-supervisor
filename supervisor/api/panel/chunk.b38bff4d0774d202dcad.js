(self.webpackJsonp = self.webpackJsonp || []).push([
  [7],
  {
    179: function(e, t, r) {
      "use strict";
      r.r(t);
      r(111), r(127), r(48), r(24), r(82);
      var n = r(5),
        i = r(27),
        o = r(15),
        a = r(10),
        s = (r(137), r(18), r(19), r(173), r(174), r(138), r(118));
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
      function l(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, r = new Array(e.length); t < e.length; t++)
                r[t] = e[t];
              return r;
            }
          })(e) ||
          P(e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
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
      function u(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, i) {
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
      function f() {
        var e = y([
          "\n        :host,\n        paper-card,\n        paper-dropdown-menu {\n          display: block;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-bottom: 16px;\n        }\n        paper-item {\n          width: 450px;\n        }\n        .card-actions {\n          text-align: right;\n        }\n      "
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = y([
          "\n                    <paper-item device=",
          "\n                      >",
          "</paper-item\n                    >\n                  "
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = y([
          "\n                    <paper-item device=",
          "\n                      >",
          "</paper-item\n                    >\n                  "
        ]);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = y([
          '\n                <div class="errors">',
          "</div>\n              "
        ]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = y([
          '\n      <paper-card heading="Audio">\n        <div class="card-content">\n          ',
          '\n\n          <paper-dropdown-menu\n            label="Input"\n            @iron-select=',
          '\n          >\n            <paper-listbox\n              slot="dropdown-content"\n              attr-for-selected="device"\n              .selected=',
          "\n            >\n              ",
          '\n            </paper-listbox>\n          </paper-dropdown-menu>\n          <paper-dropdown-menu\n            label="Output"\n            @iron-select=',
          '\n          >\n            <paper-listbox\n              slot="dropdown-content"\n              attr-for-selected="device"\n              .selected=',
          "\n            >\n              ",
          '\n            </paper-listbox>\n          </paper-dropdown-menu>\n        </div>\n        <div class="card-actions">\n          <mwc-button @click=',
          ">Save</mwc-button>\n        </div>\n      </paper-card>\n    "
        ]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function y(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function b(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function g(e, t) {
        return (g =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function w(e) {
        var t,
          r = _(e.key);
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
      function k(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function E(e) {
        return e.decorators && e.decorators.length;
      }
      function O(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function j(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function _(e) {
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
      function P(e) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      }
      function x(e, t, r) {
        return (x =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = D(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function D(e) {
        return (D = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
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
                  if (!E(e)) return r.push(e);
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
                  for (var d = 0; d < l.length; d++)
                    this.addElementPlacement(l[d], t);
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
                  P(t) ||
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
              var r = _(e.key),
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
                r = j(e, "finisher"),
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
              var r = j(e, "finisher"),
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
                  if (O(o.descriptor) || O(i.descriptor)) {
                    if (E(o) || E(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (E(o)) {
                      if (E(i))
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
        [Object(n.d)("hassio-addon-audio")],
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
                  !(o = (t = D(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== c(o) && "function" != typeof o)
                    ? b(i)
                    : o),
                e(b(r)),
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
                  t && g(e, t);
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
                key: "addon",
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
                decorators: [Object(n.f)()],
                key: "_inputDevices",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_outputDevices",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_selectedInput",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_selectedOutput",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    v(),
                    this._error ? Object(n.e)(m(), this._error) : "",
                    this._setInputDevice,
                    this._selectedInput,
                    this._inputDevices &&
                      this._inputDevices.map(function(e) {
                        return Object(n.e)(h(), e.device || "", e.name);
                      }),
                    this._setOutputDevice,
                    this._selectedOutput,
                    this._outputDevices &&
                      this._outputDevices.map(function(e) {
                        return Object(n.e)(p(), e.device || "", e.name);
                      }),
                    this._saveSettings
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [a.b, o.a, Object(n.c)(f())];
                }
              },
              {
                kind: "method",
                key: "update",
                value: function(e) {
                  x(D(r.prototype), "update", this).call(this, e),
                    e.has("addon") && this._addonChanged();
                }
              },
              {
                kind: "method",
                key: "_setInputDevice",
                value: function(e) {
                  var t = e.detail.item.getAttribute("device");
                  this._selectedInput = t;
                }
              },
              {
                kind: "method",
                key: "_setOutputDevice",
                value: function(e) {
                  var t = e.detail.item.getAttribute("device");
                  this._selectedOutput = t;
                }
              },
              {
                kind: "method",
                key: "_addonChanged",
                value: (function() {
                  var e = u(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n, i, o;
                      return regeneratorRuntime.wrap(
                        function(e) {
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
                                  (t = {
                                    device: "default",
                                    name: "Default"
                                  }),
                                  (e.prev = 5),
                                  (e.next = 8),
                                  Object(s.a)(this.hass)
                                );
                              case 8:
                                (r = e.sent),
                                  (n = r.audio),
                                  (i = Object.keys(n.input).map(function(e) {
                                    return { device: e, name: n.input[e] };
                                  })),
                                  (o = Object.keys(n.output).map(function(e) {
                                    return { device: e, name: n.output[e] };
                                  })),
                                  (this._inputDevices = [t].concat(l(i))),
                                  (this._outputDevices = [t].concat(l(o))),
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
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "_saveSettings",
                value: (function() {
                  var e = u(
                    regeneratorRuntime.mark(function e() {
                      var t;
                      return regeneratorRuntime.wrap(
                        function(e) {
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
                                        : this._selectedOutput
                                  }),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  Object(i.g)(this.hass, this.addon.slug, t)
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
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              }
            ]
          };
        },
        n.a
      ),
        r(139);
      var A,
        C = r(11),
        T = r(140);
      function S(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      var z = (function() {
        var e,
          t =
            ((e = regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        A ||
                          (A = Promise.all([r.e(13), r.e(2)]).then(
                            r.bind(null, 178)
                          )),
                        e.abrupt("return", A)
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })),
            function() {
              var t = this,
                r = arguments;
              return new Promise(function(n, i) {
                var o = e.apply(t, r);
                function a(e) {
                  S(o, n, i, a, s, "next", e);
                }
                function s(e) {
                  S(o, n, i, a, s, "throw", e);
                }
                a(void 0);
              });
            });
        return function() {
          return t.apply(this, arguments);
        };
      })();
      function R(e) {
        return (R =
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
      function F(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function I(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function H(e, t) {
        return (H =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function N(e) {
        var t,
          r = B(e.key);
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
      function M(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function U(e) {
        return e.decorators && e.decorators.length;
      }
      function L(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function V(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function B(e) {
        var t = (function(e, t) {
          if ("object" !== R(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== R(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === R(t) ? t : String(t);
      }
      function q(e, t, r) {
        return (q =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = W(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function W(e) {
        return (W = Object.setPrototypeOf
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
                  for (var d = 0; d < l.length; d++)
                    this.addElementPlacement(l[d], t);
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
              var r = B(e.key),
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
                r = V(e, "finisher"),
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
              var r = V(e, "finisher"),
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
                    M(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(N)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("ha-code-editor")],
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
                  !(o = (t = W(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== R(o) && "function" != typeof o)
                    ? I(i)
                    : o),
                e(I(r)),
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
                  t && H(e, t);
              })(n, t),
              n
            );
          })();
          return {
            F: r,
            d: [
              { kind: "field", key: "codemirror", value: void 0 },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "mode",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "autofocus",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "rtl",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "error",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_value",
                value: function() {
                  return "";
                }
              },
              {
                kind: "set",
                key: "value",
                value: function(e) {
                  this._value = e;
                }
              },
              {
                kind: "get",
                key: "value",
                value: function() {
                  return this.codemirror
                    ? this.codemirror.getValue()
                    : this._value;
                }
              },
              {
                kind: "get",
                key: "hasComments",
                value: function() {
                  return !!this.shadowRoot.querySelector("span.cm-comment");
                }
              },
              {
                kind: "method",
                key: "connectedCallback",
                value: function() {
                  q(W(r.prototype), "connectedCallback", this).call(this),
                    this.codemirror &&
                      (this.codemirror.refresh(),
                      !1 !== this.autofocus && this.codemirror.focus());
                }
              },
              {
                kind: "method",
                key: "update",
                value: function(e) {
                  q(W(r.prototype), "update", this).call(this, e),
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
                }
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function(e) {
                  q(W(r.prototype), "firstUpdated", this).call(this, e),
                    this._load();
                }
              },
              {
                kind: "method",
                key: "_load",
                value: (function() {
                  var e,
                    t =
                      ((e = regeneratorRuntime.mark(function e() {
                        var t,
                          r,
                          n,
                          i = this;
                        return regeneratorRuntime.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), z();
                                case 2:
                                  (t = e.sent),
                                    (r = t.codeMirror),
                                    ((n = this.attachShadow({
                                      mode: "open"
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
                                      extraKeys: {
                                        Tab: "indentMore",
                                        "Shift-Tab": "indentLess"
                                      },
                                      gutters: this._calcGutters()
                                    })),
                                    this._setScrollBarDirection(),
                                    this.codemirror.on("changes", function() {
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
                      function() {
                        var t = this,
                          r = arguments;
                        return new Promise(function(n, i) {
                          var o = e.apply(t, r);
                          function a(e) {
                            F(o, n, i, a, s, "next", e);
                          }
                          function s(e) {
                            F(o, n, i, a, s, "throw", e);
                          }
                          a(void 0);
                        });
                      });
                  return function() {
                    return t.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "_onChange",
                value: function() {
                  var e = this.value;
                  e !== this._value &&
                    ((this._value = e),
                    Object(C.a)(this, "value-changed", { value: this._value }));
                }
              },
              {
                kind: "method",
                key: "_calcGutters",
                value: function() {
                  return this.rtl
                    ? ["rtl-gutter", "CodeMirror-linenumbers"]
                    : [];
                }
              },
              {
                kind: "method",
                key: "_setScrollBarDirection",
                value: function() {
                  this.codemirror &&
                    this.codemirror
                      .getWrapperElement()
                      .classList.toggle("rtl", this.rtl);
                }
              }
            ]
          };
        },
        n.b
      );
      var G = function(e) {
        requestAnimationFrame(function() {
          return setTimeout(e, 0);
        });
      };
      function Y() {
        var e = K(["\n            <p>", "</p>\n          "]);
        return (
          (Y = function() {
            return e;
          }),
          e
        );
      }
      function J() {
        var e = K([
          "\n      ",
          "\n      <ha-code-editor\n        .value=",
          '\n        mode="yaml"\n        .error=',
          "\n        @value-changed=",
          "\n      ></ha-code-editor>\n    "
        ]);
        return (
          (J = function() {
            return e;
          }),
          e
        );
      }
      function K(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Q(e) {
        return (Q = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function X(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Z(e, t) {
        return (Z =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function $(e) {
        var t,
          r = ie(e.key);
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
      function ee(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function te(e) {
        return e.decorators && e.decorators.length;
      }
      function re(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function ne(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function ie(e) {
        var t = (function(e, t) {
          if ("object" !== oe(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== oe(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === oe(t) ? t : String(t);
      }
      function oe(e) {
        return (oe =
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
                  if (!te(e)) return r.push(e);
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
                  for (var d = 0; d < l.length; d++)
                    this.addElementPlacement(l[d], t);
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
              var r = ie(e.key),
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
                r = ne(e, "finisher"),
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
              var r = ne(e, "finisher"),
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
                  if (re(o.descriptor) || re(i.descriptor)) {
                    if (te(o) || te(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (te(o)) {
                      if (te(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    ee(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map($)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("ha-yaml-editor")],
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
                    !(o = (t = Q(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== oe(o) && "function" != typeof o)
                      ? X(i)
                      : o),
                  e(X(r)),
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
                    t && Z(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "value",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "defaultValue",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "isValid",
                value: function() {
                  return !0;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "label",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "_yaml",
                value: function() {
                  return "";
                }
              },
              {
                kind: "field",
                decorators: [Object(n.g)("ha-code-editor")],
                key: "_editor",
                value: void 0
              },
              {
                kind: "method",
                key: "setValue",
                value: function(e) {
                  var t = this;
                  try {
                    this._yaml =
                      e &&
                      !(function(e) {
                        if ("object" !== oe(e)) return !1;
                        for (var t in e) if (e.hasOwnProperty(t)) return !1;
                        return !0;
                      })(e)
                        ? Object(T.safeDump)(e)
                        : "";
                  } catch (r) {
                    alert("There was an error converting to YAML: ".concat(r));
                  }
                  G(function() {
                    var e;
                    (null === (e = t._editor) || void 0 === e
                      ? void 0
                      : e.codemirror) && t._editor.codemirror.refresh(),
                      G(function() {
                        return Object(C.a)(t, "editor-refreshed");
                      });
                  });
                }
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function() {
                  this.defaultValue && this.setValue(this.defaultValue);
                }
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  if (void 0 !== this._yaml)
                    return Object(n.e)(
                      J(),
                      this.label ? Object(n.e)(Y(), this.label) : "",
                      this._yaml,
                      !1 === this.isValid,
                      this._onChange
                    );
                }
              },
              {
                kind: "method",
                key: "_onChange",
                value: function(e) {
                  e.stopPropagation();
                  var t,
                    r = e.detail.value,
                    n = !0;
                  if (r)
                    try {
                      t = Object(T.safeLoad)(r);
                    } catch (i) {
                      n = !1;
                    }
                  else t = {};
                  (this.value = t),
                    (this.isValid = n),
                    Object(C.a)(this, "value-changed", {
                      value: t,
                      isValid: n
                    });
                }
              }
            ]
          };
        },
        n.a
      );
      var ae = r(121);
      function se(e) {
        return (se =
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
      function ce(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function le(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, i) {
            var o = e.apply(t, r);
            function a(e) {
              ce(o, n, i, a, s, "next", e);
            }
            function s(e) {
              ce(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function de() {
        var e = he([
          "\n        :host {\n          display: block;\n        }\n        paper-card {\n          display: block;\n        }\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-top: 16px;\n        }\n        iron-autogrow-textarea {\n          width: 100%;\n          font-family: monospace;\n        }\n        .syntaxerror {\n          color: var(--google-red-500);\n        }\n      "
        ]);
        return (
          (de = function() {
            return e;
          }),
          e
        );
      }
      function ue() {
        var e = he([
          '\n                <div class="errors">Invalid YAML</div>\n              '
        ]);
        return (
          (ue = function() {
            return e;
          }),
          e
        );
      }
      function fe() {
        var e = he([
          '\n                <div class="errors">',
          "</div>\n              "
        ]);
        return (
          (fe = function() {
            return e;
          }),
          e
        );
      }
      function pe() {
        var e = he([
          '\n      <paper-card heading="Config">\n        <div class="card-content">\n          <ha-yaml-editor\n            @value-changed=',
          "\n          ></ha-yaml-editor>\n          ",
          "\n          ",
          '\n        </div>\n        <div class="card-actions">\n          <mwc-button class="warning" @click=',
          ">\n            Reset to defaults\n          </mwc-button>\n          <mwc-button\n            @click=",
          "\n            .disabled=",
          "\n          >\n            Save\n          </mwc-button>\n        </div>\n      </paper-card>\n    "
        ]);
        return (
          (pe = function() {
            return e;
          }),
          e
        );
      }
      function he(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function me(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ve(e, t) {
        return (ve =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ye(e) {
        var t,
          r = Ee(e.key);
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
      function be(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function ge(e) {
        return e.decorators && e.decorators.length;
      }
      function we(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function ke(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Ee(e) {
        var t = (function(e, t) {
          if ("object" !== se(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== se(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === se(t) ? t : String(t);
      }
      function Oe(e, t, r) {
        return (Oe =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = je(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function je(e) {
        return (je = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
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
                  if (!ge(e)) return r.push(e);
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
                  for (var d = 0; d < l.length; d++)
                    this.addElementPlacement(l[d], t);
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
              var r = Ee(e.key),
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
                r = ke(e, "finisher"),
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
              var r = ke(e, "finisher"),
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
                  if (we(o.descriptor) || we(i.descriptor)) {
                    if (ge(o) || ge(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (ge(o)) {
                      if (ge(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    be(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(ye)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-addon-config")],
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
                  !(o = (t = je(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== se(o) && "function" != typeof o)
                    ? me(i)
                    : o),
                e(me(r)),
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
                  t && ve(e, t);
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
                key: "addon",
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
                decorators: [Object(n.f)({ type: Boolean })],
                key: "_configHasChanged",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.g)("ha-yaml-editor")],
                key: "_editor",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e = this._editor,
                    t = !e || e.isValid;
                  return Object(n.e)(
                    pe(),
                    this._configChanged,
                    this._error ? Object(n.e)(fe(), this._error) : "",
                    t ? "" : Object(n.e)(ue()),
                    this._resetTapped,
                    this._saveTapped,
                    !this._configHasChanged || !t
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [a.b, o.a, Object(n.c)(de())];
                }
              },
              {
                kind: "method",
                key: "updated",
                value: function(e) {
                  Oe(je(r.prototype), "updated", this).call(this, e),
                    e.has("addon") && this._editor.setValue(this.addon.options);
                }
              },
              {
                kind: "method",
                key: "_configChanged",
                value: function() {
                  (this._configHasChanged = !0), this.requestUpdate();
                }
              },
              {
                kind: "method",
                key: "_resetTapped",
                value: (function() {
                  var e = le(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Object(ae.b)(this, {
                                    title: this.addon.name,
                                    text:
                                      "Are you sure you want to reset all your options?",
                                    confirmText: "reset options"
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
                                  Object(i.g)(this.hass, this.addon.slug, t)
                                );
                              case 10:
                                (this._configHasChanged = !1),
                                  (r = {
                                    success: !0,
                                    response: void 0,
                                    path: "options"
                                  }),
                                  Object(C.a)(this, "hass-api-called", r),
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
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "_saveTapped",
                value: (function() {
                  var e = le(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n;
                      return regeneratorRuntime.wrap(
                        function(e) {
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
                                  Object(i.g)(this.hass, this.addon.slug, t)
                                );
                              case 12:
                                (this._configHasChanged = !1),
                                  (r = {
                                    success: !0,
                                    response: void 0,
                                    path: "options"
                                  }),
                                  Object(C.a)(this, "hass-api-called", r),
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
                          [9, 17]
                        ]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              }
            ]
          };
        },
        n.a
      ),
        r(22),
        r(167);
      var _e = r(47);
      r(50), r(115);
      function Pe(e) {
        return (Pe =
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
      function xe(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function De(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ae(e, t, r) {
        return (Ae =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Ce(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function Ce(e) {
        return (Ce = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Te(e, t) {
        return (Te =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var Se = customElements.get("iron-icon"),
        ze = !1,
        Re = (function(e) {
          function t() {
            var e, r, n, i, o, a, s;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            for (var c = arguments.length, l = new Array(c), d = 0; d < c; d++)
              l[d] = arguments[d];
            return (
              (n = this),
              (r =
                !(i = (e = Ce(t)).call.apply(e, [this].concat(l))) ||
                ("object" !== Pe(i) && "function" != typeof i)
                  ? De(n)
                  : i),
              (o = De(r)),
              (s = void 0),
              (a = "_iconsetName") in o
                ? Object.defineProperty(o, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  })
                : (o[a] = s),
              r
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
                t && Te(e, t);
            })(t, Se),
            (n = t),
            (i = [
              {
                key: "listen",
                value: function(e, n, i) {
                  Ae(Ce(t.prototype), "listen", this).call(this, e, n, i),
                    ze ||
                      "mdi" !== this._iconsetName ||
                      ((ze = !0), r.e(11).then(r.bind(null, 182)));
                }
              }
            ]) && xe(n.prototype, i),
            o && xe(n, o),
            t
          );
        })();
      function Fe(e) {
        return (Fe =
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
      function Ie() {
        var e = Ve([
          "\n        .badge-container {\n          display: inline-block;\n          text-align: center;\n          vertical-align: top;\n        }\n        .label-badge {\n          position: relative;\n          display: block;\n          margin: 0 auto;\n          width: var(--ha-label-badge-size, 2.5em);\n          text-align: center;\n          height: var(--ha-label-badge-size, 2.5em);\n          line-height: var(--ha-label-badge-size, 2.5em);\n          font-size: var(--ha-label-badge-font-size, 1.5em);\n          border-radius: 50%;\n          border: 0.1em solid var(--ha-label-badge-color, var(--primary-color));\n          color: var(--label-badge-text-color, rgb(76, 76, 76));\n\n          white-space: nowrap;\n          background-color: var(--label-badge-background-color, white);\n          background-size: cover;\n          transition: border 0.3s ease-in-out;\n        }\n        .label-badge .value {\n          font-size: 90%;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        .label-badge .value.big {\n          font-size: 70%;\n        }\n        .label-badge .label {\n          position: absolute;\n          bottom: -1em;\n          /* Make the label as wide as container+border. (parent_borderwidth / font-size) */\n          left: -0.2em;\n          right: -0.2em;\n          line-height: 1em;\n          font-size: 0.5em;\n        }\n        .label-badge .label span {\n          box-sizing: border-box;\n          max-width: 100%;\n          display: inline-block;\n          background-color: var(--ha-label-badge-color, var(--primary-color));\n          color: var(--ha-label-badge-label-color, white);\n          border-radius: 1em;\n          padding: 9% 16% 8% 16%; /* mostly apitalized text, not much descenders => bit more top margin */\n          font-weight: 500;\n          overflow: hidden;\n          text-transform: uppercase;\n          text-overflow: ellipsis;\n          transition: background-color 0.3s ease-in-out;\n          text-transform: var(--ha-label-badge-label-text-transform, uppercase);\n        }\n        .label-badge .label.big span {\n          font-size: 90%;\n          padding: 10% 12% 7% 12%; /* push smaller text a bit down to center vertically */\n        }\n        .badge-container .title {\n          margin-top: 1em;\n          font-size: var(--ha-label-badge-title-font-size, 0.9em);\n          width: var(--ha-label-badge-title-width, 5em);\n          font-weight: var(--ha-label-badge-title-font-weight, 400);\n          overflow: hidden;\n          text-overflow: ellipsis;\n          line-height: normal;\n        }\n      "
        ]);
        return (
          (Ie = function() {
            return e;
          }),
          e
        );
      }
      function He() {
        var e = Ve([
          '\n              <div class="title">',
          "</div>\n            "
        ]);
        return (
          (He = function() {
            return e;
          }),
          e
        );
      }
      function Ne() {
        var e = Ve([
          '\n                <div\n                  class="',
          '"\n                >\n                  <span>',
          "</span>\n                </div>\n              "
        ]);
        return (
          (Ne = function() {
            return e;
          }),
          e
        );
      }
      function Me() {
        var e = Ve(["\n                  <span>", "</span>\n                "]);
        return (
          (Me = function() {
            return e;
          }),
          e
        );
      }
      function Ue() {
        var e = Ve([
          '\n                  <ha-icon .icon="',
          '"></ha-icon>\n                '
        ]);
        return (
          (Ue = function() {
            return e;
          }),
          e
        );
      }
      function Le() {
        var e = Ve([
          '\n      <div class="badge-container">\n        <div class="label-badge" id="badge">\n          <div\n            class="',
          '"\n          >\n            ',
          "\n            ",
          "\n          </div>\n          ",
          "\n        </div>\n        ",
          "\n      </div>\n    "
        ]);
        return (
          (Le = function() {
            return e;
          }),
          e
        );
      }
      function Ve(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Be(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function qe(e, t) {
        return (qe =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function We(e) {
        var t,
          r = Qe(e.key);
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
      function Ge(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Ye(e) {
        return e.decorators && e.decorators.length;
      }
      function Je(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Ke(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Qe(e) {
        var t = (function(e, t) {
          if ("object" !== Fe(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Fe(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Fe(t) ? t : String(t);
      }
      function Xe(e, t, r) {
        return (Xe =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Ze(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function Ze(e) {
        return (Ze = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      customElements.define("ha-icon", Re);
      var $e = (function(e, t, r, n) {
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
                  if (!Ye(e)) return r.push(e);
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
                  for (var d = 0; d < l.length; d++)
                    this.addElementPlacement(l[d], t);
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
              var r = Qe(e.key),
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
                r = Ke(e, "finisher"),
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
              var r = Ke(e, "finisher"),
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
                  if (Je(o.descriptor) || Je(i.descriptor)) {
                    if (Ye(o) || Ye(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Ye(o)) {
                      if (Ye(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Ge(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(We)),
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
                  !(o = (t = Ze(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== Fe(o) && "function" != typeof o)
                    ? Be(i)
                    : o),
                e(Be(r)),
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
                  t && qe(e, t);
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
                key: "value",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "icon",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "label",
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
                decorators: [Object(n.f)()],
                key: "image",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    Le(),
                    Object(_e.a)({
                      value: !0,
                      big: Boolean(this.value && this.value.length > 4)
                    }),
                    !this.icon || this.value || this.image
                      ? ""
                      : Object(n.e)(Ue(), this.icon),
                    this.value && !this.image
                      ? Object(n.e)(Me(), this.value)
                      : "",
                    this.label
                      ? Object(n.e)(
                          Ne(),
                          Object(_e.a)({
                            label: !0,
                            big: this.label.length > 5
                          }),
                          this.label
                        )
                      : "",
                    this.description ? Object(n.e)(He(), this.description) : ""
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [Object(n.c)(Ie())];
                }
              },
              {
                kind: "method",
                key: "updated",
                value: function(e) {
                  Xe(Ze(r.prototype), "updated", this).call(this, e),
                    e.has("image") &&
                      (this.shadowRoot.getElementById(
                        "badge"
                      ).style.backgroundImage = this.image
                        ? "url(".concat(this.image, ")")
                        : "");
                }
              }
            ]
          };
        },
        n.a
      );
      customElements.define("ha-label-badge", $e);
      r(88), r(94), r(41);
      var et = r(37),
        tt = r(119),
        rt = r(85);
      function nt(e) {
        return (nt =
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
      function it(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function ot(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, i) {
            var o = e.apply(t, r);
            function a(e) {
              it(o, n, i, a, s, "next", e);
            }
            function s(e) {
              it(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function at() {
        var e = Ut([
          "\n        :host {\n          display: block;\n        }\n        paper-card {\n          display: block;\n          margin-bottom: 16px;\n        }\n        paper-card.warning {\n          background-color: var(--google-red-500);\n          color: white;\n          --paper-card-header-color: white;\n        }\n        paper-card.warning mwc-button {\n          --mdc-theme-primary: white !important;\n        }\n        .warning {\n          color: var(--google-red-500);\n          --mdc-theme-primary: var(--google-red-500);\n        }\n        .light-color {\n          color: var(--secondary-text-color);\n        }\n        .addon-header {\n          font-size: 24px;\n          color: var(--paper-card-header-color, --primary-text-color);\n        }\n        .addon-version {\n          float: right;\n          font-size: 15px;\n          vertical-align: middle;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-bottom: 16px;\n        }\n        .description {\n          margin-bottom: 16px;\n        }\n        .logo img {\n          max-height: 60px;\n          margin: 16px 0;\n          display: block;\n        }\n        .state {\n          display: flex;\n          margin: 33px 0;\n        }\n        .state div {\n          width: 180px;\n          display: inline-block;\n        }\n        .state iron-icon {\n          width: 16px;\n          height: 16px;\n          color: var(--secondary-text-color);\n        }\n        ha-switch {\n          display: flex;\n        }\n        iron-icon.running {\n          color: var(--paper-green-400);\n        }\n        iron-icon.stopped {\n          color: var(--google-red-300);\n        }\n        ha-call-api-button {\n          font-weight: 500;\n          color: var(--primary-color);\n        }\n        .right {\n          float: right;\n        }\n        ha-markdown img {\n          max-width: 100%;\n        }\n        protection-enable mwc-button {\n          --mdc-theme-primary: white;\n        }\n        .description a,\n        ha-markdown a {\n          color: var(--primary-color);\n        }\n        .red {\n          --ha-label-badge-color: var(--label-badge-red, #df4c1e);\n        }\n        .blue {\n          --ha-label-badge-color: var(--label-badge-blue, #039be5);\n        }\n        .green {\n          --ha-label-badge-color: var(--label-badge-green, #0da035);\n        }\n        .yellow {\n          --ha-label-badge-color: var(--label-badge-yellow, #f4b400);\n        }\n        .security {\n          margin-bottom: 16px;\n        }\n        .card-actions {\n          display: flow-root;\n        }\n        .security h3 {\n          margin-bottom: 8px;\n          font-weight: normal;\n        }\n        .security ha-label-badge {\n          cursor: pointer;\n          margin-right: 4px;\n          --iron-icon-height: 45px;\n        }\n      "
        ]);
        return (
          (at = function() {
            return e;
          }),
          e
        );
      }
      function st() {
        var e = Ut([
          '\n            <paper-card>\n              <div class="card-content">\n                <ha-markdown\n                  .content=',
          "\n                ></ha-markdown>\n              </div>\n            </paper-card>\n          "
        ]);
        return (
          (st = function() {
            return e;
          }),
          e
        );
      }
      function ct() {
        var e = Ut([
          '\n                      <p class="warning">\n                        This add-on is not available on your system.\n                      </p>\n                    '
        ]);
        return (
          (ct = function() {
            return e;
          }),
          e
        );
      }
      function lt() {
        var e = Ut([
          "\n                ",
          "\n                <ha-progress-button\n                  .disabled=",
          "\n                  .progress=",
          "\n                  @click=",
          "\n                >\n                  Install\n                </ha-progress-button>\n              "
        ]);
        return (
          (lt = function() {
            return e;
          }),
          e
        );
      }
      function dt() {
        var e = Ut([
          '\n                      <mwc-button class="right" @click=',
          ">\n                        Open web UI\n                      </mwc-button>\n                    "
        ]);
        return (
          (dt = function() {
            return e;
          }),
          e
        );
      }
      function ut() {
        var e = Ut([
          "\n                      <a\n                        .href=",
          '\n                        tabindex="-1"\n                        target="_blank"\n                        class="right"\n                        rel="noopener"\n                      >\n                        <mwc-button>\n                          Open web UI\n                        </mwc-button>\n                      </a>\n                    '
        ]);
        return (
          (ut = function() {
            return e;
          }),
          e
        );
      }
      function ft() {
        var e = Ut([
          "\n                      <ha-call-api-button\n                        .hass=",
          '\n                        .path="hassio/addons/',
          '/start"\n                      >\n                        Start\n                      </ha-call-api-button>\n                    '
        ]);
        return (
          (ft = function() {
            return e;
          }),
          e
        );
      }
      function pt() {
        var e = Ut([
          '\n                      <ha-call-api-button\n                        class="warning"\n                        .hass=',
          '\n                        .path="hassio/addons/',
          '/restart"\n                      >\n                        Restart\n                      </ha-call-api-button>\n                      <ha-call-api-button\n                        class="warning"\n                        .hass=',
          '\n                        .path="hassio/addons/',
          '/stop"\n                      >\n                        Stop\n                      </ha-call-api-button>\n                    '
        ]);
        return (
          (pt = function() {
            return e;
          }),
          e
        );
      }
      function ht() {
        var e = Ut([
          '\n                      <ha-call-api-button\n                        class="warning"\n                        .hass=',
          '\n                        .path="hassio/addons/',
          '/rebuild"\n                      >\n                        Rebuild\n                      </ha-call-api-button>\n                    '
        ]);
        return (
          (ht = function() {
            return e;
          }),
          e
        );
      }
      function mt() {
        var e = Ut([
          '\n                <mwc-button class="warning" @click=',
          ">\n                  Uninstall\n                </mwc-button>\n                ",
          "\n                ",
          "\n                ",
          "\n                ",
          "\n              "
        ]);
        return (
          (mt = function() {
            return e;
          }),
          e
        );
      }
      function vt() {
        var e = Ut([
          '\n                <div class="errors">',
          "</div>\n              "
        ]);
        return (
          (vt = function() {
            return e;
          }),
          e
        );
      }
      function yt() {
        var e = Ut([
          '\n                      <div class="state">\n                        <div>\n                          Protection mode\n                          <span>\n                            <iron-icon icon="hassio:information"></iron-icon>\n                            <paper-tooltip>\n                              Grant the add-on elevated system access.\n                            </paper-tooltip>\n                          </span>\n                        </div>\n                        <ha-switch\n                          @change=',
          "\n                          .checked=",
          "\n                          haptic\n                        ></ha-switch>\n                      </div>\n                    "
        ]);
        return (
          (yt = function() {
            return e;
          }),
          e
        );
      }
      function bt() {
        var e = Ut([
          "\n                              <span>\n                                This option requires Home Assistant 0.92 or\n                                later.\n                              </span>\n                            "
        ]);
        return (
          (bt = function() {
            return e;
          }),
          e
        );
      }
      function gt() {
        var e = Ut([
          '\n                      <div class="state">\n                        <div>Show in sidebar</div>\n                        <ha-switch\n                          @change=',
          "\n                          .checked=",
          "\n                          .disabled=",
          "\n                          haptic\n                        ></ha-switch>\n                        ",
          "\n                      </div>\n                    "
        ]);
        return (
          (gt = function() {
            return e;
          }),
          e
        );
      }
      function wt() {
        var e = Ut([
          '\n                <div class="state">\n                  <div>Start on boot</div>\n                  <ha-switch\n                    @change=',
          "\n                    .checked=",
          '\n                    haptic\n                  ></ha-switch>\n                </div>\n                <div class="state">\n                  <div>Auto update</div>\n                  <ha-switch\n                    @change=',
          "\n                    .checked=",
          "\n                    haptic\n                  ></ha-switch>\n                </div>\n                ",
          "\n                ",
          "\n              "
        ]);
        return (
          (wt = function() {
            return e;
          }),
          e
        );
      }
      function kt() {
        var e = Ut([
          "\n                  <ha-label-badge\n                    @click=",
          '\n                    id="ingress"\n                    icon="hassio:cursor-default-click-outline"\n                    label="ingress"\n                    description=""\n                  ></ha-label-badge>\n                '
        ]);
        return (
          (kt = function() {
            return e;
          }),
          e
        );
      }
      function Et() {
        var e = Ut([
          "\n                  <ha-label-badge\n                    @click=",
          '\n                    id="auth_api"\n                    icon="hassio:key"\n                    label="auth"\n                    description=""\n                  ></ha-label-badge>\n                '
        ]);
        return (
          (Et = function() {
            return e;
          }),
          e
        );
      }
      function Ot() {
        var e = Ut([
          "\n                  <ha-label-badge\n                    @click=",
          "\n                    class=",
          '\n                    id="apparmor"\n                    icon="hassio:shield"\n                    label="apparmor"\n                    description=""\n                  ></ha-label-badge>\n                '
        ]);
        return (
          (Ot = function() {
            return e;
          }),
          e
        );
      }
      function jt() {
        var e = Ut([
          "\n                  <ha-label-badge\n                    @click=",
          '\n                    id="host_pid"\n                    icon="hassio:pound"\n                    label="host pid"\n                    description=""\n                  ></ha-label-badge>\n                '
        ]);
        return (
          (jt = function() {
            return e;
          }),
          e
        );
      }
      function _t() {
        var e = Ut([
          "\n                  <ha-label-badge\n                    @click=",
          '\n                    id="docker_api"\n                    icon="hassio:docker"\n                    label="docker"\n                    description=""\n                  ></ha-label-badge>\n                '
        ]);
        return (
          (_t = function() {
            return e;
          }),
          e
        );
      }
      function Pt() {
        var e = Ut([
          "\n                  <ha-label-badge\n                    @click=",
          '\n                    id="hassio_api"\n                    icon="hassio:home-assistant"\n                    label="hassio"\n                    .description=',
          "\n                  ></ha-label-badge>\n                "
        ]);
        return (
          (Pt = function() {
            return e;
          }),
          e
        );
      }
      function xt() {
        var e = Ut([
          "\n                  <ha-label-badge\n                    @click=",
          '\n                    id="homeassistant_api"\n                    icon="hassio:home-assistant"\n                    label="hass"\n                    description=""\n                  ></ha-label-badge>\n                '
        ]);
        return (
          (xt = function() {
            return e;
          }),
          e
        );
      }
      function Dt() {
        var e = Ut([
          "\n                  <ha-label-badge\n                    @click=",
          '\n                    id="full_access"\n                    icon="hassio:chip"\n                    label="hardware"\n                    description=""\n                  ></ha-label-badge>\n                '
        ]);
        return (
          (Dt = function() {
            return e;
          }),
          e
        );
      }
      function At() {
        var e = Ut([
          "\n                  <ha-label-badge\n                    @click=",
          '\n                    id="host_network"\n                    icon="hassio:network"\n                    label="host"\n                    description=""\n                  ></ha-label-badge>\n                '
        ]);
        return (
          (At = function() {
            return e;
          }),
          e
        );
      }
      function Ct() {
        var e = Ut([
          '\n                <a\n                  href="',
          '"\n                  target="_blank"\n                  class="logo"\n                  rel="noreferrer"\n                >\n                  <img src="/api/hassio/addons/',
          '/logo" />\n                </a>\n              '
        ]);
        return (
          (Ct = function() {
            return e;
          }),
          e
        );
      }
      function Tt() {
        var e = Ut(["\n                    ", "\n                  "]);
        return (
          (Tt = function() {
            return e;
          }),
          e
        );
      }
      function St() {
        var e = Ut([
          '\n                          <iron-icon\n                            title="Add-on is stopped"\n                            class="stopped"\n                            icon="hassio:circle"\n                          ></iron-icon>\n                        '
        ]);
        return (
          (St = function() {
            return e;
          }),
          e
        );
      }
      function zt() {
        var e = Ut([
          '\n                          <iron-icon\n                            title="Add-on is running"\n                            class="running"\n                            icon="hassio:circle"\n                          ></iron-icon>\n                        '
        ]);
        return (
          (zt = function() {
            return e;
          }),
          e
        );
      }
      function Rt() {
        var e = Ut([
          "\n                    ",
          "\n                    ",
          "\n                  "
        ]);
        return (
          (Rt = function() {
            return e;
          }),
          e
        );
      }
      function Ft() {
        var e = Ut([
          '\n        <paper-card heading="Warning: Protection mode is disabled!" class="warning">\n          <div class="card-content">\n            Protection mode on this add-on is disabled! This gives the add-on full access to the entire system, which adds security risks, and could damage your system when used incorrectly. Only disable the protection mode if you know, need AND trust the source of this add-on.\n          </div>\n          <div class="card-actions protection-enable">\n              <mwc-button @click=',
          ">Enable Protection mode</mwc-button>\n            </div>\n          </div>\n        </paper-card>\n      "
        ]);
        return (
          (Ft = function() {
            return e;
          }),
          e
        );
      }
      function It() {
        var e = Ut([
          "\n                      <mwc-button @click=",
          ">\n                        Changelog\n                      </mwc-button>\n                    "
        ]);
        return (
          (It = function() {
            return e;
          }),
          e
        );
      }
      function Ht() {
        var e = Ut([
          "\n                      <p>\n                        This update is no longer compatible with your system.\n                      </p>\n                    "
        ]);
        return (
          (Ht = function() {
            return e;
          }),
          e
        );
      }
      function Nt() {
        var e = Ut([
          '\n            <paper-card heading="Update available! 🎉">\n              <div class="card-content">\n                <hassio-card-content\n                  .hass=',
          '\n                  .title="',
          " ",
          ' is available"\n                  .description="You are currently running version ',
          '"\n                  icon="hassio:arrow-up-bold-circle"\n                  iconClass="update"\n                ></hassio-card-content>\n                ',
          '\n              </div>\n              <div class="card-actions">\n                <ha-call-api-button\n                  .hass=',
          "\n                  .disabled=",
          '\n                  path="hassio/addons/',
          '/update"\n                >\n                  Update\n                </ha-call-api-button>\n                ',
          "\n              </div>\n            </paper-card>\n          "
        ]);
        return (
          (Nt = function() {
            return e;
          }),
          e
        );
      }
      function Mt() {
        var e = Ut([
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
          "\n    "
        ]);
        return (
          (Mt = function() {
            return e;
          }),
          e
        );
      }
      function Ut(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Lt(e) {
        return (Lt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Vt(e) {
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
      function qt(e) {
        var t,
          r = Kt(e.key);
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
      function Wt(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Gt(e) {
        return e.decorators && e.decorators.length;
      }
      function Yt(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Jt(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Kt(e) {
        var t = (function(e, t) {
          if ("object" !== nt(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== nt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === nt(t) ? t : String(t);
      }
      var Qt = {
          rating: {
            title: "Add-on Security Rating",
            description:
              "Hass.io provides a security rating to each of the add-ons, which indicates the risks involved when using this add-on. The more access an add-on requires on your system, the lower the score, thus raising the possible security risks.\n\nA score is on a scale from 1 to 6. Where 1 is the lowest score (considered the most insecure and highest risk) and a score of 6 is the highest score (considered the most secure and lowest risk)."
          },
          host_network: {
            title: "Host Network",
            description:
              "Add-ons usually run in their own isolated network layer, which prevents them from accessing the network of the host operating system. In some cases, this network isolation can limit add-ons in providing their services and therefore, the isolation can be lifted by the add-on author, giving the add-on full access to the network capabilities of the host machine. This gives the add-on more networking capabilities but lowers the security, hence, the security rating of the add-on will be lowered when this option is used by the add-on."
          },
          homeassistant_api: {
            title: "Home Assistant API Access",
            description:
              "This add-on is allowed to access your running Home Assistant instance directly via the Home Assistant API. This mode handles authentication for the add-on as well, which enables an add-on to interact with Home Assistant without the need for additional authentication tokens."
          },
          full_access: {
            title: "Full Hardware Access",
            description:
              "This add-on is given full access to the hardware of your system, by request of the add-on author. Access is comparable to the privileged mode in Docker. Since this opens up possible security risks, this feature impacts the add-on security score negatively.\n\nThis level of access is not granted automatically and needs to be confirmed by you. To do this, you need to disable the protection mode on the add-on manually. Only disable the protection mode if you know, need AND trust the source of this add-on."
          },
          hassio_api: {
            title: "Hass.io API Access",
            description:
              "The add-on was given access to the Hass.io API, by request of the add-on author. By default, the add-on can access general version information of your system. When the add-on requests 'manager' or 'admin' level access to the API, it will gain access to control multiple parts of your Hass.io system. This permission is indicated by this badge and will impact the security score of the addon negatively."
          },
          docker_api: {
            title: "Full Docker Access",
            description:
              "The add-on author has requested the add-on to have management access to the Docker instance running on your system. This mode gives the add-on full access and control to your entire Hass.io system, which adds security risks, and could damage your system when misused. Therefore, this feature impacts the add-on security score negatively.\n\nThis level of access is not granted automatically and needs to be confirmed by you. To do this, you need to disable the protection mode on the add-on manually. Only disable the protection mode if you know, need AND trust the source of this add-on."
          },
          host_pid: {
            title: "Host Processes Namespace",
            description:
              "Usually, the processes the add-on runs, are isolated from all other system processes. The add-on author has requested the add-on to have access to the system processes running on the host system instance, and allow the add-on to spawn processes on the host system as well. This mode gives the add-on full access and control to your entire Hass.io system, which adds security risks, and could damage your system when misused. Therefore, this feature impacts the add-on security score negatively.\n\nThis level of access is not granted automatically and needs to be confirmed by you. To do this, you need to disable the protection mode on the add-on manually. Only disable the protection mode if you know, need AND trust the source of this add-on."
          },
          apparmor: {
            title: "AppArmor",
            description:
              "AppArmor ('Application Armor') is a Linux kernel security module that restricts add-ons capabilities like network access, raw socket access, and permission to read, write, or execute specific files.\n\nAdd-on authors can provide their security profiles, optimized for the add-on, or request it to be disabled. If AppArmor is disabled, it will raise security risks and therefore, has a negative impact on the security score of the add-on."
          },
          auth_api: {
            title: "Home Assistant Authentication",
            description:
              "An add-on can authenticate users against Home Assistant, allowing add-ons to give users the possibility to log into applications running inside add-ons, using their Home Assistant username/password. This badge indicates if the add-on author requests this capability."
          },
          ingress: {
            title: "Ingress",
            description:
              "This add-on is using Ingress to embed its interface securely into Home Assistant."
          }
        },
        Xt =
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
                      if (!Gt(e)) return r.push(e);
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
                      for (var d = 0; d < l.length; d++)
                        this.addElementPlacement(l[d], t);
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
                  var r = Kt(e.key),
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
                    r = Jt(e, "finisher"),
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
                  var r = Jt(e, "finisher"),
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
                      if (Yt(o.descriptor) || Yt(i.descriptor)) {
                        if (Gt(o) || Gt(i))
                          throw new ReferenceError(
                            "Duplicated methods (" +
                              o.key +
                              ") can't be decorated."
                          );
                        i.descriptor = o.descriptor;
                      } else {
                        if (Gt(o)) {
                          if (Gt(i))
                            throw new ReferenceError(
                              "Decorators can't be placed on different accessors with for the same property (" +
                                o.key +
                                ")."
                            );
                          i.decorators = o.decorators;
                        }
                        Wt(o, i);
                      }
                    else t.push(o);
                  }
                  return t;
                })(a.d.map(qt)),
                e
              );
            i.initializeClassElements(a.F, s.elements),
              i.runClassFinishers(a.F, s.finishers);
          })(
            [Object(n.d)("hassio-addon-info")],
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
                        !(o = (t = Lt(n)).call.apply(t, [this].concat(s))) ||
                        ("object" !== nt(o) && "function" != typeof o)
                          ? Vt(i)
                          : o),
                      e(Vt(r)),
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
                        t && Bt(e, t);
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
                    key: "addon",
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
                    decorators: [Object(n.f)({ type: Boolean })],
                    key: "_installing",
                    value: function() {
                      return !1;
                    }
                  },
                  {
                    kind: "method",
                    key: "render",
                    value: function() {
                      return Object(n.e)(
                        Mt(),
                        this._computeUpdateAvailable
                          ? Object(n.e)(
                              Nt(),
                              this.hass,
                              this.addon.name,
                              this.addon.version_latest,
                              this.addon.version,
                              this.addon.available ? "" : Object(n.e)(Ht()),
                              this.hass,
                              !this.addon.available,
                              this.addon.slug,
                              this.addon.changelog
                                ? Object(n.e)(It(), this._openChangelog)
                                : ""
                            )
                          : "",
                        this.addon.protected
                          ? ""
                          : Object(n.e)(Ft(), this._protectionToggled),
                        this.addon.name,
                        this.addon.version
                          ? Object(n.e)(
                              Rt(),
                              this.addon.version,
                              this._computeIsRunning
                                ? Object(n.e)(zt())
                                : Object(n.e)(St())
                            )
                          : Object(n.e)(Tt(), this.addon.version_latest),
                        this.addon.description,
                        this.addon.url,
                        this.addon.name,
                        this.addon.logo
                          ? Object(n.e)(Ct(), this.addon.url, this.addon.slug)
                          : "",
                        Object(_e.a)({
                          green: [5, 6].includes(Number(this.addon.rating)),
                          yellow: [3, 4].includes(Number(this.addon.rating)),
                          red: [1, 2].includes(Number(this.addon.rating))
                        }),
                        this._showMoreInfo,
                        this.addon.rating,
                        this.addon.host_network
                          ? Object(n.e)(At(), this._showMoreInfo)
                          : "",
                        this.addon.full_access
                          ? Object(n.e)(Dt(), this._showMoreInfo)
                          : "",
                        this.addon.homeassistant_api
                          ? Object(n.e)(xt(), this._showMoreInfo)
                          : "",
                        this._computeHassioApi
                          ? Object(n.e)(
                              Pt(),
                              this._showMoreInfo,
                              this.addon.hassio_role
                            )
                          : "",
                        this.addon.docker_api
                          ? Object(n.e)(_t(), this._showMoreInfo)
                          : "",
                        this.addon.host_pid
                          ? Object(n.e)(jt(), this._showMoreInfo)
                          : "",
                        this.addon.apparmor
                          ? Object(n.e)(
                              Ot(),
                              this._showMoreInfo,
                              this._computeApparmorClassName
                            )
                          : "",
                        this.addon.auth_api
                          ? Object(n.e)(Et(), this._showMoreInfo)
                          : "",
                        this.addon.ingress
                          ? Object(n.e)(kt(), this._showMoreInfo)
                          : "",
                        this.addon.version
                          ? Object(n.e)(
                              wt(),
                              this._startOnBootToggled,
                              "auto" === this.addon.boot,
                              this._autoUpdateToggled,
                              this.addon.auto_update,
                              this.addon.ingress
                                ? Object(n.e)(
                                    gt(),
                                    this._panelToggled,
                                    this.addon.ingress_panel,
                                    this._computeCannotIngressSidebar,
                                    this._computeCannotIngressSidebar
                                      ? Object(n.e)(bt())
                                      : ""
                                  )
                                : "",
                              this._computeUsesProtectedOptions
                                ? Object(n.e)(
                                    yt(),
                                    this._protectionToggled,
                                    this.addon.protected
                                  )
                                : ""
                            )
                          : "",
                        this._error ? Object(n.e)(vt(), this._error) : "",
                        this.addon.version
                          ? Object(n.e)(
                              mt(),
                              this._uninstallClicked,
                              this.addon.build
                                ? Object(n.e)(ht(), this.hass, this.addon.slug)
                                : "",
                              this._computeIsRunning
                                ? Object(n.e)(
                                    pt(),
                                    this.hass,
                                    this.addon.slug,
                                    this.hass,
                                    this.addon.slug
                                  )
                                : Object(n.e)(ft(), this.hass, this.addon.slug),
                              this._computeShowWebUI
                                ? Object(n.e)(ut(), this._pathWebui)
                                : "",
                              this._computeShowIngressUI
                                ? Object(n.e)(dt(), this._openIngress)
                                : ""
                            )
                          : Object(n.e)(
                              lt(),
                              this.addon.available ? "" : Object(n.e)(ct()),
                              !this.addon.available || this._installing,
                              this._installing,
                              this._installClicked
                            ),
                        this.addon.long_description
                          ? Object(n.e)(st(), this.addon.long_description)
                          : ""
                      );
                    }
                  },
                  {
                    kind: "get",
                    static: !0,
                    key: "styles",
                    value: function() {
                      return [a.b, o.a, Object(n.c)(at())];
                    }
                  },
                  {
                    kind: "get",
                    key: "_computeHassioApi",
                    value: function() {
                      return (
                        this.addon.hassio_api &&
                        ("manager" === this.addon.hassio_role ||
                          "admin" === this.addon.hassio_role)
                      );
                    }
                  },
                  {
                    kind: "get",
                    key: "_computeApparmorClassName",
                    value: function() {
                      return "profile" === this.addon.apparmor
                        ? "green"
                        : "disable" === this.addon.apparmor
                        ? "red"
                        : "";
                    }
                  },
                  {
                    kind: "method",
                    key: "_showMoreInfo",
                    value: function(e) {
                      var t = e.target.getAttribute("id");
                      Object(tt.a)(this, {
                        title: Qt[t].title,
                        content: Qt[t].description
                      });
                    }
                  },
                  {
                    kind: "get",
                    key: "_computeIsRunning",
                    value: function() {
                      var e;
                      return (
                        "started" ===
                        (null === (e = this.addon) || void 0 === e
                          ? void 0
                          : e.state)
                      );
                    }
                  },
                  {
                    kind: "get",
                    key: "_computeUpdateAvailable",
                    value: function() {
                      return (
                        this.addon &&
                        !this.addon.detached &&
                        this.addon.version &&
                        this.addon.version !== this.addon.version_latest
                      );
                    }
                  },
                  {
                    kind: "get",
                    key: "_pathWebui",
                    value: function() {
                      return (
                        this.addon.webui &&
                        this.addon.webui.replace(
                          "[HOST]",
                          document.location.hostname
                        )
                      );
                    }
                  },
                  {
                    kind: "get",
                    key: "_computeShowWebUI",
                    value: function() {
                      return (
                        !this.addon.ingress &&
                        this.addon.webui &&
                        this._computeIsRunning
                      );
                    }
                  },
                  {
                    kind: "method",
                    key: "_openIngress",
                    value: function() {
                      Object(et.a)(
                        this,
                        "/hassio/ingress/".concat(this.addon.slug)
                      );
                    }
                  },
                  {
                    kind: "get",
                    key: "_computeShowIngressUI",
                    value: function() {
                      return this.addon.ingress && this._computeIsRunning;
                    }
                  },
                  {
                    kind: "get",
                    key: "_computeCannotIngressSidebar",
                    value: function() {
                      return (
                        !this.addon.ingress ||
                        !Object(rt.a)(this.hass.config.version, 0, 92)
                      );
                    }
                  },
                  {
                    kind: "get",
                    key: "_computeUsesProtectedOptions",
                    value: function() {
                      return (
                        this.addon.docker_api ||
                        this.addon.full_access ||
                        this.addon.host_pid
                      );
                    }
                  },
                  {
                    kind: "method",
                    key: "_startOnBootToggled",
                    value: (function() {
                      var e = ot(
                        regeneratorRuntime.mark(function e() {
                          var t, r, n;
                          return regeneratorRuntime.wrap(
                            function(e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (this._error = void 0),
                                      (t = {
                                        boot:
                                          "auto" === this.addon.boot
                                            ? "manual"
                                            : "auto"
                                      }),
                                      (e.prev = 2),
                                      (e.next = 5),
                                      Object(i.g)(this.hass, this.addon.slug, t)
                                    );
                                  case 5:
                                    (r = {
                                      success: !0,
                                      response: void 0,
                                      path: "option"
                                    }),
                                      Object(C.a)(this, "hass-api-called", r),
                                      (e.next = 12);
                                    break;
                                  case 9:
                                    (e.prev = 9),
                                      (e.t0 = e.catch(2)),
                                      (this._error = "Failed to set addon option, ".concat(
                                        (null === (n = e.t0.body) ||
                                        void 0 === n
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
                      return function() {
                        return e.apply(this, arguments);
                      };
                    })()
                  },
                  {
                    kind: "method",
                    key: "_autoUpdateToggled",
                    value: (function() {
                      var e = ot(
                        regeneratorRuntime.mark(function e() {
                          var t, r, n;
                          return regeneratorRuntime.wrap(
                            function(e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (this._error = void 0),
                                      (t = {
                                        auto_update: !this.addon.auto_update
                                      }),
                                      (e.prev = 2),
                                      (e.next = 5),
                                      Object(i.g)(this.hass, this.addon.slug, t)
                                    );
                                  case 5:
                                    (r = {
                                      success: !0,
                                      response: void 0,
                                      path: "option"
                                    }),
                                      Object(C.a)(this, "hass-api-called", r),
                                      (e.next = 12);
                                    break;
                                  case 9:
                                    (e.prev = 9),
                                      (e.t0 = e.catch(2)),
                                      (this._error = "Failed to set addon option, ".concat(
                                        (null === (n = e.t0.body) ||
                                        void 0 === n
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
                      return function() {
                        return e.apply(this, arguments);
                      };
                    })()
                  },
                  {
                    kind: "method",
                    key: "_protectionToggled",
                    value: (function() {
                      var e = ot(
                        regeneratorRuntime.mark(function e() {
                          var t, r, n;
                          return regeneratorRuntime.wrap(
                            function(e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (this._error = void 0),
                                      (t = {
                                        protected: !this.addon.protected
                                      }),
                                      (e.prev = 2),
                                      (e.next = 5),
                                      Object(i.h)(this.hass, this.addon.slug, t)
                                    );
                                  case 5:
                                    (r = {
                                      success: !0,
                                      response: void 0,
                                      path: "security"
                                    }),
                                      Object(C.a)(this, "hass-api-called", r),
                                      (e.next = 12);
                                    break;
                                  case 9:
                                    (e.prev = 9),
                                      (e.t0 = e.catch(2)),
                                      (this._error = "Failed to set addon security option, ".concat(
                                        (null === (n = e.t0.body) ||
                                        void 0 === n
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
                      return function() {
                        return e.apply(this, arguments);
                      };
                    })()
                  },
                  {
                    kind: "method",
                    key: "_panelToggled",
                    value: (function() {
                      var e = ot(
                        regeneratorRuntime.mark(function e() {
                          var t, r, n;
                          return regeneratorRuntime.wrap(
                            function(e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (this._error = void 0),
                                      (t = {
                                        ingress_panel: !this.addon.ingress_panel
                                      }),
                                      (e.prev = 2),
                                      (e.next = 5),
                                      Object(i.g)(this.hass, this.addon.slug, t)
                                    );
                                  case 5:
                                    (r = {
                                      success: !0,
                                      response: void 0,
                                      path: "option"
                                    }),
                                      Object(C.a)(this, "hass-api-called", r),
                                      (e.next = 12);
                                    break;
                                  case 9:
                                    (e.prev = 9),
                                      (e.t0 = e.catch(2)),
                                      (this._error = "Failed to set addon option, ".concat(
                                        (null === (n = e.t0.body) ||
                                        void 0 === n
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
                      return function() {
                        return e.apply(this, arguments);
                      };
                    })()
                  },
                  {
                    kind: "method",
                    key: "_openChangelog",
                    value: (function() {
                      var e = ot(
                        regeneratorRuntime.mark(function e() {
                          var t, r;
                          return regeneratorRuntime.wrap(
                            function(e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (this._error = void 0),
                                      (e.prev = 1),
                                      (e.next = 4),
                                      Object(i.a)(this.hass, this.addon.slug)
                                    );
                                  case 4:
                                    (t = e.sent),
                                      Object(tt.a)(this, {
                                        title: "Changelog",
                                        content: t
                                      }),
                                      (e.next = 11);
                                    break;
                                  case 8:
                                    (e.prev = 8),
                                      (e.t0 = e.catch(1)),
                                      (this._error = "Failed to get addon changelog, ".concat(
                                        (null === (r = e.t0.body) ||
                                        void 0 === r
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
                      return function() {
                        return e.apply(this, arguments);
                      };
                    })()
                  },
                  {
                    kind: "method",
                    key: "_installClicked",
                    value: (function() {
                      var e = ot(
                        regeneratorRuntime.mark(function e() {
                          var t, r;
                          return regeneratorRuntime.wrap(
                            function(e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (this._error = void 0),
                                      (this._installing = !0),
                                      (e.prev = 2),
                                      (e.next = 5),
                                      Object(i.e)(this.hass, this.addon.slug)
                                    );
                                  case 5:
                                    (t = {
                                      success: !0,
                                      response: void 0,
                                      path: "install"
                                    }),
                                      Object(C.a)(this, "hass-api-called", t),
                                      (e.next = 12);
                                    break;
                                  case 9:
                                    (e.prev = 9),
                                      (e.t0 = e.catch(2)),
                                      (this._error = "Failed to install addon, ".concat(
                                        (null === (r = e.t0.body) ||
                                        void 0 === r
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
                      return function() {
                        return e.apply(this, arguments);
                      };
                    })()
                  },
                  {
                    kind: "method",
                    key: "_uninstallClicked",
                    value: (function() {
                      var e = ot(
                        regeneratorRuntime.mark(function e() {
                          var t, r;
                          return regeneratorRuntime.wrap(
                            function(e) {
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
                                      Object(i.i)(this.hass, this.addon.slug)
                                    );
                                  case 6:
                                    (t = {
                                      success: !0,
                                      response: void 0,
                                      path: "uninstall"
                                    }),
                                      Object(C.a)(this, "hass-api-called", t),
                                      (e.next = 13);
                                    break;
                                  case 10:
                                    (e.prev = 10),
                                      (e.t0 = e.catch(3)),
                                      (this._error = "Failed to uninstall addon, ".concat(
                                        (null === (r = e.t0.body) ||
                                        void 0 === r
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
                      return function() {
                        return e.apply(this, arguments);
                      };
                    })()
                  }
                ]
              };
            },
            n.a
          ),
          r(120));
      function Zt(e) {
        return (Zt =
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
      function $t() {
        var e = rr([
          "\n        :host,\n        paper-card {\n          display: block;\n        }\n        pre {\n          overflow-x: auto;\n          white-space: pre-wrap;\n          overflow-wrap: break-word;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-bottom: 16px;\n        }\n      "
        ]);
        return (
          ($t = function() {
            return e;
          }),
          e
        );
      }
      function er() {
        var e = rr([
          '\n              <div class="errors">',
          "</div>\n            "
        ]);
        return (
          (er = function() {
            return e;
          }),
          e
        );
      }
      function tr() {
        var e = rr([
          '\n      <paper-card heading="Log">\n        ',
          '\n        <div class="card-content" id="content"></div>\n        <div class="card-actions">\n          <mwc-button @click=',
          ">Refresh</mwc-button>\n        </div>\n      </paper-card>\n    "
        ]);
        return (
          (tr = function() {
            return e;
          }),
          e
        );
      }
      function rr(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function nr(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function ir(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, i) {
            var o = e.apply(t, r);
            function a(e) {
              nr(o, n, i, a, s, "next", e);
            }
            function s(e) {
              nr(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function or(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ar(e, t) {
        return (ar =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function sr(e) {
        var t,
          r = fr(e.key);
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
      function cr(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function lr(e) {
        return e.decorators && e.decorators.length;
      }
      function dr(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function ur(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function fr(e) {
        var t = (function(e, t) {
          if ("object" !== Zt(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Zt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Zt(t) ? t : String(t);
      }
      function pr(e, t, r) {
        return (pr =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = hr(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function hr(e) {
        return (hr = Object.setPrototypeOf
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
                  if (!lr(e)) return r.push(e);
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
                  for (var d = 0; d < l.length; d++)
                    this.addElementPlacement(l[d], t);
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
              var r = fr(e.key),
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
                r = ur(e, "finisher"),
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
              var r = ur(e, "finisher"),
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
                  if (dr(o.descriptor) || dr(i.descriptor)) {
                    if (lr(o) || lr(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (lr(o)) {
                      if (lr(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    cr(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(sr)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-addon-logs")],
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
                  !(o = (t = hr(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== Zt(o) && "function" != typeof o)
                    ? or(i)
                    : o),
                e(or(r)),
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
                  t && ar(e, t);
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
                key: "addon",
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
                value: (function() {
                  var e = ir(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  pr(
                                    hr(r.prototype),
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
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    tr(),
                    this._error ? Object(n.e)(er(), this._error) : "",
                    this._refresh
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [a.b, o.a, Xt.a, Object(n.c)($t())];
                }
              },
              {
                kind: "method",
                key: "_loadData",
                value: (function() {
                  var e = ir(
                    regeneratorRuntime.mark(function e() {
                      var t, r;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  Object(i.c)(this.hass, this.addon.slug)
                                );
                              case 4:
                                for (t = e.sent; this._logContent.lastChild; )
                                  this._logContent.removeChild(
                                    this._logContent.lastChild
                                  );
                                this._logContent.appendChild(Object(Xt.b)(t)),
                                  (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(1)),
                                  (this._error = "Failed to get addon logs, ".concat(
                                    (null === (r = e.t0.body) || void 0 === r
                                      ? void 0
                                      : r.message) || e.t0
                                  ));
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 9]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "_refresh",
                value: (function() {
                  var e = ir(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function(e) {
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
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              }
            ]
          };
        },
        n.a
      );
      function mr(e) {
        return (mr =
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
      function vr(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function yr(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, i) {
            var o = e.apply(t, r);
            function a(e) {
              vr(o, n, i, a, s, "next", e);
            }
            function s(e) {
              vr(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function br() {
        var e = Or([
          "\n        :host {\n          display: block;\n        }\n        paper-card {\n          display: block;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-bottom: 16px;\n        }\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n        }\n      "
        ]);
        return (
          (br = function() {
            return e;
          }),
          e
        );
      }
      function gr() {
        var e = Or([
          "\n                  <tr>\n                    <td>",
          "</td>\n                    <td>\n                      <paper-input\n                        @value-changed=",
          '\n                        placeholder="disabled"\n                        .value=',
          "\n                        .container=",
          "\n                        no-label-float\n                      ></paper-input>\n                    </td>\n                    <td>",
          "</td>\n                  </tr>\n                "
        ]);
        return (
          (gr = function() {
            return e;
          }),
          e
        );
      }
      function wr() {
        var e = Or([
          '\n                <div class="errors">',
          "</div>\n              "
        ]);
        return (
          (wr = function() {
            return e;
          }),
          e
        );
      }
      function kr() {
        var e = Or([
          '\n      <paper-card heading="Network">\n        <div class="card-content">\n          ',
          "\n\n          <table>\n            <tbody>\n              <tr>\n                <th>Container</th>\n                <th>Host</th>\n                <th>Description</th>\n              </tr>\n              ",
          '\n            </tbody>\n          </table>\n        </div>\n        <div class="card-actions">\n          <mwc-button class="warning" @click=',
          ">\n            Reset to defaults\n          </mwc-button>\n          <mwc-button @click=",
          ">Save</mwc-button>\n        </div>\n      </paper-card>\n    "
        ]);
        return (
          (kr = function() {
            return e;
          }),
          e
        );
      }
      function Er() {
        var e = Or([""]);
        return (
          (Er = function() {
            return e;
          }),
          e
        );
      }
      function Or(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function jr(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _r(e, t) {
        return (_r =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Pr(e) {
        var t,
          r = Tr(e.key);
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
      function xr(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Dr(e) {
        return e.decorators && e.decorators.length;
      }
      function Ar(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Cr(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Tr(e) {
        var t = (function(e, t) {
          if ("object" !== mr(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== mr(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === mr(t) ? t : String(t);
      }
      function Sr(e, t, r) {
        return (Sr =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = zr(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function zr(e) {
        return (zr = Object.setPrototypeOf
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
                  if (!Dr(e)) return r.push(e);
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
                  for (var d = 0; d < l.length; d++)
                    this.addElementPlacement(l[d], t);
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
              var r = Tr(e.key),
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
                r = Cr(e, "finisher"),
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
              var r = Cr(e, "finisher"),
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
                  if (Ar(o.descriptor) || Ar(i.descriptor)) {
                    if (Dr(o) || Dr(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Dr(o)) {
                      if (Dr(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    xr(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Pr)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-addon-network")],
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
                  !(o = (t = zr(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== mr(o) && "function" != typeof o)
                    ? jr(i)
                    : o),
                e(jr(r)),
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
                  t && _r(e, t);
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
                key: "addon",
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
                decorators: [Object(n.f)()],
                key: "_config",
                value: void 0
              },
              {
                kind: "method",
                key: "connectedCallback",
                value: function() {
                  Sr(zr(r.prototype), "connectedCallback", this).call(this),
                    this._setNetworkConfig();
                }
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  var e = this;
                  return this._config
                    ? Object(n.e)(
                        kr(),
                        this._error ? Object(n.e)(wr(), this._error) : "",
                        this._config.map(function(t) {
                          return Object(n.e)(
                            gr(),
                            t.container,
                            e._configChanged,
                            t.host,
                            t.container,
                            t.description
                          );
                        }),
                        this._resetTapped,
                        this._saveTapped
                      )
                    : Object(n.e)(Er());
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [a.b, o.a, Object(n.c)(br())];
                }
              },
              {
                kind: "method",
                key: "update",
                value: function(e) {
                  Sr(zr(r.prototype), "update", this).call(this, e),
                    e.has("addon") && this._setNetworkConfig();
                }
              },
              {
                kind: "method",
                key: "_setNetworkConfig",
                value: function() {
                  var e = this.addon.network || {},
                    t = this.addon.network_description || {},
                    r = Object.keys(e).map(function(r) {
                      return { container: r, host: e[r], description: t[r] };
                    });
                  this._config = r.sort(function(e, t) {
                    return e.container > t.container ? 1 : -1;
                  });
                }
              },
              {
                kind: "method",
                key: "_configChanged",
                value: (function() {
                  var e = yr(
                    regeneratorRuntime.mark(function e(t) {
                      var r;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (r = t.target),
                                  this._config.forEach(function(e) {
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
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "_resetTapped",
                value: (function() {
                  var e = yr(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = { network: null }),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  Object(i.g)(this.hass, this.addon.slug, t)
                                );
                              case 4:
                                (r = {
                                  success: !0,
                                  response: void 0,
                                  path: "option"
                                }),
                                  Object(C.a)(this, "hass-api-called", r),
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
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "_saveTapped",
                value: (function() {
                  var e = yr(
                    regeneratorRuntime.mark(function e() {
                      var t, r, n, o;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (t = {}),
                                  this._config.forEach(function(e) {
                                    t[e.container] = parseInt(
                                      String(e.host),
                                      10
                                    );
                                  }),
                                  (r = { network: t }),
                                  (e.prev = 4),
                                  (e.next = 7),
                                  Object(i.g)(this.hass, this.addon.slug, r)
                                );
                              case 7:
                                (n = {
                                  success: !0,
                                  response: void 0,
                                  path: "option"
                                }),
                                  Object(C.a)(this, "hass-api-called", n),
                                  (e.next = 14);
                                break;
                              case 11:
                                (e.prev = 11),
                                  (e.t0 = e.catch(4)),
                                  (this._error = "Failed to set addon network configuration, ".concat(
                                    (null === (o = e.t0.body) || void 0 === o
                                      ? void 0
                                      : o.message) || e.t0
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
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              }
            ]
          };
        },
        n.a
      );
      function Rr(e) {
        return (Rr =
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
      function Fr(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function Ir(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, i) {
            var o = e.apply(t, r);
            function a(e) {
              Fr(o, n, i, a, s, "next", e);
            }
            function s(e) {
              Fr(o, n, i, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function Hr() {
        var e = Br([
          "\n        :host {\n          color: var(--primary-text-color);\n          --paper-card-header-color: var(--primary-text-color);\n        }\n        .content {\n          padding: 24px 0 32px;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n        }\n        hassio-addon-info,\n        hassio-addon-network,\n        hassio-addon-audio,\n        hassio-addon-config {\n          margin-bottom: 24px;\n          width: 600px;\n        }\n        hassio-addon-logs {\n          max-width: calc(100% - 8px);\n          min-width: 600px;\n        }\n        @media only screen and (max-width: 600px) {\n          hassio-addon-info,\n          hassio-addon-network,\n          hassio-addon-audio,\n          hassio-addon-config,\n          hassio-addon-logs {\n            max-width: 100%;\n            min-width: 100%;\n          }\n        }\n      "
        ]);
        return (
          (Hr = function() {
            return e;
          }),
          e
        );
      }
      function Nr() {
        var e = Br([
          "\n                      <hassio-addon-network\n                        .hass=",
          "\n                        .addon=",
          "\n                      ></hassio-addon-network>\n                    "
        ]);
        return (
          (Nr = function() {
            return e;
          }),
          e
        );
      }
      function Mr() {
        var e = Br([
          "\n                      <hassio-addon-audio\n                        .hass=",
          "\n                        .addon=",
          "\n                      ></hassio-addon-audio>\n                    "
        ]);
        return (
          (Mr = function() {
            return e;
          }),
          e
        );
      }
      function Ur() {
        var e = Br([
          "\n                <hassio-addon-config\n                  .hass=",
          "\n                  .addon=",
          "\n                ></hassio-addon-config>\n\n                ",
          "\n                ",
          "\n\n                <hassio-addon-logs\n                  .hass=",
          "\n                  .addon=",
          "\n                ></hassio-addon-logs>\n              "
        ]);
        return (
          (Ur = function() {
            return e;
          }),
          e
        );
      }
      function Lr() {
        var e = Br([
          '\n      <hass-subpage header="Hass.io: add-on details" hassio>\n        <div class="content">\n          <hassio-addon-info\n            .hass=',
          "\n            .addon=",
          "\n          ></hassio-addon-info>\n\n          ",
          "\n        </div>\n      </hass-subpage>\n    "
        ]);
        return (
          (Lr = function() {
            return e;
          }),
          e
        );
      }
      function Vr() {
        var e = Br([
          "\n        <paper-spinner-lite active></paper-spinner-lite>\n      "
        ]);
        return (
          (Vr = function() {
            return e;
          }),
          e
        );
      }
      function Br(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function qr(e) {
        return (qr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Wr(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Gr(e, t) {
        return (Gr =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Yr(e) {
        var t,
          r = Zr(e.key);
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
      function Jr(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Kr(e) {
        return e.decorators && e.decorators.length;
      }
      function Qr(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Xr(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Zr(e) {
        var t = (function(e, t) {
          if ("object" !== Rr(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Rr(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Rr(t) ? t : String(t);
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
                  if (!Kr(e)) return r.push(e);
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
                  for (var d = 0; d < l.length; d++)
                    this.addElementPlacement(l[d], t);
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
              var r = Zr(e.key),
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
                r = Xr(e, "finisher"),
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
              var r = Xr(e, "finisher"),
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
                  if (Qr(o.descriptor) || Qr(i.descriptor)) {
                    if (Kr(o) || Kr(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Kr(o)) {
                      if (Kr(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Jr(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Yr)),
            e
          );
        i.initializeClassElements(a.F, s.elements),
          i.runClassFinishers(a.F, s.finishers);
      })(
        [Object(n.d)("hassio-addon-view")],
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
                    !(o = (t = qr(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== Rr(o) && "function" != typeof o)
                      ? Wr(i)
                      : o),
                  e(Wr(r)),
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
                    t && Gr(e, t);
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
                key: "route",
                value: void 0
              },
              {
                kind: "field",
                decorators: [Object(n.f)()],
                key: "addon",
                value: void 0
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return this.addon
                    ? Object(n.e)(
                        Lr(),
                        this.hass,
                        this.addon,
                        this.addon && this.addon.version
                          ? Object(n.e)(
                              Ur(),
                              this.hass,
                              this.addon,
                              this.addon.audio
                                ? Object(n.e)(Mr(), this.hass, this.addon)
                                : "",
                              this.addon.network
                                ? Object(n.e)(Nr(), this.hass, this.addon)
                                : "",
                              this.hass,
                              this.addon
                            )
                          : ""
                      )
                    : Object(n.e)(Vr());
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [a.b, o.a, Object(n.c)(Hr())];
                }
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: (function() {
                  var e = Ir(
                    regeneratorRuntime.mark(function e() {
                      var t = this;
                      return regeneratorRuntime.wrap(
                        function(e) {
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
                                  function(e) {
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
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "_apiCalled",
                value: (function() {
                  var e = Ir(
                    regeneratorRuntime.mark(function e(t) {
                      var r;
                      return regeneratorRuntime.wrap(
                        function(e) {
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
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "method",
                key: "_routeDataChanged",
                value: (function() {
                  var e = Ir(
                    regeneratorRuntime.mark(function e(t) {
                      var r, n;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = t.path.substr(1)),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  Object(i.b)(this.hass, r)
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
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()
              }
            ]
          };
        },
        n.a
      );
    },
    88: function(e, t, r) {
      "use strict";
      var n,
        i = r(5),
        o = r(89),
        a = r.n(o),
        s = r(11);
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
      function l(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function d(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        var t,
          r = y(e.key);
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
      function v(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function y(e) {
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
      function b(e, t, r) {
        return (b =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = g(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function g(e) {
        return (g = Object.setPrototypeOf
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
                  for (var d = 0; d < l.length; d++)
                    this.addElementPlacement(l[d], t);
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
              var r = y(e.key),
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
                r = v(e, "finisher"),
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
              var r = v(e, "finisher"),
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
        [Object(i.d)("ha-markdown")],
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
                  !(o = (t = g(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== c(o) && "function" != typeof o)
                    ? d(i)
                    : o),
                e(d(r)),
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
                  t && u(e, t);
              })(n, t),
              n
            );
          })();
          return {
            F: r,
            d: [
              {
                kind: "field",
                decorators: [Object(i.f)()],
                key: "content",
                value: function() {
                  return "";
                }
              },
              {
                kind: "field",
                decorators: [Object(i.f)({ type: Boolean })],
                key: "allowSvg",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "method",
                key: "update",
                value: function(e) {
                  b(g(r.prototype), "update", this).call(this, e),
                    n || (n = a()()),
                    this._render();
                }
              },
              {
                kind: "method",
                key: "_render",
                value: (function() {
                  var e,
                    t =
                      ((e = regeneratorRuntime.mark(function e() {
                        var t, r;
                        return regeneratorRuntime.wrap(
                          function(e) {
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
                      function() {
                        var t = this,
                          r = arguments;
                        return new Promise(function(n, i) {
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
                  return function() {
                    return t.apply(this, arguments);
                  };
                })()
              },
              {
                kind: "field",
                key: "_resize",
                value: function() {
                  var e = this;
                  return function() {
                    return Object(s.a)(e, "iron-resize");
                  };
                }
              }
            ]
          };
        },
        i.b
      );
    },
    89: function(e, t, r) {
      var n = r(90),
        i = ["renderMarkdown"];
      e.exports = function() {
        var e = new Worker(r.p + "a1ebfa0a88593a3b571c.worker.js", {
          name: "[hash].worker.js"
        });
        return n(e, i), e;
      };
    },
    94: function(e, t, r) {
      "use strict";
      var n = r(5),
        i = (r(125), r(91)),
        o = r(11),
        a = r(69);
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
      function c() {
        var e = d([
          "\n        :host {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n        }\n        .mdc-switch.mdc-switch--checked .mdc-switch__thumb {\n          background-color: var(--switch-checked-button-color);\n          border-color: var(--switch-checked-button-color);\n        }\n        .mdc-switch.mdc-switch--checked .mdc-switch__track {\n          background-color: var(--switch-checked-track-color);\n          border-color: var(--switch-checked-track-color);\n        }\n        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb {\n          background-color: var(--switch-unchecked-button-color);\n          border-color: var(--switch-unchecked-button-color);\n        }\n        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__track {\n          background-color: var(--switch-unchecked-track-color);\n          border-color: var(--switch-unchecked-track-color);\n        }\n        :host(.slotted) .mdc-switch {\n          margin-right: 24px;\n        }\n      "
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = d([
          '\n      <div class="mdc-switch">\n        <div class="mdc-switch__track"></div>\n        <div\n          class="mdc-switch__thumb-underlay"\n          .ripple="',
          '"\n        >\n          <div class="mdc-switch__thumb">\n            <input\n              type="checkbox"\n              id="basic-switch"\n              class="mdc-switch__native-control"\n              role="switch"\n              @change="',
          '"\n            />\n          </div>\n        </div>\n      </div>\n      <label for="basic-switch"><slot></slot></label>\n    '
        ]);
        return (
          (l = function() {
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
      function u(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function p(e) {
        var t,
          r = b(e.key);
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
      function h(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function m(e) {
        return e.decorators && e.decorators.length;
      }
      function v(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function y(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function b(e) {
        var t = (function(e, t) {
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
      function g(e, t, r) {
        return (g =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = w(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function w(e) {
        return (w = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var k = customElements.get("mwc-switch");
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
                  for (var d = 0; d < l.length; d++)
                    this.addElementPlacement(l[d], t);
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
                  if (v(o.descriptor) || v(i.descriptor)) {
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
        [Object(n.d)("ha-switch")],
        function(e, t) {
          var r = (function(r) {
            function n() {
              var t, r, i, o;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n);
              for (
                var a = arguments.length, c = new Array(a), l = 0;
                l < a;
                l++
              )
                c[l] = arguments[l];
              return (
                (i = this),
                (r =
                  !(o = (t = w(n)).call.apply(t, [this].concat(c))) ||
                  ("object" !== s(o) && "function" != typeof o)
                    ? u(i)
                    : o),
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
                  t && f(e, t);
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
                key: "haptic",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "field",
                decorators: [Object(n.g)("slot")],
                key: "_slot",
                value: void 0
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function() {
                  var e = this;
                  g(w(r.prototype), "firstUpdated", this).call(this),
                    this.style.setProperty(
                      "--mdc-theme-secondary",
                      "var(--switch-checked-color)"
                    ),
                    this.classList.toggle(
                      "slotted",
                      Boolean(this._slot.assignedNodes().length)
                    ),
                    this.addEventListener("change", function() {
                      var t;
                      e.haptic &&
                        ((t = "light"), Object(o.a)(window, "haptic", t));
                    });
                }
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    l(),
                    Object(a.a)({ interactionNode: this }),
                    this._haChangeHandler
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.a, Object(n.c)(c())];
                }
              },
              {
                kind: "method",
                key: "_haChangeHandler",
                value: function(e) {
                  this.mdcFoundation.handleChange(e),
                    (this.checked = this.formElement.checked);
                }
              }
            ]
          };
        },
        k
      );
    }
  }
]);
//# sourceMappingURL=chunk.b38bff4d0774d202dcad.js.map
