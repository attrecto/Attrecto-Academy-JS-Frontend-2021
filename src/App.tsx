import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import { Switch, Route, Redirect } from "react-router";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Badges from "./pages/Badges/Badges";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";

interface AppState {
  token: string | null;
}

class App extends Component<{}, AppState> {
  readonly state: AppState = {
    token: localStorage.getItem("auth-token"),
  };

  setToken = (token: string | null) => {
    if (token) {
      localStorage.setItem("auth-token", token);
    } else {
      localStorage.removeItem("auth-token");
    }
    this.setState({ token });
  };

  render() {
    const { token } = this.state;


    return (
      <div>
        <Navbar isLoggedIn={!!token} setToken={this.setToken} />

        <Switch>
          <Route
            path="/login"
            render={() => {
              return token ? (
                <Redirect to="/" />
              ) : (
                <Login setToken={this.setToken} />
              );
            }}
          />
        </Switch>
        <Route
          path="/"
          render={() => {
            return token ? (
              <Switch>
                <Route path="/users" component={Users} />
                <Route path="/user/:id" component={User} />
                <Route path="/user" component={User} />
                <Route path="/badges" component={Badges} />
                <Route path="/home" component={Home} />
                <Redirect to="/home" />
              </Switch>
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
