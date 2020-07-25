var sentence ="Pleases read this application and give me gratuity";
var a = sentence.toLowerCase().split("");
var count = 0;


function vowelfind(char)
{
  switch(char)
  {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }


}

function occurence()
{

  for(let i=0;i<=a.length-1;i++)
  { 
    var char =a[i];
    var next =a[i+1];
    if(vowelfind(char) && vowelfind(next))
    {
      count++
    }
  }
  return count;
}

var g=occurence();

document.write("occurence are "+g)
