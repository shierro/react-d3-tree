import React from 'react';
import uuid from 'uuid';

class NodeComponent extends React.PureComponent {

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <ul>
          {this.props.attributes && Object.keys(this.props.attributes).map(labelKey => (
            <li key={uuid.v4()}>
              {labelKey}: {this.props.attributes[labelKey]}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default NodeComponent