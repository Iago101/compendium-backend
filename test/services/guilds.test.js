const assert = require('assert');
const app = require('../../src/app');

describe('\'guilds\' service', () => {
  it('registered the service', () => {
    const service = app.service('guilds');

    assert.ok(service, 'Registered the service');
  });
});
