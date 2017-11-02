import * as actions from '../actions';
import housesMock from './mockData/housesMock'

describe('actions', () => {

  it('should return an array of objects', () => {
    const expected = {
      type: 'FETCH_DATA',
      houses: housesMock
    };

    const expectation = actions.fetchData(housesMock);

    expect(expectation).toEqual(expected);
  });
});
