import React, { Component } from 'react';
import {getCurrencyRates} from './../service';


class Currencies extends Component {  constructor(props) {
  super(props)

  this.state = { 
    currencyRates: {},
   }

  }

  componentDidMount = () => {
    this.getExchangeRates();
	};

	getExchangeRates = () => {
		getCurrencyRates()
			.then(currencyRates => {
				this.setState({ currencyRates, refreshing: false });
			})
      .catch(() => this.setState({ refreshing: false }));
  };

  render() { 
    const CAD2USD = (this.state.currencyRates['USDCAD'] / this.state.currencyRates['USDUSD'])
    const CAD2CAD = (this.state.currencyRates['USDCAD'] / this.state.currencyRates['USDCAD'])
    const CAD2JPY = (this.state.currencyRates['USDCAD'] / this.state.currencyRates['USDJPY'])
    const CAD2EUR = (this.state.currencyRates['USDCAD'] / this.state.currencyRates['USDEUR'])

    return ( 
      <div>
      $: {CAD2USD.toFixed(2)}<br />
      ¥: {CAD2JPY.toFixed(2)}<br />
      €: {CAD2EUR.toFixed(2)}
      </div>
     );
  }
}
 
export default Currencies;