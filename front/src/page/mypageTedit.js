import React from "react"
import { Link } from "react-router-dom";
import HeadSaveNrefs from "../component/layout/header/header";
import SidebarMyPt from "../component/shared/myPageT/sidebarMyPt";
import styled from "styled-components";
import Teasignname_my from "../component/feature/myPageTedit/name_my";
import Teasignsubject_my from "../component/feature/myPageTedit/subject_my";
import Teasignregion_my from "../component/feature/myPageTedit/region_my";
import Teasignpay_my from "../component/feature/myPageTedit/pay_my";
import Teasigngender_my from "../component/feature/myPageTedit/gender_my";
import Teasigncontact_my from "../component/feature/myPageTedit/contact_my";
import Teasignattend_my from "../component/feature/myPageTedit/attend_my";
import Teasignprove_my from "../component/feature/myPageTedit/proveimage_my";
import Teasignintro_my from "../component/feature/myPageTedit/intro_my";
import Teasignphone_my from "../component/feature/myPageTedit/phone_my";
import Teasignpassword_my from "../component/feature/myPageTedit/password_my";
import Teasignemail_my from "../component/feature/myPageTedit/email_my";
import Teasignuni_my from "../component/feature/myPageTedit/university_my";

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
class MypageTe extends React.Component{
    render(){
        return(
            <div>
                <HeadSaveNrefs/>
                <SidebarMyPt/>
                <Wrapper>
                선생님
                <Teasignname_my />
                <Teasignsubject_my />
                <Teasigngender_my />
                <br></br>
                <Teasignpay_my />
                <Teasignregion_my />
                <Teasigncontact_my />
                <Teasignattend_my />
                <Teasignuni_my />
                <Teasignprove_my />
                <Teasignintro_my />
                <Teasignphone_my />
                <Teasignpassword_my />
                <Teasignemail_my />
                <Buttonfame>
                    <Link to = "/mypaget/edit">
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


export default MypageTe;