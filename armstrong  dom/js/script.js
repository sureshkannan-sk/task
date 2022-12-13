var a = document.createElement("INPUT");
    a.setAttribute("type", "text");
    a.setAttribute("placeholder", "Enter a number:");
    a.setAttribute("id","new1");
	document.body.appendChild(a);
	a.style.backgroundColor="white";
	a.style.border="10px solid black";
	a.style.fontFamily="bold";
	a.style.width="10%";
	a.style.fontSize="20px";
	a.style.padding="20px";
	document.write("<br/>");
	document.write("<br/>");
	
	
	q=document.createElement("Button");
    q.setAttribute("onclick","run();");
    document.body.appendChild(q)
    q.innerHTML="run";
	q.style.backgroundColor="white";
	q.style.border="5px solid black";
	q.style.fontSize="20px";
	q.style.width="10%";
	
	
function run(){
  number = Number(document.getElementById("new1").value);
var temp=number;
var sum=0;
while(temp>0)
{
var digit=temp%10;
sum+= digit**3;
temp=parseInt(temp/10);
}
if(sum==number)
{
	document.write('Given number is Armstrong number');	
}
else
{
	document.write('Given number is not an Armstrong number');	
}
}