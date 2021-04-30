// Initializes the `users-private` service on path `/users-private`
const { UsersPrivate } = require('./users-private.class');
const hooks = require('./users-private.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/users-private', new UsersPrivate(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users-private');

  service.hooks(hooks);
};
