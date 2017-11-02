import React from 'react';
import App from '../components/App/App';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import housesMock from './mockData/housesMock';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('App', () => {
  const initialState = {
    housesInTheGame: []
  };
  // const mockFunc = jest.fn();
  const store = mockStore(initialState);

  it('should render component', () => {
    const wrapper = shallow(
      <App store={store} />);

      console.log(wrapper.debug());
    expect(wrapper.length).toEqual(1);
  });

  it('should make an api call when mounted', () => {
    fetchMock.get(`http://localhost:3001/api/v1/houses`, {
      status: 200,
      body: housesMock
    });
    
    const wrapper = mount(
      <App store={store} />);
      console.log(wrapper.debug());
  })
});
