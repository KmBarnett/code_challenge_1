require('isomorphic-fetch');

const storeAllLocations = (locations) => ({
    type: 'STORE_LOCATIONS',
    data: locations.locations,
});

const addLocation = (location) => ({
  type: 'SAVE_LOCATION',
  data: location,
});

const fetchAllLocations = () => {
  return (dispatch) => {
    return fetch('/locations', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((locations) => locations.json())
      .then((json) => dispatch(storeAllLocations(json)));
  };
};

export default fetchAllLocations;
