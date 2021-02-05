import React from "react"
import styled from "styled-components";
import Certificate_smy from "./subjectmy_btns/certificate";
import Conversation_smy from "./subjectmy_btns/conversation";
import English_smy from "./subjectmy_btns/english";
import Essay_smy from "./subjectmy_btns/essay";
import Interview_smy from "./subjectmy_btns/interview";
import Introduction_smy from "./subjectmy_btns/introduction";
import Korean_smy from "./subjectmy_btns/korean";
import Lesson_smy from "./subjectmy_btns/lesson";
import Math_smy from "./subjectmy_btns/math";
import Programming_smy from "./subjectmy_btns/programming";
import Science_smy from "./subjectmy_btns/science";
import Social_smy from "./subjectmy_btns/social";

const Box = styled.div`
    padding-top : 10px;
    padding-bottom : 20px;
    padding-left : 20px;
    display : flex;
    flex-direction: column;
    justify-content: center;
    margin-left : 25%;
    margin-right : 25%;
    border-top : solid 3px #010440;
    background : white;
    margin-top : 30px;
`;

const Text = styled.div`
    margin-top : 10px;
    margin-bottom : 20px;
`;

const Btn = styled.input`
    background : white;
    width : 14%;
    height : 40px;
    border : 0.05em dashed #010440;
    margin : 1%;
`;

const Btns = styled.label`
    margin-left : 3%;
`;

class Stusignsubject_my extends React.Component{
    render(){
        return (
            <Box>
                <Text>어떤 과목을 배우시겠습니까?</Text>
                <label className="teaName">
                    <Korean_smy />
                    <English_smy />
                    <Social_smy />
                    <Math_smy />
                    <Science_smy />
                    <Certificate_smy />
                    <br/>
                    <Lesson_smy />
                    <Programming_smy />
                    <Introduction_smy />
                    <Essay_smy />
                    <Conversation_smy />
                    <Interview_smy />
                </label>
            </Box>
        );
    }
}

export default Stusignsubject_my;