import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { FilterContextT } from "../../../page/findTeacher";

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

function Myname({ id, name, subject, location, age, contact, gender, pay }) {
  const { state, dispatch } = useContext(FilterContextT);

  if (parseInt(state.age) > age) {
    console.log({ age });
    return null;
  } else if (state.contact == String(contact)) {
    ///여기 질문!
    console.log({ contact });
    return null;
  } else if (state.gender === gender) {
    console.log({ gender });
    return null;
  } else if (parseInt(state.pay) > pay) {
    console.log({ pay });
    return null;
  } else {
    return (
      <Link
        to={{
          pathname: "/registertea",
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
          <Text>선생님</Text>
        </Profile>
      </Link>
    );
  }
}

function InfoCardT() {
  const [data, setData] = useState([]);

  const getData = async () => {
    // const response = await axios.get();
    // setData(response); // 진짜
    setData([
      // 임시
      {
        id: 111,
        name: "lee",
        subject: "eng",
        location: "seoul",
        age: 20,
        contact: false,
        gender: "w",
        pay: 42,
      },
      {
        id: 112,
        name: "kim",
        subject: "math",
        location: "incheon",
        age: 21,
        contact: false,
        gender: "w",
        pay: 42,
      },
      {
        id: 113,
        name: "park",
        subject: "history",
        location: "busan",
        age: 32,
        contact: false,
        gender: "w",
        pay: 30,
      },
      {
        id: 114,
        name: "park",
        subject: "history",
        location: "busan",
        age: 40,
        contact: false,
        gender: "w",
        pay: 25,
      },
      {
        id: 115,
        name: "park",
        subject: "history",
        location: "busan",
        age: 41,
        contact: false,
        gender: "w",
        pay: 16,
      },
      {
        id: 116,
        name: "park",
        subject: "history",
        location: "busan",
        age: 30,
        contact: false,
        gender: "w",
        pay: 40,
      },
      {
        id: 117,
        name: "park",
        subject: "history",
        location: "busan",
        age: 24,
        contact: false,
        gender: "m",
        pay: 23,
      },
      {
        id: 118,
        name: "park",
        subject: "history",
        location: "busan",
        age: 28,
        contact: false,
        gender: "m",
        pay: 29,
      },
      {
        id: 119,
        name: "park",
        subject: "history",
        location: "busan",
        age: 35,
        contact: false,
        gender: "m",
        pay: 11,
      },
      {
        id: 120,
        name: "park",
        subject: "history",
        location: "busan",
        age: 36,
        contact: true,
        gender: "m",
        pay: 10,
      },
      {
        id: 121,
        name: "park",
        subject: "history",
        location: "busan",
        age: 45,
        contact: true,
        gender: "m",
        pay: 34,
      },
      {
        id: 122,
        name: "park",
        subject: "history",
        location: "busan",
        age: 21,
        contact: true,
        gender: "m",
        pay: 9,
      },
      {
        id: 123,
        name: "park",
        subject: "history",
        location: "busan",
        age: 20,
        contact: true,
        gender: "m",
        pay: 17,
      },
      {
        id: 124,
        name: "park",
        subject: "history",
        location: "busan",
        age: 44,
        contact: true,
        gender: "m",
        pay: 5,
      },
      {
        id: 125,
        name: "park",
        subject: "history",
        location: "busan",
        age: 19,
        contact: true,
        gender: "w",
        pay: 60,
      },
      {
        id: 126,
        name: "park",
        subject: "history",
        location: "busan",
        age: 37,
        contact: true,
        gender: "w",
        pay: 180,
      },
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
          contact={whoname.contact}
          gender={whoname.gender}
          pay={whoname.pay}
        />
      ))}
    </span>
  );
}

export default InfoCardT;
