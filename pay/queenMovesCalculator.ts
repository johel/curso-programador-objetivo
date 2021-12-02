type ITable = Array<Array<number>>;
type IPosition = { row: number; col: number };

class QueenMovesCalculator {
  constructor(private table: ITable, private position: IPosition) {}

  public getAllPossibleMoves(): ITable {
    const directionMoves = this.getPossibleDirections();
    let result: ITable = [];

    directionMoves.forEach((dirMove) => {
      const movesInDirection = this.getPossibleMovesInGivenDirection(dirMove);
      result.push(...movesInDirection);
    });

    return result;
  }

  private getPossibleDirections(): Array<Array<number>> {
    let colMoves = [-1, 0, 1];
    let rowMoves = [-1, 0, 1];

    const result: ITable = [];
    rowMoves.forEach((rowMove) => {
      colMoves.forEach((colMove) => {
        const isMovingDirection = rowMove !== 0 || colMove !== 0;
        if (isMovingDirection) {
          result.push([rowMove, colMove]);
        }
      });
    });

    return result;
  }

  private getPossibleMovesInGivenDirection(direction: Array<number>): ITable {
    const [colMove, rowMove] = direction;
    const { row, col } = this.position;

    const result = [];

    let nextRow = row + rowMove;
    let nextCol = col + colMove;
    while (this.isNextPositionValid(nextRow, nextCol)) {
      result.push([nextRow, nextCol]);

      nextRow = nextRow + rowMove;
      nextCol = nextCol + colMove;
    }

    return result;
  }

  private isNextPositionValid(nextRow: number, nextCol: number): boolean {
    const nextLineExists = this.table[nextRow];
    const isNextCellFree = nextLineExists
      ? this.table[nextRow][nextCol] === 0
      : false;

    return nextLineExists && isNextCellFree;
  }
}

const myTable = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
const myPosition = { row: 1, col: 1 };

const calculator = new QueenMovesCalculator(myTable, myPosition);
console.log(calculator.getAllPossibleMoves());
