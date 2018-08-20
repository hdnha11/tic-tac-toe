const hasSameType = items =>
  items.filter(d => d !== 0 && d === items[0]).length === items.length;

export const checkWin = rows => {
  const SIZE = rows.length;
  const winMatrix = rows.map(row => Array(row.length).fill(0));

  // Check rows
  for (let i = 0; i < SIZE; i++) {
    if (hasSameType(rows[i])) {
      winMatrix[i] = winMatrix[i].map(() => 1);
      return { winner: rows[i][0], winMatrix };
    }
  }

  // Check columns
  for (let i = 0; i < SIZE; i++) {
    const column = rows.map(row => row[i]);

    if (hasSameType(column)) {
      winMatrix.forEach((_, j) => {
        winMatrix[j][i] = 1;
      });
      return { winner: column[0], winMatrix };
    }
  }

  // Check diagonal
  let diagonal = rows.map((row, i) => row[i]);

  if (hasSameType(diagonal)) {
    winMatrix.forEach((row, i) => {
      row.forEach((_, j) => {
        if (i === j) {
          winMatrix[i][j] = 1;
        }
      });
    });
    return { winner: diagonal[0], winMatrix };
  }

  diagonal = rows.map((row, i) => row[SIZE - i - 1]);

  if (hasSameType(diagonal)) {
    winMatrix.forEach((row, i) => {
      row.forEach((_, j) => {
        if (j === SIZE - i - 1) {
          winMatrix[i][j] = 1;
        }
      });
    });
    return { winner: diagonal[0], winMatrix };
  }

  return { winner: null, winMatrix: null };
};

export const checkFull = rows =>
  rows.reduce((row, result) => result.concat(row)).filter(d => d !== 0)
    .length ===
  rows.length * rows[0].length;
