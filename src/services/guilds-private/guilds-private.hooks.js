const { authenticate } = require('@feathersjs/authentication').hooks;
const { createValidationSchema } = require('../../models/guilds.model');
const { updateValidationSchema } = require('../../models/guilds.model');
const validate = require('../../lib/validate.js');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [validate( createValidationSchema)],
    update: [validate( updateValidationSchema)],
    //patch: [],
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
