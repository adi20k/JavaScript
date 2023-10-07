const prompt = require("prompt-sync")();

let n= parseInt(prompt("What is your Number?"));

let input = prompt("Enter a list of number up to "+n+", separated by space:");
let array = input. split(" ");
let total = n  * (n + 1) / 2;
for (i in array){
	 total -= parseInt((array[i]));
}
	 
 if(total>0){
	 console.log("Missing Number is -> "+total);
 }else{
	 console.log("Worng Input");
 }





