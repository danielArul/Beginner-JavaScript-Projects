$('textarea').height($(window).height()-$('#topbar').height()-15);
$('.panel').width(($(window).width()/2)-7);

//This is to make the output panel update adter every change

$("textarea").on('change keyup paste',function(){


  updateOutputPanel();
});

function updateOutputPanel(){
  $('iframe').contents().find('html').html("<html><head><style type='text/css'>" +$('#cssText').val()+"</style></head><body>"+
 $("#htmlText").val()+"</body></html>");


  document.getElementById('outputText').contentWindow.eval($("#javascriptText").val());


};

$('.toggleButton').click(function(){

  var panelId;
  if($(this).attr("id")=="htmlb"){
    var panelId = "htmlText";
  }
  else if($(this).attr("id")=="cssb"){
    var panelId = "cssText";
  }
  else if($(this).attr("id")=="javascriptb"){
    var panelId = "javascriptText";
  }
  else{
    var panelId = "outputText";
  }

  $('#'+panelId).toggleClass("hidden");

  var numberOfActivePanels=4-$('.hidden').length;

  $(".panel").width(($(window).width()/numberOfActivePanels)-10);

  updateOutputPanel();
})
