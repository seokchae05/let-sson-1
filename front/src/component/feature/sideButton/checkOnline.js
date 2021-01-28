import React from "react";

class CheckOnline extends React.Component{
    render(){
        return(
            <div>
            화상강의 여부
            <div>
                예
                <input type="radio" name="chk_info" value="예"></input>
            </div>
            <div>
                아니오
                <input type="radio" name="chk_info" value="아니오"></input>
            </div>
            </div>

        );
    }
}

export default CheckOnline;