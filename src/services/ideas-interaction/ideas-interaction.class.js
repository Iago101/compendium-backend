/* eslint-disable no-unused-vars */
exports.IdeasInteraction = class IdeasInteraction {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    let user = params.user;

    let query = await this.app.service('likes').find({query:{userId: user._id,ideaId: id}});
    if(query.total){
      await this.app.service('likes').remove(query.data[0]._id);
      let idea = await this.app.service('ideas').get(id);
      let creationPoints = idea.creationPoints;
      creationPoints -= 1;
      await this.app.service('ideas').patch(id,{creationPoints: creationPoints});
    } else{
      await this.app.service('likes').create({userId: user._id,ideaId: id});
      let idea = await this.app.service('ideas').get(id);
      let creationPoints = idea.creationPoints || 0;
      creationPoints += 1;
      await this.app.service('ideas').patch(id,{creationPoints: creationPoints});
    }


    return data;
  }

  async remove (id, params) {
    return { id };
  }
};
