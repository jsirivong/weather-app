import type LocationObjectWeatherData from "./LocationData";

export default interface ForecastWeatherData extends LocationObjectWeatherData {
    forecast: {
        forecastday: {
            maxtemp_f: number;
            maxtemp_c: number;
            mintemp_f: number;
            mintemp_c: number;
            avgtemp_f: number;
            avgtemp_c: number;
            totalprecip_mm: number;
            totalprecip_in: number;
        }
    }
}