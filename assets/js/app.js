$(document).ready(function() {
  var $mainTemplate = $("#main-template").html();
  //Compile main template
  var template = Handlebars.compile($mainTemplate);
  //Get template from server
  $.get("../../template.html").done(function(response) {
    var content = $($.parseHTML(response));

    //You need to register each partial
    Handlebars.registerPartial({
      navbar: content.filter("#navbar-partial").html(),
      footer: content.filter("#footer-partial").html(),
      home: content.filter("#home-partial").html(),
      signup: content.filter("#signup-partial").html()
    });

    //Your data
    var data = {};


    document.body.innerHTML = template(data);

  });
});
