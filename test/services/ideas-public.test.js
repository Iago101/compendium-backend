const assert = require('assert');
const app = require('../../src/app');

describe('\'ideas-public\' service', () => {
  it('registered the service', () => {
    const service = app.service('ideas-public');

    assert.ok(service, 'Registered the service');
  });
});
