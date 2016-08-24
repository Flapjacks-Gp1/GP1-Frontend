$(document).ready(function () {
    var event_url = 'https://jio-app.herokuapp.com/api/events/';
    var $deleteEvent = $('#deleteEvent');
    var eventPathname = window.location.pathname.split('/');
    console.log(eventPathname[2]);

  $deleteEvent.on("click", function(e){
console.log(event_url + eventPathname[2]);
    e.preventDefault();

    $.ajax({
      url: event_url + eventPathname[2],
      method: "DELETE",
      headers: {
             "Authorization": "Bearer " + localStorage.getItem('token')
           }
    }).done(successFunction)
      .fail(failFunction)
      .always(alwaysFunction);


    function successFunction(data) {
      console.log("DELETED SUCCESSFULLY");
      window.location.replace("/events");
    }

    function failFunction(request, textStatus, errorThrown){
      // $name.text('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
      console.log('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
    }

    // always function
    function alwaysFunction() {
    }
  });
});
