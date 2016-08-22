
$(document).ready(function () {
  var server_url = 'http://localhost:9000/api/';
  var $signupForm = $('#signup');
  var $loginForm = $('#login');
  var $body = $('body');
  var $notification = $('#message');
  var $notificationMessage = $('#message span');

  $.ajaxSetup({
        cache: true
      });

  //Signup Form
  $signupForm.submit(function(event) {
    event.preventDefault();
    $.ajax({
      url: server_url + 'signup',
      method: "POST",
      dataType: 'json',
      data: $signupForm.serialize(),
    }).done(successFunction)
      .fail(failFunction)
      .always(alwaysFunction);

    function successFunction(data) {
      $signupForm.hide();
      $notification.show();
      $notificationMessage.html("Success!");
      localStorage.setItem('token', data.token);
      localStorage.setItem('user_id', data.id);
      console.log(data);
    }

    function failFunction(request, textStatus, errorThrown){
      console.log('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
    }

    function alwaysFunction() {
    }
  });

  //Login form
  $loginForm.submit(function(event) {
    event.preventDefault();
    $.ajax({
      url: server_url + 'login',
      method: "POST",
      dataType: 'json',
      data: $loginForm.serialize(),
    }).done(successFunction)
      .fail(failFunction)
      .always(alwaysFunction);

    function successFunction(data) {
      $signupForm.hide();
      $notification.show();
      $notificationMessage.html('Welcome ' + data.name);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user_id', data.id);
      console.log(data);
    }

    function failFunction(request, textStatus, errorThrown){
      console.log('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
    }

    function alwaysFunction() {
    }
  });

});
