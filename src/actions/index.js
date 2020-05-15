// Action creator
import transformForecast from './../services/transformForecast';
import transformWeather from './../services/transformWeather';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

// action creators
const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });


const api_key = '1937a9b104db78459d28d4b6c0384304';
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {

    return dispatch => {        
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));
        
        // fetch or axios
        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log('weather_data=>', weather_data);
                const forecastData = transformForecast(weather_data);
                console.log('forecastData=>', forecastData);

                // modificar el estado con el resultado de la promise (fetch)
                dispatch(setForecastData({ city: payload, forecastData }));
            }
        );
    }
};

export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));

            const api_weather = getUrlWeatherByCity(city);

            fetch(api_weather).then(data => {
                return data.json();
            }).then( weather_data => {
                const weather = transformWeather(weather_data);

                console.log('weather=>', weather)
                
                dispatch(setWeatherCity({ city, weather }));
            });
        });
    }
}