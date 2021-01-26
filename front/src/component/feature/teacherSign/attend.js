import React from "react"

class Teasignattend extends React.Component{
    render(){
        return (
            <label className="teaAttend">
                현재 대학에 재학중 이신가요?
                <input type="radio" name="teaAttend" value="재학중"></input>재학중
                <input type="radio" name="teaAttend" value="졸업"></input>졸업
            </label>
        );
    }
}

export default Teasignattend;