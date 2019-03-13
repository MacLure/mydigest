import React, { Component } from 'react';

class NavBar extends Component {
  state = {   }


  submitSearch = (e) => {
    this.setState({ selectedCountry: e.target.value })
  }

  render() { 
    return ( 
      <div style={styles.navbar}>
        <select onChange={e => this.props.updateCountry(e.target.value)}>
          <option value="">Select a country</option>
          <option value='ae'>UAE</option>
          <option value='ar'>Argentina</option>
          <option value='at'>Austria</option>
          <option value='au'>Australia</option>
          <option value='be'>Belgium</option>
          <option value='bg'>Bulgaria</option>
          <option value='br'>Brazil</option>
          <option value='ca'>Canada</option>
          <option value='ch'>Switzerland</option>
          <option value='cn'>China</option>
          <option value='co'>Colombia</option>
          <option value='cu'>Cuba</option>
          <option value='cz'>Czech Republic</option>
          <option value='de'>Germane</option>
          <option value='eg'>Egypt</option>
          <option value='fr'>France</option>
          <option value='gb'>UK</option>
          <option value='gr'>Greece</option>
          <option value='hk'>Homg Kong</option>
          <option value='hu'>Hungary</option>
          <option value='id'>Indonesia</option>
          <option value='ie'>Israel</option>
          <option value='il'>Ireland</option>
          <option value='in'>India</option>
          <option value='it'>Italy</option>
          <option value='jp'>Japan</option>
          <option value='kr'>South Korea</option>
          <option value='lt'>Lithuania</option>
          <option value='lv'>Latvia</option>
          <option value='ma'>Morocco</option>
          <option value='mx'>Mexico</option>
          <option value='my'>Malaysia</option>
          <option value='ng'>Nigeria</option>
          <option value='nl'>Netherlands</option>
          <option value='no'>Norway</option>
          <option value='nz'>New Zealand</option>
          <option value='ph'>Phillipines</option>
          <option value='pl'>Poland</option>
          <option value='pt'>Portugal</option>
          <option value='ro'>Romania</option>
          <option value='rs'>Serbia</option>
          <option value='ru'>Russia</option>
          <option value='sa'>Soudi Arabia</option>
          <option value='se'>Sweden</option>
          <option value='sg'>Singapore</option>
          <option value='si'>Slovenia</option>
          <option value='sk'>Slovakia</option>
          <option value='th'>Thailand</option>
          <option value='tr'>Turkey</option>
          <option value='tw'>Taiwan</option>
          <option value='ua'>Ukraine</option>
          <option value='us'>US</option>
          <option value='ve'>Venezuela</option>
          <option value='za'>South Africa</option>
        </select>

        <select onChange={e => this.props.updateTopic(e.target.value)}>
          <option value="">Select a topic</option>
          <option value='general'>general</option>
          <option value='business'>business</option>
          <option value='entertainment'>entertainment</option>
          <option value='health'>health</option>
          <option value='science'>science</option>
          <option value='technology'>technology</option>
          <option value='sports'>sports</option>
        </select>
        <input onChange = {e => this.props.updateSearch(e.target.value)}type="text" placeholder="Search..."></input>
        <div style={styles.searchSubmitButton} onClick = {e => this.props.updateArticles(e)}>SEARCH</div>
      </div>
    );
  }
}
 
export default NavBar;

const styles = {}

styles.navbar = {
  marginBottom: '10px',
  padding: '10px',
}

styles.searchSubmitButton = {
  display: 'inline-block',
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '3px',
  padding: '5px'
}