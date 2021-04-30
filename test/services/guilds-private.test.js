const assert = require('assert');
const app = require('../../src/app');

describe('\'guilds-private\' service', () => {
  it('registered the service', () => {
    const service = app.service('guilds-private');

    assert.ok(service, 'Registered the service');
  });
});
