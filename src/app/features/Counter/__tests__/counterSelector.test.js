import { selectCount } from '../counterSelectors';

describe('Counter Selectors', () => {
  it('shuoul', () => {
    const state = {
      counter: {
        value: 10,
      },
    };
    expect(selectCount(state)).toEqual(10);
  });
});
