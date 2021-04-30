const assert = require('assert');
const app = require('../../src/app');

describe('\'games-private\' service', () => {
  it('registered the service', () => {
    const service = app.service('games-private');

    assert.ok(service, 'Registered the service');
  });
});
