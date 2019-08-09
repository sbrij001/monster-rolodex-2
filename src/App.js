import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list-component';

import './App.css';

class App extends Component {

  state = {
    monsters: [],
    searchFeild: ''

  }

  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render(){
    return (
      <div>
        <input type="search" placeholder="Search Monster"/>
        <CardList monsters={this.state.monsters}/>
      </div>
    )
  }

}

export default App;
