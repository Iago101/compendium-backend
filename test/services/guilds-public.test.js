const assert = require('assert');
const app = require('../../src/app');

describe('\'guilds-public\' service', () => {
  it('registered the service', () => {
    const service = app.service('guilds-public');

    assert.ok(service, 'Registered the service');
  });
});
