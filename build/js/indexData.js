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
<br><b>Contact</b> - Kunal Gupta ( 9971918360 )
<br><div> Prizes worth 50k for the winners. </div>
      `
    },
    {
      title: "Machine Learning Codesprint",
      src: "images/compressed/ml.png",
      date: "25th March - 8th April",
      content: `For the Analytical Ones !`,
      dt: "25th March 12:00 noon to 8th April 12:00 noon",
      about: "This codesprint aims to give the participants the thrilling experience of programming a computer to learn."
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
      about: "A competitive programming contest in which you test your debugging skills by correcting the given code for the failing test case(s). ",
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
      about: "A unique programming contest that requires one to think out of the box."
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleERhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBhbGxpbWFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFsbGltYWdlc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpIHtcbiAgICAgIGFsbGltYWdlc1tpXS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFsbGltYWdlc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpO1xuICAgIH1cbiAgfVxufSwgZmFsc2UpO1xuXG52YXIgYXBwID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI2hlYWRlcicsXG4gIGRhdGE6IHtcbiAgICB0aXRsZTogJ0V1cmlzdGljYScsXG4gICAgc3VidGl0bGU6ICdUaGUgUHJvZ3JhbW1pbmcgQ2x1YiwgSUlUIEluZG9yZScsXG4gIH1cbn0pXG5cbnZhciBpbnRybyA9IG5ldyBWdWUoe1xuICBlbDogJyNpbnRybycsXG4gIGRhdGE6IHtcbiAgICBzdWJ0aXRsZTogYFRoaXMgZ2VuZXJhdGlvbiBoYXMgc2VlbiBncmVhdCBwcm9ncmFtbWVycyBsaWtlIExpbnVzIFRvcnZhbGRzIGFuZCBKZWZmIERlYW4uXG5UYWxlbnRlZCBhbmQgaGFyZHdvcmtpbmcgcHJvZ3JhbW1lcnMgYXJlIHJpc2luZyBhbGwgYXJvdW5kIHRoZSBnbG9iZS4gVG8gZm9zdGVyIHRoaXNcbiAgICAgICAgYW1hemluZyBza2lsbCBhbmQgY3VsdHVyZSwgdGhlIERlcGFydG1lbnQgb2YgQ29tcHV0ZXIgU2NpZW5jZSBhbmQgRW5naW5lZXJpbmcsIElJVFxuICAgICAgICBJbmRvcmUgcHJlc2VudHMgeW91IHdpdGggLSBFdXJpc3RpY2HigJkxOCwgdGhlIGFubnVhbCBjb2RpbmcgZmVzdGl2YWwgb2Ygb3VyIGNvbGxlZ2UuXG4gICAgICAgIFdlIHdpbGwgYmUgY29uZHVjdGluZyBhIHZhcmlldHkgb2YgZXZlbnRzIHJhbmdpbmcgZnJvbSBDb21wZXRpdGl2ZSBQcm9ncmFtbWluZyBhbmRcbiAgICAgICAgQXBwbGljYXRpb24gRGV2ZWxvcG1lbnQgdG8gQ3liZXIgU2VjdXJpdHkgYW5kIE1hY2hpbmUgTGVhcm5pbmcuXG4gICAgICAgIGAsXG4gICAgbGluazogXCJodHRwczovL2dvby5nbC9mb3Jtcy82WHZaWDFvZWQ1dThsZnh5MVwiXG4gIH1cbn0pXG5cbnZhciBldmVudHMgPSBuZXcgVnVlKHtcbiAgZWw6ICcjZXZlbnRzJyxcbiAgZGF0YToge1xuICAgIGxpc3Q6IFt7XG4gICAgICB0aXRsZTogXCJEaXZpZGUgQnkgWmVybyA2LjBcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvY29tcHJlc3NlZC9kYnoucG5nXCIsXG4gICAgICBkYXRlOiBcIlRvIGJlIGFubm91bmNlZFwiLFxuICAgICAgY29udGVudDogYEZvciB0aGUgU21hcnQgT25lcyAhYCxcbiAgICAgIGFib3V0OiBcIiBPdXIgZmxhZ3NoaXAgZXZlbnQsIGEgc2hvcnQgZHVyYXRpb24gY29tcGV0aXRpdmUgcHJvZ3JhbW1pbmcgY29udGVzdC5cIixcbiAgICAgIGR0OiBcIlRCQVwiLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgICAgIDxpPlxuICAgICAgT3VyIGZsYWdzaGlwIGV2ZW50LCBhIHNob3J0IGR1cmF0aW9uIGNvbXBldGl0aXZlIHByb2dyYW1taW5nIGNvbnRlc3QuPC9pPjxicj5cbjxiPkNvbnRlc3QgRHVyYXRpb24gPC9iPi0gMi41IGhvdXJzPGJyPlxuPGI+Tm8uIG9mIFByb2JsZW1zIDwvYj4tIDcgdG8gODxicj5cbjxiPkRhdGU8L2I+IC0gVEJBPGJyPlxuPGI+VGltZSA8L2I+LSBUQkE8YnI+XG5cbjxiPlByZXZpb3VzIFllYXJzIGxpbmtzPC9iPiAtIDxhIHRhcmdldD1cIl9ibGFua1wiICBocmVmPVwiaHR0cDovL2NvZGVmb3JjZXMuY29tL2NvbnRlc3QvNzY4XCIgPiBEQlogNS4wIDwvYT58XG48YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHBzOi8vd3d3LmNvZGVjaGVmLmNvbS9ESUJaMjAxNlwiID5EQlogNC4wPC9hPiB8XG48YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHBzOi8vd3d3LmNvZGVjaGVmLmNvbS9EQllaMTVcIj5EQlogMy4wPC9hPiB8XG48YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHBzOi8vd3d3LmNvZGVjaGVmLmNvbS9EQllaMjAxNFwiID5EQlogMi4wPC9hPiB8XG48YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHBzOi8vd3d3LmNvZGVjaGVmLmNvbS9EQllaMjAxM1wiID5EQlogMS4wPC9hPlxuPGJyPjxiPkNvbnRhY3Q8L2I+IC0gVmluaXQgU2hhaCAoICs5MSA3NTA2MCA3ODIzMSApXG48YnI+PGRpdj4gUHJpemVzIHdvcnRoIDUwayBmb3IgdGhlIHdpbm5lcnMuIDwvZGl2PlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiSGFja2F0aG9uXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvaGFja2F0aG9uLnBuZ1wiLFxuICAgICAgZGF0ZTogXCIyM3RoIC0gMjR0aCBNYXJjaFwiLFxuICAgICAgY29udGVudDogYEZvciB0aGUgQ3JlYXRpdmUgT25lcyAhYCxcbiAgICAgIGR0OiBcIjIzcmQgTWFyY2ggLSAyNHRoIE1hcmNoXCIsXG4gICAgICBhYm91dDogXCIgQSBzb2NpYWwgY29kaW5nIGV2ZW50IHRvIGJ1aWxkIGEgbmV3IHNvZnR3YXJlIHVuZGVyIHRoZSB0by1iZS1hbm5vdW5jZWQgYnJvYWQgdGhlbWVzLiBFYWNoIHRlYW0gY2FuIGNvbnNpc3Qgb2YgYSBtYXhpbXVtIG9mIDQgcGVvcGxlLlwiXG4gICAgICAsIGxvbmdDb250ZW50OiBgXG4gICAgICA8aT5cbiAgICAgIEEgc29jaWFsIGNvZGluZyBldmVudCB0byBidWlsZCBhIG5ldyBzb2Z0d2FyZSB1bmRlciB0aGUgdG8tYmUtYW5ub3VuY2VkIGJyb2FkIHRoZW1lcy4gRWFjaCB0ZWFtIGNhbiBjb25zaXN0IG9mIGEgbWF4aW11bSBvZiA0IHBlb3BsZS5cbjwvaT5cbiAgICAgIDxicj48Yj5Db250ZXN0IER1cmF0aW9uPC9iPiAtIDMwIGhyc1xuPGJyPjxiPk5vLiBvZiBwcm9ibGVtczwvYj4gLSBUQkFcbjxicj48Yj5EYXRlPC9iPiAtIDIzcmQgdG8gMjR0aCBtYXJjaFxuPGJyPjxiPlRpbWU8L2I+IC0gPGJyPkJlZ2lucyBhdCA5IFBNIElTVCAyM3JkIE1hcmNoXG5cbjxicj48Yj5Db250YWN0PC9iPiAtIE1yaWdhbmsgS3Jpc2hhbiAoICs5MSA3MjQ3NTIxNjAwIClcbjxicj48ZGl2PiBQcml6ZXMgd29ydGggMTAwayBmb3IgdGhlIHdpbm5lcnMuIDwvZGl2PlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQ2FwdHVyZSBUaGUgRmxhZ1wiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL2N0Zi5wbmdcIixcbiAgICAgIGRhdGU6IFwiN3RoLTh0aCBBcHJpbFwiLFxuICAgICAgY29udGVudDogYEZvciB0aGUgQ2xldmVyIE9uZXMgIWAsXG4gICAgICBkdDogXCI3dGggdG8gOHRoIEFwcmlsXCIsXG4gICAgICBhYm91dDogXCJBIENhcHR1cmUgdGhlIEZsYWcgQ29tcGV0aXRpb24gaGVsZCBieSBCeXRlIEJhbmRpdHMsIElJVCBJbmRvcmXigJlzIGFjYWRlbWljIENURiB0ZWFtLiBUaGUgdGVhbSBzaXplIGZvciB0aGUgQ1RGIHNob3VsZCBiZSBhIG1heGltdW0gNCBwZW9wbGUuXCJcbiAgICAgICwgbG9uZ0NvbnRlbnQ6IGBcbiAgIDxpPiAgIFxuQSBDYXB0dXJlIHRoZSBGbGFnIENvbXBldGl0aW9uIGhlbGQgYnkgQnl0ZSBCYW5kaXRzLCBJSVQgSW5kb3Jl4oCZcyBhY2FkZW1pYyBDVEYgdGVhbS4gVGhlIHRlYW0gc2l6ZSBmb3IgdGhlIENURiBzaG91bGQgYmUgYSBtYXhpbXVtIDQgcGVvcGxlLlxuPC9pPlxuPGJyPjxiPkZvcm1hdDwvYj4gLSBKZW9wYXJkeVxuPGJyPjxiPkNvbnRlc3QgRHVyYXRpb248L2I+IC0gVEJBXG48YnI+PGI+RGF0ZTwvYj4gLSA3dGggdG8gOHRoIEFwcmlsXG48YnI+PGI+VGltZTwvYj4gLSBUQkFcbjxicj48Yj5Db250ZXN0IGxpbms8L2I+IC0gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgIGhyZWY9XCJodHRwOi8vY3RmLmV1cmlzdGljYS5pblwiID5odHRwOi8vY3RmLmV1cmlzdGljYS5pbjwvYT5cbjxicj48Yj5Db250YWN0PC9iPiAtIEt1bmFsIEd1cHRhICggOTk3MTkxODM2MCApXG48YnI+PGRpdj4gUHJpemVzIHdvcnRoIDUwayBmb3IgdGhlIHdpbm5lcnMuIDwvZGl2PlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiTWFjaGluZSBMZWFybmluZyBDb2Rlc3ByaW50XCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvbWwucG5nXCIsXG4gICAgICBkYXRlOiBcIjI1dGggTWFyY2ggLSA4dGggQXByaWxcIixcbiAgICAgIGNvbnRlbnQ6IGBGb3IgdGhlIEFuYWx5dGljYWwgT25lcyAhYCxcbiAgICAgIGR0OiBcIjI1dGggTWFyY2ggMTI6MDAgbm9vbiB0byA4dGggQXByaWwgMTI6MDAgbm9vblwiLFxuICAgICAgYWJvdXQ6IFwiVGhpcyBjb2Rlc3ByaW50IGFpbXMgdG8gZ2l2ZSB0aGUgcGFydGljaXBhbnRzIHRoZSB0aHJpbGxpbmcgZXhwZXJpZW5jZSBvZiBwcm9ncmFtbWluZyBhIGNvbXB1dGVyIHRvIGxlYXJuLlwiXG4gICAgICAsIGxvbmdDb250ZW50OiBgXG4gIDxpPiBQYXJ0aWNpcGFudHMgd2lsbCBiZSBnaXZlbiByZWFsIHdvcmxkIE1hY2hpbmUgTGVhcm5pbmcgcHJvYmxlbXMsIGFuZCB3aWxsIGhhdmUgdG8gdHJhaW4gdGhlaXIgY29tcHV0ZXJzIHRvIHVuZGVyc3RhbmQgYW5kIG1vZGVsIHRoZSBkYXRhLCBhbmQgcHJlZGljdCB0YXJnZXQgb3V0cHV0cyBjb3JyZXNwb25kaW5nIHRvIHVuc2VlbiBpbnB1dHMuXG48L2k+PGJyPjxiPkNvbnRlc3QgRHVyYXRpb248L2I+IC0gMjV0aCBNYXJjaCB0byA4dGggQXByaWxcbjxicj48Yj5Oby4gb2YgUHJvYmxlbXM8L2I+IC0gM1xuPGJyPjxiPkRhdGUgYW5kIFRpbWU8L2I+IC0gPGJyPjI1dGggTWFyY2ggMTI6MDAgbm9vbiB0byA4dGggQXByaWwgMTI6MDAgbm9vblxuXG48YnI+PGI+Q29udGFjdDwvYj4gLSBBbmtpdCBHYXVyICggKzkxIDgxNzE2IDg1MTY1IClcbjxicj48ZGl2PiBQcml6ZXMgd29ydGggMzBrIGZvciB0aGUgd2lubmVycy4gPC9kaXY+XG4gICAgICBgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJDb2RlIE3DqWxhbmdlIDMuMFwiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL2NvZGVfbWVsYW5nZS5wbmdcIixcbiAgICAgIGRhdGU6IFwiMzB0aCBNYXJjaCAtIDFzdCBBcHJpbCwgMjE6MDBcIixcbiAgICAgIGNvbnRlbnQ6IGBGb3IgdGhlIFJlbGVudGxlc3MgT25lcyAhYCxcbiAgICAgIGR0OiBcIjMwdGggTWFyY2ggOTowMHBtIHRvIDFzdCBBcHJpbCA5OjAwYW1cIixcbiAgICAgIGFib3V0OiBcIkEgbG9uZyBhbGdvcml0aG1pYyBjb21wZXRpdGl2ZSBwcm9ncmFtbWluZyBjb250ZXN0IHdoaWNoIHdpbGwgdGVzdCB5b3VyIGxvZ2ljYWwsIGFuYWx5dGljYWwgYW5kIGFsZ29yaXRobWljIHNraWxscy5cIixcbiAgICAgIGxvbmdDb250ZW50OiBgXG4gIDxpPiAgICBBIGxvbmcgYWxnb3JpdGhtaWMgY29tcGV0aXRpdmUgcHJvZ3JhbW1pbmcgY29udGVzdCB3aGljaCB3aWxsIHRlc3QgeW91ciBsb2dpY2FsLCBhbmFseXRpY2FsIGFuZCBhbGdvcml0aG1pYyBza2lsbHMuPC9pPlxuPGJyPjxiPkNvbnRlc3QgRHVyYXRpb248L2I+IC0gMzYgaG91cnNcbjxicj48Yj5Oby4gb2YgUHJvYmxlbXM8L2I+IC0gMTUtMTZcbjxicj48Yj5EYXRlIGFuZCBUaW1lPC9iPiAtIDxicj4gMzB0aCBNYXJjaCA5OjAwcG0gdG8gMXN0IEFwcmlsIDk6MDBhbVxuXG48YnI+PGI+UHJldmlvdXMgWWVhciBMaW5rczwvYj4gLSBcbjxhIHRhcmdldD1cIl9ibGFua1wiICBocmVmPVwiaHR0cHM6Ly93d3cuaGFja2VycmFuay5jb20vY29kZS1tZWxhbmdlLWlpdGkvXCIgPkNvZGUgTcOpbGFuZ2UgMjAxNzwvYT4gfCBcbjxhIHRhcmdldD1cIl9ibGFua1wiICBocmVmPVwiaHR0cHM6Ly93d3cuaGFja2VycmFuay5jb20vY29udGVzdHMvY29kZS1tZWxhbmdlLWlpdGlcIiA+Q29kZSBNZWxhbmdlIDIwMTY8L2E+XG48YnI+PGI+Q29udGFjdDwvYj4gLSBLdW1hciBBYmhpbmF2ICggKzkxIDg4NTEwIDk2ODczIClcbjxicj48ZGl2PiBQcml6ZXMgd29ydGggMzBrIGZvciB0aGUgd2lubmVycy4gPC9kaXY+XG4gICAgICBgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJDb2RlIEdvbGYgMjAxN1wiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL2NvZGVfZ29sZi5wbmdcIixcbiAgICAgIGRhdGU6IFwiMjZ0aCBNYXJjaCwgMjE6MDAtMjM6NTlcIixcbiAgICAgIGNvbnRlbnQ6IGBGb3IgdGhlIFN1Y2NpbmN0IE9uZXMgIWAsXG4gICAgICBkdDogXCIyNnRoIE1hcmNoIDk6MDAgUE0gLSAxMjowMCBQTSAyN3RoIE1hcmNoXCIsXG4gICAgICBhYm91dDogXCJBIGNvZGluZyBjb250ZXN0IGluIHdoaWNoIHNob3J0ZXIgaXMgeW91ciBjb2RlLCBiZXR0ZXIgaXMgeW91ciBzY29yZS5cIixcbiAgICAgIGxvbmdDb250ZW50OiBgXG4gICAgICA8aT5cbiAgICAgIEEgY29kaW5nIGNvbnRlc3QgaW4gd2hpY2ggc2hvcnRlciBpcyB5b3VyIGNvZGUsIGJldHRlciBpcyB5b3VyIHNjb3JlLjwvaT5cbjxicj48Yj5Db250ZXN0IER1cmF0aW9uPC9iPiAtIDMgaG91cnMgXG48YnI+PGI+Tm8uIG9mIFByb2JsZW1zPC9iPiAtIDctOFxuPGJyPjxiPkRhdGUgYW5kIFRpbWU8L2I+IC0gPGJyPjI2dGggTWFyY2ggOTowMCBQTSAtIDEyOjAwIFBNIDI3dGggTWFyY2hcblxuPGJyPjxiPlByZXZpb3VzIFllYXIgTGlua3M8L2I+IC0gXG48YnI+PGI+Q29kZSBHb2xmIDMuMDwvYj4gLSAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgIGhyZWY9XCJodHRwczovL3d3dy5oYWNrZXJyYW5rLmNvbS9mbHV4dXMtY29kZS1nb2xmXCIgPmh0dHBzOi8vd3d3LmhhY2tlcnJhbmsuY29tL2ZsdXh1cy1jb2RlLWdvbGY8L2E+XG48YnI+PGI+Q29udGFjdDwvYj4gLSBEaXZ5YW5zaCBDaG91ZGhhcnkgKCA5ODE4NjUyMDE4IClcbjxicj48ZGl2PiBQcml6ZXMgd29ydGggMTJrIGZvciB0aGUgd2lubmVycyA8L2Rpdj5cbiAgICAgIGBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlN1cnByaXNlIExhbmd1YWdlIDQuMFwiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL3N1cnByaXNlX2xhbmd1YWdlLnBuZ1wiLFxuICAgICAgZHQ6IFwiMjh0aCBNYXJjaCA5OjAwIFBNIC0gMTI6MDAgUE0gMjl0aCBNYXJjaFwiLFxuICAgICAgY29udGVudDogYEZvciB0aGUgU3BvbnRhbmVvdXMgT25lcyAhYCxcbiAgICAgIGFib3V0OiBcIkEgcHJvZ3JhbW1pbmcgY29udGVzdCBpbiB3aGljaCB0aGUgbGFuZ3VhZ2Ugd2lsbCBiZSBhIHNlY3JldCwgcmV2ZWFsZWQgb25seSAxNSBtaW51dGVzIGJlZm9yZSB0aGUgY29udGVzdC4gV2Ugd2lsbCBiZSByZWxlYXNpbmcgYSBsaXN0IG9mIGxhbmd1YWdlcyAzIGRheXMgYmVmb3JlIHRoZSBjb250ZXN0LlwiLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgICAgIDxpPlxuICAgICAgQSBwcm9ncmFtbWluZyBjb250ZXN0IGluIHdoaWNoIHRoZSBsYW5ndWFnZSB3aWxsIGJlIGEgc2VjcmV0LCByZXZlYWxlZCBvbmx5IDE1IG1pbnV0ZXMgYmVmb3JlIHRoZSBjb250ZXN0LiBXZSB3aWxsIGJlIHJlbGVhc2luZyBhIGxpc3Qgb2YgbGFuZ3VhZ2VzIDMgZGF5cyBiZWZvcmUgdGhlIGNvbnRlc3QuXG48L2k+XG4gICAgICA8YnI+PGI+Q29udGVzdCBEdXJhdGlvbjwvYj4gLSAzIEhvdXJzLlxuPGJyPjxiPk5vLiBvZiBQcm9ibGVtczwvYj4gLSA3LThcbjxicj48Yj5EYXRlIGFuZCBUaW1lPC9iPiAtIFxuPGJyPjI4dGggTWFyY2ggOTowMCBQTSAtIDEyOjAwIFBNIDI5dGggTWFyY2hcblxuPGJyPjxiPlByZXZpb3VzIFllYXIgTGlua3M8L2I+IC0gXG48YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHBzOi8vd3d3LmhhY2tlcnJhbmsuY29tL3N1cnByaXNlLWxhbmd1YWdlLTMtMFwiID5TTCAyMDE3PC9hPlxuIHwgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgIGhyZWY9XCJodHRwczovL3d3dy5oYWNrZXJyYW5rLmNvbS9zdXJwcmlzZS1sYW5ndWFnZS0yLTBcIiA+U0wgMjAxNjwvYT5cbiB8IDxhIHRhcmdldD1cIl9ibGFua1wiICBocmVmPVwiaHR0cHM6Ly93d3cuaGFja2VycmFuay5jb20vc3VycHJpc2UtbGFuZ3VhZ2VcIiA+U0wgMjAxNTwvYT5cbiA8YnI+PGI+Q29udGFjdDwvYj4gLSBEaHJ1diBDaGFkaGEgKCArOTEgOTkxMDI4NjUwMCApXG48YnI+PGRpdj4gUHJpemVzIHdvcnRoIDEyayBmb3IgdGhlIHdpbm5lcnMgPC9kaXY+XG4gICAgICBgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJIYWNrIHRoZSBDb2RlXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvaGFja190aGVfY29kZS5wbmdcIixcbiAgICAgIGRhdGU6IFwiM3JkIEFwcmlsLCAyMTowMC0yMzo1OVwiLFxuICAgICAgY29udGVudDogYEZvciB0aGUgTWV0aWN1bG91cyBPbmVzICFgLFxuICAgICAgZHQ6IFwiMyBBcHJpbCA5OjAwIFBNIC0gMTI6MDAgUE0gNCBBcHJpbFwiLFxuICAgICAgYWJvdXQ6IFwiQSBjb21wZXRpdGl2ZSBwcm9ncmFtbWluZyBjb250ZXN0IGluIHdoaWNoIHlvdSB0ZXN0IHlvdXIgZGVidWdnaW5nIHNraWxscyBieSBjb3JyZWN0aW5nIHRoZSBnaXZlbiBjb2RlIGZvciB0aGUgZmFpbGluZyB0ZXN0IGNhc2UocykuIFwiLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgPGk+ICAgIEEgcHJvZ3JhbW1pbmcgY29udGVzdCB3aGljaCB0ZXN0cyB5b3VyIGRlYnVnZ2luZyBza2lsbHMgYnkgY29ycmVjdGluZy9kZWJ1Z2dpbmcgdGhlIGdpdmVuIGNvZGUgZm9yIHRoZSBmYWlsaW5nIHRlc3QgY2FzZShzKS5cbjwvaT48YnI+PGI+Q29udGVzdCBEdXJhdGlvbjwvYj4gLSAzIGhvdXJzXG48YnI+PGI+Tm8uIG9mIFByb2JsZW1zPC9iPiAtIDE1XG48YnI+PGI+RGF0ZSBhbmQgVGltZTwvYj4gLTxicj4gMyBBcHJpbCA5OjAwIFBNIC0gMTI6MDAgUE0gNCBBcHJpbFxuXG48YnI+PGI+Q29udGFjdDwvYj4gLSBEYWFuaXNoIE1haGFqYW4gKCA4MTQ2MzY1ODAzIClcbjxicj48ZGl2PiBQcml6ZXMgd29ydGggOGsgZm9yIHRoZSB3aW5uZXJzIDwvZGl2PlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiRm9vbCBZb3UhXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvZm9vbF95b3UucG5nXCIsXG4gICAgICBkYXRlOiBcIjFzdCBBcHJpbCwgMTU6MDAtMTg6MDBcIixcbiAgICAgIGNvbnRlbnQ6IGBGb3IgdGhlIERlY2VwdGl2ZSBPbmVzICFgLFxuICAgICAgZHQ6IFwiMSBBcHJpbCAzOjAwIFBNIC0gODowMCBQTSAxIEFwcmlsXCIsXG4gICAgICBhYm91dDogXCJBIHVuaXF1ZSBwcm9ncmFtbWluZyBjb250ZXN0IHRoYXQgcmVxdWlyZXMgb25lIHRvIHRoaW5rIG91dCBvZiB0aGUgYm94LlwiXG4gICAgICAsIGxvbmdDb250ZW50OiBgXG4gIDxpPiAgICBBIHVuaXF1ZSBwcm9ncmFtbWluZyBjb250ZXN0LCBpbiB3aGljaCB0aGlua2luZyBmb3IgdGhlIHNvbHV0aW9uIG1pZ2h0IHN0aWxsIGJlIGVhc2llciB0aGFuIHVuZGVyc3RhbmRpbmcgdGhlIHByb2JsZW0gIVxuPC9pPjxicj48Yj5Db250ZXN0IER1cmF0aW9uPC9iPiAtIDUgaG91cnNcbjxicj48Yj5Oby4gb2YgUHJvYmxlbXM8L2I+IC0gMTAtMTJcbjxicj48Yj5EYXRlIGFuZCBUaW1lPC9iPiAtIDxicj4gMSBBcHJpbCAzOjAwIFBNIC0gODowMCBQTSAxIEFwcmlsXG5cbjxicj48Yj5Db250YWN0PC9iPiAtIFZpc2hudW5hcmF5YW4gSyBJICggODkyMTc5OTYyNSApXG48YnI+PGRpdj4gUHJpemVzIHdvcnRoIDEyayBmb3IgdGhlIHdpbm5lcnMgPC9kaXY+XG4gICAgICBgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJTT0ggQ0FIIFRPQVwiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL3NvaF9jYWhfdG9hLnBuZ1wiLFxuICAgICAgZGF0ZTogXCI2dGggQXByaWxcIixcbiAgICAgIGNvbnRlbnQ6IGBGb3IgdGhlIEdlZWt5IE9uZXMgIWAsXG4gICAgICBkdDogXCIgNnRoIEFwcmlsIDk6MDBwbSAtIDEyOjAwYW0gN3RoIEFwcmlsXCIsXG4gICAgICBhYm91dDogXCIgQSBzaG9ydC1kdXJhdGlvbiBtYXRoZW1hdGljYWwgcHJvZ3JhbW1pbmcgY29udGVzdCBmb2N1c2luZyBvbiBudW1iZXIgdGhlb3J5LCBwcm9iYWJpbGl0eSwgY29tYmluYXRvcmljcywgbW9kdWxhciBhcml0aG1ldGljIGFuZCBvdGhlciBpbnRlcmVzdGluZyBtYXRoIHRvcGljcy5cIlxuICAgICAgLCBsb25nQ29udGVudDogYFxuICA8aT4gIEEgc2hvcnQtZHVyYXRpb24gbWF0aGVtYXRpY2FsIHByb2dyYW1taW5nIGNvbnRlc3QgZm9jdXNpbmcgb24gbnVtYmVyIHRoZW9yeSwgcHJvYmFiaWxpdHksIGNvbWJpbmF0b3JpY3MsIG1vZHVsYXIgYXJpdGhtZXRpYyBhbmQgb3RoZXIgaW50ZXJlc3RpbmcgbWF0aCB0b3BpY3MuXG48L2k+PGJyPjxiPkNvbnRlc3QgRHVyYXRpb248L2I+IC0gMyBob3Vyc1xuPGJyPjxiPk5vLiBvZiBQcm9ibGVtczwvYj4gLSAxMC0xMlxuPGJyPjxiPkRhdGUgYW5kIFRpbWU8L2I+IC08YnI+IDZ0aCBBcHJpbCA5OjAwcG0gLSAxMjowMGFtIDd0aCBBcHJpbFxuXG48YnI+PGI+Q29udGFjdDwvYj4gLSBQcml5YW5zaHUgVmFyc2huZXkgKCA4NzcwODU1Nzk2IClcbjxicj48ZGl2PiBQcml6ZXMgd29ydGggMTVrIGZvciB0aGUgd2lubmVycyA8L2Rpdj5cbiAgICAgIGBcbiAgICB9LFxuICAgIF0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBtb2RhbChpKSB7XG4gICAgICAkKFwiI21vZGFsXCIgKyBpKS5tb2RhbCh7XG4gICAgICAgIGZhZGVEdXJhdGlvbjogMTAwXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pXG5cbnZhciBmb290ZXIgPSBuZXcgVnVlKHtcbiAgZWw6ICcjZm9vdGVyJyxcbiAgZGF0YToge1xuICAgIHN1YnRpdGxlOiAnVGhlIFByb2dyYW1taW5nIENsdWIsIElJVCBJbmRvcmUnLFxuICAgIGxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdpY29uIGZhLWxpbmsnLFxuICAgICAgICB0YWc6ICdUaGUgUHJvZ3JhbW1pbmcgQ2x1YicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vcGNsdWJpaXRpLmdpdGh1Yi5pby8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdpY29uIGZhLWZhY2Vib29rJyxcbiAgICAgICAgdGFnOiAnRmFjZWJvb2snLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BjbHViaWl0aS8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdpY29uIGZhLWdpdGh1YicsXG4gICAgICAgIHRhZzogJ0dpdGh1YicsXG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vcGNsdWJpaXRpJyxcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdpY29uIGZhLWVudmVsb3BlJyxcbiAgICAgICAgdGFnOiAnRW1haWwnLFxuICAgICAgICBsaW5rOiAnbWFpbHRvOnByb2djbHViQGlpdGkuYWMuaW4nLFxuICAgICAgfSxcbiAgICBdXG4gIH1cbn0pXG5cbnZhciBzcG9uc29ycyA9IG5ldyBWdWUoe1xuICBlbDogJyNzcG9uc29ycycsXG4gIGRhdGE6IHtcbiAgICBzcG9uc29yczogW1xuICAgICAge1xuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9oYWNrZXJlYXJ0aC5jb20nLFxuICAgICAgICBsb2dvOiBcImh0dHBzOi8vaGFja2VyZWFydGguZ2xvYmFsLnNzbC5mYXN0bHkubmV0L3N0YXRpYy9oYWNrZXJlYXJ0aC9pbWFnZXMvbG9nby9IRV9sb2dvLnN2Z1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9jb2RlY2hlZi5jb20nLFxuICAgICAgICBsb2dvOiBcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9jb2RlY2hlZl9zaGFyZWQvc2l0ZXMvYWxsL3RoZW1lcy9hYmVzc2l2ZS9sb2dvLnBuZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaW5rOiAnaHR0cDovL2NvZGVmb3JjZXMuY29tJyxcbiAgICAgICAgbG9nbzogXCIvaW1hZ2VzL2NmLnBuZ1wiXG4gICAgICB9LCB7XG4gICAgICAgIGxpbms6ICdodHRwczovL2hhY2tlcnJhbmsuY29tJyxcbiAgICAgICAgbG9nbzogXCJodHRwczovL2hyY2RuLm5ldC9oYWNrZXJyYW5rL2Fzc2V0cy9icmFuZC9ocl9sb2dvX25ld193b3JkLTUyZGI0ZGNkYzc2YjMxYmU4NjQ1NmM3N2I1NWE3Mzk2LnBuZ1wiXG4gICAgICB9XG4gICAgXVxuICB9XG59KVxuIl0sImZpbGUiOiJpbmRleERhdGEuanMifQ==
