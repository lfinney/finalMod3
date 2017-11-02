import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardDirectory = ({ housesInTheGame }) => {
  const houseInfo= housesInTheGame.map( (house, index) =>
    <Card
      house={house}
      key ={`house - ${index}`} />);

  return (
    <div className="card-container">{houseInfo}</div>
  );
};

CardDirectory.propTypes = {
  housesInTheGame: PropTypes.arrayOf(PropTypes.object)
};

export default CardDirectory;
