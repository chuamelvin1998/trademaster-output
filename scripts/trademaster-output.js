const process = require("process");
const axios = require("axios");

// Get the sessionID from the command line arguments
const sessionID = process.argv[2].split("=")[1];

// Perform the API call using the sessionID
axios
  .get("https://api.example.com/sessions/" + sessionID)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
