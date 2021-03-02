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

const TeasignattendMy = () => {
  const { dispatch } = useContext(ModifyContextT);

  const handleChange = e => {
    dispatch({ type: "setIsattend", is_attend: e.currentTarget.value });
  };

  return (
    <Box>
      <Text>현재 대학에 재학중이신가요?</Text>
      <Btn>
        <input type="radio" value="재학중" onChange={handleChange}></input>{" "}
        재학중
      </Btn>
      <Btn>
        <input type="radio" value="졸업" onChange={handleChange}></input> 졸업
      </Btn>
    </Box>
  );
};

export default TeasignattendMy;
