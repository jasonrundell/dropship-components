import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import uuidv1 from 'uuid/v1';

describe('Form', () => {

  it('renders', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.html()).toEqual('<form></form>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Form />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Form>{testValue}</Form>);
    expect(wrapper.text()).toEqual(testValue);
  });

  it('onSubmit attribute should be of type `function`', () => {
    const wrapper = shallow(<Form />);
    wrapper.setProps({ onSubmit: function(){ console.log();} });
    expect(typeof wrapper.props().onSubmit === 'function').toEqual(true);
  });

});
