import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import Content from './components/content';

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
      <div id='wrapper' className={this.contentToggledClass()}>
        <Sidebar />
        <Content
          onSidebarToggle={this.toggleSidebar.bind(this)}
        />
      </div>
    );
  }
}

export default App;
