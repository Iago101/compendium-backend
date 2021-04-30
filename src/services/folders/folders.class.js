const { Service } = require('feathers-mongoose');

exports.Folders = class Folders extends Service {
  setup(app) {
    this.app = app;
  }
};
