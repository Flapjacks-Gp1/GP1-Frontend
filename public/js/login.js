
$(document).ready(function () {

 var client_url = 'http://localhost:7000/';
  var server_url = 'https://jio-app.herokuapp.com/api/login';

  $('.is-primary').click(function(e) {
         e.preventDefault();
  console.log("clicked on submit button")
//Show all Events
  $.ajax({
    url: server_url,
    method: "GET",
    headers: {
           "Authorization": "Bearer " + localStorage.getItem('jwt_token')
         },
    dataType: 'json',

    // beforeSend: function() {
    //   $loader.show();
    // }
  }).done(successFunction)
    .fail(failFunction)
    .always(alwaysFunction);

//Create New Events
    $.ajax({

      url: server_url,
      method: "POST",
      headers: {
             "Authorization": "Bearer " + localStorage.getItem('jwt_token')
           },
      dataType: 'json',

      // beforeSend: function() {
      //   $loader.show();
      // }
    }).done(successFunction)
      .fail(failFunction)
      .always(alwaysFunction);


    function successFunction(data) {
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
    location.href = client_url + 'profile/' + localStorage.getItem("user_id");

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
});
