import React from "react";
import HeadButton from "../component/layout/header"

class Loginsuccess extends React.Component{
    render(){
        return(
            <div>
                <HeadButton />
                로그인이 완료 되었습니다.
                <button>선생님 찾으러가기</button>
                <button>학생 찾으러가기</button>
            </div>
        );
    }
}

export default Loginsuccess;