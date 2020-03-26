import React from 'react';

class SearchBar extends React.Component {
  state = {term:""};

  inputChange = e => {
    this.setState({term: e.target.value});
  };

  formSubmit = e => {
    e.preventDefault();

    this.props.keywordSubmit(this.state.term);
  };

  buttonClick = e => {
    this.props.keywordSubmit(this.state.term);
  };

  render(){
    return (
      <div className="ui segments"
           style={{ marginTop: '8rem' }}>
        <form
          className="ui form"
          onSubmit={this.formSubmit}>
          <div className="field">
            <div className="ui fluid action input">
              <input
                type="text"
                placeholder="Search..."
                value={this.state.term}
                onChange={this.inputChange}></input>
              <div className="ui button" onClick={this.buttonClick}>Search</div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;