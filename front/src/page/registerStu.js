import React, {useState} from "react";
import HeadButtons from "../component/layout/header/header";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RegisS from "../component/feature/registerStu/regisS";
import axios from "axios";

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

const Registerstu = (props) => {
  // history
  const [data, setData] = useState({
      id: props.location.state.id,
      name: props.location.state.name,
      subject: props.location.state.subject,
      region: props.location.state.region,
      intro: props.location.state.intro,
      goal: props.location.state.goal,
      tel: props.location.state.tel,
    });
  
  const stuPost = async e => {
    console.log(data.tel);

    await axios
      .post(
        `http://localhost:8080/teachers/sendProfile?student_tel=${data.tel}`,
        {
          student_tel: data.tel,
        },
        {
          headers: {
            "X-AUTH-TOKEN": localStorage.getItem("token"),
          },
        }
      )
      .then((response) =>{
        console.log("전송 성공");
      })
      .catch((error) =>{
        console.log("전송 실패");
      });
  };

    return (
      <div>
        <HeadButtons />
        <Wrapper>
          <RegisS
            id={data.id}
            name={data.name}
            subject={data.subject}
            region={data.region}
            intro={data.intro}
            goal={data.goal}
          />
          <Buttonfame>
            <Link to="/findstudent">
              <SubmitB onClick={stuPost}>신청하기</SubmitB>
            </Link>
          </Buttonfame>
        </Wrapper>
      </div>
    );
}

export default Registerstu;