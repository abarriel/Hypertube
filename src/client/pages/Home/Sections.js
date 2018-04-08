const Sections = [
  {
    id: 0,
    label: 'The biggest hits on Hypertix',
    reqParams: {
      sort: 'seeds.DESC',
      limit: 25,
    },
  },
  {
    id: 1,
    label: 'Animation Movies',
    reqParams: {
      limit: 25,
      sort: 'seeds.DESC',
      genres: 'Animation',
    },
  },
  {
    id: 2,
    label: 'Top rated',
    reqParams: {
      limit: 25,
      sort: 'score.DESC',
    },
  },
  {
    id: 3,
    label: 'Comédy',
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
    label: 'Fantaisy',
    reqParams: {
      limit: 25,
      sort: 'seeds.DESC',
      genres: 'Fantasy',
    },
  },
  {
    id: 7,
    label: 'Tv Shows',
    reqParams: {
      limit: 25,
      sort: 'score.DESC',
      type: 'shows',
    },
  },
];

export default Sections;
