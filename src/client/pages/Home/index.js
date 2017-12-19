import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';
import { HomeContainer, MainContent } from './styles';
import Section from '../../containers/Section';

const fakeMovies = [
  {
    id: 0,
    name: 'The Walking Dead',
    year: '2010',
    rating: 2,
    coverImage: 'http://static1.purebreak.com/articles/6/42/74/6/@/127325-affiche-de-le-saison-2-de-walking-dead-950x0-3.jpg',
    description: 'It’s been 24 years since George R.R. Martin pitched his Song of Ice and Fire series. What was originally set to be a trilogy of novels has ballooned into an ongoing saga with so many moving parts it takes the author nearly a decade to get the pieces in place for each new installment. But even when Game of Thrones was a mere 13 chapters of a fantasy spec, Martin vaguely knew where his story was going. Every author is different; some write extensive outlines they follow to the letter while others prefer to merely see their first major plot point in the distance and then fling themselves into the mists of the unknown to find it. In a now deleted tweet from Waterstones Booksellers, a query letter from Martin outlines his plan for Game of Thrones over three short pages, including the five characters who will make it to the end.',
  },
  {
    id: 1,
    name: 'Game of Throne',
    year: '2010',
    rating: 5,
    coverImage: 'http://static.hitek.fr/img/actualite/2017/06/23/w-1343232-mkt-pm-got-s7-jon-po.jpeg',
    description: 'It’s been 24 years since George R.R. Martin pitched his Song of Ice and Fire series. What was originally set to be a trilogy of novels has ballooned into an ongoing saga with so many moving parts it takes the author nearly a decade to get the pieces in place for each new installment. But even when Game of Thrones was a mere 13 chapters of a fantasy spec, Martin vaguely knew where his story was going. Every author is different; some write extensive outlines they follow to the letter while others prefer to merely see their first major plot point in the distance and then fling themselves into the mists of the unknown to find it. In a now deleted tweet from Waterstones Booksellers, a query letter from Martin outlines his plan for Game of Thrones over three short pages, including the five characters who will make it to the end.',
  },
  {
    id: 2,
    name: 'Harry Potter à l\'école des sorciers',
    year: '2001',
    rating: 4,
    coverImage: 'https://i.pinimg.com/564x/bf/80/95/bf8095a03e5f3dc642e043d078aa1cfd.jpg',
    description: 'It’s been 24 years since George R.R. Martin pitched his Song of Ice and Fire series. What was originally set to be a trilogy of novels has ballooned into an ongoing saga with so many moving parts it takes the author nearly a decade to get the pieces in place for each new installment. But even when Game of Thrones was a mere 13 chapters of a fantasy spec, Martin vaguely knew where his story was going. Every author is different; some write extensive outlines they follow to the letter while others prefer to merely see their first major plot point in the distance and then fling themselves into the mists of the unknown to find it. In a now deleted tweet from Waterstones Booksellers, a query letter from Martin outlines his plan for Game of Thrones over three short pages, including the five characters who will make it to the end.',
  },
  {
    id: 3,
    name: 'Harry Potter et la Chambre des secrets',
    year: '2001',
    rating: 3,
    coverImage: 'https://i.pinimg.com/736x/d3/99/e4/d399e4b82c9ac29ec85297745f5f4284.jpg',
    description: 'It’s been 24 years since George R.R. Martin pitched his Song of Ice and Fire series. What was originally set to be a trilogy of novels has ballooned into an ongoing saga with so many moving parts it takes the author nearly a decade to get the pieces in place for each new installment. But even when Game of Thrones was a mere 13 chapters of a fantasy spec, Martin vaguely knew where his story was going. Every author is different; some write extensive outlines they follow to the letter while others prefer to merely see their first major plot point in the distance and then fling themselves into the mists of the unknown to find it. In a now deleted tweet from Waterstones Booksellers, a query letter from Martin outlines his plan for Game of Thrones over three short pages, including the five characters who will make it to the end.',
  },
  {
    id: 4,
    name: 'Harry Potter et le Prisonnier d’Azkaban',
    year: '2001',
    rating: 2,
    coverImage: 'https://i.pinimg.com/736x/b0/37/8b/b0378b48e5f4ec374cbbda21c8d23853.jpg',
    description: 'It’s been 24 years since George R.R. Martin pitched his Song of Ice and Fire series. What was originally set to be a trilogy of novels has ballooned into an ongoing saga with so many moving parts it takes the author nearly a decade to get the pieces in place for each new installment. But even when Game of Thrones was a mere 13 chapters of a fantasy spec, Martin vaguely knew where his story was going. Every author is different; some write extensive outlines they follow to the letter while others prefer to merely see their first major plot point in the distance and then fling themselves into the mists of the unknown to find it. In a now deleted tweet from Waterstones Booksellers, a query letter from Martin outlines his plan for Game of Thrones over three short pages, including the five characters who will make it to the end.',
  },
  {
    id: 5,
    name: 'Harry Potter et la Coupe de feu',
    year: '2001',
    rating: 3,
    coverImage: 'https://i.pinimg.com/564x/a6/f3/ff/a6f3ff850b4f75f96d6c4a410522e544.jpg',
    description: 'It’s been 24 years since George R.R. Martin pitched his Song of Ice and Fire series. What was originally set to be a trilogy of novels has ballooned into an ongoing saga with so many moving parts it takes the author nearly a decade to get the pieces in place for each new installment. But even when Game of Thrones was a mere 13 chapters of a fantasy spec, Martin vaguely knew where his story was going. Every author is different; some write extensive outlines they follow to the letter while others prefer to merely see their first major plot point in the distance and then fling themselves into the mists of the unknown to find it. In a now deleted tweet from Waterstones Booksellers, a query letter from Martin outlines his plan for Game of Thrones over three short pages, including the five characters who will make it to the end.',
  },
  {
    id: 6,
    name: 'Harry Potter et l’Ordre du phénix',
    year: '2001',
    rating: 3,
    coverImage: 'https://i.pinimg.com/736x/34/8a/b2/348ab2be327259e018fcab97cf620dbf.jpg',
    description: 'It’s been 24 years since George R.R. Martin pitched his Song of Ice and Fire series. What was originally set to be a trilogy of novels has ballooned into an ongoing saga with so many moving parts it takes the author nearly a decade to get the pieces in place for each new installment. But even when Game of Thrones was a mere 13 chapters of a fantasy spec, Martin vaguely knew where his story was going. Every author is different; some write extensive outlines they follow to the letter while others prefer to merely see their first major plot point in the distance and then fling themselves into the mists of the unknown to find it. In a now deleted tweet from Waterstones Booksellers, a query letter from Martin outlines his plan for Game of Thrones over three short pages, including the five characters who will make it to the end.',
  },
  {
    id: 7,
    name: 'Harry Potter et le Prince de sang-mêlé',
    year: '2001',
    rating: 4,
    coverImage: 'https://i.pinimg.com/originals/df/b1/1d/dfb11ddf8cfd03a08f52c5c5dc4e2569.jpg',
    description: 'It’s been 24 years since George R.R. Martin pitched his Song of Ice and Fire series. What was originally set to be a trilogy of novels has ballooned into an ongoing saga with so many moving parts it takes the author nearly a decade to get the pieces in place for each new installment. But even when Game of Thrones was a mere 13 chapters of a fantasy spec, Martin vaguely knew where his story was going. Every author is different; some write extensive outlines they follow to the letter while others prefer to merely see their first major plot point in the distance and then fling themselves into the mists of the unknown to find it. In a now deleted tweet from Waterstones Booksellers, a query letter from Martin outlines his plan for Game of Thrones over three short pages, including the five characters who will make it to the end.',
  },
  {
    id: 8,
    name: 'Harry Potter et les Reliques de la Mort (partie 1)',
    year: '2001',
    rating: 3,
    coverImage: 'https://i.pinimg.com/564x/af/bf/4e/afbf4e7fbe5000c39ddc55a5919bc53c.jpg',
    description: 'It’s been 24 years since George R.R. Martin pitched his Song of Ice and Fire series. What was originally set to be a trilogy of novels has ballooned into an ongoing saga with so many moving parts it takes the author nearly a decade to get the pieces in place for each new installment. But even when Game of Thrones was a mere 13 chapters of a fantasy spec, Martin vaguely knew where his story was going. Every author is different; some write extensive outlines they follow to the letter while others prefer to merely see their first major plot point in the distance and then fling themselves into the mists of the unknown to find it. In a now deleted tweet from Waterstones Booksellers, a query letter from Martin outlines his plan for Game of Thrones over three short pages, including the five characters who will make it to the end.',
  },
  {
    id: 9,
    name: 'Harry Potter et les Reliques de la Mort (partie 2)',
    year: '2001',
    rating: 4,
    coverImage: 'http://fr.web.img3.acsta.net/medias/nmedia/18/78/64/49/19762436.jpg',
    description: 'It’s been 24 years since George R.R. Martin pitched his Song of Ice and Fire series. What was originally set to be a trilogy of novels has ballooned into an ongoing saga with so many moving parts it takes the author nearly a decade to get the pieces in place for each new installment. But even when Game of Thrones was a mere 13 chapters of a fantasy spec, Martin vaguely knew where his story was going. Every author is different; some write extensive outlines they follow to the letter while others prefer to merely see their first major plot point in the distance and then fling themselves into the mists of the unknown to find it. In a now deleted tweet from Waterstones Booksellers, a query letter from Martin outlines his plan for Game of Thrones over three short pages, including the five characters who will make it to the end.',
  },
];

const Home = ({ movies }) => (
  <HomeContainer>
    <MainContent>
      <Header />
      <Section movies={movies} title="Nouveautés" />
      <Section movies={movies} title="Tendances actuelles" />
      <Section movies={movies} title="Les plus vus" />
    </MainContent>
  </HomeContainer>
);

Home.propTypes = {
  movies: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(Home);
