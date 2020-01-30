// Commands
// 1. npm init -y
// 2. npm install axios
// axios => promise based library(to make http request)

const axios = require('axios');
async function helper(){
    // makes a http get request to a server
    const response = await axios.get('https://www.metaweather.com/api/location/search/?query=london');
    // your requested information will be inside data key
    console.log(response.data);
    // woeid
    const woeid = response.data[0].woeid
    const anotherResponse = await axios.get('https://www.metaweather.com/api/location/'+ woeid + "/");
    console.log(anotherResponse)
}
helper();