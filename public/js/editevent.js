$(document).ready(function () {
    var event_url = server_url + 'events/';
    var $editEvent = $('#editEvent');
    var eventPathname = window.location.pathname.split('/');
    console.log(eventPathname[2]);

  $editEvent.submit(function(e){

    e.preventDefault();

    $.ajax({
      url: event_url + eventPathname[2],
      method: "POST",
      headers: {
             "Authorization": "Bearer " + localStorage.getItem('token')
           },
      dataType: 'json',
      data: {event: $editEvent.serialize(), userID: localStorage.getItem('user_id')}
    }).done(successFunction)
      .fail(failFunction)
      .always(alwaysFunction);


    function successFunction(data) {
      window.location.replace("/events/" + data._id);
    }

    function failFunction(request, textStatus, errorThrown){
      // $name.text('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
      console.log('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
    }

    // always function
    function alwaysFunction() {
      console.log(data)
    }
  })
})
