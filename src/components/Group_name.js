import React from "react";
export default class Group_name extends React.Component {
    render () {
        return(
            <p className="group_name">Группа: {this.props.group_name}</p>
        );
    }
}