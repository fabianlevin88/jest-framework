import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('Counter App Test Suite', () => {

  const wrapper = shallow(<App />);

  test('Validate that the app renders without any error', () => {

    const appComponent = wrapper.find("[data-test='component-app']")

    expect(appComponent.length).toBe(1);
  });

  test('Validate that the increment button is rendered', () => {

  });

  test('Validate that the counter label is rendered', () => {

  });

  test('Validate that the counter starts at 0', () => {

  });

  test('Validate that clicking increments the counter displayed', () => {

  });
})
