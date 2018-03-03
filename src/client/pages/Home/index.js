import React from 'react';
import { compose, lifecycle } from 'recompose';
import { isEmpty } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getGenres } from '../../selectors/movies';
import MoviePreviewSlider from '../../components/MoviePreviewSlider';
import { HomeContainer, MainContent } from './styles';
import Section from '../../containers/Section';
import Sections from './Sections';

import { loadGenres } from '../../actions/movies';

import req from '../../request';


const init = loadGenres => {
  req.genres()
    .then(data => {
      loadGenres(data);
    });
};

const Home = () => (
  <HomeContainer>
    <MainContent>
      <MoviePreviewSlider />
      {Sections.map(section => <Section key={section.id} reqParams={section.reqParams} title={section.label} />)}
    </MainContent>
  </HomeContainer>
);

const actions = { loadGenres };

const mapStateToProps = state => ({
  genres: getGenres(state),
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
    },
  }),
)(Home);
