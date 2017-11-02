import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      showMembers: false
    };
  }

  toggleActiveMembers() {
    this.setState({
      showMembers: !this.state.showMembers
    });
  }

  render() {
    const { house } = this.props;
    const seats = this.props.house.seats.map( seat =>
      <span key={seat} >{seat}</span>);
    const titles = house.titles.map( title =>
      <p className="flex-me" key={title} >{title}</p>);
    const weapons = house.ancestralWeapons.map( weapon =>
      <p key={weapon} >{weapon}</p>);
    const members = house.swornMembers.map( (member, index) =>
      <p className="flex-me" key={index}>{member}</p> );

    return (
      <div
        className="card"
        onClick={() => this.toggleActiveMembers()}>
        <h2>{house.name}</h2>
        <p>{house.founded}</p>
        <h3>House Seats: {seats}</h3>
        <h3>House Titles</h3>
        <div className="flex-data">{titles}</div>
        <h3>Coat of Arms</h3>
        <p>{house.coatOfArms}</p>
        <h3>Ancestral Weapons</h3>
        <div>{weapons}</div>
        <h3>{house.words}</h3>
        {this.state.showMembers &&
        <div className="flex-data">{members}</div>
        }
      </div>
    );
  }
}

Card.propTypes = {
  house: PropTypes.object
};

export default Card;
