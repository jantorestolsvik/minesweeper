import React from 'react';
import ReactDOM from 'react-dom';
import {Constants} from './Constants';
import Header from './Header';
import Board from './Board';
import {createBoard} from './Utils';

let Minesweeper = React.createClass({
    getInitialState: function () {
        return {
            status: Constants.PRE_START,
            board: createBoard(9, 9, 10)
        }
    },
    reset: function () {
        this.setState({
            status: Constants.PRE_START,
            board: createBoard(9, 9, 10)
        });
    },
    open: function (cell) {
        if (this.state.status === Constants.GAME_OVER) {
            return;
        }
        if (cell.hasMine) {
            this.setState({
                status: Constants.GAME_OVER
            });
            return;
        }
        if (this.state.status === Constants.PRE_START) {
            this.setState({
                status: Constants.RUNNIG
            })
        }
        this.setState({
            board: Object.assign(
                {},
                this.state.board,
                {[cell.index]: Object.assign(
                    {},
                    cell,
                    {isOpened: true})}
            )
        });
    },
    flag: function (cell) {
        if (this.state.status === Constants.GAME_OVER) {
            return;
        }
        this.setState({
            board: Object.assign(
                {},
                this.state.board,
                {[cell.index]: Object.assign(
                    {},
                    cell,
                    {hasFlag: true})}
            )
        });
    },
    render: function () {
        return (
            <div className="MineSweeper">
                <Header status={this.state.status} reset={this.reset}/>
                <Board board={this.state.board} open={this.open} flag={this.flag} status={this.state.status}/>
            </div>
        );
    }
});

ReactDOM.render(
    <Minesweeper />,
    document.getElementById('app')
);