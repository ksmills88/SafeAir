$(document).ready(function () {
    var accountForm = $("#account-crt-form")
    var firstNameInput = $("#firstName");
    var lastNameInput = $("#lastName");
    var emailInput = $("#email");
    var passwordInput = $("#password");

    $("#crt-btn").on("click", function handleFormSubmit(event) {
        // event.preventDefault();
        var newUser = {
            firstName: firstNameInput.val().trim(),
            lastName: lastNameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        console.log(newUser);

        createUser(newUser)
    });

    function CreateUser(User) {
        $.post("/api/createaccount/", User, function() {});
      }

});