var input = prompt("Enter the number");
var dec = prompt("At how much decimal places you want to round it?");
var tonum = Number(input);
var decNum = Number(dec);
console.log(tonum.toFixed(decNum));