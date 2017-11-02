import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ house }) => {

  console.log(house);
  const seats = house.seats.map( seat =>
    <p key={seat} >{seat}</p>);
  const titles = house.titles.map( title =>
    <p key={title} >{title}</p>);
  const weapons = house.ancestralWeapons.map( weapon =>
    <p key={weapon} >{weapon}</p>);

  return (
    <div className="card">
      <h2>{house.name}</h2>
      <p>{house.founded}</p>
      <h3>House Seats</h3>
      <h3>{seats}</h3>
      <h3>House Titles</h3>
      <div>{titles}</div>
      <h3>Coat of Arms</h3>
      <p>{house.coatOfArms}</p>
      <h3>Ancestral Weapons</h3>
      <div>{weapons}</div>
      <h3>{house.words}</h3>
    </div>
  );
};

Card.propTypes = {
  house: PropTypes.object
};

export default Card;
