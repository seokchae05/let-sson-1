import React from "react"
import { Link } from "react-router-dom";
import Teasignattend from "../component/feature/teacherSign/attend";
import Teasigncontact from "../component/feature/teacherSign/contact";
import Teasignemail from "../component/feature/teacherSign/email";
import Teasigngender from "../component/feature/teacherSign/gender";
import Teasignintro from "../component/feature/teacherSign/intro";
import Teasignname from "../component/feature/teacherSign/name";
import Teasignpassword from "../component/feature/teacherSign/password";
import Teasignpay from "../component/feature/teacherSign/pay";
import Teasignphone from "../component/feature/teacherSign/phone";
import Teasignprove from "../component/feature/teacherSign/proveimage";
import Teasignregion from "../component/feature/teacherSign/region";
import Teasignsubject from "../component/feature/teacherSign/subject";
import Teasignuni from "../component/feature/teacherSign/university";
import HeadSaveNrefs from "../component/layout/header";
import SidebarMyPt from "../component/layout/sidebarMyPt";
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
class MypageTe extends React.Component{
    render(){
        return(
            <div>
                <HeadSaveNrefs/>
                <SidebarMyPt/>
                <Wrapper>
                선생님
                <Teasignname />
                <Teasignsubject />
                <Teasigngender />
                <br></br>
                <Teasignpay />
                <Teasignregion />
                <Teasigncontact />
                <Teasignattend />
                <Teasignuni />
                <Teasignprove />
                <Teasignintro />
                <Teasignphone />
                <Teasignpassword />
                <Teasignemail />
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