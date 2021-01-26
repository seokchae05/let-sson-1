import React from "react"

class Stusigncontact extends React.Component{
    render(){
        return (
            <div>
                화상강의가 가능한 수업을 원하시나요?
                <input type="radio" name="stucontact"  value="아니오"></input>아니오
                <input type="radio" name="stucontact"  value="예" ></input>예
            </div>
        );
    }
}

export default  Stusigncontact;