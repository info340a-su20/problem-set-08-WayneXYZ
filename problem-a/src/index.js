import React from 'react';
import ReactDOM from 'react-dom';

//renderin the app component
import { App } from './App'; 
import Senators from './senators.json';

ReactDOM.render(<App senators={Senators}/>, document.getElementById('root'));