import React, { Component } from 'react';

class ArticleCard extends Component {
  state = {  }


  render() { 

    const {title, author, description, content, url, urlToImage: image, source: sourceKey, publishedAt: dateTime} = this.props.article;
    const source = sourceKey.name

    return ( 
      <div style={styles.cardOuter}>
        <div style={styles.imageTitle}>
          <div style={styles.title}>{title}</div>
          <img style={styles.image} src={image} />
        </div>
        <div style={styles.description}>
          {description}
        <div>
        </div>
          <a target="blank" href={url}>{source}</a>
          {dateTime}
        </div>

      </div> );
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
  color: 'white',
  textShadow: '1px 1px 1px black'
}

styles.image = {
  position: 'absolute',
  width: '100%',
  zIndex: 100,
}

styles.description = {
  gridRowStart: 2,

  position: 'relative',
  width: '100%',
}