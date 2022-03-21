const { authenticate } = require('@feathersjs/authentication').hooks;
const { createValidationSchema } = require('../../models/ideas.model');
const { updateValidationSchema } = require('../../models/ideas.model');
const validate = require('../../lib/validate.js');

const validationSchema = JSON.parse(JSON.stringify(createValidationSchema))
delete validationSchema.properties.tags
validationSchema.properties.tags = {
  type: 'array',
  items: {
    type: 'string'
  }
}

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [validate( validationSchema)],
    update: [validate( validationSchema)],
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
