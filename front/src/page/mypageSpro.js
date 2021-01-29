import React from "react"
import { Link } from "react-router-dom";
import SubmitS from "../component/feature/card/submitS";
import HeadButtons from "../component/layout/header";
import SidebarMyPs from "../component/layout/sidebarMyPs";
import styled from "styled-components";

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
    render(){
        return(
            <div>
                <HeadButtons/>
                <SidebarMyPs/>
                <Wrapper>
                학생
                <SubmitS/>
                <Buttonfame>
                    <Link to = "/mypages/profile">
                        <SaveNref onClick={() => alert('저장이 완료되었습니다.')}>
                            저장하기
                        </SaveNref>
                    </Link>
                    <SaveNref name = "refresh">전부 지우기</SaveNref>
                </Buttonfame>
                </Wrapper>
            </div>
        )
    }
}



export default MypageSp;