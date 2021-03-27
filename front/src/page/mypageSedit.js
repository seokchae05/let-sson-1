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
  role: "",
  review: "",
  female: "",
  nonContact: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.email };
    case "setName":
      return { ...state, name: action.name };

    case "getData":
      return {
        ...state,
        name: action.name,
        email: action.email,
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
      dispatch({
        type: "getData",
        name: dataS.data.name,
        email: dataS.data.email,
      });
    };
    profileData();
  }, []);

  const EditSuccess = async (e) => {
    e.preventDefault();
    // if (state.password !== state.passcheck) {
    //   alert("비밀번호가 일치하지 않습니다.");
    // } else {
    //   alert("회원 정보 수정이 완료되었습니다.");
    // }
    console.log(state);

    await axios
      .put(
        "http://localhost:8080/students/modify",
        {
          id: state.id,
          name: state.name,
          tel: state.tel,
          email: state.email,
          region: state.region,
          subject: state.subject,
          age: state.age,
          contact: state.contact,
          male: state.male,
          proper_gender: state.proper_gender,
          goal: state.goal,
          intro: state.intro,
          pay: state.pay,
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
        console.log("수정 성공");
      })
      .catch(function (error) {
        console.log("수정 실패");
      });
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
            <StusignageMy />
            <StusignphoneMy />
            <StusignemailMy />
            <StusigngenderMy />
            <StusignpayMy />
            <StusignregionMy />
            <StusigncontactMy />
            <StusignsubjectMy />
            <StusignpropergenderMy />
            <StusignisstuMy />
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
