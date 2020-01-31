const getRawWeather = require('../utilities/getRawWeather');
const getLocation = require('../utilities/getLocation');
module.exports = async function(location){
    const fullWeather = await getRawWeather(location);
    // 5 days weather

    if (location == undefined){
        location = getLocation();
    }
    for(var i = 0; i<5; i++){
    const TodayWeather = fullWeather[i];
    const currentState = TodayWeather['weather_state_name'];
    const applicable_date = TodayWeather['applicable_date'];
    const min_temp = Math.ceil(TodayWeather['min_temp']);
    const max_temp = Math.ceil(TodayWeather['max_temp']);
    const temp = Math.ceil(TodayWeather['the_temp']);

  // template String syntax=> you can also use normal strings
  console.log(`${applicable_date} - Low: ${min_temp} | High: ${max_temp} | ${currentState}
                
                        `);
    }
};