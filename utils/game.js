const SIZE = 3;

const hasSameType = items =>
  items.filter(d => d !== 0 && d === items[0]).length === items.length;

export const checkWin = rows => {
  // Check rows
  for (let i = 0; i < SIZE; i++) {
    if (hasSameType(rows[i])) {
      return { winner: rows[i][0], winLine: { type: 'row', index: i } };
    }
  }

  // Check columns
  for (let i = 0; i < SIZE; i++) {
    const column = rows.map(row => row[i]);

    if (hasSameType(column)) {
      return { winner: column[0], winLine: { type: 'column', index: i } };
    }
  }

  // Check diagonal
  let diagonal = rows.map((row, i) => row[i]);

  if (hasSameType(diagonal)) {
    return { winner: diagonal[0], winLine: { type: 'diagonal', index: 0 } };
  }

  diagonal = rows.map((row, i) => row[SIZE - i - 1]);

  if (hasSameType(diagonal)) {
    return { winner: diagonal[0], winLine: { type: 'diagonal', index: 1 } };
  }

  return { winner: null, winLine: null };
};

export const checkFull = rows =>
  rows.reduce((row, result) => result.concat(row)).filter(d => d !== 0)
    .length ===
  rows.length * rows[0].length;
