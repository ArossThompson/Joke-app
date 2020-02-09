import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('App', () => {
    it('Should be able to run tests', () => {
        expect(1 + 2).toEqual(3);
    });

    it('Should render at-least a div with className App', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.exists('div')).toEqual(true);
        expect(wrapper.exists('.App')).toEqual(true);
    })
})


