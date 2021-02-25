import React, { useState, useReducer, useContext } from "react";
import styled from "styled-components";
import Certificate_t from "./subjectbtns/certificate";
import Conversation_t from "./subjectbtns/conversation";
import English_t from "./subjectbtns/english";
import Essay_t from "./subjectbtns/essay";
import Interview_t from "./subjectbtns/interview";
import Introduction_t from "./subjectbtns/introduction";
import Korean_t from "./subjectbtns/korean";
import Lesson_t from "./subjectbtns/lesson";
import Math_t from "./subjectbtns/math";
import Programming_t from "./subjectbtns/programming";
import Science_t from "./subjectbtns/science";
import Social_t from "./subjectbtns/social";

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
      <Text>어떤 과목의 선생님이신가요?</Text>
      <Btns>
        <Korean_t isclicked={isclicked} handleclick={handleclick} />
        <English_t isclicked={isclicked} handleclick={handleclick} />
        <Social_t isclicked={isclicked} handleclick={handleclick} />
        <Math_t isclicked={isclicked} handleclick={handleclick} />
        <Science_t isclicked={isclicked} handleclick={handleclick} />
        <Certificate_t isclicked={isclicked} handleclick={handleclick} />
        <br />
        <Lesson_t isclicked={isclicked} handleclick={handleclick} />
        <Programming_t isclicked={isclicked} handleclick={handleclick} />
        <Introduction_t isclicked={isclicked} handleclick={handleclick} />
        <Essay_t isclicked={isclicked} handleclick={handleclick} />
        <Conversation_t isclicked={isclicked} handleclick={handleclick} />
        <Interview_t isclicked={isclicked} handleclick={handleclick} />
      </Btns>
    </Box>
  );
};

export default Stusignsubject;
