// export const addPoint = (data) => ({ type: 'SELECT_POINT', data });

// export const removePoint = (data) => ({ type: 'REMOVE_POINT', data });
import * as polygon from '../actions/polygonActions';
import { testPoints } from './testData';

describe('Polygon Actions', () => {
  it('Can add a point', () => {
    expect(polygon.addPoint(testPoints[0])).toEqual( {"data": testPoints[0], "type": "SELECT_POINT"});
  });
  it('Can remove a point', () => {
    expect(polygon.removePoint(testPoints[0])).toEqual({
      data: testPoints[0],
      type: 'REMOVE_POINT',
    });
  });
});
