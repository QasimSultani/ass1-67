var sub1=+prompt("Enter subject 1 marks");
var sub2=+prompt("Enter subject 2 marks");
var totalm=+prompt("Enter total marks");

total=(sub1)+(sub2);
var per=(total/totalm)*100;

document.write("Total marks ="+totalm+"<br>");
document.write("Marks obtained ="+total+"<br>");
document.write("Percentage ="+per+"<br>");

if(per>=80){
    document.write("Grade: A one"+"<br>");
    document.write("Remarks: Excellent");
}
if(per>=70 && per<80){
    document.write("Grade: A "+"<br>");
    document.write("Remarks: good");
}
if(per>=60 && per<70){
    document.write("Grade: B"+"<br>");
    document.write("Remarks: You need to improve");
}
if(per<60){
    document.write("Grade: Fail"+"<br>");
    document.write("Remarks: Sorry");
}

