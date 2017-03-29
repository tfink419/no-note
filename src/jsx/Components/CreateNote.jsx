import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Note from './Note.jsx';
import NoteFeatures from './NoteFeatures.jsx';

export default class CreateNote extends Component {
  // static propTypes = {
    // text: PropTypes.string.isRequired
  // };

  // static defaultProps = {
    // minLength: 1,
    // maxLength: 256
  // };

  // state = {
    // text: this.props.text
  // };

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
    let nextState = { nextProps };
    this.setState(nextState);
  }

  componentDidUpdate(prevProps, prevState) {
  }
  // 
  // textChanged = (event) => {
  //     this.setState({
  //         text: event.target.value.trim()
  //     });
  // };

  render() {
    return <div>
      <Note />
      <NoteFeatures />
    </div>;
  }
}
