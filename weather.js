// Commands
// 1. npm init -y
// 2. npm install axios
// axios => promise based library(to make http request)

const axios = require('axios');
const location = process.argv[3];

async function helper(){
    try{
    // makes a http get request to a server
    //get woeid
    const response = await axios.get('https://www.metaweather.com/api/location/search/?query='+location)
    const woeid = response.data[0].woeid
    //get raw weather using woeid
    //get raw response
    const rawResponse = await axios.get(`https://www.metaweather.com/api/location/${woeid}/`);
    //filter required data
    console.log(rawResponse)
    const TodayWeather = rawResponse.data['consolidated_weather'][0];
    const currentState = TodayWeather['weather_state_name'];
    const temp = Math.ceil(TodayWeather['the_temp']);

    console.log(`Current Conditions in ${location}
                    ${temp} ${currentState}
                    `);
    }catch(err){
        console.log("some error occurred");
    }
}
helper();