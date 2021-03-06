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
  border: solid 1px black;
  width: 200px;
  height: 50px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 100px;
`;

const Buttonfame = styled.div`
  margin-left: 40%;
  margin-right: 40%;
  margin-top: 50px;
`;

class Registerstu extends React.Component {
  // history
  constructor(props){
    super(props);
    console.log(props);
    this.state={
        id: props.location.state.id,
        name : props.location.state.name,
        subject: props.location.state.subject,
        location: props.location.state.location,
    }
}
  render() {
    return (
      <div>
        <HeadButtons />
        <Wrapper>
          <RegisS 
          id = {this.state.id} 
          name = {this.state.name}
          subject = {this.state.subject}
          location = {this.state.location}
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
