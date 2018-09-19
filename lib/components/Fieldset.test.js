import React from 'react';
import { shallow } from 'enzyme';
import Fieldset from './Fieldset';
import uuidv1 from 'uuid/v1';

describe('Fieldset', () => {

  it('renders', () => {
    const wrapper = shallow(<Fieldset />);
    expect(wrapper.html()).toEqual('<fieldset></fieldset>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Fieldset />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Fieldset>{testValue}</Fieldset>);
    expect(wrapper.text()).toEqual(testValue);
  });

  /*it('renders with `disabled` attribute', () => {
    const wrapper = shallow(<Fieldset />);
    wrapper.setProps({ isReadonly: true });
    console.log(wrapper.html());
    //expect(wrapper.props().className).toEqual(testValue);
  });*/

});
