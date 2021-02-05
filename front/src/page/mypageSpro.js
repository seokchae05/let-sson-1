import React from "react"
import { Link } from "react-router-dom";
import SubmitS from "../component/feature/myPageSpro/submitS";
import HeadButtons from "../component/layout/header/header";
import SidebarMyPs from "../component/shared/myPageS/sidebarMyPs";
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

class MypageSp extends React.Component{
    state = {
        name: "ㅇㅅㅊ",
        subject: "english",
        location: "incheon",
        review: "성격 안좋음",
        introduce:"안녕하세요",
        goal:'행복하기',
  
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
    }else if (name === "subject") {
        this.setState((prevState) => ({ ...prevState, subject: value }));
    }else if (name === "location") {
        this.setState((prevState) => ({ ...prevState, location: value }));
    }else if (name === "review") {
        this.setState((prevState) => ({ ...prevState, review: value }));
    }else if (name === "introduce") {
        this.setState((prevState) => ({ ...prevState, introduce: value }));
    }else if (name === "goal") {
        this.setState((prevState) => ({ ...prevState, goal: value }));
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
                <SidebarMyPs/>
                <Wrapper>
                학생
                <SubmitS  
                state = {this.state}
                handleChange = {this.handleChange}/>
                <Buttonfame>
                    <SaveNref onClick={() => alert('저장이 완료되었습니다.')}>
                        저장하기
                    </SaveNref>
                <SaveNref name = "refresh" onClick = {this.returning}>되돌리기</SaveNref>
                </Buttonfame>
                </Wrapper>
            </form>
        )
    }
}



export default MypageSp;