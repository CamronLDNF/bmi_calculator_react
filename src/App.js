import React, { Component } from 'react';
import './App.css';
import DisplayResult from './DisplayResult';

const weightLabel = (method) => {
  if (method === 'metric') {
    return 'Weight(kg)'
  } else {
    return 'Weight(lbs)'
  }
}

const heightLabel = (method) => {
  if (method === 'metric') {
    return 'Height(cm)'
  } else {
    return 'Height(in)'
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'metric'
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <label>{weightLabel(this.state.method)}</label> 
          <input name="weight" value={this.state.weight} onChange={(e) => this.setState({ weight: e.target.value })} />
        </div>

        <div>
          <label>{heightLabel(this.state.method)}</label>
          <input name="height" value={this.state.height} onChange={(e) => this.setState({ height: e.target.value })} />
        </div>

        <div>
          <select name="method" value={this.state.method} onChange={(e) => this.setState({ method: e.target.value })}>
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </div>

        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
          method={this.state.method}
        />
      </div>
    );
  }
}

export default App;
