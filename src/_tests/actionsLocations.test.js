import { test } from 'xregexp';
import * as locations from '../actions/locationActions';
import { testLocations } from './testData';

describe('Locations', () => {
  it('can add a location', () => {
    expect(
      locations.addLocation(testLocations[0]).toBe({
        type: 'SAVE_LOCATION',
        data: {
          id: 'id1',
          name: 'Denver',
          lat: 39.742043,
          lng: -104.991531,
        },
      })
    );
  });
});
