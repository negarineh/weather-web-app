import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Days.module.css';
import Day from './Day/Day';

class Days extends Component {
    state = {
        data: null,
    };

    render() {
        const days = ['Sun', 'Mon', 'Thu', 'Wed', 'Thur', 'Fri', 'Sat'];

        const dayList = days.map((day, index) => {
            if (index < 5 && this.props.data.data[index]) {
                const validDate = new Date(this.props.data.data[index].valid_date).getDay();
                return (<Day key={index} wData={this.props.data.data[index]} weekDay={days[validDate]}/>)
            }
            return true;
        });

        return(
            <div className={classes.DaysContainer}>
                {dayList}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
    }
};

export default connect(mapStateToProps)(Days);