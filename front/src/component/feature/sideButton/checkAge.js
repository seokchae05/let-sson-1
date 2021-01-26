import React from "react";


class Checkage extends React.Component{
    render(){
        return(
            <p>
            연령대
            <div>
            40세 이상<input type="radio" name="chk_info" value="40세 이상"></input>
            </div>
            <div>
            30세 이상<input type="radio" name="chk_info" value="30세 이상"></input>
            </div>
            <div>
            20세 이상<input type="radio" name="chk_info" value="20세 이상"></input>
            </div>
            <div>
            그 외<input type="radio" name="chk_info" value="그 외"></input>
            </div>
            </p>
        )
    }
}


export default Checkage;