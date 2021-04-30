// Initializes the `users-public` service on path `/users-public`
const { UsersPublic } = require('./users-public.class');
const hooks = require('./users-public.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/users-public', new UsersPublic(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users-public');

  service.hooks(hooks);
};
