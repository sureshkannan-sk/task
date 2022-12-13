/*var a=prompt("enter a string:")
var b=prompt("enter b string:")
count=0;
temp=0;
for(i=0;i<a.length;i++)
 {
   if(a[i]=="a"|| a[i]=="e" || a[i]=="i"||a[i]=="o"||a[i]=="u" ) 
   {
    count++;
   };
 }
for(i=0;i<b.length;i++)
 {
  if(b[i]=="a"|| b[i]=="e" || b[i]=="i"||b[i]=="o"||b[i]=="u" ) 
   {
    temp++;
   }
 }
   if(count>temp)
   {
	   document.write(count)
   }
  else
  {
	  document.write(temp);
  }*/
  
/*var x ="suresh";
var consonant =0;
for(i=0;i<x.length;i++)
 {
   if(x[i] != "a" && x[i]!= "e" && x[i] != "i" && x[i] != "o" && x[i] != "u" )
   {
	   document.write(x[i]);
	   consonant++;
   }
 }*/
 
 // vowels count using function

function vowels(a,b)
{
var count=0;
var temp=0
 for(i=0;i<a.length;i++)
 {
   if(a[i]=="a"|| a[i]=="e" || a[i]=="i"||a[i]=="o"||a[i]=="u" ) 
   {
     count++;
   }
 }
 for(i=0;i<b.length;i++)
 {
  if(b[i]=="a"|| b[i]=="e" || b[i]=="i"||b[i]=="o"||b[i]=="u" ) 
   {
     temp++;
   }
 }
   if(count>temp)
   {
	   return count;
   }
  else
  {
	  return temp;
  }	
}
var a = prompt("Enter a string one:");
var b = prompt("Enter a string two:");

var result = vowels(a,b);
document.write(result);
  