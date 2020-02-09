import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// Setup function returns a shallow wrapper of tested component
const setup = (props = {}, state = null ) => {
    const wrapper = shallow(<App {...props} />);
    if(state) {
      wrapper.setState(state);
    }
  
    return wrapper;
} 

// Function for finding the testable element by it's Class attribute. 
const findByClassAttr = (wrapper, val) => {
    return wrapper.find(`.${val}`);
}

// Function for finding the testable element by it's ID attribute. 
const findByIDAttr = (wrapper, val) => {
    return wrapper.find(`#${val}`);
}

test('Should render without an error', () => {
    const wrapper = setup();
    const appComponent = findByClassAttr(wrapper, 'App')
    expect(appComponent.length).toBe(1);
});

