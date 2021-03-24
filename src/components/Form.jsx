import React, { Component } from 'react';
import uniqid from 'uniqid';

const initialState = {
  name: '',
  lat: '',
  lng: '',
  nameErr: '',
  latErr: '',
  lngErr: '',
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  submitForm(e, data) {
    e.preventDefault();

    const { name, lat, lng } = this.state;

    this.props.saveLocation({
      id: uniqid(),
      name,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    });

    this.setState({ ...initialState });
  }

  isInvalidLonLat(value) {
    return !/^(-?|\+?)?\d+(\.\d+)?$/.test(`${value}`);
  }

  inRange(value, min, max) {
    return value >= min && value <= max;
  }

  handleInputBlur(e, state, msg, condition) {
    if (!e.target.value) {
      this.setState({
        [state]: 'This field is required it cannot be left blank',
      });
    } else if (condition) {
      this.setState({
        [state]: msg,
      });
    } else {
      this.setState({ [state]: '' });
    }
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleLatLangBlur(e, state, field) {
    let msg;
    if (field) {
    }
    this.handleInputBlur(e, state, msg, this.isInvalidLonLat(e.target.value));
  }

  render() {
    const { name, lat, lng } = this.state;
    const validLng =
      !this.isInvalidLonLat(lng) && this.inRange(parseFloat(lng), -280, 100);
    const validLat =
      !this.isInvalidLonLat(lat) && this.inRange(parseFloat(lat), -85, 85);

    return (
      <form className="form">
        <section>
          <p>{this.state.nameErr}</p>
          <label>
            Name*
            <input
              onChange={(e) => this.handleInputChange(e)}
              value={this.state.name}
              type="text"
              name="name"
              onBlur={(e) => {
                this.handleInputBlur(e, 'nameErr');
              }}
            />
          </label>
        </section>
        <section>
          <p>{this.state.latErr}</p>
          <label>
            Lat*
            <input
              onChange={(e) => this.handleInputChange(e)}
              value={this.state.lat}
              type="text"
              name="lat"
              onBlur={(e) => this.handleLatLangBlur(e, 'latErr', 'Latitude')}
            />
          </label>
        </section>
        <section>
          <p>{this.state.lngErr}</p>
          <label>
            Lon*
            <input
              onChange={(e) => this.handleInputChange(e)}
              value={this.state.lng}
              type="text"
              name="lng"
              onBlur={(e) => this.handleLatLangBlur(e, 'lngErr', 'Longitude')}
            />
          </label>
        </section>
        <button
          disabled={!(!!name && validLng && validLat)}
          type="submit"
          onClick={(e) => this.submitForm(e)}
        >
          Save
        </button>
      </form>
    );
  }
}

export default Form;
