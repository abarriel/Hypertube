import Home from './pages/Home';
import Profil from './pages/Profil';
import Movies from './pages/Movies';
import Users from './pages/Users';
import Video from './pages/Video';
import Login from './pages/Login';
import Register from './pages/Register';
import Recents from './pages/Recents';

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
  {
    path: '/login',
    component: Login,
    id: 6,
  },
  {
    path: '/register',
    component: Register,
    id: 7,
  },
  {
    path: '/recents',
    component: Recents,
    id: 8,
  },
];

export default routes;
