import React from "react"
import { Link } from "react-router-dom";
import SubmitS from "../component/feature/card/submitS";
import HeadButtons from "../component/layout/header";
import SidebarMyPs from "../component/layout/sidebarMyPs";


class MypageSp extends React.Component{
    render(){
        return(
            <div>
                <HeadButtons/>
                <SidebarMyPs/>
                학생
                <SubmitS/>
                <Link to = "/mypages/profile">
                    <button onClick={() => alert('저장이 완료되었습니다.')}>저장하기</button>
                </Link>
                    <button name = "refresh">전부 지우기</button>
            </div>
        )
    }
}



export default MypageSp;