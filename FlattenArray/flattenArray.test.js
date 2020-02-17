const { getFlattenArray } = require('./flattenArray');

describe('getFlattenArray tests', () => {
  it('should return array flatten array correctly', () => {
    const arrayToFlatten = [];
    const response = getFlattenArray(arrayToFlatten);
    expect(response).toEqual([]);
  });

  it('should return array flatten array correctly', () => {
    const arrayToFlatten = [1,2,3,4,5,6,7];
    const response = getFlattenArray(arrayToFlatten);
    expect(response).toEqual([1,2,3,4,5,6,7]);
  });

  it('should return array flatten array correctly', () => {
    const arrayToFlatten = [1,2,[3],4,[5,6,7]];
    const response = getFlattenArray(arrayToFlatten);
    expect(response).toEqual([1,2,3,4,5,6,7]);
  });

  it('should return array flatten array correctly', () => {
    const arrayToFlatten = [1,2,[[3],4],[5,[[6,7]]]];
    const response = getFlattenArray(arrayToFlatten);
    expect(response).toEqual([1,2,3,4,5,6,7]);
  });

  it('should return array flatten array correctly', () => {
    const arrayToFlatten = [1,2,[[[{test: true}]]],4,[5,6,7]];
    const response = getFlattenArray(arrayToFlatten);
    expect(response).toEqual([1,2,{test: true},4,5,6,7]);
  });
});
