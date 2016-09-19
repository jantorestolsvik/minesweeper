export const createBoard = function(rows, columns, mines) {
    var board = {};
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < columns; col++) {
            let index = `${row},${col}`;
            board[index] = {
                index: index,
                count: 0,
                isOpened: false,
                hasMine: false,
                hasFlag: false
            };
        }
    }
    for (var i = 0; i < mines; i++) {
        let randomCol = Math.floor(Math.random() * columns);
        let randomRow = Math.floor(Math.random() * rows);
        let index = `${randomRow},${randomCol}`;
        var cell = board[index];
        if (cell.hasMine) {
            i--;
        } else {
            cell.hasMine = true;
        }
    }
    board.rows = rows;
    board.columns = columns;
    return board;
};