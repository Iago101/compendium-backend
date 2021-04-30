// Initializes the `ideas-public` service on path `/ideas-public`
const { IdeasPublic } = require('./ideas-public.class');
const hooks = require('./ideas-public.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ideas-public', new IdeasPublic(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ideas-public');

  service.hooks(hooks);
};
