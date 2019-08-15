import React from "react";
export default class Ratings extends React.Component {
    render () {
        return(
            <div className="ratings">
                <div><p className="crystal">{this.props.crystal}</p></div>
                <div><p className="coin">{this.props.coin}</p></div>
                <div><p className="star">{this.props.star}</p></div>
                <div><p className="badge">{this.props.badge}</p></div>
            </div>
        );
    }
}