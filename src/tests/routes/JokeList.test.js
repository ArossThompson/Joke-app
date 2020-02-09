import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import JokeList from '../../components/routes/JokeList';
import JokeDisplay from '../../components/UI-Components/JokeDisplay/JokeDisplay';
import JokeListContainer from '../../components/UI-Components/JokeListContainer/JokeListContainer';
import Button from '../../components/UI-Components/Button/Button';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('JokeList component', () => {

    it('should render a div with className of joke-container', () => {
        const wrapper = shallow(<JokeList />);
        expect(wrapper.exists('.joke-container')).toEqual(true);
    });

    it('should render a h1 tag with className of route-heading', () => {
        const wrapper = shallow(<JokeList />);
        expect(wrapper.find('h1').hasClass('route-heading')).toEqual(true);
    });

    it('should render a p tag with className of instructions', () => {
        const wrapper = shallow(<JokeList />);
        expect(wrapper.find('p').hasClass('instructions')).toEqual(true);
    });

    it('should render a button', () => {
        const wrapper = shallow(<JokeList />);
        expect(wrapper.find(Button)).toHaveLength(1);
    });

    it('should render an a joke-list-container', () => {
        const wrapper = shallow(<JokeList />);
        wrapper.setState({customJoke: 'Joke'});
        expect(wrapper.find(JokeListContainer)).toHaveLength(1);
    });

    // Still need to class methods

})