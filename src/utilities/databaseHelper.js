import { fetchData } from '../actions';

export const fetchHouseData = () => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/houses`)
      .then(res => res.json())
      .then(res => fetchSwornMembers(res))
      .then(res => dispatch(fetchData(res)))
      .catch(error => alert(error));
  };
};

const fetchSwornMembers = (dataToParse) => {
  const completeHouses = dataToParse.map( (house) => {
    let incompleteHouse = {
      name: house.name,
      founded: house.founded,
      seats: house.seats,
      titles: house.titles,
      coatOfArms: house.coatOfArms,
      ancestralWeapons: house.ancestralWeapons,
      words: house.words
    };

    const members = house.swornMembers.map( member => {
      return fetch('http://localhost:3001/api/v1/character', {
        method: 'POST',
        body: JSON.stringify( {url: member} ),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(person => person.name);
    });

    return Promise.all(members).then( squad =>
      Object.assign(incompleteHouse, {swornMembers: squad})
    );
  });

  return Promise.all(completeHouses).then(houseData => houseData);
};
