import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f6f4f3;
  padding-top: 30px;
`;
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
const BoxShort = styled.div`
  margin-right: 0;
  width: 30%;
  padding-bottom: 0px;
  background-color: lightgray;
  border: 1px solid gray;
`;

const BoxLong = styled.div`
  border: 0.05em solid #010440;
  margin-right: 0;
  width: 55%;
  padding-right: 40%;
  padding-bottom: 30px;
`;

class RegisS extends React.Component {
  render() {
    return (
      <Wrapper>
        <Box>
          <Text>이름</Text>
          <BoxShort className="name">{this.props.name}</BoxShort>
        </Box>
        <Box>
          <Text>과목</Text>
          <BoxShort className="school">{this.props.subject}</BoxShort>
        </Box>
        <Box>
          <Text>지역</Text>
          <BoxShort className="location">{this.props.region}</BoxShort>
        </Box>
        <Box>
          <Text>자기소개(성격, 성적)</Text>
          <BoxLong className="appeal">{this.props.intro}</BoxLong>
        </Box>
        <Box>
          <Text>목표</Text>
          <BoxLong className="plan">{this.props.goal}</BoxLong>
        </Box>
        <Box>
          <p>수정은 마이페이지에서만 가능합니다.</p>
          <p>신청하기를 눌렀을 때 학생의 정보가 전송됩니다.</p>
        </Box>
      </Wrapper>
    );
  }
}

export default RegisS;
