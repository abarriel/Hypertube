import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import req from '../../request';
import {
  WrapMenuContainer,
  WrapMenuElem,
  WrapMenuElemText,
  LanguagesContainer,
} from './styles';
import { getSelectedLanguage } from '../../selectors/user';
import { updateUserLanguage } from '../../actions/user';

const propTypes = {
  displayMenu: bool.isRequired,
};

const WrapMenu = ({
  displayMenu,
}) => (
  <WrapMenuContainer displayMenu={displayMenu}>
    <WrapMenuElem>
      <WrapMenuElemText to="/profil">My account</WrapMenuElemText>
    </WrapMenuElem>
    <WrapMenuElem>
      <WrapMenuElemText
        to="/"
        onClick={() => {
          req.logout().then(() => {
            window.location.replace('/login');
          });
        }
        }
      >
        Log out
      </WrapMenuElemText>
    </WrapMenuElem>
    <WrapMenuElem>
      <LanguagesContainer>
        <div id="google_translate_element" />
      </LanguagesContainer>
    </WrapMenuElem>
  </WrapMenuContainer>
);

WrapMenu.propTypes = propTypes;

const actions = { updateUserLanguage };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  lang: getSelectedLanguage(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(WrapMenu);
