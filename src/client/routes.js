import Home from './pages/Home';
import Profil from './pages/Profil';
import Movies from './pages/Movies';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    id: 0,
  },
  {
    path: '/profil',
    component: Profil,
    id: 1,
  },
  {
    path: '/users',
    component: Profil,
    id: 2,
  },
  {
    path: '/movies',
    component: Movies,
    id: 3,
  },
];

export default routes;
