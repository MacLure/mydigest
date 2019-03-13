import React, { Component } from 'react';
import ArticleCard from './articleCard'
import NavBar from './navbar';
import {getCanadaNews} from './../service';
import {getNews} from './../service';


class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [],
      selectedCountry: null,
      selectedTopic: 'general',
      refreshing: true,
      search: ''
    };

    this.updateCountry = this.updateCountry.bind(this)
    this.updateTopic = this.updateTopic.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
    this.updateArticles = this.updateArticles.bind(this)

  }

	componentDidMount = () => {
		this.fetchNews();
	};

	fetchNews = () => {
		getCanadaNews()
			.then(articles => {
				this.setState({ articles, refreshing: false });
			})
			.catch(() => this.setState({ refreshing: false }));
  };

  updateCountry = (country) => {
    this.setState({ selectedCountry: country }, function() {this.updateArticles()})
  }

  updateTopic = (topic) => {
    this.setState({ selectedTopic: topic }, function() {this.updateArticles()})
  }

  updateSearch = (query) => {
    this.setState({ search: query })
  }

  updateArticles = (e) => {
    getNews(this.state.selectedCountry, this.state.selectedTopic, this.state.search)
    .then(articles => {
      this.setState({ articles, refreshing: false });
    })
    .catch(() => this.setState({ refreshing: false }));
  }

  render() {
    return (
      <div style={styles.body}>
      <NavBar
        updateCountry = {this.updateCountry}
        updateTopic = {this.updateTopic}
        updateSearch = {this.updateSearch}
        updateArticles = {this.updateArticles}
        getNews = {this.getNews}
      />
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

styles.body = {
  backgroundColor: '#212121',

}

styles.articleCards = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '30px',
  margin: '0 auto'
}
