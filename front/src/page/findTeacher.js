import React, { useReducer } from "react";
import InfoCardT from "../component/feature/findTeacher/infoCardT";
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
  contact: true,
  nonContact: true,
  female: true,
  male: true,
  pay: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "sortPay":
      return { ...state, pay: action.pay };
    case "sortAge":
      return { ...state, age: action.age };
    case "sortMale":
      return { ...state, male: action.male, female: action.female };
    case "sortFemale":
      return { ...state, male: action.male, female: action.female };
    case "sortContact":
      return {
        ...state,
        contact: action.contact,
        nonContact: action.nonContact,
      };
    case "sortNoncontact":
      return {
        ...state,
        contact: action.contact,
        nonContact: action.nonContact,
      };
  }
};

const FindTeacher = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

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
        </FilterContextT.Provider>
      </Wrapper>
    </div>
  );
};

export default FindTeacher;
