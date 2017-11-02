import React from 'react';
import Card from '../components/Card/Card';
import { shallow, mount } from 'enzyme';
import housesMock from './mockData/housesMock';

describe('Card', () => {

  it('should render component', () => {
    const wrapper = shallow(
      <Card house={housesMock[0]} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render component', () => {
    const wrapper = mount(
      <Card house={housesMock[0]} />);

    const clickableDiv = wrapper.find('.card');

    expect(wrapper.state().showMembers).toEqual(false);
    clickableDiv.simulate('click');
    expect(wrapper.state().showMembers).toEqual(true);
  });
});
