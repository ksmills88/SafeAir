$(document).ready(function () {
    var accountForm = $("#account-crt-form");
    var firstNameInput = $("#firstName");
    var lastNameInput = $("#lastName");
    var emailInput = $("#email");
    var passwordInput = $("#password");

    $("#crt-btn").on("click", function handleAccCreate(event) {
        event.preventDefault();
        var newUser = {
            firstName: firstNameInput.val().trim(),
            lastName: lastNameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
        
        createUser(newUser);
        alert("Account Created!")

    });

    function createUser(newUser) {
        $.post("/api/createaccount/", newUser, function () {
           
        });
    }

});