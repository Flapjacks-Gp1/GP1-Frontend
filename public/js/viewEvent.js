
$(document).ready(function () {

var event_url = 'http://localhost:9000/api/' + 'events/';

$('.viewEventButton').on("click", function(e){

  console.log("test");
  console.log(localStorage.getItem('token'));

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

});
})
