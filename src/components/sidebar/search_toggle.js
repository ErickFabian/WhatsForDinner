import React from 'react';
import FaSearch from 'react-icons/lib/fa/search';

const SidebarToggle = props => (
  <FaSearch
    size={30}
    onClick={props.onSearchToggle}
    style={{position: 'relative', top: '8px', left: '10px', cursor: 'pointer'}}
  />
);

SidebarToggle.propTypes = {
  onSearchToggle: React.PropTypes.func.isRequired
};

export default SidebarToggle;