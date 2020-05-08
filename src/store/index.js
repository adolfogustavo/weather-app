import { createStore } from 'redux';
import { city } from './../reducers/city';

const initialState = {
    city: 'Santiago,cl'
};


// Primer parámetro: reducer
// Segundo parámetro: estado inicial
// Tercer parámetro (opcional): debug
export const store = createStore(city, initialState, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());