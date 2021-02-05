import React from "react";
import styled from "styled-components";

const Box = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30%;
  margin-right: 30%;
  border-top: solid 1px black;
  background: white;
  margin-bottom: 10px;
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
  margin-right: 0;
  width: 55%;
  padding-right: 40%;
  padding-bottom: 30px;
`;

class SubmitS extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.props.handleChange;
}
  render() {
    return (
      <div>
        <Box>
          <Text>{this.props.id} 이름</Text>
          <InputBoxShort name="name" value={this.props.state.name} type="text"></InputBoxShort>
        </Box>
        <Box>
          <Text>과목</Text>
          <InputBoxShort name="subject" value={this.props.state.subject} type="text"></InputBoxShort>
        </Box>
        <Box>
          <Text>지역</Text>
          <InputBoxShort name="location" value = {this.props.state.location} type="text"></InputBoxShort>
        </Box>
        <Box>
          <Text>후기</Text>
          <InputBoxShort name="review" value = {this.props.state.review} type="text"></InputBoxShort>
        </Box>
        <Box>
          <Text>소개글</Text>
          <InputBox name="introduce" value = {this.props.state.introduce}  onChange={this.handleChange} type="text"></InputBox>
        </Box>
        <Box>
          <Text>목표</Text>
          <InputBox name="goal" value = {this.props.state.goal}  onChange={this.handleChange} type="text"></InputBox>
        </Box>
      </div>
    );
  }
}

export default SubmitS;
