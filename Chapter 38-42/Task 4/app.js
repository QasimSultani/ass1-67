
var a=prompt("Enter marks of subject 1");
var b=prompt("Enter marks of subject 2");
var c=prompt("Enter marks of subject 3");

function main()
{
    avg();
    per();
}
main();

function avg()
{
    var d=+a+ +b+ +c;
    var e=d/3;
    document.write("Your average is "+e+"<br>");
    return e;
}

function per()
{
    var d=+a+ +b+ +c;
    var e=(d/300)*100;
    document.write("Your per is "+e);

}

