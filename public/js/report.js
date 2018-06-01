$(document).ready(function () {
    var name = $("#name");
    var location = $("#location");
    var n = $("#N-number");
    var comments = $("#comments");
    // var picFile = $("#myFile");

    $("#submit").on("click", function submitForm (event) {
        console.log("button clicked")
        event.preventDefault();
        var accidentInfo = {
            name: name.val().trim(),
            location: location.val().trim(),
            nNumber: n.val().trim(),
            comments: comments.val().trim()
        };

        submitAccident(accidentInfo);
        console.log("Submitted!");

    });
    function submitAccident(accidentInfo) {
        $.post("api/alert/", accidentInfo, function () {
            console.log("Accident info sent");
        })
    }


})