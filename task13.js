var curdate = new Date();
var milisec = curdate.getTime();
var min = milisec / 60000;
console.log("Current Date: " + curdate);
console.log("Elapsed miliseconds since Jan 1, 1970: " + milisec);
console.log("Elapsed minutes since Jan 1, 1970: " + min);