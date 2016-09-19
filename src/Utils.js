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

export const countMines = function (board, cell) {
    let index = cell.index.split(",").map((numberString) => {
        return parseInt(numberString);
    });
    var aroundMinesNum = 0;
    for(var row = -1; row <= 1; row++){
        for(var col = -1; col <= 1; col++){
            let newIndex = `${index[0]+row},${index[1]+col}`
            if(index[0] + row >= 0 && index[1] + col >= 0 && index[0] + row < board.rows && index[1] + col < board.columns && board[newIndex].hasMine){
                aroundMinesNum ++;
            }
        }
    }
    return aroundMinesNum;
}