n=prompt("enter the date mm-dd-yyyy")
a= new Date()
currYear=a.getFullYear()
const bY = new Date(n);
const year = bY.getFullYear(); 
age=currYear-year;
console.log(age)