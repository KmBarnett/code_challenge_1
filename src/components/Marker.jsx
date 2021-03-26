import React, { PureComponent } from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import tealdot from '../imgs/tealdot.svg';

class MapMarker extends PureComponent {
  render() {
    const icon = L.icon({
      iconUrl: tealdot,
      iconSize: this.props.size,
    });

    return (
      <div className="marker-container">
        <Marker
          onclick={() =>
            this.props.onClick({ id: this.props.id, location: this.props.location })
          }
          position={this.props.location}
          icon={icon}
        >
          <Tooltip sticky interactive>
            <div>
              <h4>{this.props.name}</h4>
            </div>
          </Tooltip>
        </Marker>
      </div>
    );
  }
}

export default MapMarker;
