import { fetchData } from '../actions';

export const fetchHouseData = () => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/houses`)
      .then(res => res.json())
      .then(res => dispatch(fetchData(res)));
  };
};
