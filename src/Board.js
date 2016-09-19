import React from 'react';
import Cell from './Cell';

let Board = React.createClass({
    render: function () {
        let board = [];
        for (var i = 0; i < this.props.board.rows; i++) {
            let cols = [];
            for (var j = 0; j < this.props.board.columns; j++) {
                let cell = this.props.board[`${i},${j}`];
                cols.push(
                    <td className="Cell" onClick={() => {this.props.open(cell)}} onContextMenu={(event) => {event.preventDefault();this.props.flag(cell)}}>
                        <Cell cell={cell} status={this.props.status}/>
                    </td>
                )
            }
            board.push(
                <tr>
                    {cols}
                </tr>
            )
        }
        return (
            <table className="Table">
                <tbody>
                {board}
                </tbody>
            </table>
        );
    }
});

export default Board;