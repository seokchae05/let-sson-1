import React from "react";
import HeadButtons from "../component/layout/header/header";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RegisT from "../component/feature/registerTea/regisT";

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

class Registertea extends React.Component {
  // history
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      id: props.location.state.id,
      name: props.location.state.name,
      university: props.location.state.university,
      major: props.location.state.major,
      region: props.location.state.region,
      subject: props.location.state.subject,
      career: props.location.state.career,
      intro: props.location.state.intro,
      plan: props.location.state.plan,
      rate: props.location.state.rate,
    };
  }
  render() {
    return (
      <div>
        <HeadButtons />
        <Wrapper>
          <RegisT
            id={this.state.id}
            name={this.state.name}
            university={this.state.university}
            major={this.state.major}
            subject={this.state.subject}
            region={this.state.region}
            career={this.state.career}
            intro={this.state.intro}
            plan={this.state.plan}
            rate={this.state.rate}
          />
          <Buttonfame>
            <Link to="/findteacher">
              <SubmitB onClick={() => alert("신청완료")}>신청하기</SubmitB>
            </Link>
          </Buttonfame>
        </Wrapper>
      </div>
    );
  }
}

export default Registertea;
