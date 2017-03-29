const React = require('react');
const ReactDOM = require('react-dom');
const CreateNote = require('./Components/CreateNote.jsx').default;

ReactDOM.render(<div>
    <h1>No Note</h1>
    <CreateNote />
  </div>,
  document.getElementById('no-note')
);
