import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Footer from "./components/footer/Footer";
import Navbar from "./components/layout/Navbar";
import Register from "./components/sign_in_out/Register";
import Login from "./components/sign_in_out/Login";
import Graph from "./components/dashboard/Graph";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App wrapper">
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Graph} />
          <Footer />
        </div>
      </Router>
    );
  }
}export default App;