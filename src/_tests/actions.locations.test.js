import * as locations from '../actions/locationActions';
import { testLocations } from './testData';
import { getAllLocations } from '../apiCalls';
jest.mock('../apiCalls');

describe('Locations', () => {
  it('can add a location', () => {
    expect(locations.addLocation(testLocations[0])).toEqual({
      type: 'SAVE_LOCATION',
      data: {
        id: 'id1',
        name: 'Denver',
        lat: 39.742043,
        lng: -104.991531,
      },
    });
  });

  it('add multiple locations', () => {
    expect(locations.storeAllLocations({locations: testLocations})).toEqual({
      type: 'STORE_LOCATIONS',
      data: [...testLocations],
    });
  });
});
