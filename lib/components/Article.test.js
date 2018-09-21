import React from 'react';
import { shallow } from 'enzyme';
import Article from './Article';
import uuidv1 from 'uuid/v1';

describe('Article', () => {

  it('renders', () => {
    const wrapper = shallow(<Article />);
    expect(wrapper.html()).toEqual('<article></article>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Article />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Article>{testValue}</Article>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
