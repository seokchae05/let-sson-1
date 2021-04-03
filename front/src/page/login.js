import React ,{useReducer}from "react";
import { Link } from "react-router-dom";
import HeadButton from "../component/layout/header/header";
import styled from "styled-components";
import axios from "axios";
import StuLogin from "../component/feature/login/stulogin";
import TeaLogin from "../component/feature/login/tealogin";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: #f6f4f3;
  padding-top: 30px;
`;

const Notlog = styled.div`
  left: 10%;
`;

const Notlog1 = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  top: 70%;
  margin-left: 35%;
  margin-top: 75px;
`;

const Notlog2 = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  margin-left: 37%;
  top: 80%;
  margin-top: 95px;
`;

const NotlogText = styled.div`
  display: inline;
  left: 50%;
`;
const NotlogBtn = styled.button`
  background-color: #f6f4f3;
  height: 10px;
  text-decoration: underline #010440;
  text-underline-position: under;
`;

export const LoginContext = React.createContext();

const INITIAL_STATE = {
  telT:"",
  passwordT:"",
  telS:'',
  passwordS:"",
}

const reducer = (state, action) => {
switch(action.type){
  case "checkTelT":
    return { ...state, telT : action.telT };
  case "checkPasswordT":
    return { ...state, passwordT: action.passwordT };
  case "checkTelS":
    return { ...state, telS : action.telS };
  case "checkPasswordS":
    return { ...state, passwordS: action.passwordS };  
}
}

const Login = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <HeadButton />
      <LoginContext.Provider value={{ state, dispatch }}>
      <Wrapper>
        <StuLogin />
        <TeaLogin />
        <Notlog>
          <Notlog1>
            <NotlogText>계정이 없으시다면?</NotlogText>
            <Link to="/stusign">
              <NotlogBtn>학생가입</NotlogBtn>
            </Link>
            <Link to="/teasign">
              <NotlogBtn>선생님가입</NotlogBtn>
            </Link>
          </Notlog1>
          <Notlog2>
            <NotlogText>비밀번호를 잊으셨다면?</NotlogText>
            <Link to="/findid">
              <NotlogBtn>아이디찾기</NotlogBtn>
            </Link>
            <Link to="/findpassword">
              <NotlogBtn>비밀번호찾기</NotlogBtn>
            </Link>
          </Notlog2>
        </Notlog>
      </Wrapper>
      </LoginContext.Provider>
    </div>
  );
};

export default Login;
