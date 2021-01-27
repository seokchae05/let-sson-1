import React from "react";

class Withdraw extends React.Component{
    render(){
        return(
            <div>
                <button onClick ={() => window.confirm('정말로 탈퇴하시겠습니까?')}>탈퇴하기</button>
            </div>
        )
    }
}

export default Withdraw;