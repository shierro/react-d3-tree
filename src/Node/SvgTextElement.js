import React from 'react';
import uuid from 'uuid';

export default class SvgTextElement extends React.PureComponent {
  render() {
    const {nodeStyle, textLayout} = this.props;
    return (
      <g>
        <text
          className="nodeNameBase"
          style={nodeStyle.name}
          textAnchor={textLayout.textAnchor}
          x={textLayout.x}
          y={textLayout.y}
          transform={textLayout.transform}
          dy=".35em"
        >
          {this.props.name}
        </text>
        <text
          className="nodeAttributesBase"
          y={textLayout.y + 10}
          textAnchor={textLayout.textAnchor}
          transform={textLayout.transform}
          style={nodeStyle.attributes}
        >
          {this.props.attributes &&
            Object.keys(this.props.attributes).map(labelKey => (
              <tspan x={textLayout.x} dy="1.2em" key={uuid.v4()}>
                {labelKey}: {this.props.attributes[labelKey]}
              </tspan>
            ))}
        </text>
      </g>
    )
  }
}
