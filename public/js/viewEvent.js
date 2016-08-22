

$(document).ready(function () {

//Edit Event
$('#editform').on('submit',function(e){
  console.log(localStorage.getItem('token'));

  console.log('hi');
  e.preventDefault();
    $.ajax({
      url: server_url,
      method: "PUT",
      headers: {
             "Authorization": "Bearer " + localStorage.getItem('token')
           },
      data: $("#editform").serialize(),
      dataType: 'json',

      // beforeSend: function() {
      //   $loader.show();
      // }
    }).done(function successFunction(data) {
       console.log('success signup');
        window.location.replace("/events");
      })
      .fail(failFunction)
      .always(alwaysFunction);
    });


});
