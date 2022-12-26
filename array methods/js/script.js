//at

a = [13,23,15,78,89,45]

document.write(a.at(23))
document.write("<br>"); 
 
// concat 

a = [13,23,15,78,89,45]
b = [25.78,56,25,85]
c = a.concat(b)
document.write(c)
document.write("<br>");


// fill (val,strt,end)

a = [13,23,15,78,89,45]
document.write(a.fill(0,2,4))
document.write("<br>");


//includes

sports = ["cricket", "football", "volleyball", "hockey"];
document.write(sports.includes("football"));
document.write("<br>");


//join 

sports = ["cricket", "football", "volleyball", "hockey"];
document.write(sports.join('-'));
document.write("<br>");


// lastindexof 

sports = ["cricket", "football", "volleyball", "hockey","cricket"];
document.write(sports.lastIndexOf("cricket"));
document.write("<br>");

//length

sports = ["cricket", "football", "volleyball", "hockey"];
l= sports.length
document.write(l);
document.write("<br>");


//pop 

sports = ["cricket", "football", "volleyball", "hockey"];
document.write(sports.pop());
document.write("<br>");
document.write(sports);
document.write("<br>");

//push 

sports = ["cricket", "football", "volleyball", "hockey"];
z = sports.push("kabbadi","tennis")
document.write(z);
document.write("<br>");

//reverse

sports = ["cricket", "football", "volleyball", "hockey"];
document.write(sports.reverse());
document.write("<br>");


//shift 

sports = ["cricket", "football", "volleyball", "hockey"];
document.write(sports.shift());
document.write("<br>");
document.write(sports);
document.write("<br>");

//unshift

sports = ["cricket", "football", "volleyball", "hockey"];
document.write(sports.unshift("kabbadi","rugby"));
document.write("<br>");
document.write(sports);
document.write("<br>");

//slice

sports = ["cricket", "football", "volleyball", "hockey"];
document.write(sports.slice(1,3));
document.write("<br>");
document.write(sports.slice(-4,-2)); //start omittd
document.write("<br>");


//sort

months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
document.write(months);
document.write("<br>");


