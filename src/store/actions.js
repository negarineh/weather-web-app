import * as actionTypes from './actionTypes';
import axios from 'axios';

const KEY = '139e670d882648a08f7fff9096ea6f99'; //'d0f42d8d3fef413f81dfbfedd310f1f4';

export const fetchCityStart = () => {
    return {
        type: actionTypes.FETCH_CITY_START,
    }
};

export const fetchCitySuccess = (data) => {
    return {
        type: actionTypes.FETCH_CITY_SUCCESS,
        data,
    }
};

export const fetchCityFailed = () => {
    return {
        type: actionTypes.FETCH_CITY_FAILED,
    }
};

export const nextCity = () => {
    return {
        type: actionTypes.NEXT_CITY,
    }
};

export const previousCity = () => {
    return {
        type: actionTypes.PREVIOUS_CITY,
    }
};

export const fetchCities = (lat, lon) => {
    return dispatch => {
        dispatch(fetchCityStart());
        const url = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=' + lat + '&lon=' + lon + '&days=5&key=' + KEY;
        axios.get(url)
            .then(response => {
                // console.log(response.data);
                dispatch(fetchCitySuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchCityFailed());
            })
    }
};
