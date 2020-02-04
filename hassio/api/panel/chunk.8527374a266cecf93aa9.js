(self.webpackJsonp = self.webpackJsonp || []).push([
  [ 13 ], {
    169 : function(e, t, r) {
      "use strict";
      t.a =
          "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: 0;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre.CodeMirror-line,\n.CodeMirror-wrap pre.CodeMirror-line-like {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n"
    },
    170 : function(e, t, r) {
      (function(e) {
        var n, i, o, l;
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
        l =
            function(e) {
          "use strict";
          e.defineMode("yaml", function() {
            var e = new RegExp(
                "\\b((" +
                    [ "true", "false", "on", "off", "yes", "no" ].join(")|(") +
                    "))$",
                "i");
            return {
              token: function(t, r) {
                var n = t.peek(), i = r.escaped;
                if (r.escaped = !1,
                    "#" == n &&
                        (0 == t.pos || /\s/.test(t.string.charAt(t.pos - 1))))
                  return t.skipToEnd(), "comment";
                if (t.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))
                  return "string";
                if (r.literal && t.indentation() > r.keyCol)
                  return t.skipToEnd(), "string";
                if (r.literal && (r.literal = !1), t.sol()) {
                  if (r.keyCol = 0, r.pair = !1, r.pairStart = !1,
                      t.match(/---/))
                    return "def";
                  if (t.match(/\.\.\./))
                    return "def";
                  if (t.match(/\s*-\s+/))
                    return "meta"
                }
                if (t.match(/^(\{|\}|\[|\])/))
                  return "{" == n ? r.inlinePairs++
                                  : "}" == n ? r.inlinePairs--
                                             : "[" == n ? r.inlineList++
                                                        : r.inlineList--,
                         "meta";
                if (r.inlineList > 0 && !i && "," == n)
                  return t.next(), "meta";
                if (r.inlinePairs > 0 && !i && "," == n)
                  return r.keyCol = 0, r.pair = !1, r.pairStart = !1, t.next(),
                         "meta";
                if (r.pairStart) {
                  if (t.match(/^\s*(\||\>)\s*/))
                    return r.literal = !0, "meta";
                  if (t.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))
                    return "variable-2";
                  if (0 == r.inlinePairs && t.match(/^\s*-?[0-9\.\,]+\s?$/))
                    return "number";
                  if (r.inlinePairs > 0 &&
                      t.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))
                    return "number";
                  if (t.match(e))
                    return "keyword"
                }
                return !r.pair &&
                               t.match(
                                   /^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)
                           ? (r.pair = !0, r.keyCol = t.indentation(), "atom")
                           : r.pair && t.match(/^:\s*/)
                                 ? (r.pairStart = !0, "meta")
                                 : (r.pairStart = !1, r.escaped = "\\" == n,
                                    t.next(), null)
              }, startState: function() {
                return {
                  pair: !1, pairStart: !1, keyCol: 0, inlinePairs: 0,
                      inlineList: 0, literal: !1, escaped: !1
                }
              }, lineComment: "#", fold: "indent"
            }
          }), e.defineMIME("text/x-yaml", "yaml"), e.defineMIME("text/yaml", "yaml")
        },
        "object" == s(t) && "object" == s(e)
            ? l(r(54))
            : (i = [ r(54) ],
               void 0 ===
                       (o = "function" == typeof (n = l) ? n.apply(t, i) : n) ||
                   (e.exports = o))
      }).call(this, r(66)(e))
    },
    171 : function(e, t, r) {
      (function(e) {
        var n, i, o, l;
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
        l =
            function(e) {
          "use strict";
          e.defineMode("jinja2", function() {
            var e =
                    [
                      "and",
                      "as",
                      "block",
                      "endblock",
                      "by",
                      "cycle",
                      "debug",
                      "else",
                      "elif",
                      "extends",
                      "filter",
                      "endfilter",
                      "firstof",
                      "for",
                      "endfor",
                      "if",
                      "endif",
                      "ifchanged",
                      "endifchanged",
                      "ifequal",
                      "endifequal",
                      "ifnotequal",
                      "endifnotequal",
                      "in",
                      "include",
                      "load",
                      "not",
                      "now",
                      "or",
                      "parsed",
                      "regroup",
                      "reversed",
                      "spaceless",
                      "endspaceless",
                      "ssi",
                      "templatetag",
                      "openblock",
                      "closeblock",
                      "openvariable",
                      "closevariable",
                      "openbrace",
                      "closebrace",
                      "opencomment",
                      "closecomment",
                      "widthratio",
                      "url",
                      "with",
                      "endwith",
                      "get_current_language",
                      "trans",
                      "endtrans",
                      "noop",
                      "blocktrans",
                      "endblocktrans",
                      "get_available_languages",
                      "get_current_language_bidi",
                      "plural"
                    ],
                t = /^[+\-*&%=<>!?|~^]/, r = /^[:\[\(\{]/,
                n = [ "true", "false" ], i = /^(\d[+\-\*\/])?\d+(\.\d+)?/;
            function o(o, l) {
              var s = o.peek();
              if (l.incomment)
                return o.skipTo("#}") ? (o.eatWhile(/\#|}/), l.incomment = !1)
                                      : o.skipToEnd(),
                       "comment";
              if (l.intag) {
                if (l.operator) {
                  if (l.operator = !1, o.match(n))
                    return "atom";
                  if (o.match(i))
                    return "number"
                }
                if (l.sign) {
                  if (l.sign = !1, o.match(n))
                    return "atom";
                  if (o.match(i))
                    return "number"
                }
                if (l.instring)
                  return s == l.instring && (l.instring = !1), o.next(),
                         "string";
                if ("'" == s || '"' == s)
                  return l.instring = s, o.next(), "string";
                if (o.match(l.intag + "}") ||
                    o.eat("-") && o.match(l.intag + "}"))
                  return l.intag = !1, "tag";
                if (o.match(t))
                  return l.operator = !0, "operator";
                if (o.match(r))
                  l.sign = !0;
                else if (o.eat(" ") || o.sol()) {
                  if (o.match(e))
                    return "keyword";
                  if (o.match(n))
                    return "atom";
                  if (o.match(i))
                    return "number";
                  o.sol() && o.next()
                } else
                  o.next();
                return "variable"
              }
              if (o.eat("{")) {
                if (o.eat("#"))
                  return l.incomment = !0,
                         o.skipTo("#}") ? (o.eatWhile(/\#|}/), l.incomment = !1)
                                        : o.skipToEnd(),
                         "comment";
                if (s = o.eat(/\{|%/))
                  return l.intag = s, "{" == s && (l.intag = "}"), o.eat("-"),
                         "tag"
              }
              o.next()
            }
            return e = new RegExp("((" + e.join(")|(") + "))\\b"),
                   n = new RegExp("((" + n.join(")|(") + "))\\b"), {
              startState:
                  function() {
                    return { tokenize: o }
                  },
                  token: function(e, t) { return t.tokenize(e, t) },
                  blockCommentStart: "{#", blockCommentEnd: "#}"
            }
          }), e.defineMIME("text/jinja2", "jinja2")
        },
        "object" == s(t) && "object" == s(e)
            ? l(r(54))
            : (i = [ r(54) ],
               void 0 ===
                       (o = "function" == typeof (n = l) ? n.apply(t, i) : n) ||
                   (e.exports = o))
      }).call(this, r(66)(e))
    },
    54 : function(e, t, r) {
      var n, i, o;
      function l(e) {
        return (l = "function" == typeof Symbol &&
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
      o =
          function() {
        "use strict";
        var e = navigator.userAgent, t = navigator.platform,
            r = /gecko\/\d/i.test(e), n = /MSIE \d/.test(e),
            i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
            o = /Edge\/(\d+)/.exec(e), s = n || i || o,
            a = s && (n ? document.documentMode || 6 : +(o || i)[1]),
            u = !o && /WebKit\//.test(e), c = u && /Qt\/\d+\.\d+/.test(e),
            f = !o && /Chrome\//.test(e), d = /Opera\//.test(e),
            h = /Apple Computer/.test(navigator.vendor),
            p = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e), g = /PhantomJS/.test(e),
            m = !o && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
            v = /Android/.test(e),
            y = m || v ||
                /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
            b = m || /Mac/.test(t), w = /\bCrOS\b/.test(e), x = /win/i.test(t),
            C = d && e.match(/Version\/(\d*\.\d*)/);
        C && (C = Number(C[1])), C && C >= 15 && (d = !1, u = !0);
        var S = b && (c || d && (null == C || C < 12.11)), k = r || s && a >= 9;
        function M(e) { return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*") }
        var L, T = function(e, t) {
          var r = e.className, n = M(t).exec(r);
          if (n) {
            var i = r.slice(n.index + n[0].length);
            e.className = r.slice(0, n.index) + (i ? n[1] + i : "")
          }
        };
        function N(e) {
          for (var t = e.childNodes.length; t > 0; --t)
            e.removeChild(e.firstChild);
          return e
        }
        function O(e, t) { return N(e).appendChild(t) }
        function A(e, t, r, n) {
          var i = document.createElement(e);
          if (r && (i.className = r), n && (i.style.cssText = n),
              "string" == typeof t)
            i.appendChild(document.createTextNode(t));
          else if (t)
            for (var o = 0; o < t.length; ++o)
              i.appendChild(t[o]);
          return i
        }
        function D(e, t, r, n) {
          var i = A(e, t, r, n);
          return i.setAttribute("role", "presentation"), i
        }
        function W(e, t) {
          if (3 == t.nodeType && (t = t.parentNode), e.contains)
            return e.contains(t);
          do {
            if (11 == t.nodeType && (t = t.host), t == e)
              return !0
          } while (t = t.parentNode)
        }
        function H() {
          var e;
          try {
            e = document.activeElement
          } catch (We) {
            e = document.body || null
          }
          for (; e && e.shadowRoot && e.shadowRoot.activeElement;)
            e = e.shadowRoot.activeElement;
          return e
        }
        function z(e, t) {
          var r = e.className;
          M(t).test(r) || (e.className += (r ? " " : "") + t)
        }
        function F(e, t) {
          for (var r = e.split(" "), n = 0; n < r.length; n++)
            r[n] && !M(r[n]).test(t) && (t += " " + r[n]);
          return t
        }
        L = document.createRange ? function(e, t, r, n) {
          var i = document.createRange();
          return i.setEnd(n || e, r), i.setStart(e, t), i
        } : function(e, t, r) {
          var n = document.body.createTextRange();
          try {
            n.moveToElementText(e.parentNode)
          } catch (We) {
            return n
          }
          return n.collapse(!0), n.moveEnd("character", r),
                 n.moveStart("character", t), n
        };
        var P = function(e) { e.select() };
        function E(e) {
          var t = Array.prototype.slice.call(arguments, 1);
          return function() { return e.apply(null, t) }
        }
        function I(e, t, r) {
          for (var n in t || (t = {}), e)
            !e.hasOwnProperty(n) || !1 === r && t.hasOwnProperty(n) ||
                (t[n] = e[n]);
          return t
        }
        function R(e, t, r, n, i) {
          null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
          for (var o = n || 0, l = i || 0;;) {
            var s = e.indexOf("\t", o);
            if (s < 0 || s >= t)
              return l + (t - o);
            l += s - o, l += r - l % r, o = s + 1
          }
        }
        m ? P = function(
                e) { e.selectionStart = 0, e.selectionEnd = e.value.length }
          : s && (P = function(e) {
              try {
                e.select()
              } catch (t) {
              }
            });
        var B = function() { this.id = null };
        function G(e, t) {
          for (var r = 0; r < e.length; ++r)
            if (e[r] == t)
              return r;
          return -1
        }
        B.prototype.set = function(
            e, t) { clearTimeout(this.id), this.id = setTimeout(t, e) };
        var U = 30, V = {toString : function() { return "CodeMirror.Pass" }},
            j = {scroll : !1}, K = {origin : "*mouse"}, X = {origin : "+move"};
        function _(e, t, r) {
          for (var n = 0, i = 0;;) {
            var o = e.indexOf("\t", n);
            -1 == o && (o = e.length);
            var l = o - n;
            if (o == e.length || i + l >= t)
              return n + Math.min(l, t - i);
            if (i += o - n, n = o + 1, (i += r - i % r) >= t)
              return n
          }
        }
        var Y = [ "" ];
        function q(e) {
          for (; Y.length <= e;)
            Y.push($(Y) + " ");
          return Y[e]
        }
        function $(e) { return e[e.length - 1] }
        function Z(e, t) {
          for (var r = [], n = 0; n < e.length; n++)
            r[n] = t(e[n], n);
          return r
        }
        function J() {}
        function Q(e, t) {
          var r;
          return Object.create ? r = Object.create(e)
                               : (J.prototype = e, r = new J),
                                 t && I(t, r), r
        }
        var ee =
            /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
        function te(e) {
          return /\w/.test(e) ||
                 e > "" && (e.toUpperCase() != e.toLowerCase() || ee.test(e))
        }
        function re(e, t) {
          return t ? !!(t.source.indexOf("\\w") > -1 && te(e)) || t.test(e)
                   : te(e)
        }
        function ne(e) {
          for (var t in e)
            if (e.hasOwnProperty(t) && e[t])
              return !1;
          return !0
        }
        var ie =
            /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
        function oe(e) { return e.charCodeAt(0) >= 768 && ie.test(e) }
        function le(e, t, r) {
          for (; (r < 0 ? t > 0 : t < e.length) && oe(e.charAt(t));)
            t += r;
          return t
        }
        function se(e, t, r) {
          for (var n = t > r ? -1 : 1;;) {
            if (t == r)
              return t;
            var i = (t + r) / 2, o = n < 0 ? Math.ceil(i) : Math.floor(i);
            if (o == t)
              return e(o) ? t : r;
            e(o) ? r = o : t = o + n
          }
        }
        var ae = null;
        function ue(e, t, r) {
          var n;
          ae = null;
          for (var i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.from < t && o.to > t)
              return i;
            o.to == t && (o.from != o.to && "before" == r ? n = i : ae = i),
                o.from == t &&
                    (o.from != o.to && "before" != r ? n = i : ae = i)
          }
          return null != n ? n : ae
        }
        var ce = function() {
          var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
              t = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
          var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, n = /[stwN]/,
              i = /[LRr]/, o = /[Lb1n]/, l = /[1n]/;
          function s(e, t, r) { this.level = e, this.from = t, this.to = r }
          return function(a, u) {
            var c = "ltr" == u ? "L" : "R";
            if (0 == a.length || "ltr" == u && !r.test(a))
              return !1;
            for (var f, d = a.length, h = [], p = 0; p < d; ++p)
              h.push((f = a.charCodeAt(p)) <= 247
                         ? e.charAt(f)
                         : 1424 <= f && f <= 1524
                               ? "R"
                               : 1536 <= f && f <= 1785
                                     ? t.charAt(f - 1536)
                                     : 1774 <= f && f <= 2220
                                           ? "r"
                                           : 8192 <= f && f <= 8203
                                                 ? "w"
                                                 : 8204 == f ? "b" : "L");
            for (var g = 0, m = c; g < d; ++g) {
              var v = h[g];
              "m" == v ? h[g] = m : m = v
            }
            for (var y = 0, b = c; y < d; ++y) {
              var w = h[y];
              "1" == w && "r" == b
                  ? h[y] = "n"
                  : i.test(w) && (b = w, "r" == w && (h[y] = "R"))
            }
            for (var x = 1, C = h[0]; x < d - 1; ++x) {
              var S = h[x];
              "+" == S && "1" == C && "1" == h[x + 1]
                  ? h[x] = "1"
                  : "," != S || C != h[x + 1] || "1" != C && "n" != C ||
                        (h[x] = C),
                    C = S
            }
            for (var k = 0; k < d; ++k) {
              var M = h[k];
              if ("," == M)
                h[k] = "N";
              else if ("%" == M) {
                var L = void 0;
                for (L = k + 1; L < d && "%" == h[L]; ++L)
                  ;
                for (var T = k && "!" == h[k - 1] || L < d && "1" == h[L] ? "1"
                                                                          : "N",
                         N = k;
                     N < L; ++N)
                  h[N] = T;
                k = L - 1
              }
            }
            for (var O = 0, A = c; O < d; ++O) {
              var D = h[O];
              "L" == A && "1" == D ? h[O] = "L" : i.test(D) && (A = D)
            }
            for (var W = 0; W < d; ++W)
              if (n.test(h[W])) {
                var H = void 0;
                for (H = W + 1; H < d && n.test(h[H]); ++H)
                  ;
                for (var z = "L" == (W ? h[W - 1] : c),
                         F = z == ("L" == (H < d ? h[H] : c)) ? z ? "L" : "R"
                                                              : c,
                         P = W;
                     P < H; ++P)
                  h[P] = F;
                W = H - 1
              }
            for (var E, I = [], R = 0; R < d;)
              if (o.test(h[R])) {
                var B = R;
                for (++R; R < d && o.test(h[R]); ++R)
                  ;
                I.push(new s(0, B, R))
              } else {
                var G = R, U = I.length;
                for (++R; R < d && "L" != h[R]; ++R)
                  ;
                for (var V = G; V < R;)
                  if (l.test(h[V])) {
                    G < V && I.splice(U, 0, new s(1, G, V));
                    var j = V;
                    for (++V; V < R && l.test(h[V]); ++V)
                      ;
                    I.splice(U, 0, new s(2, j, V)), G = V
                  } else
                    ++V;
                G < R && I.splice(U, 0, new s(1, G, R))
              }
            return "ltr" == u && (1 == I[0].level && (E = a.match(/^\s+/)) &&
                                      (I[0].from = E[0].length,
                                       I.unshift(new s(0, 0, E[0].length))),
                                  1 == $(I).level && (E = a.match(/\s+$/)) &&
                                      ($(I).to -= E[0].length,
                                       I.push(new s(0, d - E[0].length, d)))),
                   "rtl" == u ? I.reverse() : I
          }
        }();
        function fe(e, t) {
          var r = e.order;
          return null == r && (r = e.order = ce(e.text, t)), r
        }
        var de = [], he = function(e, t, r) {
          if (e.addEventListener)
            e.addEventListener(t, r, !1);
          else if (e.attachEvent)
            e.attachEvent("on" + t, r);
          else {
            var n = e._handlers || (e._handlers = {});
            n[t] = (n[t] || de).concat(r)
          }
        };
        function pe(e, t) { return e._handlers && e._handlers[t] || de }
        function ge(e, t, r) {
          if (e.removeEventListener)
            e.removeEventListener(t, r, !1);
          else if (e.detachEvent)
            e.detachEvent("on" + t, r);
          else {
            var n = e._handlers, i = n && n[t];
            if (i) {
              var o = G(i, r);
              o > -1 && (n[t] = i.slice(0, o).concat(i.slice(o + 1)))
            }
          }
        }
        function me(e, t) {
          var r = pe(e, t);
          if (r.length)
            for (var n = Array.prototype.slice.call(arguments, 2), i = 0;
                 i < r.length; ++i)
              r[i].apply(null, n)
        }
        function ve(e, t, r) {
          return "string" == typeof t && (t = {
                   type : t,
                   preventDefault : function() { this.defaultPrevented = !0 }
                 }),
                 me(e, r || t.type, e, t), Se(t) || t.codemirrorIgnore
        }
        function ye(e) {
          var t = e._handlers && e._handlers.cursorActivity;
          if (t)
            for (var r = e.curOp.cursorActivityHandlers ||
                         (e.curOp.cursorActivityHandlers = []),
                     n = 0;
                 n < t.length; ++n)
              -1 == G(r, t[n]) && r.push(t[n])
        }
        function be(e, t) { return pe(e, t).length > 0 }
        function we(e) {
          e.prototype.on = function(e, t) { he(this, e, t) },
          e.prototype.off = function(e, t) { ge(this, e, t) }
        }
        function xe(e) {
          e.preventDefault ? e.preventDefault() : e.returnValue = !1
        }
        function Ce(e) {
          e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
        }
        function Se(e) {
          return null != e.defaultPrevented ? e.defaultPrevented
                                            : 0 == e.returnValue
        }
        function ke(e) { xe(e), Ce(e) }
        function Me(e) { return e.target || e.srcElement }
        function Le(e) {
          var t = e.which;
          return null == t &&
                     (1 & e.button
                          ? t = 1
                          : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)),
                 b && e.ctrlKey && 1 == t && (t = 3), t
        }
        var Te, Ne, Oe = function() {
          if (s && a < 9)
            return !1;
          var e = A("div");
          return "draggable" in e || "dragDrop" in e
        }();
        function Ae(e) {
          if (null == Te) {
            var t = A("span", "​");
            O(e, A("span", [ t, document.createTextNode("x") ])),
                0 != e.firstChild.offsetHeight &&
                    (Te = t.offsetWidth <= 1 && t.offsetHeight > 2 &&
                          !(s && a < 8))
          }
          var r =
              Te ? A("span", "​")
                 : A("span", " ", null,
                     "display: inline-block; width: 1px; margin-right: -1px");
          return r.setAttribute("cm-text", ""), r
        }
        function De(e) {
          if (null != Ne)
            return Ne;
          var t = O(e, document.createTextNode("AخA")),
              r = L(t, 0, 1).getBoundingClientRect(),
              n = L(t, 1, 2).getBoundingClientRect();
          return N(e),
                 !(!r || r.left == r.right) && (Ne = n.right - r.right < 3)
        }
        var We,He=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,r=[],n=e.length;t<=n;){var i=e.indexOf("\n",t);-1==i&&(i=e.length);var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),l=o.indexOf("\r");-1!=l?(r.push(o.slice(0,l)),t+=l+1):(r.push(o),t=i+1)}return r}:function(e){return e.split(/\r\n?|\n/)},ze=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(We){return!1}}:function(e){var t;try{t=e.ownerDocument.selection.createRange()}catch(We){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},Fe="oncopy"in(We=A("div"))||(We.setAttribute("oncopy","return;"),"function"==typeof We.oncopy),Pe=null,Ee={},Ie={};
        function Re(e) {
          if ("string" == typeof e && Ie.hasOwnProperty(e))
            e = Ie[e];
          else if (e && "string" == typeof e.name &&
                   Ie.hasOwnProperty(e.name)) {
            var t = Ie[e.name];
            "string" == typeof t && (t = {name : t}),
                (e = Q(t, e)).name = t.name
          } else {
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
              return Re("application/xml");
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
              return Re("application/json")
          }
          return "string" == typeof e ? {name : e} : e || { name: "null" }
        }
        function Be(e, t) {
          t = Re(t);
          var r = Ee[t.name];
          if (!r)
            return Be(e, "text/plain");
          var n = r(e, t);
          if (Ge.hasOwnProperty(t.name)) {
            var i = Ge[t.name];
            for (var o in i)
              i.hasOwnProperty(o) &&
                  (n.hasOwnProperty(o) && (n["_" + o] = n[o]), n[o] = i[o])
          }
          if (n.name = t.name, t.helperType && (n.helperType = t.helperType),
              t.modeProps)
            for (var l in t.modeProps)
              n[l] = t.modeProps[l];
          return n
        }
        var Ge = {};
        function Ue(e, t) { I(t, Ge.hasOwnProperty(e) ? Ge[e] : Ge[e] = {}) }
        function Ve(e, t) {
          if (!0 === t)
            return t;
          if (e.copyState)
            return e.copyState(t);
          var r = {};
          for (var n in t) {
            var i = t[n];
            i instanceof Array && (i = i.concat([])), r[n] = i
          }
          return r
        }
        function je(e, t) {
          for (var r; e.innerMode && (r = e.innerMode(t)) && r.mode != e;)
            t = r.state, e = r.mode;
          return r || { mode: e, state: t }
        }
        function Ke(e, t, r) { return !e.startState || e.startState(t, r) }
        var Xe = function(e, t, r) {
          this.pos = this.start = 0, this.string = e, this.tabSize = t || 8,
          this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0,
          this.lineOracle = r
        };
        function _e(e, t) {
          if ((t -= e.first) < 0 || t >= e.size)
            throw new Error("There is no line " + (t + e.first) +
                            " in the document.");
          for (var r = e; !r.lines;)
            for (var n = 0;; ++n) {
              var i = r.children[n], o = i.chunkSize();
              if (t < o) {
                r = i;
                break
              }
              t -= o
            }
          return r.lines[t]
        }
        function Ye(e, t, r) {
          var n = [], i = t.line;
          return e.iter(t.line, r.line + 1, function(e) {
            var o = e.text;
            i == r.line && (o = o.slice(0, r.ch)),
                i == t.line && (o = o.slice(t.ch)), n.push(o), ++i
          }), n
        }
        function qe(e, t, r) {
          var n = [];
          return e.iter(t, r, function(e) { n.push(e.text) }), n
        }
        function $e(e, t) {
          var r = t - e.height;
          if (r)
            for (var n = e; n; n = n.parent)
              n.height += r
        }
        function Ze(e) {
          if (null == e.parent)
            return null;
          for (var t = e.parent, r = G(t.lines, e), n = t.parent; n;
               t = n, n = n.parent)
            for (var i = 0; n.children[i] != t; ++i)
              r += n.children[i].chunkSize();
          return r + t.first
        }
        function Je(e, t) {
          var r = e.first;
          e: do {
            for (var n = 0; n < e.children.length; ++n) {
              var i = e.children[n], o = i.height;
              if (t < o) {
                e = i;
                continue e
              }
              t -= o, r += i.chunkSize()
            }
            return r
          }
          while (!e.lines)
            ;
          for (var l = 0; l < e.lines.length; ++l) {
            var s = e.lines[l].height;
            if (t < s)
              break;
            t -= s
          }
          return r + l
        }
        function Qe(e, t) { return t >= e.first && t < e.first + e.size }
        function et(e, t) {
          return String(e.lineNumberFormatter(t + e.firstLineNumber))
        }
        function tt(e, t, r) {
          if (void 0 === r && (r = null), !(this instanceof tt))
            return new tt(e, t, r);
          this.line = e, this.ch = t, this.sticky = r
        }
        function rt(e, t) { return e.line - t.line || e.ch - t.ch }
        function nt(e, t) { return e.sticky == t.sticky && 0 == rt(e, t) }
        function it(e) { return tt(e.line, e.ch) }
        function ot(e, t) { return rt(e, t) < 0 ? t : e }
        function lt(e, t) { return rt(e, t) < 0 ? e : t }
        function st(e, t) {
          return Math.max(e.first, Math.min(t, e.first + e.size - 1))
        }
        function at(e, t) {
          if (t.line < e.first)
            return tt(e.first, 0);
          var r = e.first + e.size - 1;
          return t.line > r ? tt(r, _e(e, r).text.length) : function(e, t) {
            var r = e.ch;
            return null == r || r > t ? tt(e.line, t)
                                      : r < 0 ? tt(e.line, 0) : e
          }(t, _e(e, t.line).text.length)
        }
        function ut(e, t) {
          for (var r = [], n = 0; n < t.length; n++)
            r[n] = at(e, t[n]);
          return r
        }
        Xe.prototype.eol = function() { return this.pos >= this.string.length },
        Xe.prototype.sol = function() { return this.pos == this.lineStart },
        Xe.prototype.peek =
            function() { return this.string.charAt(this.pos) || void 0 },
        Xe.prototype.next = function() {
          if (this.pos < this.string.length)
            return this.string.charAt(this.pos++)
        }, Xe.prototype.eat = function(e) {
          var t = this.string.charAt(this.pos);
          if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t)))
            return ++this.pos, t
        }, Xe.prototype.eatWhile = function(e) {
          for (var t = this.pos; this.eat(e);)
            ;
          return this.pos > t
        }, Xe.prototype.eatSpace = function() {
          for (var e = this.pos;
               /[\s\u00a0]/.test(this.string.charAt(this.pos));)
            ++this.pos;
          return this.pos > e
        }, Xe.prototype.skipToEnd = function() {
          this.pos = this.string.length
        }, Xe.prototype.skipTo = function(e) {
          var t = this.string.indexOf(e, this.pos);
          if (t > -1)
            return this.pos = t, !0
        }, Xe.prototype.backUp = function(e) {
          this.pos -= e
        }, Xe.prototype.column = function() {
          return this.lastColumnPos < this.start &&
                     (this.lastColumnValue =
                          R(this.string, this.start, this.tabSize,
                            this.lastColumnPos, this.lastColumnValue),
                      this.lastColumnPos = this.start),
                 this.lastColumnValue -
                     (this.lineStart
                          ? R(this.string, this.lineStart, this.tabSize)
                          : 0)
        }, Xe.prototype.indentation = function() {
          return R(this.string, null, this.tabSize) -
                 (this.lineStart ? R(this.string, this.lineStart, this.tabSize)
                                 : 0)
        }, Xe.prototype.match = function(e, t, r) {
          if ("string" != typeof e) {
            var n = this.string.slice(this.pos).match(e);
            return n && n.index > 0
                       ? null
                       : (n && !1 !== t && (this.pos += n[0].length), n)
          }
          var i = function(e) { return r ? e.toLowerCase() : e };
          if (i(this.string.substr(this.pos, e.length)) == i(e))
            return !1 !== t && (this.pos += e.length), !0
        }, Xe.prototype.current = function() {
          return this.string.slice(this.start, this.pos)
        }, Xe.prototype.hideFirstChars = function(e, t) {
          this.lineStart += e;
          try {
            return t()
          } finally {
            this.lineStart -= e
          }
        }, Xe.prototype.lookAhead = function(e) {
          var t = this.lineOracle;
          return t && t.lookAhead(e)
        }, Xe.prototype.baseToken = function() {
          var e = this.lineOracle;
          return e && e.baseToken(this.pos)
        };
        var ct = function(e, t) { this.state = e, this.lookAhead = t },
            ft = function(e, t, r, n) {
              this.state = t, this.doc = e, this.line = r,
              this.maxLookAhead = n || 0, this.baseTokens = null,
              this.baseTokenPos = 1
            };
        function dt(e, t, r, n) {
          var i = [ e.state.modeGen ], o = {};
          xt(e, t.text, e.doc.mode, r, function(e, t) { return i.push(e, t) },
             o, n);
          for (var l = r.state, s = function(n) {
                 r.baseTokens = i;
                 var s = e.state.overlays[n], a = 1, u = 0;
                 r.state = !0, xt(e, t.text, s.mode, r, function(e, t) {
                   for (var r = a; u < e;) {
                     var n = i[a];
                     n > e && i.splice(a, 1, e, i[a + 1], n), a += 2,
                         u = Math.min(e, n)
                   }
                   if (t)
                     if (s.opaque)
                       i.splice(r, a - r, e, "overlay " + t), a = r + 2;
                     else
                       for (; r < a; r += 2) {
                         var o = i[r + 1];
                         i[r + 1] = (o ? o + " " : "") + "overlay " + t
                       }
                 }, o), r.state = l, r.baseTokens = null, r.baseTokenPos = 1
               }, a = 0; a < e.state.overlays.length; ++a)
            s(a);
          return { styles: i, classes: o.bgClass || o.textClass ? o : null }
        }
        function ht(e, t, r) {
          if (!t.styles || t.styles[0] != e.state.modeGen) {
            var n = pt(e, Ze(t)),
                i = t.text.length > e.options.maxHighlightLength &&
                    Ve(e.doc.mode, n.state),
                o = dt(e, t, n);
            i && (n.state = i),
                t.stateAfter = n.save(!i), t.styles = o.styles,
                o.classes ? t.styleClasses = o.classes
                          : t.styleClasses && (t.styleClasses = null),
                r === e.doc.highlightFrontier &&
                    (e.doc.modeFrontier = Math.max(e.doc.modeFrontier,
                                                   ++e.doc.highlightFrontier))
          }
          return t.styles
        }
        function pt(e, t, r) {
          var n = e.doc, i = e.display;
          if (!n.mode.startState)
            return new ft(n, !0, t);
          var o =
                  function(e, t, r) {
            for (var n, i, o = e.doc,
                           l = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
                           s = t;
                 s > l; --s) {
              if (s <= o.first)
                return o.first;
              var a = _e(o, s - 1), u = a.stateAfter;
              if (u && (!r || s + (u instanceof ct ? u.lookAhead : 0) <=
                                  o.modeFrontier))
                return s;
              var c = R(a.text, null, e.options.tabSize);
              (null == i || n > c) && (i = s - 1, n = c)
            }
            return i
          }(e, t, r),
              l = o > n.first && _e(n, o - 1).stateAfter,
              s = l ? ft.fromSaved(n, l, o) : new ft(n, Ke(n.mode), o);
          return n.iter(o, t, function(r) {
            gt(e, r.text, s);
            var n = s.line;
            r.stateAfter =
                n == t - 1 || n % 5 == 0 || n >= i.viewFrom && n < i.viewTo
                    ? s.save()
                    : null,
            s.nextLine()
          }), r && (n.modeFrontier = s.line), s
        }
        function gt(e, t, r, n) {
          var i = e.doc.mode, o = new Xe(t, e.options.tabSize, r);
          for (o.start = o.pos = n || 0, "" == t && mt(i, r.state); !o.eol();)
            vt(i, o, r.state), o.start = o.pos
        }
        function mt(e, t) {
          if (e.blankLine)
            return e.blankLine(t);
          if (e.innerMode) {
            var r = je(e, t);
            return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0
          }
        }
        function vt(e, t, r, n) {
          for (var i = 0; i < 10; i++) {
            n && (n[0] = je(e, r).mode);
            var o = e.token(t, r);
            if (t.pos > t.start)
              return o
          }
          throw new Error("Mode " + e.name + " failed to advance stream.")
        }
        ft.prototype.lookAhead = function(e) {
          var t = this.doc.getLine(this.line + e);
          return null != t && e > this.maxLookAhead && (this.maxLookAhead = e),
                 t
        }, ft.prototype.baseToken = function(e) {
          if (!this.baseTokens)
            return null;
          for (; this.baseTokens[this.baseTokenPos] <= e;)
            this.baseTokenPos += 2;
          var t = this.baseTokens[this.baseTokenPos + 1];
          return {
            type: t && t.replace(/( |^)overlay .*/, ""),
                size: this.baseTokens[this.baseTokenPos] - e
          }
        }, ft.prototype.nextLine = function() {
          this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
        }, ft.fromSaved = function(e, t, r) {
          return t instanceof ct
                     ? new ft(e, Ve(e.mode, t.state), r, t.lookAhead)
                     : new ft(e, Ve(e.mode, t), r)
        }, ft.prototype.save = function(e) {
          var t = !1 !== e ? Ve(this.doc.mode, this.state) : this.state;
          return this.maxLookAhead > 0 ? new ct(t, this.maxLookAhead) : t
        };
        var yt = function(e, t, r) {
          this.start = e.start, this.end = e.pos, this.string = e.current(),
          this.type = t || null, this.state = r
        };
        function bt(e, t, r, n) {
          var i, o, l = e.doc, s = l.mode, a = _e(l, (t = at(l, t)).line),
                    u = pt(e, t.line, r),
                    c = new Xe(a.text, e.options.tabSize, u);
          for (n && (o = []); (n || c.pos < t.ch) && !c.eol();)
            c.start = c.pos, i = vt(s, c, u.state),
            n && o.push(new yt(c, i, Ve(l.mode, u.state)));
          return n ? o : new yt(c, i, u.state)
        }
        function wt(e, t) {
          if (e)
            for (;;) {
              var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
              if (!r)
                break;
              e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
              var n = r[1] ? "bgClass" : "textClass";
              null == t[n]
                  ? t[n] = r[2]
                  : new RegExp("(?:^|s)" + r[2] + "(?:$|s)").test(t[n]) ||
                        (t[n] += " " + r[2])
            }
          return e
        }
        function xt(e, t, r, n, i, o, l) {
          var s = r.flattenSpans;
          null == s && (s = e.options.flattenSpans);
          var a, u = 0, c = null, f = new Xe(t, e.options.tabSize, n),
                 d = e.options.addModeClass && [ null ];
          for ("" == t && wt(mt(r, n.state), o); !f.eol();) {
            if (f.pos > e.options.maxHighlightLength
                    ? (s = !1, l && gt(e, t, n, f.pos), f.pos = t.length,
                       a = null)
                    : a = wt(vt(r, f, n.state, d), o),
                d) {
              var h = d[0].name;
              h && (a = "m-" + (a ? h + " " + a : h))
            }
            if (!s || c != a) {
              for (; u < f.start;)
                i(u = Math.min(f.start, u + 5e3), c);
              c = a
            }
            f.start = f.pos
          }
          for (; u < f.pos;) {
            var p = Math.min(f.pos, u + 5e3);
            i(p, c), u = p
          }
        }
        var Ct = !1, St = !1;
        function kt(e, t, r) { this.marker = e, this.from = t, this.to = r }
        function Mt(e, t) {
          if (e)
            for (var r = 0; r < e.length; ++r) {
              var n = e[r];
              if (n.marker == t)
                return n
            }
        }
        function Lt(e, t) {
          for (var r, n = 0; n < e.length; ++n)
            e[n] != t && (r || (r = [])).push(e[n]);
          return r
        }
        function Tt(e, t) {
          if (t.full)
            return null;
          var r = Qe(e, t.from.line) && _e(e, t.from.line).markedSpans,
              n = Qe(e, t.to.line) && _e(e, t.to.line).markedSpans;
          if (!r && !n)
            return null;
          var i = t.from.ch, o = t.to.ch, l = 0 == rt(t.from, t.to),
              s =
                  function(e, t, r) {
                var n;
                if (e)
                  for (var i = 0; i < e.length; ++i) {
                    var o = e[i], l = o.marker;
                    if (null == o.from ||
                        (l.inclusiveLeft ? o.from <= t : o.from < t) ||
                        o.from == t && "bookmark" == l.type &&
                            (!r || !o.marker.insertLeft)) {
                      var s = null == o.to ||
                              (l.inclusiveRight ? o.to >= t : o.to > t);
                      (n || (n = [])).push(new kt(l, o.from, s ? null : o.to))
                    }
                  }
                return n
              }(r, i, l),
              a =
                  function(e, t, r) {
                var n;
                if (e)
                  for (var i = 0; i < e.length; ++i) {
                    var o = e[i], l = o.marker;
                    if (null == o.to ||
                        (l.inclusiveRight ? o.to >= t : o.to > t) ||
                        o.from == t && "bookmark" == l.type &&
                            (!r || o.marker.insertLeft)) {
                      var s = null == o.from ||
                              (l.inclusiveLeft ? o.from <= t : o.from < t);
                      (n || (n = []))
                          .push(new kt(l, s ? null : o.from - t,
                                       null == o.to ? null : o.to - t))
                    }
                  }
                return n
              }(n, o, l),
              u = 1 == t.text.length, c = $(t.text).length + (u ? i : 0);
          if (s)
            for (var f = 0; f < s.length; ++f) {
              var d = s[f];
              if (null == d.to) {
                var h = Mt(a, d.marker);
                h ? u && (d.to = null == h.to ? null : h.to + c) : d.to = i
              }
            }
          if (a)
            for (var p = 0; p < a.length; ++p) {
              var g = a[p];
              if (null != g.to && (g.to += c), null == g.from)
                Mt(s, g.marker) || (g.from = c, u && (s || (s = [])).push(g));
              else
                g.from += c, u && (s || (s = [])).push(g)
            }
          s && (s = Nt(s)), a && a != s && (a = Nt(a));
          var m = [ s ];
          if (!u) {
            var v, y = t.text.length - 2;
            if (y > 0 && s)
              for (var b = 0; b < s.length; ++b)
                null == s[b].to &&
                    (v || (v = [])).push(new kt(s[b].marker, null, null));
            for (var w = 0; w < y; ++w)
              m.push(v);
            m.push(a)
          }
          return m
        }
        function Nt(e) {
          for (var t = 0; t < e.length; ++t) {
            var r = e[t];
            null != r.from && r.from == r.to &&
                !1 !== r.marker.clearWhenEmpty && e.splice(t--, 1)
          }
          return e.length ? e : null
        }
        function Ot(e) {
          var t = e.markedSpans;
          if (t) {
            for (var r = 0; r < t.length; ++r)
              t[r].marker.detachLine(e);
            e.markedSpans = null
          }
        }
        function At(e, t) {
          if (t) {
            for (var r = 0; r < t.length; ++r)
              t[r].marker.attachLine(e);
            e.markedSpans = t
          }
        }
        function Dt(e) { return e.inclusiveLeft ? -1 : 0 }
        function Wt(e) { return e.inclusiveRight ? 1 : 0 }
        function Ht(e, t) {
          var r = e.lines.length - t.lines.length;
          if (0 != r)
            return r;
          var n = e.find(), i = t.find(),
              o = rt(n.from, i.from) || Dt(e) - Dt(t);
          if (o)
            return -o;
          var l = rt(n.to, i.to) || Wt(e) - Wt(t);
          return l || t.id - e.id
        }
        function zt(e, t) {
          var r, n = St && e.markedSpans;
          if (n)
            for (var i = void 0, o = 0; o < n.length; ++o)
              (i = n[o]).marker.collapsed && null == (t ? i.from : i.to) &&
                  (!r || Ht(r, i.marker) < 0) && (r = i.marker);
          return r
        }
        function Ft(e) { return zt(e, !0) }
        function Pt(e) { return zt(e, !1) }
        function Et(e, t) {
          var r, n = St && e.markedSpans;
          if (n)
            for (var i = 0; i < n.length; ++i) {
              var o = n[i];
              o.marker.collapsed && (null == o.from || o.from < t) &&
                  (null == o.to || o.to > t) && (!r || Ht(r, o.marker) < 0) &&
                  (r = o.marker)
            }
          return r
        }
        function It(e, t, r, n, i) {
          var o = _e(e, t), l = St && o.markedSpans;
          if (l)
            for (var s = 0; s < l.length; ++s) {
              var a = l[s];
              if (a.marker.collapsed) {
                var u = a.marker.find(0),
                    c = rt(u.from, r) || Dt(a.marker) - Dt(i),
                    f = rt(u.to, n) || Wt(a.marker) - Wt(i);
                if (!(c >= 0 && f <= 0 || c <= 0 && f >= 0) &&
                    (c <= 0 && (a.marker.inclusiveRight && i.inclusiveLeft
                                    ? rt(u.to, r) >= 0
                                    : rt(u.to, r) > 0) ||
                     c >= 0 && (a.marker.inclusiveRight && i.inclusiveLeft
                                    ? rt(u.from, n) <= 0
                                    : rt(u.from, n) < 0)))
                  return !0
              }
            }
        }
        function Rt(e) {
          for (var t; t = Ft(e);)
            e = t.find(-1, !0).line;
          return e
        }
        function Bt(e, t) {
          var r = _e(e, t), n = Rt(r);
          return r == n ? t : Ze(n)
        }
        function Gt(e, t) {
          if (t > e.lastLine())
            return t;
          var r, n = _e(e, t);
          if (!Ut(e, n))
            return t;
          for (; r = Pt(n);)
            n = r.find(1, !0).line;
          return Ze(n) + 1
        }
        function Ut(e, t) {
          var r = St && t.markedSpans;
          if (r)
            for (var n = void 0, i = 0; i < r.length; ++i)
              if ((n = r[i]).marker.collapsed) {
                if (null == n.from)
                  return !0;
                if (!n.marker.widgetNode && 0 == n.from &&
                    n.marker.inclusiveLeft && Vt(e, t, n))
                  return !0
              }
        }
        function Vt(e, t, r) {
          if (null == r.to) {
            var n = r.marker.find(1, !0);
            return Vt(e, n.line, Mt(n.line.markedSpans, r.marker))
          }
          if (r.marker.inclusiveRight && r.to == t.text.length)
            return !0;
          for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
            if ((i = t.markedSpans[o]).marker.collapsed &&
                !i.marker.widgetNode && i.from == r.to &&
                (null == i.to || i.to != r.from) &&
                (i.marker.inclusiveLeft || r.marker.inclusiveRight) &&
                Vt(e, t, i))
              return !0
        }
        function jt(e) {
          for (var t = 0, r = (e = Rt(e)).parent, n = 0; n < r.lines.length;
               ++n) {
            var i = r.lines[n];
            if (i == e)
              break;
            t += i.height
          }
          for (var o = r.parent; o; o = (r = o).parent)
            for (var l = 0; l < o.children.length; ++l) {
              var s = o.children[l];
              if (s == r)
                break;
              t += s.height
            }
          return t
        }
        function Kt(e) {
          if (0 == e.height)
            return 0;
          for (var t, r = e.text.length, n = e; t = Ft(n);) {
            var i = t.find(0, !0);
            n = i.from.line, r += i.from.ch - i.to.ch
          }
          for (n = e; t = Pt(n);) {
            var o = t.find(0, !0);
            r -= n.text.length - o.from.ch,
                r += (n = o.to.line).text.length - o.to.ch
          }
          return r
        }
        function Xt(e) {
          var t = e.display, r = e.doc;
          t.maxLine = _e(r, r.first), t.maxLineLength = Kt(t.maxLine),
          t.maxLineChanged = !0, r.iter(function(e) {
            var r = Kt(e);
            r > t.maxLineLength && (t.maxLineLength = r, t.maxLine = e)
          })
        }
        var _t = function(
            e, t,
            r) { this.text = e, At(this, t), this.height = r ? r(this) : 1 };
        function Yt(e) { e.parent = null, Ot(e) }
        _t.prototype.lineNo = function() { return Ze(this) }, we(_t);
        var qt = {}, $t = {};
        function Zt(e, t) {
          if (!e || /^\s*$/.test(e))
            return null;
          var r = t.addModeClass ? $t : qt;
          return r[e] || (r[e] = e.replace(/\S+/g, "cm-$&"))
        }
        function Jt(e, t) {
          var r = D("span", null, null, u ? "padding-right: .1px" : null), n = {
            pre : D("pre", [ r ], "CodeMirror-line"),
            content : r,
            col : 0,
            pos : 0,
            cm : e,
            trailingSpace : !1,
            splitSpaces : e.getOption("lineWrapping")
          };
          t.measure = {};
          for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
            var o = i ? t.rest[i - 1] : t.line, l = void 0;
            n.pos = 0, n.addToken = er,
            De(e.display.measure) && (l = fe(o, e.doc.direction)) &&
                (n.addToken = tr(n.addToken, l)),
            n.map = [],
            nr(o, n, ht(e, o, t != e.display.externalMeasured && Ze(o))),
            o.styleClasses &&
                (o.styleClasses.bgClass &&
                     (n.bgClass = F(o.styleClasses.bgClass, n.bgClass || "")),
                 o.styleClasses.textClass &&
                     (n.textClass =
                          F(o.styleClasses.textClass, n.textClass || ""))),
            0 == n.map.length &&
                n.map.push(0, 0, n.content.appendChild(Ae(e.display.measure))),
            0 == i ? (t.measure.map = n.map, t.measure.cache = {})
                   : ((t.measure.maps || (t.measure.maps = [])).push(n.map),
                      (t.measure.caches || (t.measure.caches = [])).push({}))
          }
          if (u) {
            var s = n.content.lastChild;
            (/\bcm-tab\b/.test(s.className) ||
             s.querySelector && s.querySelector(".cm-tab")) &&
                (n.content.className = "cm-tab-wrap-hack")
          }
          return me(e, "renderLine", e, t.line, n.pre),
                 n.pre.className &&
                     (n.textClass = F(n.pre.className, n.textClass || "")),
                 n
        }
        function Qt(e) {
          var t = A("span", "•", "cm-invalidchar");
          return t.title = "\\u" + e.charCodeAt(0).toString(16),
                 t.setAttribute("aria-label", t.title), t
        }
        function er(e, t, r, n, i, o, l) {
          if (t) {
            var u, c = e.splitSpaces ? function(e, t) {
              if (e.length > 1 && !/  /.test(e))
                return e;
              for (var r = t, n = "", i = 0; i < e.length; i++) {
                var o = e.charAt(i);
                " " != o || !r ||
                    i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "),
                    n += o, r = " " == o
              }
              return n
            }(t, e.trailingSpace) : t, f = e.cm.state.specialChars, d = !1;
            if (f.test(t)) {
              u = document.createDocumentFragment();
              for (var h = 0;;) {
                f.lastIndex = h;
                var p = f.exec(t), g = p ? p.index - h : t.length - h;
                if (g) {
                  var m = document.createTextNode(c.slice(h, h + g));
                  s && a < 9 ? u.appendChild(A("span", [ m ]))
                             : u.appendChild(m),
                      e.map.push(e.pos, e.pos + g, m), e.col += g, e.pos += g
                }
                if (!p)
                  break;
                h += g + 1;
                var v = void 0;
                if ("\t" == p[0]) {
                  var y = e.cm.options.tabSize, b = y - e.col % y;
                  (v = u.appendChild(A("span", q(b), "cm-tab")))
                      .setAttribute("role", "presentation"),
                      v.setAttribute("cm-text", "\t"), e.col += b
                } else
                  "\r" == p[0] || "\n" == p[0]
                      ? ((v = u.appendChild(A("span", "\r" == p[0] ? "␍" : "␤",
                                              "cm-invalidchar")))
                             .setAttribute("cm-text", p[0]),
                         e.col += 1)
                      : ((v = e.cm.options.specialCharPlaceholder(p[0]))
                             .setAttribute("cm-text", p[0]),
                         s && a < 9 ? u.appendChild(A("span", [ v ]))
                                    : u.appendChild(v),
                         e.col += 1);
                e.map.push(e.pos, e.pos + 1, v), e.pos++
              }
            } else
              e.col += t.length, u = document.createTextNode(c),
                                 e.map.push(e.pos, e.pos + t.length, u),
                                 s && a < 9 && (d = !0), e.pos += t.length;
            if (e.trailingSpace = 32 == c.charCodeAt(t.length - 1),
                r || n || i || d || o) {
              var w = r || "";
              n && (w += n), i && (w += i);
              var x = A("span", [ u ], w, o);
              if (l)
                for (var C in l)
                  l.hasOwnProperty(C) && "style" != C && "class" != C &&
                      x.setAttribute(C, l[C]);
              return e.content.appendChild(x)
            }
            e.content.appendChild(u)
          }
        }
        function tr(e, t) {
          return function(r, n, i, o, l, s, a) {
            i = i ? i + " cm-force-border" : "cm-force-border";
            for (var u = r.pos, c = u + n.length;;) {
              for (var f = void 0, d = 0;
                   d < t.length && !((f = t[d]).to > u && f.from <= u); d++)
                ;
              if (f.to >= c)
                return e(r, n, i, o, l, s, a);
              e(r, n.slice(0, f.to - u), i, o, null, s, a),
                  o = null, n = n.slice(f.to - u), u = f.to
            }
          }
        }
        function rr(e, t, r, n) {
          var i = !n && r.widgetNode;
          i && e.map.push(e.pos, e.pos + t, i),
              !n && e.cm.display.input.needsContentAttribute &&
                  (i || (i = e.content.appendChild(
                             document.createElement("span"))),
                   i.setAttribute("cm-marker", r.id)),
              i && (e.cm.display.input.setUneditable(i),
                    e.content.appendChild(i)),
              e.pos += t, e.trailingSpace = !1
        }
        function nr(e, t, r) {
          var n = e.markedSpans, i = e.text, o = 0;
          if (n)
            for (var l, s, a, u, c, f, d, h = i.length, p = 0, g = 1, m = "",
                                          v = 0;
                 ;) {
              if (v == p) {
                a = u = c = s = "", d = null, f = null, v = 1 / 0;
                for (var y = [], b = void 0, w = 0; w < n.length; ++w) {
                  var x = n[w], C = x.marker;
                  if ("bookmark" == C.type && x.from == p && C.widgetNode)
                    y.push(C);
                  else if (x.from <= p &&
                           (null == x.to || x.to > p ||
                            C.collapsed && x.to == p && x.from == p)) {
                    if (null != x.to && x.to != p && v > x.to &&
                            (v = x.to, u = ""),
                        C.className && (a += " " + C.className),
                        C.css && (s = (s ? s + ";" : "") + C.css),
                        C.startStyle && x.from == p &&
                            (c += " " + C.startStyle),
                        C.endStyle && x.to == v &&
                            (b || (b = [])).push(C.endStyle, x.to),
                        C.title && ((d || (d = {})).title = C.title),
                        C.attributes)
                      for (var S in C.attributes)
                        (d || (d = {}))[S] = C.attributes[S];
                    C.collapsed && (!f || Ht(f.marker, C) < 0) && (f = x)
                  } else
                    x.from > p && v > x.from && (v = x.from)
                }
                if (b)
                  for (var k = 0; k < b.length; k += 2)
                    b[k + 1] == v && (u += " " + b[k]);
                if (!f || f.from == p)
                  for (var M = 0; M < y.length; ++M)
                    rr(t, 0, y[M]);
                if (f && (f.from || 0) == p) {
                  if (rr(t, (null == f.to ? h + 1 : f.to) - p, f.marker,
                         null == f.from),
                      null == f.to)
                    return;
                  f.to == p && (f = !1)
                }
              }
              if (p >= h)
                break;
              for (var L = Math.min(h, v);;) {
                if (m) {
                  var T = p + m.length;
                  if (!f) {
                    var N = T > L ? m.slice(0, L - p) : m;
                    t.addToken(t, N, l ? l + a : a, c,
                               p + N.length == v ? u : "", s, d)
                  }
                  if (T >= L) {
                    m = m.slice(L - p), p = L;
                    break
                  }
                  p = T, c = ""
                }
                m = i.slice(o, o = r[g++]), l = Zt(r[g++], t.cm.options)
              }
            }
          else
            for (var O = 1; O < r.length; O += 2)
              t.addToken(t, i.slice(o, o = r[O]), Zt(r[O + 1], t.cm.options))
        }
        function ir(e, t, r) {
          this.line = t,
          this.rest =
              function(e) {
            for (var t, r; t = Pt(e);)
              e = t.find(1, !0).line, (r || (r = [])).push(e);
            return r
          }(t),
          this.size = this.rest ? Ze($(this.rest)) - r + 1 : 1,
          this.node = this.text = null, this.hidden = Ut(e, t)
        }
        function or(e, t, r) {
          for (var n, i = [], o = t; o < r; o = n) {
            var l = new ir(e.doc, _e(e.doc, o), o);
            n = o + l.size, i.push(l)
          }
          return i
        }
        var lr = null, sr = null;
        function ar(e, t) {
          var r = pe(e, t);
          if (r.length) {
            var n, i = Array.prototype.slice.call(arguments, 2);
            lr ? n = lr.delayedCallbacks
               : sr ? n = sr : (n = sr = [], setTimeout(ur, 0));
            for (var o = function(e) {
                   n.push(function() { return r[e].apply(null, i) })
                 }, l = 0; l < r.length; ++l)
              o(l)
          }
        }
        function ur() {
          var e = sr;
          sr = null;
          for (var t = 0; t < e.length; ++t)
            e[t]()
        }
        function cr(e, t, r, n) {
          for (var i = 0; i < t.changes.length; i++) {
            var o = t.changes[i];
            "text" == o
                ? hr(e, t)
                : "gutter" == o
                      ? gr(e, t, r, n)
                      : "class" == o ? pr(e, t) : "widget" == o && mr(e, t, n)
          }
          t.changes = null
        }
        function fr(e) {
          return e.node == e.text &&
                     (e.node = A("div", null, null, "position: relative"),
                      e.text.parentNode &&
                          e.text.parentNode.replaceChild(e.node, e.text),
                      e.node.appendChild(e.text),
                      s && a < 8 && (e.node.style.zIndex = 2)),
                 e.node
        }
        function dr(e, t) {
          var r = e.display.externalMeasured;
          return r && r.line == t.line ? (e.display.externalMeasured = null,
                                          t.measure = r.measure, r.built)
                                       : Jt(e, t)
        }
        function hr(e, t) {
          var r = t.text.className, n = dr(e, t);
          t.text == t.node && (t.node = n.pre),
              t.text.parentNode.replaceChild(n.pre, t.text),
              t.text = n.pre,
              n.bgClass != t.bgClass || n.textClass != t.textClass
                  ? (t.bgClass = n.bgClass, t.textClass = n.textClass, pr(e, t))
                  : r && (t.text.className = r)
        }
        function pr(e, t) {
          !function(e, t) {
            var r = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "")
                              : t.line.bgClass;
            if (r && (r += " CodeMirror-linebackground"), t.background)
              r ? t.background.className = r
                : (t.background.parentNode.removeChild(t.background),
                   t.background = null);
            else if (r) {
              var n = fr(t);
              t.background = n.insertBefore(A("div", null, r), n.firstChild),
              e.display.input.setUneditable(t.background)
            }
          }(e, t),
              t.line.wrapClass ? fr(t).className = t.line.wrapClass
                               : t.node != t.text && (t.node.className = "");
          var r = t.textClass ? t.textClass + " " + (t.line.textClass || "")
                              : t.line.textClass;
          t.text.className = r || ""
        }
        function gr(e, t, r, n) {
          if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null),
              t.gutterBackground && (t.node.removeChild(t.gutterBackground),
                                     t.gutterBackground = null),
              t.line.gutterClass) {
            var i = fr(t);
            t.gutterBackground = A(
                "div", null,
                "CodeMirror-gutter-background " + t.line.gutterClass,
                "left: " +
                    (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) +
                    "px; width: " + n.gutterTotalWidth + "px"),
            e.display.input.setUneditable(t.gutterBackground),
            i.insertBefore(t.gutterBackground, t.text)
          }
          var o = t.line.gutterMarkers;
          if (e.options.lineNumbers || o) {
            var l = fr(t),
                s = t.gutter =
                    A("div", null, "CodeMirror-gutter-wrapper",
                      "left: " +
                          (e.options.fixedGutter ? n.fixedPos
                                                 : -n.gutterTotalWidth) +
                          "px");
            if (e.display.input.setUneditable(s), l.insertBefore(s, t.text),
                t.line.gutterClass && (s.className += " " + t.line.gutterClass),
                !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] ||
                    (t.lineNumber = s.appendChild(
                         A("div", et(e.options, r),
                           "CodeMirror-linenumber CodeMirror-gutter-elt",
                           "left: " + n.gutterLeft["CodeMirror-linenumbers"] +
                               "px; width: " + e.display.lineNumInnerWidth +
                               "px"))),
                o)
              for (var a = 0; a < e.display.gutterSpecs.length; ++a) {
                var u = e.display.gutterSpecs[a].className,
                    c = o.hasOwnProperty(u) && o[u];
                c && s.appendChild(A("div", [ c ], "CodeMirror-gutter-elt",
                                     "left: " + n.gutterLeft[u] +
                                         "px; width: " + n.gutterWidth[u] +
                                         "px"))
              }
          }
        }
        function mr(e, t, r) {
          t.alignable && (t.alignable = null);
          for (var n = t.node.firstChild, i = void 0; n; n = i)
            i = n.nextSibling,
            "CodeMirror-linewidget" == n.className && t.node.removeChild(n);
          yr(e, t, r)
        }
        function vr(e, t, r, n) {
          var i = dr(e, t);
          return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass),
                 i.textClass && (t.textClass = i.textClass), pr(e, t),
                 gr(e, t, r, n), yr(e, t, n), t.node
        }
        function yr(e, t, r) {
          if (br(e, t.line, t, r, !0), t.rest)
            for (var n = 0; n < t.rest.length; n++)
              br(e, t.rest[n], t, r, !1)
        }
        function br(e, t, r, n, i) {
          if (t.widgets)
            for (var o = fr(r), l = 0, s = t.widgets; l < s.length; ++l) {
              var a = s[l], u = A("div", [ a.node ], "CodeMirror-linewidget");
              a.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"),
                  wr(a, u, r, n), e.display.input.setUneditable(u),
                  i && a.above ? o.insertBefore(u, r.gutter || r.text)
                               : o.appendChild(u),
                  ar(a, "redraw")
            }
        }
        function wr(e, t, r, n) {
          if (e.noHScroll) {
            (r.alignable || (r.alignable = [])).push(t);
            var i = n.wrapperWidth;
            t.style.left = n.fixedPos + "px",
            e.coverGutter || (i -= n.gutterTotalWidth,
                              t.style.paddingLeft = n.gutterTotalWidth + "px"),
            t.style.width = i + "px"
          }
          e.coverGutter &&
              (t.style.zIndex = 5, t.style.position = "relative",
               e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"))
        }
        function xr(e) {
          if (null != e.height)
            return e.height;
          var t = e.doc.cm;
          if (!t)
            return 0;
          if (!W(document.body, e.node)) {
            var r = "position: relative;";
            e.coverGutter &&
                (r += "margin-left: -" + t.display.gutters.offsetWidth + "px;"),
                e.noHScroll &&
                    (r += "width: " + t.display.wrapper.clientWidth + "px;"),
                O(t.display.measure, A("div", [ e.node ], null, r))
          }
          return e.height = e.node.parentNode.offsetHeight
        }
        function Cr(e, t) {
          for (var r = Me(t); r != e.wrapper; r = r.parentNode)
            if (!r ||
                1 == r.nodeType &&
                    "true" == r.getAttribute("cm-ignore-events") ||
                r.parentNode == e.sizer && r != e.mover)
              return !0
        }
        function Sr(e) { return e.lineSpace.offsetTop }
        function kr(e) {
          return e.mover.offsetHeight - e.lineSpace.offsetHeight
        }
        function Mr(e) {
          if (e.cachedPaddingH)
            return e.cachedPaddingH;
          var t = O(e.measure, A("pre", "x", "CodeMirror-line-like")),
              r = window.getComputedStyle ? window.getComputedStyle(t)
                                          : t.currentStyle,
              n = {
                left : parseInt(r.paddingLeft),
                right : parseInt(r.paddingRight)
              };
          return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n), n
        }
        function Lr(e) { return U - e.display.nativeBarWidth }
        function Tr(e) {
          return e.display.scroller.clientWidth - Lr(e) - e.display.barWidth
        }
        function Nr(e) {
          return e.display.scroller.clientHeight - Lr(e) - e.display.barHeight
        }
        function Or(e, t, r) {
          if (e.line == t)
            return {map : e.measure.map, cache : e.measure.cache};
          for (var n = 0; n < e.rest.length; n++)
            if (e.rest[n] == t)
              return {map : e.measure.maps[n], cache : e.measure.caches[n]};
          for (var i = 0; i < e.rest.length; i++)
            if (Ze(e.rest[i]) > r)
              return {
                map: e.measure.maps[i], cache: e.measure.caches[i], before: !0
              }
        }
        function Ar(e, t, r, n) { return Hr(e, Wr(e, t), r, n) }
        function Dr(e, t) {
          if (t >= e.display.viewFrom && t < e.display.viewTo)
            return e.display.view[un(e, t)];
          var r = e.display.externalMeasured;
          return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0
        }
        function Wr(e, t) {
          var r = Ze(t), n = Dr(e, r);
          n &&!n.text
              ? n = null
              : n && n.changes &&
                    (cr(e, n, r, nn(e)), e.curOp.forceUpdate = !0),
                n || (n = function(e, t) {
                  var r = Ze(t = Rt(t)),
                      n = e.display.externalMeasured = new ir(e.doc, t, r);
                  n.lineN = r;
                  var i = n.built = Jt(e, n);
                  return n.text = i.pre, O(e.display.lineMeasure, i.pre), n
                }(e, t));
          var i = Or(n, t, r);
          return {
            line: t, view: n, rect: null, map: i.map, cache: i.cache,
                before: i.before, hasHeights: !1
          }
        }
        function Hr(e, t, r, n, i) {
          t.before && (r = -1);
          var o, l = r + (n || "");
          return t.cache.hasOwnProperty(l)?o=t.cache[l]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(!function(e,t,r){var n=e.options.lineWrapping,i=n&&Tr(e);if(!t.measure.heights||n&&t.measure.width!=i){var o=t.measure.heights=[];if(n){t.measure.width=i;for(var l=t.text.firstChild.getClientRects(),s=0;s<l.length-1;s++){var a=l[s],u=l[s+1];Math.abs(a.bottom-u.bottom)>2&&o.push((a.bottom+u.top)/2-r.top)}}o.push(r.bottom-r.top)}}(e,t.view,t.rect),t.hasHeights=!0),(o=function(e,t,r,n){var i,o=Pr(t.map,r,n),l=o.node,u=o.start,c=o.end,f=o.collapse;if(3==l.nodeType){for(var d=0;d<4;d++){for(;u&&oe(t.line.text.charAt(o.coverStart+u));)--u;for(;o.coverStart+c<o.coverEnd&&oe(t.line.text.charAt(o.coverStart+c));)++c;if((i=s&&a<9&&0==u&&c==o.coverEnd-o.coverStart?l.parentNode.getBoundingClientRect():Er(L(l,u,c).getClientRects(),n)).left||i.right||0==u)break;c=u,u-=1,f="right"}s&&a<11&&(i=function(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!function(e){if(null!=Pe)return Pe;var t=O(e,A("span","x")),r=t.getBoundingClientRect(),n=L(t,0,1).getBoundingClientRect();return Pe=Math.abs(r.left-n.left)>1}(e))return t;var r=screen.logicalXDPI/screen.deviceXDPI,n=screen.logicalYDPI/screen.deviceYDPI;return{left:t.left*r,right:t.right*r,top:t.top*n,bottom:t.bottom*n}}(e.display.measure,i))}else{var h;u>0&&(f=n="right"),i=e.options.lineWrapping&&(h=l.getClientRects()).length>1?h["right"==n?h.length-1:0]:l.getBoundingClientRect()}if(s&&a<9&&!u&&(!i||!i.left&&!i.right)){var p=l.parentNode.getClientRects()[0];i=p?{left:p.left,right:p.left+rn(e.display),top:p.top,bottom:p.bottom}:Fr}for(var g=i.top-t.rect.top,m=i.bottom-t.rect.top,v=(g+m)/2,y=t.view.measure.heights,b=0;b<y.length-1&&!(v<y[b]);b++);var w=b?y[b-1]:0,x=y[b],C={left:("right"==f?i.right:i.left)-t.rect.left,right:("left"==f?i.left:i.right)-t.rect.left,top:w,bottom:x};i.left||i.right||(C.bogus=!0);e.options.singleCursorHeightPerLine||(C.rtop=g,C.rbottom=m);return C}(e,t,r,n)).bogus||(t.cache[l]=o)),{
            left: o.left, right: o.right, top: i ? o.rtop : o.top,
                bottom: i ? o.rbottom : o.bottom
          }
        }
        var zr, Fr = {left : 0, right : 0, top : 0, bottom : 0};
        function Pr(e, t, r) {
          for (var n, i, o, l, s, a, u = 0; u < e.length; u += 3)
            if (s = e[u], a = e[u + 1],
                t < s ? (i = 0, o = 1, l = "left")
                      : t < a ? o = (i = t - s) + 1
                              : (u == e.length - 3 || t == a && e[u + 3] > t) &&
                                    (i = (o = a - s) - 1,
                                     t >= a && (l = "right")),
                null != i) {
              if (n = e[u + 2],
                  s == a && r == (n.insertLeft ? "left" : "right") && (l = r),
                  "left" == r && 0 == i)
                for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft;)
                  n = e[2 + (u -= 3)], l = "left";
              if ("right" == r && i == a - s)
                for (; u < e.length - 3 && e[u + 3] == e[u + 4] &&
                       !e[u + 5].insertLeft;)
                  n = e[(u += 3) + 2], l = "right";
              break
            }
          return {
            node: n, start: i, end: o, collapse: l, coverStart: s, coverEnd: a
          }
        }
        function Er(e, t) {
          var r = Fr;
          if ("left" == t)
            for (var n = 0; n < e.length && (r = e[n]).left == r.right; n++)
              ;
          else
            for (var i = e.length - 1; i >= 0 && (r = e[i]).left == r.right;
                 i--)
              ;
          return r
        }
        function Ir(e) {
          if (e.measure &&
              (e.measure.cache = {}, e.measure.heights = null, e.rest))
            for (var t = 0; t < e.rest.length; t++)
              e.measure.caches[t] = {}
        }
        function Rr(e) {
          e.display.externalMeasure = null, N(e.display.lineMeasure);
          for (var t = 0; t < e.display.view.length; t++)
            Ir(e.display.view[t])
        }
        function Br(e) {
          Rr(e),
              e.display.cachedCharWidth = e.display.cachedTextHeight =
                  e.display.cachedPaddingH = null,
              e.options.lineWrapping || (e.display.maxLineChanged = !0),
              e.display.lineNumChars = null
        }
        function Gr() {
          return f && v
                     ? -(document.body.getBoundingClientRect().left -
                         parseInt(getComputedStyle(document.body).marginLeft))
                     : window.pageXOffset ||
                           (document.documentElement || document.body)
                               .scrollLeft
        }
        function Ur() {
          return f && v
                     ? -(document.body.getBoundingClientRect().top -
                         parseInt(getComputedStyle(document.body).marginTop))
                     : window.pageYOffset ||
                           (document.documentElement || document.body).scrollTop
        }
        function Vr(e) {
          var t = 0;
          if (e.widgets)
            for (var r = 0; r < e.widgets.length; ++r)
              e.widgets[r].above && (t += xr(e.widgets[r]));
          return t
        }
        function jr(e, t, r, n, i) {
          if (!i) {
            var o = Vr(t);
            r.top += o, r.bottom += o
          }
          if ("line" == n)
            return r;
          n || (n = "local");
          var l = jt(t);
          if ("local" == n ? l += Sr(e.display) : l -= e.display.viewOffset,
              "page" == n || "window" == n) {
            var s = e.display.lineSpace.getBoundingClientRect();
            l += s.top + ("window" == n ? 0 : Ur());
            var a = s.left + ("window" == n ? 0 : Gr());
            r.left += a, r.right += a
          }
          return r.top += l, r.bottom += l, r
        }
        function Kr(e, t, r) {
          if ("div" == r)
            return t;
          var n = t.left, i = t.top;
          if ("page" == r)
            n -= Gr(), i -= Ur();
          else if ("local" == r || !r) {
            var o = e.display.sizer.getBoundingClientRect();
            n += o.left, i += o.top
          }
          var l = e.display.lineSpace.getBoundingClientRect();
          return { left: n - l.left, top: i - l.top }
        }
        function Xr(e, t, r, n, i) {
          return n || (n = _e(e.doc, t.line)), jr(e, n, Ar(e, n, t.ch, i), r)
        }
        function _r(e, t, r, n, i, o) {
          function l(t, l) {
            var s = Hr(e, i, t, l ? "right" : "left", o);
            return l ? s.left = s.right : s.right = s.left, jr(e, n, s, r)
          }
          n = n || _e(e.doc, t.line), i || (i = Wr(e, n));
          var s = fe(n, e.doc.direction), a = t.ch, u = t.sticky;
          if (a >= n.text.length ? (a = n.text.length, u = "before")
                                 : a <= 0 && (a = 0, u = "after"),
              !s)
            return l("before" == u ? a - 1 : a, "before" == u);
          function c(e, t, r) { return l(r ? e - 1 : e, 1 == s[t].level != r) }
          var f = ue(s, a, u), d = ae, h = c(a, f, "before" == u);
          return null != d && (h.other = c(a, d, "before" != u)), h
        }
        function Yr(e, t) {
          var r = 0;
          t = at(e.doc, t),
          e.options.lineWrapping || (r = rn(e.display) * t.ch);
          var n = _e(e.doc, t.line), i = jt(n) + Sr(e.display);
          return { left: r, right: r, top: i, bottom: i + n.height }
        }
        function qr(e, t, r, n, i) {
          var o = tt(e, t, r);
          return o.xRel = i, n && (o.outside = n), o
        }
        function $r(e, t, r) {
          var n = e.doc;
          if ((r += e.display.viewOffset) < 0)
            return qr(n.first, 0, null, -1, -1);
          var i = Je(n, r), o = n.first + n.size - 1;
          if (i > o)
            return qr(n.first + n.size - 1, _e(n, o).text.length, null, 1, 1);
          t < 0 && (t = 0);
          for (var l = _e(n, i);;) {
            var s = en(e, l, i, t, r),
                a = Et(l, s.ch + (s.xRel > 0 || s.outside > 0 ? 1 : 0));
            if (!a)
              return s;
            var u = a.find(1);
            if (u.line == i)
              return u;
            l = _e(n, i = u.line)
          }
        }
        function Zr(e, t, r, n) {
          n -= Vr(t);
          var i = t.text.length,
              o = se(function(t) { return Hr(e, r, t - 1).bottom <= n }, i, 0);
          return {
            begin: o,
                end: i = se(function(t) { return Hr(e, r, t).top > n }, o, i)
          }
        }
        function Jr(e, t, r, n) {
          return r || (r = Wr(e, t)),
                 Zr(e, t, r, jr(e, t, Hr(e, r, n), "line").top)
        }
        function Qr(e, t, r, n) {
          return !(e.bottom <= r) && (e.top > r || (n ? e.left : e.right) > t)
        }
        function en(e, t, r, n, i) {
          i -= jt(t);
          var o = Wr(e, t), l = Vr(t), s = 0, a = t.text.length, u = !0,
              c = fe(t, e.doc.direction);
          if (c) {
            var f = (e.options.lineWrapping ? function(e, t, r, n, i, o, l) {
              var s = Zr(e, t, n, l), a = s.begin, u = s.end;
              /\s/.test(t.text.charAt(u - 1)) && u--;
              for (var c = null, f = null, d = 0; d < i.length; d++) {
                var h = i[d];
                if (!(h.from >= u || h.to <= a)) {
                  var p = 1 != h.level,
                      g = Hr(e, n,
                             p ? Math.min(u, h.to) - 1 : Math.max(a, h.from))
                              .right,
                      m = g < o ? o - g + 1e9 : g - o;
                  (!c || f > m) && (c = h, f = m)
                }
              }
              c || (c = i[i.length - 1]);
              c.from < a && (c = {from : a, to : c.to, level : c.level});
              c.to > u && (c = {from : c.from, to : u, level : c.level});
              return c
            } : function(e, t, r, n, i, o, l) {
              var s = se(function(s) {
                var a = i[s], u = 1 != a.level;
                return Qr(_r(e,
                             tt(r, u ? a.to : a.from, u ? "before" : "after"),
                             "line", t, n),
                          o, l, !0)
              }, 0, i.length - 1), a = i[s];
              if (s > 0) {
                var u = 1 != a.level,
                    c = _r(e, tt(r, u ? a.from : a.to, u ? "after" : "before"),
                           "line", t, n);
                Qr(c, o, l, !0) && c.top > l && (a = i[s - 1])
              }
              return a
            })(e, t, r, o, c, n, i);
            s = (u = 1 != f.level) ? f.from : f.to - 1,
            a = u ? f.to : f.from - 1
          }
          var d, h,
              p = null, g = null,
              m = se(function(t) {
                var r = Hr(e, o, t);
                return r.top += l, r.bottom += l,
                       !!Qr(r, n, i, !1) &&
                           (r.top <= i && r.left <= n && (p = t, g = r), !0)
              }, s, a), v = !1;
          if (g) {
            var y = n - g.left < g.right - n, b = y == u;
            m = p + (b ? 0 : 1), h = b ? "after" : "before",
            d = y ? g.left : g.right
          } else {
            u || m != a && m != s || m++,
                h = 0 == m
                        ? "after"
                        : m == t.text.length
                              ? "before"
                              : Hr(e, o, m - (u ? 1 : 0)).bottom + l <= i == u
                                    ? "after"
                                    : "before";
            var w = _r(e, tt(r, m, h), "line", t, o);
            d = w.left, v = i < w.top ? -1 : i >= w.bottom ? 1 : 0
          }
          return qr(r, m = le(t.text, m, 1), h, v, n - d)
        }
        function tn(e) {
          if (null != e.cachedTextHeight)
            return e.cachedTextHeight;
          if (null == zr) {
            zr = A("pre", null, "CodeMirror-line-like");
            for (var t = 0; t < 49; ++t)
              zr.appendChild(document.createTextNode("x")),
                  zr.appendChild(A("br"));
            zr.appendChild(document.createTextNode("x"))
          }
          O(e.measure, zr);
          var r = zr.offsetHeight / 50;
          return r > 3 && (e.cachedTextHeight = r), N(e.measure), r || 1
        }
        function rn(e) {
          if (null != e.cachedCharWidth)
            return e.cachedCharWidth;
          var t = A("span", "xxxxxxxxxx"),
              r = A("pre", [ t ], "CodeMirror-line-like");
          O(e.measure, r);
          var n = t.getBoundingClientRect(), i = (n.right - n.left) / 10;
          return i > 2 && (e.cachedCharWidth = i), i || 10
        }
        function nn(e) {
          for (var t = e.display, r = {}, n = {}, i = t.gutters.clientLeft,
                   o = t.gutters.firstChild, l = 0;
               o; o = o.nextSibling, ++l) {
            var s = e.display.gutterSpecs[l].className;
            r[s] = o.offsetLeft + o.clientLeft + i, n[s] = o.clientWidth
          }
          return {
            fixedPos: on(t), gutterTotalWidth: t.gutters.offsetWidth,
                gutterLeft: r, gutterWidth: n,
                wrapperWidth: t.wrapper.clientWidth
          }
        }
        function on(e) {
          return e.scroller.getBoundingClientRect().left -
                 e.sizer.getBoundingClientRect().left
        }
        function ln(e) {
          var t = tn(e.display), r = e.options.lineWrapping,
              n = r &&
                  Math.max(5,
                           e.display.scroller.clientWidth / rn(e.display) - 3);
          return function(i) {
            if (Ut(e.doc, i))
              return 0;
            var o = 0;
            if (i.widgets)
              for (var l = 0; l < i.widgets.length; l++)
                i.widgets[l].height && (o += i.widgets[l].height);
            return r ? o + (Math.ceil(i.text.length / n) || 1) * t : o + t
          }
        }
        function sn(e) {
          var t = e.doc, r = ln(e);
          t.iter(function(e) {
            var t = r(e);
            t != e.height && $e(e, t)
          })
        }
        function an(e, t, r, n) {
          var i = e.display;
          if (!r && "true" == Me(t).getAttribute("cm-not-content"))
            return null;
          var o, l, s = i.lineSpace.getBoundingClientRect();
          try {
            o = t.clientX - s.left, l = t.clientY - s.top
          } catch (t) {
            return null
          }
          var a, u = $r(e, o, l);
          if (n && 1 == u.xRel && (a = _e(e.doc, u.line).text).length == u.ch) {
            var c = R(a, a.length, e.options.tabSize) - a.length;
            u = tt(u.line, Math.max(0, Math.round((o - Mr(e.display).left) /
                                                  rn(e.display)) -
                                           c))
          }
          return u
        }
        function un(e, t) {
          if (t >= e.display.viewTo)
            return null;
          if ((t -= e.display.viewFrom) < 0)
            return null;
          for (var r = e.display.view, n = 0; n < r.length; n++)
            if ((t -= r[n].size) < 0)
              return n
        }
        function cn(e, t, r, n) {
          null == t && (t = e.doc.first),
              null == r && (r = e.doc.first + e.doc.size), n || (n = 0);
          var i = e.display;
          if (n && r < i.viewTo &&
                  (null == i.updateLineNumbers || i.updateLineNumbers > t) &&
                  (i.updateLineNumbers = t),
              e.curOp.viewChanged = !0, t >= i.viewTo)
            St && Bt(e.doc, t) < i.viewTo && dn(e);
          else if (r <= i.viewFrom)
            St && Gt(e.doc, r + n) > i.viewFrom
                ? dn(e)
                : (i.viewFrom += n, i.viewTo += n);
          else if (t <= i.viewFrom && r >= i.viewTo)
            dn(e);
          else if (t <= i.viewFrom) {
            var o = hn(e, r, r + n, 1);
            o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN,
                 i.viewTo += n)
              : dn(e)
          } else if (r >= i.viewTo) {
            var l = hn(e, t, t, -1);
            l ? (i.view = i.view.slice(0, l.index), i.viewTo = l.lineN) : dn(e)
          } else {
            var s = hn(e, t, t, -1), a = hn(e, r, r + n, 1);
            s && a ? (i.view = i.view.slice(0, s.index)
                                   .concat(or(e, s.lineN, a.lineN))
                                   .concat(i.view.slice(a.index)),
                      i.viewTo += n)
                   : dn(e)
          }
          var u = i.externalMeasured;
          u && (r < u.lineN
                    ? u.lineN += n
                    : t < u.lineN + u.size && (i.externalMeasured = null))
        }
        function fn(e, t, r) {
          e.curOp.viewChanged = !0;
          var n = e.display, i = e.display.externalMeasured;
          if (i && t >= i.lineN && t < i.lineN + i.size &&
                  (n.externalMeasured = null),
              !(t < n.viewFrom || t >= n.viewTo)) {
            var o = n.view[un(e, t)];
            if (null != o.node) {
              var l = o.changes || (o.changes = []);
              -1 == G(l, r) && l.push(r)
            }
          }
        }
        function dn(e) {
          e.display.viewFrom = e.display.viewTo = e.doc.first,
          e.display.view = [], e.display.viewOffset = 0
        }
        function hn(e, t, r, n) {
          var i, o = un(e, t), l = e.display.view;
          if (!St || r == e.doc.first + e.doc.size)
            return {index : o, lineN : r};
          for (var s = e.display.viewFrom, a = 0; a < o; a++)
            s += l[a].size;
          if (s != t) {
            if (n > 0) {
              if (o == l.length - 1)
                return null;
              i = s + l[o].size - t, o++
            } else
              i = s - t;
            t += i, r += i
          }
          for (; Bt(e.doc, r) != r;) {
            if (o == (n < 0 ? 0 : l.length - 1))
              return null;
            r += n * l[o - (n < 0 ? 1 : 0)].size, o += n
          }
          return { index: o, lineN: r }
        }
        function pn(e) {
          for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
            var i = t[n];
            i.hidden || i.node && !i.changes || ++r
          }
          return r
        }
        function gn(e) {
          e.display.input.showSelection(e.display.input.prepareSelection())
        }
        function mn(e, t) {
          void 0 === t && (t = !0);
          for (var r = e.doc, n = {},
                   i = n.cursors = document.createDocumentFragment(),
                   o = n.selection = document.createDocumentFragment(), l = 0;
               l < r.sel.ranges.length; l++)
            if (t || l != r.sel.primIndex) {
              var s = r.sel.ranges[l];
              if (!(s.from().line >= e.display.viewTo ||
                    s.to().line < e.display.viewFrom)) {
                var a = s.empty();
                (a || e.options.showCursorWhenSelecting) && vn(e, s.head, i),
                    a || bn(e, s, o)
              }
            }
          return n
        }
        function vn(e, t, r) {
          var n = _r(e, t, "div", null, null,
                     !e.options.singleCursorHeightPerLine),
              i = r.appendChild(A("div", " ", "CodeMirror-cursor"));
          if (i.style.left = n.left + "px", i.style.top = n.top + "px",
              i.style.height =
                  Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px",
              n.other) {
            var o = r.appendChild(
                A("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
            o.style.display = "", o.style.left = n.other.left + "px",
            o.style.top = n.other.top + "px",
            o.style.height = .85 * (n.other.bottom - n.other.top) + "px"
          }
        }
        function yn(e, t) { return e.top - t.top || e.left - t.left }
        function bn(e, t, r) {
          var n = e.display, i = e.doc, o = document.createDocumentFragment(),
              l = Mr(e.display), s = l.left,
              a = Math.max(n.sizerWidth, Tr(e) - n.sizer.offsetLeft) - l.right,
              u = "ltr" == i.direction;
          function c(e, t, r, n) {
            t < 0 && (t = 0),
                t = Math.round(t), n = Math.round(n),
                o.appendChild(A(
                    "div", null, "CodeMirror-selected",
                    "position: absolute; left: " + e +
                        "px;\n                             top: " + t +
                        "px; width: " + (null == r ? a - e : r) +
                        "px;\n                             height: " + (n - t) +
                        "px"))
          }
          function f(t, r, n) {
            var o, l, f = _e(i, t), d = f.text.length;
            function h(r, n) { return Xr(e, tt(t, r), "div", f, n) }
            function p(t, r, n) {
              var i = Jr(e, f, null, t),
                  o = "ltr" == r == ("after" == n) ? "left" : "right";
              return h("after" == n
                           ? i.begin
                           : i.end -
                                 (/\s/.test(f.text.charAt(i.end - 1)) ? 2 : 1),
                       o)[o]
            }
            var g = fe(f, i.direction);
            return function(e, t, r, n) {
              if (!e)
                return n(t, r, "ltr", 0);
              for (var i = !1, o = 0; o < e.length; ++o) {
                var l = e[o];
                (l.from < r && l.to > t || t == r && l.to == t) &&
                    (n(Math.max(l.from, t), Math.min(l.to, r),
                       1 == l.level ? "rtl" : "ltr", o),
                     i = !0)
              }
              i || n(t, r, "ltr")
            }(g, r || 0, null == n ? d : n,
                   function(e, t, i, f) {
                     var m = "ltr" == i, v = h(e, m ? "left" : "right"),
                         y = h(t - 1, m ? "right" : "left"),
                         b = null == r && 0 == e, w = null == n && t == d,
                         x = 0 == f, C = !g || f == g.length - 1;
                     if (y.top - v.top <= 3) {
                       var S = (u ? w : b) && C,
                           k = (u ? b : w) && x ? s : (m ? v : y).left,
                           M = S ? a : (m ? y : v).right;
                       c(k, v.top, M - k, v.bottom)
                     } else {
                       var L, T, N, O;
                       m ? (L = u && b && x ? s : v.left,
                            T = u ? a : p(e, i, "before"),
                            N = u ? s : p(t, i, "after"),
                            O = u && w && C ? a : y.right)
                         : (L = u ? p(e, i, "before") : s,
                            T = !u && b && x ? a : v.right,
                            N = !u && w && C ? s : y.left,
                            O = u ? p(t, i, "after") : a),
                           c(L, v.top, T - L, v.bottom),
                           v.bottom < y.top && c(s, v.bottom, null, y.top),
                           c(N, y.top, O - N, y.bottom)
                     }
                     (!o || yn(v, o) < 0) && (o = v), yn(y, o) < 0 && (o = y),
                         (!l || yn(v, l) < 0) && (l = v),
                         yn(y, l) < 0 && (l = y)
                   }),
            {
              start: o, end: l
            }
          }
          var d = t.from(), h = t.to();
          if (d.line == h.line)
            f(d.line, d.ch, h.ch);
          else {
            var p = _e(i, d.line), g = _e(i, h.line), m = Rt(p) == Rt(g),
                v = f(d.line, d.ch, m ? p.text.length + 1 : null).end,
                y = f(h.line, m ? 0 : null, h.ch).start;
            m && (v.top < y.top - 2
                      ? (c(v.right, v.top, null, v.bottom),
                         c(s, y.top, y.left, y.bottom))
                      : c(v.right, v.top, y.left - v.right, v.bottom)),
                v.bottom < y.top && c(s, v.bottom, null, y.top)
          }
          r.appendChild(o)
        }
        function wn(e) {
          if (e.state.focused) {
            var t = e.display;
            clearInterval(t.blinker);
            var r = !0;
            t.cursorDiv.style.visibility = "",
            e.options.cursorBlinkRate > 0
                ? t.blinker = setInterval(
                      function() {
                        return t.cursorDiv.style.visibility =
                                   (r = !r) ? "" : "hidden"
                      },
                      e.options.cursorBlinkRate)
                : e.options.cursorBlinkRate < 0 &&
                      (t.cursorDiv.style.visibility = "hidden")
          }
        }
        function xn(e) { e.state.focused || (e.display.input.focus(), Sn(e)) }
        function Cn(e) {
          e.state.delayingBlurEvent = !0, setTimeout(function() {
            e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, kn(e))
          }, 100)
        }
        function Sn(e, t) {
          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
              "nocursor" != e.options.readOnly &&
                  (e.state.focused ||
                       (me(e, "focus", e, t), e.state.focused = !0,
                        z(e.display.wrapper, "CodeMirror-focused"),
                        e.curOp || e.display.selForContextMenu == e.doc.sel ||
                            (e.display.input.reset(),
                             u && setTimeout(
                                      function() {
                                        return e.display.input.reset(!0)
                                      },
                                      20)),
                        e.display.input.receivedFocus()),
                   wn(e))
        }
        function kn(e, t) {
          e.state.delayingBlurEvent ||
              (e.state.focused && (me(e, "blur", e, t), e.state.focused = !1,
                                   T(e.display.wrapper, "CodeMirror-focused")),
               clearInterval(e.display.blinker),
               setTimeout(
                   function() { e.state.focused || (e.display.shift = !1) },
                   150))
        }
        function Mn(e) {
          for (var t = e.display, r = t.lineDiv.offsetTop, n = 0;
               n < t.view.length; n++) {
            var i = t.view[n], o = e.options.lineWrapping, l = void 0, u = 0;
            if (!i.hidden) {
              if (s && a < 8) {
                var c = i.node.offsetTop + i.node.offsetHeight;
                l = c - r, r = c
              } else {
                var f = i.node.getBoundingClientRect();
                l = f.bottom - f.top,
                !o && i.text.firstChild &&
                    (u = i.text.firstChild.getBoundingClientRect().right -
                         f.left - 1)
              }
              var d = i.line.height - l;
              if ((d > .005 || d < -.005) &&
                  ($e(i.line, l), Ln(i.line), i.rest))
                for (var h = 0; h < i.rest.length; h++)
                  Ln(i.rest[h]);
              if (u > e.display.sizerWidth) {
                var p = Math.ceil(u / rn(e.display));
                p > e.display.maxLineLength &&
                    (e.display.maxLineLength = p, e.display.maxLine = i.line,
                     e.display.maxLineChanged = !0)
              }
            }
          }
        }
        function Ln(e) {
          if (e.widgets)
            for (var t = 0; t < e.widgets.length; ++t) {
              var r = e.widgets[t], n = r.node.parentNode;
              n && (r.height = n.offsetHeight)
            }
        }
        function Tn(e, t, r) {
          var n =
              r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
          n = Math.floor(n - Sr(e));
          var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight,
              o = Je(t, n), l = Je(t, i);
          if (r && r.ensure) {
            var s = r.ensure.from.line, a = r.ensure.to.line;
            s < o
                ? (o = s, l = Je(t, jt(_e(t, s)) + e.wrapper.clientHeight))
                : Math.min(a, t.lastLine()) >= l &&
                      (o = Je(t, jt(_e(t, a)) - e.wrapper.clientHeight), l = a)
          }
          return { from: o, to: Math.max(l, o + 1) }
        }
        function Nn(e, t) {
          var r = e.display, n = tn(e.display);
          t.top < 0 && (t.top = 0);
          var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop
                                                       : r.scroller.scrollTop,
              o = Nr(e), l = {};
          t.bottom - t.top > o && (t.bottom = t.top + o);
          var s = e.doc.height + kr(r), a = t.top<n, u = t.bottom>s - n;
          if (t.top < i)
            l.scrollTop = a ? 0 : t.top;
          else if (t.bottom > i + o) {
            var c = Math.min(t.top, (u ? s : t.bottom) - o);
            c != i && (l.scrollTop = c)
          }
          var f = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft
                                                        : r.scroller.scrollLeft,
              d = Tr(e) - (e.options.fixedGutter ? r.gutters.offsetWidth : 0),
              h = t.right - t.left > d;
          return h && (t.right = t.left + d),
                 t.left < 10
                     ? l.scrollLeft = 0
                     : t.left < f
                           ? l.scrollLeft = Math.max(0, t.left - (h ? 0 : 10))
                           : t.right > d + f - 3 &&
                                 (l.scrollLeft = t.right + (h ? 0 : 10) - d),
                       l
        }
        function On(e, t) {
          null != t && (Wn(e), e.curOp.scrollTop = (null == e.curOp.scrollTop
                                                        ? e.doc.scrollTop
                                                        : e.curOp.scrollTop) +
                                                   t)
        }
        function An(e) {
          Wn(e);
          var t = e.getCursor();
          e.curOp.scrollToPos = {
            from : t,
            to : t,
            margin : e.options.cursorScrollMargin
          }
        }
        function Dn(e, t, r) {
          null == t && null == r || Wn(e),
              null != t && (e.curOp.scrollLeft = t),
              null != r && (e.curOp.scrollTop = r)
        }
        function Wn(e) {
          var t = e.curOp.scrollToPos;
          t && (e.curOp.scrollToPos = null,
                Hn(e, Yr(e, t.from), Yr(e, t.to), t.margin))
        }
        function Hn(e, t, r, n) {
          var i = Nn(e, {
            left : Math.min(t.left, r.left),
            top : Math.min(t.top, r.top) - n,
            right : Math.max(t.right, r.right),
            bottom : Math.max(t.bottom, r.bottom) + n
          });
          Dn(e, i.scrollLeft, i.scrollTop)
        }
        function zn(e, t) {
          Math.abs(e.doc.scrollTop - t) < 2 ||
              (r || li(e, {top : t}), Fn(e, t, !0), r && li(e), ti(e, 100))
        }
        function Fn(e, t, r) {
          t = Math.min(e.display.scroller.scrollHeight -
                           e.display.scroller.clientHeight,
                       t),
          (e.display.scroller.scrollTop != t || r) &&
              (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t),
               e.display.scroller.scrollTop != t &&
                   (e.display.scroller.scrollTop = t))
        }
        function Pn(e, t, r, n) {
          t = Math.min(t, e.display.scroller.scrollWidth -
                              e.display.scroller.clientWidth),
          (r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) &&
                  !n ||
              (e.doc.scrollLeft = t, ui(e),
               e.display.scroller.scrollLeft != t &&
                   (e.display.scroller.scrollLeft = t),
               e.display.scrollbars.setScrollLeft(t))
        }
        function En(e) {
          var t = e.display, r = t.gutters.offsetWidth,
              n = Math.round(e.doc.height + kr(e.display));
          return {
            clientHeight: t.scroller.clientHeight,
                viewHeight: t.wrapper.clientHeight,
                scrollWidth: t.scroller.scrollWidth,
                clientWidth: t.scroller.clientWidth,
                viewWidth: t.wrapper.clientWidth,
                barLeft: e.options.fixedGutter ? r : 0, docHeight: n,
                scrollHeight: n + Lr(e) + t.barHeight,
                nativeBarWidth: t.nativeBarWidth, gutterWidth: r
          }
        }
        var In = function(e, t, r) {
          this.cm = r;
          var n = this.vert =
                  A("div", [ A("div", null, null, "min-width: 1px") ],
                    "CodeMirror-vscrollbar"),
              i = this.horiz =
                  A("div",
                    [ A("div", null, null, "height: 100%; min-height: 1px") ],
                    "CodeMirror-hscrollbar");
          n.tabIndex = i.tabIndex = -1, e(n), e(i),
          he(n, "scroll",
             function() { n.clientHeight && t(n.scrollTop, "vertical") }),
          he(i, "scroll",
             function() { i.clientWidth && t(i.scrollLeft, "horizontal") }),
          this.checkedZeroWidth = !1,
          s && a < 8 &&
              (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
        };
        In.prototype.update = function(e) {
          var t = e.scrollWidth > e.clientWidth + 1,
              r = e.scrollHeight > e.clientHeight + 1, n = e.nativeBarWidth;
          if (r) {
            this.vert.style.display = "block",
            this.vert.style.bottom = t ? n + "px" : "0";
            var i = e.viewHeight - (t ? n : 0);
            this.vert.firstChild.style.height =
                Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
          } else
            this.vert.style.display = "",
            this.vert.firstChild.style.height = "0";
          if (t) {
            this.horiz.style.display = "block",
            this.horiz.style.right = r ? n + "px" : "0",
            this.horiz.style.left = e.barLeft + "px";
            var o = e.viewWidth - e.barLeft - (r ? n : 0);
            this.horiz.firstChild.style.width =
                Math.max(0, e.scrollWidth - e.clientWidth + o) + "px"
          } else
            this.horiz.style.display = "",
            this.horiz.firstChild.style.width = "0";
          return !this.checkedZeroWidth && e.clientHeight > 0 &&
                     (0 == n && this.zeroWidthHack(),
                      this.checkedZeroWidth = !0),
          {
            right: r ? n : 0, bottom: t ? n : 0
          }
        }, In.prototype.setScrollLeft = function(e) {
          this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
              this.disableHoriz && this.enableZeroWidthBar(
                                       this.horiz, this.disableHoriz, "horiz")
        }, In.prototype.setScrollTop = function(e) {
          this.vert.scrollTop != e && (this.vert.scrollTop = e),
              this.disableVert &&
                  this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
        }, In.prototype.zeroWidthHack = function() {
          var e = b && !p ? "12px" : "18px";
          this.horiz.style.height = this.vert.style.width = e,
          this.horiz.style.pointerEvents = this.vert.style.pointerEvents =
              "none",
          this.disableHoriz = new B, this.disableVert = new B
        }, In.prototype.enableZeroWidthBar = function(e, t, r) {
          e.style.pointerEvents = "auto", t.set(1e3, function n() {
            var i = e.getBoundingClientRect();
            ("vert" == r ? document.elementFromPoint(i.right - 1,
                                                     (i.top + i.bottom) / 2)
                         : document.elementFromPoint((i.right + i.left) / 2,
                                                     i.bottom - 1)) != e
                ? e.style.pointerEvents = "none"
                : t.set(1e3, n)
          })
        }, In.prototype.clear = function() {
          var e = this.horiz.parentNode;
          e.removeChild(this.horiz), e.removeChild(this.vert)
        };
        var Rn = function() {};
        function Bn(e, t) {
          t || (t = En(e));
          var r = e.display.barWidth, n = e.display.barHeight;
          Gn(e, t);
          for (var i = 0;
               i < 4 && r != e.display.barWidth || n != e.display.barHeight;
               i++)
            r != e.display.barWidth && e.options.lineWrapping && Mn(e),
                Gn(e, En(e)), r = e.display.barWidth, n = e.display.barHeight
        }
        function Gn(e, t) {
          var r = e.display, n = r.scrollbars.update(t);
          r.sizer.style.paddingRight = (r.barWidth = n.right) + "px",
          r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px",
          r.heightForcer.style.borderBottom = n.bottom + "px solid transparent",
          n.right && n.bottom
              ? (r.scrollbarFiller.style.display = "block",
                 r.scrollbarFiller.style.height = n.bottom + "px",
                 r.scrollbarFiller.style.width = n.right + "px")
              : r.scrollbarFiller.style.display = "",
          n.bottom && e.options.coverGutterNextToScrollbar &&
                  e.options.fixedGutter
              ? (r.gutterFiller.style.display = "block",
                 r.gutterFiller.style.height = n.bottom + "px",
                 r.gutterFiller.style.width = t.gutterWidth + "px")
              : r.gutterFiller.style.display = ""
        }
        Rn.prototype.update =
            function() {
          return { bottom: 0, right: 0 }
        },
        Rn.prototype.setScrollLeft = function() {},
        Rn.prototype.setScrollTop = function() {},
        Rn.prototype.clear = function() {};
        var Un = {native : In, null : Rn};
        function Vn(e) {
          e.display.scrollbars &&
              (e.display.scrollbars.clear(),
               e.display.scrollbars.addClass &&
                   T(e.display.wrapper, e.display.scrollbars.addClass)),
              e.display.scrollbars = new Un[e.options.scrollbarStyle](
                  function(t) {
                    e.display.wrapper.insertBefore(t,
                                                   e.display.scrollbarFiller),
                        he(t, "mousedown", function() {
                          e.state.focused &&
                              setTimeout(
                                  function() { return e.display.input.focus() },
                                  0)
                        }), t.setAttribute("cm-not-content", "true")
                  },
                  function(t, r) { "horizontal" == r ? Pn(e, t) : zn(e, t) },
                  e),
              e.display.scrollbars.addClass &&
                  z(e.display.wrapper, e.display.scrollbars.addClass)
        }
        var jn = 0;
        function Kn(e) {
          var t;
          e.curOp = {
            cm : e,
            viewChanged : !1,
            startHeight : e.doc.height,
            forceUpdate : !1,
            updateInput : 0,
            typing : !1,
            changeObjs : null,
            cursorActivityHandlers : null,
            cursorActivityCalled : 0,
            selectionChanged : !1,
            updateMaxLine : !1,
            scrollLeft : null,
            scrollTop : null,
            scrollToPos : null,
            focus : !1,
            id : ++jn
          },
          t = e.curOp, lr ? lr.ops.push(t) : t.ownsGroup = lr = {
            ops : [ t ],
            delayedCallbacks : []
          }
        }
        function Xn(e) {
          var t = e.curOp;
          t && function(e, t) {
            var r = e.ownsGroup;
            if (r)
              try {
                !function(e) {
                  var t = e.delayedCallbacks, r = 0;
                  do {
                    for (; r < t.length; r++)
                      t[r].call(null);
                    for (var n = 0; n < e.ops.length; n++) {
                      var i = e.ops[n];
                      if (i.cursorActivityHandlers)
                        for (; i.cursorActivityCalled <
                               i.cursorActivityHandlers.length;)
                          i.cursorActivityHandlers[i.cursorActivityCalled++]
                              .call(null, i.cm)
                    }
                  } while (r < t.length)
                }(r)
              } finally {
                lr = null, t(r)
              }
          }(t, function(e) {
            for (var t = 0; t < e.ops.length; t++)
              e.ops[t].cm.curOp = null;
            !function(e) {
              for (var t = e.ops, r = 0; r < t.length; r++)
                _n(t[r]);
              for (var n = 0; n < t.length; n++)
                (i = t[n]).updatedDisplay = i.mustUpdate && ii(i.cm, i.update);
              var i;
              for (var o = 0; o < t.length; o++)
                Yn(t[o]);
              for (var l = 0; l < t.length; l++)
                qn(t[l]);
              for (var s = 0; s < t.length; s++)
                $n(t[s])
            }(e)
          })
        }
        function _n(e) {
          var t = e.cm, r = t.display;
          !function(e) {
            var t = e.display;
            !t.scrollbarsClipped && t.scroller.offsetWidth &&
                (t.nativeBarWidth =
                     t.scroller.offsetWidth - t.scroller.clientWidth,
                 t.heightForcer.style.height = Lr(e) + "px",
                 t.sizer.style.marginBottom = -t.nativeBarWidth + "px",
                 t.sizer.style.borderRightWidth = Lr(e) + "px",
                 t.scrollbarsClipped = !0)
          }(t),
              e.updateMaxLine && Xt(t),
              e.mustUpdate =
                  e.viewChanged || e.forceUpdate || null != e.scrollTop ||
                  e.scrollToPos && (e.scrollToPos.from.line < r.viewFrom ||
                                    e.scrollToPos.to.line >= r.viewTo) ||
                  r.maxLineChanged && t.options.lineWrapping,
              e.update = e.mustUpdate &&
                         new ni(t,
                                e.mustUpdate &&
                                    {top : e.scrollTop, ensure : e.scrollToPos},
                                e.forceUpdate)
        }
        function Yn(e) {
          var t = e.cm, r = t.display;
          e.updatedDisplay && Mn(t),
              e.barMeasure = En(t),
              r.maxLineChanged && !t.options.lineWrapping &&
                  (e.adjustWidthTo =
                       Ar(t, r.maxLine, r.maxLine.text.length).left + 3,
                   t.display.sizerWidth = e.adjustWidthTo,
                   e.barMeasure.scrollWidth =
                       Math.max(r.scroller.clientWidth,
                                r.sizer.offsetLeft + e.adjustWidthTo + Lr(t) +
                                    t.display.barWidth),
                   e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft +
                                                     e.adjustWidthTo - Tr(t))),
              (e.updatedDisplay || e.selectionChanged) &&
                  (e.preparedSelection = r.input.prepareSelection())
        }
        function qn(e) {
          var t = e.cm;
          null != e.adjustWidthTo &&
              (t.display.sizer.style.minWidth = e.adjustWidthTo + "px",
               e.maxScrollLeft < t.doc.scrollLeft &&
                   Pn(t,
                      Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft),
                      !0),
               t.display.maxLineChanged = !1);
          var r = e.focus && e.focus == H();
          e.preparedSelection &&
              t.display.input.showSelection(e.preparedSelection, r),
              (e.updatedDisplay || e.startHeight != t.doc.height) &&
                  Bn(t, e.barMeasure),
              e.updatedDisplay && ai(t, e.barMeasure),
              e.selectionChanged && wn(t),
              t.state.focused && e.updateInput &&
                  t.display.input.reset(e.typing),
              r && xn(e.cm)
        }
        function $n(e) {
          var t = e.cm, r = t.display, n = t.doc;
          (e.updatedDisplay && oi(t, e.update),
           null == r.wheelStartX ||
               null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos ||
               (r.wheelStartX = r.wheelStartY = null),
           null != e.scrollTop && Fn(t, e.scrollTop, e.forceScroll),
           null != e.scrollLeft && Pn(t, e.scrollLeft, !0, !0),
           e.scrollToPos) &&
              function(e, t) {
                if (!ve(e, "scrollCursorIntoView")) {
                  var r = e.display, n = r.sizer.getBoundingClientRect(),
                      i = null;
                  if (t.top + n.top < 0
                          ? i = !0
                          : t.bottom + n.top >
                                    (window.innerHeight ||
                                     document.documentElement.clientHeight) &&
                                (i = !1),
                      null != i && !g) {
                    var o = A(
                        "div", "​", null,
                        "position: absolute;\n                         top: " +
                            (t.top - r.viewOffset - Sr(e.display)) +
                            "px;\n                         height: " +
                            (t.bottom - t.top + Lr(e) + r.barHeight) +
                            "px;\n                         left: " + t.left +
                            "px; width: " + Math.max(2, t.right - t.left) +
                            "px;");
                    e.display.lineSpace.appendChild(o), o.scrollIntoView(i),
                        e.display.lineSpace.removeChild(o)
                  }
                }
              }(t,
                function(e, t, r, n) {
                  var i;
                  null == n && (n = 0),
                      e.options.lineWrapping || t != r ||
                          (r = "before" == (t = t.ch ? tt(t.line,
                                                          "before" == t.sticky
                                                              ? t.ch - 1
                                                              : t.ch,
                                                          "after")
                                                     : t)
                                               .sticky
                                   ? tt(t.line, t.ch + 1, "before")
                                   : t);
                  for (var o = 0; o < 5; o++) {
                    var l = !1, s = _r(e, t), a = r && r != t ? _r(e, r) : s,
                        u = Nn(e, i = {
                          left : Math.min(s.left, a.left),
                          top : Math.min(s.top, a.top) - n,
                          right : Math.max(s.left, a.left),
                          bottom : Math.max(s.bottom, a.bottom) + n
                        }),
                        c = e.doc.scrollTop, f = e.doc.scrollLeft;
                    if (null != u.scrollTop &&
                            (zn(e, u.scrollTop),
                             Math.abs(e.doc.scrollTop - c) > 1 && (l = !0)),
                        null != u.scrollLeft &&
                            (Pn(e, u.scrollLeft),
                             Math.abs(e.doc.scrollLeft - f) > 1 && (l = !0)),
                        !l)
                      break
                  }
                  return i
                }(t, at(n, e.scrollToPos.from), at(n, e.scrollToPos.to),
                  e.scrollToPos.margin));
          var i = e.maybeHiddenMarkers, o = e.maybeUnhiddenMarkers;
          if (i)
            for (var l = 0; l < i.length; ++l)
              i[l].lines.length || me(i[l], "hide");
          if (o)
            for (var s = 0; s < o.length; ++s)
              o[s].lines.length && me(o[s], "unhide");
          r.wrapper.offsetHeight &&
              (n.scrollTop = t.display.scroller.scrollTop),
              e.changeObjs && me(t, "changes", t, e.changeObjs),
              e.update && e.update.finish()
        }
        function Zn(e, t) {
          if (e.curOp)
            return t();
          Kn(e);
          try {
            return t()
          } finally {
            Xn(e)
          }
        }
        function Jn(e, t) {
          return function() {
            if (e.curOp)
              return t.apply(e, arguments);
            Kn(e);
            try {
              return t.apply(e, arguments)
            } finally {
              Xn(e)
            }
          }
        }
        function Qn(e) {
          return function() {
            if (this.curOp)
              return e.apply(this, arguments);
            Kn(this);
            try {
              return e.apply(this, arguments)
            } finally {
              Xn(this)
            }
          }
        }
        function ei(e) {
          return function() {
            var t = this.cm;
            if (!t || t.curOp)
              return e.apply(this, arguments);
            Kn(t);
            try {
              return e.apply(this, arguments)
            } finally {
              Xn(t)
            }
          }
        }
        function ti(e, t) {
          e.doc.highlightFrontier < e.display.viewTo &&
              e.state.highlight.set(t, E(ri, e))
        }
        function ri(e) {
          var t = e.doc;
          if (!(t.highlightFrontier >= e.display.viewTo)) {
            var r = +new Date + e.options.workTime,
                n = pt(e, t.highlightFrontier), i = [];
            t.iter(n.line, Math.min(t.first + t.size, e.display.viewTo + 500),
                   function(o) {
                     if (n.line >= e.display.viewFrom) {
                       var l = o.styles,
                           s = o.text.length > e.options.maxHighlightLength
                                   ? Ve(t.mode, n.state)
                                   : null,
                           a = dt(e, o, n, !0);
                       s && (n.state = s), o.styles = a.styles;
                       var u = o.styleClasses, c = a.classes;
                       c ? o.styleClasses = c : u && (o.styleClasses = null);
                       for (var f = !l || l.length != o.styles.length ||
                                    u != c &&
                                        (!u || !c || u.bgClass != c.bgClass ||
                                         u.textClass != c.textClass),
                                d = 0;
                            !f && d < l.length; ++d)
                         f = l[d] != o.styles[d];
                       f && i.push(n.line), o.stateAfter = n.save(),
                                            n.nextLine()
                     } else
                       o.text.length <= e.options.maxHighlightLength &&
                           gt(e, o.text, n),
                           o.stateAfter = n.line % 5 == 0 ? n.save() : null,
                           n.nextLine();
                     if (+new Date > r)
                       return ti(e, e.options.workDelay), !0
                   }),
                t.highlightFrontier = n.line,
                t.modeFrontier = Math.max(t.modeFrontier, n.line),
                i.length && Zn(e, function() {
                  for (var t = 0; t < i.length; t++)
                    fn(e, i[t], "text")
                })
          }
        }
        var ni = function(e, t, r) {
          var n = e.display;
          this.viewport = t, this.visible = Tn(n, e.doc, t),
          this.editorIsHidden = !n.wrapper.offsetWidth,
          this.wrapperHeight = n.wrapper.clientHeight,
          this.wrapperWidth = n.wrapper.clientWidth,
          this.oldDisplayWidth = Tr(e), this.force = r, this.dims = nn(e),
          this.events = []
        };
        function ii(e, t) {
          var r = e.display, n = e.doc;
          if (t.editorIsHidden)
            return dn(e), !1;
          if (!t.force && t.visible.from >= r.viewFrom &&
              t.visible.to <= r.viewTo &&
              (null == r.updateLineNumbers ||
               r.updateLineNumbers >= r.viewTo) &&
              r.renderedView == r.view && 0 == pn(e))
            return !1;
          ci(e) && (dn(e), t.dims = nn(e));
          var i = n.first + n.size,
              o = Math.max(t.visible.from - e.options.viewportMargin, n.first),
              l = Math.min(i, t.visible.to + e.options.viewportMargin);
          r.viewFrom < o &&
              o - r.viewFrom<20 && (o = Math.max(n.first, r.viewFrom)),
                             r.viewTo>l &&
              r.viewTo - l < 20 && (l = Math.min(i, r.viewTo)),
              St && (o = Bt(e.doc, o), l = Gt(e.doc, l));
          var s = o != r.viewFrom || l != r.viewTo ||
                  r.lastWrapHeight != t.wrapperHeight ||
                  r.lastWrapWidth != t.wrapperWidth;
          !function(e, t, r) {
            var n = e.display;
            0 == n.view.length || t >= n.viewTo || r <= n.viewFrom
                ? (n.view = or(e, t, r), n.viewFrom = t)
                : (n.viewFrom > t
                       ? n.view = or(e, t, n.viewFrom).concat(n.view)
                       : n.viewFrom < t && (n.view = n.view.slice(un(e, t))),
                   n.viewFrom = t,
                   n.viewTo < r
                       ? n.view = n.view.concat(or(e, n.viewTo, r))
                       : n.viewTo > r && (n.view = n.view.slice(0, un(e, r)))),
                n.viewTo = r
          }(e, o, l),
              r.viewOffset = jt(_e(e.doc, r.viewFrom)),
              e.display.mover.style.top = r.viewOffset + "px";
          var a = pn(e);
          if (!s && 0 == a && !t.force && r.renderedView == r.view &&
              (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo))
            return !1;
          var c = function(e) {
            if (e.hasFocus())
              return null;
            var t = H();
            if (!t || !W(e.display.lineDiv, t))
              return null;
            var r = {activeElt : t};
            if (window.getSelection) {
              var n = window.getSelection();
              n.anchorNode && n.extend && W(e.display.lineDiv, n.anchorNode) &&
                  (r.anchorNode = n.anchorNode, r.anchorOffset = n.anchorOffset,
                   r.focusNode = n.focusNode, r.focusOffset = n.focusOffset)
            }
            return r
          }(e);
          return a > 4 && (r.lineDiv.style.display = "none"),
                 function(e, t, r) {
                   var n = e.display, i = e.options.lineNumbers, o = n.lineDiv,
                       l = o.firstChild;
                   function s(t) {
                     var r = t.nextSibling;
                     return u && b && e.display.currentWheelTarget == t
                                ? t.style.display = "none"
                                : t.parentNode.removeChild(t),
                                  r
                   }
                   for (var a = n.view, c = n.viewFrom, f = 0; f < a.length;
                        f++) {
                     var d = a[f];
                     if (d.hidden)
                       ;
                     else if (d.node && d.node.parentNode == o) {
                       for (; l != d.node;)
                         l = s(l);
                       var h = i && null != t && t <= c && d.lineNumber;
                       d.changes && (G(d.changes, "gutter") > -1 && (h = !1),
                                     cr(e, d, c, r)),
                           h &&
                               (N(d.lineNumber),
                                d.lineNumber.appendChild(
                                    document.createTextNode(et(e.options, c)))),
                           l = d.node.nextSibling
                     } else {
                       var p = vr(e, d, c, r);
                       o.insertBefore(p, l)
                     }
                     c += d.size
                   }
                   for (; l;)
                     l = s(l)
                 }(e, r.updateLineNumbers, t.dims),
                 a > 4 && (r.lineDiv.style.display = ""),
                 r.renderedView = r.view,
                 function(e) {
                   if (e && e.activeElt && e.activeElt != H() &&
                       (e.activeElt.focus(),
                        e.anchorNode && W(document.body, e.anchorNode) &&
                            W(document.body, e.focusNode))) {
                     var t = window.getSelection(), r = document.createRange();
                     r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(!1),
                         t.removeAllRanges(), t.addRange(r),
                         t.extend(e.focusNode, e.focusOffset)
                   }
                 }(c),
                 N(r.cursorDiv), N(r.selectionDiv),
                 r.gutters.style.height = r.sizer.style.minHeight = 0,
                 s && (r.lastWrapHeight = t.wrapperHeight,
                       r.lastWrapWidth = t.wrapperWidth, ti(e, 400)),
                 r.updateLineNumbers = null, !0
        }
        function oi(e, t) {
          for (var r = t.viewport, n = !0;
               (n && e.options.lineWrapping && t.oldDisplayWidth != Tr(e) ||
                (r && null != r.top && (r = {
                   top : Math.min(e.doc.height + kr(e.display) - Nr(e), r.top)
                 }),
                 t.visible = Tn(e.display, e.doc, r),
                 !(t.visible.from >= e.display.viewFrom &&
                   t.visible.to <= e.display.viewTo))) &&
               ii(e, t);
               n = !1) {
            Mn(e);
            var i = En(e);
            gn(e), Bn(e, i), ai(e, i), t.force = !1
          }
          t.signal(e, "update", e),
              e.display.viewFrom == e.display.reportedViewFrom &&
                      e.display.viewTo == e.display.reportedViewTo ||
                  (t.signal(e, "viewportChange", e, e.display.viewFrom,
                            e.display.viewTo),
                   e.display.reportedViewFrom = e.display.viewFrom,
                   e.display.reportedViewTo = e.display.viewTo)
        }
        function li(e, t) {
          var r = new ni(e, t);
          if (ii(e, r)) {
            Mn(e), oi(e, r);
            var n = En(e);
            gn(e), Bn(e, n), ai(e, n), r.finish()
          }
        }
        function si(e) {
          var t = e.gutters.offsetWidth;
          e.sizer.style.marginLeft = t + "px"
        }
        function ai(e, t) {
          e.display.sizer.style.minHeight = t.docHeight + "px",
          e.display.heightForcer.style.top = t.docHeight + "px",
          e.display.gutters.style.height =
              t.docHeight + e.display.barHeight + Lr(e) + "px"
        }
        function ui(e) {
          var t = e.display, r = t.view;
          if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
            for (var n = on(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
                     i = t.gutters.offsetWidth, o = n + "px", l = 0;
                 l < r.length; l++)
              if (!r[l].hidden) {
                e.options.fixedGutter &&
                    (r[l].gutter && (r[l].gutter.style.left = o),
                     r[l].gutterBackground &&
                         (r[l].gutterBackground.style.left = o));
                var s = r[l].alignable;
                if (s)
                  for (var a = 0; a < s.length; a++)
                    s[a].style.left = o
              }
            e.options.fixedGutter && (t.gutters.style.left = n + i + "px")
          }
        }
        function ci(e) {
          if (!e.options.lineNumbers)
            return !1;
          var t = e.doc, r = et(e.options, t.first + t.size - 1), n = e.display;
          if (r.length != n.lineNumChars) {
            var i = n.measure.appendChild(
                    A("div", [ A("div", r) ],
                      "CodeMirror-linenumber CodeMirror-gutter-elt")),
                o = i.firstChild.offsetWidth, l = i.offsetWidth - o;
            return n.lineGutter.style.width = "",
                   n.lineNumInnerWidth =
                       Math.max(o, n.lineGutter.offsetWidth - l) + 1,
                   n.lineNumWidth = n.lineNumInnerWidth + l,
                   n.lineNumChars = n.lineNumInnerWidth ? r.length : -1,
                   n.lineGutter.style.width = n.lineNumWidth + "px",
                   si(e.display), !0
          }
          return !1
        }
        function fi(e, t) {
          for (var r = [], n = !1, i = 0; i < e.length; i++) {
            var o = e[i], l = null;
            if ("string" != typeof o && (l = o.style, o = o.className),
                "CodeMirror-linenumbers" == o) {
              if (!t)
                continue;
              n = !0
            }
            r.push({className : o, style : l})
          }
          return t && !n &&
                     r.push(
                         {className : "CodeMirror-linenumbers", style : null}),
                 r
        }
        function di(e) {
          var t = e.gutters, r = e.gutterSpecs;
          N(t), e.lineGutter = null;
          for (var n = 0; n < r.length; ++n) {
            var i = r[n], o = i.className, l = i.style,
                s = t.appendChild(A("div", null, "CodeMirror-gutter " + o));
            l && (s.style.cssText = l),
                "CodeMirror-linenumbers" == o &&
                    (e.lineGutter = s,
                     s.style.width = (e.lineNumWidth || 1) + "px")
          }
          t.style.display = r.length ? "" : "none", si(e)
        }
        function hi(e) { di(e.display), cn(e), ui(e) }
        function pi(e, t, n, i) {
          var o = this;
          this.input = n,
          o.scrollbarFiller = A("div", null, "CodeMirror-scrollbar-filler"),
          o.scrollbarFiller.setAttribute("cm-not-content", "true"),
          o.gutterFiller = A("div", null, "CodeMirror-gutter-filler"),
          o.gutterFiller.setAttribute("cm-not-content", "true"),
          o.lineDiv = D("div", null, "CodeMirror-code"),
          o.selectionDiv =
              A("div", null, null, "position: relative; z-index: 1"),
          o.cursorDiv = A("div", null, "CodeMirror-cursors"),
          o.measure = A("div", null, "CodeMirror-measure"),
          o.lineMeasure = A("div", null, "CodeMirror-measure"),
          o.lineSpace = D(
              "div",
              [
                o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv
              ],
              null, "position: relative; outline: none");
          var l = D("div", [ o.lineSpace ], "CodeMirror-lines");
          o.mover = A("div", [ l ], null, "position: relative"),
          o.sizer = A("div", [ o.mover ], "CodeMirror-sizer"),
          o.sizerWidth = null,
          o.heightForcer =
              A("div", null, null,
                "position: absolute; height: " + U + "px; width: 1px;"),
          o.gutters = A("div", null, "CodeMirror-gutters"), o.lineGutter = null,
          o.scroller = A("div", [ o.sizer, o.heightForcer, o.gutters ],
                         "CodeMirror-scroll"),
          o.scroller.setAttribute("tabIndex", "-1"),
          o.wrapper =
              A("div", [ o.scrollbarFiller, o.gutterFiller, o.scroller ],
                "CodeMirror"),
          s && a < 8 &&
              (o.gutters.style.zIndex = -1, o.scroller.style.paddingRight = 0),
          u || r && y || (o.scroller.draggable = !0),
          e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
          o.viewFrom = o.viewTo = t.first,
          o.reportedViewFrom = o.reportedViewTo = t.first, o.view = [],
          o.renderedView = null, o.externalMeasured = null, o.viewOffset = 0,
          o.lastWrapHeight = o.lastWrapWidth = 0, o.updateLineNumbers = null,
          o.nativeBarWidth = o.barHeight = o.barWidth = 0,
          o.scrollbarsClipped = !1,
          o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null,
          o.alignWidgets = !1,
          o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null,
          o.maxLine = null, o.maxLineLength = 0, o.maxLineChanged = !1,
          o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null,
          o.shift = !1, o.selForContextMenu = null, o.activeTouch = null,
          o.gutterSpecs = fi(i.gutters, i.lineNumbers), di(o), n.init(o)
        }
        ni.prototype.signal = function(
            e, t) { be(e, t) && this.events.push(arguments) },
        ni.prototype.finish = function() {
          for (var e = 0; e < this.events.length; e++)
            me.apply(null, this.events[e])
        };
        var gi = 0, mi = null;
        function vi(e) {
          var t = e.wheelDeltaX, r = e.wheelDeltaY;
          return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS &&
                     (t = e.detail),
                 null == r && e.detail && e.axis == e.VERTICAL_AXIS
                     ? r = e.detail
                     : null == r && (r = e.wheelDelta),
          {
            x: t, y: r
          }
        }
        function yi(e) {
          var t = vi(e);
          return t.x *= mi, t.y *= mi, t
        }
        function bi(e, t) {
          var n = vi(t), i = n.x, o = n.y, l = e.display, s = l.scroller,
              a = s.scrollWidth > s.clientWidth,
              c = s.scrollHeight > s.clientHeight;
          if (i && a || o && c) {
            if (o && b && u)
              e: for (var f = t.target, h = l.view; f != s;
                      f = f.parentNode) for (var p = 0; p < h.length;
                                             p++) if (h[p].node == f) {
                e.display.currentWheelTarget = f;
                break e
              }
            if (i && !r && !d && null != mi)
              return o && c && zn(e, Math.max(0, s.scrollTop + o * mi)),
                     Pn(e, Math.max(0, s.scrollLeft + i * mi)),
                     (!o || o && c) && xe(t), void (l.wheelStartX = null);
            if (o && null != mi) {
              var g = o * mi, m = e.doc.scrollTop,
                  v = m + l.wrapper.clientHeight;
              g < 0 ? m = Math.max(0, m + g - 50)
                    : v = Math.min(e.doc.height, v + g + 50),
                      li(e, {top : m, bottom : v})
            }
            gi < 20 &&
                (null == l.wheelStartX
                     ? (l.wheelStartX = s.scrollLeft,
                        l.wheelStartY = s.scrollTop, l.wheelDX = i,
                        l.wheelDY = o,
                        setTimeout(
                            function() {
                              if (null != l.wheelStartX) {
                                var e = s.scrollLeft - l.wheelStartX,
                                    t = s.scrollTop - l.wheelStartY,
                                    r = t && l.wheelDY && t / l.wheelDY ||
                                        e && l.wheelDX && e / l.wheelDX;
                                l.wheelStartX = l.wheelStartY = null,
                                r && (mi = (mi * gi + r) / (gi + 1), ++gi)
                              }
                            },
                            200))
                     : (l.wheelDX += i, l.wheelDY += o))
          }
        }
        s ? mi = -.53 : r ? mi = 15 : f ? mi = -.7 : h && (mi = -1 / 3);
        var wi = function(e, t) { this.ranges = e, this.primIndex = t };
        wi.prototype.primary =
            function() { return this.ranges[this.primIndex] },
        wi.prototype.equals = function(e) {
          if (e == this)
            return !0;
          if (e.primIndex != this.primIndex ||
              e.ranges.length != this.ranges.length)
            return !1;
          for (var t = 0; t < this.ranges.length; t++) {
            var r = this.ranges[t], n = e.ranges[t];
            if (!nt(r.anchor, n.anchor) || !nt(r.head, n.head))
              return !1
          }
          return !0
        }, wi.prototype.deepCopy = function() {
          for (var e = [], t = 0; t < this.ranges.length; t++)
            e[t] = new xi(it(this.ranges[t].anchor), it(this.ranges[t].head));
          return new wi(e, this.primIndex)
        }, wi.prototype.somethingSelected = function() {
          for (var e = 0; e < this.ranges.length; e++)
            if (!this.ranges[e].empty())
              return !0;
          return !1
        }, wi.prototype.contains = function(e, t) {
          t || (t = e);
          for (var r = 0; r < this.ranges.length; r++) {
            var n = this.ranges[r];
            if (rt(t, n.from()) >= 0 && rt(e, n.to()) <= 0)
              return r
          }
          return -1
        };
        var xi = function(e, t) { this.anchor = e, this.head = t };
        function Ci(e, t, r) {
          var n = e && e.options.selectionsMayTouch, i = t[r];
          t.sort(function(e, t) { return rt(e.from(), t.from()) }), r = G(t, i);
          for (var o = 1; o < t.length; o++) {
            var l = t[o], s = t[o - 1], a = rt(s.to(), l.from());
            if (n && !l.empty() ? a > 0 : a >= 0) {
              var u = lt(s.from(), l.from()), c = ot(s.to(), l.to()),
                  f = s.empty() ? l.from() == l.head : s.from() == s.head;
              o <= r && --r, t.splice(--o, 2, new xi(f ? c : u, f ? u : c))
            }
          }
          return new wi(t, r)
        }
        function Si(e, t) { return new wi([ new xi(e, t || e) ], 0) }
        function ki(e) {
          return e.text ? tt(e.from.line + e.text.length - 1,
                             $(e.text).length +
                                 (1 == e.text.length ? e.from.ch : 0))
                        : e.to
        }
        function Mi(e, t) {
          if (rt(e, t.from) < 0)
            return e;
          if (rt(e, t.to) <= 0)
            return ki(t);
          var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
              n = e.ch;
          return e.line == t.to.line && (n += ki(t).ch - t.to.ch), tt(r, n)
        }
        function Li(e, t) {
          for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
            var i = e.sel.ranges[n];
            r.push(new xi(Mi(i.anchor, t), Mi(i.head, t)))
          }
          return Ci(e.cm, r, e.sel.primIndex)
        }
        function Ti(e, t, r) {
          return e.line == t.line ? tt(r.line, e.ch - t.ch + r.ch)
                                  : tt(r.line + (e.line - t.line), e.ch)
        }
        function Ni(e) { e.doc.mode = Be(e.options, e.doc.modeOption), Oi(e) }
        function Oi(e) {
          e.doc.iter(function(e) {
            e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
          }),
              e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first,
              ti(e, 100), e.state.modeGen++, e.curOp && cn(e)
        }
        function Ai(e, t) {
          return 0 == t.from.ch && 0 == t.to.ch && "" == $(t.text) &&
                 (!e.cm || e.cm.options.wholeLineUpdateBefore)
        }
        function Di(e, t, r, n) {
          function i(e) { return r ? r[e] : null }
          function o(e, r, i) {
            !function(e, t, r, n) {
              e.text = t, e.stateAfter && (e.stateAfter = null),
              e.styles && (e.styles = null),
              null != e.order && (e.order = null), Ot(e), At(e, r);
              var i = n ? n(e) : 1;
              i != e.height && $e(e, i)
            }(e, r, i, n),
                ar(e, "change", e, t)
          }
          function l(e, t) {
            for (var r = [], o = e; o < t; ++o)
              r.push(new _t(u[o], i(o), n));
            return r
          }
          var s = t.from, a = t.to, u = t.text, c = _e(e, s.line),
              f = _e(e, a.line), d = $(u), h = i(u.length - 1),
              p = a.line - s.line;
          if (t.full)
            e.insert(0, l(0, u.length)), e.remove(u.length, e.size - u.length);
          else if (Ai(e, t)) {
            var g = l(0, u.length - 1);
            o(f, f.text, h), p && e.remove(s.line, p),
                g.length && e.insert(s.line, g)
          } else if (c == f)
            if (1 == u.length)
              o(c, c.text.slice(0, s.ch) + d + c.text.slice(a.ch), h);
            else {
              var m = l(1, u.length - 1);
              m.push(new _t(d + c.text.slice(a.ch), h, n)),
                  o(c, c.text.slice(0, s.ch) + u[0], i(0)),
                  e.insert(s.line + 1, m)
            }
          else if (1 == u.length)
            o(c, c.text.slice(0, s.ch) + u[0] + f.text.slice(a.ch), i(0)),
                e.remove(s.line + 1, p);
          else {
            o(c, c.text.slice(0, s.ch) + u[0], i(0)),
                o(f, d + f.text.slice(a.ch), h);
            var v = l(1, u.length - 1);
            p > 1 && e.remove(s.line + 1, p - 1), e.insert(s.line + 1, v)
          }
          ar(e, "change", e, t)
        }
        function Wi(e, t, r) {
          !function e(n, i, o) {
            if (n.linked)
              for (var l = 0; l < n.linked.length; ++l) {
                var s = n.linked[l];
                if (s.doc != i) {
                  var a = o && s.sharedHist;
                  r && !a || (t(s.doc, a), e(s.doc, n, a))
                }
              }
          }(e, null, !0)
        }
        function Hi(e, t) {
          if (t.cm)
            throw new Error("This document is already in use.");
          e.doc = t, t.cm = e, sn(e), Ni(e), zi(e),
          e.options.lineWrapping || Xt(e), e.options.mode = t.modeOption, cn(e)
        }
        function zi(e) {
          ("rtl" == e.doc.direction ? z : T)(e.display.lineDiv,
                                             "CodeMirror-rtl")
        }
        function Fi(e) {
          this.done = [], this.undone = [], this.undoDepth = 1 / 0,
          this.lastModTime = this.lastSelTime = 0,
          this.lastOp = this.lastSelOp = null,
          this.lastOrigin = this.lastSelOrigin = null,
          this.generation = this.maxGeneration = e || 1
        }
        function Pi(e, t) {
          var r = {from : it(t.from), to : ki(t), text : Ye(e, t.from, t.to)};
          return Gi(e, r, t.from.line, t.to.line + 1),
                 Wi(e,
                    function(e) { return Gi(e, r, t.from.line, t.to.line + 1) },
                    !0),
                 r
        }
        function Ei(e) {
          for (; e.length;) {
            if (!$(e).ranges)
              break;
            e.pop()
          }
        }
        function Ii(e, t, r, n) {
          var i = e.history;
          i.undone.length = 0;
          var o, l, s = +new Date;
          if ((i.lastOp == n ||
               i.lastOrigin == t.origin && t.origin &&
                   ("+" == t.origin.charAt(0) &&
                        i.lastModTime >
                            s - (e.cm ? e.cm.options.historyEventDelay : 500) ||
                    "*" == t.origin.charAt(0))) &&
              (o = function(e, t) {
                return t ? (Ei(e.done), $(e.done))
                         : e.done.length && !$(e.done).ranges
                               ? $(e.done)
                               : e.done.length > 1 &&
                                         !e.done[e.done.length - 2].ranges
                                     ? (e.done.pop(), $(e.done))
                                     : void 0
              }(i, i.lastOp == n)))
            l = $(o.changes), 0 == rt(t.from, t.to) && 0 == rt(t.from, l.to)
                                  ? l.to = ki(t)
                                  : o.changes.push(Pi(e, t));
          else {
            var a = $(i.done);
            for (a && a.ranges || Bi(e.sel, i.done),
                 o = {changes : [ Pi(e, t) ], generation : i.generation},
                 i.done.push(o);
                 i.done.length > i.undoDepth;)
              i.done.shift(), i.done[0].ranges || i.done.shift()
          }
          i.done.push(r), i.generation = ++i.maxGeneration,
                          i.lastModTime = i.lastSelTime = s,
                          i.lastOp = i.lastSelOp = n,
                          i.lastOrigin = i.lastSelOrigin = t.origin,
                          l || me(e, "historyAdded")
        }
        function Ri(e, t, r, n) {
          var i = e.history, o = n && n.origin;
          r == i.lastSelOp ||
                  o && i.lastSelOrigin == o &&
                      (i.lastModTime == i.lastSelTime && i.lastOrigin == o ||
                       function(e, t, r, n) {
                         var i = t.charAt(0);
                         return "*" == i ||
                                "+" == i &&
                                    r.ranges.length == n.ranges.length &&
                                    r.somethingSelected() ==
                                        n.somethingSelected() &&
                                    new Date - e.history.lastSelTime <=
                                        (e.cm ? e.cm.options.historyEventDelay
                                              : 500)
                       }(e, o, $(i.done), t))
              ? i.done[i.done.length - 1] = t
              : Bi(t, i.done),
                                       i.lastSelTime = +new Date,
                                       i.lastSelOrigin = o, i.lastSelOp = r,
                                       n && !1 !== n.clearRedo && Ei(i.undone)
        }
        function Bi(e, t) {
          var r = $(t);
          r && r.ranges && r.equals(e) || t.push(e)
        }
        function Gi(e, t, r, n) {
          var i = t["spans_" + e.id], o = 0;
          e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n),
                 function(r) {
                   r.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] =
                                         r.markedSpans),
                       ++o
                 })
        }
        function Ui(e) {
          if (!e)
            return null;
          for (var t, r = 0; r < e.length; ++r)
            e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r))
                                          : t && t.push(e[r]);
          return t ? t.length ? t : null : e
        }
        function Vi(e, t) {
          var r = function(e, t) {
            var r = t["spans_" + e.id];
            if (!r)
              return null;
            for (var n = [], i = 0; i < t.text.length; ++i)
              n.push(Ui(r[i]));
            return n
          }(e, t), n = Tt(e, t);
          if (!r)
            return n;
          if (!n)
            return r;
          for (var i = 0; i < r.length; ++i) {
            var o = r[i], l = n[i];
            if (o && l)
              e: for (var s = 0; s < l.length; ++s) {
                for (var a = l[s], u = 0; u < o.length; ++u)
                  if (o[u].marker == a.marker)
                    continue e;
                o.push(a)
              }
            else
              l && (r[i] = l)
          }
          return r
        }
        function ji(e, t, r) {
          for (var n = [], i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.ranges)
              n.push(r ? wi.prototype.deepCopy.call(o) : o);
            else {
              var l = o.changes, s = [];
              n.push({changes : s});
              for (var a = 0; a < l.length; ++a) {
                var u = l[a], c = void 0;
                if (s.push({from : u.from, to : u.to, text : u.text}), t)
                  for (var f in u)
                    (c = f.match(/^spans_(\d+)$/)) && G(t, Number(c[1])) > -1 &&
                        ($(s)[f] = u[f], delete u[f])
              }
            }
          }
          return n
        }
        function Ki(e, t, r, n) {
          if (n) {
            var i = e.anchor;
            if (r) {
              var o = rt(t, i) < 0;
              o != rt(r, i) < 0 ? (i = t, t = r) : o != rt(t, r) < 0 && (t = r)
            }
            return new xi(i, t)
          }
          return new xi(r || t, t)
        }
        function Xi(e, t, r, n, i) {
          null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
              Zi(e, new wi([ Ki(e.sel.primary(), t, r, i) ], 0), n)
        }
        function _i(e, t, r) {
          for (var n = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0;
               o < e.sel.ranges.length; o++)
            n[o] = Ki(e.sel.ranges[o], t[o], null, i);
          Zi(e, Ci(e.cm, n, e.sel.primIndex), r)
        }
        function Yi(e, t, r, n) {
          var i = e.sel.ranges.slice(0);
          i[t] = r, Zi(e, Ci(e.cm, i, e.sel.primIndex), n)
        }
        function qi(e, t, r, n) { Zi(e, Si(t, r), n) }
        function $i(e, t, r) {
          var n = e.history.done, i = $(n);
          i && i.ranges ? (n[n.length - 1] = t, Ji(e, t, r)) : Zi(e, t, r)
        }
        function Zi(e, t, r) {
          Ji(e, t, r), Ri(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r)
        }
        function Ji(e, t, r) {
          (be(e, "beforeSelectionChange") ||
           e.cm && be(e.cm, "beforeSelectionChange")) &&
              (t = function(e, t, r) {
                var n = {
                  ranges : t.ranges,
                  update : function(t) {
                    this.ranges = [];
                    for (var r = 0; r < t.length; r++)
                      this.ranges[r] =
                          new xi(at(e, t[r].anchor), at(e, t[r].head))
                  },
                  origin : r && r.origin
                };
                return me(e, "beforeSelectionChange", e, n),
                       e.cm && me(e.cm, "beforeSelectionChange", e.cm, n),
                       n.ranges != t.ranges
                           ? Ci(e.cm, n.ranges, n.ranges.length - 1)
                           : t
              }(e, t, r));
          var n = r && r.bias ||
                  (rt(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
          Qi(e, to(e, t, n, !0)), r && !1 === r.scroll || !e.cm || An(e.cm)
        }
        function Qi(e, t) {
          t.equals(e.sel) ||
              (e.sel = t,
               e.cm && (e.cm.curOp.updateInput = 1,
                        e.cm.curOp.selectionChanged = !0, ye(e.cm)),
               ar(e, "cursorActivity", e))
        }
        function eo(e) { Qi(e, to(e, e.sel, null, !1)) }
        function to(e, t, r, n) {
          for (var i, o = 0; o < t.ranges.length; o++) {
            var l = t.ranges[o],
                s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                a = no(e, l.anchor, s && s.anchor, r, n),
                u = no(e, l.head, s && s.head, r, n);
            (i || a != l.anchor || u != l.head) &&
                (i || (i = t.ranges.slice(0, o)), i[o] = new xi(a, u))
          }
          return i ? Ci(e.cm, i, t.primIndex) : t
        }
        function ro(e, t, r, n, i) {
          var o = _e(e, t.line);
          if (o.markedSpans)
            for (var l = 0; l < o.markedSpans.length; ++l) {
              var s = o.markedSpans[l], a = s.marker,
                  u = "selectLeft" in a ? !a.selectLeft : a.inclusiveLeft,
                  c = "selectRight" in a ? !a.selectRight : a.inclusiveRight;
              if ((null == s.from || (u ? s.from <= t.ch : s.from < t.ch)) &&
                  (null == s.to || (c ? s.to >= t.ch : s.to > t.ch))) {
                if (i && (me(a, "beforeCursorEnter"), a.explicitlyCleared)) {
                  if (o.markedSpans) {
                    --l;
                    continue
                  }
                  break
                }
                if (!a.atomic)
                  continue;
                if (r) {
                  var f = a.find(n < 0 ? 1 : -1), d = void 0;
                  if ((n < 0 ? c : u) &&
                          (f = io(e, f, -n, f && f.line == t.line ? o : null)),
                      f && f.line == t.line && (d = rt(f, r)) &&
                          (n < 0 ? d < 0 : d > 0))
                    return ro(e, f, t, n, i)
                }
                var h = a.find(n < 0 ? -1 : 1);
                return (n < 0 ? u : c) &&
                           (h = io(e, h, n, h.line == t.line ? o : null)),
                       h ? ro(e, h, t, n, i) : null
              }
            }
          return t
        }
        function no(e, t, r, n, i) {
          var o = n || 1, l = ro(e, t, r, o, i) || !i && ro(e, t, r, o, !0) ||
                              ro(e, t, r, -o, i) || !i && ro(e, t, r, -o, !0);
          return l || (e.cantEdit = !0, tt(e.first, 0))
        }
        function io(e, t, r, n) {
          return r < 0 && 0 == t.ch
                     ? t.line > e.first ? at(e, tt(t.line - 1)) : null
                     : r > 0 && t.ch == (n || _e(e, t.line)).text.length
                           ? t.line < e.first + e.size - 1 ? tt(t.line + 1, 0)
                                                           : null
                           : new tt(t.line, t.ch + r)
        }
        function oo(e) {
          e.setSelection(tt(e.firstLine(), 0), tt(e.lastLine()), j)
        }
        function lo(e, t, r) {
          var n = {
            canceled : !1,
            from : t.from,
            to : t.to,
            text : t.text,
            origin : t.origin,
            cancel : function() { return n.canceled = !0 }
          };
          return r && (n.update =
                           function(t, r, i, o) {
                             t && (n.from = at(e, t)), r && (n.to = at(e, r)),
                                 i && (n.text = i),
                                 void 0 !== o && (n.origin = o)
                           }),
                 me(e, "beforeChange", e, n),
                 e.cm && me(e.cm, "beforeChange", e.cm, n),
                 n.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : {
                   from : n.from,
                   to : n.to,
                   text : n.text,
                   origin : n.origin
                 }
        }
        function so(e, t, r) {
          if (e.cm) {
            if (!e.cm.curOp)
              return Jn(e.cm, so)(e, t, r);
            if (e.cm.state.suppressEdits)
              return
          }
          if (!(be(e, "beforeChange") || e.cm && be(e.cm, "beforeChange")) ||
              (t = lo(e, t, !0))) {
            var n = Ct && !r && function(e, t, r) {
              var n = null;
              if (e.iter(t.line, r.line + 1, function(e) {
                    if (e.markedSpans)
                      for (var t = 0; t < e.markedSpans.length; ++t) {
                        var r = e.markedSpans[t].marker;
                        !r.readOnly || n && -1 != G(n, r) ||
                            (n || (n = [])).push(r)
                      }
                  }), !n)
                return null;
              for (var i = [ {from : t, to : r} ], o = 0; o < n.length; ++o)
                for (var l = n[o], s = l.find(0), a = 0; a < i.length; ++a) {
                  var u = i[a];
                  if (!(rt(u.to, s.from) < 0 || rt(u.from, s.to) > 0)) {
                    var c = [ a, 1 ], f = rt(u.from, s.from),
                        d = rt(u.to, s.to);
                    (f < 0 || !l.inclusiveLeft && !f) &&
                        c.push({from : u.from, to : s.from}),
                        (d > 0 || !l.inclusiveRight && !d) &&
                            c.push({from : s.to, to : u.to}),
                        i.splice.apply(i, c), a += c.length - 3
                  }
                }
              return i
            }(e, t.from, t.to);
            if (n)
              for (var i = n.length - 1; i >= 0; --i)
                ao(e, {
                  from : n[i].from,
                  to : n[i].to,
                  text : i ? [ "" ] : t.text,
                  origin : t.origin
                });
            else
              ao(e, t)
          }
        }
        function ao(e, t) {
          if (1 != t.text.length || "" != t.text[0] || 0 != rt(t.from, t.to)) {
            var r = Li(e, t);
            Ii(e, t, r, e.cm ? e.cm.curOp.id : NaN), fo(e, t, r, Tt(e, t));
            var n = [];
            Wi(e, function(e, r) {
              r || -1 != G(n, e.history) ||
                  (mo(e.history, t), n.push(e.history)),
                  fo(e, t, null, Tt(e, t))
            })
          }
        }
        function uo(e, t, r) {
          var n = e.cm && e.cm.state.suppressEdits;
          if (!n || r) {
            for (var i, o = e.history, l = e.sel,
                        s = "undo" == t ? o.done : o.undone,
                        a = "undo" == t ? o.undone : o.done, u = 0;
                 u < s.length &&
                 (i = s[u], r ? !i.ranges || i.equals(e.sel) : i.ranges);
                 u++)
              ;
            if (u != s.length) {
              for (o.lastOrigin = o.lastSelOrigin = null;;) {
                if (!(i = s.pop()).ranges) {
                  if (n)
                    return void s.push(i);
                  break
                }
                if (Bi(i, a), r && !i.equals(e.sel))
                  return void Zi(e, i, {clearRedo : !1});
                l = i
              }
              var c = [];
              Bi(l, a), a.push({changes : c, generation : o.generation}),
                  o.generation = i.generation || ++o.maxGeneration;
              for (var f = be(e, "beforeChange") ||
                           e.cm && be(e.cm, "beforeChange"),
                       d =
                           function(r) {
                             var n = i.changes[r];
                             if (n.origin = t, f && !lo(e, n, !1))
                               return s.length = 0, {};
                             c.push(Pi(e, n));
                             var o = r ? Li(e, n) : $(s);
                             fo(e, n, o, Vi(e, n)),
                                 !r && e.cm &&
                                     e.cm.scrollIntoView(
                                         {from : n.from, to : ki(n)});
                             var l = [];
                             Wi(e, function(e, t) {
                               t || -1 != G(l, e.history) ||
                                   (mo(e.history, n), l.push(e.history)),
                                   fo(e, n, null, Vi(e, n))
                             })
                           },
                       h = i.changes.length - 1;
                   h >= 0; --h) {
                var p = d(h);
                if (p)
                  return p.v
              }
            }
          }
        }
        function co(e, t) {
          if (0 != t &&
              (e.first += t,
               e.sel = new wi(Z(e.sel.ranges, function(e) {
                                return new xi(
                                    tt(e.anchor.line + t, e.anchor.ch),
                                    tt(e.head.line + t, e.head.ch))
                              }), e.sel.primIndex), e.cm)) {
            cn(e.cm, e.first, e.first - t, t);
            for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++)
              fn(e.cm, n, "gutter")
          }
        }
        function fo(e, t, r, n) {
          if (e.cm && !e.cm.curOp)
            return Jn(e.cm, fo)(e, t, r, n);
          if (t.to.line < e.first)
            co(e, t.text.length - 1 - (t.to.line - t.from.line));
          else if (!(t.from.line > e.lastLine())) {
            if (t.from.line < e.first) {
              var i = t.text.length - 1 - (e.first - t.from.line);
              co(e, i), t = {
                from : tt(e.first, 0),
                to : tt(t.to.line + i, t.to.ch),
                text : [ $(t.text) ],
                origin : t.origin
              }
            }
            var o = e.lastLine();
            t.to.line > o && (t = {
              from : t.from,
              to : tt(o, _e(e, o).text.length),
              text : [ t.text[0] ],
              origin : t.origin
            }),
                t.removed = Ye(e, t.from, t.to), r || (r = Li(e, t)),
                e.cm ? function(e, t, r) {
                  var n = e.doc, i = e.display, o = t.from, l = t.to, s = !1,
                      a = o.line;
                  e.options.lineWrapping || (a = Ze(Rt(_e(n, o.line))),
                                             n.iter(a, l.line + 1, function(e) {
                                               if (e == i.maxLine)
                                                 return s = !0, !0
                                             }));
                  n.sel.contains(t.from, t.to) > -1 && ye(e);
                  Di(n, t, r, ln(e)),
                      e.options.lineWrapping ||
                          (n.iter(a, o.line + t.text.length, function(e) {
                            var t = Kt(e);
                            t > i.maxLineLength &&
                                (i.maxLine = e, i.maxLineLength = t,
                                 i.maxLineChanged = !0, s = !1)
                          }), s && (e.curOp.updateMaxLine = !0));
                  (function(e, t) {
                    if (e.modeFrontier = Math.min(e.modeFrontier, t),
                        !(e.highlightFrontier < t - 10)) {
                      for (var r = e.first, n = t - 1; n > r; n--) {
                        var i = _e(e, n).stateAfter;
                        if (i && (!(i instanceof ct) || n + i.lookAhead < t)) {
                          r = n + 1;
                          break
                        }
                      }
                      e.highlightFrontier = Math.min(e.highlightFrontier, r)
                    }
                  })(n, o.line),
                      ti(e, 400);
                  var u = t.text.length - (l.line - o.line) - 1;
                  t.full
                      ? cn(e)
                      : o.line != l.line || 1 != t.text.length || Ai(e.doc, t)
                            ? cn(e, o.line, l.line + 1, u)
                            : fn(e, o.line, "text");
                  var c = be(e, "changes"), f = be(e, "change");
                  if (f || c) {
                    var d = {
                      from : o,
                      to : l,
                      text : t.text,
                      removed : t.removed,
                      origin : t.origin
                    };
                    f && ar(e, "change", e, d),
                        c && (e.curOp.changeObjs || (e.curOp.changeObjs = []))
                                 .push(d)
                  }
                  e.display.selForContextMenu = null
                }(e.cm, t, n) : Di(e, t, n), Ji(e, r, j), e.cantEdit && no(e, tt(e.firstLine(), 0)) && (e.cantEdit = !1)
          }
        }
        function ho(e, t, r, n, i) {
          var o;
          n || (n = r), rt(n, r) < 0 && (r = (o = [ n, r ])[0], n = o[1]),
              "string" == typeof t && (t = e.splitLines(t)),
              so(e, {from : r, to : n, text : t, origin : i})
        }
        function po(e, t, r, n) {
          r < e.line ? e.line += n : t < e.line && (e.line = t, e.ch = 0)
        }
        function go(e, t, r, n) {
          for (var i = 0; i < e.length; ++i) {
            var o = e[i], l = !0;
            if (o.ranges) {
              o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
              for (var s = 0; s < o.ranges.length; s++)
                po(o.ranges[s].anchor, t, r, n), po(o.ranges[s].head, t, r, n)
            } else {
              for (var a = 0; a < o.changes.length; ++a) {
                var u = o.changes[a];
                if (r < u.from.line)
                  u.from = tt(u.from.line + n, u.from.ch),
                  u.to = tt(u.to.line + n, u.to.ch);
                else if (t <= u.to.line) {
                  l = !1;
                  break
                }
              }
              l || (e.splice(0, i + 1), i = 0)
            }
          }
        }
        function mo(e, t) {
          var r = t.from.line, n = t.to.line, i = t.text.length - (n - r) - 1;
          go(e.done, r, n, i), go(e.undone, r, n, i)
        }
        function vo(e, t, r, n) {
          var i = t, o = t;
          return "number" == typeof t
                     ? o = _e(e, st(e, t))
                     : i = Ze(t),
                       null == i ? null : (n(o, i) && e.cm && fn(e.cm, i, r), o)
        }
        function yo(e) {
          this.lines = e, this.parent = null;
          for (var t = 0, r = 0; r < e.length; ++r)
            e[r].parent = this, t += e[r].height;
          this.height = t
        }
        function bo(e) {
          this.children = e;
          for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
            var i = e[n];
            t += i.chunkSize(), r += i.height, i.parent = this
          }
          this.size = t, this.height = r, this.parent = null
        }
        xi.prototype.from = function() { return lt(this.anchor, this.head) },
        xi.prototype.to = function() { return ot(this.anchor, this.head) },
        xi.prototype.empty =
            function() {
          return this.head.line == this.anchor.line &&
                 this.head.ch == this.anchor.ch
        },
        yo.prototype = {
          chunkSize : function() { return this.lines.length },
          removeInner : function(e, t) {
            for (var r = e, n = e + t; r < n; ++r) {
              var i = this.lines[r];
              this.height -= i.height, Yt(i), ar(i, "delete")
            }
            this.lines.splice(e, t)
          },
          collapse : function(e) { e.push.apply(e, this.lines) },
          insertInner : function(e, t, r) {
            this.height += r,
                this.lines = this.lines.slice(0, e).concat(t).concat(
                    this.lines.slice(e));
            for (var n = 0; n < t.length; ++n)
              t[n].parent = this
          },
          iterN : function(e, t, r) {
            for (var n = e + t; e < n; ++e)
              if (r(this.lines[e]))
                return !0
          }
        },
        bo.prototype = {
          chunkSize : function() { return this.size },
          removeInner : function(e, t) {
            this.size -= t;
            for (var r = 0; r < this.children.length; ++r) {
              var n = this.children[r], i = n.chunkSize();
              if (e < i) {
                var o = Math.min(t, i - e), l = n.height;
                if (n.removeInner(e, o), this.height -= l - n.height,
                    i == o && (this.children.splice(r--, 1), n.parent = null),
                    0 == (t -= o))
                  break;
                e = 0
              } else
                e -= i
            }
            if (this.size - t < 25 && (this.children.length > 1 ||
                                       !(this.children[0] instanceof yo))) {
              var s = [];
              this.collapse(s), this.children = [ new yo(s) ],
                                this.children[0].parent = this
            }
          },
          collapse : function(e) {
            for (var t = 0; t < this.children.length; ++t)
              this.children[t].collapse(e)
          },
          insertInner : function(e, t, r) {
            this.size += t.length, this.height += r;
            for (var n = 0; n < this.children.length; ++n) {
              var i = this.children[n], o = i.chunkSize();
              if (e <= o) {
                if (i.insertInner(e, t, r), i.lines && i.lines.length > 50) {
                  for (var l = i.lines.length % 25 + 25, s = l;
                       s < i.lines.length;) {
                    var a = new yo(i.lines.slice(s, s += 25));
                    i.height -= a.height, this.children.splice(++n, 0, a),
                        a.parent = this
                  }
                  i.lines = i.lines.slice(0, l), this.maybeSpill()
                }
                break
              }
              e -= o
            }
          },
          maybeSpill : function() {
            if (!(this.children.length <= 10)) {
              var e = this;
              do {
                var t = new bo(e.children.splice(e.children.length - 5, 5));
                if (e.parent) {
                  e.size -= t.size, e.height -= t.height;
                  var r = G(e.parent.children, e);
                  e.parent.children.splice(r + 1, 0, t)
                } else {
                  var n = new bo(e.children);
                  n.parent = e, e.children = [ n, t ], e = n
                }
                t.parent = e.parent
              } while (e.children.length > 10);
              e.parent.maybeSpill()
            }
          },
          iterN : function(e, t, r) {
            for (var n = 0; n < this.children.length; ++n) {
              var i = this.children[n], o = i.chunkSize();
              if (e < o) {
                var l = Math.min(t, o - e);
                if (i.iterN(e, l, r))
                  return !0;
                if (0 == (t -= l))
                  break;
                e = 0
              } else
                e -= o
            }
          }
        };
        var wo = function(e, t, r) {
          if (r)
            for (var n in r)
              r.hasOwnProperty(n) && (this[n] = r[n]);
          this.doc = e, this.node = t
        };
        function xo(e, t, r) {
          jt(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && On(e, r)
        }
        wo.prototype.clear = function() {
          var e = this.doc.cm, t = this.line.widgets, r = this.line, n = Ze(r);
          if (null != n && t) {
            for (var i = 0; i < t.length; ++i)
              t[i] == this && t.splice(i--, 1);
            t.length || (r.widgets = null);
            var o = xr(this);
            $e(r, Math.max(0, r.height - o)),
                e && (Zn(e, function() { xo(e, r, -o), fn(e, n, "widget") }),
                      ar(e, "lineWidgetCleared", e, this, n))
          }
        }, wo.prototype.changed = function() {
          var e = this, t = this.height, r = this.doc.cm, n = this.line;
          this.height = null;
          var i = xr(this) - t;
          i && (Ut(this.doc, n) || $e(n, n.height + i),
                r && Zn(r, function() {
                  r.curOp.forceUpdate = !0, xo(r, n, i),
                  ar(r, "lineWidgetChanged", r, e, Ze(n))
                }))
        }, we(wo);
        var Co = 0, So = function(e, t) {
          this.lines = [], this.type = t, this.doc = e, this.id = ++Co
        };
        function ko(e, t, r, n, i) {
          if (n && n.shared)
            return function(e, t, r, n, i) {
              (n = I(n)).shared = !1;
              var o = [ ko(e, t, r, n, i) ], l = o[0], s = n.widgetNode;
              return Wi(e, function(e) {
                       s && (n.widgetNode = s.cloneNode(!0)),
                           o.push(ko(e, at(e, t), at(e, r), n, i));
                       for (var a = 0; a < e.linked.length; ++a)
                         if (e.linked[a].isParent)
                           return;
                       l = $(o)
                     }), new Mo(o, l)
            }(e, t, r, n, i);
          if (e.cm && !e.cm.curOp)
            return Jn(e.cm, ko)(e, t, r, n, i);
          var o = new So(e, i), l = rt(t, r);
          if (n && I(n, o, !1), l > 0 || 0 == l && !1 !== o.clearWhenEmpty)
            return o;
          if (o.replacedWith &&
                  (o.collapsed = !0,
                   o.widgetNode =
                       D("span", [ o.replacedWith ], "CodeMirror-widget"),
                   n.handleMouseEvents ||
                       o.widgetNode.setAttribute("cm-ignore-events", "true"),
                   n.insertLeft && (o.widgetNode.insertLeft = !0)),
              o.collapsed) {
            if (It(e, t.line, t, r, o) ||
                t.line != r.line && It(e, r.line, t, r, o))
              throw new Error(
                  "Inserting collapsed marker partially overlapping an existing one");
            St = !0
          }
          o.addToHistory &&
              Ii(e, {from : t, to : r, origin : "markText"}, e.sel, NaN);
          var s, a = t.line, u = e.cm;
          if (e.iter(a, r.line + 1,
                     function(e) {
                       u && o.collapsed && !u.options.lineWrapping &&
                           Rt(e) == u.display.maxLine && (s = !0),
                           o.collapsed && a != t.line && $e(e, 0),
                           function(e, t) {
                             e.markedSpans = e.markedSpans
                                                 ? e.markedSpans.concat([ t ])
                                                 : [ t ],
                             t.marker.attachLine(e)
                           }(e, new kt(o, a == t.line ? t.ch : null,
                                       a == r.line ? r.ch : null)),
                           ++a
                     }),
              o.collapsed && e.iter(t.line, r.line + 1,
                                    function(t) { Ut(e, t) && $e(t, 0) }),
              o.clearOnEnter &&
                  he(o, "beforeCursorEnter", function() { return o.clear() }),
              o.readOnly && (Ct = !0, (e.history.done.length ||
                                       e.history.undone.length) &&
                                          e.clearHistory()),
              o.collapsed && (o.id = ++Co, o.atomic = !0), u) {
            if (s && (u.curOp.updateMaxLine = !0), o.collapsed)
              cn(u, t.line, r.line + 1);
            else if (o.className || o.startStyle || o.endStyle || o.css ||
                     o.attributes || o.title)
              for (var c = t.line; c <= r.line; c++)
                fn(u, c, "text");
            o.atomic && eo(u.doc), ar(u, "markerAdded", u, o)
          }
          return o
        }
        So.prototype.clear = function() {
          if (!this.explicitlyCleared) {
            var e = this.doc.cm, t = e && !e.curOp;
            if (t && Kn(e), be(this, "clear")) {
              var r = this.find();
              r && ar(this, "clear", r.from, r.to)
            }
            for (var n = null, i = null, o = 0; o < this.lines.length; ++o) {
              var l = this.lines[o], s = Mt(l.markedSpans, this);
              e && !this.collapsed ? fn(e, Ze(l), "text")
                                   : e && (null != s.to && (i = Ze(l)),
                                           null != s.from && (n = Ze(l))),
                  l.markedSpans = Lt(l.markedSpans, s),
                  null == s.from && this.collapsed && !Ut(this.doc, l) && e &&
                      $e(l, tn(e.display))
            }
            if (e && this.collapsed && !e.options.lineWrapping)
              for (var a = 0; a < this.lines.length; ++a) {
                var u = Rt(this.lines[a]), c = Kt(u);
                c > e.display.maxLineLength &&
                    (e.display.maxLine = u, e.display.maxLineLength = c,
                     e.display.maxLineChanged = !0)
              }
            null != n && e && this.collapsed && cn(e, n, i + 1),
                this.lines.length = 0, this.explicitlyCleared = !0,
                this.atomic && this.doc.cantEdit &&
                    (this.doc.cantEdit = !1, e && eo(e.doc)),
                e && ar(e, "markerCleared", e, this, n, i), t && Xn(e),
                this.parent && this.parent.clear()
          }
        }, So.prototype.find = function(e, t) {
          var r, n;
          null == e && "bookmark" == this.type && (e = 1);
          for (var i = 0; i < this.lines.length; ++i) {
            var o = this.lines[i], l = Mt(o.markedSpans, this);
            if (null != l.from && (r = tt(t ? o : Ze(o), l.from), -1 == e))
              return r;
            if (null != l.to && (n = tt(t ? o : Ze(o), l.to), 1 == e))
              return n
          }
          return r && { from: r, to: n }
        }, So.prototype.changed = function() {
          var e = this, t = this.find(-1, !0), r = this, n = this.doc.cm;
          t && n && Zn(n, function() {
            var i = t.line, o = Ze(t.line), l = Dr(n, o);
            if (l && (Ir(l),
                      n.curOp.selectionChanged = n.curOp.forceUpdate = !0),
                n.curOp.updateMaxLine = !0, !Ut(r.doc, i) && null != r.height) {
              var s = r.height;
              r.height = null;
              var a = xr(r) - s;
              a && $e(i, i.height + a)
            }
            ar(n, "markerChanged", n, e)
          })
        }, So.prototype.attachLine = function(e) {
          if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            t.maybeHiddenMarkers && -1 != G(t.maybeHiddenMarkers, this) ||
                (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = []))
                    .push(this)
          }
          this.lines.push(e)
        }, So.prototype.detachLine = function(e) {
          if (this.lines.splice(G(this.lines, e), 1),
              !this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
          }
        }, we(So);
        var Mo = function(e, t) {
          this.markers = e, this.primary = t;
          for (var r = 0; r < e.length; ++r)
            e[r].parent = this
        };
        function Lo(e) {
          return e.findMarks(tt(e.first, 0), e.clipPos(tt(e.lastLine())),
                             function(e) { return e.parent })
        }
        function To(e) {
          for (var t = function(t) {
                 var r = e[t], n = [ r.primary.doc ];
                 Wi(r.primary.doc, function(e) { return n.push(e) });
                 for (var i = 0; i < r.markers.length; i++) {
                   var o = r.markers[i];
                   -1 == G(n, o.doc) &&
                       (o.parent = null, r.markers.splice(i--, 1))
                 }
               }, r = 0; r < e.length; r++)
            t(r)
        }
        Mo.prototype.clear =
            function() {
          if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var e = 0; e < this.markers.length; ++e)
              this.markers[e].clear();
            ar(this, "clear")
          }
        },
        Mo.prototype.find = function(e, t) { return this.primary.find(e, t) },
        we(Mo);
        var No = 0, Oo = function e(t, r, n, i, o) {
          if (!(this instanceof e))
            return new e(t, r, n, i, o);
          null == n && (n = 0), bo.call(this, [ new yo([ new _t("", null) ]) ]),
              this.first = n, this.scrollTop = this.scrollLeft = 0,
              this.cantEdit = !1, this.cleanGeneration = 1,
              this.modeFrontier = this.highlightFrontier = n;
          var l = tt(n, 0);
          this.sel = Si(l), this.history = new Fi(null), this.id = ++No,
          this.modeOption = r, this.lineSep = i,
          this.direction = "rtl" == o ? "rtl" : "ltr", this.extend = !1,
          "string" == typeof t && (t = this.splitLines(t)),
          Di(this, {from : l, to : l, text : t}), Zi(this, Si(l), j)
        };
        Oo.prototype = Q(bo.prototype, {
          constructor : Oo,
          iter : function(e, t, r) {
            r ? this.iterN(e - this.first, t - e, r)
              : this.iterN(this.first, this.first + this.size, e)
          },
          insert : function(e, t) {
            for (var r = 0, n = 0; n < t.length; ++n)
              r += t[n].height;
            this.insertInner(e - this.first, t, r)
          },
          remove : function(e, t) { this.removeInner(e - this.first, t) },
          getValue : function(e) {
            var t = qe(this, this.first, this.first + this.size);
            return !1 === e ? t : t.join(e || this.lineSeparator())
          },
          setValue : ei(function(e) {
            var t = tt(this.first, 0), r = this.first + this.size - 1;
            so(this, {
              from : t,
              to : tt(r, _e(this, r).text.length),
              text : this.splitLines(e),
              origin : "setValue",
              full : !0
            },
               !0),
                this.cm && Dn(this.cm, 0, 0), Zi(this, Si(t), j)
          }),
          replaceRange : function(
              e, t, r,
              n) { ho(this, e, t = at(this, t), r = r ? at(this, r) : t, n) },
          getRange : function(e, t, r) {
            var n = Ye(this, at(this, e), at(this, t));
            return !1 === r ? n : n.join(r || this.lineSeparator())
          },
          getLine : function(e) {
            var t = this.getLineHandle(e);
            return t && t.text
          },
          getLineHandle : function(e) {
            if (Qe(this, e))
              return _e(this, e)
          },
          getLineNumber : function(e) { return Ze(e) },
          getLineHandleVisualStart : function(
              e) { return "number" == typeof e && (e = _e(this, e)), Rt(e) },
          lineCount : function() { return this.size },
          firstLine : function() { return this.first },
          lastLine : function() { return this.first + this.size - 1 },
          clipPos : function(e) { return at(this, e) },
          getCursor : function(e) {
            var t = this.sel.primary();
            return null == e || "head" == e
                       ? t.head
                       : "anchor" == e
                             ? t.anchor
                             : "end" == e || "to" == e || !1 === e ? t.to()
                                                                   : t.from()
          },
          listSelections : function() { return this.sel.ranges },
          somethingSelected :
              function() { return this.sel.somethingSelected() },
          setCursor : ei(function(e, t, r) {
            qi(this, at(this, "number" == typeof e ? tt(e, t || 0) : e), null,
               r)
          }),
          setSelection : ei(function(
              e, t, r) { qi(this, at(this, e), at(this, t || e), r) }),
          extendSelection : ei(function(
              e, t, r) { Xi(this, at(this, e), t && at(this, t), r) }),
          extendSelections : ei(function(e, t) { _i(this, ut(this, e), t) }),
          extendSelectionsBy : ei(function(
              e, t) { _i(this, ut(this, Z(this.sel.ranges, e)), t) }),
          setSelections : ei(function(e, t, r) {
            if (e.length) {
              for (var n = [], i = 0; i < e.length; i++)
                n[i] = new xi(at(this, e[i].anchor), at(this, e[i].head));
              null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
                  Zi(this, Ci(this.cm, n, t), r)
            }
          }),
          addSelection : ei(function(e, t, r) {
            var n = this.sel.ranges.slice(0);
            n.push(new xi(at(this, e), at(this, t || e))),
                Zi(this, Ci(this.cm, n, n.length - 1), r)
          }),
          getSelection : function(e) {
            for (var t, r = this.sel.ranges, n = 0; n < r.length; n++) {
              var i = Ye(this, r[n].from(), r[n].to());
              t = t ? t.concat(i) : i
            }
            return !1 === e ? t : t.join(e || this.lineSeparator())
          },
          getSelections : function(e) {
            for (var t = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
              var i = Ye(this, r[n].from(), r[n].to());
              !1 !== e && (i = i.join(e || this.lineSeparator())), t[n] = i
            }
            return t
          },
          replaceSelection : function(e, t, r) {
            for (var n = [], i = 0; i < this.sel.ranges.length; i++)
              n[i] = e;
            this.replaceSelections(n, t, r || "+input")
          },
          replaceSelections : ei(function(e, t, r) {
            for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
              var l = i.ranges[o];
              n[o] = {
                from : l.from(),
                to : l.to(),
                text : this.splitLines(e[o]),
                origin : r
              }
            }
            for (var s = t && "end" != t && function(e, t, r) {
                   for (var n = [], i = tt(e.first, 0), o = i, l = 0;
                        l < t.length; l++) {
                     var s = t[l], a = Ti(s.from, i, o), u = Ti(ki(s), i, o);
                     if (i = s.to, o = u, "around" == r) {
                       var c = e.sel.ranges[l], f = rt(c.head, c.anchor) < 0;
                       n[l] = new xi(f ? u : a, f ? a : u)
                     } else
                       n[l] = new xi(a, a)
                   }
                   return new wi(n, e.sel.primIndex)
                 }(this, n, t), a = n.length - 1; a >= 0; a--)
              so(this, n[a]);
            s ? $i(this, s) : this.cm && An(this.cm)
          }),
          undo : ei(function() { uo(this, "undo") }),
          redo : ei(function() { uo(this, "redo") }),
          undoSelection : ei(function() { uo(this, "undo", !0) }),
          redoSelection : ei(function() { uo(this, "redo", !0) }),
          setExtending : function(e) { this.extend = e },
          getExtending : function() { return this.extend },
          historySize : function() {
            for (var e = this.history, t = 0, r = 0, n = 0; n < e.done.length;
                 n++)
              e.done[n].ranges || ++t;
            for (var i = 0; i < e.undone.length; i++)
              e.undone[i].ranges || ++r;
            return { undo: t, redo: r }
          },
          clearHistory :
              function() { this.history = new Fi(this.history.maxGeneration) },
          markClean :
              function() { this.cleanGeneration = this.changeGeneration(!0) },
          changeGeneration : function(e) {
            return e && (this.history.lastOp = this.history.lastSelOp =
                             this.history.lastOrigin = null),
                   this.history.generation
          },
          isClean : function(e) {
            return this.history.generation == (e || this.cleanGeneration)
          },
          getHistory : function() {
            return {
              done: ji(this.history.done), undone: ji(this.history.undone)
            }
          },
          setHistory : function(e) {
            var t = this.history = new Fi(this.history.maxGeneration);
            t.done = ji(e.done.slice(0), null, !0),
            t.undone = ji(e.undone.slice(0), null, !0)
          },
          setGutterMarker : ei(function(e, t, r) {
            return vo(this, e, "gutter", function(e) {
              var n = e.gutterMarkers || (e.gutterMarkers = {});
              return n[t] = r, !r && ne(n) && (e.gutterMarkers = null), !0
            })
          }),
          clearGutter : ei(function(e) {
            var t = this;
            this.iter(function(r) {
              r.gutterMarkers && r.gutterMarkers[e] &&
                  vo(t, r, "gutter", function() {
                    return r.gutterMarkers[e] = null,
                           ne(r.gutterMarkers) && (r.gutterMarkers = null), !0
                  })
            })
          }),
          lineInfo : function(e) {
            var t;
            if ("number" == typeof e) {
              if (!Qe(this, e))
                return null;
              if (t = e, !(e = _e(this, e)))
                return null
            } else if (null == (t = Ze(e)))
              return null;
            return {
              line: t, handle: e, text: e.text, gutterMarkers: e.gutterMarkers,
                  textClass: e.textClass, bgClass: e.bgClass,
                  wrapClass: e.wrapClass, widgets: e.widgets
            }
          },
          addLineClass : ei(function(e, t, r) {
            return vo(this, e, "gutter" == t ? "gutter" : "class", function(e) {
              var n = "text" == t
                          ? "textClass"
                          : "background" == t
                                ? "bgClass"
                                : "gutter" == t ? "gutterClass" : "wrapClass";
              if (e[n]) {
                if (M(r).test(e[n]))
                  return !1;
                e[n] += " " + r
              } else
                e[n] = r;
              return !0
            })
          }),
          removeLineClass : ei(function(e, t, r) {
            return vo(this, e, "gutter" == t ? "gutter" : "class", function(e) {
              var n = "text" == t
                          ? "textClass"
                          : "background" == t
                                ? "bgClass"
                                : "gutter" == t ? "gutterClass" : "wrapClass",
                  i = e[n];
              if (!i)
                return !1;
              if (null == r)
                e[n] = null;
              else {
                var o = i.match(M(r));
                if (!o)
                  return !1;
                var l = o.index + o[0].length;
                e[n] = i.slice(0, o.index) +
                           (o.index && l != i.length ? " " : "") + i.slice(l) ||
                       null
              }
              return !0
            })
          }),
          addLineWidget : ei(function(e, t, r) {
            return function(e, t, r, n) {
              var i = new wo(e, r, n), o = e.cm;
              return o && i.noHScroll && (o.display.alignWidgets = !0),
                     vo(e, t, "widget",
                        function(t) {
                          var r = t.widgets || (t.widgets = []);
                          if (null == i.insertAt
                                  ? r.push(i)
                                  : r.splice(Math.min(r.length - 1,
                                                      Math.max(0, i.insertAt)),
                                             0, i),
                              i.line = t, o && !Ut(e, t)) {
                            var n = jt(t) < e.scrollTop;
                            $e(t, t.height + xr(i)), n && On(o, i.height),
                                o.curOp.forceUpdate = !0
                          }
                          return !0
                        }),
                     o && ar(o, "lineWidgetAdded", o, i,
                             "number" == typeof t ? t : Ze(t)),
                     i
            }(this, e, t, r)
          }),
          removeLineWidget : function(e) { e.clear() },
          markText : function(e, t, r) {
            return ko(this, at(this, e), at(this, t), r, r && r.type || "range")
          },
          setBookmark : function(e, t) {
            var r = {
              replacedWith : t && (null == t.nodeType ? t.widget : t),
              insertLeft : t && t.insertLeft,
              clearWhenEmpty : !1,
              shared : t && t.shared,
              handleMouseEvents : t && t.handleMouseEvents
            };
            return ko(this, e = at(this, e), e, r, "bookmark")
          },
          findMarksAt : function(e) {
            var t = [], r = _e(this, (e = at(this, e)).line).markedSpans;
            if (r)
              for (var n = 0; n < r.length; ++n) {
                var i = r[n];
                (null == i.from || i.from <= e.ch) &&
                    (null == i.to || i.to >= e.ch) &&
                    t.push(i.marker.parent || i.marker)
              }
            return t
          },
          findMarks : function(e, t, r) {
            e = at(this, e), t = at(this, t);
            var n = [], i = e.line;
            return this.iter(e.line, t.line + 1, function(o) {
              var l = o.markedSpans;
              if (l)
                for (var s = 0; s < l.length; s++) {
                  var a = l[s];
                  null != a.to && i == e.line && e.ch >= a.to ||
                      null == a.from && i != e.line ||
                      null != a.from && i == t.line && a.from >= t.ch ||
                      r && !r(a.marker) || n.push(a.marker.parent || a.marker)
                }
              ++i
            }), n
          },
          getAllMarks : function() {
            var e = [];
            return this.iter(function(t) {
              var r = t.markedSpans;
              if (r)
                for (var n = 0; n < r.length; ++n)
                  null != r[n].from && e.push(r[n].marker)
            }),
                   e
          },
          posFromIndex : function(e) {
            var t, r = this.first, n = this.lineSeparator().length;
            return this.iter(function(i) {
              var o = i.text.length + n;
              if (o > e)
                return t = e, !0;
              e -= o, ++r
            }),
                   at(this, tt(r, t))
          },
          indexFromPos : function(e) {
            var t = (e = at(this, e)).ch;
            if (e.line < this.first || e.ch < 0)
              return 0;
            var r = this.lineSeparator().length;
            return this.iter(this.first, e.line,
                             function(e) { t += e.text.length + r }),
                   t
          },
          copy : function(e) {
            var t = new Oo(qe(this, this.first, this.first + this.size),
                           this.modeOption, this.first, this.lineSep,
                           this.direction);
            return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft,
                   t.sel = this.sel, t.extend = !1,
                   e && (t.history.undoDepth = this.history.undoDepth,
                         t.setHistory(this.getHistory())),
                   t
          },
          linkedDoc : function(e) {
            e || (e = {});
            var t = this.first, r = this.first + this.size;
            null != e.from && e.from > t && (t = e.from),
                null != e.to && e.to < r && (r = e.to);
            var n = new Oo(qe(this, t, r), e.mode || this.modeOption, t,
                           this.lineSep, this.direction);
            return e.sharedHist && (n.history = this.history),
                   (this.linked || (this.linked = []))
                       .push({doc : n, sharedHist : e.sharedHist}),
                   n.linked =
                       [
                         {doc : this, isParent : !0, sharedHist : e.sharedHist}
                       ],
                   function(e, t) {
                     for (var r = 0; r < t.length; r++) {
                       var n = t[r], i = n.find(), o = e.clipPos(i.from),
                           l = e.clipPos(i.to);
                       if (rt(o, l)) {
                         var s = ko(e, o, l, n.primary, n.primary.type);
                         n.markers.push(s), s.parent = n
                       }
                     }
                   }(n, Lo(this)),
                   n
          },
          unlinkDoc : function(e) {
            if (e instanceof Ml && (e = e.doc), this.linked)
              for (var t = 0; t < this.linked.length; ++t) {
                if (this.linked[t].doc == e) {
                  this.linked.splice(t, 1), e.unlinkDoc(this), To(Lo(this));
                  break
                }
              }
            if (e.history == this.history) {
              var r = [ e.id ];
              Wi(e, function(e) { return r.push(e.id) }, !0),
                  e.history = new Fi(null),
                  e.history.done = ji(this.history.done, r),
                  e.history.undone = ji(this.history.undone, r)
            }
          },
          iterLinkedDocs : function(e) { Wi(this, e) },
          getMode : function() { return this.mode },
          getEditor : function() { return this.cm },
          splitLines : function(
              e) { return this.lineSep ? e.split(this.lineSep) : He(e) },
          lineSeparator : function() { return this.lineSep || "\n" },
          setDirection : ei(function(e) {
            var t;
            ("rtl" != e && (e = "ltr"), e != this.direction) &&
                (this.direction = e,
                 this.iter(function(e) { return e.order = null }),
                 this.cm && Zn(t = this.cm, function() { zi(t), cn(t) }))
          })
        }),
        Oo.prototype.eachLine = Oo.prototype.iter;
        var Ao = 0;
        function Do(e) {
          var t = this;
          if (Wo(t), !ve(t, e) && !Cr(t.display, e)) {
            xe(e), s && (Ao = +new Date);
            var r = an(t, e, !0), n = e.dataTransfer.files;
            if (r && !t.isReadOnly())
              if (n && n.length && window.FileReader && window.File)
                for (var i = n.length, o = Array(i), l = 0, a = function(e, n) {
                       if (!t.options.allowDropFileTypes ||
                           -1 != G(t.options.allowDropFileTypes, e.type)) {
                         var s = new FileReader;
                         s.onload = Jn(t, function() {
                           var e = s.result;
                           if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""),
                               o[n] = e, ++l == i) {
                             var a = {
                               from : r = at(t.doc, r),
                               to : r,
                               text : t.doc.splitLines(
                                   o.join(t.doc.lineSeparator())),
                               origin : "paste"
                             };
                             so(t.doc, a), $i(t.doc, Si(r, ki(a)))
                           }
                         }), s.readAsText(e)
                       }
                     }, u = 0; u < i; ++u)
                  a(n[u], u);
              else {
                if (t.state.draggingText && t.doc.sel.contains(r) > -1)
                  return t.state.draggingText(e),
                         void setTimeout(
                             function() { return t.display.input.focus() }, 20);
                try {
                  var c = e.dataTransfer.getData("Text");
                  if (c) {
                    var f;
                    if (t.state.draggingText && !t.state.draggingText.copy &&
                            (f = t.listSelections()),
                        Ji(t.doc, Si(r, r)), f)
                      for (var d = 0; d < f.length; ++d)
                        ho(t.doc, "", f[d].anchor, f[d].head, "drag");
                    t.replaceSelection(c, "around", "paste"),
                        t.display.input.focus()
                  }
                } catch (e) {
                }
              }
          }
        }
        function Wo(e) {
          e.display.dragCursor &&
              (e.display.lineSpace.removeChild(e.display.dragCursor),
               e.display.dragCursor = null)
        }
        function Ho(e) {
          if (document.getElementsByClassName) {
            for (var t = document.getElementsByClassName("CodeMirror"), r = [],
                     n = 0;
                 n < t.length; n++) {
              var i = t[n].CodeMirror;
              i && r.push(i)
            }
            r.length && r[0].operation(function() {
              for (var t = 0; t < r.length; t++)
                e(r[t])
            })
          }
        }
        var zo = !1;
        function Fo() {
          var e;
          zo || (he(window, "resize", function() {
                   null == e &&
                       (e = setTimeout(function() { e = null, Ho(Po) }, 100))
                 }), he(window, "blur", function() { return Ho(kn) }), zo = !0)
        }
        function Po(e) {
          var t = e.display;
          t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null,
          t.scrollbarsClipped = !1, e.setSize()
        }
        for (var Eo = {
               3 : "Pause",
               8 : "Backspace",
               9 : "Tab",
               13 : "Enter",
               16 : "Shift",
               17 : "Ctrl",
               18 : "Alt",
               19 : "Pause",
               20 : "CapsLock",
               27 : "Esc",
               32 : "Space",
               33 : "PageUp",
               34 : "PageDown",
               35 : "End",
               36 : "Home",
               37 : "Left",
               38 : "Up",
               39 : "Right",
               40 : "Down",
               44 : "PrintScrn",
               45 : "Insert",
               46 : "Delete",
               59 : ";",
               61 : "=",
               91 : "Mod",
               92 : "Mod",
               93 : "Mod",
               106 : "*",
               107 : "=",
               109 : "-",
               110 : ".",
               111 : "/",
               145 : "ScrollLock",
               173 : "-",
               186 : ";",
               187 : "=",
               188 : ",",
               189 : "-",
               190 : ".",
               191 : "/",
               192 : "`",
               219 : "[",
               220 : "\\",
               221 : "]",
               222 : "'",
               63232 : "Up",
               63233 : "Down",
               63234 : "Left",
               63235 : "Right",
               63272 : "Delete",
               63273 : "Home",
               63275 : "End",
               63276 : "PageUp",
               63277 : "PageDown",
               63302 : "Insert"
             },
                 Io = 0;
             Io < 10; Io++)
          Eo[Io + 48] = Eo[Io + 96] = String(Io);
        for (var Ro = 65; Ro <= 90; Ro++)
          Eo[Ro] = String.fromCharCode(Ro);
        for (var Bo = 1; Bo <= 12; Bo++)
          Eo[Bo + 111] = Eo[Bo + 63235] = "F" + Bo;
        var Go = {};
        function Uo(e) {
          var t, r, n, i, o = e.split(/-(?!$)/);
          e = o[o.length - 1];
          for (var l = 0; l < o.length - 1; l++) {
            var s = o[l];
            if (/^(cmd|meta|m)$/i.test(s))
              i = !0;
            else if (/^a(lt)?$/i.test(s))
              t = !0;
            else if (/^(c|ctrl|control)$/i.test(s))
              r = !0;
            else {
              if (!/^s(hift)?$/i.test(s))
                throw new Error("Unrecognized modifier name: " + s);
              n = !0
            }
          }
          return t && (e = "Alt-" + e), r && (e = "Ctrl-" + e),
                 i && (e = "Cmd-" + e), n && (e = "Shift-" + e), e
        }
        function Vo(e) {
          var t = {};
          for (var r in e)
            if (e.hasOwnProperty(r)) {
              var n = e[r];
              if (/^(name|fallthrough|(de|at)tach)$/.test(r))
                continue;
              if ("..." == n) {
                delete e[r];
                continue
              }
              for (var i = Z(r.split(" "), Uo), o = 0; o < i.length; o++) {
                var l = void 0, s = void 0;
                o == i.length - 1
                    ? (s = i.join(" "), l = n)
                    : (s = i.slice(0, o + 1).join(" "), l = "...");
                var a = t[s];
                if (a) {
                  if (a != l)
                    throw new Error("Inconsistent bindings for " + s)
                } else
                  t[s] = l
              }
              delete e[r]
            }
          for (var u in t)
            e[u] = t[u];
          return e
        }
        function jo(e, t, r, n) {
          var i = (t = Yo(t)).call ? t.call(e, n) : t[e];
          if (!1 === i)
            return "nothing";
          if ("..." === i)
            return "multi";
          if (null != i && r(i))
            return "handled";
          if (t.fallthrough) {
            if ("[object Array]" !=
                Object.prototype.toString.call(t.fallthrough))
              return jo(e, t.fallthrough, r, n);
            for (var o = 0; o < t.fallthrough.length; o++) {
              var l = jo(e, t.fallthrough[o], r, n);
              if (l)
                return l
            }
          }
        }
        function Ko(e) {
          var t = "string" == typeof e ? e : Eo[e.keyCode];
          return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
        }
        function Xo(e, t, r) {
          var n = e;
          return t.altKey && "Alt" != n && (e = "Alt-" + e),
                 (S ? t.metaKey : t.ctrlKey) && "Ctrl" != n &&
                     (e = "Ctrl-" + e),
                 (S ? t.ctrlKey : t.metaKey) && "Cmd" != n && (e = "Cmd-" + e),
                 !r && t.shiftKey && "Shift" != n && (e = "Shift-" + e), e
        }
        function _o(e, t) {
          if (d && 34 == e.keyCode && e.char)
            return !1;
          var r = Eo[e.keyCode];
          return null != r && !e.altGraphKey &&
                 (3 == e.keyCode && e.code && (r = e.code), Xo(r, e, t))
        }
        function Yo(e) { return "string" == typeof e ? Go[e] : e }
        function qo(e, t) {
          for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
            for (var o = t(r[i]); n.length && rt(o.from, $(n).to) <= 0;) {
              var l = n.pop();
              if (rt(l.from, o.from) < 0) {
                o.from = l.from;
                break
              }
            }
            n.push(o)
          }
          Zn(e, function() {
            for (var t = n.length - 1; t >= 0; t--)
              ho(e.doc, "", n[t].from, n[t].to, "+delete");
            An(e)
          })
        }
        function $o(e, t, r) {
          var n = le(e.text, t + r, r);
          return n < 0 || n > e.text.length ? null : n
        }
        function Zo(e, t, r) {
          var n = $o(e, t.ch, r);
          return null == n ? null
                           : new tt(t.line, n, r < 0 ? "after" : "before")
        }
        function Jo(e, t, r, n, i) {
          if (e) {
            var o = fe(r, t.doc.direction);
            if (o) {
              var l, s = i < 0 ? $(o) : o[0],
                     a = i < 0 == (1 == s.level) ? "after" : "before";
              if (s.level > 0 || "rtl" == t.doc.direction) {
                var u = Wr(t, r);
                l = i < 0 ? r.text.length - 1 : 0;
                var c = Hr(t, u, l).top;
                l = se(function(e) { return Hr(t, u, e).top == c },
                       i < 0 == (1 == s.level) ? s.from : s.to - 1, l),
                "before" == a && (l = $o(r, l, 1))
              } else
                l = i < 0 ? s.to : s.from;
              return new tt(n, l, a)
            }
          }
          return new tt(n, i < 0 ? r.text.length : 0,
                        i < 0 ? "before" : "after")
        }
        Go.basic = {
          Left : "goCharLeft",
          Right : "goCharRight",
          Up : "goLineUp",
          Down : "goLineDown",
          End : "goLineEnd",
          Home : "goLineStartSmart",
          PageUp : "goPageUp",
          PageDown : "goPageDown",
          Delete : "delCharAfter",
          Backspace : "delCharBefore",
          "Shift-Backspace" : "delCharBefore",
          Tab : "defaultTab",
          "Shift-Tab" : "indentAuto",
          Enter : "newlineAndIndent",
          Insert : "toggleOverwrite",
          Esc : "singleSelection"
        },
        Go.pcDefault = {
          "Ctrl-A" : "selectAll",
          "Ctrl-D" : "deleteLine",
          "Ctrl-Z" : "undo",
          "Shift-Ctrl-Z" : "redo",
          "Ctrl-Y" : "redo",
          "Ctrl-Home" : "goDocStart",
          "Ctrl-End" : "goDocEnd",
          "Ctrl-Up" : "goLineUp",
          "Ctrl-Down" : "goLineDown",
          "Ctrl-Left" : "goGroupLeft",
          "Ctrl-Right" : "goGroupRight",
          "Alt-Left" : "goLineStart",
          "Alt-Right" : "goLineEnd",
          "Ctrl-Backspace" : "delGroupBefore",
          "Ctrl-Delete" : "delGroupAfter",
          "Ctrl-S" : "save",
          "Ctrl-F" : "find",
          "Ctrl-G" : "findNext",
          "Shift-Ctrl-G" : "findPrev",
          "Shift-Ctrl-F" : "replace",
          "Shift-Ctrl-R" : "replaceAll",
          "Ctrl-[" : "indentLess",
          "Ctrl-]" : "indentMore",
          "Ctrl-U" : "undoSelection",
          "Shift-Ctrl-U" : "redoSelection",
          "Alt-U" : "redoSelection",
          fallthrough : "basic"
        },
        Go.emacsy = {
          "Ctrl-F" : "goCharRight",
          "Ctrl-B" : "goCharLeft",
          "Ctrl-P" : "goLineUp",
          "Ctrl-N" : "goLineDown",
          "Alt-F" : "goWordRight",
          "Alt-B" : "goWordLeft",
          "Ctrl-A" : "goLineStart",
          "Ctrl-E" : "goLineEnd",
          "Ctrl-V" : "goPageDown",
          "Shift-Ctrl-V" : "goPageUp",
          "Ctrl-D" : "delCharAfter",
          "Ctrl-H" : "delCharBefore",
          "Alt-D" : "delWordAfter",
          "Alt-Backspace" : "delWordBefore",
          "Ctrl-K" : "killLine",
          "Ctrl-T" : "transposeChars",
          "Ctrl-O" : "openLine"
        },
        Go.macDefault = {
          "Cmd-A" : "selectAll",
          "Cmd-D" : "deleteLine",
          "Cmd-Z" : "undo",
          "Shift-Cmd-Z" : "redo",
          "Cmd-Y" : "redo",
          "Cmd-Home" : "goDocStart",
          "Cmd-Up" : "goDocStart",
          "Cmd-End" : "goDocEnd",
          "Cmd-Down" : "goDocEnd",
          "Alt-Left" : "goGroupLeft",
          "Alt-Right" : "goGroupRight",
          "Cmd-Left" : "goLineLeft",
          "Cmd-Right" : "goLineRight",
          "Alt-Backspace" : "delGroupBefore",
          "Ctrl-Alt-Backspace" : "delGroupAfter",
          "Alt-Delete" : "delGroupAfter",
          "Cmd-S" : "save",
          "Cmd-F" : "find",
          "Cmd-G" : "findNext",
          "Shift-Cmd-G" : "findPrev",
          "Cmd-Alt-F" : "replace",
          "Shift-Cmd-Alt-F" : "replaceAll",
          "Cmd-[" : "indentLess",
          "Cmd-]" : "indentMore",
          "Cmd-Backspace" : "delWrappedLineLeft",
          "Cmd-Delete" : "delWrappedLineRight",
          "Cmd-U" : "undoSelection",
          "Shift-Cmd-U" : "redoSelection",
          "Ctrl-Up" : "goDocStart",
          "Ctrl-Down" : "goDocEnd",
          fallthrough : [ "basic", "emacsy" ]
        },
        Go.default = b ? Go.macDefault : Go.pcDefault;
        var Qo = {
          selectAll : oo,
          singleSelection : function(e) {
            return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), j)
          },
          killLine : function(e) {
            return qo(e, function(t) {
              if (t.empty()) {
                var r = _e(e.doc, t.head.line).text.length;
                return t.head.ch == r && t.head.line < e.lastLine()
                           ? {from : t.head, to : tt(t.head.line + 1, 0)}
                           : {from : t.head, to : tt(t.head.line, r)}
              }
              return { from: t.from(), to: t.to() }
            })
          },
          deleteLine : function(e) {
            return qo(e, function(t) {
              return {
                from: tt(t.from().line, 0),
                    to: at(e.doc, tt(t.to().line + 1, 0))
              }
            })
          },
          delLineLeft : function(e) {
            return qo(e, function(e) {
              return { from: tt(e.from().line, 0), to: e.from() }
            })
          },
          delWrappedLineLeft : function(e) {
            return qo(e, function(t) {
              var r = e.charCoords(t.head, "div").top + 5;
              return {
                from: e.coordsChar({left : 0, top : r}, "div"), to: t.from()
              }
            })
          },
          delWrappedLineRight : function(e) {
            return qo(e, function(t) {
              var r = e.charCoords(t.head, "div").top + 5,
                  n = e.coordsChar(
                      {left : e.display.lineDiv.offsetWidth + 100, top : r},
                      "div");
              return { from: t.from(), to: n }
            })
          },
          undo : function(e) { return e.undo() },
          redo : function(e) { return e.redo() },
          undoSelection : function(e) { return e.undoSelection() },
          redoSelection : function(e) { return e.redoSelection() },
          goDocStart : function(
              e) { return e.extendSelection(tt(e.firstLine(), 0)) },
          goDocEnd : function(e) { return e.extendSelection(tt(e.lastLine())) },
          goLineStart : function(e) {
            return e.extendSelectionsBy(function(
                                            t) { return el(e, t.head.line) },
                                        {origin : "+move", bias : 1})
          },
          goLineStartSmart : function(e) {
            return e.extendSelectionsBy(function(t) { return tl(e, t.head) },
                                        {origin : "+move", bias : 1})
          },
          goLineEnd : function(e) {
            return e.extendSelectionsBy(function(t) {
              return function(e, t) {
                var r = _e(e.doc, t), n = function(e) {
                  for (var t; t = Pt(e);)
                    e = t.find(1, !0).line;
                  return e
                }(r);
                n != r && (t = Ze(n));
                return Jo(!0, e, r, t, -1)
              }(e, t.head.line)
            }, {origin : "+move", bias : -1})
          },
          goLineRight : function(e) {
            return e.extendSelectionsBy(function(t) {
              var r = e.cursorCoords(t.head, "div").top + 5;
              return e.coordsChar(
                  {left : e.display.lineDiv.offsetWidth + 100, top : r}, "div")
            }, X)
          },
          goLineLeft : function(e) {
            return e.extendSelectionsBy(function(t) {
              var r = e.cursorCoords(t.head, "div").top + 5;
              return e.coordsChar({left : 0, top : r}, "div")
            }, X)
          },
          goLineLeftSmart : function(e) {
            return e.extendSelectionsBy(function(t) {
              var r = e.cursorCoords(t.head, "div").top + 5,
                  n = e.coordsChar({left : 0, top : r}, "div");
              return n.ch < e.getLine(n.line).search(/\S/) ? tl(e, t.head) : n
            }, X)
          },
          goLineUp : function(e) { return e.moveV(-1, "line") },
          goLineDown : function(e) { return e.moveV(1, "line") },
          goPageUp : function(e) { return e.moveV(-1, "page") },
          goPageDown : function(e) { return e.moveV(1, "page") },
          goCharLeft : function(e) { return e.moveH(-1, "char") },
          goCharRight : function(e) { return e.moveH(1, "char") },
          goColumnLeft : function(e) { return e.moveH(-1, "column") },
          goColumnRight : function(e) { return e.moveH(1, "column") },
          goWordLeft : function(e) { return e.moveH(-1, "word") },
          goGroupRight : function(e) { return e.moveH(1, "group") },
          goGroupLeft : function(e) { return e.moveH(-1, "group") },
          goWordRight : function(e) { return e.moveH(1, "word") },
          delCharBefore : function(e) { return e.deleteH(-1, "char") },
          delCharAfter : function(e) { return e.deleteH(1, "char") },
          delWordBefore : function(e) { return e.deleteH(-1, "word") },
          delWordAfter : function(e) { return e.deleteH(1, "word") },
          delGroupBefore : function(e) { return e.deleteH(-1, "group") },
          delGroupAfter : function(e) { return e.deleteH(1, "group") },
          indentAuto : function(e) { return e.indentSelection("smart") },
          indentMore : function(e) { return e.indentSelection("add") },
          indentLess : function(e) { return e.indentSelection("subtract") },
          insertTab : function(e) { return e.replaceSelection("\t") },
          insertSoftTab : function(e) {
            for (var t = [], r = e.listSelections(), n = e.options.tabSize,
                     i = 0;
                 i < r.length; i++) {
              var o = r[i].from(), l = R(e.getLine(o.line), o.ch, n);
              t.push(q(n - l % n))
            }
            e.replaceSelections(t)
          },
          defaultTab : function(e) {
            e.somethingSelected() ? e.indentSelection("add")
                                  : e.execCommand("insertTab")
          },
          transposeChars : function(e) {
            return Zn(e, function() {
              for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++)
                if (t[n].empty()) {
                  var i = t[n].head, o = _e(e.doc, i.line).text;
                  if (o)
                    if (i.ch == o.length && (i = new tt(i.line, i.ch - 1)),
                        i.ch > 0)
                      i = new tt(i.line, i.ch + 1),
                      e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                                     tt(i.line, i.ch - 2), i, "+transpose");
                    else if (i.line > e.doc.first) {
                      var l = _e(e.doc, i.line - 1).text;
                      l && (i = new tt(i.line, 1),
                            e.replaceRange(o.charAt(0) + e.doc.lineSeparator() +
                                               l.charAt(l.length - 1),
                                           tt(i.line - 1, l.length - 1), i,
                                           "+transpose"))
                    }
                  r.push(new xi(i, i))
                }
              e.setSelections(r)
            })
          },
          newlineAndIndent : function(e) {
            return Zn(e, function() {
              for (var t = e.listSelections(), r = t.length - 1; r >= 0; r--)
                e.replaceRange(e.doc.lineSeparator(), t[r].anchor, t[r].head,
                               "+input");
              t = e.listSelections();
              for (var n = 0; n < t.length; n++)
                e.indentLine(t[n].from().line, null, !0);
              An(e)
            })
          },
          openLine : function(e) { return e.replaceSelection("\n", "start") },
          toggleOverwrite : function(e) { return e.toggleOverwrite() }
        };
        function el(e, t) {
          var r = _e(e.doc, t), n = Rt(r);
          return n != r && (t = Ze(n)), Jo(!0, e, n, t, 1)
        }
        function tl(e, t) {
          var r = el(e, t.line), n = _e(e.doc, r.line),
              i = fe(n, e.doc.direction);
          if (!i || 0 == i[0].level) {
            var o = Math.max(0, n.text.search(/\S/)),
                l = t.line == r.line && t.ch <= o && t.ch;
            return tt(r.line, l ? 0 : o, r.sticky)
          }
          return r
        }
        function rl(e, t, r) {
          if ("string" == typeof t && !(t = Qo[t]))
            return !1;
          e.display.input.ensurePolled();
          var n = e.display.shift, i = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0),
                r && (e.display.shift = !1), i = t(e) != V
          } finally {
            e.display.shift = n, e.state.suppressEdits = !1
          }
          return i
        }
        var nl = new B;
        function il(e, t, r, n) {
          var i = e.state.keySeq;
          if (i) {
            if (Ko(t))
              return "handled";
            if (/\'$/.test(t) ? e.state.keySeq = null : nl.set(50, function() {
                  e.state.keySeq == i &&
                      (e.state.keySeq = null, e.display.input.reset())
                }), ol(e, i + " " + t, r, n))
              return !0
          }
          return ol(e, t, r, n)
        }
        function ol(e, t, r, n) {
          var i = function(e, t, r) {
            for (var n = 0; n < e.state.keyMaps.length; n++) {
              var i = jo(t, e.state.keyMaps[n], r, e);
              if (i)
                return i
            }
            return e.options.extraKeys && jo(t, e.options.extraKeys, r, e) ||
                   jo(t, e.options.keyMap, r, e)
          }(e, t, n);
          return "multi" == i && (e.state.keySeq = t),
                 "handled" == i && ar(e, "keyHandled", e, t, r),
                 "handled" != i && "multi" != i || (xe(r), wn(e)), !!i
        }
        function ll(e, t) {
          var r = _o(t, !0);
          return !!r &&
                 (t.shiftKey && !e.state.keySeq
                      ? il(e, "Shift-" + r, t,
                           function(t) { return rl(e, t, !0) }) ||
                            il(e, r, t,
                               function(t) {
                                 if ("string" == typeof t ? /^go[A-Z]/.test(t)
                                                          : t.motion)
                                   return rl(e, t)
                               })
                      : il(e, r, t, function(t) { return rl(e, t) }))
        }
        var sl = null;
        function al(e) {
          var t = this;
          if (t.curOp.focus = H(), !ve(t, e)) {
            s && a < 11 && 27 == e.keyCode && (e.returnValue = !1);
            var r = e.keyCode;
            t.display.shift = 16 == r || e.shiftKey;
            var n = ll(t, e);
            d && (sl = n ? r : null, !n && 88 == r && !Fe &&
                                         (b ? e.metaKey : e.ctrlKey) &&
                                         t.replaceSelection("", null, "cut")),
                18 != r ||
                    /\bCodeMirror-crosshair\b/.test(
                        t.display.lineDiv.className) ||
                    function(e) {
                      var t = e.display.lineDiv;
                      function r(e) {
                        18 != e.keyCode && e.altKey ||
                            (T(t, "CodeMirror-crosshair"),
                             ge(document, "keyup", r),
                             ge(document, "mouseover", r))
                      }
                      z(t, "CodeMirror-crosshair"), he(document, "keyup", r),
                          he(document, "mouseover", r)
                    }(t)
          }
        }
        function ul(e) {
          16 == e.keyCode && (this.doc.sel.shift = !1), ve(this, e)
        }
        function cl(e) {
          var t = this;
          if (!(Cr(t.display, e) || ve(t, e) || e.ctrlKey && !e.altKey ||
                b && e.metaKey)) {
            var r = e.keyCode, n = e.charCode;
            if (d && r == sl)
              return sl = null, void xe(e);
            if (!d || e.which && !(e.which < 10) || !ll(t, e)) {
              var i = String.fromCharCode(null == n ? r : n);
              "\b" != i && (function(e, t, r) {
                return il(e, "'" + r + "'", t,
                          function(t) { return rl(e, t, !0) })
              }(t, e, i) || t.display.input.onKeyPress(e))
            }
          }
        }
        var fl, dl,
            hl = function(e, t,
                          r) { this.time = e, this.pos = t, this.button = r };
        function pl(e) {
          var t = this, r = t.display;
          if (!(ve(t, e) || r.activeTouch && r.input.supportsTouch()))
            if (r.input.ensurePolled(), r.shift = e.shiftKey, Cr(r, e))
              u || (r.scroller.draggable = !1,
                    setTimeout(function() { return r.scroller.draggable = !0 },
                               100));
            else if (!vl(t, e)) {
              var n = an(t, e), i = Le(e), o = n ? function(e, t) {
                var r = +new Date;
                return dl && dl.compare(r, e, t)
                           ? (fl = dl = null, "triple")
                           : fl && fl.compare(r, e, t)
                                 ? (dl = new hl(r, e, t), fl = null, "double")
                                 : (fl = new hl(r, e, t), dl = null, "single")
              }(n, i) : "single";
              window.focus(),1==i&&t.state.selectingText&&t.state.selectingText(e),n&&function(e,t,r,n,i){var o="Click";"double"==n?o="Double"+o:"triple"==n&&(o="Triple"+o);return il(e,Xo(o=(1==t?"Left":2==t?"Middle":"Right")+o,i),i,function(t){if("string"==typeof t&&(t=Qo[t]),!t)return!1;var n=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),n=t(e,r)!=V}finally{e.state.suppressEdits=!1}return n})}(t,i,n,o,e)||(1==i?n?function(e,t,r,n){s?setTimeout(E(xn,e),0):e.curOp.focus=H();var i,o=function(e,t,r){var n=e.getOption("configureMouse"),i=n?n(e,t,r):{};if(null==i.unit){var o=w?r.shiftKey&&r.metaKey:r.altKey;i.unit=o?"rectangle":"single"==t?"char":"double"==t?"word":"line"}(null==i.extend||e.doc.extend)&&(i.extend=e.doc.extend||r.shiftKey);null==i.addNew&&(i.addNew=b?r.metaKey:r.ctrlKey);null==i.moveOnDrag&&(i.moveOnDrag=!(b?r.altKey:r.ctrlKey));return i}(e,r,n),l=e.doc.sel;e.options.dragDrop&&Oe&&!e.isReadOnly()&&"single"==r&&(i=l.contains(t))>-1&&(rt((i=l.ranges[i]).from(),t)<0||t.xRel>0)&&(rt(i.to(),t)>0||t.xRel<0)?function(e,t,r,n){var i=e.display,o=!1,l=Jn(e,function(t){u&&(i.scroller.draggable=!1),e.state.draggingText=!1,ge(i.wrapper.ownerDocument,"mouseup",l),ge(i.wrapper.ownerDocument,"mousemove",c),ge(i.scroller,"dragstart",f),ge(i.scroller,"drop",l),o||(xe(t),n.addNew||Xi(e.doc,r,null,null,n.extend),u||s&&9==a?setTimeout(function(){i.wrapper.ownerDocument.body.focus(),i.input.focus()},20):i.input.focus())}),c=function(e){o=o||Math.abs(t.clientX-e.clientX)+Math.abs(t.clientY-e.clientY)>=10},f=function(){return o=!0};u&&(i.scroller.draggable=!0);e.state.draggingText=l,l.copy=!n.moveOnDrag,i.scroller.dragDrop&&i.scroller.dragDrop();he(i.wrapper.ownerDocument,"mouseup",l),he(i.wrapper.ownerDocument,"mousemove",c),he(i.scroller,"dragstart",f),he(i.scroller,"drop",l),Cn(e),setTimeout(function(){return i.input.focus()},20)}(e,n,t,o):function(e,t,r,n){var i=e.display,o=e.doc;xe(t);var l,s,a=o.sel,u=a.ranges;n.addNew&&!n.extend?(s=o.sel.contains(r),l=s>-1?u[s]:new xi(r,r)):(l=o.sel.primary(),s=o.sel.primIndex);if("rectangle"==n.unit)n.addNew||(l=new xi(r,r)),r=an(e,t,!0,!0),s=-1;else{var c=gl(e,r,n.unit);l=n.extend?Ki(l,c.anchor,c.head,n.extend):c}n.addNew?-1==s?(s=u.length,Zi(o,Ci(e,u.concat([l]),s),{scroll:!1,origin:"*mouse"})):u.length>1&&u[s].empty()&&"char"==n.unit&&!n.extend?(Zi(o,Ci(e,u.slice(0,s).concat(u.slice(s+1)),0),{scroll:!1,origin:"*mouse"}),a=o.sel):Yi(o,s,l,K):(s=0,Zi(o,new wi([l],0),K),a=o.sel);var f=r;function d(t){if(0!=rt(f,t))if(f=t,"rectangle"==n.unit){for(var i=[],u=e.options.tabSize,c=R(_e(o,r.line).text,r.ch,u),d=R(_e(o,t.line).text,t.ch,u),h=Math.min(c,d),p=Math.max(c,d),g=Math.min(r.line,t.line),m=Math.min(e.lastLine(),Math.max(r.line,t.line));g<=m;g++){var v=_e(o,g).text,y=_(v,h,u);h==p?i.push(new xi(tt(g,y),tt(g,y))):v.length>y&&i.push(new xi(tt(g,y),tt(g,_(v,p,u))))}i.length||i.push(new xi(r,r)),Zi(o,Ci(e,a.ranges.slice(0,s).concat(i),s),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var b,w=l,x=gl(e,t,n.unit),C=w.anchor;rt(x.anchor,C)>0?(b=x.head,C=lt(w.from(),x.anchor)):(b=x.anchor,C=ot(w.to(),x.head));var S=a.ranges.slice(0);S[s]=function(e,t){var r=t.anchor,n=t.head,i=_e(e.doc,r.line);if(0==rt(r,n)&&r.sticky==n.sticky)return t;var o=fe(i);if(!o)return t;var l=ue(o,r.ch,r.sticky),s=o[l];if(s.from!=r.ch&&s.to!=r.ch)return t;var a,u=l+(s.from==r.ch==(1!=s.level)?0:1);if(0==u||u==o.length)return t;if(n.line!=r.line)a=(n.line-r.line)*("ltr"==e.doc.direction?1:-1)>0;else{var c=ue(o,n.ch,n.sticky),f=c-l||(n.ch-r.ch)*(1==s.level?-1:1);a=c==u-1||c==u?f<0:f>0}var d=o[u+(a?-1:0)],h=a==(1==d.level),p=h?d.from:d.to,g=h?"after":"before";return r.ch==p&&r.sticky==g?t:new xi(new tt(r.line,p,g),n)}(e,new xi(at(o,C),b)),Zi(o,Ci(e,S,s),K)}}var h=i.wrapper.getBoundingClientRect(),p=0;function g(t){e.state.selectingText=!1,p=1/0,t&&(xe(t),i.input.focus()),ge(i.wrapper.ownerDocument,"mousemove",m),ge(i.wrapper.ownerDocument,"mouseup",v),o.history.lastSelOrigin=null}var m=Jn(e,function(t){0!==t.buttons&&Le(t)?function t(r){var l=++p;var s=an(e,r,!0,"rectangle"==n.unit);if(!s)return;if(0!=rt(s,f)){e.curOp.focus=H(),d(s);var a=Tn(i,o);(s.line>=a.to||s.line<a.from)&&setTimeout(Jn(e,function(){p==l&&t(r)}),150)}else{var u=r.clientY<h.top?-20:r.clientY>h.bottom?20:0;u&&setTimeout(Jn(e,function(){p==l&&(i.scroller.scrollTop+=u,t(r))}),50)}}(t):g(t)}),v=Jn(e,g);e.state.selectingText=v,he(i.wrapper.ownerDocument,"mousemove",m),he(i.wrapper.ownerDocument,"mouseup",v)}(e,n,t,o)}(t,n,o,e):Me(e)==r.scroller&&xe(e):2==i?(n&&Xi(t.doc,n),setTimeout(function(){return r.input.focus()},20)):3==i&&(k?t.display.input.onContextMenu(e):Cn(t)))
            }
        }
        function gl(e, t, r) {
          if ("char" == r)
            return new xi(t, t);
          if ("word" == r)
            return e.findWordAt(t);
          if ("line" == r)
            return new xi(tt(t.line, 0), at(e.doc, tt(t.line + 1, 0)));
          var n = r(e, t);
          return new xi(n.from, n.to)
        }
        function ml(e, t, r, n) {
          var i, o;
          if (t.touches)
            i = t.touches[0].clientX, o = t.touches[0].clientY;
          else
            try {
              i = t.clientX, o = t.clientY
            } catch (t) {
              return !1
            }
          if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
            return !1;
          n && xe(t);
          var l = e.display, s = l.lineDiv.getBoundingClientRect();
          if (o > s.bottom || !be(e, r))
            return Se(t);
          o -= s.top - l.viewOffset;
          for (var a = 0; a < e.display.gutterSpecs.length; ++a) {
            var u = l.gutters.childNodes[a];
            if (u && u.getBoundingClientRect().right >= i)
              return me(e, r, e, Je(e.doc, o),
                        e.display.gutterSpecs[a].className, t),
                     Se(t)
          }
        }
        function vl(e, t) { return ml(e, t, "gutterClick", !0) }
        function yl(e, t) {
          Cr(e.display, t) ||
              function(e, t) {
                if (!be(e, "gutterContextMenu"))
                  return !1;
                return ml(e, t, "gutterContextMenu", !1)
              }(e, t) ||
              ve(e, t, "contextmenu") || k || e.display.input.onContextMenu(t)
        }
        function bl(e) {
          e.display.wrapper.className =
              e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
              e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"),
          Br(e)
        }
        hl.prototype.compare = function(e, t, r) {
          return this.time + 400 > e && 0 == rt(t, this.pos) && r == this.button
        };
        var wl = {toString : function() { return "CodeMirror.Init" }}, xl = {},
            Cl = {};
        function Sl(e, t, r) {
          if (!t != !(r && r != wl)) {
            var n = e.display.dragFunctions, i = t ? he : ge;
            i(e.display.scroller, "dragstart", n.start),
                i(e.display.scroller, "dragenter", n.enter),
                i(e.display.scroller, "dragover", n.over),
                i(e.display.scroller, "dragleave", n.leave),
                i(e.display.scroller, "drop", n.drop)
          }
        }
        function kl(e) {
          e.options.lineWrapping
              ? (z(e.display.wrapper, "CodeMirror-wrap"),
                 e.display.sizer.style.minWidth = "",
                 e.display.sizerWidth = null)
              : (T(e.display.wrapper, "CodeMirror-wrap"), Xt(e)),
              sn(e), cn(e), Br(e), setTimeout(function() { return Bn(e) }, 100)
        }
        function Ml(e, t) {
          var r = this;
          if (!(this instanceof Ml))
            return new Ml(e, t);
          this.options = t = t ? I(t) : {}, I(xl, t, !1);
          var n = t.value;
          "string" == typeof n
              ? n = new Oo(n, t.mode, null, t.lineSeparator, t.direction)
              : t.mode && (n.modeOption = t.mode),
                this.doc = n;
          var i = new Ml.inputStyles[t.inputStyle](this),
              o = this.display = new pi(e, n, i, t);
          for (
              var l in
                  o.wrapper
                      .CodeMirror = this,
             bl(this),
             t.lineWrapping &&
                  (this.display.wrapper.className += " CodeMirror-wrap"),
             Vn(this), this.state = {
               keyMaps : [],
               overlays : [],
               modeGen : 0,
               overwrite : !1,
               delayingBlurEvent : !1,
               focused : !1,
               suppressEdits : !1,
               pasteIncoming : -1,
               cutIncoming : -1,
               selectingText : !1,
               draggingText : !1,
               highlight : new B,
               keySeq : null,
               specialChars : null
             },
             t.autofocus && !y && o.input.focus(),
             s && a < 11 &&
                  setTimeout(function() { return r.display.input.reset(!0) },
                             20),
             function(e) {
               var t = e.display;
               he(t.scroller, "mousedown", Jn(e, pl)),
                   he(t.scroller, "dblclick", s && a < 11 ? Jn(e, function(t) {
                        if (!ve(e, t)) {
                          var r = an(e, t);
                          if (r && !vl(e, t) && !Cr(e.display, t)) {
                            xe(t);
                            var n = e.findWordAt(r);
                            Xi(e.doc, n.anchor, n.head)
                          }
                        }
                      }) : function(t) { return ve(e, t) || xe(t) });
               he(t.scroller, "contextmenu", function(t) { return yl(e, t) });
               var r, n = {end : 0};
               function i() {
                 t.activeTouch &&
                     (r = setTimeout(function() { return t.activeTouch = null },
                                     1e3),
                      (n = t.activeTouch).end = +new Date)
               }
               function o(e, t) {
                 if (null == t.left)
                   return !0;
                 var r = t.left - e.left, n = t.top - e.top;
                 return r * r + n * n > 400
               }
               he(t.scroller, "touchstart",
                  function(i) {
                    if (!ve(e, i) && !function(e) {
                          if (1 != e.touches.length)
                            return !1;
                          var t = e.touches[0];
                          return t.radiusX <= 1 && t.radiusY <= 1
                        }(i) && !vl(e, i)) {
                      t.input.ensurePolled(), clearTimeout(r);
                      var o = +new Date;
                      t.activeTouch = {
                        start : o,
                        moved : !1,
                        prev : o - n.end <= 300 ? n : null
                      },
                      1 == i.touches.length &&
                          (t.activeTouch.left = i.touches[0].pageX,
                           t.activeTouch.top = i.touches[0].pageY)
                    }
                  }),
                   he(t.scroller, "touchmove",
                      function() {
                        t.activeTouch && (t.activeTouch.moved = !0)
                      }),
                   he(t.scroller, "touchend",
                      function(r) {
                        var n = t.activeTouch;
                        if (n && !Cr(t, r) && null != n.left && !n.moved &&
                            new Date - n.start < 300) {
                          var l, s = e.coordsChar(t.activeTouch, "page");
                          l = !n.prev || o(n, n.prev)
                                  ? new xi(s, s)
                                  : !n.prev.prev || o(n, n.prev.prev)
                                        ? e.findWordAt(s)
                                        : new xi(tt(s.line, 0),
                                                 at(e.doc, tt(s.line + 1, 0))),
                          e.setSelection(l.anchor, l.head), e.focus(), xe(r)
                        }
                        i()
                      }),
                   he(t.scroller, "touchcancel", i),
                   he(t.scroller, "scroll",
                      function() {
                        t.scroller.clientHeight &&
                            (zn(e, t.scroller.scrollTop),
                             Pn(e, t.scroller.scrollLeft, !0),
                             me(e, "scroll", e))
                      }),
                   he(t.scroller, "mousewheel",
                      function(t) { return bi(e, t) }),
                   he(t.scroller, "DOMMouseScroll",
                      function(t) { return bi(e, t) }),
                   he(t.wrapper, "scroll", function() {
                     return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0
                   }), t.dragFunctions = {
                     enter : function(t) { ve(e, t) || ke(t) },
                     over : function(t) {
                       ve(e, t) || (!function(e, t) {
                         var r = an(e, t);
                         if (r) {
                           var n = document.createDocumentFragment();
                           vn(e, r, n),
                               e.display.dragCursor ||
                                   (e.display.dragCursor = A(
                                        "div", null,
                                        "CodeMirror-cursors CodeMirror-dragcursors"),
                                    e.display.lineSpace.insertBefore(
                                        e.display.dragCursor,
                                        e.display.cursorDiv)),
                               O(e.display.dragCursor, n)
                         }
                       }(e, t), ke(t))
                     },
                     start : function(t) {
                       return function(e, t) {
                         if (s &&
                             (!e.state.draggingText || +new Date - Ao < 100))
                           ke(t);
                         else if (!ve(e, t) && !Cr(e.display, t) &&
                                  (t.dataTransfer.setData("Text",
                                                          e.getSelection()),
                                   t.dataTransfer.effectAllowed = "copyMove",
                                   t.dataTransfer.setDragImage && !h)) {
                           var r = A("img", null, null,
                                     "position: fixed; left: 0; top: 0;");
                           r.src =
                               "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                           d && (r.width = r.height = 1,
                                 e.display.wrapper.appendChild(r),
                                 r._top = r.offsetTop),
                           t.dataTransfer.setDragImage(r, 0, 0),
                           d && r.parentNode.removeChild(r)
                         }
                       }(e, t)
                     },
                     drop : Jn(e, Do),
                     leave : function(t) { ve(e, t) || Wo(e) }
                   };
               var l = t.input.getField();
               he(l, "keyup", function(t) { return ul.call(e, t) }),
                   he(l, "keydown", Jn(e, al)), he(l, "keypress", Jn(e, cl)),
                   he(l, "focus", function(t) { return Sn(e, t) }),
                   he(l, "blur", function(t) { return kn(e, t) })
             }(this),
             Fo(), Kn(this), this.curOp.forceUpdate = !0, Hi(this, n),
             t.autofocus && !y || this.hasFocus() ? setTimeout(E(Sn, this), 20)
                                                  : kn(this),
             Cl)
            Cl.hasOwnProperty(l) && Cl[l](r, t[l], wl);
          ci(this), t.finishInit && t.finishInit(this);
          for (var c = 0; c < Ll.length; ++c)
            Ll[c](r);
          Xn(this), u && t.lineWrapping &&
                        "optimizelegibility" ==
                            getComputedStyle(o.lineDiv).textRendering &&
                        (o.lineDiv.style.textRendering = "auto")
        }
        Ml.defaults = xl, Ml.optionHandlers = Cl;
        var Ll = [];
        function Tl(e, t, r, n) {
          var i, o = e.doc;
          null == r && (r = "add"),
              "smart" == r && (o.mode.indent ? i = pt(e, t).state : r = "prev");
          var l = e.options.tabSize, s = _e(o, t), a = R(s.text, null, l);
          s.stateAfter && (s.stateAfter = null);
          var u, c = s.text.match(/^\s*/)[0];
          if (n || /\S/.test(s.text)) {
            if ("smart" == r &&
                ((u = o.mode.indent(i, s.text.slice(c.length), s.text)) == V ||
                 u > 150)) {
              if (!n)
                return;
              r = "prev"
            }
          } else
            u = 0, r = "not";
          "prev" == r ? u = t > o.first ? R(_e(o, t - 1).text, null, l) : 0
                      : "add" == r ? u = a + e.options.indentUnit
                                   : "subtract" == r
                                         ? u = a - e.options.indentUnit
                                         : "number" == typeof r && (u = a + r),
                        u = Math.max(0, u);
          var f = "", d = 0;
          if (e.options.indentWithTabs)
            for (var h = Math.floor(u / l); h; --h)
              d += l, f += "\t";
          if (d < u && (f += q(u - d)), f != c)
            return ho(o, f, tt(t, 0), tt(t, c.length), "+input"),
                   s.stateAfter = null, !0;
          for (var p = 0; p < o.sel.ranges.length; p++) {
            var g = o.sel.ranges[p];
            if (g.head.line == t && g.head.ch < c.length) {
              var m = tt(t, c.length);
              Yi(o, p, new xi(m, m));
              break
            }
          }
        }
        Ml.defineInitHook = function(e) { return Ll.push(e) };
        var Nl = null;
        function Ol(e) { Nl = e }
        function Al(e, t, r, n, i) {
          var o = e.doc;
          e.display.shift = !1, n || (n = o.sel);
          var l = +new Date - 200,
              s = "paste" == i || e.state.pasteIncoming > l, a = He(t),
              u = null;
          if (s && n.ranges.length > 1)
            if (Nl && Nl.text.join("\n") == t) {
              if (n.ranges.length % Nl.text.length == 0) {
                u = [];
                for (var c = 0; c < Nl.text.length; c++)
                  u.push(o.splitLines(Nl.text[c]))
              }
            } else
              a.length == n.ranges.length && e.options.pasteLinesPerSelection &&
                  (u = Z(a, function(e) { return [ e ] }));
          for (var f = e.curOp.updateInput, d = n.ranges.length - 1; d >= 0;
               d--) {
            var h = n.ranges[d], p = h.from(), g = h.to();
            h.empty() &&
                (r &&r > 0
                     ? p = tt(p.line, p.ch - r)
                     : e.state.overwrite &&!s
                           ? g = tt(g.line, Math.min(_e(o, g.line).text.length,
                                                     g.ch + $(a).length))
                           : s && Nl && Nl.lineWise &&
                                 Nl.text.join("\n") == t &&
                                 (p = g = tt(p.line, 0)));
            var m = {
              from : p,
              to : g,
              text : u ? u[d % u.length] : a,
              origin : i || (s ? "paste"
                               : e.state.cutIncoming > l ? "cut" : "+input")
            };
            so(e.doc, m), ar(e, "inputRead", e, m)
          }
          t && !s && Wl(e, t), An(e),
              e.curOp.updateInput < 2 && (e.curOp.updateInput = f),
              e.curOp.typing = !0,
              e.state.pasteIncoming = e.state.cutIncoming = -1
        }
        function Dl(e, t) {
          var r = e.clipboardData && e.clipboardData.getData("Text");
          if (r)
            return e.preventDefault(),
                   t.isReadOnly() || t.options.disableInput ||
                       Zn(t, function() { return Al(t, r, 0, null, "paste") }),
                   !0
        }
        function Wl(e, t) {
          if (e.options.electricChars && e.options.smartIndent)
            for (var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
              var i = r.ranges[n];
              if (!(i.head.ch > 100 ||
                    n && r.ranges[n - 1].head.line == i.head.line)) {
                var o = e.getModeAt(i.head), l = !1;
                if (o.electricChars) {
                  for (var s = 0; s < o.electricChars.length; s++)
                    if (t.indexOf(o.electricChars.charAt(s)) > -1) {
                      l = Tl(e, i.head.line, "smart");
                      break
                    }
                } else
                  o.electricInput &&
                      o.electricInput.test(
                          _e(e.doc, i.head.line).text.slice(0, i.head.ch)) &&
                      (l = Tl(e, i.head.line, "smart"));
                l && ar(e, "electricInput", e, i.head.line)
              }
            }
        }
        function Hl(e) {
          for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
            var i = e.doc.sel.ranges[n].head.line,
                o = {anchor : tt(i, 0), head : tt(i + 1, 0)};
            r.push(o), t.push(e.getRange(o.anchor, o.head))
          }
          return { text: t, ranges: r }
        }
        function zl(e, t, r, n) {
          e.setAttribute("autocorrect", r ? "" : "off"),
              e.setAttribute("autocapitalize", n ? "" : "off"),
              e.setAttribute("spellcheck", !!t)
        }
        function Fl() {
          var e = A(
                  "textarea", null, null,
                  "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
              t = A(
                  "div", [ e ], null,
                  "overflow: hidden; position: relative; width: 3px; height: 0px;");
          return u ? e.style.width = "1000px" : e.setAttribute("wrap", "off"),
                     m && (e.style.border = "1px solid black"), zl(e), t
        }
        function Pl(e, t, r, n, i) {
          var o = t, l = r, s = _e(e, t.line);
          function a(n) {
            var o, l;
            if (null == (o = i ? function(e, t, r, n) {
                  var i = fe(t, e.doc.direction);
                  if (!i)
                    return Zo(t, r, n);
                  r.ch >= t.text.length
                      ? (r.ch = t.text.length, r.sticky = "before")
                      : r.ch <= 0 && (r.ch = 0, r.sticky = "after");
                  var o = ue(i, r.ch, r.sticky), l = i[o];
                  if ("ltr" == e.doc.direction && l.level % 2 == 0 &&
                      (n > 0 ? l.to > r.ch : l.from < r.ch))
                    return Zo(t, r, n);
                  var s,
                      a = function(
                          e, r) { return $o(t, e instanceof tt ? e.ch : e, r) },
                      u = function(r) {
                        return e.options.lineWrapping
                                   ? (s = s || Wr(e, t), Jr(e, t, s, r))
                                   : {begin : 0, end : t.text.length}
                      }, c = u("before" == r.sticky ? a(r, -1) : r.ch);
                  if ("rtl" == e.doc.direction || 1 == l.level) {
                    var f = 1 == l.level == n < 0, d = a(r, f ? 1 : -1);
                    if (null != d && (f ? d <= l.to && d <= c.end
                                        : d >= l.from && d >= c.begin)) {
                      var h = f ? "before" : "after";
                      return new tt(r.line, d, h)
                    }
                  }
                  var p = function(e, t, n) {
                    for (var o = function(e, t) {
                           return t ? new tt(r.line, a(e, 1), "before")
                                    : new tt(r.line, e, "after")
                         }; e >= 0 && e < i.length; e += t) {
                      var l = i[e], s = t > 0 == (1 != l.level),
                          u = s ? n.begin : a(n.end, -1);
                      if (l.from <= u && u < l.to)
                        return o(u, s);
                      if (u = s ? l.from : a(l.to, -1),
                          n.begin <= u && u < n.end)
                        return o(u, s)
                    }
                  }, g = p(o + n, n, c);
                  if (g)
                    return g;
                  var m = n > 0 ? c.end : a(c.begin, -1);
                  return null == m || n > 0 && m == t.text.length ||
                                 !(g = p(n > 0 ? 0 : i.length - 1, n, u(m)))
                             ? null
                             : g
                }(e.cm, s, t, r) : Zo(s, t, r))) {
              if (n || (l = t.line + r) < e.first || l >= e.first + e.size ||
                  (t = new tt(l, t.ch, t.sticky), !(s = _e(e, l))))
                return !1;
              t = Jo(i, e.cm, s, t.line, r)
            } else
              t = o;
            return !0
          }
          if ("char" == n)
            a();
          else if ("column" == n)
            a(!0);
          else if ("word" == n || "group" == n)
            for (var u = null, c = "group" == n,
                     f = e.cm && e.cm.getHelper(t, "wordChars"), d = !0;
                 !(r < 0) || a(!d); d = !1) {
              var h = s.text.charAt(t.ch) || "\n",
                  p = re(h, f)
                          ? "w"
                          : c && "\n" == h ? "n"
                                           : !c || /\s/.test(h) ? null : "p";
              if (!c || d || p || (p = "s"), u && u != p) {
                r < 0 && (r = 1, a(), t.sticky = "after");
                break
              }
              if (p && (u = p), r > 0 && !a(!d))
                break
            }
          var g = no(e, t, o, l, !0);
          return nt(o, g) && (g.hitSide = !0), g
        }
        function El(e, t, r, n) {
          var i, o, l = e.doc, s = t.left;
          if ("page" == n) {
            var a = Math.min(e.display.wrapper.clientHeight,
                             window.innerHeight ||
                                 document.documentElement.clientHeight),
                u = Math.max(a - .5 * tn(e.display), 3);
            i = (r > 0 ? t.bottom : t.top) + r * u
          } else
            "line" == n && (i = r > 0 ? t.bottom + 3 : t.top - 3);
          for (; (o = $r(e, s, i)).outside;) {
            if (r < 0 ? i <= 0 : i >= l.height) {
              o.hitSide = !0;
              break
            }
            i += 5 * r
          }
          return o
        }
        var Il = function(e) {
          this.cm = e,
          this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode =
              this.lastFocusOffset = null,
          this.polling = new B, this.composing = null, this.gracePeriod = !1,
          this.readDOMTimeout = null
        };
        function Rl(e, t) {
          var r = Dr(e, t.line);
          if (!r || r.hidden)
            return null;
          var n = _e(e.doc, t.line), i = Or(r, n, t.line),
              o = fe(n, e.doc.direction), l = "left";
          o && (l = ue(o, t.ch) % 2 ? "right" : "left");
          var s = Pr(i.map, t.ch, l);
          return s.offset = "right" == s.collapse ? s.end : s.start, s
        }
        function Bl(e, t) { return t && (e.bad = !0), e }
        function Gl(e, t, r) {
          var n;
          if (t == e.display.lineDiv) {
            if (!(n = e.display.lineDiv.childNodes[r]))
              return Bl(e.clipPos(tt(e.display.viewTo - 1)), !0);
            t = null, r = 0
          } else
            for (n = t;; n = n.parentNode) {
              if (!n || n == e.display.lineDiv)
                return null;
              if (n.parentNode && n.parentNode == e.display.lineDiv)
                break
            }
          for (var i = 0; i < e.display.view.length; i++) {
            var o = e.display.view[i];
            if (o.node == n)
              return Ul(o, t, r)
          }
        }
        function Ul(e, t, r) {
          var n = e.text.firstChild, i = !1;
          if (!t || !W(n, t))
            return Bl(tt(Ze(e.line), 0), !0);
          if (t == n && (i = !0, t = n.childNodes[r], r = 0, !t)) {
            var o = e.rest ? $(e.rest) : e.line;
            return Bl(tt(Ze(o), o.text.length), i)
          }
          var l = 3 == t.nodeType ? t : null, s = t;
          for (l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType ||
                   (l = t.firstChild, r && (r = l.nodeValue.length));
               s.parentNode != n;)
            s = s.parentNode;
          var a = e.measure, u = a.maps;
          function c(t, r, n) {
            for (var i = -1; i < (u ? u.length : 0); i++)
              for (var o = i < 0 ? a.map : u[i], l = 0; l < o.length; l += 3) {
                var s = o[l + 2];
                if (s == t || s == r) {
                  var c = Ze(i < 0 ? e.line : e.rest[i]), f = o[l] + n;
                  return (n < 0 || s != t) && (f = o[l + (n ? 1 : 0)]), tt(c, f)
                }
              }
          }
          var f = c(l, s, r);
          if (f)
            return Bl(f, i);
          for (var d = s.nextSibling, h = l ? l.nodeValue.length - r : 0; d;
               d = d.nextSibling) {
            if (f = c(d, d.firstChild, 0))
              return Bl(tt(f.line, f.ch - h), i);
            h += d.textContent.length
          }
          for (var p = s.previousSibling, g = r; p; p = p.previousSibling) {
            if (f = c(p, p.firstChild, -1))
              return Bl(tt(f.line, f.ch + g), i);
            g += p.textContent.length
          }
        }
        Il.prototype.init = function(e) {
          var t = this, r = this, n = r.cm, i = r.div = e.lineDiv;
          function o(e) {
            if (!ve(n, e)) {
              if (n.somethingSelected())
                Ol({lineWise : !1, text : n.getSelections()}),
                    "cut" == e.type && n.replaceSelection("", null, "cut");
              else {
                if (!n.options.lineWiseCopyCut)
                  return;
                var t = Hl(n);
                Ol({lineWise : !0, text : t.text}),
                    "cut" == e.type && n.operation(function() {
                      n.setSelections(t.ranges, 0, j),
                          n.replaceSelection("", null, "cut")
                    })
              }
              if (e.clipboardData) {
                e.clipboardData.clearData();
                var o = Nl.text.join("\n");
                if (e.clipboardData.setData("Text", o),
                    e.clipboardData.getData("Text") == o)
                  return void e.preventDefault()
              }
              var l = Fl(), s = l.firstChild;
              n.display.lineSpace.insertBefore(l,
                                               n.display.lineSpace.firstChild),
                  s.value = Nl.text.join("\n");
              var a = document.activeElement;
              P(s), setTimeout(function() {
                n.display.lineSpace.removeChild(l), a.focus(),
                    a == i && r.showPrimarySelection()
              }, 50)
            }
          }
          zl(i, n.options.spellcheck, n.options.autocorrect,
             n.options.autocapitalize),
              he(i, "paste",
                 function(e) {
                   ve(n, e) || Dl(e, n) ||
                       a <= 11 &&
                           setTimeout(
                               Jn(n, function() { return t.updateFromDOM() }),
                               20)
                 }),
              he(i, "compositionstart",
                 function(e) { t.composing = {
                                 data : e.data,
                                 done : !1
                               } }),
              he(i, "compositionupdate",
                 function(e) {
                   t.composing || (t.composing = {data : e.data, done : !1})
                 }),
              he(i, "compositionend",
                 function(e) {
                   t.composing &&
                       (e.data != t.composing.data && t.readFromDOMSoon(),
                        t.composing.done = !0)
                 }),
              he(i, "touchstart",
                 function() { return r.forceCompositionEnd() }),
              he(i, "input", function() { t.composing || t.readFromDOMSoon() }),
              he(i, "copy", o), he(i, "cut", o)
        }, Il.prototype.prepareSelection = function() {
          var e = mn(this.cm, !1);
          return e.focus = this.cm.state.focused, e
        }, Il.prototype.showSelection = function(e, t) {
          e && this.cm.display.view.length &&
              ((e.focus || t) && this.showPrimarySelection(),
               this.showMultipleSelections(e))
        }, Il.prototype.getSelection = function() {
          return this.cm.display.wrapper.ownerDocument.getSelection()
        }, Il.prototype.showPrimarySelection = function() {
          var e = this.getSelection(), t = this.cm, n = t.doc.sel.primary(),
              i = n.from(), o = n.to();
          if (t.display.viewTo == t.display.viewFrom ||
              i.line >= t.display.viewTo || o.line < t.display.viewFrom)
            e.removeAllRanges();
          else {
            var l = Gl(t, e.anchorNode, e.anchorOffset),
                s = Gl(t, e.focusNode, e.focusOffset);
            if (!l || l.bad || !s || s.bad || 0 != rt(lt(l, s), i) ||
                0 != rt(ot(l, s), o)) {
              var a = t.display.view,
                  u = i.line >= t.display.viewFrom && Rl(t, i) ||
                      {node : a[0].measure.map[2], offset : 0},
                  c = o.line < t.display.viewTo && Rl(t, o);
              if (!c) {
                var f = a[a.length - 1].measure,
                    d = f.maps ? f.maps[f.maps.length - 1] : f.map;
                c = {
                  node : d[d.length - 1],
                  offset : d[d.length - 2] - d[d.length - 3]
                }
              }
              if (u && c) {
                var h, p = e.rangeCount && e.getRangeAt(0);
                try {
                  h = L(u.node, u.offset, c.offset, c.node)
                } catch (We) {
                }
                h &&
                    (!r && t.state.focused
                         ? (e.collapse(u.node, u.offset),
                            h.collapsed || (e.removeAllRanges(), e.addRange(h)))
                         : (e.removeAllRanges(), e.addRange(h)),
                     p && null == e.anchorNode ? e.addRange(p)
                                               : r && this.startGracePeriod()),
                    this.rememberSelection()
              } else
                e.removeAllRanges()
            }
          }
        }, Il.prototype.startGracePeriod = function() {
          var e = this;
          clearTimeout(this.gracePeriod),
              this.gracePeriod = setTimeout(function() {
                e.gracePeriod = !1,
                e.selectionChanged() &&
                    e.cm.operation(
                        function() { return e.cm.curOp.selectionChanged = !0 })
              }, 20)
        }, Il.prototype.showMultipleSelections = function(e) {
          O(this.cm.display.cursorDiv, e.cursors),
              O(this.cm.display.selectionDiv, e.selection)
        }, Il.prototype.rememberSelection = function() {
          var e = this.getSelection();
          this.lastAnchorNode = e.anchorNode,
          this.lastAnchorOffset = e.anchorOffset,
          this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
        }, Il.prototype.selectionInEditor = function() {
          var e = this.getSelection();
          if (!e.rangeCount)
            return !1;
          var t = e.getRangeAt(0).commonAncestorContainer;
          return W(this.div, t)
        }, Il.prototype.focus = function() {
          "nocursor" != this.cm.options.readOnly &&
              (this.selectionInEditor() ||
                   this.showSelection(this.prepareSelection(), !0),
               this.div.focus())
        }, Il.prototype.blur = function() {
          this.div.blur()
        }, Il.prototype.getField = function() {
          return this.div
        }, Il.prototype.supportsTouch = function() {
          return !0
        }, Il.prototype.receivedFocus = function() {
          var e = this;
          this.selectionInEditor()
              ? this.pollSelection()
              : Zn(this.cm,
                   function() { return e.cm.curOp.selectionChanged = !0 }),
              this.polling.set(this.cm.options.pollInterval, function t() {
                e.cm.state.focused &&
                    (e.pollSelection(),
                     e.polling.set(e.cm.options.pollInterval, t))
              })
        }, Il.prototype.selectionChanged = function() {
          var e = this.getSelection();
          return e.anchorNode != this.lastAnchorNode ||
                 e.anchorOffset != this.lastAnchorOffset ||
                 e.focusNode != this.lastFocusNode ||
                 e.focusOffset != this.lastFocusOffset
        }, Il.prototype.pollSelection = function() {
          if (null == this.readDOMTimeout && !this.gracePeriod &&
              this.selectionChanged()) {
            var e = this.getSelection(), t = this.cm;
            if (v && f && this.cm.display.gutterSpecs.length && function(e) {
                  for (var t = e; t; t = t.parentNode)
                    if (/CodeMirror-gutter-wrapper/.test(t.className))
                      return !0;
                  return !1
                }(e.anchorNode))
              return this.cm.triggerOnKeyDown({
                type : "keydown",
                keyCode : 8,
                preventDefault : Math.abs
              }),
                     this.blur(), void this.focus();
            if (!this.composing) {
              this.rememberSelection();
              var r = Gl(t, e.anchorNode, e.anchorOffset),
                  n = Gl(t, e.focusNode, e.focusOffset);
              r && n && Zn(t, function() {
                Zi(t.doc, Si(r, n), j),
                    (r.bad || n.bad) && (t.curOp.selectionChanged = !0)
              })
            }
          }
        }, Il.prototype.pollContent = function() {
          null != this.readDOMTimeout &&
              (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
          var e, t, r, n = this.cm, i = n.display, o = n.doc.sel.primary(),
                       l = o.from(), s = o.to();
          if (0 == l.ch && l.line > n.firstLine() &&
                  (l = tt(l.line - 1, _e(n.doc, l.line - 1).length)),
              s.ch == _e(n.doc, s.line).text.length && s.line < n.lastLine() &&
                  (s = tt(s.line + 1, 0)),
              l.line < i.viewFrom || s.line > i.viewTo - 1)
            return !1;
          l.line == i.viewFrom || 0 == (e = un(n, l.line))
              ? (t = Ze(i.view[0].line), r = i.view[0].node)
              : (t = Ze(i.view[e].line), r = i.view[e - 1].node.nextSibling);
          var a, u, c = un(n, s.line);
          if (c == i.view.length - 1
                  ? (a = i.viewTo - 1, u = i.lineDiv.lastChild)
                  : (a = Ze(i.view[c + 1].line) - 1,
                     u = i.view[c + 1].node.previousSibling),
              !r)
            return !1;
          for (var f = n.doc.splitLines(function(e, t, r, n, i) {
                 var o = "", l = !1, s = e.doc.lineSeparator(), a = !1;
                 function u() { l && (o += s, a && (o += s), l = a = !1) }
                 function c(e) { e && (u(), o += e) }
                 function f(t) {
                   if (1 == t.nodeType) {
                     var r = t.getAttribute("cm-text");
                     if (r)
                       return void c(r);
                     var o, d = t.getAttribute("cm-marker");
                     if (d) {
                       var h = e.findMarks(
                           tt(n, 0), tt(i + 1, 0),
                           (m = +d, function(e) { return e.id == m }));
                       return void (h.length && (o = h[0].find(0)) &&
                                    c(Ye(e.doc, o.from, o.to).join(s)))
                     }
                     if ("false" == t.getAttribute("contenteditable"))
                       return;
                     var p = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                     if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length)
                       return;
                     p && u();
                     for (var g = 0; g < t.childNodes.length; g++)
                       f(t.childNodes[g]);
                     /^(pre|p)$/i.test(t.nodeName) && (a = !0), p && (l = !0)
                   } else
                     3 == t.nodeType && c(t.nodeValue.replace(/\u200b/g, "")
                                              .replace(/\u00a0/g, " "));
                   var m
                 }
                 for (; f(t), t != r;)
                   t = t.nextSibling, a = !1;
                 return o
               }(n, r, u, t, a)),
                   d = Ye(n.doc, tt(t, 0), tt(a, _e(n.doc, a).text.length));
               f.length > 1 && d.length > 1;)
            if ($(f) == $(d))
              f.pop(), d.pop(), a--;
            else {
              if (f[0] != d[0])
                break;
              f.shift(), d.shift(), t++
            }
          for (var h = 0, p = 0, g = f[0], m = d[0],
                   v = Math.min(g.length, m.length);
               h < v && g.charCodeAt(h) == m.charCodeAt(h);)
            ++h;
          for (var y = $(f), b = $(d),
                   w = Math.min(y.length - (1 == f.length ? h : 0),
                                b.length - (1 == d.length ? h : 0));
               p < w && y.charCodeAt(y.length - p - 1) ==
                            b.charCodeAt(b.length - p - 1);)
            ++p;
          if (1 == f.length && 1 == d.length && t == l.line)
            for (; h && h > l.ch &&
                   y.charCodeAt(y.length - p - 1) ==
                       b.charCodeAt(b.length - p - 1);)
              h--, p++;
          f[f.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, ""),
                       f[0] = f[0].slice(h).replace(/\u200b+$/, "");
          var x = tt(t, h), C = tt(a, d.length ? $(d).length - p : 0);
          return f.length > 1 || f[0] || rt(x, C)
                     ? (ho(n.doc, f, x, C, "+input"), !0)
                     : void 0
        }, Il.prototype.ensurePolled = function() {
          this.forceCompositionEnd()
        }, Il.prototype.reset = function() {
          this.forceCompositionEnd()
        }, Il.prototype.forceCompositionEnd = function() {
          this.composing &&
              (clearTimeout(this.readDOMTimeout), this.composing = null,
               this.updateFromDOM(), this.div.blur(), this.div.focus())
        }, Il.prototype.readFromDOMSoon = function() {
          var e = this;
          null == this.readDOMTimeout &&
              (this.readDOMTimeout = setTimeout(function() {
                 if (e.readDOMTimeout = null, e.composing) {
                   if (!e.composing.done)
                     return;
                   e.composing = null
                 }
                 e.updateFromDOM()
               }, 80))
        }, Il.prototype.updateFromDOM = function() {
          var e = this;
          !this.cm.isReadOnly() && this.pollContent() ||
              Zn(this.cm, function() { return cn(e.cm) })
        }, Il.prototype.setUneditable = function(e) {
          e.contentEditable = "false"
        }, Il.prototype.onKeyPress = function(e) {
          0 == e.charCode || this.composing ||
              (e.preventDefault(),
               this.cm.isReadOnly() ||
                   Jn(this.cm,
                      Al)(this.cm,
                          String.fromCharCode(null == e.charCode ? e.keyCode
                                                                 : e.charCode),
                          0))
        }, Il.prototype.readOnlyChanged = function(e) {
          this.div.contentEditable = String("nocursor" != e)
        }, Il.prototype.onContextMenu = function() {
        }, Il.prototype.resetPosition = function() {
        }, Il.prototype.needsContentAttribute = !0;
        var Vl = function(e) {
          this.cm = e, this.prevInput = "", this.pollingFast = !1,
          this.polling = new B, this.hasSelection = !1, this.composing = null
        };
        Vl.prototype
            .init =
            function(e) {
          var t = this, r = this, n = this.cm;
          this.createField(e);
          var i = this.textarea;
          function o(e) {
            if (!ve(n, e)) {
              if (n.somethingSelected())
                Ol({lineWise : !1, text : n.getSelections()});
              else {
                if (!n.options.lineWiseCopyCut)
                  return;
                var t = Hl(n);
                Ol({lineWise : !0, text : t.text}),
                    "cut" == e.type ? n.setSelections(t.ranges, null, j)
                                    : (r.prevInput = "",
                                       i.value = t.text.join("\n"), P(i))
              }
              "cut" == e.type && (n.state.cutIncoming = +new Date)
            }
          }
          e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
              m && (i.style.width = "0px"),
              he(i, "input",
                 function() {
                   s && a >= 9 && t.hasSelection && (t.hasSelection = null),
                       r.poll()
                 }),
              he(i, "paste",
                 function(e) {
                   ve(n, e) || Dl(e, n) ||
                       (n.state.pasteIncoming = +new Date, r.fastPoll())
                 }),
              he(i, "cut", o), he(i, "copy", o),
              he(e.scroller, "paste",
                 function(t) {
                   if (!Cr(e, t) && !ve(n, t)) {
                     if (!i.dispatchEvent)
                       return n.state.pasteIncoming = +new Date, void r.focus();
                     var o = new Event("paste");
                     o.clipboardData = t.clipboardData, i.dispatchEvent(o)
                   }
                 }),
              he(e.lineSpace, "selectstart", function(t) { Cr(e, t) || xe(t) }),
              he(i, "compositionstart", function() {
                var e = n.getCursor("from");
                r.composing && r.composing.range.clear(), r.composing = {
                  start : e,
                  range : n.markText(e, n.getCursor("to"),
                                     {className : "CodeMirror-composing"})
                }
              }), he(i, "compositionend", function() {
                r.composing &&
                    (r.poll(), r.composing.range.clear(), r.composing = null)
              })
        },
            Vl.prototype
                .createField =
                function(e) {
              this.wrapper = Fl(), this.textarea = this.wrapper.firstChild
            },
    Vl.prototype.prepareSelection =
            function() {
      var e = this.cm, t = e.display, r = e.doc, n = mn(e);
      if (e.options.moveInputWithCursor) {
        var i = _r(e, r.sel.primary().head, "div"),
            o = t.wrapper.getBoundingClientRect(),
            l = t.lineDiv.getBoundingClientRect();
        n.teTop = Math.max(
            0, Math.min(t.wrapper.clientHeight - 10, i.top + l.top - o.top)),
        n.teLeft = Math.max(
            0, Math.min(t.wrapper.clientWidth - 10, i.left + l.left - o.left))
      }
      return n
    },
    Vl.prototype.showSelection =
            function(e) {
      var t = this.cm.display;
      O(t.cursorDiv, e.cursors), O(t.selectionDiv, e.selection),
          null != e.teTop && (this.wrapper.style.top = e.teTop + "px",
                              this.wrapper.style.left = e.teLeft + "px")
    },
    Vl.prototype.reset =
            function(e) {
      if (!this.contextMenuPending && !this.composing) {
        var t = this.cm;
        if (t.somethingSelected()) {
          this.prevInput = "";
          var r = t.getSelection();
          this.textarea.value = r, t.state.focused && P(this.textarea),
          s && a >= 9 && (this.hasSelection = r)
        } else
          e || (this.prevInput = this.textarea.value = "",
                s && a >= 9 && (this.hasSelection = null))
      }
    },
    Vl.prototype.getField = function() { return this.textarea },
    Vl.prototype.supportsTouch = function() { return !1 },
    Vl.prototype.focus =
            function() {
      if ("nocursor" != this.cm.options.readOnly &&
          (!y || H() != this.textarea))
        try {
          this.textarea.focus()
        } catch (We) {
        }
    },
    Vl.prototype.blur = function() { this.textarea.blur() },
    Vl.prototype.resetPosition =
            function() { this.wrapper.style.top = this.wrapper.style.left = 0 },
    Vl.prototype.receivedFocus = function() { this.slowPoll() },
    Vl.prototype.slowPoll = function() {
      var e = this;
      this.pollingFast ||
          this.polling.set(
              this.cm.options.pollInterval,
              function() { e.poll(), e.cm.state.focused && e.slowPoll() })
    }, Vl.prototype.fastPoll = function() {
      var e = !1, t = this;
      t.pollingFast = !0, t.polling.set(20, function r() {
        t.poll() || e ? (t.pollingFast = !1, t.slowPoll())
                      : (e = !0, t.polling.set(60, r))
      })
    }, Vl.prototype.poll = function() {
      var e = this, t = this.cm, r = this.textarea, n = this.prevInput;
      if (this.contextMenuPending || !t.state.focused ||
          ze(r) && !n && !this.composing || t.isReadOnly() ||
          t.options.disableInput || t.state.keySeq)
        return !1;
      var i = r.value;
      if (i == n && !t.somethingSelected())
        return !1;
      if (s && a >= 9 && this.hasSelection === i ||
          b && /[\uf700-\uf7ff]/.test(i))
        return t.display.input.reset(), !1;
      if (t.doc.sel == t.display.selForContextMenu) {
        var o = i.charCodeAt(0);
        if (8203 != o || n || (n = "​"), 8666 == o)
          return this.reset(), this.cm.execCommand("undo")
      }
      for (var l = 0, u = Math.min(n.length, i.length);
           l < u && n.charCodeAt(l) == i.charCodeAt(l);)
        ++l;
      return Zn(t, function() {
               Al(t, i.slice(l), n.length - l, null,
                  e.composing ? "*compose" : null),
                   i.length > 1e3 || i.indexOf("\n") > -1
                       ? r.value = e.prevInput = ""
                       : e.prevInput = i,
                         e.composing &&
                             (e.composing.range.clear(),
                              e.composing.range = t.markText(
                                  e.composing.start, t.getCursor("to"),
                                  {className : "CodeMirror-composing"}))
             }), !0
    }, Vl.prototype.ensurePolled = function() {
      this.pollingFast && this.poll() && (this.pollingFast = !1)
    }, Vl.prototype.onKeyPress = function() {
      s && a >= 9 && (this.hasSelection = null), this.fastPoll()
    }, Vl.prototype.onContextMenu = function(e) {
      var t = this, r = t.cm, n = r.display, i = t.textarea;
      t.contextMenuPending && t.contextMenuPending();
      var o = an(r, e), l = n.scroller.scrollTop;
      if (o && !d) {
        r.options.resetSelectionOnContextMenu && -1 == r.doc.sel.contains(o) &&
            Jn(r, Zi)(r.doc, Si(o), j);
        var c, f = i.style.cssText, h = t.wrapper.style.cssText,
               p = t.wrapper.offsetParent.getBoundingClientRect();
        if (t.wrapper.style.cssText = "position: static",
            i.style.cssText =
                "position: absolute; width: 30px; height: 30px;\n      top: " +
                (e.clientY - p.top - 5) +
                "px; left: " + (e.clientX - p.left - 5) +
                "px;\n      z-index: 1000; background: " +
                (s ? "rgba(255, 255, 255, .05)" : "transparent") +
                ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",
            u && (c = window.scrollY), n.input.focus(),
            u && window.scrollTo(null, c), n.input.reset(),
            r.somethingSelected() || (i.value = t.prevInput = " "),
            t.contextMenuPending = m, n.selForContextMenu = r.doc.sel,
            clearTimeout(n.detectingSelectAll), s && a >= 9 && g(), k) {
          ke(e);
          he(window, "mouseup",
             function e() { ge(window, "mouseup", e), setTimeout(m, 20) })
        } else
          setTimeout(m, 50)
      }
      function g() {
        if (null != i.selectionStart) {
          var e = r.somethingSelected(), o = "​" + (e ? i.value : "");
          i.value = "⇚", i.value = o, t.prevInput = e ? "" : "​",
          i.selectionStart = 1, i.selectionEnd = o.length,
          n.selForContextMenu = r.doc.sel
        }
      }
      function m() {
        if (t.contextMenuPending == m &&
            (t.contextMenuPending = !1, t.wrapper.style.cssText = h,
             i.style.cssText = f,
             s && a < 9 && n.scrollbars.setScrollTop(n.scroller.scrollTop = l),
             null != i.selectionStart)) {
          (!s || s && a < 9) && g();
          var e = 0;
          n.detectingSelectAll = setTimeout(function o() {
            n.selForContextMenu == r.doc.sel && 0 == i.selectionStart &&
                    i.selectionEnd > 0 && "​" == t.prevInput
                ? Jn(r, oo)(r)
                : e++ < 10 ? n.detectingSelectAll = setTimeout(o, 500)
                           : (n.selForContextMenu = null, n.input.reset())
          }, 200)
        }
      }
    }, Vl.prototype.readOnlyChanged = function(e) {
      e || this.reset(), this.textarea.disabled = "nocursor" == e
    }, Vl.prototype.setUneditable = function() {
    }, Vl.prototype.needsContentAttribute = !1, function(e) {
      var t = e.optionHandlers;
      function r(r, n, i, o) {
        e.defaults[r] = n,
        i && (t[r] = o ? function(e, t, r) { r != wl && i(e, t, r) } : i)
      }
      e.defineOption = r, e.Init = wl,
      r("value", "", function(e, t) { return e.setValue(t) }, !0),
      r("mode", null, function(e, t) { e.doc.modeOption = t, Ni(e) }, !0),
      r("indentUnit", 2, Ni, !0), r("indentWithTabs", !1), r("smartIndent", !0),
      r("tabSize", 4, function(e) { Oi(e), Br(e), cn(e) }, !0),
      r("lineSeparator", null,
        function(e, t) {
          if (e.doc.lineSep = t, t) {
            var r = [], n = e.doc.first;
            e.doc.iter(function(e) {
              for (var i = 0;;) {
                var o = e.text.indexOf(t, i);
                if (-1 == o)
                  break;
                i = o + t.length, r.push(tt(n, o))
              }
              n++
            });
            for (var i = r.length - 1; i >= 0; i--)
              ho(e.doc, t, r[i], tt(r[i].line, r[i].ch + t.length))
          }
        }),
      r("specialChars",
        /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,
        function(e, t, r) {
          e.state.specialChars =
              new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"),
          r != wl && e.refresh()
        }),
      r("specialCharPlaceholder", Qt, function(e) { return e.refresh() }, !0),
      r("electricChars", !0),
      r("inputStyle", y ? "contenteditable" : "textarea",
        function() {
          throw new Error(
              "inputStyle can not (yet) be changed in a running editor")
        },
        !0),
      r("spellcheck", !1,
        function(e, t) { return e.getInputField().spellcheck = t }, !0),
      r("autocorrect", !1,
        function(e, t) { return e.getInputField().autocorrect = t }, !0),
      r("autocapitalize", !1,
        function(e, t) { return e.getInputField().autocapitalize = t }, !0),
      r("rtlMoveVisually", !x), r("wholeLineUpdateBefore", !0),
      r("theme", "default", function(e) { bl(e), hi(e) }, !0),
      r("keyMap", "default",
        function(e, t, r) {
          var n = Yo(t), i = r != wl && Yo(r);
          i && i.detach && i.detach(e, n), n.attach && n.attach(e, i || null)
        }),
      r("extraKeys", null), r("configureMouse", null),
      r("lineWrapping", !1, kl, !0),
      r("gutters", [],
        function(
            e,
            t) { e.display.gutterSpecs = fi(t, e.options.lineNumbers), hi(e) },
        !0),
      r("fixedGutter", !0,
        function(e, t) {
          e.display.gutters.style.left = t ? on(e.display) + "px" : "0",
          e.refresh()
        },
        !0),
      r("coverGutterNextToScrollbar", !1, function(e) { return Bn(e) }, !0),
      r("scrollbarStyle", "native",
        function(e) {
          Vn(e), Bn(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop),
              e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
        },
        !0),
      r("lineNumbers", !1,
        function(e,
                 t) { e.display.gutterSpecs = fi(e.options.gutters, t), hi(e) },
        !0),
      r("firstLineNumber", 1, hi, !0),
      r("lineNumberFormatter", function(e) { return e }, hi, !0),
      r("showCursorWhenSelecting", !1, gn, !0),
      r("resetSelectionOnContextMenu", !0), r("lineWiseCopyCut", !0),
      r("pasteLinesPerSelection", !0), r("selectionsMayTouch", !1),
      r("readOnly", !1,
        function(e, t) {
          "nocursor" == t && (kn(e), e.display.input.blur()),
              e.display.input.readOnlyChanged(t)
        }),
      r("disableInput", !1, function(e, t) { t || e.display.input.reset() },
        !0),
      r("dragDrop", !0, Sl), r("allowDropFileTypes", null),
      r("cursorBlinkRate", 530), r("cursorScrollMargin", 0),
      r("cursorHeight", 1, gn, !0), r("singleCursorHeightPerLine", !0, gn, !0),
      r("workTime", 100), r("workDelay", 100), r("flattenSpans", !0, Oi, !0),
      r("addModeClass", !1, Oi, !0), r("pollInterval", 100),
      r("undoDepth", 200,
        function(e, t) { return e.doc.history.undoDepth = t }),
      r("historyEventDelay", 1250),
      r("viewportMargin", 10, function(e) { return e.refresh() }, !0),
      r("maxHighlightLength", 1e4, Oi, !0),
      r("moveInputWithCursor", !0,
        function(e, t) { t || e.display.input.resetPosition() }),
      r("tabindex", null,
        function(e,
                 t) { return e.display.input.getField().tabIndex = t || "" }),
      r("autofocus", null),
      r("direction", "ltr", function(e, t) { return e.doc.setDirection(t) },
        !0),
      r("phrases", null)
    }(Ml), function(e) {
      var t = e.optionHandlers, r = e.helpers = {};
      e.prototype = {
        constructor : e,
        focus : function() { window.focus(), this.display.input.focus() },
        setOption : function(e, r) {
          var n = this.options, i = n[e];
          n[e] == r && "mode" != e ||
              (n[e] = r, t.hasOwnProperty(e) && Jn(this, t[e])(this, r, i),
               me(this, "optionChange", this, e))
        },
        getOption : function(e) { return this.options[e] },
        getDoc : function() { return this.doc },
        addKeyMap : function(
            e, t) { this.state.keyMaps[t ? "push" : "unshift"](Yo(e)) },
        removeKeyMap : function(e) {
          for (var t = this.state.keyMaps, r = 0; r < t.length; ++r)
            if (t[r] == e || t[r].name == e)
              return t.splice(r, 1), !0
        },
        addOverlay : Qn(function(t, r) {
          var n = t.token ? t : e.getMode(this.options, t);
          if (n.startState)
            throw new Error("Overlays may not be stateful.");
          !function(e, t, r) {
            for (var n = 0, i = r(t); n < e.length && r(e[n]) <= i;)
              n++;
            e.splice(n, 0, t)
          }(this.state.overlays, {
            mode : n,
            modeSpec : t,
            opaque : r && r.opaque,
            priority : r && r.priority || 0
          },
            function(e) { return e.priority }),
              this.state.modeGen++, cn(this)
        }),
        removeOverlay : Qn(function(e) {
          for (var t = this.state.overlays, r = 0; r < t.length; ++r) {
            var n = t[r].modeSpec;
            if (n == e || "string" == typeof e && n.name == e)
              return t.splice(r, 1), this.state.modeGen++, void cn(this)
          }
        }),
        indentLine : Qn(function(e, t, r) {
          "string" != typeof t && "number" != typeof t &&
              (t = null == t ? this.options.smartIndent ? "smart" : "prev"
                             : t ? "add" : "subtract"),
              Qe(this.doc, e) && Tl(this, e, t, r)
        }),
        indentSelection : Qn(function(e) {
          for (var t = this.doc.sel.ranges, r = -1, n = 0; n < t.length; n++) {
            var i = t[n];
            if (i.empty())
              i.head.line > r && (Tl(this, i.head.line, e, !0), r = i.head.line,
                                  n == this.doc.sel.primIndex && An(this));
            else {
              var o = i.from(), l = i.to(), s = Math.max(r, o.line);
              r = Math.min(this.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;
              for (var a = s; a < r; ++a)
                Tl(this, a, e);
              var u = this.doc.sel.ranges;
              0 == o.ch && t.length == u.length && u[n].from().ch > 0 &&
                  Yi(this.doc, n, new xi(o, u[n].to()), j)
            }
          }
        }),
        getTokenAt : function(e, t) { return bt(this, e, t) },
        getLineTokens : function(e, t) { return bt(this, tt(e), t, !0) },
        getTokenTypeAt : function(e) {
          e = at(this.doc, e);
          var t, r = ht(this, _e(this.doc, e.line)), n = 0,
                 i = (r.length - 1) / 2, o = e.ch;
          if (0 == o)
            t = r[2];
          else
            for (;;) {
              var l = n + i >> 1;
              if ((l ? r[2 * l - 1] : 0) >= o)
                i = l;
              else {
                if (!(r[2 * l + 1] < o)) {
                  t = r[2 * l + 2];
                  break
                }
                n = l + 1
              }
            }
          var s = t ? t.indexOf("overlay ") : -1;
          return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1)
        },
        getModeAt : function(t) {
          var r = this.doc.mode;
          return r.innerMode ? e.innerMode(r, this.getTokenAt(t).state).mode : r
        },
        getHelper : function(e, t) { return this.getHelpers(e, t)[0] },
        getHelpers : function(e, t) {
          var n = [];
          if (!r.hasOwnProperty(t))
            return n;
          var i = r[t], o = this.getModeAt(e);
          if ("string" == typeof o[t])
            i[o[t]] && n.push(i[o[t]]);
          else if (o[t])
            for (var l = 0; l < o[t].length; l++) {
              var s = i[o[t][l]];
              s && n.push(s)
            }
          else
            o.helperType && i[o.helperType] ? n.push(i[o.helperType])
                                            : i[o.name] && n.push(i[o.name]);
          for (var a = 0; a < i._global.length; a++) {
            var u = i._global[a];
            u.pred(o, this) && -1 == G(n, u.val) && n.push(u.val)
          }
          return n
        },
        getStateAfter : function(e, t) {
          var r = this.doc;
          return pt(this, (e = st(r, null == e ? r.first + r.size - 1 : e)) + 1,
                    t)
              .state
        },
        cursorCoords : function(e, t) {
          var r = this.doc.sel.primary();
          return _r(this,
                    null == e ? r.head
                              : "object" == l(e) ? at(this.doc, e)
                                                 : e ? r.from() : r.to(),
                    t || "page")
        },
        charCoords : function(
            e, t) { return Xr(this, at(this.doc, e), t || "page") },
        coordsChar : function(
            e,
            t) { return $r(this, (e = Kr(this, e, t || "page")).left, e.top) },
        lineAtHeight : function(e, t) {
          return e = Kr(this, {top : e, left : 0}, t || "page").top,
                 Je(this.doc, e + this.display.viewOffset)
        },
        heightAtLine : function(e, t, r) {
          var n, i = !1;
          if ("number" == typeof e) {
            var o = this.doc.first + this.doc.size - 1;
            e<this.doc.first ? e = this.doc.first : e>o && (e = o, i = !0),
                n = _e(this.doc, e)
          } else
            n = e;
          return jr(this, n, {top : 0, left : 0}, t || "page", r || i).top +
                 (i ? this.doc.height - jt(n) : 0)
        },
        defaultTextHeight : function() { return tn(this.display) },
        defaultCharWidth : function() { return rn(this.display) },
        getViewport : function() {
          return { from: this.display.viewFrom, to: this.display.viewTo }
        },
        addWidget : function(e, t, r, n, i) {
          var o, l, s, a = this.display,
                       u = (e = _r(this, at(this.doc, e))).bottom, c = e.left;
          if (t.style.position = "absolute",
              t.setAttribute("cm-ignore-events", "true"),
              this.display.input.setUneditable(t), a.sizer.appendChild(t),
              "over" == n)
            u = e.top;
          else if ("above" == n || "near" == n) {
            var f = Math.max(a.wrapper.clientHeight, this.doc.height),
                d = Math.max(a.sizer.clientWidth, a.lineSpace.clientWidth);
            ("above" == n || e.bottom + t.offsetHeight > f) &&e.top >
                    t.offsetHeight
                ? u = e.top - t.offsetHeight
                : e.bottom + t.offsetHeight <= f && (u = e.bottom),
                  c + t.offsetWidth > d && (c = d - t.offsetWidth)
          }
          t.style.top = u + "px", t.style.left = t.style.right = "",
          "right" == i
              ? (c = a.sizer.clientWidth - t.offsetWidth, t.style.right = "0px")
              : ("left" == i
                     ? c = 0
                     : "middle" == i &&
                           (c = (a.sizer.clientWidth - t.offsetWidth) / 2),
                 t.style.left = c + "px"),
          r && (o = this, l = {
            left : c,
            top : u,
            right : c + t.offsetWidth,
            bottom : u + t.offsetHeight
          },
                null != (s = Nn(o, l)).scrollTop && zn(o, s.scrollTop),
                null != s.scrollLeft && Pn(o, s.scrollLeft))
        },
        triggerOnKeyDown : Qn(al),
        triggerOnKeyPress : Qn(cl),
        triggerOnKeyUp : ul,
        triggerOnMouseDown : Qn(pl),
        execCommand : function(e) {
          if (Qo.hasOwnProperty(e))
            return Qo[e].call(null, this)
        },
        triggerElectric : Qn(function(e) { Wl(this, e) }),
        findPosH : function(e, t, r, n) {
          var i = 1;
          t < 0 && (i = -1, t = -t);
          for (var o = at(this.doc, e), l = 0;
               l < t && !(o = Pl(this.doc, o, i, r, n)).hitSide; ++l)
            ;
          return o
        },
        moveH : Qn(function(e, t) {
          var r = this;
          this.extendSelectionsBy(function(n) {
            return r.display.shift || r.doc.extend || n.empty()
                       ? Pl(r.doc, n.head, e, t, r.options.rtlMoveVisually)
                       : e < 0 ? n.from() : n.to()
          }, X)
        }),
        deleteH : Qn(function(e, t) {
          var r = this.doc.sel, n = this.doc;
          r.somethingSelected() ? n.replaceSelection("", null, "+delete")
                                : qo(this, function(r) {
                                    var i = Pl(n, r.head, e, t, !1);
                                    return e < 0 ? {from : i, to : r.head}
                                                 : {from : r.head, to : i}
                                  })
        }),
        findPosV : function(e, t, r, n) {
          var i = 1, o = n;
          t < 0 && (i = -1, t = -t);
          for (var l = at(this.doc, e), s = 0; s < t; ++s) {
            var a = _r(this, l, "div");
            if (null == o ? o = a.left : a.left = o,
                (l = El(this, a, i, r)).hitSide)
              break
          }
          return l
        },
        moveV : Qn(function(e, t) {
          var r = this, n = this.doc, i = [],
              o = !this.display.shift && !n.extend && n.sel.somethingSelected();
          if (n.extendSelectionsBy(function(l) {
                if (o)
                  return e < 0 ? l.from() : l.to();
                var s = _r(r, l.head, "div");
                null != l.goalColumn && (s.left = l.goalColumn), i.push(s.left);
                var a = El(r, s, e, t);
                return "page" == t && l == n.sel.primary() &&
                           On(r, Xr(r, a, "div").top - s.top),
                       a
              }, X), i.length)
            for (var l = 0; l < n.sel.ranges.length; l++)
              n.sel.ranges[l].goalColumn = i[l]
        }),
        findWordAt : function(e) {
          var t = _e(this.doc, e.line).text, r = e.ch, n = e.ch;
          if (t) {
            var i = this.getHelper(e, "wordChars");
            "before" != e.sticky && n != t.length || !r ? ++n : --r;
            for (var o = t.charAt(r),
                     l = re(o, i)
                             ? function(e) { return re(e, i) }
                             : /\s/.test(o)
                                   ? function(e) { return /\s/.test(e) }
                                   : function(
                                         e) { return !/\s/.test(e) && !re(e) };
                 r > 0 && l(t.charAt(r - 1));)
              --r;
            for (; n < t.length && l(t.charAt(n));)
              ++n
          }
          return new xi(tt(e.line, r), tt(e.line, n))
        },
        toggleOverwrite : function(e) {
          null != e && e == this.state.overwrite ||
              ((this.state.overwrite = !this.state.overwrite)
                   ? z(this.display.cursorDiv, "CodeMirror-overwrite")
                   : T(this.display.cursorDiv, "CodeMirror-overwrite"),
               me(this, "overwriteToggle", this, this.state.overwrite))
        },
        hasFocus : function() { return this.display.input.getField() == H() },
        isReadOnly : function() {
          return !(!this.options.readOnly && !this.doc.cantEdit)
        },
        scrollTo : Qn(function(e, t) { Dn(this, e, t) }),
        getScrollInfo : function() {
          var e = this.display.scroller;
          return {
            left: e.scrollLeft, top: e.scrollTop,
                height: e.scrollHeight - Lr(this) - this.display.barHeight,
                width: e.scrollWidth - Lr(this) - this.display.barWidth,
                clientHeight: Nr(this), clientWidth: Tr(this)
          }
        },
        scrollIntoView : Qn(function(e, t) {
          null == e
              ? (e = {from : this.doc.sel.primary().head, to : null},
                 null == t && (t = this.options.cursorScrollMargin))
              : "number" == typeof e
                    ? e = {from : tt(e, 0), to : null}
                    : null == e.from && (e = {from : e, to : null}),
                      e.to || (e.to = e.from), e.margin = t || 0,
                      null != e.from.line
                          ? function(e, t) { Wn(e), e.curOp.scrollToPos = t }(
                                this, e)
                          : Hn(this, e.from, e.to, e.margin)
        }),
        setSize : Qn(function(e, t) {
          var r = this, n = function(e) {
            return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px"
                                                                   : e
          };
          null != e && (this.display.wrapper.style.width = n(e)),
              null != t && (this.display.wrapper.style.height = n(t)),
              this.options.lineWrapping && Rr(this);
          var i = this.display.viewFrom;
          this.doc.iter(i, this.display.viewTo, function(e) {
            if (e.widgets)
              for (var t = 0; t < e.widgets.length; t++)
                if (e.widgets[t].noHScroll) {
                  fn(r, i, "widget");
                  break
                }
            ++i
          }), this.curOp.forceUpdate = !0, me(this, "refresh", this)
        }),
        operation : function(e) { return Zn(this, e) },
        startOperation : function() { return Kn(this) },
        endOperation : function() { return Xn(this) },
        refresh : Qn(function() {
          var e = this.display.cachedTextHeight;
          cn(this),
              this.curOp.forceUpdate = !0, Br(this),
              Dn(this, this.doc.scrollLeft, this.doc.scrollTop),
              si(this.display),
              (null == e || Math.abs(e - tn(this.display)) > .5) && sn(this),
              me(this, "refresh", this)
        }),
        swapDoc : Qn(function(e) {
          var t = this.doc;
          return t.cm = null,
                 this.state.selectingText && this.state.selectingText(),
                 Hi(this, e), Br(this), this.display.input.reset(),
                 Dn(this, e.scrollLeft, e.scrollTop),
                 this.curOp.forceScroll = !0, ar(this, "swapDoc", this, t), t
        }),
        phrase : function(e) {
          var t = this.options.phrases;
          return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e
        },
        getInputField : function() { return this.display.input.getField() },
        getWrapperElement : function() { return this.display.wrapper },
        getScrollerElement : function() { return this.display.scroller },
        getGutterElement : function() { return this.display.gutters }
      },
      we(e), e.registerHelper = function(t, n, i) {
        r.hasOwnProperty(t) || (r[t] = e[t] = {_global : []}), r[t][n] = i
      }, e.registerGlobalHelper = function(t, n, i, o) {
        e.registerHelper(t, n, o), r[t]._global.push({pred : i, val : o})
      }
    }(Ml);
        var jl = "iter insert remove copy getEditor constructor".split(" ");
        for (var Kl in Oo.prototype)
          Oo.prototype.hasOwnProperty(Kl) && G(jl, Kl) < 0 &&
              (Ml.prototype[Kl] =
                   function(e) {
                     return function() { return e.apply(this.doc, arguments) }
                   }(Oo.prototype[Kl]));
        return we(Oo),
               Ml.inputStyles = {textarea : Vl, contenteditable : Il},
               Ml.defineMode =
                   function(e) {
                 Ml.defaults.mode || "null" == e || (Ml.defaults.mode = e),
                     function(e, t) {
                       arguments.length > 2 &&
                           (t.dependencies =
                                Array.prototype.slice.call(arguments, 2)),
                           Ee[e] = t
                     }.apply(this, arguments)
               },
               Ml.defineMIME = function(e, t) { Ie[e] = t },
               Ml.defineMode("null",
                             function() {
                               return {
                                 token: function(e) { return e.skipToEnd() }
                               }
                             }),
               Ml.defineMIME("text/plain", "null"),
               Ml.defineExtension = function(e, t) { Ml.prototype[e] = t },
               Ml.defineDocExtension = function(e, t) { Oo.prototype[e] = t },
               Ml.fromTextArea = function(e, t) {
                 if ((t = t ? I(t) : {}).value = e.value,
                     !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
                     !t.placeholder && e.placeholder &&
                         (t.placeholder = e.placeholder),
                     null == t.autofocus) {
                   var r = H();
                   t.autofocus =
                       r == e ||
                       null != e.getAttribute("autofocus") && r == document.body
                 }
                 function n() { e.value = s.getValue() }
                 var i;
                 if (e.form &&
                     (he(e.form, "submit", n), !t.leaveSubmitMethodAlone)) {
                   var o = e.form;
                   i = o.submit;
                   try {
                     var l = o.submit = function() {
                       n(), o.submit = i, o.submit(), o.submit = l
                     }
                   } catch (We) {
                   }
                 }
                 t.finishInit = function(r) {
                   r.save = n, r.getTextArea = function() { return e },
                   r.toTextArea = function() {
                     r.toTextArea = isNaN, n(),
                     e.parentNode.removeChild(r.getWrapperElement()),
                     e.style.display = "",
                     e.form && (ge(e.form, "submit", n),
                                t.leaveSubmitMethodAlone ||
                                    "function" != typeof e.form.submit ||
                                    (e.form.submit = i))
                   }
                 }, e.style.display = "none";
                 var s = Ml(function(t) {
                   return e.parentNode.insertBefore(t, e.nextSibling)
                 }, t);
                 return s
               }, function(e) {
                 e.off = ge, e.on = he, e.wheelEventPixels = yi, e.Doc = Oo,
                 e.splitLines = He, e.countColumn = R, e.findColumn = _,
                 e.isWordChar = te, e.Pass = V, e.signal = me, e.Line = _t,
                 e.changeEnd = ki, e.scrollbarModel = Un, e.Pos = tt,
                 e.cmpPos = rt, e.modes = Ee, e.mimeModes = Ie,
                 e.resolveMode = Re, e.getMode = Be, e.modeExtensions = Ge,
                 e.extendMode = Ue, e.copyState = Ve, e.startState = Ke,
                 e.innerMode = je, e.commands = Qo, e.keyMap = Go,
                 e.keyName = _o, e.isModifierKey = Ko, e.lookupKey = jo,
                 e.normalizeKeyMap = Vo, e.StringStream = Xe,
                 e.SharedTextMarker = Mo, e.TextMarker = So, e.LineWidget = wo,
                 e.e_preventDefault = xe, e.e_stopPropagation = Ce,
                 e.e_stop = ke, e.addClass = z, e.contains = W, e.rmClass = T,
                 e.keyNames = Eo
               }(Ml), Ml.version = "5.49.0", Ml
      },
      "object" === l(t) &&void 0 !== e
          ? e.exports = o()
          : void 0 === (i = "function" == typeof (n = o) ? n.call(t, r, t, e)
                                                         : n) ||
                (e.exports = i)
    }
  }
]);
//# sourceMappingURL=chunk.8527374a266cecf93aa9.js.map