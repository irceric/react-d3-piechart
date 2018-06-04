import React, { Component } from 'react';
import { translate } from '../utils';
import * as d3 from 'd3';

class Slice extends Component {
  render() {
    const {value, label, fill, innerRadius = 0, outerRadius, cornerRadius, padAngle} = this.props;
    const arc = d3.svg.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(cornerRadius)
      .padAngle(padAngle);

    return (
      <g>
        <path d={arc(value)} fill={fill} />
        <text transform={translate(...arc.centroid(value))}
              dy=".35em"
              className="label">
          {label}
        </text>
      </g>
    );
  }
}

export default Slice
