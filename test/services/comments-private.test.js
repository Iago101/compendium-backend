const assert = require('assert');
const app = require('../../src/app');

describe('\'comments-private\' service', () => {
  it('registered the service', () => {
    const service = app.service('comments-private');

    assert.ok(service, 'Registered the service');
  });
});
