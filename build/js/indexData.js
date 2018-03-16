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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleERhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBhbGxpbWFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFsbGltYWdlc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpIHtcbiAgICAgIGFsbGltYWdlc1tpXS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFsbGltYWdlc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpO1xuICAgIH1cbiAgfVxufSwgZmFsc2UpO1xuXG52YXIgYXBwID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI2hlYWRlcicsXG4gIGRhdGE6IHtcbiAgICB0aXRsZTogJ0V1cmlzdGljYScsXG4gICAgc3VidGl0bGU6ICdUaGUgUHJvZ3JhbW1pbmcgQ2x1YiwgSUlUIEluZG9yZScsXG4gIH1cbn0pXG5cbnZhciBpbnRybyA9IG5ldyBWdWUoe1xuICBlbDogJyNpbnRybycsXG4gIGRhdGE6IHtcbiAgICBzdWJ0aXRsZTogYFRoaXMgZ2VuZXJhdGlvbiBoYXMgc2VlbiBncmVhdCBwcm9ncmFtbWVycyBsaWtlIExpbnVzIFRvcnZhbGRzIGFuZCBKZWZmIERlYW4uXG5UYWxlbnRlZCBhbmQgaGFyZHdvcmtpbmcgcHJvZ3JhbW1lcnMgYXJlIHJpc2luZyBhbGwgYXJvdW5kIHRoZSBnbG9iZS4gVG8gZm9zdGVyIHRoaXNcbiAgICAgICAgYW1hemluZyBza2lsbCBhbmQgY3VsdHVyZSwgdGhlIERlcGFydG1lbnQgb2YgQ29tcHV0ZXIgU2NpZW5jZSBhbmQgRW5naW5lZXJpbmcsIElJVFxuICAgICAgICBJbmRvcmUgcHJlc2VudHMgeW91IHdpdGggLSBFdXJpc3RpY2HigJkxOCwgdGhlIGFubnVhbCBjb2RpbmcgZmVzdGl2YWwgb2Ygb3VyIGNvbGxlZ2UuXG4gICAgICAgIFdlIHdpbGwgYmUgY29uZHVjdGluZyBhIHZhcmlldHkgb2YgZXZlbnRzIHJhbmdpbmcgZnJvbSBDb21wZXRpdGl2ZSBQcm9ncmFtbWluZyBhbmRcbiAgICAgICAgQXBwbGljYXRpb24gRGV2ZWxvcG1lbnQgdG8gQ3liZXIgU2VjdXJpdHkgYW5kIE1hY2hpbmUgTGVhcm5pbmcuXG4gICAgICAgIGAsXG4gICAgbGluazogXCJodHRwczovL2dvby5nbC9mb3Jtcy82WHZaWDFvZWQ1dThsZnh5MVwiXG4gIH1cbn0pXG5cbnZhciBldmVudHMgPSBuZXcgVnVlKHtcbiAgZWw6ICcjZXZlbnRzJyxcbiAgZGF0YToge1xuICAgIGxpc3Q6IFt7XG4gICAgICB0aXRsZTogXCJEaXZpZGUgQnkgWmVybyA2LjBcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvY29tcHJlc3NlZC9kYnoucG5nXCIsXG4gICAgICBkYXRlOiBcIlRvIGJlIGFubm91bmNlZFwiLFxuICAgICAgY29udGVudDogYEZvciB0aGUgU21hcnQgT25lcyAhYCxcbiAgICAgIGFib3V0OiBcIiBPdXIgZmxhZ3NoaXAgZXZlbnQsIGEgc2hvcnQgZHVyYXRpb24gY29tcGV0aXRpdmUgcHJvZ3JhbW1pbmcgY29udGVzdCwgaW5kaXZpZHVhbCBwYXJ0aWNpcGF0aW9uLlwiLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgICAgIDxpPlxuICAgICAgT3VyIGZsYWdzaGlwIGV2ZW50LCBhIHNob3J0IGR1cmF0aW9uIGNvbXBldGl0aXZlIHByb2dyYW1taW5nIGNvbnRlc3QsIGluZGl2aWR1YWwgcGFydGljaXBhdGlvbi48L2k+PGJyPlxuPGI+Q29udGVzdCBEdXJhdGlvbiA8L2I+LSAyLjUgaG91cnM8YnI+XG48Yj5Oby4gb2YgUHJvYmxlbXMgPC9iPi0gNyB0byA4PGJyPlxuPGI+RGF0ZTwvYj4gLSBUQkE8YnI+XG48Yj5UaW1lIDwvYj4tIFRCQTxicj5cbjxiPkNvbnRlc3QgbGluazwvYj4gLTxicj4gXG48Yj5QcmV2aW91cyBZZWFycyBsaW5rczwvYj4gLSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHA6Ly9jb2RlZm9yY2VzLmNvbS9ibG9nL2VudHJ5LzIzMTQwXCIgPiBEQlogNS4wIDwvYT58XG48YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHBzOi8vd3d3LmNvZGVjaGVmLmNvbS9ESUJaMjAxNlwiID5EQlogNC4wPC9hPnxcbjxhIHRhcmdldD1cIl9ibGFua1wiICBocmVmPVwiaHR0cHM6Ly93d3cuY29kZWNoZWYuY29tL0RCWVoxNVwiPkRCWiAzLjA8L2E+fFxuPGEgdGFyZ2V0PVwiX2JsYW5rXCIgIGhyZWY9XCJodHRwczovL3d3dy5jb2RlY2hlZi5jb20vREJZWjIwMTRcIiA+REJaIDIuMDwvYT58XG48YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHBzOi8vd3d3LmNvZGVjaGVmLmNvbS9EQllaMjAxM1wiID5EQlogMS4wPC9hPlxuPGJyPjxkaXY+IFByaXplcyB3b3J0aCA1MGsgZm9yIHRoZSB3aW5uZXJzLiA8L2Rpdj5cblxuXG5cblxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiSGFja2F0aG9uXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvaGFja2F0aG9uLnBuZ1wiLFxuICAgICAgZGF0ZTogXCIyM3RoIC0gMjR0aCBNYXJjaFwiLFxuICAgICAgY29udGVudDogYEZvciB0aGUgQ3JlYXRpdmUgT25lcyAhYCxcbiAgICAgIGFib3V0OiBcIiBBIHNvY2lhbCBjb2RpbmcgZXZlbnQgdG8gYnVpbGQgYSBuZXcgc29mdHdhcmUgdW5kZXIgdGhlIHRvLWJlLWFubm91bmNlZCBicm9hZCB0aGVtZXMuIEVhY2ggdGVhbSBjYW4gY29uc2lzdCBvZiBhIG1heGltdW0gb2YgNCBwZW9wbGUuXCJcbiAgICAgICwgbG9uZ0NvbnRlbnQ6IGBcbiAgICAgIDxpPlxuICAgICAgQSBzb2NpYWwgY29kaW5nIGV2ZW50IHRvIGJ1aWxkIGEgbmV3IHNvZnR3YXJlIHVuZGVyIHRoZSB0by1iZS1hbm5vdW5jZWQgYnJvYWQgdGhlbWVzLiBFYWNoIHRlYW0gY2FuIGNvbnNpc3Qgb2YgYSBtYXhpbXVtIG9mIDQgcGVvcGxlLlxuPC9pPlxuICAgICAgPGJyPjxiPkNvbnRlc3QgRHVyYXRpb248L2I+IC0gMzAgaHJzXG48YnI+PGI+Tm8uIG9mIHByb2JsZW1zPC9iPiAtIFRCQVxuPGJyPjxiPkRhdGU8L2I+IC0gMjNyZCB0byAyNHRoIG1hcmNoXG48YnI+PGI+VGltZTwvYj4gLSBCZWdpbnMgYXQgOSBQTSBJU1QgMjNyZCBNYXJjaFxuPGJyPjxiPkNvbnRlc3QgTGluazwvYj4gLSBcbjxicj48ZGl2PiBQcml6ZXMgd29ydGggMTAwayBmb3IgdGhlIHdpbm5lcnMuIDwvZGl2PlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQ2FwdHVyZSBUaGUgRmxhZ1wiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL2N0Zi5wbmdcIixcbiAgICAgIGRhdGU6IFwiN3RoLTh0aCBBcHJpbFwiLFxuICAgICAgY29udGVudDogYEZvciB0aGUgQ2xldmVyIE9uZXMgIWAsXG4gICAgICBhYm91dDogXCJBIENhcHR1cmUgdGhlIEZsYWcgQ29tcGV0aXRpb24gaGVsZCBieSBCeXRlIEJhbmRpdHMsIElJVCBJbmRvcmXigJlzIGFjYWRlbWljIENURiB0ZWFtLiBUaGUgdGVhbSBzaXplIGZvciB0aGUgQ1RGIHNob3VsZCBiZSBtYXggNCBwZW9wbGUuXCJcbiAgICAgICwgbG9uZ0NvbnRlbnQ6IGBcbiAgIDxpPiAgIFxuQSBDYXB0dXJlIHRoZSBGbGFnIENvbXBldGl0aW9uIGhlbGQgYnkgQnl0ZSBCYW5kaXRzLCBJSVQgSW5kb3Jl4oCZcyBhY2FkZW1pYyBDVEYgdGVhbS4gVGhlIHRlYW0gc2l6ZSBmb3IgdGhlIENURiBzaG91bGQgYmUgbWF4IDQgcGVvcGxlLlxuPC9pPlxuPGJyPjxiPkZvcm1hdDwvYj4gLSBKZW9wYXJkeVxuPGJyPjxiPkNvbnRlc3QgRHVyYXRpb248L2I+IC0gVEJBXG48YnI+PGI+RGF0ZTwvYj4gLSA3dGggdG8gOHRoIEFwcmlsXG48YnI+PGI+VGltZTwvYj4gLSBUQkFcbjxicj48Yj5Db250ZXN0IGxpbms8L2I+IC0gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgIGhyZWY9XCJodHRwczovL2N0Zi5ldXJpc3RpY2EuaW5cIiA+aHR0cHM6Ly9jdGYuZXVyaXN0aWNhLmluPC9hPlxuPGJyPjxkaXY+IFByaXplcyB3b3J0aCA1MGsgZm9yIHRoZSB3aW5uZXJzLiA8L2Rpdj5cbiAgICAgIGBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIk1hY2hpbmUgTGVhcm5pbmcgQ29kZXNwcmludFwiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL21sLnBuZ1wiLFxuICAgICAgZGF0ZTogXCIyNXRoIE1hcmNoIC0gOHRoIEFwcmlsXCIsXG4gICAgICBjb250ZW50OiBgRm9yIHRoZSBBbmFseXRpY2FsIE9uZXMgIWAsXG4gICAgICBhYm91dDogXCJUaGlzIGNvZGVzcHJpbnQgYWltcyB0byBnaXZlIHRoZSBwYXJ0aWNpcGFudHMgdGhlIHRocmlsbGluZyBleHBlcmllbmNlIG9mIHByb2dyYW1taW5nIGEgY29tcHV0ZXIgdG8gbGVhcm4uSW5kaXZpZHVhbCBwYXJ0aWNpcGF0aW9uLlwiXG4gICAgICAsIGxvbmdDb250ZW50OiBgXG4gIDxpPiAgVGhpcyBjb2Rlc3ByaW50IGFpbXMgdG8gZ2l2ZSB0aGUgcGFydGljaXBhbnRzIHRoZSB0aHJpbGxpbmcgZXhwZXJpZW5jZSBvZiBwcm9ncmFtbWluZyBhIGNvbXB1dGVyIHRvIGxlYXJuLkluZGl2aWR1YWwgcGFydGljaXBhdGlvbi5cbjwvaT48YnI+PGI+Q29udGVzdCBEdXJhdGlvbjwvYj4gLSAyNXRoIE1hcmNoIHRvIDh0aCBBcHJpbFxuPGJyPjxiPk5vLiBvZiBQcm9ibGVtczwvYj4gLVxuPGJyPjxiPkRhdGUgYW5kIFRpbWU8L2I+IC0gMjV0aCBNYXJjaCAxMjowMCBub29uIHRvIDh0aCBBcHJpbCAxMjowMCBub29uXG48YnI+XG5Db250ZXN0IGxpbmsgLSA8YnI+XG48YnI+PGRpdj4gUHJpemVzIHdvcnRoIDMwayBmb3IgdGhlIHdpbm5lcnMuIDwvZGl2PlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQ29kZSBNw6lsYW5nZSAzLjBcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvY29tcHJlc3NlZC9jb2RlX21lbGFuZ2UucG5nXCIsXG4gICAgICBkYXRlOiBcIjMwdGggTWFyY2ggLSAxc3QgQXByaWwsIDIxOjAwXCIsXG4gICAgICBjb250ZW50OiBgRm9yIHRoZSBSZWxlbnRsZXNzIE9uZXMgIWAsXG4gICAgICBhYm91dDogXCJBIGxvbmcgYWxnb3JpdGhtaWMgY29tcGV0aXRpdmUgcHJvZ3JhbW1pbmcgY29udGVzdCwgaW5kaXZpZHVhbCBwYXJ0aWNpcGF0aW9uLlwiLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgPGk+ICAgIEEgbG9uZyBhbGdvcml0aG1pYyBjb21wZXRpdGl2ZSBwcm9ncmFtbWluZyBjb250ZXN0LCBpbmRpdmlkdWFsIHBhcnRpY2lwYXRpb24uIDwvaT5cbjxicj48Yj5Db250ZXN0IER1cmF0aW9uPC9iPiAtIDM2IGhvdXJzXG48YnI+PGI+Tm8uIG9mIFByb2JsZW1zPC9iPiAtIDE1LTE2XG48YnI+PGI+RGF0ZSBhbmQgVGltZTwvYj4gLSAzMHRoIE1hcmNoIDk6MDBwbSB0byAxc3QgQXByaWwgOTowMGFtXG48YnI+PGI+Q29udGVzdCBsaW5rPC9iPiAtIFxuPGJyPjxiPlByZXZpb3VzIFllYXIgTGlua3M8L2I+IC0gXG48YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHBzOi8vd3d3LmhhY2tlcnJhbmsuY29tL2NvZGUtbWVsYW5nZS1paXRpL1wiID5Db2RlIE3DqWxhbmdlIDIwMTc8L2E+IHwgXG48YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHBzOi8vd3d3LmhhY2tlcnJhbmsuY29tL2NvbnRlc3RzL2NvZGUtbWVsYW5nZS1paXRpXCIgPkNvZGUgTWVsYW5nZSAyMDE2PC9hPlxuPGJyPjxkaXY+IFByaXplcyB3b3J0aCAzMGsgZm9yIHRoZSB3aW5uZXJzLiA8L2Rpdj5cbiAgICAgIGBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNvZGUgR29sZiA0LjBcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvY29tcHJlc3NlZC9jb2RlX2dvbGYucG5nXCIsXG4gICAgICBkYXRlOiBcIjI2dGggTWFyY2gsIDIxOjAwLTIzOjU5XCIsXG4gICAgICBjb250ZW50OiBgRm9yIHRoZSBTdWNjaW5jdCBPbmVzICFgLFxuICAgICAgYWJvdXQ6IFwiQSBjb2RpbmcgY29udGVzdCBpbiB3aGljaCBzaG9ydGVyIGlzIHlvdXIgY29kZSwgYmV0dGVyIGlzIHlvdXIgc2NvcmUuIEluZGl2aWR1YWwgcGFydGljaXBhdGlvbi5cIixcbiAgICAgIGxvbmdDb250ZW50OiBgXG4gICAgICA8aT5cbiAgICAgIEEgY29kaW5nIGNvbnRlc3QgaW4gd2hpY2ggc2hvcnRlciBpcyB5b3VyIGNvZGUsIGJldHRlciBpcyB5b3VyIHNjb3JlLiBJbmRpdmlkdWFsIHBhcnRpY2lwYXRpb24uPC9pPlxuPGJyPjxiPkNvbnRlc3QgRHVyYXRpb248L2I+IC0gMyBob3VycyBcbjxicj48Yj5Oby4gb2YgUHJvYmxlbXM8L2I+IC0gNy04XG48YnI+PGI+RGF0ZSBhbmQgVGltZSAtIDI2dGggTWFyY2ggOTowMCBQTTwvYj4gLSAxMjowMCBQTSAyN3RoIE1hcmNoXG48YnI+PGI+Q29udGVzdCBsaW5rPC9iPiAtIFxuPGJyPjxiPlByZXZpb3VzIFllYXIgTGlua3M8L2I+IC0gXG48YnI+PGI+Q29kZSBHb2xmIDMuMDwvYj4gLSAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgIGhyZWY9XCJodHRwczovL3d3dy5oYWNrZXJyYW5rLmNvbS9mbHV4dXMtY29kZS1nb2xmXCIgPmh0dHBzOi8vd3d3LmhhY2tlcnJhbmsuY29tL2ZsdXh1cy1jb2RlLWdvbGY8L2E+XG48YnI+PGRpdj4gUHJpemVzIHdvcnRoIDEyayBmb3IgdGhlIHdpbm5lcnMgPC9kaXY+XG4gICAgICBgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJTdXJwcmlzZSBMYW5ndWFnZSA0LjBcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvY29tcHJlc3NlZC9zdXJwcmlzZV9sYW5ndWFnZS5wbmdcIixcbiAgICAgIGRhdGU6IFwiMjh0aCBNYXJjaC4gMjE6MDAtMjM6NTlcIixcbiAgICAgIGNvbnRlbnQ6IGBGb3IgdGhlIFNwb250YW5lb3VzIE9uZXMgIWAsXG4gICAgICBhYm91dDogXCJBIHByb2dyYW1taW5nIGNvbnRlc3QgaW4gd2hpY2ggdGhlIGxhbmd1YWdlIHdpbGwgYmUgYSBzZWNyZXQsIHJldmVhbGVkIG9ubHkgMTUgbWludXRlcyBiZWZvcmUgdGhlIGNvbnRlc3QuIEluZGl2aWR1YWwgcGFydGljaXBhdGlvbi5cIixcbiAgICAgIGxvbmdDb250ZW50OiBgXG4gICAgICA8aT5cbiAgICAgIEEgcHJvZ3JhbW1pbmcgY29udGVzdCBpbiB3aGljaCB0aGUgbGFuZ3VhZ2Ugd2lsbCBiZSBhIHNlY3JldCwgcmV2ZWFsZWQgb25seSAxNSBtaW51dGVzIGJlZm9yZSB0aGUgY29udGVzdC4gSW5kaXZpZHVhbCBwYXJ0aWNpcGF0aW9uLlxuPC9pPlxuICAgICAgPGJyPjxiPkNvbnRlc3QgRHVyYXRpb248L2I+IC0gMyBIb3Vycy5cbjxicj48Yj5Oby4gb2YgUHJvYmxlbXM8L2I+IC0gNy04XG48YnI+PGI+RGF0ZSBhbmQgVGltZSAtIDI4dGggTWFyY2ggOTowMCBQTTwvYj4gLSAxMjowMCBQTSAyOXRoIE1hcmNoXG48YnI+PGI+Q29udGVzdCBsaW5rPC9iPiAtIFxuPGJyPjxiPlByZXZpb3VzIFllYXIgTGlua3M8L2I+IC0gXG48YSB0YXJnZXQ9XCJfYmxhbmtcIiAgaHJlZj1cImh0dHBzOi8vd3d3LmhhY2tlcnJhbmsuY29tL3N1cnByaXNlLWxhbmd1YWdlLTMtMFwiID5TTCAyMDE3PC9hPlxuIHwgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgIGhyZWY9XCJodHRwczovL3d3dy5oYWNrZXJyYW5rLmNvbS9zdXJwcmlzZS1sYW5ndWFnZS0yLTBcIiA+U0wgMjAxNjwvYT5cbiB8IDxhIHRhcmdldD1cIl9ibGFua1wiICBocmVmPVwiaHR0cHM6Ly93d3cuaGFja2VycmFuay5jb20vc3VycHJpc2UtbGFuZ3VhZ2VcIiA+U0wgMjAxNTwvYT5cbjxicj48ZGl2PiBQcml6ZXMgd29ydGggMTJrIGZvciB0aGUgd2lubmVycyA8L2Rpdj5cbiAgICAgIGBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkhhY2sgdGhlIENvZGVcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvY29tcHJlc3NlZC9oYWNrX3RoZV9jb2RlLnBuZ1wiLFxuICAgICAgZGF0ZTogXCIzcmQgQXByaWwsIDIxOjAwLTIzOjU5XCIsXG4gICAgICBjb250ZW50OiBgRm9yIHRoZSBNZXRpY3Vsb3VzIE9uZXMgIWAsXG4gICAgICBhYm91dDogXCJBIGNvbXBldGl0aXZlIHByb2dyYW1taW5nIGNvbnRlc3QgaW4gd2hpY2ggeW91IHRlc3QgeW91ciBkZWJ1Z2dpbmcgc2tpbGxzIGJ5IGNvcnJlY3RpbmcgdGhlIGdpdmVuIGNvZGUgZm9yIHRoZSBmYWlsaW5nIHRlc3QgY2FzZShzKS4gSW5kaXZpZHVhbCBwYXJ0aWNpcGF0aW9uLlwiLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgPGk+ICAgIEEgY29tcGV0aXRpdmUgcHJvZ3JhbW1pbmcgY29udGVzdCBpbiB3aGljaCB5b3UgdGVzdCB5b3VyIGRlYnVnZ2luZyBza2lsbHMgYnkgY29ycmVjdGluZyB0aGUgZ2l2ZW4gY29kZSBmb3IgdGhlIGZhaWxpbmcgdGVzdCBjYXNlKHMpLiBJbmRpdmlkdWFsIHBhcnRpY2lwYXRpb24uXG48L2k+PGJyPjxiPkNvbnRlc3QgRHVyYXRpb248L2I+IC0gMyBob3Vyc1xuPGJyPjxiPk5vLiBvZiBQcm9ibGVtczwvYj4gLSAxNVxuPGJyPjxiPkRhdGUgYW5kIFRpbWUgLSAzIEFwcmlsIDk6MDAgUE08L2I+IC0gMTI6MDAgUE0gNCBBcHJpbFxuPGJyPjxiPkNvbnRlc3QgbGluazwvYj4gLSBcbjxicj48ZGl2PiBQcml6ZXMgd29ydGggOGsgZm9yIHRoZSB3aW5uZXJzIDwvZGl2PlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiRm9vbCBZb3UhXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvZm9vbF95b3UucG5nXCIsXG4gICAgICBkYXRlOiBcIjFzdCBBcHJpbCwgMTU6MDAtMTg6MDBcIixcbiAgICAgIGNvbnRlbnQ6IGBGb3IgdGhlIERlY2VwdGl2ZSBPbmVzICFgLFxuICAgICAgYWJvdXQ6IFwiQSB1bmlxdWUgcHJvZ3JhbW1pbmcgY29udGVzdCB0aGF0IHJlcXVpcmVzIG9uZSB0byB0aGluayBvdXQgb2YgdGhlIGJveC4gSW5kaXZpZHVhbCBwYXJ0aWNpcGF0aW9uLlwiXG4gICAgICAsIGxvbmdDb250ZW50OiBgXG4gIDxpPiAgICBBIHVuaXF1ZSBwcm9ncmFtbWluZyBjb250ZXN0IHRoYXQgcmVxdWlyZXMgb25lIHRvIHRoaW5rIG91dCBvZiB0aGUgYm94LiBJbmRpdmlkdWFsIFxuICAgIHBhcnRpY2lwYXRpb24uXG48L2k+PGJyPjxiPjxiPkNvbnRlc3QgRHVyYXRpb248L2I+PC9iPiAtIDUgaG91cnNcbjxicj48Yj48Yj5Oby4gb2YgUHJvYmxlbXM8L2I+PC9iPiAtIDEwLTEyXG48YnI+PGI+PGI+RGF0ZSBhbmQgVGltZSAtIDEgQXByaWwgMzowMCBQTTwvYj48L2I+IC0gODowMCBQTSAxIEFwcmlsXG48YnI+PGI+PGI+Q29udGVzdCBsaW5rPC9iPjwvYj4gLSBcbjxicj48ZGl2PiBQcml6ZXMgd29ydGggMTJrIGZvciB0aGUgd2lubmVycyA8L2Rpdj5cbiAgICAgIGBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlNPSCBDQUggVE9BXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvc29oX2NhaF90b2EucG5nXCIsXG4gICAgICBkYXRlOiBcIjZ0aCBBcHJpbFwiLFxuICAgICAgY29udGVudDogYEZvciB0aGUgR2Vla3kgT25lcyAhYCxcbiAgICAgIGFib3V0OiBcIiBBIHNob3J0LWR1cmF0aW9uIHByb2dyYW1taW5nIGNvbnRlc3QgZm9jdXNpbmcgb24gbnVtYmVyIHRoZW9yeSwgcHJvYmFiaWxpdHksIGNvbWJpbmF0b3JpY3MsIG1vZHVsYXIgYXJpdGhtZXRpYyBhbmQgb3RoZXIgbWF0aHMgdG9waWNzLiBJbmRpdmlkdWFsIHBhcnRpY2lwYXRpb24uXCJcbiAgICAgICwgbG9uZ0NvbnRlbnQ6IGBcbiAgPGk+ICBBIHNob3J0LWR1cmF0aW9uIHByb2dyYW1taW5nIGNvbnRlc3QgZm9jdXNpbmcgb24gbnVtYmVyIHRoZW9yeSwgcHJvYmFiaWxpdHksIGNvbWJpbmF0b3JpY3MsIG1vZHVsYXIgYXJpdGhtZXRpYyBhbmQgb3RoZXIgbWF0aHMgdG9waWNzLiBJbmRpdmlkdWFsIHBhcnRpY2lwYXRpb24uXG48L2k+PGJyPjxiPjxiPkNvbnRlc3QgRHVyYXRpb248L2I+PC9iPiAtIDMgaG91cnNcbjxicj48Yj48Yj5Oby4gb2YgUHJvYmxlbXM8L2I+PC9iPiAtIDEwLTEyXG48YnI+PGI+PGI+RGF0ZSBhbmQgVGltZSAtIDZ0aCBBcHJpbCA5OjAwcG08L2I+PC9iPiAtIDEyOjAwYW0gN3RoIEFwcmlsXG48YnI+PGI+PGI+Q29udGVzdCBsaW5rPC9iPjwvYj4gLSBcbjxicj48ZGl2PiBQcml6ZXMgd29ydGggMTVrIGZvciB0aGUgd2lubmVycyA8L2Rpdj5cbiAgICAgIGBcbiAgICB9LFxuICAgIF0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBtb2RhbChpKSB7XG4gICAgICAkKFwiI21vZGFsXCIgKyBpKS5tb2RhbCh7XG4gICAgICAgIGZhZGVEdXJhdGlvbjogMTAwXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pXG5cbnZhciBmb290ZXIgPSBuZXcgVnVlKHtcbiAgZWw6ICcjZm9vdGVyJyxcbiAgZGF0YToge1xuICAgIHN1YnRpdGxlOiAnVGhlIFByb2dyYW1taW5nIENsdWIsIElJVCBJbmRvcmUnLFxuICAgIGxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdpY29uIGZhLWxpbmsnLFxuICAgICAgICB0YWc6ICdUaGUgUHJvZ3JhbW1pbmcgQ2x1YicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vcGNsdWJpaXRpLmdpdGh1Yi5pby8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdpY29uIGZhLWZhY2Vib29rJyxcbiAgICAgICAgdGFnOiAnRmFjZWJvb2snLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BjbHViaWl0aS8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdpY29uIGZhLWdpdGh1YicsXG4gICAgICAgIHRhZzogJ0dpdGh1YicsXG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vcGNsdWJpaXRpJyxcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdpY29uIGZhLWVudmVsb3BlJyxcbiAgICAgICAgdGFnOiAnRW1haWwnLFxuICAgICAgICBsaW5rOiAnbWFpbHRvOnByb2djbHViQGlpdGkuYWMuaW4nLFxuICAgICAgfSxcbiAgICBdXG4gIH1cbn0pXG5cbnZhciBzcG9uc29ycyA9IG5ldyBWdWUoe1xuICBlbDogJyNzcG9uc29ycycsXG4gIGRhdGE6IHtcbiAgICBzcG9uc29yczogW1xuICAgICAge1xuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9oYWNrZXJlYXJ0aC5jb20nLFxuICAgICAgICBsb2dvOiBcImh0dHBzOi8vaGFja2VyZWFydGguZ2xvYmFsLnNzbC5mYXN0bHkubmV0L3N0YXRpYy9oYWNrZXJlYXJ0aC9pbWFnZXMvbG9nby9IRV9sb2dvLnN2Z1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9jb2RlY2hlZi5jb20nLFxuICAgICAgICBsb2dvOiBcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9jb2RlY2hlZl9zaGFyZWQvc2l0ZXMvYWxsL3RoZW1lcy9hYmVzc2l2ZS9sb2dvLnBuZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaW5rOiAnaHR0cDovL2NvZGVmb3JjZXMuY29tJyxcbiAgICAgICAgbG9nbzogXCIvaW1hZ2VzL2NmLnBuZ1wiXG4gICAgICB9LCB7XG4gICAgICAgIGxpbms6ICdodHRwczovL2hhY2tlcnJhbmsuY29tJyxcbiAgICAgICAgbG9nbzogXCJodHRwczovL2hyY2RuLm5ldC9oYWNrZXJyYW5rL2Fzc2V0cy9icmFuZC9ocl9sb2dvX25ld193b3JkLTUyZGI0ZGNkYzc2YjMxYmU4NjQ1NmM3N2I1NWE3Mzk2LnBuZ1wiXG4gICAgICB9XG4gICAgXVxuICB9XG59KVxuIl0sImZpbGUiOiJpbmRleERhdGEuanMifQ==
