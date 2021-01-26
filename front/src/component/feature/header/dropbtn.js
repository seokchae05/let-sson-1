import React from "react"

class Dropbtn extends React.Component{
    render(){
        return(        
            <div className="dropdown">
                <button className="dropbtn">회원가입</button>
                <div className="dropdown-content">
                    <a href="http://localhost:3000/stusign">학생가입</a>                  
                    <a href="http://localhost:3000/teasign">선생님가입</a>
                </div>
            </div>);
    }
}


export default Dropbtn;