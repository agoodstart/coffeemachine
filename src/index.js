import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';

ReactDOM.render(<App />, document.getElementById('App'));

serviceWorker.unregister();
