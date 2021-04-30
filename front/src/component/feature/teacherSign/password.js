import React, { useContext } from "react";
import styled from "styled-components";
import { CounterContext } from "../../../page/teasign";

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

const InputBox = styled.input`
  border: 0.05em solid #010440;
  margin-right: 0;
  width: 55%;
  padding-right: 40%;
  padding-bottom: 30px;
  margin-top: 8px;
`;

const Teasignpassword = () => {
  const { state, dispatch } = useContext(CounterContext);
  const handleChange1 = (e) => {
    dispatch({ type: "setPassword", password: e.currentTarget.value });
  };

  const handleChange2 = (e) => {
    dispatch({ type: "setPasscheck", passcheck: e.currentTarget.value });
  };

  return (
    <Box>
      <Text>* 비밀번호를 입력해주세요</Text>
      <label className="stuPassword">
        <InputBox
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange1}
          placeholder="비밀번호"
        ></InputBox>
      </label>
      <label className="stuPassword">
        <InputBox
          type="password"
          name="passcheck"
          value={state.passcheck}
          onChange={handleChange2}
          placeholder="비밀번호 확인"
        ></InputBox>
      </label>
    </Box>
  );
};

export default Teasignpassword;
