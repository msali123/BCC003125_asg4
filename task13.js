var curdate = new Date();
var milisec = curdate.getTime();
var min = milisec / 60000;
document.write("<h1> Current Date: " + curdate+" </h1>");
document.write("<h1> Elapsed miliseconds since Jan 1, 1970: " + milisec+ "</h1>");
document.write("<h1>Elapsed minutes since Jan 1, 1970: " + min +"</h1>");