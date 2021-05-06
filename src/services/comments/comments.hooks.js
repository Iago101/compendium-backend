const { disallow } = require('feathers-hooks-common')
const { createValidationSchema } = require('../../models/comments.model');
const validate = require('../../lib/validate.js');

module.exports = {
  before: {
    all: [disallow('external')],
    find: [],
    get: [],
    create: [validate( createValidationSchema)],
    update: [validate( createValidationSchema)],
    patch: [],
    remove: []
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
