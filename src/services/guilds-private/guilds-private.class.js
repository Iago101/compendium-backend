/* eslint-disable no-unused-vars */
exports.GuildsPrivate = class GuildsPrivate {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }


  async create (data, params) {
    const user = params.user;
    data.userId = user._id;

    delete params.provider
    return this.app.service('guilds').create(data, params);
  }

  async update (id, data, params) {
    const user = params.user
    let query = { userId: user._id };

    params.query = { 
      $and: [query, params.query]
    };

    data.userId = user._id;

    delete params.provider
    return this.app.service('guilds').update(id, data, params)
  }

  async patch (id, data, params) {
    const user = params.user
    let query = { userId: user._id };

    params.query = { 
      $and: [query, params.query]
    };

    delete data.userId
    delete params.provider

    return this.app.service('guilds').patch(id, data, params)
  }

  async remove (id, params) {
    const user = params.user

    let query = { userId: user._id };

    params.query = { 
      $and: [query, params.query]
    };
    
    delete params.provider
    
    let usersPayload = {
      guildId: null
    }
    let usersParams = {
      query: {
        guildId : id
      }
    }
    await this.app.service('users').patch(null, usersPayload, usersParams)
    
    return this.app.service('guilds').remove(id, params)
  }
};
