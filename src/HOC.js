import React, { Component } from 'react';
import './style.css';

export default function Hoc(HocComponent, data) {
  const [isHovered, setHover] = React.useState(false);

  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data,
      };
    }

    render() {
      return (
        <HocComponent
          data={this.state.data}
          {...this.props}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          isHovered={isHovered}
        />
      );
    }
  };
}
