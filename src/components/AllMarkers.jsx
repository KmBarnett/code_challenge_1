import React, { PureComponent } from 'react';
import MapMarker from './Marker';

class AllMarkers extends PureComponent {
  render() {
    const { locations, setCenter } = this.props;
    const markerArray = locations.map((marker, i) => {
      return (
        <MapMarker
          key={i}
          location={[+marker.lat, +marker.lng]}
          name={marker.name}  
        />
      );
    });

    setCenter(locations[locations.length -1])

    return <div className="paths-container">{markerArray}</div>;
  }
}

export default AllMarkers;
