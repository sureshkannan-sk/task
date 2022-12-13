var n = parseInt(prompt("enter number"));
var reverseNumber = 0;
while(n!=0){
	let digit=n%10;
	reverseNumber= (reverseNumber*10)+digit;
	n = parseInt(n/10);
}
console.log(reverseNumber);