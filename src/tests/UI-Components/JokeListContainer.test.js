import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import JokeListContainer from '../../components/UI-Components/JokeListContainer/JokeListContainer';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Joke display', () => {

    const props = {
        jokes: ['joke1', 'joke2']
    }

    it('should render a div with className of list-container', () => {
        const wrapper = shallow(<JokeListContainer {...props}/>);
        expect(wrapper.find('div').hasClass('list-container')).toEqual(true);
    });

    it('should render a ul tag with className of joke-list-scroller', () => {
        const wrapper = shallow(<JokeListContainer {...props}/>);
        expect(wrapper.find('ul').hasClass('joke-list-scroller')).toEqual(true);
    });


})