
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



localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3YmE2YjU5MDE1NDAxZTU1ZDZmZDViZSIsImVtYWlsIjoiam9uQGdtYWlsLmNvbSIsImlhdCI6MTQ3MTg0MzYwNiwiZXhwIjoxNDcxODU0NDA2fQ.AEf0XPbC-Iyg5EnKkzgRNQHghYTyZWIHiJvY2dSGcJM");
localStorage.setItem('user_id', "57ba6b59015401e55d6fd5be");

//Create New Events









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
}


});
