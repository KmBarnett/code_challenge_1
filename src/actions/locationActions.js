import { getAllLocations, postNewLocation } from '../apiCalls';

export const storeAllLocations = (locations) => ({
  type: 'STORE_LOCATIONS',
  data: locations.locations,
});

export const addLocation = (location) => ({
  type: 'SAVE_LOCATION',
  data: location,
});

export const fetchAllLocations = () => {
  return (dispatch) => {
    return getAllLocations().then((json) => dispatch(storeAllLocations(json)));
  };
}

export const postLocation = (location) => {
  return (dispatch) => {
    return postNewLocation(location).then((json) =>
      dispatch(addLocation(json))
    );
  };
};
