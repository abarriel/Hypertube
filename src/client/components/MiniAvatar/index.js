import { connect } from 'react-redux';

import { getProfilPicture } from '../../selectors/user';
import { MiniAvatar } from './component';

const mapStateToProps = state => ({
  profilPicture: getProfilPicture(state),
});

export default connect(mapStateToProps)(MiniAvatar);
