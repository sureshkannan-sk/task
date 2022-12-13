var num=prompt("Enter the number:");
var sum=0;
var temp=num;
while(temp>0)
{
	var digit=temp%10;
	sum=sum+(digit**3);
	temp=parseInt(temp/10);
}
if (sum == num)
{
	console.log("It is armstrong number");
}
else
{
	console.log("It is not a armstrong number");
}