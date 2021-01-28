import React from "react";
import HeadButton from "../component/layout/header"
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    position: absolute;
    width: 500px; 
    height: 180px; 
    margin-left: -200px; 
    margin-top: -90px; 
    left : 45%;
    top: 50%; 
    padding-top : 30px;
    display : flex;
    flex-direction: column;
    align-items : center;
    justify-content: center;
`;
const SuccessText = styled.div`
    padding-right : 30px;
    margin-bottom : 5%;
`;

const SuccessBtns = styled.div`
    margin-top: 10px;
`;

const SuccessBtn1 = styled.button`
    margin-right: 100px;
    border : 1px solid black;
    padding : 0 15px 0 15px;
`;

const SuccessBtn2 = styled.button`
    margin-right: 0px;
    border : 1px solid black;
    padding : 0 15px 0 15px;
`;

class Loginsuccess extends React.Component{
    render(){
        return(
            <div>
                <HeadButton />
                <Wrapper>
                    <SuccessText>
                        로그인이 완료 되었습니다.
                    </SuccessText>
                    <SuccessBtns>
                        <Link to="/findteacher">
                            <SuccessBtn1>선생님 찾으러가기</SuccessBtn1>
                        </Link>
                        <Link to="/findstudent">
                            <SuccessBtn2>학생 찾으러가기</SuccessBtn2>
                        </Link>
                        
                    </SuccessBtns>
                </Wrapper>
            </div>
        );
    }
}

export default Loginsuccess;