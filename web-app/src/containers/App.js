import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import { cancel, setValue, reset } from '../actions';

/**
 * Maps the proper state to Props to pass them to the children.
 */
const mapStateToProps = state => ({
  value: state.root.value,
  error: state.root.error,
  result: state.root.result,
  loading: state.root.loading,
});

/**
 * Maps the proper dispatch actions to Props to pass them to the children.
 */
const mapDispatchToProps = dispatch => bindActionCreators({
  setValue,
  cancel,
  reset,
}, dispatch);

/**
 * Connects Redux State and dispatch to React components.
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

