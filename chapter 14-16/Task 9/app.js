var colors=["red","yellow","green"];
document.write("colors:"+colors+"<br><br>");

var a=prompt("Enter colour to add at end ");
colors.push(a)
document.write("colors after addition at end:"+colors+"<br><br>");

colors.unshift("brown","black");
document.write("colors after addition at beggining:"+colors+"<br><br>");

colors.shift(a);
document.write("colors after deletion at beggining:"+colors+"<br><br>");

colors.pop(a);
document.write("colors after deletion at end:"+colors+"<br><br>");


var b=prompt("Enter index to add color");
var c=prompt("Enter  color to add to desired index");
colors.splice(b,0,c)
document.write("colors after deletion at end:"+colors+"<br><br>");

var d=prompt("Enter index to delete colour")
var e=prompt("Enter number of colors to delete")
colors.slice(d,e)
document.write("colors after deletion at given index:"+colors+"<br><br>");
