(self.webpackJsonp = self.webpackJsonp || []).push([
  [4],
  {
    131: function(e, t, r) {
      "use strict";
      r.r(t);
      r(96), r(109), r(41), r(22), r(67);
      var n = r(4),
        i = r(25),
        o = r(12),
        a = r(9),
        s = (r(121), r(16), r(17), r(127), r(128), r(122), r(102));
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
        var e = h([
          "\n        :host,\n        paper-card,\n        paper-dropdown-menu {\n          display: block;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-bottom: 16px;\n        }\n        paper-item {\n          width: 450px;\n        }\n        .card-actions {\n          text-align: right;\n        }\n      "
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = h([
          "\n                    <paper-item device=",
          ">",
          "</paper-item>\n                  "
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = h([
          "\n                    <paper-item device=",
          ">",
          "</paper-item>\n                  "
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = h([
          '\n                <div class="errors">',
          "</div>\n              "
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = h([
          '\n      <paper-card heading="Audio">\n        <div class="card-content">\n          ',
          '\n\n          <paper-dropdown-menu\n            label="Input"\n            @selected-item-changed=',
          '\n          >\n            <paper-listbox\n              slot="dropdown-content"\n              attr-for-selected="device"\n              .selected=',
          "\n            >\n              ",
          '\n            </paper-listbox>\n          </paper-dropdown-menu>\n          <paper-dropdown-menu\n            label="Output"\n            @selected-item-changed=',
          '\n          >\n            <paper-listbox\n              slot="dropdown-content"\n              attr-for-selected="device"\n              .selected=',
          "\n            >\n              ",
          '\n            </paper-listbox>\n          </paper-dropdown-menu>\n        </div>\n        <div class="card-actions">\n          <mwc-button @click=',
          ">Save</mwc-button>\n        </div>\n      </paper-card>\n    "
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function h(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function m(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function v(e, t) {
        return (v =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function y(e) {
        var t,
          r = E(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = {
              get: e.value,
              configurable: !0,
              enumerable: !1
            })
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
      function b(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function g(e) {
        return e.decorators && e.decorators.length;
      }
      function w(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function k(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function E(e) {
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
      function O(e, t, r) {
        return (O =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = j(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function j(e) {
        return (j = Object.setPrototypeOf
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
                  if (!g(e)) return r.push(e);
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
              var r = E(e.key),
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
                r = k(e, "finisher"),
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
              var r = k(e, "finisher"),
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
                  if (w(o.descriptor) || w(i.descriptor)) {
                    if (g(o) || g(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (g(o)) {
                      if (g(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    b(o, i);
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
                  !(o = (t = j(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== c(o) && "function" != typeof o)
                    ? m(i)
                    : o),
                e(m(r)),
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
                  t && v(e, t);
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
                    f(),
                    this._error ? Object(n.e)(p(), this._error) : "",
                    this._setInputDevice,
                    this._selectedInput,
                    this._inputDevices &&
                      this._inputDevices.map(function(e) {
                        return Object(n.e)(u(), e.device, e.name);
                      }),
                    this._setOutputDevice,
                    this._selectedOutput,
                    this._outputDevices &&
                      this._outputDevices.map(function(e) {
                        return Object(n.e)(d(), e.device, e.name);
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
                  return [a.a, o.a, Object(n.c)(l())];
                }
              },
              {
                kind: "method",
                key: "update",
                value: function(e) {
                  O(j(r.prototype), "update", this).call(this, e),
                    e.has("addon") && this._addonChanged();
                }
              },
              {
                kind: "method",
                key: "_setInputDevice",
                value: function(e) {
                  var t = e.detail.device;
                  t && (this._selectedInput = t);
                }
              },
              {
                kind: "method",
                key: "_setOutputDevice",
                value: function(e) {
                  var t = e.detail.device;
                  t && (this._selectedOutput = t);
                }
              },
              {
                kind: "method",
                key: "_addonChanged",
                value: function() {
                  var e, t, r, n, i;
                  return regeneratorRuntime.async(
                    function(o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            if (
                              ((this._selectedInput = this.addon.audio_input),
                              (this._selectedOutput = this.addon.audio_output),
                              !this._outputDevices)
                            ) {
                              o.next = 4;
                              break;
                            }
                            return o.abrupt("return");
                          case 4:
                            return (
                              (e = [{ device: void 0, name: "-" }]),
                              (o.prev = 5),
                              (o.next = 8),
                              regeneratorRuntime.awrap(Object(s.a)(this.hass))
                            );
                          case 8:
                            (t = o.sent),
                              (r = t.audio),
                              (n = Object.keys(r.input).map(function(e) {
                                return { device: e, name: r.input[e] };
                              })),
                              (i = Object.keys(r.output).map(function(e) {
                                return { device: e, name: r.output[e] };
                              })),
                              (this._inputDevices = e.concat(n)),
                              (this._outputDevices = e.concat(i)),
                              (o.next = 21);
                            break;
                          case 16:
                            (o.prev = 16),
                              (o.t0 = o.catch(5)),
                              (this._error = "Failed to fetch audio hardware"),
                              (this._inputDevices = e),
                              (this._outputDevices = e);
                          case 21:
                          case "end":
                            return o.stop();
                        }
                    },
                    null,
                    this,
                    [[5, 16]]
                  );
                }
              },
              {
                kind: "method",
                key: "_saveSettings",
                value: function() {
                  var e;
                  return regeneratorRuntime.async(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (this._error = void 0),
                              (e = {
                                audio_input: this._selectedInput || null,
                                audio_output: this._selectedOutput || null
                              }),
                              (t.prev = 2),
                              (t.next = 5),
                              regeneratorRuntime.awrap(
                                Object(i.g)(this.hass, this.addon.slug, e)
                              )
                            );
                          case 5:
                            t.next = 10;
                            break;
                          case 7:
                            (t.prev = 7),
                              (t.t0 = t.catch(2)),
                              (this._error =
                                "Failed to set addon audio device");
                          case 10:
                          case "end":
                            return t.stop();
                        }
                    },
                    null,
                    this,
                    [[2, 7]]
                  );
                }
              }
            ]
          };
        },
        n.a
      ),
        r(123);
      var _ = r(14);
      function P(e) {
        return (P =
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
      function x() {
        var e = T([
          "\n        :host {\n          display: block;\n        }\n        paper-card {\n          display: block;\n        }\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-bottom: 16px;\n        }\n        iron-autogrow-textarea {\n          width: 100%;\n          font-family: monospace;\n        }\n        .syntaxerror {\n          color: var(--google-red-500);\n        }\n      "
        ]);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function D() {
        var e = T([
          '\n                <div class="errors">',
          "</div>\n              "
        ]);
        return (
          (D = function() {
            return e;
          }),
          e
        );
      }
      function A() {
        var e = T([
          '\n      <paper-card heading="Config">\n        <div class="card-content">\n          ',
          "\n          <iron-autogrow-textarea\n            @value-changed=",
          "\n            .value=",
          '\n          ></iron-autogrow-textarea>\n        </div>\n        <div class="card-actions">\n          <mwc-button class="warning" @click=',
          ">\n            Reset to defaults\n          </mwc-button>\n          <mwc-button\n            @click=",
          "\n            .disabled=",
          "\n          >\n            Save\n          </mwc-button>\n        </div>\n      </paper-card>\n    "
        ]);
        return (
          (A = function() {
            return e;
          }),
          e
        );
      }
      function T(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function S(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function C(e, t) {
        return (C =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function z(e) {
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
          ? (t = {
              get: e.value,
              configurable: !0,
              enumerable: !1
            })
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
      function R(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function F(e) {
        return e.decorators && e.decorators.length;
      }
      function I(e) {
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
      function U(e, t, r) {
        return (U =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = M(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function M(e) {
        return (M = Object.setPrototypeOf
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
                  if (I(o.descriptor) || I(i.descriptor)) {
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
                    R(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(z)),
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
                  !(o = (t = M(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== P(o) && "function" != typeof o)
                    ? S(i)
                    : o),
                e(S(r)),
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
                  t && C(e, t);
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
                kind: "field",
                decorators: [Object(n.f)({ type: Boolean })],
                key: "_configHasChanged",
                value: function() {
                  return !1;
                }
              },
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    A(),
                    this._error ? Object(n.e)(D(), this._error) : "",
                    this._configChanged,
                    this._config,
                    this._resetTapped,
                    this._saveTapped,
                    !this._configHasChanged
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [a.a, o.a, Object(n.c)(x())];
                }
              },
              {
                kind: "method",
                key: "updated",
                value: function(e) {
                  U(M(r.prototype), "updated", this).call(this, e),
                    e.has("addon") &&
                      (this._config = JSON.stringify(
                        this.addon.options,
                        null,
                        2
                      ));
                }
              },
              {
                kind: "method",
                key: "_configChanged",
                value: function(e) {
                  (this._config =
                    e.detail.value ||
                    JSON.stringify(this.addon.options, null, 2)),
                    (this._configHasChanged =
                      this._config !==
                      JSON.stringify(this.addon.options, null, 2));
                }
              },
              {
                kind: "method",
                key: "_resetTapped",
                value: function() {
                  var e, t, r;
                  return regeneratorRuntime.async(
                    function(n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (this._error = void 0),
                              (e = { options: null }),
                              (n.prev = 2),
                              (n.next = 5),
                              regeneratorRuntime.awrap(
                                Object(i.g)(this.hass, this.addon.slug, e)
                              )
                            );
                          case 5:
                            (this._configHasChanged = !1),
                              (t = {
                                success: !0,
                                response: void 0,
                                path: "options"
                              }),
                              Object(_.a)(this, "hass-api-called", t),
                              (n.next = 13);
                            break;
                          case 10:
                            (n.prev = 10),
                              (n.t0 = n.catch(2)),
                              (this._error = "Failed to reset addon configuration, ".concat(
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
              },
              {
                kind: "method",
                key: "_saveTapped",
                value: function() {
                  var e, t, r;
                  return regeneratorRuntime.async(
                    function(n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            (this._error = void 0),
                              (n.prev = 1),
                              (e = { options: JSON.parse(this._config) }),
                              (n.next = 9);
                            break;
                          case 5:
                            return (
                              (n.prev = 5),
                              (n.t0 = n.catch(1)),
                              (this._error = n.t0),
                              n.abrupt("return")
                            );
                          case 9:
                            return (
                              (n.prev = 9),
                              (n.next = 12),
                              regeneratorRuntime.awrap(
                                Object(i.g)(this.hass, this.addon.slug, e)
                              )
                            );
                          case 12:
                            (this._configHasChanged = !1),
                              (t = {
                                success: !0,
                                response: void 0,
                                path: "options"
                              }),
                              Object(_.a)(this, "hass-api-called", t),
                              (n.next = 20);
                            break;
                          case 17:
                            (n.prev = 17),
                              (n.t1 = n.catch(9)),
                              (this._error = "Failed to save addon configuration, ".concat(
                                (null === (r = n.t1.body) || void 0 === r
                                  ? void 0
                                  : r.message) || n.t1
                              ));
                          case 20:
                          case "end":
                            return n.stop();
                        }
                    },
                    null,
                    this,
                    [
                      [1, 5],
                      [9, 17]
                    ]
                  );
                }
              }
            ]
          };
        },
        n.a
      ),
        r(20),
        r(124);
      var q = r(53);
      r(45);
      function W(e) {
        return (W =
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
      function B(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function L(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function J(e, t, r) {
        return (J =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = G(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function G(e) {
        return (G = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function V(e, t) {
        return (V =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var Y = customElements.get("iron-icon"),
        K = !1,
        Q = (function(e) {
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
                !(i = (e = G(t)).call.apply(e, [this].concat(l))) ||
                ("object" !== W(i) && "function" != typeof i)
                  ? L(n)
                  : i),
              (o = L(r)),
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
                t && V(e, t);
            })(t, Y),
            (n = t),
            (i = [
              {
                key: "listen",
                value: function(e, n, i) {
                  J(G(t.prototype), "listen", this).call(this, e, n, i),
                    K ||
                      "mdi" !== this._iconsetName ||
                      ((K = !0), r.e(8).then(r.bind(null, 133)));
                }
              }
            ]) && B(n.prototype, i),
            o && B(n, o),
            t
          );
        })();
      function X(e) {
        return (X =
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
      function Z() {
        var e = ie([
          "\n        .badge-container {\n          display: inline-block;\n          text-align: center;\n          vertical-align: top;\n        }\n        .label-badge {\n          position: relative;\n          display: block;\n          margin: 0 auto;\n          width: var(--ha-label-badge-size, 2.5em);\n          text-align: center;\n          height: var(--ha-label-badge-size, 2.5em);\n          line-height: var(--ha-label-badge-size, 2.5em);\n          font-size: var(--ha-label-badge-font-size, 1.5em);\n          border-radius: 50%;\n          border: 0.1em solid var(--ha-label-badge-color, var(--primary-color));\n          color: var(--label-badge-text-color, rgb(76, 76, 76));\n\n          white-space: nowrap;\n          background-color: var(--label-badge-background-color, white);\n          background-size: cover;\n          transition: border 0.3s ease-in-out;\n        }\n        .label-badge .value {\n          font-size: 90%;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        .label-badge .value.big {\n          font-size: 70%;\n        }\n        .label-badge .label {\n          position: absolute;\n          bottom: -1em;\n          /* Make the label as wide as container+border. (parent_borderwidth / font-size) */\n          left: -0.2em;\n          right: -0.2em;\n          line-height: 1em;\n          font-size: 0.5em;\n        }\n        .label-badge .label span {\n          box-sizing: border-box;\n          max-width: 100%;\n          display: inline-block;\n          background-color: var(--ha-label-badge-color, var(--primary-color));\n          color: var(--ha-label-badge-label-color, white);\n          border-radius: 1em;\n          padding: 9% 16% 8% 16%; /* mostly apitalized text, not much descenders => bit more top margin */\n          font-weight: 500;\n          overflow: hidden;\n          text-transform: uppercase;\n          text-overflow: ellipsis;\n          transition: background-color 0.3s ease-in-out;\n          text-transform: var(--ha-label-badge-label-text-transform, uppercase);\n        }\n        .label-badge .label.big span {\n          font-size: 90%;\n          padding: 10% 12% 7% 12%; /* push smaller text a bit down to center vertically */\n        }\n        .badge-container .title {\n          margin-top: 1em;\n          font-size: var(--ha-label-badge-title-font-size, 0.9em);\n          width: var(--ha-label-badge-title-width, 5em);\n          font-weight: var(--ha-label-badge-title-font-weight, 400);\n          overflow: hidden;\n          text-overflow: ellipsis;\n          line-height: normal;\n        }\n      "
        ]);
        return (
          (Z = function() {
            return e;
          }),
          e
        );
      }
      function $() {
        var e = ie([
          '\n              <div class="title">',
          "</div>\n            "
        ]);
        return (
          ($ = function() {
            return e;
          }),
          e
        );
      }
      function ee() {
        var e = ie([
          '\n                <div\n                  class="',
          '"\n                >\n                  <span>',
          "</span>\n                </div>\n              "
        ]);
        return (
          (ee = function() {
            return e;
          }),
          e
        );
      }
      function te() {
        var e = ie(["\n                  <span>", "</span>\n                "]);
        return (
          (te = function() {
            return e;
          }),
          e
        );
      }
      function re() {
        var e = ie([
          '\n                  <ha-icon .icon="',
          '"></ha-icon>\n                '
        ]);
        return (
          (re = function() {
            return e;
          }),
          e
        );
      }
      function ne() {
        var e = ie([
          '\n      <div class="badge-container">\n        <div class="label-badge" id="badge">\n          <div\n            class="',
          '"\n          >\n            ',
          "\n            ",
          "\n          </div>\n          ",
          "\n        </div>\n        ",
          "\n      </div>\n    "
        ]);
        return (
          (ne = function() {
            return e;
          }),
          e
        );
      }
      function ie(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
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
          r = pe(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = {
              get: e.value,
              configurable: !0,
              enumerable: !1
            })
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
      function de(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function ue(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function pe(e) {
        var t = (function(e, t) {
          if ("object" !== X(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== X(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === X(t) ? t : String(t);
      }
      function fe(e, t, r) {
        return (fe =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = he(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function he(e) {
        return (he = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      customElements.define("ha-icon", Q);
      var me = (function(e, t, r, n) {
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
              var r = pe(e.key),
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
                r = ue(e, "finisher"),
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
              var r = ue(e, "finisher"),
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
                  if (de(o.descriptor) || de(i.descriptor)) {
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
                  !(o = (t = he(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== X(o) && "function" != typeof o)
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
                    ne(),
                    Object(q.a)({
                      value: !0,
                      big: Boolean(this.value && this.value.length > 4)
                    }),
                    !this.icon || this.value || this.image
                      ? ""
                      : Object(n.e)(re(), this.icon),
                    this.value && !this.image
                      ? Object(n.e)(te(), this.value)
                      : "",
                    this.label
                      ? Object(n.e)(
                          ee(),
                          Object(q.a)({
                            label: !0,
                            big: this.label.length > 5
                          }),
                          this.label
                        )
                      : "",
                    this.description ? Object(n.e)($(), this.description) : ""
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [Object(n.c)(Z())];
                }
              },
              {
                kind: "method",
                key: "updated",
                value: function(e) {
                  fe(he(r.prototype), "updated", this).call(this, e),
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
      customElements.define("ha-label-badge", me);
      r(72), r(126);
      var ve = r(105);
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
      function be() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n        :host {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n        }\n        .mdc-switch.mdc-switch--checked .mdc-switch__thumb {\n          background-color: var(--switch-checked-button-color);\n          border-color: var(--switch-checked-button-color);\n        }\n        .mdc-switch.mdc-switch--checked .mdc-switch__track {\n          background-color: var(--switch-checked-track-color);\n          border-color: var(--switch-checked-track-color);\n        }\n        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb {\n          background-color: var(--switch-unchecked-button-color);\n          border-color: var(--switch-unchecked-button-color);\n        }\n        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__track {\n          background-color: var(--switch-unchecked-track-color);\n          border-color: var(--switch-unchecked-track-color);\n        }\n        :host(.slotted) .mdc-switch {\n          margin-right: 24px;\n        }\n      "
        ]);
        return (
          (be = function() {
            return e;
          }),
          e
        );
      }
      function ge(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function we(e, t) {
        return (we =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ke(e) {
        var t,
          r = Pe(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = {
              get: e.value,
              configurable: !0,
              enumerable: !1
            })
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
      function Ee(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Oe(e) {
        return e.decorators && e.decorators.length;
      }
      function je(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function _e(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Pe(e) {
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
      function xe(e, t, r) {
        return (xe =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = De(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function De(e) {
        return (De = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var Ae = customElements.get("mwc-switch"),
        Te =
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
                      if (!Oe(e)) return r.push(e);
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
                  var r = Pe(e.key),
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
                    r = _e(e, "finisher"),
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
                  var r = _e(e, "finisher"),
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
                      if (je(o.descriptor) || je(i.descriptor)) {
                        if (Oe(o) || Oe(i))
                          throw new ReferenceError(
                            "Duplicated methods (" +
                              o.key +
                              ") can't be decorated."
                          );
                        i.descriptor = o.descriptor;
                      } else {
                        if (Oe(o)) {
                          if (Oe(i))
                            throw new ReferenceError(
                              "Decorators can't be placed on different accessors with for the same property (" +
                                o.key +
                                ")."
                            );
                          i.decorators = o.decorators;
                        }
                        Ee(o, i);
                      }
                    else t.push(o);
                  }
                  return t;
                })(a.d.map(ke)),
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
                    var a = arguments.length, s = new Array(a), c = 0;
                    c < a;
                    c++
                  )
                    s[c] = arguments[c];
                  return (
                    (i = this),
                    (r =
                      !(o = (t = De(n)).call.apply(t, [this].concat(s))) ||
                      ("object" !== ye(o) && "function" != typeof o)
                        ? ge(i)
                        : o),
                    e(ge(r)),
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
                      t && we(e, t);
                  })(n, t),
                  n
                );
              })();
              return {
                F: r,
                d: [
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
                      xe(De(r.prototype), "firstUpdated", this).call(this),
                        this.style.setProperty(
                          "--mdc-theme-secondary",
                          "var(--switch-checked-color)"
                        ),
                        this.classList.toggle(
                          "slotted",
                          Boolean(this._slot.assignedNodes().length)
                        ),
                        this._slot.addEventListener("click", function() {
                          return (e.checked = !e.checked);
                        });
                    }
                  },
                  {
                    kind: "get",
                    static: !0,
                    key: "styles",
                    value: function() {
                      return [ve.a, Object(n.c)(be())];
                    }
                  }
                ]
              };
            },
            Ae
          ),
          r(34),
          r(33)),
        Se = r(103);
      function Ce(e) {
        return (Ce =
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
      function ze(e, t) {
        return (
          _t(e) ||
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
          jt()
        );
      }
      function Re() {
        var e = ht([
          "\n        :host {\n          display: block;\n        }\n        paper-card {\n          display: block;\n          margin-bottom: 16px;\n        }\n        paper-card.warning {\n          background-color: var(--google-red-500);\n          color: white;\n          --paper-card-header-color: white;\n        }\n        paper-card.warning mwc-button {\n          --mdc-theme-primary: white !important;\n        }\n        .warning {\n          color: var(--google-red-500);\n          --mdc-theme-primary: var(--google-red-500);\n        }\n        .light-color {\n          color: var(--secondary-text-color);\n        }\n        .addon-version {\n          float: right;\n          font-size: 15px;\n          vertical-align: middle;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-bottom: 16px;\n        }\n        .description {\n          margin-bottom: 16px;\n        }\n        .logo img {\n          max-height: 60px;\n          margin: 16px 0;\n          display: block;\n        }\n        .state {\n          display: flex;\n          margin: 8px 0;\n        }\n        .state div {\n          width: 180px;\n          display: inline-block;\n        }\n        .state iron-icon {\n          width: 16px;\n          color: var(--secondary-text-color);\n        }\n        ha-switch {\n          display: inline;\n        }\n        iron-icon.running {\n          color: var(--paper-green-400);\n        }\n        iron-icon.stopped {\n          color: var(--google-red-300);\n        }\n        ha-call-api-button {\n          font-weight: 500;\n          color: var(--primary-color);\n        }\n        .right {\n          float: right;\n        }\n        ha-markdown img {\n          max-width: 100%;\n        }\n        protection-enable mwc-button {\n          --mdc-theme-primary: white;\n        }\n        .description a,\n        ha-markdown a {\n          color: var(--primary-color);\n        }\n        .red {\n          --ha-label-badge-color: var(--label-badge-red, #df4c1e);\n        }\n        .blue {\n          --ha-label-badge-color: var(--label-badge-blue, #039be5);\n        }\n        .green {\n          --ha-label-badge-color: var(--label-badge-green, #0da035);\n        }\n        .yellow {\n          --ha-label-badge-color: var(--label-badge-yellow, #f4b400);\n        }\n        .security {\n          margin-bottom: 16px;\n        }\n        .card-actions {\n          display: flow-root;\n        }\n        .security h3 {\n          margin-bottom: 8px;\n          font-weight: normal;\n        }\n        .security ha-label-badge {\n          cursor: pointer;\n          margin-right: 4px;\n          --iron-icon-height: 45px;\n        }\n      "
        ]);
        return (
          (Re = function() {
            return e;
          }),
          e
        );
      }
      function Fe() {
        var e = ht([
          '\n              <paper-card>\n                <div class="card-content">\n                  <ha-markdown\n                    .content=',
          "\n                  ></ha-markdown>\n                </div>\n              </paper-card>\n            "
        ]);
        return (
          (Fe = function() {
            return e;
          }),
          e
        );
      }
      function Ie() {
        var e = ht([
          '\n                      <p class="warning">\n                        This add-on is not available on your system.\n                      </p>\n                    '
        ]);
        return (
          (Ie = function() {
            return e;
          }),
          e
        );
      }
      function Ne() {
        var e = ht([
          "\n                ",
          "\n                <mwc-button\n                  .disabled=",
          '\n                  class="right"\n                  @click=',
          "\n                >\n                  Install\n                </mwc-button>\n              "
        ]);
        return (
          (Ne = function() {
            return e;
          }),
          e
        );
      }
      function He() {
        var e = ht([
          '\n                      <mwc-button class="right" @click=',
          ">\n                        Open web UI\n                      </mwc-button>\n                    "
        ]);
        return (
          (He = function() {
            return e;
          }),
          e
        );
      }
      function Ue() {
        var e = ht([
          "\n                      <a\n                        .href=",
          '\n                        tabindex="-1"\n                        target="_blank"\n                        class="right"\n                      >\n                        <mwc-button>\n                          Open web UI\n                        </mwc-button>\n                      </a>\n                    '
        ]);
        return (
          (Ue = function() {
            return e;
          }),
          e
        );
      }
      function Me() {
        var e = ht([
          "\n                      <ha-call-api-button\n                        .hass=",
          '\n                        .path="hassio/addons/',
          '/start"\n                      >\n                        Start\n                      </ha-call-api-button>\n                    '
        ]);
        return (
          (Me = function() {
            return e;
          }),
          e
        );
      }
      function qe() {
        var e = ht([
          '\n                      <ha-call-api-button\n                        class="warning"\n                        .hass=',
          '\n                        .path="hassio/addons/',
          '/restart"\n                      >\n                        Restart\n                      </ha-call-api-button>\n                      <ha-call-api-button\n                        class="warning"\n                        .hass=',
          '\n                        .path="hassio/addons/',
          '/stop"\n                      >\n                        Stop\n                      </ha-call-api-button>\n                    '
        ]);
        return (
          (qe = function() {
            return e;
          }),
          e
        );
      }
      function We() {
        var e = ht([
          '\n                      <ha-call-api-button\n                        class="warning"\n                        .hass=',
          '\n                        .path="hassio/addons/',
          '/rebuild"\n                      >\n                        Rebuild\n                      </ha-call-api-button>\n                    '
        ]);
        return (
          (We = function() {
            return e;
          }),
          e
        );
      }
      function Be() {
        var e = ht([
          '\n                <mwc-button class="warning" @click=',
          ">\n                  Uninstall\n                </mwc-button>\n                ",
          "\n                ",
          "\n                ",
          "\n                ",
          "\n              "
        ]);
        return (
          (Be = function() {
            return e;
          }),
          e
        );
      }
      function Le() {
        var e = ht([
          '\n                  <div class="errors">',
          "</div>\n                "
        ]);
        return (
          (Le = function() {
            return e;
          }),
          e
        );
      }
      function Je() {
        var e = ht([
          '\n                        <div class="state">\n                          <div>\n                            Protection mode\n                            <span>\n                              <iron-icon icon="hassio:information"></iron-icon>\n                              <paper-tooltip>\n                                Grant the add-on elevated system access.\n                              </paper-tooltip>\n                            </span>\n                          </div>\n                          <ha-switch\n                            @change=',
          "\n                            .checked=",
          "\n                          ></ha-switch>\n                        </div>\n                      "
        ]);
        return (
          (Je = function() {
            return e;
          }),
          e
        );
      }
      function Ge() {
        var e = ht([
          "\n                                <span>\n                                  This option requires Home Assistant 0.92 or\n                                  later.\n                                </span>\n                              "
        ]);
        return (
          (Ge = function() {
            return e;
          }),
          e
        );
      }
      function Ve() {
        var e = ht([
          '\n                        <div class="state">\n                          <div>Show in sidebar</div>\n                          <ha-switch\n                            @change=',
          "\n                            .checked=",
          "\n                            .disabled=",
          "\n                          ></ha-switch>\n                          ",
          "\n                        </div>\n                      "
        ]);
        return (
          (Ve = function() {
            return e;
          }),
          e
        );
      }
      function Ye() {
        var e = ht([
          '\n                  <div class="state">\n                    <div>Start on boot</div>\n                    <ha-switch\n                      @change=',
          "\n                      .checked=",
          '\n                    ></ha-switch>\n                  </div>\n                  <div class="state">\n                    <div>Auto update</div>\n                    <ha-switch\n                      @change=',
          "\n                      .checked=",
          "\n                    ></ha-switch>\n                  </div>\n                  ",
          "\n                  ",
          "\n                "
        ]);
        return (
          (Ye = function() {
            return e;
          }),
          e
        );
      }
      function Ke() {
        var e = ht([
          "\n                    <ha-label-badge\n                      @click=",
          '\n                      id="ingress"\n                      icon="hassio:cursor-default-click-outline"\n                      label="ingress"\n                      description=""\n                    ></ha-label-badge>\n                  '
        ]);
        return (
          (Ke = function() {
            return e;
          }),
          e
        );
      }
      function Qe() {
        var e = ht([
          "\n                    <ha-label-badge\n                      @click=",
          '\n                      id="auth_api"\n                      icon="hassio:key"\n                      label="auth"\n                      description=""\n                    ></ha-label-badge>\n                  '
        ]);
        return (
          (Qe = function() {
            return e;
          }),
          e
        );
      }
      function Xe() {
        var e = ht([
          "\n                    <ha-label-badge\n                      @click=",
          "\n                      class=",
          '\n                      id="apparmor"\n                      icon="hassio:shield"\n                      label="apparmor"\n                      description=""\n                    ></ha-label-badge>\n                  '
        ]);
        return (
          (Xe = function() {
            return e;
          }),
          e
        );
      }
      function Ze() {
        var e = ht([
          "\n                    <ha-label-badge\n                      @click=",
          '\n                      id="host_pid"\n                      icon="hassio:pound"\n                      label="host pid"\n                      description=""\n                    ></ha-label-badge>\n                  '
        ]);
        return (
          (Ze = function() {
            return e;
          }),
          e
        );
      }
      function $e() {
        var e = ht([
          "\n                    <ha-label-badge\n                      @click=",
          '\n                      id="docker_api"\n                      icon="hassio:docker"\n                      label="docker"\n                      description=""\n                    ></ha-label-badge>\n                  '
        ]);
        return (
          ($e = function() {
            return e;
          }),
          e
        );
      }
      function et() {
        var e = ht([
          "\n                    <ha-label-badge\n                      @click=",
          '\n                      id="hassio_api"\n                      icon="hassio:home-assistant"\n                      label="hassio"\n                      .description=',
          "\n                    ></ha-label-badge>\n                  "
        ]);
        return (
          (et = function() {
            return e;
          }),
          e
        );
      }
      function tt() {
        var e = ht([
          "\n                    <ha-label-badge\n                      @click=",
          '\n                      id="homeassistant_api"\n                      icon="hassio:home-assistant"\n                      label="hass"\n                      description=""\n                    ></ha-label-badge>\n                  '
        ]);
        return (
          (tt = function() {
            return e;
          }),
          e
        );
      }
      function rt() {
        var e = ht([
          "\n                    <ha-label-badge\n                      @click=",
          '\n                      id="full_access"\n                      icon="hassio:chip"\n                      label="hardware"\n                      description=""\n                    ></ha-label-badge>\n                  '
        ]);
        return (
          (rt = function() {
            return e;
          }),
          e
        );
      }
      function nt() {
        var e = ht([
          "\n                    <ha-label-badge\n                      @click=",
          '\n                      id="host_network"\n                      icon="hassio:network"\n                      label="host"\n                      description=""\n                    ></ha-label-badge>\n                  '
        ]);
        return (
          (nt = function() {
            return e;
          }),
          e
        );
      }
      function it() {
        var e = ht([
          '\n                  <a href="',
          '" target="_blank" class="logo">\n                    <img src="/api/hassio/addons/',
          '/logo" />\n                  </a>\n                '
        ]);
        return (
          (it = function() {
            return e;
          }),
          e
        );
      }
      function ot() {
        var e = ht(["\n                    ", "\n                  "]);
        return (
          (ot = function() {
            return e;
          }),
          e
        );
      }
      function at() {
        var e = ht([
          '\n                          <iron-icon\n                            title="Add-on is stopped"\n                            class="stopped"\n                            icon="hassio:circle"\n                          ></iron-icon>\n                        '
        ]);
        return (
          (at = function() {
            return e;
          }),
          e
        );
      }
      function st() {
        var e = ht([
          '\n                          <iron-icon\n                            title="Add-on is running"\n                            class="running"\n                            icon="hassio:circle"\n                          ></iron-icon>\n                        '
        ]);
        return (
          (st = function() {
            return e;
          }),
          e
        );
      }
      function ct() {
        var e = ht([
          "\n                    ",
          "\n                    ",
          "\n                  "
        ]);
        return (
          (ct = function() {
            return e;
          }),
          e
        );
      }
      function lt() {
        var e = ht([
          '\n        <paper-card heading="Warning: Protection mode is disabled!" class="warning">\n          <div class="card-content">\n            Protection mode on this add-on is disabled! This gives the add-on full access to the entire system, which adds security risks, and could damage your system when used incorrectly. Only disable the protection mode if you know, need AND trust the source of this add-on.\n          </div>\n          <div class="card-actions protection-enable">\n              <mwc-button @click=',
          ">Enable Protection mode</mwc-button>\n            </div>\n          </div>\n        </paper-card>\n      "
        ]);
        return (
          (lt = function() {
            return e;
          }),
          e
        );
      }
      function dt() {
        var e = ht([
          "\n                        <mwc-button @click=",
          ">\n                          Changelog\n                        </mwc-button>\n                      "
        ]);
        return (
          (dt = function() {
            return e;
          }),
          e
        );
      }
      function ut() {
        var e = ht([
          "\n                        <p>\n                          This update is no longer compatible with your system.\n                        </p>\n                      "
        ]);
        return (
          (ut = function() {
            return e;
          }),
          e
        );
      }
      function pt() {
        var e = ht([
          '\n              <paper-card heading="Update available! 🎉">\n                <div class="card-content">\n                  <hassio-card-content\n                    .hass=',
          '\n                    .title="',
          " ",
          ' is available"\n                    .description="You are currently running version ',
          '"\n                    icon="hassio:arrow-up-bold-circle"\n                    iconClass="update"\n                  ></hassio-card-content>\n                  ',
          '\n                </div>\n                <div class="card-actions">\n                  <ha-call-api-button\n                    .hass=',
          "\n                    .disabled=",
          '\n                    path="hassio/addons/',
          '/update"\n                  >\n                    Update\n                  </ha-call-api-button>\n                  ',
          "\n                </div>\n              </paper-card>\n            "
        ]);
        return (
          (pt = function() {
            return e;
          }),
          e
        );
      }
      function ft() {
        var e = ht([
          "\n      ",
          "\n\n      ",
          '\n\n      <paper-card>\n        <div class="card-content">\n          <div class="addon-header">\n            ',
          '\n            <div class="addon-version light-color">\n            ',
          '\n            </div>\n          </div>\n          <div class="description light-color">\n            ',
          ".<br />\n            Visit <a href=",
          '" target="_blank">\n              ',
          " page\n            </a> for details.\n          </div>\n          ",
          '\n          <div class="security">\n            <ha-label-badge\n              class=',
          "\n              @click=",
          '\n              id="rating"\n              .value=',
          '\n              label="rating"\n              description=""\n            ></ha-label-badge>\n            ',
          "\n\n            ",
          "\n\n            ",
          "\n\n            ",
          "\n\n            ",
          "\n\n            ",
          "\n\n            ",
          "\n\n            ",
          "\n\n            ",
          "\n          </div>\n\n          ",
          "\n          ",
          '\n        </div>\n        <div class="card-actions">\n        ',
          "\n        </div>\n      </paper-card>\n\n      ",
          "\n    "
        ]);
        return (
          (ft = function() {
            return e;
          }),
          e
        );
      }
      function ht(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function mt(e) {
        return (mt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function vt(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function yt(e, t) {
        return (yt =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function bt(e) {
        var t,
          r = Ot(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = {
              get: e.value,
              configurable: !0,
              enumerable: !1
            })
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
        var t = (function(e, t) {
          if ("object" !== Ce(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Ce(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Ce(t) ? t : String(t);
      }
      function jt() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      }
      function _t(e) {
        if (Array.isArray(e)) return e;
      }
      var Pt = {
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
        xt =
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
                    _t(t) ||
                      (function(e) {
                        if (
                          Symbol.iterator in Object(e) ||
                          "[object Arguments]" ===
                            Object.prototype.toString.call(e)
                        )
                          return Array.from(e);
                      })(t) ||
                      jt()).map(function(e) {
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
                    r = Et(e, "finisher"),
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
                  var r = Et(e, "finisher"),
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
                      if (kt(o.descriptor) || kt(i.descriptor)) {
                        if (wt(o) || wt(i))
                          throw new ReferenceError(
                            "Duplicated methods (" +
                              o.key +
                              ") can't be decorated."
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
                        !(o = (t = mt(n)).call.apply(t, [this].concat(s))) ||
                        ("object" !== Ce(o) && "function" != typeof o)
                          ? vt(i)
                          : o),
                      e(vt(r)),
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
                        t && yt(e, t);
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
                    kind: "method",
                    key: "render",
                    value: function() {
                      return Object(n.e)(
                        ft(),
                        this._computeUpdateAvailable
                          ? Object(n.e)(
                              pt(),
                              this.hass,
                              this.addon.name,
                              this.addon.last_version,
                              this.addon.version,
                              this.addon.available ? "" : Object(n.e)(ut()),
                              this.hass,
                              !this.addon.available,
                              this.addon.slug,
                              this.addon.changelog
                                ? Object(n.e)(dt(), this._openChangelog)
                                : ""
                            )
                          : "",
                        this.addon.protected
                          ? ""
                          : Object(n.e)(lt(), this._protectionToggled),
                        this.addon.name,
                        this.addon.version
                          ? Object(n.e)(
                              ct(),
                              this.addon.version,
                              this._computeIsRunning
                                ? Object(n.e)(st())
                                : Object(n.e)(at())
                            )
                          : Object(n.e)(ot(), this.addon.last_version),
                        this.addon.description,
                        this.addon.url,
                        this.addon.name,
                        this.addon.logo
                          ? Object(n.e)(it(), this.addon.url, this.addon.slug)
                          : "",
                        Object(q.a)({
                          green: [5, 6].includes(Number(this.addon.rating)),
                          yellow: [3, 4].includes(Number(this.addon.rating)),
                          red: [1, 2].includes(Number(this.addon.rating))
                        }),
                        this._showMoreInfo,
                        this.addon.rating,
                        this.addon.host_network
                          ? Object(n.e)(nt(), this._showMoreInfo)
                          : "",
                        this.addon.full_access
                          ? Object(n.e)(rt(), this._showMoreInfo)
                          : "",
                        this.addon.homeassistant_api
                          ? Object(n.e)(tt(), this._showMoreInfo)
                          : "",
                        this._computeHassioApi
                          ? Object(n.e)(
                              et(),
                              this._showMoreInfo,
                              this.addon.hassio_role
                            )
                          : "",
                        this.addon.docker_api
                          ? Object(n.e)($e(), this._showMoreInfo)
                          : "",
                        this.addon.host_pid
                          ? Object(n.e)(Ze(), this._showMoreInfo)
                          : "",
                        this.addon.apparmor
                          ? Object(n.e)(
                              Xe(),
                              this._showMoreInfo,
                              this._computeApparmorClassName
                            )
                          : "",
                        this.addon.auth_api
                          ? Object(n.e)(Qe(), this._showMoreInfo)
                          : "",
                        this.addon.ingress
                          ? Object(n.e)(Ke(), this._showMoreInfo)
                          : "",
                        this.addon.version
                          ? Object(n.e)(
                              Ye(),
                              this._startOnBootToggled,
                              "auto" === this.addon.boot,
                              this._autoUpdateToggled,
                              this.addon.auto_update,
                              this.addon.ingress
                                ? Object(n.e)(
                                    Ve(),
                                    this._panelToggled,
                                    this.addon.ingress_panel,
                                    this._computeCannotIngressSidebar,
                                    this._computeCannotIngressSidebar
                                      ? Object(n.e)(Ge())
                                      : ""
                                  )
                                : "",
                              this._computeUsesProtectedOptions
                                ? Object(n.e)(
                                    Je(),
                                    this._protectionToggled,
                                    this.addon.protected
                                  )
                                : ""
                            )
                          : "",
                        this._error ? Object(n.e)(Le(), this._error) : "",
                        this.addon.version
                          ? Object(n.e)(
                              Be(),
                              this._uninstallClicked,
                              this.addon.build
                                ? Object(n.e)(We(), this.hass, this.addon.slug)
                                : "",
                              this._computeIsRunning
                                ? Object(n.e)(
                                    qe(),
                                    this.hass,
                                    this.addon.slug,
                                    this.hass,
                                    this.addon.slug
                                  )
                                : Object(n.e)(Me(), this.hass, this.addon.slug),
                              this._computeShowWebUI
                                ? Object(n.e)(Ue(), this._pathWebui)
                                : "",
                              this._computeShowIngressUI
                                ? Object(n.e)(He(), this._openIngress)
                                : ""
                            )
                          : Object(n.e)(
                              Ne(),
                              this.addon.available ? "" : Object(n.e)(Ie()),
                              !this.addon.available,
                              this._installClicked
                            ),
                        this.addon.long_description
                          ? Object(n.e)(Fe(), this.addon.long_description)
                          : ""
                      );
                    }
                  },
                  {
                    kind: "get",
                    static: !0,
                    key: "styles",
                    value: function() {
                      return [a.a, o.a, Object(n.c)(Re())];
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
                      Object(Se.a)(this, {
                        title: Pt[t].title,
                        content: Pt[t].description
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
                        this.addon.version !== this.addon.last_version
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
                      Object(Te.a)(
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
                      return !this.addon.ingress || !this._computeHA92plus;
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
                    kind: "get",
                    key: "_computeHA92plus",
                    value: function() {
                      var e = ze(this.hass.config.version.split(".", 2), 2),
                        t = e[0],
                        r = e[1];
                      return Number(t) > 0 || ("0" === t && Number(r) >= 92);
                    }
                  },
                  {
                    kind: "method",
                    key: "_startOnBootToggled",
                    value: function() {
                      var e, t, r;
                      return regeneratorRuntime.async(
                        function(n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (e = {
                                    boot:
                                      "auto" === this.addon.boot
                                        ? "manual"
                                        : "auto"
                                  }),
                                  (n.prev = 2),
                                  (n.next = 5),
                                  regeneratorRuntime.awrap(
                                    Object(i.g)(this.hass, this.addon.slug, e)
                                  )
                                );
                              case 5:
                                (t = {
                                  success: !0,
                                  response: void 0,
                                  path: "option"
                                }),
                                  Object(_.a)(this, "hass-api-called", t),
                                  (n.next = 12);
                                break;
                              case 9:
                                (n.prev = 9),
                                  (n.t0 = n.catch(2)),
                                  (this._error = "Failed to set addon option, ".concat(
                                    (null === (r = n.t0.body) || void 0 === r
                                      ? void 0
                                      : r.message) || n.t0
                                  ));
                              case 12:
                              case "end":
                                return n.stop();
                            }
                        },
                        null,
                        this,
                        [[2, 9]]
                      );
                    }
                  },
                  {
                    kind: "method",
                    key: "_autoUpdateToggled",
                    value: function() {
                      var e, t, r;
                      return regeneratorRuntime.async(
                        function(n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (e = {
                                    auto_update: !this.addon.auto_update
                                  }),
                                  (n.prev = 2),
                                  (n.next = 5),
                                  regeneratorRuntime.awrap(
                                    Object(i.g)(this.hass, this.addon.slug, e)
                                  )
                                );
                              case 5:
                                (t = {
                                  success: !0,
                                  response: void 0,
                                  path: "option"
                                }),
                                  Object(_.a)(this, "hass-api-called", t),
                                  (n.next = 12);
                                break;
                              case 9:
                                (n.prev = 9),
                                  (n.t0 = n.catch(2)),
                                  (this._error = "Failed to set addon option, ".concat(
                                    (null === (r = n.t0.body) || void 0 === r
                                      ? void 0
                                      : r.message) || n.t0
                                  ));
                              case 12:
                              case "end":
                                return n.stop();
                            }
                        },
                        null,
                        this,
                        [[2, 9]]
                      );
                    }
                  },
                  {
                    kind: "method",
                    key: "_protectionToggled",
                    value: function() {
                      var e, t, r;
                      return regeneratorRuntime.async(
                        function(n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (e = {
                                    protected: !this.addon.protected
                                  }),
                                  (n.prev = 2),
                                  (n.next = 5),
                                  regeneratorRuntime.awrap(
                                    Object(i.h)(this.hass, this.addon.slug, e)
                                  )
                                );
                              case 5:
                                (t = {
                                  success: !0,
                                  response: void 0,
                                  path: "security"
                                }),
                                  Object(_.a)(this, "hass-api-called", t),
                                  (n.next = 12);
                                break;
                              case 9:
                                (n.prev = 9),
                                  (n.t0 = n.catch(2)),
                                  (this._error = "Failed to set addon security option, ".concat(
                                    (null === (r = n.t0.body) || void 0 === r
                                      ? void 0
                                      : r.message) || n.t0
                                  ));
                              case 12:
                              case "end":
                                return n.stop();
                            }
                        },
                        null,
                        this,
                        [[2, 9]]
                      );
                    }
                  },
                  {
                    kind: "method",
                    key: "_panelToggled",
                    value: function() {
                      var e, t, r;
                      return regeneratorRuntime.async(
                        function(n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (this._error = void 0),
                                  (e = {
                                    ingress_panel: !this.addon.ingress_panel
                                  }),
                                  (n.prev = 2),
                                  (n.next = 5),
                                  regeneratorRuntime.awrap(
                                    Object(i.g)(this.hass, this.addon.slug, e)
                                  )
                                );
                              case 5:
                                (t = {
                                  success: !0,
                                  response: void 0,
                                  path: "option"
                                }),
                                  Object(_.a)(this, "hass-api-called", t),
                                  (n.next = 12);
                                break;
                              case 9:
                                (n.prev = 9),
                                  (n.t0 = n.catch(2)),
                                  (this._error = "Failed to set addon option, ".concat(
                                    (null === (r = n.t0.body) || void 0 === r
                                      ? void 0
                                      : r.message) || n.t0
                                  ));
                              case 12:
                              case "end":
                                return n.stop();
                            }
                        },
                        null,
                        this,
                        [[2, 9]]
                      );
                    }
                  },
                  {
                    kind: "method",
                    key: "_openChangelog",
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
                                  regeneratorRuntime.awrap(
                                    Object(i.a)(this.hass, this.addon.slug)
                                  )
                                );
                              case 4:
                                (e = r.sent),
                                  Object(Se.a)(this, {
                                    title: "Changelog",
                                    content: e
                                  }),
                                  (r.next = 11);
                                break;
                              case 8:
                                (r.prev = 8),
                                  (r.t0 = r.catch(1)),
                                  (this._error = "Failed to get addon changelog, ".concat(
                                    (null === (t = r.t0.body) || void 0 === t
                                      ? void 0
                                      : t.message) || r.t0
                                  ));
                              case 11:
                              case "end":
                                return r.stop();
                            }
                        },
                        null,
                        this,
                        [[1, 8]]
                      );
                    }
                  },
                  {
                    kind: "method",
                    key: "_installClicked",
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
                                  regeneratorRuntime.awrap(
                                    Object(i.e)(this.hass, this.addon.slug)
                                  )
                                );
                              case 4:
                                (e = {
                                  success: !0,
                                  response: void 0,
                                  path: "install"
                                }),
                                  Object(_.a)(this, "hass-api-called", e),
                                  (r.next = 11);
                                break;
                              case 8:
                                (r.prev = 8),
                                  (r.t0 = r.catch(1)),
                                  (this._error = "Failed to install addon, ".concat(
                                    (null === (t = r.t0.body) || void 0 === t
                                      ? void 0
                                      : t.message) || r.t0
                                  ));
                              case 11:
                              case "end":
                                return r.stop();
                            }
                        },
                        null,
                        this,
                        [[1, 8]]
                      );
                    }
                  },
                  {
                    kind: "method",
                    key: "_uninstallClicked",
                    value: function() {
                      var e, t;
                      return regeneratorRuntime.async(
                        function(r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                if (
                                  confirm(
                                    "Are you sure you want to uninstall this add-on?"
                                  )
                                ) {
                                  r.next = 2;
                                  break;
                                }
                                return r.abrupt("return");
                              case 2:
                                return (
                                  (this._error = void 0),
                                  (r.prev = 3),
                                  (r.next = 6),
                                  regeneratorRuntime.awrap(
                                    Object(i.i)(this.hass, this.addon.slug)
                                  )
                                );
                              case 6:
                                (e = {
                                  success: !0,
                                  response: void 0,
                                  path: "uninstall"
                                }),
                                  Object(_.a)(this, "hass-api-called", e),
                                  (r.next = 13);
                                break;
                              case 10:
                                (r.prev = 10),
                                  (r.t0 = r.catch(3)),
                                  (this._error = "Failed to uninstall addon, ".concat(
                                    (null === (t = r.t0.body) || void 0 === t
                                      ? void 0
                                      : t.message) || r.t0
                                  ));
                              case 13:
                              case "end":
                                return r.stop();
                            }
                        },
                        null,
                        this,
                        [[3, 10]]
                      );
                    }
                  }
                ]
              };
            },
            n.a
          ),
          r(104));
      function Dt(e) {
        return (Dt =
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
      function At() {
        var e = Ct([
          "\n        :host,\n        paper-card {\n          display: block;\n        }\n        pre {\n          overflow-x: auto;\n          white-space: pre-wrap;\n          overflow-wrap: break-word;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-bottom: 16px;\n        }\n      "
        ]);
        return (
          (At = function() {
            return e;
          }),
          e
        );
      }
      function Tt() {
        var e = Ct([
          '\n              <div class="errors">',
          "</div>\n            "
        ]);
        return (
          (Tt = function() {
            return e;
          }),
          e
        );
      }
      function St() {
        var e = Ct([
          '\n      <paper-card heading="Log">\n        ',
          '\n        <div class="card-content" id="content"></div>\n        <div class="card-actions">\n          <mwc-button @click=',
          ">Refresh</mwc-button>\n        </div>\n      </paper-card>\n    "
        ]);
        return (
          (St = function() {
            return e;
          }),
          e
        );
      }
      function Ct(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function zt(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Rt(e, t) {
        return (Rt =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Ft(e) {
        var t,
          r = Mt(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = {
              get: e.value,
              configurable: !0,
              enumerable: !1
            })
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
      function It(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Nt(e) {
        return e.decorators && e.decorators.length;
      }
      function Ht(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Ut(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Mt(e) {
        var t = (function(e, t) {
          if ("object" !== Dt(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Dt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Dt(t) ? t : String(t);
      }
      function qt(e, t, r) {
        return (qt =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Wt(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function Wt(e) {
        return (Wt = Object.setPrototypeOf
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
                  if (!Nt(e)) return r.push(e);
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
              var r = Mt(e.key),
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
                r = Ut(e, "finisher"),
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
              var r = Ut(e, "finisher"),
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
                  if (Ht(o.descriptor) || Ht(i.descriptor)) {
                    if (Nt(o) || Nt(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Nt(o)) {
                      if (Nt(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    It(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Ft)),
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
                  !(o = (t = Wt(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== Dt(o) && "function" != typeof o)
                    ? zt(i)
                    : o),
                e(zt(r)),
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
                  t && Rt(e, t);
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
                value: function() {
                  return regeneratorRuntime.async(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              qt(
                                Wt(r.prototype),
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
                    St(),
                    this._error ? Object(n.e)(Tt(), this._error) : "",
                    this._refresh
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [a.a, o.a, xt.a, Object(n.c)(At())];
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
                              regeneratorRuntime.awrap(
                                Object(i.c)(this.hass, this.addon.slug)
                              )
                            );
                          case 4:
                            for (e = r.sent; this._logContent.lastChild; )
                              this._logContent.removeChild(
                                this._logContent.lastChild
                              );
                            this._logContent.appendChild(Object(xt.b)(e)),
                              (r.next = 12);
                            break;
                          case 9:
                            (r.prev = 9),
                              (r.t0 = r.catch(1)),
                              (this._error = "Failed to get addon logs, ".concat(
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
      function Bt(e) {
        return (Bt =
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
      function Lt() {
        var e = Kt([
          "\n        :host {\n          display: block;\n        }\n        paper-card {\n          display: block;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-bottom: 16px;\n        }\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n        }\n      "
        ]);
        return (
          (Lt = function() {
            return e;
          }),
          e
        );
      }
      function Jt() {
        var e = Kt([
          "\n                  <tr>\n                    <td>",
          "</td>\n                    <td>\n                      <paper-input\n                        @value-changed=",
          '\n                        placeholder="disabled"\n                        .value=',
          "\n                        .container=",
          "\n                        no-label-float\n                      ></paper-input>\n                    </td>\n                    <td>",
          "</td>\n                  </tr>\n                "
        ]);
        return (
          (Jt = function() {
            return e;
          }),
          e
        );
      }
      function Gt() {
        var e = Kt([
          '\n                <div class="errors">',
          "</div>\n              "
        ]);
        return (
          (Gt = function() {
            return e;
          }),
          e
        );
      }
      function Vt() {
        var e = Kt([
          '\n      <paper-card heading="Network">\n        <div class="card-content">\n          ',
          "\n\n          <table>\n            <tbody>\n              <tr>\n                <th>Container</th>\n                <th>Host</th>\n                <th>Description</th>\n              </tr>\n              ",
          '\n            </tbody>\n          </table>\n        </div>\n        <div class="card-actions">\n          <mwc-button class="warning" @click=',
          ">\n            Reset to defaults\n          </mwc-button>\n          <mwc-button @click=",
          ">Save</mwc-button>\n        </div>\n      </paper-card>\n    "
        ]);
        return (
          (Vt = function() {
            return e;
          }),
          e
        );
      }
      function Yt() {
        var e = Kt([""]);
        return (
          (Yt = function() {
            return e;
          }),
          e
        );
      }
      function Kt(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Qt(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Xt(e, t) {
        return (Xt =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Zt(e) {
        var t,
          r = nr(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = {
              get: e.value,
              configurable: !0,
              enumerable: !1
            })
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
      function $t(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function er(e) {
        return e.decorators && e.decorators.length;
      }
      function tr(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function rr(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function nr(e) {
        var t = (function(e, t) {
          if ("object" !== Bt(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Bt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Bt(t) ? t : String(t);
      }
      function ir(e, t, r) {
        return (ir =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = or(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function or(e) {
        return (or = Object.setPrototypeOf
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
                  if (!er(e)) return r.push(e);
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
              var r = nr(e.key),
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
                r = rr(e, "finisher"),
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
              var r = rr(e, "finisher"),
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
                  if (tr(o.descriptor) || tr(i.descriptor)) {
                    if (er(o) || er(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (er(o)) {
                      if (er(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    $t(o, i);
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
                  !(o = (t = or(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== Bt(o) && "function" != typeof o)
                    ? Qt(i)
                    : o),
                e(Qt(r)),
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
                  t && Xt(e, t);
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
                  ir(or(r.prototype), "connectedCallback", this).call(this),
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
                        Vt(),
                        this._error ? Object(n.e)(Gt(), this._error) : "",
                        this._config.map(function(t) {
                          return Object(n.e)(
                            Jt(),
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
                    : Object(n.e)(Yt());
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [a.a, o.a, Object(n.c)(Lt())];
                }
              },
              {
                kind: "method",
                key: "update",
                value: function(e) {
                  ir(or(r.prototype), "update", this).call(this, e),
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
                      return {
                        container: r,
                        host: e[r],
                        description: t[r]
                      };
                    });
                  this._config = r.sort(function(e, t) {
                    return e.container > t.container ? 1 : -1;
                  });
                }
              },
              {
                kind: "method",
                key: "_configChanged",
                value: function(e) {
                  var t;
                  return regeneratorRuntime.async(
                    function(r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            (t = e.target),
                              this._config.forEach(function(e) {
                                e.container === t.container &&
                                  e.host !== parseInt(String(t.value), 10) &&
                                  (e.host = t.value
                                    ? parseInt(String(t.value), 10)
                                    : null);
                              });
                          case 2:
                          case "end":
                            return r.stop();
                        }
                    },
                    null,
                    this
                  );
                }
              },
              {
                kind: "method",
                key: "_resetTapped",
                value: function() {
                  var e, t, r;
                  return regeneratorRuntime.async(
                    function(n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (e = { network: null }),
                              (n.prev = 1),
                              (n.next = 4),
                              regeneratorRuntime.awrap(
                                Object(i.g)(this.hass, this.addon.slug, e)
                              )
                            );
                          case 4:
                            (t = {
                              success: !0,
                              response: void 0,
                              path: "option"
                            }),
                              Object(_.a)(this, "hass-api-called", t),
                              (n.next = 11);
                            break;
                          case 8:
                            (n.prev = 8),
                              (n.t0 = n.catch(1)),
                              (this._error = "Failed to set addon network configuration, ".concat(
                                (null === (r = n.t0.body) || void 0 === r
                                  ? void 0
                                  : r.message) || n.t0
                              ));
                          case 11:
                          case "end":
                            return n.stop();
                        }
                    },
                    null,
                    this,
                    [[1, 8]]
                  );
                }
              },
              {
                kind: "method",
                key: "_saveTapped",
                value: function() {
                  var e, t, r, n;
                  return regeneratorRuntime.async(
                    function(o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (this._error = void 0),
                              (e = {}),
                              this._config.forEach(function(t) {
                                e[t.container] = parseInt(String(t.host), 10);
                              }),
                              (t = { network: e }),
                              (o.prev = 4),
                              (o.next = 7),
                              regeneratorRuntime.awrap(
                                Object(i.g)(this.hass, this.addon.slug, t)
                              )
                            );
                          case 7:
                            (r = {
                              success: !0,
                              response: void 0,
                              path: "option"
                            }),
                              Object(_.a)(this, "hass-api-called", r),
                              (o.next = 14);
                            break;
                          case 11:
                            (o.prev = 11),
                              (o.t0 = o.catch(4)),
                              (this._error = "Failed to set addon network configuration, ".concat(
                                (null === (n = o.t0.body) || void 0 === n
                                  ? void 0
                                  : n.message) || o.t0
                              ));
                          case 14:
                          case "end":
                            return o.stop();
                        }
                    },
                    null,
                    this,
                    [[4, 11]]
                  );
                }
              }
            ]
          };
        },
        n.a
      );
      function ar(e) {
        return (ar =
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
      function sr() {
        var e = fr([
          "\n        :host {\n          color: var(--primary-text-color);\n          --paper-card-header-color: var(--primary-text-color);\n        }\n        .content {\n          padding: 24px 0 32px;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n        }\n        hassio-addon-info,\n        hassio-addon-network,\n        hassio-addon-audio,\n        hassio-addon-config {\n          margin-bottom: 24px;\n          width: 600px;\n        }\n        hassio-addon-logs {\n          max-width: calc(100% - 8px);\n          min-width: 600px;\n        }\n        @media only screen and (max-width: 600px) {\n          hassio-addon-info,\n          hassio-addon-network,\n          hassio-addon-audio,\n          hassio-addon-config,\n          hassio-addon-logs {\n            max-width: 100%;\n            min-width: 100%;\n          }\n        }\n      "
        ]);
        return (
          (sr = function() {
            return e;
          }),
          e
        );
      }
      function cr() {
        var e = fr([
          "\n                      <hassio-addon-network\n                        .hass=",
          "\n                        .addon=",
          "\n                      ></hassio-addon-network>\n                    "
        ]);
        return (
          (cr = function() {
            return e;
          }),
          e
        );
      }
      function lr() {
        var e = fr([
          "\n                      <hassio-addon-audio\n                        .hass=",
          "\n                        .addon=",
          "\n                      ></hassio-addon-audio>\n                    "
        ]);
        return (
          (lr = function() {
            return e;
          }),
          e
        );
      }
      function dr() {
        var e = fr([
          "\n                <hassio-addon-config\n                  .hass=",
          "\n                  .addon=",
          "\n                ></hassio-addon-config>\n\n                ",
          "\n                ",
          "\n\n                <hassio-addon-logs\n                  .hass=",
          "\n                  .addon=",
          "\n                ></hassio-addon-logs>\n              "
        ]);
        return (
          (dr = function() {
            return e;
          }),
          e
        );
      }
      function ur() {
        var e = fr([
          '\n      <hass-subpage header="Hass.io: add-on details" hassio>\n        <div class="content">\n          <hassio-addon-info\n            .hass=',
          "\n            .addon=",
          "\n          ></hassio-addon-info>\n\n          ",
          "\n        </div>\n      </hass-subpage>\n    "
        ]);
        return (
          (ur = function() {
            return e;
          }),
          e
        );
      }
      function pr() {
        var e = fr([
          "\n        <paper-spinner-lite active></paper-spinner-lite>\n      "
        ]);
        return (
          (pr = function() {
            return e;
          }),
          e
        );
      }
      function fr(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function hr(e) {
        return (hr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function mr(e) {
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
      function yr(e) {
        var t,
          r = Er(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1
            })
          : "get" === e.kind
          ? (t = {
              get: e.value,
              configurable: !0,
              enumerable: !1
            })
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
      function br(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function gr(e) {
        return e.decorators && e.decorators.length;
      }
      function wr(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function kr(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Er(e) {
        var t = (function(e, t) {
          if ("object" !== ar(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== ar(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === ar(t) ? t : String(t);
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
                  if (!gr(e)) return r.push(e);
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
              var r = Er(e.key),
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
                r = kr(e, "finisher"),
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
              var r = kr(e, "finisher"),
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
                  if (wr(o.descriptor) || wr(i.descriptor)) {
                    if (gr(o) || gr(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (gr(o)) {
                      if (gr(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    br(o, i);
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
                    !(o = (t = hr(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== ar(o) && "function" != typeof o)
                      ? mr(i)
                      : o),
                  e(mr(r)),
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
                    t && vr(e, t);
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
                        ur(),
                        this.hass,
                        this.addon,
                        this.addon && this.addon.version
                          ? Object(n.e)(
                              dr(),
                              this.hass,
                              this.addon,
                              this.addon.audio
                                ? Object(n.e)(lr(), this.hass, this.addon)
                                : "",
                              this.addon.network
                                ? Object(n.e)(cr(), this.hass, this.addon)
                                : "",
                              this.hass,
                              this.addon
                            )
                          : ""
                      )
                    : Object(n.e)(pr());
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [a.a, o.a, Object(n.c)(sr())];
                }
              },
              {
                kind: "method",
                key: "firstUpdated",
                value: function() {
                  var e = this;
                  return regeneratorRuntime.async(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              regeneratorRuntime.awrap(
                                this._routeDataChanged(this.route)
                              )
                            );
                          case 2:
                            this.addEventListener("hass-api-called", function(
                              t
                            ) {
                              return e._apiCalled(t);
                            });
                          case 3:
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
                key: "_apiCalled",
                value: function(e) {
                  var t;
                  return regeneratorRuntime.async(
                    function(r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if ((t = e.detail.path)) {
                              r.next = 3;
                              break;
                            }
                            return r.abrupt("return");
                          case 3:
                            if ("uninstall" !== t) {
                              r.next = 7;
                              break;
                            }
                            history.back(), (r.next = 9);
                            break;
                          case 7:
                            return (
                              (r.next = 9),
                              regeneratorRuntime.awrap(
                                this._routeDataChanged(this.route)
                              )
                            );
                          case 9:
                          case "end":
                            return r.stop();
                        }
                    },
                    null,
                    this
                  );
                }
              },
              {
                kind: "method",
                key: "_routeDataChanged",
                value: function(e) {
                  var t, r;
                  return regeneratorRuntime.async(
                    function(n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (t = e.path.substr(1)),
                              (n.prev = 1),
                              (n.next = 4),
                              regeneratorRuntime.awrap(
                                Object(i.b)(this.hass, t)
                              )
                            );
                          case 4:
                            (r = n.sent), (this.addon = r), (n.next = 11);
                            break;
                          case 8:
                            (n.prev = 8),
                              (n.t0 = n.catch(1)),
                              (this.addon = void 0);
                          case 11:
                          case "end":
                            return n.stop();
                        }
                    },
                    null,
                    this,
                    [[1, 8]]
                  );
                }
              }
            ]
          };
        },
        n.a
      );
    },
    72: function(e, t, r) {
      "use strict";
      var n,
        i = r(4),
        o = r(73),
        a = r.n(o),
        s = r(14);
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
      function u(e) {
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
          ? (t = {
              get: e.value,
              configurable: !0,
              enumerable: !1
            })
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
      function f(e) {
        return e.decorators && e.decorators.length;
      }
      function h(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function m(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function v(e) {
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
      function y(e, t, r) {
        return (y =
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
                  if (!f(e)) return r.push(e);
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
                r = m(e, "finisher"),
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
              var r = m(e, "finisher"),
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
                  if (h(o.descriptor) || h(i.descriptor)) {
                    if (f(o) || f(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (f(o)) {
                      if (f(i))
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
            })(a.d.map(u)),
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
                var a = arguments.length, s = new Array(a), d = 0;
                d < a;
                d++
              )
                s[d] = arguments[d];
              return (
                (i = this),
                (r =
                  !(o = (t = b(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== c(o) && "function" != typeof o)
                    ? l(i)
                    : o),
                e(l(r)),
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
                  y(b(r.prototype), "update", this).call(this, e),
                    n || (n = a()()),
                    this._render();
                }
              },
              {
                kind: "method",
                key: "_render",
                value: function() {
                  var e, t;
                  return regeneratorRuntime.async(
                    function(r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (r.next = 2),
                              regeneratorRuntime.awrap(
                                n.renderMarkdown(
                                  this.content,
                                  {
                                    breaks: !0,
                                    gfm: !0,
                                    tables: !0
                                  },
                                  { allowSvg: this.allowSvg }
                                )
                              )
                            );
                          case 2:
                            for (
                              this.innerHTML = r.sent,
                                this._resize(),
                                e = document.createTreeWalker(
                                  this,
                                  1,
                                  null,
                                  !1
                                );
                              e.nextNode();

                            )
                              (t = e.currentNode) instanceof
                                HTMLAnchorElement &&
                              t.host !== document.location.host
                                ? ((t.target = "_blank"),
                                  (t.rel = "noreferrer noopener"))
                                : t && t.addEventListener("load", this._resize);
                          case 6:
                          case "end":
                            return r.stop();
                        }
                    },
                    null,
                    this
                  );
                }
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
    73: function(e, t, r) {
      var n = r(74),
        i = ["renderMarkdown"];
      e.exports = function() {
        var e = new Worker(r.p + "201359fd5a526afe13ef.worker.js", {
          name: "[hash].worker.js"
        });
        return n(e, i), e;
      };
    }
  }
]);
//# sourceMappingURL=chunk.b21a4609308c9b8ef180.js.map
