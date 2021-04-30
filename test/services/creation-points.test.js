const assert = require('assert');
const app = require('../../src/app');

describe('\'creationPoints\' service', () => {
  it('registered the service', () => {
    const service = app.service('creation-points');

    assert.ok(service, 'Registered the service');
  });
});
