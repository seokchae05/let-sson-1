import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
///mport axios from "axios";
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

function MyName({
  id,
  name,
  subject,
  region,
  age,
  isMale,
  isFemale,
  isContact,
  isNoncontact,
  pay,
}) {
  const { state, dispatch } = useContext(FilterContextT);

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
            region,
            age,
          },
        }}
      >
        <Profile>
          <Text>이름: {name}</Text>
          <Text>과목: {subject}</Text>
          <Text>지역: {region}</Text>
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
  //   const response = await axios.get("http://localhost:8080/teachers/");
  //   if(response.data.gender === "여성" && response.data.contact === "y"){
  //     setData([{
  //       id: response.data.id,
  //       name: response.data.name,
  //       subject: "history",
  //       region: "busan",
  //       age: 28,
  //       isContact: false,
  //       isNoncontact: true,
  //       isFemale: false,
  //       isMale: true,
  //       pay: 29,
  //     }
  //   ]);
  // };

  useEffect(() => {
    getData();
  }, []);

  return (
    <span>
      {data.map(whoname => (
        <MyName
          key={whoname.id}
          id={whoname.id}
          name={whoname.name}
          subject={whoname.subject}
          region={whoname.region}
          age={whoname.age}
          isContact={whoname.isContact}
          isNoncontact={whoname.isNoncontact}
          isFemale={whoname.isFemale}
          isMale={whoname.isMale}
          pay={whoname.pay}
        />
      ))}
    </span>
  );
}

export default InfoCardT;
