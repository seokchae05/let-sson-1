import React from "react"
import { Link } from 'react-router-dom';
import Dropbtn from "../feature/header/dropbtn";
import './header.css'

function HeadButtons() {
    return(
        <header>
            <div className="head">
                <div className= "logoimage">
                    <Link to="/">
                        <button>로고(메인화면 이동)</button>
                    </Link>
                </div>
                <div className = "HeadButtons">
                    <Link to="/findstudent">
                        <button>학생찾기</button>
                    </Link>
                    <Link to="/findteacher">
                        <button>선생님찾기</button>
                    </Link>
                    <Dropbtn />
                    <Link to="/login">
                        <button>로그인</button>
                    </Link>
                </div>
            </div>

            <hr></hr>
        </header>
    );
}


export default HeadButtons;

