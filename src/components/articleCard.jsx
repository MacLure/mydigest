import React, { Component } from 'react';

class ArticleCard extends Component {
  state = {  }
  render() { 
    return ( <div>
      {this.props.article.title}
      <img src={this.props.article.urlToImage} />
      {this.props.article.source.description}
      <a target="blank" href={this.props.article.url}>{this.props.article.source.name}</a>

      </div> );
  }
}
 
export default ArticleCard;