import React from "react";
import { Link } from "react-router-dom";
import SubmitT from "../component/feature/card/submitT";
import HeadButtons from "../component/layout/header";


class TeaSubmit extends React.Component{
    render(){
        return(
            <div>
            <HeadButtons/>
            <SubmitT/>
            <Link to ="/findteacher">
                    <button onClick={() => alert('신청완료')} >신청하기</button>
                    </Link>
            </div>
        )
    }
}



export default TeaSubmit;