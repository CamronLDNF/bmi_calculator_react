import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  it('renders header', () => {
    const component = shallow(<App />);
    const header = <h2>BMI Converter</h2>;
    expect(component.contains(header)).toEqual(true);
  });

  it('shows metric as the standard method', () => {
    const component = shallow(<App />);
    const weightLabel = <label>Weight(kg)</label>;
    const heightLabel = <label>Height(cm)</label>;
    expect(component.contains(weightLabel)).toEqual(true);
    expect(component.contains(heightLabel)).toEqual(true);
  })

  it('can change method', () => {
    const component = shallow(<App />);
    component.setState({method: 'imperial'})
    const weightLabel = <label>Weight(lbs)</label>;
    const heightLabel = <label>Height(in)</label>;
    expect(component.contains(weightLabel)).toEqual(true);
    expect(component.contains(heightLabel)).toEqual(true);
  })

  it('has two methods to choose from', () => {
    const component = mount(<App />);
    const selector = component.find('#method').instance()
    expect(selector.options.length).toEqual(2)
  })
  
})