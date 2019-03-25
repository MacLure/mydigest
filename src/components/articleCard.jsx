import React, { Component } from 'react';
import  {japaneseDate} from './../service';

class ArticleCard extends Component {
  state = {  }


  render() {

    const {title, author, description, content, url, urlToImage: image, source: sourceKey, publishedAt: dateTime} = this.props.article;
    const source = sourceKey.name

    return (
      <div style={styles.cardOuter}>
        <div style={styles.imageTitle}>
          <div style={styles.title}>{title}</div>
          <div style={styles.titleGradient}></div>
          <img ref="image" style={styles.image} src={image} />
        </div>
        <div style={styles.description}>
          {description}
        <div>
        </div>
          <a target="blank" href={url}>{source}</a>
          {japaneseDate(dateTime)}
        </div>
      </div>
    );


  }
}

export default ArticleCard;


const styles={}

styles.cardOuter = {
  display: 'grid',
  gridTemplateRows: '200px 150px',
  width: '300px',
  boxShadow: '2px 2px 2px black'
}

styles.imageTitle = {
  gridRowStart: 1,
  position: 'relative',
  width: '100%',
  height: '200px',
  overflow: 'hidden',
}

styles.title = {
  position: 'absolute',
  display: 'flex',
  flexStart: 'bottom',
  width: '100%',
  zIndex: 200,
  margin: '5px',
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
  color: 'white',
  textShadow: '1px 1px 1px black'
}

styles.image = {
  position: 'absolute',
  width: '100%',
  zIndex: 100,
}

styles.titleGradient = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundImage: 'linear-gradient( 90deg, rgba(0,0,0,0) 50%, rgba(0,0,0,1) )',
  zIndex: 150,
}

styles.description = {
  gridRowStart: 2,
  position: 'relative',
  width: '100%',
}

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