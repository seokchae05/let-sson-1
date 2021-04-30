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

const TeasigngenderMy = () => {
  const { state, dispatch } = useContext(ModifyContextT);

  const handleChangeMale = (e) => {
    dispatch({ type: "setMale", male: true, female: false });
  };
  const handleChangeFemale = (e) => {
    dispatch({ type: "setFemale", male: false, female: true });
  };

  return (
    <Box>
      <Text>성별이 어떻게 되시나요?</Text>
      <Btn>
        <input
          type="radio"
          name="stugender"
          value="남성"
          onChange={handleChangeMale}
          checked={state.male === true ? true : false}
        ></input>{" "}
        남성
      </Btn>
      <Btn>
        <input
          type="radio"
          name="stugender"
          value="여성"
          onChange={handleChangeFemale}
          checked={state.female === true ? true : false}
        ></input>{" "}
        여성
      </Btn>
    </Box>
  );
};

export default TeasigngenderMy;
