/*! For license information please see chunk.9d371c8143226d4eaaee.js.LICENSE */
(self.webpackJsonp = self.webpackJsonp || []).push([
  [ 5 ], {
    178 : function(e, t, n) {
      "use strict";
      n.r(t);
      n(18), n(48), n(22), n(53), n(24), n(40);
      var o = n(5), r = n(115),
          i = ("".concat(location.protocol, "//").concat(location.host), n(10));
      n(55);
      function s(e) {
        return (s = "function" == typeof Symbol &&
                            "symbol" == typeof Symbol.iterator
                        ? function(e) { return typeof e }
                        : function(e) {
                            return e && "function" == typeof Symbol &&
                                           e.constructor === Symbol &&
                                           e !== Symbol.prototype
                                       ? "symbol"
                                       : typeof e
                          })(e)
      }
      function a() {
        var e = y([
          "\n        ha-paper-dialog {\n          min-width: 350px;\n          font-size: 14px;\n          border-radius: 2px;\n        }\n        app-toolbar {\n          margin: 0;\n          padding: 0 16px;\n          color: var(--primary-text-color);\n          background-color: var(--secondary-background-color);\n        }\n        app-toolbar [main-title] {\n          margin-left: 16px;\n        }\n        ha-paper-dialog-scrollable {\n          margin: 0;\n        }\n        paper-checkbox {\n          display: block;\n          margin: 4px;\n        }\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          ha-paper-dialog {\n            max-height: 100%;\n            height: 100%;\n          }\n          app-toolbar {\n            color: var(--text-primary-color);\n            background-color: var(--primary-color);\n          }\n        }\n        .details {\n          color: var(--secondary-text-color);\n        }\n        .warning,\n        .error {\n          color: var(--google-red-500);\n        }\n        .buttons {\n          display: flex;\n          flex-direction: column;\n        }\n        .buttons li {\n          list-style-type: none;\n        }\n        .buttons .icon {\n          margin-right: 16px;\n        }\n        .no-margin-top {\n          margin-top: 0;\n        }\n      "
        ]);
        return a = function() { return e }, e
      }
      function l() {
        var e = y([
          "\n                <li>\n                  <mwc-button @click=",
          '>\n                    <iron-icon icon="hassio:history" class="icon"> </iron-icon>\n                    Wipe &amp; restore\n                  </mwc-button>\n                </li>\n              '
        ]);
        return l = function() { return e }, e
      }
      function c() {
        var e = y([
          '\n              <p class="error">Error: ', "</p>\n            "
        ]);
        return c = function() { return e }, e
      }
      function d() {
        var e = y([
          '\n              <paper-input\n                autofocus=""\n                label="Password"\n                type="password"\n                @value-changed=',
          "\n                .value=",
          "\n              ></paper-input>\n            "
        ]);
        return d = function() { return e }, e
      }
      function p() {
        var e = y([
          "\n                    <paper-checkbox\n                      .checked=",
          '\n                      @change="',
          '"\n                    >\n                      ',
          "\n                    </paper-checkbox>\n                  "
        ]);
        return p = function() { return e }, e
      }
      function u() {
        var e = y([
          '\n              <div>Add-on:</div>\n              <paper-dialog-scrollable class="no-margin-top">\n                ',
          "\n              </paper-dialog-scrollable>\n            "
        ]);
        return u = function() { return e }, e
      }
      function h() {
        var e = y([
          "\n                    <paper-checkbox\n                      .checked=",
          '\n                      @change="',
          '"\n                    >\n                      ',
          "\n                    </paper-checkbox>\n                  "
        ]);
        return h = function() { return e }, e
      }
      function f() {
        var e = y([
          '\n              <div>Folders:</div>\n              <paper-dialog-scrollable class="no-margin-top">\n                ',
          "\n              </paper-dialog-scrollable>\n            "
        ]);
        return f = function() { return e }, e
      }
      function m() {
        var e = y([
          '\n      <ha-paper-dialog\n        id="dialog"\n        with-backdrop=""\n        .on-iron-overlay-closed=',
          '\n      >\n        <app-toolbar>\n          <paper-icon-button\n            icon="hassio:close"\n            dialog-dismiss=""\n          ></paper-icon-button>\n          <div main-title="">',
          '</div>\n        </app-toolbar>\n        <div class="details">\n          ',
          "\n          (", ")<br />\n          ",
          "\n        </div>\n        <div>Home Assistant:</div>\n        <paper-checkbox\n          .checked=",
          '\n          @change="', '"\n        >\n          Home Assistant ',
          "\n        </paper-checkbox>\n        ", "\n        ", "\n        ",
          "\n        ",
          '\n\n        <div>Actions:</div>\n        <ul class="buttons">\n          <li>\n            <mwc-button @click=',
          '>\n              <iron-icon icon="hassio:download" class="icon"></iron-icon>\n              Download Snapshot\n            </mwc-button>\n          </li>\n          <li>\n            <mwc-button @click=',
          '>\n              <iron-icon icon="hassio:history" class="icon"> </iron-icon>\n              Restore Selected\n            </mwc-button>\n          </li>\n          ',
          "\n          <li>\n            <mwc-button @click=",
          '>\n              <iron-icon icon="hassio:delete" class="icon warning"> </iron-icon>\n              <span class="warning">Delete Snapshot</span>\n            </mwc-button>\n          </li>\n        </ul>\n      </ha-paper-dialog>\n    '
        ]);
        return m = function() { return e }, e
      }
      function g() {
        var e = y([ "" ]);
        return g = function() { return e }, e
      }
      function y(e, t) {
        return t || (t = e.slice(0)),
               Object.freeze(Object.defineProperties(
                   e, {raw : {value : Object.freeze(t)}}))
      }
      function b(e) {
        return (
            b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function v(e) {
        if (void 0 === e)
          throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called");
        return e
      }
      function k(e, t) {
        return (k = Object.setPrototypeOf ||
                    function(e, t) { return e.__proto__ = t, e })(e, t)
      }
      function _(e) {
        var t, n = C(e.key);
        "method" === e.kind
            ? t = {
                value : e.value,
                writable : !0,
                configurable : !0,
                enumerable : !1
              }
            : "get" === e.kind
                  ? t = {get : e.value, configurable : !0, enumerable : !1}
                  : "set" === e.kind ? t = {
                      set : e.value,
                      configurable : !0,
                      enumerable : !1
                    }
                                     : "field" === e.kind && (t = {
                                         configurable : !0,
                                         writable : !0,
                                         enumerable : !0
                                       });
        var o = {
          kind : "field" === e.kind ? "field" : "method",
          key : n,
          placement : e.static ? "static"
                               : "field" === e.kind ? "own" : "prototype",
          descriptor : t
        };
        return e.decorators && (o.decorators = e.decorators),
               "field" === e.kind && (o.initializer = e.value), o
      }
      function w(e, t) {
        void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set
      }
      function O(e) { return e.decorators && e.decorators.length }
      function E(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable)
      }
      function x(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n
      }
      function C(e) {
        var t = function(e, t) {
          if ("object" !== s(e) || null === e)
            return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, t || "default");
            if ("object" !== s(o))
              return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" === s(t) ? t : String(t)
      }
      !function(e, t, n, o) {
        var r = function() {
          var e = {
            elementsDefinitionOrder : [ [ "method" ], [ "field" ] ],
            initializeInstanceElements : function(e, t) {
              ["method", "field"].forEach(function(n) {
                t.forEach(function(t) {
                  t.kind === n && "own" === t.placement &&
                      this.defineClassElement(e, t)
                }, this)
              }, this)
            },
            initializeClassElements : function(e, t) {
              var n = e.prototype;
              ["method", "field"].forEach(function(o) {
                t.forEach(function(t) {
                  var r = t.placement;
                  if (t.kind === o && ("static" === r || "prototype" === r)) {
                    var i = "static" === r ? e : n;
                    this.defineClassElement(i, t)
                  }
                }, this)
              }, this)
            },
            defineClassElement : function(e, t) {
              var n = t.descriptor;
              if ("field" === t.kind) {
                var o = t.initializer;
                n = {
                  enumerable : n.enumerable,
                  writable : n.writable,
                  configurable : n.configurable,
                  value : void 0 === o ? void 0 : o.call(e)
                }
              }
              Object.defineProperty(e, t.key, n)
            },
            decorateClass : function(e, t) {
              var n = [], o = [], r = {static : [], prototype : [], own : []};
              if (e.forEach(function(e) { this.addElementPlacement(e, r) },
                            this),
                  e.forEach(function(e) {
                    if (!O(e))
                      return n.push(e);
                    var t = this.decorateElement(e, r);
                    n.push(t.element), n.push.apply(n, t.extras),
                        o.push.apply(o, t.finishers)
                  }, this), !t)
                return {elements : n, finishers : o};
              var i = this.decorateConstructor(n, t);
              return o.push.apply(o, i.finishers), i.finishers = o, i
            },
            addElementPlacement : function(e, t, n) {
              var o = t[e.placement];
              if (!n && -1 !== o.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              o.push(e.key)
            },
            decorateElement : function(e, t) {
              for (var n = [], o = [], r = e.decorators, i = r.length - 1;
                   i >= 0; i--) {
                var s = t[e.placement];
                s.splice(s.indexOf(e.key), 1);
                var a = this.fromElementDescriptor(e),
                    l = this.toElementFinisherExtras((0, r[i])(a) || a);
                e = l.element, this.addElementPlacement(e, t),
                l.finisher && o.push(l.finisher);
                var c = l.extras;
                if (c) {
                  for (var d = 0; d < c.length; d++)
                    this.addElementPlacement(c[d], t);
                  n.push.apply(n, c)
                }
              }
              return { element: e, finishers: o, extras: n }
            },
            decorateConstructor : function(e, t) {
              for (var n = [], o = t.length - 1; o >= 0; o--) {
                var r = this.fromClassDescriptor(e),
                    i = this.toClassDescriptor((0, t[o])(r) || r);
                if (void 0 !== i.finisher && n.push(i.finisher),
                    void 0 !== i.elements) {
                  e = i.elements;
                  for (var s = 0; s < e.length - 1; s++)
                    for (var a = s + 1; a < e.length; a++)
                      if (e[s].key === e[a].key &&
                          e[s].placement === e[a].placement)
                        throw new TypeError("Duplicated element (" + e[s].key +
                                            ")")
                }
              }
              return { elements: e, finishers: n }
            },
            fromElementDescriptor : function(e) {
              var t = {
                kind : e.kind,
                key : e.key,
                placement : e.placement,
                descriptor : e.descriptor
              };
              return Object.defineProperty(
                         t, Symbol.toStringTag,
                         {value : "Descriptor", configurable : !0}),
                     "field" === e.kind && (t.initializer = e.initializer), t
            },
            toElementDescriptors : function(e) {
              var t;
              if (void 0 !== e)
                return (t = e,
                        function(e) {
                          if (Array.isArray(e))
                            return e
                        }(t) ||
                            function(e) {
                              if (Symbol.iterator in Object(e) ||
                                  "[object Arguments]" ===
                                      Object.prototype.toString.call(e))
                                return Array.from(e)
                            }(t) ||
                            function() {
                              throw new TypeError(
                                  "Invalid attempt to destructure non-iterable instance")
                            }())
                    .map(function(e) {
                      var t = this.toElementDescriptor(e);
                      return this.disallowProperty(e, "finisher",
                                                   "An element descriptor"),
                             this.disallowProperty(e, "extras",
                                                   "An element descriptor"),
                             t
                    }, this)
            },
            toElementDescriptor : function(e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                    'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t + '"');
              var n = C(e.key), o = String(e.placement);
              if ("static" !== o && "prototype" !== o && "own" !== o)
                throw new TypeError(
                    'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    o + '"');
              var r = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var i = {
                kind : t,
                key : n,
                placement : o,
                descriptor : Object.assign({}, r)
              };
              return "field" !== t
                         ? this.disallowProperty(e, "initializer",
                                                 "A method descriptor")
                         : (this.disallowProperty(
                                r, "get",
                                "The property descriptor of a field descriptor"),
                            this.disallowProperty(
                                r, "set",
                                "The property descriptor of a field descriptor"),
                            this.disallowProperty(
                                r, "value",
                                "The property descriptor of a field descriptor"),
                            i.initializer = e.initializer),
                     i
            },
            toElementFinisherExtras : function(e) {
              var t = this.toElementDescriptor(e), n = x(e, "finisher"),
                  o = this.toElementDescriptors(e.extras);
              return { element: t, finisher: n, extras: o }
            },
            fromClassDescriptor : function(e) {
              var t = {
                kind : "class",
                elements : e.map(this.fromElementDescriptor, this)
              };
              return Object.defineProperty(
                         t, Symbol.toStringTag,
                         {value : "Descriptor", configurable : !0}),
                     t
            },
            toClassDescriptor : function(e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                    'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t + '"');
              this.disallowProperty(e, "key", "A class descriptor"),
                  this.disallowProperty(e, "placement", "A class descriptor"),
                  this.disallowProperty(e, "descriptor", "A class descriptor"),
                  this.disallowProperty(e, "initializer", "A class descriptor"),
                  this.disallowProperty(e, "extras", "A class descriptor");
              var n = x(e, "finisher"),
                  o = this.toElementDescriptors(e.elements);
              return { elements: o, finisher: n }
            },
            runClassFinishers : function(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = (0, t[n])(e);
                if (void 0 !== o) {
                  if ("function" != typeof o)
                    throw new TypeError("Finishers must return a constructor.");
                  e = o
                }
              }
              return e
            },
            disallowProperty : function(e, t, n) {
              if (void 0 !== e[t])
                throw new TypeError(n + " can't have a ." + t + " property.")
            }
          };
          return e
        }();
        if (o)
          for (var i = 0; i < o.length; i++)
            r = o[i](r);
        var s = t(function(e) {
          r.initializeInstanceElements(e, a.elements)
        }, n), a = r.decorateClass(function(e) {
          for (var t = [], n = function(e) {
                 return "method" === e.kind && e.key === i.key &&
                        e.placement === i.placement
               }, o = 0; o < e.length; o++) {
            var r, i = e[o];
            if ("method" === i.kind && (r = t.find(n)))
              if (E(i.descriptor) || E(r.descriptor)) {
                if (O(i) || O(r))
                  throw new ReferenceError("Duplicated methods (" + i.key +
                                           ") can't be decorated.");
                r.descriptor = i.descriptor
              } else {
                if (O(i)) {
                  if (O(r))
                    throw new ReferenceError(
                        "Decorators can't be placed on different accessors with for the same property (" +
                        i.key + ").");
                  r.decorators = i.decorators
                }
                w(i, r)
              }
            else
              t.push(i)
          }
          return t
        }(s.d.map(_)), e);
        r.initializeClassElements(s.F, a.elements),
            r.runClassFinishers(s.F, a.finishers)
      }([ Object(o.d)("dialog-hassio-snapshot") ], function(e, t) {
        return {
          F:
              function(n) {
                function o() {
                  var t, n, r, i;
                  !function(e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
                  }(this, o);
                  for (var a = arguments.length, l = new Array(a), c = 0; c < a;
                       c++)
                    l[c] = arguments[c];
                  return r = this,
                         n = !(i = (t = b(o)).call.apply(t,
                                                         [ this ].concat(l))) ||
                                     "object" !== s(i) && "function" != typeof i
                                 ? v(r)
                                 : i,
                         e(v(n)), n
                }
                return function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                        "Super expression must either be null or a function");
                  e.prototype = Object.create(t && t.prototype, {
                    constructor : {value : e, writable : !0, configurable : !0}
                  }),
                  t && k(e, t)
                }(o, t),
                       o
              }(),
              d: [
                {
                  kind : "field",
                  decorators : [ Object(o.f)() ],
                  key : "hass",
                  value : void 0
                },
                {
                  kind : "field",
                  decorators : [ Object(o.f)() ],
                  key : "_error",
                  value : void 0
                },
                {
                  kind : "field",
                  decorators : [ Object(o.f)() ],
                  key : "snapshot",
                  value : void 0
                },
                {
                  kind : "field",
                  decorators : [ Object(o.f)() ],
                  key : "_folders",
                  value : void 0
                },
                {
                  kind : "field",
                  decorators : [ Object(o.f)() ],
                  key : "_addons",
                  value : void 0
                },
                {
                  kind : "field",
                  decorators : [ Object(o.f)() ],
                  key : "_dialogParams",
                  value : void 0
                },
                {
                  kind : "field",
                  decorators : [ Object(o.f)() ],
                  key : "_snapshotPassword",
                  value : void 0
                },
                {
                  kind : "field",
                  decorators : [ Object(o.f)() ],
                  key : "_restoreHass",
                  value : function() { return !0 }
                },
                {
                  kind : "field",
                  decorators : [ Object(o.g)("#dialog") ],
                  key : "_dialog",
                  value : void 0
                },
                {
                  kind : "method",
                  key : "showDialog",
                  value : function(e) {
                    return regeneratorRuntime.async(function(t) {
                      for (;;)
                        switch (t.prev = t.next) {
                        case 0:
                          return t.next = 2, regeneratorRuntime.awrap(Object(
                                                 r.c)(this.hass, e.slug));
                        case 2:
                          this.snapshot = t.sent,
                          this._folders =
                              (o = this.snapshot.folders, i = void 0, i = [],
                               o.includes("homeassistant") && i.push({
                                 slug : "homeassistant",
                                 name : "Home Assistant configuration",
                                 checked : !0
                               }),
                               o.includes("ssl") && i.push({
                                 slug : "ssl",
                                 name : "SSL",
                                 checked : !0
                               }),
                               o.includes("share") && i.push({
                                 slug : "share",
                                 name : "Share",
                                 checked : !0
                               }),
                               o.includes("addons/local") && i.push({
                                 slug : "addons/local",
                                 name : "Local add-ons",
                                 checked : !0
                               }),
                               i).sort(function(e, t) {
                                return e.name > t.name ? 1 : -1
                              }),
                          this._addons =
                              (n = this.snapshot.addons, n.map(function(e) {
                                return {
                                  slug: e.slug, name: e.name,
                                      version: e.version, checked: !0
                                }
                              })).sort(function(e, t) {
                                return e.name > t.name ? 1 : -1
                              }),
                          this._dialogParams = e, t.prev = 6,
                          this._dialog.open(), t.next = 14;
                          break;
                        case 10:
                          return t.prev = 10, t.t0 = t.catch(6), t.next = 14,
                                 regeneratorRuntime.awrap(this.showDialog(e));
                        case 14:
                        case "end":
                          return t.stop()
                        }
                      var n, o, i
                    }, null, this, [ [ 6, 10 ] ])
                  }
                },
                {
                  kind : "method",
                  key : "render",
                  value : function() {
                    var e = this;
                    return this.snapshot
                               ? Object(o.e)(
                                     m(), this._dialogClosed, this._computeName,
                                     "full" === this.snapshot.type ? "Full snapshot"
                                                                   : "Partial snapshot",
                                     this._computeSize,
                                     this._formatDatetime(this.snapshot.date),
                                     this._restoreHass,
                                     function(t) {
                                       return e._restoreHass = t.target.checked
                                     },
                                     this.snapshot.homeassistant,
                                     this._folders.length
                                         ? Object(o.e)(
                                               f(),
                                               this._folders.map(function(t) {
                                                 return Object(o.e)(
                                                     h(),
                                                     t.checked, function(n) {
                                                       return e._updateFolders(
                                                           t, n.target.checked)
                                                     }, t.name)
                                               }))
                                         : "",
                                     this._addons.length
                                         ? Object(o.e)(
                                               u(),
                                               this._addons.map(function(t) {
                                                 return Object(o.e)(
                                                     p(),
                                                     t.checked, function(n) {
                                                       return e._updateAddons(
                                                           t, n.target.checked)
                                                     }, t.name)
                                               }))
                                         : "",
                                     this.snapshot.protected ? Object(o.e)(
                                                                   d(),
                                                                   this._passwordInput,
                                                                   this._snapshotPassword)
                                                             : "",
                                     this._error ? Object(o.e)(c(), this._error)
                                                 : "",
                                     this._downloadClicked,
                                     this._partialRestoreClicked,
                                     "full" === this.snapshot.type ? Object(
                                                                         o.e)(
                                                                         l(),
                                                                         this._fullRestoreClicked)
                                                                   : "",
                                     this._deleteClicked)
                               : Object(o.e)(g())
                  }
                },
                {
                  kind : "get",
                  static : !0,
                  key : "styles",
                  value : function() {
                    return [ i.c, Object(o.c)(a()) ]
                  }
                },
                {
                  kind : "method",
                  key : "_updateFolders",
                  value : function(e, t) {
                    this._folders = this._folders.map(function(
                        n) { return n.slug === e.slug && (n.checked = t), n })
                  }
                },
                {
                  kind : "method",
                  key : "_updateAddons",
                  value : function(e, t) {
                    this._addons = this._addons.map(function(
                        n) { return n.slug === e.slug && (n.checked = t), n })
                  }
                },
                {
                  kind : "method",
                  key : "_passwordInput",
                  value : function(
                      e) { this._snapshotPassword = e.detail.value }
                },
                {
                  kind : "method",
                  key : "_partialRestoreClicked",
                  value : function() {
                    var e = this;
                    if (confirm(
                            "Are you sure you want to restore this snapshot?")) {
                      var t = this._addons
                                  .filter(function(e) { return e.checked })
                                  .map(function(e) { return e.slug }),
                          n = this._folders
                                  .filter(function(e) { return e.checked })
                                  .map(function(e) { return e.slug }),
                          o = {
                            homeassistant : this._restoreHass,
                            addons : t,
                            folders : n
                          };
                      this.snapshot.protected &&
                          (o.password = this._snapshotPassword),
                          this.hass
                              .callApi(
                                  "POST",
                                  "hassio/snapshots/".concat(
                                      this.snapshot.slug, "/restore/partial"),
                                  o)
                              .then(
                                  function() {
                                    alert("Snapshot restored!"),
                                        e._dialog.close()
                                  },
                                  function(t) { e._error = t.body.message })
                    }
                  }
                },
                {
                  kind : "method",
                  key : "_fullRestoreClicked",
                  value : function() {
                    var e = this;
                    if (confirm(
                            "Are you sure you want to restore this snapshot?")) {
                      var t = this.snapshot.protected ? {
                        password : this._snapshotPassword
                      }
                                                      : void 0;
                      this.hass
                          .callApi("POST",
                                   "hassio/snapshots/".concat(
                                       this.snapshot.slug, "/restore/full"),
                                   t)
                          .then(
                              function() {
                                alert("Snapshot restored!"), e._dialog.close()
                              },
                              function(t) { e._error = t.body.message })
                    }
                  }
                },
                {
                  kind : "method",
                  key : "_deleteClicked",
                  value : function() {
                    var e = this;
                    confirm("Are you sure you want to delete this snapshot?") &&
                        this.hass
                            .callApi("POST", "hassio/snapshots/".concat(
                                                 this.snapshot.slug, "/remove"))
                            .then(
                                function() {
                                  e._dialog.close(), e._dialogParams.onDelete()
                                },
                                function(t) { e._error = t.body.message })
                  }
                },
                {
                  kind : "method",
                  key : "_downloadClicked",
                  value : function() {
                    var e, t, n;
                    return regeneratorRuntime.async(function(o) {
                      for (;;)
                        switch (o.prev = o.next) {
                        case 0:
                          return o.prev = 0, o.next = 3,
                                 regeneratorRuntime.awrap((
                                     r = this.hass,
                                     i = "/api/hassio/snapshots/".concat(
                                         this.snapshot.slug, "/download"),
                                     r.callWS(
                                         {type : "auth/sign_path", path : i})));
                        case 3:
                          e = o.sent, o.next = 10;
                          break;
                        case 6:
                          return o.prev = 6, o.t0 = o.catch(0),
                                 alert("Error: ".concat(o.t0.message)),
                                 o.abrupt("return");
                        case 10:
                          t = this._computeName.replace(/[^a-z0-9]+/gi, "_"),
                          (n = document.createElement("a")).href = e.path,
                          n.download = "Hass_io_".concat(t, ".tar"),
                          this._dialog.appendChild(n), n.click(),
                          this._dialog.removeChild(n);
                        case 17:
                        case "end":
                          return o.stop()
                        }
                      var r, i
                    }, null, this, [ [ 0, 6 ] ])
                  }
                },
                {
                  kind : "get",
                  key : "_computeName",
                  value : function() {
                    return this.snapshot
                               ? this.snapshot.name || this.snapshot.slug
                               : "Unnamed snapshot"
                  }
                },
                {
                  kind : "get",
                  key : "_computeSize",
                  value : function() {
                    return Math.ceil(10 * this.snapshot.size) / 10 + " MB"
                  }
                },
                {
                  kind : "method",
                  key : "_formatDatetime",
                  value : function(e) {
                    return new Date(e).toLocaleDateString(navigator.language, {
                      weekday : "long",
                      year : "numeric",
                      month : "short",
                      day : "numeric",
                      hour : "numeric",
                      minute : "2-digit"
                    })
                  }
                },
                {
                  kind : "method",
                  key : "_dialogClosed",
                  value : function() {
                    this._dialogParams = void 0, this.snapshot = void 0,
                    this._snapshotPassword = "", this._folders = [],
                    this._addons = []
                  }
                }
              ]
        }
      }, o.a)
    },
    31 : function(e, t, n) {
      "use strict";
      n.d(t, "b", function() { return i }),
          n.d(t, "a", function() { return s });
      n(4);
      var o = n(70), r = n(8), i = {
        hostAttributes : {role : "dialog", tabindex : "-1"},
        properties : {
          modal : {type : Boolean, value : !1},
          __readied : {type : Boolean, value : !1}
        },
        observers : [ "_modalChanged(modal, __readied)" ],
        listeners : {tap : "_onDialogClick"},
        ready : function() {
          this.__prevNoCancelOnOutsideClick = this.noCancelOnOutsideClick,
          this.__prevNoCancelOnEscKey = this.noCancelOnEscKey,
          this.__prevWithBackdrop = this.withBackdrop, this.__readied = !0
        },
        _modalChanged : function(e, t) {
          t && (e ? (this.__prevNoCancelOnOutsideClick =
                         this.noCancelOnOutsideClick,
                     this.__prevNoCancelOnEscKey = this.noCancelOnEscKey,
                     this.__prevWithBackdrop = this.withBackdrop,
                     this.noCancelOnOutsideClick = !0,
                     this.noCancelOnEscKey = !0, this.withBackdrop = !0)
                  : (this.noCancelOnOutsideClick =
                         this.noCancelOnOutsideClick &&
                         this.__prevNoCancelOnOutsideClick,
                     this.noCancelOnEscKey =
                         this.noCancelOnEscKey && this.__prevNoCancelOnEscKey,
                     this.withBackdrop =
                         this.withBackdrop && this.__prevWithBackdrop))
        },
        _updateClosingReasonConfirmed : function(e) {
          this.closingReason = this.closingReason || {},
          this.closingReason.confirmed = e
        },
        _onDialogClick : function(e) {
          for (var t = Object(r.a)(e).path, n = 0, o = t.indexOf(this); n < o;
               n++) {
            var i = t[n];
            if (i.hasAttribute && (i.hasAttribute("dialog-dismiss") ||
                                   i.hasAttribute("dialog-confirm"))) {
              this._updateClosingReasonConfirmed(
                  i.hasAttribute("dialog-confirm")),
                  this.close(), e.stopPropagation();
              break
            }
          }
        }
      },
          s = [ o.a, i ]
    },
    53 : function(e, t, n) {
      "use strict";
      n(4), n(12), n(13);
      var o = n(31), r = n(7), i = n(6);
      function s() {
        var e = function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
              Object.defineProperties(e, {raw : {value : Object.freeze(t)}}))
        }([
          '\n    <style>\n\n      :host {\n        display: block;\n        @apply --layout-relative;\n      }\n\n      :host(.is-scrolled:not(:first-child))::before {\n        content: \'\';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {\n        content: \'\';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      .scrollable {\n        padding: 0 24px;\n\n        @apply --layout-scroll;\n        @apply --paper-dialog-scrollable;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n    </style>\n\n    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">\n      <slot></slot>\n    </div>\n'
        ]);
        return s = function() { return e }, e
      }
      Object(r.a)({
        _template : Object(i.a)(s()),
        is : "paper-dialog-scrollable",
        properties : {dialogElement : {type : Object}},
        get scrollTarget() { return this.$.scrollable },
        ready : function() {
          this._ensureTarget(), this.classList.add("no-padding")
        },
        attached : function() {
          this._ensureTarget(),
              requestAnimationFrame(this.updateScrollState.bind(this))
        },
        updateScrollState : function() {
          this.toggleClass("is-scrolled", this.scrollTarget.scrollTop > 0),
              this.toggleClass("can-scroll",
                               this.scrollTarget.offsetHeight <
                                   this.scrollTarget.scrollHeight),
              this.toggleClass("scrolled-to-bottom",
                               this.scrollTarget.scrollTop +
                                       this.scrollTarget.offsetHeight >=
                                   this.scrollTarget.scrollHeight)
        },
        _ensureTarget : function() {
          this.dialogElement = this.dialogElement || this.parentElement,
          this.dialogElement && this.dialogElement.behaviors &&
                  this.dialogElement.behaviors.indexOf(o.b) >= 0
              ? (this.dialogElement.sizingTarget = this.scrollTarget,
                 this.scrollTarget.classList.remove("fit"))
              : this.dialogElement && this.scrollTarget.classList.add("fit")
        }
      })
    },
    55 : function(e, t, n) {
      "use strict";
      n(4), n(12), n(13), n(30), n(35);
      var o = document.createElement("template");
      o.setAttribute("style", "display: none;"),
          o.innerHTML =
              '<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',
          document.head.appendChild(o.content);
      var r = n(72), i = n(31), s = n(7), a = n(6);
      function l() {
        var e = function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
              Object.defineProperties(e, {raw : {value : Object.freeze(t)}}))
        }([
          '\n    <style include="paper-dialog-shared-styles"></style>\n    <slot></slot>\n'
        ]);
        return l = function() { return e }, e
      }
      Object(s.a)({
        _template : Object(a.a)(l()),
        is : "paper-dialog",
        behaviors : [ i.a, r.a ],
        listeners : {"neon-animation-finish" : "_onNeonAnimationFinish"},
        _renderOpened :
            function() { this.cancelAnimation(), this.playAnimation("entry") },
        _renderClosed :
            function() { this.cancelAnimation(), this.playAnimation("exit") },
        _onNeonAnimationFinish : function() {
          this.opened ? this._finishRenderOpened() : this._finishRenderClosed()
        }
      });
      var c = n(59), d = n(8), p = n(67), u = {
        getTabbableNodes : function(e) {
          var t = [];
          return this._collectTabbableNodes(e, t) ? p.a._sortByTabIndex(t) : t
        },
        _collectTabbableNodes : function(e, t) {
          if (e.nodeType !== Node.ELEMENT_NODE || !p.a._isVisible(e))
            return !1;
          var n, o = e, r = p.a._normalizedTabIndex(o), i = r > 0;
          r >= 0 && t.push(o),
              n = "content" === o.localName || "slot" === o.localName
                      ? Object(d.a)(o).getDistributedNodes()
                      : Object(d.a)(o.shadowRoot || o.root || o).children;
          for (var s = 0; s < n.length; s++)
            i = this._collectTabbableNodes(n[s], t) || i;
          return i
        }
      };
      function h(e) {
        return (h = "function" == typeof Symbol &&
                            "symbol" == typeof Symbol.iterator
                        ? function(e) { return typeof e }
                        : function(e) {
                            return e && "function" == typeof Symbol &&
                                           e.constructor === Symbol &&
                                           e !== Symbol.prototype
                                       ? "symbol"
                                       : typeof e
                          })(e)
      }
      function f(e, t) {
        return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
          if (void 0 === e)
            throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called");
          return e
        }(e) : t
      }
      function m(e) {
        return (
            m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function g(e, t) {
        return (g = Object.setPrototypeOf ||
                    function(e, t) { return e.__proto__ = t, e })(e, t)
      }
      var y = customElements.get("paper-dialog"),
          b = {get _focusableNodes() { return u.getTabbableNodes(this) }},
          v = function(e) {
            function t() {
              return function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
              }(this, t),
                     f(this, m(t).apply(this, arguments))
            }
            return function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                    "Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                constructor : {value : e, writable : !0, configurable : !0}
              }),
              t && g(e, t)
            }(t, Object(c["b"])([ b ], y)),
                   t
          }();
      customElements.define("ha-paper-dialog", v)
    }
  }
]);
//# sourceMappingURL=chunk.9d371c8143226d4eaaee.js.map