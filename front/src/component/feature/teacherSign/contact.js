import React from "react"

class Teasigncontact extends React.Component{
    render(){
        return (
            <div>
                <label className="teaContact">
                    화상강의 진행이 가능하신가요?
                    <input type="radio" name="teacontact" value="예"></input>예
                    <input type="radio" name="teacontact" value="아니오"></input>아니오
                </label>
            </div>
        );
    }
}

export default  Teasigncontact;