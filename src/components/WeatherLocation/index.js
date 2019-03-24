import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../constants/weathers';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 80,
    wind: '10 m/s',
}

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"Santiago"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);

export default WeatherLocation;