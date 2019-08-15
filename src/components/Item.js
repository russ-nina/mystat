import React from "react";

import Student from "./Student";
import Group_name from "./Group_name";
import Ratings from "./Ratings";
import Average_rating from "./Average_rating";
import Attendance from "./Attendance";
import Age from "./Age";
import Mail from "./Mail";
import Phone from "./Phone";

export default class Item extends React.Component {
    render () {
        return(
            <div className="item">
                <Student onClick={this.props.onItemClick}
                         firstName={this.props.firstName}
                         lastName={this.props.lastName}
                         patronymic={this.props.patronymic}
                         avatar={this.props.avatar}
                         key={this.key}/>
                {
                    !this.props.isOpen? <div></div> :
                        <div>
                            <Group_name  group_name={this.props.group_name} />
                            <Ratings coin={this.props.coin} crystal={this.props.crystal}
                                     star={this.props.star} badge={this.props.badge}/>
                            <Average_rating average_rating={this.props.average_rating}/>
                            <Attendance attendance={this.props.attendance}/>
                            <Age age={this.props.age}/>
                            <Mail mail={this.props.mail}/>
                            <Phone phone={this.props.phone}/>
                        </div>
                }

            </div>
        );
    }
}