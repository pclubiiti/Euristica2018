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
    title: 'About Us',
    subtitle: `This generation has seen great programmers like Linus Torvalds and Jeff Dean.
Talented and hardworking programmers are rising all around the globe. To foster this
        amazing skill and culture, the Department of Computer Science and Engineering, IIT
        Indore presents you with - Euristica’18, the annual coding festival of our college.
        We will be conducting a variety of events ranging from Competitive Programming and
        Application Development to Cyber Security and Machine Learning.
        `,
  }
})

var events = new Vue({
  el: '#events',
  data: {
    list: [{
      title: "Divide By Zero",
      src: "images/pic01.jpg",
      date: "12th March",
      content: `
             It is a short-duration (2.5 hours) individual competitive programming contest. The contest will consist of 7-8 problems and
            is meant to test the algorithmic and implementation skills of the contestants along with
            their speed and accuracy of problem solving. It is our flagship event which we have been
            organising for 6 years now.`,
      longContent: `
            It is a short-duration (2.5 hours) individual competitive programming contest. The contest will consist of 7-8 problems and
            is meant to test the algorithmic and implementation skills of the contestants along with
            their speed and accuracy of problem solving. It is our flagship event which we have been
            organising for 6 years now.
      `
    },
    {
      title: "Hackathon",
      src: "images/pic02.jpg",
      date: "13th March",
      content: `Hackathon is a team development event. The duration will be 24 to 48 hours. Multiple
                    problem statements will be provided at the beginning of the event. The contestants will
                    get the entire time in which they have to select one of the problem statements, finalise
                    the technological stack and work on the implementation.
                    `,
      longContent: `
            It is a short-duration (2.5 hours) individual competitive programming contest. The contest will consist of 7-8 problems and
            is meant to test the algorithmic and implementation skills of the contestants along with
            their speed and accuracy of problem solving. It is our flagship event which we have been
            organising for 6 years now.
      `
    },
    {
      title: "Capture The Flag",
      src: "images/pic03.jpg",
      date: "14th March",
      content: `A special kind of cybersecurity competition designed to challenge its participants to solve
                    computer security problems and/or capture and defend computer systems.
                    `,
      longContent: `
            It is a short-duration (2.5 hours) individual competitive programming contest. The contest will consist of 7-8 problems and
            is meant to test the algorithmic and implementation skills of the contestants along with
            their speed and accuracy of problem solving. It is our flagship event which we have been
            organising for 6 years now.
      `
    },
    {
      title: "Machine Learning Codesprint",
      src: "images/pic01.jpg",
      date: "15th March",
      content: `“Information is the oil of the 21st century, and analytics is the combustion engine.”`,
      longContent: `
            It is a short-duration (2.5 hours) individual competitive programming contest. The contest will consist of 7-8 problems and
            is meant to test the algorithmic and implementation skills of the contestants along with
            their speed and accuracy of problem solving. It is our flagship event which we have been
            organising for 6 years now.
      `
    },
    {
      title: "Code Mélange III",
      src: "images/pic01.jpg",
      date: "16th March",
      content: `A long algorithmic programming
                contest that will push your brain to
                the limit!
                `,
      longContent: `
            It is a short-duration (2.5 hours) individual competitive programming contest. The contest will consist of 7-8 problems and
            is meant to test the algorithmic and implementation skills of the contestants along with
            their speed and accuracy of problem solving. It is our flagship event which we have been
            organising for 6 years now.
      `
    },
    {
      title: "Code Golf 4.0",
      src: "images/pic01.jpg",
      date: "17th March",
      content: `Code Golf is a unique competitive coding challenge in which “Less is More​"​.`,
      longContent: `
            It is a short-duration (2.5 hours) individual competitive programming contest. The contest will consist of 7-8 problems and
            is meant to test the algorithmic and implementation skills of the contestants along with
            their speed and accuracy of problem solving. It is our flagship event which we have been
            organising for 6 years now.
      `
    },
    {
      title: "Surprise Language IV",
      src: "images/pic01.jpg",
      date: "18th March",
      content: `‘Coz who doesn’t like surprises?`,
      longContent: `
            It is a short-duration (2.5 hours) individual competitive programming contest. The contest will consist of 7-8 problems and
            is meant to test the algorithmic and implementation skills of the contestants along with
            their speed and accuracy of problem solving. It is our flagship event which we have been
            organising for 6 years now.
      `
    }],
  },
  methods: {
    modal(i) {
      $("#modal" + i).modal({
        fadeDuration: 300
      });
    }
  }
})


var cta = new Vue({
  el: '#cta',
  data: {
    title: 'Register Now',
    subtitle: `Phasellus ac augue ac magna auctor tempus proin
    accumsan lacus a nibh commodo in pellentesque dui
    in hac habitasse platea dictumst.`,
  }
})


var footer = new Vue({
  el: '#footer',
  data: {
    subtitle: 'The programming club, IIT Indore',
    list: [
      {
        class: 'icon fa-twitter',
        tag: 'Twitter',
      },
      {
        class: 'icon fa-facebook',
        tag: 'Facebook',
      },
      {
        class: 'icon fa-instagram',
        tag: 'Instagram',
      },
      {
        class: 'icon fa-linkedin',
        tag: 'LinkedIn',
      },
      {
        class: 'icon fa-envelope',
        tag: 'Email',
      },
    ]
  }
})
