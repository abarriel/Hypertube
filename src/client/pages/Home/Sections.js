const Sections = [
  {
    id: 0,
    label: 'Les plus gros succès sur Hypertix',
    reqParams: {
      limit: 25,
      offset: 0,
      ratings: 5,
    },
  },
  {
    id: 1,
    label: 'Nouveautés',
    reqParams: {
      limit: 25,
      offset: 100,
      years: 2017,
    },
  },
  {
    id: 2,
    label: 'Action et aventure',
    reqParams: {
      limit: 25,
      offset: 0,
      genres: 'Action',
      years: 2017,
    },
  },
  {
    id: 3,
    label: 'Comédie',
    reqParams: {
      limit: 25,
      offset: 0,
      genres: 'Comedy',
      years: 2017,
    },
  },
  {
    id: 4,
    label: 'Thrillers',
    reqParams: {
      limit: 25,
      offset: 0,
      genres: 'Thriller',
      years: 2017,
    },
  },
  {
    id: 5,
    label: 'Sport',
    reqParams: {
      limit: 25,
      offset: 0,
      genres: 'Sport',
      years: 2017,
    },
  },
  {
    id: 6,
    label: 'Fantaisie',
    reqParams: {
      limit: 25,
      offset: 0,
      genres: 'Fantasy',
      years: 2017,
    },
  },
  {
    id: 7,
    label: 'Films d\'animation',
    reqParams: {
      limit: 25,
      offset: 0,
      genres: 'Animation',
      years: 2017,
    },
  },
];

export default Sections;
