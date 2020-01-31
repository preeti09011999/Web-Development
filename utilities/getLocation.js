const axios = require("axios");
// // node weather.js today 
// input

 module.exports = async function () {
  try {
    // get location
    const response = await axios.get(
      "http://ip-api.com/json/"
    );

    const location = response.data.city;
    return location
  } catch (err) {
    console.log("Some error occurred");
  }
 }


