// Initializes the `ideas-private` service on path `/ideas-private`
const { IdeasPrivate } = require('./ideas-private.class');
const hooks = require('./ideas-private.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ideas-private', new IdeasPrivate(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ideas-private');

  service.hooks(hooks);
};
