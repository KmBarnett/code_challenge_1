import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../style/form.css';

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

    this.props.postLocation({
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

  handleErrors(e, errField, msg, condition) {
    if (!e.target.value) {
      this.setState({
        [errField]: 'This field is required it cannot be left blank',
      });
    } else if (condition) {
      this.setState({
        [errField]: msg,
      });
    } else {
      this.setState({ [errField]: '' });
    }
  }

  handleInputChange(e, errField, latOrLng) {
    this.setState({
      [e.target.name]: e.target.value,
    });

    if (e.target.name === 'lat' || e.target.name === 'lng') {
      this.handleLatLangErrors(e, errField, latOrLng);
    } else {
      this.handleErrors(e, errField);
    }
  }

  handleLatLangErrors(e, errField, field) {
    let msg;
    if (field) {
    }
    if (this.isInvalidLonLat(e.target.value)) {
      msg = `This is an invalid ${field}`;
      this.handleErrors(e, errField, msg, true);
    } else if (
      !this.inRange(parseFloat(e.target.value), -85, 85) &&
      field === 'Latitude'
    ) {
      msg = 'This Latitude is out of range (-85, 85)';
      this.handleErrors(e, errField, msg, true);
    } else if (
      !this.inRange(parseFloat(e.target.value), -280, 100) &&
      field === 'Longitude'
    ) {
      msg = 'This Longitude is out of range (-280, 100)';
      this.handleErrors(e, errField, msg, true);
    } else {
      this.handleErrors(e, errField);
    }
  }

  render() {
    const { name, lat, lng } = this.state;
    const validLng =
      !this.isInvalidLonLat(lng) && this.inRange(parseFloat(lng), -280, 100);
    const validLat =
      !this.isInvalidLonLat(lat) && this.inRange(parseFloat(lat), -85, 85);

    return (
      <form className="form">
        <section className="formContainer">
          <label>
            Name*
            <span className="inputError">{this.state.nameErr}</span>
            <input
              onChange={(e) => this.handleInputChange(e, 'nameErr')}
              value={this.state.name}
              type="text"
              name="name"
            />
          </label>
        </section>
        <section className="formContainer">
          <label>
            Lat*
            <span className="inputError">{this.state.latErr}</span>
            <input
              onChange={(e) => this.handleInputChange(e, 'latErr', 'Latitude')}
              value={this.state.lat}
              type="text"
              name="lat"
            />
          </label>
        </section>
        <section className="formContainer">
          <label>
            Lon*
            <span className="inputError">{this.state.lngErr}</span>
            <input
              onChange={(e) => this.handleInputChange(e, 'lngErr', 'Longitude')}
              value={this.state.lng}
              type="text"
              name="lng"
            />
          </label>
        </section>
        <section className="formContainer">
          <button
            disabled={!(!!name && validLng && validLat)}
            type="submit"
            className="submitButton"
            onClick={(e) => this.submitForm(e)}
          >
            Save
          </button>
        </section>
      </form>
    );
  }
}

export default Form;
