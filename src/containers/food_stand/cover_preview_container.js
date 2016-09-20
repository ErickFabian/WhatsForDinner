import React, { Component } from 'react';

const defaultCoverSrc = 'http://support.yumpu.com/en/wp-content/themes/qaengine/img/default-thumbnail.jpg';

class ReviewItemContainer extends Component {
  render() {
    let src = this.props.cover === '' ?
      defaultCoverSrc : this.props.cover.preview;
    return (
      <img src={src} className='img-responsive stand-cover' alt='cover'/>
    );
  }
}

export default ReviewItemContainer;