import React, { Component } from 'react';
import './App.css';
import DisplayResult from './DisplayResult';


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
          <h2>BMI Converter</h2>
        </div>

        <div>
          <select name="method" id="method" value={this.state.method} onChange={(e) => this.setState({ method: e.target.value })}>
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </div>

        <div>
          <label>{ this.state.method === 'metric' ? 'Weight(kg)' : 'Weight(lbs)' }</label> 
          <input name="weight" value={this.state.weight} onChange={(e) => this.setState({ weight: e.target.value })} />
        </div>

        <div>
          <label>{ this.state.method === 'metric' ? 'Height(cm)' : 'Height(in)' }</label>
          <input name="height" value={this.state.height} onChange={(e) => this.setState({ height: e.target.value })} />
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
