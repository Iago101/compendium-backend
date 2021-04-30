// Initializes the `tags-service` service on path `/tags-service`
const { TagsService } = require('./tags-service.class');
const hooks = require('./tags-service.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tags-service', new TagsService(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tags-service');

  service.hooks(hooks);
};
