import React, { Component } from 'react';
import SidebarToggle from './sidebar/toggle';

class App extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <SidebarToggle
              onSidebarToggle={this.props.onSidebarToggle}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default App;
