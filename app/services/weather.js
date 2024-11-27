const axios = require('axios');

const queryWeather = async () => {
    try {
        const response = await axios.get('https://api.weatherapi.com/v1/forecast.json', {
            params: {
                key: process.env.WEATHER_API_KEY,
                q: process.env.ZIP,
                days: 1,
                aqi: 'no',
                alerts: 'no',
            },
        });

        return {
            minTemp: `${response.data.forecast.forecastday[0].day.mintemp_f}° F`,
            maxTemp: `${response.data.forecast.forecastday[0].day.maxtemp_f}° F`,
            maxWind: `${response.data.forecast.forecastday[0].day.maxwind_mph}mph`,
            summary: response.data.forecast.forecastday[0].day.condition.text,
            willRain: !!response.data.forecast.forecastday[0].day.daily_will_it_rain,
            willSnow: !!response.data.forecast.forecastday[0].day.daily_will_it_snow,
        };
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        throw error;
    }
};

module.exports = { queryWeather };
