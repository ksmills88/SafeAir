$(document).ready(function () {
    var emailLogin = $("#emailLogin");
    var passwordLogin = $("#passwordLogin");

    $("#loginBtn").on("click", function handleLogin (event) {
        event.preventDefault();
        var loginInfo = {
            email: emailLogin.val().trim(),
            password: passwordLogin.val().trim()
        };

        login(loginInfo);

    });
    function login(loginInfo) {
        $.get("api/login/", loginInfo, function () {
            console.log("Logging In!");
        })
    }
})