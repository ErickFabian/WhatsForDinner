import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import Content from './components/content';
import ClassNames from 'classnames';

class App extends Component {
  contentToggledClass = this.contentToggledClass;

  state = {
    isToggled: true
  };

  contentToggledClass() {
    console.log(this.state.isToggled);
    return this.state.isToggled ?
      'toggled' : 'a';
  }

  render() {
    let wrapperClass = this.contentToggledClass();
    console.log(wrapperClass);
    return (
      <div id='wrapper' className={this.wrapperClass}>
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
