import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import RandomJoke from '../../components/routes/RandomJoke';
import JokeDisplay from '../../components/UI-Components/JokeDisplay/JokeDisplay';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('RandomJoke component', () => {

    it('should render a div with className of joke-container', () => {
        const wrapper = shallow(<RandomJoke/>);
        expect(wrapper.find('div').hasClass('joke-container')).toEqual(true);
    });

    it('should render a h1 tag with className of route-heading', () => {
        const wrapper = shallow(<RandomJoke/>);
        expect(wrapper.find('h1').hasClass('route-heading')).toEqual(true);
    });

    it('should render a p tag with className of instructions', () => {
        const wrapper = shallow(<RandomJoke/>);
        expect(wrapper.find('p').hasClass('instructions')).toEqual(true);
    });

    it('should not render a JokeDisplay child component if randomJoke state var is null', () => {
        const wrapper = shallow(<RandomJoke />);
        wrapper.setState({randomJoke: ''})
        expect(wrapper.find(JokeDisplay)).toHaveLength(0);
    });

    it('should render a JokeDisplay child component if randomJoke prop is not null', () => {
        const wrapper = shallow(<RandomJoke />);
        wrapper.setState({randomJoke: 'joke'})
        expect(wrapper.find(JokeDisplay)).toHaveLength(1);
    });

    // Still need to class methods
})