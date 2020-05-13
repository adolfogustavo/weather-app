import { SET_CITY } from './../actions';

// Si el state nos llegara a venir en nulo, con esta convención nos aseguramos de asignar un valor por defecto state = {}, en lugar de state sólo
export const city = (state = {}, action) => {
    console.log('state=>', state);
    console.log('action=>', action);
    switch(action.type) {
        case SET_CITY:
            return action.payload;
        default:
            return state
    }
}