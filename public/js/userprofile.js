$(document).ready(function () {
    var user_url = 'http://localhost:9000/api/users/';
$.ajax({
  url: user_url + localStorage.getItem('user_id'),
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
  $("#name").html(data.name);

  for (i=0; i < data.events.length; i++){
    var event_div = $('<div>')
    event_div.append(data.events[i].name);
    event_div.append('<li>' + data.events[i].description + '</li>');
    event_div.append('<li>' + data.events[i].location + '</li>');
    event_div.append('<hr />')
    $(".event").append(event_div);
  }


  // var rendered = new EJS({url:'events/findanevent.ejs'}).render({data:data});
  // $(".title is-5").forEach(function(i, name){
  //   name.html(data[i].name);
  // });

  // $('.contact').html(renderedData);
// $.css('border', '1px solid #e8e8e8');
// if data exists
// for(var i = 0; i < data.length; i ++){
// $name.html(data[i].name);
// $location.html(data[i].location);
// $desc.html(data[i].description);
// console.log(data[i].name);
// var html = new EJS({url: 'findanevent.ejs'}).render(data);
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
