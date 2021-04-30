// Initializes the `guilds-private` service on path `/guilds-private`
const { GuildsPrivate } = require('./guilds-private.class');
const hooks = require('./guilds-private.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/guilds-private', new GuildsPrivate(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('guilds-private');

  service.hooks(hooks);
};
