import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';
import AllMarkers from './AllMarkers';
import PolygonShading from './PolygonShading';

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  setCenter = (newCenter) => {
    if (newCenter) {
      this.setState({ center: [newCenter.lat, newCenter.lng] });
    }
  };

  render() {
    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={this.state.center}
          zoom={4}
          maxBounds={[
            [85, 100],
            [-85, -280],
          ]}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            maxZoom={10}
            minZoom={2}
          />
          <ZoomControl position="bottomright" />
          <PolygonShading /> 
          <AllMarkers setCenter={this.setCenter} />
        </Map>
      </div>
    );
  }
}

export default LeafletMap;
