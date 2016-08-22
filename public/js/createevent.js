$(document).ready(function() {
  var server_url = 'http://localhost:9000/api/events';

localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3Yjk1NmEyNzA1OGYwNTExOGU1ODdlYyIsImVtYWlsIjoiam9uYXRoYW5AZ21haWwuY29tIiwiaWF0IjoxNDcxODQ2NzMyLCJleHAiOjE0NzE4NTc1MzJ9._x0UPjHICYKAhJCvHJCewPniF4Wvl2Z8VlYb5muFZus");

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
      url: server_url,
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
        window.location.replace("/events");
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
