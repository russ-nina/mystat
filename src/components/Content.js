import React from "react";
import Item from "./Item";



export default class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeItemPhone: undefined
        }
    }

    onItemClick = (id) => {
        this.setState(prevState => {
            return {
                activeItemPhone: prevState.activeItemPhone === id ? undefined : id
            }
        });

        console.log(id);
    };

    render () {
        const persons = [
            {
                firstName:"Нина",
                lastName:"Руссецкая",
                patronymic:"Петровна",
                group_name:"Frontend Winter 2017",
                avatar:"./img/images1.jpg",
                ratings:{
                    crystal:"228",
                    coin:"257",
                    star:"485",
                    badge:"8"
                },
                average_rating:"8",
                attendance:"89",
                age:"37",
                mail:"ninylka1981@gmail.com",
                phone:"+380989768991"
            },
            {
                firstName:"Виталий",
                lastName:"Сазонов",
                patronymic:"Александрович",
                avatar:"./img/images2.jpg",
                group_name:"Frontend Winter 2017",
                ratings:{
                    crystal:"250",
                    coin:"267",
                    star:"520",
                    badge:"7"
                },
                average_rating:"9.3",
                attendance:"98",
                age:"28",
                mail:"topvetal@gmail.com",
                phone:"+380632348124"
            },
            {
                firstName:"Дмитрий",
                lastName:"Дзюба",
                patronymic:"Валентинович",
                avatar:"./img/images3.jpg",
                group_name:"Frontend Winter 2017",
                ratings:{
                    crystal:"250",
                    coin:"256",
                    star:"518",
                    badge:"7"
                },
                average_rating:"10.3",
                attendance:"100",
                age:"33",
                mail:"dimadzu@i.ua",
                phone:"+380637174175"
            },
            {
                firstName:"Артем",
                lastName:"Алешин",
                patronymic:"Алексеевич",
                avatar:"./img/images4.jpg",
                group_name:"Frontend Winter 2017",
                ratings:{
                    crystal:"212",
                    coin:"139",
                    star:"485",
                    badge:"7"
                },
                average_rating:"10",
                attendance:"87",
                age:"28",
                mail:"partall@ukr.net",
                phone:"+380636366009"
            },
            {
                firstName:"Владислав",
                lastName:"Тхоренко",
                patronymic:"Игоревич",
                avatar:"./img/images5.jpg",
                group_name:"Frontend Winter 2017",
                ratings:{
                    crystal:"324",
                    coin:"275",
                    star:"600",
                    badge:"8"
                },
                average_rating:"6.5",
                attendance:"59",
                age:"23",
                mail:"vlad.thorenco18@gmail.com",
                phone:"+380632017448"
            },
            {
                firstName:"Лев",
                lastName:"Князев",
                patronymic:"Валентинович",
                avatar:"./img/images6.jpg",
                group_name:"Frontend Winter 2017",
                ratings:{
                    crystal:"144",
                    coin:"55",
                    star:"180",
                    badge:"5"
                },
                average_rating:"8",
                attendance:"33",
                age:"20",
                mail:"knyazev.lev@yandex.ua",
                phone:"+380502912998"
            },
            {
                firstName:"Денис",
                lastName:"Дрега",
                patronymic:"Юрьевич",
                avatar:"./img/images6.jpg",
                group_name:"Frontend Winter 2017",
                ratings:{
                    crystal:"55",
                    coin:"18",
                    star:"65",
                    badge:"2"
                },
                average_rating:"9.1",
                attendance:"36",
                age:"23",
                mail:"dregadenis95@ukr.net",
                phone:"+380681439575"
            },
        ];

        const personCount = persons.length;
        let student;
        if (personCount > 0) {
            student = <div className="content">
                {
                    persons.map((person, index) => {
                       return <Item
                           key={person.phone}
                           phone={person.phone}
                           mail={person.mail}
                           age={person.age}
                           attendance={person.attendance}
                           average_rating={person.average_rating}
                           badge={person.ratings.badge}
                           star={person.ratings.star}
                           coin={person.ratings.coin}
                           crystal={person.ratings.crystal}
                           group_name={person.group_name}
                           firstName={person.firstName}
                           lastName={person.lastName}
                           patronymic={person.patronymic}
                           avatar={person.avatar}
                           isOpen={this.state.activeItemPhone === person.phone}
                           onItemClick={() => {this.onItemClick(person.phone)}  }
                       />

                    })
                }

            </div>
        } console.log(student);
        return(
            student

        );
    }
}