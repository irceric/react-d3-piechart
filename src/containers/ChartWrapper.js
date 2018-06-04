import React, { Component } from 'react'

const ChartWrapper = (WrappedComponent, selectData) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData(),
        dimensions: {
          width: window.innerWidth,
          height:  window.innerHeight,
        }
      };
      this.timerId = null;
    }

    componentDidMount() {
      // ... that takes care of the data subscription...
      this.timerId = setInterval(this.handleChange, 2000);
      window.addEventListener('resize', this.updateDimensions);
    }

    componentWillMount() {
      this.updateDimensions();
    }

    componentWillUnmount() {
      if (this.timerId) {
        clearInterval(this.timerId);
      }
      window.removeEventListener('resize', this.updateDimensions);
    }

    handleChange = () => {
      this.setState({
        data: selectData()
      });
    }

    updateDimensions = () => {
      const dimensions = {
        width: window.innerWidth,
        height:  window.innerHeight,
      }
      this.setState({dimensions});
    }

    render() {
      const { data, dimensions } = this.state;
      return <WrappedComponent data={data} dimensions={dimensions} {...this.props} />;
    }
  };
}

export default ChartWrapper
