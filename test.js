var Nightmare = require("nightmare");

// STORY: As a developer nerd, I want to be able to take courses on web tech.
new Nightmare({ show: true })
  // Visit login page
  .goto("https://www.netflix.com/login")

  .type("#email", "aditp928@gmail.com")

  .type("#password", "school12!1")
  
  .click(".btn-submit")
  
  .end()

  .then(function() {
    console.log("Done!");
  })

  .catch(function(err) {
    console.log(err);
  });
