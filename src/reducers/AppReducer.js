export const housesInTheGame = ( state = [], action) => {
  switch (action.type) {
  case "FETCH_DATA":
    return action.houses;

  default:
    return state;
  }
};
