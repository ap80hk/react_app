import React, { Component } from 'react';
import './App.css';

var defaultStyle = {

};
class Aggregate extends Component{
    render(){
        return (
        <div style={{width:"40%", display:'inline-block'}} className="aggregate">
            <h2 style={{color:'#FF0000'}}>Number Text</h2>
        </div>
        );
    }
}

class Filter extends Component{
    render(){
        return(
            <div>
                <img/>
                <input type="text"/>
            </div>
        );
    }
}

class Playlist extends Component{
    render(){
        return(
            <div style={{display:'inline-block', width:"25%"}}>
            <img/>
            <h3>Playlist Name</h3>
            <ul>
            <li>Song 1</li>
            <li>Song 2</li>
            <li>Song 3</li>

            </ul>
            </div>
        );
    }
}

class App extends Component {
  render() {
     var name = 'Alvin'
    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregate></Aggregate>
        <Aggregate></Aggregate>
        <Filter></Filter>
        <Playlist></Playlist>
        <Playlist></Playlist>
        <Playlist></Playlist>

      </div>
    );
  }
}

export default App;
