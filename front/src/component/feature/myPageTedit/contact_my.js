import React, { useContext } from "react";
import styled from "styled-components";
import { ModifyContext, ModifyContextT } from "../../../page/mypageTedit";

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

const TeasigncontactMy = () => {
  const { state, dispatch } = useContext(ModifyContextT);

  const handleChangeC = (e) => {
    dispatch({ type: "setContact", contact: true, noncontact: false });
  };
  const handleChangeN = (e) => {
    dispatch({ type: "setNoncontact", contact: false, noncontact: true });
  };

  return (
    <Box>
      <Text>화상강의 진행이 가능하시나요?</Text>
      <Btn>
        <input
          type="radio"
          name="contact"
          value="예"
          onChange={handleChangeC}
          checked={state.contact === true ? true : false}
        ></input>{" "}
        예
      </Btn>
      <Btn>
        <input
          type="radio"
          name="contact"
          value="아니오"
          onChange={handleChangeN}
          checked={state.noncontact === true ? true : false}
        ></input>{" "}
        아니오
      </Btn>
    </Box>
  );
};

export default TeasigncontactMy;
