const assert = require('assert');
const app = require('../../src/app');

describe('\'messages-private\' service', () => {
  it('registered the service', () => {
    const service = app.service('messages-private');

    assert.ok(service, 'Registered the service');
  });
});
