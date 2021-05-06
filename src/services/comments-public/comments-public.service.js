// Initializes the `comments-public` service on path `/comments-public`
const { CommentsPublic } = require('./comments-public.class');
const hooks = require('./comments-public.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/comments-public', new CommentsPublic(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('comments-public');

  service.hooks(hooks);
};
