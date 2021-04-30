const assert = require('assert');
const app = require('../../src/app');

describe('\'users-public\' service', () => {
  it('registered the service', () => {
    const service = app.service('users-public');

    assert.ok(service, 'Registered the service');
  });
});
