// Initializes the `games-private` service on path `/games-private`
const { GamesPrivate } = require('./games-private.class');
const hooks = require('./games-private.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/games-private', new GamesPrivate(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('games-private');

  service.hooks(hooks);
};
