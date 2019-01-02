import React from "react";


// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };





  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
   
  };

  handleTopScore = () => {
      this.setState({count: this.state.count + 1});
      
  };

  // handleDecrement decreases this.state.count by 1
  handleReset = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count = 0});
  };

  
  // The render method returns the JSX that should be rendered
  render() {
    
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Score: {this.state.count}</p>
          <p className="card-text">Top Score: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>{" "}
          <button className="btn btn-danger" onClick={this.handleReset}>
            Top Score
          </button>
          <button className="btn btn-danger" onClick={this.handleReset}>
           Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
