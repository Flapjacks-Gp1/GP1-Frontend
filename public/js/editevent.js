$(document).ready(function () {
    var client_url = 'http://localhost:7000/'
    var event_url = 'http://localhost:9000/api/events/';
    var $editEvent = $('#editEvent');
    var eventPathname = window.location.pathname.split('/');
    console.log(eventPathname[2]);

    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3YmJhM2FjYTNjZGEwMzk2ODA5MWUwNCIsImVtYWlsIjoic2FicmluYUBnbWFpbC5jb20iLCJpYXQiOjE0NzE5MTQ5MjksImV4cCI6MTQ3MTkyNTcyOX0.BYMCX-soL6SmXE43l3dIb9i_ZBxURd2IRR1pjdxbxyk');
console.log('TOKEN ' + localStorage.getItem('token'));
console.log('url' + event_url + eventPathname[2]);
console.log($editEvent.serialize())
  $editEvent.submit(function(e){

    e.preventDefault();

    $.ajax({
      url: event_url + eventPathname[2],
      method: "PUT",
      headers: {
             "Authorization": "Bearer " + localStorage.getItem('token')
           },
      dataType: 'json',
      data: $editEvent.serialize()
    }).done(successFunction)
      .fail(failFunction)
      .always(alwaysFunction);


    function successFunction(data) {

    }

    function failFunction(request, textStatus, errorThrown){
      // $name.text('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
      console.log('An error occurred during your request: ' +  request.status + ' ' + textStatus + ' ' + errorThrown);
    }

    // always function
    function alwaysFunction() {
    }
  })
})
