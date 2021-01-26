import React from "react";
import { Link } from 'react-router-dom';
import HeadButton from "../component/layout/header"

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = { phone: "", password: "" };
    };

    PhoneInput = (e) =>{
        this.setState( {phone : e.target.value} )
    }
    
    PasswordInput = (e) =>{
        this.setState( {password : e.target.value} )
    }
    Loged = (e) => {
        console.log(this.state.phone);
        console.log(this.state.password);
    }
    
    render(){
        return(
            <div>
                <HeadButton />

                <label className="phoneNum" >휴대폰번호<input type="text" onChange={this.PhoneInput} placeholder="숫자만 입력"></input></label>
                <br></br>
                <label className="password">비밀번호<input type="password" onChange={this.PasswordInput} placeholder="8글자 이상"></input></label>  
                <br></br>
                <Link to="/loginsuccess">
                    <button onClick={this.Loged}>확인</button>
                </Link>
                <input type="reset" value="취소"></input>
                <br></br>
                <br></br>
                <br></br>
                <div>계정이 없으시다면?</div>
                <Link to="/stusign">
                    <button>학생가입</button>
                </Link>
                <Link to="/teasign">
                    <button>선생님가입</button>
                </Link>

                <br></br>
                <br></br>
                <br></br>
                <div>비밀번호를 잊으셨다면?</div>
                <Link to="/findpassword">
                    <button>비밀번호찾기</button>
                </Link> 
            </div>
        );
    }
}

export default Login;