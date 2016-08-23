
$(document).ready(function () {

var event_url = 'https://jio-app.herokuapp.com/api/events/';

localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3Yjk1NmEyNzA1OGYwNTExOGU1ODdlYyIsImVtYWlsIjoiam9uYXRoYW5AZ21haWwuY29tIiwiaWF0IjoxNDcxODQ2NzMyLCJleHAiOjE0NzE4NTc1MzJ9._x0UPjHICYKAhJCvHJCewPniF4Wvl2Z8VlYb5muFZus");


$.ajax({
  url: event_url ,
  method: "GET",
  headers: {
         "Authorization": "Bearer " + localStorage.getItem('token')
       },
  dataType: 'json',

  // beforeSend: function() {
  //   $loader.show();
  // }
}).done(successFunction)
  .fail(failFunction)
  .always(alwaysFunction);


function successFunction(data) {

  console.log(data);
  console.log(data.name);


  for (i=0; i < data.length; i++){
    var event_div = $('<div>')
    event_div.append(data[i].name);
    event_div.append('<li>' + data.events[i].description + '</li>');
    event_div.append('<li>' + data[i].location + '</li>');
    event_div.append('<hr />')
    $(".event").append(event_div);
  }
}

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

})
