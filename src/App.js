import React, { Component } from 'react';
import AppContainer from './App-container';

class App extends Component {
  state = {
    isToggled: false
  }

  contentToggledClass() {
    return this.state.isToggled ? 'toggled' : '';
  }

  toggleSidebar() {
    this.setState({ isToggled: !this.state.isToggled});
  }

  render() {
    return (
      <AppContainer
        contentToggledClass={this.contentToggledClass()}
        onSidebarToggle={this.toggleSidebar.bind(this)}
      >
      </AppContainer>
    );
  }
}

export default App;
