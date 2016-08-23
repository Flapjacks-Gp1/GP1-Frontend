$(document).ready(function () {
    var client_url = 'http://localhost:7000/'
    var event_url = 'http://localhost:9000/api/events/';
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
      location.href = client_url + 'events';
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
