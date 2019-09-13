import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import { ASSETS } from '../../assets/images/images';
import classes from './Carousel.module.css';
import { calculateDays } from '../../hoc/utility';

class Carousel extends Component {
    state = {
        data: null,
        leftDisable: true,
        rightDisable: false,
    };

    componentDidMount() {
        const info = Object.keys(this.props.cities)[this.props.currentCity];
        const selectedCity = this.props.cities[info];
        this.props.onFetchCities(selectedCity.lat, selectedCity.lon);
    }
    
    handleNext = () => {
        this.setState((state) => {
            return {
                leftDisable: false,
            }
        });
        this.props.onNextCity();
        if (this.props.currentCity === 2) {
            this.setState({ rightDisable: true });
        }
        const info = Object.keys(this.props.cities)[this.props.currentCity + 1];
        const selectedCity = this.props.cities[info];
        this.props.onFetchCities(selectedCity.lat, selectedCity.lon);
    };

    handlePrevious = () => {
        this.setState((state) => {
            return {
                rightDisable: false,
            }
        });
        this.props.onPreviousCity();
        if (this.props.currentCity <= 1) {
            this.setState({leftDisable: true});
        }
        const info = Object.keys(this.props.cities)[this.props.currentCity - 1];
        const selectedCity = this.props.cities[info];
        this.props.onFetchCities(selectedCity.lat, selectedCity.lon);
    };

    render() {
        const imgSrc = calculateDays(this.props.data.data[0].weather.description);

        return(
            <div className={classes.Carousel}>
                <h1 className={classes.CityLabel}>{this.props.data.city_name}</h1>
                <div className={classes.CarousalContainer}>
                    <input
                        type='image'
                        className={classes.ArrowKeys}
                        src={ASSETS.leftArrow}
                        alt={ASSETS.leftArrow}
                        disabled={this.state.leftDisable}
                        onClick={this.handlePrevious}
                    />
                    <img className={classes.ImgWeather} src={imgSrc} alt={imgSrc}/>
                    <input
                        type='image'
                        className={classes.ArrowKeys} 
                        src={ASSETS.rightArrow} 
                        alt={ASSETS.rightArrow}
                        disabled={this.state.rightDisable}
                        onClick={this.handleNext}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cities: state.cities,
        data: state.data,
        currentCity: state.currentCity,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCities: (lat, lon) => dispatch(actions.fetchCities(lat, lon)),
        onNextCity: () => dispatch(actions.nextCity()),
        onPreviousCity: () => dispatch(actions.previousCity()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);