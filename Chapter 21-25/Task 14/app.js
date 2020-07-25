var b=prompt("Search item")
b= b.toLowerCase();
var items=["apple","cake","chips","patties"];

for (var i = 0; i < items.length; i++) {
    if(items[i] == b){
        alert("item found at index "+i);
    }
    else{
        alert("item not found");
    }
}

  








