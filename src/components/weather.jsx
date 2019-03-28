import React, { Component } from 'react';
import {getWeather} from './../service'; 
import cloudy from './../assets/weatherIcons/cloudy.svg'

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

  conditions = [
  'clear sky',
  'few clouds',
  'scattered clouds',
  'broken clouds',
  'shower rain',
  'rain',
  'thunderstorm',
  'snow',
  'mist',
  ]

  render() { 
    const weather = this.state.weather.main
    const tempMin = Math.round(this.state.tempPerc.temp_min-273.15)
    const tempMax = Math.round(this.state.tempPerc.temp_max-273.15)

    return ( 
      <div>
        <div style={styles.weatherIcon}>
          <img style={styles.weatherSVG} src={cloudy} />
        </div>
        <div>{tempMax}<sup>o</sup>C</div>
        <div>{tempMin}<sup>o</sup>C</div>
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