const { authenticate } = require('@feathersjs/authentication').hooks;
const { createValidationSchema } = require('../../models/users.model');
const { updateValidationSchema } = require('../../models/users.model');
const validate = require('../../lib/validate.js');
const { disallow } = require('feathers-hooks-common')
const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;


module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt'), disallow('external') ],
    get: [ authenticate('jwt') ],
    create: [ validate( createValidationSchema) , hashPassword('password'), disallow('external') ],
    update: [validate( updateValidationSchema ), hashPassword('password'),  authenticate('jwt'), disallow('external') ],
    patch: [disallow('external')],
    remove: [ authenticate('jwt'), disallow('external') ]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
