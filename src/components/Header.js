import React, { Component } from 'react';
import NewArticleCreate from './NewArticleCreate'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }

  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
    console.log(this.props)
  };

  render() {

    const { functionProps } = this.props

    return (
      <header>
        <Article functionProps={functionProps} isShow={!this.state.isShow}/>
        {this.state.isShow && (
          <div className="menu">
            <ul>
              <li>
            <p>Articles</p>
              </li>
              <li>
            <Button onClick={this.toggleShow} isShow={this.state.isShow} />
              </li>
            </ul>
          </div>
        )}
      </header>
    );
  }
}

const Button = ({ onClick, isShow }) => isShow ? <a href="#" onClick={onClick} className="add-article">Add New</a> : null;

export default Header;

class Article extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isShow, functionProps } = this.props

    return (
      isShow ? <NewArticleCreate functionProps={functionProps}/> : null
    )
  }
}