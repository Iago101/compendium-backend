/* eslint-disable no-unused-vars */
exports.IdeasPrivate = class IdeasPrivate {
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
      ]
    };

    params.query = { 
      $and: [query, params.query]
    };

    delete params.provider
    return this.app.service('ideas').get(id, params)
  }

  async create (data, params) {
    const user = params.user;
    data.userId = user._id;

    if (data.privacy === 'guild') data.guildId = user.guildId
    else if (data.privacy === 'game' && !data.gameId) throw new Error('game id invalid')

    if (data.gameId) {
      if (!user.gamesId.includes(data.gameId)) throw new Error('game id invalid')
    }

    if (data.tags && data.tags.length) {
      const tags = await this.app.service('tags')
        .find({
          paginate: false,
          query: {
            _id: { $in: data.tags }
          }
        })

      data.tags = tags.map((e) => {
        return {
          name: e.name,
          tagId: e._id
        }
      })
    }

    delete params.provider
    return this.app.service('ideas').create(data, params);
  }

  async update (id, data, params) {
    const user = params.user
    let query = { userId: user._id };

    params.query = { 
      $and: [query, params.query]
    };

    data.userId = user._id;
    if (data.privacy === 'guild') data.guildId = user.guildId
    else if (data.privacy === 'game' && !data.gameId) throw new Error('game id invalid')

    if (data.gameId) {
      if (!user.gamesId.includes(data.gameId)) throw new Error('game id invalid')
    }

    if (data.tags && data.tags.length) {
      const tags = await this.app.service('tags')
        .find({
          paginate: false,
          query: {
            _id: { $in: data.tags }
          }
        })

      data.tags = tags.map((e) => {
        return {
          name: e.name,
          tagId: e._id
        }
      })
    }

    delete params.provider
    return this.app.service('ideas').update(id, data, params)
  }

  async patch (id, data, params) {
    const user = params.user
    let query = { userId: user._id };

    params.query = { 
      $and: [query, params.query]
    };

    if (data.tags && data.tags.length) {
      const tags = await this.app.service('tags')
        .find({
          paginate: false,
          query: {
            _id: { $in: data.tags }
          }
        })

      data.tags = tags.map((e) => {
        return {
          name: e.name,
          tagId: e._id
        }
      })
    }

    delete data.userId
    delete params.provider

    return this.app.service('ideas').patch(id, data, params)
  }

  async remove (id, params) {
    const user = params.user

    let query = { userId: user._id };

    params.query = { 
      $and: [query, params.query]
    };
    
    delete params.provider
    return this.app.service('ideas').remove(id, params)
  }
};
