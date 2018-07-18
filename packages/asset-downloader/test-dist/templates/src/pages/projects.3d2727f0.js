webpackJsonp([2], {
  242: function(e, t, r) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = r(243),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n);
    t.default = o.default;
  },
  243: function(e, t, r) {
    'use strict';
    function n(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function o(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function u(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })(),
      l = r(0),
      i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(l),
      c = r(12);
    r(244);
    var f = function() {
        return window.scroll(0, 0);
      },
      s = (function(e) {
        function t() {
          return (
            n(this, t),
            o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          u(t, e),
          a(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props.projects.map(function(e) {
                  var t = '/projects/' + e.slug,
                    r = e.acf.thumbnail.sizes.medium_large;
                  return i.default.createElement(
                    'article',
                    { className: 'portfolioitem', key: e.id },
                    i.default.createElement(
                      c.Link,
                      { className: 'portfolioitem__link', to: t, onClick: f },
                      i.default.createElement(
                        'div',
                        { className: 'portfolioitem__crop' },
                        i.default.createElement('img', {
                          className: 'portfolioitem__thumbnail',
                          src: r,
                          alt: e.slug,
                        })
                      ),
                      i.default.createElement(
                        'h1',
                        { className: 'portfolioitem__h1' },
                        e.title.rendered
                      )
                    )
                  );
                });
                return i.default.createElement(
                  'section',
                  { className: 'portfolio' },
                  e
                );
              },
            },
          ]),
          t
        );
      })(l.Component);
    t.default = s;
  },
  244: function(e, t) {},
  74: function(e, t, r) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = r(0),
      o = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      })(n),
      u = r(12),
      a = r(242),
      l = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(a);
    t.default = (0, u.withRouteData)(function(e) {
      return o.createElement(l.default, e);
    });
  },
});
