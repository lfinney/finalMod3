import React from 'react';
import PropTypes from 'prop-types';

const CardDirectory = ({ housesInTheGame }) => {

  return (
    <div>Winter is Coming</div>
  );
};

CardDirectory.propTypes = {
  housesInTheGame: PropTypes.arrayOf(PropTypes.object)
};

export default CardDirectory;
