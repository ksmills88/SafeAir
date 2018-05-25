$(document).ready(function () {
    var emailLogin = $("#emailLogin");
    var passwordLogin = $("#passwordLogin");

    $("#loginBtn").on("Click", function handleLogin (event) {
        event.prevenDefault();
        var loginInfo = {
            email: emailLogin.val().trim(),
            password: passwordLogin.val().trim()
        };

        login(loginInfo);
        console.log("Logged in!");

    });
    function login(loginInfo) {
        $.get("api/login/", loginInfo, function () {
            alert("Logging In!");
        })
    }
})