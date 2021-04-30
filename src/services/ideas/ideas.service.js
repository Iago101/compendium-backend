// Initializes the `ideas` service on path `/ideas`
const { Ideas } = require('./ideas.class');
const createModel = require('../../models/ideas.model');
const hooks = require('./ideas.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ideas', new Ideas(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ideas');

  service.hooks(hooks);
};
