var $form = $('form#regform');

$('#register').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: "https://script.google.com/macros/s/AKfycbx6NtK5ND2H6AMWmEkX03k2ebydLm1idQRBu4NNaJxt5RK3Qpk/exec",
    method: "GET",
    dataType: "json",
    data: $form.serializeArray()
  }).success(
    $('#successModal').modal({
      fadeDuration: 300,
    })
  ).fail(function(err) {
    $('#errorModal').modal({
      fadeDuration: 300
    });
  });
  window.location = "/";

})


var app = new Vue({
  el: '#header',
  data: {
    title: 'Euristica',
    subtitle: 'Indian Institute of Technology Indore',
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
