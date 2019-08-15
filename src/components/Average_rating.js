import React from "react";
export default class Average_rating extends React.Component {
    render () {
        return(
            <div className="average_rating">
                <div className="mark">{this.props.average_rating}</div>
                <span>Средний балл</span>
            </div>
        );
    }
}