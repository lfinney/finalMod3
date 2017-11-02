import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { fetchHouseData } from '../../utilities/databaseHelper';
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
              housesInTheGame={this.props.housesInTheGame}/>
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
  fetchData: PropTypes.func
};

const mapStateToProps = ( store ) => ({
  housesInTheGame: store.housesInTheGame
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchHouseData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
