import React from "react"
import { Link } from "react-router-dom";
import Stusignage from "../component/feature/studentSign/age";
import Stusigncontact from "../component/feature/studentSign/contact";
import Stusignemail from "../component/feature/studentSign/email";
import Stusigngender from "../component/feature/studentSign/gender";
import Stusignisstu from "../component/feature/studentSign/isstudent";
import Stusignname from "../component/feature/studentSign/name";
import Stusignpassword from "../component/feature/studentSign/password";
import Stusignpay from "../component/feature/studentSign/pay";
import Stusignphone from "../component/feature/studentSign/phone";
import Stusignpropergender from "../component/feature/studentSign/propergender";
import Stusignregion from "../component/feature/studentSign/region";
import Stusignsubject from "../component/feature/studentSign/subject";
import HeadButtons from "../component/layout/header/header";
import SidebarMyPs from "../component/shared/myPageS/sidebarMyPs";
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

class MypageSe extends React.Component{
    render(){
        return(
            <div>
                <HeadButtons/>
                <SidebarMyPs/>
                <Wrapper>
                학생
                <Stusignname />
                <Stusignisstu />
                <Stusignage />
                <Stusigngender />
                <Stusignpropergender />
                <Stusignregion />
                <Stusignsubject />
                <Stusignpay/>
                <Stusigncontact />
                <Stusignphone />
                <Stusignpassword />
                <Stusignemail />
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