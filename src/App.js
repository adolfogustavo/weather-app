import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

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
  render() {
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
              <LocationListContainer cities={cities}>
              </LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                <div className="details">
                  <ForecastExtendedContainer/>
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}


export default App