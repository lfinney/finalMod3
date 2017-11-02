import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { fetchHouseData } from '../../utilities/databaseHelper';
import { toggleActiveMembers } from '../../actions';
import { connect } from 'react-redux';
import CardDirectory from '../CardDirectory/CardDirectory';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }


  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          { this.props.housesInTheGame.length > 0 ?
            <CardDirectory
              housesInTheGame={this.props.housesInTheGame}
              showActiveMembers={this.props.showActiveMembers}
              toggleActiveMembers={this.props.toggleActiveMembers}/>
            :
            <div className="loading">
              <img
                alt="running dire wolf"
                src={ require('../../assets/wolf.gif')}/>
            </div>
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  housesInTheGame: PropTypes.arrayOf(PropTypes.object),
  fetchData: PropTypes.func,
  showActiveMembers: PropTypes.bool,
  toggleActiveMembers: PropTypes.func
};

const mapStateToProps = ( store ) => ({
  housesInTheGame: store.housesInTheGame,
  showActiveMembers: store.showActiveMembers
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchHouseData()),
  toggleActiveMembers: (bool) => dispatch(toggleActiveMembers(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
