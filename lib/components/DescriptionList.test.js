import React from 'react';
import { shallow } from 'enzyme';
import DescriptionList from './DescriptionList';
import uuidv1 from 'uuid/v1';

describe('DescriptionList', () => {

  it('renders', () => {
    const wrapper = shallow(<DescriptionList items={[['a',1],['b',2],['c',3],['d',4]]} />);
    expect(wrapper.html()).toEqual('<dl><div><dt>a</dt><dd>1</dd></div><div><dt>b</dt><dd>2</dd></div><div><dt>c</dt><dd>3</dd></div><div><dt>d</dt><dd>4</dd></div></dl>');
  });

  it('renders list parent with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<DescriptionList items={[['a',1],['b',2],['c',3],['d',4]]} />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders list children with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<DescriptionList items={[['a',1],['b',2],['c',3],['d',4]]} />);
    wrapper.setProps({ classNameChildren: testValue });
    expect(wrapper.props().children[0].props.className).toEqual(testValue);
  });

  it('renders all dt children with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<DescriptionList items={[['a',1],['b',2],['c',3],['d',4]]} />);
    wrapper.setProps({ classNameDtChildren: testValue });
    expect(wrapper.props().children[0].props.children[0].props.className).toEqual(testValue);
  });

  it('renders all dd children with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<DescriptionList items={[['a',1],['b',2],['c',3],['d',4]]} />);
    wrapper.setProps({ classNameDdChildren: testValue });
    expect(wrapper.props().children[0].props.children[1].props.className).toEqual(testValue);
  });

  it('renders a nested list', () => {
    const wrapper = shallow(<DescriptionList items={[['a',<DescriptionList items={[['a',1],['b',2],['c',3],['d',4]]} />],['b',2],['c',3],['d',4]]} />);
    expect(wrapper.html()).toEqual('<dl><div><dt>a</dt><dd><dl><div><dt>a</dt><dd>1</dd></div><div><dt>b</dt><dd>2</dd></div><div><dt>c</dt><dd>3</dd></div><div><dt>d</dt><dd>4</dd></div></dl></dd></div><div><dt>b</dt><dd>2</dd></div><div><dt>c</dt><dd>3</dd></div><div><dt>d</dt><dd>4</dd></div></dl>');
  });

  it('renders with a single nested list at first index, and then another nested list at the last index', () => {
    const wrapper = shallow(<DescriptionList items={[['a',<DescriptionList items={[['a',1],['b',2],['c',3],['d',<DescriptionList items={[['a',1],['b',2],['c',3],['d',4]]} />]]} />],['b',2],['c',3],['d',4]]} />);
    expect(wrapper.html()).toEqual('<dl><div><dt>a</dt><dd><dl><div><dt>a</dt><dd>1</dd></div><div><dt>b</dt><dd>2</dd></div><div><dt>c</dt><dd>3</dd></div><div><dt>d</dt><dd><dl><div><dt>a</dt><dd>1</dd></div><div><dt>b</dt><dd>2</dd></div><div><dt>c</dt><dd>3</dd></div><div><dt>d</dt><dd>4</dd></div></dl></dd></div></dl></dd></div><div><dt>b</dt><dd>2</dd></div><div><dt>c</dt><dd>3</dd></div><div><dt>d</dt><dd>4</dd></div></dl>');
  });

});
