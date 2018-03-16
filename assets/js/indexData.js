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
      content: `For the Smart Ones !`,
      about: " Our flagship event, a short duration competitive programming contest, individual participation.",
      longContent: `
      <i>
      Our flagship event, a short duration competitive programming contest, individual participation.</i><br>
<b>Contest Duration </b>- 2.5 hours<br>
<b>No. of Problems </b>- 7 to 8<br>
<b>Date</b> - TBA<br>
<b>Time </b>- TBA<br>
<b>Contest link</b> -<br> 
<b>Previous Years links</b> - <a target="_blank"  href="http://codeforces.com/blog/entry/23140" > DBZ 5.0 </a>|
<a target="_blank"  href="https://www.codechef.com/DIBZ2016" >DBZ 4.0</a>|
<a target="_blank"  href="https://www.codechef.com/DBYZ15">DBZ 3.0</a>|
<a target="_blank"  href="https://www.codechef.com/DBYZ2014" >DBZ 2.0</a>|
<a target="_blank"  href="https://www.codechef.com/DBYZ2013" >DBZ 1.0</a>
<br><div> Prizes worth 50k for the winners. </div>




      `
    },
    {
      title: "Hackathon",
      src: "images/compressed/hackathon.png",
      date: "23th - 24th March",
      content: `For the Creative Ones !`,
      about: " A social coding event to build a new software under the to-be-announced broad themes. Each team can consist of a maximum of 4 people."
      , longContent: `
      <i>
      A social coding event to build a new software under the to-be-announced broad themes. Each team can consist of a maximum of 4 people.
</i>
      <br><b>Contest Duration</b> - 30 hrs
<br><b>No. of problems</b> - TBA
<br><b>Date</b> - 23rd to 24th march
<br><b>Time</b> - Begins at 9 PM IST 23rd March
<br><b>Contest Link</b> - 
<br><div> Prizes worth 100k for the winners. </div>
      `
    },
    {
      title: "Capture The Flag",
      src: "images/compressed/ctf.png",
      date: "7th-8th April",
      content: `For the Clever Ones !`,
      about: "A Capture the Flag Competition held by Byte Bandits, IIT Indore’s academic CTF team. The team size for the CTF should be max 4 people."
      , longContent: `
   <i>   
A Capture the Flag Competition held by Byte Bandits, IIT Indore’s academic CTF team. The team size for the CTF should be max 4 people.
</i>
<br><b>Format</b> - Jeopardy
<br><b>Contest Duration</b> - TBA
<br><b>Date</b> - 7th to 8th April
<br><b>Time</b> - TBA
<br><b>Contest link</b> - <a target="_blank"  href="https://ctf.euristica.in" >https://ctf.euristica.in</a>
<br><div> Prizes worth 50k for the winners. </div>
      `
    },
    {
      title: "Machine Learning Codesprint",
      src: "images/compressed/ml.png",
      date: "25th March - 8th April",
      content: `For the Analytical Ones !`,
      about: "This codesprint aims to give the participants the thrilling experience of programming a computer to learn.Individual participation."
      , longContent: `
  <i>  This codesprint aims to give the participants the thrilling experience of programming a computer to learn.Individual participation.
</i><br><b>Contest Duration</b> - 25th March to 8th April
<br><b>No. of Problems</b> -
<br><b>Date and Time</b> - 25th March 12:00 noon to 8th April 12:00 noon
<br>
Contest link - <br>
<br><div> Prizes worth 30k for the winners. </div>
      `
    },
    {
      title: "Code Mélange 3.0",
      src: "images/compressed/code_melange.png",
      date: "30th March - 1st April, 21:00",
      content: `For the Relentless Ones !`,
      about: "A long algorithmic competitive programming contest, individual participation.",
      longContent: `
  <i>    A long algorithmic competitive programming contest, individual participation. </i>
<br><b>Contest Duration</b> - 36 hours
<br><b>No. of Problems</b> - 15-16
<br><b>Date and Time</b> - 30th March 9:00pm to 1st April 9:00am
<br><b>Contest link</b> - 
<br><b>Previous Year Links</b> - 
<a target="_blank"  href="https://www.hackerrank.com/code-melange-iiti/" >Code Mélange 2017</a> | 
<a target="_blank"  href="https://www.hackerrank.com/contests/code-melange-iiti" >Code Melange 2016</a>
<br><div> Prizes worth 30k for the winners. </div>
      `
    },
    {
      title: "Code Golf 4.0",
      src: "images/compressed/code_golf.png",
      date: "26th March, 21:00-23:59",
      content: `For the Succinct Ones !`,
      about: "A coding contest in which shorter is your code, better is your score. Individual participation.",
      longContent: `
      <i>
      A coding contest in which shorter is your code, better is your score. Individual participation.</i>
<br><b>Contest Duration</b> - 3 hours 
<br><b>No. of Problems</b> - 7-8
<br><b>Date and Time - 26th March 9:00 PM</b> - 12:00 PM 27th March
<br><b>Contest link</b> - 
<br><b>Previous Year Links</b> - 
<br><b>Code Golf 3.0</b> -  <a target="_blank"  href="https://www.hackerrank.com/fluxus-code-golf" >https://www.hackerrank.com/fluxus-code-golf</a>
<br><div> Prizes worth 12k for the winners </div>
      `
    },
    {
      title: "Surprise Language 4.0",
      src: "images/compressed/surprise_language.png",
      date: "28th March. 21:00-23:59",
      content: `For the Spontaneous Ones !`,
      about: "A programming contest in which the language will be a secret, revealed only 15 minutes before the contest. Individual participation.",
      longContent: `
      <i>
      A programming contest in which the language will be a secret, revealed only 15 minutes before the contest. Individual participation.
</i>
      <br><b>Contest Duration</b> - 3 Hours.
<br><b>No. of Problems</b> - 7-8
<br><b>Date and Time - 28th March 9:00 PM</b> - 12:00 PM 29th March
<br><b>Contest link</b> - 
<br><b>Previous Year Links</b> - 
<a target="_blank"  href="https://www.hackerrank.com/surprise-language-3-0" >SL 2017</a>
 | <a target="_blank"  href="https://www.hackerrank.com/surprise-language-2-0" >SL 2016</a>
 | <a target="_blank"  href="https://www.hackerrank.com/surprise-language" >SL 2015</a>
<br><div> Prizes worth 12k for the winners </div>
      `
    },
    {
      title: "Hack the Code",
      src: "images/compressed/hack_the_code.png",
      date: "3rd April, 21:00-23:59",
      content: `For the Meticulous Ones !`,
      about: "A competitive programming contest in which you test your debugging skills by correcting the given code for the failing test case(s). Individual participation.",
      longContent: `
  <i>    A competitive programming contest in which you test your debugging skills by correcting the given code for the failing test case(s). Individual participation.
</i><br><b>Contest Duration</b> - 3 hours
<br><b>No. of Problems</b> - 15
<br><b>Date and Time - 3 April 9:00 PM</b> - 12:00 PM 4 April
<br><b>Contest link</b> - 
<br><div> Prizes worth 8k for the winners </div>
      `
    },
    {
      title: "Fool You!",
      src: "images/compressed/fool_you.png",
      date: "1st April, 15:00-18:00",
      content: `For the Deceptive Ones !`,
      about: "A unique programming contest that requires one to think out of the box. Individual participation."
      , longContent: `
  <i>    A unique programming contest that requires one to think out of the box. Individual 
    participation.
</i><br><b><b>Contest Duration</b></b> - 5 hours
<br><b><b>No. of Problems</b></b> - 10-12
<br><b><b>Date and Time - 1 April 3:00 PM</b></b> - 8:00 PM 1 April
<br><b><b>Contest link</b></b> - 
<br><div> Prizes worth 12k for the winners </div>
      `
    },
    {
      title: "SOH CAH TOA",
      src: "images/compressed/soh_cah_toa.png",
      date: "6th April",
      content: `For the Geeky Ones !`,
      about: " A short-duration programming contest focusing on number theory, probability, combinatorics, modular arithmetic and other maths topics. Individual participation."
      , longContent: `
  <i>  A short-duration programming contest focusing on number theory, probability, combinatorics, modular arithmetic and other maths topics. Individual participation.
</i><br><b><b>Contest Duration</b></b> - 3 hours
<br><b><b>No. of Problems</b></b> - 10-12
<br><b><b>Date and Time - 6th April 9:00pm</b></b> - 12:00am 7th April
<br><b><b>Contest link</b></b> - 
<br><div> Prizes worth 15k for the winners </div>
      `
    },
    ],
  },
  methods: {
    modal(i) {
      $("#modal" + i).modal({
        fadeDuration: 100
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
