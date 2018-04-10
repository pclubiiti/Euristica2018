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
      
      content: `For the Smart Ones !`,
      about: " Our flagship event, a short duration competitive programming contest.",
      dt: "7th April 21:35 - 8th April 00:05",
      longContent: `
      <i>
      Our flagship event, a short duration competitive programming contest.</i><br>
<b><br>Contest Duration </b>- 2.5 hours<br>
<b>No. of Problems </b>- 7 to 8<br>
<b>Date and Time</b> - 7th April 21:35 - 8th April 00:05
<br><b>Contest Link - </b><a target="_blank" href="http://codeforces.com/contests/960" >Click Here</a>
<br><b>Previous Years links</b> -
<br>
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
      title: "Hackathon",
      src: "images/compressed/hackathon.png",
      
      content: `For the Creative Ones !`,
      dt: "23rd March - 24th March",
      about: " A social coding event to build a new software under the to-be-announced broad themes. Each team can consist of a maximum of 4 people."
      , longContent: `
      <i>
      A social coding event to build a new software under the to-be-announced broad themes. Each team can consist of a maximum of 4 people.
</i>
      <br><b><br>Contest Duration</b> - 30 hrs
<br><b>No. of problems</b> - TBA
<br><b>Date</b> - 23rd to 24th march
<br><b>Time</b> - Begins at 9 PM IST 23rd March
<br><b>Contest Link</b> - <a href='https://www.hackerearth.com/sprints/euristica18-and-e-summit-hackathon/
'>Click Here</a>
<br><b>Contact</b> - Mrigank Krishan ( <a href="tel:+91 7247521600" >+91 7247521600</a> )
<br><div> <br>Prizes worth 100k for the winners. </div>
      `
    },
    {
      title: "Capture The Flag",
      src: "images/compressed/ctf.png",
      content: `For the Clever Ones !`,
      dt: "7 April 9pm IST - 8 April 9pm IST",
      about: "A Capture the Flag Competition held by Byte Bandits, IIT Indore’s academic CTF team. The team size for the CTF should be a maximum 4 people."
      , longContent: `
   <i>
A Capture the Flag Competition held by Byte Bandits, IIT Indore’s academic CTF team. The team size for the CTF should be a maximum 4 people.
</i>
<br><b>Format</b> - Jeopardy
<br><b><br>Contest Duration</b> - 24hrs
<br><b>Date and Time</b> - <br> 7 April 9pm IST - 8 April 9pm IST
<br><b>Contest link</b> - <a target="_blank"  href="http://ctf.euristica.in" >Click Here</a>
<br><b>Contact</b> - <br> Kunal Gupta ( <a href="tel:+91 9971918360" >+91 9971918360</a> ) <br> Bhor Verma ( <a href="tel:+91 81092 09652" >+91 81092 09652</a> )
<br><div> <br>Prizes worth 50k for the winners. </div>
      `
    },
    {
      title: "Machine Learning Codesprint",
      src: "images/compressed/ml.png",
      
      content: `For the Analytical Ones !`,
      dt: "30th March 9pm to 8th April 12:00 noon",
      about: "This codesprint aims to give the participants the thrilling experience of programming a computer to learn."
      , longContent: `
  <i> Participants will be given real world Machine Learning problems, and will have to train their computers to understand and model the data, and predict target outputs corresponding to unseen inputs.</i>
<br><b>No. of Problems</b> - 2
<br><b>Date and Time</b> - 30th March 9pm to 8th April 12:00 noon
<br><b>Contest Link - </b><a target="_blank" href="https://www.hackerearth.com/challenge/college/euristica-ml/" >Click Here</a>
<br><b>Contact</b> - <a href="mailto:euristica@iiti.ac.in">euristica@iiti.ac.in</a>
<br><div> <br>Prizes worth 30k for the winners. </div>
      `
    },
    {
      title: "Code Mélange 4.0",
      src: "images/compressed/code_melange.png",
      content: `For the Relentless Ones !`,
      dt: "4th April 9:00pm to 5th April 2:00am",
      about: "A competitive programming contest which will test your logical, analytical and algorithmic skills.",
      longContent: `
  <i>    A competitive programming contest which will test your logical, analytical and algorithmic skills.</i>
<br><b><br>Contest Duration</b> - 5 hours
<br><b>Date and Time</b> - <br> 4th April 9:00pm to 5th April 2:00am
<br><b>Contest Link - </b><a target="_blank" href="https://www.codechef.com/CMEL2018">Click Here</a>
<br><b>Previous Year Links</b> -
<br>
<a target="_blank"  href="https://www.hackerrank.com/code-melange-iiti/" >Code Mélange 2017</a> |
<a target="_blank"  href="https://www.hackerrank.com/code-melange-iiti-old" >Code Melange 2016</a> |
<a target="_blank"  href="https://www.hackerrank.com/contests/code-melange/challenges" >Code Melange 2015</a>
<br><b>Contact</b> - Kumar Abhinav ( <a href="tel:+91 88510 96873" >+91 88510 96873</a> )
<br><div> <br>Prizes worth 30k for the winners. </div>
      `
    },
    {
      title: "Code Golf 2017",
      src: "images/compressed/code_golf.png",
      
      content: `For the Succinct Ones !`,
      dt: "26th March 9:00 PM - 12:00 AM 27th March",
      about: "A coding contest in which shorter is your code, better is your score.",
      longContent: `
      <i>
      A coding contest in which shorter is your code, better is your score.</i>
<br><b><br>Contest Duration</b> - 3 hours
<br><b>No. of Problems</b> - 7-8
<br><b>Date and Time</b> -26th March 9:00 PM - 12:00 AM 27th March
<br><b>Contest Link</b> - <a target="_blank" href="https://www.hackerrank.com/code-golf-4"> Click here </a>
<br><b>Previous Year Links</b> - <a target="_blank"  href="https://www.hackerrank.com/fluxus-code-golf" >Code Golf 3.0</a>
<br><b>Contact</b> - <br>Divyansh Choudhary (<a href="tel:+91 9818652018" >+919818652018</a>)
<br><div> <br>Prizes worth 12k for the winners </div>
      `
    },
    {
      title: "Surprise Language 4.0",
      src: "images/compressed/surprise_language.png",
      dt: "28th March 9:00 PM - 12:00 PM 29th March",
      content: `For the Spontaneous Ones !`,
      about: "A programming contest in which the language will be a secret, revealed only 15 minutes before the contest. We will be releasing a list of languages 3 days before the contest.",
      longContent: `
      <i>
      A programming contest in which the language will be a secret, revealed only 15 minutes before the contest. We will be releasing a list of languages 3 days before the contest.
</i>
      <br><b><br>Contest Duration</b> - 3 Hours.
<br><b>No. of Problems</b> - 7-8
<br><b>Date and Time</b> -
28th March 9:00 PM - 12:00 PM 29th March
<br><b>Contest Link - </b><a target="_blank" href="http://www.hackerrank.com/surprise-language-4-0" >Click Here</a>
<br><b>Previous Year Links</b> -
<a target="_blank"  href="https://www.hackerrank.com/surprise-language-3-0" >SL 2017</a>
 | <a target="_blank"  href="https://www.hackerrank.com/surprise-language-2-0" >SL 2016</a>
 | <a target="_blank"  href="https://www.hackerrank.com/surprise-language" >SL 2015</a>
 <br><b>Contact</b> - Dhruv Chadha ( <a href="tel:+91 9910286500" >+91 9910286500</a> )
<br><div> <br>Prizes worth 12k for the winners </div>
      `
    },
    {
      title: "Hack the Code",
      src: "images/compressed/hack_the_code.png",
      
      content: `For the Meticulous Ones !`,
      dt: "13 April 21:00 - 0:00 IST 14 April",
      about: "A competitive programming contest in which you test your debugging skills by correcting the given code for the failing test case(s). ",
      longContent: `
  <i>    A programming contest which tests your debugging skills by correcting/debugging the given code for the failing test case(s).
</i><br><b><br>Contest Duration</b> - 3 hours
<br><b>No. of Problems</b> - 15
<br><b>Date and Time</b> - 13 April 21:00 - 0:00 IST 14 April
<br><b>Contest Link - </b><a target="_blank" href="https://www.hackerrank.com/hack-the-code4" >Click Here</a>
<br><b>Contact</b> - Daanish Mahajan ( <a href="tel:+91 8146365803" >+91 8146365803</a> )
<br><div> <br>Prizes worth 8k for the winners </div>
      `
    },
    {
      title: "Fool You!",
      src: "images/compressed/fool_you.png",
      
      content: `For the Deceptive Ones !`,
      dt: "1 April 3:00 PM - 8:00 PM 1 April",
      about: "A unique programming contest that requires one to think out of the box."
      , longContent: `
  <i>    A unique programming contest, in which thinking for the solution might still be easier than understanding the problem !
</i><br><b><br>Contest Duration</b> - 5 hours
<br><b>No. of Problems</b> - 6
<br><b>Date and Time</b> - 1 April 3:00 PM - 8:00 PM 1 April
<br><b>Contest Link</b> - <a href="https://www.codechef.com/FOOY2018" target="_blank" >Click Here</a>
<br><b>Contact</b> - Vishnunarayan K I ( <a href="tel:+91 8921799625" >+91 8921799625</a> )
<br><div> <br>Prizes worth 12k for the winners </div>
<br><b>Are you a computer?</b>
<br><small style="word-wrap: break-word;">
011001000110100101110110011010010110010001100101001000000110001001111001001000000011001000100000011000010110111001100100001000000110000101100100011001000010000001100110011010010111011001100101
</small>      
`
    },
    {
      title: "SOH CAH TOA",
      src: "images/compressed/soh_cah_toa.png",
      
      content: `For the Geeky Ones !`,
      dt: " 6th April 9:00pm - 12:00am 7th April",
      about: " A short-duration mathematical programming contest focusing on number theory, probability, combinatorics, modular arithmetic and other interesting math topics."
      , longContent: `
  <i>  A short-duration mathematical programming contest focusing on number theory, probability, combinatorics, modular arithmetic and other interesting math topics.
</i><br><b><br>Contest Duration</b> - 3 hours
<br><b>No. of Problems</b> - 10-12
<br><b>Date and Time</b> -<br> 6th April 9:00pm - 12:00am 7th April
<br><b>Contest Link</b> - <a href="http://www.hackerrank.com/soh-cah-toa" target="_blank">Click Here</a>
<br><b>Contact</b> - Priyanshu Varshney (<a href="tel:+91 8770855796" >+91 8770855796</a>)
<br><div> <br>Prizes worth 15k for the winners </div>
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
