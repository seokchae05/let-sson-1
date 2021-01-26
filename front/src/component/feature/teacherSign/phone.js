import React from "react"

class Teasignphone extends React.Component{
    render(){
        return (
            <div>
               <label className="stuTel">휴대폰 번호를 입력해주세요 (아이디로 사용됩니다)
               <input type="tel" ></input></label>
            </div>
        );
    }
}

export default Teasignphone;