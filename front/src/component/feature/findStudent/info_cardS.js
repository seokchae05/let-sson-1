import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";



const Profile = styled.div`
  background-color : white;
  border-top : solid 3px #010440;
  border-left : solid 1px lightgrey;
  border-right : solid 1px lightgrey;
  border-bottom : solid 1px lightgrey;
  height: 250px;
  width: 180px;
  display: inline-block;
  margin-top : 30px;
  margin-left : 30px;
  position: grid;
`;
const Text = styled.div`
  color : black;
  margin: 1px;
`;

const Myname = ({ id, name, subject, location }) => {
  return (
    <Link to = {{pathname : "/registerstu",
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
        <Text>학생</Text>
      </Profile>
    </Link>
  );
};

const InfoCardS = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    // const response = await axios.get();
    // setData(response); // 진짜
    setData([
      // 임시
      { id:1, name: "lee", subject: "eng", location: "seoul" },
      { id:2, name: "kim", subject: "math", location: "incheon" },
      { id:3, name: "park", subject: "history", location: "busan" },
      { id:4, name: "kim", subject: "math", location: "incheon" },
      { id:5, name: "kim", subject: "math", location: "incheon" },
      { id:6, name: "kim", subject: "math", location: "incheon" },
      { id:7, name: "kim", subject: "math", location: "incheon" },
      { id:8, name: "kim", subject: "math", location: "incheon" },
      { id:9, name: "kim", subject: "math", location: "incheon" },
      { id:10, name: "kim", subject: "math", location: "incheon" },
      { id:11, name: "kim", subject: "math", location: "incheon" },
      { id:12, name: "kim", subject: "math", location: "incheon" },
      { id:13, name: "kim", subject: "math", location: "incheon" },
      { id:14, name: "kim", subject: "math", location: "incheon" },
      { id:15, name: "kim", subject: "math", location: "incheon" },
    ]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <span>
      {data.map((whoname) => (
        <Myname
        key = {whoname.id} 
        id = {whoname.id}
          name={whoname.name}
          subject={whoname.subject}
          location={whoname.location}
        />
      ))}
    </span>
  );
};

export default InfoCardS;
