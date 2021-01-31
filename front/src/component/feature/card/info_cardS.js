import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

const Myname = ({ name, subject, location }) => {
  return (
    <Link to={{ pathname: "/stusubmit", state: { name, subject, location } }}>
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
      { name: "lee", subject: "eng", location: "seoul" },
      { name: "kim", subject: "math", location: "incheon" },
      { name: "park", subject: "history", location: "busan" },
    ]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <span>
      {data.map((whoname) => (
        <Myname
          name={whoname.name}
          subject={whoname.subject}
          location={whoname.location}
        />
      ))}
    </span>
  );
};

export default InfoCardS;
