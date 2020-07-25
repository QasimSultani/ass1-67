
// ----------Task 1------------
var date=new Date();
document.write("Date: "+date+"<br>");

// ----------Task 2------------
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var m=month[date.getMonth()]
document.write("month: "+m+"<br>");

// ----------Task 3------------
var day = new Array(7);
day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";
var d=day[date.getDay()];
document.write("day: "+d+"<br>");