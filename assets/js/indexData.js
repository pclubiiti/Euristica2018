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
      content: `The Creative One`,
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
      content: `The Clever one`,
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
      content: `The Analytical one`,
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
      title: "Code Mélange 3.0",
      src: "images/compressed/code_melange.png",
      date: "30th March - 1st April, 21:00",
      content: `The Relentless One`,
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
      content: `The Succinct One`,
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
      title: "Surprise Language 4.0",
      src: "images/compressed/surprise_language.png",
      date: "28th March. 21:00-23:59",
      content: `The Spontaneous One`,
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
      content: `The Meticulous One`,
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
      content: `The Deceptive One`,
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
      content: `The Geeky One`,
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
