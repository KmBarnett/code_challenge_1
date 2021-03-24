import { connect } from 'react-redux'
import Form from '../components/Form'
import { addLocation } from '../actions/locationActions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    saveLocation: (location) => {
      dispatch(addLocation(location));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
