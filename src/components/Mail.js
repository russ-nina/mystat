import React from "react";
export default class Mail extends React.Component {
    render () {
        return(
            <div className="mail_main">
                <i className="material-icons">mail</i><p className="mail">{this.props.mail}</p>
            </div>
        );
    }
}