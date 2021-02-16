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

export const SidebarContextT = React.createContext();

const FindTeacher = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <header>
        <HeadButtons />
      </header>
      <Wrapper>
        <Side>
          <SidebarContextT.Provider value={{ state, dispatch }}>
            <SidebarT />
          </SidebarContextT.Provider>
        </Side>
        <InfoCardT />
      </Wrapper>
    </div>
  );
};

const INITIAL_STATE = {
  age: "",
  contact: "",
  gender: "",
  budget: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "sortBudget":
      return { ...state, budget: action.budget }, console.log(action.budget);
    case "sortAge":
      return { ...state, age: action.age }, console.log(action.age);
    case "sortGender":
      return { ...state, gender: action.gender }, console.log(action.gender);
    case "sortContact":
      return { ...state, contact: action.contact }, console.log(action.contact);
  }
};

export default FindTeacher;
