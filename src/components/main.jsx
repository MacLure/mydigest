import React, { Component } from 'react';
import ArticleCard from './articleCard'
import NavBar from './navbar'
import Header from './header'
import Currencies from './currencies'
import Weather from './weather'


import  {getCanadaNews} from './../service';
import  {getBusinessNews} from './../service';
import  {getEntertainmentNews} from './../service';
import  {getHealthNews} from './../service';
import  {getScienceNews} from './../service';
import  {getTechnologyNews} from './../service';
import  {getSportsNews} from './../service';

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      businessArticles: [],
      entertainmentArticles: [],
      healthArticles: [],
      scienceArticles: [],
      technologyArticles: [],
      sportsArticles: [],
      weather: '',

      selectedCountry: 'ca',
      refreshing: true,
      search: ''
    };

    this.updateCountry = this.updateCountry.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
    this.updateArticles = this.updateArticles.bind(this)

  }

	componentDidMount = () => {
    this.fetchNews();
	};

	fetchNews = () => {
		getCanadaNews()
			.then(businessArticles => {
				this.setState({ businessArticles, refreshing: false });
			})
			.catch(() => this.setState({ refreshing: false }));
  };


  updateCountry = (country) => {
    this.setState({ selectedCountry: country }, function() {this.updateArticles()})
  }

  updateSearch = (query) => {
    this.setState({ search: query })
  }

  updateArticles = (e) => {
    getBusinessNews(this.state.selectedCountry, this.state.search) 
    .then(businessArticles => {
      this.setState({ businessArticles, refreshing: false });
    })
    .catch(() => this.setState({ refreshing: false }));

    getEntertainmentNews(this.state.selectedCountry, this.state.search) 
    .then(entertainmentArticles => {
      this.setState({ entertainmentArticles, refreshing: false });
    })
    .catch(() => this.setState({ refreshing: false }));

    getHealthNews(this.state.selectedCountry, this.state.search) 
    .then(healthArticles => {
      this.setState({ healthArticles, refreshing: false });
    })
    .catch(() => this.setState({ refreshing: false }));

    getScienceNews(this.state.selectedCountry, this.state.search) 
    .then(scienceArticles => {
      this.setState({ scienceArticles, refreshing: false });
    })
    .catch(() => this.setState({ refreshing: false }));

    getTechnologyNews(this.state.selectedCountry, this.state.search) 
    .then(technologyArticles => {
      this.setState({ technologyArticles, refreshing: false });
    })
    .catch(() => this.setState({ refreshing: false }));

    getSportsNews(this.state.selectedCountry, this.state.search) 
    .then(sportsArticles => {
      this.setState({ sportsArticles, refreshing: false });
    })
    .catch(() => this.setState({ refreshing: false }));

  }

  render() { 
    return ( 
      <div>
        <NavBar 
          updateCountry = {this.updateCountry}
          updateSearch = {this.updateSearch}
          updateArticles = {this.updateArticles}
          getNews = {this.getNews}
        />
        <Header />
        <Weather />
        <div style={styles.section}> ビジネス</div>
        <Currencies />
        <div >
          <div style={styles.articleCards} >
            {this.state.businessArticles.map(article => (
              <ArticleCard key={article.url} article={article}/>
            ))}
          </div>
        </div>

        <div style={styles.section}> エンタメ</div>
        <div>
          <div style={styles.articleCards} >
            {this.state.businessArticles.map(article => (
              <ArticleCard key={article.url} article={article}/>
            ))}
          </div>
        </div>
        <div style={styles.section}>医療・健康</div>
        <div>
          <div style={styles.articleCards} >
            {this.state.healthArticles.map(article => (
              <ArticleCard key={article.url} article={article}/>
            ))}
          </div>
        </div>
        <div style={styles.section}>科学</div>
        <div >
          <div style={styles.articleCards} >
            {this.state.scienceArticles.map(article => (
              <ArticleCard key={article.url} article={article}/>
            ))}
          </div>
        </div>
        <div style={styles.section}> テクノロジー</div>
        <div>
          <div style={styles.articleCards} >
            {this.state.technologyArticles.map(article => (
              <ArticleCard key={article.url} article={article}/>
            ))}
          </div>
        </div>
        <div style={styles.section}> スポーツ</div>
        <div>
          <div style={styles.articleCards} >
            {this.state.sportsArticles.map(article => (
              <ArticleCard key={article.url} article={article}/>
            ))}
          </div>
        </div>
      </div>
      );
    }
  }


export default Main;

const styles = {}

styles.section = {
  backgroundColor: 'black',
  color: 'white',
  fontSize: '1.5em',
  fontWeight: 600,
}

styles.articleCards = {
  width: '100%',
  display: 'flex',
  flexStart: 'left',
  flexWrap: 'wrap',
  flexDirection: 'right',
  justifyContent: 'space-around',
  gridGap: '10px'
}