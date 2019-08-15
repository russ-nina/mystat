import React from "react";
export default class Phone extends React.Component {
    render () {
        return(
            <div className="phone_main">
                <i className="material-icons">phone</i><p className="phone">{this.props.phone}</p>
            </div>
        );
    }
}