import React from 'React';
import {Constants} from './Constants';

export default ({cell, open, flag, status}) => {
    if (status === Constants.GAME_OVER && cell.hasMine) {
        return (
            <div className="Cell__cover Cell__cover--opened">
                <span className="Cell__bomb">b</span>
            </div>
        )
    }
    if (cell.isOpened) {
        if (cell.hasMine) {
            return (
                <div className="Cell__cover Cell__cover--opened">
                    <span className="Cell__bomb">b</span>
                </div>
            );
        } else {
            return (
                <div className="Cell__cover Cell__cover--opened">
                    <span className={"Cell__number"+cell.count}>{cell.count}</span>
                </div>
            );
        }
    } else if (cell.hasFlag) {
        return (
            <div className="Cell__cover Cell__cover--opened">
                <span className="Cell__flag">f</span>
            </div>
        );
    } else {
        return (
            <div className="Cell__cover"></div>
        );
    }
};