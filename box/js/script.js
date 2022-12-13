var n = parseInt(prompt("Enter a value:"));//row
var m = parseInt(prompt("Enter a value:"));//column
//debugger;
for(let i = 0; i < n; i++) 
{ 
  for(let j = 0; j < m; j++) 
  { 
    document.write("*");
  }
  
  document.write("<br>");
}