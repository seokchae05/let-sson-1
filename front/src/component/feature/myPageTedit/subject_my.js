import React from "react"
import styled from "styled-components";
import Certificate_tmy from "./subjectmy_btns/certificate";
import Conversation_tmy from "./subjectmy_btns/conversation";
import English_tmy from "./subjectmy_btns/english";
import Essay_tmy from "./subjectmy_btns/essay";
import Interview_tmy from "./subjectmy_btns/interview";
import Introduction_tmy from "./subjectmy_btns/introduction";
import Korean_tmy from "./subjectmy_btns/korean";
import Lesson_tmy from "./subjectmy_btns/lesson";
import Math_tmy from "./subjectmy_btns/math";
import Programming_tmy from "./subjectmy_btns/programming";
import Science_tmy from "./subjectmy_btns/science";
import Social_tmy from "./subjectmy_btns/social";

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
    width : 13%;
    height : 40px;
    border : 0.05em dashed #010440;
    margin : 1%;
`;

const Btns = styled.label`
    margin-left : 3%;
`;

class Teasignsubject_my extends React.Component{
    render(){
        return (
            <Box>
                <Text>어떤 과목 선생님이신가요?</Text>
                <label className="teaName">
                    <Korean_tmy />
                    <English_tmy />
                    <Social_tmy />
                    <Math_tmy />
                    <Science_tmy />
                    <Certificate_tmy />
                    <br/>
                    <Lesson_tmy />
                    <Programming_tmy />
                    <Introduction_tmy />
                    <Essay_tmy />
                    <Conversation_tmy />
                    <Interview_tmy />
                </label>
            </Box>
        );
    }
}

export default Teasignsubject_my;