import React from "react";
export default class Student extends React.Component {
    render () {
        return(
            <div className="student" onClick={this.props.onClick}>
                <div className="avatar"><img src={this.props.avatar} alt="avatar"/></div>
                <p className="full_name">{this.props.lastName} {this.props.firstName} {this.props.patronymic}</p>
            </div>
        );
    }
}