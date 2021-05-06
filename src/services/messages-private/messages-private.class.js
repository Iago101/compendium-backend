/* eslint-disable no-unused-vars */
exports.MessagesPrivate = class MessagesPrivate {
  constructor (options,app) {
    this.options = options || {};
    this.app = app
  }

  async find (params) {
    const user = params.user

    params.query = {
      ...params.query,
      $or: [
        {userId: user._id},
        {receiverId: user._id},
        {guildId: user.guildId}
      ]
    }

    delete params.provider
    return this.app.service('messages').find(params);
  }

  async get (id, params) {
    const user = params.user

    params.query = {
      ...params.query,
      $or: [
        {userId: user._id},
        {receiverId: user._id},
        {guildId: user.guildId}
      ]
    }

    delete params.provider
    return this.app.service('messages').get(id, params);
  }

  async create (data, params) {
    const user = params.user
    data.userId = user._id

    if(data.guildId){
      data.guildId = user.guildId
    }
    
    delete params.provider
    return this.app.service('messages').create(data, params);
  }


  async remove (id, params) {
    const user = params.user

    if (!params.query) params.query = {}
    params.query.userId = user._id

    delete params.provider
    return this.app.service('messages').remove(id, params);
  }
};
