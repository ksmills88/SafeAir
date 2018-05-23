$(document).ready(function () {
    var accountCreateForm = $("#account-crt-form")
    var firstNameInput = $("firstName");
    var lastNameInput = $("lastName");
    var emailInput = $("email");
    var passwordInput = $("password");

    $(accountCreateForm).on("submit", function handleFormSubmit(event) {
        event.preventDefault();
        var newUser = {
            firstName: firstNameInput.val().trim(),
            lastName: lastNameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        console.log(newUser);
    });
});