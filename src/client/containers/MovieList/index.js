import React from 'react';
import { ListContainer } from './styles';
import MoviePreview from '../../components/MoviePreview';

const fakeMovies = [
  {
    id: 0,
    name: 'The Walking Dead',
    year: '2010',
    rating: 3,
    coverImage: 'http://static1.purebreak.com/articles/6/42/74/6/@/127325-affiche-de-le-saison-2-de-walking-dead-950x0-3.jpg',
  },
  {
    id: 1,
    name: 'Game of Throne',
    year: '2010',
    rating: 3,
    coverImage: 'http://static.hitek.fr/img/actualite/2017/06/23/w-1343232-mkt-pm-got-s7-jon-po.jpeg',
  },
  {
    id: 2,
    name: 'Harry Potter à l\'école des sorciers',
    year: '2001',
    rating: 3,
    coverImage: 'http://img.over-blog-kiwi.com/1/88/59/62/20160508/ob_1a62f7_affiche.jpg',
  },
  {
    id: 3,
    name: 'Harry Potter et la Chambre des secrets',
    year: '2001',
    rating: 3,
    coverImage: 'http://fr.web.img4.acsta.net/medias/nmedia/00/02/53/35/affiche0.jpg',
  },
  {
    id: 4,
    name: 'Harry Potter et le Prisonnier d’Azkaban',
    year: '2001',
    rating: 3,
    coverImage: 'http://fr.web.img3.acsta.net/medias/nmedia/18/35/23/41/18378766.jpg',
  },
  {
    id: 5,
    name: 'Harry Potter et la Coupe de feu',
    year: '2001',
    rating: 3,
    coverImage: 'http://fr.web.img3.acsta.net/medias/nmedia/18/35/52/34/18450888.jpg',
  },
  {
    id: 6,
    name: 'Harry Potter et l’Ordre du phénix',
    year: '2001',
    rating: 3,
    coverImage: 'http://fr.web.img6.acsta.net/medias/nmedia/18/36/32/70/18778375.jpg',
  },
  {
    id: 7,
    name: 'Harry Potter et le Prince de sang-mêlé',
    year: '2001',
    rating: 3,
    coverImage: 'http://fr.web.img3.acsta.net/medias/nmedia/18/65/64/35/19116953.jpg',
  },
  {
    id: 8,
    name: 'Harry Potter et les Reliques de la Mort (partie 1)',
    year: '2001',
    rating: 3,
    coverImage: 'http://static1.purepeople.com/articles/6/64/85/6/@/483127-la-nouvelle-affiche-de-harry-potter-et-637x0-2.jpg',
  },
  {
    id: 9,
    name: 'Harry Potter et les Reliques de la Mort (partie 2)',
    year: '2001',
    rating: 3,
    coverImage: 'http://fr.web.img3.acsta.net/medias/nmedia/18/78/64/49/19762436.jpg',
  },
];

const MovieList = () => (
  <ListContainer>
    {fakeMovies.map(movie => <MoviePreview key={movie.id} movie={movie} />)}
  </ListContainer>
);

export default MovieList;
