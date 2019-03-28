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
    const temp = (this.state.tempPerc.temp-273.15).toFixed(2)

    return ( 
      <div>
        <div style={styles.weatherIcon}>
          <img style={styles.weatherSVG} src={cloudy} />
        </div>
        <div>{weather}</div>
        <div>{temp}<sup>o</sup>C</div>
      </div>
     );
  }
}
 
export default Weather;

const styles = {}

styles.weatherIcon = {
  width: '10px',
  height: '10px',
}

styles.weatherSVG = {
  width: '100%',
  height: '100%',
}