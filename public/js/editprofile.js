$(document).ready(function () {
    var user_url = 'https://jio-app.herokuapp.com/api/users/';
    var $editProfile = $('#editProfile');

$editProfile.submit(function(e){

  e.preventDefault();

$.ajax({
  url: user_url + localStorage.getItem('user_id'),
  method: "POST",
  headers: {
         "Authorization": "Bearer " + localStorage.getItem('token')
       },
  dataType: 'json',
  data: $editProfile.serialize()
  // beforeSend: function() {
  //   $loader.show();
  // }
}).done(successFunction)
  .fail(failFunction)
  .always(alwaysFunction);


function successFunction(data) {

  window.location.replace("/profile/" + localStorage.getItem("user_id"));
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
