import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ house }) => {
  console.log(house);
  return (
    <div>Winter is Here!</div>
  );
};

Card.propTypes = {
  housesInTheGame: PropTypes.arrayOf(PropTypes.object)
};

export default Card;
