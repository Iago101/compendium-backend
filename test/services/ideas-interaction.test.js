const assert = require('assert');
const app = require('../../src/app');

describe('\'ideas-interaction\' service', () => {
  it('registered the service', () => {
    const service = app.service('ideas-interaction');

    assert.ok(service, 'Registered the service');
  });
});
