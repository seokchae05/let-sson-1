import React from "react"
import HeadButton from "../component/layout/header/header";
import Stusignage from "../component/feature/studentSign/age";
import Stusigngender from "../component/feature/studentSign/gender";
import Stusignisstu from "../component/feature/studentSign/isstudent";
import Stusignname from "../component/feature/studentSign/name";
import Stusignpropergender from "../component/feature/studentSign/propergender";
import Stusignregion from "../component/feature/studentSign/region";
import Stusigncontact from "../component/feature/studentSign/contact";
import Stusignphone from "../component/feature/studentSign/phone";
import Stusignpassword from "../component/feature/studentSign/password";
import Stusignemail from "../component/feature/studentSign/email";
import Stusignpay from "../component/feature/studentSign/pay";
import Stusignsubject from "../component/feature/studentSign/subject";
import styled from "styled-components";
import SignBtnn from "../component/feature/studentSign/button";

const Wrapper = styled.form`
    margin: 0;   
    padding : 0; 
    width:100%;
    height:100%;
    box-sizing: border-box;
    background-color : #F6F6F6;
`;

const SignBtns = styled.div`
    margin-top: 10px;
    margin-left : 55%;
`;

const SignBtn = styled.input`
    height:45px;
    width : 100px;
    border : solid 1px black;
    background-color: white;
    font-size: 16px;
    margin-top : 30px;
    margin-left : 30px;
    margin-right: 30px;
    margin-bottom : 30px;
`;


class Stusign extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            issubmit : false
        };
    }

    Signed = e => {
        alert('회원가입이 완료되었습니다.');
    }
    
    render(){
        return (
            <div>
                <HeadButton />
                <Wrapper onSubmit={this.Signed}>
                    <Stusignname />
                    <Stusignisstu />
                    <Stusignage />
                    <Stusigngender />
                    <Stusignpropergender />
                    <Stusignregion />
                    <Stusignsubject />
                    <Stusignpay />
                    <Stusigncontact />
                    <Stusignphone />
                    <Stusignpassword />
                    <Stusignemail />

                    <SignBtns>
                        <SignBtn type="submit" onClick={this.Signed} value="확인"></SignBtn>
                        <SignBtn type="reset" value="취소"></SignBtn>
                    </SignBtns>
                </Wrapper>
            </div>

        );
    }
}

export default Stusign;