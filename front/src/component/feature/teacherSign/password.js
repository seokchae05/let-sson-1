import React from "react";

class Teasignpassword extends React.Component{
    constructor(props){
        super(props);
        this.state = { password1: "", password2: "" , check:true};
    };

    password1set = (e) =>{
        this.setState({password1 : e.target.value})
    }

    password2set = (e) =>{
        this.setState({password2 : e.target.value})
    }

    check = () =>{
        if(this.state.password1 !== this.state.password2){
            console.log("비밀번호가 일치하지 않습니다.")
        }
    }

    render(){
        return (
            <div>
                <label className="stuPassword">비밀번호를 입력해주세요
                <input type="password" onChange={this.password1set}></input></label>
                <label className="stuPassword">비밀번호 확인
                <input type="password" onChange={this.password2set}></input></label>
                <button onClick={this.check}> 확인 </button>
            </div>
        );
    }
}

export default Teasignpassword;