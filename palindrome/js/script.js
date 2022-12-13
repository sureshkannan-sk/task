var number=parseInt(prompt("Enter the palindrome:"));
var a = number;
var b = 0;
while(number!=0){
	series=number%10
	b= (b*10)+series;
	number= parseInt(number/10);
}
 if (b==a){
	console.log("Palindrome Number");
}
else{
	console.log("Not a Palindrome");
}
