import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('test suite', () => {
  test('renders learn react link', () => {
    const wrapper = shallow(<App />);
    
    expect(wrapper).toBeTruthy();
  });
})

