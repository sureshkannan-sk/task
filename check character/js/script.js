var s = prompt("Enter the character");
if ((s >= "a" && s <= "z") || (s >= "A" && s <= "Z"))
{
	alert ("This is alphabet"); 
	}
else if (s >= "0" && s <= "9")
{
	alert ("This is Number");
}
else
{
	alert ("This is Special character");
}