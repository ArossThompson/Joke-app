import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import CustomJoke from '../../components/routes/CustomJoke';
import JokeDisplay from '../../components/UI-Components/JokeDisplay/JokeDisplay';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('CustomJoke component', () => {

    it('should render a div with className of joke-container', () => {
        const wrapper = shallow(<CustomJoke />);
        expect(wrapper.exists('.joke-container')).toEqual(true);
    });

    it('should render a div with className of input-wrapper', () => {
        const wrapper = shallow(<CustomJoke />);
        expect(wrapper.exists('.input-wrapper')).toEqual(true);
    });

    it('should render a h1 tag with className of route-heading', () => {
        const wrapper = shallow(<CustomJoke />);
        expect(wrapper.find('h1').hasClass('route-heading')).toEqual(true);
    });

    it('should render a p tag with className of instructions', () => {
        const wrapper = shallow(<CustomJoke />);
        expect(wrapper.find('p').hasClass('instructions')).toEqual(true);
    });

    it('should render an error is state var showError is true', () => {
        const wrapper = shallow(<CustomJoke />);
        wrapper.setState({showError: true});
        expect(wrapper.exists('.validation-error')).toEqual(true);
    });

    it('should render an a joke if state var customJoke is not an empty string', () => {
        const wrapper = shallow(<CustomJoke />);
        wrapper.setState({customJoke: 'Joke'});
        expect(wrapper.find(JokeDisplay)).toHaveLength(1);
    });

    // Still need to test class methods and API calls
})