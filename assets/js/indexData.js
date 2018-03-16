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
