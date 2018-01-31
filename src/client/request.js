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

    this.axios = (method, url, data, opt) => {
      if (method === 'get') return axiosApi({ method, url, params: data, ...opt });
      return axiosApi({ method, url, data, ...opt });
    };
  }

  // Movies
  @tryCatcher()
  async movies(params) {
    console.log(params);
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

  // Comments
  @tryCatcher()
  async getComments(imdbId) {
    return this.axios('get', `comments/${imdbId}`);
  }

  @tryCatcher()
  async addComment(imdbId) {
    return this.axios('post', `comments/${imdbId}`);
  }


  // my list
  @tryCatcher()
  async getMylist() {
    return this.axios('get', 'list/my_list');
  }

  @tryCatcher()
  async addMovieMylist(imdbId) {
    return this.axios('post', `list/my_list${imdbId}`);
  }

  @tryCatcher()
  async deleteMovieMylist(imdbId) {
    return this.axios('post', `list/my_list/${imdbId}`);
  }


  // historic list
  @tryCatcher()
  async getHistory(imdbId) {
    return this.axios('get', `list/history/${imdbId}`);
  }

  // Users
  @tryCatcher(true)
  async getMyInfos() {
    return this.axios('get', 'users/me');
  }

  @tryCatcher(true)
  async getUserById(id) {
    return this.axios('get', `users/${id}`);
  }

  @tryCatcher(true)
  async login(user) {
    return this.axios('post', 'auth/login', user);
  }

  @tryCatcher(true)
  async lostPassword(email) {
    return this.axios('get', 'password', email);
  }

  @tryCatcher(true)
  async resetPassword(token, password) {
    return this.axios('put', 'password', password, { params: { token } });
  }

  @tryCatcher(true)
  async register(user) {
    return this.axios('post', 'users', user, { 'content-type': 'multipart/form-data' });
  }

  @tryCatcher(true)
  async editUser(user) {
    return this.axios('put', 'users', user, { 'content-type': 'multipart/form-data' });
  }

  @tryCatcher(true)
  async isAuth() {
    return this.axios('get', 'auth');
  }
}

const req = new Req();

export default req;
