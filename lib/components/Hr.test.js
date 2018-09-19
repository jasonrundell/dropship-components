import React from 'react';
import { shallow } from 'enzyme';
import Hr from './Hr';
import uuidv1 from 'uuid/v1';

describe('Hr', () => {

  it('renders', () => {
    const wrapper = shallow(<Hr />);
    expect(wrapper.html()).toEqual('<hr/>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Hr />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

});
