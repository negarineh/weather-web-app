import * as actionTypes from './actionTypes';
import { CITIES } from '../../src/assets/data/cities';

const initialState = {
    // data: null,
    data: {
        data: [
            {
                weather: {
                    description: '',
                },
                max_temp: 0,
                datetime: '',
                temp: 0,
                min_temp: 0,
            }],
        city_name: '',
    },
    cities: CITIES,
    currentCity: 0,
};

const fetchCityStart = (state) => {
    return {
        ...state,
        cities: CITIES,
    };
};

const fetchCitySuccess = (state, action) => {
    return {
        ...state,
        data: action.data,
    };
};

const fetchCityFailed = (state) => {
    return {
        ...state,
    };
};

export const nextCity = (state) => {
    return {
        ...state,
        currentCity: state.currentCity + 1
    };
};

export const previousCity = (state) => {
    return {
        ...state,
        currentCity: state.currentCity - 1
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CITY_START: return fetchCityStart(state);
        case actionTypes.FETCH_CITY_SUCCESS: return fetchCitySuccess(state, action);
        case actionTypes.FETCH_CITY_FAILED: return fetchCityFailed(state);
        case actionTypes.NEXT_CITY: return nextCity(state);
        case actionTypes.PREVIOUS_CITY: return previousCity(state);
        default:
            return state;
    }
};

export default reducer;