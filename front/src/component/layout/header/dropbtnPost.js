import React from "react";
import { useHistory } from "react-router-dom";

const DropbtnPost = () => {

  const role = localStorage.getItem("role");
  const history = useHistory();

  const SendUrl = (e) =>{
    if(role ==="teacher"){
      history.push("/sendpost/tea");
    }else if(role ==="student"){
      history.push("/sendpost/stu");
    }
  };

  const RecieveUrl = (e) =>{
    if(role ==="teacher"){
      history.push("/recievepost/tea");
    }else if(role ==="student"){
      history.push("/recievepost/stu");
    }
  };

    return (
      <div className="dropdown">
        <button className="dropbtn">내역함</button>
        <div className="dropdown-content">
          <button onClick={SendUrl}>보낸내역함</button>
          <button onClick={RecieveUrl}>받은내역함</button>
        </div>
      </div>
    );
}

export default DropbtnPost;
