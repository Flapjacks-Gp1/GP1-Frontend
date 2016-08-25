
$(document).ready(function() {
  console.log(localStorage.user_id);
  //get value of current event's user
  console.log($("#eventCreator").val());
  // console.log(data.user);
  var $eventCreator = $("#eventCreator").val();
  var $userButtons = $("#userButtons");
  if (localStorage.user_id  === $eventCreator) {
    $userButtons.show();
  }
})
