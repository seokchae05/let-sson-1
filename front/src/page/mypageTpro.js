import React from "react";
import SubmitT from "../component/feature/myPageTpro/submitT";
import HeadButtons from "../component/layout/header/header";
import SidebarMyPt from "../component/shared/myPageT/sidebarMyPt";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
    margin: 0;   
    padding : 0; 
    width:100%;
    height:100%;
    box-sizing: border-box;
    background-color : #F6F4F3;
`;
const SaveNref = styled.button`
    height:45px;
    width : 100px;
    border-top : solid 3px #010440;
    border-left : none;
    border-right : none;
    border-bottom : none;
    background-color: white;
    font-size: 16px;
    margin-top : 30px;
    margin-left : 30px;
    margin-right: 30px;
    margin-bottom : 30px;
`

const Buttonfame = styled.div`
    margin-left: 50%;
    margin-top: 20px;
`

const Wrapper2 = styled.div`
    width : 85%;
`;

class MypageTp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "이석채",
            school: "인하",
            major: "행정",
            subject: "english",
            location: "incheon",
            career:"이",
            introduce:"석",
            plan:"채",
        }
        this.tmp = this.state
    }
  /*
    getData = async () => {
        const data = await axios.get("http://www.google.com")//학생 회원가입 데이터
        this.setState(data);
    }

    componentDidMount() {
        this.getData();
      }
*/
    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        if (name === "name") {
            this.setState((prevState) => ({ ...prevState, name: value }));
        }else if (name === "school") {
            this.setState((prevState) => ({ ...prevState, school: value }));
        }else if (name === "major") {
            this.setState((prevState) => ({ ...prevState, major: value }));
        }else if (name === "subject") {
            this.setState((prevState) => ({ ...prevState, subject: value }));
        }else if (name === "location") {
            this.setState((prevState) => ({ ...prevState, location: value }));
        }else if (name === "career") {
            this.setState((prevState) => ({ ...prevState, career: value }));
        }else if (name === "introduce") {
            this.setState((prevState) => ({ ...prevState, introduce: value }));
        }else if (name === "plan") {
            this.setState((prevState) => ({ ...prevState, plan: value }));
        }
    }
    
    savedataT  = (e) => {
        console.log(this.state);
        e.preventDefault();
        }

    returning = (e) => {
        this.setState(this.tmp);
    }   
    

    render(){
        return(
            <form onSubmit={this.savedataT}>
                <HeadButtons/>
                <SidebarMyPt/>
                <Wrapper >
                선생님
                    <Wrapper2>
                       <SubmitT 
                         state = {this.state}
                         handleChange = {this.handleChange} />
                       <Buttonfame>
                         <SaveNref type ="submit" onClick={() => alert('저장이 완료되었습니다.')}>저장하기</SaveNref>
                         <SaveNref type = "refresh" onClick = {this.returning}>되돌리기</SaveNref>
                      </Buttonfame>
                    </Wrapper2>
                </Wrapper>
            </form>
        )
    }
}


export default MypageTp;