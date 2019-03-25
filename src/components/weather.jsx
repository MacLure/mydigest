import React, { Component } from 'react';
import {getWeather} from './../service'; 

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

  render() { 
    const weather = this.state.weather.description
    const temp = (this.state.tempPerc.temp-273.15).toFixed(2)

    return ( 
      <div>
        <div>{weather}</div>
        <div>{temp}<sup>o</sup>C</div>
      </div>
     );
  }
}
 
export default Weather;