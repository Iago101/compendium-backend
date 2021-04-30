// const { authenticate } = require('@feathersjs/authentication').hooks;
const { createValidationSchema } = require('../../models/ideas.model');
const { updateValidationSchema } = require('../../models/ideas.model');

const validate = require('../../lib/validate.js');
/* const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks; */

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ validate( createValidationSchema) ],
    update: [validate( updateValidationSchema )],
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
