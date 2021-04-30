// Initializes the `ideas-interaction` service on path `/ideas-interaction`
const { IdeasInteraction } = require('./ideas-interaction.class');
const hooks = require('./ideas-interaction.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ideas-interaction', new IdeasInteraction(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ideas-interaction');

  service.hooks(hooks);
};
