import React from "react";
export default class Attendance extends React.Component {
    render () {
        return(
            <div className="attendance">
                <div className="percent">{this.props.attendance}</div>
                <span>Посещение, %</span>
            </div>
        );
    }
}