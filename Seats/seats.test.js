const { getSeats, getSeatsByRow, areSeatsFreeByRow, getCountFamilySeatsByRow, solution } = require('./seats');

describe('seats tests', () => {
  it('getSeats', () => {
    const response = getSeats('1A 3K 2B 4C 3D');
    expect(response).toEqual(['1A', '3K', '2B', '4C', '3D']);
  });

  it('getSeatsByRow', () => {
    expect(getSeatsByRow(['1A', '3K', '2B', '4C', '3D'])).toEqual({
      1: ['A'],
      2: ['B'],
      3: ['K', 'D'],
      4: ['C'],
    });
  });

  it('areSeatsFree', () => {
    expect(areSeatsFreeByRow(['A', 'K'], ['B','C','D','E'])).toEqual(true);
    expect(areSeatsFreeByRow(['A', 'K'], ['B','C','A','E'])).toEqual(false);
    expect(areSeatsFreeByRow(['A', 'K'], [])).toEqual(true);
    expect(areSeatsFreeByRow([], ['A','B','C','D','E','F','G','H','J','K'])).toEqual(true);
  });

  it('getCountFamilySeatsByRow', () => {
    expect(getCountFamilySeatsByRow(['A', 'K'])).toEqual(2);
    expect(getCountFamilySeatsByRow(['K', 'A'])).toEqual(2);
    expect(getCountFamilySeatsByRow(['A', 'B', 'J', 'K'])).toEqual(1);
    expect(getCountFamilySeatsByRow(['A', 'F'])).toEqual(1);
    expect(getCountFamilySeatsByRow(['A', 'B', 'F'])).toEqual(0);
    expect(getCountFamilySeatsByRow(['A', 'B', 'F', 'G'])).toEqual(0);
  });

  it('test solution', () => {
    expect(solution(5, '1A 2F 2B 5A 5K')).toEqual(8);
    expect(solution(10, '1A 2F 2B 5A 5K')).toEqual(18);
    expect(solution(10, '1A 2F 2B 5A 5K 1F 1B')).toEqual(16);
    expect(solution(1, '1A 2F 2B 5A 5K 1F 1B')).toEqual(0);
    expect(solution(1, '')).toEqual(2);
  });
});

