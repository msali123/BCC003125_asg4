var input = prompt("Enter numbers");
var digits = ("" + input).split("");
var count = 0;
for (var i = 0; i < digits.length; i++) {
    count += (digits[i]) / digits.length;
}
document.write("Your input is: " + input + "<br>")
document.write("Mean of " + digits + " is " + count);