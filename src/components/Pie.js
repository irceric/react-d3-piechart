import React, { Component } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import Slice from './Slice';
import { translate } from '../utils';

class Pie extends Component {
  static propTypes = {
    data: PropTypes.array,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }

  static defaultProps = {
    data: [],
  }

  constructor(props) {
    super(props);
    this.colorScale = d3.scale.category10();
  }

  render() {
    const { width, height, data, title } = this.props;
    const minViewportSize = Math.min(width, height);
    const radius = (minViewportSize * .9) / 2;
    const x = width / 2;
    const y = height / 2;

    let pie = d3.layout.pie();
    return (
      <g transform={translate(x, y)}>
        <text fontSize="14px" fill="#000000" fontWeight="bold" dy="6" dx={-30} x={0} y={0}>{title}</text>
        {pie(data).map((value, i) => this.renderSlice(value, i, radius))}
      </g>
    );
  }

  renderSlice = (value, i, radius) => {
    const innerRadius = radius * .35;
    const outerRadius = radius;
    const cornerRadius = 7;
    const padAngle = .02;

    return (
      <Slice key={i}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        cornerRadius={cornerRadius}
        padAngle={padAngle}
        value={value}
        label={value.data}
        fill={this.colorScale(i)} />
    );
  }
}

export default Pie
