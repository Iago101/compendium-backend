/* eslint-disable no-unused-vars */
exports.GamesPublic = class GamesPublic {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

  async find (params) {
    delete params.provider
    return this.app.service('games').find(params)
  }

  async get (id, params) {
    delete params.provider
    return this.app.service('games').get(id, params)
  }

};