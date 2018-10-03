import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import uuidv1 from 'uuid/v1';

describe('Main', () => {

  it('renders', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.html()).toEqual('<main></main>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Main />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Main>{testValue}</Main>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
