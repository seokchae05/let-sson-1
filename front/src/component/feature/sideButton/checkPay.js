import React from "react";

class Checkpay extends React.Component{
    render(){
        return(
            <p>
            금액
            <div>
            40만원 이상<input type="radio" name="chk_info" value="40만원 이상"></input>
            </div>
            <div>
            30만원 이상<input type="radio" name="chk_info" value="30만원 이상"></input>
            </div>
            <div>
            20만원 이상<input type="radio" name="chk_info" value="20만원 이상"></input>
            </div>
            <div>
            10만원 이상<input type="radio" name="chk_info" value="10만원 이상"></input>
            </div>
            </p>
        );
    }
}


export default Checkpay;