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
  contact: "",
  gender: "",
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
    case "sortGender":
      return { ...state, gender: action.gender };
    case "sortContact":
      return { ...state, contact: action.contact };
  }
};

export default FindTeacher;
