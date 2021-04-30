import React, {useState} from "react";
import HeadButtons from "../component/layout/header/header";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RegisT from "../component/feature/registerTea/regisT";
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

const Registertea = (props) => {
  const [data, setData] = useState({
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
    tel: props.location.state.tel,
  });


  const teaPost = async e => {
    console.log(data.tel);

    await axios
      .post(
        `http://localhost:8080/students/sendProfile?teacher_tel=${data.tel}`,
        {
          teacher_tel: data.tel,
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
          <RegisT
            id={data.id}
            name={data.name}
            university={data.university}
            major={data.major}
            subject={data.subject}
            region={data.region}
            career={data.career}
            intro={data.intro}
            plan={data.plan}
            rate={data.rate}
          />
          <Buttonfame>
            <Link to="/findteacher">
              <SubmitB onClick={teaPost}>신청하기</SubmitB>
            </Link>
          </Buttonfame>
        </Wrapper>
      </div>
    );
}

export default Registertea;
