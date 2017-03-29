import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class Note extends Component {
  constructor() {
    super();
    this.textAreaStyle = {
      width: '200ex',
      height: '20em'
    }
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
    let nextState = { nextProps };
    this.setState(nextState);
  }

  componentDidUpdate(prevProps, prevState) {
  }
  
  render() {
    return <textarea style={this.textAreaStyle}></textarea>;
  }
}
