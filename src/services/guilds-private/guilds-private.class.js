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



    const guild = await this.app.service('guilds').create(data, params)

    await this.app.service('users').patch(user._id, {guildId: guild._id})

    return guild
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

  async find (params) {
    if(params.user.permissions.includes('super_admin') && params.query.asSuperAdmin){
      delete params.query.asSuperAdmin
      delete params.provider
      return this.app.service('guilds').find(params)
    }
    delete params.provider
    return this.app.service('guilds').find(params)
  }

  async get (id, params) {
    delete params.provider
    return this.app.service('guilds').get(id, params)
  }

  async patch (id, data, params) {
    const user = params.user
    if(params.query.asReport){
      delete params.query.asReport
      delete params.provider
      return this.app.service('guilds').patch(id, data, params)
    }
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
    if(params.query.asReport){
      delete params.query.asReport
      delete params.provider
      return this.app.service('guilds').remove(id,params)
    }
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
