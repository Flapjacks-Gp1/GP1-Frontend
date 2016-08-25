$(document).ready(function() {
  var $loginVisible = $('.is-logged-in');
  var $logoutVisible = $('.is-logged-out');
  var $notification = $('#message');
  var $notificationMessage = $('#message span');
  var $btnLogout = $('#btnLogout');

  var $toggle = $('.nav-toggle');
    var $menu = $('.nav-menu');

    $toggle.click(function() {
      $(this).toggleClass('is-active');
      $menu.toggleClass('is-active');
    });

  var userId = function() {
    return localStorage.getItem('user_id');
  };
  console.log(userId());

  $("#profileLink").attr("href", "/profile/" + localStorage.getItem('user_id'));

  //If user is logged in, show logged in items
  if (localStorage.user_id) {
    $logoutVisible.hide();
    $loginVisible.show();
  };

  $btnLogout.click (function(event) {
    event.preventDefault();
    $.ajax({
      url: server_url + 'logout',
      method: "GET",
      headers: {
             "Authorization": "Bearer " + localStorage.getItem('token')
           }
    }).done(successFunction)
      .fail(failFunction);

    function successFunction(data) {
      console.log("successfully logged out");
      console.log(data);
      localStorage.clear();
      $logoutVisible.show();
      $loginVisible.hide();
      $notification.show();
      $notificationMessage.html('You have been logged out');
      // localStorage.clear();
      window.location.replace("/login");
    }

    function failFunction(request, textStatus, errorThrown){
      console.log('An error occurred during your request: ' +  request + ' ' + textStatus + ' ' + errorThrown);
    }
  });

});
