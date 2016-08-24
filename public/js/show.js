
$(document).ready(function() {
  console.log(localStorage.user_id);
  //get value of current event's user
  console.log($("#eventCreator").text());
  // console.log(data.user);
  var $eventCreator = $("#eventCreator").text();
  var $userButtons = $("#userButtons");
  if (localStorage.user_id  === $eventCreator) {
    $userButtons.append(
      "<a class="button is-medium" href="../events-edit/<%= data._id %>">Edit</a>" +
      "<button id="deleteEvent" class="button is-primary" >Delete Event</button> ");
  }
})
