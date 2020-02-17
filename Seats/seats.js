// Find family seats problem at codility

function getSeats(seatsText) {
  return seatsText.split(' ');
}

function getSeatsByRow(seats) {
  return seats.reduce((seatsByRow, seat) => {
    const row = Number.parseInt(seat.slice(0,1), 10);
    const letter = seat.slice(-1);
    return { 
      ...seatsByRow, 
      [row]: seatsByRow[row] ? [...seatsByRow[row], letter] : [letter],
    };
  }, {})
}

function areSeatsFreeByRow(reservedSeats, seatsToReserve) {
  return seatsToReserve.every(seatToReserve => !reservedSeats.includes(seatToReserve));
}

function getCountFamilySeatsByRow(reservedSeats = []) {
  const BCDE = ['B','C','D','E'];
  const DEFG = ['D','E','F','G'];
  const FGHJ = ['F','G','H','J'];

  if (areSeatsFreeByRow(reservedSeats, BCDE) && areSeatsFreeByRow(reservedSeats, FGHJ)) {
    return 2;
  }

  if (areSeatsFreeByRow(reservedSeats, BCDE) || areSeatsFreeByRow(reservedSeats, DEFG) || areSeatsFreeByRow(reservedSeats, FGHJ)) {
    return 1;
  }

  return 0;
}

function solution(N, S) {
  const reservedSeatsList = getSeats(S);
  const reservedSeatsByRow = getSeatsByRow(reservedSeatsList);
  
  let countFreeFamilySeats = 0;
  
  for (let i = 1; i <= N; i++) {
    countFreeFamilySeats += getCountFamilySeatsByRow(reservedSeatsByRow[i]);
  }

  return countFreeFamilySeats;
}

module.exports = {
  getSeats,
  getSeatsByRow,
  getCountFamilySeatsByRow,
  areSeatsFreeByRow,
  solution,
}