import React, { useState, useReducer, useContext, useEffect } from "react";
import styled from "styled-components";
import { CounterContext } from "../../../../page/stusign";

const Btn = styled.input`
  background: white;
  width: 13%;
  height: 40px;
  border: 1px dashed #010440;
  margin: 1%;
`;

const Certificate_s = ({ isclicked, handleclick }) => {
  const [background, setBackground] = useState("white");
  const [textcolor, setTextcolor] = useState("black");

  const { state, dispatch } = useContext(CounterContext);

  useEffect(() => {
    console.log(state.subject);
    if (state.subject === "자격증") {
      setBackground("#010440");
      setTextcolor("white");
    } else {
      setBackground("white");
      setTextcolor("#010440");
    }
  }, [isclicked, state]);

  const handleChange = (e) => {
    e.preventDefault();
    handleclick();
    if (isclicked) {
      setBackground("#010440");
      setTextcolor("white");
    } else {
      setBackground("white");
      setTextcolor("#010440");
    }
    dispatch({ type: "setSubject", subject: e.currentTarget.value });
  };

  return (
    <Btn
      type="button"
      name="subject"
      style={{ backgroundColor: background, color: textcolor }}
      onClick={handleChange}
      value="자격증"
    ></Btn>
  );
};

export default Certificate_s;
