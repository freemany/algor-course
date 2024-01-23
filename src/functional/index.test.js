import { Family } from './index.js';

QUnit.module('FP', () => {
  QUnit.test('should fp', (assert) => {
    const family = Family(['freeman', 'sandy', 'tiana', 'tintin']);
    assert.equal(family.isFamily('tintin'), true);
    assert.equal(family.addMember('peter').isFamily('peter'), true);
    assert.equal(family.removeMember('sandy').isFamily('sandy'), false);
  });
});
