// Initializes the `guilds-public` service on path `/guilds-public`
const { GuildsPublic } = require('./guilds-public.class');
const hooks = require('./guilds-public.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/guilds-public', new GuildsPublic(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('guilds-public');

  service.hooks(hooks);
};
