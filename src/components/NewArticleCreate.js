import React, { Component } from 'react';

class NewArticleCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
    };
  }

  valid(item, type) {
    let itemValue = item.target.value;
    switch(type) {
      case 'title' : {
        this.setState({title: itemValue });
      }
      case 'text' : {
        this.setState({text: itemValue });
      }
    }
  }

  submit = () => {
    const { title, text } = this.state;
    const { functionProps } = this.props;
    functionProps({ title, text });
  };

  render() {
    return (
      <div className="new-article">
        <h3 className="title">New Article</h3>
        <label>
        <input
          type="text"
          name="title"
          onChange={(item)=>this.valid(item, 'title')}
          className="new-article__title"
        />
        </label>
        <label>
        <textarea
          type="text"
          name="text"
          onChange={(item)=>this.valid(item, 'text')}
          className="new-article__text"
        />
        </label>
        <a value="Submit" onClick={()=>this.submit()} className="new-article__submit">Submit</a>
      </div>
    );
  }
}

export default NewArticleCreate;