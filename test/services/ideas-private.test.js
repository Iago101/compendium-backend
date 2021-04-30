const assert = require('assert');
const app = require('../../src/app');

describe('\'ideas-private\' service', () => {
  it('registered the service', () => {
    const service = app.service('ideas-private');

    assert.ok(service, 'Registered the service');
  });
});
