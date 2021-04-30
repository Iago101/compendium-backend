const assert = require('assert');
const app = require('../../src/app');

describe('\'games-public\' service', () => {
  it('registered the service', () => {
    const service = app.service('games-public');

    assert.ok(service, 'Registered the service');
  });
});
