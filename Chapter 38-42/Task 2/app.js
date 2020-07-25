function year()
{
    var years=prompt("Enter the year");
    if(( years % 4 == 0) && (years % 100 !== 0) || (years % 400 == 0) )
		{
			alert(years+" is a leap year");  
		}
		else
		{
			alert(years+" is not a leap year");  
		}
   }

year();
