import React, { Component } from 'react';
import  {getUSANews} from './../service';
import ArticleCard from './articleCard'

class Main extends Component {
	state = {
		articles: [],
		refreshing: true
	};

	componentDidMount = () => {
		this.fetchNews();
	};

	fetchNews = () => {
		getUSANews()
			.then(articles => {
				this.setState({ articles, refreshing: false });
			})
			.catch(() => this.setState({ refreshing: false }));
	};
  render() { 
    return ( 
      <div >
        {this.state.articles.map(article => (
          <ArticleCard key={article.url} article={article}/>
          ))}
      </div>
    );
  }
}
 
export default Main;