import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class Note extends Component {
  constructor() {
    super();
    this.style = {
      width: '200ex',
      height: '20em'
    }
    this.passwordInputStyle = {
      width: '64ex'
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
    return <div style={this.style}>
      <input type='password' style={this.passwordInputStyle} />
    </div>;
  }
}
