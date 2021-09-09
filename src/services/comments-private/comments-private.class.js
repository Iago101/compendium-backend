/* eslint-disable no-unused-vars */
exports.CommentsPrivate = class CommentsPrivate {
  constructor (options, app) {
    this.options = options || {};
    this.app = app;
  }

  async create (data, params) {
    const user = params.user
    data.userId = user._id
    
    const idea = await this.app.service('ideas').get(data.ideaId,params);
    if(!idea){
      throw new Error("Not found");
    }
    
    delete params.provider;
    return this.app.service("comments").create(data,params);
  }

  async update (id, data, params) {
    const user = params.user
    
    if (!params.query) params.query = {}
    params.query.userId = user._id

    
    data.userId = params.user._id
    delete params.provider;

    return this.app.service("comments").update(id,data,params);
  }

  async find (params) {

    delete params.provider
    return this.app.service('comments').find(params);
  }

  async patch (id, data, params) {
    const user = params.user

    if (!params.query) params.query = {}
    params.query.userId = user._id

    delete params.provider;
    delete params.userId
    delete params.ideaId
    return this.app.service("comments").patch(id,data,params);
  }

  async remove (id, params) {
    const user = params.user
 
    if (!params.query) params.query = {}
    params.query.userId = user._id

    delete params.provider
    return this.app.service("comments").remove(id,params);
  }
};
