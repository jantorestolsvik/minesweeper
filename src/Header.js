import React from 'react';
import {Constants} from './Constants';

let Header = React.createClass({
    getInitialState: function () {
        return {
            time: 0
        }
    },
    tick: function () {
        this.setState({time: this.state.time + 1});
    },
    componentWillReceiveProps: function(newProps) {
        if (newProps.status === Constants.RUNNIG && this.props.status !== Constants.RUNNIG) {
            this.interval = setInterval(this.tick, 1000);
        }
        if (newProps.status === Constants.PRE_START) {
            clearInterval(this.interval);
            this.setState({time:0});
        }
        if (newProps.status === Constants.GAME_OVER) {
            clearInterval(this.interval);
        }
    },
    render: function () {
        var classNames = ["button"];
        if (this.props.status === Constants.PRE_START || this.props.status === Constants.RUNNIG) {
            classNames.push("playing");
        }
        if (this.props.status === Constants.GAME_OVER) {
            classNames.push("gameover");
        }
        if (this.props.status === Constants.FINISHED) {
            classNames.push("clear");
        }
        return (
            <div>
                <span className="MineSweeper__time">{this.state.time}</span>
                <span className="MineSweeper__face">
                    <span className={classNames.join(" ")} onClick={this.props.reset}></span>
                </span>
                <span className="MineSweeper__flagNum">antall flagg</span>
            </div>
        );
    }
});

export default Header;