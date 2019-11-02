var age = prompt("Enter your age");
        var today = new Date(); 
        var birthyear = today.getFullYear() - age;
        document.write("Your age is " + age + "<br>");
        document.write("Your birth year is " + birthyear);