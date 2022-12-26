var div=document.createElement("div");
document.body.appendChild(div); 
var input=document.createElement("input");
input.setAttribute("id","inputid");
div.appendChild(input);
document.write("</br>");
var d=document.createElement("div");
div.appendChild(d);
var but=document.createElement("button");
but.innerHTML="TEST";
d.appendChild(but);
var output=document.createElement("h1");
output.setAttribute("id","output");
div.appendChild(output);
but.onclick=function()
{
	document.getElementById("output").innerHTML="suresh";
	document.getElementById("output").style.color=String(document.getElementById("inputid").value);
}