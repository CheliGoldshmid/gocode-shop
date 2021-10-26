import { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Products />
      </div>
    );
  }
}

export default App;
