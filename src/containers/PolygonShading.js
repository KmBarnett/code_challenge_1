/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PolygonShading from '../components/PolygonShading';

const mapStateToProps = (state) => {
  return {
    selectedPoints: state.Polygons.data,
  };
};

const mapDispatchToProps = (dispatch) => {
};

export default connect(mapStateToProps, mapDispatchToProps)(PolygonShading);
