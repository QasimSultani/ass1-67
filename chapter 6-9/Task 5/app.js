var subject1=prompt("Enter subject 1");
var subject2=prompt("Enter subject 2");
var subject3=prompt("Enter subject 3");

var total=100;
var ob1=prompt("Enter subject 1 obtained marks");
var ob2=prompt("Enter subject 2 obtained marks");
var ob3=prompt("Enter subject 3 obtained marks");

document.write(subject1+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+total+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+ob1+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+((subject1/total)*100));
document.write(subject2+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+total+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+ob2+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+(subject2/total)*100);
document.write(subject23+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+total+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+ob3+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+(subject3/total)*100);


