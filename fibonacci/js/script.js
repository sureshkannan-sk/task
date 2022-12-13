var num=parseInt(prompt("enter the number:"));
let n1=0,n2=1,newTerm;
for(let i=1;i<=num;i++)
{
	console.log(n1);
	newTerm=n1+n2;
	n1=n2;
	n2=newTerm;
}