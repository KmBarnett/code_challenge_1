/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PolygonShading from '../components/PolygonShading';

const mapStateToProps = (state) => {
  return {
    selectedPoints: state.Polygons.data,
  };
};


export default connect(mapStateToProps, null)(PolygonShading);
