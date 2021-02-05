import React from "react"
import { Link } from "react-router-dom";
import HeadButtons from "../component/layout/header/header";
import SidebarMyPs from "../component/shared/myPageS/sidebarMyPs";
import styled from "styled-components";
import Stusignname_my from "../component/feature/myPageSedit/name_my";
import Stusignisstu_my from "../component/feature/myPageSedit/isstudent_my";
import Stusignage_my from "../component/feature/myPageSedit/age_my";
import Stusigngender_my from "../component/feature/myPageSedit/gender_my";
import Stusignpropergender_my from "../component/feature/myPageSedit/propergender_my";
import Stusignregion_my from "../component/feature/myPageSedit/region_my";
import Stusignsubject_my from "../component/feature/myPageSedit/subject_my";
import Stusignpay_my from "../component/feature/myPageSedit/pay_my";
import Stusigncontact_my from "../component/feature/myPageSedit/contact_my";
import Stusignphone_my from "../component/feature/myPageSedit/phone_my";
import Stusignemail_my from "../component/feature/myPageSedit/email_my";
import Stusignpassword_my from "../component/feature/myPageSedit/password_my";

const Wrapper = styled.div`
    margin: 0;   
    padding : 0; 
    width:100%;
    height:100%;
    box-sizing: border-box;
    background-color : #F6F4F3;
    padding-top : 30px;
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
class MypageSe extends React.Component{
    render(){
        return(
            <div>
                <HeadButtons/>
                <SidebarMyPs/>
                <Wrapper>
                학생
                    <Wrapper2>
                        <Stusignname_my />
                        <Stusignisstu_my />
                        <Stusignage_my />
                        <Stusigngender_my />
                        <Stusignpropergender_my />
                        <Stusignregion_my />
                        <Stusignsubject_my />
                        <Stusignpay_my/>
                        <Stusigncontact_my />
                        <Stusignphone_my />
                        <Stusignpassword_my />
                        <Stusignemail_my />
                        <Buttonfame>
                            <Link to = "/mypages/edit">
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



export default MypageSe;