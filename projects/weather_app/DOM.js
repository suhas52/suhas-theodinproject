export class DOM {
    constructor() {
        this.mainCont = document.getElementById("main-container");
        this.searchBtn = document.getElementById("search-button");
        this.searchBar = document.getElementById("location-search");
        this.weatherDataP = document.getElementById("weather-data");
        this.locationSpan = document.getElementById("location-span");
        this.temperatureSpan = document.getElementById("temperature-span");
        this.weatherSpan = document.getElementById("weather-span");
    }

    changeBackground() {
        
    }

    getLocation() {
        return this.searchBar.value;
    }
    
    updateWeatherData(location, weather, temperature) {
        this.locationSpan.textContent = location;
        this.temperatureSpan.textContent = temperature;
        this.weatherSpan.textContent = weather;
        this.weatherDataP.hidden = false;
    }
}