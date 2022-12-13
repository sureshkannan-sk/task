var year= prompt("Enter a year:");
var month= prompt("Enter a month:"); 
var monthName={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"september",10:"october",11:"November",12:"December"}
if ((month==1)||(month==3)||(month==5)||(month==7)||(month==8)||(month==10)||(month==12))
{
	alert(monthName[month] + " have 31 days");
}
else if ((month==2)&&((year%400==0)||(year%4==0)||(year%100==0)))
{
	alert(monthName[month] + " have 29 days");
}
else if (month==2)
{
	alert(monthName[month] + " have 28 days");
}
else
{
	alert(monthName[month] + " have 30 days");
}
