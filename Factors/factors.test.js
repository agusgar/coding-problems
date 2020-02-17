const { getFactors, isFactorOfAll, areAllFactorsOf } = require('./factors');

describe('factors tests', () => {
  it('isFactorOfAll', () => {
    expect(isFactorOfAll([12,18,24], 6)).toEqual(true);
    expect(isFactorOfAll([12,18,23], 6)).toEqual(false);
    expect(isFactorOfAll([12,18,24], 12)).toEqual(false);
    expect(isFactorOfAll([12,24,48], 24)).toEqual(false);
    expect(isFactorOfAll([], 2)).toEqual(false);
  });

  it('areAllFactorsOf', () => {
    expect(areAllFactorsOf([2,3,4], 12)).toEqual(true);
    expect(areAllFactorsOf([2,3,5], 12)).toEqual(false);
    expect(areAllFactorsOf([2,3,4], 6)).toEqual(false);
    expect(areAllFactorsOf([2,3,12], 6)).toEqual(false);
    expect(isFactorOfAll([], 2)).toEqual(false);
  });
  
  it('getFactors', () => {
    expect(getFactors([2,3], [12,24])).toEqual([6,12]);
    expect(getFactors([2,3], [11,24])).toEqual([]);
    expect(getFactors([2,4], [36,48])).toEqual([4,12]);
    expect(getFactors([4,2], [48,36])).toEqual([4,12]);
  });
});