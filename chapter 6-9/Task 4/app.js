var number=prompt("Enter a number");

if(number!==null){
    for(var i=1;i<=10;i++){
        document.write(5+" x"+i+" ="+(i*5)+"<br>");
    }
}
else{
    for(var i=1;i<=10;i++){
        document.write(number+" x"+i+" ="+(number*i)+"<br>");
    }
}