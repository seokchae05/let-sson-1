import React from "react"
import HeadButton from "../component/layout/header/header";
import Teasignname from "../component/feature/teacherSign/name";
import Teasignsubject from "../component/feature/teacherSign/subject";
import Teasigngender from "../component/feature/teacherSign/gender";
import Teasignpay from "../component/feature/teacherSign/pay";
import Teasignregion from "../component/feature/teacherSign/region";
import Teasigncontact from "../component/feature/teacherSign/contact";
import Teasignattend from "../component/feature/teacherSign/attend";
import Teasignprove from "../component/feature/teacherSign/proveimage";
import Teasignintro from "../component/feature/teacherSign/intro";
import Teasignpassword from "../component/feature/teacherSign/password";
import Teasignemail from "../component/feature/teacherSign/email";
import Teasignphone from "../component/feature/teacherSign/phone";
import Teasignuni from "../component/feature/teacherSign/university";
import styled from "styled-components";

const Wrapper = styled.form`
    margin: 0;   
    padding : 0; 
    width:100%;
    height:100%;
    box-sizing: border-box;
    background-color : #F6F4F3;
    padding-top : 30px;
`;

const SignBtns = styled.div`
    margin-top: 10px;
    margin-left : 55%;
`;

const SignBtn = styled.input`
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
`;

class Teasign extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            gender : "",
            pay : 0,
            tel : "",
            password : "",
            passcheck : "",
            email : "",
            contact : "",
            isattend : "",
            intro : "",
            university : "",
            major : "",
            city : "",
            proveimage : ""
        };
    }

    Signed = e => {
        e.preventDefault();
        if(this.state.password !== this.state.passcheck){
            alert('비밀번호가 일치하지 않습니다.');
        }else{
            alert('회원가입이 완료되었습니다.');
        }
        console.log(this.state);
        // axios.post(this.state)
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        if (name === "name") {
          this.setState((prevState) => ({ ...prevState, name: value }));
        }else if (name === "gender") {
            this.setState((prevState) => ({ ...prevState, gender: value }));
        }else if (name === "stupropergender") {
            this.setState((prevState) => ({ ...prevState, stupropergender: value }));
        }else if (name === "pay") {
            this.setState((prevState) => ({ ...prevState, pay: value }));
        }else if (name === "tel") {
            this.setState((prevState) => ({ ...prevState, tel: value }));
        }else if (name === "password") {
            this.setState((prevState) => ({ ...prevState, password: value }));
        }else if (name === "passcheck") {
            this.setState((prevState) => ({ ...prevState, passcheck: value }));
        }else if (name === "email") {
            this.setState((prevState) => ({ ...prevState, email: value }));
        }else if (name === "contact") {
            this.setState((prevState) => ({ ...prevState, contact: value }));
        }else if (name === "isattend") {
            this.setState((prevState) => ({ ...prevState, isattend: value }));
        }else if (name === "intro") {
            this.setState((prevState) => ({ ...prevState, intro: value }));
        }else if (name === "university") {
            this.setState((prevState) => ({ ...prevState, university: value }));
        }else if (name === "major") {
            this.setState((prevState) => ({ ...prevState, major: value }));
        }else if (name === "city") {
            this.setState((prevState) => ({ ...prevState, city: value }));
        }else if (name === "proveimage") {
            this.setState((prevState) => ({ ...prevState, proveimage: value }));
        }
    };
    
    render(){
        return (
            <div>
                <HeadButton />
                <Wrapper onSubmit={this.Signed}>
                    <Teasignname state={this.state} handleChange={this.handleChange}/>
                    <Teasignsubject state={this.state} handleChange={this.handleChange}/>
                    <Teasigngender state={this.state} handleChange={this.handleChange}/>
                    <Teasignpay state={this.state} handleChange={this.handleChange}/>
                    <Teasignregion state={this.state} handleChange={this.handleChange}/>
                    <Teasigncontact state={this.state} handleChange={this.handleChange}/>
                    <Teasignattend state={this.state} handleChange={this.handleChange}/>
                    <Teasignuni state={this.state} handleChange={this.handleChange}/>
                    <Teasignprove state={this.state} handleChange={this.handleChange}/>
                    <Teasignintro state={this.state} handleChange={this.handleChange}/>
                    <Teasignphone state={this.state} handleChange={this.handleChange}/>
                    <Teasignpassword state={this.state} handleChange={this.handleChange}/>
                    <Teasignemail state={this.state} handleChange={this.handleChange}/>

                    <SignBtns>
                        <SignBtn type="submit" value="확인"></SignBtn>
                        <SignBtn type="reset" value="취소"></SignBtn>
                    </SignBtns>
                </Wrapper>
                
            </div>
        );
    }
}

export default Teasign;