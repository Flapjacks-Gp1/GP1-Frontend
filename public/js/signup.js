
$(document).ready(function () {
  var $signupForm = $('#signup');
  var $loginForm = $('#login');
  var $body = $('body');
  var $notification = $('#message');
  var $notificationMessage = $('#message span');
  var $imageUploader = $("#imageUploader");
  var $uploadSubmit = $("#uploadSubmit");
  var uploadLink = 'https://api.imgur.com/3/image';
  var clientId = 'aca6d2502f5bfd8';

  $.ajaxSetup({
        cache: true
      });

  //parsley form validators
  $signupForm.parsley();
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
      var id = result.data.id;
      $('#imgPreview').css('display', 'block');
        preview.append("<a href='http://imgur.com/"+id+"'><img src='http://i.imgur.com/"+id+".png'></a>")
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
      $loginForm.hide();
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
