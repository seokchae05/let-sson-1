import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
///import axios from "axios";
import { SidebarContextS } from "../../../page/findStudent";

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

const Myname = ({
  id,
  name,
  subject,
  location,
  age,
  isMale,
  isFemale,
  isContact,
  isNoncontact,
  budget,
}) => {
  const { state, dispatch } = useContext(SidebarContextS);

  if (parseInt(state.age) > age) {
    console.log({ age });
    return null;
  } else if (state.isMale !== state.isFemale && state.isMale !== isMale) {
    console.log({ isMale });
    return null;
  } else if (state.isMale !== state.isFemale && state.isFemale !== isFemale) {
    console.log({ isFemale });
    return null;
  } else if (
    state.isContact !== state.isNoncontact &&
    state.isContact !== isContact
  ) {
    console.log({ isContact });
    return null;
  } else if (
    state.isContact !== state.isNoncontact &&
    state.isNoncontact !== isNoncontact
  ) {
    console.log({ isNoncontact });
    return null;
  } else if (parseInt(state.budget) > budget) {
    console.log({ budget });
    return null;
  } else {
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
  }
};

const InfoCardS = () => {
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
        isContact: false,
        isNoncontact: true,
        isFemale: false,
        isMale: true,
        budget: 42,
      },
      {
        id: 112,
        name: "kim",
        subject: "math",
        location: "incheon",
        age: 21,
        isContact: false,
        isNoncontact: true,
        isFemale: false,
        isMale: true,
        budget: 42,
      },
      {
        id: 113,
        name: "park",
        subject: "history",
        location: "busan",
        age: 32,
        isContact: false,
        isNoncontact: true,
        isFemale: false,
        isMale: true,
        budget: 30,
      },
      {
        id: 114,
        name: "park",
        subject: "history",
        location: "busan",
        age: 40,
        isContact: false,
        isNoncontact: true,
        isFemale: false,
        isMale: true,
        budget: 25,
      },
      {
        id: 115,
        name: "park",
        subject: "history",
        location: "busan",
        age: 41,
        isContact: false,
        isNoncontact: true,
        isFemale: false,
        isMale: true,
        budget: 16,
      },
      {
        id: 116,
        name: "park",
        subject: "history",
        location: "busan",
        age: 30,
        isContact: false,
        isNoncontact: true,
        isFemale: false,
        isMale: true,
        budget: 40,
      },
      {
        id: 117,
        name: "park",
        subject: "history",
        location: "busan",
        age: 24,
        isContact: false,
        isNoncontact: true,
        isFemale: false,
        isMale: true,
        budget: 23,
      },
      {
        id: 118,
        name: "park",
        subject: "history",
        location: "busan",
        age: 28,
        isContact: false,
        isNoncontact: true,
        isFemale: false,
        isMale: true,
        budget: 29,
      },
      {
        id: 119,
        name: "park",
        subject: "history",
        location: "busan",
        age: 35,
        isContact: true,
        isNoncontact: false,
        isFemale: true,
        isMale: false,
        budget: 11,
      },
      {
        id: 120,
        name: "park",
        subject: "history",
        location: "busan",
        age: 36,
        isContact: true,
        isNoncontact: false,
        isFemale: true,
        isMale: false,
        budget: 10,
      },
      {
        id: 121,
        name: "park",
        subject: "history",
        location: "busan",
        age: 45,
        isContact: true,
        isNoncontact: false,
        isFemale: true,
        isMale: false,
        budget: 34,
      },
      {
        id: 122,
        name: "park",
        subject: "history",
        location: "busan",
        age: 21,
        isContact: true,
        isNoncontact: false,
        isFemale: true,
        isMale: false,
        budget: 9,
      },
      {
        id: 123,
        name: "park",
        subject: "history",
        location: "busan",
        age: 20,
        isContact: true,
        isNoncontact: false,
        isFemale: true,
        isMale: false,
        budget: 17,
      },
      {
        id: 124,
        name: "park",
        subject: "history",
        location: "busan",
        age: 44,
        isContact: true,
        isNoncontact: false,
        isFemale: true,
        isMale: false,
        budget: 5,
      },
      {
        id: 125,
        name: "park",
        subject: "history",
        location: "busan",
        age: 19,
        isContact: true,
        isNoncontact: false,
        isFemale: true,
        isMale: false,
        budget: 60,
      },
      {
        id: 126,
        name: "park",
        subject: "history",
        location: "busan",
        age: 37,
        isContact: true,
        isNoncontact: false,
        isFemale: true,
        isMale: false,
        budget: 180,
      },
    ]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <span>
      {data.map((whoname) => (
        <Myname
          key={whoname.id}
          id={whoname.id}
          name={whoname.name}
          subject={whoname.subject}
          location={whoname.location}
          age={whoname.age}
          isMale={whoname.isMale}
          isFemale={whoname.isFemale}
          isContact={whoname.isContact}
          isNoncontact={whoname.isNoncontact}
          budget={whoname.budget}
        />
      ))}
    </span>
  );
};

export default InfoCardS;
