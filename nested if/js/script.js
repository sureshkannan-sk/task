var x = parseInt(prompt("enter age of 1st person:"));
var y = parseInt(prompt("enter age of 2nd person:"));
var z = parseInt(prompt("enter age of 3rd person:"));
if (x>y && x>z)
{
	alert("x is oldest");
	if (y>z)
	{
	alert("z is youngest");
}
else {
	alert("y is youngest")
}
}
	if (y>z && y>x)
	{
		alert("y is oldest");
		if (x>z)
		{
		alert("z is youngest");
	}
	else {
		alert("x is youngest")
}
}
 if (z>x && z>y)
 {
	alert("z is oldest");
	if (y>x)
	{
	alert("x is youngest");
}
else {
	alert("y is youngest");
}
}



	
	