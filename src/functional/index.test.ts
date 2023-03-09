import { Family } from './index';

describe('FP', () => {
  it('should fp', () => {
    const family = Family(['freeman', 'sandy', 'tiana', 'tintin']);
    expect(family.isFamily('tintin')).toBe(true);
    expect(family.addMember('peter').isFamily('peter')).toBe(true);

    expect(family.removeMember('sandy').isFamily('sandy')).toBe(false);
  });
});
