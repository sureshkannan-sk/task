var a=prompt("enter string");
var b=prompt("enter string");
var z=a.split(" ");
var count=0;
for(i=0;i<z.length;i++)
{
    if(z[i]==b)
    {
        count++;
    }
}
document.write(count);