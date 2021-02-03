import React from "react";

class CheckOnline extends React.Component{
    render(){
        return(
            <div>
            화상강의 여부
            <div>
                <input type="radio" name="chk_info" value="예"></input>
                예
            </div>
            <div>
                <input type="radio" name="chk_info" value="아니오"></input>
                아니오
            </div>
            </div>

        );
    }
}

export default CheckOnline;