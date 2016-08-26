$(document).ready(function () {
  var $signupForm = $('#formSignup');
  var $loginForm = $('#formLogin');
  var $body = $('body');
  var $loginVisible = $('.is-logged-in');
  var $logoutVisible = $('.is-logged-out');
  var $notification = $('#message');
  var $notificationMessage = $('#message span');
  var $btnLogin = $("#btnLogin");
  var $btnSignup = $('#btnSignup');
  var $btnLogout = $('#btnLogout');
  var $imageUploader = $("#imageUploader");
  var $uploadSubmit = $("#uploadSubmit");
  var uploadLink = 'https://api.imgur.com/3/image';
  var clientId = 'aca6d2502f5bfd8';
  var $imgPreview = $('#imgPreview');
  var $avatarUrl = $('#avatarUrl');
  var $formContainer = $('.form-container');
  var $loader = $(".loader");

  $.ajaxSetup({
        cache: true
      });

  //parsley form validators
  $signupForm.parsley();
  $loginForm.parsley();
  //parsley form validators: adding class to the input on error
  $.listen('parsley:field:error', function(ParsleyField) {
    ParsleyField.$element.addClass('is-danger');
  });
  $.listen('parsley:field:success', function(ParsleyField) {
      ParsleyField.$element.removeClass('is-danger');
  });

  //Signup button image upload trigger
  $uploadSubmit.on('click', function(e) {
    e.preventDefault();
    //  var imgData = $imageUploader[0].files[0];
     var imgData = new FormData();
     imgData.append("image", $imageUploader[0].files[0]);

    console.log($imageUploader.val());
    $.ajax({
      url: uploadLink,
      type: "POST",
      headers: {
        'Authorization': 'Client-ID '+ clientId
      },
      data: imgData,
      contentType: false,
      processData: false,
    }).done(function(result) {
        console.log(result.data);
        var imgId = result.data.id;
        var imgLink = result.data.link;
        $imgPreview.css('display', 'block');
        $imgPreview.html("<img src='http://i.imgur.com/"+imgId+".png'>");
        $avatarUrl.val(imgLink);
      })
      .fail(function() {

      })
      .always(function() {

      });
  });

  //Signup Form
  $signupForm.submit(function(event) {
    event.preventDefault();
    $(this).parsley().validate();
    if ($(this).parsley().isValid()) {
        console.log('valid');
    }
    $.ajax({
      url: server_url + 'signup',
      method: "POST",
      dataType: 'json',
      data: $signupForm.serialize()
    }).done(successFunction)
      .fail(failFunction)
      .always(alwaysFunction);

    function successFunction(data) {
      $formContainer.hide();
      $notification.show();
      $notificationMessage.html("Success!");
      localStorage.setItem('token', data.token);
      localStorage.setItem('user_id', data.id);
      $logoutVisible.hide();
      $loginVisible.show();
    }

    function failFunction(request, textStatus, errorThrown){
      console.log('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
    }

    function alwaysFunction() {
    }
  });

  //Login form
  $loginForm.submit(function(event) {
    $(this).parsley().validate();
    if ($(this).parsley().isValid()) {
        console.log('valid');
    }
    event.preventDefault();
    $.ajax({
      url: server_url + 'login',
      method: "POST",
      dataType: 'json',
      data: $loginForm.serialize(),
      beforeSend: function() {
          $loginForm.hide();
          $loader.show();
        }
    }).done(successFunction)
      .fail(failFunction)
      .always(alwaysFunction);

    function successFunction(data) {

      $loader.hide();
      $notification.show();
      $notification.addClass('is-success');
      $notificationMessage.html('Welcome ' + data.name);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user_id', data.id);
      $logoutVisible.hide();
      $loginVisible.show();

      window.setTimeout(function() {
          window.location.replace("/events");
      }, 1000);
      console.log(data);
    }

    function failFunction(request, textStatus, errorThrown){
      $loader.hide();
      $notification.show();
      $notification.addClass('is-danger');
      $notificationMessage.html('Oops, are you sure you got your login details right?');
      $loginForm.addClass('wobble');
      $loginForm.show();
      console.log('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
    }

    function alwaysFunction() {
    }
  });

});
