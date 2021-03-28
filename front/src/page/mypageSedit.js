import React, { useReducer, useEffect } from "react";
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

export const ModifyContextS = React.createContext();

const INITIAL_STATE = {
  name: "",
  tel: "",
  email: "",
  region: "",
  subject: "",
  age: "",
  contact: "",
  male: "",
  proper_gender: "",
  goal: "",
  intro: "",
  pay: "",
  is_stu: "",
  password: "",
  passcheck: "",
  role: "",
  review: "",
  female: "",
  nonContact: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    case "setAge":
      return { ...state, age: action.age };
    case "setIsstu":
      return { ...state, is_stu: action.is_stu };
    case "setMale":
      return { ...state, male: action.male, female: action.female };
    case "setFemale":
      return { ...state, female: action.female, male: action.male };
    case "setPropergender":
      return { ...state, proper_gender: action.proper_gender };
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
      return {
        ...state,
        contact: action.contact,
        noncontact: action.noncontact,
      };
    case "setNoncontact":
      return {
        ...state,
        noncontact: action.noncontact,
        contact: action.contact,
      };
    case "setSubject":
      return { ...state, subject: action.subject };
    case "getData":
      return {
        ...state,
        tel: action.tel,
        name: action.name,
        email: action.email,
        region: action.region,
        subject: action.subject,
        age: action.age,
        contact: action.contact,
        male: action.male,
        proper_gender: action.proper_gender,
        pay: action.pay,
        is_stu: action.is_stu,
        role: action.role,
        female: action.female,
        nonContact: action.nonContact,
      };
    case "reset":
      return INITIAL_STATE;
    default:
      return state;
  }
};

const MypageSe = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    const profileData = async () => {
      const dataS = await axios.get(
        "http://localhost:8080/students/studentInfo",
        {
          headers: {
            "X-AUTH-TOKEN": localStorage.getItem("token"),
          },
        }
      );
      console.log(dataS);
      dispatch({
        type: "getData",
        name: dataS.data.name,
        tel: dataS.data.tel,
        email: dataS.data.email,
        region: dataS.data.region,
        subject: dataS.data.subject,
        age: dataS.data.age,
        contact: dataS.data.contact,
        male: dataS.data.male,
        proper_gender: dataS.data.proper_gender,
        pay: dataS.data.pay,
        is_stu: dataS.data.is_stu,
        password: "",
        role: dataS.data.role,
        female: dataS.data.female,
        nonContact: dataS.data.nonContact,
      });
    };
    profileData();
  }, []);

  const EditSuccess = async (e) => {
    e.preventDefault();
    if (state.password === "" || state.passcheck === "") {
      alert("비밀번호를 입력해주세요.");
    } else if (state.password !== state.passcheck) {
      alert("비밀번호를 확인해주세요.");
    } else {
      console.log(state);

      await axios
        .put(
          "http://localhost:8080/students/basicModify",
          {
            id: state.id,
            name: state.name,
            tel: state.tel,
            email: state.email,
            region: state.region,
            subject: state.subject,
            age: parseInt(state.age),
            contact: state.contact,
            male: state.male,
            proper_gender: state.proper_gender,
            goal: state.goal,
            intro: state.intro,
            pay: parseInt(state.pay),
            is_stu: state.is_stu,
            password: state.password,
            role: state.role,
            review: state.review,
            female: state.female,
            nonContact: state.nonContact,
          },
          {
            headers: {
              "X-AUTH-TOKEN": localStorage.getItem("token"),
            },
          }
        )
        .then(function (response) {
          alert("회원정보가 수정되었습니다.");
        })
        .catch(function (error) {
          alert("회원정보 수정에 실패하였습니다.");
        });
    }
  };

  return (
    <div>
      <HeadButton />
      <SidebarMyPt />
      <Wrapper>
        학생
        <ModifyContextS.Provider value={{ state, dispatch }}>
          <Wrapper2 onSubmit={EditSuccess}>
            <StusignnameMy />
            <StusignisstuMy />
            <StusignageMy />
            <StusigngenderMy />
            <StusignpropergenderMy />
            <StusignregionMy />
            <StusignsubjectMy />
            <StusignpayMy />
            <StusigncontactMy />
            <StusignphoneMy />
            <StusignemailMy />
            <StusignpasswordMy />
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
        </ModifyContextS.Provider>
      </Wrapper>
    </div>
  );
};

export default MypageSe;
