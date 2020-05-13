// Action creator
import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });


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