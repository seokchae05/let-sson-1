import React from "react";
import { Link } from "react-router-dom";
import Dropbtn from "./dropbtn";
import mypic from "./logo1.png";
import styled from "styled-components";
import "./header.css";

const MainImage = styled.img`
  width: 150px;
  height: 75px;
`;

function HeadButtons() {
  const logout = (e) => {
    localStorage.removeItem("token");
  };

  return (
    <header>
      <div className="head">
        <div className="logoimage">
          <Link to="/">
            <button>
              <MainImage src={mypic} />
            </button>
          </Link>
        </div>
        <div className="HeadButtons">
          <Link to="/postboxs">
            <button>신청내역함</button>
          </Link>
          <Link to="/findstudent">
            <button>학생찾기</button>
          </Link>
          <Link to="/findteacher">
            <button>선생님찾기</button>
          </Link>
          <Dropbtn />
          <Link to="/login">
            <button>선생님로그인</button>
          </Link>
          <Link to="/login2">
            <button>학생로그인</button>
          </Link>
          <Link to="/mypaget/profile">
            <button>마이페이지</button>
          </Link>
          <button onClick={logout}>로그아웃</button>
        </div>
      </div>

      <hr></hr>
    </header>
  );
}

export default HeadButtons;
