export const housesInTheGame = ( state = [], action) => {
  switch (action.type) {
  case "FETCH_DATA":
    return action.houses;

  default:
    return state;
  }
};

export const showActiveMembers = ( state = false, action) => {
  switch (action.type) {
  case "TOGGLE_ACTIVE_MEMBERS":
    return action.bool;

  default:
    return state;
  }
};
