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
`;

const Text = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const InputBox = styled.input`
border : 0.05em solid #010440;
margin-right : 0;
width : 55%;
padding-right : 40%;
padding-bottom : 30px;
`;

class Stusignname_my extends React.Component {
  render() {
    return (
      <Box>
        <Text>이름 혹은 별명을 입력해주세요</Text>
        <label className="stuName">
          <InputBox type="text"></InputBox>
        </label>
      </Box>
    );
  }
}

export default Stusignname_my;
