import React from "react";
import HeadButton from "../component/layout/header/header"
import styled from "styled-components";

const Wrapper = styled.div`
    background-color : #F6F4F3;
    position: absolute;
    width: 100%; 
    height: 90%; 
    display : flex;
    flex-direction: column;
    align-items : center;
    justify-content: center;
`;

const Form = styled.form`
    position: absolute;
    width: 500px; 
    height: 180px; 
    margin-left: -200px; 
    margin-top: -90px; 
    left : 50%;
    top: 40%; 
    padding-top : 30px;
    display : flex;
    flex-direction: column;
    justify-content: center;

`;
const FindText = styled.div`
    margin-bottom : 30px;
    padding-right : 10px;
`;
const SuccessBtn = styled.input`
    width : 70%;
    height:50px;
    color: white;
    font-size: 16px;
    border: none;
    margin-top : 1%;
    margin-left : 10%;
    border-radius : 50px;
    background: linear-gradient(to right, rgba(104,104,104,1) 18%,rgba(43,62,104,1) 70%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#686868', endColorstr='#2b3e68',GradientType=1 ); /* IE6-9 */
`;
const LogText1 = styled.span`
    text-align : right;
    padding-right : 15%;
    margin-left : 35px;
`;
const LogText2 = styled.span`
    text-align : right;
    padding-right : 8%;
    margin-left : 35px;
`;
const FindInput = styled.input`
    background-color : #F6F4F3;
    border : 1px solid black;
    margin-right : 0;
    width : 55%;
    height : 100%;
`;
class Findpassword extends React.Component{
    Confirm = (e) =>{
        alert("당신의 아이디는 {}, 비밀번호는 {} 입니다.");
    }

    render(){
        return(
            <div>
                <HeadButton />
                <Wrapper>
                    <Form>
                        <FindText>
                                <label className="tofindtel">
                                    <LogText1>이름</LogText1>
                                    <FindInput type="text"></FindInput>
                                </label>
                            </FindText>
            
                            <FindText>
            
                                <label className="tofindtel">
                                    <LogText2>전화번호</LogText2>
                                    <FindInput type="text" placeholder="숫자로만 입력해주세요"></FindInput>
                                </label>
                            </FindText>
            
                            <SuccessBtn type="submit" value="확인" onClick={this.Confirm}></SuccessBtn>
                    </Form>
                </Wrapper>
                

            </div>
        );
    }
}

export default Findpassword;