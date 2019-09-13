import {ASSETS} from "../assets/images/images";

export const calculateDays = (wIcon) => {
    let imgSrc = '';

    if ((wIcon.toLowerCase()).indexOf('sky') > -1) {
        imgSrc = ASSETS.sunny;
    } else if ((wIcon.toLowerCase()).indexOf('cloud') > -1) {
        imgSrc = ASSETS.cloudy;
    } else if ((wIcon.toLowerCase()).indexOf('rain') > -1) {
        imgSrc = ASSETS.rain;
    } else if ((wIcon.toLowerCase()).indexOf('snow') > -1) {
        imgSrc = ASSETS.snow;
    } else if ((wIcon.toLowerCase()).indexOf('storm') > -1) {
        imgSrc = ASSETS.thunderStorm;
    }
    return imgSrc;
};