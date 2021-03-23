import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      name: '',
      lat: '',
      lng: '',
      nameErr: '',
      latErr: '',
      lngErr: '',
    };
  }

  submitForm(e, data) {
    e.preventDefault();

    const { name, lat, lng } = this.state;

    this.props.saveLocation({ name, lat, lng });
  }

  isInvalidLonLat(value) {
    return !/^(-?|\+?)?\d+(\.\d+)?$/.test(value);
  }

  validate() {
    const { name, lat, lng } = this.state;
    this.setState({
      isEnabled:
        !!name && !this.isInvalidLonLat(lng) && !this.isInvalidLonLat(lat),
    });
  }

  handleInputBlur(e, state, msg, condition) {
    if (!e.target.value) {
      this.setState({
        [state]: 'This field is required it cannot be left blank',
      });
    } else if  (condition) {
      this.setState({
        [state]: msg,
      });
    } else {
      this.setState({ [state]: '' });
    }
    this.validate();
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.validate();
  }

  handleLatLangBlur(e, state, field) {
    const msg = `This not a valid ${field}`;
    this.handleInputBlur(e, state, msg, this.isInvalidLonLat(e.target.value));
  }

  render() {
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
          disabled={!this.state.isEnabled}
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
