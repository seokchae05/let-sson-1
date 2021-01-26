import React from "react";
import "./info_card.css";
const info_list =[
    {name:'lee',
    subject:"eng",
    location:'seoul',},

    {name:'kim',
    subject:"math",
    location:'incheon',},
    {name:'park',
    subject:"history",
    location:'busan',},
 ///임시 값입니다. api와 연동 될 부분입니다.
]

function Myname ({name, subject, location}){
    return (
    <h3 id ="profilee">
        <div>
        이름: {name}
        </div>
        <div>
        과목: {subject}
        </div>
        <div>
        지역: {location}
        </div>
    </h3>
    );
}



function InfoCard(){
    return(
        <span>
            {info_list.map(whoname=>
            <Myname 
            name ={whoname.name} 
            subject = {whoname.subject} 
            location = {whoname.location}
            />)
        }
        </span>
    )
}




  export default InfoCard;


