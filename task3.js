//Question3
//https://www.w3resource.com/javascript/form/password-validation.php

	var password = prompt("Enter the password");
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