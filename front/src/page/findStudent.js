import React, { useReducer } from "react";
import InfoCardS from "../component/feature/findStudent/info_cardS";
import HeadButtons from "../component/layout/header/header";
import Sidebar from "../component/shared/findingSnT/sidebar";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f6f4f3;
`;

const Side = styled.span`
  height: 100%;
`;

export const SidebarContextS = React.createContext();

const FindStudent = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const showConsole = (e) => {
    console.log(state);
  };

  return (
    <div>
      <header>
        <HeadButtons />
      </header>
      <Wrapper>
        <SidebarContextS.Provider value={{ state, dispatch }}>
          <Side>
            <Sidebar />
          </Side>
          <InfoCardS />
        </SidebarContextS.Provider>
        <button onClick={showConsole}>Click</button>
      </Wrapper>
    </div>
  );
};

const INITIAL_STATE = {
  age: "",
  isContact: true,
  isNoncontact: true,
  isFemale: true,
  isMale: true,
  pay: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "sortPay":
      return { ...state, pay: action.pay };
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
    case "sortMale":
      return { ...state, isMale: action.isMale, isFemale: action.isFemale };
    case "sortFemale":
      return { ...state, isMale: action.isMale, isFemale: action.isFemale };
    case "sortAge":
      return { ...state, age: action.age };
  }
};

export default FindStudent;
