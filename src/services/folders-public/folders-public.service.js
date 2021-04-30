// Initializes the `folders-public` service on path `/folders-public`
const { FoldersPublic } = require('./folders-public.class');
const hooks = require('./folders-public.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/folders-public', new FoldersPublic(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('folders-public');

  service.hooks(hooks);
};
