var a=[20,100,50,30,10];

var max=a[0];
for(var i=1;i<a.length;i++){
    if(a[i]>max){
        max=a[i];

    }
}
document.write("largest number is: "+max);
