import React from 'react';
import { compose, lifecycle } from 'recompose';
import { isEmpty } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getGenres } from '../../selectors/movies';
import { getUser } from '../../selectors/user';
import MoviePreviewSlider from '../../components/MoviePreviewSlider';
import { HomeContainer, MainContent } from './styles';
import Section from '../../containers/Section';
import Sections from './Sections';

import { loadGenres } from '../../actions/movies';
import { loadUser } from '../../actions/user';

import req from '../../request';

const Home = () => (
  <HomeContainer>
    <MainContent>
      <MoviePreviewSlider />
      {Sections.map(section => <Section key={section.id} reqParams={section.reqParams} title={section.label} />)}
    </MainContent>
  </HomeContainer>
);

const actions = { loadGenres, loadUser };

const mapStateToProps = state => ({
  genres: getGenres(state),
  user: getUser(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      if (isEmpty(this.props.genres)) {
        req.genres()
          .then(data => {
            this.props.loadGenres(data);
          });
      }
      if (isEmpty(this.props.user)) {
        req.getMyInfos()
          .then(data => {
            this.props.loadUser(data);
          });
      }
    },
  }),
)(Home);
