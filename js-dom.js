/*var myVar =setInterval(setColor,1000);
function setColor( ){
    var x=document.body;
    x.style.backgroundColor =="yellow"  ? pink :"yellow";
}
clearInterval(myVar);*/

var i = 0;
function colorChange( ) {
  var doc = document.getElementById("background"); //gets the div by id "background"
  var myColor = ["purple", "skyblue", "brown", "green"];
  doc.style.background = myColor[i];
  i = (i + 1) % myColor.length; //checks  and displays the elements(colors) of the array "myColor"
}
setInterval(colorChange, 2000);