var a =prompt("Enter overtime working hours");
var count=1

function overtimepay()
{
  if(a>40)
  {
    var b=a-40
    var c=b*12
    alert("overtime pay = "+c+"Rs")
  }
}
overtimepay();

