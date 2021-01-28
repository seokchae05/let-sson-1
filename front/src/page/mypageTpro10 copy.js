import React from "react"
import { Link } from "react-router-dom";
import SubmitT from "../component/feature/card/submitT";
import HeadButtons from "../component/layout/header";
import SidebarMyP from "../component/layout/sidebarMyP";

class MypageTp extends React.Component{
    render(){
        return(
            <container>
                <HeadButtons/>
                <SidebarMyP/>
                <SubmitT/>
                <Link to = "/mypaget/profile">
                    <button onClick={() => alert('저장이 완료되었습니다.')}>저장하기</button>
                </Link>
                    <button name = "refresh">전부 지우기</button>
            </container>
        )
    }
}


export default MypageTp;