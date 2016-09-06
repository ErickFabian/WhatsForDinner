import React, { Component } from 'react';
import SearchForm from '../../components/sidebar/search_form';

class SearchFormContainer extends Component {
  state = {
    foodStandName: '',
    foodStandAddress: ''
  }

  handleChange(e) {
    this.setState({
      [e.target.getAttribute('name')]: e.target.value
    });
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    this.props.handleSearch({
      nameCont: this.state.foodStandName,
      addressCont: this.state.foodStandAddress,
    });
  }

  render() {
    return (
      <SearchForm
        closeModal={this.props.closeModal}

        onSubmit={this.handleSearchSubmit.bind(this)}
        onInputChange={this.handleChange.bind(this)}
      />
    );
  }
}

export default SearchFormContainer;