var flex=document.createElement("div");
flex.style.display="flex";
flex.style.flexDirection="column";
flex.style.justifyContent="center";
flex.style.alignItems="center";
document.body.appendChild(flex);

var input=document.createElement("input");
input.setAttribute("id","input");
input.placeholder="enter the range";
input.style.margin="10px";
input.style.backgroundColor="white";
input.style.border="2px blue";
flex.appendChild(input);

var but=document.createElement("button");
but.setAttribute("id","but");
but.innerHTML="click";
but.style.margin="10px";


but.style.backgroundColor="green";
flex.appendChild(but);
but.onclick=function()
{
	var range=parseInt(document.getElementById("input").value);
	var b=true;
	for(number=1;number<=range;number++)
	{
		var output=document.createElement("p");
		output.setAttribute("id","output");
		output.style.display="flex";
		output.style.flexDirection="column";
		flex.appendChild(output);
		if(number>2)
		{
			for(i=2;i<number;i++)
			{
				if(number%i==0)
				{
					b=false;
				}
			}
		}
		if(b)
		{
			output.innerHTML=number+"prime number";
		}
		
		b=true;
	}
}