const { disallow } = require('feathers-hooks-common')

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],  //2 gets diferentes private/public?
    create: [disallow()],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
