
$(document).ready(function () {

var event_url = 'http://localhost:9000/api/events/';
// var $name = $("#name");
// var $location= $("#location");
// var $description= $("#description");

var $viewEventButton = $('.viewEventButton');



$viewEventButton.on("click", function(e){
  e.preventDefault();
  var event_id = $(this).data('event');
  $.ajax({
    url: event_url + event_id,
    method: "GET",
    headers: {
            "Authorization" : "Bearer " + localStorage.getItem('token')
          },
  dataType: 'json',
  }).done(successFunction)
    .fail(failFunction);

  function successFunction(data) {
    console.log(data);

  }

  function failFunction(request, textStatus, errorThrown){
    console.log('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
}
});

});
