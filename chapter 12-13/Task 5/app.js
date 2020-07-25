var password="farman";
var pass=prompt("Enter your password")

if(pass=="")
{
    alert("Please enter password")
}
if(pass==password)
{
    alert("Correct! The password you entered matches the original password")
}
if(pass!=password && pass!==""){
    alert("Incorrect password")
}