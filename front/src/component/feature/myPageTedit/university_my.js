import React from "react";
import styled from "styled-components";

const Box = styled.div`
margin-top : 30px;
padding-top: 10px;
padding-bottom: 20px;
padding-left: 20px;
display: flex;
flex-direction: column;
justify-content: center;
margin-left : 25%;
margin-right : 25%;
border-top : solid 3px #010440;
background: white;
`;

const Text = styled.div`
    margin-top : 10px;
    margin-bottom : 20px;
`;


const InputBox = styled.input`
border : 0.05em solid #010440;
    margin-right : 0;
    width : 55%;
    padding-right : 40%;
    padding-bottom : 20px;
    margin-bottom : 10px;
`;


class TeasignuniMy extends React.Component{
    render(){
        return (
            <Box>
                <Text>재학/졸업한 대학과 학과를 입력해주세요</Text>
                <label className="TeaPassword">
                <InputBox type="password" onChange={this.password1set} placeholder="학교"></InputBox></label>
                <label className="TeaPassword">
                <InputBox type="password" onChange={this.password2set}placeholder="학과"></InputBox></label>
            </Box>
        );
    }
}

export default TeasignuniMy;