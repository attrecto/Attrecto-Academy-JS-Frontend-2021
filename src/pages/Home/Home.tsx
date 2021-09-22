import React, { Component } from "react";
import Page from "../../components/page/Page";

interface HomeProps {}
interface HomeState {
  counter: number;
}

class Home extends Component<HomeProps, HomeState> {
  readonly state: HomeState = {
    counter: 0,
  };

  setCounterValue = (increase: boolean) => {
    this.setState((prevState) => {
      const newValue = increase ? prevState.counter + 1 : prevState.counter - 1;
      return { counter: newValue };
    });
  };

  clearValue = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <Page title="Home" noCard>
        <div className="d-flex justify-content-center">
          <div className="card m-5 p-4 bg-white shadow text-center">
            <h5>Counter: {this.state.counter}</h5>
            <div className="d-flex">
              <button
                className="btn btn-primary"
                onClick={() => {
                  this.setCounterValue(true);
                }}
              >
                Increase +
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => {
                  this.setCounterValue(false);
                }}
              >
                Decrease +
              </button>
              <button className="btn btn-danger" onClick={this.clearValue}>
                Clear
              </button>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default Home;
