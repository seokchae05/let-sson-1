import React from "react";
import HeadButtons from "../component/layout/header/header";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RegisS from "../component/feature/registerStu/regisS";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const SubmitB = styled.button`
  height: 45px;
  width: 130px;
  border-top: solid 3px #010440;
  border-left: none;
  border-right: none;
  border-bottom: none;
  background-color: white;
  font-size: 16px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
`;

const Buttonfame = styled.div`
  margin-left: 55%;
  margin-right: 40%;
  margin-top: 50px;
`;

class Registerstu extends React.Component {
  // history
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      id: props.location.state.id,
      name: props.location.state.name,
      subject: props.location.state.subject,
      region: props.location.state.region,
      intro: props.location.state.intro,
      goal: props.location.state.goal,
    };
  }
  render() {
    return (
      <div>
        <HeadButtons />
        <Wrapper>
          <RegisS
            id={this.state.id}
            name={this.state.name}
            subject={this.state.subject}
            region={this.state.region}
            intro={this.state.intro}
            goal={this.state.goal}
          />
          <Buttonfame>
            <Link to="/findstudent">
              <SubmitB onClick={() => alert("신청완료")}>신청하기</SubmitB>
            </Link>
          </Buttonfame>
        </Wrapper>
      </div>
    );
  }
}

export default Registerstu;
