(self.webpackJsonp = self.webpackJsonp || []).push([
  [7],
  {
    1: function(e, t, r) {
      "use strict";
      r.r(t);
      var n = r(4),
        i = (r(22), r(113), r(110), r(9)),
        o = document.createElement("template");
      o.setAttribute("style", "display: none;"),
        (o.innerHTML = '<custom-style>\n  <style>\n    /*\n      Home Assistant default styles.\n\n      In Polymer 2.0, default styles should to be set on the html selector.\n      (Setting all default styles only on body breaks shadyCSS polyfill.)\n      See: https://github.com/home-assistant/home-assistant-polymer/pull/901\n    */\n    html {\n      font-size: 14px;\n      height: 100vh;\n\n      /* text */\n      --primary-text-color: #212121;\n      --secondary-text-color: #727272;\n      --text-primary-color: #ffffff;\n      --disabled-text-color: #bdbdbd;\n\n      /* main interface colors */\n      --primary-color: #03a9f4;\n      --dark-primary-color: #0288d1;\n      --light-primary-color: #b3e5fC;\n      --accent-color: #ff9800;\n      --divider-color: rgba(0, 0, 0, .12);\n\n      --scrollbar-thumb-color: rgb(194, 194, 194);\n\n\n      --error-color: #db4437;\n      --error-state-color: var(--error-color);\n\n      /* states and badges */\n      --state-icon-color: #44739e;\n      --state-icon-active-color: #FDD835;\n      --state-icon-unavailable-color: var(--disabled-text-color);\n\n      /* background and sidebar */\n      --card-background-color: #ffffff;\n      --primary-background-color: #fafafa;\n      --secondary-background-color: #e5e5e5; /* behind the cards on state */\n\n      /* sidebar menu */\n      --sidebar-text-color: var(--primary-text-color);\n      --sidebar-background-color: var(--paper-listbox-background-color); /* backward compatible with existing themes */\n      --sidebar-icon-color: rgba(0, 0, 0, 0.5);\n      --sidebar-selected-text-color: var(--primary-color);\n      --sidebar-selected-icon-color: var(--primary-color);\n\n      /* controls */\n      --switch-checked-color: var(--primary-color);\n      /* --switch-unchecked-color: var(--accent-color); */\n      --switch-checked-button-color: var(--switch-checked-color, var(--paper-grey-50));\n      --switch-checked-track-color: var(--switch-checked-color, #000000);\n      --switch-unchecked-button-color: var(--switch-unchecked-color, var(--paper-grey-50));\n      --switch-unchecked-track-color: var(--switch-unchecked-color, #000000);\n      --slider-color: var(--primary-color);\n      --slider-secondary-color: var(--light-primary-color);\n      --slider-bar-color: var(--disabled-text-color);\n\n      /* for label-badge */\n      --label-badge-background-color: white;\n      --label-badge-text-color: rgb(76, 76, 76);\n      --label-badge-red: #DF4C1E;\n      --label-badge-blue: #039be5;\n      --label-badge-green: #0DA035;\n      --label-badge-yellow: #f4b400;\n      --label-badge-grey: var(--paper-grey-500);\n\n      /*\n        Paper-styles color.html dependency is stripped on build.\n        When a default paper-style color is used, it needs to be copied\n        from paper-styles/color.html to here.\n      */\n\n      --paper-grey-50: #fafafa; /* default for: --mwc-switch-unchecked-button-color */\n      --paper-grey-200: #eeeeee;  /* for ha-date-picker-style */\n      --paper-grey-500: #9e9e9e;  /* --label-badge-grey */\n\n      /* for paper-spinner */\n      --google-red-500: #db4437;\n      --google-blue-500: #4285f4;\n      --google-green-500: #0f9d58;\n      --google-yellow-500: #f4b400;\n      --paper-spinner-color: var(--primary-color);\n\n      /* for paper-slider */\n      --paper-green-400: #66bb6a;\n      --paper-blue-400: #42a5f5;\n      --paper-orange-400: #ffa726;\n\n      /* opacity for dark text on a light background */\n      --dark-divider-opacity: 0.12;\n      --dark-disabled-opacity: 0.38; /* or hint text or icon */\n      --dark-secondary-opacity: 0.54;\n      --dark-primary-opacity: 0.87;\n\n      /* opacity for light text on a dark background */\n      --light-divider-opacity: 0.12;\n      --light-disabled-opacity: 0.3; /* or hint text or icon */\n      --light-secondary-opacity: 0.7;\n      --light-primary-opacity: 1.0;\n\n      /* derived colors, to keep existing themes mostly working */\n      --paper-card-background-color: var(--card-background-color);\n      --paper-listbox-background-color: var(--card-background-color);\n      --paper-item-icon-color: var(--state-icon-color);\n      --paper-item-icon-active-color: var(--state-icon-active-color);\n      --table-row-background-color: var(--primary-background-color);\n      --table-row-alternative-background-color: var(--secondary-background-color);\n\n      /* set our slider style */\n      --paper-slider-knob-color: var(--slider-color);\n      --paper-slider-knob-start-color: var(--slider-color);\n      --paper-slider-pin-color: var(--slider-color);\n      --paper-slider-active-color: var(--slider-color);\n      --paper-slider-secondary-color: var(--slider-secondary-color);\n      --paper-slider-container-color: var(--slider-bar-color);\n      --ha-paper-slider-pin-font-size: 15px;\n\n      /* set data table style */\n      --data-table-background-color: var(--card-background-color);\n\n      /* rgb */\n      --rgb-primary-color: 3, 169, 244;\n      --rgb-accent-color: 255, 152, 0;\n      --rgb-primary-text-color: 33, 33, 33;\n      --rgb-secondary-text-color: 114, 114, 114;\n      --rgb-text-primary-color: 255, 255, 255;\n\n      /* mwc */\n      --mdc-theme-primary: var(--primary-color);\n      --mdc-theme-secondary: var(--accent-color);\n      --mdc-theme-background: var(--primary-background-color);\n      --mdc-theme-surface: var(--paper-card-background-color, var(--card-background-color));\n\n      /* mwc text styles */\n      --mdc-theme-on-primary: var(--text-primary-color);\n      --mdc-theme-on-secondary: var(--text-primary-color);\n      --mdc-theme-on-surface: var(--primary-text-color);\n\n      /* app header background color */\n      --app-header-text-color: var(--text-primary-color);\n      --app-header-background-color: var(--primary-color);\n\n    }\n  </style>\n\n  <style shady-unscoped="">\n    /*\n      prevent clipping of positioned elements in a small scrollable\n      force smooth scrolling if can scroll\n      use non-shady selectors so this only targets iOS 9\n      conditional mixin set in ha-style-dialog does not work with shadyCSS\n    */\n    paper-dialog-scrollable:not(.can-scroll) &gt; .scrollable {\n      -webkit-overflow-scrolling: auto !important;\n    }\n\n    paper-dialog-scrollable.can-scroll &gt; .scrollable {\n      -webkit-overflow-scrolling: touch !important;\n    }\n  </style>\n</custom-style><dom-module id="ha-style">\n  <template>\n    <style>\n    '
          .concat(
            i.a.cssText,
            '\n    </style>\n  </template>\n</dom-module><dom-module id="ha-style-dialog">\n  <template>\n    <style>\n      '
          )
          .concat(i.b.cssText, "\n    </style>\n  </template>\n</dom-module>")),
        document.head.appendChild(o.content);
      var a = function(e, t, r) {
          var n =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          e._themes || (e._themes = {});
          var i = t.default_theme;
          ("default" === r || (r && t.themes[r])) && (i = r);
          var o = Object.assign({}, e._themes);
          if ("default" !== i) {
            var a = t.themes[i];
            Object.keys(a).forEach(function(t) {
              var r = "--".concat(t);
              if (((e._themes[r] = ""), (o[r] = a[t]), !t.startsWith("rgb"))) {
                var n = "rgb-".concat(t);
                if (void 0 === a[n]) {
                  var i = "--".concat(n);
                  e._themes[i] = "";
                  var s,
                    c,
                    l,
                    u =
                      ((s = a[t]),
                      (c = s.replace(
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
                  null !== u && (o[i] = u);
                }
              }
            });
          }
          if (
            (e.updateStyles
              ? e.updateStyles(o)
              : window.ShadyCSS && window.ShadyCSS.styleSubtree(e, o),
            n)
          ) {
            var s = document.querySelector("meta[name=theme-color]");
            if (s) {
              s.hasAttribute("default-content") ||
                s.setAttribute("default-content", s.getAttribute("content"));
              var c = o["--primary-color"] || s.getAttribute("default-content");
              s.setAttribute("content", c);
            }
          }
        },
        s = r(14);
      r(16), r(91);
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
        var e = d([
          "\n        .content {\n          height: calc(100% - 64px);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          flex-direction: column;\n        }\n      "
        ]);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = d([
          '\n      <hass-subpage>\n        <div class="content">\n          <h3>',
          "</h3>\n          <slot>\n            <mwc-button @click=",
          ">go back</mwc-button>\n          </slot>\n        </div>\n      </hass-subpage>\n    "
        ]);
        return (
          (u = function() {
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
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
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
                  var a = arguments.length, s = new Array(a), l = 0;
                  l < a;
                  l++
                )
                  s[l] = arguments[l];
                return (
                  (i = this),
                  (r =
                    !(o = (t = f(n)).call.apply(t, [this].concat(s))) ||
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
                  return Object(n.e)(u(), this.error, this._backTapped);
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
                  return [Object(n.c)(l())];
                }
              }
            ]
          };
        },
        n.a
      ),
        r(93);
      var k = r(33),
        E = r(68);
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
      function j(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function P(e, t) {
        return (P =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function x(e) {
        var t,
          r = T(e.key);
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
      function _(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function S(e) {
        return e.decorators && e.decorators.length;
      }
      function C(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function D(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function T(e) {
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
      function A(e, t, r) {
        return (A =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
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
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var R = (function(e, t, r, n) {
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
                    if (!S(e)) return r.push(e);
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
                var r = T(e.key),
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
                  r = D(e, "finisher"),
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
                var r = D(e, "finisher"),
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
                    if (C(o.descriptor) || C(i.descriptor)) {
                      if (S(o) || S(i))
                        throw new ReferenceError(
                          "Duplicated methods (" +
                            o.key +
                            ") can't be decorated."
                        );
                      i.descriptor = o.descriptor;
                    } else {
                      if (S(o)) {
                        if (S(i))
                          throw new ReferenceError(
                            "Decorators can't be placed on different accessors with for the same property (" +
                              o.key +
                              ")."
                          );
                        i.decorators = o.decorators;
                      }
                      _(o, i);
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
                    !(o = (t = z(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== O(o) && "function" != typeof o)
                      ? j(i)
                      : o),
                  e(j(r)),
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
                    t && P(e, t);
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
                    return Object(E.a)(function(e) {
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
                    A(z(r.prototype), "update", this).call(this, e);
                    var n = this.routerOptions || { routes: {} };
                    if (!n || !n.initialLoad || this._initialLoadDone)
                      if (e.has("route")) {
                        var i = this.route,
                          o = n.defaultPage;
                        i &&
                          "" === i.path &&
                          void 0 !== o &&
                          Object(k.a)(
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
                              Object(k.a)(
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
                    A(z(r.prototype), "firstUpdated", this).call(this, e);
                    var n = this.routerOptions;
                    n &&
                      (n.preloadAll &&
                        Object.values(n.routes).forEach(function(e) {
                          return "object" === O(e) && e.load && e.load();
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
        I = r(54),
        F = r(42),
        L = function(e) {
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
                  return (t = r.sent), r.abrupt("return", Object(F.a)(t));
                case 4:
                case "end":
                  return r.stop();
              }
          });
        },
        N = function(e) {
          return regeneratorRuntime.async(function(t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.t0 = F.a),
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
        H = r(25),
        U = {},
        B = function(e, t, r, n, i) {
          return regeneratorRuntime.async(function(o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (
                    n in U ||
                      (U[n] = r().then(function() {
                        var r = document.createElement(n);
                        return e.provideHass(r), t.appendChild(r), r;
                      })),
                    (o.next = 3),
                    regeneratorRuntime.awrap(U[n])
                  );
                case 3:
                  o.sent.showDialog(i);
                case 5:
                case "end":
                  return o.stop();
              }
          });
        };
      function M(e) {
        return (M =
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
      function G(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function V(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
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
      function J(e, t) {
        return (J =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Y(e, t, r) {
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
      r(96), r(109), r(41), r(98), r(129), r(78), r(17);
      var $ = r(12);
      r(34);
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
      function Q() {
        var e = te([
          "\n        paper-card {\n          cursor: pointer;\n        }\n      "
        ]);
        return (
          (Q = function() {
            return e;
          }),
          e
        );
      }
      function X() {
        var e = te([
          "\n                  <paper-card .addon=",
          " @click=",
          '>\n                    <div class="card-content">\n                      <hassio-card-content\n                        .hass=',
          "\n                        title=",
          "\n                        description=",
          "\n                        ?available=",
          "\n                        icon=",
          "\n                        .iconTitle=",
          "\n                        .iconClass=",
          "\n                      ></hassio-card-content>\n                    </div>\n                  </paper-card>\n                "
        ]);
        return (
          (X = function() {
            return e;
          }),
          e
        );
      }
      function Z() {
        var e = te([
          '\n              <paper-card>\n                <div class="card-content">\n                  You don\'t have any add-ons installed yet. Head over to\n                  <a href="#" @click=',
          ">the add-on store</a> to\n                  get started!\n                </div>\n              </paper-card>\n            "
        ]);
        return (
          (Z = function() {
            return e;
          }),
          e
        );
      }
      function ee() {
        var e = te([
          '\n      <div class="content card-group">\n        <div class="title">Add-ons</div>\n        ',
          "\n      </div>\n    "
        ]);
        return (
          (ee = function() {
            return e;
          }),
          e
        );
      }
      function te(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function re(e) {
        return (re = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ne(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ie(e, t) {
        return (ie =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function oe(e) {
        var t,
          r = ue(e.key);
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
      function ae(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function se(e) {
        return e.decorators && e.decorators.length;
      }
      function ce(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function le(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function ue(e) {
        var t = (function(e, t) {
          if ("object" !== K(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== K(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === K(t) ? t : String(t);
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
                  if (!se(e)) return r.push(e);
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
              var r = ue(e.key),
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
                r = le(e, "finisher"),
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
              var r = le(e, "finisher"),
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
                  if (ce(o.descriptor) || ce(i.descriptor)) {
                    if (se(o) || se(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (se(o)) {
                      if (se(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    ae(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(oe)),
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
                    !(o = (t = re(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== K(o) && "function" != typeof o)
                      ? ne(i)
                      : o),
                  e(ne(r)),
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
                    t && ie(e, t);
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
                  var e = this;
                  return Object(n.e)(
                    ee(),
                    this.addons
                      ? this.addons
                          .sort(function(e, t) {
                            return e.name > t.name ? 1 : -1;
                          })
                          .map(function(t) {
                            return Object(n.e)(
                              X(),
                              t,
                              e._addonTapped,
                              e.hass,
                              t.name,
                              t.description,
                              t.available,
                              e._computeIcon(t),
                              e._computeIconTitle(t),
                              e._computeIconClass(t)
                            );
                          })
                      : Object(n.e)(Z(), this._openStore)
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.a, $.a, Object(n.c)(Q())];
                }
              },
              {
                kind: "method",
                key: "_computeIcon",
                value: function(e) {
                  return e.installed !== e.version
                    ? "hassio:arrow-up-bold-circle"
                    : "hassio:puzzle";
                }
              },
              {
                kind: "method",
                key: "_computeIconTitle",
                value: function(e) {
                  return e.installed !== e.version
                    ? "New version available"
                    : "started" === e.state
                    ? "Add-on is running"
                    : "Add-on is stopped";
                }
              },
              {
                kind: "method",
                key: "_computeIconClass",
                value: function(e) {
                  return e.installed !== e.version
                    ? "update"
                    : "started" === e.state
                    ? "running"
                    : "";
                }
              },
              {
                kind: "method",
                key: "_addonTapped",
                value: function(e) {
                  Object(k.a)(
                    this,
                    "/hassio/addon/".concat(e.currentTarget.addon.slug)
                  );
                }
              },
              {
                kind: "method",
                key: "_openStore",
                value: function() {
                  Object(k.a)(this, "/hassio/store");
                }
              }
            ]
          };
        },
        n.a
      ),
        r(20),
        r(45);
      function de() {
        var e = ge([
          "\n        :host {\n          width: 33%;\n        }\n        paper-card {\n          display: inline-block;\n          margin-bottom: 32px;\n        }\n        .icon {\n          --iron-icon-height: 48px;\n          --iron-icon-width: 48px;\n          float: right;\n          margin: 0 0 2px 10px;\n        }\n        .update-heading {\n          font-size: var(--paper-font-subhead_-_font-size);\n          font-weight: 500;\n          margin-bottom: 0.5em;\n        }\n        .warning {\n          color: var(--secondary-text-color);\n        }\n        .card-actions {\n          text-align: right;\n        }\n        .errors {\n          color: var(--google-red-500);\n          padding: 16px;\n        }\n        a {\n          text-decoration: none;\n        }\n      "
        ]);
        return (
          (de = function() {
            return e;
          }),
          e
        );
      }
      function fe(e) {
        return (fe =
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
      function pe() {
        var e = ge([
          '\n                <div class="icon">\n                  <iron-icon .icon="',
          '" />\n                </div>\n              '
        ]);
        return (
          (pe = function() {
            return e;
          }),
          e
        );
      }
      function he() {
        var e = ge([
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
          (he = function() {
            return e;
          }),
          e
        );
      }
      function me() {
        var e = ge([""]);
        return (
          (me = function() {
            return e;
          }),
          e
        );
      }
      function ye() {
        var e = ge([
          '\n              <div class="error">Error: ',
          "</div>\n            "
        ]);
        return (
          (ye = function() {
            return e;
          }),
          e
        );
      }
      function ve() {
        var e = ge([
          '\n      <div class="content">\n        ',
          '\n        <div class="card-group">\n          <div class="title">\n            ',
          "\n          </div>\n          ",
          "\n          ",
          "\n          ",
          "\n        </div>\n      </div>\n    "
        ]);
        return (
          (ve = function() {
            return e;
          }),
          e
        );
      }
      function be() {
        var e = ge([""]);
        return (
          (be = function() {
            return e;
          }),
          e
        );
      }
      function ge(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function we(e) {
        return (we = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ke(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ee(e, t) {
        return (Ee =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Oe(e) {
        var t,
          r = Se(e.key);
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
      function je(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Pe(e) {
        return e.decorators && e.decorators.length;
      }
      function xe(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function _e(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Se(e) {
        var t = (function(e, t) {
          if ("object" !== fe(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== fe(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === fe(t) ? t : String(t);
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
                  if (!Pe(e)) return r.push(e);
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
              var r = Se(e.key),
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
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
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
                  if (xe(o.descriptor) || xe(i.descriptor)) {
                    if (Pe(o) || Pe(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Pe(o)) {
                      if (Pe(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    je(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Oe)),
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
                    !(o = (t = we(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== fe(o) && "function" != typeof o)
                      ? ke(i)
                      : o),
                  e(ke(r)),
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
                    t && Ee(e, t);
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
                    return !!e && e.version !== e.last_version;
                  }).length;
                  return e
                    ? Object(n.e)(
                        ve(),
                        this._error ? Object(n.e)(ye(), this._error) : "",
                        e > 1 ? "Updates Available 🎉" : "Update Available 🎉",
                        this._renderUpdateCard(
                          "Home Assistant",
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
                          "Hass.io Supervisor",
                          this.supervisorInfo.version,
                          this.supervisorInfo.last_version,
                          "hassio/supervisor/update",
                          "https://github.com//home-assistant/hassio/releases/tag/".concat(
                            this.supervisorInfo.last_version
                          )
                        ),
                        this.hassOsInfo
                          ? this._renderUpdateCard(
                              "HassOS",
                              this.hassOsInfo.version,
                              this.hassOsInfo.version_latest,
                              "hassio/hassos/update",
                              "https://github.com//home-assistant/hassos/releases/tag/".concat(
                                this.hassOsInfo.version_latest
                              )
                            )
                          : ""
                      )
                    : Object(n.e)(be());
                }
              },
              {
                kind: "method",
                key: "_renderUpdateCard",
                value: function(e, t, r, i, o, a) {
                  return r === t
                    ? Object(n.e)(me())
                    : Object(n.e)(
                        he(),
                        a ? Object(n.e)(pe(), a) : "",
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
                    "object" === fe(t.body)
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
                  return [i.a, $.a, Object(n.c)(de())];
                }
              }
            ]
          };
        },
        n.a
      );
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
      function De() {
        var e = Ae([
          "\n        .content {\n          margin: 0 auto;\n        }\n      "
        ]);
        return (
          (De = function() {
            return e;
          }),
          e
        );
      }
      function Te() {
        var e = Ae([
          '\n      <div class="content">\n        <hassio-update\n          .hass=',
          "\n          .hassInfo=",
          "\n          .supervisorInfo=",
          "\n          .hassOsInfo=",
          "\n        ></hassio-update>\n        <hassio-addons\n          .hass=",
          "\n          .addons=",
          "\n        ></hassio-addons>\n      </div>\n    "
        ]);
        return (
          (Te = function() {
            return e;
          }),
          e
        );
      }
      function Ae(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function ze(e) {
        return (ze = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Re(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Ie(e, t) {
        return (Ie =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Fe(e) {
        var t,
          r = Be(e.key);
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
      function Le(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Ne(e) {
        return e.decorators && e.decorators.length;
      }
      function He(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Ue(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Be(e) {
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
                  if (!Ne(e)) return r.push(e);
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
              var r = Be(e.key),
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
                r = Ue(e, "finisher"),
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
              var r = Ue(e, "finisher"),
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
                  if (He(o.descriptor) || He(i.descriptor)) {
                    if (Ne(o) || Ne(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Ne(o)) {
                      if (Ne(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Le(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Fe)),
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
                    !(o = (t = ze(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== Ce(o) && "function" != typeof o)
                      ? Re(i)
                      : o),
                  e(Re(r)),
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
                    t && Ie(e, t);
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
                    Te(),
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
                  return [i.a, Object(n.c)(De())];
                }
              }
            ]
          };
        },
        n.a
      ),
        r(116),
        r(44),
        r(100),
        r(117);
      var Me = r(101);
      function Ge(e) {
        return (Ge =
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
      function Ve() {
        var e = Ze([
          '\n        paper-radio-group {\n          display: block;\n        }\n        paper-radio-button {\n          padding: 0 0 2px 2px;\n        }\n        paper-radio-button,\n        paper-checkbox,\n        paper-input[type="password"] {\n          display: block;\n          margin: 4px 0 4px 48px;\n        }\n        .pointer {\n          cursor: pointer;\n        }\n      '
        ]);
        return (
          (Ve = function() {
            return e;
          }),
          e
        );
      }
      function qe() {
        var e = Ze([
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
          (qe = function() {
            return e;
          }),
          e
        );
      }
      function We() {
        var e = Ze([
          '\n                <paper-card>\n                  <div class="card-content">\n                    You don\'t have any snapshots yet.\n                  </div>\n                </paper-card>\n              '
        ]);
        return (
          (We = function() {
            return e;
          }),
          e
        );
      }
      function Je() {
        var e = Ze([
          '\n                    <p class="error">',
          "</p>\n                  "
        ]);
        return (
          (Je = function() {
            return e;
          }),
          e
        );
      }
      function Ye() {
        var e = Ze([
          '\n                    <paper-input\n                      label="Password"\n                      type="password"\n                      name="snapshotPassword"\n                      .value=',
          "\n                      @value-changed=",
          "\n                    ></paper-input>\n                  "
        ]);
        return (
          (Ye = function() {
            return e;
          }),
          e
        );
      }
      function $e() {
        var e = Ze([
          "\n                        <paper-checkbox\n                          .idx=",
          '\n                          .checked="{{item.checked}}"\n                          @checked-changed=',
          "\n                        >\n                          ",
          "\n                        </paper-checkbox>\n                      "
        ]);
        return (
          ($e = function() {
            return e;
          }),
          e
        );
      }
      function Ke() {
        var e = Ze([
          "\n                        <paper-checkbox\n                          .idx=",
          "\n                          .checked=",
          "\n                          @checked-changed=",
          "\n                        >\n                          ",
          "\n                        </paper-checkbox>\n                      "
        ]);
        return (
          (Ke = function() {
            return e;
          }),
          e
        );
      }
      function Qe() {
        var e = Ze([
          "\n                    Folders:\n                    ",
          "\n                    Add-ons:\n                    ",
          "\n                  "
        ]);
        return (
          (Qe = function() {
            return e;
          }),
          e
        );
      }
      function Xe() {
        var e = Ze([
          '\n      <div class="content">\n        <div class="card-group">\n          <div class="title">\n            Create snapshot\n            <div class="description">\n              Snapshots allow you to easily backup and restore all data of your\n              Hass.io instance.\n            </div>\n          </div>\n          <paper-card>\n            <div class="card-content">\n              <paper-input\n                autofocus\n                label="Name"\n                name="snapshotName"\n                .value=',
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
          '\n              >\n                Create\n              </mwc-button>\n            </div>\n          </paper-card>\n        </div>\n\n        <div class="card-group">\n          <div class="title">Available snapshots</div>\n          ',
          "\n        </div>\n      </div>\n    "
        ]);
        return (
          (Xe = function() {
            return e;
          }),
          e
        );
      }
      function Ze(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function et(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function tt(e, t) {
        return (tt =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function rt(e) {
        var t,
          r = st(e.key);
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
      function nt(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function it(e) {
        return e.decorators && e.decorators.length;
      }
      function ot(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function at(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function st(e) {
        var t = (function(e, t) {
          if ("object" !== Ge(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Ge(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Ge(t) ? t : String(t);
      }
      function ct(e, t, r) {
        return (ct =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = lt(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function lt(e) {
        return (lt = Object.setPrototypeOf
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
                  if (!it(e)) return r.push(e);
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
              var r = st(e.key),
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
                r = at(e, "finisher"),
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
              var r = at(e, "finisher"),
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
                  if (ot(o.descriptor) || ot(i.descriptor)) {
                    if (it(o) || it(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (it(o)) {
                      if (it(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    nt(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(rt)),
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
                  !(o = (t = lt(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== Ge(o) && "function" != typeof o)
                    ? et(i)
                    : o),
                e(et(r)),
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
                  t && tt(e, t);
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
                    {
                      slug: "addons/local",
                      name: "Local add-ons",
                      checked: !0
                    }
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
                              regeneratorRuntime.awrap(Object(Me.e)(this.hass))
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
                    Xe(),
                    this._snapshotName,
                    this._handleTextValueChanged,
                    this._snapshotType,
                    this._handleRadioValueChanged,
                    "full" === this._snapshotType
                      ? void 0
                      : Object(n.e)(
                          Qe(),
                          this._folderList.map(function(t, r) {
                            return Object(n.e)(
                              Ke(),
                              r,
                              t.checked,
                              e._folderChecked,
                              t.name
                            );
                          }),
                          this._addonList.map(function(t, r) {
                            return Object(n.e)(
                              $e(),
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
                          Ye(),
                          this._snapshotPassword,
                          this._handleTextValueChanged
                        )
                      : void 0,
                    "" !== this._error
                      ? Object(n.e)(Je(), this._error)
                      : void 0,
                    this._creatingSnapshot,
                    this._createSnapshot,
                    void 0 === this._snapshots
                      ? void 0
                      : 0 === this._snapshots.length
                      ? Object(n.e)(We())
                      : this._snapshots.map(function(t) {
                          return Object(n.e)(
                            qe(),
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
                  ct(lt(o.prototype), "firstUpdated", this).call(this, e),
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
                              regeneratorRuntime.awrap(Object(Me.d)(this.hass))
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
                                Object(Me.a)(this.hass, t)
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
                                Object(Me.b)(this.hass, i)
                              )
                            );
                          case 22:
                            this._updateSnapshots(),
                              Object(s.a)(this, "hass-api-called", {
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
                    Object(s.a)(t, "show-dialog", {
                      dialogTag: "dialog-hassio-snapshot",
                      dialogImport: function() {
                        return r.e(2).then(r.bind(null, 132));
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
                  return [i.a, $.a, Object(n.c)(Ve())];
                }
              }
            ]
          };
        },
        n.a
      );
      var ut = r(118);
      function dt(e) {
        return (dt =
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
      function ft() {
        var e = yt([
          "\n        paper-card {\n          cursor: pointer;\n        }\n        .not_available {\n          opacity: 0.6;\n        }\n        a.repo {\n          color: var(--primary-text-color);\n        }\n      "
        ]);
        return (
          (ft = function() {
            return e;
          }),
          e
        );
      }
      function pt() {
        var e = yt([
          "\n            <paper-card\n              .addon=",
          "\n              class=",
          "\n              @click=",
          '\n            >\n              <div class="card-content">\n                <hassio-card-content\n                  .hass=',
          "\n                  .title=",
          "\n                  .description=",
          "\n                  .available=",
          "\n                  .icon=",
          "\n                  .iconTitle=",
          "\n                  .iconClass=",
          "\n                ></hassio-card-content>\n              </div>\n            </paper-card>\n          "
        ]);
        return (
          (pt = function() {
            return e;
          }),
          e
        );
      }
      function ht() {
        var e = yt([
          '\n      <div class="card-group">\n        <div class="title">\n          ',
          '\n          <div class="description">\n            Maintained by ',
          '<br />\n            <a class="repo" href=',
          ' target="_blank">',
          "</a>\n          </div>\n        </div>\n\n        ",
          "\n      </div>\n    "
        ]);
        return (
          (ht = function() {
            return e;
          }),
          e
        );
      }
      function mt() {
        var e = yt([
          '\n        <div class="card-group">\n          <div class="title">\n            <div class="description">\n              No results found in "',
          '"\n            </div>\n          </div>\n        </div>\n      '
        ]);
        return (
          (mt = function() {
            return e;
          }),
          e
        );
      }
      function yt(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function vt(e) {
        return (vt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function bt(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function gt(e, t) {
        return (gt =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function wt(e) {
        var t,
          r = Pt(e.key);
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
      function kt(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Et(e) {
        return e.decorators && e.decorators.length;
      }
      function Ot(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function jt(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Pt(e) {
        var t = (function(e, t) {
          if ("object" !== dt(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== dt(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === dt(t) ? t : String(t);
      }
      var xt = (function(e, t, r, n) {
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
                  if (!Et(e)) return r.push(e);
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
              var r = Pt(e.key),
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
                r = jt(e, "finisher"),
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
              var r = jt(e, "finisher"),
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
                  if (Ot(o.descriptor) || Ot(i.descriptor)) {
                    if (Et(o) || Et(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Et(o)) {
                      if (Et(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    kt(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(wt)),
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
                    !(o = (t = vt(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== dt(o) && "function" != typeof o)
                      ? bt(i)
                      : o),
                  e(bt(r)),
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
                    t && gt(e, t);
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
                  return Object(E.a)(function(e, t) {
                    return t
                      ? (function(e, t) {
                          return new ut(e, {
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
                    r = this._getAddons(this.addons, this.filter);
                  return this.filter && r.length < 1
                    ? Object(n.e)(mt(), t.name)
                    : Object(n.e)(
                        ht(),
                        t.name,
                        t.maintainer,
                        t.url,
                        t.url,
                        r.map(function(t) {
                          return Object(n.e)(
                            pt(),
                            t,
                            t.available ? "" : "not_available",
                            e.addonTapped,
                            e.hass,
                            t.name,
                            t.description,
                            t.available,
                            e.computeIcon(t),
                            e.computeIconTitle(t),
                            e.computeIconClass(t)
                          );
                        })
                      );
                }
              },
              {
                kind: "method",
                key: "computeIcon",
                value: function(e) {
                  return e.installed && e.installed !== e.version
                    ? "hassio:arrow-up-bold-circle"
                    : "hassio:puzzle";
                }
              },
              {
                kind: "method",
                key: "computeIconTitle",
                value: function(e) {
                  return e.installed
                    ? e.installed !== e.version
                      ? "New version available"
                      : "Add-on is installed"
                    : e.available
                    ? "Add-on is not installed"
                    : "Add-on is not available on your system";
                }
              },
              {
                kind: "method",
                key: "computeIconClass",
                value: function(e) {
                  return e.installed
                    ? e.installed !== e.version
                      ? "update"
                      : "installed"
                    : e.available
                    ? ""
                    : "not_available";
                }
              },
              {
                kind: "method",
                key: "addonTapped",
                value: function(e) {
                  Object(k.a)(
                    this,
                    "/hassio/addon/".concat(e.currentTarget.addon.slug)
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [$.a, Object(n.c)(ft())];
                }
              }
            ]
          };
        },
        n.a
      );
      customElements.define("hassio-addon-repository", xt);
      var _t = r(120);
      function St(e) {
        return (St =
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
      function Ct() {
        var e = At([
          "\n        .add {\n          padding: 12px 16px;\n        }\n        iron-icon {\n          color: var(--secondary-text-color);\n          margin-right: 16px;\n          display: inline-block;\n        }\n        paper-input {\n          width: calc(100% - 49px);\n          display: inline-block;\n          margin-top: -4px;\n        }\n      "
        ]);
        return (
          (Ct = function() {
            return e;
          }),
          e
        );
      }
      function Dt() {
        var e = At([
          '\n            <paper-card>\n              <div class="card-content">\n                <hassio-card-content\n                  .hass=',
          "\n                  .title=",
          "\n                  .description=",
          '\n                  icon="hassio:github-circle"\n                ></hassio-card-content>\n              </div>\n              <div class="card-actions">\n                <ha-call-api-button\n                  path="hassio/supervisor/options"\n                  .hass=',
          "\n                  .data=",
          '\n                  class="warning"\n                >\n                  Remove\n                </ha-call-api-button>\n              </div>\n            </paper-card>\n          '
        ]);
        return (
          (Dt = function() {
            return e;
          }),
          e
        );
      }
      function Tt() {
        var e = At([
          '\n      <div class="card-group">\n        <div class="title">\n          Repositories\n          <div class="description">\n            Configure which add-on repositories to fetch data from:\n          </div>\n        </div>\n        ',
          '\n\n        <paper-card>\n          <div class="card-content add">\n            <iron-icon icon="hassio:github-circle"></iron-icon>\n            <paper-input\n              label="Add new repository by URL"\n              .value=',
          "\n              @value-changed=",
          '\n            ></paper-input>\n          </div>\n          <div class="card-actions">\n            <ha-call-api-button\n              path="hassio/supervisor/options"\n              .hass=',
          "\n              .data=",
          "\n            >\n              Add\n            </ha-call-api-button>\n          </div>\n        </paper-card>\n      </div>\n    "
        ]);
        return (
          (Tt = function() {
            return e;
          }),
          e
        );
      }
      function At(e, t) {
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
      function It(e) {
        var t,
          r = Ut(e.key);
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
      function Ft(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Lt(e) {
        return e.decorators && e.decorators.length;
      }
      function Nt(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Ht(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Ut(e) {
        var t = (function(e, t) {
          if ("object" !== St(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== St(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === St(t) ? t : String(t);
      }
      function Bt(e, t, r) {
        return (Bt =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Mt(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function Mt(e) {
        return (Mt = Object.setPrototypeOf
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
                  if (!Lt(e)) return r.push(e);
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
              var r = Ut(e.key),
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
                r = Ht(e, "finisher"),
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
              var r = Ht(e, "finisher"),
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
                  if (Nt(o.descriptor) || Nt(i.descriptor)) {
                    if (Lt(o) || Lt(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Lt(o)) {
                      if (Lt(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Ft(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(It)),
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
                  !(o = (t = Mt(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== St(o) && "function" != typeof o)
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
                  return Object(E.a)(function(e) {
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
                    Tt(),
                    Object(_t.a)(
                      t,
                      function(e) {
                        return e.slug;
                      },
                      function(r) {
                        return Object(n.e)(
                          Dt(),
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
                  Bt(Mt(r.prototype), "updated", this).call(this, e),
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
                  return [$.a, Object(n.c)(Ct())];
                }
              }
            ]
          };
        },
        n.a
      );
      var Gt = r(13);
      r(67);
      function Vt(e) {
        return (Vt =
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
      function qt() {
        var e = Jt([
          "\n      :host {\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n    "
        ]);
        return (
          (qt = function() {
            return e;
          }),
          e
        );
      }
      function Wt() {
        var e = Jt([
          "\n      <paper-spinner-lite active></paper-spinner-lite>\n    "
        ]);
        return (
          (Wt = function() {
            return e;
          }),
          e
        );
      }
      function Jt(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Yt(e) {
        return (Yt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function $t(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Kt(e, t) {
        return (Kt =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Qt(e) {
        var t,
          r = rr(e.key);
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
      function Xt(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Zt(e) {
        return e.decorators && e.decorators.length;
      }
      function er(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function tr(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function rr(e) {
        var t = (function(e, t) {
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
                  if (!Zt(e)) return r.push(e);
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
              var r = rr(e.key),
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
                r = tr(e, "finisher"),
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
              var r = tr(e, "finisher"),
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
                  if (er(o.descriptor) || er(i.descriptor)) {
                    if (Zt(o) || Zt(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Zt(o)) {
                      if (Zt(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Xt(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Qt)),
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
                    !(o = (t = Yt(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== Vt(o) && "function" != typeof o)
                      ? $t(i)
                      : o),
                  e($t(r)),
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
                    t && Kt(e, t);
                })(n, t),
                n
              );
            })(),
            d: [
              {
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(Wt());
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return Object(n.c)(qt());
                }
              }
            ]
          };
        },
        n.a
      );
      function nr(e) {
        return (nr =
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
      function ir() {
        var e = sr([
          "\n      paper-input {\n        flex: 1 1 auto;\n        margin: 0 16px;\n      }\n      .search-container {\n        display: inline-flex;\n        width: 100%;\n        align-items: center;\n      }\n      .prefix {\n        margin: 8px;\n      }\n    "
        ]);
        return (
          (ir = function() {
            return e;
          }),
          e
        );
      }
      function or() {
        var e = sr([
          '\n              <paper-icon-button\n                slot="suffix"\n                class="suffix"\n                @click=',
          '\n                icon="hassio:close"\n                alt="Clear"\n                title="Clear"\n              ></paper-icon-button>\n            '
        ]);
        return (
          (or = function() {
            return e;
          }),
          e
        );
      }
      function ar() {
        var e = sr([
          '\n      <div class="search-container">\n        <paper-input\n          label="Search"\n          .value=',
          "\n          @value-changed=",
          '\n        >\n          <iron-icon\n            icon="hassio:magnify"\n            slot="prefix"\n            class="prefix"\n          ></iron-icon>\n          ',
          "\n        </paper-input>\n      </div>\n    "
        ]);
        return (
          (ar = function() {
            return e;
          }),
          e
        );
      }
      function sr(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function cr(e) {
        return (cr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function lr(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ur(e, t) {
        return (ur =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function dr(e) {
        var t,
          r = yr(e.key);
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
      function fr(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function pr(e) {
        return e.decorators && e.decorators.length;
      }
      function hr(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function mr(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function yr(e) {
        var t = (function(e, t) {
          if ("object" !== nr(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== nr(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === nr(t) ? t : String(t);
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
                  if (!pr(e)) return r.push(e);
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
              var r = yr(e.key),
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
                r = mr(e, "finisher"),
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
              var r = mr(e, "finisher"),
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
                  if (hr(o.descriptor) || hr(i.descriptor)) {
                    if (pr(o) || pr(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (pr(o)) {
                      if (pr(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    fr(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(dr)),
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
                    !(o = (t = cr(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== nr(o) && "function" != typeof o)
                      ? lr(i)
                      : o),
                  e(lr(r)),
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
                    t && ur(e, t);
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
                  return Object(Gt.g)(
                    ar(),
                    this.filter,
                    this._filterInputChanged,
                    this.filter && Object(Gt.g)(or(), this._clearSearch)
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
                            Object(s.a)(this, "value-changed", {
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
                  return Object(n.c)(ir());
                }
              }
            ]
          };
        },
        n.a
      );
      function vr(e) {
        return (vr =
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
      function br() {
        var e = Er([
          "\n      hassio-addon-repository {\n        margin-top: 24px;\n      }\n    "
        ]);
        return (
          (br = function() {
            return e;
          }),
          e
        );
      }
      function gr() {
        var e = Er([
          "\n        <hassio-addon-repository\n          .hass=",
          "\n          .repo=",
          "\n          .addons=",
          "\n          .filter=",
          "\n        ></hassio-addon-repository>\n      "
        ]);
        return (
          (gr = function() {
            return e;
          }),
          e
        );
      }
      function wr() {
        var e = Er([
          "\n      <hassio-repositories-editor\n        .hass=",
          "\n        .repos=",
          "\n      ></hassio-repositories-editor>\n\n      <hassio-search-input\n        .filter=",
          "\n        @value-changed=",
          "\n      ></hassio-search-input>\n\n      ",
          "\n    "
        ]);
        return (
          (wr = function() {
            return e;
          }),
          e
        );
      }
      function kr() {
        var e = Er(["\n        <loading-screen></loading-screen>\n      "]);
        return (
          (kr = function() {
            return e;
          }),
          e
        );
      }
      function Er(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Or(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function jr(e, t) {
        return (jr =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Pr(e) {
        var t,
          r = Dr(e.key);
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
      function xr(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function _r(e) {
        return e.decorators && e.decorators.length;
      }
      function Sr(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Cr(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Dr(e) {
        var t = (function(e, t) {
          if ("object" !== vr(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== vr(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === vr(t) ? t : String(t);
      }
      function Tr(e, t, r) {
        return (Tr =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
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
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var zr = function(e, t) {
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
        Rr = (function(e, t, r, n) {
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
                    if (!_r(e)) return r.push(e);
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
                var r = Dr(e.key),
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
                    if (Sr(o.descriptor) || Sr(i.descriptor)) {
                      if (_r(o) || _r(i))
                        throw new ReferenceError(
                          "Duplicated methods (" +
                            o.key +
                            ") can't be decorated."
                        );
                      i.descriptor = o.descriptor;
                    } else {
                      if (_r(o)) {
                        if (_r(i))
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
                    !(o = (t = Ar(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== vr(o) && "function" != typeof o)
                      ? Or(i)
                      : o),
                  e(Or(r)),
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
                    t && jr(e, t);
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
                                regeneratorRuntime.awrap(Object(H.f)(this.hass))
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
                      return Object(Gt.g)(kr());
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
                            t.push(Object(Gt.g)(gr(), e.hass, r, n, e._filter));
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
                    return Object(Gt.g)(
                      wr(),
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
                    Tr(Ar(r.prototype), "firstUpdated", this).call(this, e),
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
                                regeneratorRuntime.awrap(Object(H.d)(this.hass))
                              );
                            case 3:
                              (e = t.sent),
                                (this._repos = e.repositories),
                                this._repos.sort(zr),
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
                    return Object(n.c)(br());
                  }
                }
              ]
            };
          },
          n.a
        );
      customElements.define("hassio-addon-store", Rr);
      r(108);
      var Ir = r(102),
        Fr = r(103);
      function Lr(e) {
        return (Lr =
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
      function Nr() {
        var e = Jr([
          "\n        paper-card {\n          display: inline-block;\n          width: 400px;\n          margin-left: 8px;\n        }\n        .card-content {\n          height: 200px;\n          color: var(--primary-text-color);\n        }\n        @media screen and (max-width: 830px) {\n          paper-card {\n            margin-top: 8px;\n            margin-left: 0;\n            width: 100%;\n          }\n          .card-content {\n            height: auto;\n          }\n        }\n        .info {\n          width: 100%;\n        }\n        .info td:nth-child(2) {\n          text-align: right;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-top: 16px;\n        }\n        mwc-button.info {\n          max-width: calc(50% - 12px);\n        }\n        table.info {\n          margin-bottom: 10px;\n        }\n        .warning {\n          --mdc-theme-primary: var(--google-red-500);\n        }\n      "
        ]);
        return (
          (Nr = function() {
            return e;
          }),
          e
        );
      }
      function Hr() {
        var e = Jr([
          "\n                <ha-call-api-button\n                  .hass=",
          '\n                  path="hassio/hassos/update"\n                  >Update</ha-call-api-button\n                >\n              '
        ]);
        return (
          (Hr = function() {
            return e;
          }),
          e
        );
      }
      function Ur() {
        var e = Jr([
          '\n                <ha-call-api-button\n                  class="warning"\n                  .hass=',
          '\n                  path="hassio/hassos/config/sync"\n                  title="Load HassOS configs or updates from USB"\n                  >Import from USB</ha-call-api-button\n                >\n              '
        ]);
        return (
          (Ur = function() {
            return e;
          }),
          e
        );
      }
      function Br() {
        var e = Jr([
          '\n                <ha-call-api-button\n                  class="warning"\n                  .hass=',
          '\n                  path="hassio/host/shutdown"\n                  >Shutdown</ha-call-api-button\n                >\n              '
        ]);
        return (
          (Br = function() {
            return e;
          }),
          e
        );
      }
      function Mr() {
        var e = Jr([
          '\n                <ha-call-api-button\n                  class="warning"\n                  .hass=',
          '\n                  path="hassio/host/reboot"\n                  >Reboot</ha-call-api-button\n                >\n              '
        ]);
        return (
          (Mr = function() {
            return e;
          }),
          e
        );
      }
      function Gr() {
        var e = Jr([
          '\n                <div class="errors">Error: ',
          "</div>\n              "
        ]);
        return (
          (Gr = function() {
            return e;
          }),
          e
        );
      }
      function Vr() {
        var e = Jr([
          "\n                <mwc-button\n                  raised\n                  @click=",
          '\n                  class="info"\n                >\n                  Change hostname\n                </mwc-button>\n              '
        ]);
        return (
          (Vr = function() {
            return e;
          }),
          e
        );
      }
      function qr() {
        var e = Jr([
          "\n                    <tr>\n                      <td>Deployment</td>\n                      <td>",
          "</td>\n                    </tr>\n                  "
        ]);
        return (
          (qr = function() {
            return e;
          }),
          e
        );
      }
      function Wr() {
        var e = Jr([
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
          (Wr = function() {
            return e;
          }),
          e
        );
      }
      function Jr(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Yr(e) {
        return (Yr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function $r(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Kr(e, t) {
        return (Kr =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Qr(e) {
        var t,
          r = rn(e.key);
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
      function Xr(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Zr(e) {
        return e.decorators && e.decorators.length;
      }
      function en(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function tn(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function rn(e) {
        var t = (function(e, t) {
          if ("object" !== Lr(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Lr(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Lr(t) ? t : String(t);
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
                  if (!Zr(e)) return r.push(e);
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
              var r = rn(e.key),
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
                r = tn(e, "finisher"),
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
              var r = tn(e, "finisher"),
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
                  if (en(o.descriptor) || en(i.descriptor)) {
                    if (Zr(o) || Zr(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Zr(o)) {
                      if (Zr(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Xr(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Qr)),
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
                    !(o = (t = Yr(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== Lr(o) && "function" != typeof o)
                      ? $r(i)
                      : o),
                  e($r(r)),
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
                    t && Kr(e, t);
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
                    Wr(),
                    this.hostInfo.hostname,
                    this.hostInfo.operating_system,
                    this.hostInfo.deployment
                      ? Object(n.e)(qr(), this.hostInfo.deployment)
                      : "",
                    this._showHardware,
                    this.hostInfo.features.includes("hostname")
                      ? Object(n.e)(Vr(), this._changeHostnameClicked)
                      : "",
                    this._errors ? Object(n.e)(Gr(), this._errors) : "",
                    this.hostInfo.features.includes("reboot")
                      ? Object(n.e)(Mr(), this.hass)
                      : "",
                    this.hostInfo.features.includes("shutdown")
                      ? Object(n.e)(Br(), this.hass)
                      : "",
                    this.hostInfo.features.includes("hassos")
                      ? Object(n.e)(Ur(), this.hass)
                      : "",
                    this.hostInfo.version !== this.hostInfo.version_latest
                      ? Object(n.e)(Hr(), this.hass)
                      : ""
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.a, $.a, Object(n.c)(Nr())];
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
                      "object" === Lr(t.body)
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
                              regeneratorRuntime.awrap(Object(Ir.b)(this.hass))
                            );
                          case 4:
                            (t.t1 = t.sent),
                              (e = t.t0._objectToMarkdown.call(t.t0, t.t1)),
                              Object(Fr.a)(this, {
                                title: "Hardware",
                                content: e
                              }),
                              (t.next = 12);
                            break;
                          case 9:
                            (t.prev = 9),
                              (t.t2 = t.catch(0)),
                              Object(Fr.a)(this, {
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
                      "object" !== Lr(e[i])
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
      function nn(e) {
        return (nn =
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
      function on() {
        var e = fn([
          "\n        paper-card {\n          display: inline-block;\n          width: 400px;\n        }\n        .card-content {\n          height: 200px;\n          color: var(--primary-text-color);\n        }\n        @media screen and (max-width: 830px) {\n          paper-card {\n            width: 100%;\n          }\n          .card-content {\n            height: auto;\n          }\n        }\n        .info {\n          width: 100%;\n        }\n        .info td:nth-child(2) {\n          text-align: right;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-top: 16px;\n        }\n      "
        ]);
        return (
          (on = function() {
            return e;
          }),
          e
        );
      }
      function an() {
        var e = fn([
          "\n                <mwc-button\n                  @click=",
          '\n                  class="warning"\n                  title="Get beta updates for Home Assistant (RCs), supervisor and host"\n                  >Join beta channel</mwc-button\n                >\n              '
        ]);
        return (
          (an = function() {
            return e;
          }),
          e
        );
      }
      function sn() {
        var e = fn([
          "\n                <ha-call-api-button\n                  .hass=",
          '\n                  path="hassio/supervisor/options"\n                  .data=',
          "\n                  >Leave beta channel</ha-call-api-button\n                >\n              "
        ]);
        return (
          (sn = function() {
            return e;
          }),
          e
        );
      }
      function cn() {
        var e = fn([
          "\n                <ha-call-api-button\n                  .hass=",
          '\n                  path="hassio/supervisor/update"\n                  >Update</ha-call-api-button\n                >\n              '
        ]);
        return (
          (cn = function() {
            return e;
          }),
          e
        );
      }
      function ln() {
        var e = fn([
          '\n                <div class="errors">Error: ',
          "</div>\n              "
        ]);
        return (
          (ln = function() {
            return e;
          }),
          e
        );
      }
      function un() {
        var e = fn([
          "\n                    <tr>\n                      <td>Channel</td>\n                      <td>",
          "</td>\n                    </tr>\n                  "
        ]);
        return (
          (un = function() {
            return e;
          }),
          e
        );
      }
      function dn() {
        var e = fn([
          '\n      <paper-card>\n        <div class="card-content">\n          <h2>Hass.io supervisor</h2>\n          <table class="info">\n            <tbody>\n              <tr>\n                <td>Version</td>\n                <td>',
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
          (dn = function() {
            return e;
          }),
          e
        );
      }
      function fn(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function pn(e) {
        return (pn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function hn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function mn(e, t) {
        return (mn =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function yn(e) {
        var t,
          r = kn(e.key);
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
      function vn(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function bn(e) {
        return e.decorators && e.decorators.length;
      }
      function gn(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function wn(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function kn(e) {
        var t = (function(e, t) {
          if ("object" !== nn(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== nn(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === nn(t) ? t : String(t);
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
                  if (!bn(e)) return r.push(e);
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
              var r = kn(e.key),
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
                r = wn(e, "finisher"),
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
              var r = wn(e, "finisher"),
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
                  if (gn(o.descriptor) || gn(i.descriptor)) {
                    if (bn(o) || bn(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (bn(o)) {
                      if (bn(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    vn(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(yn)),
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
                    !(o = (t = pn(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== nn(o) && "function" != typeof o)
                      ? hn(i)
                      : o),
                  e(hn(r)),
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
                    t && mn(e, t);
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
                    dn(),
                    this.supervisorInfo.version,
                    this.supervisorInfo.last_version,
                    "stable" !== this.supervisorInfo.channel
                      ? Object(n.e)(un(), this.supervisorInfo.channel)
                      : "",
                    this._errors ? Object(n.e)(ln(), this._errors) : "",
                    this.hass,
                    this.supervisorInfo.version !==
                      this.supervisorInfo.last_version
                      ? Object(n.e)(cn(), this.hass)
                      : "",
                    "beta" === this.supervisorInfo.channel
                      ? Object(n.e)(sn(), this.hass, { channel: "stable" })
                      : "",
                    "stable" === this.supervisorInfo.channel
                      ? Object(n.e)(an(), this._joinBeta)
                      : ""
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.a, $.a, Object(n.c)(on())];
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
                      "object" === nn(t.body)
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
                                Object(I.e)(this.hass, e)
                              )
                            );
                          case 6:
                            (t = {
                              success: !0,
                              response: void 0,
                              path: "option"
                            }),
                              Object(s.a)(this, "hass-api-called", t),
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
      var En = r(104);
      function On(e) {
        return (On =
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
      function jn() {
        var e = _n([
          "\n        pre {\n          white-space: pre-wrap;\n        }\n        .errors {\n          color: var(--google-red-500);\n          margin-bottom: 16px;\n        }\n      "
        ]);
        return (
          (jn = function() {
            return e;
          }),
          e
        );
      }
      function Pn() {
        var e = _n([
          '\n              <div class="errors">',
          "</div>\n            "
        ]);
        return (
          (Pn = function() {
            return e;
          }),
          e
        );
      }
      function xn() {
        var e = _n([
          "\n      <paper-card>\n        ",
          '\n        <div class="card-content" id="content"></div>\n        <div class="card-actions">\n          <mwc-button @click=',
          ">Refresh</mwc-button>\n        </div>\n      </paper-card>\n    "
        ]);
        return (
          (xn = function() {
            return e;
          }),
          e
        );
      }
      function _n(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Sn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Cn(e, t) {
        return (Cn =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Dn(e) {
        var t,
          r = In(e.key);
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
      function Tn(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function An(e) {
        return e.decorators && e.decorators.length;
      }
      function zn(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Rn(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function In(e) {
        var t = (function(e, t) {
          if ("object" !== On(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== On(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === On(t) ? t : String(t);
      }
      function Fn(e, t, r) {
        return (Fn =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Ln(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function Ln(e) {
        return (Ln = Object.setPrototypeOf
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
                  if (!An(e)) return r.push(e);
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
              var r = In(e.key),
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
                r = Rn(e, "finisher"),
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
              var r = Rn(e, "finisher"),
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
                  if (zn(o.descriptor) || zn(i.descriptor)) {
                    if (An(o) || An(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (An(o)) {
                      if (An(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Tn(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(Dn)),
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
                  !(o = (t = Ln(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== On(o) && "function" != typeof o)
                    ? Sn(i)
                    : o),
                e(Sn(r)),
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
                  t && Cn(e, t);
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
                              Fn(
                                Ln(r.prototype),
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
                    xn(),
                    this._error ? Object(n.e)(Pn(), this._error) : "",
                    this._refresh
                  );
                }
              },
              {
                kind: "get",
                static: !0,
                key: "styles",
                value: function() {
                  return [i.a, $.a, En.a, Object(n.c)(jn())];
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
                              regeneratorRuntime.awrap(Object(I.d)(this.hass))
                            );
                          case 4:
                            for (e = r.sent; this._logContent.lastChild; )
                              this._logContent.removeChild(
                                this._logContent.lastChild
                              );
                            this._logContent.appendChild(Object(En.b)(e)),
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
      function Nn(e) {
        return (Nn =
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
      function Hn() {
        var e = Bn([
          "\n        .content {\n          margin: 4px;\n          color: var(--primary-text-color);\n        }\n        .title {\n          margin-top: 24px;\n          color: var(--primary-text-color);\n          font-size: 2em;\n          padding-left: 8px;\n          margin-bottom: 8px;\n        }\n      "
        ]);
        return (
          (Hn = function() {
            return e;
          }),
          e
        );
      }
      function Un() {
        var e = Bn([
          '\n      <div class="content">\n        <div class="title">Information</div>\n        <hassio-supervisor-info\n          .hass=',
          "\n          .supervisorInfo=",
          "\n        ></hassio-supervisor-info>\n        <hassio-host-info\n          .hass=",
          "\n          .hostInfo=",
          "\n          .hassOsInfo=",
          '\n        ></hassio-host-info>\n        <div class="title">System log</div>\n        <hassio-supervisor-log .hass=',
          "></hassio-supervisor-log>\n      </div>\n    "
        ]);
        return (
          (Un = function() {
            return e;
          }),
          e
        );
      }
      function Bn(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function Mn(e) {
        return (Mn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Gn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Vn(e, t) {
        return (Vn =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function qn(e) {
        var t,
          r = Kn(e.key);
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
      function Wn(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Jn(e) {
        return e.decorators && e.decorators.length;
      }
      function Yn(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function $n(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Kn(e) {
        var t = (function(e, t) {
          if ("object" !== Nn(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Nn(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Nn(t) ? t : String(t);
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
                  if (!Jn(e)) return r.push(e);
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
              var r = Kn(e.key),
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
                r = $n(e, "finisher"),
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
              var r = $n(e, "finisher"),
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
                  if (Yn(o.descriptor) || Yn(i.descriptor)) {
                    if (Jn(o) || Jn(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Jn(o)) {
                      if (Jn(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    Wn(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(qn)),
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
                    !(o = (t = Mn(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== Nn(o) && "function" != typeof o)
                      ? Gn(i)
                      : o),
                  e(Gn(r)),
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
                    t && Vn(e, t);
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
                    Un(),
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
                  return [i.a, $.a, Object(n.c)(Hn())];
                }
              }
            ]
          };
        },
        n.a
      );
      function Qn(e) {
        return (Qn =
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
      function Xn(e) {
        return (Xn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Zn(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ei(e, t) {
        return (ei =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ti(e) {
        var t,
          r = ai(e.key);
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
      function ri(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function ni(e) {
        return e.decorators && e.decorators.length;
      }
      function ii(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function oi(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function ai(e) {
        var t = (function(e, t) {
          if ("object" !== Qn(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== Qn(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Qn(t) ? t : String(t);
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
                  if (!ni(e)) return r.push(e);
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
              var r = ai(e.key),
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
                r = oi(e, "finisher"),
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
              var r = oi(e, "finisher"),
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
                  if (ii(o.descriptor) || ii(i.descriptor)) {
                    if (ni(o) || ni(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (ni(o)) {
                      if (ni(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    ri(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(ti)),
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
                    !(o = (t = Xn(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== Qn(o) && "function" != typeof o)
                      ? Zn(i)
                      : o),
                  e(Zn(r)),
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
                    t && ei(e, t);
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
        R
      );
      function si(e) {
        return (si =
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
      function ci() {
        var e = di([
          "\n        :host {\n          color: var(--primary-text-color);\n          --paper-card-header-color: var(--primary-text-color);\n        }\n        paper-tabs {\n          margin-left: 12px;\n          --paper-tabs-selection-bar-color: #fff;\n          text-transform: uppercase;\n        }\n        app-header,\n        app-toolbar {\n          background-color: var(--primary-color);\n        }\n      "
        ]);
        return (
          (ci = function() {
            return e;
          }),
          e
        );
      }
      function li() {
        var e = di([
          '\n                  <paper-icon-button\n                    icon="hassio:refresh"\n                    @click=',
          "\n                  ></paper-icon-button>\n                "
        ]);
        return (
          (li = function() {
            return e;
          }),
          e
        );
      }
      function ui() {
        var e = di([
          '\n      <app-header-layout has-scrolling-region>\n        <app-header fixed slot="header">\n          <app-toolbar>\n            <ha-menu-button\n              .hass=',
          "\n              .narrow=",
          "\n              hassio\n            ></ha-menu-button>\n            <div main-title>Hass.io</div>\n            ",
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
          (ui = function() {
            return e;
          }),
          e
        );
      }
      function di(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function fi(e) {
        return (fi = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function pi(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function hi(e, t) {
        return (hi =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function mi(e) {
        var t,
          r = wi(e.key);
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
        var t = (function(e, t) {
          if ("object" !== si(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== si(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === si(t) ? t : String(t);
      }
      var ki = ["store", "snapshots"];
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
                r = gi(e, "finisher"),
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
              var r = gi(e, "finisher"),
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
        [Object(n.d)("hassio-pages-with-tabs")],
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
                    !(o = (t = fi(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== si(o) && "function" != typeof o)
                      ? pi(i)
                      : o),
                  e(pi(r)),
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
                    t && hi(e, t);
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
                    ui(),
                    this.hass,
                    this.narrow,
                    ki.includes(e)
                      ? Object(n.e)(li(), this.refreshClicked)
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
                  c !== this._page && Object(k.a)(this, "/hassio/".concat(c)),
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
                  return [i.a, Object(n.c)(ci())];
                }
              }
            ]
          };
        },
        n.a
      );
      function Ei(e) {
        return (Ei =
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
      function Oi(e, t) {
        return (
          zi(e) ||
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
          Ai()
        );
      }
      function ji(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Pi(e, t) {
        return (Pi =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function xi(e) {
        var t,
          r = Ti(e.key);
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
      function _i(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function Si(e) {
        return e.decorators && e.decorators.length;
      }
      function Ci(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function Di(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function Ti(e) {
        var t = (function(e, t) {
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
      function Ai() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      }
      function zi(e) {
        if (Array.isArray(e)) return e;
      }
      function Ri(e, t, r) {
        return (Ri =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = Ii(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function Ii(e) {
        return (Ii = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      customElements.get("paper-icon-button").prototype._keyBindings = {};
      var Fi;
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
                  if (!Si(e)) return r.push(e);
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
                zi(t) ||
                  (function(e) {
                    if (
                      Symbol.iterator in Object(e) ||
                      "[object Arguments]" === Object.prototype.toString.call(e)
                    )
                      return Array.from(e);
                  })(t) ||
                  Ai()).map(function(e) {
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
              var r = Ti(e.key),
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
                r = Di(e, "finisher"),
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
              var r = Di(e, "finisher"),
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
                  if (Ci(o.descriptor) || Ci(i.descriptor)) {
                    if (Si(o) || Si(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (Si(o)) {
                      if (Si(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    _i(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(xi)),
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
                  !(o = (t = Ii(n)).call.apply(t, [this].concat(s))) ||
                  ("object" !== Ei(o) && "function" != typeof o)
                    ? ji(i)
                    : o),
                e(ji(r)),
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
                  t && Pi(e, t);
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
                          return Promise.all([r.e(9), r.e(4)]).then(
                            r.bind(null, 131)
                          );
                        }
                      },
                      ingress: {
                        tag: "hassio-ingress-view",
                        load: function() {
                          return r.e(6).then(r.bind(null, 130));
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
                  Ri(Ii(i.prototype), "firstUpdated", this).call(this, e),
                    a(this, this.hass.themes, this.hass.selectedTheme, !0),
                    this.addEventListener("hass-api-called", function(e) {
                      return n._apiCalled(e);
                    }),
                    this.addEventListener("hass-toggle-menu", function() {
                      Object(s.a)(
                        window.parent.customPanel,
                        n.hass.dockedSidebar
                          ? "hass-close-menu"
                          : "hass-open-menu"
                      );
                    }),
                    window.addEventListener("location-changed", function(e) {
                      return Object(s.a)(n, e.type, e.detail, { bubbles: !1 });
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
                                B(t, r, o, i, a);
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
                                  Object(I.c)(this.hass),
                                  L(this.hass),
                                  Object(I.b)(this.hass)
                                ])
                              )
                            );
                          case 6:
                            if (
                              ((e = o.sent),
                              (t = Oi(e, 3)),
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
                              regeneratorRuntime.awrap(N(this.hass))
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
                  var t, r, n;
                  return regeneratorRuntime.async(
                    function(i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return (
                              (i.prev = 0),
                              (i.next = 3),
                              regeneratorRuntime.awrap(
                                Promise.all([
                                  Object(H.b)(this.hass, e).catch(function() {
                                    throw new Error(
                                      "Failed to fetch add-on info"
                                    );
                                  }),
                                  Object(I.a)(this.hass).catch(function() {
                                    throw new Error(
                                      "Failed to create an ingress session"
                                    );
                                  })
                                ])
                              )
                            );
                          case 3:
                            if (
                              ((t = i.sent),
                              (r = Oi(t, 1)),
                              (n = r[0]).ingress_url)
                            ) {
                              i.next = 9;
                              break;
                            }
                            return (
                              alert("Add-on does not support Ingress"),
                              i.abrupt("return")
                            );
                          case 9:
                            if ("started" === n.state) {
                              i.next = 13;
                              break;
                            }
                            return (
                              alert(
                                "Add-on is not running. Please start it first"
                              ),
                              Object(k.a)(
                                this,
                                "/hassio/addon/".concat(n.slug),
                                !0
                              ),
                              i.abrupt("return")
                            );
                          case 13:
                            return (
                              location.assign(n.ingress_url),
                              (i.next = 16),
                              regeneratorRuntime.awrap(
                                new Promise(function() {})
                              )
                            );
                          case 16:
                            i.next = 21;
                            break;
                          case 18:
                            (i.prev = 18),
                              (i.t0 = i.catch(0)),
                              alert("Unable to open ingress connection");
                          case 21:
                          case "end":
                            return i.stop();
                        }
                    },
                    null,
                    this,
                    [[0, 18]]
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
        ((Fi = R),
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
                !(i = (e = W(t)).call.apply(e, [this].concat(a))) ||
                ("object" !== M(i) && "function" != typeof i)
                  ? V(n)
                  : i),
              Y(V(r), "hass", void 0),
              Y(V(r), "__provideHass", []),
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
                t && J(e, t);
            })(t, Fi),
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
                  q(W(t.prototype), "updated", this).call(this, e),
                    e.has("hass") &&
                      this.__provideHass.forEach(function(e) {
                        e.hass = r.hass;
                      });
                }
              }
            ]) && G(r.prototype, n),
            i && G(r, i),
            t
          );
        })())
      );
    },
    101: function(e, t, r) {
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
      var n = r(42),
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
    102: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return i;
      }),
        r.d(t, "b", function() {
          return o;
        });
      var n = r(42),
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
    103: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return i;
      });
      var n = r(14),
        i = function(e, t) {
          Object(n.a)(e, "show-dialog", {
            dialogTag: "dialog-hassio-markdown",
            dialogImport: function() {
              return r.e(1).then(r.bind(null, 125));
            },
            dialogParams: t
          });
        };
    },
    104: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return o;
      }),
        r.d(t, "b", function() {
          return a;
        });
      var n = r(4);
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
    12: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return a;
      });
      var n = r(4);
      function i() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          "\n  .card-group {\n    margin-top: 24px;\n  }\n  .card-group .title {\n    color: var(--primary-text-color);\n    font-size: 2em;\n    padding-left: 8px;\n    margin-bottom: 8px;\n  }\n  .card-group .description {\n    font-size: 0.5em;\n    font-weight: 500;\n    margin-top: 4px;\n  }\n  .card-group paper-card {\n    --card-group-columns: 4;\n    width: calc(\n      (100% - 12px * var(--card-group-columns)) / var(--card-group-columns)\n    );\n    margin: 4px;\n    vertical-align: top;\n  }\n  @media screen and (max-width: 1200px) and (min-width: 901px) {\n    .card-group paper-card {\n      --card-group-columns: 3;\n    }\n  }\n  @media screen and (max-width: 900px) and (min-width: 601px) {\n    .card-group paper-card {\n      --card-group-columns: 2;\n    }\n  }\n  @media screen and (max-width: 600px) and (min-width: 0) {\n    .card-group paper-card {\n      width: 100%;\n      margin: 4px 0;\n    }\n    .content {\n      padding: 0;\n    }\n  }\n  ha-call-api-button {\n    font-weight: 500;\n    color: var(--primary-color);\n  }\n  .error {\n    color: var(--google-red-500);\n    margin-top: 16px;\n  }\n"
        ]);
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      var o = document.createElement("template");
      o.setAttribute("style", "display: none;");
      var a = Object(n.c)(i());
      (o.innerHTML = '<dom-module id="hassio-style">\n  <template>\n    <style>\n      '.concat(
        a.toString(),
        "\n    </style>\n  </template>\n</dom-module>"
      )),
        document.head.appendChild(o.content);
    },
    14: function(e, t, r) {
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
    25: function(e, t, r) {
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
      var n = r(42),
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
    33: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return i;
      });
      var n = r(14),
        i = function(e, t) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          r
            ? history.replaceState(null, "", t)
            : history.pushState(null, "", t),
            Object(n.a)(window, "location-changed", { replace: r });
        };
    },
    34: function(e, t, r) {
      "use strict";
      var n = r(4),
        i = (r(20), r(7)),
        o = r(31),
        a = [60, 60, 24, 7],
        s = ["second", "minute", "hour", "day"];
      var c = r(15);
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
                  datetime: {
                    type: String,
                    observer: "datetimeChanged"
                  },
                  datetimeObj: {
                    type: Object,
                    observer: "datetimeObjChanged"
                  },
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
        var e = _([
          "\n      iron-icon {\n        margin-right: 16px;\n        margin-top: 16px;\n        float: left;\n        color: var(--secondary-text-color);\n      }\n      iron-icon.update {\n        color: var(--paper-orange-400);\n      }\n      iron-icon.running,\n      iron-icon.installed {\n        color: var(--paper-green-400);\n      }\n      iron-icon.hassupdate,\n      iron-icon.snapshot {\n        color: var(--paper-item-icon-color);\n      }\n      iron-icon.not_available {\n        color: var(--google-red-500);\n      }\n      .title {\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n      }\n      .addition {\n        color: var(--secondary-text-color);\n        overflow: hidden;\n        position: relative;\n        height: 2.4em;\n        line-height: 1.2em;\n      }\n      ha-relative-time {\n        display: block;\n      }\n    "
        ]);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      function P() {
        var e = _([
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
        var e = _([
          "\n      <iron-icon\n        class=",
          "\n        .icon=",
          "\n        .title=",
          '\n      ></iron-icon>\n      <div>\n        <div class="title">',
          '</div>\n        <div class="addition">\n          ',
          "\n          ",
          "\n          ",
          "\n        </div>\n      </div>\n    "
        ]);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function _(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function S(e) {
        return (S = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function C(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function D(e, t) {
        return (D =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function T(e) {
        var t,
          r = F(e.key);
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
      function A(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function z(e) {
        return e.decorators && e.decorators.length;
      }
      function R(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function I(e, t) {
        var r = e[t];
        if (void 0 !== r && "function" != typeof r)
          throw new TypeError("Expected '" + t + "' to be a function");
        return r;
      }
      function F(e) {
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
                  if (!z(e)) return r.push(e);
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
              var r = F(e.key),
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
                r = I(e, "finisher"),
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
              var r = I(e, "finisher"),
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
                  if (R(o.descriptor) || R(i.descriptor)) {
                    if (z(o) || z(i))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    i.descriptor = o.descriptor;
                  } else {
                    if (z(o)) {
                      if (z(i))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      i.decorators = o.decorators;
                    }
                    A(o, i);
                  }
                else t.push(o);
              }
              return t;
            })(a.d.map(T)),
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
                    !(o = (t = S(n)).call.apply(t, [this].concat(s))) ||
                    ("object" !== O(o) && "function" != typeof o)
                      ? C(i)
                      : o),
                  e(C(r)),
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
                    t && D(e, t);
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
                kind: "method",
                key: "render",
                value: function() {
                  return Object(n.e)(
                    x(),
                    this.iconClass,
                    this.icon,
                    this.iconTitle,
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
    40: function(e, t) {},
    42: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return n;
      });
      var n = function(e) {
        return e.data;
      };
    },
    45: function(e, t, r) {
      "use strict";
      var n = r(4),
        i = (r(16), r(115), r(5)),
        o = r(31);
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
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })([
          '\n      <style>\n        .container {\n          position: relative;\n          display: inline-block;\n        }\n\n        mwc-button {\n          transition: all 1s;\n        }\n\n        .success mwc-button {\n          --mdc-theme-primary: white;\n          background-color: var(--google-green-500);\n          transition: none;\n        }\n\n        .error mwc-button {\n          --mdc-theme-primary: white;\n          background-color: var(--google-red-500);\n          transition: none;\n        }\n\n        .progress {\n          @apply --layout;\n          @apply --layout-center-center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n        }\n      </style>\n      <div class="container" id="container">\n        <mwc-button\n          id="button"\n          disabled="[[computeDisabled(disabled, progress)]]"\n          on-click="buttonTapped"\n        >\n          <slot></slot>\n        </mwc-button>\n        <template is="dom-if" if="[[progress]]">\n          <div class="progress"><paper-spinner active=""></paper-spinner></div>\n        </template>\n      </div>\n    '
        ]);
        return (
          (s = function() {
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
      function l(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function u(e, t, r) {
        return (u =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = (function(e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = d(e));

                  );
                  return e;
                })(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function d(e) {
        return (d = Object.setPrototypeOf
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
      var p = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            l(this, d(t).apply(this, arguments))
          );
        }
        var r, n, a;
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
          (r = t),
          (a = [
            {
              key: "template",
              get: function() {
                return Object(i.a)(s());
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
          (n = [
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
                u(d(t.prototype), "ready", this).call(this),
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
          ]) && c(r.prototype, n),
          a && c(r, a),
          t
        );
      })();
      customElements.define("ha-progress-button", p);
      var h = r(14);
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
      function y() {
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
          (y = function() {
            return e;
          }),
          e
        );
      }
      function v(e, t) {
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
          var e;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((e = v(this, b(t).call(this))).method = "POST"),
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
              t && k(e, t);
          })(t, n["a"]),
          w(t, [
            {
              key: "render",
              value: function() {
                return Object(n.e)(
                  y(),
                  this.progress,
                  this._buttonTapped,
                  this.disabled
                );
              }
            }
          ]),
          w(
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
                            Object(h.a)(this, "hass-api-called", e);
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
      customElements.define("ha-call-api-button", E);
    },
    54: function(e, t, r) {
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
      var n = r(42),
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
    78: function(e, t, r) {
      "use strict";
      r(22);
      var n = r(4),
        i = r(14),
        o = r(114),
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
          "\n      :host {\n        position: relative;\n      }\n      .dot {\n        pointer-events: none;\n        position: absolute;\n        background-color: var(--accent-color);\n        width: 12px;\n        height: 12px;\n        top: 5px;\n        right: 2px;\n        border-radius: 50%;\n        border: 2px solid var(--primary-color);\n      }\n    "
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
              {
                kind: "field",
                key: "_unsubNotifications",
                value: void 0
              },
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
    },
    88: function(e, t) {},
    9: function(e, t, r) {
      "use strict";
      r.d(t, "a", function() {
        return s;
      }),
        r.d(t, "b", function() {
          return c;
        });
      var n = r(4);
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
      var s = Object(n.c)(o()),
        c = Object(n.c)(i());
    },
    91: function(e, t, r) {
      "use strict";
      var n = r(4),
        i = (r(78), r(92), r(53));
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
          '\n      :host {\n        display: block;\n        height: 100%;\n        background-color: var(--primary-background-color);\n      }\n\n      .toolbar {\n        display: flex;\n        align-items: center;\n        font-size: 20px;\n        height: 64px;\n        padding: 0 16px;\n        pointer-events: none;\n        background-color: var(--app-header-background-color);\n        font-weight: 400;\n        color: var(--app-header-text-color, white);\n      }\n\n      ha-menu-button,\n      ha-paper-icon-button-arrow-prev,\n      ::slotted([slot="toolbar-icon"]) {\n        pointer-events: auto;\n      }\n\n      ha-paper-icon-button-arrow-prev.hidden {\n        visibility: hidden;\n      }\n\n      [main-title] {\n        margin: 0 0 0 24px;\n        line-height: 20px;\n        flex-grow: 1;\n      }\n\n      .content {\n        position: relative;\n        width: 100%;\n        height: calc(100% - 64px);\n        overflow-y: auto;\n        overflow: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n    '
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
    92: function(e, t, r) {
      "use strict";
      r(22);
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
    93: function(e, t, r) {
      "use strict";
      r(41), r(67);
      var n = r(4),
        i = (r(78), r(92), r(9));
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
          "\n        .content {\n          height: calc(100% - 64px);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        }\n      "
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
                  return [i.a, Object(n.c)(a())];
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
//# sourceMappingURL=chunk.a4f9950b101883805252.js.map
