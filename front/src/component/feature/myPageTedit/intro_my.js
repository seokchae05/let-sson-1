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

const InputBox = styled.input`
  border: 0.05em solid #010440;
  margin-right: 0;
  width: 55%;
  padding-right: 40%;
  padding-bottom: 30px;
`;

const TeasignintroMy = () => {
  const { state, dispatch } = useContext(ModifyContextT);

  return (
    <Box>
      <Text>프로필에 들어갈 한 줄 소개를 입력해주세요</Text>
      <label>
        <InputBox
          type="text"
          value={state.intro}
          onChange={e =>
            dispatch({ type: "setIntro", intro: e.currentTarget.value })
          }
        />
      </label>
    </Box>
  );
};

export default TeasignintroMy;
