import React from 'react';
import ReactDOM from 'react-dom';
import {Constants} from './Constants';
import Header from './Header';
import Board from './Board';

let Minesweeper = React.createClass({
    render: function () {
        return (
            <div className="MineSweeper">
                <Header/>
                <Board/>
            </div>
        );
    }
});

ReactDOM.render(
    <Minesweeper />,
    document.getElementById('app')
);