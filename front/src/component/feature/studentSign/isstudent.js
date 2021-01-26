import React from "react"

class Stusignisstu extends React.Component{
    render(){
        return (
            <div>
                학생이신가요?
                <input type="radio" name="isstu" value="학생"></input>학생
                <input type="radio" name="isstu" value="학부모"></input>학부모
            </div>
        );
    }
}

export default  Stusignisstu;