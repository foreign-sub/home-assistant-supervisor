/*! For license information please see chunk.c6b146bc72a8670a51b9.js.LICENSE */
(self.webpackJsonp = self.webpackJsonp || [])
    .push(
        [
          [ 5 ], {
            179 :
                function(e, t, n) {
                  "use strict";
                  n.r(t);
                  n(18), n(84), n(25), n(53), n(33), n(42);
                  var r = n(6);
                  n(56);
                  "".concat(location.protocol, "//").concat(location.host);
                  var o = n(115), i = n(11);
                  function s(e) {
                    return (
                        s = "function" == typeof Symbol &&
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
                    var e = g([
                      "\n        ha-paper-dialog {\n          min-width: 350px;\n          font-size: 14px;\n          border-radius: 2px;\n        }\n        app-toolbar {\n          margin: 0;\n          padding: 0 16px;\n          color: var(--primary-text-color);\n          background-color: var(--secondary-background-color);\n        }\n        app-toolbar [main-title] {\n          margin-left: 16px;\n        }\n        ha-paper-dialog-scrollable {\n          margin: 0;\n        }\n        paper-checkbox {\n          display: block;\n          margin: 4px;\n        }\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          ha-paper-dialog {\n            max-height: 100%;\n            height: 100%;\n          }\n          app-toolbar {\n            color: var(--text-primary-color);\n            background-color: var(--primary-color);\n          }\n        }\n        .details {\n          color: var(--secondary-text-color);\n        }\n        .warning,\n        .error {\n          color: var(--google-red-500);\n        }\n        .buttons {\n          display: flex;\n          flex-direction: column;\n        }\n        .buttons li {\n          list-style-type: none;\n        }\n        .buttons .icon {\n          margin-right: 16px;\n        }\n        .no-margin-top {\n          margin-top: 0;\n        }\n      "
                    ]);
                    return a = function() { return e }, e
                  }
                  function l() {
                    var e = g([
                      "\n                <li>\n                  <mwc-button @click=",
                      '>\n                    <iron-icon icon="hassio:history" class="icon"> </iron-icon>\n                    Wipe &amp; restore\n                  </mwc-button>\n                </li>\n              '
                    ]);
                    return l = function() { return e }, e
                  }
                  function c() {
                    var e = g([ ' <p class="error">Error: ', "</p> " ]);
                    return c = function() { return e }, e
                  }
                  function d() {
                    var e = g([
                      '\n              <paper-input\n                autofocus=""\n                label="Password"\n                type="password"\n                @value-changed=',
                      "\n                .value=",
                      "\n              ></paper-input>\n            "
                    ]);
                    return d = function() { return e }, e
                  }
                  function u() {
                    var e = g([
                      "\n                    <paper-checkbox\n                      .checked=",
                      '\n                      @change="',
                      '"\n                    >\n                      ',
                      "\n                    </paper-checkbox>\n                  "
                    ]);
                    return u = function() { return e }, e
                  }
                  function p() {
                    var e = g([
                      '\n              <div>Add-on:</div>\n              <paper-dialog-scrollable class="no-margin-top">\n                ',
                      "\n              </paper-dialog-scrollable>\n            "
                    ]);
                    return p = function() { return e }, e
                  }
                  function h() {
                    var e = g([
                      "\n                    <paper-checkbox\n                      .checked=",
                      '\n                      @change="',
                      '"\n                    >\n                      ',
                      "\n                    </paper-checkbox>\n                  "
                    ]);
                    return h = function() { return e }, e
                  }
                  function f() {
                    var e = g([
                      '\n              <div>Folders:</div>\n              <paper-dialog-scrollable class="no-margin-top">\n                ',
                      "\n              </paper-dialog-scrollable>\n            "
                    ]);
                    return f = function() { return e }, e
                  }
                  function m() {
                    var e = g([
                      '\n      <ha-paper-dialog\n        id="dialog"\n        with-backdrop=""\n        .on-iron-overlay-closed=',
                      '\n      >\n        <app-toolbar>\n          <paper-icon-button\n            icon="hassio:close"\n            dialog-dismiss=""\n          ></paper-icon-button>\n          <div main-title="">',
                      '</div>\n        </app-toolbar>\n        <div class="details">\n          ',
                      "\n          (", ")<br />\n          ",
                      "\n        </div>\n        <div>Home Assistant:</div>\n        <paper-checkbox\n          .checked=",
                      '\n          @change="',
                      '"\n        >\n          Home Assistant ',
                      "\n        </paper-checkbox>\n        ", "\n        ",
                      "\n        ", "\n        ",
                      '\n\n        <div>Actions:</div>\n        <ul class="buttons">\n          <li>\n            <mwc-button @click=',
                      '>\n              <iron-icon icon="hassio:download" class="icon"></iron-icon>\n              Download Snapshot\n            </mwc-button>\n          </li>\n          <li>\n            <mwc-button @click=',
                      '>\n              <iron-icon icon="hassio:history" class="icon"> </iron-icon>\n              Restore Selected\n            </mwc-button>\n          </li>\n          ',
                      "\n          <li>\n            <mwc-button @click=",
                      '>\n              <iron-icon icon="hassio:delete" class="icon warning"> </iron-icon>\n              <span class="warning">Delete Snapshot</span>\n            </mwc-button>\n          </li>\n        </ul>\n      </ha-paper-dialog>\n    '
                    ]);
                    return m = function() { return e }, e
                  }
                  function y() {
                    var e = g([ "" ]);
                    return y = function() { return e }, e
                  }
                  function g(e, t) {
                    return t || (t = e.slice(0)),
                           Object.freeze(Object.defineProperties(
                               e, {raw : {value : Object.freeze(t)}}))
                  }
                  function v(e, t, n, r, o, i, s) {
                    try {
                      var a = e[i](s), l = a.value
                    } catch (c) {
                      return void n(c)
                    }
                    a.done ? t(l) : Promise.resolve(l).then(r, o)
                  }
                  function b(e) {
                    return function() {
                      var t = this, n = arguments;
                      return new Promise(function(r, o) {
                        var i = e.apply(t, n);
                        function s(e) { v(i, r, o, s, a, "next", e) }
                        function a(e) { v(i, r, o, s, a, "throw", e) }
                        s(void 0)
                      })
                    }
                  }
                  function k(e, t) {
                    return (k = Object.setPrototypeOf ||
                                function(e, t) { return e.__proto__ = t, e })(e,
                                                                              t)
                  }
                  function _(e) {
                    return function() {
                      var t, n = O(e);
                      if (function() {
                            if ("undefined" == typeof Reflect ||
                                !Reflect.construct)
                              return !1;
                            if (Reflect.construct.sham)
                              return !1;
                            if ("function" == typeof Proxy)
                              return !0;
                            try {
                              return Date.prototype.toString.call(
                                         Reflect.construct(Date, [],
                                                           function() {})),
                                     !0
                            } catch (e) {
                              return !1
                            }
                          }()) {
                        var r = O(this).constructor;
                        t = Reflect.construct(n, arguments, r)
                      } else
                        t = n.apply(this, arguments);
                      return function(e, t) {
                        if (t && ("object" === s(t) || "function" == typeof t))
                          return t;
                        return w(e)
                      }(this, t)
                    }
                  }
                  function w(e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called");
                    return e
                  }
                  function O(e) {
                    return (O = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function(e) {
                                        return e.__proto__ ||
                                               Object.getPrototypeOf(e)
                                      })(e)
                  }
                  function E(e) {
                    var t, n = S(e.key);
                    "method" === e.kind
                        ? t = {
                            value : e.value,
                            writable : !0,
                            configurable : !0,
                            enumerable : !1
                          }
                        : "get" === e.kind
                              ? t = {
                                  get : e.value,
                                  configurable : !0,
                                  enumerable : !1
                                }
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
                    var r = {
                      kind : "field" === e.kind ? "field" : "method",
                      key : n,
                      placement : e.static ? "static"
                                           : "field" === e.kind ? "own"
                                                                : "prototype",
                      descriptor : t
                    };
                    return e.decorators && (r.decorators = e.decorators),
                           "field" === e.kind && (r.initializer = e.value), r
                  }
                  function x(e, t) {
                    void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set
                  }
                  function C(e) { return e.decorators && e.decorators.length }
                  function j(e) {
                    return void 0 !== e &&
                           !(void 0 === e.value && void 0 === e.writable)
                  }
                  function P(e, t) {
                    var n = e[t];
                    if (void 0 !== n && "function" != typeof n)
                      throw new TypeError("Expected '" + t +
                                          "' to be a function");
                    return n
                  }
                  function S(e) {
                    var t = function(e, t) {
                      if ("object" !== s(e) || null === e)
                        return e;
                      var n = e[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" !== s(r))
                          return r;
                        throw new TypeError(
                            "@@toPrimitive must return a primitive value.")
                      }
                      return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" === s(t) ? t : String(t)
                  }
                  function A(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                      r[n] = e[n];
                    return r
                  }
                  !function(e, t, n, r) {
                    var o = function() {
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
                          ["method", "field"].forEach(function(r) {
                            t.forEach(function(t) {
                              var o = t.placement;
                              if (t.kind === r &&
                                  ("static" === o || "prototype" === o)) {
                                var i = "static" === o ? e : n;
                                this.defineClassElement(i, t)
                              }
                            }, this)
                          }, this)
                        },
                        defineClassElement : function(e, t) {
                          var n = t.descriptor;
                          if ("field" === t.kind) {
                            var r = t.initializer;
                            n = {
                              enumerable : n.enumerable,
                              writable : n.writable,
                              configurable : n.configurable,
                              value : void 0 === r ? void 0 : r.call(e)
                            }
                          }
                          Object.defineProperty(e, t.key, n)
                        },
                        decorateClass : function(e, t) {
                          var n = [], r = [],
                              o = {static : [], prototype : [], own : []};
                          if (e.forEach(function(e) {
                                this.addElementPlacement(e, o)
                              }, this), e.forEach(function(e) {
                                if (!C(e))
                                  return n.push(e);
                                var t = this.decorateElement(e, o);
                                n.push(t.element), n.push.apply(n, t.extras),
                                    r.push.apply(r, t.finishers)
                              }, this), !t)
                            return {elements : n, finishers : r};
                          var i = this.decorateConstructor(n, t);
                          return r.push.apply(r, i.finishers), i.finishers = r,
                                                               i
                        },
                        addElementPlacement : function(e, t, n) {
                          var r = t[e.placement];
                          if (!n && -1 !== r.indexOf(e.key))
                            throw new TypeError("Duplicated element (" + e.key +
                                                ")");
                          r.push(e.key)
                        },
                        decorateElement : function(e, t) {
                          for (var n = [], r = [], o = e.decorators,
                                   i = o.length - 1;
                               i >= 0; i--) {
                            var s = t[e.placement];
                            s.splice(s.indexOf(e.key), 1);
                            var a = this.fromElementDescriptor(e),
                                l = this.toElementFinisherExtras((0, o[i])(a) ||
                                                                 a);
                            e = l.element, this.addElementPlacement(e, t),
                            l.finisher && r.push(l.finisher);
                            var c = l.extras;
                            if (c) {
                              for (var d = 0; d < c.length; d++)
                                this.addElementPlacement(c[d], t);
                              n.push.apply(n, c)
                            }
                          }
                          return { element: e, finishers: r, extras: n }
                        },
                        decorateConstructor : function(e, t) {
                          for (var n = [], r = t.length - 1; r >= 0; r--) {
                            var o = this.fromClassDescriptor(e),
                                i = this.toClassDescriptor((0, t[r])(o) || o);
                            if (void 0 !== i.finisher && n.push(i.finisher),
                                void 0 !== i.elements) {
                              e = i.elements;
                              for (var s = 0; s < e.length - 1; s++)
                                for (var a = s + 1; a < e.length; a++)
                                  if (e[s].key === e[a].key &&
                                      e[s].placement === e[a].placement)
                                    throw new TypeError("Duplicated element (" +
                                                        e[s].key + ")")
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
                                 "field" === e.kind &&
                                     (t.initializer = e.initializer),
                                 t
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
                                          if ("undefined" != typeof Symbol &&
                                              Symbol.iterator in Object(e))
                                            return Array.from(e)
                                        }(t) ||
                                        function(e, t) {
                                          if (e) {
                                            if ("string" == typeof e)
                                              return A(e, t);
                                            var n = Object.prototype.toString
                                                        .call(e)
                                                        .slice(8, -1);
                                            return "Object" === n &&
                                                       e.constructor &&
                                                       (n = e.constructor.name),
                                                   "Map" === n || "Set" === n
                                                       ? Array.from(n)
                                                       : "Arguments" === n ||
                                                                 /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
                                                                     .test(n)
                                                             ? A(e, t)
                                                             : void 0
                                          }
                                        }(t) ||
                                        function() {
                                          throw new TypeError(
                                              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }())
                                .map(function(e) {
                                  var t = this.toElementDescriptor(e);
                                  return this.disallowProperty(
                                             e, "finisher",
                                             "An element descriptor"),
                                         this.disallowProperty(
                                             e, "extras",
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
                          var n = S(e.key), r = String(e.placement);
                          if ("static" !== r && "prototype" !== r &&
                              "own" !== r)
                            throw new TypeError(
                                'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                                r + '"');
                          var o = e.descriptor;
                          this.disallowProperty(e, "elements",
                                                "An element descriptor");
                          var i = {
                            kind : t,
                            key : n,
                            placement : r,
                            descriptor : Object.assign({}, o)
                          };
                          return "field" !== t
                                     ? this.disallowProperty(
                                           e, "initializer",
                                           "A method descriptor")
                                     : (this.disallowProperty(
                                            o, "get",
                                            "The property descriptor of a field descriptor"),
                                        this.disallowProperty(
                                            o, "set",
                                            "The property descriptor of a field descriptor"),
                                        this.disallowProperty(
                                            o, "value",
                                            "The property descriptor of a field descriptor"),
                                        i.initializer = e.initializer),
                                 i
                        },
                        toElementFinisherExtras : function(e) {
                          var t = this.toElementDescriptor(e),
                              n = P(e, "finisher"),
                              r = this.toElementDescriptors(e.extras);
                          return { element: t, finisher: n, extras: r }
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
                              this.disallowProperty(e, "placement",
                                                    "A class descriptor"),
                              this.disallowProperty(e, "descriptor",
                                                    "A class descriptor"),
                              this.disallowProperty(e, "initializer",
                                                    "A class descriptor"),
                              this.disallowProperty(e, "extras",
                                                    "A class descriptor");
                          var n = P(e, "finisher"),
                              r = this.toElementDescriptors(e.elements);
                          return { elements: r, finisher: n }
                        },
                        runClassFinishers : function(e, t) {
                          for (var n = 0; n < t.length; n++) {
                            var r = (0, t[n])(e);
                            if (void 0 !== r) {
                              if ("function" != typeof r)
                                throw new TypeError(
                                    "Finishers must return a constructor.");
                              e = r
                            }
                          }
                          return e
                        },
                        disallowProperty : function(e, t, n) {
                          if (void 0 !== e[t])
                            throw new TypeError(n + " can't have a ." + t +
                                                " property.")
                        }
                      };
                      return e
                    }();
                    if (r)
                      for (var i = 0; i < r.length; i++)
                        o = r[i](o);
                    var s = t(function(e) {
                      o.initializeInstanceElements(e, a.elements)
                    }, n), a = o.decorateClass(function(e) {
                      for (var t = [], n = function(e) {
                             return "method" === e.kind && e.key === i.key &&
                                    e.placement === i.placement
                           }, r = 0; r < e.length; r++) {
                        var o, i = e[r];
                        if ("method" === i.kind && (o = t.find(n)))
                          if (j(i.descriptor) || j(o.descriptor)) {
                            if (C(i) || C(o))
                              throw new ReferenceError("Duplicated methods (" +
                                                       i.key +
                                                       ") can't be decorated.");
                            o.descriptor = i.descriptor
                          } else {
                            if (C(i)) {
                              if (C(o))
                                throw new ReferenceError(
                                    "Decorators can't be placed on different accessors with for the same property (" +
                                    i.key + ").");
                              o.decorators = i.decorators
                            }
                            x(i, o)
                          }
                        else
                          t.push(i)
                      }
                      return t
                    }(s.d.map(E)), e);
                    o.initializeClassElements(s.F, a.elements),
                        o.runClassFinishers(s.F, a.finishers)
                  }([ Object(r.d)("dialog-hassio-snapshot") ], function(e, t) {
                    return {
                      F:
                          function(n) {
                            !function(e, t) {
                              if ("function" != typeof t && null !== t)
                                throw new TypeError(
                                    "Super expression must either be null or a function");
                              e.prototype = Object.create(t && t.prototype, {
                                constructor : {
                                  value : e,
                                  writable : !0,
                                  configurable : !0
                                }
                              }),
                              t && k(e, t)
                            }(o, t);
                            var r = _(o);
                            function o() {
                              var t;
                              !function(e, t) {
                                if (!(e instanceof t))
                                  throw new TypeError(
                                      "Cannot call a class as a function")
                              }(this, o);
                              for (var n = arguments.length, i = new Array(n),
                                       s = 0;
                                   s < n; s++)
                                i[s] = arguments[s];
                              return t = r.call.apply(r, [ this ].concat(i)),
                                     e(w(t)), t
                            }
                            return o
                          }(),
                          d:
                              [
                                {
                                  kind : "field",
                                  decorators : [ Object(r.f)() ],
                                  key : "hass",
                                  value : void 0
                                },
                                {
                                  kind : "field",
                                  decorators : [ Object(r.f)() ],
                                  key : "_error",
                                  value : void 0
                                },
                                {
                                  kind : "field",
                                  decorators : [ Object(r.f)() ],
                                  key : "snapshot",
                                  value : void 0
                                },
                                {
                                  kind : "field",
                                  decorators : [ Object(r.f)() ],
                                  key : "_folders",
                                  value : void 0
                                },
                                {
                                  kind : "field",
                                  decorators : [ Object(r.f)() ],
                                  key : "_addons",
                                  value : void 0
                                },
                                {
                                  kind : "field",
                                  decorators : [ Object(r.f)() ],
                                  key : "_dialogParams",
                                  value : void 0
                                },
                                {
                                  kind : "field",
                                  decorators : [ Object(r.f)() ],
                                  key : "_snapshotPassword",
                                  value : void 0
                                },
                                {
                                  kind : "field",
                                  decorators : [ Object(r.f)() ],
                                  key : "_restoreHass",
                                  value : function() { return !0 }
                                },
                                {
                                  kind : "field",
                                  decorators : [ Object(r.g)("#dialog") ],
                                  key : "_dialog",
                                  value : void 0
                                },
                                {
                                  kind : "method",
                                  key : "showDialog",
                                  value : function() {
                                    var e = b(regeneratorRuntime.mark(function e(
                                        t) {
                                      return regeneratorRuntime.wrap(function(e) {
                                        for (;;)
                                          switch (e.prev = e.next) {
                                          case 0:
                                            return e.next = 2,
                                                   Object(o.c)(this.hass,
                                                               t.slug);
                                          case 2:
                                            this.snapshot = e.sent,
                                            this._folders =
                                                (r = this.snapshot.folders,
                                                 i = void 0, i = [],
                                                 r.includes("homeassistant") &&
                                                     i.push({
                                                       slug : "homeassistant",
                                                       name :
                                                           "Home Assistant configuration",
                                                       checked : !0
                                                     }),
                                                 r.includes("ssl") && i.push({
                                                   slug : "ssl",
                                                   name : "SSL",
                                                   checked : !0
                                                 }),
                                                 r.includes("share") && i.push({
                                                   slug : "share",
                                                   name : "Share",
                                                   checked : !0
                                                 }),
                                                 r.includes("addons/local") &&
                                                     i.push({
                                                       slug : "addons/local",
                                                       name : "Local add-ons",
                                                       checked : !0
                                                     }),
                                                 i).sort(function(e, t) {
                                                  return e.name > t.name ? 1
                                                                         : -1
                                                }),
                                            this._addons =
                                                (n = this.snapshot.addons,
                                                 n.map(function(e) {
                                                   return {
                                                     slug: e.slug, name: e.name,
                                                         version: e.version,
                                                         checked: !0
                                                   }
                                                 })).sort(function(e, t) {
                                                  return e.name > t.name ? 1
                                                                         : -1
                                                }),
                                            this._dialogParams = t, e.prev = 6,
                                            this._dialog.open(), e.next = 14;
                                            break;
                                          case 10:
                                            return e.prev = 10,
                                                   e.t0 = e.catch(6),
                                                   e.next = 14,
                                                   this.showDialog(t);
                                          case 14:
                                          case "end":
                                            return e.stop()
                                          }
                                        var n, r, i
                                      }, e, this, [ [ 6, 10 ] ])
                                    }));
                                    return function(
                                        t) { return e.apply(this, arguments) }
                                  }()
                                },
                                {
                                  kind : "method",
                                  key : "render",
                                  value :
                                      function() {
                                        var e = this;
                                        return this.snapshot?Object(r.e)(m(),this._dialogClosed,this._computeName,"full"===this.snapshot.type?"Full snapshot":"Partial snapshot",this._computeSize,this._formatDatetime(this.snapshot.date),this._restoreHass,function(t){e._restoreHass=t.target.checked},this.snapshot.homeassistant,this._folders.length?Object(r.e)(f(),this._folders.map(function(t){return Object(r.e)(h(),t.checked,function(n){return e._updateFolders(t,n.target.checked)},t.name)})):"",this._addons.length?Object(r.e)(p(),this._addons.map(function(t){return Object(r.e)(u(),t.checked,function(n){return e._updateAddons(t,n.target.checked)},t.name)})):"",this.snapshot.protected?Object(r.e)(d(),this._passwordInput,this._snapshotPassword):"",this._error?Object(r.e)(c(),this._error):"",this._downloadClicked,this._partialRestoreClicked,"full"===this.snapshot.type?Object(r.e)(l(),this._fullRestoreClicked):"",this._deleteClicked):Object(r.e)(y())
                                      }
                                },
                                {
                                  kind : "get",
                                  static : !0,
                                  key : "styles",
                                  value : function() {
                                    return [ i.c, Object(r.c)(a()) ]
                                  }
                                },
                                {
                                  kind : "method",
                                  key : "_updateFolders",
                                  value : function(e, t) {
                                    this._folders =
                                        this._folders.map(function(n) {
                                          return n.slug === e.slug &&
                                                     (n.checked = t),
                                                 n
                                        })
                                  }
                                },
                                {
                                  kind : "method",
                                  key : "_updateAddons",
                                  value : function(e, t) {
                                    this._addons =
                                        this._addons.map(function(n) {
                                          return n.slug === e.slug &&
                                                     (n.checked = t),
                                                 n
                                        })
                                  }
                                },
                                {
                                  kind : "method",
                                  key : "_passwordInput",
                                  value : function(e) {
                                    this._snapshotPassword = e.detail.value
                                  }
                                },
                                {
                                  kind : "method",
                                  key : "_partialRestoreClicked",
                                  value : function() {
                                    var e = this;
                                    if (confirm(
                                            "Are you sure you want to restore this snapshot?")) {
                                      var t = this._addons
                                                  .filter(function(
                                                      e) { return e.checked })
                                                  .map(function(
                                                      e) { return e.slug }),
                                          n = this._folders
                                                  .filter(function(
                                                      e) { return e.checked })
                                                  .map(function(
                                                      e) { return e.slug }),
                                          r = {
                                            homeassistant : this._restoreHass,
                                            addons : t,
                                            folders : n
                                          };
                                      this.snapshot.protected &&
                                          (r.password = this._snapshotPassword),
                                          this.hass
                                              .callApi(
                                                  "POST",
                                                  "hassio/snapshots/".concat(
                                                      this.snapshot.slug,
                                                      "/restore/partial"),
                                                  r)
                                              .then(
                                                  function() {
                                                    alert("Snapshot restored!"),
                                                        e._dialog.close()
                                                  },
                                                  function(t) {
                                                    e._error = t.body.message
                                                  })
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
                                                       this.snapshot.slug,
                                                       "/restore/full"),
                                                   t)
                                          .then(
                                              function() {
                                                alert("Snapshot restored!"),
                                                    e._dialog.close()
                                              },
                                              function(t) {
                                                e._error = t.body.message
                                              })
                                    }
                                  }
                                },
                                {
                                  kind : "method",
                                  key : "_deleteClicked",
                                  value : function() {
                                    var e = this;
                                    confirm(
                                        "Are you sure you want to delete this snapshot?") &&
                                        this.hass
                                            .callApi("POST",
                                                     "hassio/snapshots/".concat(
                                                         this.snapshot.slug,
                                                         "/remove"))
                                            .then(
                                                function() {
                                                  e._dialog.close(),
                                                      e._dialogParams.onDelete()
                                                },
                                                function(t) {
                                                  e._error = t.body.message
                                                })
                                  }
                                },
                                {
                                  kind : "method",
                                  key : "_downloadClicked",
                                  value : function() {
                                    var e = b(regeneratorRuntime.mark(function e() {
                                      var t, n, r;
                                      return regeneratorRuntime.wrap(function(e) {
                                        for (;;)
                                          switch (e.prev = e.next) {
                                          case 0:
                                            return e.prev = 0, e.next = 3,
                                                   o = this.hass,
                                                   i = "/api/hassio/snapshots/"
                                                           .concat(this.snapshot
                                                                       .slug,
                                                                   "/download"),
                                                   o.callWS({
                                                     type : "auth/sign_path",
                                                     path : i
                                                   });
                                          case 3:
                                            t = e.sent, e.next = 10;
                                            break;
                                          case 6:
                                            return e.prev = 6,
                                                   e.t0 = e.catch(0),
                                                   alert("Error: ".concat(
                                                       e.t0.message)),
                                                   e.abrupt("return");
                                          case 10:
                                            n = this._computeName.replace(
                                                /[^a-z0-9]+/gi, "_"),
                                            (r = document.createElement("a"))
                                                .href = t.path,
                                            r.download =
                                                "Hass_io_".concat(n, ".tar"),
                                            this._dialog.appendChild(r),
                                            r.click(),
                                            this._dialog.removeChild(r);
                                          case 17:
                                          case "end":
                                            return e.stop()
                                          }
                                        var o, i
                                      }, e, this, [ [ 0, 6 ] ])
                                    }));
                                    return function() {
                                      return e.apply(this, arguments)
                                    }
                                  }()
                                },
                                {
                                  kind : "get",
                                  key : "_computeName",
                                  value : function() {
                                    return this.snapshot
                                               ? this.snapshot.name ||
                                                     this.snapshot.slug
                                               : "Unnamed snapshot"
                                  }
                                },
                                {
                                  kind : "get",
                                  key : "_computeSize",
                                  value : function() {
                                    return Math.ceil(10 * this.snapshot.size) /
                                               10 +
                                           " MB"
                                  }
                                },
                                {
                                  kind : "method",
                                  key : "_formatDatetime",
                                  value : function(e) {
                                    return new Date(e).toLocaleDateString(
                                        navigator.language, {
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
                                    this._dialogParams = void 0,
                                    this.snapshot = void 0,
                                    this._snapshotPassword = "",
                                    this._folders = [], this._addons = []
                                  }
                                }
                              ]
                    }
                  }, r.a)
                },
            31 : function(e, t, n) {
              "use strict";
              n.d(t, "b", function() { return i }),
                  n.d(t, "a", function() { return s });
              n(5);
              var r = n(73), o = n(9), i = {
                hostAttributes : {role : "dialog", tabindex : "-1"},
                properties : {
                  modal : {type : Boolean, value : !1},
                  __readied : {type : Boolean, value : !1}
                },
                observers : [ "_modalChanged(modal, __readied)" ],
                listeners : {tap : "_onDialogClick"},
                ready : function() {
                  this.__prevNoCancelOnOutsideClick =
                      this.noCancelOnOutsideClick,
                  this.__prevNoCancelOnEscKey = this.noCancelOnEscKey,
                  this.__prevWithBackdrop = this.withBackdrop,
                  this.__readied = !0
                },
                _modalChanged : function(e, t) {
                  t &&
                      (e ? (this.__prevNoCancelOnOutsideClick =
                                this.noCancelOnOutsideClick,
                            this.__prevNoCancelOnEscKey = this.noCancelOnEscKey,
                            this.__prevWithBackdrop = this.withBackdrop,
                            this.noCancelOnOutsideClick = !0,
                            this.noCancelOnEscKey = !0, this.withBackdrop = !0)
                         : (this.noCancelOnOutsideClick =
                                this.noCancelOnOutsideClick &&
                                this.__prevNoCancelOnOutsideClick,
                            this.noCancelOnEscKey = this.noCancelOnEscKey &&
                                                    this.__prevNoCancelOnEscKey,
                            this.withBackdrop =
                                this.withBackdrop && this.__prevWithBackdrop))
                },
                _updateClosingReasonConfirmed : function(e) {
                  this.closingReason = this.closingReason || {},
                  this.closingReason.confirmed = e
                },
                _onDialogClick : function(e) {
                  for (var t = Object(o.a)(e).path, n = 0, r = t.indexOf(this);
                       n < r; n++) {
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
                  s = [ r.a, i ]
            },
            53 : function(e, t, n) {
              "use strict";
              n(5), n(16), n(14);
              var r = n(31), o = n(8), i = n(7);
              function s() {
                var e = function(e, t) {
                  t || (t = e.slice(0));
                  return Object.freeze(Object.defineProperties(
                      e, {raw : {value : Object.freeze(t)}}))
                }([
                  '\n    <style>\n\n      :host {\n        display: block;\n        @apply --layout-relative;\n      }\n\n      :host(.is-scrolled:not(:first-child))::before {\n        content: \'\';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {\n        content: \'\';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      .scrollable {\n        padding: 0 24px;\n\n        @apply --layout-scroll;\n        @apply --paper-dialog-scrollable;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n    </style>\n\n    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">\n      <slot></slot>\n    </div>\n'
                ]);
                return s = function() { return e }, e
              }
              Object(o.a)({
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
                  this.toggleClass("is-scrolled",
                                   this.scrollTarget.scrollTop > 0),
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
                          this.dialogElement.behaviors.indexOf(r.b) >= 0
                      ? (this.dialogElement.sizingTarget = this.scrollTarget,
                         this.scrollTarget.classList.remove("fit"))
                      : this.dialogElement &&
                            this.scrollTarget.classList.add("fit")
                }
              })
            },
            56 : function(e, t, n) {
              "use strict";
              n(5), n(16), n(14), n(30), n(39);
              var r = document.createElement("template");
              r.setAttribute("style", "display: none;"),
                  r.innerHTML =
                      '<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',
                  document.head.appendChild(r.content);
              var o = n(75), i = n(31), s = n(8), a = n(7);
              function l() {
                var e = function(e, t) {
                  t || (t = e.slice(0));
                  return Object.freeze(Object.defineProperties(
                      e, {raw : {value : Object.freeze(t)}}))
                }([
                  '\n    <style include="paper-dialog-shared-styles"></style>\n    <slot></slot>\n'
                ]);
                return l = function() { return e }, e
              }
              Object(s.a)({
                _template : Object(a.a)(l()),
                is : "paper-dialog",
                behaviors : [ i.a, o.a ],
                listeners :
                    {"neon-animation-finish" : "_onNeonAnimationFinish"},
                _renderOpened : function() {
                  this.cancelAnimation(), this.playAnimation("entry")
                },
                _renderClosed : function() {
                  this.cancelAnimation(), this.playAnimation("exit")
                },
                _onNeonAnimationFinish : function() {
                  this.opened ? this._finishRenderOpened()
                              : this._finishRenderClosed()
                }
              });
              var c = n(60), d = n(70), u = n(9), p = {
                getTabbableNodes : function(e) {
                  var t = [];
                  return this._collectTabbableNodes(e, t)
                             ? d.a._sortByTabIndex(t)
                             : t
                },
                _collectTabbableNodes : function(e, t) {
                  if (e.nodeType !== Node.ELEMENT_NODE || !d.a._isVisible(e))
                    return !1;
                  var n, r = e, o = d.a._normalizedTabIndex(r), i = o > 0;
                  o >= 0 && t.push(r),
                      n = "content" === r.localName || "slot" === r.localName
                              ? Object(u.a)(r).getDistributedNodes()
                              : Object(u.a)(r.shadowRoot || r.root || r)
                                    .children;
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
                return (f = Object.setPrototypeOf ||
                            function(e, t) { return e.__proto__ = t, e })(e, t)
              }
              function m(e) {
                return function() {
                  var t, n = y(e);
                  if (function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                          return !1;
                        if (Reflect.construct.sham)
                          return !1;
                        if ("function" == typeof Proxy)
                          return !0;
                        try {
                          return Date.prototype.toString.call(Reflect.construct(
                                     Date, [], function() {})),
                                 !0
                        } catch (e) {
                          return !1
                        }
                      }()) {
                    var r = y(this).constructor;
                    t = Reflect.construct(n, arguments, r)
                  } else
                    t = n.apply(this, arguments);
                  return function(e, t) {
                    if (t && ("object" === h(t) || "function" == typeof t))
                      return t;
                    return function(e) {
                      if (void 0 === e)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called");
                      return e
                    }(e)
                  }(this, t)
                }
              }
              function y(e) {
                return (y = Object.setPrototypeOf
                                ? Object.getPrototypeOf
                                : function(e) {
                                    return e.__proto__ ||
                                           Object.getPrototypeOf(e)
                                  })(e)
              }
              var g = customElements.get("paper-dialog"), v = {
                get _focusableNodes() { return p.getTabbableNodes(this) }
              },
                  b = function(e) {
                    !function(e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                            "Super expression must either be null or a function");
                      e.prototype = Object.create(t && t.prototype, {
                        constructor :
                            {value : e, writable : !0, configurable : !0}
                      }),
                      t && f(e, t)
                    }(n, Object(c["b"])([ v ], g));
                    var t = m(n);
                    function n() {
                      return function(e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                              "Cannot call a class as a function")
                      }(this, n),
                             t.apply(this, arguments)
                    }
                    return n
                  }();
              customElements.define("ha-paper-dialog", b)
            }
          }
        ]);
//# sourceMappingURL=chunk.c6b146bc72a8670a51b9.js.map