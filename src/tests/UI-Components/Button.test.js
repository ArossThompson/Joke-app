import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Button from '../../components/UI-Components/Button/Button';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Button component', () => {
    it('should render a button with className of button', () => {
        const wrapper = shallow(<Button/>);
        expect(wrapper.find('button').hasClass('button')).toEqual(true)
    });
})