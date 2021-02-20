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

export const SidebarContext = React.createContext();

const INITIAL_STATE = {
  age: "",
  contact: "",
  gender: "",
  budget: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "sortBudget":
      return { ...state, budget: action.budget };
    case "sortContact":
      return { ...state, contact: action.contact };
    case "sortGender":
      return { ...state, gender: action.gender };
    case "sortAge":
      return { ...state, age: action.age };
  }
};

const FindStudent = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <header>
        <HeadButtons />
      </header>
      <Wrapper>
        <Side>
          <SidebarContext.Provider value={{ state, dispatch }}>
            <Sidebar />
          </SidebarContext.Provider>
        </Side>
        <InfoCardS />
      </Wrapper>
    </div>
  );
};

export default FindStudent;
