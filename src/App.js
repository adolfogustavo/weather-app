import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import './App.css';

const cities = [
  'Santiago,cl',
  'Buenos Aires,ar',
  'Bogota,col',
  'Boston,us',
  'Lima,pe',
  'Madison,us',
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: null,
    }
  }

  handleSelectedLocation = city => {
    this.setState({ city })
    console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'>
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities}
                onSelectedLocation={this.handleSelectedLocation}>
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                <div className="details">
                  { 
                    !city ? 
                    <h1>No se seleccionó ninguna ciudad</h1> : 
                    <ForecastExtended city={city} ></ForecastExtended>
                  }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
