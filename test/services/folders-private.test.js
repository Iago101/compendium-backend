const assert = require('assert');
const app = require('../../src/app');

describe('\'folders-private\' service', () => {
  it('registered the service', () => {
    const service = app.service('folders-private');

    assert.ok(service, 'Registered the service');
  });
});
