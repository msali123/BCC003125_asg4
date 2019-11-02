//Question1
var city = "Hyderabad";
var replace = city.replace("Hyder","Islam");
document.write("<h1>City: " +city+ "</h1>");
document.write("<h1>After Replacment: " +replace+ "</h1><br>");


//Question2
var string = "472";
document.write("<h1>Value: " + string + "</h1>");
document.write("<h1>Type: " + typeof(string) + "</h1>");
var number = parseInt(string);
document.write("<h1>Value: " + string + "</h1>");
document.write("<h1>Value: " + typeof(number) + "</h1><br>");

//Question3
//https://www.w3resource.com/javascript/form/password-validation.php
	/* var password = prompt("Enter the password");
        var pwdFormat = /(?=.*\d)(?=.*[a-z]).{8,}/;
        var noStartwithNum = /^[a-z][a-z0-9_]*$/;
       // var pwdFormat = /^[A-Za-z]\w{8,}$/;
        if (password.match(pwdFormat) && password.match(noStartwithNum)) {
            alert("Password is validated");
        }
                   
        else {
            alert("Please enter valid password!");
            document.write("<h3>Password Rules:</h3>");
            document.write(" a. It should contain alphabets and numbers<br>");
            document.write(" b. It should not start with a number<br>");
            document.write(" c. It must at least 8 characters long<br>");
        }

//Question4
  var email = prompt("Enter your email i.d");
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(mailformat)) {
            alert("Email address is validated");
        }
        else {
            alert("Please type a valid email address!");
        }


//Question5

var num = prompt("Enter the number");

document.write("<h1>Floor Value: "+Math.floor(num) +"</h1>");
document.write("<h1>Round Off Value: "+Math.round(num) +"</h1>");
document.write("<h1>Ceiling Value: "+Math.ceil(num) +"</h1><br>");



//Question6
document.write("<h2> random dice value" +Math.floor(Math.random()*6+1)+" </h2>");
document.write("<h2> random dice value" +Math.floor(Math.random()*6+1)+" </h2>");



//Question7
var text = "The quick brown fox jumps over the lazy dog";
var searchText = prompt('value');
var textIndex = -1;
var counter = 0;
for(var a = 0 ; a < text.length; a++){
    textIndex = text.indexOf(searchText, textIndex+1);
    if(textIndex >= 0) {
        counter++;
    }else{
        break;
    }
    console.log("Index = "+textIndex);
}
if(counter==0){
    console.log("Not found");
}else{
    console.log("counter = "+counter);
}
*/

//Question8
