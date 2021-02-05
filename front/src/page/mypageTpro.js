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
    background-color : #F6F6F6;
`;
const SaveNref = styled.button`
    border : solid 1px black;
    width:200px;
    height:50px;
    margin-left : 50px;
    margin-right : 50px;
    margin-bottom: 100px;
`

const Buttonfame = styled.div`
    margin-left: 30%;
    margin-right: 30%;
    margin-top:50px;
`



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
                <SubmitT 
                state = {this.state}
                handleChange = {this.handleChange} />
                   <Buttonfame>
                    <SaveNref type ="submit" onClick={() => alert('저장이 완료되었습니다.')}>저장하기</SaveNref>
                    <SaveNref type = "refresh" onClick = {this.returning}>되돌리기</SaveNref>
                </Buttonfame>
                </Wrapper>
            </form>
        )
    }
}


export default MypageTp;