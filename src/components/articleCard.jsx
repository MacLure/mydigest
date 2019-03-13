import React, { Component } from 'react';

class ArticleCard extends Component {
  state = {  }


  render() {

    const {title, author, description, content, url, urlToImage: image, source: sourceKey, publishedAt: dateTime} = this.props.article;
    const source = sourceKey.name

    return (
      <div style={styles.cardOuter}>

        <div style={styles.title}>
          <a target="blank" href={url}>{source}>{title}</a>
        </div>
      </div> );
  }
}

export default ArticleCard;

const styles={}

styles.cardOuter = {
  display: 'grid',
  gridTemplateRows: '200px 150px',
  width: '400px',
}

styles.title = {
  gridRowStart: 2,
  position: 'relative',
  width: '100%',
}
