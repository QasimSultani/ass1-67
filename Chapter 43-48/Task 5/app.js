function increase()
{
    var inc=document.getElementById("counter").innerHTML;
    inc++;
    document.getElementById("counter").innerHTML = inc;
}
function decrease()
{
    var dec=document.getElementById("counter").innerHTML;
    dec--;
    document.getElementById("counter").innerHTML = dec;
}