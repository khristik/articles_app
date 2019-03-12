import React, {Component} from 'react';

class Article extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isOpen: false,
      articles: []
    }
  }

  componentDidMount () {
    let articles = JSON.parse(localStorage.getItem('articles'));
    this.setState({
      articles
    })
  }

  render () {
    const {article} = this.props;
    const body = this.state.isOpen && <p>{article.text}</p>;
    return (
      <div>
        <h2 onClick={this.handleCLick}>{article.title}</h2>
        {body}
      </div>
    )
  }

  handleCLick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}

export default Article;