// Initializes the `messages-private` service on path `/messages-private`
const { MessagesPrivate } = require('./messages-private.class');
const hooks = require('./messages-private.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/messages-private', new MessagesPrivate(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('messages-private');

  service.hooks(hooks);
};
