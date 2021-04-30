const Ajv = require('ajv');
const ajv = Ajv({ allErrors: true });
const { validateSchema } = require('feathers-hooks-common');

function validate(schema){
    return validateSchema(schema,ajv);
};

module.exports = validate