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
    const CAD2USD = (this.state.currencyRates['USDCAD'] / this.state.currencyRates['USDUSD']).toFixed(2)
    const CAD2CAD = (this.state.currencyRates['USDCAD'] / this.state.currencyRates['USDCAD']).toFixed(2)
    const CAD2JPY = (this.state.currencyRates['USDCAD'] / this.state.currencyRates['USDJPY']).toFixed(2)
    const CAD2EUR = (this.state.currencyRates['USDCAD'] / this.state.currencyRates['USDEUR']).toFixed(2)

    return ( 
      <div>
      {CAD2USD}, {CAD2CAD}, {CAD2JPY}, {CAD2EUR}
      </div>
     );
  }
}
 
export default Currencies;