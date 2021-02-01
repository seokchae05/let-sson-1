import React from "react";

class Checkpay extends React.Component{
    render(){
        return(
            <div>
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
            </div>

        );
    }
}


export default Checkpay;