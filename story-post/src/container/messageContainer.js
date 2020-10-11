
import { connect } from 'react-redux'
import Message from '../component/message'
import { add,remove } from '../actions';

const mapStateToProps = (state = []) => {
   return {
      list: state
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      add: (textObject) => dispatch(add(textObject)),
      remove: (index) => dispatch(remove(index))
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Message);