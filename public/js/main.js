
$(document).ready(function () {

  var $name = $("#name1");
  var $name2 = $("#name2");
  var $location = $("#location1");
  var $location2 = $("#location2");
  var $desc = $("#desc1");
  var $desc2 = $("#desc2");
  var $username = $("#username");
  var $password = $("#password");
  var $loginBtn = $("#loginBtn");

  var server_url = 'http://localhost:9000/api/events';
  var user_url = 'http://localhost:9000/api/users/';
  var login_url = 'http://localhost:9000/api/login';

$loginBtn.click(function(){
  //Show all Events
  $.ajax({
    url: login_url,
    method: "GET",
    dataType: 'json'
  }).done(loginSuccess)
  .fail(failFunction)
  .always(alwaysFunction);

  function loginSuccess(res) {
    alert('success login');
    console.log(res);

    localStorage.setItem('token', res.token);
    localStorage.setItem('user_id', res.id);
  }

})



localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3YmE2YjU5MDE1NDAxZTU1ZDZmZDViZSIsImVtYWlsIjoiam9uQGdtYWlsLmNvbSIsImlhdCI6MTQ3MTgzNDk3NywiZXhwIjoxNDcxODQ1Nzc3fQ.MjkpZPAlKr71EE7qzkpjqwY1CT7ieAXdIXgB-5x3fkc");
localStorage.setItem('user_id', "57ba6b59015401e55d6fd5be");

//Create New Events
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

});
