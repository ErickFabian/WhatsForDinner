import React from 'react';
import SidebarToggle from './sidebar/toggle';

const Navigation = props => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <SidebarToggle
          onSidebarToggle={props.onSidebarToggle}
        />
      </div>
    </div>
  </nav>
);

Navigation.propTypes = {
  onSidebarToggle: React.PropTypes.func.isRequired
};

export default Navigation;
