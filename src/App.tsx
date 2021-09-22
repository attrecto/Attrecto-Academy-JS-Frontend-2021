import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import { Switch, Route, Redirect } from "react-router";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Badges from "./pages/Badges/Badges";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/badges" component={Badges} />
          <Route path="/home" component={Home} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default App;
