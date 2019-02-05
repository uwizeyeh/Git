import { Repo } from './repo';

describe('Repo', () => {
  it('should create an instance', () => {
    expect(new Repo(1,2,2,2,new Date(2))).toBeTruthy();
  });
});
