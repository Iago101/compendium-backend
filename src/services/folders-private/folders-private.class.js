/* eslint-disable no-unused-vars */
exports.FoldersPrivate = class FoldersPrivate {
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
        {
          userId: user._id,
          privacy: 'private'
        },
        {
          guildId: user.guildId, 
          guildId: {
            $ne: null
          },
          privacy: 'guild',
        },
        {
          gameId: {
            $in: user.gamesId,
            $ne: null
          }
        },
      ]
    };

    params.query = { 
      $and: [query, params.query]
    };

    delete params.provider

    return this.app.service('folders').find(params)
  }

  async get (id, params) {
    const user = params.user

    let query = {
      $or: [
        {
          privacy: 'public'
        },
        {
          userId: user._id,
          privacy: 'private'
        },
        {
          guildId: user.guildId, 
          guildId: {
            $ne: null
          },
          privacy: 'guild',
        },
        {
          gameId: {
            $in: user.gamesId,
            $ne: null
          }
        },
      ]
    };

    params.query = { 
      $and: [query, params.query]
    };

    delete params.provider
    return this.app.service('folders').get(id, params)
  }

  async create (data, params) {
    const user = params.user
    
    data.userId = user._id
    if (data.privacy === 'guild') data.guildId = user.guildId
    else if (data.privacy === 'game' && !data.gameId) throw new Error('game id invalid')

    if (data.gameId) {
      if (!user.gamesId.includes(data.gameId)) throw new Error('game id invalid')
    }

    delete params.provider
    return this.app.service('folders').create(data, params)
  }

  async update (id, data, params) {
    const user = params.user
    let query = { userId: user._id };

    params.query = { 
      $and: [query, params.query]
    };
    
    data.userId = user._id
    if (data.privacy === 'guild') data.guildId = user.guildId
    else if (data.privacy === 'game' && !data.gameId) throw new Error('game id invalid')

    if (data.gameId) {
      if (!user.gamesId.includes(data.gameId)) throw new Error('game id invalid')
    }
    
    delete params.provider
    return this.app.service('folders').update(id, data, params)
  }

  async patch (id, data, params) {
    const user = params.user
    let query = { userId: user._id };

    params.query = { 
      $and: [query, params.query]
    };


    delete data.userId
    delete data.guildId
    delete data.gameId
    delete params.provider

    return this.app.service('folders').patch(id, data, params)
  }

  async remove (id, params) {
    const user = params.user

    let query = { userId: user._id };

    params.query = { 
      $and: [query, params.query]
    };
    
    delete params.provider
    return this.app.service('folders').remove(id, params)
  }
};
