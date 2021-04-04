import React from "react";
import styled from "styled-components";
import CheckageT from "./sideButton/checkAge";
import CheckgenderT from "./sideButton/checkGender";
import CheckOnlineT from "./sideButton/checkOnline";
import CheckpayT from "./sideButton/checkPay";

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

const SidebarT = () => {
  return (
    <span>
      <Wrapper>
        <SideB>
          <CheckgenderT />
        </SideB>
        <SideB>
          <CheckOnlineT />
        </SideB>
        <SideB>
          <CheckpayT />
        </SideB>
      </Wrapper>
    </span>
  );
};

export default SidebarT;
