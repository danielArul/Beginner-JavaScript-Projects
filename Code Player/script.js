//The following code is used to set the proper width for the textareas and iframe.
var numberOfActivePanels = 4 - $('.hidden').length;
$(".panel").width(($(window).width() / numberOfActivePanels) - 10);

//The following code sets the height of the textarea and iframe
$('textarea').height($(window).height() - $('#topbar').height() - 15);
$('#outputText').height($(window).height() - $('#topbar').height() - 15);

//This is to make the output panel update after every type
$("textarea").on('change keyup paste', function() {
  updateOutputPanel();
});


//The code that updates the output based on the user input to the panels
function updateOutputPanel() {
  $('iframe').contents().find('html').html("<html><head><style type='text/css'>" + $('#cssText').val() + "</style></head><body>" +
    $("#htmlText").val() + "</body></html>");
  document.getElementById('outputText').contentWindow.eval($("#javascriptText").val());
};

//To hide or show the HTML
$('.toggleButton').click(function() {
  var panelId;
  if ($(this).attr("id") == "htmlb") {
    var panelId = "htmlText";
  } else if ($(this).attr("id") == "cssb") {
    var panelId = "cssText";
  } else if ($(this).attr("id") == "javascriptb") {
    var panelId = "javascriptText";
  } else {
    var panelId = "outputText";
  }
  
  $('#' + panelId).toggleClass("hidden");
  var numberOfActivePanels = 4 - $('.hidden').length;
  $(".panel").width(($(window).width() / numberOfActivePanels) - 10);
  updateOutputPanel();
})
