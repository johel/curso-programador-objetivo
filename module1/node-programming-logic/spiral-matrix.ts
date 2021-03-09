function matrix(
  n,
  initialCount = 1,
  initialRow = 0,
  initialColumn = 0,
  map = {}
) {
  let count = initialCount;

  if (n === 1) {
    map[initialRow][initialColumn] = initialCount;
    return map;
  }

  if (Object.keys(map).length === 0) {
    map = Array(n)
      .fill("")
      .reduce((acc, curr, index) => {
        acc[index] = [];
        return acc;
      }, {});
  }

  let maxIndex = initialRow + n - 1;
  let row = initialRow;
  let col = initialColumn;
  while (!map[row][col]) {
    map[row][col] = count;
    if (row === initialRow && col < maxIndex) {
      col = col + 1;
    } else if (col === maxIndex && row < col) {
      row = row + 1;
    } else if (row === maxIndex && col > initialColumn) {
      col = col - 1;
    } else if (col === initialColumn && row > initialRow) {
      row = row - 1;
    }

    count++;
  }

  if (n - 2 >= 1) {
    matrix(n - 2, count, row + 1, col + 1, map);
  }

  return map;
}

matrix(4);
