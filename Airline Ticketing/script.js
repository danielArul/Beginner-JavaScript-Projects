//An array to store flight information depending on the chosen flight by the user.
var FInfo = new Array();
var seatColumn=new Array();


$('#flight1').click(function() {

  FInfo[0] = "Fri, 29Dec";
  FInfo[1] = "CON4032";
  FInfo[2] = "New York";
  FInfo[3] = "Mumbai";
  FInfo[4] = "6:15pm";
  FInfo[5] = "7:54pm";
  FInfo[6] = "DELTA AIR LINES INC 4032";
  FInfo[7] = "";
  $('#planeLeft').css('display', 'inline-block');
  $('#planeRight').css('display', 'inline-block');

  var Info='<div class="panel-group"><div class="panel panel-default">';
  Info+='<div class="panel-heading">Panel Header</div>';
  Info+='<div class="panel-body">Panel Content</div></div></div>';


  //var Info = "<div class='panel-info'><p>From:" + FInfo[2] + "<br>Destination:" + FInfo[3] + "</p></div>";
  $('#flightInfo').html(Info);
  showSeats();

});

$('#flight2').click(function() {

  FInfo[0] = "Fri, 29Dec";
  FInfo[1] = "CON4032";
  FInfo[2] = "Colombo";
  FInfo[3] = "Bangalore";
  FInfo[4] = "9:30pm";
  FInfo[5] = "10:54pm";
  FInfo[6] = "DELTA AIR LINES INC 4032";
  FInfo[7] = "";
  $('#planeLeft').css('display', 'inline-block');
  $('#planeRight').css('display', 'inline-block');
  var Info = "<p>From:" + FInfo[2] + "<br>Destination:" + FInfo[3] + "</p>";
  $('#flightInfo').html(Info);
  showSeats();

});

$('#flight3').click(function() {

  FInfo[0] = "Fri, 29Dec";
  FInfo[1] = "CON4032";
  FInfo[2] = "Singapore";
  FInfo[3] = "Tokyo";
  FInfo[4] = "5:15pm";
  FInfo[5] = "9:45pm";
  FInfo[6] = "DELTA AIR LINES INC 4032";
  FInfo[7] = "";
  $('#planeLeft').css('display', 'inline-block');
  $('#planeRight').css('display', 'inline-block');
  var Info = "<p>From:" + FInfo[2] + "<br>Destination:" + FInfo[3] + "</p>";
  $('#flightInfo').html(Info);
  showSeats();

});

//Populates the seat and show available and unavailable seats
function showSeats() {
  var myImages = new Array("Images/red.jpg", "Images/blue.jpg", "Images/gray.jpg", "Images/white.jpg", "Images/silver.jpg", "Images/gold.jpg");

  var availability = new Array("Not Available", "Available", "Not Available", "Available", "Not Available", "Available");

  var seatColumn = ["A", "B", "C", "D", "E", "F", "G"];

  var myString = "<h2>&nbspA B&nbsp&nbsp&nbsp&nbsp&nbsp&nbspC D E&nbsp&nbsp&nbsp&nbsp&nbspF G</h2>";

  $("#cNumber").html(myString);

  var eContent = '<h4 class="cHeader btn btn-warning" style="margin:0px 140px">Economy Class</h4><br>';
  var bContent = '<h4 class="cHeader btn btn-warning" style="margin:0px 140px">Business Class</h4><br>';
  var pContent = '<h4 class="cHeader btn btn-warning" style="margin:0px 140px">Premium Class</h4><br>';

  for (i = 0; i < 4; i++) {

    eContent += i + 1;

    if (i == 0) {
      eContent += "";
    }

    for (j = 0; j < 2; j++) {
      var myString = "";
      var x = Math.floor((Math.random() * 2));

      myString = '<img name="img' + i + '" style="margin:5px 0px" id="' + i + '' + j + '" src="' + myImages[x] + '" onclick="clickimg(' + i + ',' + j + ')" title="' + availability[x] + '" onmouseover="hovimg(' + i + ',' + j + ')"  width="30" height="30"/ >';
      myString += "&nbsp";
      eContent += myString;
    }

    eContent += "&nbsp&nbsp&nbsp";

    for (j = 2; j < 5; j++) {
      var myString = "";
      var x = Math.floor((Math.random() * 2));

      myString = '<img name="img' + i + '" id="' + i + '' + j + '" src="' + myImages[x] + '" onclick="clickimg(' + i + ',' + j + ')" title="' + availability[x] + '" onmouseover="hovimg(' + i + ',' + j + ')"  width="30" height="30"/ >';
      myString += "&nbsp";
      eContent += myString;
    }

    eContent += "&nbsp&nbsp&nbsp";

    for (j = 5; j < 7; j++) {
      var myString = "";
      var x = Math.floor((Math.random() * 2));

      myString = '<img name="img' + i + '" id="' + i + '' + j + '" src="' + myImages[x] + '" onclick="clickimg(' + i + ',' + j + ')" title="' + availability[x] + '" onmouseover="hovimg(' + i + ',' + j + ')"  width="30" height="30"/ >';
      myString += "&nbsp";
      eContent += myString;
    }

    eContent += "<br>"

    $("#eClass").html(eContent);


  }

  for (var i = 4; i < 7; i++) {

    bContent += i + 1;

    for (j = 0; j < 2; j++) {

      var myString = "";
      var x = Math.floor((Math.random() * 2) + 2);

      myString = '<img name="img' + i + '" id="' + i + '' + j + '" style="margin:5px 0px" src="' + myImages[x] + '" onclick="clickimg(' + i + ',' + j + ')" title="' + availability[x] + '" onmouseover="hovimg(' + i + ',' + j + ')"  width="30" height="30"/ >';
      myString += "&nbsp";
      bContent += myString;

    }

    bContent += "&nbsp&nbsp&nbsp";

    for (j = 2; j < 5; j++) {
      var myString = "";
      var x = Math.floor((Math.random() * 2) + 2);

      myString = '<img name="img' + i + '" id="' + i + '' + j + '" src="' + myImages[x] + '" onclick="clickimg(' + i + ',' + j + ')" title="' + availability[x] + '" onmouseover="hovimg(' + i + ',' + j + ')"  width="30" height="30"/ >';
      myString += "&nbsp";
      bContent += myString;
    }

    bContent += "&nbsp&nbsp&nbsp";

    for (j = 5; j < 7; j++) {
      var myString = "";
      var x = Math.floor((Math.random() * 2) + 2);

      myString = '<img name="img' + i + '" id="' + i + '' + j + '" src="' + myImages[x] + '" onclick="clickimg(' + i + ',' + j + ')" title="' + availability[x] + '" onmouseover="hovimg(' + i + ',' + j + ')"  width="30" height="30"/ >';
      myString += "&nbsp";
      bContent += myString;
    }

    bContent += "<br>"

    $("#bClass").html(bContent);

  }

  for (var i = 7; i < 9; i++) {

    pContent += i + 1;

    for (j = 0; j < 2; j++) {

      var myString = "";
      var x = Math.floor((Math.random() * 2) + 4);

      myString = '<img name="img' + i + '" id="' + i + '' + j + '" style="margin:5px 0px" src="' + myImages[x] + '" onclick="clickimg(' + i + ',' + j + ')" title="' + availability[x] + '" onmouseover="hovimg(' + i + ',' + j + ')"  width="30" height="30"/ >';
      myString += "&nbsp";
      pContent += myString;

    }

    pContent += "&nbsp&nbsp&nbsp";

    for (j = 2; j < 5; j++) {
      var myString = "";
      var x = Math.floor((Math.random() * 2) + 4);

      myString = '<img name="img' + i + '" id="' + i + '' + j + '" src="' + myImages[x] + '" onclick="clickimg(' + i + ',' + j + ')" title="' + availability[x] + '" onmouseover="hovimg(' + i + ',' + j + ')"  width="30" height="30"/ >';
      myString += "&nbsp";
      pContent += myString;
    }

    pContent += "&nbsp&nbsp&nbsp";

    for (j = 5; j < 7; j++) {
      var myString = "";
      var x = Math.floor((Math.random() * 2) + 4);

      myString = '<img name="img' + i + '" id=' + i + '' + j + ' src="' + myImages[x] + '" onclick="clickimg(' + i + ',' + j + ')" title="' + availability[x] + '" onmouseover="hovimg(' + i + ',' + j + ')"  width="30" height="30"/ >';
      myString += "&nbsp";
      pContent += myString;
    }

    pContent += "<br>"

    $("#pClass").html(pContent);

  }
}


function clickimg(i, j) {


  if ($('#' + i + '' + j).attr("title") == "Available") {
    var text = "";
    seatN = seatColumn[j] + '' + (i + 1);
    text += "<table><tr><td><font color='red'>Seat: " + seatN + "</font>&nbsp&nbsp</td>";
    sClass = i + "" + j;

    if (sClass >= 70) {
      var SClass = "Premium";
      var cost = 350;
    } else if (sClass >= 40) {

      var SClass = "Business";

      var cost = 275;

    } else {
      var SClass = "Economy";

      var cost = 200;

    }
    text += "<td><font color='blue'>Class:" + SClass + "<font>&nbsp&nbsp</td>";
    text += "<td><font color='Green'>Cost: $" + cost;
    text += "</font></td></table>";


    var myString = "<p>Click the confirm button to reserve seat " + seatColumn[j] + (i + 1) + "</p>";
    myString += "<button type='button' id='cButton' class='btn btn-success' data-toggle='modal' data-target='#exampleModalLong'>Confirm</button>";

    myString += '<div class="modal fade" id="exampleModalLong" role="dialog">';
    myString += '<div class="modal-dialog modal-lg"> <div class="modal-content"><div class="modal-header">';
    myString += '<h4 class="modal-title">' + text + '</h4> <button type="button" class="close" data-dismiss="modal">&times;</button></div>';
    myString += '<div class="modal-body"><p id="errorNotification">sdsd</p><table id="customers"><tr><td>First Name:</td>';
    myString += '<td>Last name:</td><tr><td><input type="text" id="firstname" name="firstname"></td>';
    myString += '<td><input type="text" id="lastname" name="lastname"></td></tr>';

    myString += '<tr><td>Phone Number:</td>';
    myString += '<td>E-mail:</td></tr>'
    myString += '<tr><td><input type="text" name="phoneNumber" id="phone-number"></td>';
    myString += '<td><input type="text" name="E-mail" id="E-mail"></td></tr></table>';

    myString += 'Date of Birth:<br> <input type="date" id="dob" name="dob"></form>';
    myString += '</div><div class="modal-footer">';
    myString += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
    myString += '<button type="button" id="formButton" class="btn btn-default">Submit</button></div></div>';
    myString += '</div></div>';

    $('#seatInfo').html(myString);

    $('#exampleModalLong').on('click', '#formButton', function(e) {

      if ($('#firstname').val().trim() == '' || $('#lastname').val().trim() == '') {
        var myAlert = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
        myAlert += '<strong>Please fill out the name field(s).</strong>';
        myAlert += '<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
        myAlert += '<span aria-hidden="true">&times;</span></button></div>';
        $('#errorNotification').html(myAlert);
      } else if ($("#phone-number").val().trim() == '' || $('#E-mail').val().trim() == '') {
        var myAlert = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
        myAlert += '<strong>Please fill out your contact detail(s).</strong>';
        myAlert += '<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
        myAlert += '<span aria-hidden="true">&times;</span></button></div>';
        $('#errorNotification').html(myAlert);
      } else if ($("#dob").val() == '') {
        var myAlert = '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
        myAlert += '<strong>Please submit your Date of Birth.</strong>';
        myAlert += '<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
        myAlert += '<span aria-hidden="true">&times;</span></button></div>';
        $('#errorNotification').html(myAlert);
      } else {

        var d = new Date($("#dob").val());
        FName = $("#phone-number").val();
        LName = $('#lastname').val();
        var y = (Math.random() * 10000000000000000);

        var myTick = "";
        myTick += "<centered><img id='myImg' src='Images/conLogo.jpg' ></centered><br>";
        myTick += "<p>Hello " + FName + " " + LName + "!</p>";
        myTick += "<p>Your seat No. is " + seatColumn[j] + (i + 1) + "</p>";
        myTick += "<table><tr><th><h1>" + FInfo[0] + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</h1></th>";
        myTick += "<th><h1>Depart&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</h1></th>";
        myTick += "<th><h1>Arrive</h1></th></tr>";
        myTick += "<tr><th><h1>" + FInfo[1] + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</h1></th>";
        myTick += "<th><h1>" + FInfo[2] + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</h1></th>";
        myTick += "<th><h1>" + FInfo[3] + "</h1></th></tr>";
        myTick += "<tr><th><h1>" + SClass + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</h1></th>";
        myTick += "<th><h1>" + FInfo[4] + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</h1></th>";
        myTick += "<th><h1>" + FInfo[5] + "</h1></th></tr></table>";
        myTick += "<h1><u><font color=blue>Passenger Info</font></u></h1>";
        myTick += "<table><tr><th><h1>Name&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</h1></th>";
        myTick += "<th><h1>Flight&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</h1></th>";
        myTick += "<th><h1>Seat</h1></th></tr>";
        myTick += "<tr><th><h1>" + FName + " " + LName + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</h1></th>";
        myTick += "<th><h1>" + FInfo[4] + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</h1></th>";
        myTick += "<th><h1>" + FInfo[5] + "</h1></th></tr></table>";
        myTick += "<h1><font color=blue>Flight Receipt</font></h1>";
        myTick += "<br><h1>Ticket- #" + y + "</h1>";
        myTick += "<br><h1>Ticket Issue date- " + d.getDay() + "/" + d.getMonth() + "/" + d.getYear() + "</h1>";
        myTick += "<br><h1>Ticket Expiration date- " + d.getDay() + "/" + d.getMonth() + "/" + (d.getYear() + 1) + "</h1>";
        myTick += "<form ><h1><u><font color=dark red>ARRIVE ON TIME</font></u><br><b>For passengers traveling domestically (within the U.S): </b><br>"
        myTick += "Due to peak summer travel season, many airports are experiencing a high volume of passengers, resulting in long check-in, baggage drop and security checkpoint lines.<br>";
        myTick += "Please plan to arrive at the airport at least 2 hours prior to your scheduled departure time. ";
        myTick += "<br><b>For passengers traveling internationally: </b>";
        myTick += "Due to recently-implemented U.S. Department of Homeland Security (DHS) enhanced security <br>";
        myTick += "requirements for customers traveling from any non U.S. location, we strongly advise all customers to ";
        myTick += "<b>arrive at the airport at least 3 hours prior to your scheduled departure time</b> ";
        myTick += "and to proceed to your departure gate promptly to allow extra time to clear security. <br></form>";
        myTick += "<br><form><h3><u><font color=dark red>Resricted Hazardous Items</font></h3></u>";
        myTick += "To ensure the safety of our customers and employees, Delta no longer accepts hoverboards or ";
        myTick += "any lithium battery powered self-balancing personal transportation devices on board its ";
        myTick += " aircraft. These items are prohibited as both carry-on and checked baggage</form>";


        var newWin = open();
        newWin.document.write(myTick);
      }
    });
  } else {
    $('#seatInfo').html("Seat not available");
  }
};
