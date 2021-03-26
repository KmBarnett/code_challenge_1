import { connect } from 'react-redux';
import Form from '../components/Form';
import { bindActionCreators } from 'redux';
import { postLocation } from '../actions/locationActions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ postLocation }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
