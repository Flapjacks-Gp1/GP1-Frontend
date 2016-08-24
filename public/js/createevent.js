$(document).ready(function() {
  var event_url = server_url + 'events/';

var userId = function() {
  return localStorage.getItem('user_id');
};
console.log(userId());

$("#eventCreator").attr("value", localStorage.getItem('user_id'));

//Create New Event
$('#createform').on('submit',function(e){
  console.log(localStorage.getItem('token'));

  e.preventDefault();
    $.ajax({
      url: event_url,
      method: "POST",
      headers: {
             "Authorization": "Bearer " + localStorage.getItem('token')
           },
      data: $("#createform").serialize(),
      dataType: 'json',

      // beforeSend: function() {
      //   $loader.show();
      // }
    }).done(function successFunction(data, res) {
       console.log(res);
        window.location.replace("/events/" + data._id);
      })
      .fail(failFunction)
      .always(alwaysFunction);
    });






  function failFunction(request, textStatus, errorThrown){
    // $name.text('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
    console.log('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
  }

  // always function
  function alwaysFunction() {
    // hide the loader
    // $loader.hide();
    // $body.css('overflow', 'hidden');
  }
});
