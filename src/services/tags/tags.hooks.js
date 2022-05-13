const { authenticate } = require('@feathersjs/authentication').hooks;
const { createValidationSchema } = require('../../models/tags.model');
const validate = require('../../lib/validate.js');
const { disallow } = require('feathers-hooks-common')

module.exports = {
  before: {
    all: [ ],
    find: [],
    get: [],
    create: [validate( createValidationSchema)],
    update: [disallow('external')],
    patch: [disallow('external')],
    remove: [disallow('external')]
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
