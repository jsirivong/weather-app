export default interface WebsiteWeatherData {
    location: string;
    region: string;
    country: string,
    localtime: string,
    temperature_f: number;
    temperature_c: number;
    feelslike_f: number;
    feelslike_c: number;
    uv: number,
    wind_mph: number,
    wind_kph: number,
}