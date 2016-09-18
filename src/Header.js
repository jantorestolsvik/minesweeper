import React from 'react';
import {Constants} from './Constants';

let Header = React.createClass({

    render: function () {
        return (
            <div>
                <span className="MineSweeper__flagNum">antall flagg</span>
                <span className="MineSweeper__face">
                    <span className="button playing"></span>
                </span>
                <span className="MineSweeper__time">tid</span>
            </div>
        );
    }
});

export default Header;