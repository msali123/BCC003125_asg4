
        var now = new Date();
        var theday = now.getDate();
        if (theday < 16) {
            document.write("<h1>First fifteen days of the month</h1>");
        }
        else {
            document.write("<h1>Last fifteen days of the month</h1>");
        }