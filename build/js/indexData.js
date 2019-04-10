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
    subtitle: `This generation has seen great programmers like Linus Torvalds and Jeff Dean. Talented and hardworking programmers are rising all around the globe. To foster this amazing skill and culture, the Department of Computer Science and Engineering, IIT Indore presents you with - Euristica’19, the annual coding festival of our college. Euristica'18 was an immense success with participation of around 13K. The second iteration of Euristica will be grander than ever before. We will be conducting a variety of events ranging from Competitive Programming and Application Development to Cyber Security and Machine Learning.`,
    link: "https://goo.gl/forms/6XvZX1oed5u8lfxy1"
  }
})

var events = new Vue({
  el: '#events',
  data: {
    list: [{
      title: "Divide By Zero 7.0",
      src: "images/compressed/dividebyzero.png",
      content: `For the Algorithmic Ones !`,
      about: `Our flagship event, a short duration competitive programming contest being held on Codeforces`,
      dt: "TBA",
      longContent: `
      <i>
      Our flagship event, a short duration individual competitive programming contest being held on</i> <a target="blank" href="http://codeforces.com"></b>Codeforces.</b></a><br>
<b><br>Contest Duration </b>- 2 hours<br>
<b>No. of Problems </b>- 7 to 8<br>
<b>Date and Time</b> - TBA
<br><b>Contest Link - </b><a href="index.html" >Click Here</a>
<br><b>Previous Years links</b> -
<br>
<a target="_blank"  href="http://codeforces.com/contest/960" > DBZ 6.0 </a>|
<a target="_blank"  href="http://codeforces.com/contest/768" > DBZ 5.0 </a>|
<a target="_blank"  href="https://www.codechef.com/DIBZ2016" >DBZ 4.0</a> |
<a target="_blank"  href="https://www.codechef.com/DBYZ15">DBZ 3.0</a> |
<a target="_blank"  href="https://www.codechef.com/DBYZ2014" >DBZ 2.0</a> |
<a target="_blank"  href="https://www.codechef.com/DBYZ2013" >DBZ 1.0</a>
<br><b>Contact</b> - Vinit Shah ( <a href="tel:+91 75060 78231" >+91 75060 78231</a> )
<br><div> <br>Prizes worth 50k for the winners. </div>
      `
    },
    {
      title: "The ThreadBit Showcase",
      src: "images/compressed/Hackathon.png",

      content: `Where Ideas Morph into Products !`,
      dt: "5th April - 7th April",
      about: " A social coding event to build a new software under the to-be-announced broad themes."
      , longContent: `
      <i>
      A social coding event to build a new software under the to-be-announced broad themes.
      <br> Being one of the prime events of Euristica, this contest tests your Creative Thinking, Knowledge about Latest Technologies, the Pace of Learning, Coding Skills as well as Time Management Skills.
</i>
      <br><b><br>Contest Duration</b> - 48 hrs
<br><b>No. of problems</b> - TBA
<br><b>Max. Team Size</b> - 4 Members
<br><b>Date</b> - 5th April - 7th April
<br><b>Contest Link</b> - <a href='https://threadbit.hackerearth.com'>Click Here</a>
<br><b>Contact</b> - Kanishkar J <a href="tel:+91 9902847087" >+91 7247521600</a> )
<br><div> <br>Prizes worth 50k for the winners.</div>
      `
    },
    {
      title: "Capture The Flag",
      src: "images/compressed/CTF.png",
      content: `Computer’s a Fortress here, can you become the Knight?`,
      dt: "12th April,21:00 to 14th April,21:00",
      about: "A Capture the Flag Competition held by Byte Bandits, IIT Indore’s academic CTF team. The team size for the CTF should be a maximum 4 people."
      , longContent: `
   <i>
A Capture the Flag Competition held by Byte Bandits, IIT Indore’s academic CTF team. The team size for the CTF should be a maximum 4 people.<br> Get ready to solve typical tasks related to Networking, Programming, Applications, Mobile, Forensics, Reverse Engineering and
Cryptography.
</i>
<br><b><br>Format</b> - Jeopardy
<br><b>Contest Duration</b> - 24 hrs
<br><b>No. of problems</b> - 15
<br><b>Max. Team Size</b> - 4 Members
<br><b>Date and Time</b> -  12th April,21:00 to 14th April,21:00
<br><b>Contest link</b> - <a target="_blank"  href="http://ctf.euristica.in" >Click Here</a>
<br><b>Contact</b> - <br> Kunal Gupta ( <a href="tel:+91 9971918360" >+91 9971918360</a> ) <br> Bhor Verma ( <a href="tel:+91 81092 09652" >+91 81092 09652</a> )
<br><div> <br>Prizes worth 50k for the winners. </div>
      `
    },
    {
      title: "Cognitia : Machine Learning Codesprint",
      src: "images/compressed/machinelearning.png",
      content: `For the Analytical Ones !`,
      dt: "11 April, 12:00AM to 13 April, 12:00 AM",
      about: "This codesprint aims to give the participants the thrilling experience of programming a computer to learn."
      , longContent: `
  <i> Artificial Intelligence(AI) and Analysis will shape our future more powerfully than any other innovation this century. ​Machine learning is an application of Artificial Intelligence in which ​the computer learns for itself how to complete a task​.
<br>This codesprint aims to give the participants the thrilling experience of Programming a
Computer to learn. </i><br>
<br><b>No. of Problems</b> - 2
<br><b>Date and Time</b> - 11 April, 12:00AM to 13 April, 12:00 AM
<br><b>Contest Link - </b><a href="https://www.hackerearth.com/challenges/college/cognitia19/" >Click Here</a>
<br><b>Contact</b> - <a href="mailto:euristica@iiti.ac.in">euristica@iiti.ac.in</a>
<br><div> <br>Prizes worth 15k for the winners. </div>
      `
    },
    {
      title: "Code Mélange 5.0",
      src: "images/compressed/codemilange.png",
      content: `When algorithms take the centre stage…!`,
      dt: "14th April, 9:00pm to 15th April, 01:00am",
      about: "A competitive programming contest which will test your logical, analytical and algorithmic skills.",
      longContent: `
  <i>    A competitive programming contest which will test your logical, analytical and algorithmic skills with problems of varying difficulty.</i>
<br><b><br>Contest Duration</b> - 4 hours
<br><b> No. of Problems</b> - 10-12
<br><b>Date and Time</b> - 14th April, 9:00pm to 15th April, 01:00am
<br><b>Contest Link - </b><a href="index.html">Click Here</a>
<br><b>Previous Year Links</b> -
<br>
<a target="_blank"  href="https://www.codechef.com/CMEL2018" >Code Mélange 2018</a> |
<a target="_blank"  href="https://www.hackerrank.com/code-melange-iiti/" >Code Mélange 2017</a> |
<a target="_blank"  href="https://www.hackerrank.com/code-melange-iiti-old" >Code Melange 2016</a> |
<a target="_blank"  href="https://www.hackerrank.com/contests/code-melange/challenges" >Code Melange 2015</a>
<br><b>Contact</b> - Kumar Abhinav ( <a href="tel:+91 88510 96873" >+91 88510 96873</a> )
<br><div> <br>Prizes worth 30k for the winners. </div>
      `
    },
    {
      title: "Code Golf 5.0",
      src: "images/compressed/CodeGolf.png",

      content: `Stack or Sort, Code it Short!`,
      dt: "8th April, 9:00pm to 9th April, 0:00",
      about: "A coding contest in which shorter is your code, better is your score.",
      longContent: `
      <i>
      A coding contest in which shorter is your code, better is your score.</i>
<br><b><br>Contest Duration</b> - 2 hours
<br><b>No. of Problems</b> - 7-8
<br><b>Date and Time</b> - 8th April, 9:00pm to 9th April, 0:00
<br><b>Contest Link</b> - <a href="https://www.hackerrank.com/code-golf-5-0"> Click here </a>
<br><b>Previous Year Links</b> - <a target="_blank" href="https://www.hackerrank.com/code-golf-4">Code Golf 4.0</a> |
<a target="_blank"  href="https://www.hackerrank.com/fluxus-code-golf" >Code Golf 3.0</a>
<br><b>Contact</b> - <br>Divyansh Choudhary (<a href="tel:+91 9818652018" >+919818652018</a>)
<br><div> <br>Prizes worth 10k for the winners </div>
      `
    },
    {
      title: "Surprise Language 5.0",
      src: "images/compressed/Surpriselanguage.png",
      dt: "4th April 9:00pm - 5th April 12:00am",
      content: `‘Coz who doesn’t like surprises ?`,
      about: "Ready for something adventurous ? Here we bring a programming contest in which the language will be a secret, revealed only 15 minutes before the contest. We will be releasing a list of languages 3 days before the contest.",
      longContent: `
      <i>
      Ready for something adventurous ? Here we bring a programming contest in which the language will be a secret, revealed only 15 minutes before the contest.<br> We will be releasing a list of languages 3 days before the contest.
      <br> The Languages are announced!<br>
      1. Lua <br>
      2. Clojure
</i>
      <br><b><br>Contest Duration</b> - 3 Hours.
<br><b>No. of Problems</b> - 7-8
<br><b>Date and Time</b> - 4th April 9:00pm - 5th April 12:00am
<br><b>Contest Link - </b><a target="_blank" href="https://www.hackerrank.com/surprise-language-5-0" >Click Here</a>
<br><b>Previous Year Links</b> -
<a target="_blank"  href="https://www.hackerrank.com/surprise-language-4-0" >SL 2018</a>
 | <a target="_blank"  href="https://www.hackerrank.com/surprise-language-3-0" >SL 2017</a>
 | <a target="_blank"  href="https://www.hackerrank.com/surprise-language-2-0" >SL 2016</a>
 | <a target="_blank"  href="https://www.hackerrank.com/surprise-language" >SL 2015</a>
 <br><b>Contact</b> - Dhruv Chadha ( <a href="tel:+91 9910286500" >+91 9910286500</a> )
<br><div> <br>Prizes worth 10k for the winners </div>
      `
    },
    {
      title: "Hack the Code",
      src: "images/compressed/Hackthecode.png",

      content: `Are you a master debugger?`,
      dt: "12th April 9:00pm - 13th April 12:00am",
      about: "A competitive programming contest in which you test your debugging skills by correcting the given code for the failing test case(s). ",
      longContent: `
  <i>
      Do you love squashing bugs? Is smashing your head on a
      wall and tearing off your hair what you love? If yes, then this contest is definitely for you!
<br>Presenting Hack the code! A 3 hour contest where you’ll be provided problems
alongside it’s solution(any language), and you’ll have to find a failing case on the solution.  Just output any test case which will fail the code.
</i><br><b><br>Contest Duration</b> - 3 hours
<br><b>No. of Problems</b> - 10
<br><b>Date and Time</b> - 12th April 9:00pm - 13th April 12:00am
<br><b>Contest Link - </b><a target="_blank" href="https://www.hackerrank.com/hack-the-code-2-0" >Click Here</a>
<br><b>Previous Year Links</b> - <a target="_blank" href="https://www.hackerrank.com/hack-the-code4">Hack The Code 2018</a>
<br><b>Contact</b> - Daanish Mahajan ( <a href="tel:+91 8146365803" >+91 8146365803</a> )
<br><div> <br>Prizes worth 11k for the winners </div>
      `
    },
    {
      title: "Fool You!",
      src: "images/compressed/Foolyou.png",

      content: `There’s nothing more deceptive than an obvious fact!`,
      dt: "1st April 4:00pm-8:00pm",
      about: "A unique programming contest that requires one to think out of the box."
      , longContent: `
  <i>    A unique programming contest, in which thinking for the solution might still be easier than understanding the problem !
</i><br><b><br>Contest Duration</b> - 6 hours
<br><b>No. of Problems</b> - 6
<br><b>Date and Time</b> - 1st April 2:00pm-8:00pm
<br><b>Contest Link</b> - <a href="https://www.codechef.com/FOYO2019" >Click Here</a>
<br><b>Previous Year Links</b> - <a target="_blank" href="https://www.codechef.com/FOOY2018">Fool You 2018</a>
<br><b>Contact</b> - Vishnunarayan K I ( <a href="tel:+91 8921799625" >+91 8921799625</a> )
<br><div> <br>Prizes worth 10k for the winners </div>
`
    },
    {
      title: "SOH CAH TOA",
      src: "images/compressed/Sohcahtoa.png",

      content: `Untangle the labyrinthine of Mathematical Programming.`,
      dt: "TBA",
      about: " A short-duration mathematical programming contest focusing on Number Theory, Probability, Combinatorics, Modular Arithmetic and other interesting math topics."
      , longContent: `
  <i>  A short-duration mathematical programming contest focusing on Number Theory, Probability, Combinatorics, Modular Arithmetic and other interesting math topics.
</i><br><b><br>Contest Duration</b> - 3 hours
<br><b>No. of Problems</b> - 10-12
<br><b>Date and Time</b> - TBA
<br><b>Contest Link</b> - <a href="index.html">Click Here</a>
<br><b>Previous Year Links</b> - <a target="_blank" href="http://www.hackerrank.com/soh-cah-toa">Soh Cah Toa 2018</a>
<br><b>Contact</b> - Priyanshu Varshney (<a href="tel:+91 8770855796" >+91 8770855796</a>)
<br><div> <br>Prizes worth 20k for the winners </div>
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
        tag: 'euristica@iiti.ac.in',
        link: 'mailto:euristica@iiti.ac.in',
      },
      {
        class: 'icon fa-envelope',
        tag: 'progclub@iiti.ac.in',
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
