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
      date: "30th March - 1st April, 21:00",
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
      date: "26th March, 21:00-23:59",
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
      date: "28th March. 21:00-23:59",
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
      date: "3rd April, 21:00-23:59",
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
      date: "1st April, 15:00-18:00",
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
        logo: "http://st.codeforces.com/s/24151/images/codeforces-logo-with-telegram.png"
      }, {
        link: 'https://hackerrank.com',
        logo: "https://hrcdn.net/hackerrank/assets/brand/hr_logo_new_word-52db4dcdc76b31be86456c77b55a7396.png"
      }
    ]
  }
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleERhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IG5ldyBWdWUoe1xuICBlbDogJyNoZWFkZXInLFxuICBkYXRhOiB7XG4gICAgdGl0bGU6ICdFdXJpc3RpY2EnLFxuICAgIHN1YnRpdGxlOiAnSW5kaWFuIEluc3RpdHV0ZSBvZiBUZWNobm9sb2d5IEluZG9yZScsXG4gIH1cbn0pXG5cbnZhciBpbnRybyA9IG5ldyBWdWUoe1xuICBlbDogJyNpbnRybycsXG4gIGRhdGE6IHtcbiAgICBzdWJ0aXRsZTogYFRoaXMgZ2VuZXJhdGlvbiBoYXMgc2VlbiBncmVhdCBwcm9ncmFtbWVycyBsaWtlIExpbnVzIFRvcnZhbGRzIGFuZCBKZWZmIERlYW4uXG5UYWxlbnRlZCBhbmQgaGFyZHdvcmtpbmcgcHJvZ3JhbW1lcnMgYXJlIHJpc2luZyBhbGwgYXJvdW5kIHRoZSBnbG9iZS4gVG8gZm9zdGVyIHRoaXNcbiAgICAgICAgYW1hemluZyBza2lsbCBhbmQgY3VsdHVyZSwgdGhlIERlcGFydG1lbnQgb2YgQ29tcHV0ZXIgU2NpZW5jZSBhbmQgRW5naW5lZXJpbmcsIElJVFxuICAgICAgICBJbmRvcmUgcHJlc2VudHMgeW91IHdpdGggLSBFdXJpc3RpY2HigJkxOCwgdGhlIGFubnVhbCBjb2RpbmcgZmVzdGl2YWwgb2Ygb3VyIGNvbGxlZ2UuXG4gICAgICAgIFdlIHdpbGwgYmUgY29uZHVjdGluZyBhIHZhcmlldHkgb2YgZXZlbnRzIHJhbmdpbmcgZnJvbSBDb21wZXRpdGl2ZSBQcm9ncmFtbWluZyBhbmRcbiAgICAgICAgQXBwbGljYXRpb24gRGV2ZWxvcG1lbnQgdG8gQ3liZXIgU2VjdXJpdHkgYW5kIE1hY2hpbmUgTGVhcm5pbmcuXG4gICAgICAgIGAsXG4gICAgbGluazogXCJodHRwczovL2dvby5nbC9mb3Jtcy82WHZaWDFvZWQ1dThsZnh5MVwiXG4gIH1cbn0pXG5cbnZhciBldmVudHMgPSBuZXcgVnVlKHtcbiAgZWw6ICcjZXZlbnRzJyxcbiAgZGF0YToge1xuICAgIGxpc3Q6IFt7XG4gICAgICB0aXRsZTogXCJEaXZpZGUgQnkgWmVyb1wiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL2Riei5wbmdcIixcbiAgICAgIGRhdGU6IFwiVG8gYmUgYW5ub3VuY2VkXCIsXG4gICAgICBjb250ZW50OiBgXG4gICAgICAgICAgICAgSXQgaXMgYSBzaG9ydC1kdXJhdGlvbiAoMi41IGhvdXJzKVxuaW5kaXZpZHVhbCBjb21wZXRpdGl2ZSBwcm9ncmFtbWluZ1xuY29udGVzdC5gLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgICAgICAgICAgSXQgaXMgYSBzaG9ydC1kdXJhdGlvbiAoMi41IGhvdXJzKVxuaW5kaXZpZHVhbCBjb21wZXRpdGl2ZSBwcm9ncmFtbWluZ1xuY29udGVzdC4gVGhlIGNvbnRlc3Qgd2lsbCBjb25zaXN0IG9mXG43LTggcHJvYmxlbXMgYW5kIGlzIG1lYW50IHRvIHRlc3QgdGhlIGFsZ29yaXRobWljIGFuZCBpbXBsZW1lbnRhdGlvbiBza2lsbHMgb2YgdGhlIGNvbnRlc3RhbnRzXG5hbG9uZyB3aXRoIHRoZWlyIHNwZWVkIGFuZCBhY2N1cmFjeSBvZiBwcm9ibGVtIHNvbHZpbmcuIEl0IGlzIG91ciBmbGFnc2hpcCBldmVudCB3aGljaCB3ZSBoYXZlXG5iZWVuIG9yZ2FuaXNpbmcgZm9yIDYgeWVhcnMgbm93LiBXZSBhcmUgZXhwZWN0aW5nIGEgcGFydGljaXBhdGlvbiBvZiA4MDAwKyBjYW5kaWRhdGVzIGZyb20gYWxsXG5vdmVyIHRoZSB3b3JsZC5cbiAgICAgIGBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkhhY2thdGhvblwiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL2hhY2thdGhvbi5wbmdcIixcbiAgICAgIGRhdGU6IFwiMjN0aCAtIDI0dGggTWFyY2hcIixcbiAgICAgIGNvbnRlbnQ6IGBIYWNrYXRob24gaXMgYSB0ZWFtIGRldmVsb3BtZW50IGV2ZW50LiBUaGUgZHVyYXRpb24gd2lsbCBiZSAyNCB0byA0OCBob3Vycy5gLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgICAgICAgICAgIEhhY2thdGhvbiBpcyBhIHRlYW0gZGV2ZWxvcG1lbnQgZXZlbnQuIFRoZSBkdXJhdGlvbiB3aWxsIGJlIDI0IHRvIDQ4IGhvdXJzLiBNdWx0aXBsZVxucHJvYmxlbSBzdGF0ZW1lbnRzIHdpbGwgYmUgcHJvdmlkZWQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgZXZlbnQuIFRoZSBjb250ZXN0YW50cyB3aWxsXG5nZXQgdGhlIGVudGlyZSB0aW1lIGluIHdoaWNoIHRoZXkgaGF2ZSB0byBzZWxlY3Qgb25lIG9mIHRoZSBwcm9ibGVtIHN0YXRlbWVudHMsIGZpbmFsaXNlXG50aGUgdGVjaG5vbG9naWNhbCBzdGFjayBhbmQgd29yayBvbiB0aGUgaW1wbGVtZW50YXRpb24uIFRoZSBjb250ZXN0IHdpbGwgdGVzdCBjcmVhdGl2ZVxudGhpbmtpbmcsIGtub3dsZWRnZSBhYm91dCBsYXRlc3QgdGVjaG5vbG9naWVzLCB0aGUgcGFjZSBvZiBsZWFybmluZywgY29kaW5nIHNraWxsIGFzIHdlbGxcbmFzIHRpbWUgbWFuYWdlbWVudCBza2lsbHMuXG5UaGUgY29udGVzdGFudHMgd2lsbCBiZSBwcm92aWRlZCB3aXRoIGludGVybmV0IGFjY2VzcyBzbyBhcyB0byBsZWFybiBhbmQgaW1wbGVtZW50IHRoZWlyXG5hcHBsaWNhdGlvbiB1c2luZyBhbnkgdGVjaG5vbG9neSB0aGV5IHdpc2ggdG8gdXNlLiBUaGUgbWFpbiBwYXJ0IG9mIHRoZSBjb250ZXN0IHdpbGwgYmVcbmNvbWluZyB1cCB3aXRoIGlubm92YXRpdmUgc29sdXRpb25zIGZvciB0aGUgZ2l2ZW4gcHJvYmxlbXMuIFVzYWdlIG9mIG9wZW4gc291cmNlXG5tb2R1bGVzIHdpbGwgYmUgYWxsb3dlZCAod2l0aCBwcm9wZXIgYXR0cmlidXRpb24pLlxuVGhlIHNjb3Jpbmcgd2lsbCBiZSBiYXNlZCBvbiB0aGUgcXVhbGl0eSBhbmQgYXBwbGljYWJpbGl0eSBvZiBlbmQgcHJvZHVjdC4gUHJvZHVjdHMgd2l0aFxuZnV0dXJlIGRldmVsb3BtZW50IHNjb3BlIHdpbGwgYWxzbyBiZSBjb25zaWRlcmVkLlxuVGltZWxpbmUgZm9yIHRoZSBldmVudCBzaGFsbCBiZSBhcyBmb2xsb3dzOjxicj5cbjxvbD5cbjxsaT4gPGI+IElkZWEgR2VuZXJhdGlvbiBQaGFzZeKAizwvYj46IFRlYW1zIGFyZSBhc2tlZCB0byBzdWJtaXQgdGhlaXIgZGV0YWlsZWQgaWRlYXMuIFRoZXlcbm5lZWQgdG8gbWVudGlvbiBob3cgdGhlaXIgaWRlYXMgYXJlIGJldHRlciB0aGFuIHRoZSBjdXJyZW50IGF2YWlsYWJsZSBzeXN0ZW1zLjwvbGk+XG48bGk+IDxiPiBEZXZlbG9wbWVudCBQaGFzZeKAizwvYj46IFRoZSB0ZWFtcyB3aWxsIGNvZGUgdGhlIGFwcGxpY2F0aW9uLiBUaGlzIHdpbGwgYmUgdGhlIG1ham9yXG5wYXJ0IG9mIHRoZSBldmVudCwgdGhlIHRlYW1zIHdpbGwgaGF2ZSB0byBpbXBsZW1lbnQgdGhlIGNvbXBsZXRlIGFwcGxpY2F0aW9uIGluXG50aGlzIHRpbWUgcGVyaW9kLjwvbGk+XG48bGk+IDxiPiBQcmVzZW50YXRpb24gUGhhc2U8L2I+OiBUaGUgdGVhbXMgd2lsbCBwcmVzZW50IHRoZWlyIHByb2plY3RzIHRvIHRoZSBqdXJ5LiBJZiB0aGV5XG5jbGVhciB0aGUgcHJlbGltaW5hcnkgcm91bmQgdGhleSB3aWxsIGJlIGFza2VkIHRvIHByZXNlbnQgdGhlaXIgYXBwbGljYXRpb24gaW4gZnJvbnRcbm9mIHRoZSBhdWRpZW5jZSBhbmQgdGhlIGp1cnkuIFRoZWlyIHdvcmsgd2lsbCBiZSBldmFsdWF0ZWQgb24gdGhlIGJhc2lzIG9mIHRoZWlyXG5pZGVhLCBjb2RlLCB0ZWNoLXN0YWNrIGFuZCBwcmVzZW50YXRpb24gcXVhbGl0eS48L2xpPlxuPC9vbD5cblRlYW1zIHdpbGwgYmUgZ2l2ZW4gdGltZSBzbG90cyBpbiB3aGljaCB0aGV5IGNhbiBkaXNjdXNzIHRoZWlyIHByb2plY3RzIGFuZCBpc3N1ZXMgd2l0aFxubWVudG9ycyB3aG8gd2lsbCBiZSBhdmFpbGFibGUgZHVyaW5nIHRoZSBldmVudC4gVGhleSBhcmUgYWxsb3dlZCB0byBhc2sgYW55IHF1ZXN0aW9uXG5yZWxldmFudCB0byB0aGUgcHJvamVjdCB0byB0aGUgbWVudG9ycyBhbmQgdGhleSB3aWxsIHRyeSB0aGVpciBiZXN0IHRvIGhlbHAgdGhlIHN0dWRlbnRzIG91dFxud2l0aCB0aGVpciBpc3N1ZS5cblxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQ2FwdHVyZSBUaGUgRmxhZ1wiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL2N0Zi5wbmdcIixcbiAgICAgIGRhdGU6IFwiN3RoLTh0aCBBcHJpbFwiLFxuICAgICAgY29udGVudDogYEEgc3BlY2lhbCBraW5kIG9mIGN5YmVyc2VjdXJpdHkgY29tcGV0aXRpb24gZGVzaWduZWQgdG8gY2hhbGxlbmdlIGl0cyBwYXJ0aWNpcGFudHMgdG8gc29sdmVcbmNvbXB1dGVyc2VjdXJpdHkgcHJvYmxlbXMgYW5kL29yIGNhcHR1cmUgYW5kIGRlZmVuZCBjb21wdXRlcnN5c3RlbXMuXG4gICAgICAgICAgICAgICAgICAgIGAsXG4gICAgICBsb25nQ29udGVudDogYFxuICAgICAgICAgICAgT3VyIENURiB3aWxsIGhhdmUgYmUgYW4gb25saW5lIGplb3BhcmR5IENURi4gVGhlIGR1cmF0aW9uIG9mIHRoZSBldmVudCB3aWxsIGJlIG9mIDI0LTQ4XG5ob3VycywgYW5kIHdlIGV4cGVjdCBhIHBhcnRpY2lwYXRpb24gb2YgNTAwKyB0ZWFtcywgd2l0aCBlYWNoIHRlYW0gY29uc2lzdGluZyBvZiA0XG5tZW1iZXJzLiBUaGUgQ1RGIHdpbGwgaGF2ZSAxNSBwcm9ibGVtcy48YnI+XG5JbiBhIGplb3BhcmR5IENURiBmb3JtYXQsIHRlYW1zIG11c3QgY29tcGxldGUgYXMgbWFueSBjeWJlcnNlY3VyaXR5IGNoYWxsZW5nZXMgYXNcbnRoZXkgY2FuIGZyb20gYSBnaXZlbiBzZWxlY3Rpb24sIHRlc3RpbmcgdGhlaXIgc2tpbGxzIGFuZCBrbm93bGVkZ2Ugb24gYSBkaXZlcnNlIHJhbmdlIG9mXG5jb21wdXRlciBzZWN1cml0eSBjYXRlZ29yaWVzIGluIG5vdmVsIGFuZCBjcmVhdGl2ZSB3YXlzLiBUeXBpY2FsIHRhc2tzIGFyZSByZWxhdGVkIHRvXG5uZXR3b3JraW5nLCBwcm9ncmFtbWluZywgYXBwbGljYXRpb25zLCBtb2JpbGUsIGZvcmVuc2ljcywgcmV2ZXJzZSBlbmdpbmVlcmluZyBhbmRcbmNyeXB0b2dyYXBoeS4gRm9yIGVhY2ggY2hhbGxlbmdlIGEgdGVhbSBjb21wbGV0ZXMsIGEgc3BlY2lmaWMgbnVtYmVyIG9mIHBvaW50cyBpc1xucmV3YXJkZWQuUGFydGljaXBhbnRzIG5lZWRzIHRvIHN1Ym1pdCB0aGUgY29ycmVjdCBmbGFnIChwaWVjZSBvZiB0ZXh0KSBpbiBvcmRlciB0byBzY29yZS5cbiAgICAgIGBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIk1hY2hpbmUgTGVhcm5pbmcgQ29kZXNwcmludFwiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL21sLnBuZ1wiLFxuICAgICAgZGF0ZTogXCIyNXRoIE1hcmNoIC0gOHRoIEFwcmlsXCIsXG4gICAgICBjb250ZW50OiBg4oCcSW5mb3JtYXRpb24gaXMgdGhlIG9pbCBvZiB0aGUgMjFzdCBjZW50dXJ5LCBhbmQgYW5hbHl0aWNzIGlzIHRoZSBjb21idXN0aW9uIGVuZ2luZS7igJ1gLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgICAgICAgICAgQXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgYW5kIGFuYWx5c2lzIHdpbGwgc2hhcGUgb3VyIGZ1dHVyZSBtb3JlIHBvd2VyZnVsbHkgdGhhbiBhbnkgb3RoZXJcbmlubm92YXRpb24gdGhpcyBjZW50dXJ5LiBNYWNoaW5lIGxlYXJuaW5nLCBvbiB0aGUgb3RoZXIgaGFuZCwgaXMgYSBmb3JtIG9mIGFydGlmaWNpYWxcbmludGVsbGlnZW5jZSBpbiB3aGljaDxiPiB0aGUgY29tcHV0ZXIgbGVhcm5zIGZvciBpdHNlbGYgaG93IHRvIGNvbXBsZXRlIGEgdGFza+KAiy48L2I+PGJyPlxuRnJvbSBURC1HYW1tb24gYW5kIERlZXBCbHVlIHRvIFdhdHNvbiBhbmQgQWxleGEsIG1hY2hpbmVzIGFyZSBldmVudHVhbGx5XG5iZWNvbWluZyBhbiBpbnRlZ3JhbCBwYXJ0IG9mIG91ciBsaXZlcy48YnI+XG5UaGlzIGNvZGVzcHJpbnQgYWltcyB0byBnaXZlIHRoZSBwYXJ0aWNpcGFudHMgdGhlIHRocmlsbGluZyBleHBlcmllbmNlIG9mIHByb2dyYW1taW5nIGFcbmNvbXB1dGVyIHRvIGxlYXJuLjxicj5cblRoZSBjb250ZXN0IHdpbGwgYmUgYXMgZm9sbG93cyAtXG48b2w+XG48bGk+PGI+IFRyYWluaW5nIFBoYXNlPC9iPiAtIFlvdSB3aWxsIGJlIGdpdmVuIHRoZSB0cmFpbmluZyBkYXRhIDI0IEhycyBiZWZvcmUgdGhlIEV2YWx1YXRpb25cblBoYXNlLjwvbGk+XG5Zb3Ugd2lsbCB1c2UgdGhpcyBkYXRhIHRvIHRyYWluIHlvdXIgY29tcHV0ZXIsIGFzIHdlbGwgYXMgeW91IGNhbi5cbjxsaT48Yj4gRXZhbHVhdGlvbiBQaGFzZTwvYj4gLSBZb3VyIG1vZGVsIHdpbGwgYmUgZXZhbHVhdGVkIG9uIHlvdXIgYWNjdXJhY3kgb24gdGhlIHRlc3RcbmRhdGEgKHNlcGFyYXRlIGZyb20gdGhlIHRyYWluaW5nIGRhdGEpLiBTb21lIGV4dHJhIHBvaW50cyBtaWdodCBiZSBhd2FyZGVkXG5iYXNlZCBvbiB1bmlxdWVuZXNzIG9mIGFwcHJvYWNoLjwvbGk+XG48L29sPlxuV2UgYXJlIGV4cGVjdGluZyBhIHBhcnRpY2lwYXRpb24gb2YgNTAwKyBwZW9wbGUuXG4gICAgICBgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJDb2RlIE3DqWxhbmdlIElJSVwiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL2NvZGVfbWVsYW5nZS5wbmdcIixcbiAgICAgIGRhdGU6IFwiMzB0aCBNYXJjaCAtIDFzdCBBcHJpbCwgMjE6MDBcIixcbiAgICAgIGNvbnRlbnQ6IGBBIGxvbmcgYWxnb3JpdGhtaWMgcHJvZ3JhbW1pbmdcbiAgICAgICAgICAgICAgICBjb250ZXN0IHRoYXQgd2lsbCBwdXNoIHlvdXIgYnJhaW4gdG9cbiAgICAgICAgICAgICAgICB0aGUgbGltaXQhXG4gICAgICAgICAgICAgICAgYCxcbiAgICAgIGxvbmdDb250ZW50OiBgXG4gICAgICAgICAgICBJdCBpcyBhbiBvcGVuIHRvIGFsbCBpbmRpdmlkdWFsXG5jb250ZXN0LiBXZSBhcmUgZ2V0dGluZyBhXG5wYXJ0aWNpcGF0aW9uIG9mIDUwMCsgc3R1ZGVudHMgZnJvbVxudGhlIHBhc3QgdHdvIHllYXJzIGFuZCBhcmVcbmV4cGVjdGluZyBtb3JlIHRoaXMgdGltZS5cblRoZSBjb250ZXN0IHdpbGwgc3BhbiBhY3Jvc3MgYVxuZHVyYXRpb24gb2YgPGI+NDgtNzIgaHJzPC9iPiDigIssIGhhdmluZyAxMC0xMlxucHJvYmxlbXMgd2l0aCB2YXJ5aW5nIGxldmVscyBvZlxuZGlmZmljdWx0eSBhbmQgaW1wbGVtZW50YXRpb25zLCB0YXJnZXRpbmcgZXZlcnlvbmUgd2l0aCBpbnRlcmVzdCBmb3IgcHJvZ3JhbW1pbmcuXG4gICAgICBgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJDb2RlIEdvbGYgNC4wXCIsXG4gICAgICBzcmM6IFwiaW1hZ2VzL2NvbXByZXNzZWQvY29kZV9nb2xmLnBuZ1wiLFxuICAgICAgZGF0ZTogXCIyNnRoIE1hcmNoLCAyMTowMC0yMzo1OVwiLFxuICAgICAgY29udGVudDogYENvZGUgR29sZiBpcyBhIHVuaXF1ZSBjb21wZXRpdGl2ZSBjb2RpbmcgY2hhbGxlbmdlIGluIHdoaWNoIOKAnExlc3MgaXMgTW9yZeKAi1wi4oCLLmAsXG4gICAgICBsb25nQ29udGVudDogYFxuICAgICAgICAgICAgVGhlIHNjb3JpbmcgaXMgYmFzZWQgb24gdGhlXG5jb3JyZWN0bmVzcyBvZiB0aGUgY29kZSBhcyB3ZWxsIGFzXG50aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaW4gaXQuXG5TaG9ydGVyIGNvZGVzIGZldGNoIG1vcmUgcG9pbnRzLlxuSG93ZXZlciwgVGhlIGNvZGUgbXVzdCBvdXRwdXRcbnRoZSBjb3JyZWN0IGFuc3dlciBmb3IgaXQgdG8gYmVcbmNvbnNpZGVyZWQgZm9yIHBvaW50cy4gUGFydGljaXBhbnRzXG53aWxsIGJlIHRlc3RlZCBvbiB0aGVpciBsb2dpY2FsIGFuZFxuYWxnb3JpdGhtaWMgc2tpbGxzIGFzIHdlbGwgYXMgdGhlaXJcbmFwdGl0dWRlIGZvciBwcm9ncmFtbWluZ1xubGFuZ3VhZ2VzLiBQaWNraW5nIHRoZSByaWdodCBsYW5ndWFnZSBhbmQgdGhlIHJpZ2h0IGxpYnJhcmllcyBmb3IgZWFjaCB0YXNrIGlzIGNydWNpYWwgaW5cbnBlcmZvcm1pbmcgd2VsbCBhbmQgY29taW5nIG91dCBhdCB0aGUgdG9wLlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiU3VycHJpc2UgTGFuZ3VhZ2UgSVZcIixcbiAgICAgIHNyYzogXCJpbWFnZXMvY29tcHJlc3NlZC9zdXJwcmlzZV9sYW5ndWFnZS5wbmdcIixcbiAgICAgIGRhdGU6IFwiMjh0aCBNYXJjaC4gMjE6MDAtMjM6NTlcIixcbiAgICAgIGNvbnRlbnQ6IGDigJhDb3ogd2hvIGRvZXNu4oCZdCBsaWtlIHN1cnByaXNlcz9gLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgICAgICAgICAgIEFyZSB5b3UgcmVhZHkgZm9yIHNvbWV0aGluZyBjaGFsbGVuZ2luZz9cblNvbWV0aGluZyBhZHZlbnR1cm91cz8gV2UgYXJlXG5jb25kdWN0aW5nLCB0aGUgU3VycHJpc2UgTGFuZ3VhZ2VcblByb2dyYW1taW5nIENvbnRlc3QuIEhlcmUsIHVubGlrZSBhXG5yZWd1bGFyIHByb2dyYW1taW5nIGNvbnRlc3QsIHlvdSB3aWxsXG5vbmx5IGJlIGFibGUgdG8gdXNlIG9uZSBsYW5ndWFnZSwgd2hpY2hcbndpbGwgYmUgYW5ub3VuY2VkIDE1IG1pbnV0ZXMgYmVmb3JlIHRoZVxuY29udGVzdC4gU28gYmUgcmVhZHkgdG8gY29tcGV0ZSwgeW91XG5taWdodCBldmVuIGxlYXJuIGEgd2hvbGUgbmV3IGxhbmd1YWdlXG5hbG9uZyB0aGUgd2F5ISBXZSB3aWxsIGJlIGFubm91bmNpbmcgYVxuXG5saXN0IG9mIDEwIGxhbmd1YWdlcyAzIGRheXMgYmVmb3JlIHRoZSBjb250ZXN0LlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiSGFjayB0aGUgQ29kZVwiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL2hhY2tfdGhlX2NvZGUucG5nXCIsXG4gICAgICBkYXRlOiBcIjNyZCBBcHJpbCwgMjE6MDAtMjM6NTlcIixcbiAgICAgIGNvbnRlbnQ6IGBBcmUgeW91IGEgbWFzdGVyIGRlYnVnZ2VyPyBEbyB5b3UgbG92ZSBzcXVhc2hpbmcgYnVncz8gSXMgc21hc2hpbmcgeW91ciBoZWFkIG9uIGFcbndhbGwgYW5kIHRlYXJpbmcgb2ZmIHlvdXIgaGFpciB3aGF0IHlvdSBsb3ZlPyBJZiB5ZXMsIHRoZW4gdGhpcyBjb250ZXN0IGlzIGRlZmluaXRlbHkgZm9yIHlvdSFgLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgICAgICAgICAgUHJlc2VudGluZyBIYWNrIHRoZSBjb2RlISBBIDMgaG91ciBjb250ZXN0IHdoZXJlIHlvdeKAmWxsIGJlIHByb3ZpZGVkIHByb2JsZW1zLFxuYWxvbmdzaWRlIGl04oCZcyBzb2x1dGlvbiwgYW5kIHlvdeKAmWxsIGhhdmUgdG8gZmluZCBhIGZhaWxpbmcgY2FzZSBvbiB0aGUgc29sdXRpb24uIFlvdSB3aWxsIGJlXG5naXZlbiAxMCBzb2x1dGlvbnMgKHdoaWNoIGNhbiBiZSBpbiBhbnkgbGFuZ3VhZ2UpIGFsb25nIHdpdGggdGhlaXIgcmVzcGVjdGl2ZSBwcm9ibGVtXG5kZXNjcmlwdGlvbnMuIEp1c3Qgb3V0cHV0IGFueSB0ZXN0IGNhc2Ugd2hpY2ggd2lsbCBmYWlsIHRoZSBjb2RlLiBTbywgYXJlIHlvdSByZWFkeT88YnI+XG5TY29yaW5nIGlzIGJhc2VkIG9uIG51bWJlciBvZiBwcm9ibGVtcyBzdWNjZXNzZnVsbHkgaGFja2VkLiBUaWVzIHdpbGwgYmUgYnJva2VuIG9uXG50aGUgYmFzaXMgb2YgdG90YWwgdGltZSB0YWtlbiBpbiBoYWNrcy5cbiAgICAgIGBcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkZvb2wgWW91IVwiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL2Zvb2xfeW91LnBuZ1wiLFxuICAgICAgZGF0ZTogXCIxc3QgQXByaWwsIDE1OjAwLTE4OjAwXCIsXG4gICAgICBjb250ZW50OiBgRm9vbCBZb3UgaXMgYSBwcm9ncmFtbWluZyBldmVudCB3aGljaCBpc2ZhciBmcm9tIHRoZSB1c3VhbCDigJhzZXJpb3Vz4oCZIHByb2dyYW1taW5nIGNvbnRlc3RzLmAsXG4gICAgICBsb25nQ29udGVudDogYFxuICAgICAgICAgICBUaGUgdW5pcXVlIGFzcGVjdCBvZiB0aGlzIGNvbnRlc3Qgd2hpY2ggbWFrZXMgaXQgYW11c2luZyBpcyB0aGF0IGl0IHRlc3RzIHRoZSBjb250ZXN0YW50c1xuZGVjaXBoZXJpbmcgc2tpbGxzIGFuZCByZXF1aXJlcyB0aGVtIHRvIHRoaW5rIG91dC1vZi10aGUtYm94LiBUaGUgcHJvYmxlbSBzdGF0ZW1lbnRzIGluXG50aGlzIGNvbnRlc3Qgd2lsbCBiZSBmcmFtZWQgaW4gc3VjaCBhIHdheSB0aGF0IHRoZXkgYXJlIHRyaWNreSBhbmQgbWlzZGlyZWN0IHRoZVxuY29udGVzdGFudC4gRGVjb2RpbmcgdGhlIHF1ZXN0aW9ucyBtaWdodCBwcm92ZSB0byBiZSBtb3JlIGNoYWxsZW5naW5nIHRoYW4gc29sdmluZ1xudGhlbS4gUGFydGljaXBhbnRzIG5lZWQgdG8ga25vdyBiYXNpYyBwcm9ncmFtbWluZyBza2lsbHMsIGxvZ2ljIGFuZCB0aGUgbWVudGFsIGFiaWxpdHkgdG9cbnNwb3QgY2x1ZXMgYW5kIGhpbnRzIGhpZGRlbiBpbiB0aGUgcXVlc3Rpb25zLlxuICAgICAgYFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiYWwtS2h3YXJpem1pIDIuMFwiLFxuICAgICAgc3JjOiBcImltYWdlcy9jb21wcmVzc2VkL3NvaF9jYWhfdG9hLnBuZ1wiLFxuICAgICAgZGF0ZTogXCI2dGggQXByaWxcIixcbiAgICAgIGNvbnRlbnQ6IGBCYXNlZCBvbiB0aGUgbm9ybXMgb2YgUHJvamVjdCBFdWxlciwgd2UgaW52aXRlIHlvdSB0byB1bnRhbmdsZSB0aGUgbGFieXJpbnRoaW5lIG9mXG5tYXRoZW1hdGljcy5gLFxuICAgICAgbG9uZ0NvbnRlbnQ6IGBcbiAgICAgICAgICAgVGhpcyBpcyBhIHNwZWNpYWwgcHJvZ3JhbW1pbmcgY29udGVzdCB3aXRoIHByb2JsZW1zIG1haW5seSBmb2N1c3Npbmcgb24gdGhlXG5tYXRoZW1hdGljYWwgY29uY2VwdHMgcmF0aGVyIHRoYW4gZGF0YSBzdHJ1Y3R1cmVzIGFuZCBhbGdvcml0aG1zLiBJdCB3aWxsIGJlIGEgc2hvcnRcbmR1cmF0aW9uIHByb2dyYW1taW5nIGNvbnRlc3QuIFNvbWUgb2YgdGhlIHRvcGljcyB0aGF0IHdpbGwgYmUgZm9jdXNzZWQgYXJlLCBOdW1iZXJcbnRoZW9yeSwgTW9kdWxhciBhcml0aG1ldGljLCBDb21wdXRhdGlvbmFsIEdlb21ldHJ5LCBDb21iaW5hdG9yaWNzLCBQcm9iYWJpbGl0eSwgZXRjLlxuICAgICAgYFxuICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG1vZGFsKGkpIHtcbiAgICAgICQoXCIjbW9kYWxcIiArIGkpLm1vZGFsKHtcbiAgICAgICAgZmFkZUR1cmF0aW9uOiAzMDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSlcblxudmFyIGZvb3RlciA9IG5ldyBWdWUoe1xuICBlbDogJyNmb290ZXInLFxuICBkYXRhOiB7XG4gICAgc3VidGl0bGU6ICdUaGUgUHJvZ3JhbW1pbmcgQ2x1YiwgSUlUIEluZG9yZScsXG4gICAgbGlzdDogW1xuICAgICAge1xuICAgICAgICBjbGFzczogJ2ljb24gZmEtbGluaycsXG4gICAgICAgIHRhZzogJ1RoZSBQcm9ncmFtbWluZyBDbHViJyxcbiAgICAgICAgbGluazogJ2h0dHA6Ly9wY2x1YmlpdGkuZ2l0aHViLmlvLycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2ljb24gZmEtZmFjZWJvb2snLFxuICAgICAgICB0YWc6ICdGYWNlYm9vaycsXG4gICAgICAgIGxpbms6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vcGNsdWJpaXRpLycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzczogJ2ljb24gZmEtZ2l0aHViJyxcbiAgICAgICAgdGFnOiAnR2l0aHViJyxcbiAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wY2x1YmlpdGknLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBjbGFzczogJ2ljb24gZmEtZW52ZWxvcGUnLFxuICAgICAgICB0YWc6ICdFbWFpbCcsXG4gICAgICAgIGxpbms6ICdtYWlsdG86cHJvZ2NsdWJAaWl0aS5hYy5pbicsXG4gICAgICB9LFxuICAgIF1cbiAgfVxufSlcblxudmFyIHNwb25zb3JzID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI3Nwb25zb3JzJyxcbiAgZGF0YToge1xuICAgIHNwb25zb3JzOiBbXG4gICAgICB7XG4gICAgICAgIGxpbms6ICdodHRwczovL2hhY2tlcmVhcnRoLmNvbScsXG4gICAgICAgIGxvZ286IFwiaHR0cHM6Ly9oYWNrZXJlYXJ0aC5nbG9iYWwuc3NsLmZhc3RseS5uZXQvc3RhdGljL2hhY2tlcmVhcnRoL2ltYWdlcy9sb2dvL0hFX2xvZ28uc3ZnXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpbms6ICdodHRwczovL2NvZGVjaGVmLmNvbScsXG4gICAgICAgIGxvZ286IFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2NvZGVjaGVmX3NoYXJlZC9zaXRlcy9hbGwvdGhlbWVzL2FiZXNzaXZlL2xvZ28ucG5nXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpbms6ICdodHRwOi8vY29kZWZvcmNlcy5jb20nLFxuICAgICAgICBsb2dvOiBcImh0dHA6Ly9zdC5jb2RlZm9yY2VzLmNvbS9zLzI0MTUxL2ltYWdlcy9jb2RlZm9yY2VzLWxvZ28td2l0aC10ZWxlZ3JhbS5wbmdcIlxuICAgICAgfSwge1xuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9oYWNrZXJyYW5rLmNvbScsXG4gICAgICAgIGxvZ286IFwiaHR0cHM6Ly9ocmNkbi5uZXQvaGFja2VycmFuay9hc3NldHMvYnJhbmQvaHJfbG9nb19uZXdfd29yZC01MmRiNGRjZGM3NmIzMWJlODY0NTZjNzdiNTVhNzM5Ni5wbmdcIlxuICAgICAgfVxuICAgIF1cbiAgfVxufSkiXSwiZmlsZSI6ImluZGV4RGF0YS5qcyJ9
