import React from "react"

class Stusignpropergender extends React.Component{
    render(){
        return (
            <div>
                선호하는 선생님의 성별이 어떻게 되시나요?
                <input type="radio" name="stupropergender" value="남성"></input>남성
                <input type="radio" name="stupropergender" value="여성"></input>여성
            </div>
        );
    }
}

export default  Stusignpropergender;