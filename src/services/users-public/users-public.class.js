/* eslint-disable no-unused-vars */
exports.UsersPublic = class UsersPublic {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

  async find (params) {
    delete params.provider
    return this.app.service('users').find(params)
  }

  async get (id, params) {
    delete params.provider
    return this.app.service('users').get(params)
  }

  async create (data, params) {
    delete params.provider
    return this.app.service('users').create(data, params);
  }

};
