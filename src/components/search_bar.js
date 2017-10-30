import React, { Component } from 'react';
// ====> const Component = React.Component

class SearchBar extends Component {
  // initialize state in a class based components
  // the first and only function called automatically when a new instance of the class is created
  constructor(props) {
    // when you define a method that has ady defined in the parent class aka Component here
    super(props);

    // initialise state by creating a new object
    // term is the key
    // recording value of input under term key
    this.state = { term: '' };
  }

  render() {
    // setState is to change state
    return (
      <div className="search-bar">
        <input
          value={this.state.value}
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;


//controlled components only have it value set by state


// functional components = function that we could call to return some jsx
// const SearchBar = () => {
//   return <input />;
// };

// class based method
// declare new class named SearchBar that has access to all functionalities that react component has
// when to use class based components? when you need more functionalities
// class SearchBar extends Component {
//   render() {
//     // must return JSX
//     // onChange pointing to the event handler
//     return <input onChange={this.onInputChange} />;
//   }

//   // whenever input change
//   onInputChange(event) {
//     console.log(event.target.value);
//   }
// }
