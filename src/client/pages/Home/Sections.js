const Sections = [
  {
    id: 0,
    label: 'Les plus gros succès sur Hypertix',
    reqParams: {
      sort: 'seeds.DESC',
      limit: 25,
    },
  },
  {
    id: 1,
    label: 'Les mieux notées',
    reqParams: {
      limit: 25,
      sort: 'score.DESC',
    },
  },
  {
    id: 2,
    label: 'Action et aventure',
    reqParams: {
      limit: 25,
      sort: 'seeds.DESC',
      genres: 'Action',
    },
  },
  {
    id: 3,
    label: 'Comédie',
    reqParams: {
      limit: 25,
      sort: 'seeds.DESC',
      genres: 'Comedy',

    },
  },
  {
    id: 4,
    label: 'Thrillers',
    reqParams: {
      limit: 25,
      sort: 'seeds.DESC',
      genres: 'Thriller',
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
      sort: 'seeds.DESC',
      genres: 'Fantasy',
    },
  },
  {
    id: 7,
    label: 'Films d\'animation',
    reqParams: {
      limit: 25,
      sort: 'seeds.DESC',
      genres: 'Animation',
    },
  },
];

export default Sections;
