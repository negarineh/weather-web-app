import React from 'react';

import classes from './Day.module.css';
import { calculateDays } from "../../../hoc/utility";

const day = (props) => {
    const imgSrc = calculateDays(props.wData.weather.description);

    return(
        <div className={classes.DayContainer}>
            <h4 className={classes.Label}>{props.weekDay}</h4>
            <img className={classes.ImgWeather} alt={props.weekDay} src={imgSrc} />
            <label className={classes.Label}>
               {Math.round(props.wData.max_temp)}/{Math.round(props.wData.min_temp)}
            </label>
        </div>
    )
};

export default day;