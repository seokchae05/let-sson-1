import React from "react"
import { Link } from "react-router-dom";
import SubmitS from "../component/feature/card/submitS";
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
import HeadButtons from "../component/layout/header";
import SidebarMyPs from "../component/layout/sidebarMyPs";


class MypageSe extends React.Component{
    render(){
        return(
            <div>
                <HeadButtons/>
                <SidebarMyPs/>
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
                <Link to = "/mypages/edit">
                    <button onClick={() => alert('저장이 완료되었습니다.')}>저장하기</button>
                </Link>
                    <button name = "refresh">전부 지우기</button>
            </div>
        )
    }
}



export default MypageSe;