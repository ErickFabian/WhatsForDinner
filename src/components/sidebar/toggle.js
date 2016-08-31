import React, { Component } from 'react';
import FaBars from 'react-icons/lib/fa/bars';

class SidebarToggle extends Component {
  render() {
    return (
      <FaBars
        size={30}
        onClick={this.props.onSidebarToggle}
        style={{position: 'relative', top: '8px', left: '10px'}}
      />
    );
  }
}

export default SidebarToggle;
