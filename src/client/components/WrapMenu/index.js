import React from 'react';
import { bool, string, func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import req from '../../request';
import {
  WrapMenuContainer,
  WrapMenuElem,
  WrapMenuElemText,
  LanguagesContainer,
  FrenchFlag,
  EnglishFlag,
} from './styles';
import { getSelectedLanguage } from '../../selectors/user';
import { updateUserLanguage } from '../../actions/user';
import { FR, ENG } from './constants';

const propTypes = {
  displayMenu: bool.isRequired,
  lang: string,
  updateUserLanguage: func.isRequired,
};

const WrapMenu = ({
  displayMenu,
  lang,
  updateUserLanguage,
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
        <FrenchFlag
          selected={lang === FR}
          onClick={() => {
            if (lang !== FR) {
              updateUserLanguage(FR)
            }
          }}
        />
        <EnglishFlag
          selected={lang === ENG}
          onClick={() => {
            if (lang !== ENG) {
              updateUserLanguage(ENG)
            }
          }}
        />
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
