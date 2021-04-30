import React from "react";
import Checkage from "./sideButton/checkAge";
import Checkgender from "./sideButton/checkGender";
import CheckOnline from "./sideButton/checkOnline";
import Checkpay from "./sideButton/checkPay";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 5px;
  float: right;
  width: 250px;
  box-sizing: border-box;
  display: grid;
  background-color: #3a4866;
  positon: flow;
`;

const SideB = styled.div`
  background-color: white;
  border-top: solid 3px grey;
  border-left: solid 1px lightgrey;
  border-right: solid 1px lightgrey;
  border-bottom: solid 1px lightgrey;
  margin: 10px;
`;

const Sidebar = () => {
  return (
    <span>
      <Wrapper>
        <SideB>
          <Checkgender />
        </SideB>
        <SideB>
          <CheckOnline />
        </SideB>

        <SideB>
          <Checkpay />
        </SideB>
        <SideB>
          <Checkage />
        </SideB>
      </Wrapper>
    </span>
  );
};

export default Sidebar;
