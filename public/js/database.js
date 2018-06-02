$(document).ready(function() {
    
    //on submit
    $("#submit-button").on("click", function(event) {
      event.preventDefault();
    //   console.log("clicked");
        
      //variables 
      var nnumber = $("#n-number-submit").val().trim();
      var serialNumber = $("#serial-number-submit").val().trim();
      var craftType = "#craft-type";
      var engineType = "#engine-type";
      var craftChoiceArray = [];
      var engineChoiceArray = [];
      var urlInput = [];


      var logCheckBoxes = function(input, array) {
        var checkboxes = [];
        $( input + ":checked").each(function() {
        array.push($(this).val());
        });
    };

    logCheckBoxes(craftType, craftChoiceArray);
    logCheckBoxes(engineType, engineChoiceArray);

    

      
      
             var createURL = function () {
            

            if (nnumber !== "") {
                urlInput = "/" + nnumber;
             };
            
            if ((nnumber !== "") && (serialNumber !== "")) {
                urlInput += "&serialnumber=" + "%22" + serialNumber + "%22";
                // urlInput += serialNumber;
            } else if ((nnumber == "") && (serialNumber !== "")) {
                urlInput += "/serialnumber=" + "%22" + serialNumber + "%22";
            };
            
            if ((nnumber !== "") && (serialNumber !== "") && (craftChoiceArray.length >= 1)) {
                // craftString = craftChoiceArray.toString();
                urlString = craftChoiceArray.join("+");
                console.log(urlString);
                urlInput += "&type=" +  urlString;
            } else if ((nnumber !== "") && (serialNumber == "") && (craftChoiceArray.length >= 1)) {
                urlString = craftChoiceArray.join("+");
                console.log(urlString);
                urlInput += "&type=" + urlString;
            }  else if ((nnumber == "") && (serialNumber !== "") && (craftChoiceArray.length >= 1)) {
                urlString = craftChoiceArray.join("+");
                console.log(urlString);
                urlInput += "&type=" + urlString;
            } else if ((nnumber == "") && (serialNumber == "") && (craftChoiceArray.length >= 1)) {
                urlInput = "/" + craftChoiceArray.join(",");
                
            };

            if ((nnumber !== "") && (serialNumber !== "") && (craftChoiceArray.length >= 0) && (engineChoiceArray.length >= 1)) {
                // craftString = craftChoiceArray.toString();
                urlString = craftChoiceArray.join("+");
                console.log(urlString);
                urlInput += "&engine=" + urlString;
            } else if ((nnumber !== "") && (serialNumber == "") && (craftChoiceArray.length >= 0) && (engineChoiceArray.length >= 1)) {
                urlString = craftChoiceArray.join("+");
                console.log(urlString);
                urlInput += "&engine=" + urlString;
            }  else if ((nnumber == "") && (serialNumber !== "") && (craftChoiceArray.length >= 0) && (engineChoiceArray.length >= 1)) {
                urlString = craftChoiceArray.join("+");
                console.log(urlString);
                urlInput += "&engine=" + urlString;
            } else if ((nnumber == "") && (serialNumber !== "") && (craftChoiceArray.length >= 0) && (engineChoiceArray.length >= 1)) {
                urlString = craftChoiceArray.join("+");
                console.log(urlString);
                urlInput += "&engine=" + urlString;
            } else if ((nnumber == "") && (serialNumber == "") && (craftChoiceArray.length = 0) && (engineChoiceArray.length >= 1)) {
                urlString = craftChoiceArray.join("+");
                console.log(urlString);
                urlInput += "/engine=" + urlString;
            };
    };
        createURL();


        

        
 
        

        function generateTableHeaders() {



            var headerRowTag = $("<tr>");
            headerRowTag.addClass("schedule-headers")
            var a = "<th>N-Number</th>";
            var b = "<th>Serial Number</th>"
            var c = "<th>Craft Type</th>";
            var d = "<th>Manufacture Year</th>";
            var e = "<th>Cert Exp Date</th>";
            var f = "<th>Registration Type</th>";
            var g = "<th>City</th>";
            var h = "<th>State</th>";

        
            headerRowTag.append(a);
            headerRowTag.append(b);
            headerRowTag.append(c);
            headerRowTag.append(d);
            headerRowTag.append(e);
            headerRowTag.append(f);
            headerRowTag.append(g);
            headerRowTag.append(h);
        
            $("table").append(headerRowTag);
        };

        function createListItem(nNumberData, serialNumberData, craftTypeData, mfrDateData, expDateData, regTypeData, cityData, stateData, countyData) {

            //takes the number classifier from database for aircraft type and replaces it to the corresponding def 
            if (craftTypeData == "1") {
                craftTypeData = "Glider";
            } else if (craftTypeData == "2") {
                craftTypeData = "Balloon";
            } else if (craftTypeData == "3") {
                craftTypeData = "Blimp/Derigible";
            } else if (craftTypeData == "4") {
                craftTypeData = "Fixed Wing Single Engine";
            } else if (craftTypeData == "5") {
                craftTypeData = "Fixed Wing Multi Engine";
            } else if (craftTypeData == "6") {
                craftTypeData = "Weight-Shift-Control";
            } else if (craftTypeData == "7") {
                craftTypeData = "Rotorcraft";
            } else if (craftTypeData == "8") {
                craftTypeData = "Powered Parachute";
            } else if (craftTypeData == "9") {
                craftTypeData =  "Gyroplane";
            };
    
            //takes the number classifier from database for reg type and replaces it with corresponding def
            if (regTypeData == "1") {
                regTypeData = "Individual";
            } else if (regTypeData == "2") {
                regTypeData = "Partnership";
            } else if (regTypeData == "3") {
                regTypeData = "Corporation";
            } else if (regTypeData == "4") {
                regTypeData = "Co-Owned";
            } else if (regTypeData == "5") {
                regTypeData = "Government";
            } else if (regTypeData == "8") {
                regTypeData = "Non Citizen Corp";
            } else if (regTypeData == "9") {
                regTypeData = "Non Citizen Co-Owned";
            };
    
            //creates new table row with our database info
            var rowTag = $("<tr>");
            rowTag.attr("data-name", nNumberData);
            var nNumberValue = "<td>" + nNumberData + "</td>";
            var serialNumberValue = "<td>" + serialNumberData + "</td>";
            var craftTypeValue = "<td>" + craftTypeData + "</td>";
            var mfrDateValue = "<td>" + mfrDateData + "</td>";
            var expDateValue = "<td>" + expDateData + "</td>";
            var regTypeValue = "<td>" + regTypeData + "</td>";
            var cityValue = "<td>" + cityData + "</td>";
            var stateValue = "<td>" + stateData + "</td>";
            
        
            rowTag.append(nNumberValue);
            rowTag.append(serialNumberValue);
            rowTag.append(craftTypeValue);
            rowTag.append(mfrDateValue);
            rowTag.append(expDateValue);
            rowTag.append(regTypeValue);
            rowTag.append(cityValue);
            rowTag.append(stateValue);
        
        
            $("table").append(rowTag);
          };

         // empty table and call function to generate table headers
         $("table").empty();
         generateTableHeaders();

         $.ajax({
            method: "GET",
            url: "/search" + urlInput
        }).then(function(data) {
            
            var newData = JSON.parse(JSON.stringify(data));
            // var id = newData.nnumber;

            for (var i =0; i < newData.length; i++) {
                var nNumberData = newData[i].nnumber;
                var serialNumberData = newData[i].serialnumber;
                var craftTypeData = newData[i].typeaircraft;
                var mfrDateData = newData[i].yearmfr
                var expDateData = newData[i].expirationdate;
                var regTypeData = newData[i].typeregistrant;
                var cityData = newData[i].city;
                var stateData = newData[i].state;

                 createListItem(nNumberData, serialNumberData, craftTypeData, mfrDateData, expDateData, regTypeData, cityData, stateData);
            };
 
            
            
            // location.reload();
        }); 

     

    

    //     var createURL = function () {
    //         urlInput = "/search"; 

    //         if (nnumber !== "") {
    //             urlInput += "/nnumber=" + "%22" + nnumber + "%22";
    //         };
            
    //         if ((nnumber !== "") && (serialNumber !== "")) {
    //             urlInput += "&serialnumber=" + "%22" + serialNumber + "%22";
    //             // urlInput += serialNumber;
    //         } else if ((nnumber == "") && (serialNumber !== "")) {
    //             urlInput += "/serialnumber=" + "%22" + serialNumber + "%22";
    //         };
            
    //         if ((nnumber !== "") && (serialNumber !== "") && (craftChoiceArray.length >= 1)) {
    //             // craftString = craftChoiceArray.toString();
    //             urlString = craftChoiceArray.join("+");
    //             console.log(urlString);
    //             urlInput += "&type=" +  urlString;
    //         } else if ((nnumber !== "") && (serialNumber == "") && (craftChoiceArray.length >= 1)) {
    //             urlString = craftChoiceArray.join("+");
    //             console.log(urlString);
    //             urlInput += "&type=" + urlString;
    //         }  else if ((nnumber == "") && (serialNumber !== "") && (craftChoiceArray.length >= 1)) {
    //             urlString = craftChoiceArray.join("+");
    //             console.log(urlString);
    //             urlInput += "&type=" + urlString;
    //         } else if ((nnumber == "") && (serialNumber == "") && (craftChoiceArray.length >= 1)) {
    //             urlString = craftChoiceArray.join("+");
    //             console.log(urlString);
    //             urlInput += "/type=" + urlString;
    //         };

    //         if ((nnumber !== "") && (serialNumber !== "") && (craftChoiceArray.length >= 0) && (engineChoiceArray.length >= 1)) {
    //             // craftString = craftChoiceArray.toString();
    //             urlString = craftChoiceArray.join("+");
    //             console.log(urlString);
    //             urlInput += "&engine=" + urlString;
    //         } else if ((nnumber !== "") && (serialNumber == "") && (craftChoiceArray.length >= 0) && (engineChoiceArray.length >= 1)) {
    //             urlString = craftChoiceArray.join("+");
    //             console.log(urlString);
    //             urlInput += "&engine=" + urlString;
    //         }  else if ((nnumber == "") && (serialNumber !== "") && (craftChoiceArray.length >= 0) && (engineChoiceArray.length >= 1)) {
    //             urlString = craftChoiceArray.join("+");
    //             console.log(urlString);
    //             urlInput += "&engine=" + urlString;
    //         } else if ((nnumber == "") && (serialNumber !== "") && (craftChoiceArray.length >= 0) && (engineChoiceArray.length >= 1)) {
    //             urlString = craftChoiceArray.join("+");
    //             console.log(urlString);
    //             urlInput += "&engine=" + urlString;
    //         } else if ((nnumber == "") && (serialNumber == "") && (craftChoiceArray.length = 0) && (engineChoiceArray.length >= 1)) {
    //             urlString = craftChoiceArray.join("+");
    //             console.log(urlString);
    //             urlInput += "/engine=" + urlString;
    //         };
    // };
    //     createURL();

        
        // get request
    //     $.ajax({
    //         method: "GET",
    //         url: "/search/1133x"
    //     }).then(function(data) {
    //         console.log(data);

            
    //         // location.reload();
    //     }); 
    });
     
    //post info to html page
    //take a look at current build and convert to handlebars
    //clean up database search
    //work on incident submit

  
});


