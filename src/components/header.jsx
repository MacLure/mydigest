import React from 'react';
import {japaneseWeekday} from './../service';

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();

const year = yyyy + '年'
const month = mm + '月'
const day = dd + '日'
const heisei = yyyy - 1989

const Header = () => {
  return ( 
    <div style={styles.headerGrid}>
      <div style = {styles.date}>
        <div>
          <div style={styles.year}>{year} / 平成{heisei}</div>
          <div style={styles.monthDay}>{month}{day}</div>
        </div>
        <div>
          <div style={styles.weekDay}>{japaneseWeekday()}</div>
          <div style={styles.youbi}>曜日</div>
        </div>
      </div>
      <div style={styles.bannerBox}>
        <div style={styles.bannerGrid}>
          <div style={styles.headerR}>マイ</div>
          <div style={styles.headerL}>新聞</div>
        </div>
      </div>
    </div>
   );
}
 
export default Header;


const styles = {}

styles.headerGrid = {
  display: 'grid',
  gridTemplateColumns: 'auto, 50px',
}

styles.date = {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  width: '120px',
}

styles.year = {
  fontSize: '0.5em',
}

styles.monthDay = {
  fontSize: '1em',
}

styles.weekDay = {
  textAlign: 'center',
  fontSize: '1em',
}

styles.youbi = {
  textAlign: 'center',
  fontSize: '0.5em',
  marginTop: '-3px',
}

styles.bannerBox = {
  gridColumnStart: 2,
  width: '60px',
  display: 'inline-block',
  border: '2px solid black',
  padding: '5px',
}

styles.bannerGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
}

styles.headerR = {
  gridColumnStart: 2,
  gridRowStart: 1,
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
  fontWeight: '900',
  margin: '0 -5px',
  fontSize: '2em',
}

styles.headerL = {
  gridColumnStart: 1,
  gridRowStart: 1,
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
  fontWeight: '900',
  margin: '0 -5px',
  fontSize: '2em',
}