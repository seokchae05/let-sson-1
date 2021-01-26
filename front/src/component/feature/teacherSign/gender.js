import React from "react"

class Teasigngender extends React.Component{
    render(){
        return (
            <label className="teaJen">
                성별이 어떻게 되시나요?
                <input type="radio" name="stugender" value="남성"></input>남성
                <input type="radio" name="stugender" value="여성"></input>여성
            </label>
        );
    }
}

export default  Teasigngender;