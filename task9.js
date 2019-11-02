
        var inp = "<p><strong><em>Only print this</em></strong></p>";
        console.log(inp);
        console.log("Output :  " + inp.replace( /(<([^>]+)>)/ig, ''));