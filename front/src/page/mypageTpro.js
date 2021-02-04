import React from "react"
import { Link } from "react-router-dom";
import SubmitT from "../component/feature/myPageTpro/submitT";
import HeadButtons from "../component/layout/header/header";
import SidebarMyPt from "../component/shared/myPageT/sidebarMyPt";
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 0;   
    padding : 0; 
    width:100%;
    height:100%;
    box-sizing: border-box;
    background-color : #F6F4F3;
`;
const SaveNref = styled.button`
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
`

const Buttonfame = styled.div`
    margin-left: 50%;
    margin-top: 20px;
`
const Wrapper2 = styled.div`
    width : 85%;
`;

class MypageTp extends React.Component{
    render(){
        return(
            <div>
                <HeadButtons/>
                <SidebarMyPt/>
                <Wrapper>
                선생님
                    <Wrapper2>
                        <SubmitT/>
                        <Buttonfame>
                        <Link to = "/mypaget/profile">
                                <SaveNref onClick={() => alert('저장이 완료되었습니다.')}>
                                    저장하기
                                </SaveNref>
                            </Link>
                            <SaveNref name = "refresh">전부 지우기</SaveNref>
                        </Buttonfame>                        
                    </Wrapper2>
                </Wrapper>
            </div>
        )
    }
}


export default MypageTp;