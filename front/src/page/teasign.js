import React, { useReducer } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import HeadButton from "../component/layout/header/header";
import Teasignname from "../component/feature/teacherSign/name";
import Teasignsubject from "../component/feature/teacherSign/subject";
import Teasigngender from "../component/feature/teacherSign/gender";
import Teasignpay from "../component/feature/teacherSign/pay";
import Teasignregion from "../component/feature/teacherSign/region";
import Teasigncontact from "../component/feature/teacherSign/contact";
import Teasignattend from "../component/feature/teacherSign/attend";
import Teasignprove from "../component/feature/teacherSign/proveimage";
import Teasignintro from "../component/feature/teacherSign/intro";
import Teasignpassword from "../component/feature/teacherSign/password";
import Teasignemail from "../component/feature/teacherSign/email";
import Teasignphone from "../component/feature/teacherSign/phone";
import Teasignuni from "../component/feature/teacherSign/university";
import styled from "styled-components";
import { AuthEmail, AuthPhone } from "../component/shared/auth";

const Wrapper = styled.form`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #f6f4f3;
  padding-top: 30px;
`;

const SignBtns = styled.div`
  margin-top: 10px;
  margin-left: 55%;
`;

const SignBtn = styled.input`
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

export const CounterContext = React.createContext();

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

const Teasign = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const history = useHistory();

  const emailValidation = email => {
    const emailStat = AuthEmail(email);
    console.log(emailStat);
    return emailStat;
  };

  const phoneValidation = num => {
    const phoneStat = AuthPhone(num);
    console.log(phoneStat);
    return phoneStat;
  };

  const Signed = e => {
    e.preventDefault();
    if (
      state.name === "" ||
      state.tel === "" ||
      state.password === "" ||
      state.location === "" ||
      state.email === "" ||
      state.subject === ""
    ) {
      alert("필수 정보가 모두 기입되었는지 확인 해주세요.");
    } else if (!emailValidation(state.email)) {
      alert("이메일 형식이 올바르지 않습니다.");
    } else if (!phoneValidation(state.tel)) {
      alert("핸드폰 번호 형식이 올바르지 않습니다.( '-' 포함)");
    } else if (state.password.length < 8) {
      alert("비밀번호는 8자리 이상이어야 합니다.");
    } else if (state.password !== state.passcheck) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      alert("회원가입이 완료되었습니다.");
      axios.post("http://localhost:8080/teachers/join", {
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
      });
      history.push("/login");
    }
  };

  return (
    <div>
      <HeadButton />
      <CounterContext.Provider value={{ state, dispatch }}>
        <Wrapper onSubmit={Signed}>
          <Teasignname />
          <Teasignsubject />
          <Teasigngender />
          <Teasignpay />
          <Teasignregion />
          <Teasigncontact />
          <Teasignattend />
          <Teasignuni />
          <Teasignprove />
          <Teasignintro />
          <Teasignemail />
          <Teasignphone />
          <Teasignpassword />

          <SignBtns>
            <SignBtn type="submit" value="확인"></SignBtn>
            <SignBtn
              type="reset"
              onClick={() => dispatch({ type: "reset" })}
              value="취소"
            ></SignBtn>
          </SignBtns>
        </Wrapper>
      </CounterContext.Provider>
    </div>
  );
};

export default Teasign;
