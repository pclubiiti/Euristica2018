window.addEventListener('load', function () {
  var allimages = document.getElementsByTagName('img');
  for (var i = 0; i < allimages.length; i++) {
    if (allimages[i].getAttribute('data-src')) {
      allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
    }
  }
}, false);

var app = new Vue({
  el: '#header',
  data: {
    title: 'Euristica',
    subtitle: 'The Programming Club, IIT Indore',
  }
})

var intro = new Vue({
  el: '#intro',
  data: {
    subtitle: `This generation has seen great programmers like Linus Torvalds and Jeff Dean.
Talented and hardworking programmers are rising all around the globe. To foster this
        amazing skill and culture, the Department of Computer Science and Engineering, IIT
        Indore presents you with - Euristica’18, the annual coding festival of our college.
        We will be conducting a variety of events ranging from Competitive Programming and
        Application Development to Cyber Security and Machine Learning.
        `,
    link: "https://goo.gl/forms/6XvZX1oed5u8lfxy1"
  }
})

var events = new Vue({
  el: '#events',
  data: {
    list: [{
      title: "Divide By Zero 6.0",
      src: "images/compressed/dbz.png",
      date: "To be announced",
      content: `The Smart One`,
      about: " Our flagship event, a short duration competitive programming contest, individual participation."
    },
    {
      title: "Hackathon",
      src: "images/compressed/hackathon.png",
      date: "23th - 24th March",
      content: `The Creative One`,
      about: " A social coding event to build a new software under the to-be-announced broad themes. Each team can consist of a maximum of 4 people."
    },
    {
      title: "Capture The Flag",
      src: "images/compressed/ctf.png",
      date: "7th-8th April",
      content: `The Clever one`,
      about: "A Capture the Flag Competition held by Byte Bandits, IIT Indore’s academic CTF team. The team size for the CTF should be max 4 people."
    },
    {
      title: "Machine Learning Codesprint",
      src: "images/compressed/ml.png",
      date: "25th March - 8th April",
      content: `The Analytical one`,
      about: "This codesprint aims to give the participants the thrilling experience of programming a computer to learn.Individual participation."
    },
    {
      title: "Code Mélange 3.0",
      src: "images/compressed/code_melange.png",
      date: "30th March - 1st April, 21:00",
      content: `The Relentless One`,
      about: "A long algorithmic competitive programming contest, individual participation."
    },
    {
      title: "Code Golf 4.0",
      src: "images/compressed/code_golf.png",
      date: "26th March, 21:00-23:59",
      content: `The Succinct One`,
      about: "A coding contest in which shorter is your code, better is your score. Individual participation."
    },
    {
      title: "Surprise Language 4.0",
      src: "images/compressed/surprise_language.png",
      date: "28th March. 21:00-23:59",
      content: `The Spontaneous One`,
      about: "A programming contest in which the language will be a secret, revealed only 15 minutes before the contest. Individual participation."
    },
    {
      title: "Hack the Code",
      src: "images/compressed/hack_the_code.png",
      date: "3rd April, 21:00-23:59",
      content: `The Meticulous One`,
      about: "A competitive programming contest in which you test your debugging skills by correcting the given code for the failing test case(s). Individual participation."
    },
    {
      title: "Fool You!",
      src: "images/compressed/fool_you.png",
      date: "1st April, 15:00-18:00",
      content: `The Deceptive One`,
      about: "A unique programming contest that requires one to think out of the box. Individual participation."
    },
    {
      title: "SOH CAH TOA",
      src: "images/compressed/soh_cah_toa.png",
      date: "6th April",
      content: `The Geeky One`,
      about: " A short-duration programming contest focusing on number theory, probability, combinatorics, modular arithmetic and other maths topics. Individual participation."
    },
    ],
  },
  methods: {
    modal(i) {
      $("#modal" + i).modal({
        fadeDuration: 300
      });
    }
  }
})

var footer = new Vue({
  el: '#footer',
  data: {
    subtitle: 'The Programming Club, IIT Indore',
    list: [
      {
        class: 'icon fa-link',
        tag: 'The Programming Club',
        link: 'http://pclubiiti.github.io/',
      },
      {
        class: 'icon fa-facebook',
        tag: 'Facebook',
        link: 'https://www.facebook.com/pclubiiti/',
      },
      {
        class: 'icon fa-github',
        tag: 'Github',
        link: 'https://github.com/pclubiiti',
      },

      {
        class: 'icon fa-envelope',
        tag: 'Email',
        link: 'mailto:progclub@iiti.ac.in',
      },
    ]
  }
})

var sponsors = new Vue({
  el: '#sponsors',
  data: {
    sponsors: [
      {
        link: 'https://hackerearth.com',
        logo: "https://hackerearth.global.ssl.fastly.net/static/hackerearth/images/logo/HE_logo.svg"
      },
      {
        link: 'https://codechef.com',
        logo: "https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/logo.png"
      },
      {
        link: 'http://codeforces.com',
        logo: "/images/cf.png"
      }, {
        link: 'https://hackerrank.com',
        logo: "https://hrcdn.net/hackerrank/assets/brand/hr_logo_new_word-52db4dcdc76b31be86456c77b55a7396.png"
      }
    ]
  }
})

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleERhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBhbGxpbWFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFsbGltYWdlc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpIHtcbiAgICAgIGFsbGltYWdlc1tpXS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFsbGltYWdlc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpO1xuICAgIH1cbiAgfVxufSwgZmFsc2UpO1xuXG52YXIgYXBwID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI2hlYWRlcicsXG4gIGRhdGE6IHtcbiAgICB0aXRsZTogJ0V1cmlzdGljYScsXG4gICAgc3VidGl0bGU6ICdUaGUgUHJvZ3JhbW1pbmcgQ2x1YiwgSUlUIEluZG9yZScsXG4gIH1cbn0pXG5cbnZhciBpbnRybyA9IG5ldyBWdWUoe1xuICBlbDogJyNpbnRybycsXG4gIGRhdGE6IHtcbiAgICBzdWJ0aXRsZTogYFRoaXMgZ2VuZXJhdGlvbiBoYXMgc2VlbiBncmVhdCBwcm9ncmFtbWVycyBsaWtlIExpbnVzIFRvcnZhbGRzIGFuZCBKZWZmIERlYW4uXG5UYWxlbnRlZCBhbmQgaGFyZHdvcmtpbmcgcHJvZ3JhbW1lcnMgYXJlIHJpc2luZyBhbGwgYXJvdW5kIHRoZSBnbG9iZS4gVG8gZm9zdGVyIHRoaXNcbiAgICAgICAgYW1hemluZyBza2lsbCBhbmQgY3VsdHVyZSwgdGhlIERlcGFydG1lbnQgb2YgQ29tcHV0ZXIgU2NpZW5jZSBhbmQgRW5naW5lZXJpbmcsIElJVFxuICAgICAgICBJbmRvcmUgcHJlc2VudHMgeW91IHdpdGggLSBFdXJpc3RpY2HigJkxOCwgdGhlIGFubnVhbCBjb2RpbmcgZmVzdGl2YWwgb2Ygb3VyIGNvbGxlZ2UuXG4gICAgICAgIFdlIHdpbGwgYmUgY29uZHVjdGluZyBhIHZhcmlldHkgb2YgZXZlbnRzIHJhbmdpbmcgZnJvbSBDb21wZXRpdGl2ZSBQcm9ncmFtbWluZyBhbmRcbiAgICAgICAgQXBwbGljYXRpb24gRGV2ZWxvcG1lbnQgdG8gQ3liZXIgU2VjdXJpdHkgYW5kIE1hY2hpbmUgTGVhcm5pbmcuXG4gICAgICAgIGAsXG4gICAgbGluazogXCJodHRwczovL2dvby5nbC9mb3Jtcy82WHZaWDFvZWQ1dThsZnh5MVwiXG4gIH1cbn0pXG5cbnZhciBldmVudHMgPSBuZXcgVnVlKHtcbiAgZWw6ICcjZXZlbnRzJyxcbiAgZGF0YToge1xuICAgIGxpc3Q6IFt7XG4gICAgICB0aXRsZTogXCJEaXZpZGUgQnkgWmVybyA2LjBcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvY29tcHJlc3NlZC9kYnoucG5nXCIsXG4gICAgICBkYXRlOiBcIlRvIGJlIGFubm91bmNlZFwiLFxuICAgICAgY29udGVudDogYFRoZSBTbWFydCBPbmVgLFxuICAgICAgYWJvdXQ6IFwiIE91ciBmbGFnc2hpcCBldmVudCwgYSBzaG9ydCBkdXJhdGlvbiBjb21wZXRpdGl2ZSBwcm9ncmFtbWluZyBjb250ZXN0LCBpbmRpdmlkdWFsIHBhcnRpY2lwYXRpb24uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkhhY2thdGhvblwiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL2hhY2thdGhvbi5wbmdcIixcbiAgICAgIGRhdGU6IFwiMjN0aCAtIDI0dGggTWFyY2hcIixcbiAgICAgIGNvbnRlbnQ6IGBUaGUgQ3JlYXRpdmUgT25lYCxcbiAgICAgIGFib3V0OiBcIiBBIHNvY2lhbCBjb2RpbmcgZXZlbnQgdG8gYnVpbGQgYSBuZXcgc29mdHdhcmUgdW5kZXIgdGhlIHRvLWJlLWFubm91bmNlZCBicm9hZCB0aGVtZXMuIEVhY2ggdGVhbSBjYW4gY29uc2lzdCBvZiBhIG1heGltdW0gb2YgNCBwZW9wbGUuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNhcHR1cmUgVGhlIEZsYWdcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvY29tcHJlc3NlZC9jdGYucG5nXCIsXG4gICAgICBkYXRlOiBcIjd0aC04dGggQXByaWxcIixcbiAgICAgIGNvbnRlbnQ6IGBUaGUgQ2xldmVyIG9uZWAsXG4gICAgICBhYm91dDogXCJBIENhcHR1cmUgdGhlIEZsYWcgQ29tcGV0aXRpb24gaGVsZCBieSBCeXRlIEJhbmRpdHMsIElJVCBJbmRvcmXigJlzIGFjYWRlbWljIENURiB0ZWFtLiBUaGUgdGVhbSBzaXplIGZvciB0aGUgQ1RGIHNob3VsZCBiZSBtYXggNCBwZW9wbGUuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIk1hY2hpbmUgTGVhcm5pbmcgQ29kZXNwcmludFwiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL21sLnBuZ1wiLFxuICAgICAgZGF0ZTogXCIyNXRoIE1hcmNoIC0gOHRoIEFwcmlsXCIsXG4gICAgICBjb250ZW50OiBgVGhlIEFuYWx5dGljYWwgb25lYCxcbiAgICAgIGFib3V0OiBcIlRoaXMgY29kZXNwcmludCBhaW1zIHRvIGdpdmUgdGhlIHBhcnRpY2lwYW50cyB0aGUgdGhyaWxsaW5nIGV4cGVyaWVuY2Ugb2YgcHJvZ3JhbW1pbmcgYSBjb21wdXRlciB0byBsZWFybi5JbmRpdmlkdWFsIHBhcnRpY2lwYXRpb24uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNvZGUgTcOpbGFuZ2UgMy4wXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvY29kZV9tZWxhbmdlLnBuZ1wiLFxuICAgICAgZGF0ZTogXCIzMHRoIE1hcmNoIC0gMXN0IEFwcmlsLCAyMTowMFwiLFxuICAgICAgY29udGVudDogYFRoZSBSZWxlbnRsZXNzIE9uZWAsXG4gICAgICBhYm91dDogXCJBIGxvbmcgYWxnb3JpdGhtaWMgY29tcGV0aXRpdmUgcHJvZ3JhbW1pbmcgY29udGVzdCwgaW5kaXZpZHVhbCBwYXJ0aWNpcGF0aW9uLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJDb2RlIEdvbGYgNC4wXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvY29kZV9nb2xmLnBuZ1wiLFxuICAgICAgZGF0ZTogXCIyNnRoIE1hcmNoLCAyMTowMC0yMzo1OVwiLFxuICAgICAgY29udGVudDogYFRoZSBTdWNjaW5jdCBPbmVgLFxuICAgICAgYWJvdXQ6IFwiQSBjb2RpbmcgY29udGVzdCBpbiB3aGljaCBzaG9ydGVyIGlzIHlvdXIgY29kZSwgYmV0dGVyIGlzIHlvdXIgc2NvcmUuIEluZGl2aWR1YWwgcGFydGljaXBhdGlvbi5cIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiU3VycHJpc2UgTGFuZ3VhZ2UgNC4wXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvc3VycHJpc2VfbGFuZ3VhZ2UucG5nXCIsXG4gICAgICBkYXRlOiBcIjI4dGggTWFyY2guIDIxOjAwLTIzOjU5XCIsXG4gICAgICBjb250ZW50OiBgVGhlIFNwb250YW5lb3VzIE9uZWAsXG4gICAgICBhYm91dDogXCJBIHByb2dyYW1taW5nIGNvbnRlc3QgaW4gd2hpY2ggdGhlIGxhbmd1YWdlIHdpbGwgYmUgYSBzZWNyZXQsIHJldmVhbGVkIG9ubHkgMTUgbWludXRlcyBiZWZvcmUgdGhlIGNvbnRlc3QuIEluZGl2aWR1YWwgcGFydGljaXBhdGlvbi5cIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiSGFjayB0aGUgQ29kZVwiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL2hhY2tfdGhlX2NvZGUucG5nXCIsXG4gICAgICBkYXRlOiBcIjNyZCBBcHJpbCwgMjE6MDAtMjM6NTlcIixcbiAgICAgIGNvbnRlbnQ6IGBUaGUgTWV0aWN1bG91cyBPbmVgLFxuICAgICAgYWJvdXQ6IFwiQSBjb21wZXRpdGl2ZSBwcm9ncmFtbWluZyBjb250ZXN0IGluIHdoaWNoIHlvdSB0ZXN0IHlvdXIgZGVidWdnaW5nIHNraWxscyBieSBjb3JyZWN0aW5nIHRoZSBnaXZlbiBjb2RlIGZvciB0aGUgZmFpbGluZyB0ZXN0IGNhc2UocykuIEluZGl2aWR1YWwgcGFydGljaXBhdGlvbi5cIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiRm9vbCBZb3UhXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvZm9vbF95b3UucG5nXCIsXG4gICAgICBkYXRlOiBcIjFzdCBBcHJpbCwgMTU6MDAtMTg6MDBcIixcbiAgICAgIGNvbnRlbnQ6IGBUaGUgRGVjZXB0aXZlIE9uZWAsXG4gICAgICBhYm91dDogXCJBIHVuaXF1ZSBwcm9ncmFtbWluZyBjb250ZXN0IHRoYXQgcmVxdWlyZXMgb25lIHRvIHRoaW5rIG91dCBvZiB0aGUgYm94LiBJbmRpdmlkdWFsIHBhcnRpY2lwYXRpb24uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlNPSCBDQUggVE9BXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvc29oX2NhaF90b2EucG5nXCIsXG4gICAgICBkYXRlOiBcIjZ0aCBBcHJpbFwiLFxuICAgICAgY29udGVudDogYFRoZSBHZWVreSBPbmVgLFxuICAgICAgYWJvdXQ6IFwiIEEgc2hvcnQtZHVyYXRpb24gcHJvZ3JhbW1pbmcgY29udGVzdCBmb2N1c2luZyBvbiBudW1iZXIgdGhlb3J5LCBwcm9iYWJpbGl0eSwgY29tYmluYXRvcmljcywgbW9kdWxhciBhcml0aG1ldGljIGFuZCBvdGhlciBtYXRocyB0b3BpY3MuIEluZGl2aWR1YWwgcGFydGljaXBhdGlvbi5cIlxuICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG1vZGFsKGkpIHtcbiAgICAgICQoXCIjbW9kYWxcIiArIGkpLm1vZGFsKHtcbiAgICAgICAgZmFkZUR1cmF0aW9uOiAzMDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSlcblxudmFyIGZvb3RlciA9IG5ldyBWdWUoe1xuICBlbDogJyNmb290ZXInLFxuICBkYXRhOiB7XG4gICAgc3VidGl0bGU6ICdUaGUgUHJvZ3JhbW1pbmcgQ2x1YiwgSUlUIEluZG9yZScsXG4gICAgbGlzdDogW1xuICAgICAge1xuICAgICAgICBjbGFzczogJ2ljb24gZmEtbGluaycsXG4gICAgICAgIHRhZzogJ1RoZSBQcm9ncmFtbWluZyBDbHViJyxcbiAgICAgICAgbGluazogJ2h0dHA6Ly9wY2x1YmlpdGkuZ2l0aHViLmlvLycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2ljb24gZmEtZmFjZWJvb2snLFxuICAgICAgICB0YWc6ICdGYWNlYm9vaycsXG4gICAgICAgIGxpbms6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vcGNsdWJpaXRpLycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2ljb24gZmEtZ2l0aHViJyxcbiAgICAgICAgdGFnOiAnR2l0aHViJyxcbiAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wY2x1YmlpdGknLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBjbGFzczogJ2ljb24gZmEtZW52ZWxvcGUnLFxuICAgICAgICB0YWc6ICdFbWFpbCcsXG4gICAgICAgIGxpbms6ICdtYWlsdG86cHJvZ2NsdWJAaWl0aS5hYy5pbicsXG4gICAgICB9LFxuICAgIF1cbiAgfVxufSlcblxudmFyIHNwb25zb3JzID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI3Nwb25zb3JzJyxcbiAgZGF0YToge1xuICAgIHNwb25zb3JzOiBbXG4gICAgICB7XG4gICAgICAgIGxpbms6ICdodHRwczovL2hhY2tlcmVhcnRoLmNvbScsXG4gICAgICAgIGxvZ286IFwiaHR0cHM6Ly9oYWNrZXJlYXJ0aC5nbG9iYWwuc3NsLmZhc3RseS5uZXQvc3RhdGljL2hhY2tlcmVhcnRoL2ltYWdlcy9sb2dvL0hFX2xvZ28uc3ZnXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpbms6ICdodHRwczovL2NvZGVjaGVmLmNvbScsXG4gICAgICAgIGxvZ286IFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2NvZGVjaGVmX3NoYXJlZC9zaXRlcy9hbGwvdGhlbWVzL2FiZXNzaXZlL2xvZ28ucG5nXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpbms6ICdodHRwOi8vY29kZWZvcmNlcy5jb20nLFxuICAgICAgICBsb2dvOiBcIi9pbWFnZXMvY2YucG5nXCJcbiAgICAgIH0sIHtcbiAgICAgICAgbGluazogJ2h0dHBzOi8vaGFja2VycmFuay5jb20nLFxuICAgICAgICBsb2dvOiBcImh0dHBzOi8vaHJjZG4ubmV0L2hhY2tlcnJhbmsvYXNzZXRzL2JyYW5kL2hyX2xvZ29fbmV3X3dvcmQtNTJkYjRkY2RjNzZiMzFiZTg2NDU2Yzc3YjU1YTczOTYucG5nXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbn0pXG4iXSwiZmlsZSI6ImluZGV4RGF0YS5qcyJ9
