import React from 'react';

const Header = () => {
  return ( 
    <div style={styles.headerBox}>
      <div style={styles.headerGrid}>
        <div style={styles.headerR}>マイ</div>
        <div style={styles.headerL}>新聞</div>
      </div>
    </div>
   );
}
 
export default Header;


const styles = {}

styles.headerBox = {
  display: 'inline-block',
  border: '2px solid black',
  padding: '5px',
}

styles.headerGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
}

styles.headerR = {
  gridColumnStart: 2,
  gridRowStart: 1,
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
  margin: '0 -5px',
  fontSize: '2em',
}

styles.headerL = {
  gridColumnStart: 1,
  gridRowStart: 1,
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
  margin: '0 -5px',
  fontSize: '2em',
}