var date=new Date();
var d=date.getDay();

var t=date.getHours();

if(t==12){
    alert("its noon");
}
if(t>12){
    alert("its am")
}
if(t<12){
    alert("its Pm")
}