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
    return this.axios('get', 'movies', params);
  }

  @tryCatcher()
  async movieDetail(imdbId) {
    return this.axios('get', `movies/${imdbId}`);
  }

  @tryCatcher()
  async showDetail(imdbId) {
    return this.axios('get', `shows/${imdbId}`);
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
  async addComment(imdbId, body) {
    return this.axios('post', `comments/${imdbId}`, body);
  }


  // my list
  @tryCatcher(true)
  async getMylist(list) {
    return this.axios('get', `list/${list}`);
  }

  @tryCatcher()
  async addMovieMylist(list, imdbId) {
    return this.axios('post', `list/${list}/${imdbId}`);
  }

  @tryCatcher()
  async deleteMovieMylist(list, imdbId) {
    return this.axios('delete', `list/${list}/${imdbId}`);
  }

  // Users
  @tryCatcher(true)
  async getMyInfos(get) {
    return this.axios('get', 'users/me', { get });
  }

  @tryCatcher(true)
  async getUserById(id) {
    return this.axios('get', `users/${id}`);
  }

  @tryCatcher(true)
  async getUsers(limit, offset) {
    return this.axios('get', `users`);
  }

  @tryCatcher(true)
  async login(user) {
    return this.axios('post', 'auth/login', user);
  }

  @tryCatcher(true)
  async logout(user) {
    return this.axios('post', 'auth');
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

  @tryCatcher(true)
  async authOmi(provider) {
    return this.axios('get', `auth/${provider}`).then(() => {
      window.location.replace('/');
    });
  }
}

const req = new Req();

export default req;
