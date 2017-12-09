import Home from './pages/Home';
import Profil from './pages/Profil';

const routes = [
  {
    path: '/',
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
];

export default routes;
