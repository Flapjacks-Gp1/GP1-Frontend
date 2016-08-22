$(document).ready(function() {
  var userId = function() {
    return localStorage.getItem('user_id');
  };
  console.log(userId());

  $("#profileLink").attr("href", "/profile/" + localStorage.getItem('user_id'));

});
