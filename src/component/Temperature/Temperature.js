import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Temperature.module.css';

class Temperature extends Component {
    render() {
        const data = this.props.data.data[0];
        return(
            <div className={classes.Temperature}>
                <h1 className={classes.Label}>{Math.round(data.temp)}&deg;</h1>
                <label className={classes.TempLabel}>{Math.round(data.max_temp)}&deg;</label>
                <label className={classes.TempLabel}>{Math.round(data.min_temp)}&deg;</label>
                <h4 className={classes.Label}>{data.weather.description}</h4>
                <hr className={classes.Hr}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
    }
};

export default connect(mapStateToProps)(Temperature);