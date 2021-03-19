import React from "react";
///import { Link } from "react-router-dom";
import SubmitS from "../component/feature/myPageSpro/submitS";
import HeadButtons from "../component/layout/header/header";
import SidebarMyPs from "../component/shared/myPageS/sidebarMyPs";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #f6f4f3;
`;

const SaveNref = styled.button`
  height: 45px;
  width: 100px;
  border-top: solid 3px #010440;
  border-left: none;
  border-right: none;
  border-bottom: none;
  background-color: white;
  font-size: 16px;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
`;

const Buttonfame = styled.div`
  margin-left: 50%;
  margin-top: 20px;
`;
const Wrapper2 = styled.div`
  width: 85%;
`;
class MypageSp extends React.Component {
  state = {
    name: "",
    subject: "",
    region: "",
    review: "",
    intro: "",
    goal: "",
  };
  
    getData = async () => {
        const data = await axios.get(
          "http://localhost:8080/students/studentInfo",
        { 
          headers:{
            "X-AUTH-TOKEN": localStorage.getItem("token"),
          },
        }
        )
        this.setState(data.data);
    }

    componentDidMount() {
        this.getData();
      }


  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "name") {
      this.setState(prevState => ({ ...prevState, name: value }));
    } else if (name === "subject") {
      this.setState(prevState => ({ ...prevState, subject: value }));
    } else if (name === "region") {
      this.setState(prevState => ({ ...prevState, region: value }));
    } else if (name === "review") {
      this.setState(prevState => ({ ...prevState, review: value }));
    } else if (name === "intro") {
      this.setState(prevState => ({ ...prevState, intro: value }));
    } else if (name === "goal") {
      this.setState(prevState => ({ ...prevState, goal: value }));
    }
  };

  savedataT = async e => {
    console.log(this.state);
    e.preventDefault();
    await axios.put(
      "http://localhost:8080/students/studentInfo",
      {
        intro:this.state.intro,
        goal:this.state.goal ,
      }
    ).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  };

  returning = e => {
    this.setState(this.tmp);
  };

  render() {
    return (
      <form onSubmit={this.savedataT}>
        <HeadButtons />
        <SidebarMyPs />
        <Wrapper>
          학생
          <Wrapper2>
            <SubmitS state={this.state} handleChange={this.handleChange} />
            <Buttonfame>
              <SaveNref type="submit" value="확인" onClick={() => alert("저장이 완료되었습니다.")}>
                저장하기
              </SaveNref>
              <SaveNref name="refresh" onClick={this.returning}>
                되돌리기
              </SaveNref>
            </Buttonfame>
          </Wrapper2>
        </Wrapper>
      </form>
    );
  }
}

export default MypageSp;
