const { Service } = require('feathers-mongoose');

exports.Comments = class Comments extends Service {
    setup(app) {
        this.app = app;
      }
};
