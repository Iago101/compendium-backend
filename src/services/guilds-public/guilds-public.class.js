/* eslint-disable no-unused-vars */
exports.GuildsPublic = class GuildsPublic {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

  async find (params) {
    delete params.provider
    return this.app.service('guilds').find(params)
  }

  async get (id, params) {
    delete params.provider
    return this.app.service('guilds').find(params)
  }
};
