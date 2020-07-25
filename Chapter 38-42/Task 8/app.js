var a =prompt("Enter distance in km");

function inmeter()
{
  var b=a*1000;
  document.write("distance in meter = "+b+"<br>")
}

function incentimeter()
{
  var b=a*100000;
  document.write("distance in centimeter = "+b+"<br>")
}

function ininches()
{
  var b=a*39370;
  document.write("distance in meter = "+b+"<br>")
}

function infeet()
{
  var b=a*3281;
  document.write("distance in feet = "+b+"<br>")
}

function main()
{
  inmeter();
  incentimeter();
  ininches();
  infeet();
}
main();


