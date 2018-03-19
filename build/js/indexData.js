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
      about: " Our flagship event, a short duration competitive programming contest.",
      dt: "TBA",
      longContent: `
      <i>
      Our flagship event, a short duration competitive programming contest.</i><br>
<b>Contest Duration </b>- 2.5 hours<br>
<b>No. of Problems </b>- 7 to 8<br>
<b>Date</b> - TBA<br>
<b>Time </b>- TBA<br>

<b>Previous Years links</b> - <a target="_blank"  href="http://codeforces.com/contest/768" > DBZ 5.0 </a>|
<a target="_blank"  href="https://www.codechef.com/DIBZ2016" >DBZ 4.0</a> |
<a target="_blank"  href="https://www.codechef.com/DBYZ15">DBZ 3.0</a> |
<a target="_blank"  href="https://www.codechef.com/DBYZ2014" >DBZ 2.0</a> |
<a target="_blank"  href="https://www.codechef.com/DBYZ2013" >DBZ 1.0</a>
<br><b>Contact</b> - Vinit Shah ( +91 75060 78231 )
<br><div> Prizes worth 50k for the winners. </div>
      `
    },
    {
      title: "Hackathon",
      src: "images/compressed/hackathon.png",
      date: "23th - 24th March",
      content: `For the Creative Ones !`,
      dt: "23rd March - 24th March",
      about: " A social coding event to build a new software under the to-be-announced broad themes. Each team can consist of a maximum of 4 people."
      , longContent: `
      <i>
      A social coding event to build a new software under the to-be-announced broad themes. Each team can consist of a maximum of 4 people.
</i>
      <br><b>Contest Duration</b> - 30 hrs
<br><b>No. of problems</b> - TBA
<br><b>Date</b> - 23rd to 24th march
<br><b>Time</b> - <br>Begins at 9 PM IST 23rd March

<br><b>Contact</b> - Mrigank Krishan ( +91 7247521600 )
<br><div> Prizes worth 100k for the winners. </div>
      `
    },
    {
      title: "Capture The Flag",
      src: "images/compressed/ctf.png",
      date: "7th-8th April",
      content: `For the Clever Ones !`,
      dt: "7th to 8th April",
      about: "A Capture the Flag Competition held by Byte Bandits, IIT Indore’s academic CTF team. The team size for the CTF should be a maximum 4 people."
      , longContent: `
   <i>   
A Capture the Flag Competition held by Byte Bandits, IIT Indore’s academic CTF team. The team size for the CTF should be a maximum 4 people.
</i>
<br><b>Format</b> - Jeopardy
<br><b>Contest Duration</b> - TBA
<br><b>Date</b> - 7th to 8th April
<br><b>Time</b> - TBA
<br><b>Contest link</b> - <a target="_blank"  href="http://ctf.euristica.in" >http://ctf.euristica.in</a>
<br><b>Contact</b> - <br> Kunal Gupta ( 9971918360 ) <br> Bhor Verma ( +91 81092 09652 )
<br><div> Prizes worth 50k for the winners. </div>
      `
    },
    {
      title: "Machine Learning Codesprint",
      src: "images/compressed/ml.png",
      date: "25th March - 8th April",
      content: `For the Analytical Ones !`,
      dt: "25th March 12:00 noon to 8th April 12:00 noon",
      about: "Participants will be given real world Machine Learning problems, and will have to train their computers to understand and model the data, and predict target outputs corresponding to unseen inputs."
      , longContent: `
  <i> Participants will be given real world Machine Learning problems, and will have to train their computers to understand and model the data, and predict target outputs corresponding to unseen inputs.
</i><br><b>Contest Duration</b> - 25th March to 8th April
<br><b>No. of Problems</b> - 3
<br><b>Date and Time</b> - <br>25th March 12:00 noon to 8th April 12:00 noon

<br><b>Contact</b> - Ankit Gaur ( +91 81716 85165 )
<br><div> Prizes worth 30k for the winners. </div>
      `
    },
    {
      title: "Code Mélange 3.0",
      src: "images/compressed/code_melange.png",
      date: "30th March - 1st April, 21:00",
      content: `For the Relentless Ones !`,
      dt: "30th March 9:00pm to 1st April 9:00am",
      about: "A long algorithmic competitive programming contest which will test your logical, analytical and algorithmic skills.",
      longContent: `
  <i>    A long algorithmic competitive programming contest which will test your logical, analytical and algorithmic skills.</i>
<br><b>Contest Duration</b> - 36 hours
<br><b>No. of Problems</b> - 15-16
<br><b>Date and Time</b> - <br> 30th March 9:00pm to 1st April 9:00am

<br><b>Previous Year Links</b> - 
<a target="_blank"  href="https://www.hackerrank.com/code-melange-iiti/" >Code Mélange 2017</a> | 
<a target="_blank"  href="https://www.hackerrank.com/contests/code-melange-iiti" >Code Melange 2016</a>
<br><b>Contact</b> - Kumar Abhinav ( +91 88510 96873 )
<br><div> Prizes worth 30k for the winners. </div>
      `
    },
    {
      title: "Code Golf 2017",
      src: "images/compressed/code_golf.png",
      date: "26th March, 21:00-23:59",
      content: `For the Succinct Ones !`,
      dt: "26th March 9:00 PM - 12:00 PM 27th March",
      about: "A coding contest in which shorter is your code, better is your score.",
      longContent: `
      <i>
      A coding contest in which shorter is your code, better is your score.</i>
<br><b>Contest Duration</b> - 3 hours 
<br><b>No. of Problems</b> - 7-8
<br><b>Date and Time</b> - <br>26th March 9:00 PM - 12:00 PM 27th March

<br><b>Previous Year Links</b> - 
<br><b>Code Golf 3.0</b> -  <a target="_blank"  href="https://www.hackerrank.com/fluxus-code-golf" >https://www.hackerrank.com/fluxus-code-golf</a>
<br><b>Contact</b> - Divyansh Choudhary ( 9818652018 )
<br><div> Prizes worth 12k for the winners </div>
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
      <br><b>Contest Duration</b> - 3 Hours.
<br><b>No. of Problems</b> - 7-8
<br><b>Date and Time</b> - 
<br>28th March 9:00 PM - 12:00 PM 29th March

<br><b>Previous Year Links</b> - 
<a target="_blank"  href="https://www.hackerrank.com/surprise-language-3-0" >SL 2017</a>
 | <a target="_blank"  href="https://www.hackerrank.com/surprise-language-2-0" >SL 2016</a>
 | <a target="_blank"  href="https://www.hackerrank.com/surprise-language" >SL 2015</a>
 <br><b>Contact</b> - Dhruv Chadha ( +91 9910286500 )
<br><div> Prizes worth 12k for the winners </div>
      `
    },
    {
      title: "Hack the Code",
      src: "images/compressed/hack_the_code.png",
      date: "3rd April, 21:00-23:59",
      content: `For the Meticulous Ones !`,
      dt: "3 April 9:00 PM - 12:00 PM 4 April",
      about: "A programming contest which tests your debugging skills by correcting/debugging the given code for the failing test case(s).",
      longContent: `
  <i>    A programming contest which tests your debugging skills by correcting/debugging the given code for the failing test case(s).
</i><br><b>Contest Duration</b> - 3 hours
<br><b>No. of Problems</b> - 15
<br><b>Date and Time</b> -<br> 3 April 9:00 PM - 12:00 PM 4 April

<br><b>Contact</b> - Daanish Mahajan ( 8146365803 )
<br><div> Prizes worth 8k for the winners </div>
      `
    },
    {
      title: "Fool You!",
      src: "images/compressed/fool_you.png",
      date: "1st April, 15:00-18:00",
      content: `For the Deceptive Ones !`,
      dt: "1 April 3:00 PM - 8:00 PM 1 April",
      about: "A unique programming contest, in which thinking for the solution might still be easier than understanding the problem !"
      , longContent: `
  <i>    A unique programming contest, in which thinking for the solution might still be easier than understanding the problem !
</i><br><b>Contest Duration</b> - 5 hours
<br><b>No. of Problems</b> - 10-12
<br><b>Date and Time</b> - <br> 1 April 3:00 PM - 8:00 PM 1 April

<br><b>Contact</b> - Vishnunarayan K I ( 8921799625 )
<br><div> Prizes worth 12k for the winners </div>
      `
    },
    {
      title: "SOH CAH TOA",
      src: "images/compressed/soh_cah_toa.png",
      date: "6th April",
      content: `For the Geeky Ones !`,
      dt: " 6th April 9:00pm - 12:00am 7th April",
      about: " A short-duration mathematical programming contest focusing on number theory, probability, combinatorics, modular arithmetic and other interesting math topics."
      , longContent: `
  <i>  A short-duration mathematical programming contest focusing on number theory, probability, combinatorics, modular arithmetic and other interesting math topics.
</i><br><b>Contest Duration</b> - 3 hours
<br><b>No. of Problems</b> - 10-12
<br><b>Date and Time</b> -<br> 6th April 9:00pm - 12:00am 7th April

<br><b>Contact</b> - Priyanshu Varshney ( 8770855796 )
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleERhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBhbGxpbWFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFsbGltYWdlc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpIHtcbiAgICAgIGFsbGltYWdlc1tpXS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFsbGltYWdlc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpO1xuICAgIH1cbiAgfVxufSwgZmFsc2UpO1xuXG52YXIgYXBwID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI2hlYWRlcicsXG4gIGRhdGE6IHtcbiAgICB0aXRsZTogJ0V1cmlzdGljYScsXG4gICAgc3VidGl0bGU6ICdUaGUgUHJvZ3JhbW1pbmcgQ2x1YiwgSUlUIEluZG9yZScsXG4gIH1cbn0pXG5cbnZhciBpbnRybyA9IG5ldyBWdWUoe1xuICBlbDogJyNpbnRybycsXG4gIGRhdGE6IHtcbiAgICBzdWJ0aXRsZTogYFRoaXMgZ2VuZXJhdGlvbiBoYXMgc2VlbiBncmVhdCBwcm9ncmFtbWVycyBsaWtlIExpbnVzIFRvcnZhbGRzIGFuZCBKZWZmIERlYW4uXG5UYWxlbnRlZCBhbmQgaGFyZHdvcmtpbmcgcHJvZ3JhbW1lcnMgYXJlIHJpc2luZyBhbGwgYXJvdW5kIHRoZSBnbG9iZS4gVG8gZm9zdGVyIHRoaXNcbiAgICAgICAgYW1hemluZyBza2lsbCBhbmQgY3VsdHVyZSwgdGhlIERlcGFydG1lbnQgb2YgQ29tcHV0ZXIgU2NpZW5jZSBhbmQgRW5naW5lZXJpbmcsIElJVFxuICAgICAgICBJbmRvcmUgcHJlc2VudHMgeW91IHdpdGggLSBFdXJpc3RpY2HigJkxOCwgdGhlIGFubnVhbCBjb2RpbmcgZmVzdGl2YWwgb2Ygb3VyIGNvbGxlZ2UuXG4gICAgICAgIFdlIHdpbGwgYmUgY29uZHVjdGluZyBhIHZhcmlldHkgb2YgZXZlbnRzIHJhbmdpbmcgZnJvbSBDb21wZXRpdGl2ZSBQcm9ncmFtbWluZyBhbmRcbiAgICAgICAgQXBwbGljYXRpb24gRGV2ZWxvcG1lbnQgdG8gQ3liZXIgU2VjdXJpdHkgYW5kIE1hY2hpbmUgTGVhcm5pbmcuXG4gICAgICAgIGAsXG4gICAgbGluazogXCJodHRwczovL2dvby5nbC9mb3Jtcy82WHZaWDFvZWQ1dThsZnh5MVwiXG4gIH1cbn0pXG5cbnZhciBldmVudHMgPSBuZXcgVnVlKHtcbiAgZWw6ICcjZXZlbnRzJyxcbiAgZGF0YToge1xuICAgIGxpc3Q6IFt7XG4gICAgICB0aXRsZTogXCJEaXZpZGUgQnkgWmVybyA2LjBcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvY29tcHJlc3NlZC9kYnoucG5nXCIsXG4gICAgICBkYXRlOiBcIlRvIGJlIGFubm91bmNlZFwiLFxuICAgICAgY29udGVudDogYEZvciB0aGUgU21hcnQgT25lcyAhYCxcbiAgICAgIGFib3V0OiBcIiBPdXIgZmxhZ3NoaXAgZXZlbnQsIGEgc2hvcnQgZHVyYXRpb24gY29tcGV0aXRpdmUgcHJvZ3JhbW1pbmcgY29udGVzdC5cIixcbiAgICAgIGR0OiBcIlRCQVwiLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgICAgIDxpPlxuICAgICAgT3VyIGZsYWdzaGlwIGV2ZW50LCBhIHNob3J0IGR1cmF0aW9uIGNvbXBldGl0aXZlIHByb2dyYW1taW5nIGNvbnRlc3QuPC9pPjxicj5cbjxiPkNvbnRlc3QgRHVyYXRpb24gPC9iPi0gMi41IGhvdXJzPGJyPlxuPGI+Tm8uIG9mIFByb2JsZW1zIDwvYj4tIDcgdG8gODxicj5cbjxiPkRhdGU8L2I+IC0gVEJBPGJyPlxuPGI+VGltZSA8L2I+LSBUQkE8YnI+XG5cbjxiPlByZXZpb3VzIFllYXJzIGxpbmtzPC9iPiAtIDxhIHRhcmdldD1cIl9ibGFua1wiICBocmVmPVwiaHR0cDovL2NvZGVmb3JjZXMuY29tL2NvbnRlc3QvNzY4XCIgPiBEQlogNS4wIDwvYT58XG48YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHBzOi8vd3d3LmNvZGVjaGVmLmNvbS9ESUJaMjAxNlwiID5EQlogNC4wPC9hPiB8XG48YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHBzOi8vd3d3LmNvZGVjaGVmLmNvbS9EQllaMTVcIj5EQlogMy4wPC9hPiB8XG48YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHBzOi8vd3d3LmNvZGVjaGVmLmNvbS9EQllaMjAxNFwiID5EQlogMi4wPC9hPiB8XG48YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHBzOi8vd3d3LmNvZGVjaGVmLmNvbS9EQllaMjAxM1wiID5EQlogMS4wPC9hPlxuPGJyPjxiPkNvbnRhY3Q8L2I+IC0gVmluaXQgU2hhaCAoICs5MSA3NTA2MCA3ODIzMSApXG48YnI+PGRpdj4gUHJpemVzIHdvcnRoIDUwayBmb3IgdGhlIHdpbm5lcnMuIDwvZGl2PlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiSGFja2F0aG9uXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvaGFja2F0aG9uLnBuZ1wiLFxuICAgICAgZGF0ZTogXCIyM3RoIC0gMjR0aCBNYXJjaFwiLFxuICAgICAgY29udGVudDogYEZvciB0aGUgQ3JlYXRpdmUgT25lcyAhYCxcbiAgICAgIGR0OiBcIjIzcmQgTWFyY2ggLSAyNHRoIE1hcmNoXCIsXG4gICAgICBhYm91dDogXCIgQSBzb2NpYWwgY29kaW5nIGV2ZW50IHRvIGJ1aWxkIGEgbmV3IHNvZnR3YXJlIHVuZGVyIHRoZSB0by1iZS1hbm5vdW5jZWQgYnJvYWQgdGhlbWVzLiBFYWNoIHRlYW0gY2FuIGNvbnNpc3Qgb2YgYSBtYXhpbXVtIG9mIDQgcGVvcGxlLlwiXG4gICAgICAsIGxvbmdDb250ZW50OiBgXG4gICAgICA8aT5cbiAgICAgIEEgc29jaWFsIGNvZGluZyBldmVudCB0byBidWlsZCBhIG5ldyBzb2Z0d2FyZSB1bmRlciB0aGUgdG8tYmUtYW5ub3VuY2VkIGJyb2FkIHRoZW1lcy4gRWFjaCB0ZWFtIGNhbiBjb25zaXN0IG9mIGEgbWF4aW11bSBvZiA0IHBlb3BsZS5cbjwvaT5cbiAgICAgIDxicj48Yj5Db250ZXN0IER1cmF0aW9uPC9iPiAtIDMwIGhyc1xuPGJyPjxiPk5vLiBvZiBwcm9ibGVtczwvYj4gLSBUQkFcbjxicj48Yj5EYXRlPC9iPiAtIDIzcmQgdG8gMjR0aCBtYXJjaFxuPGJyPjxiPlRpbWU8L2I+IC0gPGJyPkJlZ2lucyBhdCA5IFBNIElTVCAyM3JkIE1hcmNoXG5cbjxicj48Yj5Db250YWN0PC9iPiAtIE1yaWdhbmsgS3Jpc2hhbiAoICs5MSA3MjQ3NTIxNjAwIClcbjxicj48ZGl2PiBQcml6ZXMgd29ydGggMTAwayBmb3IgdGhlIHdpbm5lcnMuIDwvZGl2PlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQ2FwdHVyZSBUaGUgRmxhZ1wiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL2N0Zi5wbmdcIixcbiAgICAgIGRhdGU6IFwiN3RoLTh0aCBBcHJpbFwiLFxuICAgICAgY29udGVudDogYEZvciB0aGUgQ2xldmVyIE9uZXMgIWAsXG4gICAgICBkdDogXCI3dGggdG8gOHRoIEFwcmlsXCIsXG4gICAgICBhYm91dDogXCJBIENhcHR1cmUgdGhlIEZsYWcgQ29tcGV0aXRpb24gaGVsZCBieSBCeXRlIEJhbmRpdHMsIElJVCBJbmRvcmXigJlzIGFjYWRlbWljIENURiB0ZWFtLiBUaGUgdGVhbSBzaXplIGZvciB0aGUgQ1RGIHNob3VsZCBiZSBhIG1heGltdW0gNCBwZW9wbGUuXCJcbiAgICAgICwgbG9uZ0NvbnRlbnQ6IGBcbiAgIDxpPiAgIFxuQSBDYXB0dXJlIHRoZSBGbGFnIENvbXBldGl0aW9uIGhlbGQgYnkgQnl0ZSBCYW5kaXRzLCBJSVQgSW5kb3Jl4oCZcyBhY2FkZW1pYyBDVEYgdGVhbS4gVGhlIHRlYW0gc2l6ZSBmb3IgdGhlIENURiBzaG91bGQgYmUgYSBtYXhpbXVtIDQgcGVvcGxlLlxuPC9pPlxuPGJyPjxiPkZvcm1hdDwvYj4gLSBKZW9wYXJkeVxuPGJyPjxiPkNvbnRlc3QgRHVyYXRpb248L2I+IC0gVEJBXG48YnI+PGI+RGF0ZTwvYj4gLSA3dGggdG8gOHRoIEFwcmlsXG48YnI+PGI+VGltZTwvYj4gLSBUQkFcbjxicj48Yj5Db250ZXN0IGxpbms8L2I+IC0gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgIGhyZWY9XCJodHRwOi8vY3RmLmV1cmlzdGljYS5pblwiID5odHRwOi8vY3RmLmV1cmlzdGljYS5pbjwvYT5cbjxicj48Yj5Db250YWN0PC9iPiAtIDxicj4gS3VuYWwgR3VwdGEgKCA5OTcxOTE4MzYwICkgPGJyPiBCaG9yIFZlcm1hICggKzkxIDgxMDkyIDA5NjUyIClcbjxicj48ZGl2PiBQcml6ZXMgd29ydGggNTBrIGZvciB0aGUgd2lubmVycy4gPC9kaXY+XG4gICAgICBgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJNYWNoaW5lIExlYXJuaW5nIENvZGVzcHJpbnRcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvY29tcHJlc3NlZC9tbC5wbmdcIixcbiAgICAgIGRhdGU6IFwiMjV0aCBNYXJjaCAtIDh0aCBBcHJpbFwiLFxuICAgICAgY29udGVudDogYEZvciB0aGUgQW5hbHl0aWNhbCBPbmVzICFgLFxuICAgICAgZHQ6IFwiMjV0aCBNYXJjaCAxMjowMCBub29uIHRvIDh0aCBBcHJpbCAxMjowMCBub29uXCIsXG4gICAgICBhYm91dDogXCJQYXJ0aWNpcGFudHMgd2lsbCBiZSBnaXZlbiByZWFsIHdvcmxkIE1hY2hpbmUgTGVhcm5pbmcgcHJvYmxlbXMsIGFuZCB3aWxsIGhhdmUgdG8gdHJhaW4gdGhlaXIgY29tcHV0ZXJzIHRvIHVuZGVyc3RhbmQgYW5kIG1vZGVsIHRoZSBkYXRhLCBhbmQgcHJlZGljdCB0YXJnZXQgb3V0cHV0cyBjb3JyZXNwb25kaW5nIHRvIHVuc2VlbiBpbnB1dHMuXCJcbiAgICAgICwgbG9uZ0NvbnRlbnQ6IGBcbiAgPGk+IFBhcnRpY2lwYW50cyB3aWxsIGJlIGdpdmVuIHJlYWwgd29ybGQgTWFjaGluZSBMZWFybmluZyBwcm9ibGVtcywgYW5kIHdpbGwgaGF2ZSB0byB0cmFpbiB0aGVpciBjb21wdXRlcnMgdG8gdW5kZXJzdGFuZCBhbmQgbW9kZWwgdGhlIGRhdGEsIGFuZCBwcmVkaWN0IHRhcmdldCBvdXRwdXRzIGNvcnJlc3BvbmRpbmcgdG8gdW5zZWVuIGlucHV0cy5cbjwvaT48YnI+PGI+Q29udGVzdCBEdXJhdGlvbjwvYj4gLSAyNXRoIE1hcmNoIHRvIDh0aCBBcHJpbFxuPGJyPjxiPk5vLiBvZiBQcm9ibGVtczwvYj4gLSAzXG48YnI+PGI+RGF0ZSBhbmQgVGltZTwvYj4gLSA8YnI+MjV0aCBNYXJjaCAxMjowMCBub29uIHRvIDh0aCBBcHJpbCAxMjowMCBub29uXG5cbjxicj48Yj5Db250YWN0PC9iPiAtIEFua2l0IEdhdXIgKCArOTEgODE3MTYgODUxNjUgKVxuPGJyPjxkaXY+IFByaXplcyB3b3J0aCAzMGsgZm9yIHRoZSB3aW5uZXJzLiA8L2Rpdj5cbiAgICAgIGBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNvZGUgTcOpbGFuZ2UgMy4wXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvY29kZV9tZWxhbmdlLnBuZ1wiLFxuICAgICAgZGF0ZTogXCIzMHRoIE1hcmNoIC0gMXN0IEFwcmlsLCAyMTowMFwiLFxuICAgICAgY29udGVudDogYEZvciB0aGUgUmVsZW50bGVzcyBPbmVzICFgLFxuICAgICAgZHQ6IFwiMzB0aCBNYXJjaCA5OjAwcG0gdG8gMXN0IEFwcmlsIDk6MDBhbVwiLFxuICAgICAgYWJvdXQ6IFwiQSBsb25nIGFsZ29yaXRobWljIGNvbXBldGl0aXZlIHByb2dyYW1taW5nIGNvbnRlc3Qgd2hpY2ggd2lsbCB0ZXN0IHlvdXIgbG9naWNhbCwgYW5hbHl0aWNhbCBhbmQgYWxnb3JpdGhtaWMgc2tpbGxzLlwiLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgPGk+ICAgIEEgbG9uZyBhbGdvcml0aG1pYyBjb21wZXRpdGl2ZSBwcm9ncmFtbWluZyBjb250ZXN0IHdoaWNoIHdpbGwgdGVzdCB5b3VyIGxvZ2ljYWwsIGFuYWx5dGljYWwgYW5kIGFsZ29yaXRobWljIHNraWxscy48L2k+XG48YnI+PGI+Q29udGVzdCBEdXJhdGlvbjwvYj4gLSAzNiBob3Vyc1xuPGJyPjxiPk5vLiBvZiBQcm9ibGVtczwvYj4gLSAxNS0xNlxuPGJyPjxiPkRhdGUgYW5kIFRpbWU8L2I+IC0gPGJyPiAzMHRoIE1hcmNoIDk6MDBwbSB0byAxc3QgQXByaWwgOTowMGFtXG5cbjxicj48Yj5QcmV2aW91cyBZZWFyIExpbmtzPC9iPiAtIFxuPGEgdGFyZ2V0PVwiX2JsYW5rXCIgIGhyZWY9XCJodHRwczovL3d3dy5oYWNrZXJyYW5rLmNvbS9jb2RlLW1lbGFuZ2UtaWl0aS9cIiA+Q29kZSBNw6lsYW5nZSAyMDE3PC9hPiB8IFxuPGEgdGFyZ2V0PVwiX2JsYW5rXCIgIGhyZWY9XCJodHRwczovL3d3dy5oYWNrZXJyYW5rLmNvbS9jb250ZXN0cy9jb2RlLW1lbGFuZ2UtaWl0aVwiID5Db2RlIE1lbGFuZ2UgMjAxNjwvYT5cbjxicj48Yj5Db250YWN0PC9iPiAtIEt1bWFyIEFiaGluYXYgKCArOTEgODg1MTAgOTY4NzMgKVxuPGJyPjxkaXY+IFByaXplcyB3b3J0aCAzMGsgZm9yIHRoZSB3aW5uZXJzLiA8L2Rpdj5cbiAgICAgIGBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNvZGUgR29sZiAyMDE3XCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvY29kZV9nb2xmLnBuZ1wiLFxuICAgICAgZGF0ZTogXCIyNnRoIE1hcmNoLCAyMTowMC0yMzo1OVwiLFxuICAgICAgY29udGVudDogYEZvciB0aGUgU3VjY2luY3QgT25lcyAhYCxcbiAgICAgIGR0OiBcIjI2dGggTWFyY2ggOTowMCBQTSAtIDEyOjAwIFBNIDI3dGggTWFyY2hcIixcbiAgICAgIGFib3V0OiBcIkEgY29kaW5nIGNvbnRlc3QgaW4gd2hpY2ggc2hvcnRlciBpcyB5b3VyIGNvZGUsIGJldHRlciBpcyB5b3VyIHNjb3JlLlwiLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgICAgIDxpPlxuICAgICAgQSBjb2RpbmcgY29udGVzdCBpbiB3aGljaCBzaG9ydGVyIGlzIHlvdXIgY29kZSwgYmV0dGVyIGlzIHlvdXIgc2NvcmUuPC9pPlxuPGJyPjxiPkNvbnRlc3QgRHVyYXRpb248L2I+IC0gMyBob3VycyBcbjxicj48Yj5Oby4gb2YgUHJvYmxlbXM8L2I+IC0gNy04XG48YnI+PGI+RGF0ZSBhbmQgVGltZTwvYj4gLSA8YnI+MjZ0aCBNYXJjaCA5OjAwIFBNIC0gMTI6MDAgUE0gMjd0aCBNYXJjaFxuXG48YnI+PGI+UHJldmlvdXMgWWVhciBMaW5rczwvYj4gLSBcbjxicj48Yj5Db2RlIEdvbGYgMy4wPC9iPiAtICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHBzOi8vd3d3LmhhY2tlcnJhbmsuY29tL2ZsdXh1cy1jb2RlLWdvbGZcIiA+aHR0cHM6Ly93d3cuaGFja2VycmFuay5jb20vZmx1eHVzLWNvZGUtZ29sZjwvYT5cbjxicj48Yj5Db250YWN0PC9iPiAtIERpdnlhbnNoIENob3VkaGFyeSAoIDk4MTg2NTIwMTggKVxuPGJyPjxkaXY+IFByaXplcyB3b3J0aCAxMmsgZm9yIHRoZSB3aW5uZXJzIDwvZGl2PlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiU3VycHJpc2UgTGFuZ3VhZ2UgNC4wXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvc3VycHJpc2VfbGFuZ3VhZ2UucG5nXCIsXG4gICAgICBkdDogXCIyOHRoIE1hcmNoIDk6MDAgUE0gLSAxMjowMCBQTSAyOXRoIE1hcmNoXCIsXG4gICAgICBjb250ZW50OiBgRm9yIHRoZSBTcG9udGFuZW91cyBPbmVzICFgLFxuICAgICAgYWJvdXQ6IFwiQSBwcm9ncmFtbWluZyBjb250ZXN0IGluIHdoaWNoIHRoZSBsYW5ndWFnZSB3aWxsIGJlIGEgc2VjcmV0LCByZXZlYWxlZCBvbmx5IDE1IG1pbnV0ZXMgYmVmb3JlIHRoZSBjb250ZXN0LiBXZSB3aWxsIGJlIHJlbGVhc2luZyBhIGxpc3Qgb2YgbGFuZ3VhZ2VzIDMgZGF5cyBiZWZvcmUgdGhlIGNvbnRlc3QuXCIsXG4gICAgICBsb25nQ29udGVudDogYFxuICAgICAgPGk+XG4gICAgICBBIHByb2dyYW1taW5nIGNvbnRlc3QgaW4gd2hpY2ggdGhlIGxhbmd1YWdlIHdpbGwgYmUgYSBzZWNyZXQsIHJldmVhbGVkIG9ubHkgMTUgbWludXRlcyBiZWZvcmUgdGhlIGNvbnRlc3QuIFdlIHdpbGwgYmUgcmVsZWFzaW5nIGEgbGlzdCBvZiBsYW5ndWFnZXMgMyBkYXlzIGJlZm9yZSB0aGUgY29udGVzdC5cbjwvaT5cbiAgICAgIDxicj48Yj5Db250ZXN0IER1cmF0aW9uPC9iPiAtIDMgSG91cnMuXG48YnI+PGI+Tm8uIG9mIFByb2JsZW1zPC9iPiAtIDctOFxuPGJyPjxiPkRhdGUgYW5kIFRpbWU8L2I+IC0gXG48YnI+Mjh0aCBNYXJjaCA5OjAwIFBNIC0gMTI6MDAgUE0gMjl0aCBNYXJjaFxuXG48YnI+PGI+UHJldmlvdXMgWWVhciBMaW5rczwvYj4gLSBcbjxhIHRhcmdldD1cIl9ibGFua1wiICBocmVmPVwiaHR0cHM6Ly93d3cuaGFja2VycmFuay5jb20vc3VycHJpc2UtbGFuZ3VhZ2UtMy0wXCIgPlNMIDIwMTc8L2E+XG4gfCA8YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHBzOi8vd3d3LmhhY2tlcnJhbmsuY29tL3N1cnByaXNlLWxhbmd1YWdlLTItMFwiID5TTCAyMDE2PC9hPlxuIHwgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgIGhyZWY9XCJodHRwczovL3d3dy5oYWNrZXJyYW5rLmNvbS9zdXJwcmlzZS1sYW5ndWFnZVwiID5TTCAyMDE1PC9hPlxuIDxicj48Yj5Db250YWN0PC9iPiAtIERocnV2IENoYWRoYSAoICs5MSA5OTEwMjg2NTAwIClcbjxicj48ZGl2PiBQcml6ZXMgd29ydGggMTJrIGZvciB0aGUgd2lubmVycyA8L2Rpdj5cbiAgICAgIGBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkhhY2sgdGhlIENvZGVcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvY29tcHJlc3NlZC9oYWNrX3RoZV9jb2RlLnBuZ1wiLFxuICAgICAgZGF0ZTogXCIzcmQgQXByaWwsIDIxOjAwLTIzOjU5XCIsXG4gICAgICBjb250ZW50OiBgRm9yIHRoZSBNZXRpY3Vsb3VzIE9uZXMgIWAsXG4gICAgICBkdDogXCIzIEFwcmlsIDk6MDAgUE0gLSAxMjowMCBQTSA0IEFwcmlsXCIsXG4gICAgICBhYm91dDogXCJBIHByb2dyYW1taW5nIGNvbnRlc3Qgd2hpY2ggdGVzdHMgeW91ciBkZWJ1Z2dpbmcgc2tpbGxzIGJ5IGNvcnJlY3RpbmcvZGVidWdnaW5nIHRoZSBnaXZlbiBjb2RlIGZvciB0aGUgZmFpbGluZyB0ZXN0IGNhc2UocykuXCIsXG4gICAgICBsb25nQ29udGVudDogYFxuICA8aT4gICAgQSBwcm9ncmFtbWluZyBjb250ZXN0IHdoaWNoIHRlc3RzIHlvdXIgZGVidWdnaW5nIHNraWxscyBieSBjb3JyZWN0aW5nL2RlYnVnZ2luZyB0aGUgZ2l2ZW4gY29kZSBmb3IgdGhlIGZhaWxpbmcgdGVzdCBjYXNlKHMpLlxuPC9pPjxicj48Yj5Db250ZXN0IER1cmF0aW9uPC9iPiAtIDMgaG91cnNcbjxicj48Yj5Oby4gb2YgUHJvYmxlbXM8L2I+IC0gMTVcbjxicj48Yj5EYXRlIGFuZCBUaW1lPC9iPiAtPGJyPiAzIEFwcmlsIDk6MDAgUE0gLSAxMjowMCBQTSA0IEFwcmlsXG5cbjxicj48Yj5Db250YWN0PC9iPiAtIERhYW5pc2ggTWFoYWphbiAoIDgxNDYzNjU4MDMgKVxuPGJyPjxkaXY+IFByaXplcyB3b3J0aCA4ayBmb3IgdGhlIHdpbm5lcnMgPC9kaXY+XG4gICAgICBgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJGb29sIFlvdSFcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvY29tcHJlc3NlZC9mb29sX3lvdS5wbmdcIixcbiAgICAgIGRhdGU6IFwiMXN0IEFwcmlsLCAxNTowMC0xODowMFwiLFxuICAgICAgY29udGVudDogYEZvciB0aGUgRGVjZXB0aXZlIE9uZXMgIWAsXG4gICAgICBkdDogXCIxIEFwcmlsIDM6MDAgUE0gLSA4OjAwIFBNIDEgQXByaWxcIixcbiAgICAgIGFib3V0OiBcIkEgdW5pcXVlIHByb2dyYW1taW5nIGNvbnRlc3QsIGluIHdoaWNoIHRoaW5raW5nIGZvciB0aGUgc29sdXRpb24gbWlnaHQgc3RpbGwgYmUgZWFzaWVyIHRoYW4gdW5kZXJzdGFuZGluZyB0aGUgcHJvYmxlbSAhXCJcbiAgICAgICwgbG9uZ0NvbnRlbnQ6IGBcbiAgPGk+ICAgIEEgdW5pcXVlIHByb2dyYW1taW5nIGNvbnRlc3QsIGluIHdoaWNoIHRoaW5raW5nIGZvciB0aGUgc29sdXRpb24gbWlnaHQgc3RpbGwgYmUgZWFzaWVyIHRoYW4gdW5kZXJzdGFuZGluZyB0aGUgcHJvYmxlbSAhXG48L2k+PGJyPjxiPkNvbnRlc3QgRHVyYXRpb248L2I+IC0gNSBob3Vyc1xuPGJyPjxiPk5vLiBvZiBQcm9ibGVtczwvYj4gLSAxMC0xMlxuPGJyPjxiPkRhdGUgYW5kIFRpbWU8L2I+IC0gPGJyPiAxIEFwcmlsIDM6MDAgUE0gLSA4OjAwIFBNIDEgQXByaWxcblxuPGJyPjxiPkNvbnRhY3Q8L2I+IC0gVmlzaG51bmFyYXlhbiBLIEkgKCA4OTIxNzk5NjI1IClcbjxicj48ZGl2PiBQcml6ZXMgd29ydGggMTJrIGZvciB0aGUgd2lubmVycyA8L2Rpdj5cbiAgICAgIGBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlNPSCBDQUggVE9BXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvc29oX2NhaF90b2EucG5nXCIsXG4gICAgICBkYXRlOiBcIjZ0aCBBcHJpbFwiLFxuICAgICAgY29udGVudDogYEZvciB0aGUgR2Vla3kgT25lcyAhYCxcbiAgICAgIGR0OiBcIiA2dGggQXByaWwgOTowMHBtIC0gMTI6MDBhbSA3dGggQXByaWxcIixcbiAgICAgIGFib3V0OiBcIiBBIHNob3J0LWR1cmF0aW9uIG1hdGhlbWF0aWNhbCBwcm9ncmFtbWluZyBjb250ZXN0IGZvY3VzaW5nIG9uIG51bWJlciB0aGVvcnksIHByb2JhYmlsaXR5LCBjb21iaW5hdG9yaWNzLCBtb2R1bGFyIGFyaXRobWV0aWMgYW5kIG90aGVyIGludGVyZXN0aW5nIG1hdGggdG9waWNzLlwiXG4gICAgICAsIGxvbmdDb250ZW50OiBgXG4gIDxpPiAgQSBzaG9ydC1kdXJhdGlvbiBtYXRoZW1hdGljYWwgcHJvZ3JhbW1pbmcgY29udGVzdCBmb2N1c2luZyBvbiBudW1iZXIgdGhlb3J5LCBwcm9iYWJpbGl0eSwgY29tYmluYXRvcmljcywgbW9kdWxhciBhcml0aG1ldGljIGFuZCBvdGhlciBpbnRlcmVzdGluZyBtYXRoIHRvcGljcy5cbjwvaT48YnI+PGI+Q29udGVzdCBEdXJhdGlvbjwvYj4gLSAzIGhvdXJzXG48YnI+PGI+Tm8uIG9mIFByb2JsZW1zPC9iPiAtIDEwLTEyXG48YnI+PGI+RGF0ZSBhbmQgVGltZTwvYj4gLTxicj4gNnRoIEFwcmlsIDk6MDBwbSAtIDEyOjAwYW0gN3RoIEFwcmlsXG5cbjxicj48Yj5Db250YWN0PC9iPiAtIFByaXlhbnNodSBWYXJzaG5leSAoIDg3NzA4NTU3OTYgKVxuPGJyPjxkaXY+IFByaXplcyB3b3J0aCAxNWsgZm9yIHRoZSB3aW5uZXJzIDwvZGl2PlxuICAgICAgYFxuICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG1vZGFsKGkpIHtcbiAgICAgICQoXCIjbW9kYWxcIiArIGkpLm1vZGFsKHtcbiAgICAgICAgZmFkZUR1cmF0aW9uOiAxMDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSlcblxudmFyIGZvb3RlciA9IG5ldyBWdWUoe1xuICBlbDogJyNmb290ZXInLFxuICBkYXRhOiB7XG4gICAgc3VidGl0bGU6ICdUaGUgUHJvZ3JhbW1pbmcgQ2x1YiwgSUlUIEluZG9yZScsXG4gICAgbGlzdDogW1xuICAgICAge1xuICAgICAgICBjbGFzczogJ2ljb24gZmEtbGluaycsXG4gICAgICAgIHRhZzogJ1RoZSBQcm9ncmFtbWluZyBDbHViJyxcbiAgICAgICAgbGluazogJ2h0dHA6Ly9wY2x1YmlpdGkuZ2l0aHViLmlvLycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2ljb24gZmEtZmFjZWJvb2snLFxuICAgICAgICB0YWc6ICdGYWNlYm9vaycsXG4gICAgICAgIGxpbms6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vcGNsdWJpaXRpLycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2ljb24gZmEtZ2l0aHViJyxcbiAgICAgICAgdGFnOiAnR2l0aHViJyxcbiAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wY2x1YmlpdGknLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBjbGFzczogJ2ljb24gZmEtZW52ZWxvcGUnLFxuICAgICAgICB0YWc6ICdFbWFpbCcsXG4gICAgICAgIGxpbms6ICdtYWlsdG86cHJvZ2NsdWJAaWl0aS5hYy5pbicsXG4gICAgICB9LFxuICAgIF1cbiAgfVxufSlcblxudmFyIHNwb25zb3JzID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI3Nwb25zb3JzJyxcbiAgZGF0YToge1xuICAgIHNwb25zb3JzOiBbXG4gICAgICB7XG4gICAgICAgIGxpbms6ICdodHRwczovL2hhY2tlcmVhcnRoLmNvbScsXG4gICAgICAgIGxvZ286IFwiaHR0cHM6Ly9oYWNrZXJlYXJ0aC5nbG9iYWwuc3NsLmZhc3RseS5uZXQvc3RhdGljL2hhY2tlcmVhcnRoL2ltYWdlcy9sb2dvL0hFX2xvZ28uc3ZnXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpbms6ICdodHRwczovL2NvZGVjaGVmLmNvbScsXG4gICAgICAgIGxvZ286IFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2NvZGVjaGVmX3NoYXJlZC9zaXRlcy9hbGwvdGhlbWVzL2FiZXNzaXZlL2xvZ28ucG5nXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpbms6ICdodHRwOi8vY29kZWZvcmNlcy5jb20nLFxuICAgICAgICBsb2dvOiBcIi9pbWFnZXMvY2YucG5nXCJcbiAgICAgIH0sIHtcbiAgICAgICAgbGluazogJ2h0dHBzOi8vaGFja2VycmFuay5jb20nLFxuICAgICAgICBsb2dvOiBcImh0dHBzOi8vaHJjZG4ubmV0L2hhY2tlcnJhbmsvYXNzZXRzL2JyYW5kL2hyX2xvZ29fbmV3X3dvcmQtNTJkYjRkY2RjNzZiMzFiZTg2NDU2Yzc3YjU1YTczOTYucG5nXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbn0pXG4iXSwiZmlsZSI6ImluZGV4RGF0YS5qcyJ9
