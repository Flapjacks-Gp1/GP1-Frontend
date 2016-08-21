$(document).ready(function(){
  $.ajaxSetup({
    cache: true
  });

$('#signup').click(function(e){
  e.preventDefault();

  $.ajax({
    url: 'http:/localhost:5000/api/signup',
    type: 'POST',
    data: JSON
  }).done(signupSuccess)
    .fail(failResponse);
});


});








(function($) {


  // 2. changing to jquery format, notice we don't define the XHR class anymore

  var $eventname = $('.eventname');
  var $description = $('.description');
  var $location = $('.location');
  var $loader = $('.loader');

  var server_url = 'https://crossorigin.me/https://limitless-brook-89760.herokuapp.com/gabrielle';

  $.ajax({
    url: server_url,
    method: "post",
    dataType: 'json',
    // show the loader before making the request
    beforeSend: function() {
      $loader.show();
    }
  }).done(successFunction)
    .fail(failFunction)
    .always(alwaysFunction);


    function successFunction(data) {
    $.css('border', '1px solid #e8e8e8');
    // if data exists
    console.log(data);

    $eventname.text(data.name);
    $description.text(data.email);
    $location.text(data.hobbies);
  }

  function failFunction(request, textStatus, errorThrown){
    $name.text('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
  }

  // always function
  function alwaysFunction() {
    // hide the loader
    $loader.hide();
    // $body.css('overflow', 'hidden');
  }

})(jQuery);
