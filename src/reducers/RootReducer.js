import { combineReducers } from 'redux';
import Locations from './LocationsReducer';
import Polygons from './PolygonReducer.js'

const RootReducer = combineReducers({
  Locations,
  Polygons,
});

export default RootReducer;
