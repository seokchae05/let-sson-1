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


class Stusign extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            isstu : "",
            age : 0,
            stugender : "",
            stupropergender : "",
            pay : 0,
            tel : "",
            password : "",
            passcheck : "",
            email : "",
            contact : ""
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
        }else if (name === "isstu") {
            this.setState((prevState) => ({ ...prevState, isstu: value }));
        }else if (name === "age") {
            this.setState((prevState) => ({ ...prevState, age: value }));
        }else if (name === "stugender") {
            this.setState((prevState) => ({ ...prevState, stugender: value }));
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
        }
    };

    render(){
        return (
            <div>
                <HeadButton />
                <Wrapper onSubmit={this.Signed}>
                    <Stusignname state={this.state} handleChange={this.handleChange} />
                    <Stusignisstu state={this.state} handleChange={this.handleChange}/>
                    <Stusignage state={this.state} handleChange={this.handleChange}/>
                    <Stusigngender state={this.state} handleChange={this.handleChange}/>
                    <Stusignpropergender state={this.state} handleChange={this.handleChange}/>
                    <Stusignregion state={this.state} handleChange={this.handleChange}/>
                    <Stusignsubject state={this.state} handleChange={this.handleChange}/>
                    <Stusignpay state={this.state} handleChange={this.handleChange}/>
                    <Stusigncontact state={this.state} handleChange={this.handleChange}/>
                    <Stusignphone state={this.state} handleChange={this.handleChange}/>
                    <Stusignpassword state={this.state} handleChange={this.handleChange}/>
                    <Stusignemail state={this.state} handleChange={this.handleChange}/>

                    <SignBtns>
                        <SignBtn type="submit" value="확인"></SignBtn>
                        <SignBtn type="reset" value="취소"></SignBtn>
                    </SignBtns>
                </Wrapper>
            </div>

        );
    }
}

export default Stusign;