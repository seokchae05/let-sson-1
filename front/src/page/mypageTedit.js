import React, { useEffect, useReducer } from "react";
import HeadButton from "../component/layout/header/header";
import HeadSaveNrefs from "../component/layout/header/header";
import SidebarMyPt from "../component/shared/myPageT/sidebarMyPt";
import styled from "styled-components";
import TeasignnameMy from "../component/feature/myPageTedit/name_my";
import TeasignsubjectMy from "../component/feature/myPageTedit/subject_my";
import TeasignregionMy from "../component/feature/myPageTedit/region_my";
import TeasignpayMy from "../component/feature/myPageTedit/pay_my";
import TeasigngenderMy from "../component/feature/myPageTedit/gender_my";
import TeasigncontactMy from "../component/feature/myPageTedit/contact_my";
import TeasignattendMy from "../component/feature/myPageTedit/attend_my";
import TeasignproveMy from "../component/feature/myPageTedit/proveimage_my";
import TeasignintroMy from "../component/feature/myPageTedit/intro_my";
import TeasignphoneMy from "../component/feature/myPageTedit/phone_my";
import TeasignpasswordMy from "../component/feature/myPageTedit/password_my";
import TeasignemailMy from "../component/feature/myPageTedit/email_my";
import TeasignuniMy from "../component/feature/myPageTedit/university_my";
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

const Buttonfame = styled.div`
  margin-top: 10px;
  margin-left: 55%;
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
const Wrapper2 = styled.form`
  width: 85%;
`;

export const ModifyContextT = React.createContext();

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
    case "getData":
      return {
        ...state,
        gender: action.gender,
        name: action.name,
        age: action.age,
        region: action.region,
        password: action.password,
        passcheck: action.passcheck,
        pay: action.pay,
        tel: action.tel,
        email: action.email,
        contact: action.contact,
        subject: action.subject,
        is_attend: action.is_attend,
        university: action.university,
        major: action.major,
        prove_image: action.prove_image,
        intro: action.intro,
      };
    default:
      return state;
  }
};

const MypageTe = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    const profileData = async () => {
      const dataT = await axios.get("http://localhost:8080/teachers/2");
      dispatch({
        type: "getData",
        name: dataT.data.name,
        gender: dataT.data.gender,
        pay: dataT.data.pay,
        tel: dataT.data.tel,
        password: "",
        passcheck: "",
        email: dataT.data.email,
        contact: dataT.data.contact,
        is_attend: dataT.data.is_attend,
        intro: dataT.data.intro,
        university: dataT.data.university,
        major: dataT.data.major,
        prove_image: dataT.data.prove_image,
        subject: dataT.data.subject,
      });
      console.log(dataT.data);
    };
    profileData();
  }, []);

  const EditSuccess = e => {
    e.preventDefault();
    if (state.password !== state.passcheck) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      alert("회원 정보 수정이 완료되었습니다.");
    }

    axios
      .put("http://localhost:8080/teachers/2", {
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
        선생님
        <ModifyContextT.Provider value={{ state, dispatch }}>
          <Wrapper2 onSubmit={EditSuccess}>
            <TeasignnameMy />
            <TeasignsubjectMy />
            <TeasigngenderMy />
            <TeasignpayMy />
            <TeasignregionMy />
            <TeasigncontactMy />
            <TeasignattendMy />
            <TeasignuniMy />
            <TeasignproveMy />
            <TeasignintroMy />
            <TeasignemailMy />
            <TeasignphoneMy />
            <TeasignpasswordMy />
            <Buttonfame>
              <SaveNref type="submit" value="저장하기">
                저장하기
              </SaveNref>
              <SaveNref
                type="reset"
                onClick={() => dispatch({ type: "reset" })}
                value="원래대로"
              >
                원래대로
              </SaveNref>
            </Buttonfame>
          </Wrapper2>
        </ModifyContextT.Provider>
      </Wrapper>
    </div>
  );
};

export default MypageTe;
