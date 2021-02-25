import React, { useReducer, useContext } from "react";
import styled from "styled-components";
import { CounterContext } from "../../../page/stusign";

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

const Stusignisstu = () => {
  const { state, dispatch } = useContext(CounterContext);

  const Changed = (e) => {
    dispatch({ type: "setIsstu", is_stu: e.currentTarget.value });
  };
  return (
    <Box>
      <Text>학생이신가요?</Text>
      <Btn>
        <input
          type="radio"
          name="isstu"
          value="학생"
          onChange={Changed}
        ></input>{" "}
        학생
      </Btn>
      <Btn>
        <input
          type="radio"
          name="isstu"
          value="학부모"
          onChange={Changed}
        ></input>{" "}
        학부모
      </Btn>
    </Box>
  );
};

export default Stusignisstu;
