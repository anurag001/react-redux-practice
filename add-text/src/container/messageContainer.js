
import { connect } from 'react-redux'
import Message from '../component/message'
import { add } from '../actions';

const mapStateToProps = (state = []) => {
   return {
      list: state
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      add: (text) => dispatch(add(text)),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Message);