import React from "react"

class Teasignuni extends React.Component{
    render(){
        return (
            <div>
               <label className="teaName">
                   재학/졸업한 대학과 학과를 입력해 주세요
                   <input type="text" placeholder="학교"></input>
                   <input type="text" placeholder="학과"></input>
                </label>
            </div>
        );
    }
}

export default Teasignuni;