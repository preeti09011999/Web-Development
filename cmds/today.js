const getRawWeather = require("../utilities/getRawWeather");
module.exports = async function(location){
    const fullWeather = await getRawWeather(location);
    // 5 days weather
    const TodayWeather = fullWeather[0];
    const currentState = TodayWeather['weather_state_name'];
    const temp = Math.ceil(TodayWeather['the_temp']);

  // template String syntax=> you can also use normal strings
  console.log(`Current conditions in ${location}
                  ${temp} ${currentState}
                        `);
};