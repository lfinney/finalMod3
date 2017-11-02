export const fetchData = (houses) => {
  return {
    type: 'FETCH_DATA',
    houses
  };
};

export const toggleActiveMembers = (bool) => {
  return {
    type: 'TOGGLE_ACTIVE_MEMBERS',
    bool
  };
};
