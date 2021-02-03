import React from "react";
import styled from "styled-components";

const Box = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left : 25%;
  margin-right : 25%;
  border-top : solid 3px #010440;
  background: white;
  margin-top: 30px;
  /* @media screen {
    background: white;
  } */
`;

const Text = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Btn = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

class Teasignattend extends React.Component {
  render() {
    return (
      <Box>
        <Text>현재 대학에 재학중이신가요?</Text>
        <Btn>
          <input type="radio" name="stupropergender" value="남성"></input>{" "}
          재학중
        </Btn>
        <Btn>
          <input type="radio" name="stupropergender" value="여성"></input> 졸업
        </Btn>
      </Box>
    );
  }
}

export default Teasignattend;
