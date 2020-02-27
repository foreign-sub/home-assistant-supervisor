!function(e) {
  var t = {};
  function n(r) {
    if (t[r])
      return t[r].exports;
    var i = t[r] = {i : r, l : !1, exports : {}};
    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {enumerable : !0, get : r})
  }, n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {value : "Module"}),
        Object.defineProperty(e, "__esModule", {value : !0})
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t)
      return e;
    if (4 & t && "object" == typeof e && e && e.__esModule)
      return e;
    var r = Object.create(null);
    if (n.r(r),
        Object.defineProperty(r, "default", {enumerable : !0, value : e}),
        2 & t && "string" != typeof e)
      for (var i in e)
        n.d(r, i, function(t) { return e[t] }.bind(null, i));
    return r
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() { return e.default }
                              : function() { return e };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "/api/hassio/app/", n(n.s = 8)
}([
  function(e, t, n) {
    var r = n(4), i = n(10);
    for (var o in (t = e.exports = function(e, t) {
                    return new i(t).process(e)
                  }).FilterCSS = i, r)
      t[o] = r[o];
    "undefined" != typeof window && (window.filterCSS = e.exports)
  },
  function(e, t) {
    e.exports = {
      indexOf : function(e, t) {
        var n, r;
        if (Array.prototype.indexOf)
          return e.indexOf(t);
        for (n = 0, r = e.length; n < r; n++)
          if (e[n] === t)
            return n;
        return -1
      },
      forEach : function(e, t, n) {
        var r, i;
        if (Array.prototype.forEach)
          return e.forEach(t, n);
        for (r = 0, i = e.length; r < i; r++)
          t.call(n, e[r], r, e)
      },
      trim : function(e) {
        return String.prototype.trim ? e.trim()
                                     : e.replace(/(^\s*)|(\s*$)/g, "")
      },
      spaceIndex : function(e) {
        var t = /\s|\n|\t/.exec(e);
        return t ? t.index : -1
      }
    }
  },
  function(e, t, n) {
    var r = n(3), i = n(6), o = n(12);
    function s(e, t) { return new o(t).process(e) }
    for (var a in (t = e.exports = s).filterXSS = s, t.FilterXSS = o, r)
      t[a] = r[a];
    for (var a in i)
      t[a] = i[a];
    "undefined" != typeof window && (window.filterXSS = e.exports),
        "undefined" != typeof self &&
            "undefined" != typeof DedicatedWorkerGlobalScope &&
            self instanceof DedicatedWorkerGlobalScope &&
            (self.filterXSS = e.exports)
  },
  function(e, t, n) {
    var r = n(0).FilterCSS, i = n(0).getDefaultWhiteList, o = n(1);
    function s() {
      return {
        a: [ "target", "href", "title" ], abbr: [ "title" ], address: [],
            area: [ "shape", "coords", "href", "alt" ], article: [], aside: [],
            audio: [ "autoplay", "controls", "loop", "preload", "src" ], b: [],
            bdi: [ "dir" ], bdo: [ "dir" ], big: [], blockquote: [ "cite" ],
            br: [], caption: [], center: [], cite: [], code: [],
            col: [ "align", "valign", "span", "width" ],
            colgroup: [ "align", "valign", "span", "width" ], dd: [],
            del: [ "datetime" ], details: [ "open" ], div: [], dl: [], dt: [],
            em: [], font: [ "color", "size", "face" ], footer: [], h1: [],
            h2: [], h3: [], h4: [], h5: [], h6: [], header: [], hr: [], i: [],
            img: [ "src", "alt", "title", "width", "height" ],
            ins: [ "datetime" ], li: [], mark: [], nav: [], ol: [], p: [],
            pre: [], s: [], section: [], small: [], span: [], sub: [], sup: [],
            strong: [], table: [ "width", "border", "align", "valign" ],
            tbody: [ "align", "valign" ],
            td: [ "width", "rowspan", "colspan", "align", "valign" ],
            tfoot: [ "align", "valign" ],
            th: [ "width", "rowspan", "colspan", "align", "valign" ],
            thead: [ "align", "valign" ], tr: [ "rowspan", "align", "valign" ],
            tt: [], u: [], ul: [], video: [
              "autoplay", "controls", "loop", "preload", "src", "height",
              "width"
            ]
      }
    }
    var a = new r;
    function l(e) { return e.replace(c, "&lt;").replace(u, "&gt;") }
    var c = /</g, u = />/g, p = /"/g, h = /&quot;/g,
        g = /&#([a-zA-Z0-9]*);?/gim, f = /&colon;?/gim, d = /&newline;?/gim,
        m = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
        b = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
        y = /u\s*r\s*l\s*\(.*/gi;
    function x(e) { return e.replace(p, "&quot;") }
    function k(e) { return e.replace(h, '"') }
    function v(e) {
      return e.replace(g, function(e, t) {
        return "x" === t[0] || "X" === t[0]
                   ? String.fromCharCode(parseInt(t.substr(1), 16))
                   : String.fromCharCode(parseInt(t, 10))
      })
    }
    function w(e) { return e.replace(f, ":").replace(d, " ") }
    function _(e) {
      for (var t = "", n = 0, r = e.length; n < r; n++)
        t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
      return o.trim(t)
    }
    function S(e) { return e = _(e = w(e = v(e = k(e)))) }
    function A(e) { return e = l(e = x(e)) }
    var $ = /<!--[\s\S]*?-->/g;
    t.whiteList = {
      a : [ "target", "href", "title" ],
      abbr : [ "title" ],
      address : [],
      area : [ "shape", "coords", "href", "alt" ],
      article : [],
      aside : [],
      audio : [ "autoplay", "controls", "loop", "preload", "src" ],
      b : [],
      bdi : [ "dir" ],
      bdo : [ "dir" ],
      big : [],
      blockquote : [ "cite" ],
      br : [],
      caption : [],
      center : [],
      cite : [],
      code : [],
      col : [ "align", "valign", "span", "width" ],
      colgroup : [ "align", "valign", "span", "width" ],
      dd : [],
      del : [ "datetime" ],
      details : [ "open" ],
      div : [],
      dl : [],
      dt : [],
      em : [],
      font : [ "color", "size", "face" ],
      footer : [],
      h1 : [],
      h2 : [],
      h3 : [],
      h4 : [],
      h5 : [],
      h6 : [],
      header : [],
      hr : [],
      i : [],
      img : [ "src", "alt", "title", "width", "height" ],
      ins : [ "datetime" ],
      li : [],
      mark : [],
      nav : [],
      ol : [],
      p : [],
      pre : [],
      s : [],
      section : [],
      small : [],
      span : [],
      sub : [],
      sup : [],
      strong : [],
      table : [ "width", "border", "align", "valign" ],
      tbody : [ "align", "valign" ],
      td : [ "width", "rowspan", "colspan", "align", "valign" ],
      tfoot : [ "align", "valign" ],
      th : [ "width", "rowspan", "colspan", "align", "valign" ],
      thead : [ "align", "valign" ],
      tr : [ "rowspan", "align", "valign" ],
      tt : [],
      u : [],
      ul : [],
      video : [
        "autoplay", "controls", "loop", "preload", "src", "height", "width"
      ]
    },
    t.getDefaultWhiteList = s, t.onTag = function(e, t, n) {},
    t.onIgnoreTag = function(e, t, n) {}, t.onTagAttr = function(e, t, n) {},
    t.onIgnoreTagAttr = function(e, t, n) {},
    t.safeAttrValue =
        function(e, t, n, r) {
      if (n = S(n), "href" === t || "src" === t) {
        if ("#" === (n = o.trim(n)))
          return "#";
        if ("http://" !== n.substr(0, 7) && "https://" !== n.substr(0, 8) &&
            "mailto:" !== n.substr(0, 7) && "tel:" !== n.substr(0, 4) &&
            "#" !== n[0] && "/" !== n[0])
          return ""
      } else if ("background" === t) {
        if (m.lastIndex = 0, m.test(n))
          return ""
      } else if ("style" === t) {
        if (b.lastIndex = 0, b.test(n))
          return "";
        if (y.lastIndex = 0, y.test(n) && (m.lastIndex = 0, m.test(n)))
          return "";
        !1 !== r && (n = (r = r || a).process(n))
      }
      return n = A(n)
    },
    t.escapeHtml = l, t.escapeQuote = x, t.unescapeQuote = k,
    t.escapeHtmlEntities = v, t.escapeDangerHtml5Entities = w,
    t.clearNonPrintableCharacter = _, t.friendlyAttrValue = S,
    t.escapeAttrValue = A, t.onIgnoreTagStripAll = function() { return "" },
    t.StripTagBody =
        function(e, t) {
      "function" != typeof t && (t = function() {});
      var n = !Array.isArray(e), r = [], i = !1;
      return {
        onIgnoreTag: function(s, a, l) {
          if (function(t) { return !!n || -1 !== o.indexOf(e, t) }(s)) {
            if (l.isClosing) {
              var c = "[/removed]", u = l.position + c.length;
              return r.push([ !1 !== i ? i : l.position, u ]), i = !1, c
            }
            return i || (i = l.position), "[removed]"
          }
          return t(s, a, l)
        }, remove: function(e) {
          var t = "", n = 0;
          return o.forEach(r, function(r) { t += e.slice(n, r[0]), n = r[1] }),
                 t += e.slice(n)
        }
      }
    },
    t.stripCommentTag = function(e) { return e.replace($, "") },
    t.stripBlankChar = function(e) {
      var t = e.split("");
      return (t = t.filter(function(e) {
               var t = e.charCodeAt(0);
               return !(127 === t || t <= 31 && 10 !== t && 13 !== t)
             }))
          .join("")
    }, t.cssFilter = a, t.getDefaultCSSWhiteList = i
  },
  function(e, t) {
    function n() {
      var e = {
        "align-content" : !1,
        "align-items" : !1,
        "align-self" : !1,
        "alignment-adjust" : !1,
        "alignment-baseline" : !1,
        all : !1,
        "anchor-point" : !1,
        animation : !1,
        "animation-delay" : !1,
        "animation-direction" : !1,
        "animation-duration" : !1,
        "animation-fill-mode" : !1,
        "animation-iteration-count" : !1,
        "animation-name" : !1,
        "animation-play-state" : !1,
        "animation-timing-function" : !1,
        azimuth : !1,
        "backface-visibility" : !1,
        background : !0,
        "background-attachment" : !0,
        "background-clip" : !0,
        "background-color" : !0,
        "background-image" : !0,
        "background-origin" : !0,
        "background-position" : !0,
        "background-repeat" : !0,
        "background-size" : !0,
        "baseline-shift" : !1,
        binding : !1,
        bleed : !1,
        "bookmark-label" : !1,
        "bookmark-level" : !1,
        "bookmark-state" : !1,
        border : !0,
        "border-bottom" : !0,
        "border-bottom-color" : !0,
        "border-bottom-left-radius" : !0,
        "border-bottom-right-radius" : !0,
        "border-bottom-style" : !0,
        "border-bottom-width" : !0,
        "border-collapse" : !0,
        "border-color" : !0,
        "border-image" : !0,
        "border-image-outset" : !0,
        "border-image-repeat" : !0,
        "border-image-slice" : !0,
        "border-image-source" : !0,
        "border-image-width" : !0,
        "border-left" : !0,
        "border-left-color" : !0,
        "border-left-style" : !0,
        "border-left-width" : !0,
        "border-radius" : !0,
        "border-right" : !0,
        "border-right-color" : !0,
        "border-right-style" : !0,
        "border-right-width" : !0,
        "border-spacing" : !0,
        "border-style" : !0,
        "border-top" : !0,
        "border-top-color" : !0,
        "border-top-left-radius" : !0,
        "border-top-right-radius" : !0,
        "border-top-style" : !0,
        "border-top-width" : !0,
        "border-width" : !0,
        bottom : !1,
        "box-decoration-break" : !0,
        "box-shadow" : !0,
        "box-sizing" : !0,
        "box-snap" : !0,
        "box-suppress" : !0,
        "break-after" : !0,
        "break-before" : !0,
        "break-inside" : !0,
        "caption-side" : !1,
        chains : !1,
        clear : !0,
        clip : !1,
        "clip-path" : !1,
        "clip-rule" : !1,
        color : !0,
        "color-interpolation-filters" : !0,
        "column-count" : !1,
        "column-fill" : !1,
        "column-gap" : !1,
        "column-rule" : !1,
        "column-rule-color" : !1,
        "column-rule-style" : !1,
        "column-rule-width" : !1,
        "column-span" : !1,
        "column-width" : !1,
        columns : !1,
        contain : !1,
        content : !1,
        "counter-increment" : !1,
        "counter-reset" : !1,
        "counter-set" : !1,
        crop : !1,
        cue : !1,
        "cue-after" : !1,
        "cue-before" : !1,
        cursor : !1,
        direction : !1,
        display : !0,
        "display-inside" : !0,
        "display-list" : !0,
        "display-outside" : !0,
        "dominant-baseline" : !1,
        elevation : !1,
        "empty-cells" : !1,
        filter : !1,
        flex : !1,
        "flex-basis" : !1,
        "flex-direction" : !1,
        "flex-flow" : !1,
        "flex-grow" : !1,
        "flex-shrink" : !1,
        "flex-wrap" : !1,
        float : !1,
        "float-offset" : !1,
        "flood-color" : !1,
        "flood-opacity" : !1,
        "flow-from" : !1,
        "flow-into" : !1,
        font : !0,
        "font-family" : !0,
        "font-feature-settings" : !0,
        "font-kerning" : !0,
        "font-language-override" : !0,
        "font-size" : !0,
        "font-size-adjust" : !0,
        "font-stretch" : !0,
        "font-style" : !0,
        "font-synthesis" : !0,
        "font-variant" : !0,
        "font-variant-alternates" : !0,
        "font-variant-caps" : !0,
        "font-variant-east-asian" : !0,
        "font-variant-ligatures" : !0,
        "font-variant-numeric" : !0,
        "font-variant-position" : !0,
        "font-weight" : !0,
        grid : !1,
        "grid-area" : !1,
        "grid-auto-columns" : !1,
        "grid-auto-flow" : !1,
        "grid-auto-rows" : !1,
        "grid-column" : !1,
        "grid-column-end" : !1,
        "grid-column-start" : !1,
        "grid-row" : !1,
        "grid-row-end" : !1,
        "grid-row-start" : !1,
        "grid-template" : !1,
        "grid-template-areas" : !1,
        "grid-template-columns" : !1,
        "grid-template-rows" : !1,
        "hanging-punctuation" : !1,
        height : !0,
        hyphens : !1,
        icon : !1,
        "image-orientation" : !1,
        "image-resolution" : !1,
        "ime-mode" : !1,
        "initial-letters" : !1,
        "inline-box-align" : !1,
        "justify-content" : !1,
        "justify-items" : !1,
        "justify-self" : !1,
        left : !1,
        "letter-spacing" : !0,
        "lighting-color" : !0,
        "line-box-contain" : !1,
        "line-break" : !1,
        "line-grid" : !1,
        "line-height" : !1,
        "line-snap" : !1,
        "line-stacking" : !1,
        "line-stacking-ruby" : !1,
        "line-stacking-shift" : !1,
        "line-stacking-strategy" : !1,
        "list-style" : !0,
        "list-style-image" : !0,
        "list-style-position" : !0,
        "list-style-type" : !0,
        margin : !0,
        "margin-bottom" : !0,
        "margin-left" : !0,
        "margin-right" : !0,
        "margin-top" : !0,
        "marker-offset" : !1,
        "marker-side" : !1,
        marks : !1,
        mask : !1,
        "mask-box" : !1,
        "mask-box-outset" : !1,
        "mask-box-repeat" : !1,
        "mask-box-slice" : !1,
        "mask-box-source" : !1,
        "mask-box-width" : !1,
        "mask-clip" : !1,
        "mask-image" : !1,
        "mask-origin" : !1,
        "mask-position" : !1,
        "mask-repeat" : !1,
        "mask-size" : !1,
        "mask-source-type" : !1,
        "mask-type" : !1,
        "max-height" : !0,
        "max-lines" : !1,
        "max-width" : !0,
        "min-height" : !0,
        "min-width" : !0,
        "move-to" : !1,
        "nav-down" : !1,
        "nav-index" : !1,
        "nav-left" : !1,
        "nav-right" : !1,
        "nav-up" : !1,
        "object-fit" : !1,
        "object-position" : !1,
        opacity : !1,
        order : !1,
        orphans : !1,
        outline : !1,
        "outline-color" : !1,
        "outline-offset" : !1,
        "outline-style" : !1,
        "outline-width" : !1,
        overflow : !1,
        "overflow-wrap" : !1,
        "overflow-x" : !1,
        "overflow-y" : !1,
        padding : !0,
        "padding-bottom" : !0,
        "padding-left" : !0,
        "padding-right" : !0,
        "padding-top" : !0,
        page : !1,
        "page-break-after" : !1,
        "page-break-before" : !1,
        "page-break-inside" : !1,
        "page-policy" : !1,
        pause : !1,
        "pause-after" : !1,
        "pause-before" : !1,
        perspective : !1,
        "perspective-origin" : !1,
        pitch : !1,
        "pitch-range" : !1,
        "play-during" : !1,
        position : !1,
        "presentation-level" : !1,
        quotes : !1,
        "region-fragment" : !1,
        resize : !1,
        rest : !1,
        "rest-after" : !1,
        "rest-before" : !1,
        richness : !1,
        right : !1,
        rotation : !1,
        "rotation-point" : !1,
        "ruby-align" : !1,
        "ruby-merge" : !1,
        "ruby-position" : !1,
        "shape-image-threshold" : !1,
        "shape-outside" : !1,
        "shape-margin" : !1,
        size : !1,
        speak : !1,
        "speak-as" : !1,
        "speak-header" : !1,
        "speak-numeral" : !1,
        "speak-punctuation" : !1,
        "speech-rate" : !1,
        stress : !1,
        "string-set" : !1,
        "tab-size" : !1,
        "table-layout" : !1,
        "text-align" : !0,
        "text-align-last" : !0,
        "text-combine-upright" : !0,
        "text-decoration" : !0,
        "text-decoration-color" : !0,
        "text-decoration-line" : !0,
        "text-decoration-skip" : !0,
        "text-decoration-style" : !0,
        "text-emphasis" : !0,
        "text-emphasis-color" : !0,
        "text-emphasis-position" : !0,
        "text-emphasis-style" : !0,
        "text-height" : !0,
        "text-indent" : !0,
        "text-justify" : !0,
        "text-orientation" : !0,
        "text-overflow" : !0,
        "text-shadow" : !0,
        "text-space-collapse" : !0,
        "text-transform" : !0,
        "text-underline-position" : !0,
        "text-wrap" : !0,
        top : !1,
        transform : !1,
        "transform-origin" : !1,
        "transform-style" : !1,
        transition : !1,
        "transition-delay" : !1,
        "transition-duration" : !1,
        "transition-property" : !1,
        "transition-timing-function" : !1,
        "unicode-bidi" : !1,
        "vertical-align" : !1,
        visibility : !1,
        "voice-balance" : !1,
        "voice-duration" : !1,
        "voice-family" : !1,
        "voice-pitch" : !1,
        "voice-range" : !1,
        "voice-rate" : !1,
        "voice-stress" : !1,
        "voice-volume" : !1,
        volume : !1,
        "white-space" : !1,
        widows : !1,
        width : !0,
        "will-change" : !1,
        "word-break" : !0,
        "word-spacing" : !0,
        "word-wrap" : !0,
        "wrap-flow" : !1,
        "wrap-through" : !1,
        "writing-mode" : !1,
        "z-index" : !1
      };
      return e
    }
    var r = /javascript\s*\:/gim;
    t.whiteList = n(), t.getDefaultWhiteList = n,
    t.onAttr = function(e, t, n) {}, t.onIgnoreAttr = function(e, t, n) {},
    t.safeAttrValue = function(e, t) { return r.test(t) ? "" : t }
  },
  function(e, t) {
    e.exports = {
      indexOf : function(e, t) {
        var n, r;
        if (Array.prototype.indexOf)
          return e.indexOf(t);
        for (n = 0, r = e.length; n < r; n++)
          if (e[n] === t)
            return n;
        return -1
      },
      forEach : function(e, t, n) {
        var r, i;
        if (Array.prototype.forEach)
          return e.forEach(t, n);
        for (r = 0, i = e.length; r < i; r++)
          t.call(n, e[r], r, e)
      },
      trim : function(e) {
        return String.prototype.trim ? e.trim()
                                     : e.replace(/(^\s*)|(\s*$)/g, "")
      },
      trimRight : function(e) {
        return String.prototype.trimRight ? e.trimRight()
                                          : e.replace(/(\s*$)/g, "")
      }
    }
  },
  function(e, t, n) {
    var r = n(1);
    function i(e) {
      var t = r.spaceIndex(e);
      if (-1 === t)
        var n = e.slice(1, -1);
      else
        n = e.slice(1, t + 1);
      return "/" === (n = r.trim(n).toLowerCase()).slice(0, 1) &&
                 (n = n.slice(1)),
             "/" === n.slice(-1) && (n = n.slice(0, -1)), n
    }
    function o(e) { return "</" === e.slice(0, 2) }
    var s = /[^a-zA-Z0-9_:\.\-]/gim;
    function a(e, t) {
      for (; t < e.length; t++) {
        var n = e[t];
        if (" " !== n)
          return "=" === n ? t : -1
      }
    }
    function l(e, t) {
      for (; t > 0; t--) {
        var n = e[t];
        if (" " !== n)
          return "=" === n ? t : -1
      }
    }
    function c(e) {
      return function(e) {
        return '"' === e[0] && '"' === e[e.length - 1] ||
               "'" === e[0] && "'" === e[e.length - 1]
      }(e)
                 ? e.substr(1, e.length - 2)
                 : e
    }
    t.parseTag = function(e, t, n) {
      var r = "", s = 0, a = !1, l = !1, c = 0, u = e.length, p = "", h = "";
      for (c = 0; c < u; c++) {
        var g = e.charAt(c);
        if (!1 === a) {
          if ("<" === g) {
            a = c;
            continue
          }
        } else if (!1 === l) {
          if ("<" === g) {
            r += n(e.slice(s, c)), a = c, s = c;
            continue
          }
          if (">" === g) {
            r += n(e.slice(s, a)), p = i(h = e.slice(a, c + 1)),
                                   r += t(a, r.length, p, h, o(h)), s = c + 1,
                                   a = !1;
            continue
          }
          if (('"' === g || "'" === g) && "=" === e.charAt(c - 1)) {
            l = g;
            continue
          }
        } else if (g === l) {
          l = !1;
          continue
        }
      }
      return s < e.length && (r += n(e.substr(s))), r
    }, t.parseAttr = function(e, t) {
      var n = 0, i = [], o = !1, u = e.length;
      function p(e, n) {
        if (!((e = (e = r.trim(e)).replace(s, "").toLowerCase()).length < 1)) {
          var o = t(e, n || "");
          o && i.push(o)
        }
      }
      for (var h = 0; h < u; h++) {
        var g, f = e.charAt(h);
        if (!1 !== o || "=" !== f)
          if (!1 === o || h !== n || '"' !== f && "'" !== f ||
              "=" !== e.charAt(h - 1)) {
            if (/\s|\n|\t/.test(f)) {
              if (e = e.replace(/\s|\n|\t/g, " "), !1 === o) {
                if (-1 === (g = a(e, h))) {
                  p(r.trim(e.slice(n, h))), o = !1, n = h + 1;
                  continue
                }
                h = g - 1;
                continue
              }
              if (-1 === (g = l(e, h - 1))) {
                p(o, c(r.trim(e.slice(n, h)))), o = !1, n = h + 1;
                continue
              }
            }
          } else {
            if (-1 === (g = e.indexOf(f, h + 1)))
              break;
            p(o, r.trim(e.slice(n + 1, g))), o = !1, n = (h = g) + 1
          }
        else
          o = e.slice(n, h), n = h + 1
      }
      return n < e.length &&
                 (!1 === o ? p(e.slice(n)) : p(o, c(r.trim(e.slice(n))))),
             r.trim(i.join(" "))
    }
  },
  function(e, t, n) {
    (function(r) {
      var i;
      function o(e) {
        return (o = "function" == typeof Symbol &&
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
      !function(r) {
        "use strict";
        var s = {
          newline : /^\n+/,
          code : /^( {4}[^\n]+\n*)+/,
          fences : k,
          hr : /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
          heading : /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
          nptable : k,
          blockquote : /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
          list :
              /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
          html :
              "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
          def :
              /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
          table : k,
          lheading : /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
          paragraph :
              /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
          text : /^[^\n]+/
        };
        function a(e) {
          this.tokens = [], this.tokens.links = Object.create(null),
          this.options = e || A.defaults, this.rules = s.normal,
          this.options.pedantic
              ? this.rules = s.pedantic
              : this.options.gfm && (this.options.tables ? this.rules = s.tables
                                                         : this.rules = s.gfm)
        }
        s._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
        s._title =
            /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
        s.def = m(s.def)
                    .replace("label", s._label)
                    .replace("title", s._title)
                    .getRegex(),
        s.bullet = /(?:[*+-]|\d{1,9}\.)/,
        s.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,
        s.item = m(s.item, "gm").replace(/bull/g, s.bullet).getRegex(),
        s.list =
            m(s.list)
                .replace(/bull/g, s.bullet)
                .replace(
                    "hr",
                    "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))")
                .replace("def", "\\n+(?=" + s.def.source + ")")
                .getRegex(),
        s._tag =
            "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
        s._comment = /<!--(?!-?>)[\s\S]*?-->/,
        s.html =
            m(s.html, "i")
                .replace("comment", s._comment)
                .replace("tag", s._tag)
                .replace(
                    "attribute",
                    / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
                .getRegex(),
        s.paragraph = m(s.paragraph)
                          .replace("hr", s.hr)
                          .replace("heading", s.heading)
                          .replace("lheading", s.lheading)
                          .replace("tag", s._tag)
                          .getRegex(),
        s.blockquote =
            m(s.blockquote).replace("paragraph", s.paragraph).getRegex(),
        s.normal = v({}, s),
        s.gfm = v({}, s.normal, {
          fences :
              /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
          paragraph : /^/,
          heading : /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
        }),
        s.gfm.paragraph =
            m(s.paragraph)
                .replace("(?!",
                         "(?!" + s.gfm.fences.source.replace("\\1", "\\2") +
                             "|" + s.list.source.replace("\\1", "\\3") + "|")
                .getRegex(),
        s.tables = v({}, s.gfm, {
          nptable :
              /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
          table :
              /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
        }),
        s.pedantic = v({}, s.normal, {
          html :
              m("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))")
                  .replace("comment", s._comment)
                  .replace(
                      /tag/g,
                      "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b")
                  .getRegex(),
          def :
              /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
        }),
        a.rules = s, a.lex = function(e, t) { return new a(t).lex(e) },
        a.prototype.lex = function(e) {
          return e = e.replace(/\r\n|\r/g, "\n")
                         .replace(/\t/g, "    ")
                         .replace(/\u00a0/g, " ")
                         .replace(/\u2424/g, "\n"),
                 this.token(e, !0)
        }, a.prototype.token = function(e, t) {
          var n, r, i, o, a, l, c, u, p, h, g, f, d, m, b, y;
          for (e = e.replace(/^ +$/gm, ""); e;)
            if ((i = this.rules.newline.exec(e)) &&
                    (e = e.substring(i[0].length),
                     i[0].length > 1 && this.tokens.push({type : "space"})),
                i = this.rules.code.exec(e))
              e = e.substring(i[0].length), i = i[0].replace(/^ {4}/gm, ""),
              this.tokens.push({
                type : "code",
                text : this.options.pedantic ? i : _(i, "\n")
              });
            else if (i = this.rules.fences.exec(e))
              e = e.substring(i[0].length), this.tokens.push({
                type : "code",
                lang : i[2] ? i[2].trim() : i[2],
                text : i[3] || ""
              });
            else if (i = this.rules.heading.exec(e))
              e = e.substring(i[0].length),
              this.tokens.push(
                  {type : "heading", depth : i[1].length, text : i[2]});
            else if ((i = this.rules.nptable.exec(e)) &&
                     (l = {
                       type : "table",
                       header : w(i[1].replace(/^ *| *\| *$/g, "")),
                       align : i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                       cells : i[3] ? i[3].replace(/\n$/, "").split("\n") : []
                     }).header.length === l.align.length) {
              for (e = e.substring(i[0].length), g = 0; g < l.align.length; g++)
                / ^ * -+: * $ /.test(l.align[g])
                    ? l.align[g] = "right"
                    : /^ *:-+: *$/.test(l.align[g])
                          ? l.align[g] = "center"
                          : /^ *:-+ *$/.test(l.align[g]) ? l.align[g] = "left"
                                                         : l.align[g] = null;
              for (g = 0; g < l.cells.length; g++)
                l.cells[g] = w(l.cells[g], l.header.length);
              this.tokens.push(l)
            } else if (i = this.rules.hr.exec(e))
              e = e.substring(i[0].length), this.tokens.push({type : "hr"});
            else if (i = this.rules.blockquote.exec(e))
              e = e.substring(i[0].length),
              this.tokens.push({type : "blockquote_start"}),
              i = i[0].replace(/^ *> ?/gm, ""), this.token(i, t),
              this.tokens.push({type : "blockquote_end"});
            else if (i = this.rules.list.exec(e)) {
              for (e = e.substring(i[0].length), c = {
                     type : "list_start",
                     ordered : m = (o = i[2]).length > 1,
                     start : m ? +o : "",
                     loose : !1
                   },
                  this.tokens.push(c), u = [], n = !1,
                  d = (i = i[0].match(this.rules.item)).length, g = 0;
                   g < d; g++)
                h = (l = i[g]).length,
                ~(l = l.replace(/^ *([*+-]|\d+\.) */, "")).indexOf("\n ") &&
                    (h -= l.length,
                     l = this.options.pedantic
                             ? l.replace(/^ {1,4}/gm, "")
                             : l.replace(new RegExp("^ {1," + h + "}", "gm"),
                                         "")),
                g !== d - 1 &&
                    (a = s.bullet.exec(i[g + 1])[0],
                     (o.length > 1 ? 1 === a.length
                                   : a.length > 1 ||
                                         this.options.smartLists && a !== o) &&
                         (e = i.slice(g + 1).join("\n") + e, g = d - 1)),
                r = n || /\n\n(?!\s*$)/.test(l),
                g !== d - 1 &&
                    (n = "\n" === l.charAt(l.length - 1), r || (r = n)),
                r && (c.loose = !0), y = void 0,
                (b = /^\[[ xX]\] /.test(l)) &&
                    (y = " " !== l[1], l = l.replace(/^\[[ xX]\] +/, "")),
                p = {
                  type : "list_item_start",
                  task : b,
                  checked : y,
                  loose : r
                },
                u.push(p), this.tokens.push(p), this.token(l, !1),
                this.tokens.push({type : "list_item_end"});
              if (c.loose)
                for (d = u.length, g = 0; g < d; g++)
                  u[g].loose = !0;
              this.tokens.push({type : "list_end"})
            } else if (i = this.rules.html.exec(e))
              e = e.substring(i[0].length), this.tokens.push({
                type : this.options.sanitize ? "paragraph" : "html",
                pre : !this.options.sanitizer &&
                          ("pre" === i[1] || "script" === i[1] ||
                           "style" === i[1]),
                text : i[0]
              });
            else if (t && (i = this.rules.def.exec(e)))
              e = e.substring(i[0].length),
              i[3] && (i[3] = i[3].substring(1, i[3].length - 1)),
              f = i[1].toLowerCase().replace(/\s+/g, " "),
              this.tokens.links[f] ||
                  (this.tokens.links[f] = {href : i[2], title : i[3]});
            else if ((i = this.rules.table.exec(e)) &&
                     (l = {
                       type : "table",
                       header : w(i[1].replace(/^ *| *\| *$/g, "")),
                       align : i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                       cells : i[3] ? i[3].replace(/\n$/, "").split("\n") : []
                     }).header.length === l.align.length) {
              for (e = e.substring(i[0].length), g = 0; g < l.align.length; g++)
                / ^ * -+: * $ /.test(l.align[g])
                    ? l.align[g] = "right"
                    : /^ *:-+: *$/.test(l.align[g])
                          ? l.align[g] = "center"
                          : /^ *:-+ *$/.test(l.align[g]) ? l.align[g] = "left"
                                                         : l.align[g] = null;
              for (g = 0; g < l.cells.length; g++)
                l.cells[g] = w(l.cells[g].replace(/^ *\| *| *\| *$/g, ""),
                               l.header.length);
              this.tokens.push(l)
            } else if (i = this.rules.lheading.exec(e))
              e = e.substring(i[0].length), this.tokens.push({
                type : "heading",
                depth : "=" === i[2] ? 1 : 2,
                text : i[1]
              });
            else if (t && (i = this.rules.paragraph.exec(e)))
              e = e.substring(i[0].length), this.tokens.push({
                type : "paragraph",
                text : "\n" === i[1].charAt(i[1].length - 1) ? i[1].slice(0, -1)
                                                             : i[1]
              });
            else if (i = this.rules.text.exec(e))
              e = e.substring(i[0].length),
              this.tokens.push({type : "text", text : i[0]});
            else if (e)
              throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
          return this.tokens
        };
        var l = {
          escape : /^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,
          autolink : /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
          url : k,
          tag :
              "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
          link : /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
          reflink : /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
          nolink :
              /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
          strong :
              /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
          em :
              /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
          code : /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
          br : /^( {2,}|\\)\n(?!\s*$)/,
          del : k,
          text :
              /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
        };
        function c(e, t) {
          if (this.options = t || A.defaults, this.links = e,
              this.rules = l.normal,
              this.renderer = this.options.renderer || new u,
              this.renderer.options = this.options, !this.links)
            throw new Error("Tokens array requires a `links` property.");
          this.options.pedantic
              ? this.rules = l.pedantic
              : this.options.gfm && (this.options.breaks ? this.rules = l.breaks
                                                         : this.rules = l.gfm)
        }
        function u(e) { this.options = e || A.defaults }
        function p() {}
        function h(e) {
          this.tokens = [], this.token = null, this.options = e || A.defaults,
          this.options.renderer = this.options.renderer || new u,
          this.renderer = this.options.renderer,
          this.renderer.options = this.options, this.slugger = new g
        }
        function g() {
          this.seen = {}
        }
        function f(e, t) {
          if (t) {
            if (f.escapeTest.test(e))
              return e.replace(f.escapeReplace,
                               function(e) { return f.replacements[e] })
          } else if (f.escapeTestNoEncode.test(e))
            return e.replace(f.escapeReplaceNoEncode,
                             function(e) { return f.replacements[e] });
          return e
        }
        function d(e) {
          return e.replace(
              /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function(e, t) {
                return "colon" === (t = t.toLowerCase())
                           ? ":"
                           : "#" === t.charAt(0)
                                 ? "x" === t.charAt(1)
                                       ? String.fromCharCode(
                                             parseInt(t.substring(2), 16))
                                       : String.fromCharCode(+t.substring(1))
                                 : ""
              })
        }
        function m(e, t) {
          return e = e.source || e, t = t || "", {
            replace: function(t, n) {
              return n = (n = n.source || n).replace(/(^|[^\[])\^/g, "$1"),
                     e = e.replace(t, n), this
            }, getRegex: function() { return new RegExp(e, t) }
          }
        }
        function b(e, t, n) {
          if (e) {
            try {
              var r =
                  decodeURIComponent(d(n)).replace(/[^\w:]/g, "").toLowerCase()
            } catch (i) {
              return null
            }
            if (0 === r.indexOf("javascript:") ||
                0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:"))
              return null
          }
          t && !x.test(n) && (n = function(e, t) {
            y[" " + e] ||
                (/^[^:]+:\/*[^\/]*$/.test(e) ? y[" " + e] = e + "/"
                                             : y[" " + e] = _(e, "/", !0));
            return e = y[" " + e],
                   "//" === t.slice(0, 2)
                       ? e.replace(/:[\s\S]*/, ":") + t
                       : "/" === t.charAt(0)
                             ? e.replace(/(:\/*[^\/]*)[\s\S]*/, "$1") + t
                             : e + t
          }(t, n));
          try {
            n = encodeURI(n).replace(/%25/g, "%")
          } catch (i) {
            return null
          }
          return n
        }
        l._punctuation = "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~",
        l.em = m(l.em).replace(/punctuation/g, l._punctuation).getRegex(),
        l._escapes = /\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g,
        l._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,
        l._email =
            /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
        l.autolink = m(l.autolink)
                         .replace("scheme", l._scheme)
                         .replace("email", l._email)
                         .getRegex(),
        l._attribute =
            /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
        l.tag = m(l.tag)
                    .replace("comment", s._comment)
                    .replace("attribute", l._attribute)
                    .getRegex(),
        l._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|`(?!`)|[^\[\]\\`])*?/,
        l._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/,
        l._title =
            /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
        l.link = m(l.link)
                     .replace("label", l._label)
                     .replace("href", l._href)
                     .replace("title", l._title)
                     .getRegex(),
        l.reflink = m(l.reflink).replace("label", l._label).getRegex(),
        l.normal = v({}, l),
        l.pedantic = v({}, l.normal, {
          strong :
              /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
          em : /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
          link : m(/^!?\[(label)\]\((.*?)\)/)
                     .replace("label", l._label)
                     .getRegex(),
          reflink : m(/^!?\[(label)\]\s*\[([^\]]*)\]/)
                        .replace("label", l._label)
                        .getRegex()
        }),
        l.gfm = v({}, l.normal, {
          escape : m(l.escape).replace("])", "~|])").getRegex(),
          _extended_email :
              /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
          url :
              /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
          _backpedal :
              /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
          del : /^~+(?=\S)([\s\S]*?\S)~+/,
          text :
              /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
        }),
        l.gfm.url = m(l.gfm.url, "i")
                        .replace("email", l.gfm._extended_email)
                        .getRegex(),
        l.breaks = v({}, l.gfm, {
          br : m(l.br).replace("{2,}", "*").getRegex(),
          text : m(l.gfm.text).replace(/\{2,\}/g, "*").getRegex()
        }),
        c.rules = l,
        c.output = function(e, t, n) { return new c(t, n).output(e) },
        c.prototype.output =
            function(e) {
          for (var t, n, r, i, o, s, a = ""; e;)
            if (o = this.rules.escape.exec(e))
              e = e.substring(o[0].length), a += f(o[1]);
            else if (o = this.rules.tag.exec(e))
              !this.inLink && /^<a /i.test(o[0])
                  ? this.inLink = !0
                  : this.inLink && /^<\/a>/i.test(o[0]) && (this.inLink = !1),
                    !this.inRawBlock &&
                            /^<(pre|code|kbd|script)(\s|>)/i.test(o[0])
                        ? this.inRawBlock = !0
                        : this.inRawBlock &&
                              /^<\/(pre|code|kbd|script)(\s|>)/i.test(o[0]) &&
                              (this.inRawBlock = !1),
                    e = e.substring(o[0].length),
                    a += this.options.sanitize
                             ? this.options.sanitizer
                                   ? this.options.sanitizer(o[0])
                                   : f(o[0])
                             : o[0];
            else if (o = this.rules.link.exec(e)) {
              var l = S(o[2], "()");
              if (l > -1) {
                var u = o[0].length - (o[2].length - l) - (o[3] || "").length;
                o[2] = o[2].substring(0, l), o[0] = o[0].substring(0, u).trim(),
                o[3] = ""
              }
              e = e.substring(o[0].length), this.inLink = !0, r = o[2],
              this.options.pedantic
                  ? (t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r))
                        ? (r = t[1], i = t[3])
                        : i = ""
                  : i = o[3] ? o[3].slice(1, -1) : "",
              r = r.trim().replace(/^<([\s\S]*)>$/, "$1"),
              a += this.outputLink(o,
                                   {href : c.escapes(r), title : c.escapes(i)}),
              this.inLink = !1
            } else if ((o = this.rules.reflink.exec(e)) ||
                       (o = this.rules.nolink.exec(e))) {
              if (e = e.substring(o[0].length),
                  t = (o[2] || o[1]).replace(/\s+/g, " "),
                  !(t = this.links[t.toLowerCase()]) || !t.href) {
                a += o[0].charAt(0), e = o[0].substring(1) + e;
                continue
              }
              this.inLink = !0, a += this.outputLink(o, t), this.inLink = !1
            } else if (o = this.rules.strong.exec(e))
              e = e.substring(o[0].length),
              a += this.renderer.strong(
                  this.output(o[4] || o[3] || o[2] || o[1]));
            else if (o = this.rules.em.exec(e))
              e = e.substring(o[0].length),
              a += this.renderer.em(
                  this.output(o[6] || o[5] || o[4] || o[3] || o[2] || o[1]));
            else if (o = this.rules.code.exec(e))
              e = e.substring(o[0].length),
              a += this.renderer.codespan(f(o[2].trim(), !0));
            else if (o = this.rules.br.exec(e))
              e = e.substring(o[0].length), a += this.renderer.br();
            else if (o = this.rules.del.exec(e))
              e = e.substring(o[0].length),
              a += this.renderer.del(this.output(o[1]));
            else if (o = this.rules.autolink.exec(e))
              e = e.substring(o[0].length),
              r = "@" === o[2] ? "mailto:" + (n = f(this.mangle(o[1])))
                               : n = f(o[1]),
              a += this.renderer.link(r, null, n);
            else if (this.inLink || !(o = this.rules.url.exec(e))) {
              if (o = this.rules.text.exec(e))
                e = e.substring(o[0].length),
                this.inRawBlock
                    ? a += this.renderer.text(o[0])
                    : a += this.renderer.text(f(this.smartypants(o[0])));
              else if (e)
                throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
            } else {
              if ("@" === o[2])
                r = "mailto:" + (n = f(o[0]));
              else {
                do {
                  s = o[0], o[0] = this.rules._backpedal.exec(o[0])[0]
                } while (s !== o[0]);
                n = f(o[0]), r = "www." === o[1] ? "http://" + n : n
              }
              e = e.substring(o[0].length), a += this.renderer.link(r, null, n)
            }
          return a
        },
        c.escapes = function(
            e) { return e ? e.replace(c.rules._escapes, "$1") : e },
        c.prototype.outputLink =
            function(e, t) {
          var n = t.href, r = t.title ? f(t.title) : null;
          return "!" !== e[0].charAt(0)
                     ? this.renderer.link(n, r, this.output(e[1]))
                     : this.renderer.image(n, r, f(e[1]))
        },
        c.prototype.smartypants =
            function(e) {
          return this.options.smartypants
                     ? e.replace(/---/g, "—")
                           .replace(/--/g, "–")
                           .replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘")
                           .replace(/'/g, "’")
                           .replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“")
                           .replace(/"/g, "”")
                           .replace(/\.{3}/g, "…")
                     : e
        },
        c.prototype.mangle =
            function(e) {
          if (!this.options.mangle)
            return e;
          for (var t, n = "", r = e.length, i = 0; i < r; i++)
            t = e.charCodeAt(i),
            Math.random() > .5 && (t = "x" + t.toString(16)),
            n += "&#" + t + ";";
          return n
        },
        u.prototype.code =
            function(e, t, n) {
          var r = (t || "").match(/\S*/)[0];
          if (this.options.highlight) {
            var i = this.options.highlight(e, r);
            null != i && i !== e && (n = !0, e = i)
          }
          return r ? '<pre><code class="' + this.options.langPrefix + f(r, !0) +
                         '">' + (n ? e : f(e, !0)) + "</code></pre>\n"
                   : "<pre><code>" + (n ? e : f(e, !0)) + "</code></pre>"
        },
        u.prototype.blockquote = function(
            e) { return "<blockquote>\n" + e + "</blockquote>\n" },
        u.prototype.html = function(e) { return e },
        u.prototype.heading =
            function(e, t, n, r) {
          return this.options.headerIds
                     ? "<h" + t + ' id="' + this.options.headerPrefix +
                           r.slug(n) + '">' + e + "</h" + t + ">\n"
                     : "<h" + t + ">" + e + "</h" + t + ">\n"
        },
        u.prototype.hr =
            function() { return this.options.xhtml ? "<hr/>\n" : "<hr>\n" },
        u.prototype.list =
            function(e, t, n) {
          var r = t ? "ol" : "ul";
          return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" +
                 e + "</" + r + ">\n"
        },
        u.prototype.listitem = function(e) { return "<li>" + e + "</li>\n" },
        u.prototype.checkbox =
            function(e) {
          return "<input " + (e ? 'checked="" ' : "") +
                 'disabled="" type="checkbox"' +
                 (this.options.xhtml ? " /" : "") + "> "
        },
        u.prototype.paragraph = function(e) { return "<p>" + e + "</p>\n" },
        u.prototype.table =
            function(e, t) {
          return t && (t = "<tbody>" + t + "</tbody>"),
                 "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
        },
        u.prototype.tablerow = function(e) { return "<tr>\n" + e + "</tr>\n" },
        u.prototype.tablecell =
            function(e, t) {
          var n = t.header ? "th" : "td";
          return (t.align ? "<" + n + ' align="' + t.align + '">'
                          : "<" + n + ">") +
                 e + "</" + n + ">\n"
        },
        u.prototype.strong = function(
            e) { return "<strong>" + e + "</strong>" },
        u.prototype.em = function(e) { return "<em>" + e + "</em>" },
        u.prototype.codespan = function(e) { return "<code>" + e + "</code>" },
        u.prototype.br =
            function() { return this.options.xhtml ? "<br/>" : "<br>" },
        u.prototype.del = function(e) { return "<del>" + e + "</del>" },
        u.prototype.link =
            function(e, t, n) {
          if (null === (e = b(this.options.sanitize, this.options.baseUrl, e)))
            return n;
          var r = '<a href="' + f(e) + '"';
          return t && (r += ' title="' + t + '"'), r += ">" + n + "</a>"
        },
        u.prototype.image =
            function(e, t, n) {
          if (null === (e = b(this.options.sanitize, this.options.baseUrl, e)))
            return n;
          var r = '<img src="' + e + '" alt="' + n + '"';
          return t && (r += ' title="' + t + '"'),
                 r += this.options.xhtml ? "/>" : ">"
        },
        u.prototype.text = function(e) { return e },
        p.prototype.strong = p.prototype.em = p.prototype.codespan =
            p.prototype.del = p.prototype.text = function(e) { return e },
        p.prototype.link =
            p.prototype.image = function(e, t, n) { return "" + n },
        p.prototype.br = function() { return "" },
        h.parse = function(e, t) { return new h(t).parse(e) },
        h.prototype.parse =
            function(e) {
          this.inline = new c(e.links, this.options),
          this.inlineText =
              new c(e.links, v({}, this.options, {renderer : new p})),
          this.tokens = e.reverse();
          for (var t = ""; this.next();)
            t += this.tok();
          return t
        },
        h.prototype.next = function() { return this.token = this.tokens.pop() },
        h.prototype.peek =
            function() { return this.tokens[this.tokens.length - 1] || 0 },
        h.prototype.parseText =
            function() {
          for (var e = this.token.text; "text" === this.peek().type;)
            e += "\n" + this.next().text;
          return this.inline.output(e)
        },
        h.prototype.tok =
            function() {
          switch (this.token.type) {
          case "space":
            return "";
          case "hr":
            return this.renderer.hr();
          case "heading":
            return this.renderer.heading(
                this.inline.output(this.token.text), this.token.depth,
                d(this.inlineText.output(this.token.text)), this.slugger);
          case "code":
            return this.renderer.code(this.token.text, this.token.lang,
                                      this.token.escaped);
          case "table":
            var e, t, n, r, i = "", o = "";
            for (n = "", e = 0; e < this.token.header.length; e++)
              n += this.renderer.tablecell(
                  this.inline.output(this.token.header[e]),
                  {header : !0, align : this.token.align[e]});
            for (i += this.renderer.tablerow(n), e = 0;
                 e < this.token.cells.length; e++) {
              for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++)
                n += this.renderer.tablecell(
                    this.inline.output(t[r]),
                    {header : !1, align : this.token.align[r]});
              o += this.renderer.tablerow(n)
            }
            return this.renderer.table(i, o);
          case "blockquote_start":
            for (o = ""; "blockquote_end" !== this.next().type;)
              o += this.tok();
            return this.renderer.blockquote(o);
          case "list_start":
            o = "";
            for (var s = this.token.ordered, a = this.token.start;
                 "list_end" !== this.next().type;)
              o += this.tok();
            return this.renderer.list(o, s, a);
          case "list_item_start":
            o = "";
            var l = this.token.loose, c = this.token.checked,
                u = this.token.task;
            for (this.token.task && (o += this.renderer.checkbox(c));
                 "list_item_end" !== this.next().type;)
              o += l || "text" !== this.token.type ? this.tok()
                                                   : this.parseText();
            return this.renderer.listitem(o, u, c);
          case "html":
            return this.renderer.html(this.token.text);
          case "paragraph":
            return this.renderer.paragraph(this.inline.output(this.token.text));
          case "text":
            return this.renderer.paragraph(this.parseText());
          default:
            var p = 'Token with "' + this.token.type + '" type was not found.';
            if (!this.options.silent)
              throw new Error(p);
            console.log(p)
          }
        },
        g.prototype.slug =
            function(e) {
          var t =
              e.toLowerCase()
                  .trim()
                  .replace(
                      /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g,
                      "")
                  .replace(/\s/g, "-");
          if (this.seen.hasOwnProperty(t)) {
            var n = t;
            do {
              this.seen[n]++, t = n + "-" + this.seen[n]
            } while (this.seen.hasOwnProperty(t))
          }
          return this.seen[t] = 0, t
        },
        f.escapeTest = /[&<>"']/, f.escapeReplace = /[&<>"']/g,
        f.replacements = {
          "&" : "&amp;",
          "<" : "&lt;",
          ">" : "&gt;",
          '"' : "&quot;",
          "'" : "&#39;"
        },
        f.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/,
        f.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
        var y = {}, x = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
        function k() {}
        function v(e) {
          for (var t, n, r = 1; r < arguments.length; r++)
            for (n in t = arguments[r])
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e
        }
        function w(e, t) {
          var n = e.replace(/\|/g, function(e, t, n) {
                     for (var r = !1, i = t; --i >= 0 && "\\" === n[i];)
                       r = !r;
                     return r ? "|" : " |"
                   }).split(/ \|/), r = 0;
          if (n.length > t)
            n.splice(t);
          else
            for (; n.length < t;)
              n.push("");
          for (; r < n.length; r++)
            n[r] = n[r].trim().replace(/\\\|/g, "|");
          return n
        }
        function _(e, t, n) {
          if (0 === e.length)
            return "";
          for (var r = 0; r < e.length;) {
            var i = e.charAt(e.length - r - 1);
            if (i !== t || n) {
              if (i === t || !n)
                break;
              r++
            } else
              r++
          }
          return e.substr(0, e.length - r)
        }
        function S(e, t) {
          if (-1 === e.indexOf(t[1]))
            return -1;
          for (var n = 0, r = 0; r < e.length; r++)
            if ("\\" === e[r])
              r++;
            else if (e[r] === t[0])
              n++;
            else if (e[r] === t[1] && --n < 0)
              return r;
          return -1
        }
        function A(e, t, n) {
          if (null == e)
            throw new Error("marked(): input parameter is undefined or null");
          if ("string" != typeof e)
            throw new Error("marked(): input parameter is of type " +
                            Object.prototype.toString.call(e) +
                            ", string expected");
          if (n || "function" == typeof t) {
            n || (n = t, t = null);
            var r, i, o = (t = v({}, A.defaults, t || {})).highlight, s = 0;
            try {
              r = a.lex(e, t)
            } catch (c) {
              return n(c)
            }
            i = r.length;
            var l = function(e) {
              if (e)
                return t.highlight = o, n(e);
              var i;
              try {
                i = h.parse(r, t)
              } catch (c) {
                e = c
              }
              return t.highlight = o, e ? n(e) : n(null, i)
            };
            if (!o || o.length < 3)
              return l();
            if (delete t.highlight, !i)
              return l();
            for (; s < r.length; s++)
              !function(e) {
                "code" !== e.type ? --i || l()
                                  : o(e.text, e.lang, function(t, n) {
                                      return t ? l(t)
                                               : null == n || n === e.text
                                                     ? --i || l()
                                                     : (e.text = n,
                                                        e.escaped = !0,
                                                        void (--i || l()))
                                    })
              }(r[s])
          } else
            try {
              return t && (t = v({}, A.defaults, t)), h.parse(a.lex(e, t), t)
            } catch (c) {
              if (c.message +=
                  "\nPlease report this to https://github.com/markedjs/marked.",
                  (t || A.defaults).silent)
                return "<p>An error occurred:</p><pre>" +
                       f(c.message + "", !0) + "</pre>";
              throw c
            }
        }
        k.exec = k,
        A.options = A.setOptions = function(e) { return v(A.defaults, e), A },
        A.getDefaults =
            function() {
          return {
            baseUrl: null, breaks: !1, gfm: !0, headerIds: !0, headerPrefix: "",
                highlight: null, langPrefix: "language-", mangle: !0,
                pedantic: !1, renderer: new u, sanitize: !1, sanitizer: null,
                silent: !1, smartLists: !1, smartypants: !1, tables: !0,
                xhtml: !1
          }
        },
        A.defaults = A.getDefaults(), A.Parser = h, A.parser = h.parse,
        A.Renderer = u, A.TextRenderer = p, A.Lexer = a, A.lexer = a.lex,
        A.InlineLexer = c, A.inlineLexer = c.output, A.Slugger = g, A.parse = A,
        "object" === o(t)
            ? e.exports = A
            : void 0 === (i = function() { return A }.call(t, n, t, e)) ||
                  (e.exports = i)
      }(this || "undefined" != typeof window && window)
    }).call(this, n(9))
  },
  function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "renderMarkdown", function() { return c });
    var r, i, o = n(7), s = n.n(o), a = n(2), l = n.n(a), c = function(e, t) {
      var n, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2]
                                                                 : {};
      return r || (r = Object.assign({}, l.a.whiteList,
                                     {"ha-icon" : [ "icon" ]})),
             o.allowSvg ? (i || (i = Object.assign({}, r, {
                             svg : [ "xmlns", "height", "width" ],
                             path : [ "transform", "stroke", "d" ]
                           })),
                           n = i)
                        : n = r,
                          l()(s()(e, t), {whiteList : n})
    };
    addEventListener("message", function(e) {
      var n, r = e.data, i = r.type, o = r.method, s = r.id, a = r.params;
      "RPC" === i && o &&
          ((n = t[o])
               ? Promise.resolve().then(function() { return n.apply(t, a) })
               : Promise.reject("No such method"))
              .then(function(
                  e) { postMessage({type : "RPC", id : s, result : e}) })
              .catch(function(e) {
                var t = {message : e};
                e.stack &&
                    (t.message = e.message, t.stack = e.stack, t.name = e.name),
                    postMessage({type : "RPC", id : s, error : t})
              })
    }), postMessage({type : "RPC", method : "ready"})
  },
  function(e, t) {
    function n(e) {
      return (n = "function" == typeof Symbol &&
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
    var r;
    r = function() { return this }();
    try {
      r = r || new Function("return this")()
    } catch (i) {
      "object" === ("undefined" == typeof window ? "undefined" : n(window)) &&
          (r = window)
    }
    e.exports = r
  },
  function(e, t, n) {
    var r = n(4), i = n(11);
    n(5);
    function o(e) { return null == e }
    function s(e) {
      (e =
           function(e) {
             var t = {};
             for (var n in e)
               t[n] = e[n];
             return t
           }(e || {}))
          .whiteList = e.whiteList || r.whiteList,
      e.onAttr = e.onAttr || r.onAttr,
      e.onIgnoreAttr = e.onIgnoreAttr || r.onIgnoreAttr,
      e.safeAttrValue = e.safeAttrValue || r.safeAttrValue, this.options = e
    }
    s.prototype.process = function(e) {
      if (!(e = (e = e || "").toString()))
        return "";
      var t = this.options, n = t.whiteList, r = t.onAttr, s = t.onIgnoreAttr,
          a = t.safeAttrValue;
      return i(e, function(e, t, i, l, c) {
        var u = n[i], p = !1;
        if (!0 === u ? p = u
                     : "function" == typeof u
                           ? p = u(l)
                           : u instanceof RegExp && (p = u.test(l)),
            !0 !== p && (p = !1), l = a(i, l)) {
          var h,
              g = {position : t, sourcePosition : e, source : c, isWhite : p};
          return p ? o(h = r(i, l, g)) ? i + ":" + l : h
                   : o(h = s(i, l, g)) ? void 0 : h
        }
      })
    }, e.exports = s
  },
  function(e, t, n) {
    var r = n(5);
    e.exports = function(e, t) {
      ";" !== (e = r.trimRight(e))[e.length - 1] && (e += ";");
      var n = e.length, i = !1, o = 0, s = 0, a = "";
      function l() {
        if (!i) {
          var n = r.trim(e.slice(o, s)), l = n.indexOf(":");
          if (-1 !== l) {
            var c = r.trim(n.slice(0, l)), u = r.trim(n.slice(l + 1));
            if (c) {
              var p = t(o, a.length, c, u, n);
              p && (a += p + "; ")
            }
          }
        }
        o = s + 1
      }
      for (; s < n; s++) {
        var c = e[s];
        if ("/" === c && "*" === e[s + 1]) {
          var u = e.indexOf("*/", s + 2);
          if (-1 === u)
            break;
          o = (s = u + 1) + 1, i = !1
        } else
          "(" === c
              ? i = !0
              : ")" === c ? i = !1 : ";" === c ? i || l() : "\n" === c && l()
      }
      return r.trim(a)
    }
  },
  function(e, t, n) {
    var r = n(0).FilterCSS, i = n(3), o = n(6), s = o.parseTag, a = o.parseAttr,
        l = n(1);
    function c(e) { return null == e }
    function u(e) {
      (e =
           function(e) {
             var t = {};
             for (var n in e)
               t[n] = e[n];
             return t
           }(e || {}))
              .stripIgnoreTag &&
          (e.onIgnoreTag &&
               console.error(
                   'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),
           e.onIgnoreTag = i.onIgnoreTagStripAll),
          e.whiteList = e.whiteList || i.whiteList,
          e.onTag = e.onTag || i.onTag,
          e.onTagAttr = e.onTagAttr || i.onTagAttr,
          e.onIgnoreTag = e.onIgnoreTag || i.onIgnoreTag,
          e.onIgnoreTagAttr = e.onIgnoreTagAttr || i.onIgnoreTagAttr,
          e.safeAttrValue = e.safeAttrValue || i.safeAttrValue,
          e.escapeHtml = e.escapeHtml || i.escapeHtml, this.options = e,
          !1 === e.css ? this.cssFilter = !1
                       : (e.css = e.css || {}, this.cssFilter = new r(e.css))
    }
    u.prototype.process = function(e) {
      if (!(e = (e = e || "").toString()))
        return "";
      var t = this.options, n = t.whiteList, r = t.onTag, o = t.onIgnoreTag,
          u = t.onTagAttr, p = t.onIgnoreTagAttr, h = t.safeAttrValue,
          g = t.escapeHtml, f = this.cssFilter;
      t.stripBlankChar && (e = i.stripBlankChar(e)),
          t.allowCommentTag || (e = i.stripCommentTag(e));
      var d = !1;
      if (t.stripIgnoreTagBody) {
        d = i.StripTagBody(t.stripIgnoreTagBody, o);
        o = d.onIgnoreTag
      }
      var m = s(e, function(e, t, i, s, d) {
        var m, b = {
          sourcePosition : e,
          position : t,
          isClosing : d,
          isWhite : n.hasOwnProperty(i)
        };
        if (!c(m = r(i, s, b)))
          return m;
        if (b.isWhite) {
          if (b.isClosing)
            return "</" + i + ">";
          var y = function(e) {
            var t = l.spaceIndex(e);
            if (-1 === t)
              return {html : "", closing : "/" === e[e.length - 2]};
            var n = "/" === (e = l.trim(e.slice(t + 1, -1)))[e.length - 1];
            return n && (e = l.trim(e.slice(0, -1))), { html: e, closing: n }
          }(s), x = n[i], k = a(y.html, function(e, t) {
                            var n, r = -1 !== l.indexOf(x, e);
                            return c(n = u(i, e, t, r))
                                       ? r ? (t = h(i, e, t, f))
                                                 ? e + '="' + t + '"'
                                                 : e
                                           : c(n = p(i, e, t, r)) ? void 0 : n
                                       : n
                          });
          s = "<" + i;
          return k && (s += " " + k), y.closing && (s += " /"), s += ">"
        }
        return c(m = o(i, s, b)) ? g(s) : m
      }, g);
      return d && (m = d.remove(m)), m
    }, e.exports = u
  }
]);
//# sourceMappingURL=a1ebfa0a88593a3b571c.worker.js.map