/* eslint-disable no-unused-vars */
exports.IdeasPublic = class IdeasPublic {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

  async find (params) {
    delete params.provider
    return this.app.service('ideas').find(params)
  }

  async get (id, params) {
    delete params.provider
    return this.app.service('ideas').find(params)
  }
};
