import React, {Component} from 'react';
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./Header";
import ArticleList from "./ArticleList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    }
  }

  componentWillMount() {
    localStorage.setItem('articles', JSON.stringify(articles));
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    let articles = JSON.parse(localStorage.getItem('articles'));
    this.setState({
      articles: articles
    })
  };

  addArticle = ({title, text}) => {
    let obj = {};
    obj.title = title;
    obj.text = text;
    let articles = JSON.parse(localStorage.getItem('articles'));
    if (typeof articles !== 'undefined' && articles !== null) {
      articles.push(obj);
      localStorage.setItem('articles', JSON.stringify(articles));
      this.getArticles();
    }
  };

  render() {
    const {articles} = this.state;
    return (
      <div className="container">
        <Header functionProps={this.addArticle}/>
        <ArticleList articles={articles}/>
      </div>
    )
  }
}

export default App;