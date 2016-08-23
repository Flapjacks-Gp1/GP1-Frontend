$(document).ready(function () {
    var client_url = 'http://localhost:7000/'
    var event_url = 'http://localhost:9000/api/events/';
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
      data: $editEvent.serialize()
    }).done(successFunction)
      .fail(failFunction)
      .always(alwaysFunction);


    function successFunction(data) {

    }

    function failFunction(request, textStatus, errorThrown){
      // $name.text('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
      console.log('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
    }

    // always function
    function alwaysFunction() {
    }
  })
})
