import React from "react"
import styled from "styled-components";
import Certificate_s from "./subjectbtns/certificate";
import Conversation_s from "./subjectbtns/conversation";
import English_s from "./subjectbtns/english";
import English from "./subjectbtns/english";
import Essay_s from "./subjectbtns/essay";
import Interview_s from "./subjectbtns/interview";
import Introduction_s from "./subjectbtns/introduction";
import Korean_s from "./subjectbtns/korean";
import Korean from "./subjectbtns/korean";
import Lesson_s from "./subjectbtns/lesson";
import Math_s from "./subjectbtns/math";
import Programming_s from "./subjectbtns/programming";
import Science_s from "./subjectbtns/science";
import Social_s from "./subjectbtns/social";

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


class Stusignsubject extends React.Component{
    constructor(props) {
        super(props);
      }

    render(){
        return (
            <Box>
                <Text>어떤 과목을 배우시겠습니까?</Text>
                <Btns className="teaName">
                    <Korean_s />
                    <English_s />
                    <Social_s />
                    <Math_s />
                    <Science_s />
                    <Certificate_s />
                    <br/>
                    <Lesson_s />
                    <Programming_s />
                    <Introduction_s />
                    <Essay_s />
                    <Conversation_s />
                    <Interview_s />
                </Btns>
            </Box>
        );
    }
}

export default Stusignsubject;