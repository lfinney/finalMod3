import React from 'react';
import Card from '../components/Card/Card';
import { shallow } from 'enzyme';
import housesMock from './mockData/housesMock';

describe('Card', () => {

  it('should render component', () => {
    const wrapper = shallow(
      <Card house={housesMock[0]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
