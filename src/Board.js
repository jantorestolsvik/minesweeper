import React from 'react';

let Board = React.createClass({
    render: function () {
        return (
            <table className="Table">
                <tbody>
                <tr>
                    <td className="Cell">
                        <div className="Cell__cover"></div>
                    </td>
                    <td className="Cell">
                        <div className="Cell__cover Cell__cover--opened">
                            <span className="Cell__flag">f</span>
                        </div>
                    </td>
                    <td className="Cell">
                        <div className="Cell__cover Cell__cover--opened">
                            <span className={"Cell__number"+3}>3</span>
                        </div>
                    </td>
                    <td className="Cell">
                        <div className="Cell__cover Cell__cover--opened">
                            <span className="Cell__bomb">b</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="Cell">
                        <div className="Cell__cover"></div>
                    </td>
                    <td className="Cell">
                        <div className="Cell__cover Cell__cover--opened">
                            <span className="Cell__flag">f</span>
                        </div>
                    </td>
                    <td className="Cell">
                        <div className="Cell__cover Cell__cover--opened">
                            <span className={"Cell__number"+3}>3</span>
                        </div>
                    </td>
                    <td className="Cell">
                        <div className="Cell__cover Cell__cover--opened">
                            <span className="Cell__bomb">b</span>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
});

export default Board;