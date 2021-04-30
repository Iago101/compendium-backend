const assert = require('assert');
const app = require('../../src/app');

describe('\'users-private\' service', () => {
  it('registered the service', () => {
    const service = app.service('users-private');

    assert.ok(service, 'Registered the service');
  });
});
