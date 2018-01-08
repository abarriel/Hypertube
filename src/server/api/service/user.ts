import * as _ from 'lodash';

const service = {
  async post(req, res) {
  },
  async put(req, res) {
  },
  async delete(req, res) {
  },
  async get(req, res) {
    res.json({ get: 'get'});
  },
};

const init:any = {
  name: 'user',
  service,
  before: {
  },
  after: {

  }
};

export default init;
