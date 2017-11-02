import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { fetchHouseData } from '../../utilities/databaseHelper';
import { connect } from 'react-redux';
class App extends Component {

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fetchData();
            // alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
          { this.props.housesInTheGame ?
            <CardDirectory />
            :
            <div className="loading">
              <img alt="running dire wolf" src={ require('../../../wolf.gif')}/>
            </div>
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = ({ store }) => ({
  housesInTheGame: store.housesInTheGame
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchHouseData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
