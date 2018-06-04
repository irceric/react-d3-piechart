import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChartWrapper from './containers/ChartWrapper'
import App from './App';
import { generateData } from './utils'
import registerServiceWorker from './registerServiceWorker';
const PieChart = ChartWrapper(App, generateData);

ReactDOM.render(<PieChart title="Pie Chart" />, document.getElementById('root'));
registerServiceWorker();
