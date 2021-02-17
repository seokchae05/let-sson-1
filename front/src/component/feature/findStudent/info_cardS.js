import React, { useState, useEffect, useReducer, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Profile = styled.div`
  background-color: white;
  border-top: solid 3px #010440;
  border-left: solid 1px lightgrey;
  border-right: solid 1px lightgrey;
  border-bottom: solid 1px lightgrey;
  height: 250px;
  width: 180px;
  display: inline-block;
  margin-top: 30px;
  margin-left: 30px;
  position: grid;
`;
const Text = styled.div`
  color: black;
  margin: 1px;
`;

const Myname = ({ id, name, subject, location, age }) => {
  return (
    <Link
      to={{
        pathname: "/registerstu",
        state: {
          id,
          name,
          subject,
          location,
          age,
        },
      }}
    >
      <Profile>
        <Text>이름: {name}</Text>
        <Text>과목: {subject}</Text>
        <Text>지역: {location}</Text>
        <Text>나이: {age}</Text>
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
      { id: 1, name: "lee", subject: "eng", location: "seoul", age: 20 },
      { id: 2, name: "kim", subject: "math", location: "incheon", age: 20 },
      { id: 3, name: "park", subject: "history", location: "busan", age: 20 },
      { id: 4, name: "kim", subject: "math", location: "incheon", age: 30 },
      { id: 5, name: "kim", subject: "math", location: "incheon", age: 12 },
      { id: 6, name: "kim", subject: "math", location: "incheon", age: 11 },
      { id: 7, name: "kim", subject: "math", location: "incheon", age: 41 },
      { id: 8, name: "kim", subject: "math", location: "incheon", age: 31 },
      { id: 9, name: "kim", subject: "math", location: "incheon", age: 21 },
      { id: 10, name: "kim", subject: "math", location: "incheon", age: 15 },
      { id: 11, name: "kim", subject: "math", location: "incheon", age: 33 },
      { id: 12, name: "kim", subject: "math", location: "incheon", age: 44 },
      { id: 13, name: "kim", subject: "math", location: "incheon", age: 45 },
      { id: 14, name: "kim", subject: "math", location: "incheon", age: 26 },
      { id: 15, name: "kim", subject: "math", location: "incheon", age: 35 },
    ]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <span>
      {data.map(whoname => (
        <Myname
          key={whoname.id}
          id={whoname.id}
          name={whoname.name}
          subject={whoname.subject}
          location={whoname.location}
          age={whoname.age}
        />
      ))}
    </span>
  );
};

export default InfoCardS;
