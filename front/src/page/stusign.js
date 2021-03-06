import React, { useReducer } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import HeadButton from "../component/layout/header/header";
import Stusignname from "../component/feature/studentSign/name";
import styled from "styled-components";
import Stusignage from "../component/feature/studentSign/age";
import Stusignisstu from "../component/feature/studentSign/isstudent";
import Stusigngender from "../component/feature/studentSign/gender";
import Stusignpropergender from "../component/feature/studentSign/propergender";
import Stusignregion from "../component/feature/studentSign/region";
import Stusignsubject from "../component/feature/studentSign/subject";
import Stusignpay from "../component/feature/studentSign/pay";
import Stusignphone from "../component/feature/studentSign/phone";
import Stusigncontact from "../component/feature/studentSign/contact";
import Stusignemail from "../component/feature/studentSign/email";
import Stusignpassword from "../component/feature/studentSign/password";

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
  is_stu: "",
  age: "",
  gender: "",
  proper_gender: "",
  pay: "",
  tel: "",
  password: "",
  passcheck: "",
  email: "",
  contact: "",
  region: "",
  subject: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    case "setAge":
      return { ...state, age: action.age };
    case "setIsstu":
      return { ...state, is_stu: action.is_stu };
    case "setGender":
      return { ...state, gender: action.gender };
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
      return { ...state, contact: action.contact };
    case "setSubject":
      return { ...state, subject: action.subject };
    case "reset":
      return INITIAL_STATE;
    default:
      return state;
  }
};

const Stusign = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const history = useHistory();

  const Signed = (e) => {
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
    } else if (state.password !== state.passcheck) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      alert("회원가입이 완료되었습니다.");
      axios.post("http://localhost:8080/students/join", {
        name: state.name,
        is_stu: state.is_stu,
        age: state.age,
        gender: state.gender,
        proper_gender: state.proper_gender,
        pay: state.pay,
        tel: state.tel,
        password: state.password,
        email: state.email,
        contact: state.contact,
        region: state.region,
        subject: state.subject,
      });
      history.push("/login");
    }
  };

  return (
    <div>
      <HeadButton />
      <CounterContext.Provider value={{ state, dispatch }}>
        <Wrapper onSubmit={Signed}>
          <Stusignname />
          <Stusignisstu />
          <Stusignage />
          <Stusigngender />
          <Stusignpropergender />
          <Stusignregion />
          <Stusignsubject />
          <Stusignpay />
          <Stusigncontact />
          <Stusignphone />
          <Stusignemail />
          <Stusignpassword />

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

export default Stusign;
