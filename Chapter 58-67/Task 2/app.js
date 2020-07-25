
function ab()
{
var x=document.getElementById("form-content").nodeType;
document.getElementById("demo").innerHTML=x
}
function ac()
{
    var z=document.getElementById("last-name").nodeType;
document.getElementById("demo2").innerHTML=z
}

var textnode = document.createTextNode("end name");
var item = document.getElementById("last-name").childNodes;

// Replace the first child node of <ul> with the newly created text node
item.replaceChild(textnode, item.childNodes);