/* eslint-disable no-unused-vars */
exports.FoldersPublic = class FoldersPublic {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

  async find(params){

    let query = {};
    query.privacy = 'public';

    params.query = { 
      $and: [query, params.query]
    };

    delete params.provider

    return this.app.service('folders').find(params)
  }

  async get (id, params) {
    let query = {};
    query.privacy = 'public';

    params.query = { 
      $and: [query, params.query]
    };

    delete params.provider

    return this.app.service('folders').get(id, params)
  }
};
