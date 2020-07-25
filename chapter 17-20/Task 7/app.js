var b=prompt("Enter item")
var a= ["cake", "apple pie", "cookie", "chips", "patties"];
c=a.indexOf(b);

for(i=0;i<a.length;i++)
{
if(a[i]==b){
alert(b+" is available at  index"+c+" in our bakery");
}
}