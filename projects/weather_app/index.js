import { DOM } from "./DOM.js";
import { Weather } from "./weather.js";

const webpage = new DOM();
const weather = new Weather();
const searchBtn = document.getElementById("search-button");


searchBtn.addEventListener("click", () => {
    weather.current_location = webpage.getLocation();
    weather.getWeather(weather.current_location).then(data => {
        console.log(data)
        weather.current_temperature = data.currentConditions.temp;
        weather.current_weather = data.currentConditions.conditions;
        webpage.updateWeatherData(weather.current_location, weather.current_temperature, weather.current_weather);
    })
    
    
})

