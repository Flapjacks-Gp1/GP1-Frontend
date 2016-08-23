$(document).ready(function() {
  var userId = function() {
    return localStorage.getItem('user_id');
  };
  console.log(userId());
  console.log("Authorization: Bearer " + localStorage.getItem('token'))
  $("#profileLink").attr("href", "/profile/" + localStorage.getItem('user_id'));
});
