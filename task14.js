
        var curdate = new Date(); 
        document.write("Current Date: " + curdate + "<br>");      
        curdate.setHours( curdate.getHours() - 1 );
        document.write("1 hour ago, it was: " + curdate);