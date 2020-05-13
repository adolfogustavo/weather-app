import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getForecastDataFromCities, getCity } from './../reducers';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;
        return (
            city &&    
            <ForecastExtended city={city} forecastData={forecastData} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastaData: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ city: getCity(state), forecastData: getForecastDataFromCities(state.cities, state.city) });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);