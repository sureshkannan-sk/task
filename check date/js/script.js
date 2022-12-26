function check(date)
{
    a = new Date(date)
	if ((a.getDay() == 0) || (a.getDay() == 6))
	{
		document.write("Weekend!");
	}
	else
	{
		document.write("Its weekday");
	}
}
date = prompt("Enter  date:");
check(date);