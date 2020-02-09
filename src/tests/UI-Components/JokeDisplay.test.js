import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import JokeDisplay from '../../components/UI-Components/JokeDisplay/JokeDisplay';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Joke display', () => {
    it('should render a div with className of joke-display', () => {
        const wrapper = shallow(<JokeDisplay/>);
        expect(wrapper.find('div').hasClass('joke-display')).toEqual(true);
    });

    it('should render a p tag with className of joke-text', () => {
        const wrapper = shallow(<JokeDisplay/>);
        expect(wrapper.find('p').hasClass('joke-text')).toEqual(true);
    });


})