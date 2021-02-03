import React from "react";

class Checkpay extends React.Component{
    render(){
        return(
            <div>
            금액
            <div>
            <input type="radio" name="chk_info" value="40만원 이상"></input>40만원 이상
            </div>
            <div>
            <input type="radio" name="chk_info" value="30만원 이상"></input> 30만원 이상
            </div>
            <div>
            <input type="radio" name="chk_info" value="20만원 이상"></input>20만원 이상
            </div>
            <div>
            <input type="radio" name="chk_info" value="10만원 이상"></input> 10만원 이상
            </div>
            </div>

        );
    }
}


export default Checkpay;