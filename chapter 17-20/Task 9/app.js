var a=[20,100,50,30,10];

var min=a[0];
for(var i=1;i<a.length;i++){
    if(a[i]<min){
        min=a[i];

    }
}
document.write("smallest number is: "+min);
