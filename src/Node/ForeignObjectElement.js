import React from 'react';

export default class ForeignObjectElement extends React.PureComponent {
  render() {
    return (
      <foreignObject width="200" height="100">
        {React.createElement(this.props.nodeComponent, this.props)}
      </foreignObject> 
    )
  }
}


