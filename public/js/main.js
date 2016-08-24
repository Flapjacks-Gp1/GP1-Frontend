$(document).ready(function() {
  var $login = $("#loginNav");
  var $signup = $('#signup');
  var $logout = $('#logout');


  var userId = function() {
    return localStorage.getItem('user_id');
  };
  console.log(userId());

  $("#profileLink").attr("href", "/profile/" + localStorage.getItem('user_id'));

  if (localStorage.user_id) {
    $login.hide();
    $signup.hide();
    $logout.show();
  };

  $logout.click (function(event) {
    event.preventDefault();
    $.ajax({
      url: "http://localhost:9000/api/logout",
      method: "GET",
      headers: {
             "Authorization": "Bearer " + localStorage.getItem('token')
           },
      dataType: 'json',
    }).done(successFunction)
      .fail(failFunction);

    function successFunction(data) {
      console.log("successfully logged out")
      console.log(data);
      // localStorage.clear();
      // $logout.hide();
      // $notification.show();
      // $notificationMessage.html('You have been logged out');
      // localStorage.clear();
      // window.location.replace("/login");
    }

    function failFunction(request, textStatus, errorThrown){
      console.log('An error occurred during your request: ' +  request + ' ' + textStatus + ' ' + errorThrown);
    }
  });

});
