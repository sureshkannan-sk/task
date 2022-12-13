var a = document.createElement("INPUT");
    a.setAttribute("type", "text");
    a.setAttribute("placeholder", "Enter a digit:");
    a.setAttribute("id","new1");
	document.body.appendChild(a);
document.write('<br/>');	
	q=document.createElement("Button");
    q.setAttribute("onclick","run();");
    document.body.appendChild(q)
    q.innerHTML="run";
	
function run(){
  num1 = Number(document.getElementById("new1").value);
  var n=0;
while(num1>0)
{
	rem=num1%10;
	n=n*10
	n+=rem;
	num1=(num1-(num1%10))/10;
} 

while(n>0)
{
	rem=n%10;
	num1+=rem;
	n=(n-rem)/10;
	if(n!=0)
	{
		document.write(rem+"+");
	}
	else
	{
		document.write(rem);
	}
}
document.write("="+num1);
}