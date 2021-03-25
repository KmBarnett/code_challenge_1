/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllMarkers from '../components/AllMarkers';
import { addPoint, removePoint } from '../actions/polygonActions';

const mapStateToProps = (state) => {
  return { locations: state.Locations.data, selectedPoints: state.Polygons.data }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPoint: (point) => {
      dispatch(addPoint(point));
    },
    removePoint: (point) => {
      dispatch(removePoint(point));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMarkers);
