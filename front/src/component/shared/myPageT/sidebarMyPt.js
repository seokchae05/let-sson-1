import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 5px;
  float: right;
  width: 250px;
  box-sizing: border-box;
  border: 1px solid white;
  display: grid;
  background-color: white;
  positon: flow;
`;

const SideB = styled.button`
  border: solid 1px black;
  width: 230px;
  height: 100px;
  margin: 10px;
`;
const SidebarMyP = () => {
  const withdraw = (e) => {
    if (window.confirm("정말로 탈퇴하시겠습니까?")) {
      axios.delete("http://localhost:8080/students/delete", {
        headers: {
          "X-AUTH-TOKEN": localStorage.getItem("token"),
        },
      });
    }
  };

  return (
    <div>
      <Wrapper>
        <Link to="/mypaget/profile">
          <SideB>프로필 작성</SideB>
        </Link>
        <Link to="/mypaget/edit">
          <SideB>수정하기</SideB>
        </Link>
        <SideB onClick={withdraw}>탈퇴하기</SideB>
      </Wrapper>
    </div>
  );
};

export default SidebarMyP;
