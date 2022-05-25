import { concatNumbers } from './../../../utils/utils';

describe('utils', () => {
  describe('concatNumbers positive', () => {
    it('should return 2_1', () => {
      const expected = concatNumbers(1, 2);

      expect(expected).toBe('2_1');
    });

    it('should return 4_4', () => {
      const expected = concatNumbers(4, 4);

      expect(expected).toBe('4_4');
    });

    it('should return 0_0', () => {
      const expected = concatNumbers(0, 0);

      expect(expected).toBe('0_0');
    });
  });

  describe.skip('concatNumbers negative', () => {
    it('should return argument exception if an argument is wrong', () => {
      // const expected = concatNumbers(4, null);

      expect(concatNumbers(4, null)).toThrowError('Argument exception');
    });
  });
});
