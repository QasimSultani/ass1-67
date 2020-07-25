var a=prompt("Enter a password");
var firstc=a.slice(0,1);
var lastc=a.slice(1);

if(firstc>0){
alert("Password cannot begin with a number");    
}
if(a.length<6){
    alert("password should be 6 characters long");
}








