import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

const strToComponents = cities => (
    cities.map((city, index) => (<WeatherLocation key={index} city={city}/>))
);

const LocationList = ({ cities }) => (
    <div>
        {strToComponents(cities)}
    </div>
);

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;