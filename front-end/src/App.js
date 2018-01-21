import React, { Component } from 'react';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sprite:'',
       id: '',
       weight:'',
       height:'',
       order:'',
       type1:'',
       type2:''
      };

    this.handleChange = this.handleChange.bind(this);
    }

  get(id){
   let uri = 'http://localhost:3001/pokemon/' + id;
   fetch(uri)
   .then(response => response.json())
   .then( data => {
     this.setState({
       name: data.name,
       sprite: data.sprites.front_default,
       weight: data.weight,
       height: data.height,
       order: data.id,
      //  type1: data.types[0].name,
      //  type2: data.types[1].name
    })
    });
  }

  handleChange(event) {
    this.setState({id: event.target.value});
    this.get(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"http://www.pngmart.com/files/2/Pikachu-PNG-HD.png"} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to PokeFetcher</h1>
        </header>
        <p className="App-intro">
          <label>
            <input type="text" placeholder="Name or Number" value={this.state.id} onChange={this.handleChange} />
          </label>
          <br/>
          <br/>
        
        <img src={this.state.sprite}/>
        <div className='body'>
        Name   : {this.state.name}<br/>
        Order# : {this.state.order}<br/>
        Height : {this.state.height}<br/>
        Weight : {this.state.weight}<br/>
        </div>
        </p>
      </div>
    );
  }
}

export default App;
