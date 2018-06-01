// on click for droners
    $("#droners").click(function(){
        $(".middle-section").empty();
        topDisplay();
        droners();
    });
// on click for when2fly
    $("#weather").click(function(){
        $(".middle-section").empty();
        topDisplay();
        when2Fly();
    });
// on click for alert
    $("#alert").click(function(){
        $(".middle-section").empty();
        topDisplay();
        alerts();
        console.log("alerts here")
    });
// on click for mail
    $("#mail").click(function(){
        $(".middle-section").empty()
        topDisplay();
        console.log("mailhere")
        mail();
        

    });

    var aeroArchive= $('<a href="./database.html">AeroArchive</a>');
    var alert= $('<a href="./report.html">Alert</a>');
    var notifly= $('<a href="./notifly.html">NotiFly</a>');
    var liveTracker= $('<a href="./flighttracker.html">Live Tracker</a>');
    

    var topDisplay = function(){
        $(".aeroLink").html(aeroArchive);
        $(".alertLink").html(alert);
        $(".notiflyLink").html(notifly);
        $(".trackerLink").html(liveTracker);

    }

    var when2Fly = function(){
        $(".middle-section").html('<h2>When2Fly(Coming Soon!)</h2><br><p>Let IBM Watson forecast the best flying days for you and your friends.</p>')
    }
    var alerts = function(){
        $(".middle-section").html('<h2>Alerts(Coming Soon!)</h2><br><p>Find out what is happening in your area.</p>')
    }
    var mail = function(){
        $(".middle-section").html('<h2>Mail(Coming Soon!)</h2><br><p>Connect!</p>')
    }
    
    var droners = function(){
        console.log("hi droners")
        $(".middle-section").html('<h2>Droners(Coming Soon!)</h2><br><p>A social network for Drone enthusiasts</p>')
    }
    
    