import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Profile = styled.div`
    height: 250px;
    width: 180px;
    display: inline-block;
    border: 2px solid black;
    background-color: lightgray;
    margin: 2px 2px;
    position:grid
`
const Text = styled.div`
margin: 1px;
border 1px solid gray;
`

const info_list =[
    {name:'lee',
    subject:"eng",
    location:'seoul',
    },
    {name:'kim',
    subject:"math",
    location:'incheon',
    },
    {name:'park',
    subject:"history",
    location:'busan',
    },
 ///임시 값입니다. api와 연동 될 부분입니다.
]

function Myname ({name, subject, location}){
    return (
        <Link to= "/stusubmit">    
            <Profile>
                <Text>
                이름: {name}
                </Text>
                <Text>
                과목: {subject}
                </Text>
                <Text>
                지역: {location}
                </Text>
                <Text>
                    학생
                </Text>
            </Profile>
        </Link>
    );
}


const InfoCardS = ()=> {
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


export default InfoCardS;