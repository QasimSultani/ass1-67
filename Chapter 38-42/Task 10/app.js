var a =prompt("Enter Amount to be withdrawn");

function splitmoney()
{
  var b= Math.floor(a/100);
  var e=a%100;
  var c= Math.floor(e/50);
  var f=c%50
  var d= Math.floor(c/10);
  alert("you will have "+b+" 100 Rs note "+c+" 50 Rs note "+d+" 10 Rs note");
}
splitmoney();

