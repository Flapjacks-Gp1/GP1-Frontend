$(document).ready(function () {
$.ajax({
  url: server_url + 'users/' + localStorage.getItem('user_id'),
  method: "GET",
  headers: {
         "Authorization": "Bearer " + localStorage.getItem('token')
       },
  dataType: 'json'
}).done(successFunction)
  .fail(failFunction)
  .always(alwaysFunction);


function successFunction(data) {

  console.log(data);
  console.log(data.name);
  $("#name").html(data.name);

  for (i=0; i < data.events.length; i++){
    var event_div = $('<div>')
    event_div.append(data.events[i].name);
    event_div.append('<li>' + data.events[i].description + '</li>');
    event_div.append('<li>' + data.events[i].location + '</li>');
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
}

})
