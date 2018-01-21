import * as Axios from 'axios';

const tryCatcher = (shouldNotCatchedErr) => (target, key, descriptor) => {
  const method = descriptor.value;
  descriptor.value = async function newFun() { // eslint-disable-line no-param-reassign
    try {
      const req = await method.apply(this, arguments);
      const { data, status, headers } = req;
      if (status === 201) throw data;
      return data;
    } catch (err) {
      // console.log('errDecorators ', err, 'shoudCatacher err ', shouldNotCatchedErr);
      if (!shouldNotCatchedErr) return err;
      throw err;
    }
  };
};

class Req {
  constructor() {
    const axiosApi = Axios.create({
      baseURL: 'http://localhost:8888/api/',
      withCredentials: true,
    });

    this.axios = (method, url, data) => {
      axiosApi.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      if (method === 'get') return axiosApi({ method, url, params: data });
      return axiosApi({ method, url, data });
    };
  }

  @tryCatcher(true)
  async login(user) {
    return this.axios('post', 'auth/login', user);
  }

  @tryCatcher()
  async movies(params) {
    return this.axios('get', 'movies', params);
  }

  @tryCatcher()
  async movieDetail(imdbId) {
    return this.axios('get', `movies/${imdbId}`);
  }

  @tryCatcher()
  async genres() {
    return this.axios('get', 'movies/genres');
  }

  @tryCatcher(true)
  async isAuth() {
    return this.axios('get', 'auth');
  }
}

const req = new Req();

export default req;
