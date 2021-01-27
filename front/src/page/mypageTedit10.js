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
import HeadButtons from "../component/layout/header";
import SidebarMyP from "../component/layout/sidebarMyP";

class MypageTe extends React.Component{
    render(){
        return(
            <container>
                <HeadButtons/>
                <SidebarMyP/>
                <div>
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
                </div>
                <Link to = "/mypaget/edit">
                    <button onClick={() => alert('저장이 완료되었습니다.')}>저장하기</button>
                </Link>
                    <button name = "refresh">전부 지우기</button>
            </container>
        )
    }
}


export default MypageTe;