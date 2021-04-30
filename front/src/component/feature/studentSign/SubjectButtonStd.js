import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { CounterContext } from "../../../page/stusign";

const Button = styled.input`
  background: white;
  width: 13%;
  height: 40px;
  border: 1px dashed #010440;
  margin: 1%;
  cursor: pointer;
`;

const SubjectButtonStd = ({ isclicked, handleclick, subjectName }) => {
  const [background, setBackground] = useState("white");
  const [textcolor, setTextcolor] = useState("black");

  const { state, dispatch } = useContext(CounterContext);

  useEffect(() => {
    if (state.subject === subjectName) {
      setBackground("#010440");
      setTextcolor("white");
    } else {
      setBackground("white");
      setTextcolor("#010440");
    }
  }, [isclicked, state]);

  const handleChange = (e) => {
    e.preventDefault();
    if (isclicked) {
      setBackground("#010440");
      setTextcolor("white");
    } else {
      setBackground("white");
      setTextcolor("#010440");
    }
    handleclick();
    dispatch({ type: "setSubject", subject: e.currentTarget.value });
  };
  return (
    <Button
      type="button"
      name="subject"
      style={{ backgroundColor: background, color: textcolor }}
      onClick={handleChange}
      value={subjectName}
    ></Button>
  );
};

export default SubjectButtonStd;
