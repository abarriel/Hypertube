import Home from './pages/Home';
import Profil from './pages/Profil';
import Movies from './pages/Movies';
import Video from './pages/Video';
import Login from './pages/Login';
import Register from './pages/Register';
import Recents from './pages/Recents';
import Reset from './pages/Reset';
import Lost from './pages/Lost';
import MyList from './pages/MyList';

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
    id: 2,
  },
  {
    path: '/video',
    component: Video,
    id: 4,
  },
  {
    path: '/login',
    component: Login,
    id: 5,
  },
  {
    path: '/lost',
    component: Lost,
    id: 6,
  },
  {
    path: '/reset',
    component: Reset,
    id: 7,
  },
  {
    path: '/register',
    component: Register,
    id: 8,
  },
  {
    path: '/recents',
    component: Recents,
    id: 9,
  },
  {
    path: '/mylist',
    component: MyList,
    id: 10,
  },
];

export default routes;
