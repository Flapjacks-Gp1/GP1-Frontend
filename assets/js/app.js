$(document).ready(function() {

  $.get("../../templates.html").done(function(response) {
  var content = $($.parseHTML(response));

  var body = Handlebars.compile($("#yield").html());
    Handlebars.registerPartial("navbar", $("#navbar-partial").html());

    template(yourData);
});
