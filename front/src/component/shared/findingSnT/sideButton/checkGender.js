import React from "react";


class Checkgender extends React.Component{
    render(){
        return(
            <div>
                성별
                <div>
                    <input type="radio" name="chk_info2" value="남성"></input>
                    남성
                </div>
                <div>
                <input type="radio" name="chk_info2" value="남성"></input>
                여성
                </div>
            </div>
        );
    }
}

export default Checkgender;