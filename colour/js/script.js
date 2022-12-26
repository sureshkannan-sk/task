var btn = document.createElement("button");
btn.setAttribute("id","btn");
btn.setAttribute("onclick","sum()");
btn.innerHTML="Click Here!";
btn.style.marginLeft="45%";
document.body.appendChild(btn);
function sum()
{
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("btn");
	document.body.style.backgroundColor = '#' + randomColor;
}