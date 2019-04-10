import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core';

const cities = [
  'Santiago,cl',
  'Buenos Aires,ar',
  'Bogota,col',
  'Boston,us',
  'Lima,pe',
  'Madison,us',
]

class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities}
            onSelectedLocation={this.handleSelectedLocation}></LocationList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
