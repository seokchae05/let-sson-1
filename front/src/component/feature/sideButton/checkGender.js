import React from "react";


class Checkgender extends React.Component{
    render(){
        return(
            <p>
                성별
                <div>
                    남성
                    <input type="radio" name="chk_info" value="남성"></input>
                </div>
                <div>
                    여성
                <input type="radio" name="chk_info" value="남성"></input>
                </div>
            </p>
        );
    }
}

export default Checkgender;