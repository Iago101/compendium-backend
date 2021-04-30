// Initializes the `folders-private` service on path `/folders-private`
const { FoldersPrivate } = require('./folders-private.class');
const hooks = require('./folders-private.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/folders-private', new FoldersPrivate(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('folders-private');

  service.hooks(hooks);
};
