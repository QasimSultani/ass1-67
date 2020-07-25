function sub()
{
    var em=document.getElementById("em").value
    var pas1=document.getElementById("pas1").value;
    var pas2=document.getElementById("pas2").value;
    if(pas1!=pas2){
        alert("passwords donot match")
    }
    if(em=="" || pas1=="")
    {
        alert("please fill al required fields")
    }
    else
    {
        subted();
    }
}

function subted()
{
    var change=document.getElementById("em").value
    var em=document.getElementById("em").value
    var pas1=document.getElementById("pas1").value;
    var pas2=document.getElementById("pas2").value;
    document.write("Your email is "+em+"<br>");
    document.write("Your Password is "+pas1);

}