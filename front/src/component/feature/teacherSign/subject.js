import React from "react"
import styled from "styled-components";
import Certificate from "./subjectbtns/certificate";
import Conversation from "./subjectbtns/conversation";
import English from "./subjectbtns/english";
import Essay from "./subjectbtns/essay";
import Interview from "./subjectbtns/interview";
import Introduction from "./subjectbtns/introduction";
import Korean from "./subjectbtns/korean";
import Lesson from "./subjectbtns/lesson";
import Math from "./subjectbtns/math";
import Programming from "./subjectbtns/programming";
import Science from "./subjectbtns/science";
import Social from "./subjectbtns/social";

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


class Teasignsubject extends React.Component{
    constructor(props) {
        super(props);
        this.state = { background: 'white', textColor: 'black' };
      }

      changeColor = () => {
          if(this.state.background === 'white'){
            this.setState({
                background: '#010440',
                textColor: 'white'
              }); // 이후 value값 넘겨주는거 추가
          }
          else{
            this.setState({
                background: 'white',
                textColor: 'black'
              }); // 이후 value값 넘겨주는거 추가
          }
      }

    render(){
        return (
            <Box>
                <Text>어떤 과목 선생님이신가요?</Text>
                <Btns className="teaName">
                    <Korean />
                    <English />
                    <Social />
                    <Math />
                    <Science />
                    <Certificate />
                    <br/>
                    <Lesson />
                    <Programming />
                    <Introduction />
                    <Essay />
                    <Conversation />
                    <Interview />
                </Btns>
            </Box>
        );
    }
}

export default Teasignsubject;