import React from "react";
import styled from "styled-components";

const Box = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20%;
  margin-right: 20%;
  border-top: solid 1px black;
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

class Stusigngender_my extends React.Component {
  render() {
    return (
      <Box>
        <Text>성별이 어떻게 되시나요?</Text>
        <Btn>
          <input type="radio" name="stugender" value="남성"></input> 남성
        </Btn>
        <Btn>
          <input type="radio" name="stugender" value="여성"></input> 여성
        </Btn>
      </Box>
    );
  }
}

export default Stusigngender_my;
