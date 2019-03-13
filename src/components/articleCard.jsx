import React, { Component } from 'react';
import {formattedDate} from './../service';

class ArticleCard extends Component {
  state = {  }


  render() {

    const {title, author, description, content, url, urlToImage: image, source: sourceKey, publishedAt: dateTime} = this.props.article;
    const source = sourceKey.name

    return (
      <div style={styles.card}>
        <div style={styles.content}>
          <a target="blank" href={url} style={styles.link}>{description}</a>
          <p>Posted on: {formattedDate(dateTime)}</p>
        </div>
      </div> );
  }
}

export default ArticleCard;

const styles={}

styles.card = {
  width: '400px',
  backgroundColor: 'gray',

}

styles.content = {
  gridRowStart: 2,
  position: 'relative',
  width: '100%',
  color: 'white'
}

styles.link = {
  color: 'white',
  textDecoration: 'none',
}
