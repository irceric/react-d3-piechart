import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Pie from  './components/Pie';

class App extends Component {
  static propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    dimensions: PropTypes.object,
  }

  static defaultProps =  {
    data: [],
    title: 'Pie Chart',
    dimensions: {
      width: window.innerWidth,
      height:  window.innerHeight,
    }
  }

  render() {
    const { dimensions: { width, height }, title, data } = this.props;
    return (
      <svg width="100%" height="100%">
        <Pie
           width={width}
           height={height}
           title={title}
           data={data} />
      </svg>
    );
  }
}

export default App;
