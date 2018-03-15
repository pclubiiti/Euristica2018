var app = new Vue({
  el: '#header',
  data: {
    title: 'Euristica',
    subtitle: 'Indian Institute of Technology Indore',
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
      title: "Divide By Zero",
      src: "images/dbz.jpg",
      date: "8th April",
      content: `
             It is a short-duration (2.5 hours)
individual competitive programming
contest.`,
      longContent: `
           It is a short-duration (2.5 hours)
individual competitive programming
contest. The contest will consist of
7-8 problems and is meant to test the algorithmic and implementation skills of the contestants
along with their speed and accuracy of problem solving. It is our flagship event which we have
been organising for 6 years now. We are expecting a participation of 8000+ candidates from all
over the world.
      `
    },
    {
      title: "Hackathon",
      src: "images/hackathon.jpg",
      date: "24th - 25th March",
      content: `Hackathon is a team development event. The duration will be 24 to 48 hours.`,
      longContent: `
            Hackathon is a team development event. The duration will be 24 to 48 hours. Multiple
problem statements will be provided at the beginning of the event. The contestants will
get the entire time in which they have to select one of the problem statements, finalise
the technological stack and work on the implementation. The contest will test creative
thinking, knowledge about latest technologies, the pace of learning, coding skill as well
as time management skills.
The contestants will be provided with internet access so as to learn and implement their
application using any technology they wish to use. The main part of the contest will be
coming up with innovative solutions for the given problems. Usage of open source
modules will be allowed (with proper attribution).
The scoring will be based on the quality and applicability of end product. Products with
future development scope will also be considered.
Timeline for the event shall be as follows:<br>
<ol>
<li> <b> Idea Generation Phase​</b>: Teams are asked to submit their detailed ideas. They
need to mention how their ideas are better than the current available systems.</li>
<li> <b> Development Phase​</b>: The teams will code the application. This will be the major
part of the event, the teams will have to implement the complete application in
this time period.</li>
<li> <b> Presentation Phase</b>: The teams will present their projects to the jury. If they
clear the preliminary round they will be asked to present their application in front
of the audience and the jury. Their work will be evaluated on the basis of their
idea, code, tech-stack and presentation quality.</li>
</ol>
Teams will be given time slots in which they can discuss their projects and issues with
mentors who will be available during the event. They are allowed to ask any question
relevant to the project to the mentors and they will try their best to help the students out
with their issue.

      `
    },
    {
      title: "Capture The Flag",
      src: "images/ctf.jpg",
      date: "29th March",
      content: `A special kind of cybersecurity competition designed to challenge its participants to solve
computersecurity problems and/or capture and defend computersystems.
                    `,
      longContent: `
            Our CTF will have be an online jeopardy CTF. The duration of the event will be of 24-48
hours, and we expect a participation of 500+ teams, with each team consisting of 4
members. The CTF will have 15 problems.<br>
In a jeopardy CTF format, teams must complete as many cybersecurity challenges as
they can from a given selection, testing their skills and knowledge on a diverse range of
computer security categories in novel and creative ways. Typical tasks are related to
networking, programming, applications, mobile, forensics, reverse engineering and
cryptography. For each challenge a team completes, a specific number of points is
rewarded.Participants needs to submit the correct flag (piece of text) in order to score.
      `
    },
    {
      title: "Machine Learning Codesprint",
      src: "images/ml.jpg",
      date: "26th March Onwards...",
      content: `“Information is the oil of the 21st century, and analytics is the combustion engine.”`,
      longContent: `
           Artificial intelligence and analysis will shape our future more powerfully than any other
innovation this century. Machine learning, on the other hand, is a form of artificial
intelligence in which<b> the computer learns for itself how to complete a task​.</b><br>
From TD-Gammon and DeepBlue to Watson and Alexa, machines are eventually
becoming an integral part of our lives.<br>
This codesprint aims to give the participants the thrilling experience of programming a
computer to learn.<br>
The contest will be as follows -
<ol>
<li><b> Training Phase</b> - You will be given the training data 24 Hrs before the Evaluation
Phase.</li>
You will use this data to train your computer, as well as you can.
<li><b> Evaluation Phase</b> - Your model will be evaluated on your accuracy on the test
data (separate from the training data). Some extra points might be awarded
based on uniqueness of approach.</li>
</ol>
We are expecting a participation of 500+ people.
      `
    },
    {
      title: "Code Mélange III",
      src: "images/code_melange.jpg",
      date: "30th March - 1st April",
      content: `A long algorithmic programming
                contest that will push your brain to
                the limit!
                `,
      longContent: `
            It is an open to all individual
contest. We are getting a
participation of 500+ students from
the past two years and are
expecting more this time.
The contest will span across a
duration of <b>48-72 hrs</b> ​, having 10-12
problems with varying levels of
difficulty and implementations, targeting everyone with interest for programming.
      `
    },
    {
      title: "Code Golf 4.0",
      src: "images/code_golf.jpg",
      date: "26th March",
      content: `Code Golf is a unique competitive coding challenge in which “Less is More​"​.`,
      longContent: `
            The scoring is based on the
correctness of the code as well as
the number of characters in it.
Shorter codes fetch more points.
However, The code must output
the correct answer for it to be
considered for points. Participants
will be tested on their logical and
algorithmic skills as well as their
aptitude for programming
languages. Picking the right language and the right libraries for each task is crucial in
performing well and coming out at the top.
      `
    },
    {
      title: "Surprise Language IV",
      src: "images/surpise_language.jpg",
      date: "28th March",
      content: `‘Coz who doesn’t like surprises?`,
      longContent: `
            Are you ready for something challenging?
Something adventurous? We are
conducting, the Surprise Language
Programming Contest. Here, unlike a
regular programming contest, you will
only be able to use one language, which
will be announced 15 minutes before the
contest. So be ready to compete, you
might even learn a whole new language
along the way! We will be announcing a

list of 10 languages 3 days before the contest.
      `
    },
    {
      title: "Hack the Code",
      src: "images/hack_the_code.jpg",
      date: "2nd April",
      content: `Are you a master debugger? Do you love squashing bugs? Is smashing your head on a
wall and tearing off your hair what you love? If yes, then this contest is definitely for you!`,
      longContent: `
           Presenting Hack the code! A 3 hour contest where you’ll be provided problems,
alongside it’s solution, and you’ll have to find a failing case on the solution. You will be
given 10 solutions (which can be in any language) along with their respective problem
descriptions. Just output any test case which will fail the code. So, are you ready?<br>
Scoring is based on number of problems successfully hacked. Ties will be broken on
the basis of total time taken in hacks.
      `
    },
    {
      title: "Fool You!",
      src: "images/fool_you.jpg",
      date: "4th April",
      content: `Fool You is a programming event which isfar from the usual ‘serious’ programming contests.`,
      longContent: `
           The unique aspect of this contest which makes it amusing is that it tests the contestants
deciphering skills and requires them to think out-of-the-box. The problem statements in
this contest will be framed in such a way that they are tricky and misdirect the
contestant. Decoding the questions might prove to be more challenging than solving
them. Participants need to know basic programming skills, logic and the mental ability to
spot clues and hints hidden in the questions.
      `
    },
    {
      title: "al-Khwarizmi 2.0",
      src: "images/al_khwarizmi.jpg",
      date: "6th April",
      content: `Based on the norms of Project Euler, we invite you to untangle the labyrinthine of
mathematics.`,
      longContent: `
           This is a special programming contest with problems mainly focussing on the
mathematical concepts rather than data structures and algorithms. It will be a short
duration programming contest. Some of the topics that will be focussed are, Number
theory, Modular arithmetic, Computational Geometry, Combinatorics, Probability, etc.
      `
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
        logo: "http://st.codeforces.com/s/24151/images/codeforces-logo-with-telegram.png"
      }, {
        link: 'https://hackerrank.com',
        logo: "https://hrcdn.net/hackerrank/assets/brand/hr_logo_new_word-52db4dcdc76b31be86456c77b55a7396.png"
      }
    ]
  }
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleERhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IG5ldyBWdWUoe1xuICBlbDogJyNoZWFkZXInLFxuICBkYXRhOiB7XG4gICAgdGl0bGU6ICdFdXJpc3RpY2EnLFxuICAgIHN1YnRpdGxlOiAnSW5kaWFuIEluc3RpdHV0ZSBvZiBUZWNobm9sb2d5IEluZG9yZScsXG4gIH1cbn0pXG5cbnZhciBpbnRybyA9IG5ldyBWdWUoe1xuICBlbDogJyNpbnRybycsXG4gIGRhdGE6IHtcbiAgICBzdWJ0aXRsZTogYFRoaXMgZ2VuZXJhdGlvbiBoYXMgc2VlbiBncmVhdCBwcm9ncmFtbWVycyBsaWtlIExpbnVzIFRvcnZhbGRzIGFuZCBKZWZmIERlYW4uXG5UYWxlbnRlZCBhbmQgaGFyZHdvcmtpbmcgcHJvZ3JhbW1lcnMgYXJlIHJpc2luZyBhbGwgYXJvdW5kIHRoZSBnbG9iZS4gVG8gZm9zdGVyIHRoaXNcbiAgICAgICAgYW1hemluZyBza2lsbCBhbmQgY3VsdHVyZSwgdGhlIERlcGFydG1lbnQgb2YgQ29tcHV0ZXIgU2NpZW5jZSBhbmQgRW5naW5lZXJpbmcsIElJVFxuICAgICAgICBJbmRvcmUgcHJlc2VudHMgeW91IHdpdGggLSBFdXJpc3RpY2HigJkxOCwgdGhlIGFubnVhbCBjb2RpbmcgZmVzdGl2YWwgb2Ygb3VyIGNvbGxlZ2UuXG4gICAgICAgIFdlIHdpbGwgYmUgY29uZHVjdGluZyBhIHZhcmlldHkgb2YgZXZlbnRzIHJhbmdpbmcgZnJvbSBDb21wZXRpdGl2ZSBQcm9ncmFtbWluZyBhbmRcbiAgICAgICAgQXBwbGljYXRpb24gRGV2ZWxvcG1lbnQgdG8gQ3liZXIgU2VjdXJpdHkgYW5kIE1hY2hpbmUgTGVhcm5pbmcuXG4gICAgICAgIGAsXG4gICAgbGluazogXCJodHRwczovL2dvby5nbC9mb3Jtcy82WHZaWDFvZWQ1dThsZnh5MVwiXG4gIH1cbn0pXG5cbnZhciBldmVudHMgPSBuZXcgVnVlKHtcbiAgZWw6ICcjZXZlbnRzJyxcbiAgZGF0YToge1xuICAgIGxpc3Q6IFt7XG4gICAgICB0aXRsZTogXCJEaXZpZGUgQnkgWmVyb1wiLFxuICAgICAgc3JjOiBcImltYWdlcy9kYnouanBnXCIsXG4gICAgICBkYXRlOiBcIjh0aCBBcHJpbFwiLFxuICAgICAgY29udGVudDogYFxuICAgICAgICAgICAgIEl0IGlzIGEgc2hvcnQtZHVyYXRpb24gKDIuNSBob3VycylcbmluZGl2aWR1YWwgY29tcGV0aXRpdmUgcHJvZ3JhbW1pbmdcbmNvbnRlc3QuYCxcbiAgICAgIGxvbmdDb250ZW50OiBgXG4gICAgICAgICAgIEl0IGlzIGEgc2hvcnQtZHVyYXRpb24gKDIuNSBob3VycylcbmluZGl2aWR1YWwgY29tcGV0aXRpdmUgcHJvZ3JhbW1pbmdcbmNvbnRlc3QuIFRoZSBjb250ZXN0IHdpbGwgY29uc2lzdCBvZlxuNy04IHByb2JsZW1zIGFuZCBpcyBtZWFudCB0byB0ZXN0IHRoZSBhbGdvcml0aG1pYyBhbmQgaW1wbGVtZW50YXRpb24gc2tpbGxzIG9mIHRoZSBjb250ZXN0YW50c1xuYWxvbmcgd2l0aCB0aGVpciBzcGVlZCBhbmQgYWNjdXJhY3kgb2YgcHJvYmxlbSBzb2x2aW5nLiBJdCBpcyBvdXIgZmxhZ3NoaXAgZXZlbnQgd2hpY2ggd2UgaGF2ZVxuYmVlbiBvcmdhbmlzaW5nIGZvciA2IHllYXJzIG5vdy4gV2UgYXJlIGV4cGVjdGluZyBhIHBhcnRpY2lwYXRpb24gb2YgODAwMCsgY2FuZGlkYXRlcyBmcm9tIGFsbFxub3ZlciB0aGUgd29ybGQuXG4gICAgICBgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJIYWNrYXRob25cIixcbiAgICAgIHNyYzogXCJpbWFnZXMvaGFja2F0aG9uLmpwZ1wiLFxuICAgICAgZGF0ZTogXCIyNHRoIC0gMjV0aCBNYXJjaFwiLFxuICAgICAgY29udGVudDogYEhhY2thdGhvbiBpcyBhIHRlYW0gZGV2ZWxvcG1lbnQgZXZlbnQuIFRoZSBkdXJhdGlvbiB3aWxsIGJlIDI0IHRvIDQ4IGhvdXJzLmAsXG4gICAgICBsb25nQ29udGVudDogYFxuICAgICAgICAgICAgSGFja2F0aG9uIGlzIGEgdGVhbSBkZXZlbG9wbWVudCBldmVudC4gVGhlIGR1cmF0aW9uIHdpbGwgYmUgMjQgdG8gNDggaG91cnMuIE11bHRpcGxlXG5wcm9ibGVtIHN0YXRlbWVudHMgd2lsbCBiZSBwcm92aWRlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBldmVudC4gVGhlIGNvbnRlc3RhbnRzIHdpbGxcbmdldCB0aGUgZW50aXJlIHRpbWUgaW4gd2hpY2ggdGhleSBoYXZlIHRvIHNlbGVjdCBvbmUgb2YgdGhlIHByb2JsZW0gc3RhdGVtZW50cywgZmluYWxpc2VcbnRoZSB0ZWNobm9sb2dpY2FsIHN0YWNrIGFuZCB3b3JrIG9uIHRoZSBpbXBsZW1lbnRhdGlvbi4gVGhlIGNvbnRlc3Qgd2lsbCB0ZXN0IGNyZWF0aXZlXG50aGlua2luZywga25vd2xlZGdlIGFib3V0IGxhdGVzdCB0ZWNobm9sb2dpZXMsIHRoZSBwYWNlIG9mIGxlYXJuaW5nLCBjb2Rpbmcgc2tpbGwgYXMgd2VsbFxuYXMgdGltZSBtYW5hZ2VtZW50IHNraWxscy5cblRoZSBjb250ZXN0YW50cyB3aWxsIGJlIHByb3ZpZGVkIHdpdGggaW50ZXJuZXQgYWNjZXNzIHNvIGFzIHRvIGxlYXJuIGFuZCBpbXBsZW1lbnQgdGhlaXJcbmFwcGxpY2F0aW9uIHVzaW5nIGFueSB0ZWNobm9sb2d5IHRoZXkgd2lzaCB0byB1c2UuIFRoZSBtYWluIHBhcnQgb2YgdGhlIGNvbnRlc3Qgd2lsbCBiZVxuY29taW5nIHVwIHdpdGggaW5ub3ZhdGl2ZSBzb2x1dGlvbnMgZm9yIHRoZSBnaXZlbiBwcm9ibGVtcy4gVXNhZ2Ugb2Ygb3BlbiBzb3VyY2Vcbm1vZHVsZXMgd2lsbCBiZSBhbGxvd2VkICh3aXRoIHByb3BlciBhdHRyaWJ1dGlvbikuXG5UaGUgc2NvcmluZyB3aWxsIGJlIGJhc2VkIG9uIHRoZSBxdWFsaXR5IGFuZCBhcHBsaWNhYmlsaXR5IG9mIGVuZCBwcm9kdWN0LiBQcm9kdWN0cyB3aXRoXG5mdXR1cmUgZGV2ZWxvcG1lbnQgc2NvcGUgd2lsbCBhbHNvIGJlIGNvbnNpZGVyZWQuXG5UaW1lbGluZSBmb3IgdGhlIGV2ZW50IHNoYWxsIGJlIGFzIGZvbGxvd3M6PGJyPlxuPG9sPlxuPGxpPiA8Yj4gSWRlYSBHZW5lcmF0aW9uIFBoYXNl4oCLPC9iPjogVGVhbXMgYXJlIGFza2VkIHRvIHN1Ym1pdCB0aGVpciBkZXRhaWxlZCBpZGVhcy4gVGhleVxubmVlZCB0byBtZW50aW9uIGhvdyB0aGVpciBpZGVhcyBhcmUgYmV0dGVyIHRoYW4gdGhlIGN1cnJlbnQgYXZhaWxhYmxlIHN5c3RlbXMuPC9saT5cbjxsaT4gPGI+IERldmVsb3BtZW50IFBoYXNl4oCLPC9iPjogVGhlIHRlYW1zIHdpbGwgY29kZSB0aGUgYXBwbGljYXRpb24uIFRoaXMgd2lsbCBiZSB0aGUgbWFqb3JcbnBhcnQgb2YgdGhlIGV2ZW50LCB0aGUgdGVhbXMgd2lsbCBoYXZlIHRvIGltcGxlbWVudCB0aGUgY29tcGxldGUgYXBwbGljYXRpb24gaW5cbnRoaXMgdGltZSBwZXJpb2QuPC9saT5cbjxsaT4gPGI+IFByZXNlbnRhdGlvbiBQaGFzZTwvYj46IFRoZSB0ZWFtcyB3aWxsIHByZXNlbnQgdGhlaXIgcHJvamVjdHMgdG8gdGhlIGp1cnkuIElmIHRoZXlcbmNsZWFyIHRoZSBwcmVsaW1pbmFyeSByb3VuZCB0aGV5IHdpbGwgYmUgYXNrZWQgdG8gcHJlc2VudCB0aGVpciBhcHBsaWNhdGlvbiBpbiBmcm9udFxub2YgdGhlIGF1ZGllbmNlIGFuZCB0aGUganVyeS4gVGhlaXIgd29yayB3aWxsIGJlIGV2YWx1YXRlZCBvbiB0aGUgYmFzaXMgb2YgdGhlaXJcbmlkZWEsIGNvZGUsIHRlY2gtc3RhY2sgYW5kIHByZXNlbnRhdGlvbiBxdWFsaXR5LjwvbGk+XG48L29sPlxuVGVhbXMgd2lsbCBiZSBnaXZlbiB0aW1lIHNsb3RzIGluIHdoaWNoIHRoZXkgY2FuIGRpc2N1c3MgdGhlaXIgcHJvamVjdHMgYW5kIGlzc3VlcyB3aXRoXG5tZW50b3JzIHdobyB3aWxsIGJlIGF2YWlsYWJsZSBkdXJpbmcgdGhlIGV2ZW50LiBUaGV5IGFyZSBhbGxvd2VkIHRvIGFzayBhbnkgcXVlc3Rpb25cbnJlbGV2YW50IHRvIHRoZSBwcm9qZWN0IHRvIHRoZSBtZW50b3JzIGFuZCB0aGV5IHdpbGwgdHJ5IHRoZWlyIGJlc3QgdG8gaGVscCB0aGUgc3R1ZGVudHMgb3V0XG53aXRoIHRoZWlyIGlzc3VlLlxuXG4gICAgICBgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJDYXB0dXJlIFRoZSBGbGFnXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2N0Zi5qcGdcIixcbiAgICAgIGRhdGU6IFwiMjl0aCBNYXJjaFwiLFxuICAgICAgY29udGVudDogYEEgc3BlY2lhbCBraW5kIG9mIGN5YmVyc2VjdXJpdHkgY29tcGV0aXRpb24gZGVzaWduZWQgdG8gY2hhbGxlbmdlIGl0cyBwYXJ0aWNpcGFudHMgdG8gc29sdmVcbmNvbXB1dGVyc2VjdXJpdHkgcHJvYmxlbXMgYW5kL29yIGNhcHR1cmUgYW5kIGRlZmVuZCBjb21wdXRlcnN5c3RlbXMuXG4gICAgICAgICAgICAgICAgICAgIGAsXG4gICAgICBsb25nQ29udGVudDogYFxuICAgICAgICAgICAgT3VyIENURiB3aWxsIGhhdmUgYmUgYW4gb25saW5lIGplb3BhcmR5IENURi4gVGhlIGR1cmF0aW9uIG9mIHRoZSBldmVudCB3aWxsIGJlIG9mIDI0LTQ4XG5ob3VycywgYW5kIHdlIGV4cGVjdCBhIHBhcnRpY2lwYXRpb24gb2YgNTAwKyB0ZWFtcywgd2l0aCBlYWNoIHRlYW0gY29uc2lzdGluZyBvZiA0XG5tZW1iZXJzLiBUaGUgQ1RGIHdpbGwgaGF2ZSAxNSBwcm9ibGVtcy48YnI+XG5JbiBhIGplb3BhcmR5IENURiBmb3JtYXQsIHRlYW1zIG11c3QgY29tcGxldGUgYXMgbWFueSBjeWJlcnNlY3VyaXR5IGNoYWxsZW5nZXMgYXNcbnRoZXkgY2FuIGZyb20gYSBnaXZlbiBzZWxlY3Rpb24sIHRlc3RpbmcgdGhlaXIgc2tpbGxzIGFuZCBrbm93bGVkZ2Ugb24gYSBkaXZlcnNlIHJhbmdlIG9mXG5jb21wdXRlciBzZWN1cml0eSBjYXRlZ29yaWVzIGluIG5vdmVsIGFuZCBjcmVhdGl2ZSB3YXlzLiBUeXBpY2FsIHRhc2tzIGFyZSByZWxhdGVkIHRvXG5uZXR3b3JraW5nLCBwcm9ncmFtbWluZywgYXBwbGljYXRpb25zLCBtb2JpbGUsIGZvcmVuc2ljcywgcmV2ZXJzZSBlbmdpbmVlcmluZyBhbmRcbmNyeXB0b2dyYXBoeS4gRm9yIGVhY2ggY2hhbGxlbmdlIGEgdGVhbSBjb21wbGV0ZXMsIGEgc3BlY2lmaWMgbnVtYmVyIG9mIHBvaW50cyBpc1xucmV3YXJkZWQuUGFydGljaXBhbnRzIG5lZWRzIHRvIHN1Ym1pdCB0aGUgY29ycmVjdCBmbGFnIChwaWVjZSBvZiB0ZXh0KSBpbiBvcmRlciB0byBzY29yZS5cbiAgICAgIGBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIk1hY2hpbmUgTGVhcm5pbmcgQ29kZXNwcmludFwiLFxuICAgICAgc3JjOiBcImltYWdlcy9tbC5qcGdcIixcbiAgICAgIGRhdGU6IFwiMjZ0aCBNYXJjaCBPbndhcmRzLi4uXCIsXG4gICAgICBjb250ZW50OiBg4oCcSW5mb3JtYXRpb24gaXMgdGhlIG9pbCBvZiB0aGUgMjFzdCBjZW50dXJ5LCBhbmQgYW5hbHl0aWNzIGlzIHRoZSBjb21idXN0aW9uIGVuZ2luZS7igJ1gLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgICAgICAgICAgQXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgYW5kIGFuYWx5c2lzIHdpbGwgc2hhcGUgb3VyIGZ1dHVyZSBtb3JlIHBvd2VyZnVsbHkgdGhhbiBhbnkgb3RoZXJcbmlubm92YXRpb24gdGhpcyBjZW50dXJ5LiBNYWNoaW5lIGxlYXJuaW5nLCBvbiB0aGUgb3RoZXIgaGFuZCwgaXMgYSBmb3JtIG9mIGFydGlmaWNpYWxcbmludGVsbGlnZW5jZSBpbiB3aGljaDxiPiB0aGUgY29tcHV0ZXIgbGVhcm5zIGZvciBpdHNlbGYgaG93IHRvIGNvbXBsZXRlIGEgdGFza+KAiy48L2I+PGJyPlxuRnJvbSBURC1HYW1tb24gYW5kIERlZXBCbHVlIHRvIFdhdHNvbiBhbmQgQWxleGEsIG1hY2hpbmVzIGFyZSBldmVudHVhbGx5XG5iZWNvbWluZyBhbiBpbnRlZ3JhbCBwYXJ0IG9mIG91ciBsaXZlcy48YnI+XG5UaGlzIGNvZGVzcHJpbnQgYWltcyB0byBnaXZlIHRoZSBwYXJ0aWNpcGFudHMgdGhlIHRocmlsbGluZyBleHBlcmllbmNlIG9mIHByb2dyYW1taW5nIGFcbmNvbXB1dGVyIHRvIGxlYXJuLjxicj5cblRoZSBjb250ZXN0IHdpbGwgYmUgYXMgZm9sbG93cyAtXG48b2w+XG48bGk+PGI+IFRyYWluaW5nIFBoYXNlPC9iPiAtIFlvdSB3aWxsIGJlIGdpdmVuIHRoZSB0cmFpbmluZyBkYXRhIDI0IEhycyBiZWZvcmUgdGhlIEV2YWx1YXRpb25cblBoYXNlLjwvbGk+XG5Zb3Ugd2lsbCB1c2UgdGhpcyBkYXRhIHRvIHRyYWluIHlvdXIgY29tcHV0ZXIsIGFzIHdlbGwgYXMgeW91IGNhbi5cbjxsaT48Yj4gRXZhbHVhdGlvbiBQaGFzZTwvYj4gLSBZb3VyIG1vZGVsIHdpbGwgYmUgZXZhbHVhdGVkIG9uIHlvdXIgYWNjdXJhY3kgb24gdGhlIHRlc3RcbmRhdGEgKHNlcGFyYXRlIGZyb20gdGhlIHRyYWluaW5nIGRhdGEpLiBTb21lIGV4dHJhIHBvaW50cyBtaWdodCBiZSBhd2FyZGVkXG5iYXNlZCBvbiB1bmlxdWVuZXNzIG9mIGFwcHJvYWNoLjwvbGk+XG48L29sPlxuV2UgYXJlIGV4cGVjdGluZyBhIHBhcnRpY2lwYXRpb24gb2YgNTAwKyBwZW9wbGUuXG4gICAgICBgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJDb2RlIE3DqWxhbmdlIElJSVwiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb2RlX21lbGFuZ2UuanBnXCIsXG4gICAgICBkYXRlOiBcIjMwdGggTWFyY2ggLSAxc3QgQXByaWxcIixcbiAgICAgIGNvbnRlbnQ6IGBBIGxvbmcgYWxnb3JpdGhtaWMgcHJvZ3JhbW1pbmdcbiAgICAgICAgICAgICAgICBjb250ZXN0IHRoYXQgd2lsbCBwdXNoIHlvdXIgYnJhaW4gdG9cbiAgICAgICAgICAgICAgICB0aGUgbGltaXQhXG4gICAgICAgICAgICAgICAgYCxcbiAgICAgIGxvbmdDb250ZW50OiBgXG4gICAgICAgICAgICBJdCBpcyBhbiBvcGVuIHRvIGFsbCBpbmRpdmlkdWFsXG5jb250ZXN0LiBXZSBhcmUgZ2V0dGluZyBhXG5wYXJ0aWNpcGF0aW9uIG9mIDUwMCsgc3R1ZGVudHMgZnJvbVxudGhlIHBhc3QgdHdvIHllYXJzIGFuZCBhcmVcbmV4cGVjdGluZyBtb3JlIHRoaXMgdGltZS5cblRoZSBjb250ZXN0IHdpbGwgc3BhbiBhY3Jvc3MgYVxuZHVyYXRpb24gb2YgPGI+NDgtNzIgaHJzPC9iPiDigIssIGhhdmluZyAxMC0xMlxucHJvYmxlbXMgd2l0aCB2YXJ5aW5nIGxldmVscyBvZlxuZGlmZmljdWx0eSBhbmQgaW1wbGVtZW50YXRpb25zLCB0YXJnZXRpbmcgZXZlcnlvbmUgd2l0aCBpbnRlcmVzdCBmb3IgcHJvZ3JhbW1pbmcuXG4gICAgICBgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJDb2RlIEdvbGYgNC4wXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvZGVfZ29sZi5qcGdcIixcbiAgICAgIGRhdGU6IFwiMjZ0aCBNYXJjaFwiLFxuICAgICAgY29udGVudDogYENvZGUgR29sZiBpcyBhIHVuaXF1ZSBjb21wZXRpdGl2ZSBjb2RpbmcgY2hhbGxlbmdlIGluIHdoaWNoIOKAnExlc3MgaXMgTW9yZeKAi1wi4oCLLmAsXG4gICAgICBsb25nQ29udGVudDogYFxuICAgICAgICAgICAgVGhlIHNjb3JpbmcgaXMgYmFzZWQgb24gdGhlXG5jb3JyZWN0bmVzcyBvZiB0aGUgY29kZSBhcyB3ZWxsIGFzXG50aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaW4gaXQuXG5TaG9ydGVyIGNvZGVzIGZldGNoIG1vcmUgcG9pbnRzLlxuSG93ZXZlciwgVGhlIGNvZGUgbXVzdCBvdXRwdXRcbnRoZSBjb3JyZWN0IGFuc3dlciBmb3IgaXQgdG8gYmVcbmNvbnNpZGVyZWQgZm9yIHBvaW50cy4gUGFydGljaXBhbnRzXG53aWxsIGJlIHRlc3RlZCBvbiB0aGVpciBsb2dpY2FsIGFuZFxuYWxnb3JpdGhtaWMgc2tpbGxzIGFzIHdlbGwgYXMgdGhlaXJcbmFwdGl0dWRlIGZvciBwcm9ncmFtbWluZ1xubGFuZ3VhZ2VzLiBQaWNraW5nIHRoZSByaWdodCBsYW5ndWFnZSBhbmQgdGhlIHJpZ2h0IGxpYnJhcmllcyBmb3IgZWFjaCB0YXNrIGlzIGNydWNpYWwgaW5cbnBlcmZvcm1pbmcgd2VsbCBhbmQgY29taW5nIG91dCBhdCB0aGUgdG9wLlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiU3VycHJpc2UgTGFuZ3VhZ2UgSVZcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvc3VycGlzZV9sYW5ndWFnZS5qcGdcIixcbiAgICAgIGRhdGU6IFwiMjh0aCBNYXJjaFwiLFxuICAgICAgY29udGVudDogYOKAmENveiB3aG8gZG9lc27igJl0IGxpa2Ugc3VycHJpc2VzP2AsXG4gICAgICBsb25nQ29udGVudDogYFxuICAgICAgICAgICAgQXJlIHlvdSByZWFkeSBmb3Igc29tZXRoaW5nIGNoYWxsZW5naW5nP1xuU29tZXRoaW5nIGFkdmVudHVyb3VzPyBXZSBhcmVcbmNvbmR1Y3RpbmcsIHRoZSBTdXJwcmlzZSBMYW5ndWFnZVxuUHJvZ3JhbW1pbmcgQ29udGVzdC4gSGVyZSwgdW5saWtlIGFcbnJlZ3VsYXIgcHJvZ3JhbW1pbmcgY29udGVzdCwgeW91IHdpbGxcbm9ubHkgYmUgYWJsZSB0byB1c2Ugb25lIGxhbmd1YWdlLCB3aGljaFxud2lsbCBiZSBhbm5vdW5jZWQgMTUgbWludXRlcyBiZWZvcmUgdGhlXG5jb250ZXN0LiBTbyBiZSByZWFkeSB0byBjb21wZXRlLCB5b3Vcbm1pZ2h0IGV2ZW4gbGVhcm4gYSB3aG9sZSBuZXcgbGFuZ3VhZ2VcbmFsb25nIHRoZSB3YXkhIFdlIHdpbGwgYmUgYW5ub3VuY2luZyBhXG5cbmxpc3Qgb2YgMTAgbGFuZ3VhZ2VzIDMgZGF5cyBiZWZvcmUgdGhlIGNvbnRlc3QuXG4gICAgICBgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJIYWNrIHRoZSBDb2RlXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2hhY2tfdGhlX2NvZGUuanBnXCIsXG4gICAgICBkYXRlOiBcIjJuZCBBcHJpbFwiLFxuICAgICAgY29udGVudDogYEFyZSB5b3UgYSBtYXN0ZXIgZGVidWdnZXI/IERvIHlvdSBsb3ZlIHNxdWFzaGluZyBidWdzPyBJcyBzbWFzaGluZyB5b3VyIGhlYWQgb24gYVxud2FsbCBhbmQgdGVhcmluZyBvZmYgeW91ciBoYWlyIHdoYXQgeW91IGxvdmU/IElmIHllcywgdGhlbiB0aGlzIGNvbnRlc3QgaXMgZGVmaW5pdGVseSBmb3IgeW91IWAsXG4gICAgICBsb25nQ29udGVudDogYFxuICAgICAgICAgICBQcmVzZW50aW5nIEhhY2sgdGhlIGNvZGUhIEEgMyBob3VyIGNvbnRlc3Qgd2hlcmUgeW914oCZbGwgYmUgcHJvdmlkZWQgcHJvYmxlbXMsXG5hbG9uZ3NpZGUgaXTigJlzIHNvbHV0aW9uLCBhbmQgeW914oCZbGwgaGF2ZSB0byBmaW5kIGEgZmFpbGluZyBjYXNlIG9uIHRoZSBzb2x1dGlvbi4gWW91IHdpbGwgYmVcbmdpdmVuIDEwIHNvbHV0aW9ucyAod2hpY2ggY2FuIGJlIGluIGFueSBsYW5ndWFnZSkgYWxvbmcgd2l0aCB0aGVpciByZXNwZWN0aXZlIHByb2JsZW1cbmRlc2NyaXB0aW9ucy4gSnVzdCBvdXRwdXQgYW55IHRlc3QgY2FzZSB3aGljaCB3aWxsIGZhaWwgdGhlIGNvZGUuIFNvLCBhcmUgeW91IHJlYWR5Pzxicj5cblNjb3JpbmcgaXMgYmFzZWQgb24gbnVtYmVyIG9mIHByb2JsZW1zIHN1Y2Nlc3NmdWxseSBoYWNrZWQuIFRpZXMgd2lsbCBiZSBicm9rZW4gb25cbnRoZSBiYXNpcyBvZiB0b3RhbCB0aW1lIHRha2VuIGluIGhhY2tzLlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiRm9vbCBZb3UhXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2Zvb2xfeW91LmpwZ1wiLFxuICAgICAgZGF0ZTogXCI0dGggQXByaWxcIixcbiAgICAgIGNvbnRlbnQ6IGBGb29sIFlvdSBpcyBhIHByb2dyYW1taW5nIGV2ZW50IHdoaWNoIGlzZmFyIGZyb20gdGhlIHVzdWFsIOKAmHNlcmlvdXPigJkgcHJvZ3JhbW1pbmcgY29udGVzdHMuYCxcbiAgICAgIGxvbmdDb250ZW50OiBgXG4gICAgICAgICAgIFRoZSB1bmlxdWUgYXNwZWN0IG9mIHRoaXMgY29udGVzdCB3aGljaCBtYWtlcyBpdCBhbXVzaW5nIGlzIHRoYXQgaXQgdGVzdHMgdGhlIGNvbnRlc3RhbnRzXG5kZWNpcGhlcmluZyBza2lsbHMgYW5kIHJlcXVpcmVzIHRoZW0gdG8gdGhpbmsgb3V0LW9mLXRoZS1ib3guIFRoZSBwcm9ibGVtIHN0YXRlbWVudHMgaW5cbnRoaXMgY29udGVzdCB3aWxsIGJlIGZyYW1lZCBpbiBzdWNoIGEgd2F5IHRoYXQgdGhleSBhcmUgdHJpY2t5IGFuZCBtaXNkaXJlY3QgdGhlXG5jb250ZXN0YW50LiBEZWNvZGluZyB0aGUgcXVlc3Rpb25zIG1pZ2h0IHByb3ZlIHRvIGJlIG1vcmUgY2hhbGxlbmdpbmcgdGhhbiBzb2x2aW5nXG50aGVtLiBQYXJ0aWNpcGFudHMgbmVlZCB0byBrbm93IGJhc2ljIHByb2dyYW1taW5nIHNraWxscywgbG9naWMgYW5kIHRoZSBtZW50YWwgYWJpbGl0eSB0b1xuc3BvdCBjbHVlcyBhbmQgaGludHMgaGlkZGVuIGluIHRoZSBxdWVzdGlvbnMuXG4gICAgICBgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJhbC1LaHdhcml6bWkgMi4wXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2FsX2tod2FyaXptaS5qcGdcIixcbiAgICAgIGRhdGU6IFwiNnRoIEFwcmlsXCIsXG4gICAgICBjb250ZW50OiBgQmFzZWQgb24gdGhlIG5vcm1zIG9mIFByb2plY3QgRXVsZXIsIHdlIGludml0ZSB5b3UgdG8gdW50YW5nbGUgdGhlIGxhYnlyaW50aGluZSBvZlxubWF0aGVtYXRpY3MuYCxcbiAgICAgIGxvbmdDb250ZW50OiBgXG4gICAgICAgICAgIFRoaXMgaXMgYSBzcGVjaWFsIHByb2dyYW1taW5nIGNvbnRlc3Qgd2l0aCBwcm9ibGVtcyBtYWlubHkgZm9jdXNzaW5nIG9uIHRoZVxubWF0aGVtYXRpY2FsIGNvbmNlcHRzIHJhdGhlciB0aGFuIGRhdGEgc3RydWN0dXJlcyBhbmQgYWxnb3JpdGhtcy4gSXQgd2lsbCBiZSBhIHNob3J0XG5kdXJhdGlvbiBwcm9ncmFtbWluZyBjb250ZXN0LiBTb21lIG9mIHRoZSB0b3BpY3MgdGhhdCB3aWxsIGJlIGZvY3Vzc2VkIGFyZSwgTnVtYmVyXG50aGVvcnksIE1vZHVsYXIgYXJpdGhtZXRpYywgQ29tcHV0YXRpb25hbCBHZW9tZXRyeSwgQ29tYmluYXRvcmljcywgUHJvYmFiaWxpdHksIGV0Yy5cbiAgICAgIGBcbiAgICB9LFxuICAgIF0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBtb2RhbChpKSB7XG4gICAgICAkKFwiI21vZGFsXCIgKyBpKS5tb2RhbCh7XG4gICAgICAgIGZhZGVEdXJhdGlvbjogMzAwXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pXG5cbnZhciBmb290ZXIgPSBuZXcgVnVlKHtcbiAgZWw6ICcjZm9vdGVyJyxcbiAgZGF0YToge1xuICAgIHN1YnRpdGxlOiAnVGhlIFByb2dyYW1taW5nIENsdWIsIElJVCBJbmRvcmUnLFxuICAgIGxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdpY29uIGZhLWxpbmsnLFxuICAgICAgICB0YWc6ICdUaGUgUHJvZ3JhbW1pbmcgQ2x1YicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vcGNsdWJpaXRpLmdpdGh1Yi5pby8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdpY29uIGZhLWZhY2Vib29rJyxcbiAgICAgICAgdGFnOiAnRmFjZWJvb2snLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BjbHViaWl0aS8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdpY29uIGZhLWdpdGh1YicsXG4gICAgICAgIHRhZzogJ0dpdGh1YicsXG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vcGNsdWJpaXRpJyxcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdpY29uIGZhLWVudmVsb3BlJyxcbiAgICAgICAgdGFnOiAnRW1haWwnLFxuICAgICAgICBsaW5rOiAnbWFpbHRvOnByb2djbHViQGlpdGkuYWMuaW4nLFxuICAgICAgfSxcbiAgICBdXG4gIH1cbn0pXG5cbnZhciBzcG9uc29ycyA9IG5ldyBWdWUoe1xuICBlbDogJyNzcG9uc29ycycsXG4gIGRhdGE6IHtcbiAgICBzcG9uc29yczogW1xuICAgICAge1xuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9oYWNrZXJlYXJ0aC5jb20nLFxuICAgICAgICBsb2dvOiBcImh0dHBzOi8vaGFja2VyZWFydGguZ2xvYmFsLnNzbC5mYXN0bHkubmV0L3N0YXRpYy9oYWNrZXJlYXJ0aC9pbWFnZXMvbG9nby9IRV9sb2dvLnN2Z1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9jb2RlY2hlZi5jb20nLFxuICAgICAgICBsb2dvOiBcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9jb2RlY2hlZl9zaGFyZWQvc2l0ZXMvYWxsL3RoZW1lcy9hYmVzc2l2ZS9sb2dvLnBuZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaW5rOiAnaHR0cDovL2NvZGVmb3JjZXMuY29tJyxcbiAgICAgICAgbG9nbzogXCJodHRwOi8vc3QuY29kZWZvcmNlcy5jb20vcy8yNDE1MS9pbWFnZXMvY29kZWZvcmNlcy1sb2dvLXdpdGgtdGVsZWdyYW0ucG5nXCJcbiAgICAgIH0sIHtcbiAgICAgICAgbGluazogJ2h0dHBzOi8vaGFja2VycmFuay5jb20nLFxuICAgICAgICBsb2dvOiBcImh0dHBzOi8vaHJjZG4ubmV0L2hhY2tlcnJhbmsvYXNzZXRzL2JyYW5kL2hyX2xvZ29fbmV3X3dvcmQtNTJkYjRkY2RjNzZiMzFiZTg2NDU2Yzc3YjU1YTczOTYucG5nXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbn0pIl0sImZpbGUiOiJpbmRleERhdGEuanMifQ==
