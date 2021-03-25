import React, { PureComponent } from 'react';
import MapMarker from './Marker';

class AllMarkers extends PureComponent {
  togglePoint = (point) => {
    const { addPoint, removePoint, selectedPoints } = this.props;
    if (
      selectedPoints.find((existingPoint) => existingPoint.id === point.id)
    ) {
      removePoint({ id: point.id });
    } else {
      addPoint({ id: point.id, location: point.location });
    } 
  };
  render() {
    const { locations, setCenter } = this.props;
    const markerArray = locations.map((marker, i) => {
      return (
        <MapMarker
          key={i}
          id={i}
          location={[+marker.lat, +marker.lng]}
          name={marker.name}
          onClick={this.togglePoint}
        />
      );
    });

    setCenter(locations[locations.length - 1]);

    return <div className="paths-container">{markerArray}</div>;
  }
}

export default AllMarkers;
