import React, { useReducer, useContext } from "react";
import styled from "styled-components";
import { ModifyContextS } from "../../../page/mypageSedit";

const Box = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25%;
  margin-right: 25%;
  border-top: solid 3px #010440;
  background: white;
  margin-top: 30px;
`;

const Text = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Btn = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StusigncontactMy = () => {
  const { state, dispatch } = useContext(ModifyContextS);

  const handleChange = e => {
    dispatch({ type: "setContact", contact: e.currentTarget.value });
  };

  return (
    <Box>
      <Text>화상강의가 가능한 수업을 원하시나요?</Text>
      <Btn>
        <input
          type="radio"
          name="contact"
          value="예"
          onChange={handleChange}
        ></input>
        예
      </Btn>
      <Btn>
        <input
          type="radio"
          name="contact"
          value="아니오"
          onChange={handleChange}
        ></input>
        아니오
      </Btn>
    </Box>
  );
};

export default StusigncontactMy;
