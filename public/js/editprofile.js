$(document).ready(function () {
    var client_url = 'http://localhost:7000/'
    var user_url = 'http://localhost:9000/api/users/';
    var $editProfile = $('#editProfile');
$(".is-primary").click(function(e){

  e.preventDefault();

$.ajax({
  url: user_url + localStorage.getItem('user_id'),
  method: "POST",
  headers: {
         "Authorization": "Bearer " + localStorage.getItem('token')
       },
  dataType: 'json',
  data: {
    name: $('#name').val(),
    password: $('#password').val()
  }
  // beforeSend: function() {
  //   $loader.show();
  // }
}).done(successFunction)
  .fail(failFunction)
  .always(alwaysFunction);


function successFunction(data) {

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
})
