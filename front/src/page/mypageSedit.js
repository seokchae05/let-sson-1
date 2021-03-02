import React, { useReducer } from "react";
import HeadButton from "../component/layout/header/header";
import HeadSaveNrefs from "../component/layout/header/header";
import SidebarMyPt from "../component/shared/myPageT/sidebarMyPt";
import StusignageMy from "../component/feature/myPageSedit/age_my";
import StusigncontactMy from "../component/feature/myPageSedit/contact_my";
import StusignpayMy from "../component/feature/myPageSedit/pay_my";
import StusigngenderMy from "../component/feature/myPageSedit/gender_my";
import StusignregionMy from "../component/feature/myPageSedit/region_my";
import StusignemailMy from "../component/feature/myPageSedit/email_my";
import StusignisstuMy from "../component/feature/myPageSedit/isstudent_my";
import StusignnameMy from "../component/feature/myPageSedit/name_my";
import StusignpasswordMy from "../component/feature/myPageSedit/password_my";
import StusignphoneMy from "../component/feature/myPageSedit/phone_my";
import StusignpropergenderMy from "../component/feature/myPageSedit/propergender_my";
import StusignsubjectMy from "../component/feature/myPageSedit/subject_my";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #f6f4f3;
  padding-top: 30px;
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

export const ModifyContextS = React.createContext();

const INITIAL_STATE = {
  name: "",
  gender: "",
  pay: 0,
  tel: "",
  password: "",
  passcheck: "",
  email: "",
  contact: "",
  is_attend: "",
  intro: "",
  university: "",
  major: "",
  prove_image: "",
  subject: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    case "setAge":
      return { ...state, age: action.age };
    case "setGender":
      return { ...state, gender: action.gender };
    case "setRegion":
      return { ...state, region: action.region };
    case "setPassword":
      return { ...state, password: action.password };
    case "setPasscheck":
      return { ...state, passcheck: action.passcheck };
    case "setPay":
      return { ...state, pay: action.pay };
    case "setTel":
      return { ...state, tel: action.tel };
    case "setEmail":
      return { ...state, email: action.email };
    case "setContact":
      return { ...state, contact: action.contact };
    case "setSubject":
      return { ...state, subject: action.subject };
    case "setIsattend":
      return { ...state, is_attend: action.is_attend };
    case "setUniversity":
      return { ...state, university: action.university };
    case "setMajor":
      return { ...state, major: action.major };
    case "setImage":
      return { ...state, prove_image: action.prove_image };
    case "setIntro":
      return { ...state, intro: action.intro };
    case "reset":
      return INITIAL_STATE;
    default:
      return state;
  }
};

const MypageSe = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const Signed = e => {
    e.preventDefault();
    if (state.password !== state.passcheck) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      alert("회원가입이 완료되었습니다.");
    }

    axios
      .post("http://localhost:8080/teachers/join", {
        name: state.name,
        is_attend: state.is_attend,
        age: state.age,
        gender: state.gender,
        prove_image: state.prove_image,
        pay: state.pay,
        tel: state.tel,
        password: state.password,
        email: state.email,
        contact: state.contact,
        region: state.region,
        subject: state.subject,
        major: state.major,
        university: state.university,
        intro: state.intro,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <HeadButton />
      <SidebarMyPt />
      <Wrapper>
        학생
        <ModifyContextS.Provider value={{ state, dispatch }}>
          <Wrapper2 onSubmit={Signed}>
            <StusignageMy />
            <StusignnameMy />
            <StusigngenderMy />
            <StusignpayMy />
            <StusignregionMy />
            <StusigncontactMy />
            <StusignsubjectMy />
            <StusignpropergenderMy />
            <StusignisstuMy />
            <StusignemailMy />
            <StusignphoneMy />
            <StusignpasswordMy />
            <Buttonfame>
              <SaveNref type="submit" value="저장하기"></SaveNref>
              <SaveNref
                type="reset"
                onClick={() => dispatch({ type: "reset" })}
                value="원래대로"
              ></SaveNref>
            </Buttonfame>
          </Wrapper2>
        </ModifyContextS.Provider>
      </Wrapper>
    </div>
  );
};

export default MypageSe;
