import { connect } from 'react-redux';
import { getIsSnackBarOpen, getSnackBarMessage } from 'src/redux/selectors';
import { hideNotification } from 'src/redux/actions';
import SnackBar from './SnackBarComponent';

export default connect(
  (state) => ({
    isOpen: getIsSnackBarOpen(state),
    message: getSnackBarMessage(state),
  }),
  {
    hideNotification,
  },
)(SnackBar);
