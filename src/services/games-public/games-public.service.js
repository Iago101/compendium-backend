// Initializes the `games-public` service on path `/games-public`
const { GamesPublic } = require('./games-public.class');
const hooks = require('./games-public.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/games-public', new GamesPublic(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('games-public');

  service.hooks(hooks);
};
