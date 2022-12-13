f=document.createElement("Button")
f.setAttribute("onclick","start();");
f.innerHTML="click Me"
document.body.appendChild(f);
w=document.createElement("div");


function start(){
   p=document.createElement("Button");
   p.setAttribute("onclick","multiple();"); 
   p.innerHTML="start";
   document.body.appendChild(p)
}
function multiple(){
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("placeholder", "enter the number:");
	x.setAttribute("id","n1");
  
   var y = document.createElement("INPUT");
   y.setAttribute("type", "text");
   y.setAttribute("placeholder", "enter the range:");
   y.setAttribute("id","n2");
   document.body.appendChild(x);
   document.body.appendChild(y);
   q=document.createElement("Button");
   q.setAttribute("onclick","run();");
   document.body.appendChild(q)
   q.innerHTML="run";
}
 
  function run(){
  num1 = Number(document.getElementById("n1").value);
  num2 = Number(document.getElementById("n2").value);
        var  i=1;
while(i<=num2)
{
document.write(i+  "  X  "  +num1+  "  =  "  +i*num1+ "<br>");
i++;
}
}