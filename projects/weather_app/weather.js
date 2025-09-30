import { API_KEY } from "./api.js";

export class Weather {
    constructor() {
        this.URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
        this.current_location = null;
        this.current_temperature = null;
        this.current_weather = null;
    }

    async getWeather() {
        const response = await fetch(`${this.URL}${this.current_location}?key=${API_KEY}`);
        const data = await response.json();
        return data;
    }
} 