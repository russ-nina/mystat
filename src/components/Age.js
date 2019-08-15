import React from "react";
export default class Age extends React.Component {
    render () {
        return(
            <div className="face_main">
                <i className="material-icons">face</i><p className="age">Возраст {this.props.age} лет</p>
            </div>
        );
    }
}