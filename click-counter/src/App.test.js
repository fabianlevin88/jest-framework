import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Factory function to create a shallow wrapperfor the App component
 * @function setup
 * @param {object} props - Component props specific for this setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper
}

/**
 * Returns a ShallowWrapper containing node(s) with the givenn data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Value of the data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

describe('Counter App Test Suite', () => {

  test('Validate that the App title is correctly displayed', () => {

    const wrapper = setup();

    const titleComponent = findByTestAttr(wrapper, 'title');

    expect(titleComponent.text()).toBe('Counter App');

    expect(titleComponent.html()).toBe('<h1 class="ui header" data-test="title">Counter App</h1>');
  });

  test('Validate that the app renders without any error', () => {

    const wrapper = setup();

    const appComponent = findByTestAttr(wrapper, 'component-app');

    expect(appComponent.length).toBe(1);
  });

  test('Validate that the increment button is rendered', () => {

    const wrapper = setup();
    
    const incrementButton = findByTestAttr(wrapper, 'increment-button');

    expect(incrementButton.length).toBe(1);
  });

  test('Validate that the counter display is rendered', () => {

    const wrapper = setup();
    
    const incrementLabel = findByTestAttr(wrapper, 'increment-display');

    expect(incrementLabel.length).toBe(1);
  });

  test('Validate that the counter starts at 0', () => {
    
    const wrapper = setup();
    
    const initialCounterState = wrapper.state('counter')

    expect(initialCounterState).toBe(0)
  });

  test('Validate that clicking increments the counter displayed', () => {

    // Setting initial state
    const counter = 7;
    const wrapper = setup(null, {counter});
    
    // Finding the increment button
    const incrementButton = findByTestAttr(wrapper, 'increment-button');

    // Simulating the button's click
    incrementButton.simulate('click');

    // Finding the increment label
    const incrementLabel = findByTestAttr(wrapper, 'increment-display');


    expect(incrementLabel.text()).toContain(counter + 1);
  });

  test('Validate that the decrement button decreases the number displayed', () => {

    const counter = 15;
    const wrapper = setup(null, {counter});

    const decrementButton = findByTestAttr(wrapper, 'decrement-button');

    decrementButton.simulate('click')

    const incrementLabel = findByTestAttr(wrapper, 'increment-display');

    expect(incrementLabel.text()).toContain(counter - 1);
  });

  test('Validate that negative numbers are not displayed on the increment label', () => {

    const counter = 0;
    const wrapper = setup(null, {counter});

    const decrementButton = findByTestAttr(wrapper, 'decrement-button');

    decrementButton.simulate('click')

    const incrementLabel = findByTestAttr(wrapper, 'increment-display');

    jest.spyOn(window, 'alert').mockImplementation(() => {});

    expect(incrementLabel.text()).toContain(counter);
  })
})