import React from 'react';
import SidebarToggle from './sidebar/toggle';
import SearchToggle from './sidebar/search_toggle';

const { func } = React.PropTypes;

const Navigation = props => (
  <nav className="navbar navbar-default">
    <div className="container">
      <ul className="nav navbar-nav">
        <SidebarToggle
          onSidebarToggle={props.onSidebarToggle}
        />
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <SearchToggle
            onSearchToggle={props.onSearchToggle}
          />
      </ul>
    </div>
  </nav>
);

Navigation.propTypes = {
  onSearchToggle:   func.isRequired,
  onSidebarToggle:  func.isRequired
};

export default Navigation;