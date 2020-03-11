import React, { Component } from "react";
import Header from '../Header/Header';
import './style.scss';
import HomeMade from "../HomeMade/HomeMade";


class App extends Component {
  render() {
    return (
        <div className="container">
            <Header />
            <HomeMade />
        </div>
        
      )}
}
export default App;
