import React, { useState, useReducer, useContext } from "react";
import styled from "styled-components";
import Certificate_s from "./subjectbtns/certificate";
import Conversation_s from "./subjectbtns/conversation";
import English_s from "./subjectbtns/english";
import Essay_s from "./subjectbtns/essay";
import Interview_s from "./subjectbtns/interview";
import Introduction_s from "./subjectbtns/introduction";
import Korean_s from "./subjectbtns/korean";
import Lesson_s from "./subjectbtns/lesson";
import Math_s from "./subjectbtns/math";
import Programming_s from "./subjectbtns/programming";
import Science_s from "./subjectbtns/science";
import Social_s from "./subjectbtns/social";

const Box = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25%;
  margin-right: 25%;
  border-top: solid 3px #010440;
  background: white;
  margin-top: 30px;
`;

const Text = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Btn = styled.input`
  background: white;
  width: 14%;
  height: 40px;
  border: 0.05em dashed #010440;
  margin: 1%;
`;

const Btns = styled.label`
  margin-left: 3%;
`;

const Stusignsubject = () => {
  const [isclicked, setClicked] = useState(false);

  const handleclick = () => {
    setClicked((prestate) => !prestate);
  };

  return (
    <Box>
      <Text>어떤 과목을 배우시겠습니까?</Text>
      <Btns>
        <Korean_s isclicked={isclicked} handleclick={handleclick} />
        <English_s isclicked={isclicked} handleclick={handleclick} />
        <Social_s isclicked={isclicked} handleclick={handleclick} />
        <Math_s isclicked={isclicked} handleclick={handleclick} />
        <Science_s isclicked={isclicked} handleclick={handleclick} />
        <Certificate_s isclicked={isclicked} handleclick={handleclick} />
        <br />
        <Lesson_s isclicked={isclicked} handleclick={handleclick} />
        <Programming_s isclicked={isclicked} handleclick={handleclick} />
        <Introduction_s isclicked={isclicked} handleclick={handleclick} />
        <Essay_s isclicked={isclicked} handleclick={handleclick} />
        <Conversation_s isclicked={isclicked} handleclick={handleclick} />
        <Interview_s isclicked={isclicked} handleclick={handleclick} />
      </Btns>
    </Box>
  );
};

export default Stusignsubject;
