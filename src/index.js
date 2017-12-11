import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main stage="intro" step={0}/>, document.getElementById('root'));
registerServiceWorker();
