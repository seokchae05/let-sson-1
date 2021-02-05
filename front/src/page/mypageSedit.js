import React,{useContext} from "react"
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
import axios from "axios";

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
    state = {
        name: "학생 defalt값입니다.",
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
                <HeadButtons />
                <SidebarMyPs/>
                <Wrapper>
                   학생
                    <Wrapper2>
                      <StusignnameMy childMessage ={this.state.name}/>
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
                    </Wrapper2>
                </Wrapper>
            </div>
        )
    }
}



export default MypageSe;