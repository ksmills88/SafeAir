
    $("button").click(function(){
        $(".img-section").empty();
    
        topDisplay();
        // whichDisplay();
    });
    var aeroArchive= $('<a href="./database.html">AeroArchive</a>');
    var alert= $('<a href="./report.html">Alert</a>');
    var notifly= $('<a href="./database.html">NotiFly</a>');
    var liveTracker= $('<a href="./flighttracker.html">Live Tracker</a>');
    

    var topDisplay = function(){
        $(".aeroLink").html(aeroArchive);
        
        $(".alertLink").html(alert);
  
        $(".notiflyLink").html(notifly);
        $(".trackerLink").html(liveTracker);



    }