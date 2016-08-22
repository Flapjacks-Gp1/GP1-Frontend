
$(document).ready(function () {
  var server_url = 'http://localhost:9000/api/signup';
  var $form = $('#signup');

  $form.submit(function(event) {
    event.preventDefault();
    $.ajax({
      url: server_url,
      method: "POST",
      dataType: 'json',
      data: $form.serialize(),
    }).done(successFunction)
      .fail(failFunction)
      .always(alwaysFunction);


    function successFunction(data) {
      window.location.replace("/");
    }

    function failFunction(request, textStatus, errorThrown){
      console.log('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
    }
    
    function alwaysFunction() {
    }
  });

});
