var $form = $('form#regform');

$('#register').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: "https://script.google.com/macros/s/AKfycbx6NtK5ND2H6AMWmEkX03k2ebydLm1idQRBu4NNaJxt5RK3Qpk/exec",
    method: "GET",
    dataType: "json",
    data: $form.serializeArray()
  }).success(
    
  );
})