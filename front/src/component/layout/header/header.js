import React from "react";
import { Redirect, Link } from "react-router-dom";
import Dropbtn from "./dropbtn";
import mypic from "./logo1.png";
import styled from "styled-components";
import "./header.css";

const HeadButton = styled.span`
  float: right;
  display: inline-block;
  vertical-align: middle;
  justify-content: right;
  margin-right: 20px;
`;

function HeadButtons() {
  const user = localStorage.getItem("token");

  const logout = (e) => {
    localStorage.removeItem("token");
    <Redirect to="/" />;
  };

  return (
    <header>
      <span className="logoimage">
        <Link to="/">
          <button>
            <img src={mypic} />
          </button>
        </Link>
      </span>
      <HeadButton>
        <span>
          <Link to="/postboxs">
            <button>신청내역함</button>
          </Link>
          <Link to="/findstudent">
            <button>학생찾기</button>
          </Link>
          <Link to="/findteacher">
            <button>선생님찾기</button>
          </Link>
        </span>
        {user ? (
          <span>
            <Link to="/mypaget/profile">
              <button>마이페이지</button>
            </Link>
            <button onClick={logout}>로그아웃</button>
          </span>
        ) : (
          <span>
            <Dropbtn />
            <Link to="/login">
              <button>로그인</button>
            </Link>
          </span>
        )}
      </HeadButton>
    </header>
  );
}

export default HeadButtons;
