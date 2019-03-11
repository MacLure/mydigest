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
      <div>

        <div>
        <select >
          <option value="" selected>Select a country</option>
          <option value="F">US</option>
        </select>
        
        </div>


        <div style={styles.articleCards} >
          {this.state.articles.map(article => (
            <ArticleCard key={article.url} article={article}/>
            ))}
        </div>
      </div>
    );
  }
}
 
export default Main;

const styles = {}

styles.articleCards = {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: '10px'
}