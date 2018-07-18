webpackJsonp(
  [0],
  Array(75).concat([
    function(e, r, t) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 });
      var n = t(0),
        o = ((function(e) {
          if (e && e.__esModule) return e;
          var r = {};
          if (null != e)
            for (var t in e)
              Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
          r.default = e;
        })(n),
        t(12)),
        i = t(245),
        a = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(i);
      r.default = (0, o.withRouteData)(a.default);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, r, t) {
      'use strict';
      function n(e) {
        return i.test('number' == typeof e ? o(e) : e.charAt(0));
      }
      e.exports = n;
      var o = String.fromCharCode,
        i = /\s/;
    },
    function(e, r) {
      function t() {
        for (var e = {}, r = 0; r < arguments.length; r++) {
          var t = arguments[r];
          for (var o in t) n.call(t, o) && (e[o] = t[o]);
        }
        return e;
      }
      e.exports = t;
      var n = Object.prototype.hasOwnProperty;
    },
    function(e, r) {
      function t(e) {
        return e.replace(/^\s*|\s*$/g, '');
      }
      (r = e.exports = t),
        (r.left = function(e) {
          return e.replace(/^\s*/, '');
        }),
        (r.right = function(e) {
          return e.replace(/\s*$/, '');
        });
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        var r = 'string' == typeof e ? e.charCodeAt(0) : e;
        return r >= 48 && r <= 57;
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t, n) {
        function l(e, n, i) {
          var l;
          return (
            (n = n || (i ? 0 : null)),
            (r && e.type !== r && !o(r, e, n, i || null)) ||
              (l = t(e, n, i || null)),
            l === c
              ? l
              : e.children && l !== a && s(e.children, e) === c
                ? c
                : l
          );
        }
        function s(e, r) {
          for (
            var t, o, a = n ? -1 : 1, s = (n ? e.length : -1) + a;
            s > -1 && s < e.length;

          ) {
            if (((t = e[s]), (o = t && l(t, s, r)) === c)) return o;
            s = 'number' == typeof o ? o : s + a;
          }
          return i;
        }
        'function' == typeof r &&
          'function' != typeof t &&
          ((n = t), (t = r), (r = null)),
          l(e);
      }
      e.exports = n;
      var o = t(277),
        i = !0,
        a = 'skip',
        c = !1;
      (n.CONTINUE = i), (n.SKIP = a), (n.EXIT = c);
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        var t,
          n,
          i = {};
        r || (r = {});
        for (n in m) (t = r[n]), (i[n] = null === t || void 0 === t ? m[n] : t);
        return (
          (i.position.indent || i.position.start) &&
            ((i.indent = i.position.indent || []),
            (i.position = i.position.start)),
          o(e, i)
        );
      }
      function o(e, r) {
        function t() {
          return { line: ae, column: ie, offset: ne + (ee.offset || 0) };
        }
        function n(e, r) {
          var n = t();
          (n.column += r), (n.offset += r), Y.call(W, S[e], n, e);
        }
        function o(r) {
          return e.charAt(r);
        }
        function u() {
          ce &&
            (le.push(ce),
            J && J.call(K, ce, { start: V, end: t() }),
            (ce = ''));
        }
        var f,
          m,
          N,
          T,
          D,
          C,
          R,
          P,
          U,
          I,
          B,
          _,
          H,
          z,
          V,
          G,
          F,
          M,
          Z = r.additional,
          $ = r.nonTerminated,
          J = r.text,
          Q = r.reference,
          Y = r.warning,
          K = r.textContext,
          X = r.referenceContext,
          W = r.warningContext,
          ee = r.position,
          re = r.indent || [],
          te = e.length,
          ne = 0,
          oe = -1,
          ie = ee.column || 1,
          ae = ee.line || 1,
          ce = '',
          le = [];
        for (V = t(), R = Y ? n : g, ne--, te++; ++ne < te; )
          if (('\n' === T && (ie = re[oe] || 1), '&' !== (T = o(ne))))
            '\n' === T && (ae++, oe++, (ie = 0)), T ? ((ce += T), ie++) : u();
          else {
            if (
              '\t' === (C = o(ne + 1)) ||
              '\n' === C ||
              '\f' === C ||
              ' ' === C ||
              '<' === C ||
              '&' === C ||
              '' === C ||
              (Z && C === Z)
            ) {
              (ce += T), ie++;
              continue;
            }
            for (
              _ = ne + 1,
                B = _,
                M = _,
                '#' !== C
                  ? (H = v)
                  : ((M = ++B),
                    (C = o(M)),
                    'x' === C || 'X' === C ? ((H = b), (M = ++B)) : (H = y)),
                f = '',
                I = '',
                N = '',
                z = A[H],
                M--;
              ++M < te && ((C = o(M)), z(C));

            )
              (N += C), H === v && d.call(l, N) && ((f = N), (I = l[N]));
            (m = ';' === o(M)),
              m && (M++, H === v && d.call(c, N) && ((f = N), (I = c[N]))),
              (F = 1 + M - _),
              (m || $) &&
                (N
                  ? H === v
                    ? (m && !I
                        ? R(O, 1)
                        : (f !== N &&
                            ((M = B + f.length), (F = 1 + M - B), (m = !1)),
                          m ||
                            ((P = f ? k : q),
                            r.attribute
                              ? ((C = o(M)),
                                '=' === C
                                  ? (R(P, F), (I = null))
                                  : p(C)
                                    ? (I = null)
                                    : R(P, F))
                              : R(P, F))),
                      (D = I))
                    : (m || R(x, F),
                      (D = parseInt(N, w[H])),
                      i(D)
                        ? (R(j, F), (D = '�'))
                        : D in s
                          ? (R(L, F), (D = s[D]))
                          : ((U = ''),
                            a(D) && R(L, F),
                            D > 65535 &&
                              ((D -= 65536),
                              (U += h((D >>> 10) | 55296)),
                              (D = 56320 | (1023 & D))),
                            (D = U + h(D))))
                  : H !== v && R(E, F)),
              D
                ? (u(),
                  (V = t()),
                  (ne = M - 1),
                  (ie += M - _ + 1),
                  le.push(D),
                  (G = t()),
                  G.offset++,
                  Q && Q.call(X, D, { start: V, end: G }, e.slice(_ - 1, M)),
                  (V = G))
                : ((N = e.slice(_ - 1, M)),
                  (ce += N),
                  (ie += N.length),
                  (ne = M - 1));
          }
        return le.join('');
      }
      function i(e) {
        return (e >= 55296 && e <= 57343) || e > 1114111;
      }
      function a(e) {
        return (
          (e >= 1 && e <= 8) ||
          11 === e ||
          (e >= 13 && e <= 31) ||
          (e >= 127 && e <= 159) ||
          (e >= 64976 && e <= 65007) ||
          65535 == (65535 & e) ||
          65534 == (65535 & e)
        );
      }
      var c = t(266),
        l = t(267),
        s = t(268),
        u = t(226),
        f = t(269),
        p = t(270);
      e.exports = n;
      var d = {}.hasOwnProperty,
        h = String.fromCharCode,
        g = Function.prototype,
        m = {
          warning: null,
          reference: null,
          text: null,
          warningContext: null,
          referenceContext: null,
          textContext: null,
          position: {},
          additional: null,
          attribute: !1,
          nonTerminated: !0,
        },
        v = 'named',
        b = 'hexadecimal',
        y = 'decimal',
        w = {};
      (w[b] = 16), (w[y] = 10);
      var A = {};
      (A[v] = p), (A[y] = u), (A[b] = f);
      var k = 1,
        x = 2,
        q = 3,
        E = 4,
        O = 5,
        L = 6,
        j = 7,
        S = {};
      (S[k] = 'Named character references must be terminated by a semicolon'),
        (S[x] =
          'Numeric character references must be terminated by a semicolon'),
        (S[q] = 'Named character references cannot be empty'),
        (S[E] = 'Numeric character references cannot be empty'),
        (S[O] = 'Named character references must be known'),
        (S[L] = 'Numeric character references cannot be disallowed'),
        (S[j] =
          'Numeric character references cannot be outside the permissible Unicode range');
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        if ('string' != typeof e) throw new TypeError('expected a string');
        if (1 === r) return e;
        if (2 === r) return e + e;
        var t = e.length * r;
        if (o !== e || void 0 === o) (o = e), (i = '');
        else if (i.length >= t) return i.substr(0, t);
        for (; t > i.length && r > 1; ) 1 & r && (i += e), (r >>= 1), (e += e);
        return (i += e), (i = i.substr(0, t));
      } /*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
      var o,
        i = '';
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        for (var r = String(e), t = r.length; r.charAt(--t) === o; );
        return r.slice(0, t + 1);
      }
      e.exports = n;
      var o = '\n';
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t, n) {
        for (
          var o,
            i,
            a,
            c,
            l,
            s,
            u = ['pedantic', 'commonmark'],
            f = u.length,
            p = e.length,
            d = -1;
          ++d < p;

        ) {
          for (o = e[d], i = o[1] || {}, a = o[0], c = -1, s = !1; ++c < f; )
            if (((l = u[c]), void 0 !== i[l] && i[l] !== t.options[l])) {
              s = !0;
              break;
            }
          if (!s && r[a].apply(t, n)) return !0;
        }
        return !1;
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        return o(e).toLowerCase();
      }
      var o = t(289);
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        if (Array.isArray(e)) {
          for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
          return t;
        }
        return Array.from(e);
      }
      function o(e, r) {
        return Array.isArray(r) ? e.use.apply(e, n(r)) : e.use(r);
      }
      function i(e) {
        var r = [d],
          t = e.disallowedTypes;
        e.allowedTypes &&
          (t = v.filter(function(r) {
            return 'root' !== r && -1 === e.allowedTypes.indexOf(r);
          }));
        var n = e.unwrapDisallowed ? 'unwrap' : 'remove';
        return (
          t && t.length > 0 && r.push(f.ofType(t, n)),
          e.allowNode && r.push(f.ifNotMatch(e.allowNode, n)),
          !e.escapeHtml && !e.skipHtml && r.push(u),
          e.astPlugins ? r.concat(e.astPlugins) : r
        );
      }
      var a = t(224),
        c = t(247),
        l = t(258),
        s = t(1),
        u = t(313),
        f = t(314),
        p = t(315),
        d = t(316),
        h = t(317),
        g = t(318),
        m = t(319),
        v = Object.keys(m),
        b = function(e) {
          var r = e.source || e.children || '';
          if (e.allowedTypes && e.disallowedTypes)
            throw new Error(
              'Only one of `allowedTypes` and `disallowedTypes` should be defined'
            );
          var t = a(m, e.renderers),
            n = [l].concat(e.plugins || []),
            s = n.reduce(o, c()),
            u = s.parse(r),
            f = a(e, { renderers: t, definitions: h(u) }),
            d = i(e),
            g = d.reduce(function(e, r) {
              return r(e, f);
            }, u);
          return p(g, f);
        };
      (b.defaultProps = {
        renderers: {},
        escapeHtml: !0,
        skipHtml: !1,
        sourcePos: !1,
        rawSourcePos: !1,
        transformLinkUri: g,
        astPlugins: [],
        plugins: [],
      }),
        (b.propTypes = {
          className: s.string,
          source: s.string,
          children: s.string,
          sourcePos: s.bool,
          rawSourcePos: s.bool,
          escapeHtml: s.bool,
          skipHtml: s.bool,
          allowNode: s.func,
          allowedTypes: s.arrayOf(s.oneOf(v)),
          disallowedTypes: s.arrayOf(s.oneOf(v)),
          transformLinkUri: s.oneOfType([s.func, s.bool]),
          transformImageUri: s.func,
          astPlugins: s.arrayOf(s.func),
          unwrapDisallowed: s.bool,
          renderers: s.object,
          plugins: s.array,
        }),
        (b.types = v),
        (b.renderers = m),
        (b.uriTransformer = g),
        (e.exports = b);
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        var r = 'string' == typeof e ? e.charCodeAt(0) : e;
        return (r >= 97 && r <= 122) || (r >= 65 && r <= 90);
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      e.exports = {
        position: !0,
        gfm: !0,
        commonmark: !1,
        footnotes: !1,
        pedantic: !1,
        blocks: t(274),
      };
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        for (var r, t = 0, n = 0, i = e.charAt(t), a = {}; i in o; )
          (r = o[i]),
            (n += r),
            r > 1 && (n = Math.floor(n / r) * r),
            (a[n] = t),
            (i = e.charAt(++t));
        return { indent: n, stops: a };
      }
      e.exports = n;
      var o = { ' ': 1, '\t': 4 };
    },
    function(e, r, t) {
      'use strict';
      var n =
          '<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"\'=<>`\\u0000-\\u0020]+|\'[^\']*\'|"[^"]*"))?)*\\s*\\/?>',
        o = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
      (r.openCloseTag = new RegExp('^(?:' + n + '|' + o + ')')),
        (r.tag = new RegExp(
          '^(?:' +
            n +
            '|' +
            o +
            '|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)'
        ));
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        return e.indexOf('<', r);
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        var t = e.indexOf('[', r),
          n = e.indexOf('![', r);
        return -1 === n ? t : t < n ? t : n;
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      var n = Object.prototype.hasOwnProperty,
        o = (function() {
          for (var e = [], r = 0; r < 256; ++r)
            e.push('%' + ((r < 16 ? '0' : '') + r.toString(16)).toUpperCase());
          return e;
        })(),
        i = function(e) {
          for (var r; e.length; ) {
            var t = e.pop();
            if (((r = t.obj[t.prop]), Array.isArray(r))) {
              for (var n = [], o = 0; o < r.length; ++o)
                void 0 !== r[o] && n.push(r[o]);
              t.obj[t.prop] = n;
            }
          }
          return r;
        },
        a = function(e, r) {
          for (
            var t = r && r.plainObjects ? Object.create(null) : {}, n = 0;
            n < e.length;
            ++n
          )
            void 0 !== e[n] && (t[n] = e[n]);
          return t;
        },
        c = function e(r, t, o) {
          if (!t) return r;
          if ('object' != typeof t) {
            if (Array.isArray(r)) r.push(t);
            else {
              if ('object' != typeof r) return [r, t];
              (o.plainObjects ||
                o.allowPrototypes ||
                !n.call(Object.prototype, t)) &&
                (r[t] = !0);
            }
            return r;
          }
          if ('object' != typeof r) return [r].concat(t);
          var i = r;
          return (
            Array.isArray(r) && !Array.isArray(t) && (i = a(r, o)),
            Array.isArray(r) && Array.isArray(t)
              ? (t.forEach(function(t, i) {
                  n.call(r, i)
                    ? r[i] && 'object' == typeof r[i]
                      ? (r[i] = e(r[i], t, o))
                      : r.push(t)
                    : (r[i] = t);
                }),
                r)
              : Object.keys(t).reduce(function(r, i) {
                  var a = t[i];
                  return n.call(r, i) ? (r[i] = e(r[i], a, o)) : (r[i] = a), r;
                }, i)
          );
        },
        l = function(e, r) {
          return Object.keys(r).reduce(function(e, t) {
            return (e[t] = r[t]), e;
          }, e);
        },
        s = function(e) {
          try {
            return decodeURIComponent(e.replace(/\+/g, ' '));
          } catch (r) {
            return e;
          }
        },
        u = function(e) {
          if (0 === e.length) return e;
          for (
            var r = 'string' == typeof e ? e : String(e), t = '', n = 0;
            n < r.length;
            ++n
          ) {
            var i = r.charCodeAt(n);
            45 === i ||
            46 === i ||
            95 === i ||
            126 === i ||
            (i >= 48 && i <= 57) ||
            (i >= 65 && i <= 90) ||
            (i >= 97 && i <= 122)
              ? (t += r.charAt(n))
              : i < 128
                ? (t += o[i])
                : i < 2048
                  ? (t += o[192 | (i >> 6)] + o[128 | (63 & i)])
                  : i < 55296 || i >= 57344
                    ? (t +=
                        o[224 | (i >> 12)] +
                        o[128 | ((i >> 6) & 63)] +
                        o[128 | (63 & i)])
                    : ((n += 1),
                      (i =
                        65536 +
                        (((1023 & i) << 10) | (1023 & r.charCodeAt(n)))),
                      (t +=
                        o[240 | (i >> 18)] +
                        o[128 | ((i >> 12) & 63)] +
                        o[128 | ((i >> 6) & 63)] +
                        o[128 | (63 & i)]));
          }
          return t;
        },
        f = function(e) {
          for (
            var r = [{ obj: { o: e }, prop: 'o' }], t = [], n = 0;
            n < r.length;
            ++n
          )
            for (
              var o = r[n], a = o.obj[o.prop], c = Object.keys(a), l = 0;
              l < c.length;
              ++l
            ) {
              var s = c[l],
                u = a[s];
              'object' == typeof u &&
                null !== u &&
                -1 === t.indexOf(u) &&
                (r.push({ obj: a, prop: s }), t.push(u));
            }
          return i(r);
        },
        p = function(e) {
          return '[object RegExp]' === Object.prototype.toString.call(e);
        },
        d = function(e) {
          return (
            null !== e &&
            void 0 !== e &&
            !!(
              e.constructor &&
              e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            )
          );
        };
      e.exports = {
        arrayToObject: a,
        assign: l,
        compact: f,
        decode: s,
        encode: u,
        isBuffer: d,
        isRegExp: p,
        merge: c,
      };
    },
    function(e, r, t) {
      'use strict';
      var n = String.prototype.replace,
        o = /%20/g;
      e.exports = {
        default: 'RFC3986',
        formatters: {
          RFC1738: function(e) {
            return n.call(e, o, '+');
          },
          RFC3986: function(e) {
            return e;
          },
        },
        RFC1738: 'RFC1738',
        RFC3986: 'RFC3986',
      };
    },
    ,
    ,
    ,
    function(e, r, t) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 });
      var n = t(246),
        o = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(n);
      r.default = o.default;
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(r, '__esModule', { value: !0 });
      var o =
          Object.assign ||
          function(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          },
        i = t(0),
        a = n(i),
        c = t(233),
        l = n(c),
        s = t(320),
        u = n(s),
        f = t(328),
        p = n(f);
      t(331);
      var d = function(e, r) {
          return e + '/?' + p.default.stringify(r, { arrayFormat: 'brackets' });
        },
        h = function(e) {
          return {
            srcSet: [400, 600, 1e3, 1200]
              .map(function(r) {
                return (
                  d('http://localhost:3000', {
                    uri: decodeURIComponent(e),
                    resize: { w: r },
                    format: 'webp',
                  }) +
                  ' ' +
                  r +
                  'w'
                );
              })
              .reduce(function(e, r) {
                return e + ',' + r;
              }),
          };
        },
        g = function(e) {
          var r = e.project;
          return a.default.createElement(
            'article',
            { className: 'project' },
            a.default.createElement(
              'img',
              o(
                { className: 'project__image', sizes: '75vw' },
                h(r.acf.main_image.url),
                { alt: 'project-main-' + r.slug }
              )
            ),
            a.default.createElement(
              'h1',
              { className: 'project__h1' },
              r.title.rendered
            ),
            a.default.createElement(l.default, {
              className: 'project__description',
              source: r.acf.description,
            }),
            r.acf.collaborators
              ? a.default.createElement(
                  'p',
                  null,
                  'Collaboration: ',
                  r.acf.collaborators
                )
              : null,
            a.default.createElement(
              'section',
              { className: 'project__slides' },
              r.acf.slides
                ? r.acf.slides.map(function(e, r) {
                    return a.default.createElement(
                      'div',
                      { className: 'slide', key: 'slide-' + r },
                      a.default.createElement(u.default, { slide: e })
                    );
                  })
                : null
            )
          );
        };
      r.default = g;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        r.tree = e.parse(r.file);
      }
      function o(e, r, t) {
        function n(e, n, o) {
          e ? t(e) : ((r.tree = n), (r.file = o), t());
        }
        e.run(r.tree, r.file, n);
      }
      function i(e, r) {
        r.file.contents = e.stringify(r.tree, r.file);
      }
      function a() {
        function e() {
          for (var e = a(), r = L.length, t = -1; ++t < r; )
            e.use.apply(null, L[t]);
          return e.data(h(!0, {}, S)), e;
        }
        function r() {
          var r, t, n, o;
          if (N) return e;
          for (; ++T < L.length; )
            (r = L[T]),
              (t = r[0]),
              (n = r[1]),
              (o = null),
              !1 !== n &&
                (!0 === n && (r[1] = void 0),
                'function' == typeof (o = t.apply(e, r.slice(1))) && j.use(o));
          return (N = !0), (T = 1 / 0), e;
        }
        function t(r, t) {
          return b(r)
            ? 2 === arguments.length
              ? (f('data', N), (S[r] = t), e)
              : (A.call(S, r) && S[r]) || null
            : r
              ? (f('data', N), (S = r), e)
              : S;
        }
        function n(r) {
          function t(e) {
            i(e.plugins), e.settings && (c = h(c || {}, e.settings));
          }
          function n(e) {
            if ('function' == typeof e) a(e);
            else {
              if ('object' != typeof e)
                throw new Error('Expected usable value, not `' + e + '`');
              'length' in e ? a.apply(null, e) : t(e);
            }
          }
          function i(e) {
            var r, t;
            if (null === e || void 0 === e);
            else {
              if (!('object' == typeof e && 'length' in e))
                throw new Error('Expected a list of plugins, not `' + e + '`');
              for (r = e.length, t = -1; ++t < r; ) n(e[t]);
            }
          }
          function a(e, r) {
            var t = o(e);
            t
              ? (y(t[1]) && y(r) && (r = h(t[1], r)), (t[1] = r))
              : L.push(w.call(arguments));
          }
          var c;
          if ((f('use', N), null === r || void 0 === r));
          else if ('function' == typeof r) a.apply(null, arguments);
          else {
            if ('object' != typeof r)
              throw new Error('Expected usable value, not `' + r + '`');
            'length' in r ? i(r) : t(r);
          }
          return c && (S.settings = h(S.settings || {}, c)), e;
        }
        function o(e) {
          for (var r, t = L.length, n = -1; ++n < t; )
            if (((r = L[n]), r[0] === e)) return r;
        }
        function i(t) {
          var n,
            o = m(t);
          return (
            r(),
            (n = e.Parser),
            s('parse', n),
            c(n) ? new n(String(o), o).parse() : n(String(o), o)
          );
        }
        function l(e, t, n) {
          function o(r, o) {
            function i(t, i, a) {
              (i = i || e), t ? o(t) : r ? r(i) : n(null, i, a);
            }
            j.run(e, m(t), i);
          }
          if (
            (p(e),
            r(),
            n || 'function' != typeof t || ((n = t), (t = null)),
            !n)
          )
            return new Promise(o);
          o(null, n);
        }
        function x(e, r) {
          function t(e, r) {
            (o = !0), g(e), (n = r);
          }
          var n,
            o = !1;
          return l(e, r, t), d('runSync', 'run', o), n;
        }
        function q(t, n) {
          var o,
            i = m(n);
          return (
            r(),
            (o = e.Compiler),
            u('stringify', o),
            p(t),
            c(o) ? new o(t, i).compile() : o(t, i)
          );
        }
        function E(t, n) {
          function o(r, o) {
            function i(e) {
              e ? o(e) : r ? r(a) : n(null, a);
            }
            var a = m(t);
            k.run(e, { file: a }, i);
          }
          if ((r(), s('process', e.Parser), u('process', e.Compiler), !n))
            return new Promise(o);
          o(null, n);
        }
        function O(t) {
          function n(e) {
            (i = !0), g(e);
          }
          var o,
            i = !1;
          return (
            r(),
            s('processSync', e.Parser),
            u('processSync', e.Compiler),
            (o = m(t)),
            E(o, n),
            d('processSync', 'process', i),
            o
          );
        }
        var L = [],
          j = v(),
          S = {},
          N = !1,
          T = -1;
        return (
          (e.data = t),
          (e.freeze = r),
          (e.attachers = L),
          (e.use = n),
          (e.parse = i),
          (e.stringify = q),
          (e.run = l),
          (e.runSync = x),
          (e.process = E),
          (e.processSync = O),
          e
        );
      }
      function c(e) {
        return 'function' == typeof e && l(e.prototype);
      }
      function l(e) {
        var r;
        for (r in e) return !0;
        return !1;
      }
      function s(e, r) {
        if ('function' != typeof r)
          throw new Error('Cannot `' + e + '` without `Parser`');
      }
      function u(e, r) {
        if ('function' != typeof r)
          throw new Error('Cannot `' + e + '` without `Compiler`');
      }
      function f(e, r) {
        if (r)
          throw new Error(
            [
              'Cannot invoke `' + e + '` on a frozen processor.\nCreate a new ',
              'processor first, by invoking it: use `processor()` instead of ',
              '`processor`.',
            ].join('')
          );
      }
      function p(e) {
        if (!e || !b(e.type)) throw new Error('Expected node, got `' + e + '`');
      }
      function d(e, r, t) {
        if (!t)
          throw new Error(
            '`' + e + '` finished async. Use `' + r + '` instead'
          );
      }
      var h = t(248),
        g = t(249),
        m = t(250),
        v = t(255),
        b = t(256),
        y = t(257);
      e.exports = a().freeze();
      var w = [].slice,
        A = {}.hasOwnProperty,
        k = v()
          .use(n)
          .use(o)
          .use(i);
    },
    function(e, r, t) {
      'use strict';
      var n = Object.prototype.hasOwnProperty,
        o = Object.prototype.toString,
        i = function(e) {
          return 'function' == typeof Array.isArray
            ? Array.isArray(e)
            : '[object Array]' === o.call(e);
        },
        a = function(e) {
          if (!e || '[object Object]' !== o.call(e)) return !1;
          var r = n.call(e, 'constructor'),
            t =
              e.constructor &&
              e.constructor.prototype &&
              n.call(e.constructor.prototype, 'isPrototypeOf');
          if (e.constructor && !r && !t) return !1;
          var i;
          for (i in e);
          return void 0 === i || n.call(e, i);
        };
      e.exports = function e() {
        var r,
          t,
          n,
          o,
          c,
          l,
          s = arguments[0],
          u = 1,
          f = arguments.length,
          p = !1;
        for (
          'boolean' == typeof s && ((p = s), (s = arguments[1] || {}), (u = 2)),
            (null == s || ('object' != typeof s && 'function' != typeof s)) &&
              (s = {});
          u < f;
          ++u
        )
          if (null != (r = arguments[u]))
            for (t in r)
              (n = s[t]),
                (o = r[t]),
                s !== o &&
                  (p && o && (a(o) || (c = i(o)))
                    ? (c
                        ? ((c = !1), (l = n && i(n) ? n : []))
                        : (l = n && a(n) ? n : {}),
                      (s[t] = e(p, l, o)))
                    : void 0 !== o && (s[t] = o));
        return s;
      };
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        if (e) throw e;
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        var n = this.path,
          o = new a(e, r, t);
        return (
          n && ((o.name = n + ':' + o.name), (o.file = n)),
          (o.fatal = !1),
          this.messages.push(o),
          o
        );
      }
      function o() {
        var e = this.message.apply(this, arguments);
        throw ((e.fatal = !0), e);
      }
      function i() {
        var e = this.message.apply(this, arguments);
        return (e.fatal = null), e;
      }
      var a = t(251),
        c = t(253);
      e.exports = c;
      var l = c.prototype;
      (l.message = n), (l.info = i), (l.fail = o), (l.warn = n);
    },
    function(e, r, t) {
      'use strict';
      function n() {}
      function o(e, r, t) {
        var n, o, c;
        'string' == typeof r && ((t = r), (r = null)),
          (n = i(t)),
          (o = a(r) || '1:1'),
          (c = {
            start: { line: null, column: null },
            end: { line: null, column: null },
          }),
          r && r.position && (r = r.position),
          r && (r.start ? ((c = r), (r = r.start)) : (c.start = r)),
          e.stack && ((this.stack = e.stack), (e = e.message)),
          (this.message = e),
          (this.name = o),
          (this.reason = e),
          (this.line = r ? r.line : null),
          (this.column = r ? r.column : null),
          (this.location = c),
          (this.source = n[0]),
          (this.ruleId = n[1]);
      }
      function i(e) {
        var r,
          t = [null, null];
        return (
          'string' == typeof e &&
            ((r = e.indexOf(':')),
            -1 === r
              ? (t[1] = e)
              : ((t[0] = e.slice(0, r)), (t[1] = e.slice(r + 1)))),
          t
        );
      }
      var a = t(252);
      (e.exports = o), (n.prototype = Error.prototype), (o.prototype = new n());
      var c = o.prototype;
      (c.file = ''),
        (c.name = ''),
        (c.reason = ''),
        (c.message = ''),
        (c.stack = ''),
        (c.fatal = null),
        (c.column = null),
        (c.line = null);
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        return e && 'object' == typeof e
          ? c.call(e, 'position') || c.call(e, 'type')
            ? i(e.position)
            : c.call(e, 'start') || c.call(e, 'end')
              ? i(e)
              : c.call(e, 'line') || c.call(e, 'column')
                ? o(e)
                : null
          : null;
      }
      function o(e) {
        return (
          (e && 'object' == typeof e) || (e = {}), a(e.line) + ':' + a(e.column)
        );
      }
      function i(e) {
        return (
          (e && 'object' == typeof e) || (e = {}), o(e.start) + '-' + o(e.end)
        );
      }
      function a(e) {
        return e && 'number' == typeof e ? e : 1;
      }
      var c = {}.hasOwnProperty;
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      (function(r) {
        function n(e) {
          var t, o, i;
          if (e) {
            if ('string' == typeof e || u(e)) e = { contents: e };
            else if ('message' in e && 'messages' in e) return e;
          } else e = {};
          if (!(this instanceof n)) return new n(e);
          for (
            this.data = {},
              this.messages = [],
              this.history = [],
              this.cwd = r.cwd(),
              o = -1,
              i = d.length;
            ++o < i;

          )
            (t = d[o]), f.call(e, t) && (this[t] = e[t]);
          for (t in e) -1 === d.indexOf(t) && (this[t] = e[t]);
        }
        function o(e) {
          var r = this.contents || '';
          return u(r) ? r.toString(e) : String(r);
        }
        function i(e, r) {
          if (-1 !== e.indexOf(l.sep))
            throw new Error(
              '`' + r + '` cannot be a path: did not expect `' + l.sep + '`'
            );
        }
        function a(e, r) {
          if (!e) throw new Error('`' + r + '` cannot be empty');
        }
        function c(e, r) {
          if (!e)
            throw new Error(
              'Setting `' + r + '` requires `path` to be set too'
            );
        }
        var l = t(72),
          s = t(254),
          u = t(73);
        e.exports = n;
        var f = {}.hasOwnProperty,
          p = n.prototype;
        p.toString = o;
        var d = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
        Object.defineProperty(p, 'path', {
          get: function() {
            return this.history[this.history.length - 1];
          },
          set: function(e) {
            a(e, 'path'), e !== this.path && this.history.push(e);
          },
        }),
          Object.defineProperty(p, 'dirname', {
            get: function() {
              return 'string' == typeof this.path
                ? l.dirname(this.path)
                : void 0;
            },
            set: function(e) {
              c(this.path, 'dirname'),
                (this.path = l.join(e || '', this.basename));
            },
          }),
          Object.defineProperty(p, 'basename', {
            get: function() {
              return 'string' == typeof this.path
                ? l.basename(this.path)
                : void 0;
            },
            set: function(e) {
              a(e, 'basename'),
                i(e, 'basename'),
                (this.path = l.join(this.dirname || '', e));
            },
          }),
          Object.defineProperty(p, 'extname', {
            get: function() {
              return 'string' == typeof this.path
                ? l.extname(this.path)
                : void 0;
            },
            set: function(e) {
              var r = e || '';
              if ((i(r, 'extname'), c(this.path, 'extname'), r)) {
                if ('.' !== r.charAt(0))
                  throw new Error('`extname` must start with `.`');
                if (-1 !== r.indexOf('.', 1))
                  throw new Error('`extname` cannot contain multiple dots');
              }
              this.path = s(this.path, r);
            },
          }),
          Object.defineProperty(p, 'stem', {
            get: function() {
              return 'string' == typeof this.path
                ? l.basename(this.path, this.extname)
                : void 0;
            },
            set: function(e) {
              a(e, 'stem'),
                i(e, 'stem'),
                (this.path = l.join(
                  this.dirname || '',
                  e + (this.extname || '')
                ));
            },
          });
      }.call(r, t(14)));
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        if ('string' != typeof e) return e;
        if (0 === e.length) return e;
        var t = o.basename(e, o.extname(e)) + r;
        return o.join(o.dirname(e), t);
      }
      var o = t(72);
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n() {
        function e() {
          function e(c) {
            var l = t[++r],
              s = i.call(arguments, 0),
              u = s.slice(1),
              f = n.length,
              p = -1;
            if (c) return void a(c);
            for (; ++p < f; )
              (null !== u[p] && void 0 !== u[p]) || (u[p] = n[p]);
            (n = u),
              l ? o(l, e).apply(null, n) : a.apply(null, [null].concat(n));
          }
          var r = -1,
            n = i.call(arguments, 0, -1),
            a = arguments[arguments.length - 1];
          if ('function' != typeof a)
            throw new Error('Expected function as last argument, not ' + a);
          e.apply(null, [null].concat(n));
        }
        function r(e) {
          if ('function' != typeof e)
            throw new Error('Expected `fn` to be a function, not ' + e);
          return t.push(e), n;
        }
        var t = [],
          n = {};
        return (n.run = e), (n.use = r), n;
      }
      function o(e, r) {
        function t() {
          var r,
            t = i.call(arguments, 0),
            c = e.length > t.length;
          c && t.push(n);
          try {
            r = e.apply(null, t);
          } catch (e) {
            if (c && a) throw e;
            return n(e);
          }
          c ||
            (r && 'function' == typeof r.then
              ? r.then(o, n)
              : r instanceof Error
                ? n(r)
                : o(r));
        }
        function n() {
          a || ((a = !0), r.apply(null, arguments));
        }
        function o(e) {
          n(null, e);
        }
        var a;
        return t;
      }
      e.exports = n;
      var i = [].slice;
    },
    function(e, r) {
      function t(e) {
        return '[object String]' === n.call(e);
      }
      var n = Object.prototype.toString;
      e.exports = t;
    },
    function(e, r, t) {
      'use strict';
      var n = Object.prototype.toString;
      e.exports = function(e) {
        var r;
        return (
          '[object Object]' === n.call(e) &&
          (null === (r = Object.getPrototypeOf(e)) ||
            r === Object.getPrototypeOf({}))
        );
      };
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        var r = o(a);
        (r.prototype.options = i(
          r.prototype.options,
          this.data('settings'),
          e
        )),
          (this.Parser = r);
      }
      var o = t(259),
        i = t(224),
        a = t(261);
      (e.exports = n), (n.Parser = a);
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        function r(r) {
          return e.apply(this, r);
        }
        function t() {
          return this instanceof t
            ? e.apply(this, arguments)
            : new r(arguments);
        }
        var n, a, c;
        i(t, e), i(r, t), (n = t.prototype);
        for (a in n)
          (c = n[a]) &&
            'object' == typeof c &&
            (n[a] = 'concat' in c ? c.concat() : o(c));
        return t;
      }
      var o = t(224),
        i = t(260);
      e.exports = n;
    },
    function(e, r) {
      'function' == typeof Object.create
        ? (e.exports = function(e, r) {
            (e.super_ = r),
              (e.prototype = Object.create(r.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
          })
        : (e.exports = function(e, r) {
            e.super_ = r;
            var t = function() {};
            (t.prototype = r.prototype),
              (e.prototype = new t()),
              (e.prototype.constructor = e);
          });
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        (this.file = r),
          (this.offset = {}),
          (this.options = i(this.options)),
          this.setOptions({}),
          (this.inList = !1),
          (this.inBlock = !1),
          (this.inLink = !1),
          (this.atStart = !0),
          (this.toOffset = c(r).toOffset),
          (this.unescape = l(this, 'escape')),
          (this.decode = s(this));
      }
      function o(e) {
        var r,
          t = [];
        for (r in e) t.push(r);
        return t;
      }
      var i = t(224),
        a = t(262),
        c = t(263),
        l = t(264),
        s = t(265),
        u = t(271);
      e.exports = n;
      var f = n.prototype;
      (f.setOptions = t(272)),
        (f.parse = t(275)),
        (f.options = t(235)),
        (f.exitStart = a('atStart', !0)),
        (f.enterList = a('inList', !1)),
        (f.enterLink = a('inLink', !1)),
        (f.enterBlock = a('inBlock', !1)),
        (f.interruptParagraph = [
          ['thematicBreak'],
          ['atxHeading'],
          ['fencedCode'],
          ['blockquote'],
          ['html'],
          ['setextHeading', { commonmark: !1 }],
          ['definition', { commonmark: !1 }],
          ['footnote', { commonmark: !1 }],
        ]),
        (f.interruptList = [
          ['atxHeading', { pedantic: !1 }],
          ['fencedCode', { pedantic: !1 }],
          ['thematicBreak', { pedantic: !1 }],
          ['definition', { commonmark: !1 }],
          ['footnote', { commonmark: !1 }],
        ]),
        (f.interruptBlockquote = [
          ['indentedCode', { commonmark: !0 }],
          ['fencedCode', { commonmark: !0 }],
          ['atxHeading', { commonmark: !0 }],
          ['setextHeading', { commonmark: !0 }],
          ['thematicBreak', { commonmark: !0 }],
          ['html', { commonmark: !0 }],
          ['list', { commonmark: !0 }],
          ['definition', { commonmark: !1 }],
          ['footnote', { commonmark: !1 }],
        ]),
        (f.blockTokenizers = {
          newline: t(278),
          indentedCode: t(279),
          fencedCode: t(280),
          blockquote: t(281),
          atxHeading: t(282),
          thematicBreak: t(283),
          list: t(284),
          setextHeading: t(286),
          html: t(287),
          footnote: t(288),
          definition: t(290),
          table: t(291),
          paragraph: t(292),
        }),
        (f.inlineTokenizers = {
          escape: t(293),
          autoLink: t(295),
          url: t(296),
          html: t(298),
          link: t(299),
          reference: t(300),
          strong: t(301),
          emphasis: t(303),
          deletion: t(306),
          code: t(308),
          break: t(310),
          text: t(312),
        }),
        (f.blockMethods = o(f.blockTokenizers)),
        (f.inlineMethods = o(f.inlineTokenizers)),
        (f.tokenizeBlock = u('block')),
        (f.tokenizeInline = u('inline')),
        (f.tokenizeFactory = u);
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        function n() {
          function n() {
            o[e] = i;
          }
          var o = t || this,
            i = o[e];
          return (o[e] = !r), n;
        }
        return n;
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        var r = a(String(e));
        return { toPosition: o(r), toOffset: i(r) };
      }
      function o(e) {
        function r(r) {
          var t = -1,
            n = e.length;
          if (r < 0) return {};
          for (; ++t < n; )
            if (e[t] > r)
              return {
                line: t + 1,
                column: r - (e[t - 1] || 0) + 1,
                offset: r,
              };
          return {};
        }
        return r;
      }
      function i(e) {
        function r(r) {
          var t = r && r.line,
            n = r && r.column;
          return !isNaN(t) && !isNaN(n) && t - 1 in e
            ? (e[t - 2] || 0) + n - 1 || 0
            : -1;
        }
        return r;
      }
      function a(e) {
        for (var r = [], t = e.indexOf('\n'); -1 !== t; )
          r.push(t + 1), (t = e.indexOf('\n', t + 1));
        return r.push(e.length + 1), r;
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        function t(t) {
          for (var n, o = 0, i = t.indexOf('\\'), a = e[r], c = []; -1 !== i; )
            c.push(t.slice(o, i)),
              (o = i + 1),
              (n = t.charAt(o)),
              (n && -1 !== a.indexOf(n)) || c.push('\\'),
              (i = t.indexOf('\\', o));
          return c.push(t.slice(o)), c.join('');
        }
        return t;
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        function r(r) {
          for (var t = e.offset, n = r.line, o = []; ++n && n in t; )
            o.push((t[n] || 0) + 1);
          return { start: r, indent: o };
        }
        function t(r, t, n) {
          3 !== n && e.file.message(r, t);
        }
        function n(n, o, a) {
          i(n, {
            position: r(o),
            warning: t,
            text: a,
            reference: a,
            textContext: e,
            referenceContext: e,
          });
        }
        function a(e, n, a) {
          return i(e, o(a, { position: r(n), warning: t }));
        }
        return (n.raw = a), n;
      }
      var o = t(224),
        i = t(228);
      e.exports = n;
    },
    function(e, r) {
      e.exports = {
        AEli: 'Æ',
        AElig: 'Æ',
        AM: '&',
        AMP: '&',
        Aacut: 'Á',
        Aacute: 'Á',
        Abreve: 'Ă',
        Acir: 'Â',
        Acirc: 'Â',
        Acy: 'А',
        Afr: '𝔄',
        Agrav: 'À',
        Agrave: 'À',
        Alpha: 'Α',
        Amacr: 'Ā',
        And: '⩓',
        Aogon: 'Ą',
        Aopf: '𝔸',
        ApplyFunction: '⁡',
        Arin: 'Å',
        Aring: 'Å',
        Ascr: '𝒜',
        Assign: '≔',
        Atild: 'Ã',
        Atilde: 'Ã',
        Aum: 'Ä',
        Auml: 'Ä',
        Backslash: '∖',
        Barv: '⫧',
        Barwed: '⌆',
        Bcy: 'Б',
        Because: '∵',
        Bernoullis: 'ℬ',
        Beta: 'Β',
        Bfr: '𝔅',
        Bopf: '𝔹',
        Breve: '˘',
        Bscr: 'ℬ',
        Bumpeq: '≎',
        CHcy: 'Ч',
        COP: '©',
        COPY: '©',
        Cacute: 'Ć',
        Cap: '⋒',
        CapitalDifferentialD: 'ⅅ',
        Cayleys: 'ℭ',
        Ccaron: 'Č',
        Ccedi: 'Ç',
        Ccedil: 'Ç',
        Ccirc: 'Ĉ',
        Cconint: '∰',
        Cdot: 'Ċ',
        Cedilla: '¸',
        CenterDot: '·',
        Cfr: 'ℭ',
        Chi: 'Χ',
        CircleDot: '⊙',
        CircleMinus: '⊖',
        CirclePlus: '⊕',
        CircleTimes: '⊗',
        ClockwiseContourIntegral: '∲',
        CloseCurlyDoubleQuote: '”',
        CloseCurlyQuote: '’',
        Colon: '∷',
        Colone: '⩴',
        Congruent: '≡',
        Conint: '∯',
        ContourIntegral: '∮',
        Copf: 'ℂ',
        Coproduct: '∐',
        CounterClockwiseContourIntegral: '∳',
        Cross: '⨯',
        Cscr: '𝒞',
        Cup: '⋓',
        CupCap: '≍',
        DD: 'ⅅ',
        DDotrahd: '⤑',
        DJcy: 'Ђ',
        DScy: 'Ѕ',
        DZcy: 'Џ',
        Dagger: '‡',
        Darr: '↡',
        Dashv: '⫤',
        Dcaron: 'Ď',
        Dcy: 'Д',
        Del: '∇',
        Delta: 'Δ',
        Dfr: '𝔇',
        DiacriticalAcute: '´',
        DiacriticalDot: '˙',
        DiacriticalDoubleAcute: '˝',
        DiacriticalGrave: '`',
        DiacriticalTilde: '˜',
        Diamond: '⋄',
        DifferentialD: 'ⅆ',
        Dopf: '𝔻',
        Dot: '¨',
        DotDot: '⃜',
        DotEqual: '≐',
        DoubleContourIntegral: '∯',
        DoubleDot: '¨',
        DoubleDownArrow: '⇓',
        DoubleLeftArrow: '⇐',
        DoubleLeftRightArrow: '⇔',
        DoubleLeftTee: '⫤',
        DoubleLongLeftArrow: '⟸',
        DoubleLongLeftRightArrow: '⟺',
        DoubleLongRightArrow: '⟹',
        DoubleRightArrow: '⇒',
        DoubleRightTee: '⊨',
        DoubleUpArrow: '⇑',
        DoubleUpDownArrow: '⇕',
        DoubleVerticalBar: '∥',
        DownArrow: '↓',
        DownArrowBar: '⤓',
        DownArrowUpArrow: '⇵',
        DownBreve: '̑',
        DownLeftRightVector: '⥐',
        DownLeftTeeVector: '⥞',
        DownLeftVector: '↽',
        DownLeftVectorBar: '⥖',
        DownRightTeeVector: '⥟',
        DownRightVector: '⇁',
        DownRightVectorBar: '⥗',
        DownTee: '⊤',
        DownTeeArrow: '↧',
        Downarrow: '⇓',
        Dscr: '𝒟',
        Dstrok: 'Đ',
        ENG: 'Ŋ',
        ET: 'Ð',
        ETH: 'Ð',
        Eacut: 'É',
        Eacute: 'É',
        Ecaron: 'Ě',
        Ecir: 'Ê',
        Ecirc: 'Ê',
        Ecy: 'Э',
        Edot: 'Ė',
        Efr: '𝔈',
        Egrav: 'È',
        Egrave: 'È',
        Element: '∈',
        Emacr: 'Ē',
        EmptySmallSquare: '◻',
        EmptyVerySmallSquare: '▫',
        Eogon: 'Ę',
        Eopf: '𝔼',
        Epsilon: 'Ε',
        Equal: '⩵',
        EqualTilde: '≂',
        Equilibrium: '⇌',
        Escr: 'ℰ',
        Esim: '⩳',
        Eta: 'Η',
        Eum: 'Ë',
        Euml: 'Ë',
        Exists: '∃',
        ExponentialE: 'ⅇ',
        Fcy: 'Ф',
        Ffr: '𝔉',
        FilledSmallSquare: '◼',
        FilledVerySmallSquare: '▪',
        Fopf: '𝔽',
        ForAll: '∀',
        Fouriertrf: 'ℱ',
        Fscr: 'ℱ',
        GJcy: 'Ѓ',
        G: '>',
        GT: '>',
        Gamma: 'Γ',
        Gammad: 'Ϝ',
        Gbreve: 'Ğ',
        Gcedil: 'Ģ',
        Gcirc: 'Ĝ',
        Gcy: 'Г',
        Gdot: 'Ġ',
        Gfr: '𝔊',
        Gg: '⋙',
        Gopf: '𝔾',
        GreaterEqual: '≥',
        GreaterEqualLess: '⋛',
        GreaterFullEqual: '≧',
        GreaterGreater: '⪢',
        GreaterLess: '≷',
        GreaterSlantEqual: '⩾',
        GreaterTilde: '≳',
        Gscr: '𝒢',
        Gt: '≫',
        HARDcy: 'Ъ',
        Hacek: 'ˇ',
        Hat: '^',
        Hcirc: 'Ĥ',
        Hfr: 'ℌ',
        HilbertSpace: 'ℋ',
        Hopf: 'ℍ',
        HorizontalLine: '─',
        Hscr: 'ℋ',
        Hstrok: 'Ħ',
        HumpDownHump: '≎',
        HumpEqual: '≏',
        IEcy: 'Е',
        IJlig: 'Ĳ',
        IOcy: 'Ё',
        Iacut: 'Í',
        Iacute: 'Í',
        Icir: 'Î',
        Icirc: 'Î',
        Icy: 'И',
        Idot: 'İ',
        Ifr: 'ℑ',
        Igrav: 'Ì',
        Igrave: 'Ì',
        Im: 'ℑ',
        Imacr: 'Ī',
        ImaginaryI: 'ⅈ',
        Implies: '⇒',
        Int: '∬',
        Integral: '∫',
        Intersection: '⋂',
        InvisibleComma: '⁣',
        InvisibleTimes: '⁢',
        Iogon: 'Į',
        Iopf: '𝕀',
        Iota: 'Ι',
        Iscr: 'ℐ',
        Itilde: 'Ĩ',
        Iukcy: 'І',
        Ium: 'Ï',
        Iuml: 'Ï',
        Jcirc: 'Ĵ',
        Jcy: 'Й',
        Jfr: '𝔍',
        Jopf: '𝕁',
        Jscr: '𝒥',
        Jsercy: 'Ј',
        Jukcy: 'Є',
        KHcy: 'Х',
        KJcy: 'Ќ',
        Kappa: 'Κ',
        Kcedil: 'Ķ',
        Kcy: 'К',
        Kfr: '𝔎',
        Kopf: '𝕂',
        Kscr: '𝒦',
        LJcy: 'Љ',
        L: '<',
        LT: '<',
        Lacute: 'Ĺ',
        Lambda: 'Λ',
        Lang: '⟪',
        Laplacetrf: 'ℒ',
        Larr: '↞',
        Lcaron: 'Ľ',
        Lcedil: 'Ļ',
        Lcy: 'Л',
        LeftAngleBracket: '⟨',
        LeftArrow: '←',
        LeftArrowBar: '⇤',
        LeftArrowRightArrow: '⇆',
        LeftCeiling: '⌈',
        LeftDoubleBracket: '⟦',
        LeftDownTeeVector: '⥡',
        LeftDownVector: '⇃',
        LeftDownVectorBar: '⥙',
        LeftFloor: '⌊',
        LeftRightArrow: '↔',
        LeftRightVector: '⥎',
        LeftTee: '⊣',
        LeftTeeArrow: '↤',
        LeftTeeVector: '⥚',
        LeftTriangle: '⊲',
        LeftTriangleBar: '⧏',
        LeftTriangleEqual: '⊴',
        LeftUpDownVector: '⥑',
        LeftUpTeeVector: '⥠',
        LeftUpVector: '↿',
        LeftUpVectorBar: '⥘',
        LeftVector: '↼',
        LeftVectorBar: '⥒',
        Leftarrow: '⇐',
        Leftrightarrow: '⇔',
        LessEqualGreater: '⋚',
        LessFullEqual: '≦',
        LessGreater: '≶',
        LessLess: '⪡',
        LessSlantEqual: '⩽',
        LessTilde: '≲',
        Lfr: '𝔏',
        Ll: '⋘',
        Lleftarrow: '⇚',
        Lmidot: 'Ŀ',
        LongLeftArrow: '⟵',
        LongLeftRightArrow: '⟷',
        LongRightArrow: '⟶',
        Longleftarrow: '⟸',
        Longleftrightarrow: '⟺',
        Longrightarrow: '⟹',
        Lopf: '𝕃',
        LowerLeftArrow: '↙',
        LowerRightArrow: '↘',
        Lscr: 'ℒ',
        Lsh: '↰',
        Lstrok: 'Ł',
        Lt: '≪',
        Map: '⤅',
        Mcy: 'М',
        MediumSpace: ' ',
        Mellintrf: 'ℳ',
        Mfr: '𝔐',
        MinusPlus: '∓',
        Mopf: '𝕄',
        Mscr: 'ℳ',
        Mu: 'Μ',
        NJcy: 'Њ',
        Nacute: 'Ń',
        Ncaron: 'Ň',
        Ncedil: 'Ņ',
        Ncy: 'Н',
        NegativeMediumSpace: '​',
        NegativeThickSpace: '​',
        NegativeThinSpace: '​',
        NegativeVeryThinSpace: '​',
        NestedGreaterGreater: '≫',
        NestedLessLess: '≪',
        NewLine: '\n',
        Nfr: '𝔑',
        NoBreak: '⁠',
        NonBreakingSpace: ' ',
        Nopf: 'ℕ',
        Not: '⫬',
        NotCongruent: '≢',
        NotCupCap: '≭',
        NotDoubleVerticalBar: '∦',
        NotElement: '∉',
        NotEqual: '≠',
        NotEqualTilde: '≂̸',
        NotExists: '∄',
        NotGreater: '≯',
        NotGreaterEqual: '≱',
        NotGreaterFullEqual: '≧̸',
        NotGreaterGreater: '≫̸',
        NotGreaterLess: '≹',
        NotGreaterSlantEqual: '⩾̸',
        NotGreaterTilde: '≵',
        NotHumpDownHump: '≎̸',
        NotHumpEqual: '≏̸',
        NotLeftTriangle: '⋪',
        NotLeftTriangleBar: '⧏̸',
        NotLeftTriangleEqual: '⋬',
        NotLess: '≮',
        NotLessEqual: '≰',
        NotLessGreater: '≸',
        NotLessLess: '≪̸',
        NotLessSlantEqual: '⩽̸',
        NotLessTilde: '≴',
        NotNestedGreaterGreater: '⪢̸',
        NotNestedLessLess: '⪡̸',
        NotPrecedes: '⊀',
        NotPrecedesEqual: '⪯̸',
        NotPrecedesSlantEqual: '⋠',
        NotReverseElement: '∌',
        NotRightTriangle: '⋫',
        NotRightTriangleBar: '⧐̸',
        NotRightTriangleEqual: '⋭',
        NotSquareSubset: '⊏̸',
        NotSquareSubsetEqual: '⋢',
        NotSquareSuperset: '⊐̸',
        NotSquareSupersetEqual: '⋣',
        NotSubset: '⊂⃒',
        NotSubsetEqual: '⊈',
        NotSucceeds: '⊁',
        NotSucceedsEqual: '⪰̸',
        NotSucceedsSlantEqual: '⋡',
        NotSucceedsTilde: '≿̸',
        NotSuperset: '⊃⃒',
        NotSupersetEqual: '⊉',
        NotTilde: '≁',
        NotTildeEqual: '≄',
        NotTildeFullEqual: '≇',
        NotTildeTilde: '≉',
        NotVerticalBar: '∤',
        Nscr: '𝒩',
        Ntild: 'Ñ',
        Ntilde: 'Ñ',
        Nu: 'Ν',
        OElig: 'Œ',
        Oacut: 'Ó',
        Oacute: 'Ó',
        Ocir: 'Ô',
        Ocirc: 'Ô',
        Ocy: 'О',
        Odblac: 'Ő',
        Ofr: '𝔒',
        Ograv: 'Ò',
        Ograve: 'Ò',
        Omacr: 'Ō',
        Omega: 'Ω',
        Omicron: 'Ο',
        Oopf: '𝕆',
        OpenCurlyDoubleQuote: '“',
        OpenCurlyQuote: '‘',
        Or: '⩔',
        Oscr: '𝒪',
        Oslas: 'Ø',
        Oslash: 'Ø',
        Otild: 'Õ',
        Otilde: 'Õ',
        Otimes: '⨷',
        Oum: 'Ö',
        Ouml: 'Ö',
        OverBar: '‾',
        OverBrace: '⏞',
        OverBracket: '⎴',
        OverParenthesis: '⏜',
        PartialD: '∂',
        Pcy: 'П',
        Pfr: '𝔓',
        Phi: 'Φ',
        Pi: 'Π',
        PlusMinus: '±',
        Poincareplane: 'ℌ',
        Popf: 'ℙ',
        Pr: '⪻',
        Precedes: '≺',
        PrecedesEqual: '⪯',
        PrecedesSlantEqual: '≼',
        PrecedesTilde: '≾',
        Prime: '″',
        Product: '∏',
        Proportion: '∷',
        Proportional: '∝',
        Pscr: '𝒫',
        Psi: 'Ψ',
        QUO: '"',
        QUOT: '"',
        Qfr: '𝔔',
        Qopf: 'ℚ',
        Qscr: '𝒬',
        RBarr: '⤐',
        RE: '®',
        REG: '®',
        Racute: 'Ŕ',
        Rang: '⟫',
        Rarr: '↠',
        Rarrtl: '⤖',
        Rcaron: 'Ř',
        Rcedil: 'Ŗ',
        Rcy: 'Р',
        Re: 'ℜ',
        ReverseElement: '∋',
        ReverseEquilibrium: '⇋',
        ReverseUpEquilibrium: '⥯',
        Rfr: 'ℜ',
        Rho: 'Ρ',
        RightAngleBracket: '⟩',
        RightArrow: '→',
        RightArrowBar: '⇥',
        RightArrowLeftArrow: '⇄',
        RightCeiling: '⌉',
        RightDoubleBracket: '⟧',
        RightDownTeeVector: '⥝',
        RightDownVector: '⇂',
        RightDownVectorBar: '⥕',
        RightFloor: '⌋',
        RightTee: '⊢',
        RightTeeArrow: '↦',
        RightTeeVector: '⥛',
        RightTriangle: '⊳',
        RightTriangleBar: '⧐',
        RightTriangleEqual: '⊵',
        RightUpDownVector: '⥏',
        RightUpTeeVector: '⥜',
        RightUpVector: '↾',
        RightUpVectorBar: '⥔',
        RightVector: '⇀',
        RightVectorBar: '⥓',
        Rightarrow: '⇒',
        Ropf: 'ℝ',
        RoundImplies: '⥰',
        Rrightarrow: '⇛',
        Rscr: 'ℛ',
        Rsh: '↱',
        RuleDelayed: '⧴',
        SHCHcy: 'Щ',
        SHcy: 'Ш',
        SOFTcy: 'Ь',
        Sacute: 'Ś',
        Sc: '⪼',
        Scaron: 'Š',
        Scedil: 'Ş',
        Scirc: 'Ŝ',
        Scy: 'С',
        Sfr: '𝔖',
        ShortDownArrow: '↓',
        ShortLeftArrow: '←',
        ShortRightArrow: '→',
        ShortUpArrow: '↑',
        Sigma: 'Σ',
        SmallCircle: '∘',
        Sopf: '𝕊',
        Sqrt: '√',
        Square: '□',
        SquareIntersection: '⊓',
        SquareSubset: '⊏',
        SquareSubsetEqual: '⊑',
        SquareSuperset: '⊐',
        SquareSupersetEqual: '⊒',
        SquareUnion: '⊔',
        Sscr: '𝒮',
        Star: '⋆',
        Sub: '⋐',
        Subset: '⋐',
        SubsetEqual: '⊆',
        Succeeds: '≻',
        SucceedsEqual: '⪰',
        SucceedsSlantEqual: '≽',
        SucceedsTilde: '≿',
        SuchThat: '∋',
        Sum: '∑',
        Sup: '⋑',
        Superset: '⊃',
        SupersetEqual: '⊇',
        Supset: '⋑',
        THOR: 'Þ',
        THORN: 'Þ',
        TRADE: '™',
        TSHcy: 'Ћ',
        TScy: 'Ц',
        Tab: '\t',
        Tau: 'Τ',
        Tcaron: 'Ť',
        Tcedil: 'Ţ',
        Tcy: 'Т',
        Tfr: '𝔗',
        Therefore: '∴',
        Theta: 'Θ',
        ThickSpace: '  ',
        ThinSpace: ' ',
        Tilde: '∼',
        TildeEqual: '≃',
        TildeFullEqual: '≅',
        TildeTilde: '≈',
        Topf: '𝕋',
        TripleDot: '⃛',
        Tscr: '𝒯',
        Tstrok: 'Ŧ',
        Uacut: 'Ú',
        Uacute: 'Ú',
        Uarr: '↟',
        Uarrocir: '⥉',
        Ubrcy: 'Ў',
        Ubreve: 'Ŭ',
        Ucir: 'Û',
        Ucirc: 'Û',
        Ucy: 'У',
        Udblac: 'Ű',
        Ufr: '𝔘',
        Ugrav: 'Ù',
        Ugrave: 'Ù',
        Umacr: 'Ū',
        UnderBar: '_',
        UnderBrace: '⏟',
        UnderBracket: '⎵',
        UnderParenthesis: '⏝',
        Union: '⋃',
        UnionPlus: '⊎',
        Uogon: 'Ų',
        Uopf: '𝕌',
        UpArrow: '↑',
        UpArrowBar: '⤒',
        UpArrowDownArrow: '⇅',
        UpDownArrow: '↕',
        UpEquilibrium: '⥮',
        UpTee: '⊥',
        UpTeeArrow: '↥',
        Uparrow: '⇑',
        Updownarrow: '⇕',
        UpperLeftArrow: '↖',
        UpperRightArrow: '↗',
        Upsi: 'ϒ',
        Upsilon: 'Υ',
        Uring: 'Ů',
        Uscr: '𝒰',
        Utilde: 'Ũ',
        Uum: 'Ü',
        Uuml: 'Ü',
        VDash: '⊫',
        Vbar: '⫫',
        Vcy: 'В',
        Vdash: '⊩',
        Vdashl: '⫦',
        Vee: '⋁',
        Verbar: '‖',
        Vert: '‖',
        VerticalBar: '∣',
        VerticalLine: '|',
        VerticalSeparator: '❘',
        VerticalTilde: '≀',
        VeryThinSpace: ' ',
        Vfr: '𝔙',
        Vopf: '𝕍',
        Vscr: '𝒱',
        Vvdash: '⊪',
        Wcirc: 'Ŵ',
        Wedge: '⋀',
        Wfr: '𝔚',
        Wopf: '𝕎',
        Wscr: '𝒲',
        Xfr: '𝔛',
        Xi: 'Ξ',
        Xopf: '𝕏',
        Xscr: '𝒳',
        YAcy: 'Я',
        YIcy: 'Ї',
        YUcy: 'Ю',
        Yacut: 'Ý',
        Yacute: 'Ý',
        Ycirc: 'Ŷ',
        Ycy: 'Ы',
        Yfr: '𝔜',
        Yopf: '𝕐',
        Yscr: '𝒴',
        Yuml: 'Ÿ',
        ZHcy: 'Ж',
        Zacute: 'Ź',
        Zcaron: 'Ž',
        Zcy: 'З',
        Zdot: 'Ż',
        ZeroWidthSpace: '​',
        Zeta: 'Ζ',
        Zfr: 'ℨ',
        Zopf: 'ℤ',
        Zscr: '𝒵',
        aacut: 'á',
        aacute: 'á',
        abreve: 'ă',
        ac: '∾',
        acE: '∾̳',
        acd: '∿',
        acir: 'â',
        acirc: 'â',
        acut: '´',
        acute: '´',
        acy: 'а',
        aeli: 'æ',
        aelig: 'æ',
        af: '⁡',
        afr: '𝔞',
        agrav: 'à',
        agrave: 'à',
        alefsym: 'ℵ',
        aleph: 'ℵ',
        alpha: 'α',
        amacr: 'ā',
        amalg: '⨿',
        am: '&',
        amp: '&',
        and: '∧',
        andand: '⩕',
        andd: '⩜',
        andslope: '⩘',
        andv: '⩚',
        ang: '∠',
        ange: '⦤',
        angle: '∠',
        angmsd: '∡',
        angmsdaa: '⦨',
        angmsdab: '⦩',
        angmsdac: '⦪',
        angmsdad: '⦫',
        angmsdae: '⦬',
        angmsdaf: '⦭',
        angmsdag: '⦮',
        angmsdah: '⦯',
        angrt: '∟',
        angrtvb: '⊾',
        angrtvbd: '⦝',
        angsph: '∢',
        angst: 'Å',
        angzarr: '⍼',
        aogon: 'ą',
        aopf: '𝕒',
        ap: '≈',
        apE: '⩰',
        apacir: '⩯',
        ape: '≊',
        apid: '≋',
        apos: "'",
        approx: '≈',
        approxeq: '≊',
        arin: 'å',
        aring: 'å',
        ascr: '𝒶',
        ast: '*',
        asymp: '≈',
        asympeq: '≍',
        atild: 'ã',
        atilde: 'ã',
        aum: 'ä',
        auml: 'ä',
        awconint: '∳',
        awint: '⨑',
        bNot: '⫭',
        backcong: '≌',
        backepsilon: '϶',
        backprime: '‵',
        backsim: '∽',
        backsimeq: '⋍',
        barvee: '⊽',
        barwed: '⌅',
        barwedge: '⌅',
        bbrk: '⎵',
        bbrktbrk: '⎶',
        bcong: '≌',
        bcy: 'б',
        bdquo: '„',
        becaus: '∵',
        because: '∵',
        bemptyv: '⦰',
        bepsi: '϶',
        bernou: 'ℬ',
        beta: 'β',
        beth: 'ℶ',
        between: '≬',
        bfr: '𝔟',
        bigcap: '⋂',
        bigcirc: '◯',
        bigcup: '⋃',
        bigodot: '⨀',
        bigoplus: '⨁',
        bigotimes: '⨂',
        bigsqcup: '⨆',
        bigstar: '★',
        bigtriangledown: '▽',
        bigtriangleup: '△',
        biguplus: '⨄',
        bigvee: '⋁',
        bigwedge: '⋀',
        bkarow: '⤍',
        blacklozenge: '⧫',
        blacksquare: '▪',
        blacktriangle: '▴',
        blacktriangledown: '▾',
        blacktriangleleft: '◂',
        blacktriangleright: '▸',
        blank: '␣',
        blk12: '▒',
        blk14: '░',
        blk34: '▓',
        block: '█',
        bne: '=⃥',
        bnequiv: '≡⃥',
        bnot: '⌐',
        bopf: '𝕓',
        bot: '⊥',
        bottom: '⊥',
        bowtie: '⋈',
        boxDL: '╗',
        boxDR: '╔',
        boxDl: '╖',
        boxDr: '╓',
        boxH: '═',
        boxHD: '╦',
        boxHU: '╩',
        boxHd: '╤',
        boxHu: '╧',
        boxUL: '╝',
        boxUR: '╚',
        boxUl: '╜',
        boxUr: '╙',
        boxV: '║',
        boxVH: '╬',
        boxVL: '╣',
        boxVR: '╠',
        boxVh: '╫',
        boxVl: '╢',
        boxVr: '╟',
        boxbox: '⧉',
        boxdL: '╕',
        boxdR: '╒',
        boxdl: '┐',
        boxdr: '┌',
        boxh: '─',
        boxhD: '╥',
        boxhU: '╨',
        boxhd: '┬',
        boxhu: '┴',
        boxminus: '⊟',
        boxplus: '⊞',
        boxtimes: '⊠',
        boxuL: '╛',
        boxuR: '╘',
        boxul: '┘',
        boxur: '└',
        boxv: '│',
        boxvH: '╪',
        boxvL: '╡',
        boxvR: '╞',
        boxvh: '┼',
        boxvl: '┤',
        boxvr: '├',
        bprime: '‵',
        breve: '˘',
        brvba: '¦',
        brvbar: '¦',
        bscr: '𝒷',
        bsemi: '⁏',
        bsim: '∽',
        bsime: '⋍',
        bsol: '\\',
        bsolb: '⧅',
        bsolhsub: '⟈',
        bull: '•',
        bullet: '•',
        bump: '≎',
        bumpE: '⪮',
        bumpe: '≏',
        bumpeq: '≏',
        cacute: 'ć',
        cap: '∩',
        capand: '⩄',
        capbrcup: '⩉',
        capcap: '⩋',
        capcup: '⩇',
        capdot: '⩀',
        caps: '∩︀',
        caret: '⁁',
        caron: 'ˇ',
        ccaps: '⩍',
        ccaron: 'č',
        ccedi: 'ç',
        ccedil: 'ç',
        ccirc: 'ĉ',
        ccups: '⩌',
        ccupssm: '⩐',
        cdot: 'ċ',
        cedi: '¸',
        cedil: '¸',
        cemptyv: '⦲',
        cen: '¢',
        cent: '¢',
        centerdot: '·',
        cfr: '𝔠',
        chcy: 'ч',
        check: '✓',
        checkmark: '✓',
        chi: 'χ',
        cir: '○',
        cirE: '⧃',
        circ: 'ˆ',
        circeq: '≗',
        circlearrowleft: '↺',
        circlearrowright: '↻',
        circledR: '®',
        circledS: 'Ⓢ',
        circledast: '⊛',
        circledcirc: '⊚',
        circleddash: '⊝',
        cire: '≗',
        cirfnint: '⨐',
        cirmid: '⫯',
        cirscir: '⧂',
        clubs: '♣',
        clubsuit: '♣',
        colon: ':',
        colone: '≔',
        coloneq: '≔',
        comma: ',',
        commat: '@',
        comp: '∁',
        compfn: '∘',
        complement: '∁',
        complexes: 'ℂ',
        cong: '≅',
        congdot: '⩭',
        conint: '∮',
        copf: '𝕔',
        coprod: '∐',
        cop: '©',
        copy: '©',
        copysr: '℗',
        crarr: '↵',
        cross: '✗',
        cscr: '𝒸',
        csub: '⫏',
        csube: '⫑',
        csup: '⫐',
        csupe: '⫒',
        ctdot: '⋯',
        cudarrl: '⤸',
        cudarrr: '⤵',
        cuepr: '⋞',
        cuesc: '⋟',
        cularr: '↶',
        cularrp: '⤽',
        cup: '∪',
        cupbrcap: '⩈',
        cupcap: '⩆',
        cupcup: '⩊',
        cupdot: '⊍',
        cupor: '⩅',
        cups: '∪︀',
        curarr: '↷',
        curarrm: '⤼',
        curlyeqprec: '⋞',
        curlyeqsucc: '⋟',
        curlyvee: '⋎',
        curlywedge: '⋏',
        curre: '¤',
        curren: '¤',
        curvearrowleft: '↶',
        curvearrowright: '↷',
        cuvee: '⋎',
        cuwed: '⋏',
        cwconint: '∲',
        cwint: '∱',
        cylcty: '⌭',
        dArr: '⇓',
        dHar: '⥥',
        dagger: '†',
        daleth: 'ℸ',
        darr: '↓',
        dash: '‐',
        dashv: '⊣',
        dbkarow: '⤏',
        dblac: '˝',
        dcaron: 'ď',
        dcy: 'д',
        dd: 'ⅆ',
        ddagger: '‡',
        ddarr: '⇊',
        ddotseq: '⩷',
        de: '°',
        deg: '°',
        delta: 'δ',
        demptyv: '⦱',
        dfisht: '⥿',
        dfr: '𝔡',
        dharl: '⇃',
        dharr: '⇂',
        diam: '⋄',
        diamond: '⋄',
        diamondsuit: '♦',
        diams: '♦',
        die: '¨',
        digamma: 'ϝ',
        disin: '⋲',
        div: '÷',
        divid: '÷',
        divide: '÷',
        divideontimes: '⋇',
        divonx: '⋇',
        djcy: 'ђ',
        dlcorn: '⌞',
        dlcrop: '⌍',
        dollar: '$',
        dopf: '𝕕',
        dot: '˙',
        doteq: '≐',
        doteqdot: '≑',
        dotminus: '∸',
        dotplus: '∔',
        dotsquare: '⊡',
        doublebarwedge: '⌆',
        downarrow: '↓',
        downdownarrows: '⇊',
        downharpoonleft: '⇃',
        downharpoonright: '⇂',
        drbkarow: '⤐',
        drcorn: '⌟',
        drcrop: '⌌',
        dscr: '𝒹',
        dscy: 'ѕ',
        dsol: '⧶',
        dstrok: 'đ',
        dtdot: '⋱',
        dtri: '▿',
        dtrif: '▾',
        duarr: '⇵',
        duhar: '⥯',
        dwangle: '⦦',
        dzcy: 'џ',
        dzigrarr: '⟿',
        eDDot: '⩷',
        eDot: '≑',
        eacut: 'é',
        eacute: 'é',
        easter: '⩮',
        ecaron: 'ě',
        ecir: 'ê',
        ecirc: 'ê',
        ecolon: '≕',
        ecy: 'э',
        edot: 'ė',
        ee: 'ⅇ',
        efDot: '≒',
        efr: '𝔢',
        eg: '⪚',
        egrav: 'è',
        egrave: 'è',
        egs: '⪖',
        egsdot: '⪘',
        el: '⪙',
        elinters: '⏧',
        ell: 'ℓ',
        els: '⪕',
        elsdot: '⪗',
        emacr: 'ē',
        empty: '∅',
        emptyset: '∅',
        emptyv: '∅',
        emsp13: ' ',
        emsp14: ' ',
        emsp: ' ',
        eng: 'ŋ',
        ensp: ' ',
        eogon: 'ę',
        eopf: '𝕖',
        epar: '⋕',
        eparsl: '⧣',
        eplus: '⩱',
        epsi: 'ε',
        epsilon: 'ε',
        epsiv: 'ϵ',
        eqcirc: '≖',
        eqcolon: '≕',
        eqsim: '≂',
        eqslantgtr: '⪖',
        eqslantless: '⪕',
        equals: '=',
        equest: '≟',
        equiv: '≡',
        equivDD: '⩸',
        eqvparsl: '⧥',
        erDot: '≓',
        erarr: '⥱',
        escr: 'ℯ',
        esdot: '≐',
        esim: '≂',
        eta: 'η',
        et: 'ð',
        eth: 'ð',
        eum: 'ë',
        euml: 'ë',
        euro: '€',
        excl: '!',
        exist: '∃',
        expectation: 'ℰ',
        exponentiale: 'ⅇ',
        fallingdotseq: '≒',
        fcy: 'ф',
        female: '♀',
        ffilig: 'ﬃ',
        fflig: 'ﬀ',
        ffllig: 'ﬄ',
        ffr: '𝔣',
        filig: 'ﬁ',
        fjlig: 'fj',
        flat: '♭',
        fllig: 'ﬂ',
        fltns: '▱',
        fnof: 'ƒ',
        fopf: '𝕗',
        forall: '∀',
        fork: '⋔',
        forkv: '⫙',
        fpartint: '⨍',
        frac1: '¼',
        frac12: '½',
        frac13: '⅓',
        frac14: '¼',
        frac15: '⅕',
        frac16: '⅙',
        frac18: '⅛',
        frac23: '⅔',
        frac25: '⅖',
        frac3: '¾',
        frac34: '¾',
        frac35: '⅗',
        frac38: '⅜',
        frac45: '⅘',
        frac56: '⅚',
        frac58: '⅝',
        frac78: '⅞',
        frasl: '⁄',
        frown: '⌢',
        fscr: '𝒻',
        gE: '≧',
        gEl: '⪌',
        gacute: 'ǵ',
        gamma: 'γ',
        gammad: 'ϝ',
        gap: '⪆',
        gbreve: 'ğ',
        gcirc: 'ĝ',
        gcy: 'г',
        gdot: 'ġ',
        ge: '≥',
        gel: '⋛',
        geq: '≥',
        geqq: '≧',
        geqslant: '⩾',
        ges: '⩾',
        gescc: '⪩',
        gesdot: '⪀',
        gesdoto: '⪂',
        gesdotol: '⪄',
        gesl: '⋛︀',
        gesles: '⪔',
        gfr: '𝔤',
        gg: '≫',
        ggg: '⋙',
        gimel: 'ℷ',
        gjcy: 'ѓ',
        gl: '≷',
        glE: '⪒',
        gla: '⪥',
        glj: '⪤',
        gnE: '≩',
        gnap: '⪊',
        gnapprox: '⪊',
        gne: '⪈',
        gneq: '⪈',
        gneqq: '≩',
        gnsim: '⋧',
        gopf: '𝕘',
        grave: '`',
        gscr: 'ℊ',
        gsim: '≳',
        gsime: '⪎',
        gsiml: '⪐',
        g: '>',
        gt: '>',
        gtcc: '⪧',
        gtcir: '⩺',
        gtdot: '⋗',
        gtlPar: '⦕',
        gtquest: '⩼',
        gtrapprox: '⪆',
        gtrarr: '⥸',
        gtrdot: '⋗',
        gtreqless: '⋛',
        gtreqqless: '⪌',
        gtrless: '≷',
        gtrsim: '≳',
        gvertneqq: '≩︀',
        gvnE: '≩︀',
        hArr: '⇔',
        hairsp: ' ',
        half: '½',
        hamilt: 'ℋ',
        hardcy: 'ъ',
        harr: '↔',
        harrcir: '⥈',
        harrw: '↭',
        hbar: 'ℏ',
        hcirc: 'ĥ',
        hearts: '♥',
        heartsuit: '♥',
        hellip: '…',
        hercon: '⊹',
        hfr: '𝔥',
        hksearow: '⤥',
        hkswarow: '⤦',
        hoarr: '⇿',
        homtht: '∻',
        hookleftarrow: '↩',
        hookrightarrow: '↪',
        hopf: '𝕙',
        horbar: '―',
        hscr: '𝒽',
        hslash: 'ℏ',
        hstrok: 'ħ',
        hybull: '⁃',
        hyphen: '‐',
        iacut: 'í',
        iacute: 'í',
        ic: '⁣',
        icir: 'î',
        icirc: 'î',
        icy: 'и',
        iecy: 'е',
        iexc: '¡',
        iexcl: '¡',
        iff: '⇔',
        ifr: '𝔦',
        igrav: 'ì',
        igrave: 'ì',
        ii: 'ⅈ',
        iiiint: '⨌',
        iiint: '∭',
        iinfin: '⧜',
        iiota: '℩',
        ijlig: 'ĳ',
        imacr: 'ī',
        image: 'ℑ',
        imagline: 'ℐ',
        imagpart: 'ℑ',
        imath: 'ı',
        imof: '⊷',
        imped: 'Ƶ',
        in: '∈',
        incare: '℅',
        infin: '∞',
        infintie: '⧝',
        inodot: 'ı',
        int: '∫',
        intcal: '⊺',
        integers: 'ℤ',
        intercal: '⊺',
        intlarhk: '⨗',
        intprod: '⨼',
        iocy: 'ё',
        iogon: 'į',
        iopf: '𝕚',
        iota: 'ι',
        iprod: '⨼',
        iques: '¿',
        iquest: '¿',
        iscr: '𝒾',
        isin: '∈',
        isinE: '⋹',
        isindot: '⋵',
        isins: '⋴',
        isinsv: '⋳',
        isinv: '∈',
        it: '⁢',
        itilde: 'ĩ',
        iukcy: 'і',
        ium: 'ï',
        iuml: 'ï',
        jcirc: 'ĵ',
        jcy: 'й',
        jfr: '𝔧',
        jmath: 'ȷ',
        jopf: '𝕛',
        jscr: '𝒿',
        jsercy: 'ј',
        jukcy: 'є',
        kappa: 'κ',
        kappav: 'ϰ',
        kcedil: 'ķ',
        kcy: 'к',
        kfr: '𝔨',
        kgreen: 'ĸ',
        khcy: 'х',
        kjcy: 'ќ',
        kopf: '𝕜',
        kscr: '𝓀',
        lAarr: '⇚',
        lArr: '⇐',
        lAtail: '⤛',
        lBarr: '⤎',
        lE: '≦',
        lEg: '⪋',
        lHar: '⥢',
        lacute: 'ĺ',
        laemptyv: '⦴',
        lagran: 'ℒ',
        lambda: 'λ',
        lang: '⟨',
        langd: '⦑',
        langle: '⟨',
        lap: '⪅',
        laqu: '«',
        laquo: '«',
        larr: '←',
        larrb: '⇤',
        larrbfs: '⤟',
        larrfs: '⤝',
        larrhk: '↩',
        larrlp: '↫',
        larrpl: '⤹',
        larrsim: '⥳',
        larrtl: '↢',
        lat: '⪫',
        latail: '⤙',
        late: '⪭',
        lates: '⪭︀',
        lbarr: '⤌',
        lbbrk: '❲',
        lbrace: '{',
        lbrack: '[',
        lbrke: '⦋',
        lbrksld: '⦏',
        lbrkslu: '⦍',
        lcaron: 'ľ',
        lcedil: 'ļ',
        lceil: '⌈',
        lcub: '{',
        lcy: 'л',
        ldca: '⤶',
        ldquo: '“',
        ldquor: '„',
        ldrdhar: '⥧',
        ldrushar: '⥋',
        ldsh: '↲',
        le: '≤',
        leftarrow: '←',
        leftarrowtail: '↢',
        leftharpoondown: '↽',
        leftharpoonup: '↼',
        leftleftarrows: '⇇',
        leftrightarrow: '↔',
        leftrightarrows: '⇆',
        leftrightharpoons: '⇋',
        leftrightsquigarrow: '↭',
        leftthreetimes: '⋋',
        leg: '⋚',
        leq: '≤',
        leqq: '≦',
        leqslant: '⩽',
        les: '⩽',
        lescc: '⪨',
        lesdot: '⩿',
        lesdoto: '⪁',
        lesdotor: '⪃',
        lesg: '⋚︀',
        lesges: '⪓',
        lessapprox: '⪅',
        lessdot: '⋖',
        lesseqgtr: '⋚',
        lesseqqgtr: '⪋',
        lessgtr: '≶',
        lesssim: '≲',
        lfisht: '⥼',
        lfloor: '⌊',
        lfr: '𝔩',
        lg: '≶',
        lgE: '⪑',
        lhard: '↽',
        lharu: '↼',
        lharul: '⥪',
        lhblk: '▄',
        ljcy: 'љ',
        ll: '≪',
        llarr: '⇇',
        llcorner: '⌞',
        llhard: '⥫',
        lltri: '◺',
        lmidot: 'ŀ',
        lmoust: '⎰',
        lmoustache: '⎰',
        lnE: '≨',
        lnap: '⪉',
        lnapprox: '⪉',
        lne: '⪇',
        lneq: '⪇',
        lneqq: '≨',
        lnsim: '⋦',
        loang: '⟬',
        loarr: '⇽',
        lobrk: '⟦',
        longleftarrow: '⟵',
        longleftrightarrow: '⟷',
        longmapsto: '⟼',
        longrightarrow: '⟶',
        looparrowleft: '↫',
        looparrowright: '↬',
        lopar: '⦅',
        lopf: '𝕝',
        loplus: '⨭',
        lotimes: '⨴',
        lowast: '∗',
        lowbar: '_',
        loz: '◊',
        lozenge: '◊',
        lozf: '⧫',
        lpar: '(',
        lparlt: '⦓',
        lrarr: '⇆',
        lrcorner: '⌟',
        lrhar: '⇋',
        lrhard: '⥭',
        lrm: '‎',
        lrtri: '⊿',
        lsaquo: '‹',
        lscr: '𝓁',
        lsh: '↰',
        lsim: '≲',
        lsime: '⪍',
        lsimg: '⪏',
        lsqb: '[',
        lsquo: '‘',
        lsquor: '‚',
        lstrok: 'ł',
        l: '<',
        lt: '<',
        ltcc: '⪦',
        ltcir: '⩹',
        ltdot: '⋖',
        lthree: '⋋',
        ltimes: '⋉',
        ltlarr: '⥶',
        ltquest: '⩻',
        ltrPar: '⦖',
        ltri: '◃',
        ltrie: '⊴',
        ltrif: '◂',
        lurdshar: '⥊',
        luruhar: '⥦',
        lvertneqq: '≨︀',
        lvnE: '≨︀',
        mDDot: '∺',
        mac: '¯',
        macr: '¯',
        male: '♂',
        malt: '✠',
        maltese: '✠',
        map: '↦',
        mapsto: '↦',
        mapstodown: '↧',
        mapstoleft: '↤',
        mapstoup: '↥',
        marker: '▮',
        mcomma: '⨩',
        mcy: 'м',
        mdash: '—',
        measuredangle: '∡',
        mfr: '𝔪',
        mho: '℧',
        micr: 'µ',
        micro: 'µ',
        mid: '∣',
        midast: '*',
        midcir: '⫰',
        middo: '·',
        middot: '·',
        minus: '−',
        minusb: '⊟',
        minusd: '∸',
        minusdu: '⨪',
        mlcp: '⫛',
        mldr: '…',
        mnplus: '∓',
        models: '⊧',
        mopf: '𝕞',
        mp: '∓',
        mscr: '𝓂',
        mstpos: '∾',
        mu: 'μ',
        multimap: '⊸',
        mumap: '⊸',
        nGg: '⋙̸',
        nGt: '≫⃒',
        nGtv: '≫̸',
        nLeftarrow: '⇍',
        nLeftrightarrow: '⇎',
        nLl: '⋘̸',
        nLt: '≪⃒',
        nLtv: '≪̸',
        nRightarrow: '⇏',
        nVDash: '⊯',
        nVdash: '⊮',
        nabla: '∇',
        nacute: 'ń',
        nang: '∠⃒',
        nap: '≉',
        napE: '⩰̸',
        napid: '≋̸',
        napos: 'ŉ',
        napprox: '≉',
        natur: '♮',
        natural: '♮',
        naturals: 'ℕ',
        nbs: ' ',
        nbsp: ' ',
        nbump: '≎̸',
        nbumpe: '≏̸',
        ncap: '⩃',
        ncaron: 'ň',
        ncedil: 'ņ',
        ncong: '≇',
        ncongdot: '⩭̸',
        ncup: '⩂',
        ncy: 'н',
        ndash: '–',
        ne: '≠',
        neArr: '⇗',
        nearhk: '⤤',
        nearr: '↗',
        nearrow: '↗',
        nedot: '≐̸',
        nequiv: '≢',
        nesear: '⤨',
        nesim: '≂̸',
        nexist: '∄',
        nexists: '∄',
        nfr: '𝔫',
        ngE: '≧̸',
        nge: '≱',
        ngeq: '≱',
        ngeqq: '≧̸',
        ngeqslant: '⩾̸',
        nges: '⩾̸',
        ngsim: '≵',
        ngt: '≯',
        ngtr: '≯',
        nhArr: '⇎',
        nharr: '↮',
        nhpar: '⫲',
        ni: '∋',
        nis: '⋼',
        nisd: '⋺',
        niv: '∋',
        njcy: 'њ',
        nlArr: '⇍',
        nlE: '≦̸',
        nlarr: '↚',
        nldr: '‥',
        nle: '≰',
        nleftarrow: '↚',
        nleftrightarrow: '↮',
        nleq: '≰',
        nleqq: '≦̸',
        nleqslant: '⩽̸',
        nles: '⩽̸',
        nless: '≮',
        nlsim: '≴',
        nlt: '≮',
        nltri: '⋪',
        nltrie: '⋬',
        nmid: '∤',
        nopf: '𝕟',
        no: '¬',
        not: '¬',
        notin: '∉',
        notinE: '⋹̸',
        notindot: '⋵̸',
        notinva: '∉',
        notinvb: '⋷',
        notinvc: '⋶',
        notni: '∌',
        notniva: '∌',
        notnivb: '⋾',
        notnivc: '⋽',
        npar: '∦',
        nparallel: '∦',
        nparsl: '⫽⃥',
        npart: '∂̸',
        npolint: '⨔',
        npr: '⊀',
        nprcue: '⋠',
        npre: '⪯̸',
        nprec: '⊀',
        npreceq: '⪯̸',
        nrArr: '⇏',
        nrarr: '↛',
        nrarrc: '⤳̸',
        nrarrw: '↝̸',
        nrightarrow: '↛',
        nrtri: '⋫',
        nrtrie: '⋭',
        nsc: '⊁',
        nsccue: '⋡',
        nsce: '⪰̸',
        nscr: '𝓃',
        nshortmid: '∤',
        nshortparallel: '∦',
        nsim: '≁',
        nsime: '≄',
        nsimeq: '≄',
        nsmid: '∤',
        nspar: '∦',
        nsqsube: '⋢',
        nsqsupe: '⋣',
        nsub: '⊄',
        nsubE: '⫅̸',
        nsube: '⊈',
        nsubset: '⊂⃒',
        nsubseteq: '⊈',
        nsubseteqq: '⫅̸',
        nsucc: '⊁',
        nsucceq: '⪰̸',
        nsup: '⊅',
        nsupE: '⫆̸',
        nsupe: '⊉',
        nsupset: '⊃⃒',
        nsupseteq: '⊉',
        nsupseteqq: '⫆̸',
        ntgl: '≹',
        ntild: 'ñ',
        ntilde: 'ñ',
        ntlg: '≸',
        ntriangleleft: '⋪',
        ntrianglelefteq: '⋬',
        ntriangleright: '⋫',
        ntrianglerighteq: '⋭',
        nu: 'ν',
        num: '#',
        numero: '№',
        numsp: ' ',
        nvDash: '⊭',
        nvHarr: '⤄',
        nvap: '≍⃒',
        nvdash: '⊬',
        nvge: '≥⃒',
        nvgt: '>⃒',
        nvinfin: '⧞',
        nvlArr: '⤂',
        nvle: '≤⃒',
        nvlt: '<⃒',
        nvltrie: '⊴⃒',
        nvrArr: '⤃',
        nvrtrie: '⊵⃒',
        nvsim: '∼⃒',
        nwArr: '⇖',
        nwarhk: '⤣',
        nwarr: '↖',
        nwarrow: '↖',
        nwnear: '⤧',
        oS: 'Ⓢ',
        oacut: 'ó',
        oacute: 'ó',
        oast: '⊛',
        ocir: 'ô',
        ocirc: 'ô',
        ocy: 'о',
        odash: '⊝',
        odblac: 'ő',
        odiv: '⨸',
        odot: '⊙',
        odsold: '⦼',
        oelig: 'œ',
        ofcir: '⦿',
        ofr: '𝔬',
        ogon: '˛',
        ograv: 'ò',
        ograve: 'ò',
        ogt: '⧁',
        ohbar: '⦵',
        ohm: 'Ω',
        oint: '∮',
        olarr: '↺',
        olcir: '⦾',
        olcross: '⦻',
        oline: '‾',
        olt: '⧀',
        omacr: 'ō',
        omega: 'ω',
        omicron: 'ο',
        omid: '⦶',
        ominus: '⊖',
        oopf: '𝕠',
        opar: '⦷',
        operp: '⦹',
        oplus: '⊕',
        or: '∨',
        orarr: '↻',
        ord: 'º',
        order: 'ℴ',
        orderof: 'ℴ',
        ordf: 'ª',
        ordm: 'º',
        origof: '⊶',
        oror: '⩖',
        orslope: '⩗',
        orv: '⩛',
        oscr: 'ℴ',
        oslas: 'ø',
        oslash: 'ø',
        osol: '⊘',
        otild: 'õ',
        otilde: 'õ',
        otimes: '⊗',
        otimesas: '⨶',
        oum: 'ö',
        ouml: 'ö',
        ovbar: '⌽',
        par: '¶',
        para: '¶',
        parallel: '∥',
        parsim: '⫳',
        parsl: '⫽',
        part: '∂',
        pcy: 'п',
        percnt: '%',
        period: '.',
        permil: '‰',
        perp: '⊥',
        pertenk: '‱',
        pfr: '𝔭',
        phi: 'φ',
        phiv: 'ϕ',
        phmmat: 'ℳ',
        phone: '☎',
        pi: 'π',
        pitchfork: '⋔',
        piv: 'ϖ',
        planck: 'ℏ',
        planckh: 'ℎ',
        plankv: 'ℏ',
        plus: '+',
        plusacir: '⨣',
        plusb: '⊞',
        pluscir: '⨢',
        plusdo: '∔',
        plusdu: '⨥',
        pluse: '⩲',
        plusm: '±',
        plusmn: '±',
        plussim: '⨦',
        plustwo: '⨧',
        pm: '±',
        pointint: '⨕',
        popf: '𝕡',
        poun: '£',
        pound: '£',
        pr: '≺',
        prE: '⪳',
        prap: '⪷',
        prcue: '≼',
        pre: '⪯',
        prec: '≺',
        precapprox: '⪷',
        preccurlyeq: '≼',
        preceq: '⪯',
        precnapprox: '⪹',
        precneqq: '⪵',
        precnsim: '⋨',
        precsim: '≾',
        prime: '′',
        primes: 'ℙ',
        prnE: '⪵',
        prnap: '⪹',
        prnsim: '⋨',
        prod: '∏',
        profalar: '⌮',
        profline: '⌒',
        profsurf: '⌓',
        prop: '∝',
        propto: '∝',
        prsim: '≾',
        prurel: '⊰',
        pscr: '𝓅',
        psi: 'ψ',
        puncsp: ' ',
        qfr: '𝔮',
        qint: '⨌',
        qopf: '𝕢',
        qprime: '⁗',
        qscr: '𝓆',
        quaternions: 'ℍ',
        quatint: '⨖',
        quest: '?',
        questeq: '≟',
        quo: '"',
        quot: '"',
        rAarr: '⇛',
        rArr: '⇒',
        rAtail: '⤜',
        rBarr: '⤏',
        rHar: '⥤',
        race: '∽̱',
        racute: 'ŕ',
        radic: '√',
        raemptyv: '⦳',
        rang: '⟩',
        rangd: '⦒',
        range: '⦥',
        rangle: '⟩',
        raqu: '»',
        raquo: '»',
        rarr: '→',
        rarrap: '⥵',
        rarrb: '⇥',
        rarrbfs: '⤠',
        rarrc: '⤳',
        rarrfs: '⤞',
        rarrhk: '↪',
        rarrlp: '↬',
        rarrpl: '⥅',
        rarrsim: '⥴',
        rarrtl: '↣',
        rarrw: '↝',
        ratail: '⤚',
        ratio: '∶',
        rationals: 'ℚ',
        rbarr: '⤍',
        rbbrk: '❳',
        rbrace: '}',
        rbrack: ']',
        rbrke: '⦌',
        rbrksld: '⦎',
        rbrkslu: '⦐',
        rcaron: 'ř',
        rcedil: 'ŗ',
        rceil: '⌉',
        rcub: '}',
        rcy: 'р',
        rdca: '⤷',
        rdldhar: '⥩',
        rdquo: '”',
        rdquor: '”',
        rdsh: '↳',
        real: 'ℜ',
        realine: 'ℛ',
        realpart: 'ℜ',
        reals: 'ℝ',
        rect: '▭',
        re: '®',
        reg: '®',
        rfisht: '⥽',
        rfloor: '⌋',
        rfr: '𝔯',
        rhard: '⇁',
        rharu: '⇀',
        rharul: '⥬',
        rho: 'ρ',
        rhov: 'ϱ',
        rightarrow: '→',
        rightarrowtail: '↣',
        rightharpoondown: '⇁',
        rightharpoonup: '⇀',
        rightleftarrows: '⇄',
        rightleftharpoons: '⇌',
        rightrightarrows: '⇉',
        rightsquigarrow: '↝',
        rightthreetimes: '⋌',
        ring: '˚',
        risingdotseq: '≓',
        rlarr: '⇄',
        rlhar: '⇌',
        rlm: '‏',
        rmoust: '⎱',
        rmoustache: '⎱',
        rnmid: '⫮',
        roang: '⟭',
        roarr: '⇾',
        robrk: '⟧',
        ropar: '⦆',
        ropf: '𝕣',
        roplus: '⨮',
        rotimes: '⨵',
        rpar: ')',
        rpargt: '⦔',
        rppolint: '⨒',
        rrarr: '⇉',
        rsaquo: '›',
        rscr: '𝓇',
        rsh: '↱',
        rsqb: ']',
        rsquo: '’',
        rsquor: '’',
        rthree: '⋌',
        rtimes: '⋊',
        rtri: '▹',
        rtrie: '⊵',
        rtrif: '▸',
        rtriltri: '⧎',
        ruluhar: '⥨',
        rx: '℞',
        sacute: 'ś',
        sbquo: '‚',
        sc: '≻',
        scE: '⪴',
        scap: '⪸',
        scaron: 'š',
        sccue: '≽',
        sce: '⪰',
        scedil: 'ş',
        scirc: 'ŝ',
        scnE: '⪶',
        scnap: '⪺',
        scnsim: '⋩',
        scpolint: '⨓',
        scsim: '≿',
        scy: 'с',
        sdot: '⋅',
        sdotb: '⊡',
        sdote: '⩦',
        seArr: '⇘',
        searhk: '⤥',
        searr: '↘',
        searrow: '↘',
        sec: '§',
        sect: '§',
        semi: ';',
        seswar: '⤩',
        setminus: '∖',
        setmn: '∖',
        sext: '✶',
        sfr: '𝔰',
        sfrown: '⌢',
        sharp: '♯',
        shchcy: 'щ',
        shcy: 'ш',
        shortmid: '∣',
        shortparallel: '∥',
        sh: '­',
        shy: '­',
        sigma: 'σ',
        sigmaf: 'ς',
        sigmav: 'ς',
        sim: '∼',
        simdot: '⩪',
        sime: '≃',
        simeq: '≃',
        simg: '⪞',
        simgE: '⪠',
        siml: '⪝',
        simlE: '⪟',
        simne: '≆',
        simplus: '⨤',
        simrarr: '⥲',
        slarr: '←',
        smallsetminus: '∖',
        smashp: '⨳',
        smeparsl: '⧤',
        smid: '∣',
        smile: '⌣',
        smt: '⪪',
        smte: '⪬',
        smtes: '⪬︀',
        softcy: 'ь',
        sol: '/',
        solb: '⧄',
        solbar: '⌿',
        sopf: '𝕤',
        spades: '♠',
        spadesuit: '♠',
        spar: '∥',
        sqcap: '⊓',
        sqcaps: '⊓︀',
        sqcup: '⊔',
        sqcups: '⊔︀',
        sqsub: '⊏',
        sqsube: '⊑',
        sqsubset: '⊏',
        sqsubseteq: '⊑',
        sqsup: '⊐',
        sqsupe: '⊒',
        sqsupset: '⊐',
        sqsupseteq: '⊒',
        squ: '□',
        square: '□',
        squarf: '▪',
        squf: '▪',
        srarr: '→',
        sscr: '𝓈',
        ssetmn: '∖',
        ssmile: '⌣',
        sstarf: '⋆',
        star: '☆',
        starf: '★',
        straightepsilon: 'ϵ',
        straightphi: 'ϕ',
        strns: '¯',
        sub: '⊂',
        subE: '⫅',
        subdot: '⪽',
        sube: '⊆',
        subedot: '⫃',
        submult: '⫁',
        subnE: '⫋',
        subne: '⊊',
        subplus: '⪿',
        subrarr: '⥹',
        subset: '⊂',
        subseteq: '⊆',
        subseteqq: '⫅',
        subsetneq: '⊊',
        subsetneqq: '⫋',
        subsim: '⫇',
        subsub: '⫕',
        subsup: '⫓',
        succ: '≻',
        succapprox: '⪸',
        succcurlyeq: '≽',
        succeq: '⪰',
        succnapprox: '⪺',
        succneqq: '⪶',
        succnsim: '⋩',
        succsim: '≿',
        sum: '∑',
        sung: '♪',
        sup: '⊃',
        sup1: '¹',
        sup2: '²',
        sup3: '³',
        supE: '⫆',
        supdot: '⪾',
        supdsub: '⫘',
        supe: '⊇',
        supedot: '⫄',
        suphsol: '⟉',
        suphsub: '⫗',
        suplarr: '⥻',
        supmult: '⫂',
        supnE: '⫌',
        supne: '⊋',
        supplus: '⫀',
        supset: '⊃',
        supseteq: '⊇',
        supseteqq: '⫆',
        supsetneq: '⊋',
        supsetneqq: '⫌',
        supsim: '⫈',
        supsub: '⫔',
        supsup: '⫖',
        swArr: '⇙',
        swarhk: '⤦',
        swarr: '↙',
        swarrow: '↙',
        swnwar: '⤪',
        szli: 'ß',
        szlig: 'ß',
        target: '⌖',
        tau: 'τ',
        tbrk: '⎴',
        tcaron: 'ť',
        tcedil: 'ţ',
        tcy: 'т',
        tdot: '⃛',
        telrec: '⌕',
        tfr: '𝔱',
        there4: '∴',
        therefore: '∴',
        theta: 'θ',
        thetasym: 'ϑ',
        thetav: 'ϑ',
        thickapprox: '≈',
        thicksim: '∼',
        thinsp: ' ',
        thkap: '≈',
        thksim: '∼',
        thor: 'þ',
        thorn: 'þ',
        tilde: '˜',
        time: '×',
        times: '×',
        timesb: '⊠',
        timesbar: '⨱',
        timesd: '⨰',
        tint: '∭',
        toea: '⤨',
        top: '⊤',
        topbot: '⌶',
        topcir: '⫱',
        topf: '𝕥',
        topfork: '⫚',
        tosa: '⤩',
        tprime: '‴',
        trade: '™',
        triangle: '▵',
        triangledown: '▿',
        triangleleft: '◃',
        trianglelefteq: '⊴',
        triangleq: '≜',
        triangleright: '▹',
        trianglerighteq: '⊵',
        tridot: '◬',
        trie: '≜',
        triminus: '⨺',
        triplus: '⨹',
        trisb: '⧍',
        tritime: '⨻',
        trpezium: '⏢',
        tscr: '𝓉',
        tscy: 'ц',
        tshcy: 'ћ',
        tstrok: 'ŧ',
        twixt: '≬',
        twoheadleftarrow: '↞',
        twoheadrightarrow: '↠',
        uArr: '⇑',
        uHar: '⥣',
        uacut: 'ú',
        uacute: 'ú',
        uarr: '↑',
        ubrcy: 'ў',
        ubreve: 'ŭ',
        ucir: 'û',
        ucirc: 'û',
        ucy: 'у',
        udarr: '⇅',
        udblac: 'ű',
        udhar: '⥮',
        ufisht: '⥾',
        ufr: '𝔲',
        ugrav: 'ù',
        ugrave: 'ù',
        uharl: '↿',
        uharr: '↾',
        uhblk: '▀',
        ulcorn: '⌜',
        ulcorner: '⌜',
        ulcrop: '⌏',
        ultri: '◸',
        umacr: 'ū',
        um: '¨',
        uml: '¨',
        uogon: 'ų',
        uopf: '𝕦',
        uparrow: '↑',
        updownarrow: '↕',
        upharpoonleft: '↿',
        upharpoonright: '↾',
        uplus: '⊎',
        upsi: 'υ',
        upsih: 'ϒ',
        upsilon: 'υ',
        upuparrows: '⇈',
        urcorn: '⌝',
        urcorner: '⌝',
        urcrop: '⌎',
        uring: 'ů',
        urtri: '◹',
        uscr: '𝓊',
        utdot: '⋰',
        utilde: 'ũ',
        utri: '▵',
        utrif: '▴',
        uuarr: '⇈',
        uum: 'ü',
        uuml: 'ü',
        uwangle: '⦧',
        vArr: '⇕',
        vBar: '⫨',
        vBarv: '⫩',
        vDash: '⊨',
        vangrt: '⦜',
        varepsilon: 'ϵ',
        varkappa: 'ϰ',
        varnothing: '∅',
        varphi: 'ϕ',
        varpi: 'ϖ',
        varpropto: '∝',
        varr: '↕',
        varrho: 'ϱ',
        varsigma: 'ς',
        varsubsetneq: '⊊︀',
        varsubsetneqq: '⫋︀',
        varsupsetneq: '⊋︀',
        varsupsetneqq: '⫌︀',
        vartheta: 'ϑ',
        vartriangleleft: '⊲',
        vartriangleright: '⊳',
        vcy: 'в',
        vdash: '⊢',
        vee: '∨',
        veebar: '⊻',
        veeeq: '≚',
        vellip: '⋮',
        verbar: '|',
        vert: '|',
        vfr: '𝔳',
        vltri: '⊲',
        vnsub: '⊂⃒',
        vnsup: '⊃⃒',
        vopf: '𝕧',
        vprop: '∝',
        vrtri: '⊳',
        vscr: '𝓋',
        vsubnE: '⫋︀',
        vsubne: '⊊︀',
        vsupnE: '⫌︀',
        vsupne: '⊋︀',
        vzigzag: '⦚',
        wcirc: 'ŵ',
        wedbar: '⩟',
        wedge: '∧',
        wedgeq: '≙',
        weierp: '℘',
        wfr: '𝔴',
        wopf: '𝕨',
        wp: '℘',
        wr: '≀',
        wreath: '≀',
        wscr: '𝓌',
        xcap: '⋂',
        xcirc: '◯',
        xcup: '⋃',
        xdtri: '▽',
        xfr: '𝔵',
        xhArr: '⟺',
        xharr: '⟷',
        xi: 'ξ',
        xlArr: '⟸',
        xlarr: '⟵',
        xmap: '⟼',
        xnis: '⋻',
        xodot: '⨀',
        xopf: '𝕩',
        xoplus: '⨁',
        xotime: '⨂',
        xrArr: '⟹',
        xrarr: '⟶',
        xscr: '𝓍',
        xsqcup: '⨆',
        xuplus: '⨄',
        xutri: '△',
        xvee: '⋁',
        xwedge: '⋀',
        yacut: 'ý',
        yacute: 'ý',
        yacy: 'я',
        ycirc: 'ŷ',
        ycy: 'ы',
        ye: '¥',
        yen: '¥',
        yfr: '𝔶',
        yicy: 'ї',
        yopf: '𝕪',
        yscr: '𝓎',
        yucy: 'ю',
        yum: 'ÿ',
        yuml: 'ÿ',
        zacute: 'ź',
        zcaron: 'ž',
        zcy: 'з',
        zdot: 'ż',
        zeetrf: 'ℨ',
        zeta: 'ζ',
        zfr: '𝔷',
        zhcy: 'ж',
        zigrarr: '⇝',
        zopf: '𝕫',
        zscr: '𝓏',
        zwj: '‍',
        zwnj: '‌',
      };
    },
    function(e, r) {
      e.exports = {
        AElig: 'Æ',
        AMP: '&',
        Aacute: 'Á',
        Acirc: 'Â',
        Agrave: 'À',
        Aring: 'Å',
        Atilde: 'Ã',
        Auml: 'Ä',
        COPY: '©',
        Ccedil: 'Ç',
        ETH: 'Ð',
        Eacute: 'É',
        Ecirc: 'Ê',
        Egrave: 'È',
        Euml: 'Ë',
        GT: '>',
        Iacute: 'Í',
        Icirc: 'Î',
        Igrave: 'Ì',
        Iuml: 'Ï',
        LT: '<',
        Ntilde: 'Ñ',
        Oacute: 'Ó',
        Ocirc: 'Ô',
        Ograve: 'Ò',
        Oslash: 'Ø',
        Otilde: 'Õ',
        Ouml: 'Ö',
        QUOT: '"',
        REG: '®',
        THORN: 'Þ',
        Uacute: 'Ú',
        Ucirc: 'Û',
        Ugrave: 'Ù',
        Uuml: 'Ü',
        Yacute: 'Ý',
        aacute: 'á',
        acirc: 'â',
        acute: '´',
        aelig: 'æ',
        agrave: 'à',
        amp: '&',
        aring: 'å',
        atilde: 'ã',
        auml: 'ä',
        brvbar: '¦',
        ccedil: 'ç',
        cedil: '¸',
        cent: '¢',
        copy: '©',
        curren: '¤',
        deg: '°',
        divide: '÷',
        eacute: 'é',
        ecirc: 'ê',
        egrave: 'è',
        eth: 'ð',
        euml: 'ë',
        frac12: '½',
        frac14: '¼',
        frac34: '¾',
        gt: '>',
        iacute: 'í',
        icirc: 'î',
        iexcl: '¡',
        igrave: 'ì',
        iquest: '¿',
        iuml: 'ï',
        laquo: '«',
        lt: '<',
        macr: '¯',
        micro: 'µ',
        middot: '·',
        nbsp: ' ',
        not: '¬',
        ntilde: 'ñ',
        oacute: 'ó',
        ocirc: 'ô',
        ograve: 'ò',
        ordf: 'ª',
        ordm: 'º',
        oslash: 'ø',
        otilde: 'õ',
        ouml: 'ö',
        para: '¶',
        plusmn: '±',
        pound: '£',
        quot: '"',
        raquo: '»',
        reg: '®',
        sect: '§',
        shy: '­',
        sup1: '¹',
        sup2: '²',
        sup3: '³',
        szlig: 'ß',
        thorn: 'þ',
        times: '×',
        uacute: 'ú',
        ucirc: 'û',
        ugrave: 'ù',
        uml: '¨',
        uuml: 'ü',
        yacute: 'ý',
        yen: '¥',
        yuml: 'ÿ',
      };
    },
    function(e, r) {
      e.exports = {
        0: '�',
        128: '€',
        130: '‚',
        131: 'ƒ',
        132: '„',
        133: '…',
        134: '†',
        135: '‡',
        136: 'ˆ',
        137: '‰',
        138: 'Š',
        139: '‹',
        140: 'Œ',
        142: 'Ž',
        145: '‘',
        146: '’',
        147: '“',
        148: '”',
        149: '•',
        150: '–',
        151: '—',
        152: '˜',
        153: '™',
        154: 'š',
        155: '›',
        156: 'œ',
        158: 'ž',
        159: 'Ÿ',
      };
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        var r = 'string' == typeof e ? e.charCodeAt(0) : e;
        return (
          (r >= 97 && r <= 102) || (r >= 65 && r <= 70) || (r >= 48 && r <= 57)
        );
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        return o(e) || i(e);
      }
      var o = t(234),
        i = t(226);
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        var r, t;
        return (
          'text' !== e.type ||
          !e.position ||
          ((r = e.position.start),
          (t = e.position.end),
          r.line !== t.line || t.column - r.column === e.value.length)
        );
      }
      function o(e, r) {
        return (e.value += r.value), e;
      }
      function i(e, r) {
        return this.options.commonmark
          ? r
          : ((e.children = e.children.concat(r.children)), e);
      }
      function a(e) {
        function r(r, t) {
          function o(e) {
            for (var r = -1, t = e.indexOf('\n'); -1 !== t; )
              q++, (r = t), (t = e.indexOf('\n', t + 1));
            -1 === r ? (E += e.length) : (E = e.length - r),
              q in w && (-1 !== r ? (E += w[q]) : E <= w[q] && (E = w[q] + 1));
          }
          function i() {
            var e = [],
              r = q + 1;
            return function() {
              for (var t = q + 1; r < t; ) e.push((w[r] || 0) + 1), r++;
              return e;
            };
          }
          function a() {
            var e = { line: q, column: E };
            return (e.offset = y.toOffset(e)), e;
          }
          function l(e) {
            (this.start = e), (this.end = a());
          }
          function s(e) {
            r.substring(0, e.length) !== e &&
              y.file.fail(
                new Error(
                  'Incorrectly eaten value: please report this warning on http://git.io/vg5Ft'
                ),
                a()
              );
          }
          function u() {
            function e(e, t) {
              var n = e.position,
                o = n ? n.start : r,
                i = [],
                a = n && n.end.line,
                c = r.line;
              if (((e.position = new l(o)), n && t && n.indent)) {
                if (((i = n.indent), a < c)) {
                  for (; ++a < c; ) i.push((w[a] || 0) + 1);
                  i.push(r.column);
                }
                t = i.concat(t);
              }
              return (e.position.indent = t || []), e;
            }
            var r = a();
            return e;
          }
          function f(e, r) {
            var t = r ? r.children : A,
              o = t[t.length - 1];
            return (
              o &&
                e.type === o.type &&
                e.type in c &&
                n(o) &&
                n(e) &&
                (e = c[e.type].call(y, o, e)),
              e !== o && t.push(e),
              y.atStart && 0 !== A.length && y.exitStart(),
              e
            );
          }
          function p(e) {
            function t(e, r) {
              return p(f(p(e), r), l);
            }
            function n() {
              var n = t.apply(null, arguments);
              return (q = d.line), (E = d.column), (r = e + r), n;
            }
            function c() {
              var t = p({});
              return (q = d.line), (E = d.column), (r = e + r), t.position;
            }
            var l = i(),
              p = u(),
              d = a();
            return (
              s(e),
              (t.reset = n),
              (n.test = c),
              (t.test = c),
              (r = r.substring(e.length)),
              o(e),
              (l = l()),
              t
            );
          }
          var d,
            h,
            g,
            m,
            v,
            b,
            y = this,
            w = y.offset,
            A = [],
            k = y[e + 'Methods'],
            x = y[e + 'Tokenizers'],
            q = t.line,
            E = t.column;
          if (!r) return A;
          for (p.now = a, p.file = y.file, o(''); r; ) {
            for (
              d = -1, h = k.length, v = !1;
              ++d < h &&
              ((m = k[d]),
              !(g = x[m]) ||
                (g.onlyAtStart && !y.atStart) ||
                (g.notInList && y.inList) ||
                (g.notInBlock && y.inBlock) ||
                (g.notInLink && y.inLink) ||
                ((b = r.length), g.apply(y, [p, r]), !(v = b !== r.length)));

            );
            v || y.file.fail(new Error('Infinite loop'), p.now());
          }
          return (y.eof = a()), A;
        }
        return r;
      }
      e.exports = a;
      var c = { text: o, blockquote: i };
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        var r,
          t,
          n = this,
          c = n.options;
        if (null == e) e = {};
        else {
          if ('object' != typeof e)
            throw new Error('Invalid value `' + e + '` for setting `options`');
          e = o(e);
        }
        for (r in a) {
          if (
            ((t = e[r]),
            null == t && (t = c[r]),
            ('blocks' !== r && 'boolean' != typeof t) ||
              ('blocks' === r && 'object' != typeof t))
          )
            throw new Error(
              'Invalid value `' + t + '` for setting `options.' + r + '`'
            );
          e[r] = t;
        }
        return (n.options = e), (n.escape = i(e)), n;
      }
      var o = t(224),
        i = t(273),
        a = t(235);
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        var r = e || {};
        return r.commonmark ? a : r.gfm ? i : o;
      }
      e.exports = n;
      var o = [
          '\\',
          '`',
          '*',
          '{',
          '}',
          '[',
          ']',
          '(',
          ')',
          '#',
          '+',
          '-',
          '.',
          '!',
          '_',
          '>',
        ],
        i = o.concat(['~', '|']),
        a = i.concat([
          '\n',
          '"',
          '$',
          '%',
          '&',
          "'",
          ',',
          '/',
          ':',
          ';',
          '<',
          '=',
          '?',
          '@',
          '^',
        ]);
      (n.default = o), (n.gfm = i), (n.commonmark = a);
    },
    function(e, r) {
      e.exports = [
        'address',
        'article',
        'aside',
        'base',
        'basefont',
        'blockquote',
        'body',
        'caption',
        'center',
        'col',
        'colgroup',
        'dd',
        'details',
        'dialog',
        'dir',
        'div',
        'dl',
        'dt',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'frame',
        'frameset',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'iframe',
        'legend',
        'li',
        'link',
        'main',
        'menu',
        'menuitem',
        'meta',
        'nav',
        'noframes',
        'ol',
        'optgroup',
        'option',
        'p',
        'param',
        'pre',
        'section',
        'source',
        'title',
        'summary',
        'table',
        'tbody',
        'td',
        'tfoot',
        'th',
        'thead',
        'title',
        'tr',
        'track',
        'ul',
      ];
    },
    function(e, r, t) {
      'use strict';
      function n() {
        var e,
          r = this,
          t = String(r.file),
          n = { line: 1, column: 1, offset: 0 },
          l = o(n);
        return (
          (t = t.replace(c, a)),
          65279 === t.charCodeAt(0) &&
            ((t = t.slice(1)), l.column++, l.offset++),
          (e = {
            type: 'root',
            children: r.tokenizeBlock(t, l),
            position: { start: n, end: r.eof || o(n) },
          }),
          r.options.position || i(e, !0),
          e
        );
      }
      var o = t(224),
        i = t(276);
      e.exports = n;
      var a = '\n',
        c = /\r\n|\r/g;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        return a(e, r ? o : i), e;
      }
      function o(e) {
        delete e.position;
      }
      function i(e) {
        e.position = void 0;
      }
      var a = t(227);
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t, i, a) {
        var c = null !== i && void 0 !== i,
          l = null !== t && void 0 !== t,
          s = o(e);
        if (l && ('number' != typeof t || t < 0 || t === 1 / 0))
          throw new Error('Expected positive finite index or child node');
        if (c && (!n(null, i) || !i.children))
          throw new Error('Expected parent node');
        if (!r || !r.type || 'string' != typeof r.type) return !1;
        if (c !== l) throw new Error('Expected both parent and index');
        return Boolean(s.call(a, r, t, i));
      }
      function o(e) {
        if ('string' == typeof e) return l(e);
        if (null === e || void 0 === e) return s;
        if ('object' == typeof e) return ('length' in e ? c : a)(e);
        if ('function' == typeof e) return e;
        throw new Error('Expected function, string, or object as test');
      }
      function i(e) {
        for (var r = [], t = e.length, n = -1; ++n < t; ) r[n] = o(e[n]);
        return r;
      }
      function a(e) {
        function r(r) {
          var t;
          for (t in e) if (r[t] !== e[t]) return !1;
          return !0;
        }
        return r;
      }
      function c(e) {
        function r() {
          for (var e = -1; ++e < n; )
            if (t[e].apply(this, arguments)) return !0;
          return !1;
        }
        var t = i(e),
          n = t.length;
        return r;
      }
      function l(e) {
        function r(r) {
          return Boolean(r && r.type === e);
        }
        return r;
      }
      function s() {
        return !0;
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        var n,
          i,
          a,
          c,
          l = r.charAt(0);
        if ('\n' === l) {
          if (t) return !0;
          for (
            c = 1, n = r.length, i = l, a = '';
            c < n && ((l = r.charAt(c)), o(l));

          )
            (a += l), '\n' === l && ((i += a), (a = '')), c++;
          e(i);
        }
      }
      var o = t(223);
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        for (
          var n, o, u, f = -1, p = r.length, d = '', h = '', g = '', m = '';
          ++f < p;

        )
          if (((n = r.charAt(f)), u))
            if (((u = !1), (d += g), (h += m), (g = ''), (m = ''), n === a))
              (g = n), (m = n);
            else
              for (d += n, h += n; ++f < p; ) {
                if (!(n = r.charAt(f)) || n === a) {
                  (m = n), (g = n);
                  break;
                }
                (d += n), (h += n);
              }
          else if (
            n === l &&
            r.charAt(f + 1) === n &&
            r.charAt(f + 2) === n &&
            r.charAt(f + 3) === n
          )
            (g += s), (f += 3), (u = !0);
          else if (n === c) (g += n), (u = !0);
          else {
            for (o = ''; n === c || n === l; ) (o += n), (n = r.charAt(++f));
            if (n !== a) break;
            (g += o + n), (m += n);
          }
        if (h) return !!t || e(d)({ type: 'code', lang: null, value: i(h) });
      }
      var o = t(229),
        i = t(230);
      e.exports = n;
      var a = '\n',
        c = '\t',
        l = ' ',
        s = o(l, 4);
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        var n,
          p,
          d,
          h,
          g,
          m,
          v,
          b,
          y,
          w,
          A,
          k = this,
          x = k.options,
          q = r.length + 1,
          E = 0,
          O = '';
        if (x.gfm) {
          for (; E < q && ((d = r.charAt(E)) === c || d === a); ) (O += d), E++;
          if (((w = E), (d = r.charAt(E)) === l || d === s)) {
            for (E++, p = d, n = 1, O += d; E < q && (d = r.charAt(E)) === p; )
              (O += d), n++, E++;
            if (!(n < u)) {
              for (; E < q && ((d = r.charAt(E)) === c || d === a); )
                (O += d), E++;
              for (
                h = '', g = '';
                E < q && (d = r.charAt(E)) !== i && d !== l && d !== s;

              )
                d === c || d === a ? (g += d) : ((h += g + d), (g = '')), E++;
              if (!(d = r.charAt(E)) || d === i) {
                if (t) return !0;
                for (
                  A = e.now(),
                    A.column += O.length,
                    A.offset += O.length,
                    O += h,
                    h = k.decode.raw(k.unescape(h), A),
                    g && (O += g),
                    g = '',
                    b = '',
                    y = '',
                    m = '',
                    v = '';
                  E < q;

                )
                  if (
                    ((d = r.charAt(E)),
                    (m += b),
                    (v += y),
                    (b = ''),
                    (y = ''),
                    d === i)
                  ) {
                    for (
                      m ? ((b += d), (y += d)) : (O += d), g = '', E++;
                      E < q && (d = r.charAt(E)) === c;

                    )
                      (g += d), E++;
                    if (((b += g), (y += g.slice(w)), !(g.length >= f))) {
                      for (g = ''; E < q && (d = r.charAt(E)) === p; )
                        (g += d), E++;
                      if (((b += g), (y += g), !(g.length < n))) {
                        for (
                          g = '';
                          E < q && ((d = r.charAt(E)) === c || d === a);

                        )
                          (b += d), (y += d), E++;
                        if (!d || d === i) break;
                      }
                    }
                  } else (m += d), (y += d), E++;
                return (
                  (O += m + b),
                  e(O)({ type: 'code', lang: h || null, value: o(v) })
                );
              }
            }
          }
        }
      }
      var o = t(230);
      e.exports = n;
      var i = '\n',
        a = '\t',
        c = ' ',
        l = '~',
        s = '`',
        u = 3,
        f = 4;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        for (
          var n,
            u,
            f,
            p,
            d,
            h,
            g,
            m,
            v,
            b = this,
            y = b.offset,
            w = b.blockTokenizers,
            A = b.interruptBlockquote,
            k = e.now(),
            x = k.line,
            q = r.length,
            E = [],
            O = [],
            L = [],
            j = 0;
          j < q && ((u = r.charAt(j)) === l || u === c);

        )
          j++;
        if (r.charAt(j) === s) {
          if (t) return !0;
          for (j = 0; j < q; ) {
            for (
              p = r.indexOf(a, j), g = j, m = !1, -1 === p && (p = q);
              j < q && ((u = r.charAt(j)) === l || u === c);

            )
              j++;
            if (
              (r.charAt(j) === s
                ? (j++, (m = !0), r.charAt(j) === l && j++)
                : (j = g),
              (d = r.slice(j, p)),
              !m && !o(d))
            ) {
              j = g;
              break;
            }
            if (!m && ((f = r.slice(j)), i(A, w, b, [e, f, !0]))) break;
            (h = g === j ? d : r.slice(g, p)),
              L.push(j - g),
              E.push(h),
              O.push(d),
              (j = p + 1);
          }
          for (j = -1, q = L.length, n = e(E.join(a)); ++j < q; )
            (y[x] = (y[x] || 0) + L[j]), x++;
          return (
            (v = b.enterBlock()),
            (O = b.tokenizeBlock(O.join(a), k)),
            v(),
            n({ type: 'blockquote', children: O })
          );
        }
      }
      var o = t(225),
        i = t(231);
      e.exports = n;
      var a = '\n',
        c = '\t',
        l = ' ',
        s = '>';
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        for (
          var n,
            s,
            u,
            f = this,
            p = f.options,
            d = r.length + 1,
            h = -1,
            g = e.now(),
            m = '',
            v = '';
          ++h < d;

        ) {
          if ((n = r.charAt(h)) !== a && n !== i) {
            h--;
            break;
          }
          m += n;
        }
        for (u = 0; ++h <= d; ) {
          if ((n = r.charAt(h)) !== c) {
            h--;
            break;
          }
          (m += n), u++;
        }
        if (!(u > l) && u && (p.pedantic || r.charAt(h + 1) !== c)) {
          for (d = r.length + 1, s = ''; ++h < d; ) {
            if ((n = r.charAt(h)) !== a && n !== i) {
              h--;
              break;
            }
            s += n;
          }
          if (p.pedantic || 0 !== s.length || !n || n === o) {
            if (t) return !0;
            for (
              m += s, s = '', v = '';
              ++h < d && (n = r.charAt(h)) && n !== o;

            )
              if (n === a || n === i || n === c) {
                for (; n === a || n === i; ) (s += n), (n = r.charAt(++h));
                for (; n === c; ) (s += n), (n = r.charAt(++h));
                for (; n === a || n === i; ) (s += n), (n = r.charAt(++h));
                h--;
              } else (v += s + n), (s = '');
            return (
              (g.column += m.length),
              (g.offset += m.length),
              (m += v + s),
              e(m)({
                type: 'heading',
                depth: u,
                children: f.tokenizeInline(v, g),
              })
            );
          }
        }
      }
      e.exports = n;
      var o = '\n',
        i = '\t',
        a = ' ',
        c = '#',
        l = 6;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        for (
          var n, f, p, d, h = -1, g = r.length + 1, m = '';
          ++h < g && ((n = r.charAt(h)) === i || n === a);

        )
          m += n;
        if (n === c || n === s || n === l)
          for (f = n, m += n, p = 1, d = ''; ++h < g; )
            if ((n = r.charAt(h)) === f) p++, (m += d + f), (d = '');
            else {
              if (n !== a)
                return p >= u && (!n || n === o)
                  ? ((m += d), !!t || e(m)({ type: 'thematicBreak' }))
                  : void 0;
              d += n;
            }
      }
      e.exports = n;
      var o = '\n',
        i = '\t',
        a = ' ',
        c = '*',
        l = '_',
        s = '-',
        u = 3;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        for (
          var n,
            i,
            a,
            l,
            u,
            f,
            y,
            A,
            k,
            x,
            q,
            E,
            S,
            N,
            T,
            D,
            C,
            R,
            P,
            U,
            I,
            B,
            _,
            H,
            z = this,
            V = z.options.commonmark,
            G = z.options.pedantic,
            F = z.blockTokenizers,
            M = z.interruptList,
            Z = 0,
            $ = r.length,
            J = null,
            Q = 0;
          Z < $;

        ) {
          if ((l = r.charAt(Z)) === b) Q += w - (Q % w);
          else {
            if (l !== m) break;
            Q++;
          }
          Z++;
        }
        if (!(Q >= w)) {
          if (((l = r.charAt(Z)), (n = V ? j : L), !0 === O[l]))
            (u = l), (a = !1);
          else {
            for (a = !0, i = ''; Z < $ && ((l = r.charAt(Z)), s(l)); )
              (i += l), Z++;
            if (((l = r.charAt(Z)), !i || !0 !== n[l])) return;
            (J = parseInt(i, 10)), (u = l);
          }
          if ((l = r.charAt(++Z)) === m || l === b) {
            if (t) return !0;
            for (Z = 0, N = [], T = [], D = []; Z < $; ) {
              for (
                f = r.indexOf(v, Z),
                  y = Z,
                  A = !1,
                  H = !1,
                  -1 === f && (f = $),
                  _ = Z + w,
                  Q = 0;
                Z < $;

              ) {
                if ((l = r.charAt(Z)) === b) Q += w - (Q % w);
                else {
                  if (l !== m) break;
                  Q++;
                }
                Z++;
              }
              if (
                (Q >= w && (H = !0),
                C && Q >= C.indent && (H = !0),
                (l = r.charAt(Z)),
                (k = null),
                !H)
              ) {
                if (!0 === O[l]) (k = l), Z++, Q++;
                else {
                  for (i = ''; Z < $ && ((l = r.charAt(Z)), s(l)); )
                    (i += l), Z++;
                  (l = r.charAt(Z)),
                    Z++,
                    i && !0 === n[l] && ((k = l), (Q += i.length + 1));
                }
                if (k)
                  if ((l = r.charAt(Z)) === b) (Q += w - (Q % w)), Z++;
                  else if (l === m) {
                    for (_ = Z + w; Z < _ && r.charAt(Z) === m; ) Z++, Q++;
                    Z === _ &&
                      r.charAt(Z) === m &&
                      ((Z -= w - 1), (Q -= w - 1));
                  } else l !== v && '' !== l && (k = null);
              }
              if (k) {
                if (!G && u !== k) break;
                A = !0;
              } else
                V || H || r.charAt(y) !== m
                  ? V && C && (H = Q >= C.indent || Q > w)
                  : (H = !0),
                  (A = !1),
                  (Z = y);
              if (
                ((q = r.slice(y, f)),
                (x = y === Z ? q : r.slice(Z, f)),
                (k === d || k === h || k === g) &&
                  F.thematicBreak.call(z, e, q, !0))
              )
                break;
              if (((E = S), (S = !c(x).length), H && C))
                (C.value = C.value.concat(D, q)),
                  (T = T.concat(D, q)),
                  (D = []);
              else if (A)
                0 !== D.length && (C.value.push(''), (C.trail = D.concat())),
                  (C = { value: [q], indent: Q, trail: [] }),
                  N.push(C),
                  (T = T.concat(D, q)),
                  (D = []);
              else if (S) {
                if (E) break;
                D.push(q);
              } else {
                if (E) break;
                if (p(M, F, z, [e, q, !0])) break;
                (C.value = C.value.concat(D, q)),
                  (T = T.concat(D, q)),
                  (D = []);
              }
              Z = f + 1;
            }
            for (
              I = e(T.join(v)).reset({
                type: 'list',
                ordered: a,
                start: J,
                loose: null,
                children: [],
              }),
                R = z.enterList(),
                P = z.enterBlock(),
                U = !1,
                Z = -1,
                $ = N.length;
              ++Z < $;

            )
              (C = N[Z].value.join(v)),
                (B = e.now()),
                (C = e(C)(o(z, C, B), I)),
                C.loose && (U = !0),
                (C = N[Z].trail.join(v)),
                Z !== $ - 1 && (C += v),
                e(C);
            return R(), P(), (I.loose = U), I;
          }
        }
      }
      function o(e, r, t) {
        var n,
          o,
          c = e.offset,
          l = e.options.pedantic ? i : a,
          s = null;
        return (
          (r = l.apply(null, arguments)),
          e.options.gfm &&
            (n = r.match(k)) &&
            ((o = n[0].length),
            (s = n[1].toLowerCase() === y),
            (c[t.line] += o),
            (r = r.slice(o))),
          {
            type: 'listItem',
            loose: A.test(r) || r.charAt(r.length - 1) === v,
            checked: s,
            children: e.tokenizeBlock(r, t),
          }
        );
      }
      function i(e, r, t) {
        function n(e) {
          return (o[i] = (o[i] || 0) + e.length), i++, '';
        }
        var o = e.offset,
          i = t.line;
        return (r = r.replace(q, n)), (i = t.line), r.replace(E, n);
      }
      function a(e, r, t) {
        function n(e, r, t, n, c) {
          return (
            (i = r + t + n),
            (a = c),
            Number(t) < 10 && i.length % 2 == 1 && (t = m + t),
            (o = r + l(m, t.length) + n) + a
          );
        }
        var o,
          i,
          a,
          c,
          s,
          p,
          d,
          h = e.offset,
          g = t.line;
        for (
          r = r.replace(x, n),
            c = r.split(v),
            s = f(r, u(o).indent).split(v),
            s[0] = a,
            h[g] = (h[g] || 0) + i.length,
            g++,
            p = 0,
            d = c.length;
          ++p < d;

        )
          (h[g] = (h[g] || 0) + c[p].length - s[p].length), g++;
        return s.join(v);
      }
      var c = t(225),
        l = t(229),
        s = t(226),
        u = t(236),
        f = t(285),
        p = t(231);
      e.exports = n;
      var d = '*',
        h = '_',
        g = '-',
        m = ' ',
        v = '\n',
        b = '\t',
        y = 'x',
        w = 4,
        A = /\n\n(?!\s*$)/,
        k = /^\[([ \t]|x|X)][ \t]/,
        x = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,
        q = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,
        E = /^( {1,4}|\t)?/gm,
        O = {};
      (O[d] = !0), (O['+'] = !0), (O[g] = !0);
      var L = {};
      L['.'] = !0;
      var j = {};
      (j['.'] = !0), (j[')'] = !0);
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        var t,
          n,
          u,
          f,
          p = e.split(l),
          d = p.length + 1,
          h = 1 / 0,
          g = [];
        for (p.unshift(i(c, r) + '!'); d--; )
          if (((n = a(p[d])), (g[d] = n.stops), 0 !== o(p[d]).length)) {
            if (!n.indent) {
              h = 1 / 0;
              break;
            }
            n.indent > 0 && n.indent < h && (h = n.indent);
          }
        if (h !== 1 / 0)
          for (d = p.length; d--; ) {
            for (u = g[d], t = h; t && !(t in u); ) t--;
            (f = 0 !== o(p[d]).length && h && t !== h ? s : ''),
              (p[d] = f + p[d].slice(t in u ? u[t] + 1 : 0));
          }
        return p.shift(), p.join(l);
      }
      var o = t(225),
        i = t(229),
        a = t(236);
      e.exports = n;
      var c = ' ',
        l = '\n',
        s = '\t';
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        for (
          var n,
            s,
            u,
            f,
            p,
            d = this,
            h = e.now(),
            g = r.length,
            m = -1,
            v = '';
          ++m < g;

        ) {
          if ((u = r.charAt(m)) !== a || m >= c) {
            m--;
            break;
          }
          v += u;
        }
        for (n = '', s = ''; ++m < g; ) {
          if ((u = r.charAt(m)) === o) {
            m--;
            break;
          }
          u === a || u === i ? (s += u) : ((n += s + u), (s = ''));
        }
        if (
          ((h.column += v.length),
          (h.offset += v.length),
          (v += n + s),
          (u = r.charAt(++m)),
          (f = r.charAt(++m)),
          u === o && l[f])
        ) {
          for (v += u, s = f, p = l[f]; ++m < g; ) {
            if ((u = r.charAt(m)) !== f) {
              if (u !== o) return;
              m--;
              break;
            }
            s += u;
          }
          return (
            !!t ||
            e(v + s)({
              type: 'heading',
              depth: p,
              children: d.tokenizeInline(n, h),
            })
          );
        }
      }
      e.exports = n;
      var o = '\n',
        i = '\t',
        a = ' ',
        c = 3,
        l = {};
      (l['='] = 1), (l['-'] = 2);
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        for (
          var n,
            s,
            u,
            f,
            p,
            d,
            h,
            g = this,
            m = g.options.blocks,
            v = r.length,
            b = 0,
            y = [
              [
                /^<(script|pre|style)(?=(\s|>|$))/i,
                /<\/(script|pre|style)>/i,
                !0,
              ],
              [/^<!--/, /-->/, !0],
              [/^<\?/, /\?>/, !0],
              [/^<![A-Za-z]/, />/, !0],
              [/^<!\[CDATA\[/, /\]\]>/, !0],
              [
                new RegExp('^</?(' + m.join('|') + ')(?=(\\s|/?>|$))', 'i'),
                /^$/,
                !0,
              ],
              [new RegExp(o.source + '\\s*$'), /^$/, !1],
            ];
          b < v && ((f = r.charAt(b)) === i || f === a);

        )
          b++;
        if (r.charAt(b) === l) {
          for (
            n = r.indexOf(c, b + 1),
              n = -1 === n ? v : n,
              s = r.slice(b, n),
              u = -1,
              p = y.length;
            ++u < p;

          )
            if (y[u][0].test(s)) {
              d = y[u];
              break;
            }
          if (d) {
            if (t) return d[2];
            if (((b = n), !d[1].test(s)))
              for (; b < v; ) {
                if (
                  ((n = r.indexOf(c, b + 1)),
                  (n = -1 === n ? v : n),
                  (s = r.slice(b + 1, n)),
                  d[1].test(s))
                ) {
                  s && (b = n);
                  break;
                }
                b = n;
              }
            return (h = r.slice(0, b)), e(h)({ type: 'html', value: h });
          }
        }
      }
      var o = t(237).openCloseTag;
      e.exports = n;
      var i = '\t',
        a = ' ',
        c = '\n',
        l = '<';
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        var n,
          g,
          m,
          v,
          b,
          y,
          w,
          A,
          k,
          x,
          q,
          E,
          O = this,
          L = O.offset;
        if (O.options.footnotes) {
          for (
            n = 0, g = r.length, m = '', v = e.now(), b = v.line;
            n < g && ((k = r.charAt(n)), o(k));

          )
            (m += k), n++;
          if (r.charAt(n) === u && r.charAt(n + 1) === p) {
            for (
              m += u + p, n = m.length, w = '';
              n < g && (k = r.charAt(n)) !== f;

            )
              k === a && ((w += k), n++, (k = r.charAt(n))), (w += k), n++;
            if (w && r.charAt(n) === f && r.charAt(n + 1) === d) {
              if (t) return !0;
              for (
                x = i(w), m += w + f + d, n = m.length;
                n < g && ((k = r.charAt(n)) === l || k === s);

              )
                (m += k), n++;
              for (
                v.column += m.length,
                  v.offset += m.length,
                  w = '',
                  y = '',
                  A = '';
                n < g;

              ) {
                if ((k = r.charAt(n)) === c) {
                  for (A = k, n++; n < g && (k = r.charAt(n)) === c; )
                    (A += k), n++;
                  for (w += A, A = ''; n < g && (k = r.charAt(n)) === s; )
                    (A += k), n++;
                  if (0 === A.length) break;
                  w += A;
                }
                w && ((y += w), (w = '')), (y += k), n++;
              }
              return (
                (m += y),
                (y = y.replace(h, function(e) {
                  return (L[b] = (L[b] || 0) + e.length), b++, '';
                })),
                (q = e(m)),
                (E = O.enterBlock()),
                (y = O.tokenizeBlock(y, v)),
                E(),
                q({ type: 'footnoteDefinition', identifier: x, children: y })
              );
            }
          }
        }
      }
      var o = t(223),
        i = t(232);
      (e.exports = n), (n.notInList = !0), (n.notInBlock = !0);
      var a = '\\',
        c = '\n',
        l = '\t',
        s = ' ',
        u = '[',
        f = ']',
        p = '^',
        d = ':',
        h = /^( {4}|\t)?/gm;
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        return String(e).replace(/\s+/g, ' ');
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        for (
          var n,
            a,
            w,
            A,
            k,
            x,
            q,
            E,
            O = this,
            L = O.options.commonmark,
            j = 0,
            S = r.length,
            N = '';
          j < S && ((A = r.charAt(j)) === d || A === p);

        )
          (N += A), j++;
        if ((A = r.charAt(j)) === h) {
          for (j++, N += A, w = ''; j < S && (A = r.charAt(j)) !== g; )
            A === u && ((w += A), j++, (A = r.charAt(j))), (w += A), j++;
          if (w && r.charAt(j) === g && r.charAt(j + 1) === b) {
            for (
              x = w, N += w + g + b, j = N.length, w = '';
              j < S && ((A = r.charAt(j)) === p || A === d || A === f);

            )
              (N += A), j++;
            if (((A = r.charAt(j)), (w = ''), (n = N), A === y)) {
              for (j++; j < S && ((A = r.charAt(j)), o(A)); ) (w += A), j++;
              if ((A = r.charAt(j)) === o.delimiter) (N += y + w + A), j++;
              else {
                if (L) return;
                (j -= w.length + 1), (w = '');
              }
            }
            if (!w) {
              for (; j < S && ((A = r.charAt(j)), i(A)); ) (w += A), j++;
              N += w;
            }
            if (w) {
              for (
                q = w, w = '';
                j < S && ((A = r.charAt(j)) === p || A === d || A === f);

              )
                (w += A), j++;
              if (
                ((A = r.charAt(j)),
                (k = null),
                A === l ? (k = l) : A === s ? (k = s) : A === m && (k = v),
                k)
              ) {
                if (!w) return;
                for (
                  N += w + A, j = N.length, w = '';
                  j < S && (A = r.charAt(j)) !== k;

                ) {
                  if (A === f) {
                    if ((j++, (A = r.charAt(j)) === f || A === k)) return;
                    w += f;
                  }
                  (w += A), j++;
                }
                if ((A = r.charAt(j)) !== k) return;
                (a = N), (N += w + A), j++, (E = w), (w = '');
              } else (w = ''), (j = N.length);
              for (; j < S && ((A = r.charAt(j)) === p || A === d); )
                (N += A), j++;
              return (
                (A = r.charAt(j)),
                A && A !== f
                  ? void 0
                  : !!t ||
                    ((n = e(n).test().end),
                    (q = O.decode.raw(O.unescape(q), n, { nonTerminated: !1 })),
                    E &&
                      ((a = e(a).test().end),
                      (E = O.decode.raw(O.unescape(E), a))),
                    e(N)({
                      type: 'definition',
                      identifier: c(x),
                      title: E || null,
                      url: q,
                    }))
              );
            }
          }
        }
      }
      function o(e) {
        return e !== w && e !== h && e !== g;
      }
      function i(e) {
        return e !== h && e !== g && !a(e);
      }
      var a = t(223),
        c = t(232);
      (e.exports = n), (n.notInList = !0), (n.notInBlock = !0);
      var l = '"',
        s = "'",
        u = '\\',
        f = '\n',
        p = '\t',
        d = ' ',
        h = '[',
        g = ']',
        m = '(',
        v = ')',
        b = ':',
        y = '<',
        w = '>';
      o.delimiter = w;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        var n,
          y,
          w,
          A,
          k,
          x,
          q,
          E,
          O,
          L,
          j,
          S,
          N,
          T,
          D,
          C,
          R,
          P,
          U,
          I,
          B,
          _,
          H,
          z,
          V = this;
        if (V.options.gfm) {
          for (n = 0, P = 0, x = r.length + 1, q = []; n < x; ) {
            if (
              ((_ = r.indexOf(f, n)),
              (H = r.indexOf(l, n + 1)),
              -1 === _ && (_ = r.length),
              -1 === H || H > _)
            ) {
              if (P < h) return;
              break;
            }
            q.push(r.slice(n, _)), P++, (n = _ + 1);
          }
          for (
            A = q.join(f),
              y = q.splice(1, 1)[0] || [],
              n = 0,
              x = y.length,
              P--,
              w = !1,
              j = [];
            n < x;

          ) {
            if ((O = y.charAt(n)) === l) {
              if (((L = null), !1 === w)) {
                if (!1 === z) return;
              } else j.push(w), (w = !1);
              z = !1;
            } else if (O === c) (L = !0), (w = w || b);
            else if (O === s) w = w === g ? m : L && w === b ? v : g;
            else if (!o(O)) return;
            n++;
          }
          if ((!1 !== w && j.push(w), !(j.length < d))) {
            if (t) return !0;
            for (
              R = -1,
                I = [],
                B = e(A).reset({ type: 'table', align: j, children: I });
              ++R < P;

            ) {
              for (
                U = q[R],
                  k = { type: 'tableRow', children: [] },
                  R && e(f),
                  e(U).reset(k, B),
                  x = U.length + 1,
                  n = 0,
                  E = '',
                  S = '',
                  N = !0,
                  T = null,
                  D = null;
                n < x;

              )
                if ((O = U.charAt(n)) !== p && O !== u) {
                  if ('' === O || O === l)
                    if (N) e(O);
                    else {
                      if (O && D) {
                        (E += O), n++;
                        continue;
                      }
                      (!S && !O) ||
                        N ||
                        ((A = S),
                        E.length > 1 &&
                          (O
                            ? ((A += E.slice(0, E.length - 1)),
                              (E = E.charAt(E.length - 1)))
                            : ((A += E), (E = ''))),
                        (C = e.now()),
                        e(A)(
                          {
                            type: 'tableCell',
                            children: V.tokenizeInline(S, C),
                          },
                          k
                        )),
                        e(E + O),
                        (E = ''),
                        (S = '');
                    }
                  else if (
                    (E && ((S += E), (E = '')),
                    (S += O),
                    O === i && n !== x - 2 && ((S += U.charAt(n + 1)), n++),
                    O === a)
                  ) {
                    for (T = 1; U.charAt(n + 1) === O; ) (S += O), n++, T++;
                    D ? T >= D && (D = 0) : (D = T);
                  }
                  (N = !1), n++;
                } else S ? (E += O) : e(O), n++;
              R || e(f + y);
            }
            return B;
          }
        }
      }
      var o = t(223);
      e.exports = n;
      var i = '\\',
        a = '`',
        c = '-',
        l = '|',
        s = ':',
        u = ' ',
        f = '\n',
        p = '\t',
        d = 1,
        h = 2,
        g = 'left',
        m = 'center',
        v = 'right',
        b = null;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        for (
          var n,
            p,
            d,
            h,
            g,
            m = this,
            v = m.options,
            b = v.commonmark,
            y = v.gfm,
            w = m.blockTokenizers,
            A = m.interruptParagraph,
            k = r.indexOf(l),
            x = r.length;
          k < x;

        ) {
          if (-1 === k) {
            k = x;
            break;
          }
          if (r.charAt(k + 1) === l) break;
          if (b) {
            for (h = 0, n = k + 1; n < x; ) {
              if ((d = r.charAt(n)) === s) {
                h = f;
                break;
              }
              if (d !== u) break;
              h++, n++;
            }
            if (h >= f) {
              k = r.indexOf(l, k + 1);
              continue;
            }
          }
          if (((p = r.slice(k + 1)), c(A, w, m, [e, p, !0]))) break;
          if (
            w.list.call(m, e, p, !0) &&
            (m.inList || b || (y && !i(o.left(p).charAt(0))))
          )
            break;
          if (
            ((n = k),
            -1 !== (k = r.indexOf(l, k + 1)) && '' === o(r.slice(n, k)))
          ) {
            k = n;
            break;
          }
        }
        return (
          (p = r.slice(0, k)),
          '' === o(p)
            ? (e(p), null)
            : !!t ||
              ((g = e.now()),
              (p = a(p)),
              e(p)({ type: 'paragraph', children: m.tokenizeInline(p, g) }))
        );
      }
      var o = t(225),
        i = t(226),
        a = t(230),
        c = t(231);
      e.exports = n;
      var l = '\n',
        s = '\t',
        u = ' ',
        f = 4;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        var n,
          o,
          i = this;
        if (
          '\\' === r.charAt(0) &&
          ((n = r.charAt(1)), -1 !== i.escape.indexOf(n))
        )
          return (
            !!t ||
            ((o = '\n' === n ? { type: 'break' } : { type: 'text', value: n }),
            e('\\' + n)(o))
          );
      }
      var o = t(294);
      (e.exports = n), (n.locator = o);
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        return e.indexOf('\\', r);
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        var n, a, d, h, g, m, v, b, y, w, A, k;
        if (r.charAt(0) === c) {
          for (
            n = this,
              a = '',
              d = r.length,
              h = 0,
              g = '',
              v = !1,
              b = '',
              h++,
              a = c;
            h < d &&
            ((m = r.charAt(h)),
            !(
              o(m) ||
              m === l ||
              m === s ||
              (':' === m && r.charAt(h + 1) === u)
            ));

          )
            (g += m), h++;
          if (g) {
            if (((b += g), (g = ''), (m = r.charAt(h)), (b += m), h++, m === s))
              v = !0;
            else {
              if (':' !== m || r.charAt(h + 1) !== u) return;
              (b += u), h++;
            }
            for (; h < d && ((m = r.charAt(h)), !o(m) && m !== l); )
              (g += m), h++;
            if (((m = r.charAt(h)), g && m === l))
              return (
                !!t ||
                ((b += g),
                (w = b),
                (a += b + m),
                (y = e.now()),
                y.column++,
                y.offset++,
                v &&
                  (b.slice(0, p).toLowerCase() === f
                    ? ((w = w.substr(p)), (y.column += p), (y.offset += p))
                    : (b = f + b)),
                (A = n.inlineTokenizers),
                (n.inlineTokenizers = { text: A.text }),
                (k = n.enterLink()),
                (w = n.tokenizeInline(w, y)),
                (n.inlineTokenizers = A),
                k(),
                e(a)({
                  type: 'link',
                  title: null,
                  url: i(b, { nonTerminated: !1 }),
                  children: w,
                }))
              );
          }
        }
      }
      var o = t(223),
        i = t(228),
        a = t(238);
      (e.exports = n), (n.locator = a), (n.notInLink = !0);
      var c = '<',
        l = '>',
        s = '@',
        u = '/',
        f = 'mailto:',
        p = f.length;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        var n,
          a,
          m,
          v,
          b,
          y,
          w,
          A,
          k,
          x,
          q,
          E,
          O = this;
        if (O.options.gfm) {
          for (n = '', v = -1, A = g; ++v < A; )
            if (
              ((y = h[v]), (w = r.slice(0, y.length)), w.toLowerCase() === y)
            ) {
              n = w;
              break;
            }
          if (n) {
            for (
              v = n.length, A = r.length, k = '', x = 0;
              v < A &&
              ((m = r.charAt(v)), !i(m) && m !== f) &&
              (('.' !== m &&
                ',' !== m &&
                ':' !== m &&
                ';' !== m &&
                '"' !== m &&
                "'" !== m &&
                ')' !== m &&
                ']' !== m) ||
                ((q = r.charAt(v + 1)) && !i(q))) &&
              ((m !== s && m !== c) || x++, (m !== u && m !== l) || !(--x < 0));

            )
              (k += m), v++;
            if (k) {
              if (((n += k), (a = n), y === d)) {
                if (-1 === (b = k.indexOf(p)) || b === A - 1) return;
                a = a.substr(d.length);
              }
              return (
                !!t ||
                ((E = O.enterLink()),
                (a = O.tokenizeInline(a, e.now())),
                E(),
                e(n)({
                  type: 'link',
                  title: null,
                  url: o(n, { nonTerminated: !1 }),
                  children: a,
                }))
              );
            }
          }
        }
      }
      var o = t(228),
        i = t(223),
        a = t(297);
      (e.exports = n), (n.locator = a), (n.notInLink = !0);
      var c = '[',
        l = ']',
        s = '(',
        u = ')',
        f = '<',
        p = '@',
        d = 'mailto:',
        h = ['http://', 'https://', d],
        g = h.length;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        var t,
          n = o.length,
          i = -1,
          a = -1;
        if (!this.options.gfm) return -1;
        for (; ++i < n; )
          -1 !== (t = e.indexOf(o[i], r)) && (t < a || -1 === a) && (a = t);
        return a;
      }
      e.exports = n;
      var o = ['https://', 'http://', 'mailto:'];
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        var n,
          i,
          s = this,
          u = r.length;
        if (
          !('<' !== r.charAt(0) || u < 3) &&
          ((n = r.charAt(1)),
          (o(n) || '?' === n || '!' === n || '/' === n) && (i = r.match(a)))
        )
          return (
            !!t ||
            ((i = i[0]),
            !s.inLink && c.test(i)
              ? (s.inLink = !0)
              : s.inLink && l.test(i) && (s.inLink = !1),
            e(i)({ type: 'html', value: i }))
          );
      }
      var o = t(234),
        i = t(238),
        a = t(237).tag;
      (e.exports = n), (n.locator = i);
      var c = /^<a /i,
        l = /^<\/a>/i;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        var n,
          i,
          v,
          b,
          y,
          w,
          A,
          k,
          x,
          q,
          E,
          O,
          L,
          j,
          S,
          N,
          T,
          D,
          C,
          R = this,
          P = '',
          U = 0,
          I = r.charAt(0),
          B = R.options.pedantic,
          _ = R.options.commonmark,
          H = R.options.gfm;
        if (
          ('!' === I && ((x = !0), (P = I), (I = r.charAt(++U))),
          I === l && (x || !R.inLink))
        ) {
          for (
            P += I,
              S = '',
              U++,
              O = r.length,
              T = e.now(),
              j = 0,
              T.column += U,
              T.offset += U;
            U < O;

          ) {
            if (((I = r.charAt(U)), (w = I), I === h)) {
              for (i = 1; r.charAt(U + 1) === h; ) (w += I), U++, i++;
              v ? i >= v && (v = 0) : (v = i);
            } else if (I === c) U++, (w += r.charAt(U));
            else if ((v && !H) || I !== l) {
              if ((!v || H) && I === s) {
                if (!j) {
                  if (!B)
                    for (; U < O && ((I = r.charAt(U + 1)), o(I)); )
                      (w += I), U++;
                  if (r.charAt(U + 1) !== u) return;
                  (w += u), (n = !0), U++;
                  break;
                }
                j--;
              }
            } else j++;
            (S += w), (w = ''), U++;
          }
          if (n) {
            for (q = S, P += S + w, U++; U < O && ((I = r.charAt(U)), o(I)); )
              (P += I), U++;
            if (
              ((I = r.charAt(U)), (k = _ ? m : g), (S = ''), (b = P), I === p)
            ) {
              for (U++, b += p; U < O && (I = r.charAt(U)) !== d; ) {
                if (_ && '\n' === I) return;
                (S += I), U++;
              }
              if (r.charAt(U) !== d) return;
              (P += p + S + d), (N = S), U++;
            } else {
              for (
                I = null, w = '';
                U < O && ((I = r.charAt(U)), !w || !a.call(k, I));

              ) {
                if (o(I)) {
                  if (!B) break;
                  w += I;
                } else {
                  if (I === u) j++;
                  else if (I === f) {
                    if (0 === j) break;
                    j--;
                  }
                  (S += w),
                    (w = ''),
                    I === c && ((S += c), (I = r.charAt(++U))),
                    (S += I);
                }
                U++;
              }
              (P += S), (N = S), (U = P.length);
            }
            for (S = ''; U < O && ((I = r.charAt(U)), o(I)); ) (S += I), U++;
            if (((I = r.charAt(U)), (P += S), S && a.call(k, I)))
              if ((U++, (P += I), (S = ''), (E = k[I]), (y = P), _)) {
                for (; U < O && (I = r.charAt(U)) !== E; )
                  I === c && ((S += c), (I = r.charAt(++U))), U++, (S += I);
                if ((I = r.charAt(U)) !== E) return;
                for (
                  L = S, P += S + I, U++;
                  U < O && ((I = r.charAt(U)), o(I));

                )
                  (P += I), U++;
              } else
                for (w = ''; U < O; ) {
                  if ((I = r.charAt(U)) === E)
                    A && ((S += E + w), (w = '')), (A = !0);
                  else if (A) {
                    if (I === f) {
                      (P += S + E + w), (L = S);
                      break;
                    }
                    o(I) ? (w += I) : ((S += E + w + I), (w = ''), (A = !1));
                  } else S += I;
                  U++;
                }
            if (r.charAt(U) === f)
              return (
                !!t ||
                ((P += f),
                (N = R.decode.raw(R.unescape(N), e(b).test().end, {
                  nonTerminated: !1,
                })),
                L &&
                  ((y = e(y).test().end), (L = R.decode.raw(R.unescape(L), y))),
                (C = { type: x ? 'image' : 'link', title: L || null, url: N }),
                x
                  ? (C.alt = R.decode.raw(R.unescape(q), T) || null)
                  : ((D = R.enterLink()),
                    (C.children = R.tokenizeInline(q, T)),
                    D()),
                e(P)(C))
              );
          }
        }
      }
      var o = t(223),
        i = t(239);
      (e.exports = n), (n.locator = i);
      var a = {}.hasOwnProperty,
        c = '\\',
        l = '[',
        s = ']',
        u = '(',
        f = ')',
        p = '<',
        d = '>',
        h = '`',
        g = {};
      (g['"'] = '"'), (g["'"] = "'");
      var m = {};
      (m['"'] = '"'), (m["'"] = "'"), (m[u] = f);
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        var n,
          i,
          v,
          b,
          y,
          w,
          A,
          k,
          x = this,
          q = r.charAt(0),
          E = 0,
          O = r.length,
          L = '',
          j = '',
          S = c,
          N = u;
        if (('!' === q && ((S = l), (j = q), (q = r.charAt(++E))), q === g)) {
          if (
            (E++, (j += q), (w = ''), x.options.footnotes && r.charAt(E) === d)
          ) {
            if (S === l) return;
            (j += d), E++, (S = s);
          }
          for (k = 0; E < O; ) {
            if ((q = r.charAt(E)) === g) (A = !0), k++;
            else if (q === m) {
              if (!k) break;
              k--;
            }
            q === h && ((w += h), (q = r.charAt(++E))), (w += q), E++;
          }
          if (((L = w), (n = w), (q = r.charAt(E)) === m)) {
            for (E++, L += q, w = ''; E < O && ((q = r.charAt(E)), o(q)); )
              (w += q), E++;
            if (((q = r.charAt(E)), S !== s && q === g)) {
              for (
                i = '', w += q, E++;
                E < O && (q = r.charAt(E)) !== g && q !== m;

              )
                q === h && ((i += h), (q = r.charAt(++E))), (i += q), E++;
              (q = r.charAt(E)),
                q === m ? ((N = i ? p : f), (w += i + q), E++) : (i = ''),
                (L += w),
                (w = '');
            } else {
              if (!n) return;
              i = n;
            }
            if (N === p || !A)
              return (
                (L = j + L),
                S === c && x.inLink
                  ? null
                  : !!t ||
                    (S === s && -1 !== n.indexOf(' ')
                      ? e(L)({
                          type: 'footnote',
                          children: this.tokenizeInline(n, e.now()),
                        })
                      : ((v = e.now()),
                        (v.column += j.length),
                        (v.offset += j.length),
                        (i = N === p ? i : n),
                        (b = { type: S + 'Reference', identifier: a(i) }),
                        (S !== c && S !== l) || (b.referenceType = N),
                        S === c
                          ? ((y = x.enterLink()),
                            (b.children = x.tokenizeInline(n, v)),
                            y())
                          : S === l &&
                            (b.alt = x.decode.raw(x.unescape(n), v) || null),
                        e(L)(b)))
              );
          }
        }
      }
      var o = t(223),
        i = t(239),
        a = t(232);
      (e.exports = n), (n.locator = i);
      var c = 'link',
        l = 'image',
        s = 'footnote',
        u = 'shortcut',
        f = 'collapsed',
        p = 'full',
        d = '^',
        h = '\\',
        g = '[',
        m = ']';
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        var n,
          a,
          s,
          u,
          f,
          p,
          d,
          h = this,
          g = 0,
          m = r.charAt(g);
        if (
          !(
            (m !== c && m !== l) ||
            r.charAt(++g) !== m ||
            ((a = h.options.pedantic),
            (s = m),
            (f = s + s),
            (p = r.length),
            g++,
            (u = ''),
            (m = ''),
            a && i(r.charAt(g)))
          )
        )
          for (; g < p; ) {
            if (
              ((d = m),
              !(
                (m = r.charAt(g)) !== s ||
                r.charAt(g + 1) !== s ||
                (a && i(d))
              ) && (m = r.charAt(g + 2)) !== s)
            ) {
              if (!o(u)) return;
              return (
                !!t ||
                ((n = e.now()),
                (n.column += 2),
                (n.offset += 2),
                e(f + u + f)({
                  type: 'strong',
                  children: h.tokenizeInline(u, n),
                }))
              );
            }
            a || '\\' !== m || ((u += m), (m = r.charAt(++g))), (u += m), g++;
          }
      }
      var o = t(225),
        i = t(223),
        a = t(302);
      (e.exports = n), (n.locator = a);
      var c = '*',
        l = '_';
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        var t = e.indexOf('**', r),
          n = e.indexOf('__', r);
        return -1 === n ? t : -1 === t ? n : n < t ? n : t;
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        var n,
          c,
          u,
          f,
          p,
          d,
          h,
          g = this,
          m = 0,
          v = r.charAt(m);
        if (
          !(
            (v !== l && v !== s) ||
            ((c = g.options.pedantic),
            (p = v),
            (u = v),
            (d = r.length),
            m++,
            (f = ''),
            (v = ''),
            c && a(r.charAt(m)))
          )
        )
          for (; m < d; ) {
            if (((h = v), !((v = r.charAt(m)) !== u || (c && a(h))))) {
              if ((v = r.charAt(++m)) !== u) {
                if (!o(f) || h === u) return;
                if (!c && u === s && i(v)) {
                  f += u;
                  continue;
                }
                return (
                  !!t ||
                  ((n = e.now()),
                  n.column++,
                  n.offset++,
                  e(p + f + u)({
                    type: 'emphasis',
                    children: g.tokenizeInline(f, n),
                  }))
                );
              }
              f += u;
            }
            c || '\\' !== v || ((f += v), (v = r.charAt(++m))), (f += v), m++;
          }
      }
      var o = t(225),
        i = t(304),
        a = t(223),
        c = t(305);
      (e.exports = n), (n.locator = c);
      var l = '*',
        s = '_';
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        return i.test('number' == typeof e ? o(e) : e.charAt(0));
      }
      e.exports = n;
      var o = String.fromCharCode,
        i = /\w/;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        var t = e.indexOf('*', r),
          n = e.indexOf('_', r);
        return -1 === n ? t : -1 === t ? n : n < t ? n : t;
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        var n,
          i,
          l,
          s = this,
          u = '',
          f = '',
          p = '',
          d = '';
        if (
          s.options.gfm &&
          r.charAt(0) === a &&
          r.charAt(1) === a &&
          !o(r.charAt(2))
        )
          for (
            n = 1, i = r.length, l = e.now(), l.column += 2, l.offset += 2;
            ++n < i;

          ) {
            if (!((u = r.charAt(n)) !== a || f !== a || (p && o(p))))
              return (
                !!t ||
                e(c + d + c)({
                  type: 'delete',
                  children: s.tokenizeInline(d, l),
                })
              );
            (d += f), (p = f), (f = u);
          }
      }
      var o = t(223),
        i = t(307);
      (e.exports = n), (n.locator = i);
      var a = '~',
        c = '~~';
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        return e.indexOf('~~', r);
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        for (
          var n, i, c, l, s, u, f, p, d = r.length, h = 0, g = '', m = '';
          h < d && r.charAt(h) === a;

        )
          (g += a), h++;
        if (g) {
          for (s = g, l = h, g = '', p = r.charAt(h), c = 0; h < d; ) {
            if (
              ((u = p),
              (p = r.charAt(h + 1)),
              u === a ? (c++, (m += u)) : ((c = 0), (g += u)),
              c && p !== a)
            ) {
              if (c === l) {
                (s += g + m), (f = !0);
                break;
              }
              (g += m), (m = '');
            }
            h++;
          }
          if (!f) {
            if (l % 2 != 0) return;
            g = '';
          }
          if (t) return !0;
          for (n = '', i = '', d = g.length, h = -1; ++h < d; )
            (u = g.charAt(h)),
              o(u) ? (i += u) : (i && (n && (n += i), (i = '')), (n += u));
          return e(s)({ type: 'inlineCode', value: n });
        }
      }
      var o = t(223),
        i = t(309);
      (e.exports = n), (n.locator = i);
      var a = '`';
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        return e.indexOf('`', r);
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        for (var n, o = r.length, a = -1, c = ''; ++a < o; ) {
          if ('\n' === (n = r.charAt(a))) {
            if (a < i) return;
            return !!t || ((c += n), e(c)({ type: 'break' }));
          }
          if (' ' !== n) return;
          c += n;
        }
      }
      var o = t(311);
      (e.exports = n), (n.locator = o);
      var i = 2;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        for (var t = e.indexOf('\n', r); t > r && ' ' === e.charAt(t - 1); )
          t--;
        return t;
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t) {
        var n,
          o,
          i,
          a,
          c,
          l,
          s,
          u,
          f,
          p,
          d = this;
        if (t) return !0;
        for (
          n = d.inlineMethods,
            a = n.length,
            o = d.inlineTokenizers,
            i = -1,
            f = r.length;
          ++i < a;

        )
          'text' !== (u = n[i]) &&
            o[u] &&
            ((s = o[u].locator),
            s || e.file.fail('Missing locator: `' + u + '`'),
            -1 !== (l = s.call(d, r, 1)) && l < f && (f = l));
        (c = r.slice(0, f)),
          (p = e.now()),
          d.decode(c, p, function(r, t, n) {
            e(n || r)({ type: 'text', value: r });
          });
      }
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        for (var t = e.length; t--; )
          if (e[t].tag === r) return e.splice(t, 1)[0];
        return !1;
      }
      function o(e, r) {
        var t = e.value.match(u);
        return !!t && { tag: t[2], opening: !t[1], node: e };
      }
      function i(e) {
        var r = e.value.match(s);
        return !!r && r[1];
      }
      function a(e, r, t) {
        var n = t.children.indexOf(e.node),
          o = t.children.indexOf(r.node),
          i = t.children.splice(n, o - n + 1),
          a = i.slice(1, -1);
        return {
          type: l,
          children: a,
          tag: e.tag,
          position: {
            start: e.node.position.start,
            end: r.node.position.end,
            indent: [],
          },
        };
      }
      var c = t(227),
        l = 'virtualHtml',
        s = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i,
        u = /^<(\/?)([a-z]+)\s*>$/;
      e.exports = function(e) {
        var r = void 0,
          t = void 0;
        return (
          c(
            e,
            'html',
            function(e, c, s) {
              t !== s && ((r = []), (t = s));
              var u = i(e);
              if (u)
                return (
                  s.children.splice(c, 1, {
                    type: l,
                    tag: u,
                    position: e.position,
                  }),
                  !0
                );
              var f = o(e, s);
              if (!f) return !0;
              var p = n(r, f.tag);
              return (
                p
                  ? s.children.splice(c, 0, a(f, p, s))
                  : f.opening || r.push(f),
                !0
              );
            },
            !0
          ),
          e
        );
      };
    },
    function(e, r, t) {
      'use strict';
      function n(e, r, t, n) {
        if ('remove' === n) t.children.splice(r, 1);
        else if ('unwrap' === n) {
          var o = [r, 1];
          e.children && (o = o.concat(e.children)),
            Array.prototype.splice.apply(t.children, o);
        }
      }
      var o = t(227);
      (r.ofType = function(e, r) {
        function t(e, t, o) {
          o && n(e, t, o, r);
        }
        return function(r) {
          return (
            e.forEach(function(e) {
              return o(r, e, t, !0);
            }),
            r
          );
        };
      }),
        (r.ifNotMatch = function(e, r) {
          function t(t, o, i) {
            i && !e(t, o, i) && n(t, o, i, r);
          }
          return function(e) {
            return o(e, t, !0), e;
          };
        });
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        var t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          c = r.renderers[e.type],
          l = e.position.start,
          u = [e.type, l.line, l.column].join('-');
        if ('text' === e.type) return c ? c(e.value, u) : e.value;
        if ('function' != typeof c && 'string' != typeof c && !o(c))
          throw new Error(
            'Renderer for type `' +
              e.type +
              '` not defined or is not renderable'
          );
        var f = i(e, u, r, c, t, a);
        return s.createElement(
          c,
          f,
          f.children ||
            (function() {
              return (
                e.children &&
                e.children.map(function(t, o) {
                  return n(t, r, { node: e, props: f }, o);
                })
              );
            })() ||
            void 0
        );
      }
      function o(e) {
        return s.Fragment && s.Fragment === e;
      }
      function i(e, r, t, o, i, s) {
        var f = { key: r },
          p = 'string' == typeof o;
        t.sourcePos && e.position && (f['data-sourcepos'] = c(e.position)),
          t.rawSourcePos && !p && (f.sourcePosition = e.position);
        var d =
          null !== e.identifier && void 0 !== e.identifier
            ? t.definitions[e.identifier] || {}
            : null;
        switch (e.type) {
          case 'root':
            a(f, { className: t.className });
            break;
          case 'heading':
            f.level = e.depth;
            break;
          case 'list':
            (f.start = e.start), (f.ordered = e.ordered), (f.tight = !e.loose);
            break;
          case 'listItem':
            (f.checked = e.checked),
              (f.tight = !e.loose),
              (f.children = (f.tight ? l(e) : e.children).map(function(r, o) {
                return n(r, t, { node: e, props: f }, o);
              }));
            break;
          case 'definition':
            a(f, { identifier: e.identifier, title: e.title, url: e.url });
            break;
          case 'code':
            a(f, { language: e.lang && e.lang.split(/\s/, 1)[0] });
            break;
          case 'inlineCode':
            (f.children = e.value), (f.inline = !0);
            break;
          case 'link':
            a(f, {
              title: e.title || void 0,
              href: t.transformLinkUri
                ? t.transformLinkUri(e.url, e.children, e.title)
                : e.url,
            });
            break;
          case 'image':
            a(f, {
              alt: e.alt || void 0,
              title: e.title || void 0,
              src: t.transformImageUri
                ? t.transformImageUri(e.url, e.children, e.title, e.alt)
                : e.url,
            });
            break;
          case 'linkReference':
            a(
              f,
              u(d, {
                href: t.transformLinkUri ? t.transformLinkUri(d.href) : d.href,
              })
            );
            break;
          case 'imageReference':
            a(f, {
              src:
                t.transformImageUri && d.href
                  ? t.transformImageUri(d.href, e.children, d.title, e.alt)
                  : d.href,
              title: d.title || void 0,
              alt: e.alt || void 0,
            });
            break;
          case 'table':
          case 'tableHead':
          case 'tableBody':
            f.columnAlignment = e.align;
            break;
          case 'tableRow':
            (f.isHeader = 'tableHead' === i.node.type),
              (f.columnAlignment = i.props.columnAlignment);
            break;
          case 'tableCell':
            a(f, {
              isHeader: i.props.isHeader,
              align: i.props.columnAlignment[s],
            });
            break;
          case 'virtualHtml':
            f.tag = e.tag;
            break;
          case 'html':
            (f.isBlock = e.position.start.line !== e.position.end.line),
              (f.escapeHtml = t.escapeHtml),
              (f.skipHtml = t.skipHtml);
            break;
          default:
            a(f, u(e, { type: void 0, position: void 0, children: void 0 }));
        }
        return !p && e.value && (f.value = e.value), f;
      }
      function a(e, r) {
        for (var t in r) void 0 !== r[t] && (e[t] = r[t]);
      }
      function c(e) {
        return [
          e.start.line,
          ':',
          e.start.column,
          '-',
          e.end.line,
          ':',
          e.end.column,
        ]
          .map(String)
          .join('');
      }
      function l(e) {
        return e.children.reduce(function(e, r) {
          return e.concat('paragraph' === r.type ? r.children || [] : [r]);
        }, []);
      }
      var s = t(0),
        u = t(224);
      e.exports = n;
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        var r = e.children;
        (e.children = [
          {
            type: 'tableHead',
            align: e.align,
            children: [r[0]],
            position: r[0].position,
          },
        ]),
          r.length > 1 &&
            e.children.push({
              type: 'tableBody',
              align: e.align,
              children: r.slice(1),
              position: {
                start: r[1].position.start,
                end: r[r.length - 1].position.end,
              },
            });
      }
      var o = t(227);
      e.exports = function(e) {
        return o(e, 'table', n), e;
      };
    },
    function(e, r, t) {
      'use strict';
      e.exports = function e(r) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (r.children || []).reduce(function(r, t) {
          return (
            'definition' === t.type &&
              (r[t.identifier] = { href: t.url, title: t.title }),
            e(t, r)
          );
        }, t);
      };
    },
    function(e, r, t) {
      'use strict';
      var n = ['http', 'https', 'mailto', 'tel'];
      e.exports = function(e) {
        var r = (e || '').trim(),
          t = r.charAt(0);
        if ('#' === t || '/' === t) return r;
        var o = r.indexOf(':');
        if (-1 === o) return r;
        for (var i = n.length, a = -1; ++a < i; ) {
          var c = n[a];
          if (o === c.length && r.slice(0, c.length) === c) return r;
        }
        return -1 !== (a = r.indexOf('?')) && o > a
          ? r
          : ((a = r.indexOf('#')),
            -1 !== a && o > a ? r : 'javascript:void(0)');
      };
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        return m(e, d(r), r.children);
      }
      function o(e) {
        var r = e.align ? { textAlign: e.align } : void 0,
          t = d(e);
        return m(
          e.isHeader ? 'th' : 'td',
          r ? h({ style: r }, t) : t,
          e.children
        );
      }
      function i(e) {
        return m('h' + e.level, d(e), e.children);
      }
      function a(e) {
        var r = d(e);
        return (
          null !== e.start && 1 !== e.start && (r.start = e.start.toString()),
          m(e.ordered ? 'ol' : 'ul', r, e.children)
        );
      }
      function c(e) {
        var r = null;
        if (null !== e.checked) {
          var t = e.checked;
          r = m('input', { type: 'checkbox', checked: t, readOnly: !0 });
        }
        return m('li', d(e), r, e.children);
      }
      function l(e) {
        var r = e.language && 'language-' + e.language,
          t = m('code', r ? { className: r } : null, e.value);
        return m('pre', d(e), t);
      }
      function s(e) {
        return m('code', d(e), e.children);
      }
      function u(e) {
        if (e.skipHtml) return null;
        var r = e.isBlock ? 'div' : 'span';
        if (e.escapeHtml) return m(r, null, e.value);
        var t = { dangerouslySetInnerHTML: { __html: e.value } };
        return m(r, t);
      }
      function f(e) {
        return m(e.tag, d(e), e.children);
      }
      function p() {
        return null;
      }
      function d(e) {
        return e['data-sourcepos']
          ? { 'data-sourcepos': e['data-sourcepos'] }
          : {};
      }
      var h = t(224),
        g = t(0),
        m = g.createElement;
      e.exports = {
        root: 'div',
        break: 'br',
        paragraph: 'p',
        emphasis: 'em',
        strong: 'strong',
        thematicBreak: 'hr',
        blockquote: 'blockquote',
        delete: 'del',
        link: 'a',
        image: 'img',
        linkReference: 'a',
        imageReference: 'img',
        table: n.bind(null, 'table'),
        tableHead: n.bind(null, 'thead'),
        tableBody: n.bind(null, 'tbody'),
        tableRow: n.bind(null, 'tr'),
        tableCell: o,
        list: a,
        listItem: c,
        definition: p,
        heading: i,
        inlineCode: s,
        code: l,
        html: u,
        virtualHtml: f,
      };
    },
    function(e, r, t) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 });
      var n = t(321),
        o = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(n);
      r.default = o.default;
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(r, '__esModule', { value: !0 });
      var o = t(0),
        i = n(o),
        a = t(233),
        c = n(a),
        l = t(322),
        s = n(l),
        u = t(326),
        f = n(u),
        p = t(327),
        d = n(p),
        h = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = e.slide;
          switch (r.acf_fc_layout) {
            case 'image':
              return i.default.createElement('img', {
                className: 'slide__image',
                src: r.images.url,
                alt: r.images.name,
              });
            case 'text':
              return i.default.createElement(c.default, {
                className: 'slide__text',
                source: r.text,
              });
            case 'heading':
              return i.default.createElement(
                'h2',
                { className: 'slide__h2' },
                r.heading
              );
            case 'youtube':
              return i.default.createElement(s.default, { slide: r });
            case 'video':
              return i.default.createElement(f.default, { slide: r });
            case 'gallery':
              return i.default.createElement(d.default, { slide: r });
            default:
              return null;
          }
        };
      r.default = h;
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(r, '__esModule', { value: !0 });
      var o = t(0),
        i = n(o),
        a = t(323),
        c = n(a),
        l = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = e.slide,
            t = { rel: 0, modestbranding: 1 },
            n = c.default.stringify(t),
            o = 'https://www.youtube.com/embed/' + r.video_id + '?' + n;
          return i.default.createElement(
            'article',
            { className: 'youtube__container' },
            i.default.createElement('iframe', {
              title: 'youtube-embed-' + r.video_id,
              className: 'youtube__iframe',
              type: 'text/html',
              width: '100%',
              height: '100%',
              src: o,
              frameBorder: '0',
            })
          );
        };
      r.default = l;
    },
    function(e, r, t) {
      'use strict';
      function n(e) {
        switch (e.arrayFormat) {
          case 'index':
            return function(r, t, n) {
              return null === t
                ? [i(r, e), '[', n, ']'].join('')
                : [i(r, e), '[', i(n, e), ']=', i(t, e)].join('');
            };
          case 'bracket':
            return function(r, t) {
              return null === t ? i(r, e) : [i(r, e), '[]=', i(t, e)].join('');
            };
          default:
            return function(r, t) {
              return null === t ? i(r, e) : [i(r, e), '=', i(t, e)].join('');
            };
        }
      }
      function o(e) {
        var r;
        switch (e.arrayFormat) {
          case 'index':
            return function(e, t, n) {
              if (
                ((r = /\[(\d*)\]$/.exec(e)),
                (e = e.replace(/\[\d*\]$/, '')),
                !r)
              )
                return void (n[e] = t);
              void 0 === n[e] && (n[e] = {}), (n[e][r[1]] = t);
            };
          case 'bracket':
            return function(e, t, n) {
              return (
                (r = /(\[\])$/.exec(e)),
                (e = e.replace(/\[\]$/, '')),
                r
                  ? void 0 === n[e]
                    ? void (n[e] = [t])
                    : void (n[e] = [].concat(n[e], t))
                  : void (n[e] = t)
              );
            };
          default:
            return function(e, r, t) {
              if (void 0 === t[e]) return void (t[e] = r);
              t[e] = [].concat(t[e], r);
            };
        }
      }
      function i(e, r) {
        return r.encode ? (r.strict ? s(e) : encodeURIComponent(e)) : e;
      }
      function a(e) {
        return Array.isArray(e)
          ? e.sort()
          : 'object' == typeof e
            ? a(Object.keys(e))
                .sort(function(e, r) {
                  return Number(e) - Number(r);
                })
                .map(function(r) {
                  return e[r];
                })
            : e;
      }
      function c(e) {
        var r = e.indexOf('?');
        return -1 === r ? '' : e.slice(r + 1);
      }
      function l(e, r) {
        r = u({ arrayFormat: 'none' }, r);
        var t = o(r),
          n = Object.create(null);
        return 'string' != typeof e
          ? n
          : (e = e.trim().replace(/^[?#&]/, ''))
            ? (e.split('&').forEach(function(e) {
                var r = e.replace(/\+/g, ' ').split('='),
                  o = r.shift(),
                  i = r.length > 0 ? r.join('=') : void 0;
                (i = void 0 === i ? null : f(i)), t(f(o), i, n);
              }),
              Object.keys(n)
                .sort()
                .reduce(function(e, r) {
                  var t = n[r];
                  return (
                    Boolean(t) && 'object' == typeof t && !Array.isArray(t)
                      ? (e[r] = a(t))
                      : (e[r] = t),
                    e
                  );
                }, Object.create(null)))
            : n;
      }
      var s = t(324),
        u = t(19),
        f = t(325);
      (r.extract = c),
        (r.parse = l),
        (r.stringify = function(e, r) {
          (r = u({ encode: !0, strict: !0, arrayFormat: 'none' }, r)),
            !1 === r.sort && (r.sort = function() {});
          var t = n(r);
          return e
            ? Object.keys(e)
                .sort(r.sort)
                .map(function(n) {
                  var o = e[n];
                  if (void 0 === o) return '';
                  if (null === o) return i(n, r);
                  if (Array.isArray(o)) {
                    var a = [];
                    return (
                      o.slice().forEach(function(e) {
                        void 0 !== e && a.push(t(n, e, a.length));
                      }),
                      a.join('&')
                    );
                  }
                  return i(n, r) + '=' + i(o, r);
                })
                .filter(function(e) {
                  return e.length > 0;
                })
                .join('&')
            : '';
        }),
        (r.parseUrl = function(e, r) {
          return { url: e.split('?')[0] || '', query: l(c(e), r) };
        });
    },
    function(e, r, t) {
      'use strict';
      e.exports = function(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
          return (
            '%' +
            e
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          );
        });
      };
    },
    function(e, r, t) {
      'use strict';
      function n(e, r) {
        try {
          return decodeURIComponent(e.join(''));
        } catch (e) {}
        if (1 === e.length) return e;
        r = r || 1;
        var t = e.slice(0, r),
          o = e.slice(r);
        return Array.prototype.concat.call([], n(t), n(o));
      }
      function o(e) {
        try {
          return decodeURIComponent(e);
        } catch (o) {
          for (var r = e.match(a), t = 1; t < r.length; t++)
            (e = n(r, t).join('')), (r = e.match(a));
          return e;
        }
      }
      function i(e) {
        for (var r = { '%FE%FF': '��', '%FF%FE': '��' }, t = c.exec(e); t; ) {
          try {
            r[t[0]] = decodeURIComponent(t[0]);
          } catch (e) {
            var n = o(t[0]);
            n !== t[0] && (r[t[0]] = n);
          }
          t = c.exec(e);
        }
        r['%C2'] = '�';
        for (var i = Object.keys(r), a = 0; a < i.length; a++) {
          var l = i[a];
          e = e.replace(new RegExp(l, 'g'), r[l]);
        }
        return e;
      }
      var a = new RegExp('%[a-f0-9]{2}', 'gi'),
        c = new RegExp('(%[a-f0-9]{2})+', 'gi');
      e.exports = function(e) {
        if ('string' != typeof e)
          throw new TypeError(
            'Expected `encodedURI` to be of type `string`, got `' +
              typeof e +
              '`'
          );
        try {
          return (e = e.replace(/\+/g, ' ')), decodeURIComponent(e);
        } catch (r) {
          return i(e);
        }
      };
    },
    function(e, r, t) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 });
      var n = t(0),
        o = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(n),
        i = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = e.slide,
            t = r.sources.map(function(e) {
              var t = r[e];
              return o.default.createElement('source', {
                key: t.id,
                src: t.url,
                type: t.mime_type,
              });
            });
          return o.default.createElement(
            'article',
            { className: 'video__container' },
            o.default.createElement(
              'video',
              {
                className: 'video',
                controls: !0,
                preload: 'auto',
                width: '100%',
              },
              t
            )
          );
        };
      r.default = i;
    },
    function(e, r, t) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 });
      var n = t(0),
        o = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(n),
        i = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = e.slide,
            t = 'slide__gallery slide__gallery-' + r.display,
            n = r.images.map(function(e) {
              return o.default.createElement('img', {
                className: 'slide__galleryimage',
                key: e.id,
                src: e.url,
                alt: e.name,
              });
            });
          return o.default.createElement('article', { className: t }, n);
        };
      r.default = i;
    },
    function(e, r, t) {
      'use strict';
      var n = t(329),
        o = t(330),
        i = t(241);
      e.exports = { formats: i, parse: o, stringify: n };
    },
    function(e, r, t) {
      'use strict';
      var n = t(240),
        o = t(241),
        i = {
          brackets: function(e) {
            return e + '[]';
          },
          indices: function(e, r) {
            return e + '[' + r + ']';
          },
          repeat: function(e) {
            return e;
          },
        },
        a = Date.prototype.toISOString,
        c = {
          delimiter: '&',
          encode: !0,
          encoder: n.encode,
          encodeValuesOnly: !1,
          serializeDate: function(e) {
            return a.call(e);
          },
          skipNulls: !1,
          strictNullHandling: !1,
        },
        l = function e(r, t, o, i, a, l, s, u, f, p, d, h) {
          var g = r;
          if ('function' == typeof s) g = s(t, g);
          else if (g instanceof Date) g = p(g);
          else if (null === g) {
            if (i) return l && !h ? l(t, c.encoder) : t;
            g = '';
          }
          if (
            'string' == typeof g ||
            'number' == typeof g ||
            'boolean' == typeof g ||
            n.isBuffer(g)
          ) {
            if (l) {
              return [d(h ? t : l(t, c.encoder)) + '=' + d(l(g, c.encoder))];
            }
            return [d(t) + '=' + d(String(g))];
          }
          var m = [];
          if (void 0 === g) return m;
          var v;
          if (Array.isArray(s)) v = s;
          else {
            var b = Object.keys(g);
            v = u ? b.sort(u) : b;
          }
          for (var y = 0; y < v.length; ++y) {
            var w = v[y];
            (a && null === g[w]) ||
              (m = Array.isArray(g)
                ? m.concat(e(g[w], o(t, w), o, i, a, l, s, u, f, p, d, h))
                : m.concat(
                    e(
                      g[w],
                      t + (f ? '.' + w : '[' + w + ']'),
                      o,
                      i,
                      a,
                      l,
                      s,
                      u,
                      f,
                      p,
                      d,
                      h
                    )
                  ));
          }
          return m;
        };
      e.exports = function(e, r) {
        var t = e,
          a = r ? n.assign({}, r) : {};
        if (
          null !== a.encoder &&
          void 0 !== a.encoder &&
          'function' != typeof a.encoder
        )
          throw new TypeError('Encoder has to be a function.');
        var s = void 0 === a.delimiter ? c.delimiter : a.delimiter,
          u =
            'boolean' == typeof a.strictNullHandling
              ? a.strictNullHandling
              : c.strictNullHandling,
          f = 'boolean' == typeof a.skipNulls ? a.skipNulls : c.skipNulls,
          p = 'boolean' == typeof a.encode ? a.encode : c.encode,
          d = 'function' == typeof a.encoder ? a.encoder : c.encoder,
          h = 'function' == typeof a.sort ? a.sort : null,
          g = void 0 !== a.allowDots && a.allowDots,
          m =
            'function' == typeof a.serializeDate
              ? a.serializeDate
              : c.serializeDate,
          v =
            'boolean' == typeof a.encodeValuesOnly
              ? a.encodeValuesOnly
              : c.encodeValuesOnly;
        if (void 0 === a.format) a.format = o.default;
        else if (!Object.prototype.hasOwnProperty.call(o.formatters, a.format))
          throw new TypeError('Unknown format option provided.');
        var b,
          y,
          w = o.formatters[a.format];
        'function' == typeof a.filter
          ? ((y = a.filter), (t = y('', t)))
          : Array.isArray(a.filter) && ((y = a.filter), (b = y));
        var A = [];
        if ('object' != typeof t || null === t) return '';
        var k;
        k =
          a.arrayFormat in i
            ? a.arrayFormat
            : 'indices' in a
              ? a.indices
                ? 'indices'
                : 'repeat'
              : 'indices';
        var x = i[k];
        b || (b = Object.keys(t)), h && b.sort(h);
        for (var q = 0; q < b.length; ++q) {
          var E = b[q];
          (f && null === t[E]) ||
            (A = A.concat(l(t[E], E, x, u, f, p ? d : null, y, h, g, m, w, v)));
        }
        var O = A.join(s),
          L = !0 === a.addQueryPrefix ? '?' : '';
        return O.length > 0 ? L + O : '';
      };
    },
    function(e, r, t) {
      'use strict';
      var n = t(240),
        o = Object.prototype.hasOwnProperty,
        i = {
          allowDots: !1,
          allowPrototypes: !1,
          arrayLimit: 20,
          decoder: n.decode,
          delimiter: '&',
          depth: 5,
          parameterLimit: 1e3,
          plainObjects: !1,
          strictNullHandling: !1,
        },
        a = function(e, r) {
          for (
            var t = {},
              n = r.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
              a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
              c = n.split(r.delimiter, a),
              l = 0;
            l < c.length;
            ++l
          ) {
            var s,
              u,
              f = c[l],
              p = f.indexOf(']='),
              d = -1 === p ? f.indexOf('=') : p + 1;
            -1 === d
              ? ((s = r.decoder(f, i.decoder)),
                (u = r.strictNullHandling ? null : ''))
              : ((s = r.decoder(f.slice(0, d), i.decoder)),
                (u = r.decoder(f.slice(d + 1), i.decoder))),
              o.call(t, s) ? (t[s] = [].concat(t[s]).concat(u)) : (t[s] = u);
          }
          return t;
        },
        c = function(e, r, t) {
          for (var n = r, o = e.length - 1; o >= 0; --o) {
            var i,
              a = e[o];
            if ('[]' === a) (i = []), (i = i.concat(n));
            else {
              i = t.plainObjects ? Object.create(null) : {};
              var c =
                  '[' === a.charAt(0) && ']' === a.charAt(a.length - 1)
                    ? a.slice(1, -1)
                    : a,
                l = parseInt(c, 10);
              !isNaN(l) &&
              a !== c &&
              String(l) === c &&
              l >= 0 &&
              t.parseArrays &&
              l <= t.arrayLimit
                ? ((i = []), (i[l] = n))
                : (i[c] = n);
            }
            n = i;
          }
          return n;
        },
        l = function(e, r, t) {
          if (e) {
            var n = t.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
              i = /(\[[^[\]]*])/,
              a = /(\[[^[\]]*])/g,
              l = i.exec(n),
              s = l ? n.slice(0, l.index) : n,
              u = [];
            if (s) {
              if (
                !t.plainObjects &&
                o.call(Object.prototype, s) &&
                !t.allowPrototypes
              )
                return;
              u.push(s);
            }
            for (var f = 0; null !== (l = a.exec(n)) && f < t.depth; ) {
              if (
                ((f += 1),
                !t.plainObjects &&
                  o.call(Object.prototype, l[1].slice(1, -1)) &&
                  !t.allowPrototypes)
              )
                return;
              u.push(l[1]);
            }
            return l && u.push('[' + n.slice(l.index) + ']'), c(u, r, t);
          }
        };
      e.exports = function(e, r) {
        var t = r ? n.assign({}, r) : {};
        if (
          null !== t.decoder &&
          void 0 !== t.decoder &&
          'function' != typeof t.decoder
        )
          throw new TypeError('Decoder has to be a function.');
        if (
          ((t.ignoreQueryPrefix = !0 === t.ignoreQueryPrefix),
          (t.delimiter =
            'string' == typeof t.delimiter || n.isRegExp(t.delimiter)
              ? t.delimiter
              : i.delimiter),
          (t.depth = 'number' == typeof t.depth ? t.depth : i.depth),
          (t.arrayLimit =
            'number' == typeof t.arrayLimit ? t.arrayLimit : i.arrayLimit),
          (t.parseArrays = !1 !== t.parseArrays),
          (t.decoder = 'function' == typeof t.decoder ? t.decoder : i.decoder),
          (t.allowDots =
            'boolean' == typeof t.allowDots ? t.allowDots : i.allowDots),
          (t.plainObjects =
            'boolean' == typeof t.plainObjects
              ? t.plainObjects
              : i.plainObjects),
          (t.allowPrototypes =
            'boolean' == typeof t.allowPrototypes
              ? t.allowPrototypes
              : i.allowPrototypes),
          (t.parameterLimit =
            'number' == typeof t.parameterLimit
              ? t.parameterLimit
              : i.parameterLimit),
          (t.strictNullHandling =
            'boolean' == typeof t.strictNullHandling
              ? t.strictNullHandling
              : i.strictNullHandling),
          '' === e || null === e || void 0 === e)
        )
          return t.plainObjects ? Object.create(null) : {};
        for (
          var o = 'string' == typeof e ? a(e, t) : e,
            c = t.plainObjects ? Object.create(null) : {},
            s = Object.keys(o),
            u = 0;
          u < s.length;
          ++u
        ) {
          var f = s[u],
            p = l(f, o[f], t);
          c = n.merge(c, p, t);
        }
        return n.compact(c);
      };
    },
    function(e, r) {},
  ])
);
