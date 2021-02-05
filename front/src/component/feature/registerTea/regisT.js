import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  background-color : #F6F4F3;
  padding-top : 30px;
`;
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
const BoxShort = styled.div`
  margin-right: 0;
  width: 30%;
  padding-bottom: 0px;
  background-color: lightgray;
  border: 1px solid gray;
  
`;

const BoxLong = styled.div`
  border : 0.05em solid #010440;
  margin-right : 0;
  width : 55%;
  padding-right : 40%;
  padding-bottom : 30px;
`;

class RegisT extends React.Component {
  render() {
    return (
      <Wrapper>
        <Box>
          <Text>{this.props.id} 이름</Text>
          <BoxShort className="name">{this.props.name}</BoxShort>
        </Box>
        <Box>
          <Text>과목</Text>
          <BoxShort className="school">{this.props.subject}</BoxShort>
        </Box>
        <Box>
          <Text>지역</Text>
          <BoxShort className="location">{this.props.location}</BoxShort>
        </Box>
        <Box>
          <Text>후기</Text>
          <BoxShort className="subject"></BoxShort>
        </Box>
        <Box>
          <Text>소개글</Text>
          <BoxLong className="appeal"></BoxLong>
        </Box>
        <Box>
          <Text>목표</Text>
          <BoxLong className="plan"></BoxLong>
        </Box>
      </Wrapper>
    );
  }
}

export default RegisT;