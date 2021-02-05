import React from "react"
import { Link } from "react-router-dom";
import HeadSaveNrefs from "../component/layout/header/header";
import SidebarMyPt from "../component/shared/myPageT/sidebarMyPt";
import styled from "styled-components";
import TeasignnameMy from "../component/feature/myPageTedit/name_my";
import TeasignsubjectMy from "../component/feature/myPageTedit/subject_my";
import TeasignregionMy from "../component/feature/myPageTedit/region_my";
import TeasignpayMy from "../component/feature/myPageTedit/pay_my";
import TeasigngenderMy from "../component/feature/myPageTedit/gender_my";
import TeasigncontactMy from "../component/feature/myPageTedit/contact_my";
import TeasignattendMy from "../component/feature/myPageTedit/attend_my";
import TeasignproveMy from "../component/feature/myPageTedit/proveimage_my";
import TeasignintroMy from "../component/feature/myPageTedit/intro_my";
import TeasignphoneMy from "../component/feature/myPageTedit/phone_my";
import TeasignpasswordMy from "../component/feature/myPageTedit/password_my";
import TeasignemailMy from "../component/feature/myPageTedit/email_my";
import TeasignuniMy from "../component/feature/myPageTedit/university_my";
import axios from "axios";

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
    state = {
        name: "선생님 defalt값입니다.",
        subject: "english",
        location: "incheon",
        
  
    }
    getData = async () => {
        const data = await axios.get("http://www.google.com")//학생 회원가입 데이터
        this.setState(data);
    }

    componentDidMount() {
        this.getData();
      }
    render(){
        return(
            <div>
                <HeadSaveNrefs/>
                <SidebarMyPt/>
                <Wrapper>
                선생님
                <TeasignnameMy childMessage = {this.state.name}/>
                <TeasignsubjectMy />
                <TeasigngenderMy />
                <br></br>
                <TeasignpayMy />
                <TeasignregionMy />
                <TeasigncontactMy />
                <TeasignattendMy />
                <TeasignuniMy />
                <TeasignproveMy />
                <TeasignintroMy />
                <TeasignphoneMy />
                <TeasignpasswordMy />
                <TeasignemailMy />
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