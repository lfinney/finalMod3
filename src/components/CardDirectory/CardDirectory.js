import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardDirectory = ({ housesInTheGame, showActiveMembers, toggleActiveMembers }) => {
  const houseInfo= housesInTheGame.map( (house, index) =>
    <Card
      house={house}
      key ={`house - ${index}`}
      showActiveMembers={showActiveMembers}
      toggleActiveMembers={toggleActiveMembers}/>);

  return (
    <div className="card-container">{houseInfo}</div>
  );
};

CardDirectory.propTypes = {
  housesInTheGame: PropTypes.arrayOf(PropTypes.object)
};

export default CardDirectory;
