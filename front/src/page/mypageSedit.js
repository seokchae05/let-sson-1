import React from "react"
import { Link } from "react-router-dom";
import HeadButtons from "../component/layout/header/header";
import SidebarMyPs from "../component/shared/myPageS/sidebarMyPs";
import styled from "styled-components";
import StusignnameMy from "../component/feature/myPageSedit/name_my";
import StusignisstuMy from "../component/feature/myPageSedit/isstudent_my";
import StusignageMy from "../component/feature/myPageSedit/age_my";
import StusigngenderMy from "../component/feature/myPageSedit/gender_my";
import StusignpropergenderMy from "../component/feature/myPageSedit/propergender_my";
import StusignregionMy from "../component/feature/myPageSedit/region_my";
import StusignsubjectMy from "../component/feature/myPageSedit/subject_my";
import StusignpayMy from "../component/feature/myPageSedit/pay_my";
import StusigncontactMy from "../component/feature/myPageSedit/contact_my";
import StusignphoneMy from "../component/feature/myPageSedit/phone_my";
import StusignpasswordMy from "../component/feature/myPageTedit/university_my";
import StusignemailMy from "../component/feature/myPageSedit/email_my";


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

class MypageSe extends React.Component{
    render(){
        return(
            <div>
                <HeadButtons/>
                <SidebarMyPs/>
                <Wrapper>
                학생
                <StusignnameMy />
                <StusignisstuMy />
                <StusignageMy />
                <StusigngenderMy />
                <StusignpropergenderMy />
                <StusignregionMy />
                <StusignsubjectMy />
                <StusignpayMy/>
                <StusigncontactMy />
                <StusignphoneMy />
                <StusignpasswordMy />
                <StusignemailMy />
                <Buttonfame>
                    <Link to = "/mypages/edit">
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



export default MypageSe;