
var myImages=new Array("Images/red.jpg","Images/blue.jpg","Images/gray.jpg","Images/white.jpg","Images/silver.jpg","Images/gold.jpg");

var availability=new Array("Not Available","Available","Not Available","Available","Not Available","Available");

var seatColumn =["A","B","C","D","E","F","G"];

var myString="<h2>&nbspA B&nbsp&nbsp&nbsp&nbsp&nbsp&nbspC D E&nbsp&nbsp&nbsp&nbsp&nbspF G</h2>";

$("#cNumber").html(myString);



var eContent="";
var bContent="";
var pContent="";

for(i=0;i<4;i++){

      eContent+=i+1;

      if(i==0){
        eContent+="";
      }

      for(j=0;j<2;j++)
      {
          var  myString="";
          var x = Math.floor((Math.random() * 2));

       myString= '<img name="img'+i+'" style="margin:5px 0px" id="'+i+''+j+'" src="'+myImages[x]+'" onclick="clickimg('+i+','+j+')" title="'+availability[x]+'" onmouseover="hovimg('+i+','+j+')"  width="30" height="30"/ >';
       myString+="&nbsp";
       eContent+=myString;
      }

      eContent+= "&nbsp&nbsp&nbsp";

      for(j=2;j<5;j++)
      {
          var  myString="";
          var x = Math.floor((Math.random() * 2));

       myString= '<img name="img'+i+'" id="'+i+''+j+'" src="'+myImages[x]+'" onclick="clickimg('+i+','+j+')" title="'+availability[x]+'" onmouseover="hovimg('+i+','+j+')"  width="30" height="30"/ >';
       myString+="&nbsp";
       eContent+=myString;
      }

      eContent+= "&nbsp&nbsp&nbsp";

      for(j=5;j<7;j++)
      {
          var  myString="";
          var x = Math.floor((Math.random() * 2));

       myString= '<img name="img'+i+'" id="'+i+''+j+'" src="'+myImages[x]+'" onclick="clickimg('+i+','+j+')" title="'+availability[x]+'" onmouseover="hovimg('+i+','+j+')"  width="30" height="30"/ >';
       myString+="&nbsp";
       eContent+=myString;
      }




      eContent+="<br>"

      $("#eClass").html(eContent);


}

for (var i = 4; i < 7; i++) {

    bContent+=i+1;

    for(j=0;j<2;j++){

     var myString="";
     var x = Math.floor((Math.random() * 2)+2);

     myString= '<img name="img'+i+'" id="'+i+''+j+'" style="margin:5px 0px" src="'+myImages[x]+'" onclick="clickimg('+i+','+j+')" title="'+availability[x]+'" onmouseover="hovimg('+i+','+j+')"  width="30" height="30"/ >';
     myString+="&nbsp";
     bContent+=myString;

   }

     bContent+= "&nbsp&nbsp&nbsp";

   for(j=2;j<5;j++)
   {
       var  myString="";
       var x = Math.floor((Math.random() * 2)+2);

    myString= '<img name="img'+i+'" id="'+i+''+j+'" src="'+myImages[x]+'" onclick="clickimg('+i+','+j+')" title="'+availability[x]+'" onmouseover="hovimg('+i+','+j+')"  width="30" height="30"/ >';
    myString+="&nbsp";
    bContent+=myString;
   }

   bContent+= "&nbsp&nbsp&nbsp";

   for(j=5;j<7;j++)
   {
       var  myString="";
       var x = Math.floor((Math.random() * 2)+2);

    myString= '<img name="img'+i+'" id="'+i+''+j+'" src="'+myImages[x]+'" onclick="clickimg('+i+','+j+')" title="'+availability[x]+'" onmouseover="hovimg('+i+','+j+')"  width="30" height="30"/ >';
    myString+="&nbsp";
    bContent+=myString;
   }

   bContent+="<br>"

   $("#bClass").html(bContent);

}

for (var i = 7; i < 9; i++) {

    pContent+=i+1;

    for(j=0;j<2;j++){

     var myString="";
     var x = Math.floor((Math.random() * 2)+4);

     myString= '<img name="img'+i+'" id="'+i+''+j+'" style="margin:5px 0px" src="'+myImages[x]+'" onclick="clickimg('+i+','+j+')" title="'+availability[x]+'" onmouseover="hovimg('+i+','+j+')"  width="30" height="30"/ >';
     myString+="&nbsp";
     pContent+=myString;

   }

     pContent+= "&nbsp&nbsp&nbsp";

   for(j=2;j<5;j++)
   {
       var  myString="";
       var x = Math.floor((Math.random() * 2)+4);

    myString= '<img name="img'+i+'" id="'+i+''+j+'" src="'+myImages[x]+'" onclick="clickimg('+i+','+j+')" title="'+availability[x]+'" onmouseover="hovimg('+i+','+j+')"  width="30" height="30"/ >';
    myString+="&nbsp";
    pContent+=myString;
   }

   pContent+= "&nbsp&nbsp&nbsp";

   for(j=5;j<7;j++)
   {
       var  myString="";
       var x = Math.floor((Math.random() * 2)+4);

    myString= '<img name="img'+i+'" id='+i+''+j+' src="'+myImages[x]+'" onclick="clickimg('+i+','+j+')" title="'+availability[x]+'" onmouseover="hovimg('+i+','+j+')"  width="30" height="30"/ >';
    myString+="&nbsp";
    pContent+=myString;
   }

   pContent+="<br>"

   $("#pClass").html(pContent);

}


function clickimg(i,j){


    if($('#'+i+''+j).attr("title")=="Available")
    {
      var text="";
      seatN=seatColumn[j]+''+(i+1);
      text+="<table><tr><td><font color='red'>Seat: "+seatN+"</font>&nbsp&nbsp</td>";
      sClass=i+""+j;

      if(sClass>=70) {
      var SClass="Premium";
      var cost= 350;
      }
      else if(sClass>=40)
      {

      var SClass="Business";

      var cost= 275;

      }
      else
      {
      var SClass="Economy";

      var cost= 200;

      }
      text+="<td><font color='blue'>Class:"+SClass+"<font>&nbsp&nbsp</td>";
      text+="<td><font color='Green'>Cost: $"+ cost;
      text+="</font></td></table>";


      var myString="<p>Click the confirm button to reserve seat "+seatColumn[j]+(i+1)+"</p>";
      myString+="<button type='button' id='cButton' class='btn btn-success' data-toggle='modal' data-target='#exampleModalLong'>Confirm</button>";

      myString+='<div class="modal fade" id="exampleModalLong" role="dialog">';
      myString+='<div class="modal-dialog modal-lg"> <div class="modal-content"><div class="modal-header">';
      myString+='<h4 class="modal-title">'+text+'</h4> <button type="button" class="close" data-dismiss="modal">&times;</button></div>';
      myString+='<div class="modal-body"><table id="customers"><tr><td>First Name:</td>';
      myString+='<td>Last name:</td><tr><td><input type="text" name="lastname"></td>';
      myString+='<td><input type="text" name="firstname"></td></tr>';

      myString+='<tr><td>Phone Number:</td>';
      myString+='<td>E-mail:</td></tr>'
      myString+='<tr><td><input type="text" name="phoneNumber" id="phone-number"></td>';
      myString+='<td><input type="text" name="E-mail" id="E-mail"></td></tr></table>';

      myString+='Date of Birth:<br> <input type="date" name="bday"></form>';
      myString+='</div><div class="modal-footer">';
      myString+='<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
      myString+='<button type="button" id="formButton" class="btn btn-default">Submit</button></div></div>';
      myString+='</div></div>';

      $('#seatInfo').html(myString);

      $('#exampleModalLong').on('click','#formButton', function (e) {

    //console.log(e);
        });



    }
    else {
      $('#seatInfo').html("Seat not available");
    }


};
