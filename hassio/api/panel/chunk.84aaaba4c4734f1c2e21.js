/*! For license information please see chunk.84aaaba4c4734f1c2e21.js.LICENSE */
(self.webpackJsonp = self.webpackJsonp || []).push([
  [ 9 ], {
    105 : function(t, e, n) {
      "use strict";
      n.d(e, "a", function() { return o });
      var i = n(4);
      function r() {
        var t = function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
              Object.defineProperties(t, {raw : {value : Object.freeze(e)}}))
        }([
          '.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;border-color:#000}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;border-color:#fff}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;width:68px;height:48px;margin:0;opacity:0;cursor:pointer;pointer-events:auto}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:32px;height:14px;border:1px solid;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{left:-18px;right:initial;display:flex;position:absolute;top:-17px;align-items:center;justify-content:center;width:48px;height:48px;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-18px}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-20px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(20px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::after{background-color:#9e9e9e}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:hover::before{opacity:.08}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-switch__thumb-underlay{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-switch__thumb-underlay::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before,.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-switch__thumb-underlay:hover::before{opacity:.04}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}:host{outline:none}'
        ]);
        return r = function() { return t }, t
      }
      var o = Object(i.c)(r())
    },
    121 : function(t, e) {
      var n, i, r, o;
      n = function() { return this }(), r = {}, o = {}, function(t, e) {
        function n() {
          this._delay = 0, this._endDelay = 0, this._fill = "none",
          this._iterationStart = 0, this._iterations = 1, this._duration = 0,
          this._playbackRate = 1, this._direction = "normal",
          this._easing = "linear", this._easingFunction = p
        }
        function i() {
          return t.isDeprecated("Invalid timing inputs", "2016-03-02",
                                "TypeError exceptions will be thrown instead.",
                                !0)
        }
        function r(e, i, r) {
          var o = new n;
          return i && (o.fill = "both", o.duration = "auto"),
                 "number" != typeof e || isNaN(e)
                     ? void 0 !== e &&
                           Object.getOwnPropertyNames(e).forEach(function(n) {
                             if ("auto" != e[n]) {
                               if (("number" == typeof o[n] ||
                                    "duration" == n) &&
                                   ("number" != typeof e[n] || isNaN(e[n])))
                                 return;
                               if ("fill" == n && -1 == u.indexOf(e[n]))
                                 return;
                               if ("direction" == n && -1 == d.indexOf(e[n]))
                                 return;
                               if ("playbackRate" == n && 1 !== e[n] &&
                                   t.isDeprecated(
                                       "AnimationEffectTiming.playbackRate",
                                       "2014-11-28",
                                       "Use Animation.playbackRate instead."))
                                 return;
                               o[n] = e[n]
                             }
                           })
                     : o.duration = e,
                       o
        }
        function o(t, e, n, i) {
          return t < 0 || t > 1 || n < 0 || n > 1 ? p : function(r) {
            function o(t, e, n) {
              return 3 * t * (1 - n) * (1 - n) * n + 3 * e * (1 - n) * n * n +
                     n * n * n
            }
            if (r <= 0) {
              var a = 0;
              return t > 0 ? a = e / t : !e && n > 0 && (a = i / n), a * r
            }
            if (r >= 1) {
              var s = 0;
              return n < 1 ? s = (i - 1) / (n - 1)
                           : 1 == n && t < 1 && (s = (e - 1) / (t - 1)),
                             1 + s * (r - 1)
            }
            for (var c = 0, l = 1; c < l;) {
              var u = (c + l) / 2, d = o(t, n, u);
              if (Math.abs(r - d) < 1e-5)
                return o(e, i, u);
              d < r ? c = u : l = u
            }
            return o(e, i, u)
          }
        }
        function a(t, e) {
          return function(n) {
            if (n >= 1)
              return 1;
            var i = 1 / t;
            return (n += e * i) - n % i
          }
        }
        function s(t) {
          y || (y = document.createElement("div").style),
              y.animationTimingFunction = "", y.animationTimingFunction = t;
          var e = y.animationTimingFunction;
          if ("" == e && i())
            throw new TypeError(t + " is not a valid value for easing");
          return e
        }
        function c(t) {
          if ("linear" == t)
            return p;
          var e = b.exec(t);
          if (e)
            return o.apply(this, e.slice(1).map(Number));
          var n = v.exec(t);
          return n ? a(Number(n[1]), {start : h, middle : f, end : m}[n[2]])
                   : g[t] || p
        }
        function l(t, e, n) {
          if (null == e)
            return w;
          var i = n.delay + t + n.endDelay;
          return e < Math.min(n.delay, i)
                     ? x
                     : e >= Math.min(n.delay + t, i) ? T : k
        }
        var u = "backwards|forwards|both|none".split("|"),
            d = "reverse|alternate|alternate-reverse".split("|"),
            p = function(t) { return t };
        n.prototype = {
          _setMember : function(e, n) {
            this["_" + e] = n,
                       this._effect &&
                           (this._effect._timingInput[e] = n,
                            this._effect._timing = t.normalizeTimingInput(
                                this._effect._timingInput),
                            this._effect.activeDuration =
                                t.calculateActiveDuration(this._effect._timing),
                            this._effect._animation &&
                                this._effect._animation
                                    ._rebuildUnderlyingAnimation())
          },
          get playbackRate() { return this._playbackRate },
          set delay(t) { this._setMember("delay", t) },
          get delay() { return this._delay },
          set endDelay(t) { this._setMember("endDelay", t) },
          get endDelay() { return this._endDelay },
          set fill(t) { this._setMember("fill", t) },
          get fill() { return this._fill },
          set iterationStart(t) {
            if ((isNaN(t) || t < 0) && i())
              throw new TypeError(
                  "iterationStart must be a non-negative number, received: " +
                  timing.iterationStart);
            this._setMember("iterationStart", t)
          },
          get iterationStart() { return this._iterationStart },
          set duration(t) {
            if ("auto" != t && (isNaN(t) || t < 0) && i())
              throw new TypeError(
                  "duration must be non-negative or auto, received: " + t);
            this._setMember("duration", t)
          },
          get duration() { return this._duration },
          set direction(t) { this._setMember("direction", t) },
          get direction() { return this._direction },
          set easing(t) {
            this._easingFunction = c(s(t)), this._setMember("easing", t)
          },
          get easing() { return this._easing },
          set iterations(t) {
            if ((isNaN(t) || t < 0) && i())
              throw new TypeError(
                  "iterations must be non-negative, received: " + t);
            this._setMember("iterations", t)
          },
          get iterations() { return this._iterations }
        };
        var h = 1, f = .5, m = 0, g = {
          ease : o(.25, .1, .25, 1),
          "ease-in" : o(.42, 0, 1, 1),
          "ease-out" : o(0, 0, .58, 1),
          "ease-in-out" : o(.42, 0, .58, 1),
          "step-start" : a(1, h),
          "step-middle" : a(1, f),
          "step-end" : a(1, m)
        },
            y = null, _ = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",
            b = new RegExp("cubic-bezier\\(" + _ + "," + _ + "," + _ + "," + _ +
                           "\\)"),
            v = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/, w = 0, x = 1,
            T = 2, k = 3;
        t.cloneTimingInput =
            function(t) {
          if ("number" == typeof t)
            return t;
          var e = {};
          for (var n in t)
            e[n] = t[n];
          return e
        },
        t.makeTiming = r,
        t.numericTimingToObject =
            function(t) {
          return "number" == typeof t &&
                     (t = isNaN(t) ? {duration : 0} : {duration : t}),
                 t
        },
        t.normalizeTimingInput = function(
            e, n) { return r(e = t.numericTimingToObject(e), n) },
        t.calculateActiveDuration =
            function(t) {
          return Math.abs(function(t) {
            return 0 === t.duration || 0 === t.iterations
                       ? 0
                       : t.duration * t.iterations
          }(t) / t.playbackRate)
        },
        t.calculateIterationProgress =
            function(t, e, n) {
          var i = l(t, e, n), r = function(t, e, n, i, r) {
            switch (i) {
            case x:
              return "backwards" == e || "both" == e ? 0 : null;
            case k:
              return n - r;
            case T:
              return "forwards" == e || "both" == e ? t : null;
            case w:
              return null
            }
          }(t, n.fill, e, i, n.delay);
          if (null === r)
            return null;
          var o =
                  function(t, e, n, i, r) {
            var o = r;
            return 0 === t ? e !== x && (o += n) : o += i / t, o
          }(n.duration, i, n.iterations, r, n.iterationStart),
              a =
                  function(t, e, n, i, r, o) {
                var a = t === 1 / 0 ? e % 1 : t % 1;
                return 0 !== a || n !== T || 0 === i || 0 === r && 0 !== o ||
                           (a = 1),
                       a
              }(o, n.iterationStart, i, n.iterations, r, n.duration),
              s = function(t, e, n, i) {
                return t === T && e === 1 / 0
                           ? 1 / 0
                           : 1 === n ? Math.floor(i) - 1 : Math.floor(i)
              }(i, n.iterations, a, o), c = function(t, e, n) {
                var i = t;
                if ("normal" !== t && "reverse" !== t) {
                  var r = e;
                  "alternate-reverse" === t && (r += 1),
                      i = "normal", r !== 1 / 0 && r % 2 != 0 && (i = "reverse")
                }
                return "normal" === i ? n : 1 - n
              }(n.direction, s, a);
          return n._easingFunction(c)
        },
        t.calculatePhase = l, t.normalizeEasing = s, t.parseEasingFunction = c
      }(i = {}), function(t, e) {
        function n(t, e) { return t in c && c[t][e] || e }
        function i(t, e, i) {
          if (!function(t) {
                return "display" === t || 0 === t.lastIndexOf("animation", 0) ||
                       0 === t.lastIndexOf("transition", 0)
              }(t)) {
            var r = o[t];
            if (r)
              for (var s in a.style[t] = e, r) {
                var c = r[s], l = a.style[c];
                i[c] = n(c, l)
              }
            else
              i[t] = n(t, e)
          }
        }
        function r(t) {
          var e = [];
          for (var n in t)
            if (!(n in ["easing", "offset", "composite"])) {
              var i = t[n];
              Array.isArray(i) || (i = [ i ]);
              for (var r, o = i.length, a = 0; a < o; a++)
                (r = {}).offset =
                    "offset" in t ? t.offset : 1 == o ? 1 : a / (o - 1),
                     "easing" in t && (r.easing = t.easing),
                     "composite" in t && (r.composite = t.composite),
                     r[n] = i[a], e.push(r)
            }
          return e.sort(function(t, e) { return t.offset - e.offset }), e
        }
        var o = {
          background : [
            "backgroundImage", "backgroundPosition", "backgroundSize",
            "backgroundRepeat", "backgroundAttachment", "backgroundOrigin",
            "backgroundClip", "backgroundColor"
          ],
          border : [
            "borderTopColor", "borderTopStyle", "borderTopWidth",
            "borderRightColor", "borderRightStyle", "borderRightWidth",
            "borderBottomColor", "borderBottomStyle", "borderBottomWidth",
            "borderLeftColor", "borderLeftStyle", "borderLeftWidth"
          ],
          borderBottom :
              [ "borderBottomWidth", "borderBottomStyle", "borderBottomColor" ],
          borderColor : [
            "borderTopColor", "borderRightColor", "borderBottomColor",
            "borderLeftColor"
          ],
          borderLeft :
              [ "borderLeftWidth", "borderLeftStyle", "borderLeftColor" ],
          borderRadius : [
            "borderTopLeftRadius", "borderTopRightRadius",
            "borderBottomRightRadius", "borderBottomLeftRadius"
          ],
          borderRight :
              [ "borderRightWidth", "borderRightStyle", "borderRightColor" ],
          borderTop : [ "borderTopWidth", "borderTopStyle", "borderTopColor" ],
          borderWidth : [
            "borderTopWidth", "borderRightWidth", "borderBottomWidth",
            "borderLeftWidth"
          ],
          flex : [ "flexGrow", "flexShrink", "flexBasis" ],
          font : [
            "fontFamily", "fontSize", "fontStyle", "fontVariant", "fontWeight",
            "lineHeight"
          ],
          margin : [ "marginTop", "marginRight", "marginBottom", "marginLeft" ],
          outline : [ "outlineColor", "outlineStyle", "outlineWidth" ],
          padding :
              [ "paddingTop", "paddingRight", "paddingBottom", "paddingLeft" ]
        },
            a = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
            s = {thin : "1px", medium : "3px", thick : "5px"}, c = {
              borderBottomWidth : s,
              borderLeftWidth : s,
              borderRightWidth : s,
              borderTopWidth : s,
              fontSize : {
                "xx-small" : "60%",
                "x-small" : "75%",
                small : "89%",
                medium : "100%",
                large : "120%",
                "x-large" : "150%",
                "xx-large" : "200%"
              },
              fontWeight : {normal : "400", bold : "700"},
              outlineWidth : s,
              textShadow : {none : "0px 0px 0px transparent"},
              boxShadow : {none : "0px 0px 0px 0px transparent"}
            };
        t.convertToArrayForm = r, t.normalizeKeyframes = function(e) {
          if (null == e)
            return [];
          window.Symbol && Symbol.iterator && Array.prototype.from &&
              e[Symbol.iterator] && (e = Array.from(e)),
              Array.isArray(e) || (e = r(e));
          for (var n = e.map(function(e) {
                 var n = {};
                 for (var r in e) {
                   var o = e[r];
                   if ("offset" == r) {
                     if (null != o) {
                       if (o = Number(o), !isFinite(o))
                         throw new TypeError(
                             "Keyframe offsets must be numbers.");
                       if (o < 0 || o > 1)
                         throw new TypeError(
                             "Keyframe offsets must be between 0 and 1.")
                     }
                   } else if ("composite" == r) {
                     if ("add" == o || "accumulate" == o)
                       throw {
                         type : DOMException.NOT_SUPPORTED_ERR,
                         name : "NotSupportedError",
                         message : "add compositing is not supported"
                       };
                     if ("replace" != o)
                       throw new TypeError("Invalid composite mode " + o + ".")
                   } else
                     o = "easing" == r ? t.normalizeEasing(o) : "" + o;
                   i(r, o, n)
                 }
                 return null == n.offset && (n.offset = null),
                        null == n.easing && (n.easing = "linear"), n
               }),
                   o = !0, a = -1 / 0, s = 0;
               s < n.length; s++) {
            var c = n[s].offset;
            if (null != c) {
              if (c < a)
                throw new TypeError(
                    "Keyframes are not loosely sorted by offset. Sort or specify offsets.");
              a = c
            } else
              o = !1
          }
          return n = n.filter(function(
                     t) { return t.offset >= 0 && t.offset <= 1 }),
                 o || function() {
                   var t = n.length;
                   null == n[t - 1].offset && (n[t - 1].offset = 1),
                       t > 1 && null == n[0].offset && (n[0].offset = 0);
                   for (var e = 0, i = n[0].offset, r = 1; r < t; r++) {
                     var o = n[r].offset;
                     if (null != o) {
                       for (var a = 1; a < r - e; a++)
                         n[e + a].offset = i + (o - i) * a / (r - e);
                       e = r, i = o
                     }
                   }
                 }(), n
        }
      }(i), function(t) {
        var e = {};
        t.isDeprecated = function(t, n, i, r) {
          var o = r ? "are" : "is", a = new Date, s = new Date(n);
          return s.setMonth(s.getMonth() + 3),
                 !(a < s &&
                   (t in e ||
                        console.warn("Web Animations: " + t + " " + o +
                                     " deprecated and will stop working on " +
                                     s.toDateString() + ". " + i),
                    e[t] = !0, 1))
        }, t.deprecated = function(e, n, i, r) {
          var o = r ? "are" : "is";
          if (t.isDeprecated(e, n, i, r))
            throw new Error(e + " " + o + " no longer supported. " + i)
        }
      }(i), function() {
        if (document.documentElement.animate) {
          var t = document.documentElement.animate([], 0), e = !0;
          if (t &&
                  (e = !1,
                   "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState"
                       .split("|")
                       .forEach(function(n) { void 0 === t[n] && (e = !0) })),
              !e)
            return
        }
        !function(t, e, n) {
          e.convertEffectInput = function(n) {
            var i = function(t) {
              for (var e = {}, n = 0; n < t.length; n++)
                for (var i in t[n])
                  if ("offset" != i && "easing" != i && "composite" != i) {
                    var r = {
                      offset : t[n].offset,
                      easing : t[n].easing,
                      value : t[n][i]
                    };
                    e[i] = e[i] || [], e[i].push(r)
                  }
              for (var o in e) {
                var a = e[o];
                if (0 != a[0].offset || 1 != a[a.length - 1].offset)
                  throw {
                    type: DOMException.NOT_SUPPORTED_ERR,
                        name: "NotSupportedError",
                        message: "Partial keyframes are not supported"
                  }
              }
              return e
            }(t.normalizeKeyframes(n)), r = function(n) {
              var i = [];
              for (var r in n)
                for (var o = n[r], a = 0; a < o.length - 1; a++) {
                  var s = a, c = a + 1, l = o[s].offset, u = o[c].offset, d = l,
                      p = u;
                  0 == a && (d = -1 / 0, 0 == u && (c = s)),
                      a == o.length - 2 && (p = 1 / 0, 1 == l && (s = c)),
                      i.push({
                        applyFrom : d,
                        applyTo : p,
                        startOffset : o[s].offset,
                        endOffset : o[c].offset,
                        easingFunction : t.parseEasingFunction(o[s].easing),
                        property : r,
                        interpolation :
                            e.propertyInterpolation(r, o[s].value, o[c].value)
                      })
                }
              return i.sort(function(
                         t, e) { return t.startOffset - e.startOffset }),
                     i
            }(i);
            return function(t, n) {
              if (null != n)
                r.filter(function(t) {
                   return n >= t.applyFrom && n < t.applyTo
                 }).forEach(function(i) {
                  var r = n - i.startOffset, o = i.endOffset - i.startOffset,
                      a = 0 == o ? 0 : i.easingFunction(r / o);
                  e.apply(t, i.property, i.interpolation(a))
                });
              else
                for (var o in i)
                  "offset" != o && "easing" != o && "composite" != o &&
                      e.clear(t, o)
            }
          }
        }(i, r),
            function(t, e, n) {
              function i(t) {
                return t.replace(/-(.)/g,
                                 function(t, e) { return e.toUpperCase() })
              }
              function r(t, e, n) { o[n] = o[n] || [], o[n].push([ t, e ]) }
              var o = {};
              e.addPropertiesHandler = function(t, e, n) {
                for (var o = 0; o < n.length; o++)
                  r(t, e, i(n[o]))
              };
              var a = {
                backgroundColor : "transparent",
                backgroundPosition : "0% 0%",
                borderBottomColor : "currentColor",
                borderBottomLeftRadius : "0px",
                borderBottomRightRadius : "0px",
                borderBottomWidth : "3px",
                borderLeftColor : "currentColor",
                borderLeftWidth : "3px",
                borderRightColor : "currentColor",
                borderRightWidth : "3px",
                borderSpacing : "2px",
                borderTopColor : "currentColor",
                borderTopLeftRadius : "0px",
                borderTopRightRadius : "0px",
                borderTopWidth : "3px",
                bottom : "auto",
                clip : "rect(0px, 0px, 0px, 0px)",
                color : "black",
                fontSize : "100%",
                fontWeight : "400",
                height : "auto",
                left : "auto",
                letterSpacing : "normal",
                lineHeight : "120%",
                marginBottom : "0px",
                marginLeft : "0px",
                marginRight : "0px",
                marginTop : "0px",
                maxHeight : "none",
                maxWidth : "none",
                minHeight : "0px",
                minWidth : "0px",
                opacity : "1.0",
                outlineColor : "invert",
                outlineOffset : "0px",
                outlineWidth : "3px",
                paddingBottom : "0px",
                paddingLeft : "0px",
                paddingRight : "0px",
                paddingTop : "0px",
                right : "auto",
                strokeDasharray : "none",
                strokeDashoffset : "0px",
                textIndent : "0px",
                textShadow : "0px 0px 0px transparent",
                top : "auto",
                transform : "",
                verticalAlign : "0px",
                visibility : "visible",
                width : "auto",
                wordSpacing : "normal",
                zIndex : "auto"
              };
              e.propertyInterpolation = function(n, r, s) {
                var c = n;
                /-/.test(n) &&
                    !t.isDeprecated("Hyphenated property names", "2016-03-22",
                                    "Use camelCase instead.", !0) &&
                    (c = i(n)),
                    "initial" != r && "initial" != s ||
                        ("initial" == r && (r = a[c]),
                         "initial" == s && (s = a[c]));
                for (var l = r == s ? [] : o[c], u = 0; l && u < l.length;
                     u++) {
                  var d = l[u][0](r), p = l[u][0](s);
                  if (void 0 !== d && void 0 !== p) {
                    var h = l[u][1](d, p);
                    if (h) {
                      var f = e.Interpolation.apply(null, h);
                      return function(
                          t) { return 0 == t ? r : 1 == t ? s : f(t) }
                    }
                  }
                }
                return e.Interpolation(!1, !0, function(t) { return t ? s : r })
              }
            }(i, r),
            function(t, e, n) {
              e.KeyframeEffect = function(n, i, r, o) {
                var a,
                    s =
                        function(e) {
                      var n = t.calculateActiveDuration(e), i = function(i) {
                        return t.calculateIterationProgress(n, i, e)
                      };
                      return i._totalDuration = e.delay + n + e.endDelay, i
                    }(t.normalizeTimingInput(r)),
                    c = e.convertEffectInput(i), l = function() { c(n, a) };
                return l._update = function(t) { return null !== (a = s(t)) },
                       l._clear = function() { c(n, null) },
                       l._hasSameTarget = function(t) { return n === t },
                       l._target = n, l._totalDuration = s._totalDuration,
                       l._id = o, l
              }
            }(i, r),
            function(t, e) {
              t.apply = function(e, n, i) { e.style[t.propertyName(n)] = i },
              t.clear = function(e, n) { e.style[t.propertyName(n)] = "" }
            }(r),
            function(t) {
              window.Element.prototype.animate = function(e, n) {
                var i = "";
                return n && n.id && (i = n.id),
                       t.timeline._play(t.KeyframeEffect(this, e, n, i))
              }
            }(r),
            r.Interpolation = function(t, e, n) {
              return function(i) {
                return n(function t(e, n, i) {
                  if ("number" == typeof e && "number" == typeof n)
                    return e * (1 - i) + n * i;
                  if ("boolean" == typeof e && "boolean" == typeof n)
                    return i < .5 ? e : n;
                  if (e.length == n.length) {
                    for (var r = [], o = 0; o < e.length; o++)
                      r.push(t(e[o], n[o], i));
                    return r
                  }
                  throw "Mismatched interpolation arguments " + e + ":" + n
                }(t, e, i))
              }
            }, function(t, e, n) {
              t.sequenceNumber = 0;
              var i = function(t, e, n) {
                this.target = t, this.currentTime = e, this.timelineTime = n,
                this.type = "finish", this.bubbles = !1, this.cancelable = !1,
                this.currentTarget = t, this.defaultPrevented = !1,
                this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now()
              };
              e.Animation = function(e) {
                this.id = "", e && e._id && (this.id = e._id),
                this._sequenceNumber = t.sequenceNumber++,
                this._currentTime = 0, this._startTime = null,
                this._paused = !1, this._playbackRate = 1,
                this._inTimeline = !0, this._finishedFlag = !0,
                this.onfinish = null, this._finishHandlers = [],
                this._effect = e, this._inEffect = this._effect._update(0),
                this._idle = !0, this._currentTimePending = !1
              }, e.Animation.prototype = {
                _ensureAlive : function() {
                  this.playbackRate < 0 && 0 === this.currentTime
                      ? this._inEffect = this._effect._update(-1)
                      : this._inEffect = this._effect._update(this.currentTime),
                        this._inTimeline ||
                            !this._inEffect && this._finishedFlag ||
                            (this._inTimeline = !0,
                             e.timeline._animations.push(this))
                },
                _tickCurrentTime : function(t, e) {
                  t != this._currentTime &&
                      (this._currentTime = t,
                       this._isFinished && !e &&
                           (this._currentTime = this._playbackRate > 0
                                                    ? this._totalDuration
                                                    : 0),
                       this._ensureAlive())
                },
                get currentTime() {
                  return this._idle || this._currentTimePending
                             ? null
                             : this._currentTime
                },
                set currentTime(t) {
                  t = +t,
                  isNaN(t) ||
                      (e.restart(),
                       this._paused || null == this._startTime ||
                           (this._startTime = this._timeline.currentTime -
                                              t / this._playbackRate),
                       this._currentTimePending = !1,
                       this._currentTime != t &&
                           (this._idle && (this._idle = !1, this._paused = !0),
                            this._tickCurrentTime(t, !0),
                            e.applyDirtiedAnimation(this)))
                },
                get startTime() { return this._startTime },
                set startTime(t) {
                  t = +t,
                  isNaN(t) || this._paused || this._idle ||
                      (this._startTime = t,
                       this._tickCurrentTime(
                           (this._timeline.currentTime - this._startTime) *
                           this.playbackRate),
                       e.applyDirtiedAnimation(this))
                },
                get playbackRate() { return this._playbackRate },
                set playbackRate(t) {
                  if (t != this._playbackRate) {
                    var n = this.currentTime;
                    this._playbackRate = t, this._startTime = null,
                    "paused" != this.playState && "idle" != this.playState &&
                        (this._finishedFlag = !1, this._idle = !1,
                         this._ensureAlive(), e.applyDirtiedAnimation(this)),
                    null != n && (this.currentTime = n)
                  }
                },
                get _isFinished() {
                  return !this._idle &&
                         (this._playbackRate > 0 &&
                              this._currentTime >= this._totalDuration ||
                          this._playbackRate < 0 && this._currentTime <= 0)
                },
                get _totalDuration() { return this._effect._totalDuration },
                get playState() {
                  return this._idle
                             ? "idle"
                             : null == this._startTime && !this._paused &&
                                           0 != this.playbackRate ||
                                       this._currentTimePending
                                   ? "pending"
                                   : this._paused
                                         ? "paused"
                                         : this._isFinished ? "finished"
                                                            : "running"
                },
                _rewind : function() {
                  if (this._playbackRate >= 0)
                    this._currentTime = 0;
                  else {
                    if (!(this._totalDuration < 1 / 0))
                      throw new DOMException(
                          "Unable to rewind negative playback rate animation with infinite duration",
                          "InvalidStateError");
                    this._currentTime = this._totalDuration
                  }
                },
                play : function() {
                  this._paused = !1,
                  (this._isFinished || this._idle) &&
                      (this._rewind(), this._startTime = null),
                  this._finishedFlag = !1, this._idle = !1, this._ensureAlive(),
                  e.applyDirtiedAnimation(this)
                },
                pause : function() {
                  this._isFinished || this._paused || this._idle
                      ? this._idle && (this._rewind(), this._idle = !1)
                      : this._currentTimePending = !0,
                        this._startTime = null, this._paused = !0
                },
                finish : function() {
                  this._idle ||
                      (this.currentTime =
                           this._playbackRate > 0 ? this._totalDuration : 0,
                       this._startTime = this._totalDuration - this.currentTime,
                       this._currentTimePending = !1,
                       e.applyDirtiedAnimation(this))
                },
                cancel : function() {
                  this._inEffect &&
                      (this._inEffect = !1, this._idle = !0, this._paused = !1,
                       this._isFinished = !0, this._finishedFlag = !0,
                       this._currentTime = 0, this._startTime = null,
                       this._effect._update(null),
                       e.applyDirtiedAnimation(this))
                },
                reverse : function() { this.playbackRate *= -1, this.play() },
                addEventListener : function(t, e) {
                  "function" == typeof e && "finish" == t &&
                      this._finishHandlers.push(e)
                },
                removeEventListener : function(t, e) {
                  if ("finish" == t) {
                    var n = this._finishHandlers.indexOf(e);
                    n >= 0 && this._finishHandlers.splice(n, 1)
                  }
                },
                _fireEvents : function(t) {
                  if (this._isFinished) {
                    if (!this._finishedFlag) {
                      var e = new i(this, this._currentTime, t),
                          n = this._finishHandlers.concat(
                              this.onfinish ? [ this.onfinish ] : []);
                      setTimeout(function() {
                        n.forEach(function(t) { t.call(e.target, e) })
                      }, 0), this._finishedFlag = !0
                    }
                  } else
                    this._finishedFlag = !1
                },
                _tick : function(t, e) {
                  this._idle || this._paused ||
                      (null == this._startTime
                           ? e && (this.startTime = t - this._currentTime /
                                                            this.playbackRate)
                           : this._isFinished ||
                                 this._tickCurrentTime((t - this._startTime) *
                                                       this.playbackRate)),
                      e && (this._currentTimePending = !1, this._fireEvents(t))
                },
                get _needsTick() {
                  return this.playState in {pending : 1, running : 1} ||
                         !this._finishedFlag
                },
                _targetAnimations : function() {
                  var t = this._effect._target;
                  return t._activeAnimations || (t._activeAnimations = []),
                         t._activeAnimations
                },
                _markTarget : function() {
                  var t = this._targetAnimations();
                  -1 === t.indexOf(this) && t.push(this)
                },
                _unmarkTarget : function() {
                  var t = this._targetAnimations(), e = t.indexOf(this);
                  -1 !== e && t.splice(e, 1)
                }
              }
            }(i, r), function(t, e, n) {
              function i(t) {
                var e = l;
                l = [], t < m.currentTime && (t = m.currentTime),
                m._animations.sort(r),
                m._animations = s(t, !0, m._animations)[0],
                e.forEach(function(e) { e[1](t) }), a()
              }
              function r(t, e) { return t._sequenceNumber - e._sequenceNumber }
              function o() {
                this._animations = [],
                this.currentTime = window.performance && performance.now
                                       ? performance.now()
                                       : 0
              }
              function a() {
                h.forEach(function(t) { t() }), h.length = 0
              }
              function s(t, n, i) {
                f = !0, p = !1, e.timeline.currentTime = t, d = !1;
                var r = [], o = [], a = [], s = [];
                return i.forEach(function(e) {
                  e._tick(t, n),
                      e._inEffect ? (o.push(e._effect), e._markTarget())
                                  : (r.push(e._effect), e._unmarkTarget()),
                      e._needsTick && (d = !0);
                  var i = e._inEffect || e._needsTick;
                  e._inTimeline = i, i ? a.push(e) : s.push(e)
                }),
                       h.push.apply(h, r), h.push.apply(h, o),
                       d && requestAnimationFrame(function() {}), f = !1,
                                                                  [ a, s ]
              }
              var c = window.requestAnimationFrame, l = [], u = 0;
              window.requestAnimationFrame = function(t) {
                var e = u++;
                return 0 == l.length && c(i), l.push([ e, t ]), e
              }, window.cancelAnimationFrame = function(t) {
                l.forEach(function(e) { e[0] == t && (e[1] = function() {}) })
              }, o.prototype = {
                _play : function(n) {
                  n._timing = t.normalizeTimingInput(n.timing);
                  var i = new e.Animation(n);
                  return i._idle = !1, i._timeline = this,
                         this._animations.push(i), e.restart(),
                         e.applyDirtiedAnimation(i), i
                }
              };
              var d = !1, p = !1;
              e.restart = function() {
                return d || (d = !0, requestAnimationFrame(function() {}),
                             p = !0),
                       p
              }, e.applyDirtiedAnimation = function(t) {
                if (!f) {
                  t._markTarget();
                  var n = t._targetAnimations();
                  n.sort(r),
                      s(e.timeline.currentTime, !1, n.slice())[1].forEach(
                          function(t) {
                            var e = m._animations.indexOf(t);
                            -1 !== e && m._animations.splice(e, 1)
                          }),
                      a()
                }
              };
              var h = [], f = !1, m = new o;
              e.timeline = m
            }(i, r), function(t) {
              function e(t, e) {
                var n = t.exec(e);
                if (n)
                  return [
                    n = t.ignoreCase ? n[0].toLowerCase() : n[0],
                    e.substr(n.length)
                  ]
              }
              function n(t, e) {
                var n = t(e = e.replace(/^\s*/, ""));
                if (n)
                  return [ n[0], n[1].replace(/^\s*/, "") ]
              }
              function i(t, e, n, i, r) {
                for (var o = [], a = [], s = [], c = function(t, e) {
                       for (var n = t, i = e; n && i;)
                         n > i ? n %= i : i %= n;
                       return t * e / (n + i)
                     }(i.length, r.length), l = 0; l < c; l++) {
                  var u = e(i[l % i.length], r[l % r.length]);
                  if (!u)
                    return;
                  o.push(u[0]), a.push(u[1]), s.push(u[2])
                }
                return [
                  o, a,
                  function(e) {
                    var i = e.map(function(t, e) { return s[e](t) }).join(n);
                    return t ? t(i) : i
                  }
                ]
              }
              t.consumeToken = e, t.consumeTrimmed = n,
              t.consumeRepeated =
                  function(t, i, r) {
                t = n.bind(null, t);
                for (var o = [];;) {
                  var a = t(r);
                  if (!a)
                    return [ o, r ];
                  if (o.push(a[0]), !(a = e(i, r = a[1])) || "" == a[1])
                    return [ o, r ];
                  r = a[1]
                }
              },
              t.consumeParenthesised =
                  function(t, e) {
                for (var n = 0, i = 0;
                     i < e.length && (!/\s|,/.test(e[i]) || 0 != n); i++)
                  if ("(" == e[i])
                    n++;
                  else if (")" == e[i] && (0 == --n && i++, n <= 0))
                    break;
                var r = t(e.substr(0, i));
                return null == r ? void 0 : [ r, e.substr(i) ]
              },
              t.ignore =
                  function(t) {
                return function(e) {
                  var n = t(e);
                  return n && (n[0] = void 0), n
                }
              },
              t.optional = function(
                  t, e) { return function(n) {
                            return t(n) || [ e, n ]
                          } },
              t.consumeList =
                  function(e, n) {
                for (var i = [], r = 0; r < e.length; r++) {
                  var o = t.consumeTrimmed(e[r], n);
                  if (!o || "" == o[0])
                    return;
                  void 0 !== o[0] && i.push(o[0]), n = o[1]
                }
                if ("" == n)
                  return i
              },
              t.mergeNestedRepeated = i.bind(null, null),
              t.mergeWrappedNestedRepeated = i,
              t.mergeList = function(t, e, n) {
                for (var i = [], r = [], o = [], a = 0, s = 0; s < n.length;
                     s++)
                  if ("function" == typeof n[s]) {
                    var c = n[s](t[a], e[a++]);
                    i.push(c[0]), r.push(c[1]), o.push(c[2])
                  } else
                    !function(t) {
                      i.push(!1), r.push(!1), o.push(function() { return n[t] })
                    }(s);
                return [
                  i, r,
                  function(t) {
                    for (var e = "", n = 0; n < t.length; n++)
                      e += o[n](t[n]);
                    return e
                  }
                ]
              }
            }(r), function(t) {
              function e(e) {
                var n = {inset : !1, lengths : [], color : null},
                    i = t.consumeRepeated(function(e) {
                      var i;
                      return (i = t.consumeToken(/^inset/i, e))
                                 ? (n.inset = !0, i)
                                 : (i = t.consumeLengthOrPercent(e))
                                       ? (n.lengths.push(i[0]), i)
                                       : (i = t.consumeColor(e))
                                             ? (n.color = i[0], i)
                                             : void 0
                    }, /^/, e);
                if (i && i[0].length)
                  return [ n, i[1] ]
              }
              var n = function(e, n, i, r) {
                function o(t) {
                  return {
                    inset: t, color: [ 0, 0, 0, 0 ],
                        lengths: [ {px : 0}, {px : 0}, {px : 0}, {px : 0} ]
                  }
                }
                for (var a = [], s = [], c = 0; c < i.length || c < r.length;
                     c++) {
                  var l = i[c] || o(r[c].inset), u = r[c] || o(i[c].inset);
                  a.push(l), s.push(u)
                }
                return t.mergeNestedRepeated(e, n, a, s)
              }.bind(null, function(e, n) {
                for (; e.lengths.length <
                       Math.max(e.lengths.length, n.lengths.length);)
                  e.lengths.push({px : 0});
                for (; n.lengths.length <
                       Math.max(e.lengths.length, n.lengths.length);)
                  n.lengths.push({px : 0});
                if (e.inset == n.inset && !!e.color == !!n.color) {
                  for (var i, r = [], o = [ [], 0 ], a = [ [], 0 ], s = 0;
                       s < e.lengths.length; s++) {
                    var c =
                        t.mergeDimensions(e.lengths[s], n.lengths[s], 2 == s);
                    o[0].push(c[0]), a[0].push(c[1]), r.push(c[2])
                  }
                  if (e.color && n.color) {
                    var l = t.mergeColors(e.color, n.color);
                    o[1] = l[0], a[1] = l[1], i = l[2]
                  }
                  return [
                    o, a,
                    function(t) {
                      for (var n = e.inset ? "inset " : " ", o = 0;
                           o < r.length; o++)
                        n += r[o](t[0][o]) + " ";
                      return i && (n += i(t[1])), n
                    }
                  ]
                }
              }, ", ");
              t.addPropertiesHandler(function(n) {
                var i = t.consumeRepeated(e, /^,/, n);
                if (i && "" == i[1])
                  return i[0]
              }, n, [ "box-shadow", "text-shadow" ])
            }(r), function(t, e) {
              function n(t) {
                return t.toFixed(3).replace(/0+$/, "").replace(/\.$/, "")
              }
              function i(t, e, n) { return Math.min(e, Math.max(t, n)) }
              function r(t) {
                if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(t))
                  return Number(t)
              }
              function o(t, e) {
                return function(r, o) {
                  return [ r, o, function(r) { return n(i(t, e, r)) } ]
                }
              }
              function a(t) {
                var e = t.trim().split(/\s*[\s,]\s*/);
                if (0 !== e.length) {
                  for (var n = [], i = 0; i < e.length; i++) {
                    var o = r(e[i]);
                    if (void 0 === o)
                      return;
                    n.push(o)
                  }
                  return n
                }
              }
              t.clamp = i,
              t.addPropertiesHandler(
                  a,
                  function(t, e) {
                    if (t.length == e.length)
                      return [ t, e, function(t) { return t.map(n).join(" ") } ]
                  },
                  [ "stroke-dasharray" ]),
              t.addPropertiesHandler(r, o(0, 1 / 0),
                                     [ "border-image-width", "line-height" ]),
              t.addPropertiesHandler(r, o(0, 1),
                                     [ "opacity", "shape-image-threshold" ]),
              t.addPropertiesHandler(r,
                                     function(t, e) {
                                       if (0 != t)
                                         return o(0, 1 / 0)(t, e)
                                     },
                                     [ "flex-grow", "flex-shrink" ]),
              t.addPropertiesHandler(
                  r,
                  function(t, e) {
                    return [
                      t, e, function(t) { return Math.round(i(1, 1 / 0, t)) }
                    ]
                  },
                  [ "orphans", "widows" ]),
              t.addPropertiesHandler(r,
                                     function(t, e) {
                                       return [ t, e, Math.round ]
                                     },
                                     [ "z-index" ]),
              t.parseNumber = r, t.parseNumberList = a,
              t.mergeNumbers = function(t, e) {
                return [ t, e, n ]
              }, t.numberToString = n
            }(r), r.addPropertiesHandler(String, function(t, e) {
              if ("visible" == t || "visible" == e)
                return [
                  0, 1,
                  function(n) { return n <= 0 ? t : n >= 1 ? e : "visible" }
                ]
            }, [ "visibility" ]), function(t, e) {
              function n(t) {
                t = t.trim(), o.fillStyle = "#000", o.fillStyle = t;
                var e = o.fillStyle;
                if (o.fillStyle = "#fff", o.fillStyle = t, e == o.fillStyle) {
                  o.fillRect(0, 0, 1, 1);
                  var n = o.getImageData(0, 0, 1, 1).data;
                  o.clearRect(0, 0, 1, 1);
                  var i = n[3] / 255;
                  return [ n[0] * i, n[1] * i, n[2] * i, i ]
                }
              }
              function i(e, n) {
                return [
                  e, n,
                  function(e) {
                    function n(t) { return Math.max(0, Math.min(255, t)) }
                    if (e[3])
                      for (var i = 0; i < 3; i++)
                        e[i] = Math.round(n(e[i] / e[3]));
                    return e[3] = t.numberToString(t.clamp(0, 1, e[3])),
                           "rgba(" + e.join(",") + ")"
                  }
                ]
              }
              var r = document.createElementNS("http://www.w3.org/1999/xhtml",
                                               "canvas");
              r.width = r.height = 1;
              var o = r.getContext("2d");
              t.addPropertiesHandler(
                  n, i,
                  [
                    "background-color", "border-bottom-color",
                    "border-left-color", "border-right-color",
                    "border-top-color", "color", "fill", "flood-color",
                    "lighting-color", "outline-color", "stop-color", "stroke",
                    "text-decoration-color"
                  ]),
                  t.consumeColor = t.consumeParenthesised.bind(null, n),
                  t.mergeColors = i
            }(r), function(t, e) {
              function n(t) {
                function e() {
                  var e = a.exec(t);
                  o = e ? e[0] : void 0
                }
                function n() {
                  if ("(" !== o)
                    return function() {
                      var t = Number(o);
                      return e(), t
                    }();
                  e();
                  var t = r();
                  return ")" !== o ? NaN : (e(), t)
                }
                function i() {
                  for (var t = n(); "*" === o || "/" === o;) {
                    var i = o;
                    e();
                    var r = n();
                    "*" === i ? t *= r : t /= r
                  }
                  return t
                }
                function r() {
                  for (var t = i(); "+" === o || "-" === o;) {
                    var n = o;
                    e();
                    var r = i();
                    "+" === n ? t += r : t -= r
                  }
                  return t
                }
                var o, a = /([\+\-\w\.]+|[\(\)\*\/])/g;
                return e(), r()
              }
              function i(t, e) {
                if ("0" == (e = e.trim().toLowerCase()) && "px".search(t) >= 0)
                  return {px : 0};
                if (/^[^(]*$|^calc/.test(e)) {
                  e = e.replace(/calc\(/g, "(");
                  var i = {};
                  e = e.replace(t, function(t) { return i[t] = null, "U" + t });
                  for (var r = "U(" + t.source + ")",
                           o = e.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g,
                                         "N")
                                   .replace(new RegExp("N" + r, "g"), "D")
                                   .replace(/\s[+-]\s/g, "O")
                                   .replace(/\s/g, ""),
                           a =
                               [
                                 /N\*(D)/g, /(N|D)[*\/]N/g, /(N|D)O\1/g,
                                 /\((N|D)\)/g
                               ],
                           s = 0;
                       s < a.length;)
                    a[s].test(o) ? (o = o.replace(a[s], "$1"), s = 0) : s++;
                  if ("D" == o) {
                    for (var c in i) {
                      var l = n(e.replace(new RegExp("U" + c, "g"), "")
                                    .replace(new RegExp(r, "g"), "*0"));
                      if (!isFinite(l))
                        return;
                      i[c] = l
                    }
                    return i
                  }
                }
              }
              function r(t, e) { return o(t, e, !0) }
              function o(e, n, i) {
                var r, o = [];
                for (r in e)
                  o.push(r);
                for (r in n)
                  o.indexOf(r) < 0 && o.push(r);
                return e = o.map(function(t) { return e[t] || 0 }),
                       n = o.map(function(t) { return n[t] || 0 }), [
                         e, n,
                         function(e) {
                           var n = e.map(function(n, r) {
                                      return 1 == e.length && i &&
                                                 (n = Math.max(n, 0)),
                                             t.numberToString(n) + o[r]
                                    }).join(" + ");
                           return e.length > 1 ? "calc(" + n + ")" : n
                         }
                       ]
              }
              var a = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",
                  s = i.bind(null, new RegExp(a, "g")),
                  c = i.bind(null, new RegExp(a + "|%", "g")),
                  l = i.bind(null, /deg|rad|grad|turn/g);
              t.parseLength = s, t.parseLengthOrPercent = c,
              t.consumeLengthOrPercent = t.consumeParenthesised.bind(null, c),
              t.parseAngle = l, t.mergeDimensions = o;
              var u = t.consumeParenthesised.bind(null, s),
                  d = t.consumeRepeated.bind(void 0, u, /^/),
                  p = t.consumeRepeated.bind(void 0, d, /^,/);
              t.consumeSizePairList = p;
              var h = t.mergeNestedRepeated.bind(void 0, r, " "),
                  f = t.mergeNestedRepeated.bind(void 0, h, ",");
              t.mergeNonNegativeSizePair = h,
              t.addPropertiesHandler(
                  function(t) {
                    var e = p(t);
                    if (e && "" == e[1])
                      return e[0]
                  },
                  f, [ "background-size" ]),
              t.addPropertiesHandler(
                  c, r,
                  [
                    "border-bottom-width", "border-image-width",
                    "border-left-width", "border-right-width",
                    "border-top-width", "flex-basis", "font-size", "height",
                    "line-height", "max-height", "max-width", "outline-width",
                    "width"
                  ]),
              t.addPropertiesHandler(c, o, [
                "border-bottom-left-radius",
                "border-bottom-right-radius",
                "border-top-left-radius",
                "border-top-right-radius",
                "bottom",
                "left",
                "letter-spacing",
                "margin-bottom",
                "margin-left",
                "margin-right",
                "margin-top",
                "min-height",
                "min-width",
                "outline-offset",
                "padding-bottom",
                "padding-left",
                "padding-right",
                "padding-top",
                "perspective",
                "right",
                "shape-margin",
                "stroke-dashoffset",
                "text-indent",
                "top",
                "vertical-align",
                "word-spacing"
              ])
            }(r), function(t, e) {
              function n(e) {
                return t.consumeLengthOrPercent(e) || t.consumeToken(/^auto/, e)
              }
              function i(e) {
                var i = t.consumeList(
                    [
                      t.ignore(t.consumeToken.bind(null, /^rect/)),
                      t.ignore(t.consumeToken.bind(null, /^\(/)),
                      t.consumeRepeated.bind(null, n, /^,/),
                      t.ignore(t.consumeToken.bind(null, /^\)/))
                    ],
                    e);
                if (i && 4 == i[0].length)
                  return i[0]
              }
              var r = t.mergeWrappedNestedRepeated.bind(
                  null, function(t) { return "rect(" + t + ")" },
                  function(e, n) {
                    return"auto"==e||"auto"==n?[!0,!1,function(i){var r=i?e:n;if("auto"==r)return"auto";var o=t.mergeDimensions(r,r);return o[2](o[0])}]:t.mergeDimensions(e,n)
                  },
                  ", ");
              t.parseBox = i, t.mergeBoxes = r,
              t.addPropertiesHandler(i, r, [ "clip" ])
            }(r), function(t, e) {
              function n(t) {
                return function(e) {
                  var n = 0;
                  return t.map(function(t) { return t === l ? e[n++] : t })
                }
              }
              function i(t) { return t }
              function r(e) {
                if ("none" == (e = e.toLowerCase().trim()))
                  return [];
                for (var n, i = /\s*(\w+)\(([^)]*)\)/g, r = [], o = 0;
                     n = i.exec(e);) {
                  if (n.index != o)
                    return;
                  o = n.index + n[0].length;
                  var a = n[1], s = p[a];
                  if (!s)
                    return;
                  var c = n[2].split(","), l = s[0];
                  if (l.length < c.length)
                    return;
                  for (var h = [], f = 0; f < l.length; f++) {
                    var m, g = c[f], y = l[f];
                    if (void 0 === (m = g ? {
                          A : function(e) {
                            return "0" == e.trim() ? d : t.parseAngle(e)
                          },
                          N : t.parseNumber,
                          T : t.parseLengthOrPercent,
                          L : t.parseLength
                        }[y.toUpperCase()](g)
                                          : {a : d, n : h[0], t : u}[y]))
                      return;
                    h.push(m)
                  }
                  if (r.push({t : a, d : h}), i.lastIndex == e.length)
                    return r
                }
              }
              function o(t) { return t.toFixed(6).replace(".000000", "") }
              function a(e, n) {
                if (e.decompositionPair !== n) {
                  e.decompositionPair = n;
                  var i = t.makeMatrixDecomposition(e)
                }
                if (n.decompositionPair !== e) {
                  n.decompositionPair = e;
                  var r = t.makeMatrixDecomposition(n)
                }
                return null==i[0]||null==r[0]?[[!1],[!0],function(t){return t?n[0].d:e[0].d}]:(i[0].push(0),r[0].push(1),[i,r,function(e){var n=t.quat(i[0][3],r[0][3],e[5]);return t.composeMatrix(e[0],e[1],e[2],n,e[4]).map(o).join(",")}])
              }
              function s(t) { return t.replace(/[xy]/, "") }
              function c(t) { return t.replace(/(x|y|z|3d)?$/, "3d") }
              var l = null, u = {px : 0}, d = {deg : 0}, p = {
                matrix : [
                  "NNNNNN", [ l, l, 0, 0, l, l, 0, 0, 0, 0, 1, 0, l, l, 0, 1 ],
                  i
                ],
                matrix3d : [ "NNNNNNNNNNNNNNNN", i ],
                rotate : [ "A" ],
                rotatex : [ "A" ],
                rotatey : [ "A" ],
                rotatez : [ "A" ],
                rotate3d : [ "NNNA" ],
                perspective : [ "L" ],
                scale : [ "Nn", n([ l, l, 1 ]), i ],
                scalex : [ "N", n([ l, 1, 1 ]), n([ l, 1 ]) ],
                scaley : [ "N", n([ 1, l, 1 ]), n([ 1, l ]) ],
                scalez : [ "N", n([ 1, 1, l ]) ],
                scale3d : [ "NNN", i ],
                skew : [ "Aa", null, i ],
                skewx : [ "A", null, n([ l, d ]) ],
                skewy : [ "A", null, n([ d, l ]) ],
                translate : [ "Tt", n([ l, l, u ]), i ],
                translatex : [ "T", n([ l, u, u ]), n([ l, u ]) ],
                translatey : [ "T", n([ u, l, u ]), n([ u, l ]) ],
                translatez : [ "L", n([ u, u, l ]) ],
                translate3d : [ "TTL", i ]
              };
              t.addPropertiesHandler(r, function(e, n) {
                var i = t.makeMatrixDecomposition && !0, r = !1;
                if (!e.length || !n.length) {
                  e.length || (r = !0, e = n, n = []);
                  for (var o = 0; o < e.length; o++) {
                    var l = e[o].t, u = e[o].d,
                        d = "scale" == l.substr(0, 5) ? 1 : 0;
                    n.push({
                      t : l,
                      d : u.map(function(t) {
                        if ("number" == typeof t)
                          return d;
                        var e = {};
                        for (var n in t)
                          e[n] = d;
                        return e
                      })
                    })
                  }
                }
                var h = function(t, e) {
                  return "perspective" == t && "perspective" == e ||
                         ("matrix" == t || "matrix3d" == t) &&
                             ("matrix" == e || "matrix3d" == e)
                }, f = [], m = [], g = [];
                if (e.length != n.length) {
                  if (!i)
                    return;
                  f = [ (T = a(e, n))[0] ], m = [ T[1] ],
                  g = [ [ "matrix", [ T[2] ] ] ]
                } else
                  for (o = 0; o < e.length; o++) {
                    var y = e[o].t, _ = n[o].t, b = e[o].d, v = n[o].d,
                        w = p[y], x = p[_];
                    if (h(y, _)) {
                      if (!i)
                        return;
                      var T = a([ e[o] ], [ n[o] ]);
                      f.push(T[0]), m.push(T[1]), g.push([ "matrix", [ T[2] ] ])
                    } else {
                      if (y == _)
                        l = y;
                      else if (w[2] && x[2] && s(y) == s(_))
                        l = s(y), b = w[2](b), v = x[2](v);
                      else {
                        if (!w[1] || !x[1] || c(y) != c(_)) {
                          if (!i)
                            return;
                          f = [ (T = a(e, n))[0] ], m = [ T[1] ],
                          g = [ [ "matrix", [ T[2] ] ] ];
                          break
                        }
                        l = c(y), b = w[1](b), v = x[1](v)
                      }
                      for (var k = [], E = [], A = [], O = 0; O < b.length; O++)
                        T = ("number" == typeof b[O]
                                 ? t.mergeNumbers
                                 : t.mergeDimensions)(b[O], v[O]),
                        k[O] = T[0], E[O] = T[1], A.push(T[2]);
                      f.push(k), m.push(E), g.push([ l, A ])
                    }
                  }
                if (r) {
                  var P = f;
                  f = m, m = P
                }
                return [
                  f, m,
                  function(t) {
                    return t
                        .map(function(t, e) {
                          var n = t.map(function(t, n) { return g[e][1][n](t) })
                                      .join(",");
                          return "matrix" == g[e][0] &&
                                     16 == n.split(",").length &&
                                     (g[e][0] = "matrix3d"),
                                 g[e][0] + "(" + n + ")"
                        })
                        .join(" ")
                  }
                ]
              }, [ "transform" ]), t.transformToSvgMatrix = function(e) {
                var n = t.transformListToMatrix(r(e));
                return "matrix(" + o(n[0]) + " " + o(n[1]) + " " + o(n[4]) +
                       " " + o(n[5]) + " " + o(n[12]) + " " + o(n[13]) + ")"
              }
            }(r), function(t, e) {
              function n(t, e) {
                e.concat([ t ]).forEach(function(e) {
                  e in document.documentElement.style && (i[t] = e), r[e] = t
                })
              }
              var i = {}, r = {};
              n("transform", [ "webkitTransform", "msTransform" ]),
                  n("transformOrigin", [ "webkitTransformOrigin" ]),
                  n("perspective", [ "webkitPerspective" ]),
                  n("perspectiveOrigin", [ "webkitPerspectiveOrigin" ]),
                  t.propertyName = function(t) { return i[t] || t },
                  t.unprefixedPropertyName = function(t) { return r[t] || t }
            }(r)
      }(), function() {
        if (void 0 === document.createElement("div").animate([]).oncancel) {
          if (window.performance && performance.now)
            var t = function() { return performance.now() };
          else
            t = function() { return Date.now() };
          var e = function(t, e, n) {
            this.target = t, this.currentTime = e, this.timelineTime = n,
            this.type = "cancel", this.bubbles = !1, this.cancelable = !1,
            this.currentTarget = t, this.defaultPrevented = !1,
            this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now()
          }, n = window.Element.prototype.animate;
          window.Element.prototype.animate = function(i, r) {
            var o = n.call(this, i, r);
            o._cancelHandlers = [], o.oncancel = null;
            var a = o.cancel;
            o.cancel = function() {
              a.call(this);
              var n = new e(this, null, t()),
                  i = this._cancelHandlers.concat(
                      this.oncancel ? [ this.oncancel ] : []);
              setTimeout(
                  function() { i.forEach(function(t) { t.call(n.target, n) }) },
                  0)
            };
            var s = o.addEventListener;
            o.addEventListener = function(t, e) {
              "function" == typeof e && "cancel" == t
                  ? this._cancelHandlers.push(e)
                  : s.call(this, t, e)
            };
            var c = o.removeEventListener;
            return o.removeEventListener = function(t, e) {
              if ("cancel" == t) {
                var n = this._cancelHandlers.indexOf(e);
                n >= 0 && this._cancelHandlers.splice(n, 1)
              } else
                c.call(this, t, e)
            }, o
          }
        }
      }(), function(t) {
        var e = document.documentElement, n = null, i = !1;
        try {
          var r = "0" == getComputedStyle(e).getPropertyValue("opacity") ? "1"
                                                                         : "0";
          (n = e.animate({opacity : [ r, r ]}, {
            duration : 1
          })).currentTime = 0,
         i = getComputedStyle(e).getPropertyValue("opacity") == r
        } catch (t) {
        } finally {
          n && n.cancel()
        }
        if (!i) {
          var o = window.Element.prototype.animate;
          window.Element.prototype.animate = function(e, n) {
            return window.Symbol && Symbol.iterator && Array.prototype.from &&
                       e[Symbol.iterator] && (e = Array.from(e)),
                   Array.isArray(e) || null === e ||
                       (e = t.convertToArrayForm(e)),
                   o.call(this, e, n)
          }
        }
      }(i), function(t, e, n) {
        function i(t) {
          var n = e.timeline;
          n.currentTime = t, n._discardAnimations(),
          0 == n._animations.length ? o = !1 : requestAnimationFrame(i)
        }
        var r = window.requestAnimationFrame;
        window.requestAnimationFrame = function(t) {
          return r(function(n) {
            e.timeline._updateAnimationsPromises(), t(n),
                e.timeline._updateAnimationsPromises()
          })
        }, e.AnimationTimeline = function() {
          this._animations = [], this.currentTime = void 0
        }, e.AnimationTimeline.prototype = {
          getAnimations : function() {
            return this._discardAnimations(), this._animations.slice()
          },
          _updateAnimationsPromises : function() {
            e.animationsWithPromises = e.animationsWithPromises.filter(function(
                t) { return t._updatePromises() })
          },
          _discardAnimations : function() {
            this._updateAnimationsPromises(),
                this._animations = this._animations.filter(function(t) {
                  return "finished" != t.playState && "idle" != t.playState
                })
          },
          _play : function(t) {
            var n = new e.Animation(t, this);
            return this._animations.push(n), e.restartWebAnimationsNextTick(),
                   n._updatePromises(), n._animation.play(),
                   n._updatePromises(), n
          },
          play : function(t) { return t && t.remove(), this._play(t) }
        };
        var o = !1;
        e.restartWebAnimationsNextTick =
            function() { o || (o = !0, requestAnimationFrame(i)) };
        var a = new e.AnimationTimeline;
        e.timeline = a;
        try {
          Object.defineProperty(
              window.document, "timeline",
              {configurable : !0, get : function() { return a }})
        } catch (t) {
        }
        try {
          window.document.timeline = a
        } catch (t) {
        }
      }(0, o), function(t, e, n) {
        e.animationsWithPromises = [],
        e.Animation =
            function(e, n) {
          if (this.id = "", e && e._id && (this.id = e._id), this.effect = e,
              e && (e._animation = this), !n)
            throw new Error("Animation with null timeline is not supported");
          this._timeline = n, this._sequenceNumber = t.sequenceNumber++,
          this._holdTime = 0, this._paused = !1, this._isGroup = !1,
          this._animation = null, this._childAnimations = [],
          this._callback = null, this._oldPlayState = "idle",
          this._rebuildUnderlyingAnimation(), this._animation.cancel(),
          this._updatePromises()
        },
        e.Animation.prototype = {
          _updatePromises : function() {
            var t = this._oldPlayState, e = this.playState;
            return this._readyPromise && e !== t &&
                       ("idle" == e ? (this._rejectReadyPromise(),
                                       this._readyPromise = void 0)
                                    : "pending" == t
                                          ? this._resolveReadyPromise()
                                          : "pending" == e &&
                                                (this._readyPromise = void 0)),
                   this._finishedPromise && e !== t &&
                       ("idle" == e
                            ? (this._rejectFinishedPromise(),
                               this._finishedPromise = void 0)
                            : "finished" == e
                                  ? this._resolveFinishedPromise()
                                  : "finished" == t &&
                                        (this._finishedPromise = void 0)),
                   this._oldPlayState = this.playState,
                   this._readyPromise || this._finishedPromise
          },
          _rebuildUnderlyingAnimation : function() {
            this._updatePromises();
            var t, n, i, r, o = !!this._animation;
            o && (t = this.playbackRate, n = this._paused, i = this.startTime,
                  r = this.currentTime, this._animation.cancel(),
                  this._animation._wrapper = null, this._animation = null),
                (!this.effect || this.effect instanceof
                                     window.KeyframeEffect) &&
                    (this._animation =
                         e.newUnderlyingAnimationForKeyframeEffect(this.effect),
                     e.bindAnimationForKeyframeEffect(this)),
                (this.effect instanceof window.SequenceEffect ||
                 this.effect instanceof window.GroupEffect) &&
                    (this._animation =
                         e.newUnderlyingAnimationForGroup(this.effect),
                     e.bindAnimationForGroup(this)),
                this.effect && this.effect._onsample &&
                    e.bindAnimationForCustomEffect(this),
                o && (1 != t && (this.playbackRate = t),
                      null !== i ? this.startTime = i
                                 : null !== r ? this.currentTime = r
                                              : null !== this._holdTime &&
                                                    (this.currentTime =
                                                         this._holdTime),
                      n && this.pause()),
                this._updatePromises()
          },
          _updateChildren : function() {
            if (this.effect && "idle" != this.playState) {
              var t = this.effect._timing.delay;
              this._childAnimations.forEach(function(n) {
                this._arrangeChildren(n, t),
                    this.effect instanceof window.SequenceEffect &&
                        (t += e.groupChildDuration(n.effect))
              }.bind(this))
            }
          },
          _setExternalAnimation : function(t) {
            if (this.effect && this._isGroup)
              for (var e = 0; e < this.effect.children.length; e++)
                this.effect.children[e]._animation = t,
                this._childAnimations[e]._setExternalAnimation(t)
          },
          _constructChildAnimations : function() {
            if (this.effect && this._isGroup) {
              var t = this.effect._timing.delay;
              this._removeChildAnimations(),
                  this.effect.children.forEach(function(n) {
                    var i = e.timeline._play(n);
                    this._childAnimations.push(i),
                        i.playbackRate = this.playbackRate,
                        this._paused && i.pause(),
                        n._animation = this.effect._animation,
                        this._arrangeChildren(i, t),
                        this.effect instanceof window.SequenceEffect &&
                            (t += e.groupChildDuration(n))
                  }.bind(this))
            }
          },
          _arrangeChildren : function(t, e) {
            null === this.startTime
                ? t.currentTime = this.currentTime - e / this.playbackRate
                : t.startTime !== this.startTime + e / this.playbackRate &&
                      (t.startTime = this.startTime + e / this.playbackRate)
          },
          get timeline() { return this._timeline },
          get playState() {
            return this._animation ? this._animation.playState : "idle"
          },
          get finished() {
            return window.Promise
                       ? (this._finishedPromise ||
                              (-1 == e.animationsWithPromises.indexOf(this) &&
                                   e.animationsWithPromises.push(this),
                               this._finishedPromise =
                                   new Promise(function(t, e) {
                                     this._resolveFinishedPromise =
                                         function() { t(this) },
                                     this._rejectFinishedPromise = function() {
                                       e({
                                         type : DOMException.ABORT_ERR,
                                         name : "AbortError"
                                       })
                                     }
                                   }.bind(this)),
                               "finished" == this.playState &&
                                   this._resolveFinishedPromise()),
                          this._finishedPromise)
                       : (console.warn(
                              "Animation Promises require JavaScript Promise constructor"),
                          null)
          },
          get ready() {
            return window.Promise
                       ? (this._readyPromise ||
                              (-1 == e.animationsWithPromises.indexOf(this) &&
                                   e.animationsWithPromises.push(this),
                               this._readyPromise = new Promise(function(t, e) {
                                 this._resolveReadyPromise =
                                     function() { t(this) },
                                 this._rejectReadyPromise = function() {
                                   e({
                                     type : DOMException.ABORT_ERR,
                                     name : "AbortError"
                                   })
                                 }
                               }.bind(this)),
                               "pending" !== this.playState &&
                                   this._resolveReadyPromise()),
                          this._readyPromise)
                       : (console.warn(
                              "Animation Promises require JavaScript Promise constructor"),
                          null)
          },
          get onfinish() { return this._animation.onfinish },
          set onfinish(t) {
            this._animation.onfinish =
                "function" == typeof t
                    ? function(e) { e.target = this, t.call(this, e) }.bind(
                          this)
                    : t
          },
          get oncancel() { return this._animation.oncancel },
          set oncancel(t) {
            this._animation.oncancel =
                "function" == typeof t
                    ? function(e) { e.target = this, t.call(this, e) }.bind(
                          this)
                    : t
          },
          get currentTime() {
            this._updatePromises();
            var t = this._animation.currentTime;
            return this._updatePromises(), t
          },
          set currentTime(t) {
            this._updatePromises(),
                this._animation.currentTime =
                    isFinite(t) ? t : Math.sign(t) * Number.MAX_VALUE,
                this._register(),
                this._forEachChild(function(e, n) { e.currentTime = t - n }),
                this._updatePromises()
          },
          get startTime() { return this._animation.startTime },
          set startTime(t) {
            this._updatePromises(),
                this._animation.startTime =
                    isFinite(t) ? t : Math.sign(t) * Number.MAX_VALUE,
                this._register(),
                this._forEachChild(function(e, n) { e.startTime = t + n }),
                this._updatePromises()
          },
          get playbackRate() { return this._animation.playbackRate },
          set playbackRate(t) {
            this._updatePromises();
            var e = this.currentTime;
            this._animation.playbackRate = t,
            this._forEachChild(function(e) { e.playbackRate = t }),
            null !== e && (this.currentTime = e), this._updatePromises()
          },
          play : function() {
            this._updatePromises(),
                this._paused = !1, this._animation.play(),
                -1 == this._timeline._animations.indexOf(this) &&
                    this._timeline._animations.push(this),
                this._register(), e.awaitStartTime(this),
                this._forEachChild(function(t) {
                  var e = t.currentTime;
                  t.play(), t.currentTime = e
                }),
                this._updatePromises()
          },
          pause : function() {
            this._updatePromises(),
                this.currentTime && (this._holdTime = this.currentTime),
                this._animation.pause(), this._register(),
                this._forEachChild(function(t) { t.pause() }),
                this._paused = !0, this._updatePromises()
          },
          finish : function() {
            this._updatePromises(), this._animation.finish(), this._register(),
                this._updatePromises()
          },
          cancel : function() {
            this._updatePromises(), this._animation.cancel(), this._register(),
                this._removeChildAnimations(), this._updatePromises()
          },
          reverse : function() {
            this._updatePromises();
            var t = this.currentTime;
            this._animation.reverse(),
                this._forEachChild(function(t) { t.reverse() }),
                null !== t && (this.currentTime = t), this._updatePromises()
          },
          addEventListener : function(t, e) {
            var n = e;
            "function" == typeof e &&
                (n = function(t) { t.target = this, e.call(this, t) }.bind(
                     this),
                 e._wrapper = n),
                this._animation.addEventListener(t, n)
          },
          removeEventListener : function(t, e) {
            this._animation.removeEventListener(t, e && e._wrapper || e)
          },
          _removeChildAnimations : function() {
            for (; this._childAnimations.length;)
              this._childAnimations.pop().cancel()
          },
          _forEachChild : function(e) {
            var n = 0;
            if (this.effect.children &&
                    this._childAnimations.length <
                        this.effect.children.length &&
                    this._constructChildAnimations(),
                this._childAnimations.forEach(function(t) {
                  e.call(this, t, n),
                      this.effect instanceof window.SequenceEffect &&
                          (n += t.effect.activeDuration)
                }.bind(this)),
                "pending" != this.playState) {
              var i = this.effect._timing, r = this.currentTime;
              null !== r && (r = t.calculateIterationProgress(
                                 t.calculateActiveDuration(i), r, i)),
                  (null == r || isNaN(r)) && this._removeChildAnimations()
            }
          }
        },
        window.Animation = e.Animation
      }(i, o), function(t, e, n) {
        function i(e) { this._frames = t.normalizeKeyframes(e) }
        function r() {
          for (var t = !1; c.length;)
            c.shift()._updateChildren(), t = !0;
          return t
        }
        var o = function t(e) {
          if (e._animation = void 0, e instanceof window.SequenceEffect ||
                                         e instanceof window.GroupEffect)
            for (var n = 0; n < e.children.length; n++)
              t(e.children[n])
        };
        e.removeMulti = function(t) {
          for (var e = [], n = 0; n < t.length; n++) {
            var i = t[n];
            i._parent
                ? (-1 == e.indexOf(i._parent) && e.push(i._parent),
                   i._parent.children.splice(i._parent.children.indexOf(i), 1),
                   i._parent = null, o(i))
                : i._animation && i._animation.effect == i &&
                      (i._animation.cancel(),
                       i._animation.effect = new KeyframeEffect(null, []),
                       i._animation._callback &&
                           (i._animation._callback._animation = null),
                       i._animation._rebuildUnderlyingAnimation(), o(i))
          }
          for (n = 0; n < e.length; n++)
            e[n]._rebuild()
        }, e.KeyframeEffect = function(e, n, r, o) {
          return this.target = e, this._parent = null,
                 r = t.numericTimingToObject(r),
                 this._timingInput = t.cloneTimingInput(r),
                 this._timing = t.normalizeTimingInput(r),
                 this.timing = t.makeTiming(r, !1, this),
                 this.timing._effect = this,
                 "function" == typeof n
                     ? (t.deprecated("Custom KeyframeEffect", "2015-06-22",
                                     "Use KeyframeEffect.onsample instead."),
                        this._normalizedKeyframes = n)
                     : this._normalizedKeyframes = new i(n),
                 this._keyframes = n,
                 this.activeDuration = t.calculateActiveDuration(this._timing),
                 this._id = o, this
        }, e.KeyframeEffect.prototype = {
          getFrames : function() {
            return "function" == typeof this._normalizedKeyframes
                       ? this._normalizedKeyframes
                       : this._normalizedKeyframes._frames
          },
          set onsample(t) {
            if ("function" == typeof this.getFrames())
              throw new Error(
                  "Setting onsample on custom effect KeyframeEffect is not supported.");
            this._onsample = t,
            this._animation && this._animation._rebuildUnderlyingAnimation()
          },
          get parent() { return this._parent },
          clone : function() {
            if ("function" == typeof this.getFrames())
              throw new Error("Cloning custom effects is not supported.");
            var e = new KeyframeEffect(this.target, [],
                                       t.cloneTimingInput(this._timingInput),
                                       this._id);
            return e._normalizedKeyframes = this._normalizedKeyframes,
                   e._keyframes = this._keyframes, e
          },
          remove : function() { e.removeMulti([ this ]) }
        };
        var a = Element.prototype.animate;
        Element.prototype.animate = function(t, n) {
          var i = "";
          return n && n.id && (i = n.id),
                 e.timeline._play(new e.KeyframeEffect(this, t, n, i))
        };
        var s = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
        e.newUnderlyingAnimationForKeyframeEffect = function(t) {
          if (t) {
            var e = t.target || s;
            "function" == typeof (n = t._keyframes) && (n = []),
                (i = t._timingInput).id = t._id
          } else {
            e = s;
            var n = [], i = 0
          }
          return a.apply(e, [ n, i ])
        }, e.bindAnimationForKeyframeEffect = function(t) {
          t.effect && "function" == typeof t.effect._normalizedKeyframes &&
              e.bindAnimationForCustomEffect(t)
        };
        var c = [];
        e.awaitStartTime = function(t) {
          null === t.startTime && t._isGroup &&
              (0 == c.length && requestAnimationFrame(r), c.push(t))
        };
        var l = window.getComputedStyle;
        Object.defineProperty(window, "getComputedStyle", {
          configurable : !0,
          enumerable : !0,
          value : function() {
            e.timeline._updateAnimationsPromises();
            var t = l.apply(this, arguments);
            return r() && (t = l.apply(this, arguments)),
                   e.timeline._updateAnimationsPromises(), t
          }
        }),
            window.KeyframeEffect = e.KeyframeEffect,
            window.Element.prototype.getAnimations = function() {
              return document.timeline.getAnimations().filter(function(t) {
                return null !== t.effect && t.effect.target == this
              }.bind(this))
            }
      }(i, o), function(t, e, n) {
        function i(t) {
          t._registered || (t._registered = !0, a.push(t),
                            s || (s = !0, requestAnimationFrame(r)))
        }
        function r(t) {
          var e = a;
          a = [],
          e.sort(function(t,
                          e) { return t._sequenceNumber - e._sequenceNumber }),
          e = e.filter(function(t) {
            t();
            var e = t._animation ? t._animation.playState : "idle";
            return "running" != e && "pending" != e && (t._registered = !1),
                   t._registered
          }),
          a.push.apply(a, e),
          a.length ? (s = !0, requestAnimationFrame(r)) : s = !1
        }
        var o =
            (document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
             0);
        e.bindAnimationForCustomEffect = function(e) {
          var n, r = e.effect.target,
                 a = "function" == typeof e.effect.getFrames();
          n = a ? e.effect.getFrames() : e.effect._onsample;
          var s = e.effect.timing, c = null;
          s = t.normalizeTimingInput(s);
          var l = function i() {
            var o = i._animation ? i._animation.currentTime : null;
            null !== o && (o = t.calculateIterationProgress(
                               t.calculateActiveDuration(s), o, s),
                           isNaN(o) && (o = null)),
                o !== c && (a ? n(o, r, e.effect)
                              : n(o, e.effect, e.effect._animation)),
                c = o
          };
          l._animation = e, l._registered = !1, l._sequenceNumber = o++,
          e._callback = l, i(l)
        };
        var a = [], s = !1;
        e.Animation.prototype._register =
            function() { this._callback && i(this._callback) }
      }(i, o), function(t, e, n) {
        function i(t) {
          return t._timing.delay + t.activeDuration + t._timing.endDelay
        }
        function r(e, n, i) {
          this._id = i, this._parent = null, this.children = e || [],
          this._reparent(this.children), n = t.numericTimingToObject(n),
          this._timingInput = t.cloneTimingInput(n),
          this._timing = t.normalizeTimingInput(n, !0),
          this.timing = t.makeTiming(n, !0, this), this.timing._effect = this,
          "auto" === this._timing.duration &&
              (this._timing.duration = this.activeDuration)
        }
        window.SequenceEffect = function() { r.apply(this, arguments) },
        window.GroupEffect = function() { r.apply(this, arguments) },
        r.prototype = {
          _isAncestor : function(t) {
            for (var e = this; null !== e;) {
              if (e == t)
                return !0;
              e = e._parent
            }
            return !1
          },
          _rebuild : function() {
            for (var t = this; t;)
              "auto" === t.timing.duration &&
                  (t._timing.duration = t.activeDuration),
                  t = t._parent;
            this._animation && this._animation._rebuildUnderlyingAnimation()
          },
          _reparent : function(t) {
            e.removeMulti(t);
            for (var n = 0; n < t.length; n++)
              t[n]._parent = this
          },
          _putChild : function(t, e) {
            for (var n = e ? "Cannot append an ancestor or self"
                           : "Cannot prepend an ancestor or self",
                     i = 0;
                 i < t.length; i++)
              if (this._isAncestor(t[i]))
                throw {
                  type : DOMException.HIERARCHY_REQUEST_ERR,
                  name : "HierarchyRequestError",
                  message : n
                };
            for (i = 0; i < t.length; i++)
              e ? this.children.push(t[i]) : this.children.unshift(t[i]);
            this._reparent(t), this._rebuild()
          },
          append : function() { this._putChild(arguments, !0) },
          prepend : function() { this._putChild(arguments, !1) },
          get parent() { return this._parent },
          get firstChild() {
            return this.children.length ? this.children[0] : null
          },
          get lastChild() {
            return this.children.length
                       ? this.children[this.children.length - 1]
                       : null
          },
          clone : function() {
            for (var e = t.cloneTimingInput(this._timingInput), n = [], i = 0;
                 i < this.children.length; i++)
              n.push(this.children[i].clone());
            return this instanceof GroupEffect ? new GroupEffect(n, e)
                                               : new SequenceEffect(n, e)
          },
          remove : function() { e.removeMulti([ this ]) }
        },
        window.SequenceEffect.prototype = Object.create(r.prototype),
        Object.defineProperty(
            window.SequenceEffect.prototype, "activeDuration", {
              get : function() {
                var t = 0;
                return this.children.forEach(function(e) { t += i(e) }),
                       Math.max(t, 0)
              }
            }),
        window.GroupEffect.prototype = Object.create(r.prototype),
        Object.defineProperty(window.GroupEffect.prototype, "activeDuration", {
          get : function() {
            var t = 0;
            return this.children.forEach(function(e) { t = Math.max(t, i(e)) }),
                   t
          }
        }),
        e.newUnderlyingAnimationForGroup = function(n) {
          var i, r = null, o = new KeyframeEffect(null, [], n._timing, n._id);
          return o.onsample = function(e) {
            var n = i._wrapper;
            if (n && "pending" != n.playState && n.effect)
              return null == e
                         ? void n._removeChildAnimations()
                         : 0 == e && n.playbackRate < 0 &&
                                   (r || (r = t.normalizeTimingInput(
                                              n.effect.timing)),
                                    e = t.calculateIterationProgress(
                                        t.calculateActiveDuration(r), -1, r),
                                    isNaN(e) || null == e)
                               ? (n._forEachChild(function(
                                      t) { t.currentTime = -1 }),
                                  void n._removeChildAnimations())
                               : void 0
          }, i = e.timeline._play(o)
        }, e.bindAnimationForGroup = function(t) {
          t._animation._wrapper = t, t._isGroup = !0, e.awaitStartTime(t),
          t._constructChildAnimations(), t._setExternalAnimation(t)
        }, e.groupChildDuration = i
      }(i, o), n.true = {}
    },
    122 : function(t, e, n) {
      "use strict";
      n(3), n(11);
      var i = n(79), r = n(6), o = n(5);
      function a() {
        var t = function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
              Object.defineProperties(t, {raw : {value : Object.freeze(e)}}))
        }([
          "\n    <style>\n      :host {\n        display: block;\n        padding: 8px 0;\n\n        background: var(--paper-listbox-background-color, var(--primary-background-color));\n        color: var(--paper-listbox-color, var(--primary-text-color));\n\n        @apply --paper-listbox;\n      }\n    </style>\n\n    <slot></slot>\n"
        ]);
        return a = function() { return t }, t
      }
      Object(r.a)({
        _template : Object(o.a)(a()),
        is : "paper-listbox",
        behaviors : [ i.a ],
        hostAttributes : {role : "listbox"}
      })
    },
    123 : function(t, e, n) {
      "use strict";
      n(3), n(10);
      var i = n(23), r = n(55), o = n(6), a = n(7), s = n(5);
      function c() {
        var t = function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
              Object.defineProperties(t, {raw : {value : Object.freeze(e)}}))
        }([ '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 400px;\n        border: 1px solid;\n        padding: 2px;\n        -moz-appearance: textarea;\n        -webkit-appearance: textarea;\n        overflow: hidden;\n      }\n\n      .mirror-text {\n        visibility: hidden;\n        word-wrap: break-word;\n        @apply --iron-autogrow-textarea;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n\n      textarea {\n        position: relative;\n        outline: none;\n        border: none;\n        resize: none;\n        background: inherit;\n        color: inherit;\n        /* see comments in template */\n        width: 100%;\n        height: 100%;\n        font-size: inherit;\n        font-family: inherit;\n        line-height: inherit;\n        text-align: inherit;\n        @apply --iron-autogrow-textarea;\n      }\n\n      textarea::-webkit-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea::-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-ms-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n    </style>\n\n    \x3c!-- the mirror sizes the input/textarea so it grows with typing --\x3e\n    \x3c!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML --\x3e\n    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>\n\n    \x3c!-- size the input/textarea with a div, because the textarea has intrinsic size in ff --\x3e\n    <div class="textarea-container fit">\n      <textarea id="textarea" name$="[[name]]" aria-label$="[[label]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" disabled$="[[disabled]]" rows$="[[rows]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]"></textarea>\n    </div>\n' ], [
          '\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 400px;\n        border: 1px solid;\n        padding: 2px;\n        -moz-appearance: textarea;\n        -webkit-appearance: textarea;\n        overflow: hidden;\n      }\n\n      .mirror-text {\n        visibility: hidden;\n        word-wrap: break-word;\n        @apply --iron-autogrow-textarea;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n\n      textarea {\n        position: relative;\n        outline: none;\n        border: none;\n        resize: none;\n        background: inherit;\n        color: inherit;\n        /* see comments in template */\n        width: 100%;\n        height: 100%;\n        font-size: inherit;\n        font-family: inherit;\n        line-height: inherit;\n        text-align: inherit;\n        @apply --iron-autogrow-textarea;\n      }\n\n      textarea::-webkit-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea::-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-ms-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n    </style>\n\n    \x3c!-- the mirror sizes the input/textarea so it grows with typing --\x3e\n    \x3c!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML --\x3e\n    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>\n\n    \x3c!-- size the input/textarea with a div, because the textarea has intrinsic size in ff --\x3e\n    <div class="textarea-container fit">\n      <textarea id="textarea" name\\$="[[name]]" aria-label\\$="[[label]]" autocomplete\\$="[[autocomplete]]" autofocus\\$="[[autofocus]]" inputmode\\$="[[inputmode]]" placeholder\\$="[[placeholder]]" readonly\\$="[[readonly]]" required\\$="[[required]]" disabled\\$="[[disabled]]" rows\\$="[[rows]]" minlength\\$="[[minlength]]" maxlength\\$="[[maxlength]]"></textarea>\n    </div>\n'
        ]);
        return c = function() { return t }, t
      }
      Object(o.a)({
        _template : Object(s.a)(c()),
        is : "iron-autogrow-textarea",
        behaviors : [ r.a, i.a ],
        properties : {
          value : {observer : "_valueChanged", type : String, notify : !0},
          bindValue :
              {observer : "_bindValueChanged", type : String, notify : !0},
          rows : {type : Number, value : 1, observer : "_updateCached"},
          maxRows : {type : Number, value : 0, observer : "_updateCached"},
          autocomplete : {type : String, value : "off"},
          autofocus : {type : Boolean, value : !1},
          inputmode : {type : String},
          placeholder : {type : String},
          readonly : {type : String},
          required : {type : Boolean},
          minlength : {type : Number},
          maxlength : {type : Number},
          label : {type : String}
        },
        listeners : {input : "_onInput"},
        get textarea() { return this.$.textarea },
        get selectionStart() { return this.$.textarea.selectionStart },
        get selectionEnd() { return this.$.textarea.selectionEnd },
        set selectionStart(t) { this.$.textarea.selectionStart = t },
        set selectionEnd(t) { this.$.textarea.selectionEnd = t },
        attached : function() {
          navigator.userAgent.match(/iP(?:[oa]d|hone)/) &&
              (this.$.textarea.style.marginLeft = "-3px")
        },
        validate : function() {
          var t = this.$.textarea.validity.valid;
          return t && (this.required && "" === this.value
                           ? t = !1
                           : this.hasValidator() &&
                                 (t = r.a.validate.call(this, this.value))),
                 this.invalid = !t, this.fire("iron-input-validate"), t
        },
        _bindValueChanged : function(t) { this.value = t },
        _valueChanged : function(t) {
          var e = this.textarea;
          e && (e.value !== t && (e.value = t || 0 === t ? t : ""),
                this.bindValue = t,
                this.$.mirror.innerHTML = this._valueForMirror(),
                this.fire("bind-value-changed", {value : this.bindValue}))
        },
        _onInput : function(t) {
          var e = Object(a.a)(t).path;
          this.value = e ? e[0].value : t.target.value
        },
        _constrain : function(t) {
          var e;
          for (t = t || [ "" ], e = this.maxRows > 0 && t.length > this.maxRows
                                        ? t.slice(0, this.maxRows)
                                        : t.slice(0);
               this.rows > 0 && e.length < this.rows;)
            e.push("");
          return e.join("<br/>") + "&#160;"
        },
        _valueForMirror : function() {
          var t = this.textarea;
          if (t)
            return this.tokens = t && t.value ? t.value.replace(/&/gm, "&amp;")
                                                    .replace(/"/gm, "&quot;")
                                                    .replace(/'/gm, "&#39;")
                                                    .replace(/</gm, "&lt;")
                                                    .replace(/>/gm, "&gt;")
                                                    .split("\n")
                                              : [ "" ],
                   this._constrain(this.tokens)
        },
        _updateCached : function() {
          this.$.mirror.innerHTML = this._constrain(this.tokens)
        }
      })
    },
    124 : function(t, e, n) {
      "use strict";
      n(3);
      var i = n(6), r = n(7), o = n(5);
      function a() {
        var t = function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
              Object.defineProperties(t, {raw : {value : Object.freeze(e)}}))
        }([
          '\n    <style>\n      :host {\n        display: block;\n        position: absolute;\n        outline: none;\n        z-index: 1002;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        user-select: none;\n        cursor: default;\n      }\n\n      #tooltip {\n        display: block;\n        outline: none;\n        @apply --paper-font-common-base;\n        font-size: 10px;\n        line-height: 1;\n        background-color: var(--paper-tooltip-background, #616161);\n        color: var(--paper-tooltip-text-color, white);\n        padding: 8px;\n        border-radius: 2px;\n        @apply --paper-tooltip;\n      }\n\n      @keyframes keyFrameScaleUp {\n        0% {\n          transform: scale(0.0);\n        }\n        100% {\n          transform: scale(1.0);\n        }\n      }\n\n      @keyframes keyFrameScaleDown {\n        0% {\n          transform: scale(1.0);\n        }\n        100% {\n          transform: scale(0.0);\n        }\n      }\n\n      @keyframes keyFrameFadeInOpacity {\n        0% {\n          opacity: 0;\n        }\n        100% {\n          opacity: var(--paper-tooltip-opacity, 0.9);\n        }\n      }\n\n      @keyframes keyFrameFadeOutOpacity {\n        0% {\n          opacity: var(--paper-tooltip-opacity, 0.9);\n        }\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes keyFrameSlideDownIn {\n        0% {\n          transform: translateY(-2000px);\n          opacity: 0;\n        }\n        10% {\n          opacity: 0.2;\n        }\n        100% {\n          transform: translateY(0);\n          opacity: var(--paper-tooltip-opacity, 0.9);\n        }\n      }\n\n      @keyframes keyFrameSlideDownOut {\n        0% {\n          transform: translateY(0);\n          opacity: var(--paper-tooltip-opacity, 0.9);\n        }\n        10% {\n          opacity: 0.2;\n        }\n        100% {\n          transform: translateY(-2000px);\n          opacity: 0;\n        }\n      }\n\n      .fade-in-animation {\n        opacity: 0;\n        animation-delay: var(--paper-tooltip-delay-in, 500ms);\n        animation-name: keyFrameFadeInOpacity;\n        animation-iteration-count: 1;\n        animation-timing-function: ease-in;\n        animation-duration: var(--paper-tooltip-duration-in, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .fade-out-animation {\n        opacity: var(--paper-tooltip-opacity, 0.9);\n        animation-delay: var(--paper-tooltip-delay-out, 0ms);\n        animation-name: keyFrameFadeOutOpacity;\n        animation-iteration-count: 1;\n        animation-timing-function: ease-in;\n        animation-duration: var(--paper-tooltip-duration-out, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .scale-up-animation {\n        transform: scale(0);\n        opacity: var(--paper-tooltip-opacity, 0.9);\n        animation-delay: var(--paper-tooltip-delay-in, 500ms);\n        animation-name: keyFrameScaleUp;\n        animation-iteration-count: 1;\n        animation-timing-function: ease-in;\n        animation-duration: var(--paper-tooltip-duration-in, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .scale-down-animation {\n        transform: scale(1);\n        opacity: var(--paper-tooltip-opacity, 0.9);\n        animation-delay: var(--paper-tooltip-delay-out, 500ms);\n        animation-name: keyFrameScaleDown;\n        animation-iteration-count: 1;\n        animation-timing-function: ease-in;\n        animation-duration: var(--paper-tooltip-duration-out, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .slide-down-animation {\n        transform: translateY(-2000px);\n        opacity: 0;\n        animation-delay: var(--paper-tooltip-delay-out, 500ms);\n        animation-name: keyFrameSlideDownIn;\n        animation-iteration-count: 1;\n        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);\n        animation-duration: var(--paper-tooltip-duration-out, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .slide-down-animation-out {\n        transform: translateY(0);\n        opacity: var(--paper-tooltip-opacity, 0.9);\n        animation-delay: var(--paper-tooltip-delay-out, 500ms);\n        animation-name: keyFrameSlideDownOut;\n        animation-iteration-count: 1;\n        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);\n        animation-duration: var(--paper-tooltip-duration-out, 500ms);\n        animation-fill-mode: forwards;\n        @apply --paper-tooltip-animation;\n      }\n\n      .cancel-animation {\n        animation-delay: -30s !important;\n      }\n\n      /* Thanks IE 10. */\n\n      .hidden {\n        display: none !important;\n      }\n    </style>\n\n    <div id="tooltip" class="hidden">\n      <slot></slot>\n    </div>\n'
        ]);
        return a = function() { return t }, t
      }
      Object(i.a)({
        _template : Object(o.a)(a()),
        is : "paper-tooltip",
        hostAttributes : {role : "tooltip", tabindex : -1},
        properties : {
          for : {type : String, observer : "_findTarget"},
          manualMode :
              {type : Boolean, value : !1, observer : "_manualModeChanged"},
          position : {type : String, value : "bottom"},
          fitToVisibleBounds : {type : Boolean, value : !1},
          offset : {type : Number, value : 14},
          marginTop : {type : Number, value : 14},
          animationDelay :
              {type : Number, value : 500, observer : "_delayChange"},
          animationEntry : {type : String, value : ""},
          animationExit : {type : String, value : ""},
          animationConfig : {
            type : Object,
            value : function() {
              return {
                entry: [ {
                  name : "fade-in-animation",
                  node : this,
                  timing : {delay : 0}
                } ],
                    exit: [ {name : "fade-out-animation", node : this} ]
              }
            }
          },
          _showing : {type : Boolean, value : !1}
        },
        listeners : {webkitAnimationEnd : "_onAnimationEnd"},
        get target() {
          var t = Object(r.a)(this).parentNode,
              e = Object(r.a)(this).getOwnerRoot();
          return this.for
                     ? Object(r.a)(e).querySelector("#" + this.for)
                     : t.nodeType == Node.DOCUMENT_FRAGMENT_NODE ? e.host : t
        },
        attached : function() { this._findTarget() },
        detached : function() { this.manualMode || this._removeListeners() },
        playAnimation : function(
            t) { "entry" === t ? this.show() : "exit" === t && this.hide() },
        cancelAnimation :
            function() { this.$.tooltip.classList.add("cancel-animation") },
        show : function() {
          if (!this._showing) {
            if ("" === Object(r.a)(this).textContent.trim()) {
              for (var t = !0, e = Object(r.a)(this).getEffectiveChildNodes(),
                       n = 0;
                   n < e.length; n++)
                if ("" !== e[n].textContent.trim()) {
                  t = !1;
                  break
                }
              if (t)
                return
            }
            this._showing = !0, this.$.tooltip.classList.remove("hidden"),
            this.$.tooltip.classList.remove("cancel-animation"),
            this.$.tooltip.classList.remove(this._getAnimationType("exit")),
            this.updatePosition(), this._animationPlaying = !0,
            this.$.tooltip.classList.add(this._getAnimationType("entry"))
          }
        },
        hide : function() {
          if (this._showing) {
            if (this._animationPlaying)
              return this._showing = !1, void this._cancelAnimation();
            this._onAnimationFinish(), this._showing = !1,
                                       this._animationPlaying = !0
          }
        },
        updatePosition : function() {
          if (this._target && this.offsetParent) {
            var t = this.offset;
            14 != this.marginTop && 14 == this.offset && (t = this.marginTop);
            var e, n, i = this.offsetParent.getBoundingClientRect(),
                      r = this._target.getBoundingClientRect(),
                      o = this.getBoundingClientRect(),
                      a = (r.width - o.width) / 2,
                      s = (r.height - o.height) / 2, c = r.left - i.left,
                      l = r.top - i.top;
            switch (this.position) {
            case "top":
              e = c + a, n = l - o.height - t;
              break;
            case "bottom":
              e = c + a, n = l + r.height + t;
              break;
            case "left":
              e = c - o.width - t, n = l + s;
              break;
            case "right":
              e = c + r.width + t, n = l + s
            }
            this.fitToVisibleBounds
                ? (i.left + e + o.width > window.innerWidth
                       ? (this.style.right = "0px", this.style.left = "auto")
                       : (this.style.left = Math.max(0, e) + "px",
                          this.style.right = "auto"),
                   i.top + n + o.height > window.innerHeight
                       ? (this.style.bottom = i.height - l + t + "px",
                          this.style.top = "auto")
                       : (this.style.top = Math.max(-i.top, n) + "px",
                          this.style.bottom = "auto"))
                : (this.style.left = e + "px", this.style.top = n + "px")
          }
        },
        _addListeners : function() {
          this._target && (this.listen(this._target, "mouseenter", "show"),
                           this.listen(this._target, "focus", "show"),
                           this.listen(this._target, "mouseleave", "hide"),
                           this.listen(this._target, "blur", "hide"),
                           this.listen(this._target, "tap", "hide")),
              this.listen(this.$.tooltip, "animationend", "_onAnimationEnd"),
              this.listen(this, "mouseenter", "hide")
        },
        _findTarget : function() {
          this.manualMode || this._removeListeners(),
              this._target = this.target,
              this.manualMode || this._addListeners()
        },
        _delayChange : function(t) {
          500 !== t &&
              this.updateStyles({"--paper-tooltip-delay-in" : t + "ms"})
        },
        _manualModeChanged : function() {
          this.manualMode ? this._removeListeners() : this._addListeners()
        },
        _cancelAnimation : function() {
          this.$.tooltip.classList.remove(this._getAnimationType("entry")),
              this.$.tooltip.classList.remove(this._getAnimationType("exit")),
              this.$.tooltip.classList.remove("cancel-animation"),
              this.$.tooltip.classList.add("hidden")
        },
        _onAnimationFinish : function() {
          this._showing &&
              (this.$.tooltip.classList.remove(this._getAnimationType("entry")),
               this.$.tooltip.classList.remove("cancel-animation"),
               this.$.tooltip.classList.add(this._getAnimationType("exit")))
        },
        _onAnimationEnd : function() {
          this._animationPlaying = !1,
          this._showing ||
              (this.$.tooltip.classList.remove(this._getAnimationType("exit")),
               this.$.tooltip.classList.add("hidden"))
        },
        _getAnimationType : function(t) {
          if ("entry" === t && "" !== this.animationEntry)
            return this.animationEntry;
          if ("exit" === t && "" !== this.animationExit)
            return this.animationExit;
          if (this.animationConfig[t] &&
              "string" == typeof this.animationConfig[t][0].name) {
            if (this.animationConfig[t][0].timing &&
                this.animationConfig[t][0].timing.delay &&
                0 !== this.animationConfig[t][0].timing.delay) {
              var e = this.animationConfig[t][0].timing.delay;
              "entry" === t
                  ? this.updateStyles({"--paper-tooltip-delay-in" : e + "ms"})
                  : "exit" === t &&
                        this.updateStyles(
                            {"--paper-tooltip-delay-out" : e + "ms"})
            }
            return this.animationConfig[t][0].name
          }
        },
        _removeListeners : function() {
          this._target && (this.unlisten(this._target, "mouseenter", "show"),
                           this.unlisten(this._target, "focus", "show"),
                           this.unlisten(this._target, "mouseleave", "hide"),
                           this.unlisten(this._target, "blur", "hide"),
                           this.unlisten(this._target, "tap", "hide")),
              this.unlisten(this.$.tooltip, "animationend", "_onAnimationEnd"),
              this.unlisten(this, "mouseenter", "hide")
        }
      })
    },
    126 : function(t, e, n) {
      "use strict";
      var i = n(32), r = n(4), o = function(t) {
        return function(e, n) {
          if (e.constructor._observers) {
            if (!e.constructor.hasOwnProperty("_observers")) {
              var i = e.constructor._observers;
              e.constructor._observers = new Map,
              i.forEach(function(
                  t, n) { return e.constructor._observers.set(n, t) })
            }
          } else {
            e.constructor._observers = new Map;
            var r = e.updated;
            e.updated = function(t) {
              var e = this;
              r.call(this, t), t.forEach(function(t, n) {
                var i = e.constructor._observers.get(n);
                void 0 !== i && i.call(e, e[n], t)
              })
            }
          }
          e.constructor._observers.set(n, t)
        }
      };
      var a = function() {}, s = {get passive() { return !0, !1 }};
      document.addEventListener("x", a, s),
          document.removeEventListener("x", a);
      function c(t) {
        return (c = "function" == typeof Symbol &&
                            "symbol" == typeof Symbol.iterator
                        ? function(t) { return typeof t }
                        : function(t) {
                            return t && "function" == typeof Symbol &&
                                           t.constructor === Symbol &&
                                           t !== Symbol.prototype
                                       ? "symbol"
                                       : typeof t
                          })(t)
      }
      function l(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0,
          "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      function u(t, e) {
        return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function d(t) {
        return (
            d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
      }
      function p(t, e) {
        return (p = Object.setPrototypeOf ||
                    function(t, e) { return t.__proto__ = e, t })(t, e)
      }
      var h = function(t) {
        function e() {
          return function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e),
                 u(this, d(e).apply(this, arguments))
        }
        var n, i, o;
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
                "Super expression must either be null or a function");
          t.prototype = Object.create(
              e && e.prototype,
              {constructor : {value : t, writable : !0, configurable : !0}}),
          e && p(t, e)
        }(e, r["a"]),
               n = e,
               (i =
                    [
                      {
                        key : "createFoundation",
                        value : function() {
                          void 0 !== this.mdcFoundation &&
                              this.mdcFoundation.destroy(),
                              this.mdcFoundation = new this.mdcFoundationClass(
                                  this.createAdapter()),
                              this.mdcFoundation.init()
                        }
                      },
                      {
                        key : "firstUpdated",
                        value : function() { this.createFoundation() }
                      }
                    ]) &&
                   l(n.prototype, i),
               o && l(n, o), e
      }();
      function f(t) {
        return (f = "function" == typeof Symbol &&
                            "symbol" == typeof Symbol.iterator
                        ? function(t) { return typeof t }
                        : function(t) {
                            return t && "function" == typeof Symbol &&
                                           t.constructor === Symbol &&
                                           t !== Symbol.prototype
                                       ? "symbol"
                                       : typeof t
                          })(t)
      }
      function m(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0,
          "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      function g(t, e) {
        return !e || "object" !== f(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function y(t, e, n) {
        return (
            y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
              var i = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) &&
                       null !== (t = _(t));)
                  ;
                return t
              }(t, e);
              if (i) {
                var r = Object.getOwnPropertyDescriptor(i, e);
                return r.get ? r.get.call(n) : r.value
              }
            })(t, e, n || t)
      }
      function _(t) {
        return (
            _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
      }
      function b(t, e) {
        return (b = Object.setPrototypeOf ||
                    function(t, e) { return t.__proto__ = e, t })(t, e)
      }
      var v =
              function(t) {
        function e() {
          return function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e),
                 g(this, _(e).apply(this, arguments))
        }
        var n, i, r;
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
                "Super expression must either be null or a function");
          t.prototype = Object.create(
              e && e.prototype,
              {constructor : {value : t, writable : !0, configurable : !0}}),
          e && b(t, e)
        }(e, h),
               n = e,
               (i =
                    [
                      {
                        key : "createRenderRoot",
                        value : function() {
                          return this.attachShadow(
                              {mode : "open", delegatesFocus : !0})
                        }
                      },
                      {
                        key : "click",
                        value : function() {
                          this.formElement && (this.formElement.focus(),
                                               this.formElement.click())
                        }
                      },
                      {
                        key : "setAriaLabel",
                        value : function(t) {
                          this.formElement &&
                              this.formElement.setAttribute("aria-label", t)
                        }
                      },
                      {
                        key : "firstUpdated",
                        value : function() {
                          var t = this;
                          y(_(e.prototype), "firstUpdated", this).call(this),
                              this.mdcRoot.addEventListener(
                                  "change", function(e) {
                                    t.dispatchEvent(new Event("change", e))
                                  })
                        }
                      }
                    ]) &&
                   m(n.prototype, i),
               r && m(n, r), e
      }(),
          w = n(107), x = n(90), T = {
            CHECKED : "mdc-switch--checked",
            DISABLED : "mdc-switch--disabled"
          },
          k = {
            NATIVE_CONTROL_SELECTOR : ".mdc-switch__native-control",
            RIPPLE_SURFACE_SELECTOR : ".mdc-switch__thumb-underlay"
          },
          E = function(t) {
            function e(n) {
              return t.call(this, i.a({}, e.defaultAdapter, n)) || this
            }
            return i.c(e, t), Object.defineProperty(e, "strings", {
              get : function() { return k },
              enumerable : !0,
              configurable : !0
            }),
                   Object.defineProperty(e, "cssClasses", {
                     get : function() { return T },
                     enumerable : !0,
                     configurable : !0
                   }),
                   Object.defineProperty(e, "defaultAdapter", {
                     get : function() {
                       return {
                         addClass: function() {}, removeClass: function() {},
                             setNativeControlChecked: function() {},
                             setNativeControlDisabled: function() {}
                       }
                     },
                     enumerable : !0,
                     configurable : !0
                   }),
                   e.prototype.setChecked = function(t) {
                     this.adapter_.setNativeControlChecked(t),
                         this.updateCheckedStyling_(t)
                   }, e.prototype.setDisabled = function(t) {
                     this.adapter_.setNativeControlDisabled(t),
                         t ? this.adapter_.addClass(T.DISABLED)
                           : this.adapter_.removeClass(T.DISABLED)
                   }, e.prototype.handleChange = function(t) {
                     var e = t.target;
                     this.updateCheckedStyling_(e.checked)
                   }, e.prototype.updateCheckedStyling_ = function(t) {
                     t ? this.adapter_.addClass(T.CHECKED)
                       : this.adapter_.removeClass(T.CHECKED)
                   }, e
          }(x.a);
      function A(t) {
        return (A = "function" == typeof Symbol &&
                            "symbol" == typeof Symbol.iterator
                        ? function(t) { return typeof t }
                        : function(t) {
                            return t && "function" == typeof Symbol &&
                                           t.constructor === Symbol &&
                                           t !== Symbol.prototype
                                       ? "symbol"
                                       : typeof t
                          })(t)
      }
      function O() {
        var t = function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
              Object.defineProperties(t, {raw : {value : Object.freeze(e)}}))
        }([
          '\n      <div class="mdc-switch">\n        <div class="mdc-switch__track"></div>\n        <div class="mdc-switch__thumb-underlay" .ripple="',
          '">\n          <div class="mdc-switch__thumb">\n            <input\n              type="checkbox"\n              id="basic-switch"\n              class="mdc-switch__native-control"\n              role="switch"\n              @change="',
          '">\n          </div>\n        </div>\n      </div>\n      <slot></slot>'
        ]);
        return O = function() { return t }, t
      }
      function P(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0,
          "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      function S(t, e) {
        return !e || "object" !== A(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function C(t) {
        return (
            C = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
      }
      function R(t, e) {
        return (R = Object.setPrototypeOf ||
                    function(t, e) { return t.__proto__ = e, t })(t, e)
      }
      var N = function(t) {
        function e() {
          var t;
          return function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e),
                 (t = S(this, C(e).apply(this, arguments))).checked = !1,
                                               t.disabled = !1,
                                               t.mdcFoundationClass = E, t
        }
        var n, i, o;
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
                "Super expression must either be null or a function");
          t.prototype = Object.create(
              e && e.prototype,
              {constructor : {value : t, writable : !0, configurable : !0}}),
          e && R(t, e)
        }(e, v),
               n = e,
               (i =
                    [
                      {
                        key : "_changeHandler",
                        value : function(t) {
                          this.mdcFoundation.handleChange(t),
                              this.checked = this.formElement.checked
                        }
                      },
                      {
                        key : "createAdapter",
                        value : function() {
                          var t, e = this;
                          return Object.assign(
                              Object.assign(
                                  {}, (t = this.mdcRoot, {
                                    addClass : function(
                                        e) { t.classList.add(e) },
                                    removeClass : function(
                                        e) { t.classList.remove(e) },
                                    hasClass : function(
                                        e) { return t.classList.contains(e) }
                                  })),
                              {
                                setNativeControlChecked : function(
                                    t) { e.formElement.checked = t },
                                setNativeControlDisabled : function(
                                    t) { e.formElement.disabled = t }
                              })
                        }
                      },
                      {
                        key : "render",
                        value : function() {
                          return Object(r.e)(
                              O(), Object(w.a)({interactionNode : this}),
                              this._changeHandler)
                        }
                      },
                      {
                        key : "ripple",
                        get : function() { return this.rippleNode.ripple }
                      }
                    ]) &&
                   P(n.prototype, i),
               o && P(n, o), e
      }();
      Object(i.b)(
          [
            Object(r.f)({type : Boolean}),
            o(function(t) { this.mdcFoundation.setChecked(t) })
          ],
          N.prototype, "checked", void 0),
          Object(i.b)(
              [
                Object(r.f)({type : Boolean}),
                o(function(t) { this.mdcFoundation.setDisabled(t) })
              ],
              N.prototype, "disabled", void 0),
          Object(i.b)([ Object(r.g)(".mdc-switch") ], N.prototype, "mdcRoot",
                      void 0),
          Object(i.b)([ Object(r.g)("input") ], N.prototype, "formElement",
                      void 0),
          Object(i.b)([ Object(r.g)(".mdc-switch__thumb-underlay") ],
                      N.prototype, "rippleNode", void 0);
      var j = n(105);
      function F(t) {
        return (F = "function" == typeof Symbol &&
                            "symbol" == typeof Symbol.iterator
                        ? function(t) { return typeof t }
                        : function(t) {
                            return t && "function" == typeof Symbol &&
                                           t.constructor === Symbol &&
                                           t !== Symbol.prototype
                                       ? "symbol"
                                       : typeof t
                          })(t)
      }
      function D(t, e) {
        return !e || "object" !== F(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function L(t) {
        return (
            L = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
      }
      function z(t, e) {
        return (z = Object.setPrototypeOf ||
                    function(t, e) { return t.__proto__ = e, t })(t, e)
      }
      var M = function(t) {
        function e() {
          return function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e),
                 D(this, L(e).apply(this, arguments))
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
                "Super expression must either be null or a function");
          t.prototype = Object.create(
              e && e.prototype,
              {constructor : {value : t, writable : !0, configurable : !0}}),
          e && z(t, e)
        }(e, N),
               e
      }();
      M.styles = j.a, M = Object(i.b)([ Object(r.d)("mwc-switch") ], M)
    },
    127 : function(t, e, n) {
      "use strict";
      n(3), n(24), n(20), n(44), n(108), n(89), n(11), n(57);
      var i = document.createElement("template");
      i.setAttribute("style", "display: none;"),
          i.innerHTML =
              '<iron-iconset-svg name="paper-dropdown-menu" size="24">\n<svg><defs>\n<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>\n</defs></svg>\n</iron-iconset-svg>',
          document.head.appendChild(i.content);
      var r = document.createElement("template");
      r.setAttribute("style", "display: none;"),
          r.innerHTML =
              '<dom-module id="paper-dropdown-menu-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>',
          document.head.appendChild(r.content);
      var o = n(38), a = n(23), s = n(70), c = n(55), l = n(6), u = n(7),
          d = n(48), p = n(5);
      function h() {
        var t = function(t, e) {
          e || (e = t.slice(0));
          return Object.freeze(
              Object.defineProperties(t, {raw : {value : Object.freeze(e)}}))
        }([
          '\n    <style include="paper-dropdown-menu-shared-styles"></style>\n\n    \x3c!-- this div fulfills an a11y requirement for combobox, do not remove --\x3e\n    <span role="button"></span>\n    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" dynamic-align="[[dynamicAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]" restore-focus-on-close="[[restoreFocusOnClose]]">\n      \x3c!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> --\x3e\n      <div class="dropdown-trigger" slot="dropdown-trigger">\n        <paper-ripple></paper-ripple>\n        \x3c!-- paper-input has type="text" for a11y, do not remove --\x3e\n        <paper-input type="text" invalid="[[invalid]]" readonly disabled="[[disabled]]" value="[[value]]" placeholder="[[placeholder]]" error-message="[[errorMessage]]" always-float-label="[[alwaysFloatLabel]]" no-label-float="[[noLabelFloat]]" label="[[label]]">\n          \x3c!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> --\x3e\n          <iron-icon icon="paper-dropdown-menu:arrow-drop-down" suffix slot="suffix"></iron-icon>\n        </paper-input>\n      </div>\n      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>\n    </paper-menu-button>\n'
        ]);
        return h = function() { return t }, t
      }
      Object(l.a)({
        _template : Object(p.a)(h()),
        is : "paper-dropdown-menu",
        behaviors : [ o.a, a.a, s.a, c.a ],
        properties : {
          selectedItemLabel : {type : String, notify : !0, readOnly : !0},
          selectedItem : {type : Object, notify : !0, readOnly : !0},
          value : {type : String, notify : !0},
          label : {type : String},
          placeholder : {type : String},
          errorMessage : {type : String},
          opened : {
            type : Boolean,
            notify : !0,
            value : !1,
            observer : "_openedChanged"
          },
          allowOutsideScroll : {type : Boolean, value : !1},
          noLabelFloat : {type : Boolean, value : !1, reflectToAttribute : !0},
          alwaysFloatLabel : {type : Boolean, value : !1},
          noAnimations : {type : Boolean, value : !1},
          horizontalAlign : {type : String, value : "right"},
          verticalAlign : {type : String, value : "top"},
          verticalOffset : Number,
          dynamicAlign : {type : Boolean},
          restoreFocusOnClose : {type : Boolean, value : !0}
        },
        listeners : {tap : "_onTap"},
        keyBindings : {"up down" : "open", esc : "close"},
        hostAttributes : {
          role : "combobox",
          "aria-autocomplete" : "none",
          "aria-haspopup" : "true"
        },
        observers : [ "_selectedItemChanged(selectedItem)" ],
        attached : function() {
          var t = this.contentElement;
          t && t.selectedItem && this._setSelectedItem(t.selectedItem)
        },
        get contentElement() {
          for (var t = Object(u.a)(this.$.content).getDistributedNodes(), e = 0,
                   n = t.length;
               e < n; e++)
            if (t[e].nodeType === Node.ELEMENT_NODE)
              return t[e]
        },
        open : function() { this.$.menuButton.open() },
        close : function() { this.$.menuButton.close() },
        _onIronSelect : function(t) { this._setSelectedItem(t.detail.item) },
        _onIronDeselect : function(t) { this._setSelectedItem(null) },
        _onTap : function(t) { d.c(t) === this && this.open() },
        _selectedItemChanged : function(t) {
          var e = "";
          e = t ? t.label || t.getAttribute("label") || t.textContent.trim()
                : "",
          this.value = e, this._setSelectedItemLabel(e)
        },
        _computeMenuVerticalOffset : function(t,
                                              e) { return e || (t ? -4 : 8) },
        _getValidity : function(t) {
          return this.disabled || !this.required ||
                 this.required && !!this.value
        },
        _openedChanged : function() {
          var t = this.opened ? "true" : "false", e = this.contentElement;
          e && e.setAttribute("aria-expanded", t)
        }
      })
    },
    128 :
        function(t, e, n) {
          "use strict";
          n(3), n(10), n(40), n(11), n(29);
          var i = document.createElement("template");
          i.setAttribute("style", "display: none;"),
              i.innerHTML =
                  "<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>",
              document.head.appendChild(i.content);
          var r = n(6), o = n(5), a = n(38), s = n(23), c = [
            a.a, s.a, {hostAttributes : {role : "option", tabindex : "0"}}
          ];
          function l() {
            var t = function(t, e) {
              e || (e = t.slice(0));
              return Object.freeze(Object.defineProperties(
                  t, {raw : {value : Object.freeze(e)}}))
            }([
              '\n    <style include="paper-item-shared-styles">\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n      }\n    </style>\n    <slot></slot>\n'
            ]);
            return l = function() { return t }, t
          }
          Object(r.a)({
            _template : Object(o.a)(l()),
            is : "paper-item",
            behaviors : [ c ]
          })
        },
    74 : function(t, e) {
      t.exports = function(t, e) {
        var n = 0, i = {};
        t.addEventListener("message", function(e) {
          var n = e.data;
          if ("RPC" === n.type)
            if (n.id) {
              var r = i[n.id];
              r && (delete i[n.id],
                    n.error
                        ? r[1](Object.assign(Error(n.error.message), n.error))
                        : r[0](n.result))
            } else {
              var o = document.createEvent("Event");
              o.initEvent(n.method, !1, !1), o.data = n.params,
                                             t.dispatchEvent(o)
            }
        }), e.forEach(function(e) {
          t[e] = function() {
            for (var r = [], o = arguments.length; o--;)
              r[o] = arguments[o];
            return new Promise(function(o, a) {
              var s = ++n;
              i[s] = [ o, a ],
              t.postMessage({type : "RPC", id : s, method : e, params : r})
            })
          }
        })
      }
    }
  }
]);
//# sourceMappingURL=chunk.84aaaba4c4734f1c2e21.js.map