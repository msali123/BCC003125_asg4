//Question4
var email = prompt("Enter your email i.d");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (email.match(mailformat)) {
    alert("Email address is validated");
}
else {
    alert("Please type a valid email address!");
}
