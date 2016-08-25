$(document).ready(function() {
  var event_url = server_url + 'events/';
  var $imageUploader = $("#imageUploader");
  var $uploadSubmit = $("#uploadSubmit");
  var uploadLink = 'https://api.imgur.com/3/image';
  var clientId = 'aca6d2502f5bfd8';
  var $imgPreview = $('#imgPreview');
  var $avatarUrl = $('#avatarUrl');
  var $getPosition = $('#btnPosition');
  var $eventlocation = $('#eventlocation');
  var $latCoordinates = $('#latCoordinates');
  var $longCoordinates = $('#longCoordinates');
  var gmapsEndpoint = 'https://maps.googleapis.com/maps/api/geocode/json';
  var gmapsKey = 'AIzaSyBkwLBYSSOLRgLThJtRBS47Sw6OL1eOA3s';


// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY

var userId = function() {
  return localStorage.getItem('user_id');
};

$('#createForm').parsley();

console.log(userId());

$("#eventCreator").attr("value", localStorage.getItem('user_id'));

//Geolocation trigger
$getPosition.on('click', function() {
    $.geolocation.get({win: updatePosition, fail: noLocation});
});

function updatePosition(position) {
  $latCoordinates.val(position.coords.latitude);
  $longCoordinates.val(position.coords.longitude);
  console.log(position);
  // $eventlocation.val("Your position is " + position.coords.latitude + ", " + position.coords.longitude);
  $.ajax({
    url: gmapsEndpoint,
    method: "GET",
    dataType: 'json',
    key: gmapsKey,
    data: {'latlng' : position.coords.latitude + ", " + position.coords.longitude }
  }).done(function(result) {
    var locResult = result.results[0].formatted_address;
    console.log(result.results[0].formatted_address);
    $eventlocation.val(locResult);
  }).fail(function(){

  }).always(function() {

  });
};

function noLocation(error) {
    alert("No location info available. Error code: " + error.code);
};

//Image upload trigger
$uploadSubmit.on('click', function(e) {
  e.preventDefault();
  //  var imgData = $imageUploader[0].files[0];
   var imgData = new FormData();
   imgData.append("image", $imageUploader[0].files[0]);

  console.log($imageUploader.val());
  $.ajax({
    url: uploadLink,
    type: "POST",
    headers: {
      'Authorization': 'Client-ID '+ clientId
    },
    data: imgData,
    contentType: false,
    processData: false,
  }).done(function(result) {
      console.log(result.data);
      var imgId = result.data.id;
      var imgLink = result.data.link;
      $imgPreview.css('display', 'block');
      $imgPreview.html("<img src='http://i.imgur.com/"+imgId+".png'>");
      $avatarUrl.val(imgLink)
    })
    .fail(function() {

    })
    .always(function() {

    });
});

//Create New Event
$('#createForm').on('submit',function(e){
  console.log(localStorage.getItem('token'));

  e.preventDefault();
    $.ajax({
      url: event_url,
      method: "POST",
      headers: {
             "Authorization": "Bearer " + localStorage.getItem('token')
           },
      data: $("#createForm").serialize(),
      dataType: 'json',

      // beforeSend: function() {
      //   $loader.show();
      // }
    }).done(function successFunction(data, res) {
       console.log(res);
        window.location.replace("/events/" + data._id);
      })
      .fail(failFunction)
      .always(alwaysFunction);
    });






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
