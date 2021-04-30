/* eslint-disable no-unused-vars */
exports.UsersPrivate = class UsersPrivate {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }
  async update (id, data, params) {
    delete params.provider
    return this.app.service('users').update(id, data, params)
  }

  async patch (id, data, params) {
    delete params.provider
    return this.app.service('users').patch(id, data, params)
  }

  async remove (id, params) {
    delete params.provider
    return this.app.service('users').remove(id, params)
  }
};
