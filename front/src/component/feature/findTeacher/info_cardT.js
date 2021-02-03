import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

const Profile = styled.div`
  height: 250px;
  width: 180px;
  display: inline-block;
  border: 2px solid black;
  background-color: lightgray;
  margin: 2px 2px;
  position: grid;
`;
const Text = styled.div`
  margin: 1px;
  border: 1px solid gray;
`;



function Myname ({ id, name, subject, location}){
    return (
        <Link to = {{pathname : "/registertea",
        state:{
            id,
            name,
            subject,
            location,
        }
        }}>    
            <Profile>
            <Text>이름: {name}</Text>
            <Text>과목: {subject}</Text>
            <Text>지역: {location}</Text>
            <Text>선생님</Text>
            </Profile>
        </Link>
    );
}


function InfoCardT(){
    const [data, setData] = useState([]);

    const getData = async () => {
      // const response = await axios.get();
      // setData(response); // 진짜
      setData([
        // 임시
        {id: 111, name: "lee", subject: "eng", location: "seoul" },
        {id: 112, name: "kim", subject: "math", location: "incheon" },
        {id: 113, name: "park", subject: "history", location: "busan" },
        {id: 114, name: "park", subject: "history", location: "busan" },
        {id: 115, name: "park", subject: "history", location: "busan" },
        {id: 116, name: "park", subject: "history", location: "busan" },
        {id: 117, name: "park", subject: "history", location: "busan" },
        {id: 118,  name: "park", subject: "history", location: "busan" },
        {id: 119, name: "park", subject: "history", location: "busan" },
        {id: 120,  name: "park", subject: "history", location: "busan" },
        {id: 121,  name: "park", subject: "history", location: "busan" },
        {id: 122,  name: "park", subject: "history", location: "busan" },
        {id: 123,  name: "park", subject: "history", location: "busan" },
        {id: 124,  name: "park", subject: "history", location: "busan" },
        {id: 125, name: "park", subject: "history", location: "busan" },
        {id: 126,  name: "park", subject: "history", location: "busan" },
        {id: 127,  name: "park", subject: "history", location: "busan" },
      ]);
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    return(
        <span>
            {data.map(whoname=>
            <Myname 
            key = {whoname.id}
            id = {whoname.id}
            name ={whoname.name} 
            subject = {whoname.subject} 
            location = {whoname.location}
            />)
        }
        </span>
    )
}


export default InfoCardT;