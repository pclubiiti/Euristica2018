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
      src: "images/compressed/dbz.png",
      date: "To be announced",
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
      src: "images/compressed/hackathon.png",
      date: "23th - 24th March",
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
      src: "images/compressed/ctf.png",
      date: "7th-8th April",
      contacts: [{ "name": "Bhor Verma", "mob": "8109209652" }, { "name": " Kunal Gupta", "mob": "9971918360" }],
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
      src: "images/compressed/ml.png",
      date: "25th March - 8th April",
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
      src: "images/compressed/code_melange.png",
      date: "30th March - 1st April",
      time: "21:00",
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
      src: "images/compressed/code_golf.png",
      date: "26th March",
      time: "21:00-23:59",
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
      src: "images/compressed/surprise_language.png",
      date: "28th March",
      time: "21:00-23:59",
      contacts: [{ "name": "Keshav Goyal", "mob": "9417951957" }, { "name": " Dhruv Chadha", "mob": "9522583500" }],
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
      src: "images/compressed/hack_the_code.png",
      date: "3rd April",
      time: " 21:00-23:59",
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
      src: "images/compressed/fool_you.png",
      date: "1st April",
      time: "15:00-18:00",
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
      title: "SOH CAH TOA",
      src: "images/compressed/soh_cah_toa.png",
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
        logo: "/images/cf.png"
      }, {
        link: 'https://hackerrank.com',
        logo: "https://hrcdn.net/hackerrank/assets/brand/hr_logo_new_word-52db4dcdc76b31be86456c77b55a7396.png"
      }
    ]
  }
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleERhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IG5ldyBWdWUoe1xuICBlbDogJyNoZWFkZXInLFxuICBkYXRhOiB7XG4gICAgdGl0bGU6ICdFdXJpc3RpY2EnLFxuICAgIHN1YnRpdGxlOiAnSW5kaWFuIEluc3RpdHV0ZSBvZiBUZWNobm9sb2d5IEluZG9yZScsXG4gIH1cbn0pXG5cbnZhciBpbnRybyA9IG5ldyBWdWUoe1xuICBlbDogJyNpbnRybycsXG4gIGRhdGE6IHtcbiAgICBzdWJ0aXRsZTogYFRoaXMgZ2VuZXJhdGlvbiBoYXMgc2VlbiBncmVhdCBwcm9ncmFtbWVycyBsaWtlIExpbnVzIFRvcnZhbGRzIGFuZCBKZWZmIERlYW4uXG5UYWxlbnRlZCBhbmQgaGFyZHdvcmtpbmcgcHJvZ3JhbW1lcnMgYXJlIHJpc2luZyBhbGwgYXJvdW5kIHRoZSBnbG9iZS4gVG8gZm9zdGVyIHRoaXNcbiAgICAgICAgYW1hemluZyBza2lsbCBhbmQgY3VsdHVyZSwgdGhlIERlcGFydG1lbnQgb2YgQ29tcHV0ZXIgU2NpZW5jZSBhbmQgRW5naW5lZXJpbmcsIElJVFxuICAgICAgICBJbmRvcmUgcHJlc2VudHMgeW91IHdpdGggLSBFdXJpc3RpY2HigJkxOCwgdGhlIGFubnVhbCBjb2RpbmcgZmVzdGl2YWwgb2Ygb3VyIGNvbGxlZ2UuXG4gICAgICAgIFdlIHdpbGwgYmUgY29uZHVjdGluZyBhIHZhcmlldHkgb2YgZXZlbnRzIHJhbmdpbmcgZnJvbSBDb21wZXRpdGl2ZSBQcm9ncmFtbWluZyBhbmRcbiAgICAgICAgQXBwbGljYXRpb24gRGV2ZWxvcG1lbnQgdG8gQ3liZXIgU2VjdXJpdHkgYW5kIE1hY2hpbmUgTGVhcm5pbmcuXG4gICAgICAgIGAsXG4gICAgbGluazogXCJodHRwczovL2dvby5nbC9mb3Jtcy82WHZaWDFvZWQ1dThsZnh5MVwiXG4gIH1cbn0pXG5cbnZhciBldmVudHMgPSBuZXcgVnVlKHtcbiAgZWw6ICcjZXZlbnRzJyxcbiAgZGF0YToge1xuICAgIGxpc3Q6IFt7XG4gICAgICB0aXRsZTogXCJEaXZpZGUgQnkgWmVyb1wiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL2Riei5wbmdcIixcbiAgICAgIGRhdGU6IFwiVG8gYmUgYW5ub3VuY2VkXCIsXG4gICAgICBjb250ZW50OiBgXG4gICAgICAgICAgICAgSXQgaXMgYSBzaG9ydC1kdXJhdGlvbiAoMi41IGhvdXJzKVxuaW5kaXZpZHVhbCBjb21wZXRpdGl2ZSBwcm9ncmFtbWluZ1xuY29udGVzdC5gLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgICAgICAgICAgSXQgaXMgYSBzaG9ydC1kdXJhdGlvbiAoMi41IGhvdXJzKVxuaW5kaXZpZHVhbCBjb21wZXRpdGl2ZSBwcm9ncmFtbWluZ1xuY29udGVzdC4gVGhlIGNvbnRlc3Qgd2lsbCBjb25zaXN0IG9mXG43LTggcHJvYmxlbXMgYW5kIGlzIG1lYW50IHRvIHRlc3QgdGhlIGFsZ29yaXRobWljIGFuZCBpbXBsZW1lbnRhdGlvbiBza2lsbHMgb2YgdGhlIGNvbnRlc3RhbnRzXG5hbG9uZyB3aXRoIHRoZWlyIHNwZWVkIGFuZCBhY2N1cmFjeSBvZiBwcm9ibGVtIHNvbHZpbmcuIEl0IGlzIG91ciBmbGFnc2hpcCBldmVudCB3aGljaCB3ZSBoYXZlXG5iZWVuIG9yZ2FuaXNpbmcgZm9yIDYgeWVhcnMgbm93LiBXZSBhcmUgZXhwZWN0aW5nIGEgcGFydGljaXBhdGlvbiBvZiA4MDAwKyBjYW5kaWRhdGVzIGZyb20gYWxsXG5vdmVyIHRoZSB3b3JsZC5cbiAgICAgIGBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkhhY2thdGhvblwiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL2hhY2thdGhvbi5wbmdcIixcbiAgICAgIGRhdGU6IFwiMjN0aCAtIDI0dGggTWFyY2hcIixcbiAgICAgIGNvbnRlbnQ6IGBIYWNrYXRob24gaXMgYSB0ZWFtIGRldmVsb3BtZW50IGV2ZW50LiBUaGUgZHVyYXRpb24gd2lsbCBiZSAyNCB0byA0OCBob3Vycy5gLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgICAgICAgICAgIEhhY2thdGhvbiBpcyBhIHRlYW0gZGV2ZWxvcG1lbnQgZXZlbnQuIFRoZSBkdXJhdGlvbiB3aWxsIGJlIDI0IHRvIDQ4IGhvdXJzLiBNdWx0aXBsZVxucHJvYmxlbSBzdGF0ZW1lbnRzIHdpbGwgYmUgcHJvdmlkZWQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgZXZlbnQuIFRoZSBjb250ZXN0YW50cyB3aWxsXG5nZXQgdGhlIGVudGlyZSB0aW1lIGluIHdoaWNoIHRoZXkgaGF2ZSB0byBzZWxlY3Qgb25lIG9mIHRoZSBwcm9ibGVtIHN0YXRlbWVudHMsIGZpbmFsaXNlXG50aGUgdGVjaG5vbG9naWNhbCBzdGFjayBhbmQgd29yayBvbiB0aGUgaW1wbGVtZW50YXRpb24uIFRoZSBjb250ZXN0IHdpbGwgdGVzdCBjcmVhdGl2ZVxudGhpbmtpbmcsIGtub3dsZWRnZSBhYm91dCBsYXRlc3QgdGVjaG5vbG9naWVzLCB0aGUgcGFjZSBvZiBsZWFybmluZywgY29kaW5nIHNraWxsIGFzIHdlbGxcbmFzIHRpbWUgbWFuYWdlbWVudCBza2lsbHMuXG5UaGUgY29udGVzdGFudHMgd2lsbCBiZSBwcm92aWRlZCB3aXRoIGludGVybmV0IGFjY2VzcyBzbyBhcyB0byBsZWFybiBhbmQgaW1wbGVtZW50IHRoZWlyXG5hcHBsaWNhdGlvbiB1c2luZyBhbnkgdGVjaG5vbG9neSB0aGV5IHdpc2ggdG8gdXNlLiBUaGUgbWFpbiBwYXJ0IG9mIHRoZSBjb250ZXN0IHdpbGwgYmVcbmNvbWluZyB1cCB3aXRoIGlubm92YXRpdmUgc29sdXRpb25zIGZvciB0aGUgZ2l2ZW4gcHJvYmxlbXMuIFVzYWdlIG9mIG9wZW4gc291cmNlXG5tb2R1bGVzIHdpbGwgYmUgYWxsb3dlZCAod2l0aCBwcm9wZXIgYXR0cmlidXRpb24pLlxuVGhlIHNjb3Jpbmcgd2lsbCBiZSBiYXNlZCBvbiB0aGUgcXVhbGl0eSBhbmQgYXBwbGljYWJpbGl0eSBvZiBlbmQgcHJvZHVjdC4gUHJvZHVjdHMgd2l0aFxuZnV0dXJlIGRldmVsb3BtZW50IHNjb3BlIHdpbGwgYWxzbyBiZSBjb25zaWRlcmVkLlxuVGltZWxpbmUgZm9yIHRoZSBldmVudCBzaGFsbCBiZSBhcyBmb2xsb3dzOjxicj5cbjxvbD5cbjxsaT4gPGI+IElkZWEgR2VuZXJhdGlvbiBQaGFzZeKAizwvYj46IFRlYW1zIGFyZSBhc2tlZCB0byBzdWJtaXQgdGhlaXIgZGV0YWlsZWQgaWRlYXMuIFRoZXlcbm5lZWQgdG8gbWVudGlvbiBob3cgdGhlaXIgaWRlYXMgYXJlIGJldHRlciB0aGFuIHRoZSBjdXJyZW50IGF2YWlsYWJsZSBzeXN0ZW1zLjwvbGk+XG48bGk+IDxiPiBEZXZlbG9wbWVudCBQaGFzZeKAizwvYj46IFRoZSB0ZWFtcyB3aWxsIGNvZGUgdGhlIGFwcGxpY2F0aW9uLiBUaGlzIHdpbGwgYmUgdGhlIG1ham9yXG5wYXJ0IG9mIHRoZSBldmVudCwgdGhlIHRlYW1zIHdpbGwgaGF2ZSB0byBpbXBsZW1lbnQgdGhlIGNvbXBsZXRlIGFwcGxpY2F0aW9uIGluXG50aGlzIHRpbWUgcGVyaW9kLjwvbGk+XG48bGk+IDxiPiBQcmVzZW50YXRpb24gUGhhc2U8L2I+OiBUaGUgdGVhbXMgd2lsbCBwcmVzZW50IHRoZWlyIHByb2plY3RzIHRvIHRoZSBqdXJ5LiBJZiB0aGV5XG5jbGVhciB0aGUgcHJlbGltaW5hcnkgcm91bmQgdGhleSB3aWxsIGJlIGFza2VkIHRvIHByZXNlbnQgdGhlaXIgYXBwbGljYXRpb24gaW4gZnJvbnRcbm9mIHRoZSBhdWRpZW5jZSBhbmQgdGhlIGp1cnkuIFRoZWlyIHdvcmsgd2lsbCBiZSBldmFsdWF0ZWQgb24gdGhlIGJhc2lzIG9mIHRoZWlyXG5pZGVhLCBjb2RlLCB0ZWNoLXN0YWNrIGFuZCBwcmVzZW50YXRpb24gcXVhbGl0eS48L2xpPlxuPC9vbD5cblRlYW1zIHdpbGwgYmUgZ2l2ZW4gdGltZSBzbG90cyBpbiB3aGljaCB0aGV5IGNhbiBkaXNjdXNzIHRoZWlyIHByb2plY3RzIGFuZCBpc3N1ZXMgd2l0aFxubWVudG9ycyB3aG8gd2lsbCBiZSBhdmFpbGFibGUgZHVyaW5nIHRoZSBldmVudC4gVGhleSBhcmUgYWxsb3dlZCB0byBhc2sgYW55IHF1ZXN0aW9uXG5yZWxldmFudCB0byB0aGUgcHJvamVjdCB0byB0aGUgbWVudG9ycyBhbmQgdGhleSB3aWxsIHRyeSB0aGVpciBiZXN0IHRvIGhlbHAgdGhlIHN0dWRlbnRzIG91dFxud2l0aCB0aGVpciBpc3N1ZS5cblxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQ2FwdHVyZSBUaGUgRmxhZ1wiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL2N0Zi5wbmdcIixcbiAgICAgIGRhdGU6IFwiN3RoLTh0aCBBcHJpbFwiLFxuICAgICAgY29udGFjdHM6IFt7IFwibmFtZVwiOiBcIkJob3IgVmVybWFcIiwgXCJtb2JcIjogXCI4MTA5MjA5NjUyXCIgfSwgeyBcIm5hbWVcIjogXCIgS3VuYWwgR3VwdGFcIiwgXCJtb2JcIjogXCI5OTcxOTE4MzYwXCIgfV0sXG4gICAgICBjb250ZW50OiBgQSBzcGVjaWFsIGtpbmQgb2YgY3liZXJzZWN1cml0eSBjb21wZXRpdGlvbiBkZXNpZ25lZCB0byBjaGFsbGVuZ2UgaXRzIHBhcnRpY2lwYW50cyB0byBzb2x2ZVxuY29tcHV0ZXJzZWN1cml0eSBwcm9ibGVtcyBhbmQvb3IgY2FwdHVyZSBhbmQgZGVmZW5kIGNvbXB1dGVyc3lzdGVtcy5cbiAgICAgICAgICAgICAgICAgICAgYCxcbiAgICAgIGxvbmdDb250ZW50OiBgXG4gICAgICAgICAgICBPdXIgQ1RGIHdpbGwgaGF2ZSBiZSBhbiBvbmxpbmUgamVvcGFyZHkgQ1RGLiBUaGUgZHVyYXRpb24gb2YgdGhlIGV2ZW50IHdpbGwgYmUgb2YgMjQtNDhcbmhvdXJzLCBhbmQgd2UgZXhwZWN0IGEgcGFydGljaXBhdGlvbiBvZiA1MDArIHRlYW1zLCB3aXRoIGVhY2ggdGVhbSBjb25zaXN0aW5nIG9mIDRcbm1lbWJlcnMuIFRoZSBDVEYgd2lsbCBoYXZlIDE1IHByb2JsZW1zLjxicj5cbkluIGEgamVvcGFyZHkgQ1RGIGZvcm1hdCwgdGVhbXMgbXVzdCBjb21wbGV0ZSBhcyBtYW55IGN5YmVyc2VjdXJpdHkgY2hhbGxlbmdlcyBhc1xudGhleSBjYW4gZnJvbSBhIGdpdmVuIHNlbGVjdGlvbiwgdGVzdGluZyB0aGVpciBza2lsbHMgYW5kIGtub3dsZWRnZSBvbiBhIGRpdmVyc2UgcmFuZ2Ugb2ZcbmNvbXB1dGVyIHNlY3VyaXR5IGNhdGVnb3JpZXMgaW4gbm92ZWwgYW5kIGNyZWF0aXZlIHdheXMuIFR5cGljYWwgdGFza3MgYXJlIHJlbGF0ZWQgdG9cbm5ldHdvcmtpbmcsIHByb2dyYW1taW5nLCBhcHBsaWNhdGlvbnMsIG1vYmlsZSwgZm9yZW5zaWNzLCByZXZlcnNlIGVuZ2luZWVyaW5nIGFuZFxuY3J5cHRvZ3JhcGh5LiBGb3IgZWFjaCBjaGFsbGVuZ2UgYSB0ZWFtIGNvbXBsZXRlcywgYSBzcGVjaWZpYyBudW1iZXIgb2YgcG9pbnRzIGlzXG5yZXdhcmRlZC5QYXJ0aWNpcGFudHMgbmVlZHMgdG8gc3VibWl0IHRoZSBjb3JyZWN0IGZsYWcgKHBpZWNlIG9mIHRleHQpIGluIG9yZGVyIHRvIHNjb3JlLlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiTWFjaGluZSBMZWFybmluZyBDb2Rlc3ByaW50XCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvbWwucG5nXCIsXG4gICAgICBkYXRlOiBcIjI1dGggTWFyY2ggLSA4dGggQXByaWxcIixcbiAgICAgIGNvbnRlbnQ6IGDigJxJbmZvcm1hdGlvbiBpcyB0aGUgb2lsIG9mIHRoZSAyMXN0IGNlbnR1cnksIGFuZCBhbmFseXRpY3MgaXMgdGhlIGNvbWJ1c3Rpb24gZW5naW5lLuKAnWAsXG4gICAgICBsb25nQ29udGVudDogYFxuICAgICAgICAgICBBcnRpZmljaWFsIGludGVsbGlnZW5jZSBhbmQgYW5hbHlzaXMgd2lsbCBzaGFwZSBvdXIgZnV0dXJlIG1vcmUgcG93ZXJmdWxseSB0aGFuIGFueSBvdGhlclxuaW5ub3ZhdGlvbiB0aGlzIGNlbnR1cnkuIE1hY2hpbmUgbGVhcm5pbmcsIG9uIHRoZSBvdGhlciBoYW5kLCBpcyBhIGZvcm0gb2YgYXJ0aWZpY2lhbFxuaW50ZWxsaWdlbmNlIGluIHdoaWNoPGI+IHRoZSBjb21wdXRlciBsZWFybnMgZm9yIGl0c2VsZiBob3cgdG8gY29tcGxldGUgYSB0YXNr4oCLLjwvYj48YnI+XG5Gcm9tIFRELUdhbW1vbiBhbmQgRGVlcEJsdWUgdG8gV2F0c29uIGFuZCBBbGV4YSwgbWFjaGluZXMgYXJlIGV2ZW50dWFsbHlcbmJlY29taW5nIGFuIGludGVncmFsIHBhcnQgb2Ygb3VyIGxpdmVzLjxicj5cblRoaXMgY29kZXNwcmludCBhaW1zIHRvIGdpdmUgdGhlIHBhcnRpY2lwYW50cyB0aGUgdGhyaWxsaW5nIGV4cGVyaWVuY2Ugb2YgcHJvZ3JhbW1pbmcgYVxuY29tcHV0ZXIgdG8gbGVhcm4uPGJyPlxuVGhlIGNvbnRlc3Qgd2lsbCBiZSBhcyBmb2xsb3dzIC1cbjxvbD5cbjxsaT48Yj4gVHJhaW5pbmcgUGhhc2U8L2I+IC0gWW91IHdpbGwgYmUgZ2l2ZW4gdGhlIHRyYWluaW5nIGRhdGEgMjQgSHJzIGJlZm9yZSB0aGUgRXZhbHVhdGlvblxuUGhhc2UuPC9saT5cbllvdSB3aWxsIHVzZSB0aGlzIGRhdGEgdG8gdHJhaW4geW91ciBjb21wdXRlciwgYXMgd2VsbCBhcyB5b3UgY2FuLlxuPGxpPjxiPiBFdmFsdWF0aW9uIFBoYXNlPC9iPiAtIFlvdXIgbW9kZWwgd2lsbCBiZSBldmFsdWF0ZWQgb24geW91ciBhY2N1cmFjeSBvbiB0aGUgdGVzdFxuZGF0YSAoc2VwYXJhdGUgZnJvbSB0aGUgdHJhaW5pbmcgZGF0YSkuIFNvbWUgZXh0cmEgcG9pbnRzIG1pZ2h0IGJlIGF3YXJkZWRcbmJhc2VkIG9uIHVuaXF1ZW5lc3Mgb2YgYXBwcm9hY2guPC9saT5cbjwvb2w+XG5XZSBhcmUgZXhwZWN0aW5nIGEgcGFydGljaXBhdGlvbiBvZiA1MDArIHBlb3BsZS5cbiAgICAgIGBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNvZGUgTcOpbGFuZ2UgSUlJXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvY29kZV9tZWxhbmdlLnBuZ1wiLFxuICAgICAgZGF0ZTogXCIzMHRoIE1hcmNoIC0gMXN0IEFwcmlsXCIsXG4gICAgICB0aW1lOiBcIjIxOjAwXCIsXG4gICAgICBjb250ZW50OiBgQSBsb25nIGFsZ29yaXRobWljIHByb2dyYW1taW5nXG4gICAgICAgICAgICAgICAgY29udGVzdCB0aGF0IHdpbGwgcHVzaCB5b3VyIGJyYWluIHRvXG4gICAgICAgICAgICAgICAgdGhlIGxpbWl0IVxuICAgICAgICAgICAgICAgIGAsXG4gICAgICBsb25nQ29udGVudDogYFxuICAgICAgICAgICAgSXQgaXMgYW4gb3BlbiB0byBhbGwgaW5kaXZpZHVhbFxuY29udGVzdC4gV2UgYXJlIGdldHRpbmcgYVxucGFydGljaXBhdGlvbiBvZiA1MDArIHN0dWRlbnRzIGZyb21cbnRoZSBwYXN0IHR3byB5ZWFycyBhbmQgYXJlXG5leHBlY3RpbmcgbW9yZSB0aGlzIHRpbWUuXG5UaGUgY29udGVzdCB3aWxsIHNwYW4gYWNyb3NzIGFcbmR1cmF0aW9uIG9mIDxiPjQ4LTcyIGhyczwvYj4g4oCLLCBoYXZpbmcgMTAtMTJcbnByb2JsZW1zIHdpdGggdmFyeWluZyBsZXZlbHMgb2ZcbmRpZmZpY3VsdHkgYW5kIGltcGxlbWVudGF0aW9ucywgdGFyZ2V0aW5nIGV2ZXJ5b25lIHdpdGggaW50ZXJlc3QgZm9yIHByb2dyYW1taW5nLlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQ29kZSBHb2xmIDQuMFwiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL2NvZGVfZ29sZi5wbmdcIixcbiAgICAgIGRhdGU6IFwiMjZ0aCBNYXJjaFwiLFxuICAgICAgdGltZTogXCIyMTowMC0yMzo1OVwiLFxuICAgICAgY29udGVudDogYENvZGUgR29sZiBpcyBhIHVuaXF1ZSBjb21wZXRpdGl2ZSBjb2RpbmcgY2hhbGxlbmdlIGluIHdoaWNoIOKAnExlc3MgaXMgTW9yZeKAi1wi4oCLLmAsXG4gICAgICBsb25nQ29udGVudDogYFxuICAgICAgICAgICAgVGhlIHNjb3JpbmcgaXMgYmFzZWQgb24gdGhlXG5jb3JyZWN0bmVzcyBvZiB0aGUgY29kZSBhcyB3ZWxsIGFzXG50aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaW4gaXQuXG5TaG9ydGVyIGNvZGVzIGZldGNoIG1vcmUgcG9pbnRzLlxuSG93ZXZlciwgVGhlIGNvZGUgbXVzdCBvdXRwdXRcbnRoZSBjb3JyZWN0IGFuc3dlciBmb3IgaXQgdG8gYmVcbmNvbnNpZGVyZWQgZm9yIHBvaW50cy4gUGFydGljaXBhbnRzXG53aWxsIGJlIHRlc3RlZCBvbiB0aGVpciBsb2dpY2FsIGFuZFxuYWxnb3JpdGhtaWMgc2tpbGxzIGFzIHdlbGwgYXMgdGhlaXJcbmFwdGl0dWRlIGZvciBwcm9ncmFtbWluZ1xubGFuZ3VhZ2VzLiBQaWNraW5nIHRoZSByaWdodCBsYW5ndWFnZSBhbmQgdGhlIHJpZ2h0IGxpYnJhcmllcyBmb3IgZWFjaCB0YXNrIGlzIGNydWNpYWwgaW5cbnBlcmZvcm1pbmcgd2VsbCBhbmQgY29taW5nIG91dCBhdCB0aGUgdG9wLlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiU3VycHJpc2UgTGFuZ3VhZ2UgSVZcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvY29tcHJlc3NlZC9zdXJwcmlzZV9sYW5ndWFnZS5wbmdcIixcbiAgICAgIGRhdGU6IFwiMjh0aCBNYXJjaFwiLFxuICAgICAgdGltZTogXCIyMTowMC0yMzo1OVwiLFxuICAgICAgY29udGFjdHM6IFt7IFwibmFtZVwiOiBcIktlc2hhdiBHb3lhbFwiLCBcIm1vYlwiOiBcIjk0MTc5NTE5NTdcIiB9LCB7IFwibmFtZVwiOiBcIiBEaHJ1diBDaGFkaGFcIiwgXCJtb2JcIjogXCI5NTIyNTgzNTAwXCIgfV0sXG4gICAgICBjb250ZW50OiBg4oCYQ296IHdobyBkb2VzbuKAmXQgbGlrZSBzdXJwcmlzZXM/YCxcbiAgICAgIGxvbmdDb250ZW50OiBgXG4gICAgICAgICAgICBBcmUgeW91IHJlYWR5IGZvciBzb21ldGhpbmcgY2hhbGxlbmdpbmc/XG5Tb21ldGhpbmcgYWR2ZW50dXJvdXM/IFdlIGFyZVxuY29uZHVjdGluZywgdGhlIFN1cnByaXNlIExhbmd1YWdlXG5Qcm9ncmFtbWluZyBDb250ZXN0LiBIZXJlLCB1bmxpa2UgYVxucmVndWxhciBwcm9ncmFtbWluZyBjb250ZXN0LCB5b3Ugd2lsbFxub25seSBiZSBhYmxlIHRvIHVzZSBvbmUgbGFuZ3VhZ2UsIHdoaWNoXG53aWxsIGJlIGFubm91bmNlZCAxNSBtaW51dGVzIGJlZm9yZSB0aGVcbmNvbnRlc3QuIFNvIGJlIHJlYWR5IHRvIGNvbXBldGUsIHlvdVxubWlnaHQgZXZlbiBsZWFybiBhIHdob2xlIG5ldyBsYW5ndWFnZVxuYWxvbmcgdGhlIHdheSEgV2Ugd2lsbCBiZSBhbm5vdW5jaW5nIGFcblxubGlzdCBvZiAxMCBsYW5ndWFnZXMgMyBkYXlzIGJlZm9yZSB0aGUgY29udGVzdC5cbiAgICAgIGBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkhhY2sgdGhlIENvZGVcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvY29tcHJlc3NlZC9oYWNrX3RoZV9jb2RlLnBuZ1wiLFxuICAgICAgZGF0ZTogXCIzcmQgQXByaWxcIixcbiAgICAgIHRpbWU6IFwiIDIxOjAwLTIzOjU5XCIsXG4gICAgICBjb250ZW50OiBgQXJlIHlvdSBhIG1hc3RlciBkZWJ1Z2dlcj8gRG8geW91IGxvdmUgc3F1YXNoaW5nIGJ1Z3M/IElzIHNtYXNoaW5nIHlvdXIgaGVhZCBvbiBhXG53YWxsIGFuZCB0ZWFyaW5nIG9mZiB5b3VyIGhhaXIgd2hhdCB5b3UgbG92ZT8gSWYgeWVzLCB0aGVuIHRoaXMgY29udGVzdCBpcyBkZWZpbml0ZWx5IGZvciB5b3UhYCxcbiAgICAgIGxvbmdDb250ZW50OiBgXG4gICAgICAgICAgIFByZXNlbnRpbmcgSGFjayB0aGUgY29kZSEgQSAzIGhvdXIgY29udGVzdCB3aGVyZSB5b3XigJlsbCBiZSBwcm92aWRlZCBwcm9ibGVtcyxcbmFsb25nc2lkZSBpdOKAmXMgc29sdXRpb24sIGFuZCB5b3XigJlsbCBoYXZlIHRvIGZpbmQgYSBmYWlsaW5nIGNhc2Ugb24gdGhlIHNvbHV0aW9uLiBZb3Ugd2lsbCBiZVxuZ2l2ZW4gMTAgc29sdXRpb25zICh3aGljaCBjYW4gYmUgaW4gYW55IGxhbmd1YWdlKSBhbG9uZyB3aXRoIHRoZWlyIHJlc3BlY3RpdmUgcHJvYmxlbVxuZGVzY3JpcHRpb25zLiBKdXN0IG91dHB1dCBhbnkgdGVzdCBjYXNlIHdoaWNoIHdpbGwgZmFpbCB0aGUgY29kZS4gU28sIGFyZSB5b3UgcmVhZHk/PGJyPlxuU2NvcmluZyBpcyBiYXNlZCBvbiBudW1iZXIgb2YgcHJvYmxlbXMgc3VjY2Vzc2Z1bGx5IGhhY2tlZC4gVGllcyB3aWxsIGJlIGJyb2tlbiBvblxudGhlIGJhc2lzIG9mIHRvdGFsIHRpbWUgdGFrZW4gaW4gaGFja3MuXG4gICAgICBgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJGb29sIFlvdSFcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvY29tcHJlc3NlZC9mb29sX3lvdS5wbmdcIixcbiAgICAgIGRhdGU6IFwiMXN0IEFwcmlsXCIsXG4gICAgICB0aW1lOiBcIjE1OjAwLTE4OjAwXCIsXG4gICAgICBjb250ZW50OiBgRm9vbCBZb3UgaXMgYSBwcm9ncmFtbWluZyBldmVudCB3aGljaCBpc2ZhciBmcm9tIHRoZSB1c3VhbCDigJhzZXJpb3Vz4oCZIHByb2dyYW1taW5nIGNvbnRlc3RzLmAsXG4gICAgICBsb25nQ29udGVudDogYFxuICAgICAgICAgICBUaGUgdW5pcXVlIGFzcGVjdCBvZiB0aGlzIGNvbnRlc3Qgd2hpY2ggbWFrZXMgaXQgYW11c2luZyBpcyB0aGF0IGl0IHRlc3RzIHRoZSBjb250ZXN0YW50c1xuZGVjaXBoZXJpbmcgc2tpbGxzIGFuZCByZXF1aXJlcyB0aGVtIHRvIHRoaW5rIG91dC1vZi10aGUtYm94LiBUaGUgcHJvYmxlbSBzdGF0ZW1lbnRzIGluXG50aGlzIGNvbnRlc3Qgd2lsbCBiZSBmcmFtZWQgaW4gc3VjaCBhIHdheSB0aGF0IHRoZXkgYXJlIHRyaWNreSBhbmQgbWlzZGlyZWN0IHRoZVxuY29udGVzdGFudC4gRGVjb2RpbmcgdGhlIHF1ZXN0aW9ucyBtaWdodCBwcm92ZSB0byBiZSBtb3JlIGNoYWxsZW5naW5nIHRoYW4gc29sdmluZ1xudGhlbS4gUGFydGljaXBhbnRzIG5lZWQgdG8ga25vdyBiYXNpYyBwcm9ncmFtbWluZyBza2lsbHMsIGxvZ2ljIGFuZCB0aGUgbWVudGFsIGFiaWxpdHkgdG9cbnNwb3QgY2x1ZXMgYW5kIGhpbnRzIGhpZGRlbiBpbiB0aGUgcXVlc3Rpb25zLlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiU09IIENBSCBUT0FcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvY29tcHJlc3NlZC9zb2hfY2FoX3RvYS5wbmdcIixcbiAgICAgIGRhdGU6IFwiNnRoIEFwcmlsXCIsXG4gICAgICBjb250ZW50OiBgQmFzZWQgb24gdGhlIG5vcm1zIG9mIFByb2plY3QgRXVsZXIsIHdlIGludml0ZSB5b3UgdG8gdW50YW5nbGUgdGhlIGxhYnlyaW50aGluZSBvZlxubWF0aGVtYXRpY3MuYCxcbiAgICAgIGxvbmdDb250ZW50OiBgXG4gICAgICAgICAgIFRoaXMgaXMgYSBzcGVjaWFsIHByb2dyYW1taW5nIGNvbnRlc3Qgd2l0aCBwcm9ibGVtcyBtYWlubHkgZm9jdXNzaW5nIG9uIHRoZVxubWF0aGVtYXRpY2FsIGNvbmNlcHRzIHJhdGhlciB0aGFuIGRhdGEgc3RydWN0dXJlcyBhbmQgYWxnb3JpdGhtcy4gSXQgd2lsbCBiZSBhIHNob3J0XG5kdXJhdGlvbiBwcm9ncmFtbWluZyBjb250ZXN0LiBTb21lIG9mIHRoZSB0b3BpY3MgdGhhdCB3aWxsIGJlIGZvY3Vzc2VkIGFyZSwgTnVtYmVyXG50aGVvcnksIE1vZHVsYXIgYXJpdGhtZXRpYywgQ29tcHV0YXRpb25hbCBHZW9tZXRyeSwgQ29tYmluYXRvcmljcywgUHJvYmFiaWxpdHksIGV0Yy5cbiAgICAgIGBcbiAgICB9LFxuICAgIF0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBtb2RhbChpKSB7XG4gICAgICAkKFwiI21vZGFsXCIgKyBpKS5tb2RhbCh7XG4gICAgICAgIGZhZGVEdXJhdGlvbjogMzAwXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pXG5cbnZhciBmb290ZXIgPSBuZXcgVnVlKHtcbiAgZWw6ICcjZm9vdGVyJyxcbiAgZGF0YToge1xuICAgIHN1YnRpdGxlOiAnVGhlIFByb2dyYW1taW5nIENsdWIsIElJVCBJbmRvcmUnLFxuICAgIGxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdpY29uIGZhLWxpbmsnLFxuICAgICAgICB0YWc6ICdUaGUgUHJvZ3JhbW1pbmcgQ2x1YicsXG4gICAgICAgIGxpbms6ICdodHRwOi8vcGNsdWJpaXRpLmdpdGh1Yi5pby8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdpY29uIGZhLWZhY2Vib29rJyxcbiAgICAgICAgdGFnOiAnRmFjZWJvb2snLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BjbHViaWl0aS8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdpY29uIGZhLWdpdGh1YicsXG4gICAgICAgIHRhZzogJ0dpdGh1YicsXG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vcGNsdWJpaXRpJyxcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgY2xhc3M6ICdpY29uIGZhLWVudmVsb3BlJyxcbiAgICAgICAgdGFnOiAnRW1haWwnLFxuICAgICAgICBsaW5rOiAnbWFpbHRvOnByb2djbHViQGlpdGkuYWMuaW4nLFxuICAgICAgfSxcbiAgICBdXG4gIH1cbn0pXG5cbnZhciBzcG9uc29ycyA9IG5ldyBWdWUoe1xuICBlbDogJyNzcG9uc29ycycsXG4gIGRhdGE6IHtcbiAgICBzcG9uc29yczogW1xuICAgICAge1xuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9oYWNrZXJlYXJ0aC5jb20nLFxuICAgICAgICBsb2dvOiBcImh0dHBzOi8vaGFja2VyZWFydGguZ2xvYmFsLnNzbC5mYXN0bHkubmV0L3N0YXRpYy9oYWNrZXJlYXJ0aC9pbWFnZXMvbG9nby9IRV9sb2dvLnN2Z1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9jb2RlY2hlZi5jb20nLFxuICAgICAgICBsb2dvOiBcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9jb2RlY2hlZl9zaGFyZWQvc2l0ZXMvYWxsL3RoZW1lcy9hYmVzc2l2ZS9sb2dvLnBuZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaW5rOiAnaHR0cDovL2NvZGVmb3JjZXMuY29tJyxcbiAgICAgICAgbG9nbzogXCIvaW1hZ2VzL2NmLnBuZ1wiXG4gICAgICB9LCB7XG4gICAgICAgIGxpbms6ICdodHRwczovL2hhY2tlcnJhbmsuY29tJyxcbiAgICAgICAgbG9nbzogXCJodHRwczovL2hyY2RuLm5ldC9oYWNrZXJyYW5rL2Fzc2V0cy9icmFuZC9ocl9sb2dvX25ld193b3JkLTUyZGI0ZGNkYzc2YjMxYmU4NjQ1NmM3N2I1NWE3Mzk2LnBuZ1wiXG4gICAgICB9XG4gICAgXVxuICB9XG59KSJdLCJmaWxlIjoiaW5kZXhEYXRhLmpzIn0=
