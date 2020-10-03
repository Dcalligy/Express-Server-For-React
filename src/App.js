import React, { Component } from 'react';
import rei from './rei.svg';
import './App.css';

class App extends Component {

  state = {
    data: null
  };

  componenDidMount(){
    // Call or fetch function below once the component mounts
    this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
  }

  // Feteches our GET route from the Express server. (Note: The route we are fetching matches the Get route from server.js)
  callBackendAPI = async() => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if(response.status !==  200){
      throw Error(body.message)
    }
    return body;
  };
  // Render the newly fetched data inside of this.state.data 
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={rei} className="App-logo" alt="logo" />
          <h1 className="App-title">UwU Welcome to React big pimpin! Site in the works...brb UwU</h1>
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
  
}
export default App;