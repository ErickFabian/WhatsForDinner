import React from 'react';
import Sidebar from './components/sidebar';
import ContentContainer from './containers/content-container';

const AppContainer = props => (
  <div id='wrapper' className={props.contentToggledClass}>
    <Sidebar />
    <ContentContainer
      onSidebarToggle={props.onSidebarToggle}
    />
  </div>
);

AppContainer.propTypes = {
  onSidebarToggle: React.PropTypes.func.isRequired,
  contentToggledClass: React.PropTypes.string.isRequired
};

export default AppContainer;
