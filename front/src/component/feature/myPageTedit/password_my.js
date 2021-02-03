import React from "react";
import styled from "styled-components";

const Box = styled.div`
    padding-top : 10px;
    padding-bottom : 20px;
    padding-left : 20px;
    display : flex;
    flex-direction: column;
    justify-content: center;
    margin-left : 20%;
    margin-right : 20%;
    border-top : solid 1px black;
    background : white;
    margin-top : 30px;
`;

const Text = styled.div`
    margin-top : 10px;
    margin-bottom : 20px;
`;


const InputBox = styled.input`
    margin-right : 0;
    width : 55%;
    padding-right : 40%;
    padding-bottom : 20px;
    margin-bottom : 10px;
`;


class Teasignpassword_my extends React.Component{
    constructor(props){
        super(props);
        this.state = { password1: "", password2: "" , check:true};
    };

    password1set = (e) =>{
        this.setState({password1 : e.target.value})
    }

    password2set = (e) =>{
        this.setState({password2 : e.target.value})
    }

    check = () =>{
        if(this.state.password1 !== this.state.password2){
            console.log("비밀번호가 일치하지 않습니다.")
        }
    }

    render(){
        return (
            <Box>
                <Text>비밀번호를 입력해주세요</Text>
                <label className="stuPassword">
                <InputBox type="password" onChange={this.password1set} placeholder="비밀번호"></InputBox></label>
                <label className="stuPassword">
                <InputBox type="password" onChange={this.password2set}placeholder="비밀번호 확인"></InputBox></label>
            </Box>
        );
    }
}

export default Teasignpassword_my;