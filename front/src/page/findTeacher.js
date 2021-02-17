import React, { useContext, useReducer } from "react";
import InfoCardT from "../component/feature/findTeacher/info_cardT";
import HeadButtons from "../component/layout/header/header";
import styled from "styled-components";
import SidebarT from "../component/shared/findingT/sidebar";

const Wrapper = styled.div`
  background-color: #f6f4f3;
`;

const Side = styled.span`
  height: 100%;
`;

export const FilterContextT = React.createContext();

const INITIAL_STATE = {
  age: "",
  isContact: true,
  isNoncontact: true,
  isFemale: true,
  isMale: true,
  pay: "",
};

const FindTeacher = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const showConsole = e => {
    console.log(state);
  };
  return (
    <div>
      <header>
        <HeadButtons />
      </header>
      <Wrapper>
        <FilterContextT.Provider value={{ state, dispatch }}>
          <Side>
            <SidebarT />
          </Side>
          <InfoCardT />
          <button onClick={showConsole}>Click</button>
        </FilterContextT.Provider>
      </Wrapper>
    </div>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "sortPay":
      return { ...state, pay: action.pay };
    case "sortAge":
      return { ...state, age: action.age };
    case "sortMale":
      return { ...state, isMale: action.isMale, isFemale: action.isFemale };
    case "sortFemale":
      return { ...state, isMale: action.isMale, isFemale: action.isFemale };
    case "sortContact":
      return {
        ...state,
        isContact: action.isContact,
        isNoncontact: action.isNoncontact,
      };
    case "sortNoncontact":
      return {
        ...state,
        isContact: action.isContact,
        isNoncontact: action.isNoncontact,
      };
  }
};

export default FindTeacher;
