/* eslint-disable no-unused-vars */
exports.GamesPrivate = class GamesPrivate {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

  async create (data, params) {
    const user = params.user;

    data.userId = user._id;

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
    return this.app.service('games').create(data, params);
  }

  async update (id, data, params) {
    const user = params.user
    let query = { userId: user._id };

    params.query = { 
      $and: [query, params.query]
    };

    data.userId = user._id;

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
    return this.app.service('games').update(id, data, params)
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

    return this.app.service('games').patch(id, data, params)
  }

  async remove (id, params) {
    const user = params.user

    let query = { userId: user._id };

    params.query = { 
      $and: [query, params.query]
    };
    
    delete params.provider
    return this.app.service('games').remove(id, params)
  }
};
