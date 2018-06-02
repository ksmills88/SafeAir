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
        setWeather();
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
    var weatherAPIKey="f3b57377fd45d3c75ef5eb8b659e8ad3";
    var temperature;
    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=Orlando,Florida&units=imperial&appid=4b6c7091744da6c1ad4dcd9d3603fd15"

    function setWeather() {
        $.ajax({
            url: weatherURL,
            method: "GET"
        })
        .then(function(response){
            console.log(response);
            $(".middle-section").append("<div><img id='weather-icon'src='http://openweathermap.org/img/w/"+ response.weather[0].icon +".png'></div>")
            $(".middle-section").append('<h3>Current Temperature: ' + response.main.temp + '&#176;F</h3><br><p></p>')
        })
    }

    var aeroArchive= $('<a href="./database.html"><img class="dyn-image"src="./images/aeroarchiveP2.png"></a>');
    var alert= $('<a href="./report.html"><img class="dyn-image"src="./images/alertP2.png"></a>');
    var notifly= $('<a href="./notifly.html"><img class="dyn-image"src="./images/notiflyp2.png"></a>');
    var liveTracker= $('<a href="./flighttracker.html"><img class="dyn-image"src="./images/livetrackerP2.png"></a>');
    

    var topDisplay = function(){
        $(".pageLink").append(aeroArchive);
        $(".pageLink").append(alert);
        $(".pageLink").append(notifly);
        $(".pageLink").append(liveTracker);

    }

    var when2Fly = function(){


        $(".middle-section").append('<h2><strong>When2Fly(Coming Soon!)</strong></h2>');
        $(".middle-section").append('<p>Let IBM Watson forecast the best flying days for you and your friends.</p>')
    }
    var alerts = function(){
        $(".middle-section").html('<h2>Notifications(Coming Soon!)</h2><br><p>Find out what is happening in your area.</p>')
    }
    var mail = function(){
        $(".middle-section").html('<h2>Mail(Coming Soon!)</h2><br><p>Connect!</p>')
    }
    
    var droners = function(){
        console.log("hi droners")
        $(".middle-section").html('<h2>Droners(Coming Soon!)</h2><br><p>A social network for Drone enthusiasts</p>')
    }
    
    