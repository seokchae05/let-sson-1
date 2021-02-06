import React from "react";
import styled from "styled-components";

const Box = styled.div`
  padding-top : 10px;
  padding-bottom : 20px;
  padding-left : 20px;
  display : flex;
  flex-direction: column;
  justify-content: center;
  margin-left : 25%;
  margin-right : 25%;
  border-top : solid 3px #010440;
  background : white;
  margin-top : 30px;
`;

const Text = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const InputBoxShort = styled.input`
  margin-right: 0;
  width: 30%;
  padding-bottom: 0px;
  background-color: lightgray;
  border: 1px solid gray;
`;

const InputBox = styled.input`
  border : 0.05em solid #010440;
  margin-right: 0;
  width: 55%;
  padding-right: 40%;
  padding-bottom: 30px;
`;

class SubmitS extends React.Component {
  render() {
    return (
      <div>
        <Box>
          <Text>{this.props.id} 이름</Text>
          <InputBoxShort className="name"></InputBoxShort>
        </Box>
        <Box>
          <Text>과목</Text>
          <InputBoxShort className="school"></InputBoxShort>
        </Box>
        <Box>
          <Text>지역</Text>
          <InputBoxShort className="location"></InputBoxShort>
        </Box>
        <Box>
          <Text>후기</Text>
          <InputBoxShort className="subject"></InputBoxShort>
        </Box>
        <Box>
          <Text>소개글</Text>
          <InputBox className="appeal"></InputBox>
        </Box>
        <Box>
          <Text>목표</Text>
          <InputBox className="plan"></InputBox>
        </Box>
      </div>
    );
  }
}

export default SubmitS;
