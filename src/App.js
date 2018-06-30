import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import PizzaBaseContainer from "./components/PizzaBaseContainer"
import PizzaBase from "./components/PizzaBase"
import PizzaSauce from "./components/PizzaSauce"
import PizzaTopping from "./components/PizzaTopping"
import PizzaDelivery from "./components/PizzaDelivery"
// import PizzaPrice from "./components/PizzaPrice"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <PizzaBaseContainer /> */}
		<PizzaBase />
		<PizzaSauce />
		<PizzaTopping />
		<PizzaDelivery />
		{/* <PizzaPrice /> */}
      </div>
    );
  }
}

export default App;
