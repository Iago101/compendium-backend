const { authenticate } = require('@feathersjs/authentication').hooks;
const { createValidationSchema } = require('../../models/games.model');
const { updateValidationSchema } = require('../../models/games.model');
const validate = require('../../lib/validate.js');
const { disallow } = require('feathers-hooks-common')

module.exports = {
  before: {
    all: [ disallow('external') ],
    find: [],
    get: [],
    create: [validate( createValidationSchema)],
    update: [validate( updateValidationSchema )],
    // patch: [validate( updateValidationSchema )],
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
