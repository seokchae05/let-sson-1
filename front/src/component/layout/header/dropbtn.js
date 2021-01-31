import React from "react";
import { Link } from "react-router-dom";

class Dropbtn extends React.Component {
  render() {
    return (
      <div className="dropdown">
        <button className="dropbtn">회원가입</button>
        <div className="dropdown-content">
          <Link to="/stusign">학생가입</Link>
          <Link to="/teasign">선생님가입</Link>
        </div>
      </div>
    );
  }
}

export default Dropbtn;
