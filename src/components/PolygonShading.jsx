import React, { PureComponent } from 'react';
import { Polygon } from 'react-leaflet';

class PolygonShading extends PureComponent {
  render() {
    const { selectedPoints } = this.props;
    const positions = selectedPoints.map((point) => point.location);

    return <Polygon positions={positions} />;
  }
}

export default PolygonShading;
