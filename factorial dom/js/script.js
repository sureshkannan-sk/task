var a = document.createElement("INPUT");
    a.setAttribute("type", "text");
    a.setAttribute("placeholder", "Enter a number:");
    a.setAttribute("id","new1");
	document.body.appendChild(a);
	
	
	a.style.backgroundColor="white";
	a.style.border="10px solid black";
	a.style.width="40%";
	a.style.fontSize="20px";
	a.style.fontFamily="italics";
	a.style.padding="20px";
	
	document.write("<br/>", "<br/>");
	
	
	
	
	q=document.createElement("Button");
    q.setAttribute("onclick","run();");
    document.body.appendChild(q)
    q.innerHTML="run";
	q.style.backgroundColor="white";
	q.style.border="5px solid black";
	q.style.fontSize="20px";
	q.style.width="10%";
	
	
	
function run(){
  num = Number(document.getElementById("new1").value);
  var fact =1;
for(i=1;i<=num;i++)
{
	fact=fact*i;
	
}
document.write(fact);
}




