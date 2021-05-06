const assert = require('assert');
const app = require('../../src/app');

describe('\'comments-public\' service', () => {
  it('registered the service', () => {
    const service = app.service('comments-public');

    assert.ok(service, 'Registered the service');
  });
});
