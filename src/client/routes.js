import Home from './pages/Home';
import Profil from './pages/Profil';
import Movies from './pages/Movies';
import Users from './pages/Users';
import Video from './pages/Video';

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
    path: '/movies',
    component: Movies,
    id: 3,
  },
  {
    path: '/users',
    component: Users,
    id: 4,
  },
  {
    path: '/video',
    component: Video,
    id: 5,
  },
];

export default routes;
