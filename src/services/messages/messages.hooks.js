const { authenticate } = require('@feathersjs/authentication').hooks;
const { createValidationSchema } = require('../../models/messages.model');
const validate = require('../../lib/validate.js');
const { disallow } = require('feathers-hooks-common')

module.exports = {
  before: {
    all: [ disallow('external') ],
    find: [],
    get: [],
    create: [validate(createValidationSchema)],
    update: [disallow()],
    patch: [disallow()],
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
