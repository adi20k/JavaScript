const prompt = require("prompt-sync")();

let str = prompt("What is your String?");

const arr =String(str).split('');

let best = 0, curr = 1;
for(let i in arr){
	if(arr[i]!=arr[i-1]){
		best=Math.max(best, curr);
		curr=0;
	}
	curr++;
	
}
best = Math.max(best, curr);




console.log(best);








