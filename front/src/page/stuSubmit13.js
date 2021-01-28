import React from "react";
import SubmitS from "../component/feature/card/submitS";
import HeadButtons from "../component/layout/header";
import { Link } from 'react-router-dom';

class StuSubmit extends React.Component{
    render(){
        return(
            <div>
            <HeadButtons/>
            <SubmitS/>
            <Link to ="/findstudent">
                    <button onClick={() => alert('신청완료')} >신청하기</button>
                </Link>
            </div>
        )
    }
}



export default StuSubmit;