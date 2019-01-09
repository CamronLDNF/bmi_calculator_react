import React from 'react';
import { mount, shallow } from 'enzyme';

import DisplayResult from '../DisplayResult'
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

describe('<DisplayResult />', () => {
  it('displays the calulation correct(metric)', () => {
    const component = shallow(<DisplayResult method='metric' weight='100' height='195'/>)
    const response = <div id='response'>You are Overweight with a BMI of 26.3</div>
    expect(component.contains(response)).toEqual(true)
  })

  it('displays the calulation correct(imperial)', () => {
    const component = shallow(<DisplayResult method='imperial' weight='140' height='73'/>)
    const response = <div id='response'>You are Underweight with a BMI of 18.47</div>
    expect(component.contains(response)).toEqual(true)
  })

  it('does not show anything when one of the input fields are empty', () => {
    const component = shallow(<DisplayResult method='metric' weight='' height='195'/>);
    expect(component.text()).toBe('')
  })
})