// Initializes the `comments-private` service on path `/comments-private`
const { CommentsPrivate } = require('./comments-private.class');
const hooks = require('./comments-private.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/comments-private', new CommentsPrivate(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('comments-private');

  service.hooks(hooks);
};
