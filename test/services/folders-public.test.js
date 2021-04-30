const assert = require('assert');
const app = require('../../src/app');

describe('\'folders-public\' service', () => {
  it('registered the service', () => {
    const service = app.service('folders-public');

    assert.ok(service, 'Registered the service');
  });
});
