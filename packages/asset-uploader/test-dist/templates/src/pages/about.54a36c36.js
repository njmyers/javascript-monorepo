webpackJsonp([1], {
  332: function(e, t, a) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(333),
      i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n);
    t.default = i.default;
  },
  333: function(e, t, a) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n),
      r = a(334);
    a(340);
    var l = function(e) {
      return i.default.createElement(
        'section',
        { className: 'about__container' },
        i.default.createElement('h1', { className: 'about__h1' }, 'About'),
        i.default.createElement(
          'article',
          { className: 'about__content' },
          i.default.createElement(
            'p',
            { className: 'about__paragraph' },
            'I am very passionate about computational design. I spend most of my free time developing small projects to improve both my design and technical skills. I want to contribute to the emergent digital and fabrication culture in architecture. I find all the technologies that are available to push design forward truly fascinating.'
          ),
          i.default.createElement(
            'p',
            { className: 'about__paragraph' },
            'I have worked in a highly challenging and creative computational design environment, where I learned how to code and developed skills with robotic fabrication. My thesis project explored the design opportunities of an airborne tensile construction informed by a swarm of semi-autonomous drones. I built a very complex and exciting generative design program to demonstrate the design opportunities based on real material and fabrication constraints. The program was able to generate various design iterations based on different inputs.'
          ),
          i.default.createElement(
            'p',
            { className: 'about__paragraph' },
            'I possess great technical skills working with different softwares and switching between them to exploit their potential. There’s no perfect program that does it all… at least not yet. The most important lesson I learned from coding is that although there’s still much to learn, the key to success is problem solving.'
          ),
          i.default.createElement(
            'h2',
            { className: 'about__h2' },
            'Education'
          ),
          i.default.createElement(
            'ul',
            { className: 'about__ul' },
            r.education.map(function(e, t) {
              return i.default.createElement(
                'li',
                { key: 'education-' + t, className: 'about__li' },
                i.default.createElement(
                  'p',
                  { className: 'about__li-grid' },
                  i.default.createElement(
                    'span',
                    null,
                    e.school,
                    ' - ',
                    e.city
                  ),
                  i.default.createElement(
                    'em',
                    { className: 'about__li-right' },
                    e.date
                  )
                ),
                i.default.createElement(
                  'p',
                  { className: 'about__li-p' },
                  e.degree
                )
              );
            })
          ),
          i.default.createElement(
            'h2',
            { className: 'about__h2' },
            'Work Experience'
          ),
          i.default.createElement(
            'ul',
            { className: 'about__ul' },
            r.work.map(function(e) {
              return i.default.createElement(
                'li',
                { className: 'about__li' },
                i.default.createElement(
                  'p',
                  { className: 'about__li-grid' },
                  i.default.createElement(
                    'span',
                    null,
                    e.company,
                    ' - ',
                    e.city
                  ),
                  i.default.createElement(
                    'em',
                    { className: 'about__li-right' },
                    e.date
                  )
                ),
                i.default.createElement(
                  'p',
                  { className: 'about__li-p' },
                  e.position
                )
              );
            })
          ),
          i.default.createElement(
            'h2',
            { className: 'about__h2' },
            'Publications'
          ),
          i.default.createElement(
            'ul',
            { className: 'about__ul' },
            r.publications.map(function(e) {
              return i.default.createElement(
                'li',
                { className: 'about__li' },
                i.default.createElement(
                  'p',
                  { className: 'about__li-grid' },
                  i.default.createElement('span', null, e.title),
                  i.default.createElement(
                    'em',
                    { className: 'about__li-right' },
                    e.date
                  )
                )
              );
            })
          ),
          i.default.createElement('h2', { className: 'about__h2' }, 'Lectures'),
          i.default.createElement(
            'ul',
            { className: 'about__ul' },
            r.lectures.map(function(e) {
              return i.default.createElement(
                'li',
                { className: 'about__li' },
                i.default.createElement(
                  'p',
                  { className: 'about__li-grid' },
                  i.default.createElement('span', null, e.name, ' - ', e.city),
                  i.default.createElement(
                    'em',
                    { className: 'about__li-right' },
                    e.date
                  )
                ),
                i.default.createElement(
                  'p',
                  { className: 'about__li-p' },
                  e.company
                )
              );
            })
          ),
          i.default.createElement(
            'h2',
            { className: 'about__h2' },
            'Exhibitions'
          ),
          i.default.createElement(
            'ul',
            { className: 'about__ul' },
            r.exhibitions.map(function(e) {
              return i.default.createElement(
                'li',
                { className: 'about__li' },
                i.default.createElement(
                  'p',
                  { className: 'about__li-grid' },
                  i.default.createElement('span', null, e.name),
                  i.default.createElement(
                    'em',
                    { className: 'about__li-right' },
                    e.city
                  )
                ),
                i.default.createElement(
                  'p',
                  { className: 'about__li-p' },
                  e.description
                )
              );
            })
          ),
          i.default.createElement('h2', { className: 'about__h2' }, 'Skills'),
          i.default.createElement(
            'ul',
            { className: 'about__ul' },
            i.default.createElement(
              'li',
              { className: 'about__li' },
              'Strong design skills and extensive artistic ability'
            ),
            i.default.createElement(
              'li',
              { className: 'about__li' },
              'Fast learner and strong creative writing skills'
            ),
            i.default.createElement(
              'li',
              { className: 'about__li' },
              'International experience - UK, USA, Canada, Peru'
            ),
            i.default.createElement(
              'li',
              { className: 'about__li' },
              'Excellent communication skills, bilingual in English and Spanish'
            ),
            i.default.createElement(
              'li',
              { className: 'about__li' },
              'Graphics: Adobe Suite: [ Ae, Ai, Ps, Id, Pr ]'
            ),
            i.default.createElement(
              'li',
              { className: 'about__li' },
              'Programming: Processing(Generative Design), Rhino + Python'
            ),
            i.default.createElement(
              'li',
              { className: 'about__li' },
              'Modeling: Autodesk [Maya, 3DSMax, AutoCAD, Revit], Rhino + grasshopper, V-Ray'
            )
          )
        )
      );
    };
    t.default = l;
  },
  334: function(e, t, a) {
    'use strict';
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = a(335);
    Object.defineProperty(t, 'education', {
      enumerable: !0,
      get: function() {
        return n(i).default;
      },
    });
    var r = a(336);
    Object.defineProperty(t, 'publications', {
      enumerable: !0,
      get: function() {
        return n(r).default;
      },
    });
    var l = a(337);
    Object.defineProperty(t, 'work', {
      enumerable: !0,
      get: function() {
        return n(l).default;
      },
    });
    var o = a(338);
    Object.defineProperty(t, 'exhibitions', {
      enumerable: !0,
      get: function() {
        return n(o).default;
      },
    });
    var c = a(339);
    Object.defineProperty(t, 'lectures', {
      enumerable: !0,
      get: function() {
        return n(c).default;
      },
    });
  },
  335: function(e, t, a) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = [
      {
        school: 'AA School of Architecture',
        city: 'London, United Kingdom',
        date: 'Sep 2013 - Jan 2015',
        degree: 'Master of Architecture and Urbanism (AADRL)',
      },
      {
        school: 'University of Waterloo',
        city: 'Cambridge, Canada',
        date: 'Sep 2008 - Aug 2013',
        degree: 'Honours Bachelor of Architectural Studies, Co-op',
      },
      {
        school: 'Peruvian University of Applied Sciences UPC',
        city: 'Lima, Peru',
        date: 'Mar 2006 - Apr 2008',
        degree: 'Architectural Studies, Top 10%',
      },
    ];
    t.default = n;
  },
  336: function(e, t, a) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = [
      {
        title:
          'AD Magazine Parametricism 2.0: Rethinking Architecture’s Agenda for the 21st Century',
        date: 'Apr 2016',
      },
      { title: 'archDaily', date: 'Sep 2015' },
      { title: 'suckerPUNCH', date: 'Mar 2015' },
    ];
    t.default = n;
  },
  337: function(e, t, a) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = [
      {
        company: 'Design Republic',
        city: 'NYC, USA',
        date: 'Feb 2017 - Present',
        position: 'Project Architect',
      },
      {
        company: 'Design Morphine',
        city: 'NYC, USA',
        date: 'Jan 2017 - Present',
        position: 'Member',
      },
      {
        company: 'Fogarty Finger Architecture Interiors',
        city: 'NYC, USA',
        date: 'Apr 2015 - Feb 2017',
        position: 'Junior Architect',
      },
      {
        company: 'ecoLogicStudio',
        city: 'London, UK',
        date: 'Feb 2013 - Apr 2013',
        position: 'Architectural Intern',
      },
      {
        company: 'HLW International LPP',
        city: 'NYC, USA',
        date: 'Jan 2012 - Aug 2012',
        position: 'Architectural Intern',
      },
      {
        company: 'Kasian Architecture Interior Design & Planning',
        city: 'Toronto, Canada',
        date: 'May 2011 - Aug 2011',
        position: 'Designer Student',
      },
      {
        company: 'Diamond and Schmitt Architects',
        city: 'Toronto, Canada',
        date: 'Sep 2010 - Dec 2010',
        position: 'Architectural Student',
      },
      {
        company: 'Sturgess Architecture',
        city: 'Calgary, Canada',
        date: 'Jan 2010 - Apr 2010',
        position: 'Architectural Assistant',
      },
      {
        company: 'Dédalo Arts & Crafts Gallery, Indigo Art Gallery',
        city: 'Lima, Peru',
        date: 'Feb 2008 - Apr 2008',
        position: 'Independent Artist',
      },
    ];
    t.default = n;
  },
  338: function(e, t, a) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = [
      {
        name: 'MetaFolly Pavillion',
        description: 'permanent collection for the Frac Center',
        city: 'New Orleans, France',
      },
      {
        name: 'Hortus-Paris',
        description: 'interactive-living installation for EDF Foundation',
        city: 'Paris, France',
      },
      {
        name: 'Thesis Project - Phase 1',
        description:
          'exhibited at the Front Gallery of the Architectural Association',
        city: 'London, UK',
      },
      {
        name: 'Final Design Project',
        description: 'selected for annual exhibition at Cambridge Galleries',
        city: 'Cambridge, Canada',
      },
      {
        name: 'Art Project',
        description: 'Showcase at The Arts Project Gallery',
        city: 'London, Canada',
      },
      {
        name: 'Art Project',
        description: 'Showcase at the Joseph D. Carrier Art Gallery',
        city: 'Toronto, Canada',
      },
      {
        name: 'Final Design Project',
        description: 'Selected for annual exhibition at Cambridge Galleries',
        city: 'Cambridge, Canada',
      },
      {
        name: 'Design Project',
        description: 'Selected for National Architectural Contest',
        city: 'Lima, Peru',
      },
    ];
    t.default = n;
  },
  339: function(e, t, a) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = [
      {
        name: 'Emerging Design Methodologies',
        company: 'AIA Brooklyn Chapter',
        city: 'NYC, USA',
        date: 'Feb 20, 2018',
      },
      {
        name: 'Jump Into VR Fest',
        company: 'Jump Into the Light',
        city: 'NYC, USA',
        date: 'Sep 17, 2017',
      },
    ];
    t.default = n;
  },
  340: function(e, t) {},
  76: function(e, t, a) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      i = ((function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
        t.default = e;
      })(n),
      a(332)),
      r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(i);
    t.default = r.default;
  },
});
