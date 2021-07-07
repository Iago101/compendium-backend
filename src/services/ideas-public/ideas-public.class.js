/* eslint-disable no-unused-vars */
exports.IdeasPublic = class IdeasPublic {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

  async find (params) {
    const user = params.user

    let query = {
      $or: [
        {
          privacy: 'public'
        },
      ]
    };

    params.query = { 
      $and: [query, params.query] 
    };

    delete params.provider

    return this.app.service('ideas').find(params)
  }

  async get (id, params) {
    const user = params.user

    let query = {
      $or: [
        {
          privacy: 'public'
        },
      ]
    };

    params.query = { 
      $and: [query, params.query]
    };

    delete params.provider
    return this.app.service('ideas').get(id, params)
  }
};
