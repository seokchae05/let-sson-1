import React, {useState, useReducer, useContext} from "react";
import styled from "styled-components";
import { CounterContext } from "../../../../page/stusign";

const Btn = styled.input`
    background : white;
    width : 13%;
    height : 40px;
    border : 1px dashed #010440;
    margin : 1%;
`;


const Certificate_s = ({select}) => {
    const [background, setBackground] = useState("");
    const [textcolor, setTextcolor] = useState("");

    const { state, dispatch } = useContext(CounterContext);

    const handleChange = e =>{
        e.preventDefault();
        if(background === 'white' && state.subject === ""){
            setBackground('#010440');
            setTextcolor('white');
            dispatch({ type: "setSubject", subject: e.currentTarget.value });
        }
        else{
            setBackground('white');
            setTextcolor('#010440');
            dispatch({ type: "setSubject", subject: "" });
        }
    }

    return (
        <Btn type="button" 
        name="subject"
        style={{ backgroundColor: background, color: textcolor }} 
        onClick={handleChange} 
        value="자격증"></Btn>

    )
}

export default Certificate_s;