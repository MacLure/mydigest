import React, { Component } from 'react';
import {getWeather} from './../service'; 
import cloudy from './../assets/weatherIcons/cloudy.svg'
import cloudysunny from './../assets/weatherIcons/cloudysunny.svg'
import haze from './../assets/weatherIcons/haze.svg'
import lightning from './../assets/weatherIcons/lightning.svg'
import rainy from './../assets/weatherIcons/rainy.svg'
import snowy from './../assets/weatherIcons/snowy.svg'
import sunny from './../assets/weatherIcons/sunny.svg'

class Weather extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      weather: {},
      tempPerc: {},
    }

  }

  componentDidMount = () => {
    this.getWeather();
	};

	getWeather = () => {
		getWeather()
			.then(weather => {
        console.log(weather)
				this.setState({
          weather: weather.weather[0],
          tempPerc: weather.main,
          refreshing: false
        });
			})
      .catch(() => this.setState({ refreshing: false }));
  };

  conditions = {
  Clear: sunny,
  Clouds: cloudy,
  Rain: rainy,
  Drizzle: rainy,
  Thunderstorm: lightning,
  Snow: snowy,
  Mist: haze,
  Haze: haze,
  Fog: haze,

  }

  render() { 
    const weather = this.state.weather.main
    const tempMin = Math.round(this.state.tempPerc.temp_min-273.15)
    const tempMax = Math.round(this.state.tempPerc.temp_max-273.15)

    return ( 
      <div>
        <div style={styles.weatherIcon}>
          <img style={styles.weatherSVG} src={this.conditions[weather]} />
        </div>
        <div>
          <div>{tempMax}<sup>o</sup>C</div>
          <div>{tempMin}<sup>o</sup>C</div>
        </div>
      </div>
     );
  }
}
 
export default Weather;

const styles = {}

styles.weatherIcon = {
  width: '30px',
  height: '30px',
  backgroundColor: 'black',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
}

styles.weatherSVG = {
  width: '70%',
  height: '70%',
}