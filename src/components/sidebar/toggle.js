import React from 'react';
import FaBars from 'react-icons/lib/fa/bars';

const SidebarToggle = props => (
  <FaBars
    size={30}
    onClick={props.onSidebarToggle}
    style={{position: 'relative', top: '8px', left: '10px', cursor: 'pointer'}}
  />
);

SidebarToggle.propTypes = {
  onSidebarToggle: React.PropTypes.func.isRequired
};

export default SidebarToggle;