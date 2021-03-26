import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';
import AllMarkers from './AllMarkers';
import PolygonShading from './PolygonShading';
import { CoordinatesControl } from 'react-leaflet-coordinates';

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setCenter = (newCenter) => {
    if (newCenter) {
      this.setState({ center: [newCenter.lat, newCenter.lng] });
    }
  };

  keyNavigation(e) {
    const { center } = this.state;

    switch (e.keyCode) {
      case 37: // left
        if (center[1] - 5 > -280) {
          this.setState({ center: [center[0], center[1] - 5] });
        }
        break;
      case 39: // right:
        if (center[1] + 5 < 100) {
          this.setState({ center: [center[0], center[1] + 5] });
        }
        break;
      case 38: // up:
        if (center[0] + 5 < 85) {
          this.setState({ center: [center[0] + 5, center[1]] });
        }
        break;
      case 40: // down:
        if (center[0] - 5 > -85) {
          this.setState({ center: [center[0] - 5, center[1]] });
        }
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div onKeyDown={(e) => this.keyNavigation(e)} className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={this.state.center}
          zoom={4}
          maxBounds={[[85, 100], [-85, -280]]}
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
          <CoordinatesControl
            position="topleft"
            style={{ fontSize: '1.5em' }}
          />
        </Map>
      </div>
    );
  }
}

export default LeafletMap;
