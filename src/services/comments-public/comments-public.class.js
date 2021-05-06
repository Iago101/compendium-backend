/* eslint-disable no-unused-vars */
exports.CommentsPublic = class CommentsPublic {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

  async find (params) {

    delete params.provider
    return this.app.service('comments').find(params);
  }

  async get (id, params) {

    delete params.provider
    return this.app.service('comments').get(id, params);
  }
};
